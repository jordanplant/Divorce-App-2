import React, { useState, useEffect } from "react";

const Dropdown = ({ onEmojiChange }) => {
  const [emojis, setEmojis] = useState([]);
  const [selectedEmoji, setSelectedEmoji] = useState(""); // Track the selected emoji

  useEffect(() => {
    const fetchEmojis = async () => {
      try {
        // Fetch emojis from the API
        const response = await fetch(
          "https://emoji-api.com/emojis?access_key=fc4afc3be2cea4c8abb701dd37fea41ef9c8517c"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const targetSubgroups = ["event", "geographic", "heart"];
        const filteredEmojis = data.filter((emoji) =>
          targetSubgroups.includes(emoji.subGroup)
        );
        setEmojis(filteredEmojis);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchEmojis();
  }, []);

  const handleEmojiSelection = (event) => {
    const selectedSlug = event.target.value;
    const emoji = emojis.find((e) => e.slug === selectedSlug);

    if (emoji) {
      setSelectedEmoji(emoji.character);
      onEmojiChange(emoji.character); // Call the callback with the selected emoji
    }
  };

  return (
    <select className="emoji-dropdown" onChange={handleEmojiSelection}>
      <option value="">Select Emoji</option>
      {emojis.map((emoji, index) => (
        <option key={index} value={emoji.slug}>
          {emoji.character} {emoji.unicodeName}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
