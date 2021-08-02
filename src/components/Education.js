import React from 'react';
import Styled from 'styled-components';

import GTCard from './GTCard';
import MLCard from './MLCard';

const Container = Styled.div`
    width: 100%;
    height: fit-content;
    padding-bottom: 2em;
    background-color: #0d0d0d;
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
    width: 100%;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;

`;

const Icon = Styled.div`
    width: 2em;
    height: 2em;
    fill: #FF4500;

    svg{
        fill: inherit;
    }

    :hover{
        fill: #ffffff;
    }
`;

const Content= Styled.div`
    width: 80%;
    height: fit-content;
    margin: 0 1em;
    box-sizing: border-box;
    border: 3px solid #FF4500;
    border-radius: 20px;
    color: #ffffff;

    background-color: white;
`;

export default class Education extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={current: 0, content: <GTCard/>}
    }

    changeEducation(){
        if(this.state.current === 0)
        {
            this.setState({current: 1, content:<MLCard/>})
        }
        else
        {
            this.setState({current:0, content: <GTCard/>})
        }
    }

    render(){
        return(
            <Container id="education">
                <Title> Education </Title>
                <ContentContainer>
                    <Icon onClick={()=>{this.changeEducation(); console.log("pressed");}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" viewBox="0 0 16 16">
                        <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
                        </svg>
                    </Icon>
                    <Content>
                        {this.state.content}
                    </Content>
                    <Icon onClick={()=>{this.changeEducation();}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" viewBox="0 0 16 16">
                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                        </svg>
                    </Icon>
                </ContentContainer>
            </Container>
        )
    }
}