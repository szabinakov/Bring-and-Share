import React, { useState } from "react";
import ToBring from "./ToBringList";
import Dislikes from "./Dislikes";
import DietInfo from "./DietInfo";
import "../styles/NavBar.css";

const NavBar = ({ eventId }) => {
  const [toBringListButton, setToBringListButton] = useState(false);
  const [dislikesButton, setDislikesButton] = useState(false);
  const [dietInfo, setDietInfo] = useState(false);

  // const showListOfDislikes = () => {
  //   setDislikesButton(true);
  // };

  return (
    <div className="navbarContainer">
      <div>
        <button
          className="toBringButton"
          onClick={() => {
            setToBringListButton(!toBringListButton);
          }}
        >
          People Bringing
        </button>
        {toBringListButton && <ToBring eventId={eventId} />}
      </div>
      <div>
        <button
          className="dislikeButton"
          onClick={() => {
            setDislikesButton(!dislikesButton);
          }}
        >
          Dislikes
        </button>
        {dislikesButton && <Dislikes eventId={eventId} />}
      </div>
      <div>
        <button
          className="dietInfoButton"
          onClick={() => {
            setDietInfo(!dietInfo);
          }}
        >
          Diet Info
        </button>
        {dietInfo && <DietInfo eventId={eventId} />}
      </div>
    </div>
  );
};

export default NavBar;
