import React from 'react'
import '../Style/Hobbies.css'
import HobbiesSlideshow from './HobbiesSlideshow'

export default function Hobbies(props) {
    return (
        <div id="hobby-body">
            <div id="words">
            What I Like...</div>
            <br></br>
            <div id="about-my-hobbies">
                <p>I've been passionate about being outside doing something for as long as I can remember. If I'm not hiking up a mountain in the summer or fall, chances are I'm snowboarding down it in the winter or spring. And whatever the time of year, you can bet I'm taking a picture (or a bunch of them) of whatever's going on around me. These days I'm spending <b>a LOT</b> of time learning everything I can about coding, but I'm still making sure to balance that out with some quality time in the great outdoors. Check out the slideshow below for scenes from my adventures!</p>

            </div>
            <HobbiesSlideshow />
        </div>


    )
}