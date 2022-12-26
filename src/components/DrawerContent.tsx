import { Box, Divider } from '@mui/material'
import constants from '../constants'
import RouteList from './RouteList'
import { Route } from './RouteList'

import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import StorageIcon from '@mui/icons-material/StorageOutlined';

const routes: Route[] = [
    {
        path: '/dashboard',
        name: 'Dashboard',
        icon: <DashboardOutlinedIcon />
    },
    {
        path: '/settings',
        name: 'Settings',
        icon: <SettingsOutlinedIcon />
    },
    {
        path: '/storage',
        name: 'Storage',
        icon: <StorageIcon />
    },
    {
        path: '/logs',
        name: 'Logs',
        icon: <ReceiptLongOutlinedIcon />
    }
]

const DrawerContent = () => {
  return (
    <Box sx={{ overflowY: 'auto', overflowX: 'hidden', width: constants.drawerWidth }}>
        <RouteList routes={routes} />
        <Divider />
    </Box>
  )
}

export default DrawerContent