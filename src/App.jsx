import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Form from "./Components/Form";
import Months from "./Components/Months";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Months />
      <Form />
    </>
  );
}

export default App;
