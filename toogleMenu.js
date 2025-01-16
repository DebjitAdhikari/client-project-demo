const indicators = document.querySelectorAll('.indicators button');
indicators.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      currentIndex = i;
      showSlide(currentIndex);
    });
  });
  function toggleMenu() {
    const mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.classList.toggle("hidden");
  }