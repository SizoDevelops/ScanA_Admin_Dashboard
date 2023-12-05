"use client"
import React, { useState } from 'react';
import NavBar from './NavBar';
import styles from '../../HomePageCSS/login.module.css'
import { signIn, useSession} from 'next-auth/react';
import { redirect, useParams, usePathname, useRouter, useSearchParams } from 'next/navigation';
import Loader from '@/components/shared/Loader';
import Link from 'next/link';


const Login = () => {
  const {data: session, status} = useSession()
  const router = useRouter()

if(status === "loading") {
  return <Loader/>
}
else if (status === "authenticated") redirect(`/user/${session.user?.school_name?.split(" ")[0]}${session.user?.school_name?.split(" ")[1]}`)
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
      school_code: code,
      school_email: email,
      password,
      redirect: true,
      callbackUrl: decodedUrl
      
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