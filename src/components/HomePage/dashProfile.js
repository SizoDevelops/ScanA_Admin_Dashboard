import React from 'react'
import styles from '../HomePageCSS/dashProfile.module.css'
import Link from 'next/link'


export default function DashProfile({image, slug, title, initial, last_name, position, data}) {
  return (
    <Link href={`/members/${slug}`} className={styles.Links}>
      <div className={styles.container} >
        <div className={styles.profileImage} style={image ? {backgroundImage: `url(${image})`} : {backgroundImage: ""}}>

          {
            !image ? <p style={{position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", width: "100%", fontSize: "15px", textAlign: 'center', height: "50%"}}>No Image Found</p> 
            :
             <></>
          }
    
        </div>
        <div className={styles.profileDetails}>
          <h4>{`${title} ${initial} ${last_name}`}</h4>
          <p>{`${position}`}</p>
        </div>
      </div>
    </Link>
  )
}
