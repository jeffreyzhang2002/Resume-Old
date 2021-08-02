import React from 'react';
import Styled from 'styled-components';

const Container = Styled.div`
    color: #ffffff; 
    width: 75%;
    padding: 0 1em;
    margin: 1em;
    border: 3px solid #FF4500;
    border-radius: 20px;
    background-color: #0d0d0d;
`;

const Title = Styled.h3`
    text-align: center;
    color: #ffffff;
    font-size: 1em;
    text-decoration: underline;


    margin-bottom: 0.5em;
`;

const SubTitle = Styled.h3`

    margin: 0;

    text-align: center;
    color: #ffffff;
    font-size: 0.7em;
    margin-bottom: 1em;
`;




const Description = Styled.p`
    margin: 0;
    padding: 0;
    width: auto;
    padding: 0.5em 10%;
    color: #ffffff;
    line-height: 1.5em;
`;

export default class ExperienceCard extends React.Component{
    render(){
        return(
            <Container>
                <Title> {this.props.title} </Title>
                <SubTitle> {this.props.position} </SubTitle>
                <Description> {this.props.description} </Description>
            </Container>
        );
    }
}