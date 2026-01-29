// Core component that holds the state for space missions.
// Responsible for rendering each mission's details and actions.
// Manages the mission list and its statuses, orchestrating the data flow to child components.

import React from "react";
import MissionCard from "./MissionCard";
import MissionFilter from "./MissionFilter";
import MissionAction from "./MissionAction";

// Takes an array of missions from props, each mission with id, name, status, and crew.
function MissionControl({ missions }) {
  return (
    <div className="mission-control">
      <h1>Mission Control</h1>

      <MissionFilter />

      <div className="mission-list">
        {missions.map((mission) => (
          <div key={mission.id} className="mission-item">
            <MissionCard
              name={mission.name}
              status={mission.status}
              crew={mission.crew}
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
