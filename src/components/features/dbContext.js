/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { signOut, useSession } from "next-auth/react";
import { createContext, useContext, useEffect, useState } from "react";
import { setSchool} from "../shared/DatabaseSlice";
import { useDispatch, useSelector} from "react-redux";
import moment from "moment";
const voucher_codes = require("voucher-code-generator")



const Database = createContext()

export const useDatabase = () => {
    return useContext(Database)
}


export const DatabaseProvider = ({children}) => {
    const [loading, setLoading] = useState(true)
    const [loadingCode, setCodeLoading] = useState(false)
    const {data: session} = useSession()
    const [step, setStep] = useState(1)
    const dispatch = useDispatch()
    const [errCode, setCode] = useState({title: "" , message: "", type: ""})
    const [meetingModal, setMeeting] = useState({name: "", category: ""})
    const user = useSelector(state => state.user)



    const getUser = async(dat) => {
        // setLoading(true)
        await fetch("/api/user", {
          method: "POST",
          cache: 'no-cache',
          headers: {
            "Content-Type": 'application/json'
          },
          body: JSON.stringify(dat)
        }).then(data => data.json())
        .then(data => {
          
          if(data) dispatch(setSchool(data))
          else {
            signOut()
            setLoading(false)
          }
          setLoading(false)
        })
        .catch(err => {
          setLoading(false)
        })

      }

    useEffect(() => {
      
        if(session){
        
          getUser({key:session?.user.school_code})
        }
        else {
          setLoading(false)
        }
    }, [session])
  
    const updateUser = async (data) => {
        setLoading(true)
        await fetch("/api/update-user", {
          method: "POST",
          cache: 'no-cache',
          headers: {
            "Content-Type": 'application/json'
          },
          body: JSON.stringify(data)
        })
        
        getUser({key:session?.user.school_code})
        setLoading(false)
      }


      function getCurrentDayOfWeek() {
        const today = moment();
        return today.format('dddd').toLowerCase();
      }


      function getCurrentWeek() {
        const today = moment();
        return today.week();
      }
      

      const setAttendance = async () => {
        setLoading(true)
        const day = getCurrentDayOfWeek()
    
        const monday = voucher_codes.generate({
          count: 1,
          length: 4,
          prefix: "SCNA-",
          charset: "1234567890abcdefghijklmnopqrstuvwxxyz"
      })[0].toUpperCase()
        const tuesday = voucher_codes.generate({
          count: 1,
          length: 4,
          prefix: "SCNA-",
          charset: "1234567890abcdefghijklmnopqrstuvwxxyz"
      })[0].toUpperCase()
        const wednesday = voucher_codes.generate({
          count: 1,
          length: 4,
          prefix: "SCNA-",
          charset: "1234567890abcdefghijklmnopqrstuvwxxyz"
      })[0].toUpperCase()
        const thursday = voucher_codes.generate({
          count: 1,
          length: 4,
          prefix: "SCNA-",
          charset: "1234567890abcdefghijklmnopqrstuvwxxyz"
      })[0].toUpperCase()
        const friday = voucher_codes.generate({
          count: 1,
          length: 4,
          prefix: "SCNA-",
          charset: "1234567890abcdefghijklmnopqrstuvwxxyz"
      })[0].toUpperCase()
      
      let data;

    if(day === "tuesday") {
        data  = {
          key: session?.user.school_code,
          currentWeek: getCurrentWeek(),
          monday: null,
          tuesday,
          wednesday,
          thursday,
          friday
        }
       }
       else if (day === "wednesday") {
        data  = {
           key: session?.user.school_code,
           currentWeek: getCurrentWeek(),
          monday:null,
          tuesday:null,
          wednesday,
          thursday,
          friday
        }
       }
       else if(day === "thursday"){
        data  = {
          key: session?.user.school_code,
          currentWeek: getCurrentWeek(),
          monday:null,
          tuesday:null,
          wednesday:null,
          thursday,
          friday
        }
       }
       else if(day === "friday"){
        data  = {
          key: session?.user.school_code,
          currentWeek: getCurrentWeek(),
          monday:null,
          tuesday:null,
          wednesday:null,
          thursday:null,
          friday
        }
       }
       else if(day==="monday") {
        data  = {
          key: session?.user.school_code,
          currentWeek: getCurrentWeek(),
          monday,
          tuesday,
          wednesday,
          thursday,
          friday
        }
       }
       else if(day === "sunday") {
        data  = {
          key: session?.user.school_code,
          currentWeek: getCurrentWeek(),
          monday,
          tuesday,
          wednesday,
          thursday,
          friday
        }
       }
       else {
        data  = {
          key: session?.user.school_code,
          currentWeek: getCurrentWeek() + 1,
          monday,
          tuesday,
          wednesday,
          thursday,
          friday
        }
       }
    

        if(session?.user.school_code ){  
        await fetch("/api/set-attendance", {
            method: "POST",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)

        }).then(()=>setLoading(false))
        }
       
      }

      const sendEmail = async (data) => {
        setCodeLoading(true)
        await fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        }).then(data => data.json())
        .then(data => {
          if(data === "Email Sent Successfully"){
            setCode({title: data, message: "The email has been successfully sent to the user.", type: "Success"}) 
          }
         else if (data === "Invalid Request"){
          setCode({title: "User not found", message: "Oops! Seems like this user does not exist. Please make sure the details are correct.", type: "Error"}) 
         }
          setCodeLoading(false)
        })
        .catch((err) => {
          setCode({title: err.message, message: "Looks like we were unable to send the email to the user please try again.", type: "Error"})
          setCodeLoading(false)
        })
      }
      const sendUserEmail = async (data) => {
        setCodeLoading(true)
        await fetch("/api/send-user-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        }).then(data => data.json())
        .then(data => {
          if(data === "Email Sent Successfully"){
            setCode({title: data, message: "The email has been successfully sent to the user.", type: "Success"}) 
          }
          setCodeLoading(false)
        })
        .catch((err) => {
          setCode({title: err.message, message: "Looks like we were unable to send the email to the user please try again.", type: "Error"})
          setCodeLoading(false)
        })
      }
      const sendSignUp = async (data) => {
        setCodeLoading(true)
        await fetch("/api/send-signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        }).then(data => data.json())
        .then(data => {
     
          setCode({title: data, message: "The email has been successfully sent to the user.", type: "Success"})
          setCodeLoading(false)
        })
        .catch((err) => {
          setCode({title: err.message,message: "Looks like we were unable to send the email to the user please try again.", type: "Error"})
          setCodeLoading(false)
        })
      }
      

   


    const value = {
        loading,
        updateUser,
        setAttendance,
        sendEmail,
        errCode,
        setCode,
        loadingCode,
        sendSignUp,
        meetingModal,
        setMeeting,
        getCurrentWeek,
        getUser,
        sendUserEmail,
        setStep,
        step
         
    };

    return (
    <Database.Provider value={value}>
        {children}
        </Database.Provider>
        );
}