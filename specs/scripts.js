/*!
* Start Bootstrap - Scrolling Nav v5.0.4 (https://startbootstrap.com/template/scrolling-nav)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-scrolling-nav/blob/master/LICENSE)
*/

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
});

// Own JS Code
function Mode() {
    var content = document.getElementById("modebutton");
    if (content.innerText = "Dark Mode") {
        content.innerText = "Light Mode";
    } else if (content.innerText = "Light Mode") {
        content.innerText = "Dark Mode";
    } else {
        return
    }
}

window.onclick = function() {
    function Mode() {
        var content = document.getElementById("modebutton");
        if (content.innerText = "Dark Mode") {
            content.innerText = "Light Mode";
        } else if (content.innerText = "Light Mode") {
            content.innerText = "Dark Mode";
        } else {
            return
        }
    }
}