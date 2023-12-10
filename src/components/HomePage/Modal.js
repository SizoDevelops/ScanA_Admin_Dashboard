"use client"
import React, { useEffect, useState } from 'react'
import styles from "@/components/HomePageCSS/modal.module.css"
import { useDatabase } from '../features/dbContext'

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
                                    {/* <Image sizes='40' fill src={"/icons/Checked.png"} alt="Folder Icon"/> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
</svg>
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
                                    {/* <Image sizes='40' fill src={"/icons/Error.png"} alt="Folder Icon"/> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
</svg>
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
                                    {/* <Image sizes='40' fill src={"/icons/Confu.png"} alt="Folder Icon"/> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bug" viewBox="0 0 16 16">
  <path d="M4.355.522a.5.5 0 0 1 .623.333l.291.956A4.979 4.979 0 0 1 8 1c1.007 0 1.946.298 2.731.811l.29-.956a.5.5 0 1 1 .957.29l-.41 1.352A4.985 4.985 0 0 1 13 6h.5a.5.5 0 0 0 .5-.5V5a.5.5 0 0 1 1 0v.5A1.5 1.5 0 0 1 13.5 7H13v1h1.5a.5.5 0 0 1 0 1H13v1h.5a1.5 1.5 0 0 1 1.5 1.5v.5a.5.5 0 1 1-1 0v-.5a.5.5 0 0 0-.5-.5H13a5 5 0 0 1-10 0h-.5a.5.5 0 0 0-.5.5v.5a.5.5 0 1 1-1 0v-.5A1.5 1.5 0 0 1 2.5 10H3V9H1.5a.5.5 0 0 1 0-1H3V7h-.5A1.5 1.5 0 0 1 1 5.5V5a.5.5 0 0 1 1 0v.5a.5.5 0 0 0 .5.5H3c0-1.364.547-2.601 1.432-3.503l-.41-1.352a.5.5 0 0 1 .333-.623zM4 7v4a4 4 0 0 0 3.5 3.97V7zm4.5 0v7.97A4 4 0 0 0 12 11V7zM12 6a3.989 3.989 0 0 0-1.334-2.982A3.983 3.983 0 0 0 8 2a3.983 3.983 0 0 0-2.667 1.018A3.989 3.989 0 0 0 4 6z"/>
</svg>
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
