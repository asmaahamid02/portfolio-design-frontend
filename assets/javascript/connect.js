const api = 'http://localhost/portfolio-design-frontend/api/'

form.addEventListener('submit', (e) => {
  e.preventDefault()

  let name_val = full_name.value
  let email_val = email.value
  let phone_val = phone.value
  let message_val = message.value

  const data = {}
  let error = checkValidation(name_val, email_val, phone_val, message_val)

  if (!isEmpty(error)) {
    displayErrorSuccess(new_div, error, 'success', 'error')
    return
  } else {
    console.log(api + 'save_message_api.php')
    fetch(api + 'save_message_api.php', {
      method: 'POST',
      body: new URLSearchParams({
        full_name: name_val,
        email: email_val,
        phone: phone_val,
        message: message_val,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.success)
        if (data.success) {
          displayErrorSuccess(
            new_div,
            'Message sent successfully',
            'error',
            'success'
          )

          full_name.value = ''
          email.value = ''
          phone.value = ''
          message.value = ''
        } else {
          displayErrorSuccess(
            new_div,
            'Something went wrong, try again',
            'success',
            'error'
          )
        }
      })
      .catch((error) => console.error('Error:', error))
  }
})

//function to diplay error or success messages -- messages will disappear after 10 sec
const displayErrorSuccess = (element, text, classToremove, classToAdd) => {
  if (new_div.classList.contains(classToremove)) {
    new_div.classList.remove(classToremove)
  }
  if (!new_div.classList.contains(classToAdd)) {
    new_div.classList.add(classToAdd)
  }
  element.textContent = text
  element.style.display = 'block'

  setTimeout(() => {
    element.style.display = 'none'
  }, 5000)
}
