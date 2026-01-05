import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import TopSection from "./components/TopSection";
import { Outlet } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="app">
      <NavBar />
      <TopSection />
      <Outlet />
    </div>
  );
}

export default App;
