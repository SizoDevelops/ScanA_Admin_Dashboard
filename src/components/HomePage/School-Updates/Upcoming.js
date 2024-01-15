import React, { useEffect, useState } from 'react'
import styles from '@/components/HomePage/School-Updates/SchoolCSS/upcoming.module.css'
import { useDatabase } from '@/components/features/dbContext'
import { useDispatch, useSelector } from 'react-redux'
import { deleteMeeting } from '@/components/shared/DatabaseSlice'
export default function Upcoming({meeting, state}) {
  const dispatch = useDispatch()
  const user = useSelector(state => state.Database.value)
  const  [deleting, setDeleting] = useState(false)


  return (
    <div className={styles.container} style={state === "Past Meeting" ? {background: "#ffb31044", borderColor: "#ffb310"} : {background:"#00d17044", borderColor: "#00d170"}} >
                  <div className={styles.header}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={state === "Past Meeting" ? "#ffb310" : "#00d170"} class="bi bi-stopwatch" viewBox="0 0 16 16">
  <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5z"/>
  <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5M8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3"/>
                </svg>
            <h4 style={state === "Past Meeting" ? {color: "#ffb310"} : {color:"#00d170"}}>{meeting?.title}</h4>
            </div>
            <p className={styles.message} style={state === "Past Meeting" ? {color: "#ffb310"} : {color:"#00d170"}} >{meeting?.agenda_text.split(" ").slice(0, 10).join(" ")+"..."}</p>

            <p className={styles.label} style={state === "Past Meeting" ? {color: "#ffb310"} : {color:"#00d170"}}>{state}</p>

            <span className={styles.edit} style={state === "Past Meeting" ? {background: "#ffb310"} : {background:"#00d170"}} aria-disabled={deleting} onClick={async () => {
              setDeleting(true)
              dispatch(deleteMeeting(meeting))
               let res = await fetch("/api/delete-meeting", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify({
                    key: user?.key,
                    fileName: meeting.fileName,
                    id: meeting.id
                  })
                })

            
            }}  >{deleting ? "Deleting" : "Delete"}</span>
    </div>
  )
}
