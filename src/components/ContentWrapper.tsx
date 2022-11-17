import React from 'react';
import { Box, Stack } from '@mui/material';
import Sidebar from './Sidebar';

const ContentWrapper = () => {
    return (
        <Stack sx={{ flexDirection: { sx: 'column', md: 'row', sd: 'row' }, flexGrow: '1 !important' }}>
            <Box sx={{ height: 'calc(90vh - 4rem)'}}>
                <Sidebar />
            </Box>
        </Stack>
    );
};

export default ContentWrapper;