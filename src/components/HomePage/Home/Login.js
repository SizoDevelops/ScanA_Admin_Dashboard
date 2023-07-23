import React from 'react';
import NavBar from './NavBar';
import styles from '../../HomePageCSS/login.module.css'
const Login = () => {
    return (
        <div>
        <NavBar/>
        <div className={styles.container}>
         <div className={styles.textHolder}>
         <h1>Login to ScanA</h1>
        </div>
         <div className={styles.BodyCont}>
               <div className={styles.Images}>
             <div className={styles.image1}></div>
        </div>

        <div className={styles.formHolder}>
            <StepOne/>
        </div>
         </div>
      
        </div>
 
     </div>
    );
}

export default Login;

const StepOne =() => {
    return(
         <form className={styles.Steps}>
            <label htmlFor='School Code'>School Code</label>
            <input type="text" name='School Code'/>
            <label htmlFor='Email'>Email Address</label>
            <input type="text" name='Email'/>
            <label htmlFor='Password'>Password</label>
            <input type="text" name='Password'/>
            <div className={styles.LoginBtn}>Login</div>
        </form>
   
    )
}