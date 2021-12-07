'use strict'

const getFormFields = require('../../lib/get-form-fields')

const api = require('./api')
const ui = require('./ui')

// this function is called whenever the `books-index` button is clicked
const onIndexTasks = () => {
  // make our index request GET /books
  api.index()
    // if our HTTP request to get the books was successful, *then*
    // update our page to show all of the books
    .then(ui.onIndexTaskSuccess)
    // otherwise, if an error occurred, log it as a red error message
    .catch(ui.onError)
}

const onShowTask = (event) => {
  // prevent the default action of the form refreshing the page
  // when it is submitted.
  event.preventDefault()

  // event.target is whatever submitted the event, we are
  // storing it in the user friendly variable `form`
  const form = event.target
  // Get the data out of our `form`
  const formData = getFormFields(form)
  console.log(formData)

  // extract the id from our form's data
  const id = formData.task.id

  // make an HTTP request, to show a single book based on its id
  api.show(id)
    // if getting a single book was successful, show it on the page
    .then(ui.onShowTaskSuccess)
    // otherwise, show an error message
    .catch(ui.onError)
}

const onDestroyTask = (event) => {
  // prevent the default action of the form refreshing the page
  // when it is submitted.
  event.preventDefault()

  // event.target is whatever submitted the event, we are
  // storing it in the user friendly variable `form`
  const form = event.target
  // Get the data out of our `form`
  const formData = getFormFields(form)
  console.log(formData)

  // extract the id from our form's data
  const id = formData.task.id

  // make an HTTP request, to destroy a single book based on its id
  api.destroy(id)
    // if destroying a single book was successful, show it on the page
    .then(ui.onDestroyTaskSuccess)
    // otherwise, show an error message
    .catch(ui.onError)
}

const onUpdateTask = (event) => {
  // prevent the default action of the form refreshing the page
  // when it is submitted.
  event.preventDefault()

  // event.target is whatever submitted the event, we are
  // storing it in the user friendly variable `form`
  const form = event.target
  // Get the data out of our `form`
  const formData = getFormFields(form)
  console.log(formData)

  // extract the id from our form's data
  const id = formData.task.id

  // make an HTTP request, to update a single book based on its id
  // pass `formData` to update the book with a new title & author
  api.update(id, formData)
  // if getting a single book was successful, update it on the page
    .then(ui.onUpdateTaskSuccess)
  // otherwise, show an error message
    .catch(ui.onError)
}

const onCreateTask = (event) => {
  // prevent the default action of the form refreshing the page
  // when it is submitted.
  event.preventDefault()

  // event.target is whatever submitted the event, we are
  // storing it in the user friendly variable `form`
  const form = event.target
  // Get the data out of our `form`
  const formData = getFormFields(form)
  console.log(formData)

  // make an HTTP request, to create a single book
  // pass `formData` to update the book with a new title & author
  api
    .create(formData)
  // if creating a single book was successful, update it on the page
    .then(ui.onCreateTaskSuccess)
  // otherwise, show an error message
    .catch(ui.onError)
}

// export the `onIndexBooks` function, so that it can be `imported` and used
// in `app.js`
module.exports = {
  onIndexTasks,
  onShowTask,
  onDestroyTask,
  onUpdateTask,
  onCreateTask
}
