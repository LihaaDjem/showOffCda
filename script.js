document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const h2 = section.querySelector('h2');
        h2.addEventListener('click', () => {
            const ul = section.querySelector('ul');
            ul.style.display = ul.style.display === 'none' ? 'block' : 'none';
        });
    });
});