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
        <h2 className="titleOfTheEvent">{eventName}</h2>
        <p className="eventLink">
          Share the event link to invite more people: <b>{eventLink}</b>
        </p>
        <div className="topHalf">
          <div className="eventDetails">
            <h3 className="eventDetails-Title">Event details</h3>
            <p className="eventDetails-Details">Event ID: {eventId}</p>
            <p className="eventDetails-Details">Host Name: {hostName}</p>
            <p className="eventDetails-Details">Event Date: {eventDate}</p>
            <p className="eventDetails-Details">Event Time: {eventTime}</p>
            <p className="eventDetails-Details">
              Event Address: {eventAddress}
            </p>
            <p className="eventDetails-Details">Host Email: {hostEmail}</p>
          </div>
          <div className="topHalfRight">
            <HostDetails eventId={eventId} />
            <AddParticipant
              eventId={eventId}
              fetchParticipants={fetchParticipants}
              setFetchParticipants={setFetchParticipants}
            />
          </div>
        </div>
        <NavBar eventId={eventId} />
        <Participants
          eventId={eventId}
          fetchParticipants={fetchParticipants}
          setFetchParticipants={setFetchParticipants}
        />
      </div>
    </>
  );
};

export default EventPage;
