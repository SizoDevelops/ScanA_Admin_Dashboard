import React from 'react'
import styles from "@/components/HomePageCSS/slug.module.css"
import Image from 'next/image'
import SidePanel from '@/components/HomePage/sidePanel'
import AttendanceProfile from '@/components/HomePage/Members/memberAttendance'

export default function Member({params}) {
  return (
    <> 
    <div className={styles.container}>
    <SidePanel />
      <div className={styles.Details}>
        <h4><span></span>Details</h4>
        <div className={styles.DetailsHolder}>
          <div className={styles.ImageHolder}></div>
          <div className={styles.DetailsContacts}>
            <h4>MR S.M. MHLONGO</h4>
            <div className={styles.Contacts}>
              <div>
                <p>Role</p>
                <p>Developer</p>
              </div>
              <div>
                <p>Phone Number</p>
                <p>+27 71 432 1234 </p>
              </div>
              <div>
                <p>Email Address</p>
                <p>sizomhlongo@yahoo.com</p>
              </div>
            </div>
          </div>
 <div className={styles.Buttons}>
            <div className={styles.btn}>
              <div className={styles.BtnImage}>
                <Image sizes='30' fill src={"/icons/QR.png"} alt="Folder Icon"/>
              </div>
              <p>Send QR Code</p>
            </div>
            <div className={styles.btn}>
              <div className={styles.BtnImage}>
              <Image sizes='30' fill src={"/icons/Pass.png"} alt="Folder Icon"/>
              </div>
              <p>Send Passcode</p>
            </div>
           
          </div>

        </div>
        <h4><span></span>Attendance History</h4>

        <div className={styles.Attendance}>
          <AttendanceProfile/>
          <AttendanceProfile/>
          <AttendanceProfile/>
          <AttendanceProfile/>
          <AttendanceProfile/>
          <AttendanceProfile/>
          <AttendanceProfile/>
          <AttendanceProfile/>
          <AttendanceProfile/>
        </div>
      </div>


      
    </div>

    </>
  )
}
