import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contacts from './Pages/contact'
import HomePage from './Pages/home'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/contact' element={<Contacts />} />
    </Routes>
  )
}

export default MainRoutes
