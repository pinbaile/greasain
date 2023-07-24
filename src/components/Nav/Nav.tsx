import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <nav className="flex flex-row items-center text-md font-handjet text-3xl">
      <Link to="machines" className="mr-4">
        OUR MACHINES
      </Link>
      <Link to="events">EVENTS</Link>
    </nav>
  )
}
