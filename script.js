document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Intersection Observer for Fade-In Animations
    // Elements with the '.fade-in' class will transition to opacity 1 when they enter the viewport
    const observerOptions = {
        root: null, // use the viewport as the root
        rootMargin: '0px',
        threshold: 0.15 // trigger when 15% of the element is visible
    };

    const fadeInObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the visible class to trigger the CSS transition
                entry.target.classList.add('visible');
                // Stop observing the element once it has faded in
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Select all elements that should fade in and observe them
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => {
        fadeInObserver.observe(el);
    });
});
