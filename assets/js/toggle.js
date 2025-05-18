document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    const hamMenu = document.getElementById('ham-menu');
    const navLinks = document.querySelector('.nav-links');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    hamMenu.addEventListener('click', function() {
        hamMenu.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
});
