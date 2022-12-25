import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import DrawerContent from './DrawerContent';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import constants from '../constants';

const Sidebar = ({ mobileOpen, handleDrawerToggle }: { mobileOpen: boolean, handleDrawerToggle: React.MouseEventHandler<HTMLElement> }) => {
    const container = window !== undefined ? () => document.body : undefined;
    return (
        <Box
            component="nav"
            sx={{ width: { sm: constants.drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="navigation"
        >
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    width: constants.drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {
                        width: constants.drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
            >
                <Toolbar />
                <DrawerContent />
            </Drawer>
            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: constants.drawerWidth },
                }}
            >
                <Toolbar />
                <DrawerContent />
            </Drawer>
        </Box>
    );
};

export default Sidebar;