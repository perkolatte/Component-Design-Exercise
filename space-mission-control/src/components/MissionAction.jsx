// andles user interactions for each mission, allowing status updates through buttons like "Launch Mission." It operates by calling functions passed down from
// MissionControl, showcasing a direct way for child components to trigger state changes in the parent.

function MissionAction({ missionId, currentStatus, onStatusChange }) {
  const handleAction = () => {
    if (!onStatusChange) {
      const noop = () => console.warn("onStatusChange not provided");
    }
  };

  return (
    <div className="mission-action">
      {currentStatus === "Planned" && (
        <button
          onClick={() => onStatusChange(missionId, "Active")}
          aria-label={`Launch mission ${missionId}`}
        >
          Launch
        </button>
      )}

      {currentStatus === "Active" && (
        <button
          onClick={() => onStatusChange(missionId, "Completed")}
          aria-label={`Complete mission ${missionId}`}
        >
          Complete
        </button>
      )}

      {currentStatus === "Completed" && (
        <button
          onClick={() => onStatusChange(missionId, "Planned")}
          aria-label={`Restart mission ${missionId}`}
        >
          Restart
        </button>
      )}
    </div>
  );
}

export default MissionAction;
