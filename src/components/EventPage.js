// list of things to import
import React from "react";
// import AddParticipant from "./AddParticipant";
// render
// event details
// participant + form mapped out
// add participant form
const EventPage = (props) => {
  return (
    <div>
      <h2>Here is your amazing page</h2>
      <p>Have fun at your event!</p>
      <div>
        <h3>Event details</h3>
        <p>Event ID: {props.eventId}</p>
      </div>
    </div>
  );
};

export default EventPage;
