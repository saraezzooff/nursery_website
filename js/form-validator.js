/* global alert */
/*global console */
      console.log('hiiiiiiiiiiiiiiii');

const form = document.getElementById('form'),
      username = document.getElementById('contact-name'),
      phone = document.getElementById('contact-phone'),
      email = document.getElementById('contact-email');
    //  textarea = document.getElementById('textarea');


form.addEventListener('click',(e)=>{
    
    e.preventDefault();
    checkInputs();
    
    
    
    
    
    
    
});

function checkInputs(){
  
    //get the values from the form
    const username_value = username.value.trim(),  //remove the whitespaces
          phone_value =parseInt(phone.value.trim()),
          email_value = email.value.trim();
       //   textarea_value = textarea.value.trim();
    
       //   checkpass_value = checkpass.value.trim();
   // console.log(textarea_value);
    
    if (username_value === ''){
        //show erro message 
        setError(username,'Username can\'t be blank ');
        //add erro class
    }
    else{
        //add success class
        setSuccess(username);
    }
    
    if(email_value === ''){
            setError(email,'Email can\'t be blank ');
        }
    else if(isEmail(email_value)){     
        setSuccess(email);
    }else{
         setError(email,'Please write correct Email');
    }
    
   if(phone_value === ''){
        setError(phone,'Phone can\'t be blank')
    }
    else if(phoneCheck(phone_value)){
            setSuccess(phone);
        }
    else{
          setError(phone,'Phone shoud be a number');
    }
    
  /*  if(textarea_value === null){
            setError(textarea,'Textarea can\'t be blank')
        }

    else{
       setSuccess(textarea);

    } 
    */
    

}

function setError(input,message){
    const divForm = input.parentElement;
    const errormessg = divForm.querySelector('small');
    errormessg.innerHTML = message;
    divForm.className = 'form_control error';
 //   errormessg.style.visibility = 'visible';
    

   
}
function setSuccess(input){
    const divForm = input.parentElement;
    divForm.className = 'form_control success';
}

function isEmail(email)
{
    const echeck = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return echeck.test(email);
}

function phoneCheck(input){;
    if (Number.isInteger(input) ){

            return true;
        }
}
/*
function identyPass(input){
    if(input === checkpass.value && input.length >6)   {
            return true;
        }
}
*/