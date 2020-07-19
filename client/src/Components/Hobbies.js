import React from 'react'
import '../Style/Hobbies.css'
import HobbiesSlideshow from './HobbiesSlideshow'

export default function Hobbies(props) {
    return (
        <div id="hobby-body">
            <div id="words">
                <br></br>What I Like...</div>
            <br></br>
            <div id="p2">
                <p>I've been passionate about being outside doing something for as long as I can remember. The beach, the park, or even just walking around town, I love to be outside. If I'm not hiking up a mountain in the summer or fall, chances are I'm snowboarding down it in the winter or spring. And whatever the time of year, you can bet I'm taking a picture (or a bunch of them) of whatever is going on around me. Check out the slideshow below for scenes from past adventures!</p>

            </div>
            <HobbiesSlideshow />
        </div>


    )
}