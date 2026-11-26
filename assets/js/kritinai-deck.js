/* KritinAI deck navigation — shared by all decks in this repo.
   Arrow keys / swipe / buttons to move; URL hash (#5) deep-links to a slide;
   links with data-goto="N" jump to slide N (1-based). */
(function () {
  const slides = document.querySelectorAll('.slide');
  const total = slides.length;
  const counter = document.getElementById('counter');
  const progress = document.getElementById('progress');
  let i = 0;

  function show(n, push) {
    slides[i].classList.remove('active');
    i = (n + total) % total;
    slides[i].classList.add('active');
    slides[i].scrollTop = 0;
    if (counter) counter.textContent = (i + 1) + ' / ' + total;
    if (progress) progress.style.width = ((i + 1) / total * 100) + '%';
    if (push !== false) history.replaceState(null, '', '#' + (i + 1));
  }
  window.show = show;
  window.next = () => show(i + 1);
  window.prev = () => show(i - 1);

  document.addEventListener('keydown', e => {
    if (['ArrowRight', 'PageDown', ' '].includes(e.key)) { e.preventDefault(); show(i + 1); }
    if (['ArrowLeft', 'PageUp'].includes(e.key)) { e.preventDefault(); show(i - 1); }
    if (e.key === 'Home') show(0);
    if (e.key === 'End') show(total - 1);
  });

  let tx = 0, ty = 0;
  document.addEventListener('touchstart', e => { tx = e.touches[0].clientX; ty = e.touches[0].clientY; }, { passive: true });
  document.addEventListener('touchend', e => {
    const dx = tx - e.changedTouches[0].clientX;
    const dy = ty - e.changedTouches[0].clientY;
    if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy)) dx > 0 ? show(i + 1) : show(i - 1);
  }, { passive: true });

  document.querySelectorAll('[data-goto]').forEach(a => a.addEventListener('click', e => {
    e.preventDefault(); show(parseInt(a.dataset.goto, 10) - 1);
  }));
  document.querySelectorAll('[data-nav="prev"]').forEach(b => b.addEventListener('click', () => show(i - 1)));
  document.querySelectorAll('[data-nav="next"]').forEach(b => b.addEventListener('click', () => show(i + 1)));

  const start = parseInt((location.hash || '#1').slice(1), 10);
  show(isNaN(start) ? 0 : Math.min(Math.max(start - 1, 0), total - 1), false);
})();
