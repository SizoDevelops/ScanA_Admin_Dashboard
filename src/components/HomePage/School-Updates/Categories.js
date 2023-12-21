import React, { useState } from 'react'
import styles from './SchoolCSS/categories.module.css'
import { Button, Fab } from '@mui/material'
import { useDatabase } from '@/components/features/dbContext'
import CreatePost from './CreatePost'

export default function Categories() {
    const {setMeeting} = useDatabase()
    const [show, setDisplay] = useState(false)
  return (
    <React.Fragment calssName={styles.Cont}>
             {
             show ? <CreatePost display={setDisplay} /> : <></>}
  
    <div className={styles.container}>
  
          <Button className={styles.close} variant="contained" color='primary' onClick={() => setMeeting("")}>Back</Button>
        <div>
            <p onClick={() => setMeeting("Messages")}>General School Information:</p>
            <ul>
                <li><strong>Announcements and news</strong>: Share school-wide announcements, upcoming events, and important updates.</li>
            </ul>

            <Fab color="primary" className={styles.btn} onClick={() => setDisplay(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
</svg></Fab>
        </div>
        <div>
            <p onClick={() => setMeeting("Messages")}>Student Life and Well-being:</p>
            <ul>
                <li><strong>Student council and student government</strong>: Provide a platform for students to discuss issues, share ideas, and engage with school administration.</li>
                <li><strong>Mental health and wellness</strong>: Offer a supportive space for students to discuss mental health concerns, share resources, and access help.</li>
            </ul>
            <Fab color="primary" className={styles.btn} onClick={() => setDisplay(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
</svg></Fab>
        </div>
        <div>
            <p onClick={() => setMeeting("Messages")}>Parent and Community Involvement:</p>
            <ul>
                <li><strong>School volunteering and fundraising</strong>: Discuss volunteer opportunities, fundraising events, and ways parents can contribute to the school community.</li>
                <li><strong>Diversity and Inclusion</strong>: For promoting understanding and celebrating diversity within the school community.</li>
            </ul>
            <Fab color="primary" className={styles.btn} onClick={() => setDisplay(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
</svg></Fab>
        </div>
    </div>
    </React.Fragment>
  )
}
