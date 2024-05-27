import { useState } from "react";
import "./App.css";
import Youtube from "./Youtube";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>React Vite</h2>
      <Youtube />
    </>
  );
}

export default App;
