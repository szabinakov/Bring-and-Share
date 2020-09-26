import React, { useState } from 'react'
import ToBring from './ToBring'
import Dislikes from './Dislikes'
import DietInfo from './DietInfo'

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
                <button onClick={() => showListOfBrings()}>People Bringing</button>
                    {toBringListButton === true && <ToBring/>}
            </div>
            <div>
                <button onClick={() => showListOfDislikes()}>Dislikes</button>
                    {dislikesButton === true && <Dislikes/>}
            </div>
            <div>
                <button onClick={() => showListOfDietInfo}>Diet Information</button>
                    {dietInfo === true && <DietInfo/>}
            </div>
        </div>
    )
}

export default NavBar
