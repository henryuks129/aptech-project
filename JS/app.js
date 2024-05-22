document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('.nav_link');
    var currentPath = window.location.pathname.split('/').pop();
    navLinks.forEach(function(link) {
        var linkPath = link.getAttribute('href').split('/').pop();
        if (linkPath === currentPath) {
            link.classList.add('active');
        }
    });
});