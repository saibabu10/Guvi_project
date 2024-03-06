document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    const hamburger = document.querySelector('.HamburgerMenu');
    const navbar_r = document.querySelector('.navbar-right');
    const cross = document.querySelector('.hb-close');

    hamburger.addEventListener('click', () => {
        navbar_r.classList.toggle('show');
        cross.style.display = 'block';
        hamburger.style.display = "none";
        header.style.height = '600px';
    });

    cross.addEventListener("click", () => {
        navbar_r.classList.toggle('show');
        cross.style.display = 'none';
        hamburger.style.display = "block";
        header.style.height = '500px';
    });
});
