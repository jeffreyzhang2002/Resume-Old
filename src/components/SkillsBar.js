import React from 'react';
import Styled from 'styled-components';

const Container = Styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
`;

const Title = Styled.h3`
    font-size: 1em;
    passing: 0;
    margin: 0;
    color: #ffffff;
`;

const Progress = Styled.progress`
    width: 75%;
    height: 100%;
    right: 0;
    border-radius: 7px;
    padding-left: 1em;
    

    &::-webkit-progress-bar{
        background-color: dark-gray;
        border-radius: 7px;
    }

    &::-webkit-progress-value {
        background-color: #FF4500;
        border-radius: 7px;
    }
`;

export default class SkillsBar extends React.Component{
    render()
    {
        return(
            <Container>
                <Title> {this.props.title} </Title>
                <Progress value={this.props.skillLevel} max={this.props.skillMax}> {this.props.title} </Progress>
            </Container> 
        );
    }
}