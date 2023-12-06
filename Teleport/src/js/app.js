const btn = document.querySelector('.btn');
const btnopen = document.querySelector('.btnopen');
const popUp = document.querySelector('.pop_up');
const gulp = document.querySelector('.gulp');


btn.style.transform = 'rotate(180deg)'

btn.addEventListener('click', () =>{
    popUp.classList.toggle('show')
    btnopen.classList.toggle('rotate')
    gulp.classList.toggle('hidden')
})  