const store = require('./store')

const signUpSuccess = function (responseData) {
  $('#user-display').removeClass()
  $('#user-display').addClass('text-success')
  $('#user-display').text('Signed up successfully!')
  setTimeout(() => {
    $('#user-display').empty()
  }, 5000)
  //   // remove existing classes and then add a green text-success class from boostrap
  //   // we need to remove classes so it doesnt interfere with our bootstrap if a class has been determined before

  //   // clear our the form field
  $('form').trigger('reset')
  console.log('responseData is', responseData)
}

const signUpFailure = function (error) {
  $('#user-display').text("The passwords you entered don't match. Please try again")
  $('#user-display').removeClass()
  $('#user-display').addClass('text-danger')
  setTimeout(() => {
    $('#user-display').empty()
  }, 5000)
  // clear our the form field
  $('form').trigger('reset')

  console.log('error is', error)
}

const signInSuccess = function (responseData) {
  $('#login-section').hide()

  console.log('sign in store is', store)
  store.user = responseData.user
  $('form').trigger('reset')

  $('#user-display').html('')
  $('#user-display').removeClass()
  $('#user-display').addClass('text-success')
  $('#user-display').text('Signed in successfully!')

  setTimeout(() => {
    $('#user-display').empty()
  }, 5000)
  $('.after-sign-in').show()
  $('#top-bar').show()
  $('.after-sign-in button').addClass('btn btn-primary btn-sm')

  console.log('sign in responseData is', responseData)
}
const signInFailure = function (error) {
  $('#user-display').text('The credentials you entered are incorrect. Check your email and password and try again')

  $('#user-display').removeClass()
  $('#user-display').addClass('text-danger')
  setTimeout(() => {
    $('#user-display').empty()
  }, 2000)
  // clear our the form field
  $('form').trigger('reset')
  console.log('sign in error is', error)
}

const changePasswordSuccess = function (responseData) {
  $('#user-display').text('Changed password successfully')
  setTimeout(() => {
    $('#user-display').empty()
  }, 2000)
  $('#user-display').removeClass()
  $('#user-display').addClass('text-success')

  $('form').trigger('reset')
  console.log('change password responseData is', responseData)
}

const changePasswordFailure = function (error) {
//   $('#user-display').text('CHanging passwords failed!')

  //   $('#user-display').removeClass()
  //   $('#user-display').addClass('text-danger')

  //   $('form').trigger('reset')
  console.log('change pwd error is', error)
}

const signOutSuccess = function () {
  $('#user-display').text('Signed out successfully')
  $('#user-display').removeClass()
  $('#user-display').addClass('text-success')
  setTimeout(() => {
    $('#user-display').empty()
  }, 5000)
  $('form').trigger('reset')
  store.user = null
  $('form').trigger('reset')
  $('.after-sign-in').hide()
  $('#login-section').show()

  console.log('signOutSuccess ran and nothing was returned!')
}

const signOutFailure = function (error) {
  $('#user-display').text('Signing out failed. Please try again')

  $('#user-display').removeClass()
  $('#user-display').addClass('text-danger')

  $('form').trigger('reset')
  console.log('error is', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
