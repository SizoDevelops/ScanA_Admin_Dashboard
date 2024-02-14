"use client"
import React, { useState } from 'react';
import NavBar from './NavBar';
import styles from '../../HomePageCSS/login.module.css'
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useDatabase } from '@/components/features/dbContext';
import Modal from '../Modal';


const Login = () => {
const { errCode, setCode } = useDatabase();
 return (
        <body className={styles.Body}>
        <NavBar/>
        <div className={styles.container}>
        {errCode.message.length < 1 ? <></> : <Modal errCode={errCode} />}
         <div className={styles.textHolder}>
         <h1>Login to <span>ScanA</span></h1>
        </div>
         <div className={styles.BodyCont}>
               <div className={styles.Images}>
             <div className={styles.image1}></div>
             <div className={styles.image2}></div>
        </div>

        <div className={styles.formHolder}>
            <StepOne setCode={setCode}/>
            <p className={styles.Links}>Do not have an account? <Link href={"/signup"}>Sign Up</Link> or <Link href={"/forgot-password"}>Reset Password</Link></p>
        </div>
         </div>
      
        </div>
 
     </body>
    );
}

export default Login;

const StepOne =({setCode}) => {
    const [isSubmitting, setSubmitting] = useState(false)
    const [password, setPassword] = useState("")
    const [code, setUserCode] = useState("")
    
    const [email, setEmail] = useState("")
    const params = useSearchParams()
    const encodedCallbackUrl = params.get("callbackUrl")
    let decodedUrl; 
    if(encodedCallbackUrl){
      decodedUrl = decodeURIComponent(encodedCallbackUrl); 
    }
    else{
      decodedUrl = "/"
    }
    
  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
   await signIn("credentials", {
      school_code: code.trim(),
      school_email: email.trim(),
      password,
      redirect: false,
   }).then(err => {
    setSubmitting(false)
    if(err.error){
        setCode({
      title: "Incorrect Credentials",
      message: "The credentials entered may be incorrect please re-check and retry.",
      type: "Error"
    });
    }
  
   })

  }

    return(
         <form className={styles.Steps} onSubmit={handleSubmit}>
           
            <label htmlFor='School Code'>Company Code</label>
            <input type="text" value={code} className={styles.Inputs} required placeholder='Enter the company code from your email' name='School Code' onChange={e => setUserCode(e.target.value)}/>

            <label htmlFor='Email'>Email Address</label>
           
            <input type="email" value={email} className={styles.Inputs} required placeholder='Enter the email you used to register' name='email'   onChange={e => setEmail(e.target.value)}/>
            <label htmlFor='Password' >Password</label>
         
            <input type="password" value={password} className={styles.Inputs} required onChange={e => setPassword(e.target.value)}  name='Password'/>
            <input type="submit" className={styles.LoginBtn}  value={isSubmitting ? "Checking..." : "Login"}/>
        </form>
   
    )
}