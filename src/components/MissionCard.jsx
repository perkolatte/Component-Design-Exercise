// stateless component that displays information about a mission, such as its name, status, and crew. It receives all necessary data through props from MissionControl and focuses solely on presentation.

import "../styles/MissionCard.css";

function MissionCard({ name, status, crew, actions }) {
  const crewDisplay = Array.isArray(crew)
    ? crew.length
      ? crew.join(", ")
      : "—"
    : (crew ?? "—");

  return (
    <div className="mission-card">
      <div className="mission-card-content">
        <h2>{name}</h2>
        <p>Status: {status}</p>
        <p>Crew: {crewDisplay}</p>
      </div>

      {actions && <div className="mission-card-actions">{actions}</div>}
    </div>
  );
}

export default MissionCard;
