document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

   
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 
    };

    const fadeInObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
              
                entry.target.classList.add('visible');
                
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
