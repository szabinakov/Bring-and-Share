import React, { useState } from 'react'
import ToBring from './ToBringList'
import Dislikes from './Dislikes'
import DietInfo from './DietInfo'
import '../styles/NavBar.css'


const NavBar = ({eventId}) => {
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
                    {toBringListButton === true && <ToBring eventId={eventId}/>}
            </div>
            <div>
                <button className="dislikeButton" onClick={() => showListOfDislikes()}>Dislikes</button>
                    {dislikesButton === true && <p><Dislikes eventId={eventId}/></p>}
            </div>
            <div>
                <button className="dietInfoButton" onClick={() => showListOfDietInfo}>Diet Information</button>
                    {dietInfo === true && <p><DietInfo eventId={eventId}/></p>}
            </div>
        </div>
    )
}

export default NavBar
