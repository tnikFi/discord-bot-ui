import { Stack } from '@mui/material'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import ContentWrapper from './components/ContentWrapper'
import Footer from './components/Footer'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import constants from './constants'

const MobileContext = React.createContext(false)
const MobileMenuContext = React.createContext({ mobileMenuOpen: false, setMobileMenuOpen: (mobileMenuOpen: boolean) => {} })

function App() {
  const [useMobileMenu, setUseMobileMenu] = React.useState(window.innerWidth < constants.mobileMenuWidth)
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  const updateMedia = () => {
    setUseMobileMenu(window.innerWidth < constants.mobileMenuWidth)
  }

  React.useEffect(() => {
    window.addEventListener('resize', updateMedia)
    return () => window.removeEventListener('resize', updateMedia)
  })

  return (
    <BrowserRouter>
      <Stack sx={{ flexDirection: { sx: 'row', md: 'column' } }}>
        <MobileContext.Provider value={useMobileMenu}>
          <MobileMenuContext.Provider value={{mobileMenuOpen, setMobileMenuOpen}}>
            <Header />
            <ContentWrapper />
            <Footer />
          </MobileMenuContext.Provider>
        </MobileContext.Provider>
      </Stack>
    </BrowserRouter>
  )
}

export { MobileContext, MobileMenuContext }
export default App
