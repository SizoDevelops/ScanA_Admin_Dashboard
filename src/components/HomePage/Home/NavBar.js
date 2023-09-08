import React from 'react';
import styles from '../../HomePageCSS/home.module.css'
import Link from 'next/link';
const NavBar = () => {
    return (
        <div className={styles.NavBar}>
            <div className={styles.logoHolder}>
                <h4>Logo</h4>
            </div>
            <ul className={styles.navList}>
                <li><Link href={"/"}>Home</Link></li>
                <li>Pricing</li>
                
                <li>About</li>
                <li><Link href={"/login"}>Login</Link></li>
          
            </ul>
        </div>
    );
}

export default NavBar;
