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

// ===================================
//      COMMAND PALETTE
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    const paletteOverlay = document.getElementById('command-palette-overlay');
    const input = document.getElementById('command-input');
    const list = document.getElementById('command-list');

    const commands = [
        { name: 'Go to About', action: () => document.getElementById('about').scrollIntoView({ behavior: 'smooth' }), icon: 'user' },
        { name: 'Go to Projects', action: () => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' }), icon: 'folder-kanban' },
        { name: 'Go to Skills', action: () => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' }), icon: 'code' },
        { name: 'Go to Experience', action: () => document.getElementById('experience').scrollIntoView({ behavior: 'smooth' }), icon: 'briefcase' },
        { name: 'Go to Contact', action: () => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }), icon: 'mail' },
        { name: 'View Resume', action: () => window.open('/resume.pdf', '_blank'), icon: 'download' },
        { name: 'Toggle Theme', action: () => document.getElementById('theme-toggle').click(), icon: 'sun' }
    ];

    function renderCommands(filter = '') {
        list.innerHTML = '';
        const filteredCommands = commands.filter(cmd => cmd.name.toLowerCase().includes(filter.toLowerCase()));

        filteredCommands.forEach(cmd => {
            const item = document.createElement('li');
            item.className = 'command-item text-white';
            item.innerHTML = `<i data-lucide="${cmd.icon}"></i> ${cmd.name}`;
            item.onclick = () => {
                cmd.action();
                closePalette();
            };
            list.appendChild(item);
        });
        if (window.lucide) lucide.createIcons();
    }

    function openPalette() {
        paletteOverlay.classList.remove('hidden');
        input.focus();
        renderCommands();
    }

    function closePalette() {
        paletteOverlay.classList.add('hidden');
        input.value = '';
    }

    // Keyboard shortcut to open (Ctrl+K or Cmd+K)
    window.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            openPalette();
        }
        if (e.key === 'Escape' && !paletteOverlay.classList.contains('hidden')) {
            closePalette();
        }
    });

    // Close when clicking overlay
    paletteOverlay.addEventListener('click', (e) => {
        if (e.target === paletteOverlay) {
            closePalette();
        }
    });

    // Filter list on input
    input.addEventListener('input', () => renderCommands(input.value));
});




