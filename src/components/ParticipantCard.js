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
          <b className="sectionPC">Email:</b>{" "}
          <a href={`mailto:${email}`}>{email}</a>
        </div>
        <div data-testid="toBring" className="participantBrings">
          <b className="sectionPC">Brings:</b> {toBring}
        </div>
        <div data-testid="dislikes" className="participantDislikes">
          <b className="sectionPC">Dislikes:</b> {dislikes}
        </div>
        <div data-testid="dietInfo" className="participantDietInfo">
          <b className="sectionPC">Diet info:</b> {dietInfo}
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
