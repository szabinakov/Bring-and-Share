import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Dislikes.css";

const Dislikes = ({ eventId }) => {
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(
          `https://final-mcrcodes-project.herokuapp.com/events/${eventId}/participants`
        )
        .then((response) => setParticipants(response.data))
        .catch((err) => console.log(err));
    }

    fetchData();
  }, [eventId]);

  return (
    <div className="dislikesList">
      {participants.map((person) => (
        <p className="eachItemDislikes">{person.dislikes}</p>
      ))}
    </div>
  );
};

export default Dislikes;
