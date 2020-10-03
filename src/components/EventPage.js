// list of things to import
import React, { useState, useEffect } from "react";

import AddParticipant from "./AddParticipant";
import "../styles/EventPage.css";
import axios from "axios";
import Participants from "./Participants";
import HostDetails from "./HostDetails";
import NavBar from "./NavBar";

const EventPage = (props) => {
  
  const eventId = props.match.params.eventId;

  const [eventName, setEventName] = useState("");
  const [hostName, setHostName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventAddress, setEventAddress] = useState("");
  const [hostEmail, setHostEmail] = useState("");
  const [fetchParticipants, setFetchParticipants] = useState(true);
  const [participants, setParticipants] = useState([]);
  const eventLink = `https://bring-and-share-silk.vercel.app/events/${eventId}`;
  useEffect(() => {
    async function fetchData() {
      await axios
        .get(`https://final-mcrcodes-project.herokuapp.com/events/${eventId}`)
        .then((response) => {
          setEventName(response.data.eventName);
          setHostName(response.data.hostName);
          setHostEmail(response.data.hostEmail);
          setEventDate(response.data.date);
          setEventTime(response.data.time);
          setEventAddress(response.data.address);
       
        })
        .catch((error) => {
          console.log(error);
        });
      
    }
  
    fetchData();
  }, [eventId]);

  return (
    <>
      <div data-testid="eventdetails">
        <h2>Here is your amazing page</h2>
        <p>Have fun at your event!</p>
        <p>Share event link with your attendees:{eventLink}</p>

        <div className="eventDetails">
          <h3>Event details</h3>
          <p>Event ID: {eventId}</p>
          <p>Event Name: {eventName}</p>
          <p>Host Name: {hostName}</p>
          <p>Event Date: {eventDate}</p>
          <p>Event Time: {eventTime}</p>
          <p>Event Address: {eventAddress}</p>
          <p>Host Email: {hostEmail}</p>
        </div>
        <HostDetails eventId={eventId} />
        <Participants
          eventId={eventId}
          fetchParticipants={fetchParticipants}
          setFetchParticipants={setFetchParticipants}
          
        />
        <AddParticipant
          eventId={eventId}
          fetchParticipants={fetchParticipants}
          setFetchParticipants={setFetchParticipants}
        />
        <NavBar 
         eventId={eventId}
        />
      </div>
    </>
  );
};

export default EventPage;
