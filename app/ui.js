/* eslint-disable no-tabs */
const signUpSuccess = function (responseData) {
  $('#signUp-display').text('Signed up successfully!')
  $('#signUp-display').removeClass()
  $('#signUp-display').addClass('text-success')
  $('#after-sign-in').show()
  $('#before-sign-in').show()
  $('form').trigger('reset')

  console.log('responseData is ', responseData)
}

const signUpFailure = function (error) {
  $('#signUpFailure').text('Sign up failed')
  $('#signUpFailure').removeClass()
  $('#signUpFailure').addClass('text-danger')
  $('#after-sign-in').hide()
  $('#before-sign-in').show()
  $('#signOut').hide()
  console.error(error)
}

const signInSuccess = function (responseData) {
  store.user = responseData.user
  console.log('store is', store)
  $('#signIn-display').text('Signed in successfully!')
  $('#signIn-display').removeClass()
  $('#signIn-display').addClass('text-success')
  $('form').trigger('reset')
  $('#before-sign-in').hide()
  $('#after-sign-in').show()
  console.log('responseData is', responseData)
}

const signInFailure = function (error) {
  $('#error-message').text('Sign In failed')
  console.error('the error is' + error)
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')
  console.error(error)
  $('#before-sign-in').show()
  $('#after-sign-in').hide()
  $('#signOut').hide()
}

const signOutSuccess = function (responseData) {
  $('#signOut-display').text('Signed out successfully!')
  $('#signOut-display').removeClass()
  $('#signOut-display').addClass('text-success')
  $('form').trigger('reset')
  $('#after-sign-in').hide()
  $('#before-sign-in').show()
  console.log('responseData is', responseData)
}

const signOutFailure = function (error) {
  $('#error-message').text('Signing out failed!')
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')
  $('#before-sign-in').show()
  $('#after-sign-in').hide()
  console.log(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
}