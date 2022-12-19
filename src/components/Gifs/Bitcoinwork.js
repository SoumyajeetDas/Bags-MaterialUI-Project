import React from 'react';
import { Box } from '@mui/material';

const BitCoinwork = () => {
    return (
        <Box className="bitcoin" sx={{
            display: 'flex',
            justifyContent: "center",
            alignItems: 'center',
        }}>
            <img src="bitcoinwork.gif" alt="Loading...." height="350" weight="350" />
        </Box>
    )
}

export default BitCoinwork
