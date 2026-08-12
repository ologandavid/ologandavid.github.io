/* ==========================================================================
   content/projects.js — COURSEWORK & CAPSTONE PROJECTS
   Drives the cards on the homepage and /projects.html, plus the header of each
   detail page in /projects/. The rich write-up for each lives in its own file:
       /projects/<slug>.html

   To ADD a project:  (1) add an entry below, (2) copy projects/_template.html
   to projects/<slug>.html and fill in the body. That's it.

   Fields:
     slug      unique id -> /projects/<slug>.html
     num       "01".."NN"  small engineered label on the card
     title     project name
     course    course number + name
     term      when it was done
     category  "graduate" | "undergraduate"   (drives the filter)
     thumb     card image (paths are root-relative, reusing /assets)
     desc      one/two sentence blurb
     tags      short skill/tech tags
     featured  true -> also shown in "Selected work" on the homepage
     links     [{label, href, icon}]  icon: github | file | external
   ========================================================================== */
window.PROJECTS = [
  {
    slug: "multi-robot-motion-planning",
    num: "01", category: "graduate", featured: true,
    title: "Multi-Robot Motion Planning for Quadrupeds",
    course: "16.782 Planning & Decision-Making in Robotics", term: "Fall 2023",
    thumb: "/assets/img/16.782/cbs_mpc_thumb.jpg",
    desc: "Sampling-based and conflict-based planners that coordinate teams of quadrupeds through cluttered terrain — CBS reached a 100% success rate.",
    tags: ["C++", "ROS", "Gazebo", "RRT-Connect", "Conflict-Based Search"],
    links: [
      { label: "Code",  icon: "github", href: "https://github.com/ologandavid/multi-robot-quad-sdk" },
      { label: "Paper", icon: "file",   href: "/assets/pdf/Multi_Robot_Motion_Planning_for_Quadruped_Robots.pdf" },
    ],
  },
  {
    slug: "monkey-bar-robot",
    num: "02", category: "graduate", featured: true,
    title: "Hybrid Trajectory Optimization for a Monkey-Bar Robot",
    course: "16.745 Optimal Control & Reinforcement Learning", term: "Spring 2023",
    thumb: "/assets/img/16.745/tmp.gif",
    desc: "A hybrid-system direct-collocation (DIRCOL) formulation that lets a brachiating robot swing up from a dead hang and travel bar to bar.",
    tags: ["Julia", "DIRCOL", "Hybrid Systems", "Lagrangian Dynamics", "iPOPT"],
    links: [
      { label: "Code",  icon: "github", href: "https://github.com/ologandavid/MonkeyBarBot" },
      { label: "Paper", icon: "file",   href: "/assets/pdf/MonkeyBot.pdf" },
    ],
  },
  {
    slug: "construction-hazard-detection",
    num: "03", category: "graduate", featured: false,
    title: "Construction-Site Hazard Detection",
    course: "24.678 Computer Vision for Engineers", term: "Fall 2022",
    thumb: "/assets/img/24.678/sitegif2.gif",
    desc: "Image and point-cloud vision that tracks workers across a job site and warns them when they enter falling-object danger zones.",
    tags: ["OpenCV", "YOLOv7", "Python", "Transfer Learning", "Homography"],
    links: [
      { label: "Code",         icon: "github", href: "https://github.com/ologandavid/ConstructionSiteHazardDetection" },
      { label: "Presentation", icon: "file",   href: "/assets/pdf/FinalPresentation.pptx" },
    ],
  },
  {
    slug: "autonomous-buggy-control",
    num: "04", category: "graduate", featured: false,
    title: "Optimal Controllers for an Autonomous Buggy",
    course: "24.695 Modern Control Theory", term: "Fall 2022",
    thumb: "/assets/img/24.695/Picture1.jpg",
    desc: "PID, state-feedback, LQR and MPC controllers plus EKF-SLAM for a self-driving buggy on a CMU-buggy-inspired track.",
    tags: ["Python", "Webots", "LQR", "MPC", "EKF-SLAM", "PID"],
    links: [],
  },
  {
    slug: "dense-video-captioning",
    num: "05", category: "graduate", featured: false,
    title: "Dense Video Captioning",
    course: "11.785 Introduction to Deep Learning", term: "Spring 2023",
    thumb: "/assets/img/11.785/xukungif.gif",
    desc: "A semantic-alignment tuner network added ahead of the PDVC baseline, improving dense video captioning on YouCook2.",
    tags: ["PyTorch", "GCP", "Linux", "Deep Learning"],
    links: [
      { label: "Code",  icon: "github", href: "https://github.com/ologandavid/DenseVideoCaptioning" },
      { label: "Paper", icon: "file",   href: "/assets/pdf/11_785_Final_Project.pdf" },
    ],
  },
  {
    slug: "aisle-assist",
    num: "06", category: "undergraduate", featured: true,
    title: "Aisle Assist — Accessible Boarding Wheelchair",
    course: "2.009 Product Engineering Processes", term: "Fall 2021",
    thumb: "/assets/img/2.009/prezi.jpg",
    desc: "MIT ME capstone: a compact aisle wheelchair that gently slides paraplegic flyers from their chair into an airplane seat — no lifting.",
    tags: ["Design & Manufacturing", "CAD", "MATLAB", "Machining", "Autodesk Fusion"],
    links: [
      { label: "Final Presentation", icon: "external", href: "https://www.009hello.com/webcast" },
      { label: "Brochure",           icon: "file",     href: "/assets/pdf/silver_brochure.pdf" },
      { label: "Design Process",     icon: "external", href: "http://designed.mit.edu/new/view.html?year=2021&team=silver#final" },
    ],
  },
  {
    slug: "go-cart-power-circuitry",
    num: "07", category: "undergraduate", featured: false,
    title: "Power Electronics",
    course: "6.131 Power Electronics Laboratory", term: "Fall 2021",
    thumb: "/assets/img/6.131/Picture14.jpg",
    desc: "Buck/boost drives, a resonant lamp ballast, a three-phase inverter, and a bidirectional motor drive with closed-loop cruise control.",
    tags: ["Power Electronics", "Circuit Design", "H-Bridge", "PWM", "Compensator Design"],
    links: [],
  },
  {
    slug: "duck-hunt-console",
    num: "08", category: "undergraduate", featured: false,
    title: "Duck Hunt Handheld Console",
    course: "6.1151 Microcomputer Project Laboratory", term: "Spring 2022",
    thumb: "/assets/img/6.1151/Picture1.png",
    desc: "A PSoC5 game console (Duck Hunt, Pong, Tic-Tac-Toe) driving VGA, paired with a wireless Bluetooth controller.",
    tags: ["C", "Assembly", "PSoC", "VGA", "Bluetooth", "Circuit Design"],
    links: [
      { label: "Code",  icon: "github", href: "https://github.com/ologandavid/6.1151--MicrocomputerProjectLab" },
      { label: "Paper", icon: "file",   href: "/assets/pdf/6_1151_Final_Project_Report%20(1).pdf" },
    ],
  },
  {
    slug: "citgo-yoyos",
    num: "09", category: "undergraduate", featured: false,
    title: "CITGO-Sign Inspired Yo-Yos",
    course: "2.008 Design & Manufacturing II", term: "Spring 2021",
    thumb: "/assets/img/2.008/Picture11.png",
    desc: "Designed and mass-manufactured 50 light-up, injection-molded yo-yos inspired by Boston's CITGO sign.",
    tags: ["Injection Molding", "CAD", "CNC Machining", "Thermoforming", "Autodesk Fusion"],
    links: [],
  },
  {
    slug: "nanoelectronics-arm-processor",
    num: "10", category: "undergraduate", featured: false,
    title: "Energy-Efficient ARM Processor Design",
    course: "6.012 Nanoelectronics & Computation Systems", term: "Spring 2022",
    thumb: "/assets/img/6.012/thumbnail.png",
    desc: "Redesigned an ARM microprocessor's device physics — oxide thickness, spacer permittivity, doping, and voltage — to hit 200 MHz within an energy budget.",
    tags: ["Sentaurus TCAD", "MATLAB", "Semiconductor Physics", "MOSFET Scaling"],
    links: [
      { label: "Paper", icon: "file", href: "/assets/pdf/6_012_Design_Project.pdf" },
    ],
  },
  {
    slug: "ur5e-robot-arm",
    num: "11", category: "undergraduate", featured: false,
    title: "Vision-Guided UR5e Robot Arm",
    course: "2.12 Introduction to Robotics", term: "Spring 2021",
    thumb: "/assets/img/2.12/Picture37.jpg",
    desc: "Tuned PID and arm kinematics and used ROS + computer vision to have a UR5e identify colored bottles and sort them into baskets — mimicking hospital telepresence robots.",
    tags: ["ROS", "OpenCV", "Python", "PID", "Kinematics"],
    links: [],
  },
  {
    slug: "etch-a-sketch-gcode",
    num: "12", category: "undergraduate", featured: false,
    title: "Image-to-G-code Etch A Sketch",
    course: "2.086 Numerical Computation for Mechanical Engineers", term: "Spring 2020",
    thumb: "/assets/img/2.086/Picture28.png",
    desc: "A MATLAB pipeline that turns an image into a single continuous path and the G-code to drive a motorized Etch A Sketch, using edge detection and nearest-neighbor path optimization.",
    tags: ["MATLAB", "Edge Detection", "Path Optimization", "G-code"],
    links: [],
  },
  {
    slug: "basketball-shot-mechanics",
    num: "13", category: "undergraduate", featured: false,
    title: "Basketball Shot Mechanics Study",
    course: "2.671 Measurement & Instrumentation", term: "Fall 2020",
    thumb: "/assets/img/2.671/thumbnail.png",
    desc: "An at-home instrumentation study linking arm angle and jump force to basketball shot distance, using a goniometer and dual force plates.",
    tags: ["Measurement", "Data Analysis", "MATLAB"],
    links: [
      { label: "Paper",  icon: "file", href: "/assets/pdf/2_671_Final_Paper.pdf" },
      { label: "Poster", icon: "file", href: "/assets/pdf/2.671%20Final%20Poster.pdf" },
    ],
  },
  {
    slug: "pachinko-competition-robot",
    num: "14", category: "undergraduate", featured: false,
    title: "Pachinko Competition Robot",
    course: "2.007 Design & Manufacturing I", term: "Spring 2020",
    thumb: "/assets/img/2.007/Picture38.1.png",
    desc: "A multi-stage telescoping-lift robot (forklift-inspired) built for MIT's 2.007 Pachinko-themed game board, with weight-distribution and power analysis after COVID cut the build short.",
    tags: ["Mechanical Design", "CAD", "Power Analysis", "Manufacturing"],
    links: [],
  },
  {
    slug: "machined-flashlight",
    num: "15", category: "undergraduate", featured: false,
    title: "Machined Flashlight",
    course: "2.670 Mechanical Engineering Tools", term: "Summer 2019",
    thumb: "/assets/img/2.670/Picture1.1.png",
    desc: "A working two-part flashlight — threaded battery handle turned on the lathe, bulb head pocketed on the mill — built to learn safe machine-tool operation.",
    tags: ["Lathe", "Mill", "Machining", "Fabrication"],
    links: [],
  },
  {
    slug: "asteroid-evader-toy",
    num: "16", category: "undergraduate", featured: false,
    title: "Asteroid Evader — Toy Design",
    course: "2.00b Toy Product Design", term: "Spring 2019",
    thumb: "/assets/img/2.00b/Picture23.png",
    desc: "A Play-Doh shape-matching board game (à la Hole in the Wall) with 20+ acrylic slides, a 3D-printed slider, and a foam asteroid timer — tested with kids at a Boston children's museum.",
    tags: ["SolidWorks", "Prototyping", "Manufacturing", "Circuit Design"],
    links: [],
  },
  {
    slug: "electric-longboard",
    num: "17", category: "undergraduate", featured: false,
    title: "Electric Longboard",
    course: "MIT Projx / MITERS", term: "Spring 2019",
    thumb: "/assets/img/Miters/Picture29.png",
    desc: "A belt-driven electric longboard — a custom adjustable motor mount and a 48-tooth HTD5 pulley, waterjet and milled from 6061 aluminum, reaching a recorded 28 mph.",
    tags: ["Waterjet", "Milling", "Power Transmission", "CAD"],
    links: [],
  },
  {
    slug: "underwater-rov",
    num: "18", category: "undergraduate", featured: false,
    title: "Underwater ROV (FISHBOTS)",
    course: "MIT 6.a01 Making with Technology", term: "Fall 2018",
    thumb: "/assets/img/6.a01/Picture24.png",
    desc: "A whale-shaped underwater ROV using waterproof servos for an undulating, biomimetic swimming motion — lateral fins for steering and a rear fin for thrust.",
    tags: ["Mechatronics", "Servos", "Fabrication"],
    links: [],
  },
];
