"use client"
import React from 'react'
import styles from '../HomePageCSS/dashProfile.module.css'
import Link from 'next/link'
import { useSession } from 'next-auth/react'


export default function DashProfile({image, slug, title, initial, last_name, position, center, persal, }) {
  const {data: session} = useSession()
  return (
    <Link href={`/user/${session?.user?.school_name?.split(" ")[0]}${session?.user?.school_name?.split(" ")[1]}/members/${slug}`} className={styles.Links}>
        {/* <div className={styles.profileImage} style={image ? {backgroundImage: `url(${image})`} : {backgroundImage: ""}}></div>
        <div className={styles.profileDetails}>
          <h4>{`Name: ${title} ${initial} ${last_name}`}</h4>
          <p>{`${position}`}</p>
         
        </div> */}
<div className={styles.details}>
  <h2>Registered ScanA Member</h2>
 <div className={styles.cardDetails}>
  <div>
    <div className={styles.profileImage} style={image ? {backgroundImage: `url(${image})`} : {backgroundImage: ""}}></div>
  </div>
        <div className={styles.profileDetails}>
          <h4>{`${position ? position[0] : "Position"}`}</h4>
          <p className={styles.Name}>{`${title} ${initial} ${last_name}`}</p>
          <p>{`Persal No:  ${persal ? persal : "N/A"}`}</p>
          <p>{`School:  ${center}`}</p>
          </div>
 </div>
</div>
<svg xmlns="http://www.w3.org/2000/svg" width="238" height="145" viewBox="0 0 238 145" fill="none">
  <path d="M237 70.2539V88.9712V44.9856V70.2539Z" fill="url(#paint0_linear_2847_263)"/>
  <path d="M237 1H156.02L237 70.2539V44.9856V1Z" fill="url(#paint1_linear_2847_263)"/>
  <path d="M175.301 144H237V88.9712V70.2539L175.301 144Z" fill="url(#paint2_linear_2847_263)"/>
  <path d="M1 93.089V141.754H33.7778L1 93.089Z" fill="url(#paint3_linear_2847_263)"/>
  <path d="M1 1V50.4136L33.7778 1H1Z" fill="url(#paint4_linear_2847_263)"/>
  <path d="M237 88.9712V44.9856M237 88.9712V144H175.301L237 70.2539M237 88.9712V70.2539M237 44.9856V1H156.02L237 70.2539M237 44.9856V70.2539M1 1V50.4136L33.7778 1H1ZM1 93.089V141.754H33.7778L1 93.089Z" stroke="#04A3FF"/>
  <defs>
    <linearGradient id="paint0_linear_2847_263" x1="119" y1="42" x2="86.9643" y2="125.986" gradientUnits="userSpaceOnUse">
      <stop stop-color="#04A3FF"/>
      <stop offset="1" stop-color="#00101A"/>
    </linearGradient>
    <linearGradient id="paint1_linear_2847_263" x1="119" y1="42" x2="86.9643" y2="125.986" gradientUnits="userSpaceOnUse">
      <stop stop-color="#04A3FF"/>
      <stop offset="1" stop-color="#00101A"/>
    </linearGradient>
    <linearGradient id="paint2_linear_2847_263" x1="119" y1="42" x2="86.9643" y2="125.986" gradientUnits="userSpaceOnUse">
      <stop stop-color="#04A3FF"/>
      <stop offset="1" stop-color="#00101A"/>
    </linearGradient>
    <linearGradient id="paint3_linear_2847_263" x1="119" y1="42" x2="86.9643" y2="125.986" gradientUnits="userSpaceOnUse">
      <stop stop-color="#04A3FF"/>
      <stop offset="1" stop-color="#00101A"/>
    </linearGradient>
    <linearGradient id="paint4_linear_2847_263" x1="119" y1="42" x2="86.9643" y2="125.986" gradientUnits="userSpaceOnUse">
      <stop stop-color="#04A3FF"/>
      <stop offset="1" stop-color="#00101A"/>
    </linearGradient>
  </defs>
</svg>

<svg className={styles.Tri} xmlns="http://www.w3.org/2000/svg" width="22" height="42" viewBox="0 0 22 42" fill="none">
  <path d="M0.113281 0.941406L0.951183 41.9467L21.0158 18.3778L0.113281 0.941406Z" fill="#121127"/>
</svg>
<div className={styles.lineOne}></div>
<div className={styles.lineTwo}></div>
<div className={styles.lineT}></div>
    </Link>
  )
}
