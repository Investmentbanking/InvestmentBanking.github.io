const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const iconLink = document.querySelector('.intro__img');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});


navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

function playMusic(){
    var music = new Audio('click.mp3');
    music.play();
}
