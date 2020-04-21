/*global console */
const navbar = document.querySelector('#main_navbar');
const btn1 = document.querySelector('#btn-1');
const btn2 = document.querySelector('#btn-2');
const btn3 = document.querySelector('#btn-3');
const btn4 = document.querySelector('#btn-4');
const btn5 = document.querySelector('#btn-5');
const btn6 = document.querySelector('#btn-6');
const dropdown = document.querySelector('.dropdown-menu');
console.log(dropdown);
window.addEventListener('scroll',function(){
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)
          {
                  navbar.classList.add('navbar-shrink');
                  btn1.classList.add('btn1-shrink');
                  btn2.classList.add('btn-shrink');
                  btn3.classList.add('btn-shrink');
                  btn4.classList.add('btn-shrink');
                  btn5.classList.add('btn-shrink');
                  btn6.classList.add('btn-shrink');
                  console.log(dropdown.style.background);
                  dropdown.style.marginTop = "-35px";

    
          }
    else if(document.body.scrollTop < 80 || document.documentElement.scrollTop < 80)
        {
            navbar.classList.remove('navbar-shrink');
            btn1.classList.remove('btn1-shrink');
            btn2.classList.remove('btn-shrink');
            btn3.classList.remove('btn-shrink');
            btn4.classList.remove('btn-shrink');
            btn5.classList.remove('btn-shrink');
            btn6.classList.remove('btn-shrink');
            dropdown.style.marginTop = "-1px";
        }
  
    
    
});
/*window.onscroll = function()
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