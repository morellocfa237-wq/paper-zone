// Cahier : légère inclinaison 3D qui suit la souris (page d'accueil uniquement)
(function () {
  var hero = document.querySelector('.hero');
  var nb = document.querySelector('.nb');
  if (!hero || !nb) return;
  if (!matchMedia('(hover: hover)').matches) return;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  hero.addEventListener('mousemove', function (e) {
    var r = hero.getBoundingClientRect();
    var x = (e.clientX - r.left) / r.width - 0.5;
    var y = (e.clientY - r.top) / r.height - 0.5;
    nb.style.setProperty('--ry', (x * 16).toFixed(2) + 'deg');
    nb.style.setProperty('--rx', (24 - y * 10).toFixed(2) + 'deg');
  });
  hero.addEventListener('mouseleave', function () {
    nb.style.setProperty('--ry', '0deg');
    nb.style.setProperty('--rx', '24deg');
  });
})();

// Bouton "retour en haut" (toutes les pages)
(function () {
  var toTop = document.getElementById('to-top');
  if (!toTop) return;
  window.addEventListener('scroll', function () {
    toTop.classList.toggle('show', window.scrollY > 500);
  });
  toTop.addEventListener('click', function () {
    window.scrollTo({ top: 0 });
  });
})();

// Formulaire de réservation (démonstration : rien n'est envoyé à un serveur)
(function () {
  var form = document.getElementById('reservation-form');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var msg = document.getElementById('form-msg');
    if (msg) msg.textContent = 'Demande enregistrée. Nous te répondons rapidement.';
    this.reset();
  });
})();

// Formulaire espace enseignants (démonstration)
(function () {
  var form = document.getElementById('teacher-form');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var msg = document.getElementById('teacher-msg');
    if (msg) msg.textContent = 'Connexion simulée. Ton espace complet arrive bientôt.';
  });
})();

// Filtres "chips" sur la page Ressources PDF
(function () {
  var filters = document.querySelector('.filters');
  if (!filters) return;
  var cards = document.querySelectorAll('.cards .card');
  filters.addEventListener('click', function (e) {
    var btn = e.target.closest('.chip-btn');
    if (!btn) return;
    filters.querySelectorAll('.chip-btn').forEach(function (b) {
      b.classList.toggle('active', b === btn);
      b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
    });
    var f = btn.dataset.filter;
    cards.forEach(function (card) {
      card.hidden = f !== 'tous' && card.dataset.niveau !== f;
    });
  });
})();
