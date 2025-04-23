import Navbar from '@/components/shared/Navbar'
import React from 'react'

export default function CommonLayout({children}) {
  return (
    <div>
       <Navbar />
      {children}
    </div>
  )
}
