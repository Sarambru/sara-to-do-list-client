'use strict'

const store = require('../app/store')

const signUpSuccess = function (responseData) {
  // update the message on the screen
  $('#user-display').text('Signed up successfully!')
  // remove existing classes and add a green-text success class
  $('#user-display').removeClass()
  $('#user-display').addClass('text-success')

  // clear(reset) the forms on the page
  $('form').trigger('reset')

  console.log('signUpSuccess ran. responseData is ', responseData)

  $('#after-sign-in').show()
  $('#before-sign-in').show()
}

const signUpFailure = function (error) {
  $('#error-message').text('Sign up failed')
  $('#error-message').removeClass()

  console.error('signUpFailure ran. Error is :', error)

  $('#signUpFailure').addClass('text-danger')
  $('#after-sign-in').hide()
  $('#before-sign-in').show()
}

const signInSuccess = function (responseData) {
  store.user = responseData.user
  $('#user-display').text('Signed in successfully!')
  $('#user-display').removeClass()
  $('#user-display').addClass('text-success')
  // clear the forms on the page
  $('form').trigger('reset')
  // hide before sign in elements
  $('#before-sign-in').hide()
  $('#after-sign-in').show()
}

const signInFailure = function (error) {
  $('#error-message').text('Sign In failed')
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')
  console.error('the error is' + error)
}

const signOutSuccess = function () {
  $('#user-display').text('Signed out successfully!')
  $('user-display').removeClass()
  $('#user-display').addClass('text-success')
  $('form').trigger('reset')
  // hide the after sign in elements
  $('#after-sign-in').hide()
  $('#before-sign-in').show()
  console.log('signOutSuccess ran')
}

const signOutFailure = function (error) {
  $('#error-message').text('Signing out failed!')
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')
  $('form').trigger('reset')
  console.log(error)
}

const changePasswordSuccess = function () {
  $('#user-display').text('Changed password successfully')

  $('#user-display').removeClass()
  $('#user-display').addClass('text-success')

  // clear (reset) the forms on the page
  $('form').trigger('reset')

  console.log('changePasswordSuccess ran!')
}

const changePasswordFailure = function (error) {
  $('#error-message').text('Error on change password')

  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')

  console.error('changePasswordFailure ran. Error is :', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
