import { Box, Divider, Typography } from '@mui/material'

const NotFound = () => {
    return (
        <Box sx={{ p: 10 }}>
            <Typography variant='h2'>404</Typography>
            <Typography variant='h3'>Page not found</Typography>
            <Divider sx={{ my: 2 }} />
            <Typography>The page you are looking for does not exist.</Typography>
        </Box>
    )
}

export default NotFound