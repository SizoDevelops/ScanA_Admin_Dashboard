/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect, useState } from "react";
import styles from "../../HomePageCSS/table.module.css";
import { useSelector } from "react-redux";
import {uniqueDataArray } from "@/components/DatabaseSchema";

export default function MovementTable({ week, position, year }) {
  const [memberArray, setMembers] = useState([]);
  const schema = useSelector((state) => state.Database.value.members);
  const membersCopy = uniqueDataArray;
  const regex = new RegExp(year);

  const getMovement = () => {
    const register = [];
    schema?.forEach(user => {
      user?.movement?.map(item => {
        register.push(item);
      })
    })
   
    return register;
  }

  useEffect(() => {

    
    let filteredMembers = getMovement();
    setMembers([]);
    if (position !== "" && position !== "All") {
      filteredMembers = getMovement().filter((elem) => elem.code === position && regex.test(elem.date));
    }
    setMembers(filteredMembers);
  }, [position, schema]);

  return (
    <div className={styles.TableHolder}>
      <UserAttendanceTable userData={memberArray} week={week} year={year} />
    </div>
  );
}

const UserAttendanceTable = ({ userData, week, year }) => {
  const [tableData, setTableData] = useState([]);
  const regex = new RegExp(year);

  useEffect(() => {
    const generateTableRows = () => {
      if (userData) {
        const MovementDetails = userData.filter((entry) =>
          regex.test(entry.date)
        );
        if (MovementDetails.length > 0) {
          const rows = MovementDetails.map((user, index) => (
            <tr className={styles.subHeadings} key={user.date + index}>
              <td className={styles.userName}>
                {index + 1 + ". "}
                {user.last_name} {user.initial}
              </td>
              <td>{user.code}</td>
              <td>{user.day}</td>
              <td>{user.date}</td>
              <td>{ user.week < 10 ? "Week " + "0" + user.week : "Week " + user.week}</td>
              <td>{user.reason}</td>
            </tr>
          ));
          setTableData(rows);
        } else setTableData([]);
      }
    };
    generateTableRows();
  }, [userData, year]);

  return (
    <table className={styles.table}>
      <thead className={styles.head}>
        <tr className={styles.headingNames}>
          <th>Surname and Initials</th>
          <th>User Code</th>
          <th>Day</th>
          <th>Date</th>
          <th>Week</th>
          <th>Reason</th>
        </tr>
      </thead>
      <tbody>{tableData}</tbody>
    </table>
  );
};
