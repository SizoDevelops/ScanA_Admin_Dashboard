import TopPanel from '@/components/HomePage/topPanel'
import React from 'react'
import styles from '@/components/HomePageCSS/topPannel.module.css'
import Image from 'next/image'
import TableHeader from '@/components/HomePage/Excel-Files/tableHeader'
import Selector from '@/components/Absence/Select'

export default function ExcelPage() {
  return (
    <div className={styles.Table}>
        <TopPanel/>

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
<div className={styles.selector}>
        <p>Category</p>
        <Selector />
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
        <p className={styles.Date}>05-10 June 2023</p> 
        <div className={styles.buttons}>
            <p>Download Data</p>    
        </div>
    </div> 
        <TableHeader/> 

      </div>

    </div>
  )
}
