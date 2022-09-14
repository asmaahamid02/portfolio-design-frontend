/* JS */

const form = document.querySelector('#form')
const full_name = document.querySelector('#full_name')
const email = document.querySelector('#email')
const phone = document.querySelector('#phone')
const message = document.querySelector('#message')
const contact_div = document.querySelector('#contact-head')

new_div = document.createElement('div')
contact_div.parentNode.insertBefore(new_div, contact_div.nextSibling)
new_div.classList.add('error')
new_div.style.display = 'none'

function isEmpty(str) {
  return !str.trim().length
}

function checkValidation(name_val, email_val, phone_val, message_val) {
  let error = ''
  if (
    isEmpty(name_val) ||
    isEmpty(email_val) ||
    isEmpty(phone_val) ||
    isEmpty(message_val)
  ) {
    error += 'You should fill all the fields\r\n'
  }
  if (name_val.length < 5) {
    error += 'Name is short!\r\n'
  }

  if (email_val.includes('@')) {
    let splitted_str = email.value.split('@')

    if (splitted_str[0].length < 3 || splitted_str[1].length < 5) {
      error += 'Email is short!\r\n'
    }
  } else {
    error += 'Email is not valid\r\n'
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
      // console.log('valid')
    } else {
      error += 'Invalid number\r\n'
    }
  } else {
    error += 'Invalid number\r\n'
  }

  if (message_val.length < 100) {
    error += 'Message is short\r\n'
  }

  return error
}

//move to the messages page
let view_messages_btn = document.querySelector('#view-messages')

view_messages_btn.addEventListener('click', () => {
  window.location.href = '../view_messages.html'
})
