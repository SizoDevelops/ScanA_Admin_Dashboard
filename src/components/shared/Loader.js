import React from 'react'
import styles from '../HomePageCSS/Loader.module.css'

export default function Loader() {
  return (
    <body className={styles.container}>
        <div className={styles.cont}>
            <span></span>
            <div className={styles.dashProfile} ></div>

        </div>
        

    </body>
  )
}
