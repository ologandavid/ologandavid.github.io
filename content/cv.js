/* ==========================================================================
   content/cv.js — CV / RESUME DATA (rendered on /cv.html)
   The full PDF is linked at the top of the page (cv.pdf below).
   ========================================================================== */
window.CV = {
  pdf: "/assets/pdf/David_Ologan_Resume.pdf",
  languages: "English, Cantonese",

  education: [
    { when: "2024 — 2028 (exp.)", degree: "Ph.D., Mechanical Engineering",
      org: "Carnegie Mellon University", orgUrl: "https://www.cmu.edu" },
    { when: "2022 — 2024", degree: "M.S., Mechanical Engineering",
      org: "Carnegie Mellon University", orgUrl: "https://www.cmu.edu" },
    { when: "2018 — 2022", degree: "B.S., Mechanical Engineering, Electrical Engineering & Computer Science",
      org: "Massachusetts Institute of Technology", orgUrl: "https://web.mit.edu" },
  ],

  experience: [
    { when: "2022 — Present", role: "Graduate Research Assistant",
      org: "Robomechanics Lab, Carnegie Mellon University" },
    { when: "Summer 2021", role: "Robotic Development Intern", org: "SharkNinja" },
  ],

  awards: [
    { when: "May 2024", title: "Best Poster — CMU ME Master's Student Symposium" },
    { when: "Mar 2024", title: "GEM PhD University Fellow" },
    { when: "2018",     title: "1st Place — Sigma Xi Student Research Showcase (GeoSciences)" },
  ],

  skillGroups: [
    { title: "Languages", items: ["Python", "C / C++", "MATLAB", "Julia", "Assembly", "HTML / CSS"] },
    { title: "Frameworks & Tools", items: ["ROS 1/2", "IsaacSim / IsaacLab", "MuJoCo", "Gazebo", "Docker", "PyTorch / TensorFlow"] },
    { title: "Methods", items: ["Reinforcement Learning", "Trajectory Optimization", "MPC", "State Estimation", "SLAM"] },
  ],

  interests: ["Model-Free Reinforcement Learning", "Trajectory Optimization", "Model Predictive Control", "State Estimation", "Legged Locomotion"],
};
