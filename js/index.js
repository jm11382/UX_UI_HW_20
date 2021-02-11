// Hamburger Animation Start//
const navSlide = () => {
    const burger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav a');



    burger.addEventListener('click', () => {
            //Toggle Nav
    nav.classList.toggle('nav-active');
            //Animate Links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = ''
        } else {
            link.style.animation = `navLinkFade 0.4s ease forwards ${index / 9 + 0.3}s`
        }
    });
            //Burger Animation
        burger.classList.toggle('toggle');
    });
}
navSlide();
// Hamburger Animation End//

var height = $('#jumboScroll').height();

$(window).scroll(function () {
    if($(this).scrollTop() > height){
        $('.caseStudyNav').addClass('fixed');
    }else{
        $('.caseStudyNav').removeClass('fixed')
    }
});

var height = $('#jumboScroll').height();

$(window).scroll(function () {
    if($(this).scrollTop() > height){
        $('#overview').addClass('overviewMargin');
    }else{
        $('#overview').removeClass('overviewMargin')
    }
});