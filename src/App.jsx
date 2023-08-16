import { useState, createContext } from 'react'
import './App.css'
import Navbar from "./Components/Navbar/nav"
import { LandingPage } from './Pages/landing'
import { ListingsPage } from './Pages/rent'
import SellPage from './Pages/sell'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { ApiContext } from './context'
import { FilterProvider } from './UseContexts/FilterContext'

function App() {

  const filter = {
    school: 'all', rent: {min:0, max:Infinity}, distance: {min:0, max:Infinity}, tag:{roomates:true, sublease:true, renting:true}
  }

  const client = new QueryClient({defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    }
  }});

  //replace with interface down the line
  const [filters, setFilters] = useState(filter);

  return (
    <div className='App'>
        <QueryClientProvider client={client}>
          <Router>
            <Navbar />
            <FilterProvider>
              <ApiContext.Provider value={[filters, setFilters]}>
                <Routes>
                    <Route path='/' element={<LandingPage />}/>
                    <Route path='/rent' element={<ListingsPage />}/>
                    <Route path='/sell' element={<SellPage />}/>
                </Routes>
              </ApiContext.Provider>
            </FilterProvider>
          </Router>
        </QueryClientProvider>
      
    </div>
  )
}

export default App
