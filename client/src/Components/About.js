import React from 'react'
import Slideshow from './Slideshow'
import '../Style/About.css'

export default function About(props) {
    return (


        <div id="about-text" >

            {/* import slideshow component below */}
            <br></br>
            <div id="p3">
                <p>Hello, my name is Jena</p>
            </div>
            <br></br>
            <p>Life is good, and being outside makes it even better! The beach, the park, or even just walking around town, I love to be outside. Until a couple of months ago, I didn't think anything could grab my attention long enough to actually <b>want </b>to be inside, even on a sunny summer day. And then I discovered coding... and another exciting way to engage my mind and get creative.

            <br></br>
            <br></br>
            In order to learn as much as I can about coding, I recently left a 13+ year career at the University of Vermont Medical Center to attend Burlington Code Academy and transition to a career in the ever expanding world of technology. One of the things I love about web development is how creative it allows you to be, yet some aspects are very much defined- if I type something specific into the code, it's definitely going to make something happen (or it's definitely <b>NOT</b> going to make something happen). Another thing I like about coding are the infinite directions a coding career path can take.
            <br></br>
                <br></br>
            I live in Burlington, VT with my husband and our dog. If you see us on the street or at the dog park, come say hello (from 6 feet away because #safetyfirst)!
            
    
            </p>
            <Slideshow />
        </div>



    )
}
