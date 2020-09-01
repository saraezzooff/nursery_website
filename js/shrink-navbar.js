/*global console */
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


console.log($(document).width());
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
        if (pathname.includes('/index.html') || pathname === ('https://saraezzooff.github.io/nursery_website/')) { 
            
            btn1_active.classList.add('btn1-shrink');
            iteratorAddFunction(btn1); 
        }
        else if (pathname.includes('/about.html') || pathname === ('https://saraezzooff.github.io/nursery_website/')) {

            btn2_active.classList.add('btn1-shrink');
            iteratorAddFunction(btn2); 
        }
        else if (pathname.includes('/events.html')) {
            btn3_active.classList.add('btn1-shrink');
            iteratorAddFunction(btn3); 
        }
        else if (pathname.includes('/gallery.html')) {
            btn4_active.classList.add('btn1-shrink');
            iteratorAddFunction(btn4); 
        }
        else if (pathname.includes('/faq.html')) {
            btn5_active.classList.add('btn1-shrink');
            iteratorAddFunction(btn5); 
        }
        else if (pathname.includes('/contacts.html')){
            btn6_active.classList.add('btn1-shrink');
            iteratorAddFunction(btn6); 
        }

    }
    //////////////////////////////////////////////////////////////

    else if (document.body.scrollTop < 80 || document.documentElement.scrollTop < 80) {
        if (pathname.includes('/index.html') || pathname === ('https://saraezzooff.github.io/nursery_website/'))  {
            
            btn1_active.classList.remove('btn1-shrink');
            iteratorRemoveFunction(btn1); 

        }
        else if (pathname.includes('/about.html')) {
            btn2_active.classList.remove('btn1-shrink');
            iteratorRemoveFunction(btn2); 
        }
        else if (pathname.includes('/events.html')) {
           
            btn3_active.classList.remove('btn1-shrink');
            iteratorRemoveFunction(btn3); 
        }
        else if (pathname.includes('/gallery.html')) {
            btn4_active.classList.remove('btn1-shrink');
            iteratorRemoveFunction(btn4); 
        }
        else if (pathname.includes('/faq.html')) {
            btn5_active.classList.remove('btn1-shrink');
            iteratorRemoveFunction(btn5); 
        }
        else if (pathname.includes('/contacts.html')) {
            btn6_active.classList.remove('btn1-shrink');
            iteratorRemoveFunction(btn6); 
        }


    }



}); 


/*

const navbar = document.querySelector('#main_navbar');
const btn1 = document.querySelector('#btn-1');
const btn2 = document.querySelector('#btn-2');
const btn3 = document.querySelector('#btn-3');
const btn4 = document.querySelector('#btn-4');
const btn5 = document.querySelector('#btn-5');
const btn6 = document.querySelector('#btn-6');
const btn1_active = document.querySelector('#btn1-active');
const btn2_active = document.querySelector('#btn2-active');
const btn3_active = document.querySelector('#btn3-active');
const btn4_active = document.querySelector('#btn4-active');
const btn5_active = document.querySelector('#btn5-active');
const btn6_active = document.querySelector('#btn6-active');



var pathname = window.location.pathname;
console.log(pathname);

const dropdown = document.querySelector('.dropdown-menu');
window.addEventListener('scroll',function(){
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)
          {
              if(pathname === '/index.html')
                  {
                      navbar.classList.add('navbar-shrink');
                      btn1_active.classList.add('btn1-shrink');
                      btn2.classList.add('btn-shrink');
                      btn3.classList.add('btn-shrink');
                      btn4.classList.add('btn-shrink');
                      btn5.classList.add('btn-shrink');
                      btn6.classList.add('btn-shrink');
                      console.log(dropdown.style.background);
                      dropdown.style.marginTop = "-35px";
                  }
              else if(pathname === '/about.html'){
                      navbar.classList.add('navbar-shrink');
                      btn1.classList.add('btn-shrink');
                      btn2_active.classList.add('btn1-shrink');
                      btn3.classList.add('btn-shrink');
                      btn4.classList.add('btn-shrink');
                      btn5.classList.add('btn-shrink');
                      btn6.classList.add('btn-shrink');
                      console.log(dropdown.style.background);
                      dropdown.style.marginTop = "-35px";
              }
              else if (pathname === '/events.html'){
                      navbar.classList.add('navbar-shrink');
                      btn1.classList.add('btn-shrink');
                      btn2.classList.add('btn-shrink');
                      btn3_active.classList.add('btn1-shrink');
                      btn4.classList.add('btn-shrink');
                      btn5.classList.add('btn-shrink');
                      btn6.classList.add('btn-shrink');
                      console.log(dropdown.style.background);
                      dropdown.style.marginTop = "-35px";
              }
              else if (pathname === '/gallery.html'){
                      navbar.classList.add('navbar-shrink');
                      btn1.classList.add('btn-shrink');
                      btn2.classList.add('btn-shrink');
                      btn3.classList.add('btn-shrink');
                      btn4_active.classList.add('btn1-shrink');
                      btn5.classList.add('btn-shrink');
                      btn6.classList.add('btn-shrink');
                      console.log(dropdown.style.background);
                      dropdown.style.marginTop = "-35px";
              }
              else if (pathname === '/faq.html'){
                      navbar.classList.add('navbar-shrink');
                      btn1.classList.add('btn-shrink');
                      btn2.classList.add('btn-shrink');
                      btn3.classList.add('btn-shrink');
                      btn4.classList.add('btn-shrink');
                      btn5_active.classList.add('btn1-shrink');
                      btn6.classList.add('btn-shrink');
                      console.log(dropdown.style.background);
                      dropdown.style.marginTop = "-35px"; 
              }
              else if (pathname === '/contacts.html'){
                      navbar.classList.add('navbar-shrink');
                      btn1.classList.add('btn-shrink');
                      btn2.classList.add('btn-shrink');
                      btn3.classList.add('btn-shrink');
                      btn4.classList.add('btn-shrink');
                      btn5.classList.add('btn-shrink');
                      btn6_active.classList.add('btn1-shrink');
                      console.log(dropdown.style.background);
                      dropdown.style.marginTop = "-35px";   
              }
    
          }
    else if(document.body.scrollTop < 80 || document.documentElement.scrollTop < 80)
        {
            if(pathname === '/index.html')
                
                {
                      navbar.classList.remove('navbar-shrink');
                      btn1_active.classList.remove('btn1-shrink');
                      btn2.classList.remove('btn-shrink');
                      btn3.classList.remove('btn-shrink');
                      btn4.classList.remove('btn-shrink');
                      btn5.classList.remove('btn-shrink');
                      btn6.classList.remove('btn-shrink');
                      dropdown.style.marginTop = "-1px";
         
                }
            else if(pathname === '/about.html')
                {
                      navbar.classList.remove('navbar-shrink');
                      btn1.classList.remove('btn-shrink');
                      btn2_active.classList.remove('btn1-shrink');
                      btn3.classList.remove('btn-shrink');
                      btn4.classList.remove('btn-shrink');
                      btn5.classList.remove('btn-shrink');
                      btn6.classList.remove('btn-shrink');
                      dropdown.style.marginTop = "-1px";  
                }
            else if (pathname === '/events.html'){
                      navbar.classList.remove('navbar-shrink');
                      btn1.classList.remove('btn-shrink');
                      btn2.classList.remove('btn-shrink');
                      btn3_active.classList.remove('btn1-shrink');
                      btn4.classList.remove('btn-shrink');
                      btn5.classList.remove('btn-shrink');
                      btn6.classList.remove('btn-shrink');
                      dropdown.style.marginTop = "-1px";  
            }
            else if (pathname === '/gallery.html'){
                      navbar.classList.remove('navbar-shrink');
                      btn1.classList.remove('btn-shrink');
                      btn2.classList.remove('btn-shrink');
                      btn3.classList.remove('btn-shrink');
                      btn4_active.classList.remove('btn1-shrink');
                      btn5.classList.remove('btn-shrink');
                      btn6.classList.remove('btn-shrink');
                      dropdown.style.marginTop = "-1px";    
            }
            else if (pathname === '/faq.html'){
                      navbar.classList.remove('navbar-shrink');
                      btn1.classList.remove('btn-shrink');
                      btn2.classList.remove('btn-shrink');
                      btn3.classList.remove('btn-shrink');
                      btn4.classList.remove('btn-shrink');
                      btn5_active.classList.remove('btn1-shrink');
                      btn6.classList.remove('btn-shrink');
                      dropdown.style.marginTop = "-1px";   
            }
            else if (pathname === '/contacts.html'){
                      navbar.classList.remove('navbar-shrink');
                      btn1.classList.remove('btn-shrink');
                      btn2.classList.remove('btn-shrink');
                      btn3.classList.remove('btn-shrink');
                      btn4.classList.remove('btn-shrink');
                      btn5.classList.remove('btn-shrink');
                      btn6_active.classList.remove('btn1-shrink');
                      dropdown.style.marginTop = "-1px"; 
            }
            
            
        }
  
    
    
});
window.onscroll = function()
{
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)
          {
                  navbar.classList.add('navbar-shrink');
    
          }
    else if(document.body.scrollTop < 80 || document.documentElement.scrollTop < 80)
        {
            navbar.classList.remove('navbar-shrink');
        }

};*/
