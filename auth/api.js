/* eslint-disable no-tabs */

'use strict'

const config = require('../app/config')

// Requiring the store file for access to the store object
const store = require('../app/store')

const signUp = function (formData) {
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

const changePassword = function (formData) {
  return $.ajax({
    url: `${config.apiUrl}/change-password`,
    method: 'PATCH',
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword
}
