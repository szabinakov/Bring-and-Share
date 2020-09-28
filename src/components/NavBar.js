import React, { useState } from 'react'
import ToBring from './ToBring'
import Dislikes from './Dislikes'
import DietInfo from './DietInfo'
import '../styles/NavBar.css'


const NavBar = () => {
    const [toBringListButton, setToBringListButton] = useState(false)
    const [dislikesButton, setDislikesButton] = useState(false)
    const [dietInfo, setDietInfo] = useState(false)
    const showListOfBrings = () => {
        setToBringListButton(true)
    }
    const showListOfDislikes = () => {
        setDislikesButton(true)
    }
    const showListOfDietInfo = () => {
        setDietInfo(true)
    }
    return (
        <div className="navbarContainer">
            <div>
                <button className="toBringButton" onClick={() => showListOfBrings()}>People Bringing</button>
                    {toBringListButton === true && <ToBring/>}
            </div>
            <div>
                <button className="dislikeButton" onClick={() => showListOfDislikes()}>Dislikes</button>
                    {dislikesButton === true && <p><Dislikes/></p>}
            </div>
            <div>
                <button className="dietInfoButton" onClick={() => showListOfDietInfo}>Diet Information</button>
                    {dietInfo === true && <p><DietInfo/></p>}
            </div>
        </div>
    )
}

export default NavBar
