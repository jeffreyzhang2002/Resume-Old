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
                        description="As a research intern at Nanobiotec LLC, I was responsible for culutring human cell and running samples
                        through different assays and procedures. This experience allowed me to skills in PCR,
                        Gel-electrophorese, Western Blot and other techniques. Moreover, I assisted in data collection and analysis
                        and used different software for data processing"/>
                    <ExperienceCard title="Camp Counselor"
                    position="Mountain Lakes Makerspace 6/2018 - 9/2021"
                        description="As a camp counselor, I was reponsible for teaching middle school kids about programming in python and 3D design/3D printing
                        using fusion360 and cura. In addition I assisted in camper's projects and helped them trouble shoot when they faced problems."/>
                </ContentContainer>
            </Container>
        )
    }
}