// ===== Enhanced Animations and Interactive Features =====

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for fade-in animation
document.querySelectorAll('.portfolio-item, .event-card, .stat, .about-content').forEach(element => {
    element.style.opacity = '0';
    observer.observe(element);
});

// ===== Navbar Scroll Animation =====
const navbar = document.querySelector('.navbar');
let lastScrollY = 0;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    // Add scrolled class when scrolling down
    if (currentScrollY > 50) {
        navbar.classList.add('scrolled');
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.classList.remove('scrolled');
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    }
    
    // Hide navbar when scrolling down, show when scrolling up
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScrollY = currentScrollY;
});

// ===== Parallax Effect =====
const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
    if (hero) {
        const scrollPosition = window.scrollY;
        hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    }
});

// ===== Smooth Scroll for Navigation Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== Mobile Menu Toggle =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close menu when a link is clicked
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ===== Ripple Effect on Buttons =====
function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    button.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
}

document.querySelectorAll('.btn, .event-cta, .play-btn').forEach(button => {
    button.addEventListener('click', createRipple);
});

// ===== Scroll Reveal Animation =====
function revealOnScroll() {
    const reveals = document.querySelectorAll('.fade-in-element, .slide-in-element, .scale-in-element');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Call on page load

// ===== Animated Counter =====
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const updateCounter = () => {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };
    
    updateCounter();
}

// ===== Hover Glow Effect =====
document.querySelectorAll('.btn-primary, .event-card, .portfolio-item').forEach(element => {
    element.addEventListener('mousemove', (e) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        element.style.setProperty('--mouse-x', x + 'px');
        element.style.setProperty('--mouse-y', y + 'px');
    });
});

// ===== Typewriter Effect =====
function typeWriter(element, text, speed = 100) {
    let index = 0;
    element.textContent = '';
    
    const type = () => {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    };
    
    type();
}

// ===== Fade In on Load =====
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.5s ease-in';
});

// ===== Music Genres Animation =====
const genreSpans = document.querySelectorAll('.music-genres span');
genreSpans.forEach((span, index) => {
    span.style.animationDelay = `${index * 0.1}s`;
    span.style.animation = 'fadeInUp 0.6s ease-out forwards';
});

// ===== Portfolio Items Stagger Animation =====
const portfolioItems = document.querySelectorAll('.portfolio-item');
portfolioItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
    item.style.animation = 'fadeInUp 0.6s ease-out forwards';
    item.style.opacity = '0';
});

// ===== Event Cards Stagger Animation =====
const eventCards = document.querySelectorAll('.event-card');
eventCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
    card.style.animation = 'fadeInUp 0.6s ease-out forwards';
    card.style.opacity = '0';
});

// ===== Smooth Transition on Page Load =====
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.opacity = '1';
        document.body.style.transition = 'opacity 0.5s ease-in';
    }, 100);
});

// ===== Add Glow Effect to Accent Color Elements =====
document.querySelectorAll('.btn-primary, .event-cta').forEach(element => {
    element.addEventListener('mouseenter', () => {
        element.style.boxShadow = '0 0 20px rgba(233, 69, 96, 0.6)';
    });
    
    element.addEventListener('mouseleave', () => {
        element.style.boxShadow = '0 10px 20px rgba(233, 69, 96, 0.3)';
    });
});

// ===== Scroll Progress Bar =====
function updateScrollProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    
    // You can use this to update a progress bar element
    const progressBar = document.querySelector('.scroll-progress');
    if (progressBar) {
        progressBar.style.width = scrollPercent + '%';
    }
}

window.addEventListener('scroll', updateScrollProgress);

// ===== Cursor Tracking Animation =====
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    // Update custom properties for cursor position
    document.documentElement.style.setProperty('--mouse-x', mouseX + 'px');
    document.documentElement.style.setProperty('--mouse-y', mouseY + 'px');
});

// ===== Add Animation Classes to Elements =====
function addAnimationClasses() {
    const elements = document.querySelectorAll('[data-animation]');
    
    elements.forEach(element => {
        const animation = element.getAttribute('data-animation');
        element.classList.add(animation);
    });
}

addAnimationClasses();

// ===== Stagger Animation for Multiple Elements =====
function staggerAnimation(selector, animationClass, delay = 0.1) {
    const elements = document.querySelectorAll(selector);
    
    elements.forEach((element, index) => {
        element.style.animationDelay = `${index * delay}s`;
        element.classList.add(animationClass);
    });
}

// ===== Bounce Animation on Scroll =====
function bounceOnScroll() {
    const bounceElements = document.querySelectorAll('[data-bounce]');
    
    bounceElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight) {
            element.style.animation = 'bounce 0.6s ease-in-out';
        }
    });
}

window.addEventListener('scroll', bounceOnScroll);

// ===== Float Animation =====
function floatAnimation() {
    const floatElements = document.querySelectorAll('[data-float]');
    
    floatElements.forEach(element => {
        element.style.animation = 'float 3s ease-in-out infinite';
    });
}

floatAnimation();

// ===== Pulse Animation =====
function pulseAnimation() {
    const pulseElements = document.querySelectorAll('[data-pulse]');
    
    pulseElements.forEach(element => {
        element.style.animation = 'pulse 2s ease-in-out infinite';
    });
}

pulseAnimation();

// ===== Rotate Animation =====
function rotateAnimation() {
    const rotateElements = document.querySelectorAll('[data-rotate]');
    
    rotateElements.forEach(element => {
        element.style.animation = 'rotate360 4s linear infinite';
    });
}

rotateAnimation();

// ===== Spin Animation =====
function spinAnimation() {
    const spinElements = document.querySelectorAll('[data-spin]');
    
    spinElements.forEach(element => {
        element.style.animation = 'spin 2s linear infinite';
    });
}

spinAnimation();

// ===== Wiggle Animation =====
function wiggleAnimation() {
    const wiggleElements = document.querySelectorAll('[data-wiggle]');
    
    wiggleElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.animation = 'wiggle 0.5s ease-in-out';
        });
    });
}

wiggleAnimation();

// ===== Flip Animation =====
function flipAnimation() {
    const flipElements = document.querySelectorAll('[data-flip]');
    
    flipElements.forEach(element => {
        element.addEventListener('click', () => {
            element.style.animation = 'flip 0.6s ease-in-out';
        });
    });
}

flipAnimation();

// ===== Heartbeat Animation =====
function heartbeatAnimation() {
    const heartbeatElements = document.querySelectorAll('[data-heartbeat]');
    
    heartbeatElements.forEach(element => {
        element.style.animation = 'heartbeat 1.3s ease-in-out infinite';
    });
}

heartbeatAnimation();

// ===== Blink Animation =====
function blinkAnimation() {
    const blinkElements = document.querySelectorAll('[data-blink]');
    
    blinkElements.forEach(element => {
        element.style.animation = 'blink 1s ease-in-out infinite';
    });
}

blinkAnimation();

// ===== Zoom In Animation =====
function zoomInAnimation() {
    const zoomInElements = document.querySelectorAll('[data-zoom-in]');
    
    zoomInElements.forEach(element => {
        element.style.animation = 'zoomIn 0.6s ease-out';
    });
}

zoomInAnimation();

// ===== Zoom Out Animation =====
function zoomOutAnimation() {
    const zoomOutElements = document.querySelectorAll('[data-zoom-out]');
    
    zoomOutElements.forEach(element => {
        element.style.animation = 'zoomOut 0.6s ease-out';
    });
}

zoomOutAnimation();

// ===== Shimmer Animation =====
function shimmerAnimation() {
    const shimmerElements = document.querySelectorAll('[data-shimmer]');
    
    shimmerElements.forEach(element => {
        const background = `linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)`;
        element.style.backgroundImage = background;
        element.style.backgroundSize = '200% 100%';
        element.style.animation = 'shimmer 2s infinite';
    });
}

shimmerAnimation();

// ===== Glow Animation =====
function glowAnimation() {
    const glowElements = document.querySelectorAll('[data-glow]');
    
    glowElements.forEach(element => {
        element.style.animation = 'glow 2s ease-in-out infinite';
    });
}

glowAnimation();

// ===== Slide In Animation =====
function slideInAnimation() {
    const slideInElements = document.querySelectorAll('[data-slide-in]');
    
    slideInElements.forEach(element => {
        const direction = element.getAttribute('data-slide-in');
        if (direction === 'left') {
            element.style.animation = 'slideInFromLeft 0.6s ease-out';
        } else if (direction === 'right') {
            element.style.animation = 'slideInFromRight 0.6s ease-out';
        }
    });
}

slideInAnimation();

// ===== Slide Up Animation =====
function slideUpAnimation() {
    const slideUpElements = document.querySelectorAll('[data-slide-up]');
    
    slideUpElements.forEach(element => {
        element.style.animation = 'slideUp 0.6s ease-out';
    });
}

slideUpAnimation();

// ===== Slide Down Animation =====
function slideDownAnimation() {
    const slideDownElements = document.querySelectorAll('[data-slide-down]');
    
    slideDownElements.forEach(element => {
        element.style.animation = 'slideDown 0.6s ease-out';
    });
}

slideDownAnimation();

// ===== Fade In Animation =====
function fadeInAnimation() {
    const fadeInElements = document.querySelectorAll('[data-fade-in]');
    
    fadeInElements.forEach(element => {
        element.style.animation = 'fadeInUp 0.6s ease-out';
    });
}

fadeInAnimation();

// ===== Scale In Animation =====
function scaleInAnimation() {
    const scaleInElements = document.querySelectorAll('[data-scale-in]');
    
    scaleInElements.forEach(element => {
        element.style.animation = 'scaleIn 0.6s ease-out';
    });
}

scaleInAnimation();

// ===== Bounce Animation =====
function bounceAnimation() {
    const bounceElements = document.querySelectorAll('[data-bounce]');
    
    bounceElements.forEach(element => {
        element.style.animation = 'bounce 0.6s ease-in-out';
    });
}

bounceAnimation();

// ===== Initialize All Animations =====
console.log('Enhanced animations and interactive features loaded successfully!');
