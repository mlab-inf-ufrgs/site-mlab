/* =============================================
   MLAB — Main JS
   ============================================= */

// ── Auto-count lab members ───────────────────
function updateLabMembersCount() {
  const memberCount = document.querySelectorAll('.person-card').length;
  const labMembersCard = Array.from(document.querySelectorAll('.stat-card')).find(card => 
    card.textContent.includes('Lab Members')
  );
  if (labMembersCard) {
    const statNumber = labMembersCard.querySelector('.stat-number');
    if (statNumber) {
      statNumber.dataset.target = memberCount;
      // Trigger counter animation
      animateCounter(statNumber);
    }
  }
}

// Counter animation function
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

// Run on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', updateLabMembersCount);
} else {
  updateLabMembersCount();
}

// ── Navbar scroll effect ─────────────────────
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  const currentSection = updateActiveNav();
  navbar.classList.toggle('scrolled', window.scrollY > 20);
  navbar.classList.toggle('on-home', currentSection === 'home');
});

// ── Mobile nav toggle ────────────────────────
const navToggle = document.getElementById('navToggle');
const navMenu = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});
navMenu.addEventListener('click', () => {
  navMenu.classList.remove('open');
});

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

// ── Reveal on scroll ─────────────────────────
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

// ── Animated counters ─────────────────────────
const counters = document.querySelectorAll('.stat-number[data-target]');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = parseInt(el.dataset.target, 10);
    let start = 0;
    const duration = 1600;
    const step = timestamp => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(ease * target);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
    counterObserver.unobserve(el);
  });
}, { threshold: 0.5 });
counters.forEach(c => counterObserver.observe(c));

// ── People filter ─────────────────────────────
document.getElementById('peopleFilter').addEventListener('click', e => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;
  document.querySelectorAll('#peopleFilter .filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const filter = btn.dataset.filter;
  document.querySelectorAll('.person-card').forEach(card => {
    const show = filter === 'all' || card.dataset.role === filter;
    card.classList.toggle('hidden', !show);
  });
});

// ── Projects filter ───────────────────────────
document.getElementById('projectFilter').addEventListener('click', e => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;
  document.querySelectorAll('#projectFilter .filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const filter = btn.dataset.filter;
  document.querySelectorAll('.project-card').forEach(card => {
    const show = filter === 'all' || card.dataset.cat === filter;
    card.classList.toggle('hidden', !show);
  });
});

// ── Publications search ───────────────────────
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

// ── Canvas Particles ──────────────────────────
(function initParticles() {
  const canvas = document.getElementById('particles');
  const ctx = canvas.getContext('2d');
  let W, H, particles, mouse = { x: -999, y: -999 };

  function resize() {
    W = canvas.width = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function random(min, max) { return Math.random() * (max - min) + min; }

  function createParticles() {
    const count = Math.floor((W * H) / 7500);
    particles = Array.from({ length: count }, () => ({
      x: random(0, W),
      y: random(0, H),
      r: random(1.5, 3.5),
      vx: random(-0.35, 0.35),
      vy: random(-0.35, 0.35),
      alpha: random(0.4, 0.95),
      pulse: random(0, Math.PI * 2),
    }));
  }

  const COLORS = ['#6366f1', '#4f46e5', '#0284c7', '#8b5cf6', '#3b82f6'];

  function draw() {
    ctx.clearRect(0, 0, W, H);

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.pulse += 0.025;

      if (p.x < 0) p.x = W;
      if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H;
      if (p.y > H) p.y = 0;

      // Mouse repulsion
      const dx = p.x - mouse.x, dy = p.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        const force = (120 - dist) / 120;
        p.x += dx * force * 0.05;
        p.y += dy * force * 0.05;
      }

      // Stronger opacity for high visibility on light theme
      const alpha = p.alpha * (0.45 + 0.35 * Math.sin(p.pulse));
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = COLORS[Math.floor(p.alpha * COLORS.length)] + Math.round(alpha * 255).toString(16).padStart(2, '0');
      ctx.fill();
    });

    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i], b = particles[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 120) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(79,70,229,${(1 - d / 120) * 0.28})`;
          ctx.lineWidth = 1.0;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }

  canvas.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });
  canvas.addEventListener('mouseleave', () => { mouse.x = -999; mouse.y = -999; });

  window.addEventListener('resize', () => { resize(); createParticles(); });

  resize();
  createParticles();
  draw();
})();
