"use client"
import React from 'react'
import styles from '../HomePageCSS/dashProfile.module.css'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { useDatabase } from '../features/dbContext'
import Image from 'next/image'


export default function DashProfile({image, slug, title, initial, last_name, position, center, persal, }) {

  const user = useSelector(state => state.Database.value)
  const { loadingCode,errCode, sendUserEmail} = useDatabase()
  return (
    <div className={styles.userContainer}>
      <p style={{fontSize: "min(12px, 0.95vw)"}}>SCNA-RTFDE-ERDFRE</p>
      <p>Susan Doe</p>
      <p>Female</p>
      <p>someemail@email.com</p>
      <p>0</p>
      <p>200</p>
      <p style={{width: "10px", height: "10px", backgroundColor: "#00FF57", borderRadius: "50%", margin:"auto"}}>
        
      </p>
      <div className={styles.btn} >
              <p>{loadingCode ? "Sending..." : "Send Code"}</p>
            </div>
    </div>
  )
}
