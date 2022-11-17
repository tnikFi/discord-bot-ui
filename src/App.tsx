import { Stack } from '@mui/material'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import ContentWrapper from './components/ContentWrapper'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <BrowserRouter>
      <Stack sx={{ flexDirection: { sx: 'row', md: 'column' } }}>
        <Header />
        <ContentWrapper />
      </Stack>
    </BrowserRouter>
  )
}

export default App
