import React from 'react'

export default async function CatchAllRoute({params}) {
  const catchId = await params
  console.log(catchId)
  return (
    <div>CatchAllRoute</div>
  )
}
