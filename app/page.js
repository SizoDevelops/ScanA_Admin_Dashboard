import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import DashProfile from '@/components/HomePage/dashProfile'
import SidePanel from '@/components/HomePage/sidePanel'

export default function HomePage() {
  return (
    <> 
    <div className={styles.container}>
    <SidePanel />
      <div className={styles.nav}>
        
<div className={styles.searchContainer}>
  <div className={styles.nameHolder}>
    <div className={styles.imageHolder}></div>
    <div className={styles.name}>
      <p>Hello again</p>
      <h4>MR S.M MHLONGO</h4>
    </div>
  </div>
  <div className={styles.searchBar}>
    <div className={styles.searchIcon}>
      <Image alt="Search Icon" src="/icons/iconamoon_search.png" sizes='20' fill/>
    </div>
    <input type='text' placeholder='Search'/>
  </div>
</div>
<div className={styles.categories}>
        <div className={styles.cat}>
          <p>All</p>
        </div>
        <div className={styles.cat}>
          <p>Admin</p>
        </div>
        <div className={styles.cat}>
          <p>Teaching</p>
        </div>
        <div className={styles.cat}>
          <p>Non-Teaching</p>
        </div>
      </div>
    <div className={styles.profiles}>
        <DashProfile slug={"sizo-mhlongo"}/>
        <DashProfile slug={"sizo-mhlongo1"}/>
        <DashProfile image={"https://i.ibb.co/2dxt41d/im.png"}/>
        <DashProfile/>
        <DashProfile image={"https://i.ibb.co/0csMj5v/Rectangle-353.png"}/>
        <DashProfile/>
        <DashProfile/>
        <DashProfile/>
        <DashProfile/>
        <DashProfile/>
        <DashProfile/>
        <DashProfile/>
        <DashProfile/>
        <DashProfile/>
        <DashProfile/>
        <DashProfile/>
        <DashProfile/>
        <DashProfile/>
    </div>



      </div>

      
    </div>

    </>
  )
}
