'use strict'

// A function to run when we successfully get all of the books from the API
const onIndexTasksSuccess = function (responseData) {
  // extract the books from our response data into a variable to make it easier to use
  const tasks = responseData.tasks
  console.log(responseData)

  // create a string that will store all of our books as html
  // so we can use the `.html` method, to display the books on the page later
  let tasksHtml = ''

  // loop over all of the books
  tasks.forEach((task) => {
    // add html for each book, to the booksHtml variable
    tasksHtml += `
      <div>
      <h2>Name: ${task.name}</h4>
      <p>ID: ${task._id}</p>
      
    `
  })

  // select the div with id books-display ($('#books-display'))
  // and update its html, to be the html of all the books we want to show
  $('#tasks-display').html(tasksHtml)
}

const onShowTaskSuccess = function (responseData) {
  // extract the book object from our response's data
  const task = responseData.task
  console.log(responseData)

  // create the html to display a single book
  const taskHtml = `
    <div>
    <h4>Name: ${task.name}</h4>
    </div>
  `

  // for the div with the id books-display,
  // set its html to be our book's html
  $('#tasks-display').html(taskHtml)
  // select every form on the page, then reset those forms
  // (clear the inputs)
  $('form').trigger('reset')
}

// give the title parameter the default of 'Book'
const onDestroyTaskSuccess = function (name = 'Task') {
  // showing the title of the book that was destroyed
  $('#tasks-display').text(`${name} was destroyed successfully`)

  // $('#books-display').text('Book was destroyed successfully')
  // select the div with the id `books-display` add the bootstrap
  // class of `text-success` to make the text green
  $('#tasks-display').addClass('text-success')

  // alternatively, we could add our own custom css class in index.scss
  // $('#books-display').addClass('success')

  // after 5 seconds (5000 milliseconds), run our callback function
  setTimeout(() => {
    // remove the message from books-display
    $('#tasks-display').html('')
    // remove the green color causes by `text-success`
    $('#tasks-display').removeClass('text-success')
  }, 5000)

  $('form').trigger('reset')
}

const onUpdateTaskSuccess = function () {
  $('#tasks-display').text('Task was updated successfully!')
  $('#tasks-display').addClass('text-success')

  // after 5 seconds (5000 milliseconds), run our callback function
  setTimeout(() => {
    // remove the message from books-display
    $('#tasks-display').html('')
    // remove the green color causes by `text-success`
    $('#tasks-display').removeClass('text-success')
  }, 5000)

  $('form').trigger('reset')
}
// show the book after it is created
const onCreateTaskSuccess = function (responseData) {
  // extract the book object from our response's data
  const task = responseData.task
  console.log(responseData)

  // create the html to display a single book
  const taskHtml = `
    <div>
    <h6>You added a task!</h6>
      <h4>Name: ${task.name}</h4>
      <p>Description: ${task.description}</p>
      <p>ID: ${task._id}</p>
    </div>
  `

  // for the div with the id books-display,
  // set its html to be our book's html
  $('#tasks-display').html(taskHtml)

  $('form').trigger('reset')
}

// A function to run anytime any error occurs
const onError = function (err) {
  // if an error occurs, we will log the error (err)
  console.error(err)

  $('#error-message').text('Something went wrong, please try again')
  // make our error-message red, by adding the bootstrap text-danger class
  $('#error-message').addClass('text-danger')

  // after 5 seconds (5000 milliseconds), run our callback function
  setTimeout(() => {
    // remove the message from books-display
    $('#error-message').html('')
    // remove the red color caused by `text-danger`
    $('#error-message').removeClass('text-danger')
  }, 5000)

  $('form').trigger('reset')
}

// export our ui success and failure handler functions
// so they can be imported in `events.js`
module.exports = {
  onIndexTasksSuccess,
  onShowTaskSuccess,
  onDestroyTaskSuccess,
  onUpdateTaskSuccess,
  onCreateTaskSuccess,
  onError
}
