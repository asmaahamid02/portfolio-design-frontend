// const form = document.querySelector('#form')

const save_message = async (formData) => {
  try {
    const res = await fetch(
      'http://localhost/portfolio-design-frontend/api/save_message_api.php',
      {
        method: 'POST',
        cache: 'no-cache',
        cors: 'no-cors',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'form-data',
        },
        body: formData,
      }
    )
    // .then(response => response.json())
    // const content = await res.json()
    return res
  } catch (error) {
    console.log('error', error.response)
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault()

  //   if (checkValidation()) {
  let formData = new URLSearchParams(new FormData(form))
  save_message(formData).then((response) => console.log(response))
  //   }
})
