'use strict'

const store = require('./store')

const signUpSuccess = function (responseData) {
  $('#log-in-display').text('Signed up!')
  $('#before-sign-in').removeClass()
  $('#before-sign-in').addClass('text-success')
  $('form').trigger('reset')
  $('#before-sign-in').hide()
  $('#after-sign-in').show()
  console.log('responseData is', responseData)
}

const signUpFailure = function (error) {
  // tell the user it was failure
  $('#error-message').text('Sign up failed')

  // remove existing classes, then add a red text-danger class from bootstrap
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')
  $('#after-sign-in').hide()
  $('#before-sign-in').show()
  // print the error
  console.error('error is', error)
}

const signInSuccess = function (responseData) {
  store.user = responseData.user
  console.log('store is', store)
  $('#log-in-display').text('Signed in successfully!')
  $('#log-in-display').removeClass()
  $('#log-in-display').addClass('text-success')
  // clear forms
  $('form').trigger('reset')
  $('#before-sign-in').hide()
	$('#after-sign-in').show()
}

// eslint-disable-next-line node/handle-callback-err
const signInFailure = function (error) {
  $('error-message').text('Sign in failed')
  $('error-message').removeClass()
  $('error-message').addClass('text-danger')
  $('#after-sign-in').hide()
  $('#before-sign-in').show()
  console.error('error is', error)
}

const signOutSuccess = function (responseData) {
  $('#log-in-display').text('Signed out')
  $('#log-in-display').removeClass()
  $('#log-in-display').addClass('text-success')
  $('form').trigger('reset')

  // sign out
  $('#after-sign-in').hide()
  $('#before-sign-in').show()
  console.log('responseData is', responseData)
}

const signOutFailure = function (error) {
  $('#error-message').text('Sign Out Failure')
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')
  $('#after-sign-in').hide()
  $('#before-sign-in').show()
  console.error('error is', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure
}
