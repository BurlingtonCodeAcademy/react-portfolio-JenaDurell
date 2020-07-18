import React, { useState } from 'react'
import '../Style/About.css'
import me from '../Images/me.JPG'
import bluebird from '../Images/bluebird.JPG'
import bnwLakeReflect from '../Images/bnwLakeReflect.JPG'
import blurGrass from '../Images/blurGrass.JPG'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import IconButton from "@material-ui/core/IconButton";

// export default function About(props) {
//     return (

//         <div id='about-head'>
//             It's about time
//             <img className="me-about" src={me} />
//         </div>




//     )


// }

const imgArray = [
    bluebird, bnwLakeReflect, blurGrass, me
]

function About () {

    const [currentImage, updateImage] = useState(imgArray[0]);
    const [index, setIndex] = useState(0);

    const handleImageClick = (evt) => {
        updateImage(evt.target.id);
    };

    const handleNav = (direction) => {
        let newIndex;
        if (direction === "right") {
            index === imgArray.length - 1 ? newIndex = 0 : newIndex = index + 1
        } else {
            index === 0 ? newIndex = imgArray.length - 1 : newIndex = index - 1
        }
        setIndex(newIndex)
    }



    return (
        <div className="Photos">
            
                {/* <img className="lg-img" src={currentImage} alt="pic" />

           
            <div id="thumbnails">
                {
                    imgArray.map((img) => (

                        <img className="thumbnail"
                            src={img}
                            alt="thumbnail"
                            id={img}
                            key={img}
                            onClick={handleImageClick} />


                    ))
                }

            </div>
            <br></br>
            <br></br>
            <br></br> */}
            <br></br>

            <div id="rotating-carousel" >

                <IconButton
                    onClick={() => {
                        handleNav("left")
                    }} >

                    <ArrowBackIosIcon fontsize="large" />
                </IconButton>
                <img
                    className="thumbnail"
                    src={
                        index === imgArray.length - 1 ? imgArray[0] : imgArray[index + 1]
                    }
                    alt="thumbnail"
                />
                <img className="lg-img" src={imgArray[index]} alt="pix" />

                <img className="thumbnail"
                    src={
                        index === 0 ? imgArray[imgArray.length - 1] : imgArray[index - 1]}
                    alt="thumbnail"
                />

                <IconButton onClick={() => { handleNav("right") }}>
                    <ArrowForwardIosIcon fontsize="large" />
                </IconButton>


            </div>
        </div>
    )

}

export default About
