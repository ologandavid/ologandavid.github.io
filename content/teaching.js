/* ==========================================================================
   content/teaching.js — TEACHING & OUTREACH (rendered on /teaching.html)
   ========================================================================== */
window.TEACHING = {
  /* ---- Education (degrees + relevant coursework) ----------------------- */
  education: {
    degrees: [
      { when: "2024 — 2028 (exp.)", title: "Ph.D., Mechanical Engineering", org: "Carnegie Mellon University", img: "/assets/img/edu/cmu.jpg" },
      { when: "2022 — 2024",        title: "M.S., Mechanical Engineering", org: "Carnegie Mellon University", img: "/assets/img/edu/cmu.jpg" },
      { when: "2018 — 2022",        title: "B.S., Mechanical Engineering, Electrical Engineering & Computer Science", org: "Massachusetts Institute of Technology", img: "/assets/img/edu/mit.jpg" },
    ],
    coursework: [
      { school: "Carnegie Mellon University (Graduate)", items: [
        "10-703 Deep Reinforcement Learning & Control",
        "16-833 Robot Localization & Mapping",
        "24-787 Machine Learning & AI for Engineers",
        "16-782 Planning & Decision-Making in Robotics",
        "11-785 Introduction to Deep Learning",
        "16-745 Optimal Control & Reinforcement Learning",
        "24-695 Modern Control Theory",
        "24-670 Robot Dynamics & Analysis",
        "24-678 Computer Vision for Engineers",
      ] },
      { school: "Massachusetts Institute of Technology (Undergraduate)", items: [
        "2.12 Introduction to Robotics",
        "6.046 Design & Analysis of Algorithms",
        "6.131 Power Electronics Laboratory",
        "6.115 Microcomputer Project Laboratory",
        "2.009 Product Engineering Processes",
        "2.005 Thermal-Fluids Engineering I",
        "6.012 Nanoelectronics & Computing Systems",
        "2.008 Design & Manufacturing II",
        "2.004 Dynamics & Controls II",
      ] },
    ],
  },

  // Students I've mentored (sorted by graduation year)
  mentees: [
    { name: "Fayyad Zakaria",      note: "ME 2024" },
    { name: "Kaustabh Paul",       note: "ME 2025" },
    { name: "Nate Klein",          note: "ME 2025" },
    { name: "Dylan Leong",         note: "ME 2026" },
    { name: "David Seong",         note: "ME 2026" },
    { name: "Josh Tsang",          note: "ME 2026" },
    { name: "Jingbo Zhang",        note: "ME 2026" },
    { name: "Thomas Chun Fai Lee", note: "Robotics 2027" },
    { name: "George Ortiz",        note: "ME 2027" },
    { name: "Christine Ohenzuwa",  note: "ME 2027" },
    { name: "Leo Wang",            note: "ECE 2028" },
  ],

  groups: [
    {
      title: "Teaching Assistant",
      items: [
        { code: "24-352", name: "Dynamic Systems & Controls", org: "CMU" },
        { code: "24-670", name: "Robot Dynamics & Analysis", org: "CMU" },
      ],
    },
    {
      title: "Course Assistant",
      items: [
        { code: "24-452", name: "Mechanical Systems Experimentation", org: "CMU" },
        { code: "6.a01",  name: "Making with Technology (FISHBOTS)", org: "MIT" },
      ],
    },
    {
      title: "Course Grader",
      items: [
        { code: "2.086",  name: "Numerical Computation for Mechanical Engineers", org: "MIT" },
        { code: "2.671",  name: "Measurement & Instrumentation", org: "MIT" },
        { code: "24.703", name: "Numerical Methods in Engineering", org: "CMU" },
      ],
    },
  ],

  outreach: [
    "SWE Day",
    "Teaching in Technology",
    "Black in Robotics",
    "Gwen's Girls",
    "Pittsburgh Robotics Network",
  ],

  // Photos from outreach events (rendered as a gallery under the list)
  outreachPhotos: [
    { src: "/assets/img/outreach/nvidia_tour.jpg", caption: "NVIDIA Tour" },
    { src: "/assets/img/outreach/PRN.jpg",  caption: "Pittsburgh Robotics Network" },
    { src: "/assets/img/outreach/RDD1.jpg", caption: "Robotics Discovery Day" },
    { src: "/assets/img/outreach/RDD2.jpg", caption: "Robotics Discovery Day" },
  ],
};
