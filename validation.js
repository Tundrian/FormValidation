//don't put regex in quotes
let reg = /[a-z]/ig
    
 //old way to create regex
let reg2 = new RegExp(/[a-z]/, "ig")
   
// Regex patter declaration
const patterns = {
    telephone: /^\d{11}$/ig,
    username: /^[a-z\d]{5,12}$/i,
    password: /^[\w@-]{8,20}$/,
    slug: /^[a-z\d-]{8,20}$/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
}

// Validation function
function validate(field, regex){
    regex.test(field.value) ? field.className = 'valid' :  field.className = 'invalid'
}

// Event Listeners
const inputs = document.querySelectorAll('input')

inputs.forEach( input => {
    input.addEventListener('keyup', (e) => {
        validate(e.target, patterns[e.target.attributes.name.value])
    })
})