import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import { Page } from './layouts'
import { Events, Home, LandingPage, Machines } from './pages'

export const AnimatedRoutes = () => {
  const location = useLocation()
  return (
    <main className="bg-gray-400 overflow-x-hidden relative h-screen w-screen">
      <AnimatePresence>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Page />}>
            <Route path="/" element={<Home />} />
            <Route path="events" element={<Events />} />
            <Route path="machines" element={<Machines />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </main>
  )
}

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  )
}
