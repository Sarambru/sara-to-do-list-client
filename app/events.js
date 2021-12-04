const getFormFields = require('../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  // sign up request
  api.signUp(formData).then(ui.signUpSuccess).catch(ui.signUpFailure)

  console.log(formData)
  // eslint-disable-next-line func-call-spacing
  api.signUp(formData).then(ui.signUpSuccess).catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData).then(ui.signInSuccess).catch(ui.signInFailure)
}

const onSignOut = function () {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signOut(formData).then(ui.signOutSuccess).catch(ui.signOutFailure)
}

// sign up message

/* const form = document.getElementById('sign-up-form')
form.addEventListener('submit', myFunction)

function myFunction () {
  alert('You are now registered!')
  event.preventDefault()
}

const signInForm = document.getElementById('log-in-form')
signInForm.addEventListener('submit', myFunction2)

function myFunction2 () {
  alert('You are now signed in :)')
}
const signOutButton = document.getElementById('sign-out')
signOutButton.addEventListener('click', myFunction3)

function myFunction3 () {
  alert('You are signed out.')
}
*/

const newList = function (event) {
  event.preventDefault()
  api.newList()
    .then(ui.newListSuccess)
    .catch(ui.newListFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  newList
}
