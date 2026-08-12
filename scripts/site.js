/* ==========================================================================
   site.js — SHARED CHROME (nav + footer), theme toggle, icons
   --------------------------------------------------------------------------
   Defines two custom HTML elements you drop into every page:
       <site-header></site-header>   -> the top navigation
       <site-footer></site-footer>   -> the footer + socials
   Both read their content from window.SITE (see content/site.js), so you edit
   your name / links / socials in ONE place, not on every page.

   Also handles the light/dark theme toggle. To avoid a flash of the wrong
   theme, each page also has a 3-line inline script in its <head> — keep it.
   ========================================================================== */

/* ---- Inline SVG icons (no icon-font dependency) ------------------------- */
const ICONS = {
  github:  '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17 4.6 18 4.9 18 4.9c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z"/></svg>',
  scholar: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 3 1 9l11 6 9-4.9V17h2V9L12 3zM5 13.2V17c0 1.7 3.1 3 7 3s7-1.3 7-3v-3.8l-7 3.8-7-3.8z"/></svg>',
  linkedin:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5V9h3v10zM6.5 7.7a1.8 1.8 0 1 1 0-3.5 1.8 1.8 0 0 1 0 3.5zM19 19h-3v-5.3c0-1.3-.5-2.1-1.6-2.1-.9 0-1.4.6-1.6 1.2-.1.2-.1.5-.1.8V19h-3V9h3v1.3c.4-.6 1.1-1.5 2.8-1.5 2 0 3.6 1.3 3.6 4.2V19z"/></svg>',
  email:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  file:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M14 3v5h5"/><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/></svg>',
  external:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M14 4h6v6"/><path d="M20 4 10 14"/><path d="M18 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4"/></svg>',
  sun:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
  moon:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>',
  menu:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16"/></svg>',
};

/* ---- Theme -------------------------------------------------------------- */
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  try { localStorage.setItem("theme", theme); } catch (e) {}
}
function currentTheme() {
  return document.documentElement.getAttribute("data-theme")
    || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
}
function toggleTheme() { applyTheme(currentTheme() === "dark" ? "light" : "dark"); }

/* ---- <site-header> ------------------------------------------------------ */
class SiteHeader extends HTMLElement {
  connectedCallback() {
    const S = window.SITE || {};
    const here = location.pathname.replace(/index\.html$/, "").replace(/\/$/, "") || "/";
    const norm = (h) => h.replace(/index\.html$/, "").replace(/\/$/, "") || "/";
    const isActive = (href) => {
      const t = norm(href);
      if (t === "/") return here === "/";
      const prefix = t.replace(/\.html$/, "");            // "/current-work.html" -> "/current-work"
      return here === t || here === prefix || here.startsWith(prefix + "/");
    };
    const links = (S.nav || []).map((l) => {
      if (l.children && l.children.length) {
        const active = (isActive(l.href) || l.children.some((c) => isActive(c.href))) ? "active" : "";
        const sub = l.children.map((c) =>
          `<li><a href="${c.href}" class="${isActive(c.href) ? "active" : ""}">${c.label}</a></li>`
        ).join("");
        return `<li class="has-sub"><a href="${l.href}" class="${active}">${l.label}</a><ul class="subnav">${sub}</ul></li>`;
      }
      return `<li><a href="${l.href}" class="${isActive(l.href) ? "active" : ""}">${l.label}</a></li>`;
    }).join("");

    this.innerHTML = `
      <header class="nav">
        <div class="nav__inner">
          <a class="brand" href="/">${S.brand || S.name || ""}</a>
          <button class="nav__burger" aria-label="Menu" aria-expanded="false">${ICONS.menu}</button>
          <nav>
            <ul class="nav__links" id="navlinks">${links}
              <li class="nav__right-mobile"></li>
            </ul>
          </nav>
          <div class="nav__right">
            <button class="theme-toggle" aria-label="Toggle dark mode">
              <span class="icon-moon">${ICONS.moon}</span>
              <span class="icon-sun">${ICONS.sun}</span>
            </button>
          </div>
        </div>
      </header>`;

    this.querySelector(".theme-toggle").addEventListener("click", toggleTheme);
    const burger = this.querySelector(".nav__burger");
    const menu = this.querySelector("#navlinks");
    burger.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      burger.setAttribute("aria-expanded", String(open));
    });
  }
}

/* ---- <site-footer> ------------------------------------------------------ */
class SiteFooter extends HTMLElement {
  connectedCallback() {
    const S = window.SITE || {};
    const socials = (S.socials || []).map((s) =>
      `<a href="${s.href}" title="${s.label}" aria-label="${s.label}"${s.href.startsWith("http") ? ' target="_blank" rel="noopener"' : ""}>${ICONS[s.icon] || ""}</a>`
    ).join("");
    const year = new Date().getFullYear();
    this.innerHTML = `
      <footer class="footer">
        <div class="footer__inner">
          <div>
            <div class="footer__socials">${socials}</div>
          </div>
          <div class="footer__note">© ${year} ${S.name || ""}</div>
        </div>
      </footer>`;
  }
}

customElements.define("site-header", SiteHeader);
customElements.define("site-footer", SiteFooter);
