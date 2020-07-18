import React, { useState } from 'react'
import '../Style/Slideshow.css'
import me from '../Images/me.JPG'
import bluebird from '../Images/bluebird.JPG'
import bnwLakeReflect from '../Images/bnwLakeReflect.JPG'
import blurGrass from '../Images/blurGrass.JPG'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import IconButton from "@material-ui/core/IconButton";


const imgArray = [
    bluebird, bnwLakeReflect, blurGrass, me
]

function Slideshow () {

    const [currentImage, updateImage] = useState(imgArray[0]);
    const [index, setIndex] = useState(0);

    

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

export default Slideshow
