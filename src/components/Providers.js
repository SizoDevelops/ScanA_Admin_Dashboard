"use client";

import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import store from "./shared/store";
import { DatabaseProvider } from "./features/dbContext";

const Providers = ({ children }) => {
  return <>

  <Provider store={store}>
    <SessionProvider>
      <DatabaseProvider>
         {children}
      </DatabaseProvider>
      </SessionProvider>
  </Provider>
  
  
  </> 
};

export default Providers;