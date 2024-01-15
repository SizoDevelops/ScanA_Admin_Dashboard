import React from 'react'
import styles from '@/components/HomePageCSS/topPannel.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useSelector } from 'react-redux'
// import { IoIosHelpCircleOutline } from "react-icons/io";
// import { IoSettingsOutline } from "react-icons/io5";
// import { BsFolder } from "react-icons/bs";
// import { FiSettings } from "react-icons/fi";
// import { RiFileExcel2Line } from "react-icons/ri";
// import { IconContext } from "react-icons";

export default function TopPanel() {
  const user = useSelector(state => state.Database.value)

  return (
    <div className={styles.sidePanel}>
    <Link href={user.school_name !== "" ? `/user/${user.school_name.toLowerCase().replace(/\s+/g, '-')}` : "#"} replace>

      <div className={styles.sideIcon}>
      {/* <Image sizes='30' fill src={"/icons/bi_folder.png"} alt="Folder Icon"/> */}
      <svg   xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
</svg>
      </div>
    {/* <BsFolder /> */}
    <p>Home</p>
      
    </Link>
    {/* <Link href={"/updates"} >
    <Image sizes='30' fill src={"/icons/carbon_calendar.png"} alt="Folder Icon"/>
    </Link> */}
    <Link href={user.school_name !== "" ? `/user/${user.school_name.toLowerCase().replace(/\s+/g, '-')}/attendance-register` : "#"}>
   
    <div className={styles.sideIcon}>
 {/* <Image sizes='30' fill src={"/icons/excel.png"} alt="Folder Icon"/> */}
 <svg   xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-file-earmark-excel" viewBox="0 0 16 16">
  <path d="M5.884 6.68a.5.5 0 1 0-.768.64L7.349 10l-2.233 2.68a.5.5 0 0 0 .768.64L8 10.781l2.116 2.54a.5.5 0 0 0 .768-.641L8.651 10l2.233-2.68a.5.5 0 0 0-.768-.64L8 9.219l-2.116-2.54z"/>
  <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
</svg>
</div>
   
    {/* <RiFileExcel2Line /> */}
    <p>Attendance Register</p>
    </Link>
    {/*Matric Learners */}
    <Link href={user.school_name !== "" ? `/user/${user.school_name.toLowerCase().replace(/\s+/g, '-')}/school-updates`: "#"}>
   
    <div className={styles.sideIcon}>
 {/* <Image sizes='30' fill src={"/icons/excel.png"} alt="Folder Icon"/> */}
 <svg   xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-journals" viewBox="0 0 16 16">
  <path d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2"/>
  <path d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0"/>
</svg>
</div>
   
    {/* <RiFileExcel2Line /> */}
    <p>School Updates</p>
    </Link>
    {/* <Link href={"/absentees"} >
    <Image sizes='30' fill src={"/icons/iconoir_missing-font.png"} alt="Folder Icon"/>
    </Link> */}
    <Link href={user.school_name !== "" ? `/user/${user.school_name.toLowerCase().replace(/\s+/g, '-')}/settings` : "#"} >

    <div className={styles.sideIcon}>
    {/* <Image sizes='30' fill src={"/icons/settings.png"} alt="Folder Icon"/>
     */}

<svg  xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-tools" viewBox="0 0 16 16">
  <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708M3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026z"/>
</svg>
</div>
    {/* <IoSettingsOutline /> */}
    <p>Settings</p>
    </Link>
    <Link href={"#"} >
    
    <div className={styles.sideIcon}>
{/* <Image sizes='30' fill src={"/icons/carbon_help.png"} alt="Folder Icon"/> */}
<svg  xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
</svg>

</div>
    {/* <IoIosHelpCircleOutline /> */}
    <p>Help</p>
    </Link>
</div>
  )
}
