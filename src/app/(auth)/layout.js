import Footer from '@/components/shared/Footer'
import React from 'react'

export default function AuthLayout({children}) {
  return (
    <div>
      <div className='mt-24 text-center items-center'>
      {children}
      </div>
    <div className='w-full'>
    <Footer />
    </div>
    </div>
  )
}
