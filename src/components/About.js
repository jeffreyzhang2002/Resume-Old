import React from 'react';
import Styled from 'styled-components';

import ResumeFile from './assets/resume.pdf';

const Container = Styled.div`
    width: 100%;
    height: fit-content;
    padding-bottom: 2em;

    background-color: #333333;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = Styled.h2`
    text-align: center;
    color: #ffffff;
    font-size: 1.5em;
    padding: 0.5em 0;
    margin: 0;
    margin: 0;
`;

const Content = Styled.div`
    
    width: 70%;
    background-color: black;
    height: fit-content;
    border: 2px solid #FF4500;
    border-radius: 20px;

    color: white;
    font-family: Consolas;
    padding-left: 1em;
    padding-top: 1em;

    a{
        text-decoration: none;
        color:violet;

        :hover{
            color: blue;
        }
    }

    span{
        color: yellow;
    }

    em{
        color: green;
        text-decoration: none;

    }
`;

export default class About extends React.Component{
    render(){
        return(
            <Container id="about">
                <Title> About </Title>
                <Content>
                    C:\Users\Guest&#62; python <br/><br/>
                    Python 3.9.5 (tags/v3.9.5:0a7dcbd, May  3 2021, 17:27:52) [MSC v.1928 64 bit (AMD64)] on win32 Type "help", "copyright", "credits" or "license" for more information.<br/><br/>
                    <span>&#62;&#62;&#62;</span> <em>from users import Jeffrey</em> <br/>
                    <span>&#62;&#62;&#62;</span> <em>JeffreyZhang = Jeffrey()</em> <br/>
                    <span>&#62;&#62;&#62;</span> <em>print(JeffreyZhang.location)</em> <br/>
                    Atlanta Georgia USA <br/> <br/>
                    <span>&#62;&#62;&#62;</span> <em>print(JeffreyZhang.education)</em> <br/>
                    Current Undergraduate @ Georgia Tech <br/> <br/>
                    <span>&#62;&#62;&#62;</span> <em>print(JeffreyZhang.resume)</em> <br/>
                    <a href={ResumeFile} target="_blank"> resume.pdf </a> <br/> <br/>
                    <span>&#62;&#62;&#62;</span> <em>print(JeffreyZhang.contacts)</em> <br/>
                    {"{'Email': "}
                    <a href="mailto:Jeffreyzhang2002@gmail.com" target="_blank">JeffreyZhang2002@gmail.com</a>", 'Github': "
                    <a href="https://github.com/jeffreyzhang2002" target="_blank"> JeffreyZhang2002 </a>", 'Linkedin': "
                    <a href="https://www.linkedin.com/in/jeffreyzhang21/" target="_blank"> JeffreyZhang21 </a>" {"}"} <br/><br/>
                    <span>&#62;&#62;&#62;</span> <em>print("Thank you for visiting my website!")</em> <br/>
                    Thank you for visiting my website! <br/> <br/>

                </Content>
            </Container>
        )
    }
}