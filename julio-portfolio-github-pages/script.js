const DATA = {
  en: {
    nav: { about: 'About', experience: 'Experience', skills: 'Skills', projects: 'Projects', education: 'Education', contact: 'Contact' },
    hero: {
      eyebrow: 'SOC · Threat Detection · Incident Response',
      role: 'SOC Analyst focused on detection engineering, SIEM/SOAR and endpoint response.',
      text: 'I work in hybrid cloud and on-prem environments, triaging security alerts, investigating incidents and improving detection workflows through SIEM rule tuning, SOAR automation and structured reporting.',
      cvEn: 'Download CV · EN',
      cvEs: 'Download CV · ES',
      projects: 'View projects'
    },
    status: {
      available: 'Open to cybersecurity opportunities',
      items: [
        ['Current role', 'SOC Analyst · Fujitsu'],
        ['Location', 'Seville, Spain'],
        ['Focus', 'Threat detection · IR · SIEM/SOAR'],
        ['Target', 'Cybersecurity roles · Ireland / UK / Spain'],
        ['Contact', 'Email or LinkedIn']
      ]
    },
    sections: {
      aboutKicker: 'profile', aboutTitle: 'About me',
      experienceKicker: 'career', experienceTitle: 'Professional experience',
      skillsKicker: 'stack', skillsTitle: 'Technical skills',
      projectsKicker: 'evidence', projectsTitle: 'Selected projects', projectsIntro: 'A compact selection of labs and projects that support my defensive security profile.',
      educationKicker: 'background', educationTitle: 'Education & certifications',
      contactKicker: 'contact', contactTitle: 'Let’s connect'
    },
    about: [
      'I am a cybersecurity profile with hands-on SOC experience, focused on <strong>alert triage, threat detection, incident response and detection workflow improvement</strong>. My work combines operational monitoring with structured investigation, reporting and rule tuning.',
      'At Fujitsu, I monitor and investigate alerts across hybrid environments using SIEM, EDR/XDR, SOAR and case-management platforms. I am especially interested in the point where <strong>security operations, automation and endpoint telemetry</strong> meet.',
      'My academic background in Computer Engineering and my current Master’s in Cybersecurity give me a technical base to understand systems, infrastructure and security controls beyond the dashboard level.'
    ],
    metrics: [
      ['60–90', 'daily alerts triaged'],
      ['~30%', 'false-positive reduction through SIEM tuning'],
      ['~25%', 'MTTR improvement supported by SOAR automation'],
      ['2025', 'Microsoft SC-900 certified']
    ],
    experience: [
      {
        period: 'Feb 2025 — Present',
        role: 'SOC Analyst',
        company: 'Fujitsu · Seville, Spain',
        bullets: [
          'Monitor and triage daily alerts across hybrid cloud and on-prem environments using Microsoft Sentinel, Elastic, Splunk, Wazuh, FortiSIEM and CrowdStrike.',
          'Investigate, contain and escalate security incidents involving phishing, malware/ransomware and unauthorized access.',
          'Tune SIEM rules and contribute to SOAR playbooks to improve response workflows, reduce noise and support faster escalation.',
          'Produce technical reports, maintain operational documentation and support analyst onboarding.'
        ]
      },
      {
        period: 'Sep 2024 — Feb 2025',
        role: 'IT & Security Intern',
        company: 'Skylife Engineering S.L. · Seville, Spain',
        bullets: [
          'Administered and hardened Linux and Windows systems in local and virtualized environments using Proxmox.',
          'Configured physical servers, RAID architectures and Docker-based services for internal environments.',
          'Automated administrative tasks through scripting and supported system/network monitoring.',
          'Designed and delivered internal security awareness training on ARP spoofing, phishing and good practices.'
        ]
      },
      {
        period: 'Jun 2024 — Sep 2024',
        role: 'Coordinator',
        company: 'Camp Airy & Louise · Washington, D.C., USA',
        bullets: [
          'Coordinated activities and supported multicultural teams in an international environment, strengthening communication and leadership skills.'
        ]
      }
    ],
    skills: [
      ['SIEM / SOAR', ['Microsoft Sentinel', 'Splunk', 'Elastic', 'Wazuh', 'FortiSIEM', 'Sentinel Playbooks', 'Rule tuning', 'Alert triage']],
      ['EDR / XDR', ['CrowdStrike', 'Microsoft Defender', 'Microsoft 365 Defender', 'Endpoint telemetry', 'Containment support']],
      ['Incident Response', ['Phishing', 'Malware/Ransomware', 'Unauthorized access', 'Jira', 'ServiceNow', 'TheHive', 'IRIS', 'Reporting']],
      ['Infrastructure', ['Linux', 'Windows Server', 'Docker', 'Proxmox', 'RAID', 'HP/Dell ProLiant', 'System hardening']],
      ['Automation', ['Bash scripting', 'SOAR workflows', 'Playbooks', 'Operational documentation']],
      ['Cloud & Security', ['Azure', 'AWS', 'Hybrid environments', 'Threat hunting', 'Log correlation', 'Web security basics']]
    ],
    projects: [
      {
        code: 'P-01',
        status: 'Cybersecurity lab',
        title: 'Security Testing Lab',
        desc: 'Repository for cybersecurity testing, lab exercises and practical security work. Useful as a central evidence base for technical growth and hands-on practice.',
        tags: ['Cybersecurity', 'Testing', 'Python', 'Security lab'],
        url: 'https://github.com/Juliog-a/securitytesting'
      },
      {
        code: 'P-02',
        status: 'Web security',
        title: 'Cybersecurity Web Platform',
        desc: 'Learning platform built with Django, React, Tailwind, JWT, 2FA and PostgreSQL, with attention to common security risks such as XSS, CSRF, SQL injection and malicious file uploads.',
        tags: ['Django', 'React', 'JWT', '2FA', 'PostgreSQL'],
        url: 'https://github.com/Juliog-a/Chees-Script'
      },
      {
        code: 'P-03',
        status: 'Detection lab',
        title: 'Controlled File Encryption',
        desc: 'Safe PowerShell workflow for controlled file encryption and decryption. Designed to simulate ransomware-style encryption behavior in a reversible and educational environment.',
        tags: ['PowerShell', 'T1486', 'Ransomware simulation', 'Detection'],
        url: 'https://github.com/Juliog-a/Controlled-File-Encryption'
      },
      {
        code: 'P-04',
        status: 'IoT security',
        title: 'Security Lab IoT',
        desc: 'Distributed security system for laboratory environments, focused on monitoring temperature and humidity through sensors and supporting environmental control use cases.',
        tags: ['IoT', 'Java', 'Sensors', 'Monitoring'],
        url: 'https://github.com/Juliog-a/security_lab'
      }
    ],
    education: {
      degreeTitle: 'Education',
      certTitle: 'Certifications & training',
      degrees: [
        ['Master’s Degree in Cybersecurity — Information and Communications Security', 'Escuela Técnica Superior de Ingeniería, University of Seville', 'Oct 2025 — Present'],
        ['Degree in Computer Engineering', 'University of Seville', 'Sep 2020 — Jun 2025']
      ],
      certs: [
        ['Microsoft SC-900: Security, Compliance, and Identity Fundamentals', 'Microsoft', 'Mar 2025'],
        ['Introduction to Cybersecurity', 'University of Nebrija', 'Jun 2025'],
        ['English', 'Advanced professional proficiency', '']
      ]
    },
    contact: {
      copy: 'Interested in SOC, detection engineering, incident response or cybersecurity analyst roles. Best contact channel: email or LinkedIn.',
      links: [
        ['Email', 'juliogarciaamorena@gmail.com', 'mailto:juliogarciaamorena@gmail.com'],
        ['LinkedIn', 'julio-garcía-amorena-reina', 'https://www.linkedin.com/in/julio-garc%C3%ADa-amorena-reina-a51957227/'],
        ['GitHub', '@Juliog-a', 'https://github.com/Juliog-a']
      ]
    },
    heroBadges: ['Microsoft Sentinel', 'Splunk', 'Elastic', 'Wazuh', 'CrowdStrike', 'Defender', 'SOAR', 'Threat Hunting']
  },
  es: {
    nav: { about: 'Sobre mí', experience: 'Experiencia', skills: 'Stack', projects: 'Proyectos', education: 'Formación', contact: 'Contacto' },
    hero: {
      eyebrow: 'SOC · Detección de amenazas · Respuesta a incidentes',
      role: 'Analista SOC enfocado en detección, SIEM/SOAR y respuesta en endpoint.',
      text: 'Trabajo en entornos híbridos cloud y on-prem, triando alertas, investigando incidentes y mejorando flujos de detección mediante ajuste de reglas SIEM, automatización SOAR y reporting técnico.',
      cvEn: 'Descargar CV · EN',
      cvEs: 'Descargar CV · ES',
      projects: 'Ver proyectos'
    },
    status: {
      available: 'Abierto a oportunidades en ciberseguridad',
      items: [
        ['Rol actual', 'Analista SOC · Fujitsu'],
        ['Ubicación', 'Sevilla, España'],
        ['Foco', 'Threat detection · IR · SIEM/SOAR'],
        ['Objetivo', 'Roles de ciberseguridad · Irlanda / UK / España'],
        ['Contacto', 'Email o LinkedIn']
      ]
    },
    sections: {
      aboutKicker: 'perfil', aboutTitle: 'Sobre mí',
      experienceKicker: 'trayectoria', experienceTitle: 'Experiencia profesional',
      skillsKicker: 'stack', skillsTitle: 'Competencias técnicas',
      projectsKicker: 'evidencia', projectsTitle: 'Proyectos destacados', projectsIntro: 'Selección compacta de laboratorios y proyectos que refuerzan mi perfil defensivo.',
      educationKicker: 'base', educationTitle: 'Formación y certificaciones',
      contactKicker: 'contacto', contactTitle: 'Hablemos'
    },
    about: [
      'Soy un perfil de ciberseguridad con experiencia práctica en SOC, centrado en <strong>triaje de alertas, detección de amenazas, respuesta a incidentes y mejora de flujos de detección</strong>. Combino monitorización operativa con investigación, reporting y ajuste de reglas.',
      'En Fujitsu monitorizo e investigo alertas en entornos híbridos usando plataformas SIEM, EDR/XDR, SOAR y herramientas de gestión de casos. Me interesa especialmente el punto donde convergen <strong>operaciones de seguridad, automatización y telemetría endpoint</strong>.',
      'Mi base en Ingeniería Informática y mi Máster en Ciberseguridad me permiten entender sistemas, infraestructura y controles de seguridad más allá del nivel de dashboard.'
    ],
    metrics: [
      ['60–90', 'alertas triadas al día'],
      ['~30%', 'reducción de falsos positivos mediante tuning SIEM'],
      ['~25%', 'mejora de MTTR apoyada en automatización SOAR'],
      ['2025', 'certificación Microsoft SC-900']
    ],
    experience: [
      {
        period: 'Feb 2025 — Actualidad',
        role: 'Analista SOC',
        company: 'Fujitsu · Sevilla, España',
        bullets: [
          'Monitorización y triaje de alertas en entornos híbridos cloud y on-prem con Microsoft Sentinel, Elastic, Splunk, Wazuh, FortiSIEM y CrowdStrike.',
          'Investigación, contención y escalado de incidentes de phishing, malware/ransomware y accesos no autorizados.',
          'Ajuste de reglas SIEM y apoyo en playbooks SOAR para reducir ruido, mejorar flujos de respuesta y acelerar escalados.',
          'Elaboración de informes técnicos, documentación operativa y apoyo a la incorporación de nuevos analistas.'
        ]
      },
      {
        period: 'Sep 2024 — Feb 2025',
        role: 'Becario de IT y Seguridad',
        company: 'Skylife Engineering S.L. · Sevilla, España',
        bullets: [
          'Administración y bastionado de sistemas Linux y Windows en entornos locales y virtualizados con Proxmox.',
          'Configuración de servidores físicos, arquitecturas RAID y servicios Docker para entornos corporativos.',
          'Automatización de tareas mediante scripting y soporte en monitorización de sistemas y redes.',
          'Diseño e impartición de formaciones internas sobre ARP spoofing, phishing y buenas prácticas de seguridad.'
        ]
      },
      {
        period: 'Jun 2024 — Sep 2024',
        role: 'Coordinador',
        company: 'Camp Airy & Louise · Washington, D.C., USA',
        bullets: [
          'Coordinación de actividades y apoyo a equipos multiculturales en un entorno internacional, reforzando comunicación y liderazgo.'
        ]
      }
    ],
    skills: [
      ['SIEM / SOAR', ['Microsoft Sentinel', 'Splunk', 'Elastic', 'Wazuh', 'FortiSIEM', 'Sentinel Playbooks', 'Rule tuning', 'Triaje de alertas']],
      ['EDR / XDR', ['CrowdStrike', 'Microsoft Defender', 'Microsoft 365 Defender', 'Telemetría endpoint', 'Soporte a contención']],
      ['Respuesta a incidentes', ['Phishing', 'Malware/Ransomware', 'Accesos no autorizados', 'Jira', 'ServiceNow', 'TheHive', 'IRIS', 'Reporting']],
      ['Infraestructura', ['Linux', 'Windows Server', 'Docker', 'Proxmox', 'RAID', 'HP/Dell ProLiant', 'Bastionado']],
      ['Automatización', ['Bash scripting', 'Flujos SOAR', 'Playbooks', 'Documentación operativa']],
      ['Cloud & Security', ['Azure', 'AWS', 'Entornos híbridos', 'Threat hunting', 'Correlación de logs', 'Seguridad web básica']]
    ],
    projects: [
      {
        code: 'P-01',
        status: 'Laboratorio cyber',
        title: 'Security Testing Lab',
        desc: 'Repositorio de pruebas, ejercicios y trabajo práctico de ciberseguridad. Funciona como base de evidencia técnica y evolución hands-on.',
        tags: ['Cybersecurity', 'Testing', 'Python', 'Security lab'],
        url: 'https://github.com/Juliog-a/securitytesting'
      },
      {
        code: 'P-02',
        status: 'Web security',
        title: 'Cybersecurity Web Platform',
        desc: 'Plataforma de aprendizaje construida con Django, React, Tailwind, JWT, 2FA y PostgreSQL, con atención a riesgos comunes como XSS, CSRF, SQL injection y subida de archivos maliciosos.',
        tags: ['Django', 'React', 'JWT', '2FA', 'PostgreSQL'],
        url: 'https://github.com/Juliog-a/Chees-Script'
      },
      {
        code: 'P-03',
        status: 'Detection lab',
        title: 'Controlled File Encryption',
        desc: 'Flujo seguro en PowerShell para cifrado y descifrado controlado de archivos. Diseñado para simular comportamiento tipo ransomware de forma reversible y educativa.',
        tags: ['PowerShell', 'T1486', 'Ransomware simulation', 'Detection'],
        url: 'https://github.com/Juliog-a/Controlled-File-Encryption'
      },
      {
        code: 'P-04',
        status: 'IoT security',
        title: 'Security Lab IoT',
        desc: 'Sistema de seguridad distribuido para entornos de laboratorio, orientado a monitorización de temperatura y humedad mediante sensores.',
        tags: ['IoT', 'Java', 'Sensores', 'Monitoring'],
        url: 'https://github.com/Juliog-a/security_lab'
      }
    ],
    education: {
      degreeTitle: 'Formación',
      certTitle: 'Certificaciones y cursos',
      degrees: [
        ['Máster en Ciberseguridad — Seguridad en la Información y las Comunicaciones', 'Escuela Técnica Superior de Ingeniería, Universidad de Sevilla', 'Oct 2025 — Actualidad'],
        ['Grado en Ingeniería Informática', 'Universidad de Sevilla', 'Sep 2020 — Jun 2025']
      ],
      certs: [
        ['Microsoft SC-900: Security, Compliance, and Identity Fundamentals', 'Microsoft', 'Mar 2025'],
        ['Introducción a la Ciberseguridad', 'Universidad de Nebrija', 'Jun 2025'],
        ['Inglés', 'Nivel avanzado profesional', '']
      ]
    },
    contact: {
      copy: 'Interesado en roles de SOC, detection engineering, respuesta a incidentes o analista de ciberseguridad. Mejor vía de contacto: email o LinkedIn.',
      links: [
        ['Email', 'juliogarciaamorena@gmail.com', 'mailto:juliogarciaamorena@gmail.com'],
        ['LinkedIn', 'julio-garcía-amorena-reina', 'https://www.linkedin.com/in/julio-garc%C3%ADa-amorena-reina-a51957227/'],
        ['GitHub', '@Juliog-a', 'https://github.com/Juliog-a']
      ]
    },
    heroBadges: ['Microsoft Sentinel', 'Splunk', 'Elastic', 'Wazuh', 'CrowdStrike', 'Defender', 'SOAR', 'Threat Hunting']
  }
};

const state = { lang: localStorage.getItem('portfolio-lang') || 'en' };

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

function createTag(text, strong = false) {
  const span = document.createElement('span');
  span.className = strong ? 'tag strong' : 'tag';
  span.textContent = text;
  return span;
}

function renderI18n() {
  const t = DATA[state.lang];
  document.documentElement.lang = state.lang;
  $$('[data-i18n]').forEach((el) => {
    const path = el.dataset.i18n.split('.');
    const value = path.reduce((acc, key) => acc?.[key], t);
    if (typeof value === 'string') el.textContent = value;
  });
  $('#langLabel').textContent = state.lang === 'en' ? 'ES' : 'EN';
  $('#langToggle').setAttribute('aria-pressed', state.lang === 'es' ? 'true' : 'false');
}

function renderHero() {
  const t = DATA[state.lang];
  const box = $('#heroBadges');
  box.innerHTML = '';
  t.heroBadges.forEach((item, index) => {
    const span = document.createElement('span');
    span.className = `badge ${index < 4 ? 'strong' : ''}`;
    span.textContent = item;
    box.appendChild(span);
  });
}

function renderStatus() {
  const list = $('#statusList');
  list.innerHTML = '';
  DATA[state.lang].status.items.forEach(([label, value]) => {
    const row = document.createElement('div');
    row.innerHTML = `<dt>${label}</dt><dd>${value}</dd>`;
    list.appendChild(row);
  });
}

function renderAbout() {
  const t = DATA[state.lang];
  $('#aboutCopy').innerHTML = t.about.map((p) => `<p>${p}</p>`).join('');
  $('#metricGrid').innerHTML = t.metrics.map(([value, label]) => `
    <div class="metric-card">
      <div class="metric-value">${value}</div>
      <div class="metric-label">${label}</div>
    </div>
  `).join('');
}

function renderExperience() {
  const t = DATA[state.lang];
  $('#experienceList').innerHTML = t.experience.map((item) => `
    <article class="timeline-item">
      <div class="timeline-period">${item.period}</div>
      <div>
        <div class="timeline-role">${item.role}</div>
        <div class="timeline-company">${item.company}</div>
        <ul class="timeline-list">
          ${item.bullets.map((b) => `<li>${b}</li>`).join('')}
        </ul>
      </div>
    </article>
  `).join('');
}

function renderSkills() {
  const t = DATA[state.lang];
  const grid = $('#skillsGrid');
  grid.innerHTML = '';
  t.skills.forEach(([group, items]) => {
    const card = document.createElement('article');
    card.className = 'skill-card';
    const title = document.createElement('h3');
    title.textContent = `// ${group}`;
    const tags = document.createElement('div');
    tags.className = 'tag-row';
    items.forEach((skill, index) => tags.appendChild(createTag(skill, index < 3)));
    card.append(title, tags);
    grid.appendChild(card);
  });
}

function renderProjects() {
  const t = DATA[state.lang];
  const grid = $('#projectsGrid');
  grid.innerHTML = '';
  t.projects.forEach((project) => {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.innerHTML = `
      <div class="project-meta"><span>${project.code}</span><span>${project.status}</span></div>
      <div class="project-title">${project.title}</div>
      <p class="project-desc">${project.desc}</p>
      <div class="tag-row">${project.tags.map((tag, index) => `<span class="tag ${index < 2 ? 'strong' : ''}">${tag}</span>`).join('')}</div>
      <div class="project-actions"><a class="project-link" href="${project.url}" target="_blank" rel="noopener noreferrer">GitHub →</a></div>
    `;
    grid.appendChild(card);
  });
}

function renderEducation() {
  const t = DATA[state.lang].education;
  $('#educationList').innerHTML = t.degrees.map(([title, org, period]) => `
    <div class="record">
      <div class="record-title">${title}</div>
      <div class="record-meta">${org}</div>
      <div class="record-period">${period}</div>
    </div>
  `).join('');
  $('#certList').innerHTML = t.certs.map(([title, org, period]) => `
    <div class="record">
      <div class="record-title">${title}</div>
      <div class="record-meta">${org}</div>
      ${period ? `<div class="record-period">${period}</div>` : ''}
    </div>
  `).join('');
}

function renderContact() {
  const links = DATA[state.lang].contact.links;
  $('#contactLinks').innerHTML = links.map(([label, value, href]) => `
    <a class="contact-link" href="${href}" ${href.startsWith('http') ? 'target="_blank" rel="noopener noreferrer"' : ''}>
      <span class="contact-label">${label}</span>
      <span class="contact-value">${value}</span>
    </a>
  `).join('');
}

function renderAll() {
  renderI18n();
  renderHero();
  renderStatus();
  renderAbout();
  renderExperience();
  renderSkills();
  renderProjects();
  renderEducation();
  renderContact();
}

function toggleLang() {
  state.lang = state.lang === 'en' ? 'es' : 'en';
  localStorage.setItem('portfolio-lang', state.lang);
  renderAll();
}

function setupMenu() {
  const button = $('#menuButton');
  const menu = $('#mobileMenu');
  button.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    button.setAttribute('aria-expanded', String(open));
  });
  $$('#mobileMenu a').forEach((link) => link.addEventListener('click', () => {
    menu.classList.remove('open');
    button.setAttribute('aria-expanded', 'false');
  }));
}

function setupReveal() {
  const elements = $$('.reveal');
  if (!('IntersectionObserver' in window)) {
    elements.forEach((el) => el.classList.add('visible'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  elements.forEach((el) => observer.observe(el));
}

$('#langToggle').addEventListener('click', toggleLang);
setupMenu();
renderAll();
setupReveal();
