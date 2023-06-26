import SidePanel from '@/components/HomePage/sidePanel'
import React from 'react'
import styles from '@/components/HomePageCSS/absentees.module.css'
import AbsenceProfile from '@/components/Absence/AbsenceProfile'
import Selector from '@/components/Absence/Select'


export default function Page() {
  return (
    <div className={styles.container}>
        <SidePanel/>

        <div>

        <div className={styles.SelectorCont}>
    
                <div className={styles.selector}>
                    <p>Year</p>
                    <Selector />
                </div>
                <div className={styles.selector}>
                    <p>Month</p>
                    <Selector />
                </div>
                <div className={styles.selector}>
                    <p>Week</p>
                    <Selector />
                </div>

            
            </div>


            {/* '''''''''''''''''''''''''' */}

            <div className={styles.categories}>
            <div className={styles.cat}>
            <p>Monday</p>
            </div>
            <div className={styles.cat}>
            <p>Tuesday</p>
            </div>
            <div className={styles.cat}>
            <p>Wednesday</p>
            </div>
            <div className={styles.cat}>
            <p>Thursday</p>
            </div>
            <div className={styles.cat}>
            <p>Friday</p>
            </div>
        </div>


        {/* ;;;;;;;;;;;;;;;;;;;;;; */}
        <div className={styles.profiles}>
            <AbsenceProfile image={"https://i.ibb.co/0csMj5v/Rectangle-353.png"}/>
            <AbsenceProfile  image={"https://i.ibb.co/2dxt41d/im.png"}/>
            <AbsenceProfile image={"https://i.ibb.co/0csMj5v/Rectangle-353.png"}/>
            <AbsenceProfile  image={"https://i.ibb.co/2dxt41d/im.png"}/>
          
            {/* <h3>No one is absent</h3> */}
        </div>
        </div>


            
        </div>
  )
}
