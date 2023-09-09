"use client"
import React, { useState } from 'react';
import NavBar from './NavBar';
import styles from '../../HomePageCSS/login.module.css'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { signIn, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

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
    const formik = useFormik({
      initialValues: {
        school_code: '',
        school_email: '',
        password: '',
      },
      validationSchema: Yup.object({
       school_code: Yup.string().required('Required'),
        school_email: Yup.string().email("Invalid Email Address").required('Required'),
        password: Yup.string().min(8,"Password Must Be Greater Than 8 Characters").required("Required")
      }),
      onSubmit: values => {
        signIn("credentials", values)
      }
    });

    return(
         <form className={styles.Steps} onSubmit={formik.handleSubmit}>
            <label htmlFor='School Code'>School Code</label>
            {formik.errors.school_code && formik.touched.school_code ? <span>{formik.errors.school_code}</span> : <></>}
            <input type="text" className={styles.Inputs} name='School Code' {...formik.getFieldProps("school_code")}/>

            <label htmlFor='Email'>Email Address</label>
            {formik.errors.school_email && formik.touched.school_email? <span>{formik.errors.school_email}</span> : <></>}
            <input type="email" className={styles.Inputs} name='email' {...formik.getFieldProps("school_email")}/>
            <label htmlFor='Password' >Password</label>
            {formik.errors.password && formik.touched.password ? <span>{formik.errors.password}</span> : <></>}
            <input type="password" className={styles.Inputs} name='Password' {...formik.getFieldProps("password")}/>
            <input type="submit" className={styles.LoginBtn} value="Login"/>
        </form>
   
    )
}