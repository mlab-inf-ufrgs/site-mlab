/* =============================================
   MLAB — Main JS
   Dados carregados de: data/people.js, data/projects.js, data/publications.js
   ============================================= */

// ── SVG Icons (reutilizáveis) ─────────────────
const ICONS = {
  linkedin: `<svg viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>`,
  scholar:  `<svg viewBox="0 0 24 24"><path d="M12 2L1 7l11 5 11-5-11-5zM2 11.76v4.06c0 1.25 1.72 2.45 4.3 3.09l.88-1.76c-2.17-.46-3.18-1.18-3.18-1.83v-2.38L12 17l8-4.07v2.38c0 .65-1.01 1.37-3.18 1.83l.88 1.76c2.58-.64 4.3-1.84 4.3-3.09v-4.06L12 15.82z"/></svg>`,
  email:    `<svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>`,
  lattes:   `<svg viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>`,
};

// ── Render People ─────────────────────────────
function renderPeople() {
  const grid = document.getElementById('peopleGrid');
  if (!grid) return;

  grid.innerHTML = PEOPLE.map(p => {
    const tags = (p.tags || []).map((tag, i) =>
      `<span class="person-research-tag ${tag}">${p.tagLabels[i]}</span>`
    ).join('');

    const linksMap = {
      linkedin: { cls: 'linkedin', title: 'LinkedIn',       href: p.links.linkedin },
      scholar:  { cls: 'scholar',  title: 'Google Scholar', href: p.links.scholar  },
      email:    { cls: 'email',    title: 'E-mail',         href: `mailto:${p.links.email}` },
      lattes:   { cls: 'lattes',   title: 'Lattes CV',      href: p.links.lattes   },
    };

    const links = Object.entries(linksMap).map(([key, l]) =>
      `<a href="${l.href}" class="${l.cls}" title="${l.title}"${key !== 'email' ? ' target="_blank" rel="noopener noreferrer"' : ''}>${ICONS[key]}</a>`
    ).join('');

    return `
      <div class="person-card" data-role="${p.role}">
        <div class="person-avatar">
          <img src="${p.image}" alt="${p.name}" />
        </div>
        <div class="person-info">
          <h3>${p.name}</h3>
          <span class="person-role ${p.role}">${p.roleLabel}</span>
          <div class="person-research-tags">${tags}</div>
          <div class="person-links">${links}</div>
        </div>
      </div>`;
  }).join('');
}

// ── Render Projects ───────────────────────────
function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  grid.innerHTML = PROJECTS.map(p => {
    const tags = p.tags.map(t => `<span class="tag small">${t}</span>`).join('');
    return `
      <div class="project-card" data-cat="${p.category}">
        <div class="project-header" style="background: ${p.gradient}">
          <span class="project-icon">${p.icon}</span>
        </div>
        <div class="project-body">
          <div class="project-tags">${tags}</div>
          <h3>${p.title}</h3>
          <p>${p.description}</p>
          <div class="project-links">
            <a href="${p.links.paper}" class="btn btn-sm">Paper</a>
            <a href="${p.links.github}" class="btn btn-sm ghost">GitHub</a>
          </div>
        </div>
      </div>`;
  }).join('');
}

// ── Render Publications ───────────────────────
function renderPublications() {
  const list = document.getElementById('pubList');
  if (!list) return;

  list.innerHTML = PUBLICATIONS.map(group => {
    const entries = group.entries.map(e => `
      <div class="pub-card" data-keywords="${e.keywords}">
        <div class="pub-venue">${e.venue}</div>
        <h4 class="pub-title">${e.title}</h4>
        <p class="pub-authors">${e.authors}</p>
        <p class="pub-abstract">${e.abstract}</p>
        <div class="pub-links">
          <a href="${e.links.pdf}"${e.links.pdf !== '#' ? ' target="_blank" rel="noopener noreferrer"' : ''} class="btn btn-sm">PDF</a>
          <a href="${e.links.doi}"${e.links.doi !== '#' ? ' target="_blank" rel="noopener noreferrer"' : ''} class="btn btn-sm ghost">DOI</a>
          <a href="${e.links.bibtex}" class="btn btn-sm ghost">BibTeX</a>
        </div>
      </div>`).join('');

    return `
      <div class="pub-year-group">
        <div class="pub-year-label">${group.year}</div>
        <div class="pub-entries">${entries}</div>
      </div>`;
  }).join('');
}

// ── Auto-count lab members ────────────────────
function updateLabMembersCount() {
  const memberCount = document.querySelectorAll('.person-card').length;
  const labMembersCard = Array.from(document.querySelectorAll('.stat-card')).find(card =>
    card.textContent.includes('Lab Members')
  );
  if (labMembersCard) {
    const statNumber = labMembersCard.querySelector('.stat-number');
    if (statNumber) statNumber.dataset.target = memberCount;
  }
}

// ── Animated counters ─────────────────────────
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  let start = 0;
  const duration = 1600;
  el.textContent = '0';
  const step = timestamp => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(ease * target);
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function initCounters() {
  const counters = document.querySelectorAll('.stat-number[data-target]');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    });
  }, { threshold: 0.5 });
  counters.forEach(c => counterObserver.observe(c));
}

// ── Reveal on scroll ──────────────────────────
function initRevealObserver() {
  const revealEls = document.querySelectorAll(
    '.stat-card, .person-card, .project-card, .pub-card, .about-text, .about-stats'
  );
  revealEls.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 60);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  revealEls.forEach(el => observer.observe(el));
}

// ── People & Projects filters ─────────────────
function initFilters() {
  document.getElementById('peopleFilter').addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    document.querySelectorAll('#peopleFilter .filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.person-card').forEach(card => {
      card.classList.toggle('hidden', filter !== 'all' && card.dataset.role !== filter);
    });
  });

  document.getElementById('projectFilter').addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    document.querySelectorAll('#projectFilter .filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.project-card').forEach(card => {
      card.classList.toggle('hidden', filter !== 'all' && card.dataset.cat !== filter);
    });
  });
}

// ── Publications search ───────────────────────
function initPubSearch() {
  document.getElementById('pubSearch').addEventListener('input', function () {
    const q = this.value.toLowerCase().trim();
    document.querySelectorAll('.pub-card').forEach(card => {
      const text = (card.dataset.keywords + ' ' + card.textContent).toLowerCase();
      card.classList.toggle('hidden', q.length > 0 && !text.includes(q));
    });
    document.querySelectorAll('.pub-year-group').forEach(group => {
      const visible = [...group.querySelectorAll('.pub-card')].some(c => !c.classList.contains('hidden'));
      group.style.display = visible ? '' : 'none';
    });
  });
}

// ── Navbar scroll effect ──────────────────────
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  const currentSection = updateActiveNav();
  navbar.classList.toggle('scrolled', window.scrollY > 20);
  navbar.classList.toggle('on-home', currentSection === 'home');
});

// ── Mobile nav toggle ─────────────────────────
const navToggle = document.getElementById('navToggle');
const navMenu = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => { navMenu.classList.toggle('open'); });
navMenu.addEventListener('click', () => { navMenu.classList.remove('open'); });

// ── Active nav link on scroll ─────────────────
const sections = document.querySelectorAll('section[id], footer[id]');
function updateActiveNav() {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
  return current;
}

navbar.classList.toggle('on-home', updateActiveNav() === 'home');

// ── Init ──────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Renderiza seções com dados dos arquivos em data/
  renderPeople();
  renderProjects();
  renderPublications();

  // Atualiza contador de membros após renderizar
  updateLabMembersCount();

  // Inicializa interações
  initFilters();
  initPubSearch();
  initCounters();
  initRevealObserver();
});
