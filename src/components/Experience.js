import React from 'react';
import Styled from 'styled-components';

import ExperienceCard from './ExperienceCard';

const Container = Styled.div`
    width: 100%;
    height: fit-content;

    background-color: #333333;
`;

const Title = Styled.h2`
    text-align: center;
    color: #ffffff;
    font-size: 1.5em;
    padding: 0.5em 0;
    margin: 0;
    margin: 0;
`;

const ContentContainer = Styled.div`
    width: auto;
    padding-bottom: 1em;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Content = Styled.div`
    color: #ffffff; 
    width: 75%;
    padding: 1em;
    margin: 1em;
    border: 3px solid #FF4500;
    border-radius: 20px;
    background-color: #0d0d0d;
`;



export default class Experience extends React.Component{
    render(){
        return(
            <Container id="experience">
                <Title> Experience </Title>
                <ContentContainer> 
                    <ExperienceCard title="Research Intern"
                        position="Nanobiotec LLC 6/2019 - 9/2020"
                        description="As a research intern at Nanobiotec LLC, I assisted in an array of lab procedures including PCR, Western Blot, Gel Electrophoresis, etc. In addition, I was responisbile for data collection and used Excel for data analusis and graph creation."/>
                    <ExperienceCard title="Camp Counselor"
                    position="Mountain Lakes Makerspace 6/2018 - 9/2021"
                        description="As a camp counselor, I was responsible for teaching younger kids about python programming, 3D design, 3D printing, robotics, etc. In addition, I assisted campers when they faced tehcnical problems and helped the trobule shoot errors and bugs."/>
                </ContentContainer>
            </Container>
        )
    }
}