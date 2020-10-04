import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/ToBringList.css";

const ToBring = ({ eventId }) => {
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
    <div className="toBringList">
      {participants.map((person) => (
        <p className="eachItemToBring">{person.toBring}</p>
      ))}
    </div>
  );
};

export default ToBring;
