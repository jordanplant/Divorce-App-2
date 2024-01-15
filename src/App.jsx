import { useState } from "react";

import "./App.css";
import Form from "./Components/Form";
import Months from "./Components/Months";
import Dropdown from "./Components/Dropdown";

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
