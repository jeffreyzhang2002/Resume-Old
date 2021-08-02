import React from 'react';
import Styled from 'styled-components';

const Button = Styled.button`
    height: 100%;
    background-color: green;
    border: none;
    text-decorations: none;
    

    &:hover{
        background-color: red;
    }

    a{
        text-decoration: none;
        height: 100%;
        color: default;
    }
`;

const DropDownContent = Styled.div`
    display: none;
    position: absolute;
    min-width: 100%;
    z-index: 1;
    background-color: yellow;

    :hover{
        display: block;
    }

    button, a{
        width: 100%;
        display: block;
        text-align: left;
    }
`;

const Container = Styled.div`
    position: relative;
    display: inline-block;
    height: 100%;
   

    & ${Button}:hover + ${DropDownContent}
    {
        display: block;
    }
`;

export default class Dropdown extends React.Component{
    render(){
        let title = Object.keys(this.props.label)[0];
        let button = (typeof(this.props.label[title]) === 'string')? <Button theme={this.props.theme}><a href={this.props.label[title]}>{title} </a></Button> : <Button theme={this.props.theme} onClick={this.props.label[title]}>{title}</Button> ;
    
        let dropdown = [];
        for(let i = 1; i < Object.keys(this.props.label).length; i++)
            if(typeof(this.props.label[Object.keys(this.props.label)[i]]) === 'string')
                dropdown.push(<Button key={i} theme={this.props.theme}><a href={this.props.label[Object.keys(this.props.label)[i]]}>{Object.keys(this.props.label)[i]}</a></Button>);
            else
                dropdown.push(<Button key={i} theme={this.props.theme} onClick={this.props.label[Object.keys(this.props.label)[i]]}>{Object.keys(this.props.label)[i]}</Button>);

        return(
            <Container style={this.props.style}>
                {button}
                <DropDownContent style={this.props.style}> 
                    {dropdown}
                </DropDownContent>
            </Container>
        );
    }
}