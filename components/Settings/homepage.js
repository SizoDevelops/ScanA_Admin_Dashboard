import React from 'react';
import styles from "./SettingsCSS/homestyles.module.css"
import SidePanel from '../HomePage/sidePanel';
import SettingCats from './settingCats';
import endpoints from './endpoints';

const Homepage = () => {
    return (
        <div className={styles.container}>
        <SidePanel/>
        <div className={styles.title}>
       

        <div className={styles.CatCont}>
            {
                endpoints.map((item, index) => {
                    return(
                        <React.Fragment key={index+item}>
                        <SettingCats points={item.details} title={item.title}/>
                        <p>{item.description}</p>
                        </React.Fragment>
                    )
                })
            }
    
            
        </div>

        </div>

        </div>
    );
}

export default Homepage;
