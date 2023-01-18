const body = document.querySelector('body')
// const f_name = document.querySelector('.f_name')
// const l_name = document.querySelector('.l_name')
// const email = document.querySelector('.email')
// const password = document.querySelector('.password')
// const tele = document.querySelector('.tele')
// const bio = document.querySelector('.bio')
const error = document.querySelector('.f_error_message')
error.textContent = ``
const button = document.querySelector('.submit_btn')

const validateForm = () => {
    button.addEventListener('click', () => {
   const f_name = document.querySelector('.f_name')
   const l_name = document.querySelector('.l_name')
   const email = document.querySelector('.email')
   const password = document.querySelector('.password')
   const tele = document.querySelector('.tele')
   const bio = document.querySelector('.bio')
   



        const nameRegex = /^[a-zA-Z]{3,16}$/gm;
  if (nameRegex.test(f_name.value) === false) {
  error.textContent= `First name must be alphanumeric and contain 3-16 characters`  
    }  
    else {
        error.textContent = ``
    }

    const name2Regex = /^\w{3,16}$/gm;
    if (name2Regex.test(l_name.value) === false) {
        error.textContent= `last name must be alphanumeric and contain 3-16 characters`  
          }  
          else {
              error.textContent = ``
          }
    })

}

validateForm()