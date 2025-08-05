const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('scale-0');
    });

    // Optional: close when clicking outside
    window.addEventListener('click', function (e) {
      if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
        mobileMenu.classList.add('scale-0');
      }
    });

AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
    window.addEventListener("load", function () {
      document.getElementById("loader").style.opacity = 0;
      setTimeout(() => {
        document.getElementById("loader").style.display = "none";
      }, 500);
    });