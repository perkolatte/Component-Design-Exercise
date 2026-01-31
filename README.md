# Space Mission Control

Visual demo and small React app used to browse and manage fictional "Outlaw Star" missions.

![Mission Control UI](screenshot.png)

## Overview

- React + Vite single-page app that displays a list of missions and allows simple status transitions (launch, complete, restart).
- Mission and crew data live in `src/data/missionData.js` and `src/data/crewData.js`.
- Mission state is persisted to `localStorage` (key: `space-mission-control:missions:v1`).

## Quick start

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run dev server:
   ```bash
   npm run dev
   ```
3. Open http://localhost:5173 in your browser.

## Credits

- This demo uses characters, names, and settings from the "Outlaw Star" franchise. Outlaw Star originates from the manga by Takehiko Itō and the anime produced by Sunrise. All rights to the original work belong to their respective creators and rights holders.
- This project is an unofficial fan/demo project for learning and UI work and is not affiliated with the original rights holders.
