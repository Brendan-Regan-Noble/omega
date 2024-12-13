"use client"

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useSidebar } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"

export function CollapseButton() {
  const { state, toggleSidebar } = useSidebar()

  return (
    <Button
      variant="ghost"
      size="icon"
      className="w-full h-8 hover:bg-gray-200 transition-colors"
      onClick={toggleSidebar}
    >
      {state === 'expanded' ? (
        <ChevronLeft className="h-4 w-4" />
      ) : (
        <ChevronRight className="h-4 w-4" />
      )}
      <span className="sr-only">
        {state === 'expanded' ? 'Collapse Sidebar' : 'Expand Sidebar'}
      </span>
    </Button>
  )
}

