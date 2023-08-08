// ========================================================================== //
//  SCROLL POSITION
// ========================================================================== //

// Apply classes to elements, based on scroll position
function scrollPosition() {
    let position = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
    const body = document.querySelector('body');
    const header = document.querySelector('header');
    const logoFills = document.querySelectorAll('.logo-smeeple-blue .letter-fill');
    const navLinks = document.querySelectorAll('header .nav-list a:not([class*="cta"])');

    // Toggle "bg-blue" if the scroll position is > 0
    header.classList.toggle('bg-blue', position > 0);

    // Toggle between "text-blue-dark" and "text-white" if <body> doesn't have
    // a "page-dark" class and the scroll position is <= 0
    if (!body.classList.contains('page-dark')) {
        logoFills.forEach((fill) => {
            fill.classList.toggle('fill-blue', position <= 0);
            fill.classList.toggle('fill-white', position > 0);
        });

        // Toggle between "text-blue-dark" and "text-white" if <body> doesn't have
        // a "page-dark" class and the scroll position is <= 0
        navLinks.forEach((link) => {
            link.classList.toggle('text-blue-dark', position <= 0);
            link.classList.toggle('text-white', position > 0);
        });
    }
}

// Call scrollPosition on load and scroll
scrollPosition();
window.addEventListener('scroll', scrollPosition);
