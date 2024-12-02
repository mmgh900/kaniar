import React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
}

export function Button({ children, className, variant = 'primary', ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-md font-semibold transition-all duration-300 ease-in-out",
        "transform hover:scale-105",
        variant === 'primary' 
          ? "bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-purple-500/50" 
          : "bg-gray-800 hover:bg-gray-700 text-purple-300 shadow-lg hover:shadow-purple-500/30",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

