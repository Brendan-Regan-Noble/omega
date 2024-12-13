"use client";

import Image from 'next/image'
import { useState } from 'react'

export function Header() {
  const [imageError, setImageError] = useState(false)

  return (
    <header className="flex items-center justify-between h-16 px-6 bg-[#c20f2f] w-full fixed top-0 z-10">
      <div className="absolute left-6 top-1/2 transform -translate-y-1/2">
        <div className="w-32 h-8 relative">
          {!imageError ? (
            <Image
              src="/Mission-Possible-small.png"
              alt="Noble Logo"
              fill
              className="object-contain"
              onError={() => setImageError(true)}
            />
          ) : (
            <span className="text-white text-lg font-bold">Noble</span>
          )}
        </div>
      </div>
      <h1 className="text-2xl font-bold text-white font-['Sandhurst_Wide'] w-full text-center">
        Omega
      </h1>
    </header>
  )
}

