const api = 'http://localhost/portfolio-design-frontend/api/'

async function getData() {
  const response = await fetch(api + 'get_messages_api.php')
  const data = await response.json()

  let div = document.querySelector('#test')

  div.innerHTML = data
}

getData()
