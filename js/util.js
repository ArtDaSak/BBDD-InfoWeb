window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    const logo = document.querySelector('.header img');

    if (window.scrollY > 10) {
        header.style.background = 'linear-gradient(to bottom right, rgba(19, 62, 124), rgba(9, 24, 51))';
        logo.src = '../assets/img/logos/monoLogo.svg';
        logo.style.filter = 'drop-shadow(0.02vw 0.027vw 0.42vw var(--lavander-web))';
        logo.onmouseenter = function () {
            logo.src = '../../assets/img/logos/monoLogo.svg';
            logo.style.filter = 'drop-shadow(0.02vw 0.027vw 0.42vw var(--robin-egg-blue-transparent-90))';
        };
        logo.onmouseleave = function () {
            logo.src = '../assets/img/logos/monoLogo.svg';
            logo.style.filter = 'drop-shadow(0.02vw 0.027vw 0.42vw var(--lavander-web))';
        };
    } else {
        header.style.background = 'rgba(19, 62, 124, 0.75)';
        logo.src = '../assets/img/logos/colorLogo.svg';
        logo.style.filter = 'none';
    }
});