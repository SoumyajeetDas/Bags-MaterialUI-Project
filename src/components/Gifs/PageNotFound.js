import React from 'react';
import { Box } from '@mui/material';
import './PageNotFound.css'

const BitCoinwork = () => {
    return (
        <Box className="notfound" sx={{
            display: 'flex',
            justifyContent: "center",
            alignItems: 'center',
        }}>
            <img src="/pagenotfound.gif" alt="Loading...." height="240" weight="240" />
        </Box>
    )
}

export default BitCoinwork
