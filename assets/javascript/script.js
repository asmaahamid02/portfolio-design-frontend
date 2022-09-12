/* JS */

const form = document.querySelector('#form')
const full_name = document.querySelector('#fullName')
const email = document.querySelector('#email')
const phone = document.querySelector('#phone')
const message = document.querySelector('#message')

//validation

//form submit
form.addEventListener('submit', (e) => {
  e.preventDefault()
})

function isEmpty(str) {
  return !str.trim().length
}

function checkValidation() {
  let error = ''
  let name_val = full_name.value
  let email_val = email.value
  let phone_val = phone.value
  let message_val = message.value

  if (
    !isEmpty(name_val) ||
    !isEmpty(email_val) ||
    !isEmpty(phone_val) ||
    !isEmpty(message_val)
  ) {
    error = 'You should fill all the fields'
  }
  if (name_val.length < 5) {
    error = 'Name is short!'
  }

  if (email_val.includes('@')) {
    let splitted_str = email.value.split('@')

    if (splitted_str[0].length < 3 || splitted_str[1].length < 5) {
      error = 'Email is short!'
    }
  } else {
    error = 'Email is not valid'
  }

  if (
    phone_val.startsWith('+961') &&
    (phone_val.length == 12 || phone_val.length == 11)
  ) {
    let number = phone_val.substring(4)

    if (
      (number.startsWith('3') && number.length == 7) ||
      ((number.startsWith('71') ||
        number.startsWith('76') ||
        number.startsWith('70')) &&
        number.length == 8)
    ) {
      console.log('valid')
    } else {
      error = 'Invalid number'
    }
  } else {
    error = 'Invalid number'
  }

  if (message_val.length < 100) {
    error = 'Message is short'
  }
}
