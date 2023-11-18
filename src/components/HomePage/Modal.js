"use client"
import React, { useEffect, useState } from 'react'
import styles from "@/components/HomePageCSS/modal.module.css"
import { useDatabase } from '../features/dbContext'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
export default function Modal({errCode}) {

  if(errCode.type === "Success"){
    return <Success errCode={errCode}/>
  }
  else if (errCode.type === "Error"){
    return <Error errCode={errCode}/>
  }
  else {
  return <Other errCode={errCode}/>
}
}
function Success({errCode}) {
 
  const {setCode} = useDatabase()
  return (
    <div className={styles.modalCont} >
        <div className={styles.container} >

          <div className={styles.IconHolder} style={{background: "#00c76a"}}>
              <div className={styles.Icon} >
                                    <Image sizes='40' fill src={"/icons/Checked.png"} alt="Folder Icon"/>
                                </div>
          </div>
      <h3 className={styles.title}>{errCode.title}</h3>
        <p className={styles.para}>{errCode.message}</p>
        <div className={styles.Button} onClick={() => {setCode({title: "", message: "", type: ""})
      }}>
            OK
        </div>
    </div>
    </div>
  )
}
function Error({errCode}) {

  const {setCode} = useDatabase()
  return (
    <div className={styles.modalCont} >
        <div className={styles.container} >

          <div className={styles.IconHolder} style={{background: "#f85757"}}>
              <div className={styles.Icon}>
                                    <Image sizes='40' fill src={"/icons/Error.png"} alt="Folder Icon"/>
                                </div>
          </div>
      <h3 className={styles.title}>{errCode.title}</h3>
        <p className={styles.para}>{errCode.message}</p>
        <div className={styles.Button} onClick={() => {setCode({title: "", message: "", type: ""})  
    
      }}>
            OK
        </div>
    </div>
    </div>
  )
}
function Other({errCode}) {
  const {setCode} = useDatabase()
  return (
    <div className={styles.modalCont} >
        <div className={styles.container} >

          <div className={styles.IconHolder} style={{background: "#0582ff"}}>
              <div className={styles.Icon}>
                                    <Image sizes='40' fill src={"/icons/Confu.png"} alt="Folder Icon"/>
                                </div>
          </div>
      <h3 className={styles.title}>{errCode.title}</h3>
        <p className={styles.para}>{errCode.message}</p>
        <div className={styles.Button} onClick={() => setCode({title: "", message: "", type: ""})}>
            OK
        </div>
    </div>
    </div>
  )
}
