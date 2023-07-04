import React from 'react';
import styles from './SettingsCSS/settingsCat.module.css'
import Image from 'next/image';
import endpoints from './endpoints';
const SettingCats = ({title, points}) => {
    return (
        <div className={styles.Cat}>
            <h4><span></span>{title}</h4>
            <div className={styles.Cont}>

                {
                    points.map((item, index) => {
                        return(
                           <div className={styles.Container} key={item + index}>
                                <div className={styles.Icon}>
                                    <Image sizes='40' fill src={"/icons/re.png"} alt="Folder Icon"/>
                                </div>
                                <p>{item.name}</p>
                            </div>
 
                        )
                    })
                    
                    
                }
                    

            </div>
       

            
        </div>
    );
}

export default SettingCats;