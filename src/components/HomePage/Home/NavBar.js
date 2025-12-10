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
                <li><Link href={"/"}> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 21 21"><g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="m1.5 10.5l9-9l9 9"/><path d="M3.5 8.5v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"/></g></svg>Home</Link></li>
                <li><Link href={"/pricing"}> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" d="M4 12h2m12 0h2M.5 16.5V20H1a43.131 43.131 0 0 1 3-.37M.5 16.5H1a3 3 0 0 1 3 3v.13M.5 16.5v-9M4 19.63a94.725 94.725 0 0 1 8-.38c2.134 0 5.281.127 8 .38m0 0a43.03 43.03 0 0 1 3 .37h.5v-3.5M20 19.63v-.13a3 3 0 0 1 3-3h.5m0 0v-9m0 0V4H23a43.03 43.03 0 0 1-3 .37m3.5 3.13H23a3 3 0 0 1-3-3v-.13m0 0a94.72 94.72 0 0 1-8 .38a94.72 94.72 0 0 1-8-.38m0 0A43.178 43.178 0 0 1 1 4H.5v3.5M4 4.37v.13a3 3 0 0 1-3 3H.5m11.5 7a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5Z"/></svg> Pricing</Link></li>
                <li onClick={signIn}> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.98 20v-1h6.405q.23 0 .423-.192q.192-.193.192-.423V5.615q0-.23-.192-.423Q18.615 5 18.385 5H11.98V4h6.404q.69 0 1.152.463q.463.462.463 1.152v12.77q0 .69-.462 1.152q-.463.463-1.153.463H11.98Zm-.71-4.462l-.703-.719l2.32-2.319H4.019v-1h8.868l-2.32-2.32l.702-.718L14.808 12l-3.539 3.538Z"/></svg>Login</li>
          
            </ul>

            {/* This is for responsive nav with CSS using React Burger */}
            
        </div>
    );
}

export default NavBar;
