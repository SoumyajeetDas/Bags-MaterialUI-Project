import React from 'react';
import {Box} from '@mui/material'
import Carousel from './Carousel/Carousel';
import TableData from './Table/TableData';
const Dashboard = () => {
  return (
    <Box mt={10}>
      <Carousel/>
      <TableData/>
    </Box>
  )
}

export default Dashboard
