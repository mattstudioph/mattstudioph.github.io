// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Active navigation link
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Parallax effect
window.addEventListener('scroll', () => {
    const parallaxBg = document.querySelector('.parallax-bg');
    if (parallaxBg) {
        parallaxBg.style.transform = `translateY(${window.pageYOffset * 0.5}px)`;
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = entry.target.className;
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in-up').forEach(el => {
    observer.observe(el);
});

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Contact form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const name = contactForm.querySelector('input[placeholder="Your Name"]').value;
        const email = contactForm.querySelector('input[placeholder="Your Email"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        // Create mailto link
        const mailtoLink = `mailto:mattstudioph@proton.me?subject=New message from ${name}&body=${encodeURIComponent(`From: ${name} (${email})\n\nMessage:\n${message}`)}`;
        
        window.location.href = mailtoLink;
        
        // Reset form
        contactForm.reset();
    });
}

// Scroll to top button functionality
const scrollToTopBtn = document.querySelector('.scroll-to-top');
if (scrollToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.display = 'flex';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });
}

// Mouse parallax effect on hero shapes
const heroShape = document.querySelector('.hero-shape');
if (heroShape) {
    document.addEventListener('mousemove', (e) => {
        const shapes = document.querySelectorAll('.floating-shape');
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 10;
            shape.style.transform = `translate(${mouseX * speed}px, ${mouseY * speed}px)`;
        });
    });
}

// Stagger animation delay
document.querySelectorAll('.fade-in-up').forEach((el, index) => {
    if (!el.style.animationDelay) {
        el.style.animationDelay = `${index * 0.1}s`;
    }
});

// Smooth scroll behavior fallback
if (!('scrollBehavior' in document.documentElement.style)) {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

console.log('Portfolio loaded successfully! 🚀');