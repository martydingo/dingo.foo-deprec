import React from 'react'
import './globals.scss'
import { ThemeProvider } from 'next-themes'
import NavigationBar from '@/components/ui/navigation/NavigationBar/NavigationBar'
import { SpeedInsights } from "@vercel/speed-insights/next"

/* Our app sits here to not cause any conflicts with payload's root layout  */
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavigationBar />
          {children}
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}

export default Layout
