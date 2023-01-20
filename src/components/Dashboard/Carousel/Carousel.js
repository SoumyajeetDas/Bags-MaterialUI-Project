import React, { useEffect, useState } from 'react';
import { Box, Container, Paper, Typography, CircularProgress } from '@mui/material';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Link } from 'react-router-dom'

const Carousel = () => {

    const [coinCarouselData, setCarouselCoinData] = useState([]);

    const [loading, setLoading] = useState(false);


    // To provide comma to the price value
    function numberWithCommas(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    // For the responsiveness of the Carausel
    const responsive = {
        0: {
            items: 2
        },
        512: {
            items: 3
        },
        911: {
            items: 4
        },
        1200: {
            items: 5
        }

    }


    const fetchCarouselData = async () => {

        setLoading(true);
        let data = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h')

        if (data.status === 200) {
            let dataJson = await data.json();

            setCarouselCoinData(dataJson);
        }

        setLoading(false);
    }


    useEffect(() => {

        // Fetched the Carousel Data on component mounting
        fetchCarouselData();
    }, [])



    const items = coinCarouselData.map(coin => {
        return (

            <Link key={coin.id} to={`/dashboard/singleCoin/${coin.id}`} style={{ textDecoration: "none", color: "black" }}>

                <Box>
                    <img src={coin.image} alt={coin.name} height="80" />

                    <Box sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Typography sx={{
                            fontFamily: "'Poppins', sans-serif",
                            marginRight: "10px"
                        }}>
                            {coin.symbol}

                        </Typography>

                        <Typography sx={{


                            // If the price goes less than 0 then the colour will be 0 otherwise it will be green
                            color: `${coin.price_change_percentage_24h < 0 ? 'error.main' : 'success.main'}`
                        }}>
                            
                            {/* Adding +  if the price percenrtage is above 0 bcoz if it is less than 0 api is already providing - sign.  */}
                            <b>{(coin.price_change_percentage_24h) < 0 ? (coin.price_change_percentage_24h).toFixed(2) + '%'
                                : '+' + (coin.price_change_percentage_24h).toFixed(2) + '%'
                            }</b>
                        </Typography>

                    </Box>
                    <Box>
                        <Typography sx={{ fontFamily: "'Unbounded', cursive" }}>
                            ₹{numberWithCommas((coin.current_price).toFixed(2))}
                            </Typography>
                    </Box>
                </Box>
            </Link>


        )
    })

    return (
        <Container fixed>
            <Paper elevation={8} sx={{
                padding: "20px",
                backgroundImage: "linear-gradient(to bottom right, #ff9800, #fff)",
                borderRadius: "20px"
            }}>
                <Typography variant="h4" marginBottom={5} sx={{
                    fontFamily: "'Unbounded', cursive",
                    color: "White",
                    fontSize: {
                        // lg: "37px",
                        md: "31px",
                        xs: "25px"
                    }
                }}>
                    Trending Coins !!
                </Typography>

                {loading && <CircularProgress color="warning" />}

                {/* Third Party Carasouel module */}
                <AliceCarousel
                    mouseTracking
                    infinite
                    autoPlayInterval={1000}
                    animationDuration={1500}
                    disableButtonsControls
                    disableDotsControls
                    responsive={responsive}
                    autoPlay
                    items={items}
                />
            </Paper>

        </Container>
    )
}

export default Carousel
