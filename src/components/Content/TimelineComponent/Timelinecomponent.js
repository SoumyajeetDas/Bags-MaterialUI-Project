import React from 'react';
import { Typography, useTheme, useMediaQuery } from '@mui/material'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';


const Timelinecomponent = () => {

    // This will take out the current theme that is been used in the project.
    const theme = useTheme();

    // useMediaWuery will basically check for the breakponts or wwe can seay if it is lower than md
    const isMatch = useMediaQuery(theme.breakpoints.down("md"))


    return (

        <Timeline position={isMatch?'right':'alternate'}>

            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="h5"
                    color="#566573"
                >
                    1991
                </TimelineOppositeContent>
                <TimelineSeparator>

                    <TimelineConnector />
                    <TimelineDot />
                    <TimelineConnector />

                </TimelineSeparator>

                <TimelineContent sx={{ py: '12px', px: 2 }}>

                    <Typography variant="body1" sx={{ color: "#566573" }} component="span">
                        First Paper published on use of chain in cryptographically secured books
                    </Typography>

                </TimelineContent>
            </TimelineItem>


            <TimelineItem>

                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="h5"
                    color="#566573"
                >
                    2009
                </TimelineOppositeContent>

                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot>
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>

                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="body1" sx={{ color: "#566573" }} component="span">
                        The First Bitcion wes moned by Santoshi Nakamato
                    </Typography>
                </TimelineContent>

            </TimelineItem>


            <TimelineItem>

                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="h5"
                    color="#566573"
                >
                    2012
                </TimelineOppositeContent>

                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>

                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="body1" sx={{ color: "#566573" }} component="span">
                        Bitcoin reached $250 as it's worth
                    </Typography>
                </TimelineContent>

            </TimelineItem>


            <TimelineItem>

                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="h5"
                    color="#566573"
                >
                    2017
                </TimelineOppositeContent>

                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot>
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>

                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="body1" sx={{ color: "#566573" }} component="span">
                        Japan legalized Bitcoin currency. US regulators approved bitcoin as a mainstream investment
                    </Typography>
                </TimelineContent>

            </TimelineItem>


            <TimelineItem>

                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="h5"
                    color="#566573"
                >
                    2018
                </TimelineOppositeContent>

                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>

                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="body1" sx={{ color: "#566573" }} component="span">
                        Google, FB & Twitter banned Cryptocurrency
                    </Typography>
                </TimelineContent>

            </TimelineItem>


            <TimelineItem>

                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="h5"
                    color="#566573"
                >
                    2019
                </TimelineOppositeContent>

                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot>
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>

                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="body1" sx={{ color: "#566573" }} component="span">
                        Facebook announced their cryptocurrency named Libra
                    </Typography>
                </TimelineContent>

            </TimelineItem>


            <TimelineItem>

                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="h5"
                    color="#566573"
                >
                    2021
                </TimelineOppositeContent>

                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>

                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="body1" sx={{ color: "#566573" }} component="span">
                        Facebook renamed their company
                    </Typography>
                </TimelineContent>

            </TimelineItem>


            <TimelineItem>

                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="h5"
                    color="#566573"
                >
                    Present
                </TimelineOppositeContent>

                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot>
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>

                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="body1" sx={{ color: "#566573" }} component="span">
                        Indian Govt. anoounced 30% taxation on digital asset transfers
                    </Typography>
                </TimelineContent>

            </TimelineItem>


        </Timeline>

    )
}

export default Timelinecomponent
