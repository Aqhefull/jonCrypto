new WOW().init();
$('.reliability__image').addClass('wow animated fadeInRight');
$('.services__item').addClass('wow animated fadeInUp');
$('.conditions__image').addClass('wow animated fadeInLeft');
$('.growth__image').addClass('wow animated fadeInRight');
$('.widgets__traslations').addClass('wow animated fadeIn');
$('.widgets__news').addClass('wow animated fadeIn');
$('.contact__form').addClass('wow animated fadeInUp');

// Menu hamm

function navMenu() {
    var x = document.getElementById("navigationItems");
    if (x.className === "navigation__items") {
        x.className += " navigation__items--responsive";
    } else {
        x.className = "navigation__items";
    }
}
