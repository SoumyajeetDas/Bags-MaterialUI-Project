import { Paper, Container, Typography, Stack } from '@mui/material'
import React from 'react';
import PageNotFound from '../Gifs/PageNotFound';

const Page404 = () => {
    return (
        <Container fixed sx={{
            marginTop: "50px",
            // height: "200px"
        }}>
            <Paper sx={{
                padding: "20px",
                borderRadius: "20px",
                backgroundImage: "linear-gradient(to bottom right, #ff9800, #fff)",
                height: "100%",
            }}
            >
                <Stack sx={{
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <PageNotFound />
                    <Typography variant='h4' s sx={{
                        color: "#566573",
                        fontSize: {
                            lg: "40px",
                            md:"30px",
                            sm:"25px",
                            xs: "20px"
                        },
                        fontFamily: "'Unbounded', cursive",
                    }}>
                        Sorry Page Not Found !!
                    </Typography>
                </Stack>

            </Paper>

        </Container>
    )
}

export default Page404
