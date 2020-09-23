import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ParticipantCard from '../components/ParticipantCard'
import '../styles/Participants.css'

const Participants = ({eventId}) => {
    const [participants, setParticipants] = useState([])

    useEffect(() => {
        axios.get(`https://final-mcrcodes-project.herokuapp.com/events/${eventId}/participants`)
        .then((response) => setParticipants(response.data))
        .catch((err) => console.log(err))
    })
    
    const removeParticipant = (id) => {
        axios.delete(`https://final-mcrcodes-project.herokuapp.com/events/${eventId}/participants/${id}`)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    }
    return(
        <div className='participants'>  
        {participants.map((person, index) => 
            <ParticipantCard
                key={index}
                name={person.name}
                toBring={person.toBring}
                dislikes={person.dislikes}
                dietInfo={person.dietInfo}
                id={person.id}
                removeParticipant={removeParticipant}
            />
        )}
        </div>
    )
        
}

export default Participants