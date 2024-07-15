/**
* Template Name: iPortfolio
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Updated: Jun 14 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/



/**
 * Init typed.js
 */
const selectTyped = document.querySelector('.typed');
if (selectTyped) {
  let typed_strings = selectTyped.getAttribute('data-typed-items');
  typed_strings = typed_strings.split(',');
  new Typed('.typed', {
    strings: typed_strings,
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000
  });
}

document.addEventListener("DOMContentLoaded", function() {
  // Get all links
  var links = document.querySelectorAll('.left .pages li a');

  // Loop through links and add click event
  links.forEach(function(link) {
      link.addEventListener('click', function() {
          // Remove active class from all links
          links.forEach(function(link) {
              link.classList.remove('active');
          });

          // Add active class to the clicked link
          this.classList.add('active');
      });
  });
});


