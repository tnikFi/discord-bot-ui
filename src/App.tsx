// Probably should clean this up a bit later
import {
  AppBar, Box, createTheme, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack,
  ThemeProvider, Toolbar, Typography, useMediaQuery
} from '@mui/material'

import React from 'react'
import { BrowserRouter, Routes, Route, useParams, useLocation, useSearchParams } from 'react-router-dom'
import './App.css'
import constants from './constants'
import Layout from './Layout'
import Index from './pages/Index'
import NotFound from './pages/NotFound'
import Dashboard from './pages/panel/Dashboard'
import PanelNotFound from './pages/panel/NotFound'
import Settings from './pages/panel/Settings'
import Storage from './pages/panel/Storage'

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
  
  // If route is /panel, redirect to /panel/dashboard
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route index element={<Index />} />
        <Route path='panel' element={<Layout />}>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='settings' element={<Settings />} />
          <Route path='storage' element={<Storage />} />
          <Route path='*' element={<PanelNotFound />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  )
}

export { MobileContext, MobileMenuContext }
export default App
