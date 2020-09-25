import React from "react";
import '../styles/ParticipantCard.css'

const ParticipantCard = ({id, name, email, toBring, dislikes, dietInfo, removeParticipant}) => {
    return(
        <>
            <div className="eachParticipant">
                <div data-testid="name" className="participantName">
                    {name}
                </div>
                <div data-testid="email" className="participantEmail">
                    <a href={`mailto:${email}`}>{email}</a>
                </div>
                <div data-testid="toBring" className="participantBrings">
                    Brings: {toBring}
                </div>
                <div data-testid="dislikes" className="participantDislikes">
                    Does not like: {dislikes}
                </div >
                <div data-testid="dietInfo" className="participantDietInfo">
                    Any other Diet information: {dietInfo}
                </div>
                <button data-testid="removeButton" className="participantDelete" onClick={()=>removeParticipant(id)}>Delete</button>
            </div>

        </>
    )
}

export default ParticipantCard