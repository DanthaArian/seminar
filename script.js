window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;

        if (scrollY > sectionTop - windowHeight + sectionHeight / 4) { // Memulai animasi lebih awal
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
});
