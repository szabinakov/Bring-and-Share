import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../styles/App.css";

import CreateEvent from "./CreateEvent";
import EventPage from "./EventPage";


function App() {
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
          <Route exact path="/events/:eventId" component={EventPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
