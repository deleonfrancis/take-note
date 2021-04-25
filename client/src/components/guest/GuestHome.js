import React from "react";
import GuestJumbotron from "./GuestJumbotron";
import GuestNotes from "./GuestNotes";

function GuestHome() {
  return (
    <div>
      <GuestJumbotron />
      <div className="container">
      <GuestNotes />
      </div>
    </div>
  );
}

export default GuestHome;
