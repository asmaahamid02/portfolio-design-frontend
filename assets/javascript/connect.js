// const form = document.querySelector('#form')

// const full_name = document.querySelector('#full_name')
// const email = document.querySelector('#email')
// const phone = document.querySelector('#phone')
// const message = document.querySelector('#message')

// const form_data = (data) => {
//   let formData = new FormData()
//   data.forEach((col) => {})
// }
const save_message = async () => {
  try {
    const res = await fetch(
      'http://localhost/portfolio-design-frontend/api/save_message_api.php',
      {
        method: 'POST',
        // cache: 'no-cache',
        // cors: 'no-cors',
        // credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    )
    // const content = await res.json()
    return res
  } catch (error) {
    console.log('error', error.response)
  }
}

const api = 'http://localhost/portfolio-design-frontend/api/'

form.addEventListener('submit', (e) => {
  e.preventDefault()

  let name_val = full_name.value
  let email_val = email.value
  let phone_val = phone.value
  let message_val = message.value

  const data = {}
  let error = checkValidation(name_val, email_val, phone_val, message_val)

  new_div.style.display = 'block'
  if (!isEmpty(error)) {
    new_div.textContent = error
    // new_div.style.display = 'block'
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
      // headers: {
      //   'Content-type': 'application/json; charset=UTF-8',
      // },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.success)
        if (data.success) {
          new_div.classList.remove('error')
          new_div.classList.add('success')
          new_div.textContent = 'Message sent successfully'
          // close the div in 5 secs
          window.setTimeout('closeHelpDiv(new_div);', 5000)
        } else {
          new_div.textContent = 'Something went wrong, try again'
          // close the div in 5 secs
          window.setTimeout('closeHelpDiv(new_div);', 5000)
        }
      })
      .catch((error) => console.error('Error:', error))
  }
})

function closeHelpDiv(element) {
  element.style.display = ' none'
}
