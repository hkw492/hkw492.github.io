// Skill bar animation when scrolled into view
const bars = document.querySelectorAll('.bar div');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.width = entry.target.parentElement.previousElementSibling.nextElementSibling.style.width || entry.target.style.width;
        }
    });
}, { threshold: 0.5 });

bars.forEach(bar => observer.observe(bar));
