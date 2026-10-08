# NeuroFAST · Landing page V4

Landing comercial estática de NeuroFAST. Presenta un prototipo universitario de tecnología médica en investigación; no diagnostica, no captura datos de salud y no sustituye atención profesional.

## Contenido del repositorio

- `index.html`: estructura y contenido accesible de la landing.
- `styles.css`: sistema visual responsive, animaciones y estados reducidos para accesibilidad.
- `script.js`: navegación móvil, demo FAST, flujo de alerta, PDF ficticio, gráfico interactivo, animaciones y función de compartir.
- `assets/images/`: fotografías en JPEG de respaldo y variantes WebP optimizadas para la web.
- `assets/ATTRIBUTION.md`: fuente, autor y verificación de licencia de cada fotografía.
- `.nojekyll`: indica a GitHub Pages que publique el sitio estático sin procesamiento de Jekyll.
- `_headers`: encabezados de seguridad opcionales para Cloudflare Pages; GitHub Pages no interpreta este archivo.

## Uso local

No requiere dependencias ni proceso de build. Puede abrirse `index.html` directamente o servirse desde la raíz:

```powershell
python -m http.server 4173
```

Luego abrir `http://localhost:4173`.

## Publicación mediante GitHub Pages

La publicación oficial usa la rama `main`, carpeta `/ (root)`:

1. Subir los archivos a `main`.
2. En **Settings → Pages → Build and deployment**, elegir **Deploy from a branch**.
3. Seleccionar `main` y `/ (root)`; guardar.
4. Dejar **Custom domain** vacío. Si aparece `neurofast.cl`, eliminarlo y guardar; no crear un archivo `CNAME`.
5. Mantener activada la opción **Enforce HTTPS**.
6. Esperar que finalice el workflow `pages build and deployment`.
7. Verificar [https://sebastroza1.github.io/neurofast-landing/](https://sebastroza1.github.io/neurofast-landing/).

Las rutas de CSS, JavaScript e imágenes son relativas, por lo que funcionan dentro del subdirectorio `/neurofast-landing/`. La URL canónica y las imágenes sociales sí usan la dirección pública absoluta.

### Comprobaciones previas a publicar

```powershell
node --check script.js
git diff --check
git status --short --branch
```

Después de publicar, comprobar que la portada, `styles.css`, `script.js` y las cuatro imágenes respondan con HTTP 200; revisar además la consola del navegador, el menú móvil y las cuatro etapas de la demostración.

## Publicación opcional mediante Cloudflare Pages

Usar **Framework preset: None**, dejar vacío el comando de build y seleccionar `.` como directorio de salida. Cloudflare sí interpreta `_headers`; GitHub Pages lo sirve como un archivo estático sin aplicar sus reglas.

## Fotografías y licencias

Las cuatro imágenes proceden de páginas individuales de Pexels marcadas como **Free to use** y fueron verificadas el 8 de octubre de 2026. La licencia general permite uso comercial, pero prohíbe, entre otros usos, sugerir respaldo de las personas retratadas. Por eso la web identifica las escenas como referenciales y conserva la trazabilidad en `assets/ATTRIBUTION.md`. Conviene volver a comprobar las páginas de origen si las fotografías se reutilizan en otro producto o campaña.

## Evidencia y cautelas

Las cifras de FAST se refieren a una cohorte retrospectiva publicada en 2026 (295 personas con ACV confirmado trasladadas en ambulancia a dos hospitales de Noruega entre junio de 2018 y mayo de 2019), no a resultados del sistema NeuroFAST. El tiempo de 17 frente a 34,5 minutos corresponde al traslado desde salida de la escena hasta llegada al hospital y es una asociación, no una demostración causal. La ventana de 4,5 horas se refiere a trombólisis en personas elegibles con ACV isquémico; la guía contempla ventanas extendidas solo para pacientes seleccionados mediante criterios clínicos y de imagen.

Ante signos de ACV, contactar servicios de emergencia inmediatamente, sin esperar por esta web o una aplicación.
