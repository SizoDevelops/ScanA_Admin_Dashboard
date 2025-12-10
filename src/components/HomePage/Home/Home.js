"use client"
import NavBar from './NavBar';
import styles from '../../HomePageCSS/home.module.css'
import Link from 'next/link';
import SecondSection from './HomeComponents/SecondSection';
import Image from 'next/image';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Aos from 'aos';
import Features from './HomeComponents/Features';
import { useEffect } from 'react';
import Convos from './HomeComponents/Convos';
import Footer from './HomeComponents/Footer';
import { redirect } from 'next/navigation';

const Home = () => {
    useEffect(() => {
        const isMobile = window.matchMedia("(max-width: 768px)").matches;
        const hasTouch = "maxTouchPoints" in navigator && navigator.maxTouchPoints > 0;
    
        if(hasTouch){
          redirect("https://scana.co.za")
        }
        Aos.init()
}, [])
    return (
        <div className={styles.container}>
            <NavBar/>
            <div className={styles.homeBody}>
                <div className={styles.heroText}>
                    <h1>The best <span>solution</span> for staff attendance.</h1>
                    <p>Streamlining company management for efficiency and success. Join ScanA for seamless attendance, smart scheduling, and effective communication - Empowering company staff, revolutionizing education.</p>
                    <div className={styles.Button}><Link href={"/signup"} >Get Started For Free</Link></div>
                </div>


                <div className={styles.Images}>
                    <div>
                        <div className={styles.image1} data-aos="fade-left">
                            <Image fill src={"/assets/homepage1.svg"}/>
                        </div>
                    <div className={styles.image2} data-aos="fade-up">
                         <Image fill src={"/assets/homepage2.svg"}/>
                         </div>  
                    </div>
                  <div>
                    <div className={styles.image3}>
                    <Image fill src={"/assets/phone1.svg"}/>
                    </div>
                    <div className={styles.image4} data-aos="fade-up-left">
                    <Image fill src={"/assets/phone2.svg" }  />
                    </div>
                  </div>
                    

                    <h2>ScanA</h2>
                </div>
                
            </div>

            <SecondSection/>
            <Features/>
            <Convos/>
            <Footer/>
        </div>
    );
}

export default Home;
