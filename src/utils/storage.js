// Simple JSON localStorage helpers with safe guards and versioned key usage
export function saveJSON(key, value) {
  if (typeof window === "undefined" || !window.localStorage) return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    // fail silently in production, log in dev
    if (typeof console !== "undefined")
      console.warn("Failed to save to localStorage", e);
  }
}

export function loadJSON(key, fallback = null) {
  if (typeof window === "undefined" || !window.localStorage) return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw);
  } catch (e) {
    if (typeof console !== "undefined")
      console.warn("Failed to load from localStorage", e);
    return fallback;
  }
}

export function removeKey(key) {
  if (typeof window === "undefined" || !window.localStorage) return;
  try {
    window.localStorage.removeItem(key);
  } catch (e) {
    if (typeof console !== "undefined")
      console.warn("Failed to remove localStorage key", e);
  }
}
