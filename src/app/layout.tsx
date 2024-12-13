import "./globals.css"
import { Inter } from 'next/font/google'
import localFont from "next/font/local"

import { Header } from "@/components/layout/header"
import { AppSidebar } from "@/components/layout/sidebar"
// import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"

const inter = Inter({ subsets: ["latin"] })

const sandhurst = localFont({
  src: "../fonts/SanhurstWideModified.otf",
  variable: "--font-sandhurst",
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${sandhurst.variable}`}>
        <SidebarProvider>
          <div className="flex h-screen flex-col w-full">
            <Header />
            <div className="flex flex-1 overflow-hidden w-full"> {/* Add w-full here */}
              <AppSidebar />
              <div className="flex-1 overflow-y-auto pt-16 bg-gray-100 w-full"> 
                {children}
              </div> 
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}

