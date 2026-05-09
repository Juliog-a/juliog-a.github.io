document.documentElement.classList.remove('no-js');
document.documentElement.classList.add('js');
const state = {
  lang: localStorage.getItem('portfolio.lang') || 'en',
  data: null,
  projectFilter: 'all'
};

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

async function loadProfile() {
  const response = await fetch('data/profile.json', { cache: 'no-store' });
  if (!response.ok) throw new Error(`Cannot load profile.json: ${response.status}`);
  return response.json();
}

function setText(selector, value) {
  const el = $(selector);
  if (el) el.textContent = value || '';
}

function setHTML(selector, value) {
  const el = $(selector);
  if (el) el.innerHTML = value || '';
}

function tag(text, priority = false) {
  const span = document.createElement('span');
  span.className = priority ? 'chip is-priority' : 'chip';
  span.textContent = text;
  return span;
}

function renderStaticLabels(t) {
  $$('[data-i18n]').forEach((node) => {
    const path = node.dataset.i18n.split('.');
    let value = t;
    for (const key of path) value = value?.[key];
    if (typeof value === 'string') node.textContent = value;
  });
}

function renderHero(D, t) {
  document.title = D.meta.title;
  document.documentElement.lang = state.lang;

  setText('#heroName', D.identity.displayName);
  setText('#heroRole', t.hero.role);
  setText('#heroSummary', t.hero.summary);
  setText('#terminalWhoami', t.hero.terminalWhoami);
  setText('#availabilityText', t.hero.availability);

  $('#cvEn').href = D.links.cvEn;
  $('#cvEs').href = D.links.cvEs;

  const tags = $('#heroTags');
  tags.innerHTML = '';
  t.hero.tags.forEach((item) => {
    const el = document.createElement('span');
    el.className = 'tag';
    el.textContent = item;
    tags.appendChild(el);
  });

  const grid = $('#highlightGrid');
  grid.innerHTML = '';
  t.highlights.forEach((item) => {
    const card = document.createElement('article');
    card.className = 'signal';
    card.innerHTML = `<strong>${item.value}</strong><span>${item.label}</span><small>${item.detail}</small>`;
    grid.appendChild(card);
  });
}

function renderAbout(t) {
  const about = $('#aboutText');
  about.innerHTML = t.about.map((p) => `<p>${p}</p>`).join('');

  const focus = $('#focusGrid');
  focus.innerHTML = '';
  t.focus.forEach((item, idx) => {
    const card = document.createElement('article');
    card.className = 'focus-card';
    card.innerHTML = `<div class="index">0${idx + 1}</div><h3>${item.title}</h3><p>${item.text}</p>`;
    focus.appendChild(card);
  });
}

function renderExperience(t) {
  const list = $('#experienceList');
  list.innerHTML = '';
  t.experience.forEach((item) => {
    const card = document.createElement('article');
    card.className = 'exp-card';
    card.innerHTML = `
      <div>
        <div class="exp-period">${item.period}</div>
        <div class="exp-company">${item.location}</div>
      </div>
      <div>
        <h3>${item.role}</h3>
        <div class="exp-company">${item.company}</div>
        <ul class="clean-list">${item.bullets.map((b) => `<li>${b}</li>`).join('')}</ul>
      </div>
    `;
    list.appendChild(card);
  });
}

function renderSkills(t) {
  const grid = $('#skillsGrid');
  grid.innerHTML = '';
  t.skills.forEach((group) => {
    const card = document.createElement('article');
    card.className = 'skill-card';
    const chips = group.items.map((item, idx) => `<span class="chip ${idx < 3 ? 'is-priority' : ''}">${item}</span>`).join('');
    card.innerHTML = `<h3>${group.title}</h3><div class="chips">${chips}</div>`;
    grid.appendChild(card);
  });
}

function getProjectTags(projects) {
  const tags = new Set(['all']);
  projects.forEach((project) => project.tags.forEach((tag) => tags.add(tag)));
  return Array.from(tags);
}

function renderProjectToolbar(t) {
  const toolbar = $('#projectToolbar');
  toolbar.innerHTML = '';
  const tags = getProjectTags(t.projects);
  tags.forEach((label) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `project-filter ${state.projectFilter === label ? 'is-active' : ''}`;
    button.textContent = label === 'all' ? t.projectFilterAll : label;
    button.addEventListener('click', () => {
      state.projectFilter = label;
      renderProjects(t);
      renderProjectToolbar(t);
    });
    toolbar.appendChild(button);
  });
}

function renderProjects(t) {
  setText('#projectsIntro', t.projectsIntro);
  const grid = $('#projectsGrid');
  grid.innerHTML = '';
  const projects = state.projectFilter === 'all'
    ? t.projects
    : t.projects.filter((project) => project.tags.includes(state.projectFilter));

  projects.forEach((project) => {
    const card = document.createElement('article');
    card.className = 'project-card';
    const links = project.links.map((link) => `<a href="${link.href}" target="_blank" rel="noreferrer">${link.label} ↗</a>`).join('');
    card.innerHTML = `
      <div class="project-meta"><span>${project.code}</span><span>${project.status}</span></div>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="chips">${project.tags.map((item, idx) => `<span class="chip ${idx < 3 ? 'is-priority' : ''}">${item}</span>`).join('')}</div>
      <div class="project-links">${links}</div>
    `;
    grid.appendChild(card);
  });
}

function renderCredentials(t) {
  const education = $('#educationList');
  education.innerHTML = t.education.map((item) => `
    <div class="data-row">
      <time>${item.period}</time>
      <div><strong>${item.title}</strong><span>${item.institution}</span></div>
    </div>
  `).join('');

  const certs = $('#certList');
  certs.innerHTML = t.certifications.map((item) => `
    <div class="data-row">
      <div class="data-kicker">${item.period}</div>
      <div><strong>${item.title}</strong><span>${item.issuer}</span></div>
    </div>
  `).join('');
}

function renderContact(D, t) {
  setText('#contactCopy', t.contact.copy);
  const links = $('#contactLinks');
  links.innerHTML = '';
  t.contact.links.forEach((item) => {
    const anchor = document.createElement('a');
    anchor.className = 'contact-link';
    anchor.href = item.href;
    if (item.external) {
      anchor.target = '_blank';
      anchor.rel = 'noreferrer';
    }
    anchor.innerHTML = `<strong>${item.label}</strong><span>${item.value}</span>`;
    links.appendChild(anchor);
  });
}

function renderAll() {
  const D = state.data;
  const t = D.i18n[state.lang];
  renderStaticLabels(t);
  renderHero(D, t);
  renderAbout(t);
  renderExperience(t);
  renderSkills(t);
  renderProjectToolbar(t);
  renderProjects(t);
  renderCredentials(t);
  renderContact(D, t);
  updateLangButton();
}

function updateLangButton() {
  setText('#langCurrent', state.lang.toUpperCase());
  setText('#langNext', state.lang === 'en' ? 'ES' : 'EN');
}

function setupLangToggle() {
  $('#langToggle').addEventListener('click', () => {
    state.lang = state.lang === 'en' ? 'es' : 'en';
    localStorage.setItem('portfolio.lang', state.lang);
    state.projectFilter = 'all';
    renderAll();
  });
}

function setupMobileMenu() {
  const btn = $('#menuBtn');
  const nav = $('#mobileNav');
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    document.body.classList.toggle('menu-open', open);
    btn.setAttribute('aria-expanded', String(open));
  });
  $$('a', nav).forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    document.body.classList.remove('menu-open');
    btn.setAttribute('aria-expanded', 'false');
  }));
}

function setupReveal() {
  if (!('IntersectionObserver' in window)) {
    $$('.reveal').forEach((el) => el.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });
  $$('.reveal').forEach((el) => observer.observe(el));
}

function setupYear() {
  setText('#year', new Date().getFullYear());
}

async function init() {
  try {
    state.data = await loadProfile();
    setupLangToggle();
    setupMobileMenu();
    setupYear();
    renderAll();
    setupReveal();
  } catch (error) {
    console.error(error);
    document.documentElement.classList.remove('js');
    document.body.innerHTML = `
      <main class="shell" style="padding:80px 0">
        <h1>profile.json not loaded</h1>
        <p style="color:#8a929c;max-width:680px">Run the project with a local server, for example VS Code Live Server, or publish it through GitHub Pages. Opening index.html directly from the filesystem can block JSON loading.</p>
      </main>
    `;
  }
}

init();
