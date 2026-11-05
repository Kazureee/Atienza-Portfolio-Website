(function () {
  var root = document.documentElement;
  var reduceMotion = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasIO = 'IntersectionObserver' in window;

  /* ---------- Theme toggle (light by default) ---------- */
  var toggle = document.querySelector('.theme-toggle');
  function setThemeLabel() {
    toggle.setAttribute('aria-label', root.dataset.theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  }
  setThemeLabel();
  toggle.addEventListener('click', function () {
    var dark = root.dataset.theme !== 'dark';
    if (dark) root.dataset.theme = 'dark'; else delete root.dataset.theme;
    try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch (e) {}
    setThemeLabel();
  });

  /* ---------- Header: shadow once you scroll ---------- */
  var header = document.querySelector('.site-header');
  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      header.classList.toggle('is-scrolled', window.scrollY > 8);
      ticking = false;
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------- */
  var menuBtn = document.querySelector('.menu-toggle');
  var nav = document.getElementById('site-nav');
  function setMenu(open) {
    menuBtn.setAttribute('aria-expanded', open);
    menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    document.body.classList.toggle('menu-open', open);
  }
  menuBtn.addEventListener('click', function () {
    setMenu(menuBtn.getAttribute('aria-expanded') !== 'true');
  });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

  /* ---------- Highlight the section you're reading ---------- */
  var links = Array.prototype.slice.call(nav.querySelectorAll('a[href^="#"]'));
  if (hasIO) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        links.forEach(function (l) {
          if (l.hash === '#' + en.target.id) l.setAttribute('aria-current', 'true');
          else l.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    links.forEach(function (l) {
      var s = document.getElementById(l.hash.slice(1));
      if (s) spy.observe(s);
    });
    spy.observe(document.getElementById('top')); // back at the top: nothing highlighted
  }

  /* ---------- CV buttons ---------- */
  if (window.RESUME) {
    document.querySelectorAll('[data-resume]').forEach(function (a) {
      a.href = window.RESUME;
      a.hidden = false;
    });
  }

  /* ---------- Copy email ---------- */
  document.querySelectorAll('[data-copy]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var text = btn.getAttribute('data-copy');
      var done = function () {
        btn.textContent = 'Copied';
        setTimeout(function () { btn.textContent = 'Copy'; }, 1800);
      };
      if (navigator.clipboard) navigator.clipboard.writeText(text).then(done, function () {});
    });
  });

  /* ---------- Projects ---------- */
  var list = document.getElementById('project-list');
  var projects = Array.isArray(window.PROJECTS) ? window.PROJECTS.slice() : [];

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function formatDate(d) {
    if (!d) return '';
    var parts = String(d).split('-');
    if (parts.length < 2) return parts[0];
    return new Date(Number(parts[0]), Number(parts[1]) - 1, 1)
      .toLocaleDateString('en', { month: 'short', year: 'numeric' });
  }
  function workflow(steps) {
    if (!steps || !steps.length) return '';
    return '<ol class="mini-flow" aria-label="Workflow steps">' + steps.map(function (s) {
      var str = String(s), i = str.indexOf(':');
      if (i === -1) return '<li><span class="mf-step">' + esc(str) + '</span></li>';
      return '<li><span class="mf-app">' + esc(str.slice(0, i).trim()) + '</span>' +
             '<span class="mf-step">' + esc(str.slice(i + 1).trim()) + '</span></li>';
    }).join('') + '</ol>';
  }
  function card(p) {
    var tags = (p.tools || []).map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('');
    var rows = [['The problem', p.problem], ['What I built', p.solution], ['The result', p.result]]
      .filter(function (r) { return r[1]; })
      .map(function (r) { return '<dt>' + r[0] + '</dt><dd>' + esc(r[1]) + '</dd>'; }).join('');
    return '<article class="project' + (p.featured ? ' featured' : '') + '">' +
      (p.image ? '<img src="' + esc(p.image) + '" alt="' + esc(p.imageAlt || 'Screenshot of ' + p.title) + '" loading="lazy">' : '') +
      '<div class="project-body">' +
        '<div><h3>' + esc(p.title) + '</h3>' +
        ((p.date || p.context) ? '<p class="project-date">' + [formatDate(p.date), p.context].filter(Boolean).join(', ') + '</p>' : '') + '</div>' +
        (p.summary ? '<p class="project-summary">' + esc(p.summary) + '</p>' : '') +
        workflow(p.workflow) +
        (tags ? '<ul class="tags" aria-label="Tools used">' + tags + '</ul>' : '') +
        (rows ? '<details><summary>How it works</summary><dl>' + rows + '</dl></details>' : '') +
        (p.link ? '<a class="project-link" href="' + esc(p.link) + '" target="_blank" rel="noopener">' + esc(p.linkLabel || 'View project') + '</a>' : '') +
      '</div></article>';
  }
  // Featured project first, then the order you listed them in projects.js
  projects = projects.filter(function (p) { return p.featured; })
    .concat(projects.filter(function (p) { return !p.featured; }));
  if (projects.length) {
    list.innerHTML = projects.map(card).join('');
  } else {
    list.classList.add('is-empty');
    list.innerHTML =
      '<div class="empty"><h3>Case studies are on the way</h3>' +
      '<p>I’m documenting my first automation builds now. Want one built for your business in the meantime?</p>' +
      '<a class="btn" href="#contact">Talk about a project</a></div>';
  }

  /* ---------- Gentle reveal as sections scroll into view ---------- */
  var items = document.querySelectorAll('[data-reveal]');
  if (hasIO && !reduceMotion) {
    var ro = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-visible'); ro.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    items.forEach(function (el) { ro.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('is-visible'); });
  }

  document.getElementById('year').textContent = new Date().getFullYear();
  window.__siteReady = true;
})();
