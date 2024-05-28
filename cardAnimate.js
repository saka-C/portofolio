const observerCard = new IntersectionObserver(entries => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.remove('hidden'); // Remove the hidden class
                entry.target.classList.add('card-animation');
            }, index * 100); // Stagger effect with 0.5s delay for each card
        }
    });
}, {
    threshold: 0.1 // Adjust the threshold as needed
});

const cards = document.querySelectorAll('.card-porto');
cards.forEach(card => {
    observerCard.observe(card);
});