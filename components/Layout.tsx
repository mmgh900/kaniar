import React from 'react'
import { cn } from '@/lib/utils'
import localFont from 'next/font/local'

const sahel = localFont({ src: '../public/fonts/Sahel-FD.woff2' })

interface LayoutProps {
  children: React.ReactNode
  className?: string
}

export function Layout({ children, className }: LayoutProps) {
  return (
    <div className={cn(
      "min-h-screen bg-[#171122] text-white",
      "transition-all duration-300 ease-in-out",
      sahel.className,
      className
    )}
    dir="rtl"
    >
      {children}
    </div>
  )
}

