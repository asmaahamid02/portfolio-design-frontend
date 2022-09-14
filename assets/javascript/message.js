async function getData() {
  const response = await fetch(
    'http://localhost/portfolio-design-frontend/api/get_messages_api.php'
  )
  const data = await response.json()

  let table_body = document.querySelector('.table-body')
  let content_body = ''

  data.forEach((row) => {
    content_body += '<tr>'
    content_body += '<td>' + row.full_name + '</td>'
    content_body += '<td>' + row.email + '</td>'
    content_body += '<td>' + row.phone + '</td>'
    content_body += '<td>' + row.message + '</td>'
    content_body += '</tr>'
  })
  table_body.innerHTML = content_body
}

getData()
