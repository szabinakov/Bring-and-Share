import React from "react";
import { Switch, Route } from "react-router-dom";
import "../styles/App.css";

import CreateEvent from "./CreateEvent";
import EventPage from "./EventPage";

function App() {
  return (
    <div className="App">
      <h1>Bring & Share</h1>
      <Switch>
        <Route exact path="/" component={CreateEvent} />
        <Route exact path="/events/:eventId" component={EventPage} />
      </Switch>
    </div>
  );
}

export default App;
