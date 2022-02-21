/* eslint-disable no-tabs */
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('../auth/events')

$(() => {
  // your JS code goes here

  // test/
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#log-in-form').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)
})

// log in and sign up form JS

$('.form')
  .find('input, textarea')
  .on('keyup blur focus', function (e) {
    const $this = $(this)
    const label = $this.prev('label')

    if (e.type === 'keyup') {
      if ($this.val() === '') {
        label.removeClass('active highlight')
      } else {
        label.addClass('active highlight')
      }
    } else if (e.type === 'blur') {
      if ($this.val() === '') {
        label.removeClass('active highlight')
      } else {
        label.removeClass('highlight')
      }
    } else if (e.type === 'focus') {
      if ($this.val() === '') {
        label.removeClass('highlight')
      } else if ($this.val() !== '') {
        label.addClass('highlight')
      }
    }
  })

$('.tab a').on('click', function (e) {
  e.preventDefault()

  $(this).parent().addClass('active')
  $(this).parent().siblings().removeClass('active')

  const target = $(this).attr('href')

  $('.tab-content > div').not(target).hide()

  $(target).fadeIn(400)
})

// to do list javascript

let i = 1
$(document).on('click', '.add-todo', function () {
  const todoInputData = $(this).siblings('input').val()
  const todoListData =
		`<div class="row-parent">
  <div class="list-row">
  <div class="list-num">` +
		i +
		`.</div>
  <div class="list-data">` +
		todoInputData +
		`</div>
  <div class="edit-todo">&#9998;</div>
  <div class="remove-todo">&#x2715;</div>
  </div>
  <div class="list-error"></div></div>`
  if ($.trim(todoInputData) == '') {
    $(this)
      .parents('.todo-content')
      .find('.error')
      .text('You must enter something!')
  } else {
    $(this).parents('.todo-content').find('.todo-list').append(todoListData)
    i++
    $(this).parents('.todo-content').find('.error').empty()
  }
  $(this).siblings('input').val('')
})
// add todo list on pressing Enter key
$(document).keydown(function (event) {
  if (event.which == 13) {
    event.preventDefault()
    $('.add-todo').click()
  }
})
// remove todo list script
$(document).on('click', '.remove-todo', function () {
  $(this).parent('.list-row').remove()
})
// edit todo list script
$(document).on('click', '.edit-todo', function () {
  $(this).attr('class', 'update-todo')
  $(this).html('&#x2713;')
  const listText = $(this).parent('.list-row').find('.list-data').html()
  const listDataHeight = $(this)
    .parent('.list-row')
    .find('.list-data')
    .innerHeight()
  $(this).parent('.list-row').find('.list-data').attr('class', 'update-data')
  if (listDataHeight > 50) {
    $(this)
      .parent('.list-row')
      .find('.update-data')
      .html(
        ''
      )
  } else {
    $(this)
      .parent('.list-row')
      .find('.update-data')
      .html(
        '<textarea style="height:' +
					listDataHeight +
					'px">' +
					listText +
					'</textarea>'
      )
  }
})
// update todo script
$(document).on('click', '.update-todo', function () {
  // eslint-disable-next-line prefer-const
  let listText = $(this).parent('.list-row').find('textarea').val()
  if ($.trim(listText) == '') {
    $(this)
      .parents('.row-parent')
      .find('.list-error')
      .text('You must enter something!')
  } else {
    $(this).attr('class', 'edit-todo')
    $(this).html('&#9998;')
    $(this).parent('.list-row').find('.update-data').attr('class', 'list-data')
    // eslint-disable-next-line prefer-const
    let listText = $(this).parent('.list-row').find('.list-data').html(listText)
    $(this).parents('.row-parent').find('.list-error').empty()
  }
})
// line through the  todo list script
$(document).on('click', '.list-data', function () {
  $(this).toggleClass('line-through')
})

// $(() => {
// })
