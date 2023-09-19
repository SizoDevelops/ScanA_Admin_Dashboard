"use client"
import TopPanel from '@/components/HomePage/topPanel'
import React, { useEffect, useState } from 'react'
import styles from '@/components/HomePageCSS/topPannel.module.css'
import TableHeader from '@/components/HomePage/Excel-Files/tableHeader'
import Selector from '@/components/Absence/Select'
import { useSelector } from 'react-redux'
import { usePDF } from 'react-to-pdf'
import Loader from '@/components/shared/Loader'
import { useDatabase } from '@/components/features/dbContext'

export default function ExcelPage() {
  const [member, setMembers] = useState([{value: "All", label: "ALL"}])
  const [week,setWeek] = useState([])
  const schema = useSelector(state => state.Database.value.members)
  const members= [...schema]
  const [sWeek, selectedWeek] = useState({value: getCurrentWeek(), label: getCurrentWeek()})
  const [sPosition, selectedPosition] = useState({value: "", label: ""})
  const { toPDF, targetRef } = usePDF({filename: `Week-${sWeek.value}-Attendance.pdf`});
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
      if(!membered.find(item => item.value.toUpperCase() === elem.position.toUpperCase()))
              membered.push({value: elem.position, label: elem.position.toUpperCase()})
      
    })

    const Weeks = []
    
    membersCopy.forEach(elem => {
          for(const key in elem.attendance){
            if (elem.attendance.hasOwnProperty(key)) {
                const value = elem.attendance[key]
                if(value !== null){
                  value.forEach(item => {
                    if(!Weeks.find(i => i.value === item.week))
                    Weeks.push({value: item.week, label: item.week})
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
  },[schema])

  function getCurrentWeek() {
    const today = new Date();
    const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
    const daysSinceFirstDay = Math.floor((today - firstDayOfYear) / (24 * 60 * 60 * 1000));
    const currentWeek = Math.ceil((daysSinceFirstDay + 1) / 7);
    return currentWeek;
  }

 
  if(loading) {
    return <Loader/>
  }

  else return ( 

      <div className={styles.Table}>
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
            <p className={styles.Date}>{"Week " + sWeek.value}</p> 
                <div className={styles.buttons} onClick={() => toPDF()}>
                        <p>Download PDF</p>    
                    </div>
                </div> 
                <div ref={targetRef} style={{background: "#fff", color: "#000", height: "fit-content", padding: "20px", paddingTop: "40px"}}>
                  <TableHeader   week={sWeek.value} position={sPosition.value}/> 
                </div>
      </div>

    </div>
 
    
  )
}
