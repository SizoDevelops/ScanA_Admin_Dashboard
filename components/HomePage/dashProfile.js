import React from 'react'
import styles from '../HomePageCSS/dashProfile.module.css'
import Image from 'next/image'

export default function DashProfile({image}) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.profileImage} style={image ? {backgroundImage: `url(${image})`} : {backgroundImage: ""}}>

        </div>
        <div className={styles.profileDetails}>
          <h4>MR S.M MHLONGO</h4>
          <p>Teacher</p>
        </div>
      </div>
    </>
  )
}
