import "@/styles/globals.css"
import { Inter } from 'next/font/google'
import localFont from "next/font/local"

import { Header } from "@/components/layout/header"
import { AppSidebar } from "@/components/layout/sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

const inter = Inter({ subsets: ["latin"] })

const sandhurst = localFont({
  src: "../fonts/SandhurstWideModified.otf",
  variable: "--font-sandhurst",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${sandhurst.variable}`}>
        <SidebarProvider>
          <div className="flex h-screen flex-col">
            <Header />
            <div className="flex flex-1 overflow-hidden">
              <AppSidebar />
              <SidebarInset className="flex flex-col flex-1">
                <main className="flex-1 overflow-y-auto p-6">
                  {children}
                </main>
              </SidebarInset>
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  )
}


