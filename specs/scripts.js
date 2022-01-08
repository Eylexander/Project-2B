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
var button = document.getElementById("modebutton");
button.addEventListener('click', function() {
    if (button.getAttribute("data-text-swap") == button.innerText) {
        button.innerText = button.getAttribute("data-text-original");
    } else {
        button.setAttribute("data-text-original", button.innerText);
        button.innerText = button.getAttribute("data-text-swap");
    }
}, false);

// JQuery Scripts
// import "http://code.jquery.com/jquery-latest.min.js"
// var content1 = document.getElementById("ah");
// $.get("https://api.github.com/repos/Eylexander/Project-1B", function(result1) {
//     var desc1 = JSON.stringify(result1.description);
//     content1.append(desc1.replace('"','').replace('"',''));
// });