import React from 'react';
import Styled from 'styled-components';

const Container = Styled.div`
    width: 100%;
    height: fit-contact;

    background-color: #333333;
    color: white;
    font-size: 0.75em;

    text-align: center;
`;


export default class Footer extends React.Component{
    render(){
        return(
            <Container>
                Website Built Using ReactJS and Hosted with Github Pages. Errors or Bugs? Please Contact me at JeffreyZhang2002@gmail.com
            </Container>
        )
    }
}