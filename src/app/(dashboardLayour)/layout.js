import Sidebar from '@/components/shared/Sidebar'
import React from 'react'

export default function Layout({children}) {
  return (
    <div>
     <div className='flex'>
     <Sidebar />
     {children}
     </div>
    </div>
  )
}
