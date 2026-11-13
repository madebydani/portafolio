/* ==========================================================================
   Textos de la interfaz en español (es) e inglés (en)
   --------------------------------------------------------------------------
   En index.html cada elemento apunta a su clave:
     data-i18n="clave"        → sustituye el contenido del elemento
     data-i18n-aria="clave"   → sustituye su aria-label (lectores de pantalla)
   El texto en español escrito en index.html es solo la versión inicial (para
   buscadores y navegadores sin JavaScript): si cambias un texto en español,
   cámbialo aquí y también en el HTML.
   Los textos de cada proyecto están en projects.js.
   ========================================================================== */
const I18N = {
  es: {
    'meta.title': 'Daniel Chorro · Desarrollador multiplataforma y diseñador gráfico',
    'meta.description': 'Portafolio de Daniel Chorro: desarrollador de aplicaciones multiplataforma en formación con base de diseño gráfico. Apps de escritorio, Android y web.',

    'a11y.skip': 'Saltar al contenido',
    'a11y.home': 'Daniel Chorro, ir al inicio',
    'a11y.nav': 'Secciones',
    'a11y.lang': 'Cambiar idioma a inglés',
    'a11y.theme': 'Cambiar entre tema claro y oscuro',
    'a11y.menu': 'Abrir o cerrar el menú',

    'nav.about': 'Sobre mí',
    'nav.projects': 'Proyectos',
    'nav.stack': 'Stack',
    'nav.education': 'Formación',
    'nav.contact': 'Contacto',

    'hero.eyebrow': 'Portafolio — Desarrollo y diseño',
    'hero.hello': 'Hola, soy',
    'hero.role': 'Desarrollador multiplataforma y diseñador gráfico',
    'hero.lede': 'Estudio Desarrollo de Aplicaciones Multiplataforma y vengo del diseño gráfico. Construyo apps de escritorio, Android y web cuidando tanto <strong>cómo funcionan</strong> como <strong>cómo se ven</strong>.',

    'projects.title': 'Lo que he construido.',
    'projects.intro': 'Proyectos propios y de clase. El código de todos está publicado en GitHub.',
    'filter.prompt': 'ls proyectos --tech',
    'filter.label': 'Filtrar por tecnología:',
    'filter.all': 'Todos',
    'filter.empty': 'Todavía no hay proyectos publicados con {tech}.',

    'about.label': '// sobre mí',
    'about.title': 'Me gusta construir cosas que se pueden usar.',
    'about.p1': 'Lo que más disfruto de programar es la parte de construir: coger una idea, darle forma y llegar a algo que funciona.',
    'about.p2': 'Antes de programar estudié Diseño Gráfico, y se nota en cómo trabajo. Me importa que una app resuelva bien el problema, pero también la jerarquía, el espaciado y los pequeños detalles de la interfaz. Por eso me gusta llevar un proyecto de principio a fin: desde el primer boceto hasta verlo funcionando en un móvil, en el escritorio o en el navegador.',
    'about.p3': 'Por mi cuenta creo herramientas propias para resolver problemas que me encuentro en el día a día con el ordenador. También estoy explorando los agentes de IA, que veo como un aliado más del desarrollador: me ahorran tiempo en las tareas repetitivas y me dejan dedicar más energía a lo que de verdad importa del proyecto.',
    'about.p4': 'Ahora mismo estoy terminando de formarme y ganando experiencia con proyectos reales.',
    'areas.mobile.t': 'Apps móviles',
    'areas.mobile.d': 'Aplicaciones Android nativas, desde la interfaz hasta la conexión con los datos.',
    'areas.web.t': 'Web',
    'areas.web.d': 'Interfaces modernas y responsivas, y los servicios que les dan vida por detrás.',
    'areas.backend.t': 'Escritorio, backend y datos',
    'areas.backend.d': 'Herramientas de escritorio, lógica de negocio, bases de datos y módulos a medida para Odoo.',
    'areas.design.t': 'Diseño gráfico',
    'areas.design.d': 'Composición, identidad visual y diseño digital con las herramientas de Adobe.',

    'projects.label': '// proyectos',
    'projects.more': '¿Quieres ver el resto?',
    'projects.moreLink': 'Todos mis repositorios en GitHub',
    'projects.repo': 'Ver repositorio',
    'projects.demo': 'Ver demo',
    'projects.openImage': 'Abrir la captura a tamaño completo',
    'projects.illustrative': 'Ilustración · no es una captura',

    'stack.label': '// stack',
    'stack.title': 'Con qué trabajo.',
    'stack.intro': 'Tecnologías y herramientas que uso en clase y en mis proyectos. Sin barras de porcentaje: lo que sé hacer se ve mejor en los proyectos.',
    'stack.mobile.t': 'Móvil',
    'stack.mobile.d': 'Android nativo',
    'stack.front.t': 'Frontend',
    'stack.front.d': 'Interfaces web',
    'stack.back.t': 'Backend y escritorio',
    'stack.back.d': 'Lógica, servicios y apps de escritorio',
    'stack.data.t': 'Datos y ERP',
    'stack.data.d': 'Bases de datos y módulos a medida',
    'stack.tools.t': 'Herramientas',
    'stack.tools.d': 'El día a día',
    'stack.design.t': 'Diseño',
    'stack.design.d': 'Gráfico, editorial y vídeo',

    'edu.label': '// formación',
    'edu.title': 'Sistemas, diseño y, ahora, desarrollo.',
    'edu.cfgs': 'Ciclo Formativo de Grado Superior',
    'edu.cfgm': 'Ciclo Formativo de Grado Medio',
    'edu.current': 'En curso',
    'edu.dam.when': '2025 — Actualidad',
    'edu.dam.t': 'Desarrollo de Aplicaciones Multiplataforma',
    'edu.dam.d': 'Programación, bases de datos, acceso a datos, desarrollo de interfaces y sistemas informáticos: entender un proyecto de forma completa, desde la idea y el diseño de la interfaz hasta la lógica, los datos y el despliegue.',
    'edu.design.t': 'Diseño Gráfico y Gestión de Empresas',
    'edu.design.d': 'Diseño gráfico, tratamiento y composición de imágenes, herramientas de diseño digital y fundamentos de gestión y organización empresarial.',
    'edu.smr.t': 'Sistemas Microinformáticos y Redes',
    'edu.smr.d': 'Montaje y mantenimiento de equipos, instalación y configuración de sistemas operativos, redes locales, servicios en red y soporte técnico.',

    'contact.label': '// contacto',
    'contact.title': '¿Hablamos?',
    'contact.text': 'Estoy abierto a oportunidades para seguir aprendiendo y ganar experiencia en proyectos reales. Si crees que puedo encajar en tu equipo o quieres comentar alguno de mis proyectos, escríbeme.',

    'footer.built': 'HTML, CSS y JavaScript. Sin frameworks ni rastreadores.',
    'footer.top': 'Volver arriba ↑'
  },

  en: {
    'meta.title': 'Daniel Chorro · Cross-platform developer and graphic designer',
    'meta.description': 'Portfolio of Daniel Chorro: cross-platform app developer in training with a graphic design background. Desktop, Android and web apps.',

    'a11y.skip': 'Skip to content',
    'a11y.home': 'Daniel Chorro, go to the top',
    'a11y.nav': 'Sections',
    'a11y.lang': 'Switch language to Spanish',
    'a11y.theme': 'Switch between light and dark theme',
    'a11y.menu': 'Open or close the menu',

    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.stack': 'Stack',
    'nav.education': 'Education',
    'nav.contact': 'Contact',

    'hero.eyebrow': 'Portfolio — Development and design',
    'hero.hello': 'Hi, I’m',
    'hero.role': 'Cross-platform developer and graphic designer',
    'hero.lede': 'I study Cross-Platform Application Development and I come from graphic design. I build desktop, Android and web apps, caring as much about <strong>how they work</strong> as <strong>how they look</strong>.',

    'projects.title': 'What I’ve built.',
    'projects.intro': 'Personal and class projects. The code for all of them is on GitHub.',
    'filter.prompt': 'ls projects --tech',
    'filter.label': 'Filter by technology:',
    'filter.all': 'All',
    'filter.empty': 'No published projects with {tech} yet.',

    'about.label': '// about',
    'about.title': 'I like building things people can actually use.',
    'about.p1': 'What I enjoy most about programming is the building part: taking an idea, giving it shape and ending up with something that works.',
    'about.p2': 'Before programming I studied Graphic Design, and it shows in how I work. I care that an app solves the problem well, but also about hierarchy, spacing and the small details of the interface. That’s why I like taking a project from start to finish: from the first sketch to seeing it run on a phone, on the desktop or in the browser.',
    'about.p3': 'In my own time I build tools to solve problems I run into day to day on my computer. I’m also exploring AI agents, which I see as one more ally for a developer: they save me time on repetitive tasks and let me put more energy into what really matters in the project.',
    'about.p4': 'Right now I’m finishing my studies and gaining experience with real projects.',
    'areas.mobile.t': 'Mobile apps',
    'areas.mobile.d': 'Native Android apps, from the interface to the data layer.',
    'areas.web.t': 'Web',
    'areas.web.d': 'Modern, responsive interfaces and the services that bring them to life.',
    'areas.backend.t': 'Desktop, backend and data',
    'areas.backend.d': 'Desktop tools, business logic, databases and custom modules for Odoo.',
    'areas.design.t': 'Graphic design',
    'areas.design.d': 'Composition, visual identity and digital design with Adobe tools.',

    'projects.label': '// projects',
    'projects.more': 'Want to see the rest?',
    'projects.moreLink': 'All my repositories on GitHub',
    'projects.repo': 'View repository',
    'projects.demo': 'View demo',
    'projects.openImage': 'Open the screenshot at full size',
    'projects.illustrative': 'Illustration · not a screenshot',

    'stack.label': '// stack',
    'stack.title': 'What I work with.',
    'stack.intro': 'Technologies and tools I use in class and in my own projects. No percentage bars: what I can do is better seen in the projects.',
    'stack.mobile.t': 'Mobile',
    'stack.mobile.d': 'Native Android',
    'stack.front.t': 'Frontend',
    'stack.front.d': 'Web interfaces',
    'stack.back.t': 'Backend and desktop',
    'stack.back.d': 'Logic, services and desktop apps',
    'stack.data.t': 'Data and ERP',
    'stack.data.d': 'Databases and custom modules',
    'stack.tools.t': 'Tools',
    'stack.tools.d': 'Day to day',
    'stack.design.t': 'Design',
    'stack.design.d': 'Graphic, editorial and video',

    'edu.label': '// education',
    'edu.title': 'Systems, design and, now, development.',
    'edu.cfgs': 'Higher Vocational Training (CFGS)',
    'edu.cfgm': 'Intermediate Vocational Training (CFGM)',
    'edu.current': 'In progress',
    'edu.dam.when': '2025 — Present',
    'edu.dam.t': 'Cross-Platform Application Development',
    'edu.dam.d': 'Programming, databases, data access, interface development and computer systems: understanding a project as a whole, from the idea and the interface design to the logic, the data and the deployment.',
    'edu.design.t': 'Graphic Design and Business Management',
    'edu.design.d': 'Graphic design, image editing and composition, digital design tools and the fundamentals of business management and organisation.',
    'edu.smr.t': 'Microcomputer Systems and Networks',
    'edu.smr.d': 'Hardware assembly and maintenance, operating system installation and configuration, local networks, network services and technical support.',

    'contact.label': '// contact',
    'contact.title': 'Let’s talk.',
    'contact.text': 'I’m open to opportunities to keep learning and gain experience on real projects. If you think I could fit in your team, or you’d like to talk about any of my projects, drop me a line.',

    'footer.built': 'HTML, CSS and JavaScript. No frameworks, no trackers.',
    'footer.top': 'Back to top ↑'
  }
};
