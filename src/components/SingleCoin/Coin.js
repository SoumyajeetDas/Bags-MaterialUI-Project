import React, { useState, useEffect } from 'react';
import { Grid, Container, Stack, Typography, Paper, Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import Graph from './Graph/Graph';
import CircularProgress from '@mui/material/CircularProgress';


const Coin = () => {

    const [coinData, setCoinData] = useState({})

    const { id } = useParams();

    const [loading, setLoading] = useState(false)


    // To provide comma to the price value
    function numberWithCommas(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }


    const fetchSingleCoinData = async () => {

        setLoading(true);

        let data = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`)

        if (data.status === 200) {
            let dataJson = await data.json();

            setCoinData(dataJson);
        }

        setLoading(false);
    }


    useEffect(() => {
        fetchSingleCoinData();

        // eslint-disable-next-line
    }, [])

    return (
        <Container fixed sx={{
            marginTop: "50px"
        }}>

            <Paper elevation={8} sx={{
                padding: "20px",
                borderRadius: "20px",
                backgroundImage: "linear-gradient(to bottom right, #ff9800, #fff)",
            }}>

                <Grid container >

                    <Grid item md={4} sx={{
                        borderRight: {
                            md: "2px solid #D8D8D8"
                        },
                        padding: "15px",
                        width: "100%",
                    }}>

                        {/* Loader */}
                        {loading &&

                            <Stack sx={{
                                justifyContent: "center",
                                alignItems: "center",
                            }}>

                                <CircularProgress size={150} color="warning" />

                            </Stack>

                        }


                        {!loading && <Stack spacing={4}>
                            <Stack spacing={2} sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <img src={coinData?.image?.large} alt={coinData?.name} height="100" width="100" />
                                <Typography variant='h4' sx={{
                                    color: "white",
                                    fontFamily: "'Unbounded', cursive",
                                }}>
                                    {coinData.name}
                                </Typography>
                            </Stack>
                            <Typography textAlign="justify" sx={{
                                fontFamily: "'Poppins', sans-serif",
                                fontWeight: "bold",
                                color: "#566573",
                            }}>
                                {parse("" + coinData?.description?.en?.split('. ')[0] + '. ' + coinData?.description?.en?.split('. ')[1])}.
                            </Typography>
                            <Box textAlign="left">
                                <Typography sx={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontWeight: "bold",
                                    fontSize: "20px",
                                    color: "warning.dark",
                                }}>
                                    Rank : {coinData?.market_cap_rank}
                                </Typography>

                                <Typography sx={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontWeight: "bold",
                                    fontSize: "20px",
                                    color: "warning.dark",
                                }}>
                                    Current Price : ₹{numberWithCommas((coinData?.market_data?.current_price?.inr) + "")}
                                </Typography>

                                <Typography sx={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontWeight: "bold",
                                    fontSize: "20px",
                                    color: "warning.dark",
                                }}>
                                    Market Cap : ₹{numberWithCommas((coinData?.market_data?.market_cap?.inr) + "")}
                                </Typography>

                            </Box>
                        </Stack>}

                    </Grid>

                    <Grid item md={8} xs={12} sx={{
                        padding: {
                            md: "15px",
                        },
                        marginTop: {
                            md: "0px",
                            xs: "40px"
                        },


                    }}>

                        {/* Height needs to be 100% otherwise when the screen size is height is also decreasing and the 
                        Stack component is also warpping th Graph but when the screen size decreasiGraph orientation 
                        remains the same  */}
                        <Stack sx={{
                            height: {
                                md: "100%",
                                xs: "250px"
                            },
                            justifyContent: "center",
                            alignItems: "center"
                        }}>

                            <Graph />

                        </Stack>

                    </Grid>
                </Grid>
            </Paper>
        </Container>
    )
}

export default Coin
