(() => {
  const root = document.documentElement;
  let saved;
  try { saved = localStorage.getItem('xinran-theme'); } catch (_) { /* Storage is optional. */ }
  const preference = window.matchMedia('(prefers-color-scheme: dark)');
  const apply = (dark) => {
    root.dataset.theme = dark ? 'dark' : 'light';
    const button = document.querySelector('.theme-toggle');
    if (button) {
      button.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} theme`);
      button.setAttribute('aria-pressed', String(dark));
    }
  };
  apply(saved === 'dark' || (saved !== 'light' && preference.matches));
  document.addEventListener('DOMContentLoaded', () => {
    apply(root.dataset.theme === 'dark');
    document.querySelector('.theme-toggle')?.addEventListener('click', () => {
      const dark = root.dataset.theme !== 'dark';
      apply(dark);
      saved = dark ? 'dark' : 'light';
      try { localStorage.setItem('xinran-theme', saved); } catch (_) { /* Keep the in-memory preference. */ }
    });
  });
  preference.addEventListener('change', (event) => {
    if (saved !== 'light' && saved !== 'dark') apply(event.matches);
  });
})();
