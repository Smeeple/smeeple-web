// Document ready
document.addEventListener('DOMContentLoaded', function () {
    // Add a class to the body, to hide it while the page is loading
    document.body.classList.add('hidden');
});

// Unhide the body after the page is loaded
window.addEventListener('load', (event) => {
    document.body.classList.remove('hidden');
});
