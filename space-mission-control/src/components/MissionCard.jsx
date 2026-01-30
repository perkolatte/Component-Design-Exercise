// stateless component that displays information about a mission, such as its name, status, and crew. It receives all necessary data through props from MissionControl and focuses solely on presentation.

function MissionCard({ name, status, crew }) {
  const crewDisplay = Array.isArray(crew) ? crew.join(", ") : (crew ?? "—");

  return (
    <div className="mission-card">
      <h2>{name}</h2>
      <p>Status: {status}</p>
      <p>Crew: {crewDisplay}</p>
    </div>
  );
}

export default MissionCard;
