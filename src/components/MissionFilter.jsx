// MissionFilter enhances user experience by providing a mechanism to view missions by specific criteria, directly influencing the mission list rendered by MissionControl.

import "../styles/MissionFilter.css";
import { useEffect, useRef, useState } from "react";

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

  const containerRef = useRef(null);
  const [twoRow, setTwoRow] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const check = () => {
      // if horizontal scroll needed, buttons don't fit in one row
      const needsWrap = el.scrollWidth > el.clientWidth + 1; // small tolerance
      setTwoRow(needsWrap);
    };

    check();
    const ro = new ResizeObserver(check);
    ro.observe(el);
    window.addEventListener("resize", check);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", check);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={"mission-filter" + (twoRow ? " two-row" : "")}
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
