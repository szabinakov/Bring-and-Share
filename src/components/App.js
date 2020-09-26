import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../styles/App.css";

import CreateEvent from "./CreateEvent";
import EventPage from "./EventPage";

function App() {
  return (
    <div className="container">
      <ul className="bunting">
        <li className="down_triangle pink"></li>
        <li className="down_triangle blue"></li>
        <li className="down_triangle yellow"></li>
        <li className="down_triangle pink"></li>
        <li className="down_triangle blue"></li>
        <li className="down_triangle yellow"></li>
        <li className="down_triangle pink"></li>
        <li className="down_triangle blue"></li>
        <li className="down_triangle yellow"></li>
        <li className="down_triangle pink"></li>
        <li className="down_triangle blue"></li>
        <li className="down_triangle yellow"></li>
        <li className="down_triangle pink"></li>
        <li className="down_triangle blue"></li>
        <li className="down_triangle yellow"></li>
        <li className="down_triangle pink"></li>
        <li className="down_triangle blue"></li>
        <li className="down_triangle yellow"></li>
        <li className="down_triangle pink"></li>
        <li className="down_triangle blue"></li>
        <li className="down_triangle yellow"></li>
        <li className="down_triangle pink"></li>
        <li className="down_triangle blue"></li>
        <li className="down_triangle yellow"></li>
      </ul>
      <div className="confetti"></div>
      <div className="confetti"></div>
      <div className="confetti"></div>
      <div className="confetti"></div>
      <div className="confetti"></div>
      <div className="confetti"></div>
      <div className="confetti"></div>
      <div className="confetti"></div>
      <div className="confetti"></div>
      <div className="confetti"></div>
      <div className="confetti"></div>
      <div className="confetti"></div>
      <div className="confetti"></div>
      <div className="confetti"></div>
      <div className="confetti"></div>
      <div className="confetti"></div>
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
