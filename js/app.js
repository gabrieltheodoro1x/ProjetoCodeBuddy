window.onscroll = function() {
    var navbar = document.getElementById('header');
    var container = document.getElementById('visi');
    var menu = document.getElementById('menu');
    if (window.pageYOffset > 500) {
        navbar.style.backgroundColor = '#340c6c';
        navbar.style.paddingTop = '0px';
        navbar.style.paddingBottom = '0px';
        navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.5)';
        menu.style.top = '0%';
        container.style.opacity = "1";
        container.style.transform = "translateY(0px)";
    } else {
        navbar.style.backgroundColor = '#081b29';
        navbar.style.boxShadow = 'none';
        navbar.style.paddingTop = '30px';
        menu.style.top = '20%';
        container.style.opacity = "0";
        container.style.transform = "translateY(20px)";
    }
};
