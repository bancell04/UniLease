import { useState } from 'react'
import './App.css'
import Navbar from "./Components/Navbar/nav"
import { LandingPage } from './Pages/landing'
import { ListingsPage } from './Pages/rent'
import SellPage from './Pages/sell'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

function App() {

  const client = new QueryClient({defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    }
  }});

  return (
    <div className='App'>
      <QueryClientProvider client={client}>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<ListingsPage />}/>
            <Route path='/rent' element={<ListingsPage />}/>
            <Route path='/sell' element={<SellPage />}/>
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  )
}

export default App
