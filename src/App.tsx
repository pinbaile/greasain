import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Page } from './layouts'
import { Events, Home, Machines } from './pages'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />}>
          <Route index element={<Home />} />
          <Route path="events" element={<Events />} />
          <Route path="machines" element={<Machines />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
