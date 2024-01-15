import React from "react";
import "./form.css";

const Form = () => {
  return (
    <div>
      <div>Form</div>

      <div className="form-container">
        <div className="header">Event Reminder Form</div>
        <form id="eventForm">
          <input
            type="text"
            placeholder="Name of Event"
            name="EventName"
            required
          />
          <input type="date" placeholder="Date" name="date" required />
          <input type="time" placeholder="Time" name="time" />
          <input type="text" placeholder="Type of event" name="type" required />
          <input type="text" placeholder="Event Notes" name="notes" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
