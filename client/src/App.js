import React, { Component }from 'react';
import './App.css';
import { Router } from '@reach/router'
import { Link } from '@reach/router'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import About from './Components/About'
import Projects from './Components/Projects'
import Hobbies from './Components/Hobbies'
import Work from './Components/Work'
import Contact from './Components/Contact'



export default class App extends Component {
  constructor(props) {
    super(props) 

    this.state = {

      location: ""

    }

  }
//find out how to finish this so that if someone types exact loction in url it displays correct color
// componentDidMount() {
//   if(this.state.location === "") {
//     this.setState({
//       location : "Home"
//     })
//   }
// }

locationHandler = (evt) => {
  this.setState({

    location: evt.target.textContent

  })
}


  render() {
    let backgroundColor;
    let urlPath = window.location.pathname.split('/')[1].toLowerCase()

    if(urlPath === 'home'|| urlPath === '') {
      backgroundColor='gray'
    }

    else if(urlPath === 'about') {
      backgroundColor='lawngreen'
    }

    else if(urlPath === 'projects') {
      backgroundColor= "rgb(149, 211, 226)"
    }

    else if(urlPath === 'hobbies') {
      backgroundColor= "skyblue"
    }

    else if(urlPath === 'work') {
      backgroundColor= "gray"
    }
    else if(urlPath === 'contact') {
      backgroundColor= "coral"
    }
    else {
      backgroundColor = "gray"
    }


    return (
      <div className="App">
        <NavBar 
        
        backgroundColor= {backgroundColor}
        locationHandler= {this.locationHandler}

        />

        <Router>

          <Home path="/" />
          <About path="/about" />
          <Projects path="/projects" />
          <Hobbies path="/hobbies" />
          <Work path="/work" />
          <Contact path="/contact" />


        </Router>


      </div >
    )

  }
}



