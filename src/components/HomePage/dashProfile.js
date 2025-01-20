"use client"
import React from 'react'
import styles from '../HomePageCSS/dashProfile.module.css'
import { useSelector } from 'react-redux'
import { useDatabase } from '../features/dbContext'
import { useSession } from 'next-auth/react'


export default function DashProfile({code, slug, title, first_name, last_name, position, email, persal, }) {
  const { errCode, sendUserEmail} = useDatabase()
  const {data: session} = useSession()
  const [loading, setLoading] = React.useState(false)
  return (
    <div className={styles.userContainer}>
      <p style={{fontSize: "min(12px, 0.95vw)"}}>{code}</p>
      <p>{first_name + " " + last_name}</p>
      <p>{title?.toLowerCase() === "mr" ? "Male" : "Female"}</p>
      <p>{email}</p>
      <p>0</p>
      <p>200</p>
      <p style={{width: "10px", height: "10px", backgroundColor: "#00FF57", borderRadius: "50%", margin:"auto"}}>
        
      </p>
      <div className={styles.btn} onClick={async () =>{
        setLoading(true)
        await sendUserEmail({
          name: `${title.slice(0, 1).toUpperCase() + title.slice(1).toLowerCase()} ${first_name} ${last_name}`,
          page: `https://scana.co.za/login?code=${session?.user.school_code}&usercode=${code}`,
          user: email,
          code: session?.user.school_code,
          user_code: code
        })

              setLoading(false)
            }}>
              <p>{loading ? "Sending..." : "Send Code"}</p>
            </div>
    </div>
  )
}
