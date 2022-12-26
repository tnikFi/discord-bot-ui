import { Box, Drawer, Grid, SwipeableDrawer, Toolbar } from '@mui/material';
import DrawerContent from './DrawerRoutes';
import constants from '../constants';
import { SyntheticEvent } from 'react';

const testGuilds = [
    { icon: 'https://dummyimage.com/256x256.png', guildId: 1, name: 'test' },
    { icon: 'https://dummyimage.com/256x256.png', guildId: 2, name: 'test' },
    { icon: 'https://dummyimage.com/256x256.png', guildId: 3, name: 'test' },
    { icon: 'https://dummyimage.com/256x256.png', guildId: 4, name: 'test' },
    { icon: 'https://dummyimage.com/256x256.png', guildId: 5, name: 'test' },
    { icon: 'https://dummyimage.com/256x256.png', guildId: 6, name: 'test' },
    { icon: 'https://dummyimage.com/256x256.png', guildId: 7, name: 'test' },
    { icon: 'https://dummyimage.com/256x256.png', guildId: 8, name: 'test' },
    { icon: 'https://dummyimage.com/256x256.png', guildId: 9, name: 'test' },
    { icon: 'https://dummyimage.com/256x256.png', guildId: 10, name: 'test' },
    { icon: 'https://dummyimage.com/256x256.png', guildId: 11, name: 'test' },
    { icon: 'https://dummyimage.com/256x256.png', guildId: 12, name: 'test' },
    { icon: 'https://dummyimage.com/256x256.png', guildId: 13, name: 'test' },
    { icon: 'https://dummyimage.com/256x256.png', guildId: 14, name: 'test' },
    { icon: 'https://dummyimage.com/256x256.png', guildId: 15, name: 'test' },
    { icon: 'https://dummyimage.com/256x256.png', guildId: 16, name: 'test' },
    { icon: 'https://dummyimage.com/256x256.png', guildId: 17, name: 'test' },
    { icon: 'https://dummyimage.com/256x256.png', guildId: 18, name: 'test' },
    { icon: 'https://dummyimage.com/256x256.png', guildId: 19, name: 'test' },
    { icon: 'https://dummyimage.com/256x256.png', guildId: 20, name: 'test' },
]

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
            <SwipeableDrawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onOpen={handleDrawerToggle}
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
            </SwipeableDrawer>
        </Box>
    );
};

export default Sidebar;