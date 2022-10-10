import React from 'react'
import {Typography, Box, Grid, CardMedia, Container} from '@material-ui/core'; 
import logo from '../../assests/pinup.jpg'
import styled from 'styled-components';

const Hero = ({}) => {

  return (
    <Wrapper>
    <Image src={logo} height={'950vh'} opacity={"0.9"} width={'100%'}/>
    <TextWrapper>
    <Paragraph>Vintage Items</Paragraph>
    <SubParagraph>Perspiciatis modi voluptatum qui tenetur distinctio quod laudantium quibusdam ex pariatur cumque eaque.</SubParagraph>
    <Buttons>Browse</Buttons>
    </TextWrapper>
    </Wrapper>
  )
}

export default Hero

const Wrapper = styled.div`
position: relative;
`

const Paragraph = styled.p`
font-size: 5rem;
font-family: Fantasy;
letter-spacing: 10px;
padding-top: 7rem;
color: purple;
@media (max-width: 480px) {
  font-size: 4rem;
}
@media (max-width: 768px) {
  font-size: 4rem;
}
`

const SubParagraph = styled.p`
font-size: 2rem;
max-width: 35rem;
margin-top: -3rem;
@media (max-width: 480px) {
  font-size: 1rem;
  max-width: 18rem;
  margin: auto;
  margin-top: -2rem;
}
@media (max-width: 768px) {
  font-size: 3rem;
  max-width: 30rem;
  
}

`

const Image = styled.img`
opacity: 0.9;
position: absolute;
top: -1rem;
left: 0rem;
z-index: -1;

`

const Buttons = styled.button`
  background-color: #3DD1E7;
  border: 0 solid #E5E7EB;
  box-sizing: border-box;
  color: #000000;
  display: flex;
  font-family: ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  font-size: 1rem;
  font-weight: 700;
  justify-content: center;
  line-height: 1.75rem;
  padding: .75rem 1.65rem;
  position: relative;
  text-decoration: none #000000 solid;
  text-decoration-thickness: auto;
  width: 100%;
  max-width: 460px;
  position: relative;
  cursor: pointer;
  transform: rotate(-2deg);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  

&focus {
  outline: 0;
}

&:after {
  content: '';
  position: absolute;
  border: 1px solid #000000;
  bottom: 4px;
  left: 4px;
  width: calc(100% - 1px);
  height: calc(100% - 1px);
}

&:hover:after {
  bottom: 2px;
  left: 2px;
}

@media (min-width: 768px) {
  .button-53 {
    padding: .75rem 3rem;
    font-size: 1.25rem;
    margin-top: 2rem;
    width: 300px;
  }
}
@media (max-width: 480px) {
  margin-top: 2rem;
  width: 300px;
 
}
`

const TextWrapper = styled.div`
margin-left: 5rem;
display: flex;
flex-direction: column;
@media (max-width: 480px) {
  text-align: center;
  margin-left: 0rem;
  align-items: center;
}
@media (max-width: 768px) {
  font-size: 4rem;
  text-align: center;
  margin-left: 0rem;
  align-items: center;
}
`


