import React from 'react'
import styles from '../Settings/SettingsCSS/update-members.module.css'


export default function MemberProfile({image}) {
  return (
    <div className={styles.Links}>
      <div className={styles.containerProfile} >
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
        </div>
      </div>

        <div className = {styles.options}>
            <p className={styles.Name}>MR S.M MHLONGO</p>

            <div className={styles.Option}>
                <p>Update Details</p>
                <p>Pause Registry Recording</p>
                <p>Block User</p>
                <p>Delete User Information</p>
            </div>
        </div>


    </div>
  )
}
