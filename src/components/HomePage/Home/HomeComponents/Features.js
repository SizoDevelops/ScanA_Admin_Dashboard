import React from 'react'
import styles from '@/components/HomePageCSS/HomeStyles/Features.module.css'
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Aos from 'aos';
import Image from 'next/image';
Aos.init()

export default function Features() {
  return (
    <div className={styles.cont}>
        <div className={styles.divs}>
            <div className={styles.image}>
            <Image fill src={"/assets/Qr.svg"}/>
            </div>
            <div className={styles.details}>
                <h2><span>QR</span> Code Scanning</h2>
                <p>{"ScanA\'s QR Code scanning feature redefines staff attendance management. With simplicity at its core, it offers an effortless and secure way for teachers to check in and out, ensuring accurate records with just a scan. This innovative technology streamlines administrative tasks, fostering a more efficient and modernized school environment while enhancing accountability and compliance."}</p>
            </div>
        </div>
        <div className={styles.divs}>
            <div className={styles.image}>
            <Image fill src={"/assets/Digital.svg"}/>
            </div>
            <div className={styles.details}>
                <h2><span>Digital</span> Code</h2>
                <p>{"Experience the ease of attendance tracking with ScanA's Code Entering feature. Effortlessly input and manage staff attendance through unique codes, providing a reliable and accessible method for accurate record-keeping. Simplify administrative tasks while ensuring accountability, all at your fingertips."}</p>
            </div>
        </div>
        <div className={styles.divs}>
            <div className={styles.image}>
            <Image fill src={"/assets/calendar.svg"}/>
            </div>
            <div className={styles.details}>
                <h2><span>Attendance</span> Tracking</h2>
                <p>{"Designed with teachers in mind, ScanA's Attendance Tracking feature offers a convenient way to effortlessly manage out attendance. By providing an intuitive platform, it empowers educators to monitor and maintain their attendance records efficiently. Simplify your administrative tasks and focus more on teaching, knowing that your attendance is accurately and easily tracked."}</p>
            </div>
        </div>
        <div className={styles.divs}>
            <div className={styles.image}>
            <Image fill src={"/assets/report.svg"}/>
            </div>
            <div className={styles.details}>
                <h2><span>Absence</span> Reporting</h2>
                <p>{"ScanA's Absence Reporting feature offers a streamlined way for teachers to report absences effortlessly. Simplify the process by promptly notifying administrators, ensuring a smooth workflow even when unforeseen circumstances arise."}</p>
            </div>
        </div>

        <div className={styles.Earth}>
            <div className={styles.EarthImage}>
                <Image fill src={"/assets/earth.svg"}/>
            </div>
           <div className={styles.earthDetails}>
           <h2>ScanA`s <span>Eco-Friendly</span> Attendance <span>Revolutionizes</span> Your School</h2>
            <p>{"Pencils to pixels, paper to progress! ScanA's digital attendance saves trees, streamlines your day, and empowers your school to go green. One click, a greener future.  ♻️"}</p>
           </div>
        </div>

    </div>
  )
}
