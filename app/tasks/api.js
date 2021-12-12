'use strict'

const config = require('../config')
const store = require('../store')

const create = function (taskData) {
  return $.ajax({
    url: config.apiUrl + '/tasks',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: taskData
  })
}

const index = function () {
  return $.ajax({
    url: config.apiUrl + '/tasks',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

// make DELETE request to /task/:id to delete a single task
const destroy = function (id) {
  return $.ajax({
    url: config.apiUrl + '/tasks/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const update = function (id, taskData) {
  return $.ajax({
    url: config.apiUrl + '/tasks/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: taskData
  })
}

module.exports = {
  create,
  index,
  update,
  destroy
}
