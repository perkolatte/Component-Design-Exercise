export function formatCrewName(crew) {
  if (!crew) return "Unknown";
  if (crew.nickname) return crew.nickname;
  if (crew.firstName && crew.lastName)
    return `${crew.firstName} ${crew.lastName}`;
  if (crew.firstName) return crew.firstName;
  if (crew.name) return crew.name;
  return "Unknown";
}

export function getCrewMap(crewArray = []) {
  const map = new Map();
  crewArray.forEach((c) => map.set(c.id, c));
  return map;
}

export function getCrewNamesByIds(ids = [], crewArray = []) {
  if (!Array.isArray(ids)) return [];
  const map = getCrewMap(crewArray);
  return ids.map((id) => {
    const c = map.get(id);
    if (!c) {
      // keep a visible placeholder but log in dev
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
    return formatCrewName(c);
  });
}
