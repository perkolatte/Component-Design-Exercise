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
      {currentStatus === "planned" && (
        <button
          onClick={() => onStatusChange(missionId, "active")}
          aria-label={`Launch mission ${missionId}`}
        >
          Launch
        </button>
      )}

      {currentStatus === "active" && (
        <button
          onClick={() => onStatusChange(missionId, "completed")}
          aria-label={`Complete mission ${missionId}`}
        >
          Complete
        </button>
      )}

      {currentStatus === "completed" && (
        <button
          onClick={() => onStatusChange(missionId, "planned")}
          aria-label={`Restart mission ${missionId}`}
        >
          Restart
        </button>
      )}
    </div>
  );
}

export default MissionAction;
