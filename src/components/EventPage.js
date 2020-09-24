// list of things to import
import React, { useState, useEffect } from "react";
import AddParticipant from "./AddParticipant";
import "../styles/EventPage.css";
import axios from "axios";
import Participants from "./Participants";

const EventPage = ({ eventId }) => {
  const [eventName, setEventName] = useState("");
  const [hostName, setHostName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventAddress, setEventAddress] = useState("");

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(`https://final-mcrcodes-project.herokuapp.com/events/${eventId}`)
        .then((response) => {
          setEventName(response.data.eventName);
          setHostName(response.data.hostName);
          setEventDate(response.data.date);
          setEventTime(response.data.time);
          setEventAddress(response.data.address);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    fetchData();
  });

  return (
    <div className="eventPage" data-testid='eventdetails'>
      <h2 className="eventPageTitle">Here is your amazing page</h2>
      <h3 className="eventPageDescription">Have fun at your event!</h3>
      <div className="eventDetails">
        <h3>Event details</h3>
        <p>Event ID: {eventId}</p>
        <p>Event Name: {eventName}</p>
        <p>Host Name: {hostName}</p>
        <p>Event Date: {eventDate}</p>
        <p>Event Time: {eventTime}</p>
        <p>Event Address: {eventAddress}</p>
      </div>
      <AddParticipant eventId={eventId} />
      <Participants eventId={eventId} />
    </div>
  );
};

export default EventPage;
