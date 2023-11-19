"use client"
import React, { createContext, useContext, useState } from "react"


const Theme = createContext()
export const useTheme = () => useContext(Theme)

export default function ThemeProvider({children}) {
    const [isDarkMode, setIsDarkMode] = useState(false)
    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
      };
    const store = {
        isDarkMode,
        setIsDarkMode
    }
  return (
    <Theme.Provider value={store}>
        {children}
    </Theme.Provider>
  )
}
