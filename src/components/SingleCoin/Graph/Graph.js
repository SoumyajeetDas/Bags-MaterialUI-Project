import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';


// eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto" // This import is imp for the graph to work evn if it is not used anywhere in the
// code.


const Graph = () => {


    const [coinGraph, setCoinGraph] = useState([]);

    const [loading, setLoading] = useState(false)

    const { id } = useParams();

    const graphData = async () => {

        setLoading(true)
        let data = await fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=INR&days=365`)

        if (data.status === 200) {
            let dataJson = await data.json();

            setCoinGraph(dataJson.prices);
        }

        setLoading(false)
    }


    useEffect(() => {

        graphData();

        // eslint-disable-next-line
    }, []);


    return (
        <>

            {/* Loader */}
            {loading && <CircularProgress size={150} color="warning" />}


            {!loading && <Line
                data={{
                    labels: coinGraph.map((data) => {

                        let date = new Date(data[0]);

                       // Concatenating the month with year

                        return date.toLocaleString('default', { month: 'long' }) + " " + date.getFullYear();


                    }), // Data for x axis
                    datasets: [{
                        label: 'Price Past 1 year in INR',
                        data: coinGraph.map((data) => data[1]), // Data for Y axis
                        borderColor: [
                            '#e65100'  // Border Colour for each bar
                        ],
                        borderWidth: 1, // Border width for each bar.


                    }]
                }}

                // Height and weight of the whole graph
                // width={200}


                options={{
                    plugins: {  // 'legend' now within object 'plugins {}'
                        legend: {

                            // Design of the label of the graph
                            labels: {
                                color: "#e65100", // Colour of the label

                                font: {  // font of the label
                                    size: 17,
                                    weight: 'bold'
                                },

                            }
                        }
                    },

                    // Design of the x and Y axis Labels
                    scales: {
                        y: {  // not 'yAxes: [{' anymore (not an array anymore)
                            ticks: {
                                color: "#566573", // colour of the label of Y axis
                                font: { // font style of the label of Y axis
                                    size: 14,
                                    style: 'italic'
                                },
                                stepSize: 50, // Interval of the y-axis
                                beginAtZero: true
                            },

                            grid: { // The grids for the x-axis can be hidden by making display to false
                                display: false
                            }
                        },
                        x: {  // not 'xAxes: [{' anymore (not an array anymore)
                            ticks: {
                                color: "#566573",  // colour of the label of X axis
                                //fontSize: 14,
                                font: { // font style of the label of X axis
                                    size: 14, // 'size' now within object 'font {}'
                                    style: 'italic'
                                },
                                stepSize: 1, // Interval of the x-axis
                                beginAtZero: true
                            },

                            grid: { // The grids for the x-axis can be hidden by making display to false
                                display: false
                            }
                        }
                    }
                }}

            />}

        </>


    )
}

export default Graph
