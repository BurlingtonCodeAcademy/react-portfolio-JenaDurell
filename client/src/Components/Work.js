import React from 'react'
import '../Style/Work.css'
import WorkBackground from '../Images/bright.JPEG'
var sectionStyle = {
    backgroundImage: `url(${WorkBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'y',
    width: '100%',
    height: '100%',
    minHeight:"95vh"
};
export default function Work(props) {
    return (
        <div style={sectionStyle} id="work-body">
            <div id="work">
                <br></br>
           It's not where you've been, it's where you're going...
           <br></br>
            </div>
            <div id="experience">
                <p>Currently (and most importantly), I am working full time to complete a 12 week, 600 hour intensive web development bootcamp with instruction on HTML, CSS, Javascript, React, and databases supplemented by challenging weekly projects and culminating with a capstone project.
                    </p>
                <br></br>
                <br></br>
                <div id="code-skills-chart">
                    <p>
                        Languages&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  React | JavaScript | HTML | CSS <br></br>
                        Frameworks &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            jQuery <br></br>
                        Development&nbsp;&nbsp;&nbsp;&nbsp; Visual Studio <br></br>
                        Photo Editing &nbsp;&nbsp;&nbsp;&nbsp;Adobe Lightroom | Photoshop <br></br>
                        Source Control&nbsp;&nbsp;  Git | Github
                    </p>
                    <br></br>


                </div>

                <div id="other-work">
                    <p>
                        Prior to jumping into the wide world of coding, I worked for over 13 years in the largest health care system in the area, providing both in and out-patient healthcare for patients from VT, NH, and Northern New York.
                    <br></br>
                        <br></br>
                    My time in the health care industry taught me a lot about working with a collaborative team of various personalities to deliver best outcomes for each patient, every time. It cemented my drive to deliver my best at all times. It solidified my focus and attention to detail, and helped me build friendships that will last a lifetime.
                    <br></br>
                        <br></br>
                    With an early and solid background in the service industry, I built the abilities to prioritize during stressful situations, put out fires before they start (and after they had started too, if necessary) and meet crushing and unrealistic deadlines and demands no matter what.

                    </p>
                </div>
                <div id="finally">
                    <p>For a detailed description of my work history, please see my <a href='https://www.linkedin.com/in/jena-durell-b5044b89/' target="_blank">linkedIn profile. </a>
                        <a href='https://www.linkedin.com/in/jena-durell-b5044b89/' target="_blank"></a>
                    </p>

                </div>


                <br></br>
                <br></br>

            </div>
        </div>

    )
}
