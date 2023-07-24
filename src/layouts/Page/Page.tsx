import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Footer, Logo, Nav } from '../../components'

export const Page = () => {
  return (
    <div className="bg-green-900 w-full flex flex-col h-screen text-white p-5 overflow-hidden">
      <div className="flex flex-col sm:flex-row justify-between mb-5">
        <Link to="/">
          <Logo />
        </Link>
        <Nav />
      </div>
      <div className="flex-1 font-karla">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
