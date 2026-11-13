# Portafolio · Daniel Chorro

Portafolio personal de Daniel Chorro. HTML, CSS y JavaScript sin dependencias ni proceso de build; se publica tal cual en GitHub Pages.

**Web:** https://madebydani.github.io/portafolio/

## Estructura

```
index.html              Estructura y texto inicial (español)
assets/css/styles.css   Estilos; colores y tipografías como variables al principio
assets/js/projects.js   Datos de los proyectos
assets/js/i18n.js       Textos de la interfaz en español e inglés
assets/js/main.js       Idioma, tema, menú, tarjetas de proyecto y animaciones
assets/img/             Favicon, imagen para compartir y capturas (projects/)
assets/fonts/           Tipografías alojadas en local (licencia SIL OFL)
```

## Verla en local

Abre `index.html` directamente en el navegador o, mejor, sirve la carpeta:

```bash
python -m http.server 4173
```

## Mantenimiento

- **Añadir una opción al filtro:** añádela a `FILTERS` en `projects.js` y pon su `id` en el campo `filters` de los proyectos que correspondan.
- **Añadir un proyecto:** copia un bloque de `assets/js/projects.js` y cambia sus datos (los campos están explicados al principio del archivo). Las capturas van en `assets/img/projects/`, a ser posible en `.webp`.
- **Cambiar un texto:** edítalo en `assets/js/i18n.js` (`es` y `en`). Si es español, cámbialo también en `index.html`, que es la versión que ven los buscadores y los navegadores sin JavaScript.
- **Cambiar colores o tipografías:** variables de `:root` (tema oscuro) y `:root[data-theme="light"]` (tema claro) en `styles.css`.
- **Enlazar en inglés:** añade `?lang=en` a la URL.

Todas las rutas son relativas, así que la web funciona igual en `/portafolio/` que en cualquier otra ruta.

## Tipografías

[Bricolage Grotesque](https://github.com/ateliertriay/bricolage), [Instrument Sans](https://github.com/Instrument/instrument-sans) y [JetBrains Mono](https://github.com/JetBrains/JetBrainsMono), las tres bajo licencia SIL Open Font License 1.1.
