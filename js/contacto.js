const $form = document.querySelector('#form')
const $buttonmail = document.querySelector('#trucazo')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
  event.preventDefault()
  const form = new FormData(this)
  $buttonmail.setAttribute('href', `mailto:jeancmt79@gmail.com?subject= nombre ${form.get('name')} correo ${form.get('email')} telefono ${form.get('number')} asunto ${form.get('asunto')}&body= ${form.get('mensaje')}`)
  $buttonmail.click()
}