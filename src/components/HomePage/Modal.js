"use client"
import React, { useEffect, useState } from 'react'
import styles from "@/components/HomePageCSS/modal.module.css"
export default function Modal({errCode}) {

  return (
    <div className={styles.container}>
        <p>{errCode}</p>
        <div >
            OK
        </div>
    </div>
  )
}
