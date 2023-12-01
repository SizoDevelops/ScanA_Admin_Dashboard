import React from 'react'
import styles from '@/components/HomePageCSS/homePage.module.css'
import Image from 'next/image'
import Link from 'next/link'


export default function SidePanel() {
  return (
    <div className={styles.sidePanel}>
    <Link href={"/"} replace>

      <div className={styles.sideIcon}>
      <Image sizes='30' fill src={"/icons/bi_folder.png"} alt="Folder Icon"/>
      </div>
    {/* <BsFolder className={styles.sideIcon}/> */}
    <p>Home</p>
      
    </Link>
    {/* <Link href={"/updates"} className={styles.sideIcon}>
    <Image sizes='30' fill src={"/icons/carbon_calendar.png"} alt="Folder Icon"/>
    </Link> */}
    <Link href={"/attendance-register"}>
   
    <div className={styles.sideIcon}>
 <Image sizes='30' fill src={"/icons/excel.png"} alt="Folder Icon"/>
</div>
   
    {/* <RiFileExcel2Line className={styles.sideIcon}/> */}
    <p>Attendance Register</p>
    </Link>
    {/* <Link href={"/absentees"} className={styles.sideIcon}>
    <Image sizes='30' fill src={"/icons/iconoir_missing-font.png"} alt="Folder Icon"/>
    </Link> */}
    <Link href={"/settings"} >

    <div className={styles.sideIcon}>
    <Image sizes='30' fill src={"/icons/settings.png"} alt="Folder Icon"/>
</div>
    {/* <IoSettingsOutline className={styles.sideIcon}/> */}
    <p>Settings</p>
    </Link>
    <Link href={"/"} >
    
    <div className={styles.sideIcon}>
<Image sizes='30' fill src={"/icons/carbon_help.png"} alt="Folder Icon"/>
</div>
    {/* <IoIosHelpCircleOutline className={styles.sideIcon}/> */}
    <p>Help</p>
    </Link>
</div>
  )
}
