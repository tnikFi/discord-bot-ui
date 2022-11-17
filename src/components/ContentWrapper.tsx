import React from 'react';
import { Box, Stack } from '@mui/material';
import Sidebar from './Sidebar';
import Page from '../pages/dashboard/Page';

const ContentWrapper = () => {
    return (
        <Stack sx={{ flexFlow: 'row nowrap', flexGrow: '1 !important' }}>
            <Box sx={{ height: 'calc(90vh - 4rem)'}}>
                <Sidebar />
            </Box>
            <Page />
        </Stack>
    );
};

export default ContentWrapper;