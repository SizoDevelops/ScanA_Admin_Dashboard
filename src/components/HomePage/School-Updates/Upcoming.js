import React from 'react'
import styles from '@/components/HomePage/School-Updates/SchoolCSS/upcoming.module.css'

export default function Upcoming({meeting, state}) {
  return (
    <div className={styles.container}>
                  <div className={styles.header}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stopwatch" viewBox="0 0 16 16">
  <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5z"/>
  <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5M8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3"/>
                </svg>
            <h4>{meeting?.title}</h4>
            </div>
            <p className={styles.message}>{meeting?.agenda_text.split(" ").slice(0, 10).join(" ")+"..."}</p>

            <p className={styles.label}>{state}</p>
    </div>
  )
}
