import { useState } from "react";

import "./App.css";
import Form from "./Components/Form";
import Months from "./Components/Months";
import Button from "./Components/Button";
import Navbar from "./Components/Navbar";

function App() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  //FORM POPUP
  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <>
      <Navbar />
      <Months />
      <Button onButtonClick={toggleForm} />
      {isFormVisible && <Form onClose={toggleForm} />}
    </>
  );
}

export default App;
