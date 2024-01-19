"use client"
import React, { useEffect, useState } from 'react'
import styles from '../Settings/SettingsCSS/update-members.module.css'
import { useDatabase } from '../features/dbContext'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, updateMember } from '../shared/DatabaseSlice'
import { useModal } from './modalCont'



export default function MemberProfile({image,title, initial, last_name, position, id, keyID, data, blocked, persal, subjects}) {
  const {updateUser} = useDatabase()
  const dispatch = useDispatch()
  const {setUserData} = useModal()
  const user = useSelector(state => state.Database.value.members)
  const [member, setMember] = useState(user.find(member => member.id === id))

  useEffect(() => {
    setMember(user.find(member => member.id === id))
  },[user])
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
          <h4>{`${title.toUpperCase()} ${initial.toUpperCase()} ${last_name.toUpperCase()}`}</h4>

          <p>{`Position: ${position[0].toUpperCase()}`}</p>
          <p>{`Persal: ${persal || "N/A"}`}</p>
        </div>
      </div>

        <div className = {styles.options}>
            <p className={styles.Name}>{`${title.toUpperCase()} ${initial.toUpperCase()} ${last_name.toUpperCase()}`}</p>

            <div className={styles.Option}>
                <p onClick={async() =>{ 
                  
                  setUserData(data)
             
                  }}>Update Profile</p>
                <p onClick={async() => {
                  const newData = {
                    ...member,
                    block_user: member.block_user ? false : true,
                  }
                  dispatch(updateMember(newData))
                  await updateUser({key: keyID, user_details: newData})
                  
                  }}>{member.block_user ? "Unblock User" :"Block User"}</p>

                <p onClick={async() =>{ 
                  dispatch(deleteUser({delete_user: true}))
                  await updateUser({key: keyID, user_details:data, delete_user: true})
                  
                  }}>{"Delete User"}</p>
            </div>
        </div>


    </div>
  )
}
