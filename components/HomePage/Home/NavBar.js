import React from 'react';
import styles from '../../HomePageCSS/home.module.css'
const NavBar = () => {
    return (
        <div className={styles.NavBar}>
            <div className={styles.logoHolder}>
                <h4>Logo</h4>
            </div>
            <ul className={styles.navList}>
                <li>Pricing</li>
                <li>Register</li>
                <li>About</li>
            </ul>
        </div>
    );
}

export default NavBar;
