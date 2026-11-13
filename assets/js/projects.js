/* ==========================================================================
   Proyectos del portafolio
   --------------------------------------------------------------------------
   Para añadir un proyecto, copia uno de los bloques de PROJECTS, cambia los
   datos y guarda. No hay que tocar el HTML ni el CSS. El orden de la lista es
   el orden en que aparecen.

   Campos de cada proyecto:
     id           identificador único (sin espacios)
     name         nombre visible
     featured     true → tarjeta grande a todo el ancho
     kind         tipo de proyecto, en { es, en }
     description  texto en { es, en }
     points       (opcional) puntos destacados, en { es: [], en: [] }
     note         (opcional) aclaración en { es, en }
     tech         tecnologías que se muestran en la tarjeta
     filters      con qué opciones del filtro aparece (ids de FILTERS)
     repo         URL del repositorio
     demo         (opcional) URL de una demo en vivo
     media        'desktop' → capturas de escritorio con miniaturas
                  'phone'   → una o dos capturas verticales de móvil
                  'none'    → sin capturas: se muestra un boceto ilustrativo
     images       capturas, en assets/img/projects/:
                  { src, thumb, width, height, alt: {es,en}, caption: {es,en} }

   En los textos no uses comillas dobles rectas ("); usa « » o “ ”.
   ========================================================================== */

/* Opciones del filtro por tecnología (además de «Todos»).
   Una opción sin proyectos aparece con un 0 hasta que publiques alguno. */
const FILTERS = [
  { id: 'kotlin', label: 'Kotlin' },
  { id: 'python', label: 'Python' },
  { id: 'java',   label: 'Java' },
  { id: 'oracle', label: 'Oracle / PL/SQL' },
  { id: 'php',    label: 'PHP' },
  { id: 'web',    label: 'Web' }
];

const PROJECTS = [
  {
    id: 'my-games-backlog',
    name: 'my-games-backlog',
    featured: true,
    kind: { es: 'App de escritorio · Proyecto personal', en: 'Desktop app · Personal project' },
    description: {
      es: 'App de escritorio para organizar tu colección de videojuegos y tu lista de pendientes. Rellena sola las carátulas, las puntuaciones y las horas de juego con datos de Steam, HowLongToBeat y Metacritic.',
      en: 'Desktop app to organise your game collection and backlog. It fills in cover art, scores and playtimes automatically with data from Steam, HowLongToBeat and Metacritic.'
    },
    points: {
      es: [
        'Vista de tarjetas y de lista, con filtros, orden y búsqueda que se recuerdan entre sesiones.',
        'Una lista por año y un tier list con portadas que se puede guardar como imagen.',
        'Copias de seguridad automáticas, tres temas e interfaz en español e inglés.',
        'Sin cuentas ni telemetría: los datos se quedan en tu ordenador.'
      ],
      en: [
        'Card and list views, with filters, sorting and search remembered between sessions.',
        'One list per year and a tier list with covers that can be saved as an image.',
        'Automatic backups, three themes and an English / Spanish interface.',
        'No accounts or telemetry: your data stays on your computer.'
      ]
    },
    note: {
      es: 'Diseñé y dirigí el proyecto —qué hace, cómo se ve y cómo se comporta— y lo probé y revisé en cada paso. Buena parte del código se escribió con ayuda de agentes de IA a partir de mis instrucciones.',
      en: 'I designed and directed the project — what it does, how it looks and how it behaves — and tested and reviewed it at every step. Much of the code was written with the help of AI coding agents working from my instructions.'
    },
    tech: ['Python', 'PyQt6', 'PyInstaller'],
    filters: ['python'],
    repo: 'https://github.com/madebydani/my-games-backlog',
    media: 'desktop',
    images: [
      {
        src: 'assets/img/projects/my-games-backlog-cards.webp',
        thumb: 'assets/img/projects/my-games-backlog-cards-800.webp',
        width: 1600, height: 871,
        caption: { es: 'Vista de tarjetas', en: 'Card view' },
        alt: { es: 'Ventana principal de la app con la colección de juegos en vista de tarjetas con carátulas.', en: 'Main window of the app showing the game collection as cards with cover art.' }
      },
      {
        src: 'assets/img/projects/my-games-backlog-list.webp',
        thumb: 'assets/img/projects/my-games-backlog-list-800.webp',
        width: 1600, height: 947,
        caption: { es: 'Vista de lista', en: 'List view' },
        alt: { es: 'Vista de lista con miniaturas y detalles de cada juego.', en: 'List view with thumbnails and details for each game.' }
      },
      {
        src: 'assets/img/projects/my-games-backlog-tierlist.webp',
        thumb: 'assets/img/projects/my-games-backlog-tierlist-800.webp',
        width: 1600, height: 870,
        caption: { es: 'Tier list del año', en: 'Yearly tier list' },
        alt: { es: 'Tier list con las portadas de los juegos de un año.', en: 'Tier list with the covers of the games from one year.' }
      },
      {
        src: 'assets/img/projects/my-games-backlog-dialog.webp',
        width: 845, height: 692,
        caption: { es: 'Añadir / editar juego', en: 'Add / edit a game' },
        alt: { es: 'Diálogo para añadir o editar un juego, con los datos autorrellenados.', en: 'Dialog to add or edit a game, with autofilled data.' }
      }
    ]
  },

  {
    id: 'fitness-app',
    name: 'FitnessApp',
    kind: { es: 'App Android · En desarrollo', en: 'Android app · In progress' },
    description: {
      es: 'App de fitness con perfil de usuario editable, seguimiento del peso y cálculo del IMC. Navegación inferior entre secciones y datos guardados en el dispositivo.',
      en: 'Fitness app with an editable user profile, weight tracking and BMI calculation. Bottom navigation between sections, with data stored on the device.'
    },
    note: {
      es: 'La sección de entrenamientos todavía está en construcción.',
      en: 'The training section is still under construction.'
    },
    tech: ['Kotlin', 'Jetpack Compose', 'Material 3', 'Navigation Compose'],
    filters: ['kotlin'],
    repo: 'https://github.com/madebydani/FitnessApp',
    media: 'none'
  },

  {
    id: 'calculadora-imc',
    name: 'CalculadoraIMC',
    kind: { es: 'App Android · Proyecto de clase', en: 'Android app · Class project' },
    description: {
      es: 'Calculadora del Índice de Masa Corporal. El proyecto recoge la evolución de una interfaz Material 3 básica a un diseño propio más cuidado, con paleta personalizada e indicadores animados.',
      en: 'Body Mass Index calculator. The project shows the evolution from a basic Material 3 interface to a more polished custom design, with its own colour palette and animated indicators.'
    },
    tech: ['Kotlin', 'Jetpack Compose', 'Material 3'],
    filters: ['kotlin'],
    repo: 'https://github.com/madebydani/CalculadoraIMC',
    media: 'phone',
    images: [
      {
        src: 'assets/img/projects/calculadora-imc-basic.webp',
        width: 362, height: 783,
        caption: { es: 'Antes', en: 'Before' },
        alt: { es: 'Primera versión de la calculadora con una interfaz Material 3 básica.', en: 'First version of the calculator with a basic Material 3 interface.' }
      },
      {
        src: 'assets/img/projects/calculadora-imc-pro.webp',
        width: 381, height: 807,
        caption: { es: 'Después', en: 'After' },
        alt: { es: 'Versión rediseñada: tema oscuro, selector de peso circular y botón con degradado.', en: 'Redesigned version: dark theme, circular weight selector and a gradient button.' }
      }
    ]
  },

  {
    id: 'dado',
    name: 'Dado',
    kind: { es: 'App Android · Proyecto de aprendizaje', en: 'Android app · Learning project' },
    description: {
      es: 'Simulador de un dado de seis caras: un toque y sale un resultado al azar. Con gráficos propios para cada cara y un diseño que se adapta a cualquier pantalla.',
      en: 'A six-sided dice simulator: one tap and you get a random result. With custom graphics for each face and a layout that adapts to any screen.'
    },
    tech: ['Kotlin', 'XML', 'ConstraintLayout'],
    filters: ['kotlin'],
    repo: 'https://github.com/madebydani/Dado',
    media: 'phone',
    images: [
      {
        src: 'assets/img/projects/dado.webp',
        width: 375, height: 802,
        alt: { es: 'Pantalla de la app con un dado y el botón «Lanzar dado».', en: 'App screen with a dice and the “Lanzar dado” (roll) button.' }
      }
    ]
  }
];
