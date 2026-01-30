// andles user interactions for each mission, allowing status updates through buttons like "Launch Mission." It operates by calling functions passed down from
// MissionControl, showcasing a direct way for child components to trigger state changes in the parent.

function MissionAction({ missionId, currentStatus }) {
  const handleAction = () => {
    // Placeholder for action handling logic
    console.log(
      `Action triggered for mission ${missionId} with status ${currentStatus}`,
    );
  };

  return (
    <div className="mission-action">
      {currentStatus === "planned" && (
        <button onClick={handleAction}>Launch</button>
      )}
      {currentStatus === "in-progress" && (
        <button onClick={handleAction}>Complete</button>
      )}
      {currentStatus === "completed"}
    </div>
  );
}

export default MissionAction;
