"use client";
import React, { useEffect, useState } from "react";
import styles from "@/components/Settings/SettingsCSS/movement.module.css";
import CodeContainer from "./codeContainer";
import { useSelector } from "react-redux";
const codesGen = require("voucher-code-generator");

const MovementCodes = () => {
  const userData = useSelector((state) => state.Database.value);
  const [codes, setCodes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setCodes([...userData.movementCodes]);
  }, [userData]);
  const formatDate = (milliseconds) => {
    const date = new Date(milliseconds);
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  const generateCode = async () => {
    const code = codesGen
      .generate({
        length: 5,
        count: 1,
        prefix: "SCNA-",
        charset: "alphabetic",
      })[0]
      .toUpperCase();

    const milliseconds = Date.now();
    const data = {
      code,
      date: milliseconds,
    };
    setLoading(true);
    fetch("/api/set-movement-codes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        key: userData.school_code,
        data,
      }),
    }).then(data => data ? data.json() : null)
    .then(data => {
      if(data === "Code Generated"){
        setCodes((prep) => [data, ...prep]);
      }
      setLoading(false);
    })

    
    
  };

  return (
    <body className={styles.container}>
      <div className={styles.cardContainer}>
        {codes
          .sort((a, b) => b.date - a.date)
          .slice(0, 16)
          .map((item, index) => {
            return (
              <span key={index + item.code}>
                <CodeContainer
                  code={item.code}
                  date={formatDate(item.date)}
                  color={index}
                />
              </span>
            );
          })}
      </div>
      <div className={styles.btn} onClick={generateCode}>
        {loading ? <p>Generating...</p> : <p>Generate New</p>}
      </div>
    </body>
  );
};

export default MovementCodes;
