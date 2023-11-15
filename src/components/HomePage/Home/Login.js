"use client"
import React, { useState } from 'react';
import NavBar from './NavBar';
import styles from '../../HomePageCSS/login.module.css'
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { signIn, useSession} from 'next-auth/react';
import { useRouter } from 'next/navigation';


const Login = () => {
  const {data: session} = useSession()
  const router = useRouter()
if(session) router.push("/")
else return (
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
            <input type="text" value={code} className={styles.Inputs} placeholder='Enter the company code from your email' name='School Code' onChange={e => setCode(e.target.value)}/>

            <label htmlFor='Email'>Email Address</label>
           
            <input type="email" value={email} className={styles.Inputs} placeholder='Enter the email you used to register' name='email'   onChange={e => setEmail(e.target.value)}/>
            <label htmlFor='Password' >Password</label>
         
            <input type="password" value={password} className={styles.Inputs} onChange={e => setPassword(e.target.value)}  name='Password'/>
            <input type="submit" className={styles.LoginBtn}  value={isSubmitting ? "Checking..." : "Login"}/>
        </form>
   
    )
}