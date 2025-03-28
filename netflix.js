// question 1

let answer = document.querySelector('.ans1');
let btns = document.querySelector('.open')
let question1 = document.querySelector('.question1')
let cursor = document.querySelector('.cursor');
let bdy = document.querySelector('body');


bdy.addEventListener('mousemove', (event) => {
    gsap.to(cursor, {
        x: event.x,
        y: event.y,
        duration: 2.5,
        ease: 'elastic.out(1,0.45)'
    })
})


function toggleBtn(){
    btns.classList.toggle("active");
    answer.classList.toggle("active");
}

question1.addEventListener("click", () => {
    toggleBtn();
})

// question 2

let answer2 = document.querySelector('.ans2');
let btns2 = document.querySelector('.open2')
let question2 = document.querySelector('.question2')

function toggleBtn2(){
    btns2.classList.toggle("active");
    answer2.classList.toggle("active");
}

question2.addEventListener("click", () => {
    toggleBtn2();
})


// question 3

let answer3 = document.querySelector('.ans3');
let btns3 = document.querySelector('.open3')
let question3 = document.querySelector('.question3')

function toggleBtn3(){
    btns3.classList.toggle("active");
    answer3.classList.toggle("active");
}

question3.addEventListener("click", () => {
    toggleBtn3();
})


// question 4

let answer4 = document.querySelector('.ans4');
let btns4 = document.querySelector('.open4')
let question4 = document.querySelector('.question4')

function toggleBtn4(){
    btns4.classList.toggle("active");
    answer4.classList.toggle("active");
}

question4.addEventListener("click", () => {
    toggleBtn4();
})
// question 5

let answer5 = document.querySelector('.ans5');
let btns5 = document.querySelector('.open5')
let question5 = document.querySelector('.question5')

function toggleBtn5(){
    btns5.classList.toggle("active");
    answer5.classList.toggle("active");
}

question5.addEventListener("click", () => {
    toggleBtn5();
})
// question 6

let answer6 = document.querySelector('.ans6');
let btns6 = document.querySelector('.open6')
let question6 = document.querySelector('.question6')

function toggleBtn6(){
    btns6.classList.toggle("active");
    answer6.classList.toggle("active");
}

question6.addEventListener("click", () => {
    toggleBtn6();   
})


let tl = gsap.timeline();

tl.from('.logo',{
    y: -20,
    opacity: 0,
    delay: 1,
})

tl.from('.dropdown',{
    x: -20,
    opacity: 0,
})

tl.from('#para1', {
    y: -10,
    opacity: 0,
    duration: 0.7,
})


tl.from('#para2', {
    x: -10,
    opacity: 0,
    duration: 0.7,
})

tl.from('#para3', {
    y: 10,
    opacity: 0,
    duration: 0.7,
})

tl.from('.e-mail', {
    x: -10,
    opacity: 0,
    duration: 0.7,
})

tl.to('.mail button', {
    opacity: 1,
}, "-=0.8")


// let bd = document.querySelector('body')
// let e_mail = document.querySelector('.e-mail');
// let lab = document.querySelector('label');
// let input = document.querySelector('input');

// input.addEventListener('click', () => {
//         lab.style.transform = 'translateY(-15px)';
//         lab.style.fontSize = '12px';
// })

// // input.removeEventListener("click", () => {
// //     lab.style.transform = 'translateY(-15px)';
// //     lab.style.fontSize = '12px';
// // })