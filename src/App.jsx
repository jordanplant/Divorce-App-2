import { useState } from "react";

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
