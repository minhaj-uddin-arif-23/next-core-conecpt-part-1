import Navbar from '@/components/shared/Navbar'
import React from 'react'

export default function CommonLayout({children}) {
  return (
    <div>
      <div className="">
      <Navbar />
      </div>
     <div className='max-w-7xl  mx-auto'>
     {children}
     </div>
    </div>
  )
}
