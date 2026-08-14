/* ==========================================================================
   render.js — turns the content/*.js data into HTML on each page.
   A page only needs to (a) include the content file(s) it uses and this file,
   and (b) provide a container with the matching id. On load, this script fills
   in whatever containers it finds — so pages stay declarative and tidy.

   Container ids it looks for:
     #news #highlights #featured-projects #selected-pub          (home)
     #project-filters #projects-grid                             (projects)
     #publications #research-timeline                            (research)
     #experience-timeline                                        (experience)
     #teaching-groups #outreach                                  (teaching)
     #cv-education #cv-experience #cv-awards #cv-skills #cv-interests #cv-download
     <body data-project="slug"> + #detail-header                 (project detail)
   ========================================================================== */

/* ---- small helpers ------------------------------------------------------ */
function linkBtn(l, cls) {
  const ext = /^https?:/.test(l.href) ? ' target="_blank" rel="noopener"' : "";
  const ic = (typeof ICONS !== "undefined" && ICONS[l.icon]) ? ICONS[l.icon] : "";
  return `<a class="btn ${cls || "btn--sm"}" href="${l.href}"${ext}>${ic}${l.label}</a>`;
}
function tagList(tags, max) {
  const t = max ? tags.slice(0, max) : tags;
  const extra = max && tags.length > max ? `<li class="tag">+${tags.length - max}</li>` : "";
  return `<ul class="tags">${t.map((x) => `<li class="tag">${x}</li>`).join("")}${extra}</ul>`;
}
function fill(id, html) { const n = document.getElementById(id); if (n) n.innerHTML = html; return n; }

/* ---- project card ------------------------------------------------------- */
function projectCard(p) {
  const href = p.href || `/projects/${p.slug}.html`;
  const meta = p.meta || `${p.course} · ${p.term}`;
  return `
  <article class="card">
    <div class="card__media">
      <img src="${p.thumb}" alt="${p.title}" loading="lazy">
    </div>
    <div class="card__body">
      <div class="card__meta">${meta}</div>
      <h3 class="card__title"><a class="card__link" href="${href}">${p.title}</a></h3>
      <p class="card__desc">${p.desc}</p>
      ${tagList(p.tags, 4)}
      <div class="card__foot">
        <span class="card__arrow">view →</span>
      </div>
    </div>
  </article>`;
}

/* ---- projects page: filters + grid ------------------------------------- */
function initProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;
  const all = window.PROJECTS || [];
  const cats = ["all", "graduate", "undergraduate"];
  const count = (c) => (c === "all" ? all.length : all.filter((p) => p.category === c).length);

  const bar = document.getElementById("project-filters");
  if (bar) {
    bar.innerHTML = cats.map((c, i) =>
      `<button class="filter ${i === 0 ? "active" : ""}" data-cat="${c}">${c}<span class="count">${count(c)}</span></button>`
    ).join("");
    bar.addEventListener("click", (e) => {
      const b = e.target.closest(".filter"); if (!b) return;
      bar.querySelectorAll(".filter").forEach((x) => x.classList.remove("active"));
      b.classList.add("active");
      draw(b.dataset.cat);
    });
  }
  function draw(cat) {
    const list = cat === "all" ? all : all.filter((p) => p.category === cat);
    grid.innerHTML = list.map(projectCard).join("");
  }
  draw("all");
}

/* ---- homepage: featured projects + news + highlights + selected pub ----- */
function initHome() {
  const hs = document.getElementById("hero-socials");
  if (hs && window.SITE) {
    hs.innerHTML = (window.SITE.socials || []).map((s) =>
      `<a href="${s.href}" title="${s.label}" aria-label="${s.label}"${s.href.startsWith("http") ? ' target="_blank" rel="noopener"' : ""}>${(typeof ICONS !== "undefined" && ICONS[s.icon]) || ""}</a>`
    ).join("");
  }
  const feat = document.getElementById("featured-projects");
  if (feat) {
    const extra = (window.SITE && window.SITE.featured) || [];   // custom cards first (e.g. current work)
    const projs = (window.PROJECTS || []).filter((p) => p.featured);
    feat.innerHTML = [...extra, ...projs].map(projectCard).join("");
  }
  const news = document.getElementById("news");
  if (news && window.SITE) {
    news.innerHTML = (window.SITE.news || []).map((n) =>
      `<li><span class="date">${n.date}</span><span class="txt">${n.txt}</span></li>`
    ).join("");
  }
  const hl = document.getElementById("highlights");
  if (hl && window.SITE) {
    hl.innerHTML = (window.SITE.highlights || []).map((h) =>
      `<div class="hl"><div class="num">${h.num}</div><p class="lbl">${h.label}</p></div>`
    ).join("");
  }
  const sp = document.getElementById("selected-pub");
  if (sp && window.PUBLICATIONS) sp.innerHTML = pubItem(window.PUBLICATIONS[0]);
}

/* ---- publications ------------------------------------------------------- */
function pubItem(p) {
  const links = (p.links || []).map((l) => linkBtn(l)).join("");
  const abs = p.abstract
    ? `<button class="btn btn--sm pub__toggle" type="button">abstract</button>
       <p class="pub__abstract">${p.abstract}</p>` : "";
  const demo = p.video
    ? `<figure class="pub__demo"><video src="${p.video}" controls muted loop playsinline preload="metadata"></video></figure>` : "";
  return `
  <article class="pub">
    <div class="pub__thumb"><img src="${p.thumb}" alt="" loading="lazy"></div>
    <div>
      <div class="pub__venue">${p.venue}</div>
      <h3 class="pub__title">${p.title}</h3>
      <p class="pub__authors">${p.authorsHtml}</p>
      <div class="pub__links">${links}${abs}</div>
      ${demo}
    </div>
  </article>`;
}
function initPublications() {
  const c = document.getElementById("publications");
  if (!c) return;
  c.innerHTML = (window.PUBLICATIONS || []).map(pubItem).join("");
  c.addEventListener("click", (e) => {
    const b = e.target.closest(".pub__toggle"); if (!b) return;
    const abs = b.parentElement.querySelector(".pub__abstract");
    if (abs) { const open = abs.classList.toggle("open"); b.textContent = open ? "hide abstract" : "abstract"; }
  });
}

/* ---- timelines (research / experience) --------------------------------- */
function timelineItem(x) {
  const org = x.orgUrl ? `<a href="${x.orgUrl}" target="_blank" rel="noopener">${x.org}</a>` : x.org;
  const bullets = (x.bullets || []).map((b) => `<li>${b}</li>`).join("");
  const tags = x.tags ? tagList(x.tags) : "";
  const links = (x.links || []).map((l) => linkBtn(l)).join("");
  return `
  <div class="tl-item">
    <div class="tl-when">${x.when}</div>
    <div class="tl-body">
      <h3 class="tl-role">${x.role}</h3>
      <p class="tl-org">${org}</p>
      <ul>${bullets}</ul>
      <div class="mt-4">${tags}</div>
      ${links ? `<div class="detail-links">${links}</div>` : ""}
    </div>
  </div>`;
}
function initTimelines() {
  const r = document.getElementById("research-timeline");
  if (r) r.innerHTML = `<div class="timeline">${(window.RESEARCH || []).map(timelineItem).join("")}</div>`;
  const e = document.getElementById("experience-timeline");
  if (e) e.innerHTML = `<div class="timeline">${(window.EXPERIENCE || []).map(timelineItem).join("")}</div>`;
}

/* ---- about page: hobbies & travel gallery (photos + videos) ------------- */
function initAbout() {
  const p = document.getElementById("photos");
  if (!p || !window.ABOUT) return;
  const items = window.ABOUT.photos || [];
  if (!items.length) {
    p.innerHTML = `<p class="muted">A gallery of my hobbies and travels — coming soon.</p>`;
    return;
  }
  p.innerHTML = items.map((ph) => {
    const isVid = /\.(mp4|mov|webm)$/i.test(ph.src);
    if (isVid) {
      return `<figure><video src="${ph.src}" controls muted playsinline loop preload="metadata"></video>${ph.caption ? `<figcaption>${ph.caption}</figcaption>` : ""}</figure>`;
    }
    const cap = ph.caption ? `<figcaption class="gallery__cap">${ph.caption}</figcaption>` : "";
    return `<figure><img src="${ph.src}" alt="${ph.caption || ""}" loading="lazy">${cap}</figure>`;
  }).join("");
}

/* ---- education (degrees w/ imagery + coursework) ----------------------- */
function initEducation() {
  if (!window.TEACHING || !window.TEACHING.education) return;
  const ed = window.TEACHING.education;
  fill("education-degrees", `<div class="edu-list">${ed.degrees.map((d) => `
    <div class="edu-item">
      <div class="edu-item__img"><img src="${d.img}" alt="${d.org}" loading="lazy"></div>
      <div>
        <p class="edu-item__deg">${d.title}</p>
        <p class="edu-item__org">${d.org}</p>
        <p class="edu-item__when">${d.when}</p>
      </div>
    </div>`).join("")}</div>`);
  const cw = document.getElementById("coursework");
  if (cw) cw.innerHTML = ed.coursework.map((g) =>
    `<div class="cv-block"><p class="kicker">${g.school}</p>
      <div class="chips">${g.items.map((i) => `<span class="tag">${i}</span>`).join("")}</div></div>`
  ).join("");
}

/* ---- students mentored ------------------------------------------------- */
function initMentees() {
  const c = document.getElementById("mentees");
  if (!c || !window.TEACHING) return;
  const m = window.TEACHING.mentees || [];
  if (!m.length) { c.innerHTML = `<p class="muted">Coming soon.</p>`; return; }
  c.innerHTML = `<ul class="mentee-grid">${m.map((x) =>
    `<li><span class="code">${x.name}</span>${x.note ? ` <span class="org">· ${x.note}</span>` : ""}</li>`
  ).join("")}</ul>`;
}

/* ---- teaching ----------------------------------------------------------- */
function initTeaching() {
  const g = document.getElementById("teaching-groups");
  if (g && window.TEACHING) {
    g.innerHTML = window.TEACHING.groups.map((grp) => `
      <div class="teach-group">
        <p class="kicker">${grp.title}</p>
        <ul class="teach-list">
          ${grp.items.map((it) => `<li><span class="code">${it.code}</span>${it.name} <span class="org">· ${it.org}</span></li>`).join("")}
        </ul>
      </div>`).join("");
  }
  const o = document.getElementById("outreach");
  if (o && window.TEACHING) {
    o.innerHTML = `<div class="chips">${window.TEACHING.outreach.map((x) => `<span class="tag">${x}</span>`).join("")}</div>`;
  }
  const op = document.getElementById("outreach-photos");
  if (op && window.TEACHING && window.TEACHING.outreachPhotos) {
    op.innerHTML = window.TEACHING.outreachPhotos.map((ph) =>
      `<figure><img src="${ph.src}" alt="${ph.caption}" loading="lazy"><figcaption>${ph.caption}</figcaption></figure>`
    ).join("");
  }
}

/* ---- CV ----------------------------------------------------------------- */
function initCV() {
  if (!window.CV) return;
  const dl = document.getElementById("cv-download");
  if (dl) dl.setAttribute("href", window.CV.pdf);

  fill("cv-education", window.CV.education.map((e) => `
    <div class="cv-row"><div class="when">${e.when}</div>
      <div class="what"><strong>${e.degree}</strong><br>
        <span class="sub">${e.orgUrl ? `<a href="${e.orgUrl}" target="_blank" rel="noopener">${e.org}</a>` : e.org}</span>
      </div></div>`).join(""));

  fill("cv-experience", window.CV.experience.map((e) => `
    <div class="cv-row"><div class="when">${e.when}</div>
      <div class="what"><strong>${e.role}</strong><br><span class="sub">${e.org}</span></div></div>`).join(""));

  fill("cv-awards", window.CV.awards.map((a) => `
    <div class="cv-row"><div class="when">${a.when}</div>
      <div class="what">${a.title}</div></div>`).join(""));

  fill("cv-skills", window.CV.skillGroups.map((s) => `
    <div class="cv-row"><div class="when">${s.title}</div>
      <div class="what"><div class="chips">${s.items.map((i) => `<span class="tag">${i}</span>`).join("")}</div></div></div>`).join(""));

  const interests = document.getElementById("cv-interests");
  if (interests) interests.innerHTML = `<div class="chips">${window.CV.interests.map((i) => `<span class="tag">${i}</span>`).join("")}</div>`;
}

/* ---- project detail header (single source of truth = projects.js) ------- */
function initDetailHeader() {
  const slug = document.body.dataset.project;
  if (!slug) return;
  const list = window.PROJECTS || [];
  const i = list.findIndex((p) => p.slug === slug);
  const p = list[i];
  if (!p) return;
  document.title = `${p.title} — David Ologan`;

  const links = (p.links || []).map((l) => linkBtn(l, "btn")).join("");
  fill("detail-header", `
    <a class="backlink" href="/projects.html">← all projects</a>
    <p class="kicker"><span class="idx">${p.num}</span> ${p.category}</p>
    <h1>${p.title}</h1>
    <div class="detail-meta"><span>${p.course}</span><span>${p.term}</span></div>
    ${links ? `<div class="detail-links">${links}</div>` : ""}
  `);

  // optional prev/next
  const nav = document.getElementById("detail-nav");
  if (nav && list.length > 1) {
    const prev = list[(i - 1 + list.length) % list.length];
    const next = list[(i + 1) % list.length];
    nav.innerHTML = `
      <a class="btn btn--sm" href="/projects/${prev.slug}.html">← ${prev.title}</a>
      <a class="btn btn--sm" href="/projects/${next.slug}.html">${next.title} →</a>`;
  }
}

/* ---- nav shadow on scroll ---------------------------------------------- */
function initNavScroll() {
  const nav = document.querySelector(".nav");
  if (!nav) return;
  const onScroll = () => nav.classList.toggle("nav--scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* ---- back-to-top button ------------------------------------------------- */
function initBackToTop() {
  const btn = document.createElement("button");
  btn.className = "to-top";
  btn.setAttribute("aria-label", "Back to top");
  btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 19V5M6 11l6-6 6 6"/></svg>';
  document.body.appendChild(btn);
  const onScroll = () => btn.classList.toggle("show", window.scrollY > 500);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* ---- gallery lightbox --------------------------------------------------- */
function initLightbox() {
  if (!document.querySelector(".gallery")) return;
  const box = document.createElement("div");
  box.className = "lightbox";
  box.innerHTML = '<button class="lightbox__close" aria-label="Close">&times;</button><img alt="">';
  document.body.appendChild(box);
  const pic = box.querySelector("img");
  const close = () => { box.classList.remove("open"); pic.src = ""; document.body.style.overflow = ""; };
  document.addEventListener("click", (e) => {
    const g = e.target.closest && e.target.closest(".gallery img");
    if (g) { pic.src = g.currentSrc || g.src; box.classList.add("open"); document.body.style.overflow = "hidden"; return; }
    if (e.target.closest && e.target.closest(".lightbox")) close();
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
}

/* ---- reveal on scroll (fade/slide up) ---------------------------------- */
function initReveal() {
  if (!("IntersectionObserver" in window)) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const sel = ".card, .pub, .tl-item, .cv-block, .edu-item, .section-head, .prose figure, .media-row, .figs-even, .gallery";
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
  document.querySelectorAll(sel).forEach((el) => { el.classList.add("reveal"); io.observe(el); });
}

/* ---- boot --------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  initHome();
  initProjects();
  initPublications();
  initTimelines();
  initAbout();
  initEducation();
  initMentees();
  initTeaching();
  initCV();
  initDetailHeader();
  // cosmetic behaviors (after content is rendered)
  initNavScroll();
  initBackToTop();
  initLightbox();
  initReveal();
});
