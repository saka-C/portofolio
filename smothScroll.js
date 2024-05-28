document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        const offset = 60; // Adjust this value to match the height of your navigation

        window.scrollTo({
            top: target.offsetTop - offset,
            behavior: 'smooth'
        });
    });
});
