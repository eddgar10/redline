document.querySelector('.menu-btn').addEventListener('click',() => {
    document.querySelector('.nav-menu').classList.toggle('show');
});
ScrollReveal({ reset: true });
ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.showcase', {delay:300});
ScrollReveal().reveal('.news-cards', {delay:200});
ScrollReveal().reveal('.cards-banner-one', {delay:100});
ScrollReveal().reveal('.cards-banner-two', {delay:100});