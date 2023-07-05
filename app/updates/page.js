import React from 'react';
import styles from '@/components/Updates/UpdatesCSS/home.module.css'
import SidePanel from '@/components/HomePage/sidePanel';
import Image from 'next/image';
import Updates from '@/components/Updates/updates';
const Page = () => {
    return (
        <div className={styles.container}>
            <SidePanel/>
            <div className={styles.cont}>
                <div className={styles.postButton}>
                        <div className={styles.sideIcon}>
                        <Image sizes='30' fill src={"/icons/carbon_calendar.png"} alt="Folder Icon"/>
                        </div>
                        <p>Post a new update</p>
                </div>
                <div className={styles.content}>
                    <Updates/>
                    <Updates/>
                    <Updates/>
                    <Updates/>
                    <Updates/>
                </div>
            </div>
        </div>
    );
}

export default Page;
