// Outlaw Star — mission list (in-universe objectives the crew must undertake)
export const missions = [
  {
    id: 1,
    name: "Secure the Outlaw Star",
    status: "completed",
    description:
      "Locate and acquire the XGP15A-II (Outlaw Star) so Gene and Jim can begin legitimate bounty work.",
    objective: "Recover ship and verify Caster Gun systems",
    location: "Seaside shipyard / Frontier space",
    characters: [1, 2, 3],
    reward: "Ship ownership & initial funds",
  },
  {
    id: 2,
    name: "Protect Melfina",
    status: "completed",
    description:
      "Safeguard Melfina from factions who want to exploit her connection to the Galactic Leyline.",
    objective: "Escort Melfina to a safe terminal and gather intel",
    location: "Multiple systems",
    characters: [1, 2, 3],
    reward: "Information on Leyline coordinates",
  },
  {
    id: 3,
    name: "Recover the Caster Gun Fragment",
    status: "completed",
    description:
      "Track down a stolen fragment of the Caster Gun needed to unlock greater power.",
    objective: "Retrieve fragment from rival bounty hunters",
    location: "Rogue asteroid market",
    characters: [1, 5],
    reward: "Advanced weapon component",
  },
  {
    id: 4,
    name: "Rescue the Merchant Fleet",
    status: "completed",
    description:
      "Intervene when a merchant convoy is attacked by space pirates to restore trade routes.",
    objective: "Eliminate pirate threat and escort survivors",
    location: "Outer shipping lanes",
    characters: [1, 2, 4],
    reward: "Credits and trade favors",
  },
  {
    id: 5,
    name: "Investigate the Galactic Leyline Lead",
    status: "active",
    description:
      "Follow an encrypted lead that may reveal part of the Galactic Leyline's coordinates.",
    objective: "Decrypt transmissions and verify coordinates",
    location: "Abandoned research station",
    characters: [2, 3],
    reward: "Partial Leyline coordinate data",
  },
  {
    id: 6,
    name: "Negotiate with the Kid Pirates",
    status: "active",
    description:
      "Parley or fight with a gang of young pirates holding key information about a target ship.",
    objective: "Secure cooperation or neutralize the gang",
    location: "Slave's Reef",
    characters: [1, 2, 6],
    reward: "Local contacts & intelligence",
  },
  {
    id: 7,
    name: "Rescue Suzuka",
    status: "planned",
    description:
      "Extraction of Suzuka from an assassination plot tied to an assassination syndicate.",
    objective: "Locate safehouse and extract target",
    location: "Imperial enclave",
    characters: [1, 5],
    reward: "Ally secured; combat assistance",
  },
  {
    id: 8,
    name: "Recover the Bio-Interface Module",
    status: "planned",
    description:
      "Retrieve the interface module needed to safely connect Melfina with the Outlaw Star's systems.",
    objective: "Infiltrate guarded facility and recover device",
    location: "Corporate research moon",
    characters: [2, 3, 6],
    reward: "Safe Melfina-ship interface",
  },
  {
    id: 9,
    name: "Break into the Antagonist's Vault",
    status: "planned",
    description:
      "Steal crucial data from a powerful antagonist who is also searching the Leyline.",
    objective: "Obtain decrypted map fragment",
    location: "High-security orbital vault",
    characters: [1, 2, 4],
    reward: "Critical Leyline clue",
  },
  {
    id: 10,
    name: "Equip and Upgrade the Outlaw Star",
    status: "planned",
    description:
      "Outfit the Outlaw Star with improved shield generators, reinforced hull plating, and a calibrated Caster interface to prepare for upcoming threats.",
    objective:
      "Install shield and hull upgrades, calibrate the Caster Gun interface, and verify systems integration",
    location: "Shipyard / Outlaw Star — onboard systems",
    characters: [1, 2, 3, 4],
    reward: "Enhanced ship capabilities and survivability",
  },
  {
    id: 11,
    name: "Assemble Leyline Coordinates",
    status: "planned",
    description:
      "Combine gathered data fragments to reveal the full path to the Galactic Leyline.",
    objective: "Synthesize fragments and confirm final coordinates",
    location: "Outlaw Star — onboard mission ops",
    characters: [2, 3],
    reward: "Access to the Leyline route",
  },
  {
    id: 12,
    name: "Journey to the Galactic Leyline",
    status: "planned",
    description:
      "Final expedition to the Leyline once coordinates are confirmed — risk and reward are maximal.",
    objective: "Navigate to Leyline and unlock its secrets",
    location: "Galactic Leyline",
    characters: [1, 2, 3, 4, 5, 6],
    reward: "Unlimited possibilities / ultimate discovery",
  },
];
