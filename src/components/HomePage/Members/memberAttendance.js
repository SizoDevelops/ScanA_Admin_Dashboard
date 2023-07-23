import React from 'react'
import styles from '../../HomePageCSS/slug.module.css'



export default function AttendanceProfile({image, slug}) {
  return (
    <div className={styles.Links}>
        <div className={styles.profileDetails}>
            <div className={styles.AttendancePlan}>
                <p>05 June 2023</p>
                <span>Present</span>
            </div>
         
        <div className={styles.Times}>
            <div className={styles.checkInTimes}>
 
            <p>check in time</p>
            <p>07:00</p>
      
          </div>
          <div className={styles.checkInTimes}>
            <p>check out time</p>
            <p>17:00</p>
          </div>
        </div>
      
        </div>
 
    </div>
  )
}
