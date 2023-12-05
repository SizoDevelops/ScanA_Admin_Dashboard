import React from 'react'
import styles from '@/components/HomePageCSS/topPannel.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
// import { IoIosHelpCircleOutline } from "react-icons/io";
// import { IoSettingsOutline } from "react-icons/io5";
// import { BsFolder } from "react-icons/bs";
// import { FiSettings } from "react-icons/fi";
// import { RiFileExcel2Line } from "react-icons/ri";
// import { IconContext } from "react-icons";

export default function TopPanel() {
  const {data: session, status} = useSession()

  return (
    <div className={styles.sidePanel}>
    <Link href={`/user/${session?.user?.school_name?.split(" ")[0]}${session?.user?.school_name?.split(" ")[1]}`} replace>

      <div >
      {/* <Image sizes='30' fill src={"/icons/bi_folder.png"} alt="Folder Icon"/> */}
      <svg className={styles.sideIcon} fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776"></path>
</svg>
      </div>
    {/* <BsFolder className={styles.sideIcon}/> */}
    <p>Home</p>
      
    </Link>
    {/* <Link href={"/updates"} className={styles.sideIcon}>
    <Image sizes='30' fill src={"/icons/carbon_calendar.png"} alt="Folder Icon"/>
    </Link> */}
    <Link href={`/user/${session?.user?.school_name?.split(" ")[0]}${session?.user?.school_name?.split(" ")[1]}/attendance-register`}>
   
    <div>
 {/* <Image sizes='30' fill src={"/icons/excel.png"} alt="Folder Icon"/> */}
 <svg className={styles.sideIcon} fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"></path>
</svg>
</div>
   
    {/* <RiFileExcel2Line className={styles.sideIcon}/> */}
    <p>Attendance Register</p>
    </Link>
    {/* <Link href={"/absentees"} className={styles.sideIcon}>
    <Image sizes='30' fill src={"/icons/iconoir_missing-font.png"} alt="Folder Icon"/>
    </Link> */}
    <Link href={`/user/${session?.user?.school_name?.split(" ")[0]}${session?.user?.school_name?.split(" ")[1]}/settings`} >

    <div>
    {/* <Image sizes='30' fill src={"/icons/settings.png"} alt="Folder Icon"/>
     */}

<svg  className={styles.sideIcon} fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"></path>
</svg>
</div>
    {/* <IoSettingsOutline className={styles.sideIcon}/> */}
    <p>Settings</p>
    </Link>
    <Link href={"/"} >
    
    <div >
{/* <Image sizes='30' fill src={"/icons/carbon_help.png"} alt="Folder Icon"/> */}
<svg className={styles.sideIcon} fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"></path>
</svg>

</div>
    {/* <IoIosHelpCircleOutline className={styles.sideIcon}/> */}
    <p>Help</p>
    </Link>
</div>
  )
}
