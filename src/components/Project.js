import React from 'react';
import Styled from 'styled-components';

import ProjectCard from './ProjectCard';

import PathPlanning from './assets/PathPlanning.png';
import BigNumber from './assets/BigNumber.png';
import Dashboard from './assets/React.png';


const Container = Styled.div`
    width: 100%;
    height: fit-content;

    background-color: #333333
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
    height: fit-content;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(400px,95vmin), 1fr));
    grid-gap: 0.5em 2em;
`;


export default class Project extends React.Component{
    render(){
        return(
            <Container id="projects">
                 <Title> Projects </Title>
                 <ContentContainer>
                    <ProjectCard title="Robotics PathPlanning" image={PathPlanning} 
                        description="For this project I implemented Dijkstra's shortest path algorithm in addition to the A* and D* variations.
                        The project was coded in Java and the visualizations where programmed using the Processing 3 library. The goal of this
                        project was allow a robot to autonomously navigate from a starting point to and ending point while taking in senor input
                        from its environment."
                        href="https://github.com/jeffreyzhang2002/PathPlanning"/>
                    <ProjectCard title="Big Number Library" image={BigNumber}
                        description="Using the C++20 standard, I created a module based big number library. The goal of this porject is to implement
                        the basic operator (+,-,/,*) for numbers that are larger than what can normally fit in basic C++ integral type. In the future, I hope to use this library in a computer algebra system for more precision."
                        href="https://github.com/jeffreyzhang2002/BigNumber"
                    />
                    <ProjectCard title="React Dashboard" image={Dashboard}
                        description="I created a web dashboard that used ReactJS and HTML/CSS/JS and a Django Backend. This project used the MEAN tech stack. Lastly, I gained more experience in SASS and Typescript." 
                        href="https://github.com/jeffreyzhang2002/ReactWebsite"

                    />
                 </ContentContainer>
            </Container>
        )
    }
}