import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../styles/App.css";
import axios from "axios";

import CreateEvent from "./CreateEvent";
import EventPage from "./EventPage";

function App() {
  const [eventId, setEventId] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(`https://final-mcrcodes-project.herokuapp.com/events`)
        .then((response) => {
          setEventId(response.data.map((e) => e.id));
        })
        .catch((error) => {
          console.log(error);
        });
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      <ul className="bunting">
        <li className="down_triangle"></li>
        <li className="down_triangle"></li>
        <li className="down_triangle"></li>
        <li className="down_triangle"></li>
        <li className="down_triangle"></li>
        <li className="down_triangle"></li>
        <li className="down_triangle"></li>
        <li className="down_triangle"></li>
        <li className="down_triangle"></li>
        <li className="down_triangle"></li>
        <li className="down_triangle"></li>
        <li className="down_triangle"></li>
        <li className="down_triangle"></li>
      </ul>
      <h1 className="appTitle">Bring & Share</h1>
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={CreateEvent} />
        {eventId.map((eachId) => (
          <Route
            exact
            path={`/events/${eachId}`}
            render={(props) => <EventPage {...props} eventId={eachId} />}
          />
        ))}
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
