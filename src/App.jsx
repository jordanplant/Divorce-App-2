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

// Data passing
// Pass from child to parent to child
// form to app to months


// Passing form data to Months
const [data, setData] = useState('');

const appToMonth = () => {
  setData('this is the data from app to month');
  console.log(data)
}

const formToApp = () => {
   
}

  return (
    <>
      <Navbar />
      <Button primary onClick={() => appToMonth()}>Data from app to month</Button>
      <Months appToMonth={data}/>
      
      <Button onButtonClick={toggleForm} />
      {isFormVisible && <Form onClose={toggleForm} />}
    </>
  );
}

export default App;
