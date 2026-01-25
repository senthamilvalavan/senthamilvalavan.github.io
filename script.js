// ============================================
// PREMIUM PORTFOLIO ANIMATIONS
// Smooth, performant, designer-quality
// ============================================

// Smooth scroll with custom easing
const smoothScroll = (target, duration = 1000) => {
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    // Custom easing function (ease-in-out-cubic)
    const easeInOutCubic = (t) => {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    };

    const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = easeInOutCubic(progress);

        window.scrollTo(0, startPosition + distance * ease);

        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    };

    requestAnimationFrame(animation);
};

// Enhanced smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            smoothScroll(target, 1200);
        }
    });
});

// ============================================
// ADVANCED INTERSECTION OBSERVER
// Staggered, smooth animations
// ============================================

const createObserver = (callback, options = {}) => {
    const defaultOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px'
    };
    return new IntersectionObserver(callback, { ...defaultOptions, ...options });
};

// Staggered fade-in animation with delay
const animateElements = (entries, observer) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || 0;

            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.classList.add('animated');
            }, delay);

            observer.unobserve(entry.target);
        }
    });
};

const observer = createObserver(animateElements);

// Initialize scroll animations
const initScrollAnimations = () => {
    // Section headers
    const sectionHeaders = document.querySelectorAll('.section-header');
    sectionHeaders.forEach(header => {
        header.style.opacity = '0';
        header.style.transform = 'translateY(40px)';
        header.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
        observer.observe(header);
    });

    // About paragraphs with stagger
    const aboutTexts = document.querySelectorAll('.about-text');
    aboutTexts.forEach((text, index) => {
        text.style.opacity = '0';
        text.style.transform = 'translateY(30px)';
        text.style.transition = 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)';
        text.dataset.delay = index * 120;
        observer.observe(text);
    });

    // Skill cards with stagger
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(40px)';
        card.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
        card.dataset.delay = index * 100;
        observer.observe(card);
    });

    // Project cards with stagger
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)';
        card.dataset.delay = index * 200;
        observer.observe(card);
    });

    // Education card
    const educationCard = document.querySelector('.education-card');
    if (educationCard) {
        educationCard.style.opacity = '0';
        educationCard.style.transform = 'translateY(40px)';
        educationCard.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
        observer.observe(educationCard);
    }

    // Contact elements
    const contactText = document.querySelector('.contact-text');
    if (contactText) {
        contactText.style.opacity = '0';
        contactText.style.transform = 'translateY(30px)';
        contactText.style.transition = 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)';
        observer.observe(contactText);
    }

    const contactLinks = document.querySelectorAll('.contact-link');
    contactLinks.forEach((link, index) => {
        link.style.opacity = '0';
        link.style.transform = 'translateY(30px)';
        link.style.transition = 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)';
        link.dataset.delay = index * 100;
        observer.observe(link);
    });
};

// ============================================
// PREMIUM NAVBAR ANIMATION
// Smooth hide/show on scroll
// ============================================

let lastScroll = 0;
let isScrolling = false;
const nav = document.querySelector('.nav');

const handleNavScroll = () => {
    if (!isScrolling) {
        window.requestAnimationFrame(() => {
            const currentScroll = window.pageYOffset;

            if (currentScroll <= 100) {
                nav.style.background = 'rgba(10, 10, 10, 0.7)';
                nav.style.transform = 'translateY(0)';
            } else if (currentScroll > lastScroll && currentScroll > 200) {
                // Scrolling down - hide navbar
                nav.style.transform = 'translateY(-100%)';
            } else {
                // Scrolling up - show navbar
                nav.style.transform = 'translateY(0)';
                nav.style.background = 'rgba(10, 10, 10, 0.98)';
                nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
            }

            lastScroll = currentScroll;
            isScrolling = false;
        });

        isScrolling = true;
    }
};

window.addEventListener('scroll', handleNavScroll, { passive: true });

// ============================================
// PREMIUM PARALLAX EFFECT
// Smooth, optimized hero parallax
// ============================================

let ticking = false;
const hero = document.querySelector('.hero-content');

const parallaxEffect = () => {
    const scrolled = window.pageYOffset;
    const heroHeight = document.querySelector('.hero').offsetHeight;

    if (scrolled < heroHeight) {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                // Subtle parallax
                hero.style.transform = `translateY(${scrolled * 0.3}px)`;
                // Smooth fade out
                hero.style.opacity = Math.max(1 - (scrolled / heroHeight) * 1.2, 0);
                ticking = false;
            });

            ticking = true;
        }
    }
};

window.addEventListener('scroll', parallaxEffect, { passive: true });

// ============================================
// PREMIUM PROJECT CARD INTERACTIONS
// Smooth 3D tilt with optimized performance
// ============================================

const initProjectCardEffects = () => {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        let isHovering = false;

        card.addEventListener('mouseenter', () => {
            isHovering = true;
            card.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.6s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease';
        });

        card.addEventListener('mousemove', (e) => {
            if (!isHovering) return;

            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            // Reduced rotation for subtlety
            const rotateX = ((y - centerY) / centerY) * 3;
            const rotateY = ((centerX - x) / centerX) * 3;

            requestAnimationFrame(() => {
                card.style.transform = `
                    perspective(1200px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    translateY(-12px)
                    scale(1.02)
                `;
            });
        });

        card.addEventListener('mouseleave', () => {
            isHovering = false;
            card.style.transition = 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.7s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease';
            card.style.transform = 'perspective(1200px) rotateX(0) rotateY(0) translateY(0) scale(1)';
        });
    });
};

// ============================================
// PREMIUM SKILL CARD HOVER
// Smooth scale and glow effect
// ============================================

const initSkillCardEffects = () => {
    const skillCards = document.querySelectorAll('.skill-card');

    skillCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.6s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease';
        });
    });
};

// ============================================
// MOBILE MENU ANIMATION
// Smooth slide-in with backdrop
// ============================================

const initMobileMenu = () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            const isActive = menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');

            // Animate hamburger icon
            menuToggle.style.transition = 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
        });

        // Close menu on link click
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }
};

// ============================================
// HERO TEXT ANIMATION
// Smooth staggered reveal
// ============================================

const initHeroAnimation = () => {
    const heroLines = document.querySelectorAll('.hero-line');
    const taglineItems = document.querySelectorAll('.tagline-item');

    // Ensure initial state
    heroLines.forEach((line, index) => {
        line.style.opacity = '0';
        line.style.transform = 'translateY(50px)';
    });

    taglineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
    });

    // Trigger animations after page load
    setTimeout(() => {
        heroLines.forEach((line, index) => {
            setTimeout(() => {
                line.style.transition = 'opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1)';
                line.style.opacity = '1';
                line.style.transform = 'translateY(0)';
            }, index * 200);
        });

        taglineItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.transition = 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)';
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, 600 + (index * 100));
        });
    }, 100);
};

// ============================================
// MAGNETIC BUTTON EFFECT
// Subtle attraction effect on hover
// ============================================

const initMagneticButtons = () => {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            requestAnimationFrame(() => {
                button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
            });
        });

        button.addEventListener('mouseleave', () => {
            button.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
            button.style.transform = 'translate(0, 0)';

            setTimeout(() => {
                button.style.transition = '';
            }, 600);
        });
    });
};

// ============================================
// PERFORMANCE OPTIMIZATION
// Reduce animations on low-end devices
// ============================================

const optimizeForPerformance = () => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
        // Disable complex animations
        document.querySelectorAll('*').forEach(el => {
            el.style.animation = 'none';
            el.style.transition = 'none';
        });
    }

    // Disable parallax on mobile for better performance
    if (window.innerWidth < 768) {
        window.removeEventListener('scroll', parallaxEffect);
    }
};

// ============================================
// INITIALIZE ALL ANIMATIONS
// Called when DOM is fully loaded
// ============================================

const init = () => {
    initScrollAnimations();
    initProjectCardEffects();
    initSkillCardEffects();
    initMobileMenu();
    initHeroAnimation();
    initMagneticButtons();
    optimizeForPerformance();

    // Add smooth transition to navigation
    if (nav) {
        nav.style.transition = 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
    }

    // Add will-change for better performance
    document.querySelectorAll('.project-card, .skill-card, .btn').forEach(el => {
        el.style.willChange = 'transform, opacity';
    });
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// ============================================
// CLEANUP ON PAGE UNLOAD
// Remove event listeners for better memory management
// ============================================

window.addEventListener('beforeunload', () => {
    window.removeEventListener('scroll', handleNavScroll);
    window.removeEventListener('scroll', parallaxEffect);
});