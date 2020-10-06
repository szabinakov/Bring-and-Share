import React, { useState, useEffect } from "react";
import "../styles/HostDetails.css";
import axios from "axios";

const HostDetails = ({ eventId }) => {
  const [participants, setParticipants] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://final-mcrcodes-project.herokuapp.com/events/${eventId}/participants`
      )
      .then((response) => setParticipants(response.data))
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
  for (i = 0; i < participants.length; i++) {
    if (participants[i].email === hostEmail) {
      return (
        <div className="hostDetails" data-testid="hostdetails">
          <h3 className="hostDetails-Title">Host details</h3>
          <p className="hostDetails-Details">
            <b className="sectionHd">Host Name:</b> {participants[i].name}
          </p>
          <p className="hostDetails-Details">
            <b className="sectionHd">Host email:</b> {participants[i].email}
          </p>
        </div>
      );
    }
  }

  return null;
};

export default HostDetails;
