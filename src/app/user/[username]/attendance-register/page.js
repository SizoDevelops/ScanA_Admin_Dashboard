/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import TopPanel from '@/components/HomePage/topPanel'
import React, { useEffect, useState } from 'react'
import styles from '@/components/HomePageCSS/topPannel.module.css'
import TableHeader from '@/components/HomePage/Excel-Files/tableHeader'
import Selector from '@/components/Absence/Select'
import { useSelector } from 'react-redux'
import Loader from '@/components/shared/Loader'
import { useDatabase } from '@/components/features/dbContext'
import * as XLSX from 'xlsx';
export default function ExcelPage() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const [member, setMembers] = useState([{value: "All", label: "ALL"}])
  const [week,setWeek] = useState([])
  const [years, setYears] = useState([])
  const schema = useSelector(state => state.Database.value.members)
  const members= [...schema]
  const [sWeek, selectedWeek] = useState({value: getCurrentWeek(), label: getCurrentWeek()})
  const [sPosition, selectedPosition] = useState({value: "", label: ""})
  const [year, selectedYear] = useState({value: currentYear, label: currentYear})
  const {loading} = useDatabase()
 

 
 
 
  const membersCopy = members.sort((a,b) => {
        if (a.last_name < b.last_name) {
      return -1;
    } else if (a.last_name > b.last_name) {
      return 1;
    }
    return 0;
  })
  useEffect(() => {
    setMembers([{value: "All", label: "ALL"}])
    const membered = []
    membersCopy.forEach(elem => {
      elem.position.forEach(elem => {
          if(!membered.find(item => item.value.toUpperCase() === elem.toUpperCase()))
              membered.push({value: elem, label: elem.toUpperCase()})
      })
    })

    const Weeks = []
    const Years = []
    membersCopy.forEach(elem => {
          for(const key in elem.attendance){
            if (elem.attendance.hasOwnProperty(key)) {
                const value = elem.attendance[key]
                if(value !== null){
                  value.forEach(item => {
                    if(!Weeks.find(i => i.value === item.week))
                    Weeks.push({value: item.week, label: item.week})
                  if(!Years.find(i => i.value === parseInt(item.date.slice(0, 4)))) {
                    Years.push({value: parseInt(item.date.slice(0, 4)), label: item.date.slice(0, 4)})
                  }
                  })
                }
              }
          }
      })

   setMembers(prep => [...prep, ...membered.sort((a,b) => {
    if (a.value < b.value) {
      return -1;
    } else if (a.value > b.value) {
      return 1;
    }
    return 0;
   })])

   setWeek(Weeks.sort((a,b) => a.value - b.value))
   setYears(Years.sort((a,b) => a.value - b.value))
  },[schema])

  function getCurrentWeek() {
    const today = new Date();
    const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
    const daysSinceFirstDay = Math.floor((today - firstDayOfYear) / (24 * 60 * 60 * 1000));
    const currentWeek = Math.ceil((daysSinceFirstDay + 1) / 7);
    return currentWeek;
  }


  const   exportToExcel = () => {
    // Get the HTML table element by its ID
    const table = document.getElementById('data-table');

    // Convert the HTML table to a worksheet
     const ws = XLSX.utils.table_to_sheet(table)
    ws['!cols'] = [
      { wch: 30 }, // Width for the first column (Name)
      { wch: 25 }, // Width for Monday
      { wch: 25 }, // Width for Tuesday
      { wch: 25 }, // Width for Wednesday
      { wch: 25 }, // Width for Thursday
      { wch: 25 }, // Width for Friday
    ];
  

    // Apply styles to each cell

    Object.keys(ws).forEach(cell => {
      if (cell !== '!ref' && typeof ws[cell].v === 'string') {
        ws[cell].v = ws[cell].v.split(/-/g).join('  ').replace("-", "  "); // Add double space between words
      }
    });
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'AttendanceSheet');
    XLSX.writeFile(wb, `UserAttendance_Week_${sWeek.value}_${year.value}.xlsx`);
  };

 
  if(loading || membersCopy.length === 0) {
    return <Loader/>
  }

  else return ( 

      <body className={styles.Table}>
        <TopPanel/>

        <div className={styles.SelectorCont}>
     
     
     
    <div className={styles.selector}>
        <p>Members</p>
        <Selector options={member} onChange={selectedPosition} defaultV={member[0]}/>
    </div>
    <div className={styles.selector}>
        <p>Week</p>
        <Selector options={week} onChange={selectedWeek} defaultV={sWeek}/>
    </div>
    <div className={styles.selector}>
        <p>Year</p>
        <Selector options={years} onChange={selectedYear} defaultV={year}/>
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

   
        <div  className={styles.DownloadActions}>
            <p className={styles.Date}>{"Week " + sWeek.value + " - " +year.value}</p> 
                <div className={styles.buttons} onClick={exportToExcel}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-arrow-down" viewBox="0 0 16 16">
  <path d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293z"/>
  <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
</svg>
                        <p>Download Excel</p>   

                    </div>
                </div> 
                <div  className={styles.title}>
       <h1>Attendance Register</h1>
       <p className={styles.para}>This register is signed electronically. Thus the result are 100% authententic and adhare to the attendance policy of the organisation.</p>
        </div> 
    
        
      

        
     
                <table   id="data-table"  className={styles.TableHolder}>
                  <TableHeader   week={sWeek.value} position={sPosition.value} year={year.value}/> 
                </table>
      </div>

    </body>
 
    
  )
}
