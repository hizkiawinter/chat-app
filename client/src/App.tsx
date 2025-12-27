import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import TopSection from "./components/TopSection";
function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="app">
      <NavBar />
      <TopSection />
    </div>
  );
}

export default App;
