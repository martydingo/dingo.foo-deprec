import React from 'react'
import './globals.scss'
import { ThemeProvider } from 'next-themes'
import NavigationBar from '@/components/ui/navigation/NavigationBar/NavigationBar'

/* Our app sits here to not cause any conflicts with payload's root layout  */
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavigationBar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}

export default Layout
