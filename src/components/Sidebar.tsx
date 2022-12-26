import { Box, Drawer, Grid, Toolbar } from '@mui/material';
import DrawerContent from './DrawerRoutes';
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
                <Grid container columns={2}>
                    <div>
                        <div>a</div>
                        <div>b</div>
                        <div>c</div>
                    </div>
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
                <DrawerContent />
            </Drawer>
        </Box>
    );
};

export default Sidebar;