import { useState } from "react";
import MissionControl from "./MissionControl.jsx";
import { missions } from "../data/missions.js";
("../data/missions.js");

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MissionControl missions={missions} />
    </>
  );
}

export default App;
