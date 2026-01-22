// function showSidebar() {
//     const sidebar = document.querySelector(".sidebar");
//     sidebar.style.display = 'flex';
//     setTimeout(() => {
//         sidebar.style.transform = 'translateX(0)'; 
//     }, 10);
// }

// function closeSidebar() {
//     const sidebar = document.querySelector(".sidebar");
//     sidebar.style.transform = 'translateX(100%)'; 
//     setTimeout(() => {
//         sidebar.style.display = 'none';
//     }, 300);
// }





document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');

    // 1. Header scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Mobile navigation toggle
    navToggle.addEventListener('click', () => {
        nav.classList.toggle('open');
        navToggle.classList.toggle('open');
    });

    // Optional: Close nav when a link is clicked (for better UX)
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('open')) {
                nav.classList.remove('open');
                navToggle.classList.remove('open');
            }
        });
    });
});