import { AppBar, CssBaseline, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const Layout = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = (event: React.MouseEvent<HTMLElement>) => {
    setMobileOpen(!mobileOpen);
  };
  
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Header handleDrawerToggle={handleDrawerToggle} />
            <Sidebar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                <Outlet />
            </Box>
        </Box>
    );
};

export default Layout;