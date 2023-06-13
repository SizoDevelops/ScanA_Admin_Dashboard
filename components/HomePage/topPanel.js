import React from 'react'
import styles from '@/components/HomePageCSS/topPannel.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function TopPanel() {
  return (
    <div className={styles.sidePanel}>
    <div className={styles.sideIcon}>
      <Image sizes='30' fill src={"/icons/bi_folder.png"} alt="Folder Icon"/>
    </div>
    <div className={styles.sideIcon}>
    <Image sizes='30' fill src={"/icons/carbon_calendar.png"} alt="Folder Icon"/>
    </div>
    <Link href={"/excel-files"} className={styles.sideIcon}>
    <Image sizes='30' fill src={"/icons/excel.png"} alt="Folder Icon"/>
    </Link>
    <div className={styles.sideIcon}>
    <Image sizes='30' fill src={"/icons/iconoir_missing-font.png"} alt="Folder Icon"/>
    </div>
    <div className={styles.sideIcon}>
    <Image sizes='30' fill src={"/icons/carbon_help.png"} alt="Folder Icon"/>
    </div>
</div>
  )
}
