"use client"

import { useSession } from "next-auth/react";
import { createContext, useContext, useEffect, useState } from "react";
import { setSchool, updateMember } from "../shared/DatabaseSlice";
import { useDispatch} from "react-redux";
const voucher_codes = require("voucher-code-generator")



const Database = createContext()

export const useDatabase = () => {
    return useContext(Database)
}


export const DatabaseProvider = ({children}) => {
    const [loading, setLoading] = useState(true)
    const {data: session} = useSession()
    const dispatch = useDispatch()

    const getUser = async(dat) => {
        await fetch("/api/user", {
          method: "POST",
          cache: 'no-cache',
          headers: {
            "Content-Type": 'application/json'
          },
          body: JSON.stringify(dat)
        }).then(data => data.json())
        .then(data => {
            dispatch(setSchool(data))
            
        }).finally(() => {
            
            setLoading(false)
        })

      }

    useEffect(() => {
        
        getUser({key:session?.user.key}) 


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
        
        getUser({key:session?.user.key})
        setLoading(false)
      }


      function getCurrentDayOfWeek() {
        const daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
        const today = new Date();
        const dayOfWeek = today.getDay();
        const currentDay = daysOfWeek[dayOfWeek];
        return currentDay;
      }
      function getCurrentWeek() {
        const today = new Date();
        const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
        const daysSinceFirstDay = Math.floor((today - firstDayOfYear) / (24 * 60 * 60 * 1000));
        const currentWeek = Math.ceil((daysSinceFirstDay + 1) / 7);
        return currentWeek;
      }
    

      const setAttendance = async () => {
        setLoading(true)
        const day = getCurrentDayOfWeek()
    
        const monday = voucher_codes.generate({
          count: 1,
          length: 8,
          prefix: "SCNA-",
          charset: "1234567890abcdefghijklmnopqrstuvwxxyz"
      })[0].toUpperCase()
        const tuesday = voucher_codes.generate({
          count: 1,
          length: 8,
          prefix: "SCNA-",
          charset: "1234567890abcdefghijklmnopqrstuvwxxyz"
      })[0].toUpperCase()
        const wednesday = voucher_codes.generate({
          count: 1,
          length: 8,
          prefix: "SCNA-",
          charset: "1234567890abcdefghijklmnopqrstuvwxxyz"
      })[0].toUpperCase()
        const thursday = voucher_codes.generate({
          count: 1,
          length: 8,
          prefix: "SCNA-",
          charset: "1234567890abcdefghijklmnopqrstuvwxxyz"
      })[0].toUpperCase()
        const friday = voucher_codes.generate({
          count: 1,
          length: 8,
          prefix: "SCNA-",
          charset: "1234567890abcdefghijklmnopqrstuvwxxyz"
      })[0].toUpperCase()
      
      let data;

    if(day === "tuesday") {
        data  = {
          key: session?.user.key,
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
           key: session?.user.key,
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
          key: session?.user.key,
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
          key: session?.user.key,
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
          key: session?.user.key,
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
          key: session?.user.key,
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
          key: session?.user.key,
          currentWeek: getCurrentWeek() + 1,
          monday,
          tuesday,
          wednesday,
          thursday,
          friday
        }
       }
    

        if(session?.user.key){  
        await fetch("/api/set-attendance", {
            method: "POST",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(setLoading(false))
        }
       
      }


      

   


    const value = {
        loading,
        updateUser,
        setAttendance

         
    };

    return (
    <Database.Provider value={value}>
        {children}
        </Database.Provider>
        );
}