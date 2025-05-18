window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    const logo = document.querySelector('.header img');

    if (window.scrollY > 10) {
        header.style.background = 'linear-gradient(to bottom right, rgba(1, 1, 1), rgba(9, 24, 51))';
        logo.src = './assets/img/logos/monoLogo.svg';
    } else {
        header.style.background = 'rgba(9, 24, 51, 0.9)';
        logo.src = './assets/img/logos/colorLogo.svg';
    }
});