"use client"
import React from 'react';
import styles from '../../HomePageCSS/signup.module.css'
import NavBar from './NavBar';
import MultiStep from 'react-multistep'

const SignUp = () => {
    return (
        <div>
           <NavBar/>
           <div className={styles.container}>
            <div className={styles.textHolder}>
            <h1>Register Your School</h1>
           </div>
            <div className={styles.BodyCont}>
                  <div className={styles.Images}>
                <div className={styles.image1}></div>
                <div className={styles.image2}></div>
           </div>

           <div className={styles.formHolder}>
           <MultiStep  activeStep={0} prevButton={{title:"Previous", style:{background:"#111115", padding: "10px", border: "1px solid #68696A", margin:"10px", borderRadius: "5px", cursor: "pointer", width: "100px"}}} nextButton={{title:"Next", style:{background:"#111115", padding: "10px", border: "1px solid #68696A", margin:"10px", borderRadius: "5px", cursor: "pointer", width: "100px"}}}>
                <StepOne title='School Details'/>
                <StepTwo title='Location Details'/>
                <StepThree title='Your Details'/>

        </MultiStep>
           </div>
            </div>
         
           </div>
    
        </div>
    );
}

export default SignUp;



const StepOne =() => {
    return(
         <form className={styles.Steps}>
            <label htmlFor='Name'>Name</label>
            <input type="text" name='Name'/>
            <label htmlFor='Slogan'>School Slogan</label>
            <input type="text" name='Slogan'/>
            <label htmlFor='Email'>Email Address</label>
            <input type="text" name='Email'/>
            <label htmlFor='Number'>Phone Number</label>
            <input type="text" name='Number'/>
        </form>
   
    )
}

const StepTwo =() => {
    return(
         <form className={styles.Steps}>
            <label htmlFor='Line1'>Address Line 1</label>
            <input type="text" name='Line1'/>
            <label htmlFor='Line2'>Address Line 2</label>
            <input type="text" name='Name'/>
            <label htmlFor='Province'>Province</label>
            <input type="text" name='Province'/>
            <label htmlFor='Town City'>Town/City</label>
            <input type="text" name='Town/City'/>
            <label htmlFor='Zip Code'>Zip Code</label>
            <input type="text" name='Zip Code'/>
        </form>
   
    )
}

const StepThree =() => {
    return(
         <form className={styles.Steps}>
            <label htmlFor='Name'>Full Name</label>
            <input type="text" name='Name' placeholder='Sizo Mauritius Mhlongo'/>
            <label htmlFor='Email'>Email Address</label>
            <input type="text" name='Slogan'/>
            <label htmlFor='Confirm Email'>Confirm Email Address</label>
            <input type="text" name='Confirm Email'/>
            <label htmlFor='Password'>Password</label>
            <input type="text" name='password'/>
            <label htmlFor='Number'>Confirm Password</label>
            <input type="text" name='Confirm Password'/>
        </form>
   
    )
}