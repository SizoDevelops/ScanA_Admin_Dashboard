"use client"
import React, { useEffect, useState } from 'react'
import styles from '../Settings/SettingsCSS/update-members.module.css'
import { useDatabase } from '../features/dbContext'
import { useDispatch } from 'react-redux'
import { deleteUser, updateMember } from '../shared/DatabaseSlice'



export default function MemberProfile({image,title, initial, last_name, position, id, keyID, paused, blocked}) {
  const {updateUser} = useDatabase()
  const dispatch = useDispatch()
  const {loading} = useDatabase()
  

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
          <h4>{`${title} ${initial} ${last_name}`}</h4>
          <p>{`${position}`}</p>
        </div>
      </div>

        <div className = {styles.options}>
            <p className={styles.Name}>{`${title} ${initial} ${last_name}`}</p>

            <div className={styles.Option}>
                <p onClick={async() =>{ 
                  
                  await updateUser({key: keyID, id: id, pause_register:!paused})
                  dispatch(updateMember({pause_register:!paused}))
                  
                  }}>{ paused ? "Resume Registry Recording" :  "Pause Registry Recording"}</p>
                <p onClick={async() => {
                  
                  await updateUser({key: keyID, id: id, block_user: !blocked})
                  dispatch(updateMember({block_user: !blocked}))
                  }}>{blocked ? "Unblock User" :"Block User"}</p>

                <p onClick={async() =>{ 
                  
                  await updateUser({key: keyID, id: id, delete_user: true})
                  dispatch(deleteUser({delete_user: true}))
                  }}>{"Delete User Information"}</p>
            </div>
        </div>


    </div>
  )
}
