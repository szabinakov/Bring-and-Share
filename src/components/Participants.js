import React, { useState, useEffect } from "react";
import axios from "axios";
import ParticipantCard from "../components/ParticipantCard";
import "../styles/Participants.css";

const Participants = ({ eventId, fetchParticipants, setFetchParticipants }) => {
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
  }, [eventId, fetchParticipants]);

  const removeParticipant = (id) => {
    axios
      .delete(
        `https://final-mcrcodes-project.herokuapp.com/events/${eventId}/participants/${id}`
      )
      .then(() => {
        setFetchParticipants(!fetchParticipants);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div data-testid="participants" className="participants">
      {participants.map((person, index) => (
        <ParticipantCard
          key={index}
          name={person.name}
          email={person.email}
          toBring={person.toBring}
          dislikes={person.dislikes}
          dietInfo={person.dietInfo}
          id={person.id}
          removeParticipant={() => removeParticipant(person.id)}
        />
      ))}
    </div>
  );
};

export default Participants;
