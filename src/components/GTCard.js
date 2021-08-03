import React from 'react';
import Styled from 'styled-components';

import Image from './assets/georgiatech.png';

const Container = Styled.div`
    width: 100%;
    height: fit-content;
    padding: 1em;
    box-sizing: border-box;
    color: black;

   
`;

const ContentContainer = Styled.div`
    width: 100%;

   
    box-sizing: border-box;
 
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(400px,95%), 1fr));
    grid-gap: 0.5em 2em;
    align-content: center;

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



const Content = Styled.div`
    width: 100%;

    abbr{
        border: none;
        text-decoration: none;
    }
`;



export default class GTCard extends React.Component{
    render()
    {
        return(
            <Container>
                <Title> Georgia Insitute of Technology </Title>
                <ContentContainer>
                    <ImageBox></ImageBox>
                    <Content>
                        I currently an undergradute student majoring in computer Science and minoring in robotics. I have already finish 33 credit hours
                        and have since taken classes in 
                        <abbr title="CS1331"> Object Oriented Programming</abbr>,
                        <abbr title="CS1301"> Java</abbr>,
                        <abbr title="Math1552/1553"> Calculus</abbr>, etc. 
                        Currently I working towards finishing my 
                        <abbr title="CS1332"> data structures and algorithm class</abbr>. I plan on pursing the intelligence
                        and devices threads at Georgia Tech. 
                        <br/>
                        <br/>
                        GPA: N/A
                        <br/>
                        <br/>
                        Expected Graduation Data: May 2024  
                    </Content>
                </ContentContainer>
            </Container>
        )
    }
}