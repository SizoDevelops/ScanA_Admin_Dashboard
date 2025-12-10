"use client";
import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import styles from "../../HomePageCSS/login.module.css";
import { useRouter, useSearchParams } from "next/navigation";
import { useDatabase } from "@/components/features/dbContext";
import Modal from "../Modal";
import Loader from "@/components/shared/Loader";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { validate } from "@/lib/validateReset";


const ForgotPassword = () => {
  const { errCode, setCode } = useDatabase();
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("");
  const params = useSearchParams();
  const encodedCallbackUrl = params.get("reset-password");

  useEffect(() => {
    setLoading(true);
    if (encodedCallbackUrl) {
      setUrl(decodeURIComponent(encodedCallbackUrl));
      fetch("/api/confirm-token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: decodeURIComponent(encodedCallbackUrl),
        }),
      })
        .then((data) => data.json())
        .then((data) => {
          if (data === "Valid Token") {
            setLoading(false);
            return;
          } else {
            setLoading(false);
            setCode({
              title: data,
              message:
                "This token has already been used or expired, request a new one instead",
              type: "Error",
            });
            setUrl(null);
          }
        });
    } else {
      setUrl(null);
      setLoading(false);
    }
  }, [encodedCallbackUrl]);
  if (loading) return <Loader />;
  else
    return (
      <div className={styles.Body}>
        <NavBar />
        <div className={styles.container}>
          {errCode.message.length < 1 ? <></> : <Modal errCode={errCode} />}
          <div className={styles.textHolder}>
            <h1>
              Reset your <span>ScanA</span> Password
            </h1>
          </div>
          <div className={styles.BodyCont}>
            <div className={styles.Images}>
              <div className={styles.image1}></div>
              <div className={styles.image2}></div>
            </div>

            <div className={styles.formHolder}>
              {!url ? (
                <StepOne setCode={setCode} />
              ) : (
                <StepTwo setCode={setCode} token={url} />
              )}
            </div>
          </div>
        </div>
      </div>
    );
};

export default ForgotPassword;

const StepOne = () => {
  const [isSubmitting, setSubmitting] = useState(false);
  const { sendEmail } = useDatabase();
  const [code, setUserCode] = useState("");
  const [email, setEmail] = useState("");
  const submit = async (e) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      await sendEmail({
        user: email,
        code: code,
      });
      setSubmitting(false);
    } catch (error) {
      setSubmitting(false);
    }
  };
  return (
    <form className={styles.Steps} onSubmit={submit}>
      <label htmlFor="Company Code">Company Code</label>
      <input
        type="text"
        value={code}
        className={styles.Inputs}
        required
        placeholder="Enter the company code from your email"
        name="Company Code"
        onChange={(e) => setUserCode(e.target.value)}
      />
      <label htmlFor="Email">Email Address</label>

      <input
        type="email"
        value={email}
        className={styles.Inputs}
        required
        placeholder="Enter the email you used to register"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="submit"
        className={styles.LoginBtn}
        value={isSubmitting ? "Checking..." : "Submit"}
      />
    </form>
  );
};

const StepTwo = ({ setCode, token }) => {
  const [isSubmitting, setSubmitting] = useState(false);
  const router = useRouter()
  const handleSubmit = async (values, {resetForm}) => {
    setSubmitting(true);
    fetch("/api/reset-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: token,
        password: values.password
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        
        if (data === "User Updated") {
          setSubmitting(false);
          setCode({
            title: "Password Change Successful",
            message:
              "You have successfully updated your password, you can log in now.",
            type: "Success",
          });
          resetForm()
          router.replace("/login")
        } else {
          setSubmitting(false);
          setCode({
            title: "Password Reset Error",
            message:
              "No user found or incorrect token please request a new reset password token",
            type: "Error",
          });
        }
      })
      .catch((error) => {
        setSubmitting(false);
        setCode({
          title: "Oops! Something Went Wrong",
          message: "Please check your connection and try again.",
          type: "Error",
        });
      });
  };
  return (
    <Formik
      initialValues={{
        password: "",
        confirm_password: "",
      }}
      validate={validate}
      onSubmit={handleSubmit}
    >
      <Form className={styles.Steps}>
        <label htmlFor="Company Code">New Password</label>
        <ErrorMessage name="password" component="span" />
        <Field
          type="password"
          className={styles.Inputs}
          placeholder="Enter your new password"
          name="password"
        />

        <label htmlFor="Email">Confirm Password</label>
        <ErrorMessage name="confirm_password" component="span" />
        <Field
          type="password"
          className={styles.Inputs}
          placeholder="Confirm your password"
          name="confirm_password"
        />

        <input
          type="submit"
          className={styles.LoginBtn}
          value={isSubmitting ? "Checking..." : "Submit"}
        />
      </Form>
    </Formik>
  );
};
