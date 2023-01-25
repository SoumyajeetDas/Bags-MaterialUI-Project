import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Box, IconButton, Typography, Stack } from '@mui/material'
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import { useResolvedPath, useMatch, Link } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { UserAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'


const MobileNavbar = (props) => {


    // Getting access to the data from the Context API
    const { googleSignIn, user, logOut } = UserAuth();

    const navigate = useNavigate();

    const CustomLink = (props) => {
        // The resolvedPath resolves a given To value into an actual Path object with an absolute pathname. This is useful whenever 
        // you need to know the exact path for a relative To value. For example, the <Link> component uses this function to know the
        //  actual URL it points to.
        const resolvedPath = useResolvedPath(props.to);

        // Matches a path to the location. It means actually the path passed and the location(current page address) in the browser
        // is same or not. 
        // end is like exact path in the Route section of the BrowserRouter.
        const isActive = useMatch({ path: resolvedPath.pathname, end: true });

        return (
            <Link to={`${props.to}`} style={{
                textDecoration: "none"
            }}>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon sx={{
                            color: isActive ? 'warning.dark' : 'white',
                        }}>

                            {props.component}

                        </ListItemIcon>
                        <ListItemText>
                            <Typography variant='h6' sx={{
                                fontFamily: "'Unbounded', cursive",
                                color: isActive ? 'warning.dark' : 'white',
                            }}>
                                {props.value}
                            </Typography>
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
            </Link>
        )
    }

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
        }
        catch (err) {
            console.error(err);
        }
    }

    const handlelogOut = async () => {
        try {
            await logOut();
        }
        catch (err) {
            console.error(err);
        }
    }


    useEffect(() => {
        if (user) {
            navigate("/dashboard")
        }
        else {
            navigate("/")
        }

        // eslint-disable-next-line
    }, [user])


    return (

        <Drawer
            open={props.open}
            anchor='left'
            onClose={() => props.setOpen(false)}
        >
            <Box
                sx={{
                    width: 250,
                    height: "100%",
                    backgroundImage: "linear-gradient(to bottom right, #ff9800, #fff)",
                }}
                role="presentation"
            >

                <Stack direction="row" sx={{
                    justifyContent: "center",
                    margin: "20px 0px"
                }}>
                    <IconButton color='inherit' disableRipple sx={{
                        border: "2px solid #fff",
                        color: "white",
                        mr: "10px"
                    }}>
                        <CurrencyBitcoinIcon fontSize="medium" />
                    </IconButton>
                    <Typography variant="h4" id="toolbar" sx={{ color: "#fff" }}>
                        Cryptos
                    </Typography>
                </Stack>

                <List>

                    <CustomLink value='Home' to='/' component={<HomeIcon />} />
                    <CustomLink value='Dashboard' to='/dashboard' component={<DashboardIcon />} />

                    {user ? <Link to="#" style={{
                        textDecoration: "none"
                    }}
                        onClick={() => handlelogOut()}
                    >
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon sx={{
                                    color: 'white',
                                }}>

                                    <LogoutIcon />

                                </ListItemIcon>
                                <ListItemText>
                                    <Typography variant='h6' sx={{
                                        fontFamily: "'Unbounded', cursive",
                                        color: 'white',
                                    }}>
                                        Logout
                                    </Typography>
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                    </Link>

                        :

                        <Link to="#" style={{
                            textDecoration: "none"
                        }}
                            onClick={() => handleGoogleSignIn()}
                        >
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon sx={{
                                        color: 'white',
                                    }}>

                                        <LoginIcon />

                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography variant='h6' sx={{
                                            fontFamily: "'Unbounded', cursive",
                                            color: 'white',
                                        }}>
                                            Login
                                        </Typography>
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                        </Link>

                    }


                </List>
            </Box>
        </Drawer>

    )
}

export default MobileNavbar
