import React from 'react';
import Styled from 'styled-components';

const Container = Styled.div`
    width: auto;
    height: 450px;

    margin: 1em;

    border: 3px solid #FF4500;

    box-sizing: border-box;
    border-radius: 20px;

    background-color: #0d0d0d;
`;

const Title = Styled.h3`
    text-align: center;
    color: #ffffff;
    font-size: 1em;
    text-decoration: underline;

    &:hover{
        color: #FF4500;
    }
`;

const Content = Styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const ImageBox = Styled.div`
    width: 100%;
  
    box-sizing: border-box;
    aspect-ratio: 2/1;
    background-image: url(${props=>props.image});
    background-position: center;
    background-repeat: no-repeat; 
    background-size: 50%;
`;

const Description = Styled.p`
    margin: 0;
    padding: 0;
    width: auto;
    padding: 1em 10%;
    line-height: 1.5em;
    color: #ffffff;
`;

export default class ProjectCard extends React.Component{
    render(){
        return(
            <Container onClick={()=>{window.open(this.props.href,'_blank')}}>
                <Title> {this.props.title} </Title>
                <Content>
                    <ImageBox image={this.props.image}></ImageBox>
                    <Description> {this.props.description} </Description>
                </Content>
            </Container>
        );
    }
}