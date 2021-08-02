import React from 'react';
import Styled from 'styled-components';
import SkillsBar from './SkillsBar';

const Container = Styled.div`
    width: auto;
    width: 100%;
    height: fit-content;
    background-color: #0d0d0d;
    padding-bottom: 1em;
`;

const GridContainer = Styled.div`
    height: fit-content;
    width: 100%;
   

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(600px,95vmin), 1fr));
    grid-gap: 0.5em 2em;
    padding: 0.5em 4em;

    place-items: center;
    place-content: center;

    box-sizing: border-box;

`;

const Title = Styled.h2`
    text-align: center;
    color: #ffffff;
    font-size: 1.5em;
    padding: 0.5em 0;
    margin: 0;
    margin: 0;
`;

export default class Skills extends React.Component{
    render()
    {
        return(
            <Container id="skills">
                <Title> Skills </Title>
                <GridContainer>
                    <SkillsBar title="Java" skillLevel="90" skillMax="100"/>
                    <SkillsBar title="Python" skillLevel="75" skillMax="100"/>
                    <SkillsBar title="C++" skillLevel="60" skillMax="100"/>
                    <SkillsBar title="HTML" skillLevel="100" skillMax="100"/>
                    <SkillsBar title="JavaScript" skillLevel="60" skillMax="100"/>
                    <SkillsBar title="ReactJS" skillLevel="50" skillMax="100"/>
                    <SkillsBar title="JQuery" skillLevel="50" skillMax="100"/>
                    <SkillsBar title="CSS/SCSS" skillLevel="65" skillMax="100"/>
                    <SkillsBar title="Git" skillLevel="50" skillMax="100"/>
                    <SkillsBar title="SQL" skillLevel="45" skillMax="100"/>
                    <SkillsBar title="SolidWorks" skillLevel="60" skillMax="100"/>
                    <SkillsBar title="3D printing" skillLevel="60" skillMax="100"/>
                </GridContainer>
            </Container>
        )
    }
}
    