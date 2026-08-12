/* ==========================================================================
   content/publications.js — PUBLICATIONS
   Rendered on /research.html (and the top one on the homepage).
   Your name is pre-wrapped in <span class="me">David Ologan</span> so it's
   emphasized in the author list — keep that span when editing.
   Fields: venue, year, title, authorsHtml, thumb, abstract, links[{label,href,icon}]
   ========================================================================== */
window.PUBLICATIONS = [
  {
    venue: "IROS 2023 · Late-Breaking Results", year: 2023,
    title: "Quad-SDK Update: Estimation, Underbrush, and Other Improvements",
    authorsHtml: '<span class="me">David Ologan</span>, Ardalan Tajbakhsh, Justin K. Yim, Yanhao Yang, Joseph Norby, Jiming Ren, Selvin Garcia Gonzalez, Aaron M. Johnson',
    thumb: "/assets/img/publication_preview/estimation.png",
    abstract: "Extensions to Quad-SDK, a full-stack, open-source ROS framework for quadrupedal locomotion. This update adds an Extended Kalman Filter for reliable onboard state estimation and a specialized controller for walking through vine-like entanglements, together enabling more reliable outdoor locomotion, alongside several software-architecture improvements.",
    links: [
      { label: "PDF",  icon: "file",     href: "/assets/pdf/Quad_SDK_iROS_Late_Breaking_Results_Final_Abstract.pdf" },
      { label: "Code", icon: "github",   href: "https://github.com/robomechanics/quad-sdk" },
      { label: "Docs", icon: "external", href: "https://robomechanics.github.io/quad-sdk/latest/" },
    ],
  },
  {
    venue: "IEEE/RSJ IROS 2023", year: 2023,
    title: "Proprioception and reaction for walking among entanglements",
    authorsHtml: 'Justin K. Yim, Jiming Ren, <span class="me">David Ologan</span>, Selvin Garcia Gonzalez, Aaron M. Johnson',
    thumb: "/assets/img/publication_preview/underbrush.png",
    abstract: "Entanglements like vines and branches in nature — or cords and pipes indoors — trap mobile robots. We present a proprioception method that senses entanglements of a legged robot's legs and a reaction strategy that disentangles legs during swing as they advance to the next foothold. The approach traverses entanglements of many stiffnesses and geometries, succeeding in 14 of 16 laboratory trials as well as a natural outdoor environment.",
    links: [
      { label: "PDF",   icon: "file",     href: "/assets/pdf/UnderbrushWalking.pdf" },
      { label: "arXiv", icon: "external", href: "https://arxiv.org/abs/2304.02129" },
      { label: "Video", icon: "external", href: "https://www.youtube.com/watch?v=aM3qdtm1Ets" },
      { label: "Code",  icon: "github",   href: "https://github.com/robomechanics/quad-sdk" },
    ],
  },
  {
    venue: "AGU Fall Meeting 2019", year: 2019,
    title: "Developing Sequence Stratigraphic Modeling in Landlab to improve understanding of the tectonics in the Gulf of Kuşadası, Turkey",
    authorsHtml: 'Michael S. Steckler, Eric Hutton, <span class="me">David Ologan</span>, Greg E. Tucker, Céline Grall, S. Gürçay',
    thumb: "/assets/img/Columbia/Picture16.png",
    abstract: "A modular 2-D sequence-stratigraphic model, written in Python on the CSDMS Landlab toolkit, that reproduces stratal geometries and quantifies vertical motions in one of the most seismically active grabens of the West Anatolian Extensional Province. The framework couples tectonism, eustasy, flexural isostasy and nonlinear-diffusion sediment transport to decipher the tectonic and sedimentary history of the Gulf of Kuşadası.",
    links: [
      { label: "Abstract", icon: "external", href: "https://ui.adsabs.harvard.edu/abs/2019AGUFMEP21D2227S" },
    ],
  },
];
