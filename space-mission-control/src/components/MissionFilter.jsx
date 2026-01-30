// MissionFilter enhances user experience by providing a mechanism to view missions by specific criteria, directly influencing the mission list rendered by MissionControl.

function MissionFilter() {
  return (
    <div className="mission-filter">
      <select id="status-filter" name="status-filter">
        <option value="all">All</option>
        <option value="planned">Planned</option>
        <option value="in-progress">Active</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  );
}

export default MissionFilter;
