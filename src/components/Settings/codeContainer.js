"use client"
import React, { useState } from "react";
import styles from "@/components/Settings/SettingsCSS/movement.module.css";
import { useDispatch, useSelector } from "react-redux";
import { removeMovementCode } from "../shared/DatabaseSlice";
const CodeContainer = ({ code, date, color, data }) => {
  const [show, setShow] = useState(false)
  const userData = useSelector((state) => state.Database.value);
  const dispatch = useDispatch()
 
  const showModal = () => {
    setShow(!show)
  }

  const deleteCode = async() => {
    
   await fetch("/api/set-movement-codes/", {
      method: "POST",
      headers: {
        "Content-Type": "appliction/json"
      },
      body: JSON.stringify({
        method: "remove",
        code,
        key: userData?.school_code
      })
    })
    dispatch(removeMovementCode(code))
  }


  return (
    <div
      className={styles.codeCont}
      style={
        color === 0
          ? { background: "#03a4ff", color: "#ffffff" }
          : { background: "#ffffff", color: "#03a4ff" }
      }
     
    >
      <div className={styles.header}>
        <div className={styles.heading}>
          <span className={styles.Hicon}  onClick={showModal}>
            {
              show ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M3 13c3.6-8 14.4-8 18 0"/><path d="M12 17a3 3 0 1 1 0-6a3 3 0 0 1 0 6Z"/></g></svg>

              : 
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19.5 16l-2.475-3.396M12 17.5V14m-7.5 2l2.469-3.388M3 8c3.6 8 14.4 8 18 0"/></svg>
            }

          </span>
          <p>Movement Code</p>
        </div>

        <p>{date}</p>
      </div>
      <p className={styles.code}>{code}</p>

      <div className={styles.actions}>
        <span onClick={deleteCode}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
            
              d="M20.5 6h-17m5.67-2a3.001 3.001 0 0 1 5.66 0m3.543 11.4c-.177 2.654-.265 3.981-1.13 4.79c-.865.81-2.195.81-4.856.81h-.774c-2.66 0-3.99 0-4.856-.81c-.865-.809-.953-2.136-1.13-4.79l-.46-6.9m13.666 0l-.2 3"
            />
          </svg>
        </span>
      </div>

      <div className={styles.users} style={ show ? {display: "flex"} : {display: "none"}}>
       {
        data.map((item, index) => {
          return  <UserProfile key={index} data={item} image={"https://i.ibb.co/0csMj5v/Rectangle-353.png"} />
        })
       }
     

      </div>
    </div>
  );
};

export default CodeContainer;

const UserProfile = ({ image, data }) => {
  return (
    <div className={styles.userProfile}>
      <div
        className={styles.profileImage}
        style={
          image ? { backgroundImage: `url(${image})` } : { backgroundImage: "" }
        }
      >
        {!image ? (
          <p
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              width: "100%",
              fontSize: "15px",
              textAlign: "center",
              height: "50%",
            }}
          >
            No Image Found
          </p>
        ) : (
          <></>
        )}
      </div>
      <div className={styles.userDetails}>
        <p>{`${data?.last_name} ${data?.initial} `}</p>
        <h5>{data?.code}</h5>
      </div>
    </div>
  );
};
