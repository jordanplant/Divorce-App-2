import React, { useState, useEffect } from "react";
import styles from "../styles/Form.module.css";
import Dropdown from "./Dropdown"; // Import the Dropdown component

const Form = ({ onClose }) => {
  const [formFields, setFormFields] = useState({
    EventName: "",
    date: "",
    time: "",
    type: "",
    notes: "",
    selectedEmoji: "",
  });
  const [eventAdded, setEventAdded] = useState(false);
  //FADE TRANSITION
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields((prevFields) => ({ ...prevFields, [name]: value }));
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300); // Delay to match the CSS transition
  };

  const containerClasses = `${styles.formContainer} ${
    isVisible ? styles.formContainerVisible : ""
  }`;

  const handleEmojiChange = (selectedEmoji) => {
    // Update the selected emoji in the form data
    setFormFields((prevFields) => ({ ...prevFields, selectedEmoji }));
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
      selectedEmoji: "", // Clear the selected emoji
    });

    // EVENT ADDED MESSAGE
    setEventAdded(true);

    // EVENT MESSAGE TIMEOUT
    setTimeout(() => setEventAdded(false), 10000);
  };

  return (
    <div>
      <div className={containerClasses}>
        <button className={styles.formCloseButton} onClick={handleClose}>
          <i className="fa-solid fa-x"></i>
        </button>
        <div className={styles.header}>Event Reminder Form</div>
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
          <div className={styles.timeContainer}>
            <p>Select Time:</p>
            <input
              type="time"
              label="Time"
              className={styles.timeInput}
              name="time"
              value={formFields.time}
              onChange={handleChange}
            />
          </div>
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

          <Dropdown onEmojiChange={handleEmojiChange} />

          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
        {eventAdded && <div className={styles.eventAdded}>Event Added!</div>}
      </div>
    </div>
  );
};

export default Form;
