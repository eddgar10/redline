document.querySelector('.menu-btn').addEventListener('click',() => {
    document.querySelector('.nav-menu').classList.toggle('show');
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.showcase', {delay:2000});
ScrollReveal().reveal('.news-cards', {delay:2000});
ScrollReveal().reveal('.cards-banner-one', {delay:2000});
ScrollReveal().reveal('.cards-banner-two', {delay:2000});