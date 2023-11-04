import { useState } from 'react'

import './App.css'
import { Routes, Route } from "react-router-dom"
import Dashboard from './components/views/Dashboard'
import Accounts from './components/views/Accounts'
import Categories from './components/views/Categories'
import Navbar from './components/custom/Navbar'
import { ThemeProvider } from './components/custom/ThemeProvider'
import Expenses from './components/views/Expenses'
function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className='w-full'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='accounts' element={<Accounts />} />
          <Route path='categories' element={<Categories />} />
          <Route path='expenses' element={<Expenses />} />
        </Routes>
      </div>
    </ThemeProvider>

  )
}

export default App
