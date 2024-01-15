import React, { useState } from "react";
import "./form.css";

const Form = () => {
  const [formFields, setFormFields] = useState({
    EventName: "",
    date: "",
    time: "",
    type: "",
    notes: "",
  });
  const [eventAdded, setEventAdded] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields((prevFields) => ({ ...prevFields, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // CONSOLE LOG UNTIL READY
    console.log("Form Data:", formFields);

    // CLEAR FORM ONCE SUBMITTED
    setFormFields({
      EventName: "",
      date: "",
      time: "",
      type: "",
      notes: "",
    });

    // EVENT ADDED MESSAGE
    setEventAdded(true);

    // EVENT MESSAGE TIMEOUT
    setTimeout(() => setEventAdded(false), 10000);
  };

  return (
    <div>
      <div>Form</div>
      <div className="form-container">
        <div className="header">Event Reminder Form</div>
        <form id="eventForm" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name of Event"
            name="EventName"
            value={formFields.EventName}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            placeholder="Date"
            name="date"
            value={formFields.date}
            onChange={handleChange}
            required
          />
          <input
            type="time"
            placeholder="Time"
            name="time"
            value={formFields.time}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Type of event"
            name="type"
            value={formFields.type}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="Event Notes"
            name="notes"
            value={formFields.notes}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
        {eventAdded && <div className="eventAdded">Event Added!</div>}
      </div>
    </div>
  );
};

export default Form;
