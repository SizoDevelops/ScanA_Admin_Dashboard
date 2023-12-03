"use client"
import React, { useState } from 'react';
import NavBar from './NavBar';
import styles from '../../HomePageCSS/login.module.css'
import { signIn, useSession} from 'next-auth/react';

import Loader from '@/components/shared/Loader';
import Link from 'next/link';
import { redirect } from 'next/navigation';


const Login = () => {
  const {data: session, status} = useSession()

if(status === "loading") {
  return <Loader/>
}
else if(session) redirect("/dashboard")
else return (
        <body className={styles.Body}>
        <NavBar/>
        <div className={styles.container}>
         <div className={styles.textHolder}>
         <h1>Login to <span>ScanA</span></h1>
        </div>
         <div className={styles.BodyCont}>
               <div className={styles.Images}>
             <div className={styles.image1}></div>
             <div className={styles.image2}></div>
        </div>

        <div className={styles.formHolder}>
            <StepOne/>
            <p className={styles.Links}>Do not have an account? <Link href={"/signup"}>Sign Up</Link></p>
        </div>
         </div>
      
        </div>
 
     </body>
    );
}

export default Login;

const StepOne =() => {
    const [isSubmitting, setSubmitting] = useState(false)
    const [password, setPassword] = useState("")
    const [code, setCode] = useState("")
    const [email, setEmail] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
   await signIn("credentials", {
      school_code: code,
      school_email: email,
      password,
      redirect: true,
      callbackUrl: "/"
   })

  }

    return(
         <form className={styles.Steps} onSubmit={handleSubmit}>
            <label htmlFor='School Code'>Company Code</label>
            <input type="text" value={code} className={styles.Inputs} required placeholder='Enter the company code from your email' name='School Code' onChange={e => setCode(e.target.value)}/>

            <label htmlFor='Email'>Email Address</label>
           
            <input type="email" value={email} className={styles.Inputs} required placeholder='Enter the email you used to register' name='email'   onChange={e => setEmail(e.target.value)}/>
            <label htmlFor='Password' >Password</label>
         
            <input type="password" value={password} className={styles.Inputs} required onChange={e => setPassword(e.target.value)}  name='Password'/>
            <input type="submit" className={styles.LoginBtn}  value={isSubmitting ? "Checking..." : "Login"}/>
        </form>
   
    )
}