 fetch('assets/addons/header.html')
 .then(response => response.text())
 .then(data => {
     document.getElementById('header').innerHTML = data;

     // Set the active link in the header after loading it
     const currentPage = window.location.pathname.split("/").pop(); // Get the current page name
     const navLinks = document.querySelectorAll('.nav-links a'); // Select all nav links

     navLinks.forEach(link => {
         console.log(link.getAttribute('href')); // Log the href for debugging
         if (link.getAttribute('href') === currentPage) {
             link.classList.add('active'); // Add active class to the current page link
         }
     });
 });

fetch('assets/addons/footer.html')
 .then(response => response.text())
 .then(data => {
     document.getElementById('footer').innerHTML = data;
 });
