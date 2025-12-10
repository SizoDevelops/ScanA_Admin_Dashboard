import { StrictMode } from 'react'
import './globals.css'
import Providers from '@/components/Providers'

export const metadata = {
  title: 'ScanA Admin Dashboard',
  description: 'By Sizo Develops',
}


export default function RootLayout({ children }) {
  return (
    <StrictMode>
      
    <html lang="en">
    <body>
      

        <Providers>
          {children}
        </Providers>
     
   </body>
   </html>
    </StrictMode>
   
  )
}
