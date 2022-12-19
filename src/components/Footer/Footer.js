import React from 'react'
import { Container, Box, Stack, IconButton, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <Box mt={10} mb={5}>
            <Container fixed >

                <Stack direction="column" spacing={1}>
                    <Typography variant="h4" component="div" sx={{
                        fontFamily: "'Dancing Script', cursive"
                    }}>
                        Follow us on
                    </Typography>

                    <Stack direction="row" spacing={2} sx={{ justifyContent: "center" }}>
                        <IconButton color="warning">
                            <FacebookIcon />
                        </IconButton>
                        <IconButton color="warning">
                            <TwitterIcon />
                        </IconButton >
                        <IconButton color="warning">
                            <LinkedInIcon />
                        </IconButton >
                        <IconButton color="warning">
                            <InstagramIcon />
                        </IconButton>
                    </Stack>

                </Stack>

                <Typography variant="body1" component="div" mt={7}>
                    <i>crypto.netlify.app © 2022</i>
                </Typography>

            </Container>
        </Box>
    )
}

export default Footer
