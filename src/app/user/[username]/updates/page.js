import React from 'react';
import styles from '@/components/Updates/UpdatesCSS/home.module.css'
import SidePanel from '@/components/HomePage/sidePanel';
import Image from 'next/image';
import Updates from '@/components/Updates/updates';
import { useRouter } from 'next/router';
const Page = () => {
    const router = useRouter();
    useEffect(() => {
        const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    
        if (isMobile) {
          router.push("https://scana.co.za");
        }
        
      }, []);
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
