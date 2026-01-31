// Core component that holds the state for space missionData.
// Responsible for rendering each mission's details and actions.
// Manages the mission list and its statuses, orchestrating the data flow to child components.

import { useState, useEffect } from "react";
import MissionCard from "./MissionCard";
import MissionFilter from "./MissionFilter";
import MissionAction from "./MissionAction";
import { crewData } from "../data/crewData";
import { missionData as defaultMissions } from "../data/missionData";
import { getCrewNamesByIds } from "../utils/crewUtils";
import "../styles/MissionControl.css";
import { loadJSON, saveJSON, removeKey } from "../utils/storage";

// Core component that holds the state for missions and renders the UI.
function MissionControl({ missionData = defaultMissions }) {
  const STORAGE_KEY = "space-mission-control:missions:v1";
  const saved =
    typeof window !== "undefined" ? loadJSON(STORAGE_KEY, null) : null;
  const [missionList, setMissionList] = useState(saved ?? missionData);
  const [displayMode] = useState("first");

  const [filter, setFilter] = useState("all");
  const visibleMissions = missionList.filter(
    (m) => filter === "all" || m.status === filter,
  );

  useEffect(() => {
    saveJSON(STORAGE_KEY, missionList);
  }, [missionList]);

  function updateMissionStatus(missionId, newStatus) {
    setMissionList((prev) =>
      prev.map((m) => (m.id === missionId ? { ...m, status: newStatus } : m)),
    );
  }

  function resetStoredMissions() {
    removeKey(STORAGE_KEY);
    setMissionList(missionData);
  }

  function resolveCrewForDisplay(mission) {
    if (!mission) return [];
    if (Array.isArray(mission.crew)) {
      if (mission.crew.length === 0) return [];
      return typeof mission.crew[0] === "number"
        ? getCrewNamesByIds(mission.crew, crewData, displayMode)
        : mission.crew;
    }
    return [];
  }

  return (
    <div className="mission-control">
      <h1>Mission Control</h1>

      <MissionFilter filter={filter} onFilterChange={setFilter} />

      <div className="screenreader-only" aria-live="polite">
        {visibleMissions.length}{" "}
        {filter === "all"
          ? "Missions"
          : `${filter.charAt(0).toUpperCase() + filter.slice(1)} Missions`}{" "}
        shown
      </div>

      <div className="mission-list">
        {visibleMissions.map((mission) => (
          <div key={mission.id} className="mission-item">
            <MissionCard
              name={mission.name}
              status={
                mission.status
                  ? mission.status.charAt(0).toUpperCase() +
                    mission.status.slice(1)
                  : ""
              }
              crew={resolveCrewForDisplay(mission)}
              actions={
                <MissionAction
                  missionId={mission.id}
                  currentStatus={mission.status}
                  onStatusChange={updateMissionStatus}
                />
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MissionControl;
