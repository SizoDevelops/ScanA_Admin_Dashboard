"use client"
import React, { useEffect, useState } from 'react'
import styles from '../Settings/SettingsCSS/update-members.module.css'
import { useDatabase } from '../features/dbContext'
import { useDispatch } from 'react-redux'
import { deleteUser, updateMember } from '../shared/DatabaseSlice'
import { useModal } from './modalCont'



export default function MemberProfile({image,title, initial, last_name, position, id, keyID, data, blocked, persal, subjects}) {
  const {updateUser} = useDatabase()
  const dispatch = useDispatch()
  const {setUserData} = useModal()
  const {loading} = useDatabase()
  

return (
  
    <div className={styles.Links}>
      <div className={styles.containerProfile} >
        <div className={styles.profileImage} style={image ? {backgroundImage: `url(${image})`} : {backgroundImage: ""}}>

          {
            !image ? <p style={{position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", width: "100%", fontSize: "14px", textAlign: 'center', height: "30%"}}>No Image Found</p> 
            :
             <></>
          }
    
        </div>
        <div className={styles.profileDetails}>
          <h4>{`${title} ${initial} ${last_name}`}</h4>

          <p>{`Position: ${position[0]+"..."}`}</p>
          <p>{`Persal: ${persal || "N/A"}`}</p>
        </div>
      </div>

        <div className = {styles.options}>
            <p className={styles.Name}>{`${title} ${initial} ${last_name}`}</p>

            <div className={styles.Option}>
                <p onClick={async() =>{ 
                  
                  setUserData(data)
             
                  }}>Update Profile</p>
                {/* <p onClick={async() => {
                  
                  await updateUser({key: keyID, id: id, block_user: !blocked})
                  dispatch(updateMember({block_user: !blocked}))
                  }}>{blocked ? "Unblock User" :"Block User"}</p> */}

                <p onClick={async() =>{ 
                  
                  await updateUser({key: keyID, user_details:{id}, delete_user: true})
                  dispatch(deleteUser({delete_user: true}))
                  }}>{"Delete User Information"}</p>
            </div>
        </div>


    </div>
  )
}
