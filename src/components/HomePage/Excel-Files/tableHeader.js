/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect, useRef } from "react";
import styles from "../../HomePageCSS/table.module.css";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function TableHeader({ week, position, year }) {
  const [memberArray, setMembers] = useState([]);
  const schema = useSelector((state) => state.Database.value.members);
  const members = [...schema];
  const [details, setDetails] = useState(null);

  function compareFn(a, b) {
    if (a.last_name < b.last_name) {
      return -1;
    } else if (a.last_name > b.last_name) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }

  const membersCopy = members.sort(compareFn);

  useEffect(() => {
    setMembers(membersCopy);
    if (position !== "") {
      setMembers(
        membersCopy.filter((items) => {
          return items.position.some(
            (elem) => elem.toUpperCase() === position.toUpperCase()
          );
        })
      );
    }
    if (position === "All") {
      setMembers(membersCopy);
    }
  }, [position, schema]);

  return (
    <div className={styles.TableHolder}>
      <UserAttendanceTable userData={memberArray} week={week} year={year} />
    </div>
  );
}

const UserAttendanceTable = ({ userData, week, year }) => {
  const [tableData, setTableData] = useState([]);
  const [details, setDetails] = useState([]);

function getWeekdaysOfWeek(year, weekNumber) {
  // ISO weeks: Monday is the first day of the week
  const simpleDate = new Date(year, 0, 4); // Jan 4 is always in week 1
  const dayOfWeek = simpleDate.getDay() || 7; // Sunday = 0, fix to 7
  // Move to Monday of week 1
  simpleDate.setDate(simpleDate.getDate() - (dayOfWeek - 2));
  
  // Calculate Monday of target week
  const targetMonday = new Date(simpleDate);
  targetMonday.setDate(simpleDate.getDate() + (weekNumber - 1) * 7);

  const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const result = {};

  weekdays.forEach((day, i) => {
    const d = new Date(targetMonday);
    d.setDate(targetMonday.getDate() + i);
    result[day] = d.toISOString().split("T")[0]; // format YYYY-MM-DD
  });

  return result;
}

function getCurrentYear() {
  return new Date().getFullYear();
}

const getCurrentWeek = () => {
  const today = new Date()
  const firstDayOfYear = new Date(today.getFullYear(), 0, 1)
  const daysSinceFirstDay = Math.floor((today - firstDayOfYear) / (24 * 60 * 60 * 1000))
  const currentWeek = Math.ceil((daysSinceFirstDay + 1) / 7)
  return currentWeek
}

 
  useEffect(() => {
    const generateTableRows = () => {
      const rows = userData.map((user, index) => (
        <tr className={styles.subHeadings} key={user.id}>
          <td className={styles.userName}>
            {index + 1 + ". "}
            {user.last_name} {user.initial}
          </td>
          <td>{getAttendanceDetails(user, "monday")}</td>
          <td>{getAttendanceDetails(user, "tuesday")}</td>
          <td>{getAttendanceDetails(user, "wednesday")}</td>
          <td>{getAttendanceDetails(user, "thursday")}</td>
          <td>{getAttendanceDetails(user, "friday")}</td>
        </tr>
      ));
      setTableData(rows);
      console.log(getWeekdaysOfWeek(getCurrentYear(), getCurrentWeek()))
    };

    

    const getAttendanceDetails = (user, day) => {
      const regex = new RegExp(year);
      const dayData = user.attendance[day];
      console.log(dayData);
      if (dayData) {
        const attendanceDetails = dayData.filter(
          (entry) => regex.test(entry.date) && entry.week === week
        );
        
        if (attendanceDetails.length > 0) {
          
          return attendanceDetails.map((entry) => (
            <span key={entry.date} className={styles.headers}>
              {entry.absent === true ? (
                <span
                  style={{
                    width: "350px",
                    wordWrap: "unset",
                    wordBreak: "keep-all",
                    textAlign: "center",
                    textTransform: "capitalize",
                    color: "red",
                  }}
                >
                  {entry.reason}
                </span>
              ) : (
                <span className={styles.times}>
                  <span style={{ color: "#00850b" }}>{entry.timein}</span>
                  <span style={{ display: "none" }}>{"--"}</span>
                  <span style={{ color: "#00850b" }}>{user.initial}</span>
                  <span style={{ display: "none" }}> {"--"} </span>
                  {entry.timeout ? (
                    <span style={{ color: "#00850b" }}>{entry.timeout}</span>
                  ) : (
                    <span style={{ color: "#00850b" }}>N/A</span>
                  )}
                  <span style={{ display: "none" }}> {"--"} </span>
                  {entry.timeout ? (
                    <span style={{ color: "#00850b" }}>{user.initial}</span>
                  ) : (
                    <span style={{ color: "#00850b" }}>N/A</span>
                  )}
                </span>
              )}
            </span>
          ));
        } else return "";
      }
      return "";
    };

    generateTableRows();
  }, [userData, week, year]);

  return (
    <table className={styles.table}>
      <thead className={styles.head}>
        <tr className={styles.headingNames}>
          <th>Member Name</th>
          {
           Object.keys(getWeekdaysOfWeek(getCurrentYear(), getCurrentWeek())).map((day) => (
            <th key={day}>
              <span > {day} - </span>
              <span > {getWeekdaysOfWeek(getCurrentYear(), getCurrentWeek())[day]} </span>
            </th>
           ))
          }
        </tr>
        <tr className={styles.header}>
          <th></th>
          <th>
            <span>In</span>
            <span style={{ display: "none" }}> {"-"} </span>
            <span>Initial</span>
            <span style={{ display: "none" }}> {"-"} </span>
            <span>Out</span>
            <span style={{ display: "none" }}> {"-"} </span>
            <span>Initial</span>
          </th>
          <th>
            <span>In</span>
            <span style={{ display: "none" }}> {"-"} </span>
            <span>Initial</span>
            <span style={{ display: "none" }}> {"-"} </span>
            <span>Out</span>
            <span style={{ display: "none" }}> {"-"} </span>
            <span>Initial</span>
          </th>
          <th>
            <span>In</span>
            <span style={{ display: "none" }}> {"-"} </span>
            <span>Initial</span>
            <span style={{ display: "none" }}> {"-"} </span>
            <span>Out</span>
            <span style={{ display: "none" }}> {"-"} </span>
            <span>Initial</span>
          </th>
          <th>
            <span>In</span>
            <span style={{ display: "none" }}> {"-"} </span>
            <span>Initial</span>
            <span style={{ display: "none" }}> {"-"} </span>
            <span>Out</span>
            <span style={{ display: "none" }}> {"-"} </span>
            <span>Initial</span>
          </th>
          <th>
            <span>In</span>
            <span style={{ display: "none" }}> {"-"} </span>
            <span>Initial</span>
            <span style={{ display: "none" }}> {"-"} </span>
            <span>Out</span>
            <span style={{ display: "none" }}> {"-"} </span>
            <span>Initial</span>
          </th>
        </tr>
      </thead>
      <tbody>{tableData}</tbody>
    </table>
  );
};
