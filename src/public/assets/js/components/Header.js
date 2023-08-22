// ========================================================================== //
//  SCROLL POSITION
// ========================================================================== //

// Apply classes to elements, based on scroll position
function scrollPosition() {
    let position = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
    const header = document.querySelector('header');

    // Toggle "bg-blue" if the scroll position is > 0
    header.classList.toggle('bg-blue', position > 0);
}

// Call scrollPosition on load and scroll
scrollPosition();
window.addEventListener('scroll', scrollPosition);
