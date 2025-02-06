// Navigation
function navigateTo(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    document.getElementById(pageId).classList.add('active');
    
    // Trigger confetti if navigating to presentation
    if (pageId === 'presentation') {
        triggerConfetti();
    }
}

// Confetti effect
function triggerConfetti() {
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    
    const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();
        
        if (timeLeft <= 0) {
            clearInterval(interval);
            return;
        }
        
        // Launch confetti from both sides
        confetti({
            particleCount: 3,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#FF1493', '#4B0082', '#00FFFF']
        });
        
        confetti({
            particleCount: 3,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#FF1493', '#4B0082', '#00FFFF']
        });
    }, 250);
}
