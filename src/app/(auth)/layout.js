import Footer from '@/components/shared/Footer'
import React from 'react'

export default function AuthLayout({children}) {
  return (
    <div>
      <div>
      {children}
      </div>
    <div className='w-full'>
    <Footer />
    </div>
    </div>
  )
}
