import React from 'react'
import {Typography, Box, Grid} from '@material-ui/core';
import styled from 'styled-components'; 

const About = () => {
  return (
    <>
    <Grid container justify='center' alignItems='center' direction='column'>
        <Box mt={15}>
           
           <SplitColor/>
           <SplitColorTwo/>
           <Typography variant='h3'>About Us</Typography>
        </Box>
    </Grid>
   
    </>
  )
}

export default About

const SplitColor = styled.div`
background-color: blue;
height: 100vh;
width: 102vh;
opacity: 0.5;
position: absolute;
left: 0;
top: 0;
`

const SplitColorTwo = styled.div`
background-color: yellow;
height: 100vh;
width: 102vh;
opacity: 0.5;
position: absolute;
right: 0;
top: 0;
`