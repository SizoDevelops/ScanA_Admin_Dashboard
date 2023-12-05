"use client"
import React from 'react';
import styles from './SettingsCSS/settingsCat.module.css'
import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
const SettingCats = ({title, points}) => {
    const {data: session, status} = useSession()
    return (
        <div className={styles.Cat}>
            <h4><span></span>{title}</h4>
            <div className={styles.Cont}>

                {
                    points.map((item, index) => {
                        return(
                           <Link href={`/user/${session?.user?.school_name?.split(" ")[0]}${session?.user?.school_name?.split(" ")[1]}/settings/${item.endpoint}` } prefetch={false} legacyBehavior  key={item + index}>
                                <div className={styles.Container}>
                                <div className={styles.Icon}>
                                    {/* <Image sizes='40' fill src={ item.icon !== "" ? item.icon : "/icons/re.png"} alt="Folder Icon"/> */}
                                    {item.icon}
                                </div>
                                <p className={styles.Name}>{item.name}</p>
                                </div>
                            </Link>
 
                        )
                    })
                    
                    
                }
                    

            </div>
       

            
        </div>
    );
}

export default SettingCats;