"use client"

import React, { useEffect } from 'react';
import NavBar from './NavBar';
import styles from '../../HomePageCSS/home.module.css'
import Link from 'next/link';

const Home = () => {
    return (
        <div>
            <NavBar/>
            <div className={styles.homeBody}>
                <div className={styles.heroText}>
                    <h1>The best solution for stuff attendance.</h1>
                    <p>Streamlining school management for efficiency and success. Join ScanA for seamless attendance, smart scheduling, and effective communication - Empowering school staff, revolutionizing education.</p>
                    <div className={styles.Button}><Link href={"/signup"}>Register your school</Link></div>
                </div>


                <div className={styles.Images}>
                    <div className={styles.image1}></div>
                    <div className={styles.image2}></div>
                    <div className={styles.image3}></div>
                    <div className={styles.image4}></div>

                    <h3>ScanA</h3>
                </div>
            </div>
        </div>
    );
}

export default Home;
