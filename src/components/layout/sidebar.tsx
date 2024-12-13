"use client"

import { BarChart3, Edit, List, Lock } from 'lucide-react'
import Link from "next/link"

import { CollapseButton } from "./collapse-button"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const navigationItems = [
  {
    section: "OVERVIEW",
    items: [
      { name: "New RFQ", icon: Edit, href: "/new-rfq" },
      { name: "Reports", icon: BarChart3, href: "/reports" },
      { name: "All Transactions", icon: List, href: "/" },
      { name: "Reset Password", icon: Lock, href: "/reset-password" },
    ],
  },
  { section: "RFQS", items: [] },
  { section: "QUOTES", items: [] },
  { section: "ORDERS", items: [] },
  { section: "MIPR/BUDGET", items: [] },
]

export function AppSidebar() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <Sidebar collapsible="icon" className="bg-[#c7c7c7] mt-16 flex flex-col h-[calc(100vh-4rem)]">
      <div className="border-b border-gray-300">
        <CollapseButton />
      </div>
      <SidebarContent className="flex-grow overflow-y-auto">
        <SidebarGroup>
          <SidebarGroupLabel className="text-sm font-medium">
            {currentDate}
          </SidebarGroupLabel>
        </SidebarGroup>
        {navigationItems.map((section) => (
          <SidebarGroup key={section.section}>
            <SidebarGroupLabel>{section.section}</SidebarGroupLabel>
            {section.items.length > 0 && (
              <SidebarGroupContent>
                <SidebarMenu>
                  {section.items.map((item) => (
                    <SidebarMenuItem key={item.name}>
                      <SidebarMenuButton asChild tooltip={item.name}>
                        <Link href={item.href} className="flex items-center gap-2">
                          <item.icon className="h-4 w-4" />
                          <span>{item.name}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            )}
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  )
}

