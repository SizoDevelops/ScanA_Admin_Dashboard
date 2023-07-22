"use client"

import { DataBaseFunc } from "@/components/DatabaseSchema"

const { useContext, createContext, useState, useEffect } = require("react")


export const Data = createContext(null)

export const useData = () => {
    return useContext(Data)
}


export const DataProvider = ({children}) => {
   


   return(
    <Data.Provider >
        {children}
    </Data.Provider>
   )
}