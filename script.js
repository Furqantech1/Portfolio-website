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
    // const menuIcon = mobileMenuButton.querySelector('i');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            if (window.lucide && typeof lucide.createIcons === 'function') {
                lucide.createIcons(); // Re-render icons
            }
        });

        // Close mobile menu when a link is clicked
        mobileMenu.addEventListener('click', (event) => {
            if (event.target.tagName === 'A') {
                mobileMenu.classList.add('hidden');
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
