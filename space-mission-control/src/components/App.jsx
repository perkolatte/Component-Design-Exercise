import { useState } from "react";
import MissionControl from "./MissionControl.jsx";
import { missionData } from "../data/missionData.js";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MissionControl missionData={missionData} />
    </>
  );
}

export default App;
