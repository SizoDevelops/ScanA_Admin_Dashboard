import React from 'react';
import styles from '../../HomePageCSS/home.module.css'
import Link from 'next/link';
import { signIn } from 'next-auth/react';
const NavBar = () => {
    return (
        <div className={styles.NavBar}>
            <div className={styles.logoHolder}>
                <div className={styles.dashProfile}></div>
            </div>
            <ul className={styles.navList}>
                <li><Link href={"/"}>Home</Link></li>
                <li>Pricing</li>
                
                <li>About</li>
                <li onClick={signIn}>Login</li>
          
            </ul>
        </div>
    );
}

export default NavBar;
