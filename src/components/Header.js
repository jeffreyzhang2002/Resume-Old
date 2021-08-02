import React from 'react';
import Styled from 'styled-components';

import Image from './assets/pfp4.png';

const Container = Styled.header`
    width: auto;
    height: 100%;

    display: relative;

    background-color: black;
`;

const DownArrow = Styled.div`
    position: absolute;
    bottom: 10%;
    left: 50%;
    translateX(-50%);

    width: 2em;
    height: 2em;
    

    svg{
        fill: #FF4500;

        &:hover{
            fill: white;
        }
    }

`;

const Content = Styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 60%;
    
    

    color: white;

    padding: 1em 0;
    
    p{
        padding: 0;
        margin: 0;
    }

    #intro{
        font-size: 1.5em;
        color: #FF4500;
    }

    #title{
        font-size: 5em;
    }

    #description{
        color: #FF4500;
    }
`;

const Resume = Styled.button`
    position: absolute;
    top: 1.5em;
    right: 1em;

    height: 2.5em;
    

    background: transparent;

    border: solid 3px #FF4500;
    color: #FF4500;

    &:hover{
        border: solid 3px white;
        color: white;
    }

`;

const Logo = Styled.div`
    position: absolute;
    top: 1em;
    left: 1em;

    width: 2em;
    aspect-ratio: 1/1;
    background: 1em;
    background-image: url(${Image});
    background-position: center;
    background-size: contain;
    background-color: #FF4500;
    border: 2px solid #FF4500;
    border-radius: 3em;

    &:hover{
        background-color: white;
        border: 2px solid white;
    }
`

export default class Header extends React.Component{
    render(){
        return(
            <Container id="home">

                <Logo> </Logo>

                <Resume>
                    Resume
                </Resume>

                <Content>
                    <p id="intro"> /* Hello World! My name is */ </p>
                    <p id="title"> Jeffrey Zhang </p>
                    <p id="description"> "I'm a computer science student studying @ Georgia Tech. Im interested 
                    in software engineering, robotics and machine learning. Click below to learn more!"</p>
                </Content>

       

                <DownArrow onClick={()=>{
                    window.scrollTo
                    ({
                        top: document.querySelector('#nav').getBoundingClientRect().top + window.pageYOffset,
                        behavior: 'smooth'
                    }) 
                    }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                    </svg>
                </DownArrow>
            </Container>
        )
    }
}