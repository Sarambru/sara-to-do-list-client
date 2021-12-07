
'use strict'

const { apiUrl } = require('./config')

const config = require('../app/config')
const store = require('../app/store')

const signUp = (formData) => {
  return $.ajax({
    url: `${config.apiUrl}/sign-up`,
    method: 'POST',
    data: formData
  })
}
const signIn = (formData) => {
  return $.ajax({
    url: `${config.apiUrl}/sign-in`,
    method: 'POST',
    data: formData
  })
}

const signOut = function () {
  return $.ajax({
    url: `${config.apiUrl}/sign-out`,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut
}
