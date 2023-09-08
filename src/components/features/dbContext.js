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



    const value = {
        loading,
        updateUser
    };

    return (
    <Database.Provider value={value}>
        {children}
        </Database.Provider>
        );
}