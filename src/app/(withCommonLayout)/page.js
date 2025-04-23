"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
// * Default home page
export default function Home() {
  const router = useRouter()
  const handleNavigation = () => {
    router.push('/blog')
  }
  return (
    <div>
      <h1>Home</h1>
      <button className='bg-amber-300 px-8 py-2 rounded-4xl font-medium border-1 cursor-pointer' onClick={handleNavigation}>Blog</button>
    </div>
  )
}
