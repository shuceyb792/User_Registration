const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confrime = document.querySelector("#confrime");
const form = document.querySelector("#form");

 const showError = (input , message) =>{
    let parentElement = input.parentElement;
    parentElement.classList = 'form-control error';
    const small = parentElement.querySelector("small");
    const successIcon = parentElement.querySelectorAll("i")[0];
    const errorIcon = parentElement.querySelectorAll("i")[1];
    errorIcon.style.visibility = 'visible';
    successIcon.style.visibility = 'hidden';
    small.innerText = message;
}

const showsuccess = (input) =>{
    let parentElement = input.parentElement;
    parentElement.classList = 'form-control success';
    const successIcon = parentElement.querySelectorAll("i")[0];
    const errorIcon = parentElement.querySelectorAll("i")[1];
    errorIcon.style.visibility = 'hidden';
    successIcon.style.visibility = 'visible';
}

const checkEmpty = (elements) =>{
    elements.forEach((element) =>{
       if(element.value === ''){
  
        showError(element , 'Input Required');

      }else{
       showsuccess(element);
      }
    })
}

const checkEmail = (email) =>{
 const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 if(reg.test(email.value)){
  showsuccess(email);
 }else{
    showError(email,'Invalid Email');
 }
}

const checkpassword = (input,min,max) =>{
 if(input.value.length < min){
    showError(input,`password must be atlest ${min} charecter`);
 }else if(input.value.length > max){
    showError(input,`password maximum character is ${max}`);
 }else{
    showsuccess(input);
 }
}


const checkconfrime = (password,confrime) =>{
 if(password.value !== confrime.value){
    showError(confrime,'password is not match');
 }
}

form.addEventListener("submit",function(e){
    e.preventDefault();
    
    checkEmpty([username,password,email,password,confrime]);
    checkEmail(email);
    checkpassword(password,6,20);
    checkpassword(confrime,6,20);
    checkconfrime(password,confrime);
})