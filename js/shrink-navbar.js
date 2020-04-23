/*global console */
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
              if(pathname === '/project/index.html')
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
              else if(pathname === '/project/about.html'){
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
              else if (pathname === '/project/events.html'){
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
              else if (pathname === '/project/gallery.html'){
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
              else if (pathname === '/project/faq.html'){
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
              else if (pathname === '/project/contacts.html'){
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
            else if(pathname === '/project/about.html')
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
            else if (pathname === '/project/events.html'){
                      navbar.classList.remove('navbar-shrink');
                      btn1.classList.remove('btn-shrink');
                      btn2.classList.remove('btn-shrink');
                      btn3_active.classList.remove('btn1-shrink');
                      btn4.classList.remove('btn-shrink');
                      btn5.classList.remove('btn-shrink');
                      btn6.classList.remove('btn-shrink');
                      dropdown.style.marginTop = "-1px";  
            }
            else if (pathname === '/project/gallery.html'){
                      navbar.classList.remove('navbar-shrink');
                      btn1.classList.remove('btn-shrink');
                      btn2.classList.remove('btn-shrink');
                      btn3.classList.remove('btn-shrink');
                      btn4_active.classList.remove('btn1-shrink');
                      btn5.classList.remove('btn-shrink');
                      btn6.classList.remove('btn-shrink');
                      dropdown.style.marginTop = "-1px";    
            }
            else if (pathname === '/project/faq.html'){
                      navbar.classList.remove('navbar-shrink');
                      btn1.classList.remove('btn-shrink');
                      btn2.classList.remove('btn-shrink');
                      btn3.classList.remove('btn-shrink');
                      btn4.classList.remove('btn-shrink');
                      btn5_active.classList.remove('btn1-shrink');
                      btn6.classList.remove('btn-shrink');
                      dropdown.style.marginTop = "-1px";   
            }
            else if (pathname === '/project/contacts.html'){
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
