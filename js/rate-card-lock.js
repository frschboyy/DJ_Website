// Rate Card Lock Functionality
document.addEventListener('DOMContentLoaded', function() {
    const lockOverlay = document.getElementById('rateCardLock');
    const unlockInput = document.getElementById('unlockCode');
    const rateCardContent = document.getElementById('rateCardContent');
    const correctCode = 'OUTSIDER'; // The secret code to unlock
    let doubleClickCount = 0;
    let doubleClickTimeout;

    // Function to unlock the rate card
    function unlockRateCard() {
        lockOverlay.classList.add('unlocked');
        rateCardContent.classList.add('visible');
        // Store unlock state in localStorage so it persists
        // localStorage.setItem('rateCardUnlocked', 'true');
    }

    // Check if already unlocked on page load
    // if (localStorage.getItem('rateCardUnlocked') === 'true') {
    //     unlockRateCard();
    // }

    // Handle double-click on the lock icon
    const lockIcon = lockOverlay.querySelector('.lock-icon');
    lockIcon.addEventListener('dblclick', function(e) {
        e.stopPropagation();
        doubleClickCount++;
        
        clearTimeout(doubleClickTimeout);
        
        if (doubleClickCount === 3) {
            // Three double-clicks to unlock
            unlockRateCard();
            doubleClickCount = 0;
        } else {
            doubleClickTimeout = setTimeout(() => {
                doubleClickCount = 0;
            }, 1000);
        }
    });

    // Handle code entry
    unlockInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const enteredCode = unlockInput.value.toUpperCase().trim();
            if (enteredCode === correctCode) {
                unlockRateCard();
                unlockInput.value = '';
            } else {
                // Shake animation on wrong code
                lockOverlay.style.animation = 'none';
                setTimeout(() => {
                    lockOverlay.style.animation = 'shake 0.5s';
                }, 10);
                unlockInput.value = '';
                unlockInput.placeholder = 'Wrong code, try again!';
                setTimeout(() => {
                    unlockInput.placeholder = 'OUTSIDER';
                }, 2000);
            }
        }
    });

    // Handle click on the overlay to focus input
    lockOverlay.addEventListener('click', function(e) {
        if (e.target !== lockIcon && !unlockInput.contains(e.target)) {
            unlockInput.focus();
        }
    });

    // Add shake animation to CSS dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-10px); }
            75% { transform: translateX(10px); }
        }
    `;
    document.head.appendChild(style);
});

// Accordion toggle function
function toggleAccordion(header) {
    header.classList.toggle('active');
    const content = header.nextElementSibling;
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + 'px';
    }
}
