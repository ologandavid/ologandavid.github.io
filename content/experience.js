/* ==========================================================================
   content/experience.js — RESEARCH & WORK EXPERIENCE
   window.RESEARCH  -> "Research Experience" timeline on /research.html
   window.EXPERIENCE-> timeline on /experience.html
   Fields: when, role, org, orgUrl (optional), bullets[], tags[],
           links[{label,href,icon}] (optional)
   ========================================================================== */

window.RESEARCH = [
  {
    when: "2022 — Present",
    role: "Graduate Research Assistant",
    org: "Robomechanics Lab, Carnegie Mellon University",
    orgUrl: "https://www.cmu.edu/me/robomechanicslab/",
    bullets: [
      "Maintainer of <strong>Quad-SDK</strong>, a widely adopted open-source, full-stack ROS framework for quadrupedal locomotion (900+ GitHub stars).",
      "Developed and deployed learned locomotion and disentanglement policies for quadrupeds navigating dense compliant vegetation, improving robustness and recovery in contact-rich natural terrain.",
      "Designed whole-body control frameworks for terrain-modifying robots (digging, excavation, plowing) that leverage terramechanics models of ground-contact interaction during training.",
      "Built multi-agent coordination algorithms for heterogeneous robot teams operating safely near humans, obstacles, and other agents.",
    ],
    tags: ["Reinforcement Learning", "Trajectory Optimization", "MPC", "State Estimation", "IsaacLab", "ROS"],
    links: [
      { label: "Quad-SDK", icon: "external", href: "https://robomechanics.github.io/quad-sdk/latest/" },
    ],
  },
  {
    when: "2020 — 2022",
    role: "Undergraduate Researcher — Assistive Devices",
    org: "MIT ELO × Volunteers for Medical Engineering (Prof. Daniel Frey)",
    bullets: [
      "Designed a portable, compactable sit-to-stand apparatus with a team of three, adding under 15 lb to a wheelchair frame to transfer an elderly client onto a toilet seat.",
      "Explored and prototyped actuation methods and organized part manufacturing; built with MIT D-Lab and taken to market through MIT Sandbox.",
    ],
    tags: ["SolidWorks", "Design & Manufacturing", "Iterative Design"],
  },
  {
    when: "Summer 2019",
    role: "UROP Researcher",
    org: "Rohsenow Kendall Heat Transfer Laboratory, MIT",
    bullets: [
      "Fabricated a heat-resistant enclosure for thermal-energy-storage experiments, replacing acrylic shielding that had begun to melt under the induction heater.",
      "Characterized latent-heat properties of candidate materials for thermal energy storage and maintained the HFI-5 induction heater and cooling system.",
    ],
    tags: ["Fabrication", "Thermal Energy Storage", "Experimentation"],
  },
  {
    when: "2018",
    role: "Research Assistant — Sequence Stratigraphy",
    org: "Lamont-Doherty Earth Observatory, Columbia University",
    bullets: [
      "Helped develop a Python sequence-stratigraphy model to assess seismic risk in the Marmara Sea and analyzed regional seismic data.",
      "Work was presented at the AGU Fall Meeting and won 1st place at the Sigma Xi Student Research Showcase (GeoSciences division).",
    ],
    tags: ["Python", "Numerical Modeling", "Seismic Data"],
  },
];

window.EXPERIENCE = [
  {
    when: "Summer 2021",
    role: "Robotic Development Intern",
    org: "SharkNinja",
    bullets: [
      "Optimized brushroll geometries on the MESA robot line (Shark IQ Robot Self-Empty XL) to improve pet-hair pickup across floor surfaces.",
      "Designed test apparatus and brushroll enclosures to maintain consistent ground contact; rapid-prototyped in Creo, then 3D-printed and milled.",
      "Tuned bristle and flap floor-contact angles to maximize pickup and reduce hair wrap, and designed a novel motion-actuated (unpowered) side brush for corner cleaning.",
    ],
    tags: ["Creo", "Rapid Prototyping", "3D Printing", "Mechanism Design", "DFM"],
  },
];
