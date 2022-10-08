
import React, { Component } from 'react'
import Typical from 'react-typical'



const text = [
    'Hello', 1000,
    'Welcome to WeSearch', 1000,
    'An app by Jasmin 🔥, Jeremey 🎵, and Danny 👁️ ', 1000,
    'WeSearch is a Atlanta Based search engine that puts the power back in the hands of the user', 1700,
    'WeSearch is an app for people looking to "research" the best community driven places in their area.', 1900,
    'WeSearch takes the reviews of different establishments in the city, compiles them, and displays them for easy accessibility', 2000,
    'WeSearch also allows the user to post their own custom reviews', 1000,
    'So what are you waiting for', 800,
    'Jump right in', 800,
    'Today', 1500,
    
  ];
  export default class About extends Component {
    render () {
      return (

        <div className="About Me">
            <header className="About-header"/>
            <h1>About Us</h1>
            <p><Typical 
            wrapper="span" 
            steps={text} 
            loop={Infinity} 
            className={'caca'} /></p>
          <img src="https://danielarisa.com/wp-content/uploads/2022/10/logo-color.svg" width="1000" position="bottom" height="300" alt="logo" />
        </div>
      )
    }
  }
  
