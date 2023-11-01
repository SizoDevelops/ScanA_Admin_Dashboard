"use client"

import styles from "@/components/HomePageCSS/slug.module.css"
import Image from 'next/image'
import SidePanel from '@/components/HomePage/sidePanel'
import { useParams } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { useDatabase } from '@/components/features/dbContext'
import { useSelector } from 'react-redux'
import Loader from '@/components/shared/Loader'
import Modal from "@/components/HomePage/Modal"
import { useEffect, useState } from "react"


export default function Member({params}) {
  const router = useParams()
  const { loading } = useDatabase()
  const member = useSelector(state => state.Database.value.members.filter(item => item.id === router.slug)[0])
  const {data: session} = useSession()
  const [errCode, setCode] = useState("")
  useEffect(() => {
    if(window){
      window.addEventListener("click", () => {
        setCode("")
      })
    }
  })
  const sendEmail = async (data) => {

    await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(data => data.json())
    .then(data => {
 
      setCode(data)
    })
    .catch((err) => {
      setCode(err.message)
    })
  }



  if(!member || !member.code) {
    return <Loader/>
  }

  else return (
    <>
    
    <div className={styles.container}>

      {
        errCode.length < 1 ? <></> : <Modal errCode={errCode}/>
        }
      
    <SidePanel />
      <div className={styles.Details}>
        <h4><span></span>Details</h4>
        <div className={styles.DetailsHolder}>
          <div className={styles.ImageHolder}>No Image</div>
          <div className={styles.DetailsContacts}>
            <h4>{member ? member.title : ""} {member ? member.initial : ""} {member ? member.last_name : ""}</h4>
            <div className={styles.Contacts}>
              <div>
                <p>Role</p>
                <p>{member ? member.position : "Loading Position"}</p>
              </div>
              <div>
                <p>Phone Number</p>
                <p>{member ? member.phone_number : "No Number"} </p>
              </div>
              <div>
                <p>Email Address</p>
                <p>{member ? member.email : "No Email Provided"}</p>
              </div>
              <div>
                <p>Member Code</p>
                <p>{member ? member.code : "Loading Code"}</p>
              </div>
            </div>
          </div>
 <div className={styles.Buttons}>

            <div className={styles.btn} onClick={() =>{
              sendEmail({
                name: `${member.title} ${member.last_name}`,
                page: `https://scana.netlify.app?code=${session?.user.key}&usercode=${member.code}`,
                user: member.email,
                code: session?.user.key,
                user_code: member.code
              })
            }}>
              <div className={styles.BtnImage}>
              <Image sizes='30' fill src={"/icons/Pass.png"} alt="Folder Icon"/>
              </div>
              <p>Send Code</p>
            </div>
           
          </div>

        </div>
        <h4><span></span>Attendance History</h4>

        <div className={styles.Attendance}>
          
          {/* <AttendanceProfile absent={member.monday  ? member.monday.find(item => item.week === getCurrentWeek())?.absent : "-"} timein={member.monday ? member.monday.find(item => item.week === getCurrentWeek())?.timein : "-"} timeout={ member.monday ? member.monday.find(item => item.week === getCurrentWeek())?.timeout : "-"} initialIn={member.monday ? member.monday.find(item => item.week === getCurrentWeek())?.initial : "-"} initialOut={member.monday ? member.monday.find(item => item.week === getCurrentWeek())?.initial : "-"}/> */}
        </div>
      </div>

   
      
    </div>

    </>
  )
}

