// MissionFilter enhances user experience by providing a mechanism to view missions by specific criteria, directly influencing the mission list rendered by MissionControl.

function MissionFilter({ filter, onFilterChange }) {
  const options = [
    { key: "all", label: "All" },
    { key: "planned", label: "Planned" },
    { key: "active", label: "Active" },
    { key: "completed", label: "Completed" },
  ];

  const handleKeyDown = (e, idx) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      const next = options[(idx + 1) % options.length].key;
      onFilterChange(next);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      const prev = options[(idx - 1 + options.length) % options.length].key;
      onFilterChange(prev);
    }
  };

  return (
    <div
      className="mission-filter"
      role="radiogroup"
      aria-label="Filter Missions by status"
    >
      {options.map((opt, idx) => (
        <button
          key={opt.key}
          type="button"
          role="radio"
          aria-checked={filter === opt.key}
          tabIndex={filter === opt.key ? 0 : -1}
          className={filter === opt.key ? "active" : ""}
          onClick={() => onFilterChange(opt.key)}
          onKeyDown={(e) => handleKeyDown(e, idx)}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

export default MissionFilter;
