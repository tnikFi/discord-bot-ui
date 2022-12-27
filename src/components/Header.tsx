import { AppBar, Button, Toolbar, Typography } from "@mui/material"

const Header = () => {
    // Temporary login function
    const handleLogin = () => {
        window.location.assign('/panel/dashboard')
    }

    return (
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
                <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                    Exaxmple
                </Typography>
                <Button variant='contained' color='primary' onClick={handleLogin}>
                    Login
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default Header