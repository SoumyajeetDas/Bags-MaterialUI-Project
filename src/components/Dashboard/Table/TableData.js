import React, { useEffect, useState } from 'react';
import { TableContainer, Table, TableBody, TableHead, TableRow, TableCell, Paper, Container, Box, Typography, Stack, Pagination, TextField, } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

const TableData = () => {

    const [coinTableData, setCoinTableData] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false)


    // To provide comma in functions
    function numberWithCommas(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }




    const fetchTableData = async () => {

        setLoading(true);
        let data = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false')

        if (data.status === 200) {
            let dataJson = await data.json();

            setCoinTableData(dataJson);
        }

        setLoading(false);
    }


    const handleSearch = (e) => {

        // arr = coinTableData.map(data => console.log(data.name.toLowerCase().includes((e.target.value).toLowerCase()))))
        if (!e.target.value || !e.target.value) {
            fetchTableData();
        }


        let arr = coinTableData.filter(data => data.name.toLowerCase().includes((e.target.value).toLowerCase()));


        setCoinTableData(arr)
    }

    useEffect(() => {
        fetchTableData()
    }, [])

    return (
        <Container sx={{
            marginTop: '50px',
        }}>


            <Paper elevation={8} sx={{
                backgroundImage: "linear-gradient(to bottom right, #ff9800, #fff)",
                borderRadius: "20px"
            }}>
                <Typography variant="h4" marginBottom={5} sx={{
                    fontFamily: "'Unbounded', cursive",
                    color: "White",
                    paddingTop: "30px",
                    fontSize: {
                        // lg: "37px",
                        md: "31px",
                        xs: "25px"
                    }
                }}>
                    Cryptocurrency Prices By Market Cap !!
                </Typography>


                <Paper elevation={6} sx={{
                    padding: "20px",
                    backgroundColor: "transparent",
                    width: "90%",
                    margin: "auto",
                    marginBottom: "20px"
                }}>
                    <TextField
                        variant="filled"
                        placeholder="Search for a Crypto Currency..."
                        color='warning'
                        focused
                        fullWidth
                        onChange={handleSearch}
                    />
                </Paper>

                {coinTableData.length === 0 ?
                    <Stack sx={{
                        marginTop:"70px",
                        marginBottom: "20px"
                    }}>
                        <Typography variant = "h6" sx={{color:"warning.dark", fontFamily: "'Unbounded', cursive"}}>
                            No Data to Show !!
                        </Typography>
                    </Stack>
                    :
                    <TableContainer sx={{
                        background: "transparent",
                        maxHeight: "700px"
                    }}>

                        {/* Loader */}
                        {loading && <CircularProgress color="warning" />}



                        <Table stickyHeader>
                            <TableHead >
                                <TableCell align='center' sx={{
                                    backgroundColor: "warning.main",
                                    color: "white",
                                    fontFamily: "'Unbounded', cursive"
                                }}>
                                    Coin
                                </TableCell>
                                <TableCell align='center' sx={{
                                    backgroundColor: "warning.main",
                                    color: "white",
                                    fontFamily: "'Unbounded', cursive"
                                }}>
                                    Price
                                </TableCell>
                                <TableCell align='center' sx={{
                                    backgroundColor: "warning.main",
                                    color: "white",
                                    fontFamily: "'Unbounded', cursive"
                                }}>
                                    24h Change
                                </TableCell>
                                <TableCell align='center' sx={{
                                    backgroundColor: "warning.main",
                                    color: "white",
                                    fontFamily: "'Unbounded', cursive"
                                }}>
                                    Market Cap
                                </TableCell>
                            </TableHead>


                            <TableBody>

                                {/* The array contains 100 elements, according to the pagination number the slice will be done */}



                                {coinTableData.slice((page - 1) * 10, (page - 1) * 10 + 10).map(row => (
                                    <TableRow
                                        key={row.id}
                                    >
                                        <TableCell align='center' sx={{
                                            fontFamily: "'Poppins', sans-serif",
                                            fontWeight: 'bold',
                                        }}>
                                            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                                <img src={row.image} alt={row.name} height="50" />
                                                {row.name}
                                            </Box>

                                        </TableCell>


                                        <TableCell sx={{
                                            fontFamily: "'Poppins', sans-serif",
                                            fontWeight: 'bold',
                                        }} align='center' >
                                            ₹{numberWithCommas((row.current_price).toFixed(2))}
                                        </TableCell>


                                        <TableCell align='center'>
                                            <Typography sx={{
                                                color: `${row.price_change_percentage_24h < 0 ? 'error.main' : 'success.main'}`,
                                                fontFamily: "'Poppins', sans-serif",
                                                fontWeight: 'bold',
                                            }}>
                                                {
                                                    row.price_change_percentage_24h < 0 ?
                                                        (row.price_change_percentage_24h).toFixed(2) + '%'
                                                        : '+' + (row.price_change_percentage_24h).toFixed(2) + '%'}
                                            </Typography>

                                        </TableCell>


                                        <TableCell align='center' sx={{
                                            fontFamily: "'Poppins', sans-serif",
                                            fontWeight: 'bold',
                                        }}
                                        >₹{numberWithCommas((row.market_cap).toFixed(2))}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>

                    </TableContainer>
                }


                <Stack sx={{ justifyContent: "center", alignItems: 'center', padding: "10px" }}>

                    <Pagination color="warning" count={(coinTableData.length / 10).toFixed(0)}
                        onChange={(a, value) => {
                            console.log(value)
                            setPage(value);
                        }}
                    />
                </Stack>
            </Paper>

        </Container>
    )
}

export default TableData
