import React from 'react';
import styles from "./SettingsCSS/homestyles.module.css"
import SidePanel from '../HomePage/sidePanel';
import SettingCats from './settingCats';
const Homepage = () => {
    return (
        <div className={styles.container}>
        <SidePanel/>
        <div className={styles.title}>
       

        <div className={styles.CatCont}>
            <SettingCats/>
            <p>These setting will update how the app functions and other specific app features.</p>
            <SettingCats/>
            <p>These setting will update how the app functions and other specific app features.</p>
            <SettingCats/>
            <p>These setting will update how the app functions and other specific app features.</p>
        </div>

        </div>

        </div>
    );
}

export default Homepage;
