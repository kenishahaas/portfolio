(function () {
  const grid = document.querySelector("[data-project-grid]");
  if (!grid || !window.PROJECTS) return;
  let filter = "all";

  const visual = (project, lang) => project.visual === "brand"
    ? `<div class="project-visual project-visual--brand" aria-hidden="true"><img src="${project.logo}" alt="" loading="lazy"><span>${project.coverLabel[lang]}</span></div>`
    : project.cover
      ? `<div class="project-visual project-visual--photo" aria-hidden="true"><img src="${project.cover}" alt="" loading="lazy" style="object-position:${project.coverPosition || "center"}"></div>`
      : `<div class="project-visual" aria-hidden="true"><svg viewBox="0 0 640 360" role="img"><rect width="640" height="360" fill="#15233a"/><rect x="70" y="45" width="500" height="270" rx="12" fill="#f7f4ee"/><rect x="70" y="45" width="500" height="34" rx="12" fill="#c5a47e"/><rect x="70" y="68" width="120" height="247" fill="#233858"/><circle cx="93" cy="61" r="5" fill="#fff"/><circle cx="110" cy="61" r="5" fill="#fff"/><rect x="220" y="110" width="300" height="22" rx="4" fill="#d7dde6"/><rect x="220" y="150" width="210" height="14" rx="3" fill="#a8b5c7"/><rect x="220" y="180" width="260" height="14" rx="3" fill="#d7dde6"/><rect x="220" y="225" width="125" height="55" rx="5" fill="#c5a47e"/><rect x="360" y="225" width="160" height="55" rx="5" fill="#263e61"/><text x="90" y="120" fill="#fff" font-size="13" font-family="sans-serif">${project.tech[0]}</text></svg></div>`;

  function render() {
    const lang = window.getPortfolioLanguage?.() || "en";
    const t = window.I18N[lang].projects;
    const limit = Number(grid.dataset.limit || 0);
    let filtered = window.PROJECTS.filter(p => filter === "all" || p.categories.includes(filter));
    if (limit) filtered = filtered.slice(0, limit);
    grid.innerHTML = filtered.length ? filtered.map(p => `<a class="project-card" data-categories="${p.categories.join(" ")}" href="${p.detail}" aria-label="${t.view}: ${p.title[lang]}">${visual(p, lang)}<div class="project-card__body"><span class="project-num">${p.number}</span><span class="status ${p.status === "progress" ? "status--progress" : ""}">${t[p.status]}</span><h3>${p.title[lang]}</h3><p>${p.description[lang]}</p><div class="tags">${p.tech.map(tag => `<span class="tag">${tag}</span>`).join("")}</div><div class="project-links"><span class="text-link">${t.view}</span></div></div></a>`).join("") : `<p class="empty-state">${t.empty}</p>`;
  }

  document.querySelectorAll("[data-filter]").forEach(button => button.addEventListener("click", () => {
    filter = button.dataset.filter;
    document.querySelectorAll("[data-filter]").forEach(btn => btn.classList.toggle("active", btn === button));
    render();
  }));
  window.addEventListener("languagechange", render);
  render();
})();
