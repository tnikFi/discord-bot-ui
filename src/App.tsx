// Probably should clean this up a bit later
import {
  AppBar, Box, createTheme, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack,
  ThemeProvider, Toolbar, Typography, useMediaQuery
} from '@mui/material'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import ContentWrapper from './components/ContentWrapper'
import Footer from './components/Footer'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import constants from './constants'

const MobileContext = React.createContext(false)
const MobileMenuContext = React.createContext({ mobileMenuOpen: false, setMobileMenuOpen: (mobileMenuOpen: boolean) => { } })

const drawerWidth = 240

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
    <BrowserRouter>
      <Stack sx={{ flexDirection: { sx: 'row', md: 'column' } }}>
        <MobileContext.Provider value={useMobileMenu}>
          <MobileMenuContext.Provider value={{ mobileMenuOpen, setMobileMenuOpen }}>
            <ThemeProvider theme={theme}>
              <AppBar position='fixed' color='primary' sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                  <Typography variant="h6" noWrap component="div">
                    Dashboard
                  </Typography>
                </Toolbar>
              </AppBar>
              <Drawer
                variant="permanent"
                sx={{
                  width: drawerWidth,
                  flexShrink: 0,
                  [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}  // Temporarily located here, will refactor to its own component later
              >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                  <List>
                      <ListItem disablePadding>
                        <ListItemButton>
                          <ListItemIcon>
                            <DashboardOutlinedIcon />
                          </ListItemIcon>
                          <ListItemText primary='Dashboard'/>
                        </ListItemButton>
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemButton>
                          <ListItemIcon>
                            <SettingsOutlinedIcon />
                          </ListItemIcon>
                          <ListItemText primary='Settings'/>
                        </ListItemButton>
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemButton>
                          <ListItemIcon>
                            <ReceiptLongOutlinedIcon />
                          </ListItemIcon>
                          <ListItemText primary='Logs'/>
                        </ListItemButton>
                      </ListItem>
                  </List>
                  <Divider />
                </Box>
              </Drawer>
            </ThemeProvider>
          </MobileMenuContext.Provider>
        </MobileContext.Provider>
      </Stack>
    </BrowserRouter>
  )
}

export { MobileContext, MobileMenuContext }
export default App
