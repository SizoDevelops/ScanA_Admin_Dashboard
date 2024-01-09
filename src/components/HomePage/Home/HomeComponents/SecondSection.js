import React from 'react'
import styles from '@/components/HomePageCSS/HomeStyles/SecondSection.module.css'
import Image from 'next/image'
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Aos from 'aos';
Aos.init()

export default function SecondSection() {
  return (
    <div className={styles.cont}>
        <h2><span>Simplifying</span> school management and <span>enhancing</span> productivity.</h2>
        <div className={styles.Image} data-aos="fade-up">
            <Image fill src={"/assets/simplify.svg"}/>
        </div>
        <h2>Effortless <span>Communication</span> and <span>Collaboration.</span></h2>
        <div className={styles.secondLayer}>
            <div className={styles.mainImage} data-aos="fade-up">
            <Image fill src={"/assets/updates.svg"}/>
            </div>
            <div className={styles.meetings} data-aos="fade-left">
            <Image fill src={"/assets/meetings.svg"}/>
            </div>
            <div className={styles.posts} data-aos="fade-right">
            <Image fill src={"/assets/post.svg"}/>
            </div>
            <div className={styles.discuss}>
            <Image fill src={"/assets/discuss.svg"} data-aos="fade-left"/>
            </div>
        </div>
    </div>
  )
}
