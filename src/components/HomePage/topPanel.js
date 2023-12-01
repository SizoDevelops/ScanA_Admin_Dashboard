import React from 'react'
import styles from '@/components/HomePageCSS/topPannel.module.css'
import Image from 'next/image'
import Link from 'next/link'
// import { IoIosHelpCircleOutline } from "react-icons/io";
// import { IoSettingsOutline } from "react-icons/io5";
// import { BsFolder } from "react-icons/bs";
// import { FiSettings } from "react-icons/fi";
// import { RiFileExcel2Line } from "react-icons/ri";
// import { IconContext } from "react-icons";

export default function TopPanel() {
  return (
    <div className={styles.sidePanel}>
    <Link href={"/"} replace >
      <div className={styles.sideIcon}>
  <Image sizes='30' fill src={"/icons/bi_folder.png"} alt="Folder Icon"/>
      </div>

    

    {/* <BsFolder className={styles.sideIcon}/> */}
 
      
    </Link>
    {/* <Link href={"/updates"} className={styles.sideIcon}>
    <Image sizes='30' fill src={"/icons/carbon_calendar.png"} alt="Folder Icon"/>
    </Link> */}
    <Link href={"/attendance-register"} >
    <div className={styles.sideIcon}>
<Image sizes='30' fill src={"/icons/excel.png"} alt="Folder Icon"/>
</div>
    

   
    {/* <RiFileExcel2Line className={styles.sideIcon}/> */}
  
    </Link>
    {/* <Link href={"/absentees"} className={styles.sideIcon}>
    <Image sizes='30' fill src={"/icons/iconoir_missing-font.png"} alt="Folder Icon"/>
    </Link> */}
    <Link href={"/settings"}>
    <div className={styles.sideIcon}>
    <Image sizes='30' fill src={"/icons/settings.png"} alt="Folder Icon"/>
</div>


    {/* <IoSettingsOutline className={styles.sideIcon}/> */}
  
    </Link>
    <Link href={"/"} >
    <div className={styles.sideIcon}>
 <Image sizes='30' fill src={"/icons/carbon_help.png"} alt="Folder Icon"/>
</div>
   

    {/* <IoIosHelpCircleOutline className={styles.sideIcon}/> */}

    </Link>
</div>
  )
}
