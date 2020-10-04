import React from "react";
import "../styles/ParticipantCard.css";

const ParticipantCard = ({
  id,
  name,
  email,
  toBring,
  dislikes,
  dietInfo,
  removeParticipant,
}) => {
  return (
    <>
      <div className="eachParticipant">
        <div data-testid="name" className="participantName">
          {name}
        </div>
        <div data-testid="email" className="participantEmailInfo">
          Email: <a href={`mailto:${email}`}>{email}</a>
        </div>
        <div data-testid="toBring" className="participantBrings">
          Brings: {toBring}
        </div>
        <div data-testid="dislikes" className="participantDislikes">
          Dislikes: {dislikes}
        </div>
        <div data-testid="dietInfo" className="participantDietInfo">
          Diet info: {dietInfo}
        </div>
        <div className="participantDelete">
          <button
            data-testid="removeButton"
            className="participantDeleteButton"
            onClick={() => removeParticipant(id)}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default ParticipantCard;
