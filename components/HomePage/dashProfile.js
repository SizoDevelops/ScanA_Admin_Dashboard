import React from 'react'
import styles from '../HomePageCSS/dashProfile.module.css'
import Image from 'next/image'
import Link from 'next/link'


export default function DashProfile({image, slug}) {
  return (
    <Link href={`/members/${slug}`} className={styles.Links}>
      <div className={styles.container} >
        <div className={styles.profileImage} style={image ? {backgroundImage: `url(${image})`} : {backgroundImage: ""}}>

        </div>
        <div className={styles.profileDetails}>
          <h4>MR S.M MHLONGO</h4>
          <p>Teacher</p>
        </div>
      </div>
    </Link>
  )
}
