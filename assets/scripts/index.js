'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')
const itemEvents = require('./item/events')

$(() => {
  // your JS code goes here

  // Authentication Event Handler
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePW)
  $('#sign-out').on('click', authEvents.onSignOut)

  $('#create-item-form').on('submit', itemEvents.onCreateWarranty)

  $('#warrantyList').on('click', '.deleteButton', itemEvents.onDeleteWarranty)
})
