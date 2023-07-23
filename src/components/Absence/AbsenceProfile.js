import React from 'react'
import styles from '../HomePageCSS/dashProfile.module.css'

export default function AbsenceProfile({image, slug}) {
  return (
    <div className={styles.Links} >
      <div className={styles.container} style={{height: "130px"}}>
        <div className={styles.profileImage} style={image ? {backgroundImage: `url(${image})`} : {backgroundImage: ""}}>
        {
            !image ? <p style={{position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", width: "100%", fontSize: "15px", textAlign: 'center', height: "50%"}}>No Image Found</p> 
            :
             <></>
          }
    
        </div>
        <div className={styles.profileDetails}>
          <h4>MR S.M MHLONGO</h4>
          <p>Teacher</p>
          <p>No reason given</p>
        </div>
      </div>
    </div>
  )
}
