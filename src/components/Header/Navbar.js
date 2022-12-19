import React from 'react';
import {
    AppBar, Container, IconButton, Toolbar, Typography, Stack, Button
} from '@mui/material';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import './Navbar.css';

const Navbar = () => {
    return (
            <AppBar position='static' sx={{
                backgroundColor: "warning.light"
            }}>
                <Container fixed>
                    <Toolbar>
                        <IconButton color='inherit' disableRipple sx={{
                            border: "2px solid #fff",
                            mr: "10px"
                        }}>
                            <CurrencyBitcoinIcon fontSize="medium" />
                        </IconButton>
                        <Typography variant="h4" id="toolbar">
                            Cryptos
                        </Typography>
                        <Stack direction="row" spacing={2} sx={{
                            ml: "auto"
                        }}>
                            <Button id="button-style" color="inherit" sx={{
                                fontSize: "15px",
                                '&:hover': {
                                    backgroundColor: "warning.main"
                                }
                            }}>Home</Button>
                            <Button id="button-style" color="inherit" sx={{
                                fontSize: "15px",
                                '&:hover': {
                                    backgroundColor: "warning.main"
                                }
                            }}>DashBoard</Button>

                        </Stack>
                    </Toolbar>
                </Container>
            </AppBar>
    )
}

export default Navbar
