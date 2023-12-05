"use client"
import { useState } from 'react'
import { useContext } from 'react'
import { createContext } from 'react'
const initialState = {
    id: '',
    title: '',
    first_name: '',
    last_name: '',
    initial: '',
    position: '', 
    persal: '',
    email: '',
    code: '',
    password: '',
    phone_number: '',
    reason: '',
    date: '',
    block_user: false,
    pause_register: false,
    attendance: {
        monday: [],
        tuesday: [],
        wednesday: [],
        thursday: [],
        friday: []
    },
    subjects: []
}
// Create the context
const modalContext = createContext()
export const useModal = () => {
    return useContext(modalContext)
}
export const ModalProvider = ({children}) => {
    const [userData, setUserData] = useState(initialState)
    const updateUser = async (data) => {
        let res = await fetch("/api/update-user", {
            method: "POST",
            cache: "no-cache",
            headers: {
                "Content-Type": 'application/json'
              },
            body: JSON.stringify(data)

        })

        if(res){
            return "Successful"
        }
        else {
            return null
        }
    }

    const value = {
        setUserData,
        userData,
        updateUser
    }

    return (
        <modalContext.Provider value={value}>
            {children}
        </modalContext.Provider>
    )
}
