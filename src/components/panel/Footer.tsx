import React from 'react';
import { Box } from '@mui/material';

const Footer = () => {
    return (
        <Box sx={{ height: '4rem', backgroundColor: 'var(--secondary-background-color)', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <p>Footer</p>
        </Box>
    );
};

export default Footer;