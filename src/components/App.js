import React from 'react';
import Styled from 'styled-components';
import Header from './Header';
import Navigation from './Navigation';
import About from './About';
import Skills from './Skills';
import Project from './Project';
import Contact from './Contact';
import Education from './Education';
import Experience from './Experience';
import Footer from './Footer';

export default class App extends React.Component{

  render()
  {
    return(
      <>
        <Header/>
        <Navigation/>
        <About/>
        <Education/>
        <Experience/>
        <Skills/>
        <Project/>
        <Contact/>
        <Footer/>
      </>
    );
  }
}
