// list of things to import
import React, { useState, useEffect } from "react";
import AddParticipant from "./AddParticipant";
import "../styles/EventPage.css";
import axios from "axios";

const EventPage = ({ eventId }) => {
  const [eventName, setEventName] = useState("");
  const [hostName, setHostName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventAddress, setEventAddress] = useState("");
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(`https://final-mcrcodes-project.herokuapp.com/events/${eventId}`)
        .then((response) => {
          console.log(response.data);
          setEventName(response.data.eventName);
          setHostName(response.data.hostName);
          setEventDate(response.data.eventDate);
          setEventTime(response.data.eventTime);
          setEventAddress(response.data.address);
          setParticipants(response.data.participants);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    fetchData();
  }, []);

  return (
    <div>
      <h2>Here is your amazing page</h2>
      <p>Have fun at your event!</p>
      <div className="eventDetails">
        <h3>Event details</h3>
        <p>Event ID: {eventId}</p>
        <p>Event Name: {eventName}</p>
        <p>Host Name: {hostName}</p>
        <p>Event Date: {eventDate}</p>
        <p>Event Time: {eventTime}</p>
        <p>Event Address: {eventAddress}</p>
      </div>
      <AddParticipant />
    </div>
  );
};

export default EventPage;
