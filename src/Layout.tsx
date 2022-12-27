import { AppBar, CssBaseline, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import { Navigate, Outlet, useOutlet } from "react-router-dom";
import PanelAppBar from "./components/panel/PanelAppBar";
import Sidebar from "./components/panel/Sidebar";

const Layout = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = (event: React.MouseEvent<HTMLElement>) => {
    setMobileOpen(!mobileOpen);
  };

  const outlet = useOutlet();

  return (
    <>
      {
        true  // TODO: Replace with auth check
          ? <Box sx={{ display: 'flex' }}>
            <PanelAppBar handleDrawerToggle={handleDrawerToggle} />
            <Sidebar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <Toolbar />
              {outlet || <Navigate to={{ pathname: 'dashboard', search: location.search }} />}
            </Box>
          </Box>
          : outlet || <Navigate to={{ pathname: '/login' }} />
      }
    </>
  );
};

export default Layout;