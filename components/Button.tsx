import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export default function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  ...props 
}: ButtonProps) {
  const baseClasses = 'font-semibold rounded-2xl transition-all duration-300 flex items-center justify-center gap-2'
  
  const variantClasses = {
    primary: 'btn-neon',
    secondary: 'bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 hover:scale-105',
    outline: 'bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 hover:scale-105'
  }
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
