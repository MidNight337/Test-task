const form = document.querySelector('form')
const inputs = document.querySelectorAll('input, textarea')

form.addEventListener('submit', event => {
    inputs.forEach(input => {
        if (input.value == '') {
            event.preventDefault()
            input.classList.add('error')
        }
    })
})