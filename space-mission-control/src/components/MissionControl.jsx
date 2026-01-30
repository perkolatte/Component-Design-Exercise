// Core component that holds the state for space missions.
// Responsible for rendering each mission's details and actions.
// Manages the mission list and its statuses, orchestrating the data flow to child components.

import { useState } from "react";
import MissionCard from "./MissionCard";
import MissionFilter from "./MissionFilter";
import MissionAction from "./MissionAction";

// Takes an array of missions from props, each mission with id, name, status, and crew.
function MissionControl({ missions }) {
  const [filter, setFilter] = useState("all");
  const visibleMissions = missions.filter(
    (m) => filter === "all" || m.status === filter,
  );

  return (
    <div className="mission-control">
      <h1>Mission Control</h1>

      <MissionFilter filter={filter} onFilterChange={setFilter} />

      <div className="mission-list">
        {visibleMissions.map((mission) => (
          <div key={`${mission.id}`} className="mission-item">
            <MissionCard
              name={mission.name}
              status={mission.status}
              crew={mission.crew ?? mission.characters ?? []}
            />
            <MissionAction
              missionId={mission.id}
              currentStatus={mission.status}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MissionControl;
