import React from "react";
import "../styles/months.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";

function Months() {
  return (
    <div className="container">
      <div className="box">
        <p id="january">January</p>
        <div className="eventContainer">
          <h3 className="eventName">Jordan's Birthday 😀 </h3>
          <div className="eventDetails">
            <p className="eventDate">24/01/2024</p>
            <p className="eventTime">00:00</p>
          </div>
          <div className="iconsContainer">
            <FontAwesomeIcon className="binIcon" icon={faTrashAlt} />
            <FontAwesomeIcon className="penIcon" icon={faPen} />
          </div>
        </div>
      </div>
      <div className="box">
        <p id="february">February</p>
      </div>
      <div className="box">
        <p id="march">March</p>
        <div className="eventContainer">
          <h3 className="eventName">Aidan's Birthday 😀</h3>
          <div className="eventDetails">
            <p className="eventDate">30/03/2024</p>
            <p className="eventTime">00:00</p>
          </div>
          <div className="iconsContainer">
            <FontAwesomeIcon className="binIcon" icon={faTrashAlt} />
            <FontAwesomeIcon className="penIcon" icon={faPen} />
          </div>
        </div>
      </div>
      <div className="box">
        <p id="april">April</p>
      </div>
      <div className="box">
        <p id="may">May</p>
      </div>
      <div className="box">
        <p id="june">June</p>
      </div>
      <div className="box">
        <p id="july">July</p>
      </div>
      <div className="box">
        <p id="august">August</p>
      </div>
      <div className="box">
        <p id="september">September</p>
        <div className="eventContainer">
          <h3 className="eventName">Joseph's Birthday 😀</h3>
          <div className="eventDetails">
            <p className="eventDate">21/09/2024</p>
            <p className="eventTime">00:00</p>
          </div>
          <div className="iconsContainer">
            <FontAwesomeIcon className="binIcon" icon={faTrashAlt} />
            <FontAwesomeIcon className="penIcon" icon={faPen} />
          </div>
        </div>
      </div>

      <div className="box">
        <p id="october">October</p>
      </div>
      <div className="box">
        <p id="november">November</p>
      </div>
      <div className="box">
        <p id="december"> December</p>
      </div>
    </div>
  );
}
export default Months;
