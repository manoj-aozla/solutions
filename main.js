// Mobile nav toggle
var toggle = document.getElementById('navToggle');
var mobileMenu = document.getElementById('navMobile');
if (toggle && mobileMenu) {
  toggle.addEventListener('click', function() {
    mobileMenu.classList.toggle('open');
  });
  mobileMenu.querySelectorAll('a').forEach(function(a) {
    a.addEventListener('click', function() {
      mobileMenu.classList.remove('open');
    });
  });
}

// Intersection Observer for fade-in on scroll
var observerOptions = { threshold: 0.15, rootMargin: '0px 0px -40px 0px' };
var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.value-card, .focus-item, .service-block, .industry-block, .industry-pill').forEach(function(el) {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s cubic-bezier(0.25,0.46,0.45,0.94), transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94)';
  observer.observe(el);
});

// Transform Now — desktop expand / mobile jump
(function() {
  var cards = document.querySelectorAll('.tn-card');
  if (!cards.length) return;
  cards.forEach(function(card) {
    var head = card.querySelector('.tn-head');
    var target = card.getAttribute('data-target');
    if (!head) return;
    head.addEventListener('click', function() {
      // Mobile: jump straight to the matching use-cases section
      if (window.matchMedia('(max-width: 768px)').matches) {
        if (target) window.location.href = target;
        return;
      }
      // Desktop: toggle this card; close others for a clean accordion feel
      var isOpen = card.classList.contains('open');
      cards.forEach(function(c) {
        c.classList.remove('open');
        var h = c.querySelector('.tn-head');
        if (h) h.setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        card.classList.add('open');
        head.setAttribute('aria-expanded', 'true');
      }
    });
  });
})();
