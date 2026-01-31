// Core component that holds the state for space missions.
// Responsible for rendering each mission's details and actions.
// Manages the mission list and its statuses, orchestrating the data flow to child components.

import { useState } from "react";
import MissionCard from "./MissionCard";
import MissionFilter from "./MissionFilter";
import MissionAction from "./MissionAction";
import "../styles/MissionControl.css";
import { crew as crewData } from "../data/crew";
import { getCrewNamesByIds } from "../utils/crewUtils";

// Takes an array of missions from props, each mission with id, name, status, and crew.
function MissionControl({ missions }) {
  const [missionList, setMissionList] = useState(missions);

  const [filter, setFilter] = useState("all");
  const visibleMissions = missionList.filter(
    (m) => filter === "all" || m.status === filter,
  );

  function updateMissionStatus(missionId, newStatus) {
    setMissionList((prev) =>
      prev.map((m) => (m.id === missionId ? { ...m, status: newStatus } : m)),
    );
  }

  return (
    <div className="mission-control">
      <h1>Mission Control</h1>

      <MissionFilter filter={filter} onFilterChange={setFilter} />

      <div className="screenreader-only" aria-live="polite">
        {visibleMissions.length} missions shown
      </div>

      <div className="mission-list">
        {visibleMissions.map((mission) => (
          <div key={`${mission.id}`} className="mission-item">
            <MissionCard
              name={mission.name}
              status={mission.status}
              crew={
                // if mission stores numeric IDs use crew data to format names
                Array.isArray(mission.crew) &&
                typeof mission.crew[0] === "number"
                  ? getCrewNamesByIds(mission.crew, crewData)
                  : Array.isArray(mission.characters) &&
                      typeof mission.characters[0] === "number"
                    ? getCrewNamesByIds(mission.characters, crewData)
                    : (mission.crew ?? mission.characters ?? [])
              }
            />
            <MissionAction
              missionId={mission.id}
              currentStatus={mission.status}
              onStatusChange={updateMissionStatus}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MissionControl;
