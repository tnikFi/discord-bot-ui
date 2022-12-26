// Probably should clean this up a bit later
import {
  AppBar, Box, createTheme, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack,
  ThemeProvider, Toolbar, Typography, useMediaQuery
} from '@mui/material'

import React from 'react'
import { BrowserRouter, Routes, Route, useParams, useLocation, useSearchParams } from 'react-router-dom'
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

  const [searchParams, setSearchParams] = useSearchParams()
  console.log(searchParams.get('guild'))
  
  // If route is /panel, redirect to /panel/dashboard
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path='panel' element={<Layout />}>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='settings' element={<Settings />} />
          <Route path='*' element={<NotFound />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  )
}

export { MobileContext, MobileMenuContext }
export default App
