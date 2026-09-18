// Loads this design system into the template. In a consuming project, point
// base at the bound DS folder relative to this file (e.g. '_ds/<folder>' at
// the project root, '../_ds/<folder>' one level down) — one line to edit.
(() => {
  const base = '_ds/aleksandr-me-enn-i-cv-1a925d40-0248-42e2-b1d3-b169fd3a664a';
  for (const p of ["styles.css"]) {
    const l = document.createElement('link');
    l.rel = 'stylesheet'; l.href = base + '/' + p;
    document.head.appendChild(l);
  }
  const s = document.createElement('script');
  s.src = base + '/_ds_bundle.js';
  s.onerror = () => console.error('ds-base.js: failed to load ' + s.src + ' — if this is a consuming project, point the base line in ds-base.js at the bound _ds/<folder> tree relative to this file.');
  document.head.appendChild(s);

  // Keep the ambient video above the page background while preserving the
  // original visual layering: video -> shade -> content.
  const ambientStyle = document.createElement('style');
  ambientStyle.textContent = `
    [data-m="ambient"] { z-index: 0 !important; }
    [data-m="shade"] { z-index: 1 !important; }
    [data-m="page"] { z-index: 2 !important; }
  `;
  document.head.appendChild(ambientStyle);
})();
