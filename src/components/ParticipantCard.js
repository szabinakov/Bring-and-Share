import React from "react";
import "../styles/ParticipantCard.css";

const ParticipantCard = ({
  id,
  name,
  toBring,
  dislikes,
  dietInfo,
  removeParticipant,
}) => {
  return (
    <>
      <div className="eachParticipant">
        <div className="participantName">{name}</div>
        <div className="participantBrings">Brings: {toBring}</div>
        <div className="participantDislikes">Does not like: {dislikes}</div>
        <div className="participantDietInfo">
          Any other Diet information: {dietInfo}
        </div>
        <button
          className="participantDelete"
          onClick={() => removeParticipant(id)}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default ParticipantCard;
