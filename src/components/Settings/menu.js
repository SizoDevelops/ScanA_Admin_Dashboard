import React from 'react';
import SettingCats from './settingCats';
import styles from "./SettingsCSS/homestyles.module.css"
import endpoints from './endpoints';


const Menu = () => {

    return (
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
    );
}

export default Menu;
