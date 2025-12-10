"use client";
import React, { useState } from "react";
import styles from "../../HomePageCSS/signup.module.css";
import NavBar from "./NavBar";
import { Form, Formik, Field, ErrorMessage} from "formik";
import { validate } from "@/lib/validate";
import { useDatabase } from "@/components/features/dbContext";
import Modal from "../Modal";

import { useSession } from "next-auth/react";
import Footer from "./HomeComponents/Footer";
const voucher_codes = require("voucher-code-generator");

const generateUniqueCode = (prefix) => {
  return voucher_codes
    .generate({
      count: 1,
      length: 5,
      prefix: prefix,
      charset: "alphabetic",
    })[0]
    .toUpperCase();
};
const schoolCode = generateUniqueCode("SCNA-");
const userCode = generateUniqueCode(schoolCode + "-");

const SignUp = () => {
  const { sendSignUp, errCode, setCode, step, setStep } = useDatabase();
  const [loading, setLoading] = useState(false);

  function areSomeFieldsEmpty(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key) && !obj[key]) {
        return true; // At least one field is empty or falsy
      }
    }
    return false; // No empty or falsy fields found
  }
  const handleFormSubmit = async (values, { resetForm }) => {
    values.school_code = schoolCode;
    values.school_admin.admin_code = userCode;
    if (areSomeFieldsEmpty(values)) {
      return;
    }

    if (!areSomeFieldsEmpty(values)) {
      setLoading(true);
      try {
        const response = await fetch("/api/signup", {
          method: "POST",
          cache: "no-cache",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: values,
            password: values.password,
            school_email: values.school_email,
            school_emis: values.school_emis,
          }),
        });

        const data = await response.json();

        if (data === "User Already Exists") {
          setCode({
            title: "Email Or Emis Number Already Registered.",
            message:
              "These user details are already in use, Please re-check and try again, or log in instead.",
            type: "Error",
          });

          setLoading(false);
        } else if (data === undefined) {
          setCode({
            title: "Oops our bad please try again!",
            message:
              "We messed up on that one. Please click submit again to sign up.",
            type: "Other",
          });
          setLoading(false);
        } else {
          await sendSignUp({
            name: `${data.school_admin.admin_name}`,
            page: `https://scana-dashboard.netlify.app/login?code=${data.school_code}&email=${data.school_email}`,
            user: [data.school_admin.admin_email, data.school_email],
            code: data.school_code,
            user_mail: data.school_email,
          });

          setLoading(false);
          resetForm(initValues);
        }
      } catch (err) {
        setLoading(false);
        setCode({
          title: "Something Went Wrong!",
          message: "Please check your connection and try registering again.",
          type: "Error",
        });
      }
    }
  };
  const initValues = {
    school_name: "",
    school_email: "",
    school_number: "",
    school_meetings: [],
    posts: [],
    attendance: {
      currentWeek: "",
      friday: "",
      monday: "",
      thursday: "",
      tuesday: "",
      wednesday: "",
    },
    coordinates: {
      latitude: "",
      longitude: "",
      distance: 200,
    },
    school_address: {
      line_one: "",
      line_two: "",
      province: "",
      city: "",
      zip_code: "",
    },
    members: [],
    school_admin: {
      admin_name: "",
      admin_email: "",
    },
    password: "",
    confirm_password: "",
    reset_tokens: {
      token: "",
      used: false
    },
  };

    return (
      <React.Fragment>
        {errCode.message.length < 1 ? <></> : <Modal errCode={errCode} />}
      <div className={styles.Body}>
        <NavBar />
        <div className={styles.container}>
          
          <div className={styles.textHolder}>
            <h1>
              Register Your <span>Company</span>
            </h1>
   
          </div>
          <div className={styles.BodyCont}>
            <div className={styles.Images}>
              <div className={styles.image1}></div>
              <div className={styles.image2}></div>
            </div>
 
            <Formik
              initialValues={initValues}
              validate={validate}
              onSubmit={handleFormSubmit}
            >
    
              {
              
              () => (
                <Form className={styles.formHolder}>
                           <div className={styles.navigation}>
                <div>
                  <span style={step >= 1  ? {borderBottom: "2px solid #03a4ff"} : {borderBottom: "1px solid #111115"}}></span>
                  <span     onClick={() => setStep(1)} style={step >= 1 ? {background: "#03a4ff", color: "#ffffff", border: "1px solid #03a4ff"} : {background: "transparent", color: "#111115", border: "1px solid #111115"}}>1</span>
                </div>
                <div>
                  <span style={step >= 2 ? {borderBottom: "2px solid #03a4ff"} : {borderBottom: "1px solid #111115"}}></span>
                  <span     onClick={() => setStep(2)} style={step >= 2 ? {background: "#03a4ff", color: "#ffffff", border: "1px solid #03a4ff"} : {background: "transparent", color: "#111115", border: "1px solid #111115"}} >2</span>
                </div>
                <div>
                  <span style={step >= 3 ? {borderBottom: "2px solid #03a4ff"} : {borderBottom: "1px solid #111115"}}></span>
                  <span     onClick={() => setStep(3)} style={step >= 3 ? {background: "#03a4ff", color: "#ffffff", border: "1px solid #03a4ff"} : {background: "transparent", color: "#111115", border: "1px solid #111115"}}>3</span>
                </div>
              </div>
                  <div className={styles.Steps}>
                   {
                    step === 2 ? <StepTwo/> : step === 3 ? <StepThree loading={loading}/> : <StepOne/>
                   }
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        <Footer/>
      </div>

      </React.Fragment>
    );
};
function Back() {
  const { step, setStep } = useDatabase()
  return (
    <div
    className={styles.Button}
    onClick={() => setStep(step - 1)}
  >
    Back
  </div>
  );
}
function Next() {
  const { step, setStep } = useDatabase()
  return (
    <div
    className={styles.Button}
    onClick={() => setStep(step + 1)}
  >
   Next
  </div>
  );
}

export default SignUp;


const StepOne = () => {


  return(
    <>
       <h2 className={styles.heading}>Company Details</h2>

<label htmlFor="school_name">Company Name</label>
<Field
  type="text"
  name="school_name"
  placeholder="Full Company Name"
/>

<ErrorMessage name="school_name" component="span" />

<label htmlFor="school_email">Email Address</label>
<Field
  name="school_email"
  type="email"
  placeholder="name@host.domain"
/>
<ErrorMessage name="school_email" component="span" />

<label htmlFor="school_number">Phone Number</label>
<Field
  type="text"
  name="school_number"
  placeholder="+27732456789"
/>

<ErrorMessage name="school_number" component="span" />

<div className={{width: "min(300px, 97vw)", display: "inline-flex", gap: "10px"}}>
  {Next()}
</div>

    </>
  )
}

const StepTwo = () => {
  return(
    <>
                <h2 className={styles.heading}>Company Address</h2>
                    <label htmlFor="school_address.line_one">
                      Address Line 1
                    </label>
                    <Field
                      type="text"
                      name="school_address.line_one"
                      placeholder="23 Vilakazi Street"
                    />

                    <ErrorMessage
                      name="school_address.line_one"
                      component="span"
                    />

                    {/* 
            <label htmlFor='school_address.line_two'>Address Line 2</label>
            <Field type="text" name='school_address.line_two' placeholder="New Stand"/> */}

                    <label htmlFor="school_address.province">Province</label>
                    <Field
                      type="text"
                      name="school_address.province"
                      placeholder="Mpumalanga"
                    />
                    <ErrorMessage
                      name="school_address.province"
                      component="span"
                    />

                    <label htmlFor="school_address.city">Town/City</label>
                    <Field
                      type="text"
                      name="school_address.city"
                      placeholder="Piet Retief"
                    />
                    <ErrorMessage name="school_address.city" component="span" />

                    <label htmlFor="school_address.zip_code">Zip Code</label>
                    <Field
                      type="text"
                      name="school_address.zip_code"
                      placeholder="2380"
                    />
                    <ErrorMessage
                      name="school_address.zip_code"
                      component="span"
                    />
           
 <div style={{width: "min(300px, 97vw)", display: "inline-flex", gap: "10px"}}>
             {Back()}
 {Next()}
    </div>
    </>
  )
}

const StepThree = ({loading}) => {
  return(
    <>
                  <h2 className={styles.heading}>Admin (Your) Details</h2>
                    <label htmlFor="school_admin.admin_name">Full Name</label>
                    <Field
                      type="text"
                      name="school_admin.admin_name"
                      placeholder="Sizo Mauritius Mhlongo"
                    />
                    <ErrorMessage
                      name="school_admin.admin_name"
                      component="span"
                    />

                    <label htmlFor="school_admin.admin_email">Your Email</label>
                    <Field
                      type="email"
                      name="school_admin.admin_email"
                      placeholder="myname@gmail.com"
                    />
                    <ErrorMessage
                      name="school_admin.admin_email"
                      component="span"
                    />

                    <label htmlFor="password">Password</label>
                    <Field type="password" name="password" />
                    <ErrorMessage name="password" component="span" />

                    <label htmlFor="confirm_password">Confirm Password</label>
                    <Field type="password" name="confirm_password" />
                    <ErrorMessage name="confirm_password" component="span" />
     
                  <div style={{width: "min(300px, 97vw)", display: "inline-flex",  gap: "10px"}}>
                    {Back()}
                    <button
                    type="submit"
                    className={styles.Button}
                    disabled={loading}
                  >
                    {loading ? "Loading..." : "Submit"}
                  </button>
                  </div>
                  
    </>
  )
}