//This file contains code for form input validation using regex

const body = document.querySelector("body");
body.style.fontFamily = "'Montserrat', sans-serif";

// First Name Validation
let firstName = document.getElementById("firstName");
let firstNameValidation = function(){
   firstNameValue = firstName.value.trim(); 
   validFirstName = /^[a-zA-Z]{3,16}$/gm;
   firstNameErr = document.getElementById('first-name-err');
   if(firstNameValue=="")
   {
   }else if(!validFirstName.test(firstNameValue)){
     firstNameErr.innerHTML = "First name must be alphanumeric and contain 3-16 characters";
   }else{
     firstNameErr.innerHTML="";
     return true;
    
   }
}
firstName.oninput=function(){
   
   firstNameValidation();
}
  // Last Name Validation
 let lastName = document.getElementById("lastName");
 let lastNameValidation = function(){
   lastNameValue = lastName.value.trim(); 
   validLastName = /^\w{3,16}$/gm;
   lastNameErr = document.getElementById('last-name-err');
   if(lastNameValue=="")
   {
   }else if(!validLastName.test(lastNameValue)){
     lastNameErr.innerHTML = "Last name must be alphanumeric and contain 3-16 characters";
   }else{
     lastNameErr.innerHTML="";
     return true;
   }
  }
lastName.oninput=function(){
   lastNameValidation();
}
 // Email Address Validation
 let emailAddress= document.getElementById("emailAddress");;
 let emailAddressValidation= function(){
  emailAddressValue = emailAddress.value.trim(); 
   validEmailAddress = /^\w*\d?\w*?@\w*.\w*/gm;
   emailAddressErr=document.getElementById('email-err');
   if(emailAddressValue=="")
   {
   }else if(!validEmailAddress.test(emailAddressValue)){
     emailAddressErr.innerHTML = "Email must be a valid address, e.g example@example.com";
   }else{
     emailAddressErr.innerHTML="";
     return true;
   }
 }
emailAddress.oninput=function(){
   emailAddressValidation();
}
 // Mobile Number Validation
 let mobileNumber = document.getElementById("mobileNumber");
 let mobileNumberValidation = function(){
   mobileNumberValue = mobileNumber.value.trim(); 
   validMobileNumber = /^\d{3}-\d{3}-\d{4}/gm;
   mobileNumberErr=document.getElementById('mobile-number-err');
   if(mobileNumberValue=="")
   {
   }else if(!validMobileNumber.test(mobileNumberValue)){
     mobileNumberErr.innerHTML = "A valid Telephone number (11 digits and 333-333-3334)";
   }
   else{
     mobileNumberErr.innerHTML="";
     return true;
   }
 }
mobileNumber.oninput=function(){
   mobileNumberValidation();
}
// Password Validation
let password = document.getElementById("password");;
let passwordValidation = function(){
  passwordValue=password.value.trim(); 
   validPassword=/^([a-z]?\d?@?.?-?_?\w*?,?-?_?){6,20}$/gm
   
   passwordErr=document.getElementById('password-err');
   if(passwordValue=="")
   {
   }
   else{
     passwordErr.innerHTML = "Password must be alphanumeric (@,_ and - are also allowed) and between 6-20 characters";
     return true;
   }
}
password.oninput = function(){
   passwordValidation();
   
}

// Your Bio Validation
let bioText= document.getElementById("bio");
let bioValidation= function(){
   bioValue = bioText.value.trim(); 
   validBio=/(^[a-z]*'?.?_?[a-z]*,?.?'?_?[a-z]*.?){3,50}$/gm;
   bioErr=document.getElementById('bio-err');
   if(bioValue=="")
   {
    bioErr.innerHTML="Bio must contain only lowercase letters, underscores, hyphens and be 8-50 characters";
   }else if(!validBio.test(bioValue)){
     bioErr.innerHTML = "Bio must contain only lowercase letters, underscores, hyphens and be 8-50 characters";
   }else{
     bioErr.innerHTML="";
     return true;
   }
  }
bioText.oninput = function(){
   bioValidation();
}

// form validation on submit
document.getElementById("registrationForm").onsubmit=function(e){
  
  firstNameValidation();
  lastNameValidation();
  emailAddressValidation();
  mobileNumberValidation();
  passwordValidation();
  bioValidation();

  if(firstNameValidation() == true && 
    lastNameValidation() == true && 
    emailAddressValidation() == true && 
    mobileNumberValidation() == true && 
    passwordValidation() == true && 
    bioValidation() == true){
    return true;
  }else{
    return false;
  }
}
