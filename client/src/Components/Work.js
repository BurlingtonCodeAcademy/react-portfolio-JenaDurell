import React from 'react'
import '../Style/Work.css'
import WorkBackground from '../Images/bright.JPEG'
var sectionStyle = {
    backgroundImage: `url(${WorkBackground})`,
    // backgroundPosition: 'center',
    backgroundSize: '100vw 100vh',
    // backgroundRepeat: 'y',
    width: '100%',
    height: '95vh',
    // minHeight:"95vh"
};
export default function Work(props) {
    return (
        <div style={sectionStyle} id="work-body">
            <div id="work">
                
           It's not where you've been, it's where you're going...
           
            </div>
            <div id="experience">
                <div id= "bootcamp-wrapper">
                <div id = "bootcamp">
                    Currently (and most importantly), I am working full time to complete a 12 week, 600 hour intensive web development bootcamp with instruction on HTML, CSS, Javascript, React, and databases supplemented by challenging weekly projects and culminating with a capstone project.
                </div>
                </div>
            <div id="code-skills-chart">

                <ul id = "skills-left">
                       <li> Languages </li>
                       <li> Frameworks</li>
                       <li>Development</li>
                       <li>Photo Editing</li>
                       <li>Source Control</li>
                </ul>

                <ul id = "skills-right"> 
                    <li> React | JavaScript | HTML | CSS</li>
                    <li> jQuery </li>
                    <li> Visual Studio </li>
                    <li> Adobe Lightroom | Photoshop </li>
                    <li> Git | Github</li>
                </ul>
                   
                    


            </div>

                <div id="other-work">
                    <div className = "work-para">
                        Prior to jumping into the wide world of coding, I worked for over 13 years in the largest health care system in the area, providing both in and out-patient healthcare for patients from VT, NH, and Northern New York.
                    </div>
                    <div className ="work-para">
                    My time in the health care industry taught me a lot about working with a collaborative team of various personalities to deliver best outcomes for each patient, every time. It cemented my drive to deliver my best at all times. It solidified my focus and attention to detail, and helped me build friendships that will last a lifetime.
                    </div>
                    <div className ="work-para">
                    With an early and solid background in the service industry, I built the abilities to prioritize during stressful situations, put out fires before they start (and after they had started too, if necessary) and meet crushing and unrealistic deadlines and demands no matter what.
                    </div>
                   
                </div>
                <div id="finally">
                  <div id = "linkedin">For a detailed description of my work history, please see my <a href='https://www.linkedin.com/in/jena-durell-b5044b89/' target="_blank">linkedIn profile. </a>
                        <a href='https://www.linkedin.com/in/jena-durell-b5044b89/' target="_blank"></a>
                        </div>

                </div>


                

            </div>
       </div>

    )
}
