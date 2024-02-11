/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import TopPanel from "@/components/HomePage/topPanel";
import React, { useEffect, useState } from "react";
import styles from "@/components/HomePageCSS/topPannel.module.css";

import Selector from "@/components/Absence/Select";
import { useSelector } from "react-redux";
import Loader from "@/components/shared/Loader";
import { useDatabase } from "@/components/features/dbContext";

import ExcelJS from "exceljs";
import MovementTable from "@/components/HomePage/Excel-Files/movementTable";
import { uniqueDataArray } from "@/components/DatabaseSchema";
const voucher_codes = require("voucher-code-generator");

export default function Page() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const [member, setMembers] = useState([{ value: "All", label: "All" }]);
  const [week, setWeek] = useState([]);
  const [years, setYears] = useState([]);
  const schema = useSelector((state) => state.Database.value.members);
  const members = uniqueDataArray;
  const [sWeek, selectedWeek] = useState({
    value: getCurrentWeek(),
    label: "Week " + getCurrentWeek(),
  });
  const [sPosition, selectedPosition] = useState({ value: "", label: "" });
  const [year, selectedYear] = useState({
    value: currentYear,
    label: currentYear,
  });
  const { loading } = useDatabase();
  

  const membersCopy = members.sort((a, b) => {
    if (a.last_name < b.last_name) {
      return -1;
    } else if (a.last_name > b.last_name) {
      return 1;
    }
    return 0;
  });
  useEffect(() => {
    const regex = new RegExp(year.value);
    setMembers([{ value: "All", label: "All" }]);
    const membered = [];
    membersCopy.forEach((elem) => {
      if (
        !membered.find(
          (item) => item.value.toUpperCase() === elem.code.toUpperCase()
        )
      )
      if(regex.test(elem.date)){
           membered.push({
            value: elem.code,
            label: elem.last_name + " " + elem.initial,
          });
      }
       
    });

    const Weeks = [];
    const Years = [];

    const value = members;
    if (value !== null) {
      value.forEach((item) => {
        if (!Weeks.find((i) => i.value === item.week))
          Weeks.push({ value: item.week, label: "Week " + item.week });
        if (!Years.find((i) => i.value === parseInt(item.date.slice(0, 4)))) {
          Years.push({
            value: parseInt(item.date.slice(0, 4)),
            label: item.date.slice(0, 4),
          });
        }
      });

      selectedWeek({
        value: Weeks.sort((a, b) => a.value - b.value)[Weeks.length - 1].value,
        label: Weeks.sort((a, b) => a.value - b.value)[Weeks.length - 1].label,
      });
    }

    setMembers((prep) => [
      ...prep,
      ...membered.sort((a, b) => {
        if (a.value < b.value) {
          return -1;
        } else if (a.value > b.value) {
          return 1;
        }
        return 0;
      }),
    ]);

    setWeek(Weeks.sort((a, b) => a.value - b.value));
    setYears(Years.sort((a, b) => a.value - b.value));
  }, [schema, year]);

  function getCurrentWeek() {
    const today = new Date();
    const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
    const daysSinceFirstDay = Math.floor(
      (today - firstDayOfYear) / (24 * 60 * 60 * 1000)
    );
    const currentWeek = Math.ceil((daysSinceFirstDay + 1) / 7);
    return currentWeek;
  }

  const exportToExcel = async () => {
    // Create a new ExcelJS workbook
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Week" + sWeek.value);

    // Get the HTML table element by its ID
    const table = document.getElementById("data" + sWeek.value);

    // Iterate through the rows of the table and add them to the Excel worksheet
    const rows = table.querySelectorAll("tr");
    rows.forEach((row) => {
      const rowData = [];
      const cells = row.querySelectorAll("td, th");

      cells.forEach((cell) => {
        // Replace "-" with spaces in the cell content
        const cellContent = cell.textContent.replace(/-/g, "  ");

        rowData.push(cellContent);
      });

      worksheet.addRow(rowData);
    });

    // Customize header row styles in ExcelJS
    const headerRow = worksheet.getRow(1);
    headerRow.eachCell((cell) => {
      cell.font = { color: { argb: "FFFFFF" } }; // Text color
      cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "03A4FF" },
      }; // Background color
      cell.alignment = { horizontal: "center", vertical: "middle" }; // Center the text
    });
    headerRow.height = 30; // Adjust the height of the header row

    // Set a password for the Excel file
    const password = voucher_codes.generate({
      count: 1,
      length: 11,
    })[0];

    // Set uniform width for every cell
    const columnCount = worksheet.columns.length;
    for (let i = 1; i <= columnCount; i++) {
      worksheet.getColumn(i).width = 30;
      worksheet.getRow(i).height = 20;
    }

    // Center the text in each cell
    worksheet.eachRow({ startingRow: 2 }, (row) => {
      row.eachCell((cell, num) => {
        if (num !== 1) {
          cell.alignment = { horizontal: "center", vertical: "middle" }; // Center the text
        }
      });
    });

    // Protect the workbook with a password
    await worksheet.protect(password, { selectLockedCells: false });

    // Save or serve the file as needed
    workbook.xlsx.writeBuffer().then((buffer) => {
      const blob = new Blob([buffer], { type: "application/octet-stream" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `Movement_Register_${year.value}.xlsx`;
      link.click();
    });
    // alert(password)
  };

  if (loading) {
    return <Loader />;
  } else
    return (
      <body className={styles.Table}>
        <TopPanel />

        <div className={styles.SelectorCont}>
          <div className={styles.selector}>
            <p>Members</p>
            <Selector
              options={member}
              onChange={selectedPosition}
              defaultV={member[0]}
            />
          </div>
          <div className={styles.selector}>
            <p>Year</p>
            <Selector options={years} onChange={selectedYear} defaultV={year} />
          </div>
        </div>

        {/* 
        <div className={styles.categories}>
        <div className={styles.cat}>
          <p>Admin</p>
        </div>
        <div className={styles.cat}>
          <p>Teaching</p>
        </div>
        <div className={styles.cat}>
          <p>Non-Teaching</p>
        </div>

        
      </div> */}

        <div className={styles.content}>
          <div className={styles.DownloadActions}>
            <p className={styles.Date}>
              {/* {"Week " + sWeek.value + " - " + year.value} */}
            </p>
            <div className={styles.btns}>
              <div className={styles.buttons} onClick={exportToExcel}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293z" />
                  <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                </svg>
                <p>Download Excel</p>
              </div>
            </div>
          </div>
          <div className={styles.title}>
            <h1>Movement Register</h1>
            <p className={styles.para}>
              This register is signed electronically. Thus the result are 100%
              authententic and adhare to the attendance policy of the
              organisation.
            </p>
          </div>

          <table id={"data" + sWeek.value} className={styles.TableHolder}>
            <MovementTable
              week={sWeek.value}
              position={sPosition.value}
              year={year.value}
            />
          </table>
        </div>
      </body>
    );
}
