import React, { Component } from 'react'
import { Link } from '@reach/router'
import '../Style/NavBar.css'
export default class NavBar extends Component {
    render() {
        return (
            <div id = "navbar" style= {{backgroundColor: this.props.backgroundColor}}>
                <Link className="nav-link" onClick= {this.props.locationHandler} to="/">Home</Link>
                <Link className="nav-link" onClick= {this.props.locationHandler} to="/about">About</Link>
                <Link className="nav-link" onClick= {this.props.locationHandler} to="/projects">Projects</Link>
                <Link className="nav-link" onClick= {this.props.locationHandler} to="/hobbies">Hobbies</Link>
                <Link className="nav-link" onClick= {this.props.locationHandler} to="/work">Work</Link>
                <Link className="nav-link" onClick= {this.props.locationHandler} to="/contact">Contact</Link>
            </div>
        )
    }
}

