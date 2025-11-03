// ===== Floating Particles and Glittering Stars Background ===== 

// Configuration for different background effects
const EFFECTS_CONFIG = {
    stars: {
        count: 100,
        colors: ['rgba(255, 255, 255, 0.8)', 'rgba(233, 69, 96, 0.4)'],
        sizes: ['small', 'medium', 'large'],
        animations: ['twinkle-slow', 'twinkle-medium', 'twinkle-fast']
    },
    particles: {
        count: 50,
        colors: ['rgba(233, 69, 96, 0.3)', 'rgba(100, 150, 255, 0.2)'],
        sizes: ['small', 'medium', 'large'],
        animations: ['float-slow', 'float-medium', 'float-fast', 'float-left-slow', 'float-left-medium', 'float-left-fast', 'float-wide-slow', 'float-wide-medium', 'float-wide-fast']
    },
    bubbles: {
        count: 30,
        colors: ['rgba(233, 69, 96, 0.2)'],
        sizes: ['small', 'medium', 'large'],
        animations: ['float-slow', 'float-medium', 'float-fast']
    }
};

// ===== Initialize Stars Background =====
function initStarsBackground() {
    const starsContainer = document.createElement('div');
    starsContainer.className = 'stars-background';
    document.body.insertBefore(starsContainer, document.body.firstChild);

    const config = EFFECTS_CONFIG.stars;
    
    for (let i = 0; i < config.count; i++) {
        const star = document.createElement('div');
        star.className = `star ${getRandomItem(config.sizes)} ${getRandomItem(config.animations)}`;
        
        // Random position
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        
        // Random animation delay
        const delay = Math.random() * 3;
        star.style.animationDelay = delay + 's';
        
        starsContainer.appendChild(star);
    }
}

// ===== Initialize Floating Particles Background =====
function initParticlesBackground() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-background';
    document.body.insertBefore(particlesContainer, document.body.firstChild);

    const config = EFFECTS_CONFIG.particles;
    
    for (let i = 0; i < config.count; i++) {
        const particle = document.createElement('div');
        particle.className = `particle ${getRandomItem(config.sizes)} ${getRandomItem(config.animations)}`;
        
        // Random position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.bottom = Math.random() * -50 + 'px';
        
        // Random animation delay
        const delay = Math.random() * 5;
        particle.style.animationDelay = delay + 's';
        
        particlesContainer.appendChild(particle);
    }
}

// ===== Initialize Bubbles Background =====
function initBubblesBackground() {
    const bubblesContainer = document.createElement('div');
    bubblesContainer.className = 'bubbles-background';
    document.body.insertBefore(bubblesContainer, document.body.firstChild);

    const config = EFFECTS_CONFIG.bubbles;
    
    for (let i = 0; i < config.count; i++) {
        const bubble = document.createElement('div');
        bubble.className = `bubble ${getRandomItem(config.sizes)} ${getRandomItem(config.animations)}`;
        
        // Random position
        bubble.style.left = Math.random() * 100 + '%';
        bubble.style.bottom = Math.random() * -100 + 'px';
        
        // Random animation delay
        const delay = Math.random() * 8;
        bubble.style.animationDelay = delay + 's';
        
        bubblesContainer.appendChild(bubble);
    }
}

// ===== Initialize Orbs Background =====
function initOrbsBackground() {
    const orbsContainer = document.createElement('div');
    orbsContainer.className = 'orbs-background';
    document.body.insertBefore(orbsContainer, document.body.firstChild);

    const sizes = ['small', 'medium', 'large'];
    const animations = ['float-slow', 'float-medium', 'float-fast'];
    
    // Create 3-5 orbs
    const orbCount = Math.floor(Math.random() * 3) + 3;
    
    for (let i = 0; i < orbCount; i++) {
        const orb = document.createElement('div');
        orb.className = `orb ${getRandomItem(sizes)} ${getRandomItem(animations)}`;
        
        // Random position
        orb.style.left = Math.random() * 100 + '%';
        orb.style.top = Math.random() * 100 + '%';
        
        // Random animation delay
        const delay = Math.random() * 5;
        orb.style.animationDelay = delay + 's';
        
        orbsContainer.appendChild(orb);
    }
}

// ===== Initialize Mesh Background =====
function initMeshBackground() {
    const meshContainer = document.createElement('div');
    meshContainer.className = 'mesh-background';
    document.body.insertBefore(meshContainer, document.body.firstChild);
}

// ===== Initialize Grid Background =====
function initGridBackground() {
    const gridContainer = document.createElement('div');
    gridContainer.className = 'grid-background';
    document.body.insertBefore(gridContainer, document.body.firstChild);
}

// ===== Initialize Wave Background =====
function initWaveBackground() {
    const waveContainer = document.createElement('div');
    waveContainer.className = 'wave-background';
    
    // Create wave elements
    for (let i = 0; i < 3; i++) {
        const wave = document.createElement('div');
        wave.className = 'wave';
        waveContainer.appendChild(wave);
    }
    
    document.body.insertBefore(waveContainer, document.body.firstChild);
}

// ===== Initialize Lines Background =====
function initLinesBackground() {
    const linesContainer = document.createElement('div');
    linesContainer.className = 'lines-background';
    
    // Create horizontal and vertical lines
    for (let i = 0; i < 3; i++) {
        const hLine = document.createElement('div');
        hLine.className = 'line horizontal';
        hLine.style.top = (25 + i * 25) + '%';
        hLine.style.animationDelay = (i * 0.5) + 's';
        linesContainer.appendChild(hLine);
        
        const vLine = document.createElement('div');
        vLine.className = 'line vertical';
        vLine.style.left = (25 + i * 25) + '%';
        vLine.style.animationDelay = (i * 0.5 + 0.2) + 's';
        linesContainer.appendChild(vLine);
    }
    
    document.body.insertBefore(linesContainer, document.body.firstChild);
}

// ===== Initialize Dots Background =====
function initDotsBackground() {
    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'dots-background';
    document.body.insertBefore(dotsContainer, document.body.firstChild);
}

// ===== Initialize Gradient Shift Background =====
function initGradientShiftBackground() {
    const gradientContainer = document.createElement('div');
    gradientContainer.className = 'gradient-shift-background';
    document.body.insertBefore(gradientContainer, document.body.firstChild);
}

// ===== Initialize Noise Background =====
function initNoiseBackground() {
    const noiseContainer = document.createElement('div');
    noiseContainer.className = 'noise-background';
    document.body.insertBefore(noiseContainer, document.body.firstChild);
}

// ===== Initialize Ambient Background =====
function initAmbientBackground() {
    const ambientContainer = document.createElement('div');
    ambientContainer.className = 'ambient-background';
    document.body.insertBefore(ambientContainer, document.body.firstChild);
}

// ===== Utility Functions =====
function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function getRandomColor(colors) {
    return getRandomItem(colors);
}

// ===== Initialize Default Background Effect =====
function initDefaultBackgroundEffect() {
    // Initialize the main ambient background
    initAmbientBackground();
    
    // Initialize stars and particles for a nightlife vibe
    initStarsBackground();
    initParticlesBackground();
    
    // Optional: Add subtle orbs for extra depth
    initOrbsBackground();
}

// ===== Advanced: Create Custom Background Effect =====
function createCustomBackgroundEffect(effectType) {
    // Remove existing background effects
    removeAllBackgroundEffects();
    
    // Initialize ambient background
    initAmbientBackground();
    
    // Initialize the selected effect
    switch(effectType) {
        case 'stars':
            initStarsBackground();
            break;
        case 'particles':
            initParticlesBackground();
            break;
        case 'bubbles':
            initBubblesBackground();
            break;
        case 'orbs':
            initOrbsBackground();
            break;
        case 'mesh':
            initMeshBackground();
            break;
        case 'grid':
            initGridBackground();
            break;
        case 'wave':
            initWaveBackground();
            break;
        case 'lines':
            initLinesBackground();
            break;
        case 'dots':
            initDotsBackground();
            break;
        case 'noise':
            initNoiseBackground();
            break;
        case 'gradient':
            initGradientShiftBackground();
            break;
        case 'combined':
            initStarsBackground();
            initParticlesBackground();
            initOrbsBackground();
            break;
        default:
            initDefaultBackgroundEffect();
    }
}

// ===== Remove All Background Effects =====
function removeAllBackgroundEffects() {
    const backgrounds = document.querySelectorAll(
        '.stars-background, .particles-background, .bubbles-background, ' +
        '.orbs-background, .mesh-background, .grid-background, ' +
        '.wave-background, .lines-background, .dots-background, ' +
        '.gradient-shift-background, .noise-background, .ambient-background'
    );
    
    backgrounds.forEach(bg => bg.remove());
}

// ===== Initialize on Page Load =====
document.addEventListener('DOMContentLoaded', () => {
    // Initialize the default background effect
    initDefaultBackgroundEffect();
    
    // Ensure all content is above the background
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('section');
    const footer = document.querySelector('footer');
    
    if (navbar) navbar.style.zIndex = '1000';
    sections.forEach(section => section.style.zIndex = '10');
    if (footer) footer.style.zIndex = '10';
});

// ===== Responsive Adjustment =====
window.addEventListener('resize', () => {
    // Adjust particle count based on screen size
    const width = window.innerWidth;
    if (width < 768) {
        // Reduce particle count on mobile
        const particlesContainer = document.querySelector('.particles-background');
        if (particlesContainer) {
            const particles = particlesContainer.querySelectorAll('.particle');
            if (particles.length > 25) {
                for (let i = 25; i < particles.length; i++) {
                    particles[i].remove();
                }
            }
        }
    }
});

// ===== Interactive Effect Switcher (Optional) =====
function setupEffectSwitcher() {
    // This function can be used to create a UI control for switching effects
    // Example: Create a button that switches between different background effects
    
    const effectButtons = document.querySelectorAll('[data-effect]');
    
    effectButtons.forEach(button => {
        button.addEventListener('click', () => {
            const effectType = button.getAttribute('data-effect');
            createCustomBackgroundEffect(effectType);
        });
    });
}

// ===== Initialize Effect Switcher if elements exist =====
document.addEventListener('DOMContentLoaded', () => {
    setupEffectSwitcher();
});

// ===== Performance Optimization =====
// Reduce animation frame rate on low-end devices
if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
    // Reduce particle count on low-end devices
    EFFECTS_CONFIG.particles.count = 25;
    EFFECTS_CONFIG.stars.count = 50;
    EFFECTS_CONFIG.bubbles.count = 15;
}

// ===== Accessibility: Respect prefers-reduced-motion =====
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
    // Disable animations for users who prefer reduced motion
    const style = document.createElement('style');
    style.textContent = `
        * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
    `;
    document.head.appendChild(style);
}

console.log('Background particle and star effects initialized successfully!');
