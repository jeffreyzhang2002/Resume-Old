import React from 'react';
import Styled from 'styled-components';

import Image from './assets/ML.jpg';

const Container = Styled.div`
    width: 100%;
    height: fit-content;
    padding: 2em;
    box-sizing: border-box;
    color: black;

`;

const Title = Styled.h3`
    text-align: center;
    text-decoration: underline;
    margin: 0;
    margin-bottom: 1em;
    color: black;
`;

const ImageBox = Styled.div`
   
    width: 100%;    

    box-sizing: border-box;
    aspect-ratio: 2/1;
    background-image: url(${Image});
    background-position: center;
    background-repeat: no-repeat; 
    background-size: 50%;
`;

const ContentContainer = Styled.div`
    
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(400px,95%), 1fr));
    grid-gap: 0.5em 2em;
    align-content: center;
`;

const Content = Styled.div`
    width: 100%;

    abbr{
        border: none;
        text-decoration: none;
    }
`;



export default class MLCard extends React.Component{
    render()
    {
        return(
            <Container>
                <Title> Mountain Lakes High School </Title>
                <ContentContainer>
                    <ImageBox></ImageBox>
                    <Content>
                        At Mountain Lakes Highschool, I took courses in AP Physics C, AP Calculus BC, AP Statistics, AP Computer Science A, etc.
                        Moreover, I was the captain of the robotics team.
                        <br/>
                        <br/>
                        GPA: 4.6 weighted Honor Role all semesters
                        <br/>
                        <br/>
                        9/2017 - 6/2021
                    </Content>
                </ContentContainer>
            </Container>
        )
    }
}