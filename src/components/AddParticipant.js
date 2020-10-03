import React, { useState } from "react";
import axios from "axios";
import "../styles/AddParticipant.css";

const AddParticipant = ({
  eventId,
  fetchParticipants,
  setFetchParticipants,
}) => {
  const initialState = {
    fields: {
      name: "",
      email: "",
      toBring: "",
      dislikes: "",
      dietInfo: "",
      eventID: eventId,
    },
  };

  const [fields, setFields] = useState(initialState.fields);
  const [addParticipantsButton, setAddParticipantsButton] = useState(false);
  const showaddparticipants = () => {
    setAddParticipantsButton(true);
  };
  const closeWindow = () => {
    setAddParticipantsButton(false);
  };
  const handleAddPerson = (e) => {
    e.preventDefault();

    axios
      .post(
        `https://final-mcrcodes-project.herokuapp.com/events/${eventId}/participants`,
        fields
      )
      .then(() => {
        setFetchParticipants(!fetchParticipants);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleFieldChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  return (
    <>
      <button
        data-testid="addParticipantNavButton"
        className="addParticipantNavButton"
        onClick={() => showaddparticipants()}
      >
        Press to Add Attendees
      </button>
      {addParticipantsButton === true && (
        <div className="addParticipant">
          <p className="closeX">
            <button onClick={closeWindow}>x</button>
          </p>
          <h2>Add your participants</h2>
          <p>Fill in all fields and click "create event"</p>

          {/* form starts */}
          <form data-testid="addParticipantForm" onSubmit={handleAddPerson}>
            <div className="name">
              <label htmlFor="name">
                Name <br />
                <input
                  type="text"
                  id="name"
                  name="name"
                  data-testid="name"
                  value={fields.name}
                  onChange={handleFieldChange}
                  placeholder="Name of fellow Party Queen..."
                />
              </label>
            </div>

            <div className="email">
              <label htmlFor="email">
                Email <br />
                <input
                  type="text"
                  id="email"
                  name="email"
                  data-testid="email"
                  value={fields.email}
                  onChange={handleFieldChange}
                  placeholder="Name of fellow Party Queen..."
                />
              </label>
            </div>

            <div className="toBring">
              <label htmlFor="toBring">
                I am bringing... <br />
                <input
                  type="text"
                  id="toBring"
                  name="toBring"
                  data-testid="toBring"
                  value={fields.toBring}
                  onChange={handleFieldChange}
                  placeholder="Ferrero Rocher"
                />
              </label>
            </div>

            <div className="dislikes">
              <label htmlFor="dislikes">
                I don't like... <br />
                <input
                  type="text"
                  id="dislikes"
                  name="dislikes"
                  data-testid="dislikes"
                  value={fields.dislikes}
                  onChange={handleFieldChange}
                />
              </label>
            </div>

            <div className="dietInfo">
              <label htmlFor="dietInfo">
                Diet info <br />
                <input
                  type="text"
                  id="dietInfo"
                  name="dietInfo"
                  data-testid="dietInfo"
                  value={fields.dietInfo}
                  onChange={handleFieldChange}
                  placeholder="Vegetarian? Kosher? Coeliac?"
                />
              </label>
            </div>

            <div className="addParticipantButton">
              <button
                data-testid="addButton"
                className="addButton"
                type="submit"
              >
                Add
              </button>
            </div>
          </form>
          {/* form ends */}
        </div>
      )}
    </>
  );
};

export default AddParticipant;
