var arrOfInputs = [];
const navbar = document.querySelector('#main_navbar');
const btn1 = document.querySelector('#btn-1');
arrOfInputs.push(btn1);
const btn2 = document.querySelector('#btn-2');
arrOfInputs.push(btn2);
const btn3 = document.querySelector('#btn-3');
arrOfInputs.push(btn3);
const btn4 = document.querySelector('#btn-4');
arrOfInputs.push(btn4);
const btn5 = document.querySelector('#btn-5');
arrOfInputs.push(btn5);
const btn6 = document.querySelector('#btn-6');
arrOfInputs.push(btn6);
const btn1_active = document.querySelector('#btn1-active');
const btn2_active = document.querySelector('#btn2-active');
const btn3_active = document.querySelector('#btn3-active');
const btn4_active = document.querySelector('#btn4-active');
const btn5_active = document.querySelector('#btn5-active');
const btn6_active = document.querySelector('#btn6-active');

var pathname = window.location.pathname;
console.log(pathname);

function iteratorAddFunction(input) {
    navbar.classList.add('navbar-shrink');
    for (var i = 0; i < arrOfInputs.length; i++) {

        if (arrOfInputs[i] === input) {
            continue;
        }
        else arrOfInputs[i].classList.add('btn-shrink');   
    }
    console.log(dropdown.style.background);
    dropdown.style.marginTop = "-35px";
}

function iteratorRemoveFunction(input) {
    navbar.classList.remove('navbar-shrink');
    for (var i = 0; i < arrOfInputs.length; i++) {

        if (arrOfInputs[i] === input) {
            continue;
        }
        else arrOfInputs[i].classList.remove('btn-shrink');
    }
    dropdown.style.marginTop = "-1px";
}

const dropdown = document.querySelector('.dropdown-menu');
window.addEventListener('scroll', function () {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        if (pathname === '/index.html') { 
            
            btn1_active.classList.add('btn1-shrink');
            iteratorAddFunction(btn1); 
        }
        else if (pathname === '/about.html') {

            btn2_active.classList.add('btn1-shrink');
            iteratorAddFunction(btn2); 
        }
        else if (pathname === '/events.html') {
            btn3_active.classList.add('btn1-shrink');
            iteratorAddFunction(btn3); 
        }
        else if (pathname === '/gallery.html') {
            btn4_active.classList.add('btn1-shrink');
            iteratorAddFunction(btn4); 
        }
        else if (pathname === '/faq.html') {
            btn5_active.classList.add('btn1-shrink');
            iteratorAddFunction(btn5); 
        }
        else if (pathname === '/contacts.html') {
            btn6_active.classList.add('btn1-shrink');
            iteratorAddFunction(btn6); 
        }

    }
    //////////////////////////////////////////////////////////////

    else if (document.body.scrollTop < 80 || document.documentElement.scrollTop < 80) {
        if (pathname === '/index.html') {
            
            btn1_active.classList.remove('btn1-shrink');
            iteratorRemoveFunction(btn1); 

        }
        else if (pathname === '/about.html') {
            btn2_active.classList.remove('btn1-shrink');
            iteratorRemoveFunction(btn2); 
        }
        else if (pathname === '/events.html') {
           
            btn3_active.classList.remove('btn1-shrink');
            iteratorRemoveFunction(btn3); 
        }
        else if (pathname === '/gallery.html') {
            btn4_active.classList.remove('btn1-shrink');
            iteratorRemoveFunction(btn4); 
        }
        else if (pathname === '/faq.html') {
            btn5_active.classList.remove('btn1-shrink');
            iteratorRemoveFunction(btn5); 
        }
        else if (pathname === '/contacts.html') {
            btn6_active.classList.remove('btn1-shrink');
            iteratorRemoveFunction(btn6); 
        }


    }



});
