// ===== View Event Function =====
function viewEvent(imageUrl) {
    const modal = document.createElement('div');
    modal.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background-color: rgba(0, 0, 0, 0.9); display: flex; align-items: center; justify-content: center; z-index: 2000; cursor: pointer;';
    
    const img = document.createElement('img');
    img.src = imageUrl;
    img.style.cssText = 'max-width: 90%; max-height: 90%; object-fit: contain;';
    
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '<i class="fas fa-times"></i>';
    closeBtn.style.cssText = 'position: absolute; top: 20px; right: 20px; background-color: #e94560; color: white; border: none; width: 40px; height: 40px; border-radius: 50%; cursor: pointer; font-size: 1.5rem; display: flex; align-items: center; justify-content: center; z-index: 2001;';
    
    modal.appendChild(img);
    modal.appendChild(closeBtn);
    document.body.appendChild(modal);
    
    modal.addEventListener('click', () => {
        modal.remove();
    });
    
    closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        modal.remove();
    });
}

// ===== Mobile Menu Toggle =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ===== Audio Player =====
let currentAudio = null;
let isPlaying = false;

function playMix(url) {
    const player = document.getElementById('audioPlayer');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const currentTrack = document.getElementById('currentTrack');
    
    // Stop current audio if playing
    if (currentAudio) {
        currentAudio.pause();
    }
    
    // Create new audio element
    currentAudio = new Audio(url);
    currentTrack.textContent = 'Now Playing: ' + url.split('/').pop();
    
    // Show player
    player.classList.add('active');
    
    // Play audio
    currentAudio.play();
    isPlaying = true;
    playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    
    // Update progress bar
    currentAudio.addEventListener('timeupdate', () => {
        const progress = (currentAudio.currentTime / currentAudio.duration) * 100;
        document.getElementById('progress').style.width = progress + '%';
    });
    
    // Handle audio end
    currentAudio.addEventListener('ended', () => {
        isPlaying = false;
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    });
}

function togglePlay() {
    if (!currentAudio) return;
    
    const playPauseBtn = document.getElementById('playPauseBtn');
    
    if (isPlaying) {
        currentAudio.pause();
        isPlaying = false;
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    } else {
        currentAudio.play();
        isPlaying = true;
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    }
}

function closePlayer() {
    const player = document.getElementById('audioPlayer');
    if (currentAudio) {
        currentAudio.pause();
    }
    player.classList.remove('active');
    isPlaying = false;
}

// Click on progress bar to seek
document.addEventListener('click', (e) => {
    if (e.target.closest('.progress-bar') && currentAudio) {
        const progressBar = document.querySelector('.progress-bar');
        const rect = progressBar.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        currentAudio.currentTime = percent * currentAudio.duration;
    }
});

// ===== Contact Form Submission =====
function handleFormSubmit(event) {
    event.preventDefault();
    
    // Get form data
    const form = event.target;
    const name = form.elements[0].value;
    const email = form.elements[1].value;
    const eventType = form.elements[2].value;
    const message = form.elements[3].value;
    
    // Create mailto link (for demonstration)
    const mailtoLink = `mailto:your.email@example.com?subject=Booking Request from ${name}&body=Name: ${name}%0AEmail: ${email}%0AEvent Type: ${eventType}%0A%0AMessage:%0A${message}`;
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
    
    // Reset form
    form.reset();
}

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

// ===== Add Scroll Animation =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe portfolio items and event cards
document.querySelectorAll('.portfolio-item, .event-card, .stat').forEach(element => {
    element.style.opacity = '0';
    observer.observe(element);
});

// ===== Navbar Background on Scroll =====
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    }
});

// ===== Initialize =====
console.log('DJ Portfolio Website loaded successfully!');
