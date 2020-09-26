import React, { useEffect, useState } from 'react'
import ToBring from './ToBring'
import Dislikes from './Dislikes'
import AddParticipant from './AddParticipant'

const NavBar = () => {
    const [toBringListButton, setToBringListButton] = useState(false)
    const [dislikesButton, setDislikesButton] = useState(false)
    const [addParticipantsButton, setAddPArticipantsButton] = useState(false)

    const showlistofbrings = () => {
        setToBringListButton(true)
    }
    const showlistofdislikes = () => {
        setDislikesButton(true)
    }
    const showaddparticipants = () => {
        setAddPArticipantsButton(true)
    }

    return (
        <div className="navbarContainer">
            <div>
                <button onClick={() => showlistofbrings()}>People Bringing</button>
                    {toBringListButton === true && <ToBring/>}
            </div>
            <div>
                <button onClick={() => showlistofdislikes()}>Dislikes</button>
                    {dislikesButton === true && <Dislikes/>}
            </div>
            <div>
                <button onClick={() => showaddparticipants}>Add Attendee</button>
            </div>
        </div>
    )
}

export default NavBar