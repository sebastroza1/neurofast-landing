# NeuroFAST · Landing page V4

Landing comercial estática de NeuroFAST. Presenta un prototipo universitario de tecnología médica en investigación; no diagnostica, no captura datos de salud y no sustituye atención profesional.

## Contenido del repositorio

- `index.html`: estructura y contenido accesible de la landing.
- `styles.css`: sistema visual responsive, animaciones y estados reducidos para accesibilidad.
- `script.js`: navegación móvil, demo interactiva, animaciones al hacer scroll y función de compartir.
- `assets/images/`: fotografías optimizadas para la web.
- `assets/ATTRIBUTION.md`: fuente, autor y verificación de licencia de cada fotografía.
- `_headers`: encabezados de seguridad compatibles con Cloudflare Pages.

## Uso local

No requiere dependencias ni proceso de build. Puede abrirse `index.html` directamente o servirse desde la raíz:

```powershell
python -m http.server 4173
```

Luego abrir `http://localhost:4173`.

## Publicación mediante GitHub y Cloudflare Pages

1. Subir todos los archivos de este repositorio a la rama que se quiera publicar.
2. En Cloudflare Pages, conectar el repositorio de GitHub.
3. Usar **Framework preset: None**.
4. Dejar **Build command** vacío. Si el panel exige un comando, usar `exit 0`, recomendado por Cloudflare para sitios sin build.
5. Usar `.` como **Build output directory** si el panel exige un valor; en interfaces que acepten la raíz, usar `/`.
6. Mantener `Root directory` vacío.

Cloudflare copiará la raíz como sitio estático e interpretará `_headers` durante el despliegue.

## Fotografías y licencias

Las cuatro imágenes proceden de páginas individuales de Pexels marcadas como **Free to use** y fueron verificadas el 8 de octubre de 2026. La licencia general permite uso comercial, pero prohíbe, entre otros usos, sugerir respaldo de las personas retratadas. Por eso la web identifica las escenas como referenciales y conserva la trazabilidad en `assets/ATTRIBUTION.md`.

## Evidencia y cautelas

Las cifras de FAST se refieren a una cohorte retrospectiva publicada en 2026 (295 personas con ACV confirmado), no a resultados del sistema NeuroFAST. El tiempo de 17 frente a 34,5 minutos corresponde al traslado desde salida de la escena hasta llegada al hospital y es una asociación, no una demostración causal. La ventana de 4,5 horas se refiere a trombólisis en personas elegibles con ACV isquémico.

Ante signos de ACV, contactar servicios de emergencia inmediatamente, sin esperar por esta web o una aplicación.
