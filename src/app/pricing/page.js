"use client"
import React, { useEffect, useState } from 'react'
import styles from '@/components/HomePageCSS/pricing.module.css'
import NavBar from '@/components/HomePage/Home/NavBar'
import Footer from '@/components/HomePage/Home/HomeComponents/Footer'
export default function Page() {
    const [SUsers, setSUsers] = useState(10)
    const [PUsers, setPUSers] = useState(35)
    const [monthlyPrice, setMontlyPrice] = useState(500)
    const [yearlyPrice, setYearlyPrice] = useState(350)
    const [PmonthlyPrice, setPMontlyPrice] = useState(1500)
    const [PyearlyPrice, setPYearlyPrice] = useState(1300)
    const [SBilling, setSBilling] = useState("yearly")
    const [PBilling, setPBilling] = useState("yearly")

    const m = 50;
    const y = 35;

 useEffect(() => {
    if(SBilling === "yearly" && SUsers > 9){
        setYearlyPrice((y*SUsers))
    }
    else if(SBilling === "yearly" && SUsers < 10){
        setYearlyPrice(350)
    }
   else if(SBilling === "monthly" && SUsers > 9){
        setMontlyPrice((m*SUsers))
    }
    else if(SBilling === "monthly" && SUsers < 10){
        setMontlyPrice(500)
    }
    
 }, [SBilling, SUsers])

  return (
    <body className={styles.container}>
        <NavBar/>

        <div className={styles.pricing}>
            <div className={styles.intro}>
              <h1>Pricing & Plans </h1>
            <p>Flexible Pricing for Every Institution, Unlimited Access to ScanA&apos;s Powerful Features.</p>
         
            </div>
            <div className={styles.prices}>
                <div className={styles.plan}>
                    <h2>Standard Plan</h2>
                    <p>Simplify attendance tracking and elevate organizational efficiency with a budget-friendly solution tailored for your institution&apos;s success.</p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.8 11.8 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7 7 0 0 0 1.048-.625 11.8 11.8 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.54 1.54 0 0 0-1.044-1.263 63 63 0 0 0-2.887-.87C9.843.266 8.69 0 8 0m2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793z"/>
</svg> Full access to ScanA</p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.8 11.8 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7 7 0 0 0 1.048-.625 11.8 11.8 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.54 1.54 0 0 0-1.044-1.263 63 63 0 0 0-2.887-.87C9.843.266 8.69 0 8 0m2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793z"/>
</svg> Maximum of 35 staff members</p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.8 11.8 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7 7 0 0 0 1.048-.625 11.8 11.8 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.54 1.54 0 0 0-1.044-1.263 63 63 0 0 0-2.887-.87C9.843.266 8.69 0 8 0m2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793z"/>
</svg> Limited features</p>
                    <p>Number of users:</p>
                    <div className={styles.numbers}>
                        <p>Up to</p>
                        <input type="text" onChange={(e) => {
                            setSUsers(e.target.value.replace(/\D/g, ""))
                        }}  value={SUsers} name="number of users" required/>
                    </div>
                    <div className={styles.price}>
                        <p>Montly R50 user/month</p>
                        <p>Yearly R35 user/month <span>30% off</span></p>  
                    </div>
                  
                    <div className={styles.buttons}>
                        <span onClick={() => setSBilling("yearly")} style={SBilling === "yearly" ? {background: "#03a4ff", color: "#ffffff"} : {background: "transparent", color: "#111115" }}> Billed Annually</span>
                        <span onClick={() => setSBilling("monthly")} style={SBilling === "monthly" ? {background: "#03a4ff", color: "#ffffff"} : {background: "transparent", color: "#111115"}}>Billed Monthly</span>
                    </div>
                    <h2 className={styles.priceData}>R{SBilling === "monthly" ?monthlyPrice : yearlyPrice} <span>per month</span></h2>

                    <div className={styles.submit}>
                        <p>Start 2 work weeks trial</p>
                    </div>
                </div>


              
                <div className={styles.plan}>
                    <h2 className={styles.pro}>ScanA Pro Plan <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"/>
</svg> <span>Recommended</span></h2>
                    <p>Simplify attendance tracking and elevate organizational efficiency with a budget-friendly solution tailored for your institution&apos;s success.</p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.8 11.8 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7 7 0 0 0 1.048-.625 11.8 11.8 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.54 1.54 0 0 0-1.044-1.263 63 63 0 0 0-2.887-.87C9.843.266 8.69 0 8 0m2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793z"/>
</svg> Full access to ScanA</p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.8 11.8 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7 7 0 0 0 1.048-.625 11.8 11.8 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.54 1.54 0 0 0-1.044-1.263 63 63 0 0 0-2.887-.87C9.843.266 8.69 0 8 0m2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793z"/>
</svg> Unlimited staff members</p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.8 11.8 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7 7 0 0 0 1.048-.625 11.8 11.8 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.54 1.54 0 0 0-1.044-1.263 63 63 0 0 0-2.887-.87C9.843.266 8.69 0 8 0m2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793z"/>
</svg> Notifications / Reminders</p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.8 11.8 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7 7 0 0 0 1.048-.625 11.8 11.8 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.54 1.54 0 0 0-1.044-1.263 63 63 0 0 0-2.887-.87C9.843.266 8.69 0 8 0m2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793z"/>
</svg> Email Support</p>
                    <p>Number of users:</p>
                    <div className={styles.numbers}>
                        <p>From</p>
                        <input type="text"  value={PUsers} name="number of users" required/>
                    </div>
                  
                    <div className={styles.buttons}>
                    <span onClick={() => setPBilling("yearly")} style={PBilling === "yearly" ? {background: "#ffffff", color: "#03a4ff"} : {background: "transparent", color: "#ffffff" }}> Billed Annually</span>
                        <span onClick={() => setPBilling("monthly")} style={PBilling === "monthly" ? {background: "#ffffff", color: "#03a4ff"} : {background: "transparent", color: "#ffffff"}}>Billed Monthly</span>
                    </div>
                    <h2 className={styles.priceData}><span>Starts at </span>R{PBilling === "monthly" ? PmonthlyPrice : PyearlyPrice} <span>per month</span></h2>
                    <p className={styles.based}>*Priced based on number of staff members.</p>
                    <div className={styles.submit}>
                        <p>Start 2 work weeks trial</p>
                    </div>
                </div>


              
            </div>

            <div className={styles.free}>
                <h2>Starter Trial</h2>
                <p>New to ScanA? <span>Try it for free for a full year</span>, no obligation, no activation fees,
no credit card required.</p>
                <div className={styles.submit}>
                        <p>Try ScanA Now!</p>
                    </div>
            </div>
           
        </div>

         <Footer/>
    </body>
  )
}
