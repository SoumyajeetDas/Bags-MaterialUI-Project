import React, { useState } from 'react';
import { AppBar, Container, IconButton, Toolbar, Typography, Stack, Button, useTheme, useMediaQuery, Avatar, Tooltip } from '@mui/material';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import { useNavigate, useResolvedPath, useMatch } from 'react-router-dom'
import './Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import MobileNavbar from './MobileNavbar';
import { UserAuth } from '../../context/AuthContext';
import { useEffect } from 'react';

const Navbar = () => {


    const navigate = useNavigate();

    const [open, setOpen] = useState(false);

    // Getting access to the data from the Context API
    const { googleSignIn, user, logOut } = UserAuth();

    // This will take out the current theme that is been used in the project.
    const theme = useTheme();

    // useMediaWuery will basically check for the breakponts or wwe can seay if it is lower than md
    const isMatch = useMediaQuery(theme.breakpoints.down("md"))


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
            <>

                <Button id="button-style" color="inherit"
                    onClick={() => navigate(`${props.to}`)}
                    sx={{
                        fontSize: "15px",
                        backgroundColor: isActive ? 'warning.main' : '',
                        '&:hover': {
                            backgroundColor: "warning.main"
                        }
                    }}>
                    {props.value}
                </Button>
            </>

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
        if (!user) {

            navigate("/")
        }

        // eslint-disable-next-line
    }, [user]);


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
                        ml: "auto",
                        // width:"50px"
                    }}>

                        {/* With useMediqQuery isMatch checks whether or not it below md or above md */}

                        {!isMatch ?

                            <>
                                <CustomLink value="Home" to="/" />

                                <CustomLink value="Dashboard" to="/dashboard" />

                                {user ?

                                    <Stack direction="row" spacing={2}>
                                        <Tooltip title={user.email}>

                                            {/* If referrerPolicy: "no-referrer" not given it results restricts access to its image */}
                                            <Avatar imgProps={{ referrerPolicy: "no-referrer" }} alt="Profile" src={`${user.photoURL}`} sx={{
                                                marginLeft: "100px"
                                            }} />
                                        </Tooltip>

                                        <Button id="button-style" color="inherit"
                                            onClick={() => handlelogOut()}
                                            sx={{
                                                fontSize: "15px",
                                                '&:hover': {
                                                    backgroundColor: "warning.main"
                                                }
                                            }}>
                                            Logout
                                        </Button>
                                    </Stack>


                                    :

                                    <Button id="button-style" color="inherit"
                                        onClick={() => handleGoogleSignIn()}
                                        sx={{
                                            fontSize: "15px",
                                            '&:hover': {
                                                backgroundColor: "warning.main"
                                            }
                                        }}>
                                        Login
                                    </Button>

                                }


                            </>



                            :

                            <>
                                {user && <Tooltip title={user.email}>
                                    <Avatar alt="Profile" src={`${user.photoURL}`} />
                                </Tooltip>}

                                <IconButton color='inherit' onClick={() => setOpen(true)}>
                                    <MenuIcon />
                                </IconButton>
                            </>


                        }


                    </Stack>
                </Toolbar>
            </Container>

            <MobileNavbar open={open} setOpen={setOpen} />

        </AppBar>
    )
}

export default Navbar
