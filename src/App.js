import { useState } from "react";

function App() {

  // State
  
  let [message, setMessage] = useState(
    "JavaScript is the best language in the world!");
  
  // Actions
  
  function handleClick() {
    setMessage("Some new message");

  }

  // UI

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={handleClick}>Update the message</button>
    </div>
  );
}

export default App;
