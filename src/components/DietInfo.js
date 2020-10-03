import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/DietInfo.css";

const DietInfo = ({ eventId }) => {
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
    <div className="dietInfoList">
      {participants.map((person) => (
        <p>{person.dietInfo}</p>
      ))}
    </div>
  );
};

export default DietInfo;
