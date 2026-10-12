(function () {
  const page = document.body.dataset.page || "home";
  const supported = ["en", "fr", "de"];
  const getNested = (obj, path) => path.split(".").reduce((value, key) => value && value[key], obj);
  const stored = localStorage.getItem("portfolioLanguage");
  let currentLang = supported.includes(stored) ? stored : "en";

  function header() {
    const host = document.querySelector("[data-site-header]");
    if (!host) return;
    host.innerHTML = `
      <a class="skip-link" href="#main">Skip to content</a>
      <header class="site-header">
        <div class="container header-inner">
          <a class="brand" href="index.html" aria-label="Kenisha Haas — Home">KENISHA <span>HAAS</span></a>
          <nav class="main-nav" id="main-nav" aria-label="Primary navigation">
            ${["home","profile","projects","watch","contact"].map(item => `<a href="${item === "home" ? "index" : item === "watch" ? "tech-watch" : item}.html" data-i18n="nav.${item}" ${(page === item || (item === "projects" && page.startsWith("project"))) ? 'aria-current="page"' : ""}></a>`).join("")}
          </nav>
          <div class="header-actions">
            <div class="lang-switch" role="group" aria-label="Language">
              ${supported.map(lang => `<button type="button" data-lang="${lang}" lang="${lang}">${lang.toUpperCase()}</button>`).join("")}
            </div>
            <button class="menu-toggle" type="button" aria-controls="main-nav" aria-expanded="false" aria-label="Open navigation"><span></span><span></span><span></span></button>
          </div>
        </div>
      </header>`;
  }

  function footer() {
    const host = document.querySelector("[data-site-footer]");
    if (!host) return;
    host.innerHTML = `<footer class="site-footer"><div class="container"><div class="footer-grid"><div><a class="brand" href="index.html">KENISHA <span>HAAS</span></a><p data-i18n="footer.line"></p></div><nav class="footer-nav" aria-label="Footer navigation">${["home","profile","projects","watch","contact"].map(item => `<a href="${item === "home" ? "index" : item === "watch" ? "tech-watch" : item}.html" data-i18n="nav.${item}"></a>`).join("")}</nav></div><div class="footer-bottom" data-i18n="footer.rights"></div></div></footer>`;
  }

  function applyLanguage(lang) {
    currentLang = supported.includes(lang) ? lang : "en";
    localStorage.setItem("portfolioLanguage", currentLang);
    document.documentElement.lang = currentLang;
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const value = getNested(window.I18N[currentLang], el.dataset.i18n);
      if (value !== undefined) el.textContent = value;
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const value = getNested(window.I18N[currentLang], el.dataset.i18nPlaceholder);
      if (value !== undefined) el.placeholder = value;
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(el => {
      const value = getNested(window.I18N[currentLang], el.dataset.i18nAlt);
      if (value !== undefined) el.alt = value;
    });
    document.querySelectorAll("[data-lang]").forEach(btn => btn.classList.toggle("active", btn.dataset.lang === currentLang));
    const metadata = window.I18N[currentLang].meta[page] || window.I18N[currentLang].meta.home;
    document.title = metadata[0];
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = metadata[1];
    const cvFiles = {en:"SIO_CV_EN-Kenisha HAAS.pdf", fr:"SIO_CV_FR-Kenisha HAAS.pdf", de:"SIO_CV_DE-Kenisha HAAS.pdf"};
    document.querySelectorAll("[data-cv-link]").forEach(link => link.href = `assets/documents/cv/${encodeURIComponent(cvFiles[currentLang]).replace(/%2F/g, "/")}`);
    window.dispatchEvent(new CustomEvent("languagechange", {detail:{lang:currentLang}}));
  }

  function interactions() {
    document.querySelectorAll("[data-lang]").forEach(btn => btn.addEventListener("click", () => applyLanguage(btn.dataset.lang)));
    const toggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".main-nav");
    toggle?.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    });
    nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => { nav.classList.remove("open"); toggle?.setAttribute("aria-expanded", "false"); }));
  }

  window.getPortfolioLanguage = () => currentLang;
  window.applyPortfolioLanguage = applyLanguage;
  header(); footer(); interactions(); applyLanguage(currentLang);
})();
