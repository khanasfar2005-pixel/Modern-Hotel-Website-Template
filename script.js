// script.js - Custom JS for Modern Hotel Website

document.addEventListener('DOMContentLoaded', function () {
  // Scroll Animation
  const sections = document.querySelectorAll('section');
  const revealSections = () => {
    const triggerBottom = window.innerHeight * 0.85;
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < triggerBottom) {
        section.classList.add('visible');
      }
    });
  };
  window.addEventListener('scroll', revealSections);
  revealSections();

  // Smooth Scrolling for Navbar Links
  document.querySelectorAll('.navbar-nav a').forEach(link => {
    link.addEventListener('click', function (e) {
      if (this.hash && document.querySelector(this.hash)) {
        e.preventDefault();
        document.querySelector(this.hash).scrollIntoView({ behavior: 'smooth' });
        // Collapse navbar on mobile after click
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
          new bootstrap.Collapse(navbarCollapse).toggle();
        }
      }
    });
  });

  // Contact Form Validation
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('contactName').value.trim();
      const email = document.getElementById('contactEmail').value.trim();
      const message = document.getElementById('contactMessage').value.trim();
      let valid = true;
      if (!name || !email || !message) valid = false;
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) valid = false;
      if (!valid) {
        alert('Please fill all fields with a valid email.');
        return;
      }
      alert('Thank you for contacting us, ' + name + '! We will get back to you soon.');
      contactForm.reset();
    });
  }
});
