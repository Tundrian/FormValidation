let reg = /[a-z]/ig
    //don't put regex in quotes

let reg2 = new RegExp(/[a-z]/, "ig")
    //old way to create regex

// Regex patter declaration
const patterns = {
    telephone: /^\d{11}$/ig,
    username: /\d/ig,
    email: /\d/ig,
    password: /\d/ig
}

// Validation function
function validate(field, regex){
    // console.log(regex.test(field.value))
    if(regex.test(field.value)){
        field.className = 'valid'
    } else {
        field.className = 'invalid'
    }
}

// Event Listeners
const inputs = document.querySelectorAll('input')

inputs.forEach( input => {
    input.addEventListener('keyup', (e) => {
        // console.log(e.target.attributes.name.value)
        validate(e.target, patterns[e.target.attributes.name.value])
    })
})