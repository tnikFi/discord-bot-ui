// Probably should clean this up a bit later
import {
  AppBar, Box, createTheme, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack,
  ThemeProvider, Toolbar, Typography, useMediaQuery
} from '@mui/material'

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Sidebar from './components/Sidebar'
import constants from './constants'
import Layout from './Layout'
import Dashboard from './pages/Dashboard'
import NotFound from './pages/NotFound'
import Settings from './pages/Settings'

const MobileContext = React.createContext(false)
const MobileMenuContext = React.createContext({ mobileMenuOpen: false, setMobileMenuOpen: (mobileMenuOpen: boolean) => { } })

const drawerWidth = 240

function App() {
  const [useMobileMenu, setUseMobileMenu] = React.useState(window.innerWidth < constants.mobileMenuWidth)

  const updateMedia = () => {
    setUseMobileMenu(window.innerWidth < constants.mobileMenuWidth)
  }

  React.useEffect(() => {
    window.addEventListener('resize', updateMedia)
    return () => window.removeEventListener('resize', updateMedia)
  })

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='settings' element={<Settings />} />
            <Route path='logs' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export { MobileContext, MobileMenuContext }
export default App
