import React, { useState } from 'react'
import '../Style/Slideshow.css'
import newYear from '../Images/newYear.JPG'
import sundance from '../Images/sundance.JPG'
import quadView from '../Images/quadView.JPEG'
import niquetteBay from '../Images/niquetteBay.JPEG'
import beach from '../Images/beach.JPG'
import family from '../Images/family.JPG'
import meSnowboarding from '../Images/meSnowboarding.JPG'
import sundanceLift from '../Images/sundanceLift.JPG'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import IconButton from "@material-ui/core/IconButton";
import jenaVessell from '../Images/jenaVessell.jpg'
import meFull from '../Images/meFull.JPG'


const imgArray = [
    jenaVessell, meFull, family, meSnowboarding, sundanceLift, newYear, sundance, quadView, beach, niquetteBay, 
]

// makes carousel of images
function Slideshow() {

    const [currentImage] = useState(imgArray[0]);
    const [index, setIndex] = useState(0);


    //allows arrows to move images right or left
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
            <div id="rotating-carousel" >

                <IconButton
                    onClick={() => {
                        handleNav("left")
                    }} >

                    <ArrowBackIosIcon fontSize="large" />
                </IconButton>


                {/* image to the left of center */}
                <img
                    className="thumbnail"
                    src={
                        index === imgArray.length - 1 ? imgArray[0] : imgArray[index + 1]
                    }
                    alt="thumbnail"
                />

                {/* large center image */}
                <img className="lg-img" src={imgArray[index]} alt="pix" />


                {/* image to the right of center */}
                <img className="thumbnail"
                    src={
                        index === 0 ? imgArray[imgArray.length - 1] : imgArray[index - 1]}
                    alt="thumbnail"
                />

                <IconButton
                    onClick={() => {
                        handleNav("right")
                    }}>
                    <ArrowForwardIosIcon fontSize="large" />
                </IconButton>


            </div>
        </div>
    )

}

export default Slideshow
