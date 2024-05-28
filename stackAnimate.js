const observerStack = new IntersectionObserver(entries => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.remove('hidden');
                entry.target.classList.add('stack-animation');
            }, index * 100);
        }
    });
}, {
    threshold: 0.1 // Adjust the threshold as needed
});

const stacks = document.querySelectorAll('.card');
stacks.forEach(stack => {
    observerStack.observe(stack);
});