/* ==========================================================================
   Comportamiento de la página
   1. Idioma   2. Proyectos y filtro   3. Tema y menú   4. Portada y menú activo

   Usa los datos de i18n.js (I18N) y projects.js (PROJECTS y FILTERS).
   ========================================================================== */

/* 1. Idioma ---------------------------------------------------------------- */

// Idioma inicial: ?lang=en en la URL > el último que se eligió > español
let lang = new URLSearchParams(location.search).get('lang') || localStorage.getItem('lang');
if (!I18N[lang]) lang = 'es';

// Devuelve el texto de una clave de i18n.js en el idioma actual
function t(key) {
  return I18N[lang][key];
}

// Rellena todos los elementos que tienen data-i18n o data-i18n-aria
function translatePage() {
  document.documentElement.lang = lang;
  document.title = t('meta.title');
  document.querySelector('meta[name="description"]').content = t('meta.description');

  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.innerHTML = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    el.setAttribute('aria-label', t(el.dataset.i18nAria));
  });
  document.querySelectorAll('#lang-toggle [data-lang]').forEach(el => {
    el.classList.toggle('is-active', el.dataset.lang === lang);
  });
}

document.getElementById('lang-toggle').addEventListener('click', () => {
  lang = lang === 'es' ? 'en' : 'es';
  localStorage.setItem('lang', lang);
  translatePage();
  renderFilter();
  renderProjects();
});

/* 2. Proyectos y filtro ---------------------------------------------------- */

const projectsGrid = document.getElementById('projects');
const filterMenu = document.getElementById('filter');
let activeFilter = 'all';

// Parte visual de una tarjeta: capturas de escritorio, de móvil o un boceto
function projectMedia(p) {
  if (p.media === 'desktop') {
    const first = p.images[0];
    const thumbs = p.images.map((img, i) => `
      <button class="thumb" type="button" data-index="${i}" aria-pressed="${i === 0}">
        <img src="${img.thumb || img.src}" alt="" loading="lazy">
        <span class="sr-only">${img.caption[lang]}</span>
      </button>`).join('');

    return `
      <div class="project__media">
        <figure class="window">
          <figcaption class="window__bar">${p.name} — <span class="window__caption">${first.caption[lang]}</span></figcaption>
          <a class="window__view" href="${first.src}" target="_blank" rel="noopener" aria-label="${t('projects.openImage')}">
            <img src="${first.src}" alt="${first.alt[lang]}" width="${first.width}" height="${first.height}" loading="lazy">
          </a>
        </figure>
        <div class="thumbs">${thumbs}</div>
      </div>`;
  }

  if (p.media === 'phone') {
    const phones = p.images.map(img => `
      <figure>
        <img src="${img.src}" alt="${img.alt[lang]}" width="${img.width}" height="${img.height}" loading="lazy">
        ${img.caption ? `<figcaption>${img.caption[lang]}</figcaption>` : ''}
      </figure>`).join('');

    return `<div class="project__media"><div class="phones">${phones}</div></div>`;
  }

  // Sin capturas: boceto genérico, marcado como ilustración
  return `
    <div class="project__media">
      <div class="phones"><svg class="sketch" aria-hidden="true"><use href="#i-sketch"/></svg></div>
      <span class="media-chip">${t('projects.illustrative')}</span>
    </div>`;
}

function projectCard(p) {
  const points = p.points ? `<ul class="project__points">${p.points[lang].map(x => `<li>${x}</li>`).join('')}</ul>` : '';
  const note = p.note ? `<p class="project__note">${p.note[lang]}</p>` : '';
  const demo = p.demo ? `<a class="link" href="${p.demo}" target="_blank" rel="noopener noreferrer">${t('projects.demo')}</a>` : '';

  return `
    <article class="project ${p.featured ? 'project--featured' : ''}" data-id="${p.id}">
      ${projectMedia(p)}
      <div class="project__body">
        <p class="project__kind">${p.kind[lang]}</p>
        <h3 class="project__name">${p.name}</h3>
        <p class="project__desc">${p.description[lang]}</p>
        ${points}
        ${note}
        <ul class="tags">${p.tech.map(x => `<li class="tag">${x}</li>`).join('')}</ul>
        <div class="project__links">
          <a class="link" href="${p.repo}" target="_blank" rel="noopener noreferrer">
            ${t('projects.repo')}<span class="sr-only"> · ${p.name}</span>
            <svg class="icon" aria-hidden="true"><use href="#i-arrow"/></svg>
          </a>
          ${demo}
        </div>
      </div>
    </article>`;
}

// Proyectos que coinciden con un filtro
function projectsFor(filterId) {
  if (filterId === 'all') return PROJECTS;
  return PROJECTS.filter(p => p.filters.includes(filterId));
}

function filterLabel(filterId) {
  if (filterId === 'all') return t('filter.all');
  return FILTERS.find(f => f.id === filterId).label;
}

function renderProjects() {
  const visible = projectsFor(activeFilter);

  if (visible.length > 0) {
    projectsGrid.innerHTML = visible.map(projectCard).join('');
  } else {
    projectsGrid.innerHTML = `<p class="projects__empty">${t('filter.empty').replace('{tech}', filterLabel(activeFilter))}</p>`;
  }

  document.getElementById('filter-current').textContent = filterLabel(activeFilter);
  document.getElementById('filter-count').textContent = `→ ${visible.length} / ${PROJECTS.length}`;
}

// Opciones del desplegable, con el número de proyectos de cada una
function renderFilter() {
  const ids = ['all', ...FILTERS.map(f => f.id)];

  document.getElementById('filter-options').innerHTML = ids.map(id => `
    <li>
      <button type="button" data-filter="${id}" aria-pressed="${id === activeFilter}">
        ${filterLabel(id)} <span>${projectsFor(id).length}</span>
      </button>
    </li>`).join('');
}

// Elegir una opción del filtro
filterMenu.addEventListener('click', event => {
  const option = event.target.closest('[data-filter]');
  if (!option) return;

  activeFilter = option.dataset.filter;
  filterMenu.open = false;
  renderFilter();
  renderProjects();
});

// Cerrar el desplegable al hacer clic fuera o pulsar Escape
document.addEventListener('click', event => {
  if (!filterMenu.contains(event.target)) filterMenu.open = false;
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') filterMenu.open = false;
});

// Miniaturas: al pulsar una, cambia la captura grande del proyecto
projectsGrid.addEventListener('click', event => {
  const thumb = event.target.closest('.thumb');
  if (!thumb) return;

  const card = thumb.closest('.project');
  const project = PROJECTS.find(p => p.id === card.dataset.id);
  const img = project.images[thumb.dataset.index];

  const view = card.querySelector('.window__view');
  view.href = img.src;
  view.querySelector('img').src = img.src;
  view.querySelector('img').alt = img.alt[lang];
  card.querySelector('.window__caption').textContent = img.caption[lang];

  card.querySelectorAll('.thumb').forEach(button => {
    button.setAttribute('aria-pressed', button === thumb);
  });
});

/* 3. Tema y menú ----------------------------------------------------------- */

document.getElementById('theme-toggle').addEventListener('click', () => {
  const root = document.documentElement;
  root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
  localStorage.setItem('theme', root.dataset.theme);
});

// Menú en móvil: se abre con el botón y se cierra al elegir una sección
const header = document.getElementById('header');
const menuToggle = document.getElementById('menu-toggle');

function setMenu(open) {
  header.classList.toggle('is-open', open);
  menuToggle.setAttribute('aria-expanded', open);
}

menuToggle.addEventListener('click', () => setMenu(!header.classList.contains('is-open')));
document.getElementById('nav').addEventListener('click', () => setMenu(false));

/* 4. Portada y menú activo -------------------------------------------------- */

// Medidas reales del nombre, como la etiqueta de un programa de diseño
const heroName = document.getElementById('hero-name');

function showNameSize() {
  heroName.dataset.size = `${heroName.offsetWidth} × ${heroName.offsetHeight}`;
}
showNameSize();
window.addEventListener('resize', showNameSize);
document.fonts.ready.then(showNameSize);

// Marca en el menú la sección que se está viendo
const navLinks = document.querySelectorAll('.nav__link');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(link => {
      link.classList.toggle('is-current', link.getAttribute('href') === '#' + entry.target.id);
    });
  });
}, { rootMargin: '-45% 0px -50% 0px' });

document.querySelectorAll('main section').forEach(section => sectionObserver.observe(section));

/* Arranque ----------------------------------------------------------------- */
translatePage();
renderFilter();
renderProjects();
