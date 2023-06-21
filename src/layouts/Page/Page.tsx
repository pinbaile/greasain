import React from 'react'
import { Outlet } from 'react-router-dom'

export const Page = () => {
  return (
    <div className="bg-green-900 w-full h-screen text-white p-5">
      <h1 className="text-3xl font-bold bg-green-900">Pinbaile</h1>
      <Outlet />
    </div>
  )
}
