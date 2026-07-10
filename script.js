// Navigation smooth scrolling and interface interactions
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinksContainer = document.querySelector('.nav-links');
    const sections = document.querySelectorAll('section');

    // 1. Smooth Scrolling for Navigation Links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            // Close mobile menu if open
            if (navLinksContainer && navLinksContainer.classList.contains('active')) {
                toggleMobileMenu();
            }

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 2. Mobile Menu Toggle Logic
    if (mobileMenuToggle && navLinksContainer) {
        mobileMenuToggle.addEventListener('click', function() {
            toggleMobileMenu();
        });
    }

    function toggleMobileMenu() {
        if (!navLinksContainer || !mobileMenuToggle) return;
        const isOpen = navLinksContainer.classList.contains('active');
        navLinksContainer.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
        mobileMenuToggle.setAttribute('aria-expanded', !isOpen);
    }

    // 3. Keyboard Support (Close mobile menu on Escape key)
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navLinksContainer && navLinksContainer.classList.contains('active')) {
            toggleMobileMenu();
        }
    });

    // 4. Highlight Active Navigation Section via Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '-30% 0px -60% 0px',
        threshold: 0
    };

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const currentId = entry.target.getAttribute('id');
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${currentId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            if (section.getAttribute('id')) {
                observer.observe(section);
            }
        });
    }

    // 5. Interaction Micro-animations for Cards
    const hoverElements = document.querySelectorAll('.project-card, .tech-card, .experience-card, .cert-card, .extra-item');
    hoverElements.forEach(card => {
        card.setAttribute('tabindex', '0');
        
        const liftCard = () => {
            card.style.transform = 'translate(4px, 4px)';
            card.style.boxShadow = 'none';
        };
        
        const resetCard = () => {
            card.style.transform = 'none';
            card.style.boxShadow = 'var(--shadow-1)';
        };

        card.addEventListener('mouseenter', liftCard);
        card.addEventListener('mouseleave', resetCard);
        card.addEventListener('focusin', liftCard);
        card.addEventListener('focusout', resetCard);
    });

    // 6. Interaction Micro-animations for Buttons
    const buttons = document.querySelectorAll('.btn, .project-btn, .contact-link');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translate(2px, 2px)';
        });
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'none';
        });
    });
});