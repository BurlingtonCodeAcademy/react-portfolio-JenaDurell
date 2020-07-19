import React, { useState } from 'react'
import '../Style/HobbiesSlideshow.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import IconButton from "@material-ui/core/IconButton";
import boardwalk from '../Images/boardwalk.JPEG'
import bluebird from '../Images/bluebird.JPG'
import foliageWatery from '../Images/foliageWatery.JPG'
import MIT from '../Images/MIT.JPG'
import snowyTreeLookup from '../Images/snowyTreeLookup.JPG'
import NotreDame from '../Images/NotreDame.JPG'
import phillyReflect from '../Images/phillyReflect.JPG'
import vesselCenter from '../Images/vesselCenter.JPG'
import ogunquit from '../Images/ogunquit.PNG'
import dunes from '../Images/dunes.JPG'
import sharpGrass from '../Images/sharpGrass.JPG'
import boats from '../Images/boats.JPEG'
import sunsetBirds from '../Images/sunsetBirds.JPG'
import fall from '../Images/fall.JPEG'
import stowe from '../Images/stowe.JPG'



const imgArray2 = [
boardwalk, sunsetBirds, fall, vesselCenter, bluebird, foliageWatery, ogunquit, dunes, MIT, snowyTreeLookup, boats, phillyReflect, sharpGrass, NotreDame, stowe
]

// makes carousel for rotating images
function HobbiesSlideshow() {

    const [currentImage2] = useState(imgArray2[0]);
    const [index2, setIndex2] = useState(0);

    const handleNav2 = (direction) => {
        let newIndex2;
        if(direction === "right") {
            index2 === imgArray2.length - 1 ? newIndex2 = 0 : newIndex2 = index2 + 1
        }else{
            index2 === 0 ? newIndex2 = imgArray2.length -1 : newIndex2 = index2 -1
        }

        setIndex2(newIndex2)
    }

    return (
        <div className = "Photos2">
            <br></br>

            <div id = "hobbies-carousel">
{/* clicking on arrow to the left of the image set makes images rotate to the left */}
                <IconButton
                onClick = {() => {
                    handleNav2("left")
                }}>
                    <ArrowBackIosIcon fontSize = "large" />
                </IconButton>

{/* clicking on thumbnail makes it appear in large image window */}
            <img onClick = {() => {
                    handleNav2("right")
                }}
            className = "thumbnail2"
            src = {
                index2 === imgArray2.length - 1 ? imgArray2[0] : imgArray2[index2 + 1]
            }   
            alt = "thumbnail2"
            />

            {/* large center image */}
            <img className = "lg-img2" src= {imgArray2[index2]} alt = "pix2" />

{/* clicking on thumbnail makes it appear in large image window */}
            <img onClick = {() => {
                    handleNav2("left")
                }}
            className = "thumbnail2"
            src = {
                index2 === 0 ? imgArray2[imgArray2.length - 1] : imgArray2[index2 -1]
            }
            alt = "thumbnail2"
            />

{/* clicking on arrow to the right of the image set makes images rotate to the right */}
            <IconButton onClick = {() => { handleNav2("right")}}>
                <ArrowForwardIosIcon fontSize = "large" />
            </IconButton>

            </div>
        </div>
    )
}

export default HobbiesSlideshow