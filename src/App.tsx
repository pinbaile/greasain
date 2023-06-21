import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Page } from './layouts'
import { About, Events, Home, Machines } from './pages'

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Page />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="events" element={<Events />} />
        <Route path="macnines" element={<Machines />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
