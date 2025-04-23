"use client"
import React, { useState } from 'react'
export default function Counter() {
  const [count,setCount] = useState(0)
  console.log({count})
  return (
    <div className="items-center">
      <div>
        <h1>{count}</h1>
      </div>
      <div className='flex gap-3'>
        <button onClick={() => setCount(count+1)}>+</button>
        <button onClick={() => setCount(count-1)}>-</button>
      </div>
    </div>
  )
}