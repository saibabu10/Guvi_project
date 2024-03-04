document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.HamburgerMenu');
    const navbar_r = document.querySelector('.navbar-right');
    const cross = document.querySelector('.hb-close');

    hamburger.addEventListener('click', () => {
        navbar_r.classList.toggle('show');
        cross.style.display = 'block';
        hamburger.style.display = "none";
    });

    cross.addEventListener("click", () => {
        navbar_r.classList.toggle('show');
        cross.style.display = 'none';
        hamburger.style.display = "block";
    });
});
