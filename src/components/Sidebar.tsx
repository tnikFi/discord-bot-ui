import { Box, Drawer, Grid, Toolbar } from '@mui/material';
import DrawerContent from './DrawerRoutes';
import constants from '../constants';
import GuildList from './GuildList';

const testGuilds = [
    { icon: 'https://dummyimage.com/256x256.png', guildId: 1 },
    { icon: 'https://dummyimage.com/256x256.png', guildId: 2 },
    { icon: 'https://dummyimage.com/256x256.png', guildId: 3 },
    { icon: 'https://dummyimage.com/256x256.png', guildId: 4 },
    { icon: 'https://dummyimage.com/256x256.png', guildId: 5 },
    { icon: 'https://dummyimage.com/256x256.png', guildId: 6 },
    { icon: 'https://dummyimage.com/256x256.png', guildId: 7 },
    { icon: 'https://dummyimage.com/256x256.png', guildId: 8 },
    { icon: 'https://dummyimage.com/256x256.png', guildId: 9 },
    { icon: 'https://dummyimage.com/256x256.png', guildId: 10 },
    { icon: 'https://dummyimage.com/256x256.png', guildId: 11 },
    { icon: 'https://dummyimage.com/256x256.png', guildId: 12 },
    { icon: 'https://dummyimage.com/256x256.png', guildId: 13 },
    { icon: 'https://dummyimage.com/256x256.png', guildId: 14 },
    { icon: 'https://dummyimage.com/256x256.png', guildId: 15 },
    { icon: 'https://dummyimage.com/256x256.png', guildId: 16 },
    { icon: 'https://dummyimage.com/256x256.png', guildId: 17 },
    { icon: 'https://dummyimage.com/256x256.png', guildId: 18 },
    { icon: 'https://dummyimage.com/256x256.png', guildId: 19 },
    { icon: 'https://dummyimage.com/256x256.png', guildId: 20 },
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
                <Grid container columns={2} overflow={'hidden'} height='100%'>
                    <GuildList guilds={testGuilds}/>
                    <DrawerContent />
                </Grid>


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
                <Grid container columns={2} overflow={'hidden'} height='100%'>
                    <GuildList guilds={testGuilds} />
                    <DrawerContent />
                </Grid>
            </Drawer>
        </Box>
    );
};

export default Sidebar;