const menu = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");
const skills = document.querySelector('.skills');
const skillsBox = document.querySelector(".skills-box");

menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    overlay.classList.toggle('open');
});

skills.addEventListener('click', () => {
    skillsBox.classList.toggle('open');
});