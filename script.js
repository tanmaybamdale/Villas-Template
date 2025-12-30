// Main JavaScript for Earthcon Villas Website

// Hero Image Slider (only for home page)
let currentHeroIndex = 0;
const heroBg = document.getElementById('hero-bg');

if (heroBg) {
    setInterval(() => {
        currentHeroIndex = (currentHeroIndex + 1) % heroImages.length;
        heroBg.style.backgroundImage = heroImages[currentHeroIndex];
    }, 3000);
}

// Loader & GSAP Initialization
window.addEventListener('load', () => {
    const tl = gsap.timeline();

    tl.to("#loader-text", { opacity: 1, duration: 1, ease: "power2.out" })
      .to("#loader-line", { scaleX: 1, duration: 0.8, ease: "power2.out" })
      .to("#loader", { y: "-100%", duration: 1, delay: 0.5, ease: "power2.inOut" });
    
    // Only animate hero elements if they exist (on home page)
    const heroElems = document.querySelectorAll('.gsap-hero-elem');
    if (heroElems.length > 0) {
        tl.from(".gsap-hero-elem", {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
        }, "-=0.5");
    }
});

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    
    // Only apply transparent effect on home page hero section
    if (navbar && window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
        if (currentScroll > 50) {
            navbar.classList.remove('bg-transparent', 'py-6');
            navbar.classList.add('bg-brand-dark', 'shadow-lg', 'py-4');
        } else {
            navbar.classList.add('bg-transparent', 'py-6');
            navbar.classList.remove('bg-brand-dark', 'shadow-lg', 'py-4');
        }
    }
    
    lastScroll = currentScroll;
});

// Reveal Animations
gsap.utils.toArray('.reveal-up').forEach(elem => {
    gsap.from(elem, {
        scrollTrigger: {
            trigger: elem,
            start: "top 85%",
            toggleActions: "play none none reverse"
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });
});

gsap.utils.toArray('.reveal-left').forEach(elem => {
    gsap.from(elem, {
        scrollTrigger: {
            trigger: elem,
            start: "top 80%",
        },
        x: -60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
    });
});

gsap.utils.toArray('.reveal-right').forEach(elem => {
    gsap.from(elem, {
        scrollTrigger: {
            trigger: elem,
            start: "top 80%",
        },
        x: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
    });
});

// Mobile Menu Functionality
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        
        // Toggle icon
        const icon = mobileMenuBtn.querySelector('i');
        if (mobileMenu.classList.contains('hidden')) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        } else {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        }
    });

    // Close mobile menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (mobileMenu && !mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    }
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    const modal = document.getElementById('villa-modal');
    if (modal && e.target === modal) {
        closeModal();
    }
});

// Close modal with ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const modal = document.getElementById('villa-modal');
        if (modal && !modal.classList.contains('hidden')) {
            closeModal();
        }
    }
});

// Set minimum date for check-in to today
const checkInDate = document.getElementById('contact-date');
if (checkInDate) {
    const today = new Date().toISOString().split('T')[0];
    checkInDate.setAttribute('min', today);
}

// Set minimum date for check-out based on check-in
const checkOutDate = document.getElementById('contact-checkout');
if (checkInDate && checkOutDate) {
    checkInDate.addEventListener('change', () => {
        const selectedDate = new Date(checkInDate.value);
        selectedDate.setDate(selectedDate.getDate() + 1);
        const minCheckout = selectedDate.toISOString().split('T')[0];
        checkOutDate.setAttribute('min', minCheckout);
    });
}

// Form validation for booking
const bookingForm = document.getElementById('booking-form');
if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        sendWhatsapp();
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Don't prevent default for links that just have "#"
        if (href === '#') return;
        
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            const offset = 100;
            const targetPosition = targetElement.offsetTop - offset;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Performance: Throttle scroll events
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
    }
    scrollTimeout = window.requestAnimationFrame(() => {
        // Scroll-based functionality here
    });
}, { passive: true });

// Console welcome message
console.log('%cWelcome to Earthcon Villas!', 'color: #D4AF37; font-size: 20px; font-weight: bold;');
console.log('%cExperience luxury living in Lonavala', 'color: #666; font-size: 14px;');

// Debug mode - set to false in production
const DEBUG = false;
if (DEBUG) {
    console.log('Villa Data:', villaData);
    console.log('Contact Info:', contactInfo);
}