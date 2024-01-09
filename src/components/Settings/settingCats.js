"use client"
import React from 'react';
import styles from './SettingsCSS/settingsCat.module.css'
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';
const SettingCats = ({title, points}) => {
    const user = useSelector(state => state.Database.value)
    return (
        <div className={styles.Cat}>
            <h4><span></span>{title}</h4>
            <div className={styles.Cont}>

                {
                    points.map((item, index) => {
                        return(
                           <Link href={`/user/${user.school_name.toLowerCase().replace(/\s+/g, '-')}/settings/${item.endpoint}` } prefetch={false} legacyBehavior  key={item + index}>
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