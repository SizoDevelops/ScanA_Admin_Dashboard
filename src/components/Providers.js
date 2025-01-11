"use client";

import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import store from "./shared/store";
import { DatabaseProvider } from "./features/dbContext";
import ThemeProvider from "./features/themeContext";


const Providers = ({ children }) => {

  return <>

  <Provider store={store}>
    <SessionProvider>
      <DatabaseProvider>
        <ThemeProvider>
            {children}
        </ThemeProvider>
      </DatabaseProvider>
      </SessionProvider>
  </Provider>
  
  
  </> 
};

export default Providers;