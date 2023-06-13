import TopPanel from '@/components/HomePage/topPanel'
import React from 'react'
import styles from '@/components/HomePageCSS/topPannel.module.css'
import Image from 'next/image'
import TableHeader from '@/components/HomePage/Excel-Files/tableHeader'

export default function ExcelPage() {
  return (
    <div className={styles.Table}>
        <TopPanel/>

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
        <div className={styles.search}>
        <div className={styles.searchIcon}>
            <Image alt="Search Icon" src="/icons/iconamoon_search.png" sizes='20' fill/>
            
    </div>
            <input type='text' placeholder='Search'/>
        </div>
        
      </div>

        
      <div className={styles.content}>
      <div className={styles.DownloadActions}>
        <p className={styles.Date}>05-10 June 2023</p> 
        <div className={styles.buttons}>
            <p>Download</p>    
        </div>
    </div> 
        <TableHeader/> 
      </div>
    </div>
  )
}
