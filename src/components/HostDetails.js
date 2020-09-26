import React, { useState, useEffect } from "react";
import "../styles/HostDetails.css";
import axios from "axios";

const HostDetails = ({ eventId }) => {
  const [participantsEmail, setParticipantsEmail] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://final-mcrcodes-project.herokuapp.com/events/${eventId}/participants`
      )
      .then((response) => setParticipantsEmail(response.data.email))
      .catch((err) => console.log(err));
  }, [eventId]);

  const [hostEmail, setHostEmail] = useState("");
  useEffect(() => {
    axios
      .get(`https://final-mcrcodes-project.herokuapp.com/events/${eventId}`)
      .then((response) => setHostEmail(response.data.hostEmail))
      .catch((err) => console.log(err));
  }, [eventId]);

  let i;
  for (i = 0; i > participantsEmail.length; i++) {
    if (participantsEmail[i] === hostEmail) {
      return (
        <div className="hostDetails" data-testid="hostdetails">
          <h3>Host details</h3>
          <p>Host email: {participantsEmail}</p>
        </div>
      );
    }
  }
};

export default HostDetails;
