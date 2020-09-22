import React, { useState } from "react";
import axios from "axios";
import "../styles/CreateEvent.css";
import Alert from "./Alert";

const CreateEvent = () => {
  const initialState = {
    fields: {
      eventName: "",
      hostName: "",
      date: "",
      time: "",
      address: "",
    },
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);

  const handleCreateEvent = (e) => {
    e.preventDefault();
    setAlert({ message: "", isSuccess: false });

    axios
      .post("https://final-mcrcodes-project.herokuapp.com/events", fields)
      .then((response) => {
        // the below RegEx removes all special characters, including space. Only leaves alphabets & numbers
        // but this only works for roman alphabets and numerals...
        // I tried crating an event in Japanese characters and it didn't quite work...
        const eventNameNoSpace = response.data.eventName.replace(
          /[^a-zA-Z0-9]/g,
          ""
        );
        const hostNameNoSpace = response.data.hostName.replace(
          /[^a-zA-Z0-9]/g,
          ""
        );
        setAlert({
          message: `Your event page URL is /events/${response.data.id}-${eventNameNoSpace}-${hostNameNoSpace}`,
          isSuccess: true,
        });
      })
      .catch((error) => {
        console.log(error);
        setAlert({
          message:
            "Something went wrong! Your event was not created. Please try again.",
          isSuccess: true,
        });
      });
  };

  const handleFieldChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  return (
    <div className="createEvent">
      <h2>Create your event</h2>
      <p>Fill in all fields and click "create event"</p>

      {/* form starts */}
      <form onSubmit={handleCreateEvent}>
        <div className="eventName">
          <label htmlFor="eventName">
            Event Name <br />
            <input
              type="text"
              id="eventName"
              name="eventName"
              value={fields.eventName}
              onChange={handleFieldChange}
              placeholder="My special event"
            />
          </label>
        </div>

        <div className="hostName">
          <label htmlFor="hostName">
            Host Name <br />
            <input
              type="text"
              id="hostName"
              name="hostName"
              value={fields.hostName}
              onChange={handleFieldChange}
              placeholder="Nigella Lawson"
            />
          </label>
        </div>

        <div className="date">
          <label htmlFor="date">
            Date <br />
            <input
              type="date"
              id="date"
              name="date"
              value={fields.date}
              onChange={handleFieldChange}
            />
          </label>
        </div>

        <div className="time">
          <label htmlFor="time">
            Time <br />
            <input
              type="time"
              id="time"
              name="time"
              value={fields.time}
              onChange={handleFieldChange}
            />
          </label>
        </div>

        <div className="address">
          <label htmlFor="address">
            Address <br />
            <input
              type="text"
              id="address"
              name="address"
              value={fields.address}
              onChange={handleFieldChange}
              placeholder="Mi casa"
            />
          </label>
        </div>

        <div className="createEventButton">
          <button className="submitButton" type="submit">
            Create event
          </button>
        </div>
        <Alert message={alert.message} success={alert.isSuccess} />
      </form>
      {/* form ends */}
    </div>
  );
};

export default CreateEvent;
