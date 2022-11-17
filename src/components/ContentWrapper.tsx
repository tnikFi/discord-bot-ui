import React from 'react';
import { Box, Stack } from '@mui/material';
import Sidebar from './Sidebar';

const ContentWrapper = () => {
    return (
        <Stack sx={{ flexDirection: { sx: 'column', md: 'row' }, flex: 1 }}>
            <Box sx={{ height: { sx: 'auto', md: 'calc(90vh - 4rem)' } }}>
                <Sidebar />
            </Box>
        </Stack>
    );
};

export default ContentWrapper;