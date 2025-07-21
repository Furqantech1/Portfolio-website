// =============================
// JAVASCRIPT (from index.html)
// =============================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    if (window.lucide && typeof lucide.createIcons === 'function') {
        lucide.createIcons();
    }

    // --- Mobile Menu Toggle ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            // Toggle the 'menu-open' class for animation
            mobileMenu.classList.toggle('menu-open');
            const isOpen = mobileMenu.classList.contains('menu-open');

            // Update the icon based on the menu's state
            if (isOpen) {
                mobileMenuButton.innerHTML = '<i data-lucide="x" class="h-6 w-6"></i>';
            } else {
                mobileMenuButton.innerHTML = '<i data-lucide="menu" class="h-6 w-6"></i>';
            }
            lucide.createIcons();
        });

        // Close mobile menu when a link is clicked
        mobileMenu.addEventListener('click', (event) => {
            if (event.target.tagName === 'A') {
                // Close the menu by removing the class
                mobileMenu.classList.remove('menu-open');
                // Reset the icon to the 'menu' hamburger
                mobileMenuButton.innerHTML = '<i data-lucide="menu" class="h-6 w-6"></i>';
                lucide.createIcons();
            }
        });
    }

    // --- Sticky Header ---
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            header.classList.add('backdrop-blur', 'bg-slate-900/80');
        } else {
            header.classList.remove('backdrop-blur', 'bg-slate-900/80');
        }
    });

    // --- Scroll to Top Button ---
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.remove('hidden');
        } else {
            scrollToTopBtn.classList.add('hidden');
        }
    });
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // --- Scroll-triggered Animations ---
    const revealElements = document.querySelectorAll('.reveal');
    function revealOnScroll() {
        const windowHeight = window.innerHeight;
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) {
                el.classList.add('visible');
            }
        });
    }
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    // --- Smooth Scroll for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href').slice(1);
            const target = document.getElementById(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // --- Theme Toggle (Dark/Light) ---
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;
    if (themeToggle && themeIcon) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('light-mode');
            if (body.classList.contains('light-mode')) {
                themeIcon.setAttribute('data-lucide', 'sun');
            } else {
                themeIcon.setAttribute('data-lucide', 'moon');
            }
            if (window.lucide && typeof lucide.createIcons === 'function') {
                lucide.createIcons();
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const success = document.getElementById("form-success");

  if (form && success) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      fetch(form.action, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: new FormData(form),
      })
        .then((res) => {
          if (res.ok) {
            form.reset();
            success.classList.remove("hidden");
            setTimeout(() => success.classList.add("hidden"), 4000);
          } else {
            alert("❌ Submission failed. Try again.");
          }
        })
        .catch((error) => {
          console.error("Form submission error:", error);
          alert("❌ Network error. Make sure the form action URL is correct.");
        });
    });
  }
});


