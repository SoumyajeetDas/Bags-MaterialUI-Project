import React from 'react';
import { Paper, Stack, Container, Typography } from '@mui/material'
import BitCoin from '../Gifs/BitCoin';
import './Content.css'
import BitCoinwork from '../Gifs/Bitcoinwork';
import Timelinecomponent from './TimelineComponent/Timelinecomponent';

const Content = () => {
    return (
        <Container fixed sx={{
            marginTop: "20px",
            marginBottom: "20px"
        }}>
            <Stack spacing={10}>
                <Paper elevation={8} sx={{
                    borderRadius: "30px",
                    backgroundImage: "linear-gradient(to bottom right, #ff9800, #fff)"
                }}>
                    <Stack direction={{
                        md: "row",
                        xs: "column"
                    }} >
                        <BitCoin />
                        <Stack spacing={2} padding={5}>
                            <Typography variant="h3" textAlign="left" id="content-heading" gutterBottom sx={{
                                color: "white",
                                fontSize: {
                                    lg: "37px",
                                    md: "31px",
                                    xs: "25px"
                                }
                            }}>
                                What is Cryptography?
                            </Typography>
                            <Typography variant="body1" textAlign="left" id="content-body"
                                sx={{
                                    color: "#566573",
                                    fontSize: {
                                        lg: "15px",
                                        xs: "12px"
                                    }
                                }}
                            >
                                Cryptocurrency is a digital payment system that doesn't rely on banks to verify transactions. It's a peer-to-peer system that can enable anyone anywhere to send and receive payments. Instead of being physical money carried around and exchanged in the real world, cryptocurrency payments exist purely as digital entries to an online database describing specific transactions. When you transfer cryptocurrency funds, the transactions are recorded in a public ledger. Cryptocurrency is stored in digital wallets.
                                <br></br>
                                <br></br>
                                The first cryptocurrency was Bitcoin, which was founded in 2009 and remains the best known today. Much of the interest in cryptocurrencies is to trade for profit, with speculators at times driving prices skyward.
                            </Typography>
                        </Stack>


                    </Stack>
                </Paper>


                <Paper elevation={8} sx={{
                    borderRadius: "30px",
                    backgroundImage: "linear-gradient(to bottom right, #ff9800, #fff)"
                }}>
                    <Stack direction={{
                        md: "row",
                        xs: "column-reverse"
                    }} >
                        <Stack spacing={2} padding={5}>
                            <Typography variant="h3" textAlign="left" id="content-heading" gutterBottom sx={{
                                color: "white",
                                fontSize: {
                                    lg: "37px",
                                    md: "31px",
                                    xs: "25px"
                                }
                            }}>
                                How does cryptocurrency work?
                            </Typography>
                            <Typography variant="body1" textAlign="left" id="content-body"
                                sx={{
                                    color: "#566573",
                                    fontSize: {
                                        lg: "15px",
                                        xs: "12px"
                                    }
                                }}
                            >
                                Cryptocurrencies run on a distributed public ledger called blockchain, a record of all transactions updated and held by currency holders.
                                <br></br>
                                <br></br>
                                Units of cryptocurrency are created through a process called mining, which involves using computer power to solve complicated mathematical problems that generate coins. Users can also buy the currencies from brokers, then store and spend them using cryptographic wallets.
                            </Typography>
                        </Stack>

                        <BitCoinwork />
                    </Stack>
                </Paper>

                <Paper elevation={8} sx={{
                    borderRadius: "30px",
                    backgroundImage: "linear-gradient(to bottom right, #ff9800, #fff)"
                }}>
                    <Stack padding={5} direction="column" >
                        <Typography variant="h3" textAlign="center" id="content-heading" gutterBottom sx={{
                            color: "white",
                            fontSize: {
                                lg: "37px",
                                md: "31px",
                                xs: "25px"
                            }
                        }}>
                            Evoluton of Cryptocurrency
                        </Typography>

                        <Timelinecomponent/>
                        
                    </Stack>
                </Paper>
            </Stack>

        </Container>

    )
}

export default Content
