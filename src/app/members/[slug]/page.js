"use client"
import React, { useEffect, useState } from 'react'
import styles from "@/components/HomePageCSS/slug.module.css"
import Image from 'next/image'
import SidePanel from '@/components/HomePage/sidePanel'
import AttendanceProfile from '@/components/HomePage/Members/memberAttendance'
import { DataBaseFunc } from '@/components/DatabaseSchema'
import { useParams } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { useDatabase } from '@/components/features/dbContext'
import { useSelector } from 'react-redux'


export default function Member({params}) {
  const router = useParams()
  const { loading } = useDatabase()
  const member = useSelector(state => state.Database.value.members.filter(item => item.id === router.slug)[0])

  
if(loading) {
  return <>LOADING</>
}
else return (
    <> 
    <div className={styles.container}>
    <SidePanel />
      <div className={styles.Details}>
        <h4><span></span>Details</h4>
        <div className={styles.DetailsHolder}>
          <div className={styles.ImageHolder}></div>
          <div className={styles.DetailsContacts}>
            <h4>{member ? member.title : ""} {member ? member.initial : ""} {member ? member.last_name : ""}</h4>
            <div className={styles.Contacts}>
              <div>
                <p>Role</p>
                <p>{member ? member.position : ""}</p>
              </div>
              <div>
                <p>Phone Number</p>
                <p>{member ? member.phone_number : "No Number"} </p>
              </div>
              <div>
                <p>Email Address</p>
                <p>{member ? member.email : ""}</p>
              </div>
              <div>
                <p>Member Code</p>
                <p>{member ? member.code : ""}</p>
              </div>
            </div>
          </div>
 <div className={styles.Buttons}>

            <div className={styles.btn}>
              <div className={styles.BtnImage}>
              <Image sizes='30' fill src={"/icons/Pass.png"} alt="Folder Icon"/>
              </div>
              <p>Send Code</p>
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

