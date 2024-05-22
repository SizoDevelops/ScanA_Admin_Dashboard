import React from 'react'
import styles from '@/components/HomePageCSS/schoolsUpdates.module.css'
import SchoolUpdatesHome from '@/components/HomePage/School-Updates/SchoolUpdatesHome'
export default function Page() {
  return (
    <body className={styles.container}>
      
        <SchoolUpdatesHome/>
    </body>
  )
}