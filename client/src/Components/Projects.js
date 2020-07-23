import React from 'react'
import '../Style/Projects.css'

export default function Projects(props) {

    return (
        <div id="project-head" >
            <br></br>
            <h1>Check out what I've made so far...</h1>

            <div id="how-to">
                <p>Here are a few of my favorite development creations to date...<br></br>click on any title to see the git repository.</p>
            </div>
            
            <div id="project-body">
                {/* all links open to git repositories in separate window */}
                <a className="git-link" href="https://github.com/BurlingtonCodeAcademy/yelpington-JenaDurell" target="_blank">Yelpington </a> <a className="git-link" href = "https://jena-durell-yelpington.herokuapp.com/" target = "_blank">gClick here to try Yelpington yourself!</a>
                <div className="project-info">
                    <p>Yelpington is an app loosely based on Yelp, where the user is able to look at a map, click on a restaurant location, and go to both the Yelpington page for that restaurant as well as the website published by the restaurant. Yelpington is written using Javascript, HTML, CSS, leaflet maps and JQuery. </p>
                </div>



                <br></br>
                <a className="git-link" href="https://github.com/BurlingtonCodeAcademy/tic-tac-toe-jena-jayson" target="_blank">Tic Tac Toe</a>
                <div className="project-info">
                    <p>Tic Tac Toe was a collaborative project written using Javascript, HTML, CSS and a bit of JQuery. It uses a variety of methods and logic to allow for a Player vs. Player <b>or</b> a Player vs. Computer game. This project taught me the benefit of completely starting a project over when things are just too broken to be fixed. The second incarnation of the project was much smoother and more organized than the first. Tic Tac Toe is co-authored by my classmate, Jayson Durante.  </p>
                </div>

                <br></br>
                <a className="git-link" href="https://github.com/BurlingtonCodeAcademy/guess-the-number-JenaDurell" target="_blank">Guess the Number</a>
                <div className="project-info">
                    <p>Guess the Number is a game in which a player has the option to guess the number themselves, or to have the computer pick a number that the player has to guess. Written entirely in Javascript, I used async functions to allow for player's input, and module exports allowed for files to be divided and shared within the game, which helped with refactoring and organization of the game. </p>
                </div>


                <br></br>


                <a className="git-link" href="https://github.com/BurlingtonCodeAcademy/remock-JenaDurell" target="_blank">ReMock, the Blog Site Mock-Up</a>
                <div className="project-info">
                    <p>Remock was assigned early in the Burlington Code Academy web development bootcamp. Using HTML and CSS, I designed a framework for a blog website with a variety of linked pages and layouts, as well as a footer. </p>
                </div>
            </div>
            









        </div>
    )
}