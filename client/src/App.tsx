import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Aurora from "./components/Aurora";
import Threads from "./components/Threads";
import ColorBends from "./components/ColorBends";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <NavBar />
      <div style={{ width: "100%", height: "600px", position: "relative" }}>
        <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
      </div>
    </>
  );
}

export default App;
