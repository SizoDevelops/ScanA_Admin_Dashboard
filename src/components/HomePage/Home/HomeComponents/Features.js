"use client"
import React, { useEffect } from 'react'
import styles from '@/components/HomePageCSS/HomeStyles/Features.module.css'
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Aos from 'aos';
import Image from 'next/image';
import Link from 'next/link';


export default function Features() {
    useEffect(() => {
        Aos.init()
}, [])
  return (
    <div className={styles.cont}>
        <div className={styles.divs} >
            <div className={styles.image} data-aos="fade-left">
            <Image fill src={"/assets/Qr.svg"}/>
            </div>
            <div className={styles.details} data-aos="fade-right">
                <h2><span>QR</span> Code Scanning</h2>
                <p>{"ScanA\'s QR Code scanning feature redefines staff attendance management. With simplicity at its core, it offers an effortless and secure way for teachers to check in and out, ensuring accurate records with just a scan. This innovative technology streamlines administrative tasks, fostering a more efficient and modernized company environment while enhancing accountability and compliance."}</p>
            </div>
        </div>
        <div className={styles.divs}>
            <div className={styles.image} data-aos="fade-right">
            <Image fill src={"/assets/Digital.svg"}/>
            </div>
            <div className={styles.details} data-aos="fade-left">
                <h2><span>Digital</span> Code</h2>
                <p>{"Experience the ease of attendance tracking with ScanA's Code Entering feature. Effortlessly input and manage staff attendance through unique codes, providing a reliable and accessible method for accurate record-keeping. Simplify administrative tasks while ensuring accountability, all at your fingertips."}</p>
            </div>
        </div>
        <div className={styles.divs}>
            <div className={styles.image} data-aos="fade-left">
            <Image fill src={"/assets/calendar.svg"}/>
            </div>
            <div className={styles.details} data-aos="fade-right">
                <h2><span>Attendance</span> Tracking</h2>
                <p>{"Designed with teachers in mind, ScanA's Attendance Tracking feature offers a convenient way to effortlessly manage out attendance. By providing an intuitive platform, it empowers educators to monitor and maintain their attendance records efficiently. Simplify your administrative tasks and focus more on teaching, knowing that your attendance is accurately and easily tracked."}</p>
            </div>
        </div>
        <div className={styles.divs}>
            <div className={styles.image} data-aos="fade-right">
            <Image fill src={"/assets/report.svg"}/>
            </div>
            <div className={styles.details} data-aos="fade-left">
                <h2><span>Absence</span> Reporting</h2>
                <p>{"ScanA's Absence Reporting feature offers a streamlined way for teachers to report absences effortlessly. Simplify the process by promptly notifying administrators, ensuring a smooth workflow even when unforeseen circumstances arise."}</p>
            </div>
        </div>

        <div className={styles.Earth}>
            <div className={styles.EarthImage}>
                <Image fill src={"/assets/earth.svg"}/>
            </div>
            <div className={styles.LeafImage} data-aos="fade-left">
                <Image fill src={"/assets/leaf.svg"}/>
            </div>

           <div className={styles.earthDetails} data-aos="fade-up">
           <h2>ScanA`s <span>Eco-Friendly</span> Attendance <span>Revolutionizes</span> Your company</h2>
            <p>{"Pencils to pixels, paper to progress! ScanA's digital attendance saves trees, streamlines your day, and empowers your company to go green. One click, a greener future.  ♻️"}</p>
           </div>
        </div>

        <div className={styles.Feature}>
            <div className={styles.holder1}>
                <div className={styles.featureImageh}>
                    <div className={styles.mainFImage} data-aos="fade-up">
                    <Image fill src={"/assets/register.svg"}/>
                    </div>
                    <div className={styles.FImage} data-aos="fade-left">
                    <Image fill src={"/assets/time1.svg"}/>
                    </div>
                    <div className={styles.FImage} data-aos="fade-left">
                    <Image fill src={"/assets/time2.svg"}/>
                    </div>
                    <div className={styles.FImage} data-aos="fade-left">
                    <Image fill src={"/assets/time3.svg"}/>
                    </div>
                </div>
                <div className={styles.earthDetails} data-aos="fade-left">
                <h2>Powering Informed Decisions with <span>Smart Attendance Data</span></h2>
                    <p>{"ScanA\'s teacher work attendance feature saves valuable time and resources. Ditch the paper logs, eliminate manual data entry, and enjoy the convenience of click-to-clock attendance. Access real-time data, generate reports with ease, and gain valuable insights to optimize staff management and support."}</p>
                </div>
            </div>
           

           
            <div className={styles.holder2}>
                <div className={styles.featureImageh} >
                    <div className={styles.mainFImage} data-aos="fade-up">
                    <Image fill src={"/assets/downloadreg.svg"}/>
                    </div>
                    <div className={styles.FImage} data-aos="fade-right">
                    <Image fill src={"/assets/sort1.svg"}/>
                    </div>
                    <div className={styles.FImage} data-aos="fade-right">
                    <Image fill src={"/assets/sort2.svg"}/>
                    </div>
                </div>
                <div className={styles.earthDetails} data-aos="fade-right">
                <h2>Take Your Data Anywhere: <span>Export Attendance to Excel with Ease</span></h2>
                    <p>{"Download comprehensive attendance reports directly to Excel, analyzing trends, optimizing schedules, and identifying areas for improvement. Track staff punctuality, monitor leave usage, and ensure compliance with policy."}</p>
                </div>
            </div>
           
           <div className={styles.locate}>
           <div className={styles.earthDetails} data-aos="fade-right">
                <h2>Accurate Attendance, Enhanced Security: ScanA Knows <span>Where</span> and <span>When</span></h2>
                    <p>{"ScanA\'s cutting-edge technology tackles both attendance accuracy and security in one seamless stroke. No more late entries or phantom presences - scan in and out, and ScanA pinpoints your location, ensuring everyone's where they should be, when they should be."}</p>
                </div>

                <div className={styles.LImage} data-aos="fade-left">
                    <Image fill src={"/assets/locate.svg"}/>
                    </div>
           </div>

           <p className={styles.para} data-aos="fade-left">
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
</svg><span>ScanA</span> revolutionizes company management by offering a comprehensive solution for <span>attendance </span>and <span>communication</span>. With intuitive features such as <span>QR code</span> check-ins, <span>accurate attendance tracking</span>, and <span>seamless absence reporting</span>, it simplifies administrative tasks for educators while fostering transparency and accountability</p>
           
           <div className={styles.locate}>
           <div className={styles.CImage} data-aos="fade-left">
                    <Image fill src={"/assets/card.svg"}/>
                    </div>
           <div className={styles.earthDetails} data-aos="fade-right">
                <h2><span>Beyond the Login: </span>Unleash ScanA&apos;s Personalized <span>Profile Management</span></h2>
                    <p>{"No more scrambling for paper or scribbling names! ScanA's innovative profile management simplifies name tag creation like never before. Instantly transform your profile information into eye-catching, personalized name tags."}</p>
                </div>

               
           </div>

            <div className={styles.fCTA} data-aos="fade-up">
                <h2>Try ScanA Now!</h2>
                <div className={styles.Button}><Link href={"/signup"} >Get Started For Free</Link></div>
                <p>{"ScanA isn't just attendance, it's a staff management revolution. Ditch paper trails, empower your team with one-click check-ins, unlock data-driven insights, and foster seamless collaboration - all at your fingertips. Boost efficiency, maximize productivity, and watch your company staff flourish, one scan at a time. Join the digital leap, try ScanA today!"}</p>
            </div>
   
        </div>

    </div>
  )
}
