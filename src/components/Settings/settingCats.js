import React from 'react';
import styles from './SettingsCSS/settingsCat.module.css'
import Image from 'next/image';
import Link from 'next/link';
const SettingCats = ({title, points}) => {
    return (
        <div className={styles.Cat}>
            <h4><span></span>{title}</h4>
            <div className={styles.Cont}>

                {
                    points.map((item, index) => {
                        return(
                           <Link href={'/settings/' + item.endpoint} className={styles.Container} key={item + index}>
                                <div className={styles.Icon}>
                                    <Image sizes='40' fill src={ item.icon !== "" ? item.icon : "/icons/re.png"} alt="Folder Icon"/>
                                </div>
                                <p className={styles.Name}>{item.name}</p>
                            </Link>
 
                        )
                    })
                    
                    
                }
                    

            </div>
       

            
        </div>
    );
}

export default SettingCats;