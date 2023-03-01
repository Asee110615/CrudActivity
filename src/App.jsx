import React from 'react'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import { Ace, Cruz, Home, Rensteve,Russel,Zoren } from './page'
import {Box} from '@mui/material'
import { Sidebar } from './components'
const App = () => {
  return (
    <Box sx={{display:'flex', flexDirection: 'row'}}>
      <BrowserRouter>

        <Sidebar />
        
        <Box sx={{p:4,  width: '100%'}}>
            <Routes>
              
              <Route path="/">
                <Route index element={<Home />} />
              </Route>

              <Route path='user'>
                <Route path="ace" element={<Ace />} />
                <Route path="cruz" element={<Cruz />} />
                <Route path='rensteve' element={<Rensteve />} />
                <Route path="zoren" element={<Zoren />} />
                <Route path="russel" element={<Russel />} />
              </Route>


            </Routes>
        </Box>
      </BrowserRouter>
    </Box>
  )
}

export default App