import React from 'react';
import { Box } from '@mui/material';
import './Bitcoin.css';

const BitCoin = () => {
    return (
        <Box className="bitcoin" sx={{
            display: 'flex',
            justifyContent:"center",
            alignItems: 'center',
        }}>
            <img src="Bitcoin.gif" alt="Loading...." height="350" weight="350"  />
        </Box>
    )
}

export default BitCoin
