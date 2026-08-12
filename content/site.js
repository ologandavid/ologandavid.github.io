/* ==========================================================================
   content/site.js — SITE-WIDE CONTENT
   Edit your name, nav links, socials, bio, news and homepage highlights here.
   Everything is plain data; no layout code. Loaded on every page.
   ========================================================================== */
window.SITE = {
  name:  "David Ologan",
  brand: "David Ologan",          // shown in the top-left nav

  /* Top navigation — order = display order. Root-relative hrefs. */
  nav: [
    { label: "about",                href: "/about.html" },
    { label: "current work",         href: "/current-work.html", children: [
      { label: "Underbrush Locomotion", href: "/current-work/underbrush.html" },
      { label: "Terrain Modification",  href: "/current-work/digging.html" },
      { label: "Deep-Mud Locomotion",   href: "/current-work/deep-mud.html" },
      { label: "Quad-SDK",              href: "/current-work/quad-sdk.html" },
    ] },
    { label: "research",             href: "/research.html" },
    { label: "projects",             href: "/projects.html" },
    { label: "experience",           href: "/experience.html" },
    { label: "education & teaching", href: "/teaching.html" },
    { label: "outreach",             href: "/outreach.html" },
    { label: "cv",                   href: "/cv.html" },
  ],

  /* Contact + social links. `icon` must match a key in ICONS (scripts/site.js):
     github · scholar · linkedin · email · file · external                    */
  email: "dologan@andrew.cmu.edu",
  cv_pdf: "/assets/pdf/David_Ologan_Resume.pdf",
  socials: [
    { label: "Email",          icon: "email",    href: "mailto:dologan@andrew.cmu.edu" },
    { label: "GitHub",         icon: "github",   href: "https://github.com/ologandavid" },
    { label: "Google Scholar", icon: "scholar",  href: "https://scholar.google.com/citations?user=H_9PIcwAAAAJ" },
    { label: "LinkedIn",       icon: "linkedin", href: "https://www.linkedin.com/in/dologan" },
  ],

  /* NOTE: the homepage hero (headline, bio, portrait) is written directly in
     index.html — it's the most important content, so it's kept as static HTML
     for search engines. Edit it there. Everything below is rendered by JS. */

  /* ---- Homepage "Featured projects" — custom cards shown FIRST ----------
     Use for non-coursework highlights (e.g. current research). These render
     ahead of the featured course projects (those set featured:true in
     content/projects.js). Each needs: title, meta, desc, thumb, href, tags. */
  featured: [
    {
      title: "Learned Locomotion Through Underbrush",
      meta:  "Current work · Robomechanics Lab",
      desc:  "Learning locomotion and disentanglement policies for quadrupeds in dense, compliant vegetation.",
      thumb: "/assets/img/ongoing/underbrush_thumb.jpg",
      href:  "/current-work/underbrush.html",
      tags:  ["Reinforcement Learning", "Legged Locomotion", "Quad-SDK"],
    },
  ],

  /* ---- News / updates (newest first) ----------------------------------- */
  news: [
    { date: "May 2024",   txt: "Best Poster, CMU Mechanical Engineering Master's Student Symposium." },
    { date: "Mar 2024",   txt: "Awarded the <strong>GEM PhD University Fellowship</strong>." },
    { date: "Oct 2023",   txt: "<em>Quad-SDK Update: Estimation, Underbrush, and Other Improvements</em> presented as an IROS Late-Breaking Result." },
    { date: "Oct 2023",   txt: "<em>Proprioception and reaction for walking among entanglements</em> published at IROS 2023." },
  ],
};
