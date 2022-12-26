import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';


const Content = () => {
    return (
        <Box sx={{ overflow: 'auto' }}>
            <List>
                <ListItem key="dashboard" disablePadding>
                    <ListItemButton component={RouterLink} to="/dashboard">
                        <ListItemIcon>
                            <DashboardOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary='Dashboard' />
                    </ListItemButton>
                </ListItem>
                <ListItem key="settings" disablePadding>
                    <ListItemButton component={RouterLink} to="/settings">
                        <ListItemIcon>
                            <SettingsOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary='Settings' />
                    </ListItemButton>
                </ListItem>
                <ListItem key="logs" disablePadding>
                    <ListItemButton component={RouterLink} to="/logs">
                        <ListItemIcon>
                            <ReceiptLongOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary='Logs' />
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />
        </Box>
    )
}

export default Content;