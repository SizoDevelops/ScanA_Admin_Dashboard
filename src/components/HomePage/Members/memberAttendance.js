import React from 'react'
import styles from '../../HomePageCSS/slug.module.css'



export default function AttendanceProfile({date, absent, timein, timeout}) {
  return (
    <div className={styles.Links}>
        <div className={styles.profileDetails}>
            <div className={styles.AttendancePlan}>
                <p>{date}</p>
                <span>{absent ? "Absent" : "Present"}</span>
            </div>
         
        <div className={styles.Times}>
            <div className={styles.checkInTimes}>
 
            <p>check in time</p>
            <p>{timein}</p>
      
          </div>
          <div className={styles.checkInTimes}>
            <p>check out time</p>
            <p>{timeout}</p>
          </div>
        </div>
      
        </div>
 
    </div>
  )
}
