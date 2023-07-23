import React from 'react'
import styles from '@/app/page.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function SidePanel() {
  return (
    <div className={styles.sidePanel}>
    <Link href={"/"} className={styles.sideIcon}>
      <Image sizes='30' fill src={"/icons/bi_folder.png"} alt="Folder Icon"/>
    </Link>
    <Link href={"/updates"} className={styles.sideIcon}>
    <Image sizes='30' fill src={"/icons/carbon_calendar.png"} alt="Folder Icon"/>
    </Link>
    <Link href={"/excel-files"} className={styles.sideIcon}>
    <Image sizes='30' fill src={"/icons/excel.png"} alt="Folder Icon"/>
    </Link>
    <Link href={"/absentees"} className={styles.sideIcon}>
    <Image sizes='30' fill src={"/icons/iconoir_missing-font.png"} alt="Folder Icon"/>
    </Link>
    <Link href={"/settings"} className={styles.sideIcon}>
    <Image sizes='30' fill src={"/icons/settings.png"} alt="Folder Icon"/>
    </Link>
    <Link href={"/"} className={styles.sideIcon}>
    <Image sizes='30' fill src={"/icons/carbon_help.png"} alt="Folder Icon"/>
    </Link>
</div>
  )
}
