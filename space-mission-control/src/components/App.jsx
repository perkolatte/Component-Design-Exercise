import { useState } from "react";
import MissionControl from "./MissionControl.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MissionControl missions={missions} />
    </>
  );
}

export default App;
