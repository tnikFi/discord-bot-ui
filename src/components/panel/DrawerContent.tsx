import { Box, Divider } from '@mui/material'
import constants from '../../constants'
import RouteList from './RouteList'
import { Route } from './RouteList'

import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import StorageIcon from '@mui/icons-material/StorageOutlined';
import GuildList from './GuildList'
import { Guild } from './GuildList'
import React from 'react'
import Status from './Status'

const testGuilds: Guild[] = [
    { icon: 'https://dummyimage.com/256x256.png', id: 1, name: 'test 1' },
    { icon: 'https://dummyimage.com/256x256.png', id: 2, name: 'test 2' },
    { icon: 'https://dummyimage.com/256x256.png', id: 3, name: 'test 3' },
    { icon: 'https://dummyimage.com/256x256.png', id: 4, name: 'test 4' },
    { icon: 'https://dummyimage.com/256x256.png', id: 5, name: 'test 5' },
    { icon: 'https://dummyimage.com/256x256.png', id: 6, name: 'test 6' },
    { icon: 'https://dummyimage.com/256x256.png', id: 7, name: 'test 7' },
    { icon: 'https://dummyimage.com/256x256.png', id: 8, name: 'test 8' },
    { icon: 'https://dummyimage.com/256x256.png', id: 9, name: 'test 9' },
    { icon: 'https://dummyimage.com/256x256.png', id: 10, name: 'test 10' },
    { icon: 'https://dummyimage.com/256x256.png', id: 11, name: 'test 11' },
    { icon: 'https://dummyimage.com/256x256.png', id: 12, name: 'test 12' },
    { icon: 'https://dummyimage.com/256x256.png', id: 13, name: 'test 13' },
    { icon: 'https://dummyimage.com/256x256.png', id: 14, name: 'test 14' },
    { icon: 'https://dummyimage.com/256x256.png', id: 15, name: 'test 15' },
    { icon: 'https://dummyimage.com/256x256.png', id: 16, name: 'test 16' },
    { icon: 'https://dummyimage.com/256x256.png', id: 17, name: 'test 17' },
    { icon: 'https://dummyimage.com/256x256.png', id: 18, name: 'test 18' },
    { icon: 'https://dummyimage.com/256x256.png', id: 19, name: 'test 19' },
    { icon: 'https://dummyimage.com/256x256.png', id: 20, name: 'test 20' },
]

const routes: Route[] = [
    {
        path: 'dashboard',
        name: 'Dashboard',
        icon: <DashboardOutlinedIcon />
    },
    {
        path: 'settings',
        name: 'Settings',
        icon: <SettingsOutlinedIcon />
    },
    {
        path: 'storage',
        name: 'Storage',
        icon: <StorageIcon />
    },
    {
        path: 'logs',
        name: 'Logs',
        icon: <ReceiptLongOutlinedIcon />
    }
]

const DrawerContent = () => {
    return (
        <Box sx={{ overflowY: 'auto', overflowX: 'hidden', width: constants.drawerWidth }}>
            <Status />
            <Divider />
            <RouteList routes={routes} />
            <Divider />
            <GuildList guilds={testGuilds} />
        </Box>
    )
}

export default DrawerContent