"use client"
import React, { useEffect } from 'react'
import styles from '@/components/HomePageCSS/HomeStyles/Convos.module.css'
import Image from 'next/image'
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Aos from 'aos';
import Link from 'next/link';


export default function Convos() {

    useEffect(() => {
        Aos.init()
}, [])
  return (
    <div className={styles.cont}>
        <h2 data-aos="fade-right">From <span>Challenges</span> to <span>Champions</span>: Building a Collective Intervention Approach</h2>
        <div className={styles.convoCont}>
            <div className={styles.image1} data-aos="fade-right">
                <Image fill src={"/assets/convo1.svg"}/>
            </div>
            <div className={styles.image2} data-aos="fade-left" data-aos-delay="500">
                <Image fill src={"/assets/convo2.svg"}/>
            </div>
            <div className={styles.image3} data-aos="fade-up">
                <Image fill src={"/assets/convo3.svg"}/>
            </div>
            <div className={styles.image4} data-aos="fade-left">
                <Image fill src={"/assets/convo4.svg"}/>
            </div>
            <div className={styles.image5} data-aos="fade-right">
                <Image fill src={"/assets/convo5.svg"}/>
            </div>
        </div>

        <div className={styles.benefits} data-aos="fade-up">
            <div className={styles.ben} data-aos="fade-left">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-qr-code-scan" viewBox="0 0 16 16">
  <path d="M0 .5A.5.5 0 0 1 .5 0h3a.5.5 0 0 1 0 1H1v2.5a.5.5 0 0 1-1 0zm12 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V1h-2.5a.5.5 0 0 1-.5-.5M.5 12a.5.5 0 0 1 .5.5V15h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H15v-2.5a.5.5 0 0 1 .5-.5M4 4h1v1H4z"/>
  <path d="M7 2H2v5h5zM3 3h3v3H3zm2 8H4v1h1z"/>
  <path d="M7 9H2v5h5zm-4 1h3v3H3zm8-6h1v1h-1z"/>
  <path d="M9 2h5v5H9zm1 1v3h3V3zM8 8v2h1v1H8v1h2v-2h1v2h1v-1h2v-1h-3V8zm2 2H9V9h1zm4 2h-1v1h-2v1h3zm-4 2v-1H8v1z"/>
  <path d="M12 9h2V8h-2z"/>
</svg>
                <h3>Effortless Attendance</h3>
                <p>Replace paper roll calls with a single scan. Save time, boost efficiency, and empower staff with personalized attendance insights.</p>
            </div>

            <div className={styles.ben} data-aos="fade-right">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-crosshair" viewBox="0 0 16 16">
  <path d="M8.5.5a.5.5 0 0 0-1 0v.518A7 7 0 0 0 1.018 7.5H.5a.5.5 0 0 0 0 1h.518A7 7 0 0 0 7.5 14.982v.518a.5.5 0 0 0 1 0v-.518A7 7 0 0 0 14.982 8.5h.518a.5.5 0 0 0 0-1h-.518A7 7 0 0 0 8.5 1.018zm-6.48 7A6 6 0 0 1 7.5 2.02v.48a.5.5 0 0 0 1 0v-.48a6 6 0 0 1 5.48 5.48h-.48a.5.5 0 0 0 0 1h.48a6 6 0 0 1-5.48 5.48v-.48a.5.5 0 0 0-1 0v.48A6 6 0 0 1 2.02 8.5h.48a.5.5 0 0 0 0-1zM8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
</svg>
                <h3>Automated Attendance Management</h3>
                <p>Streamlined and error-free attendance tracking for staff using two efficient methods: unique codes and QR code scanning.</p>
            </div>

            <div className={styles.ben} data-aos="fade-up">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stars" viewBox="0 0 16 16">
  <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
</svg>
                <h3>Go Green, Stay Smart</h3>
                <p>Save paper, reduce printing, and contribute to a sustainable company environment. ScanA&apos;s digital solutions are good for the planet and good for your budget.</p>
            </div>

            <div className={styles.ben} data-aos="fade-left">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
</svg>
                <h3>Location-Based Security Measures:</h3>
                <p>Ensures attendance is recorded within company premises using location-based tracking, enhancing campus security.</p>
            </div>



            <div className={styles.ben} data-aos="fade-left">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone-flip" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11 1H5a1 1 0 0 0-1 1v6a.5.5 0 0 1-1 0V2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a.5.5 0 0 1-1 0V2a1 1 0 0 0-1-1m1 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2a.5.5 0 0 0-1 0v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2a.5.5 0 0 0-1 0zM1.713 7.954a.5.5 0 1 0-.419-.908c-.347.16-.654.348-.882.57C.184 7.842 0 8.139 0 8.5c0 .546.408.94.823 1.201.44.278 1.043.51 1.745.696C3.978 10.773 5.898 11 8 11q.148 0 .294-.002l-1.148 1.148a.5.5 0 0 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2a.5.5 0 1 0-.708.708l1.145 1.144L8 10c-2.04 0-3.87-.221-5.174-.569-.656-.175-1.151-.374-1.47-.575C1.012 8.639 1 8.506 1 8.5c0-.003 0-.059.112-.17.115-.112.31-.242.6-.376Zm12.993-.908a.5.5 0 0 0-.419.908c.292.134.486.264.6.377.113.11.113.166.113.169s0 .065-.13.187c-.132.122-.352.26-.677.4-.645.28-1.596.523-2.763.687a.5.5 0 0 0 .14.99c1.212-.17 2.26-.43 3.02-.758.38-.164.713-.357.96-.587.246-.229.45-.537.45-.919 0-.362-.184-.66-.412-.883s-.535-.411-.882-.571M7.5 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z"/>
</svg>
                <h3>Technological Advancement in Education:</h3>
                <p>Encourages the adoption of technology in schools, contributing to educational modernization and innovation.</p>
            </div>

            <div className={styles.ben} data-aos="fade-left">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-smartwatch" viewBox="0 0 16 16">
  <path d="M9 5a.5.5 0 0 0-1 0v3H6a.5.5 0 0 0 0 1h2.5a.5.5 0 0 0 .5-.5z"/>
  <path d="M4 1.667v.383A2.5 2.5 0 0 0 2 4.5v7a2.5 2.5 0 0 0 2 2.45v.383C4 15.253 4.746 16 5.667 16h4.666c.92 0 1.667-.746 1.667-1.667v-.383a2.5 2.5 0 0 0 2-2.45V8h.5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5H14v-.5a2.5 2.5 0 0 0-2-2.45v-.383C12 .747 11.254 0 10.333 0H5.667C4.747 0 4 .746 4 1.667M4.5 3h7A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3"/>
</svg>
                <h3>Time-Saving Automation:</h3>
                <p>The automation of attendance processes frees up valuable teaching time, allowing educators to focus more on instruction and less on administrative tasks.</p>
            </div>



        </div>

        <div className={styles.lastCTA} data-aos="fade-up">
        <h2>Upgrade to <span>ScanA</span> Today!</h2>
        <p>Ready to transform your company&apos;s attendance management? Upgrade to ScanA now for streamlined processes, enhanced security, and unparalleled efficiency. Elevate your institution&apos;s standards and join the future of attendance tracking. </p>
        </div>
        <h2>FAQ</h2>
        <div className={styles.FAQ} data-aos="fade-up">
                <div className={styles.faqCont}>
                    <h3>Q: What is ScanA?</h3>
                    <p>A: ScanA is an advanced attendance management solution designed for schools. It leverages location-based tracking and smart technologies to automate and secure the attendance recording process.</p>
                </div>
                <div className={styles.faqCont}>
                    <h3>Q: How does ScanA work?</h3>
                    <p>A: ScanA uses unique codes and QR code scanning to record staff attendance. Location-based verification ensures that attendance is marked only when staff members are within the company premises.</p>
                </div>
                <div className={styles.faqCont}>
                    <h3>Q: Is ScanA suitable for different types of schools??</h3>
                    <p>A: Yes, ScanA is designed to cater to the attendance management needs of various educational institutions, including schools of different sizes and types.</p>
                </div>
                <div className={styles.faqCont}>
                    <h3>Q: Can ScanA be integrated with other company management systems?</h3>
                    <p>A: Yes, ScanA offers integration capabilities with other company management systems, providing a seamless and comprehensive solution.</p>
                </div>
                <div className={styles.faqCont}>
                    <h3>Q: How does ScanA ensure data security?</h3>
                    <p>A: ScanA employs password protection, encryption, and access controls to secure data. Additionally, it facilitates read-only modes and digital signatures for data integrity.</p>
                </div>
                <div className={styles.faqCont}>
                    <h3>Q: What support options are available for ScanA users?</h3>
                    <p>A: ScanA provides various support options, including a user guide, FAQs, and a dedicated support team to assist users with any inquiries or issues.</p>
                </div>
                <div className={styles.faqCont}>
                    <h3>Q: What are the advantages of the location-based tracking feature?</h3>
                    <p>A: Location-based tracking enhances security by ensuring that attendance is recorded only when staff members are physically present within the company premises.</p>
                </div>
                <div className={styles.faqCont}>
                    <h3>Q: Is ScanA suitable for large educational institutions?</h3>
                    <p>A: Yes, ScanA is scalable and can be effectively implemented in both small and large educational institutions.</p>
                </div>
                {/* <div className={styles.faqCont}>
                    <h3>Q: Can I customize ScanA to fit my schools branding?</h3>
                    <p>A: Yes, ScanA allows for customization, including custom branding and theme options to align with your schools identity.</p>
                </div> */}
                <div className={styles.faqCont}>
                    <h3>Q: How often are updates and new features released for ScanA?</h3>
                    <p>A: ScanA is regularly updated to incorporate new features, improvements, and security enhancements. Updates are released periodically to ensure optimal functionality.</p>
                </div>
                <div className={styles.faqCont}>
                    <h3>Q: Can I schedule meetings through ScanA?</h3>
                    <p>A: Yes, ScanA offers meeting scheduling features, allowing staff members to schedule and manage meetings efficiently.</p>
                </div>
                <div className={styles.faqCont}>
                    <h3>Q: Is there a trial period available for ScanA?</h3>
                    <p>A: Yes, ScanA provides a trial period for institutions to explore its features and evaluate its compatibility with their needs before making a commitment.</p>
                </div>
        </div>

        <div className={styles.lastCall} data-aos="fade-up">
     
            <div>
                <h2>Unlock <span>Efficiency</span> and <span>Security</span> with ScanA</h2>
                <p>ScanA empowers educators. Say goodbye to manual errors and hello to a new era of secure, efficient, and accountable attendance management. Elevate your company&apos;s operations with ScanA!</p>
            </div>
            <div>
                    <h3>Transform Your company Today with ScanA!</h3>
                      <div className={styles.Button}><Link href={"/signup"} >Try ScanA For Free</Link></div>  
            </div>
            <div className={styles.imageD1}>
            <Image fill src={"/assets/bubble1.svg"}/>
        </div>
        <div className={styles.imageD2}>
            <Image fill src={"/assets/bubble2.svg"}/>
        </div>
        </div>
        
        <div className={styles.CTA}>
        <p data-aos="fade-right">ScanA empowers educators. Say goodbye to manual errors and hello to a new era of secure, efficient, and accountable attendance management. Elevate your company&apos;s operations with ScanA!</p>
     
                      <div className={styles.Button} data-aos="fade-left"><Link href={"/signup"} >Try ScanA For Free</Link></div>  
          
        </div>
  
    </div>
  )
}
