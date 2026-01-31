// src/utils/crewUtils.js
export function formatCrewName(crew, mode = "best") {
  if (!crew) return "Unknown";
  const { nickname, firstName, lastName, name } = crew;
  const fullName = firstName && lastName ? `${firstName} ${lastName}` : null;

  switch (mode) {
    case "nickname":
      return nickname || fullName || firstName || name || "Unknown";
    case "full":
      return fullName || nickname || firstName || name || "Unknown";
    case "first":
      return firstName || nickname || name || "Unknown";
    case "last":
      return last || fullName || nickname || name || "Unknown";
    case "initials": {
      if (firstName && lastName) {
        return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
      }
      if (firstName) return firstName.charAt(0).toUpperCase();
      if (nickname) return nickname;
      return name || "Unknown";
    }
    case "best":
    default:
      if (nickname) return nickname;
      if (fullName) return fullName;
      if (firstName) return firstName;
      return "Unknown";
  }
}

export function getCrewMap(crewArray = []) {
  const map = new Map();
  crewArray.forEach((c) => map.set(c.id, c));
  return map;
}

/**
 * ids: array of numeric IDs or strings
 * crewArray: crew data array
 * mode: 'first'|'full'|'nickname'|'best' etc.
 */
export function getCrewNamesByIds(ids = [], crewArray = [], mode = "best") {
  if (!Array.isArray(ids)) return [];
  const map = getCrewMap(crewArray);
  return ids.map((id) => {
    const c = map.get(id);
    if (!c) {
      if (
        typeof console !== "undefined" &&
        typeof process !== "undefined" &&
        process.env &&
        process.env.NODE_ENV !== "production"
      ) {
        console.warn(`Missing crew id ${id} in crew data`);
      }
      return `#${id}`;
    }
    return formatCrewName(c, mode);
  });
}
