import React, { useState, useEffect } from "react";
import axios from "axios";

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

  console.log(participants);

  return (
    <div>
      {participants.map((person) => (
        <p>{person.dietInfo}</p>
      ))}
    </div>
  );
};

export default DietInfo;
