// JavaScript is used to add interactivity to the website. 
// For example, it could be used to add smooth scrolling to the navigation links. 
// However, such code would be more complex. Here's a simple example that changes the navbar background on scroll:

window.addEventListener('scroll', function() {
    let navbar = document.getElementById('navbar');
    if(window.pageYOffset > 0) {
        navbar.style.backgroundColor = '#f1f1f1';
        navbar.style.transition = '0.5s';
    } else {
        navbar.style.backgroundColor = 'transparent';
        navbar.style.transition = '0.5s';
    }
});
