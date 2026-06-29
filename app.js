(function() {
  // Guarded GSAP animations
  function initAnimations() {
    if (!window.gsap) return;
    gsap.from('.hero-content', { opacity: 0, y: 40, duration: 1, ease: 'power3.out' });
    gsap.from('.bento', {
      scrollTrigger: {
        trigger: '.bento-container',
        start: 'top 80%'
      },
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 0.8
    });
  }

  // Load GSAP from CDN safely
  var script = document.createElement('script');
  script.src = 'https://unpkg.com/gsap@3/dist/gsap.min.js';
  script.onload = function() {
    var st = document.createElement('script');
    st.src = 'https://unpkg.com/gsap@3/dist/ScrollTrigger.min.js';
    st.onload = initAnimations;
    document.head.appendChild(st);
  };
  script.onerror = function() {
    // No animation fallback
  };
  document.head.appendChild(script);
})();