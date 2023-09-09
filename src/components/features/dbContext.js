"use client"

import { useSession } from "next-auth/react";
import { createContext, useContext, useEffect, useState } from "react";
import { setSchool, updateMember } from "../shared/DatabaseSlice";
import { useDispatch} from "react-redux";




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
            for(var i = 0; i < data.members.length; i++){
                const member = data.members[i]
                setAttendance(member.id, member.initial)
            }
            
        }).finally(() => {
            
            setLoading(false)
        })

      }

    useEffect(() => {
        if(session){
      getUser({key:session?.user.key}) 
      
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
        
        getUser({key:session?.user.key})
        setLoading(false)
      }

      function getCurrentWeek() {
        const today = new Date();
        const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
        const daysSinceFirstDay = Math.floor((today - firstDayOfYear) / (24 * 60 * 60 * 1000));
        const currentWeek = Math.ceil((daysSinceFirstDay + 1) / 7);
        return currentWeek;
      }

      function getCurrentDayOfWeek() {
        const daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
        const today = new Date();
        const dayOfWeek = today.getDay();
        const currentDay = daysOfWeek[dayOfWeek];
        return currentDay;
      }

      function getCurrentDate() {
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0'); // Get the day and pad with leading zeros if necessary
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Get the month (months are 0-based) and pad with leading zeros if necessary
        const year = today.getFullYear(); // Get the year
      
        return `${day}/${month}/${year}`;
      }

      const setAttendance = async (userID, initial) => {
        const day = getCurrentDayOfWeek()
        const date = getCurrentDate()
        const week = getCurrentWeek()

        const data = {
            key: session?.user.key,
            id: userID,
            current_day: day,
            attend: {
                week: week,
                timein: "-",
                timeout: "-",
                initial: initial,
                absent: false,
                date : date,
                day: day
            } 
        }

        await fetch("/api/sign-register", {
            method: "POST",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        console.log(data)
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