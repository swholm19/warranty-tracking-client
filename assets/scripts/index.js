'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')
const authUi = require('./auth/ui')
const itemEvents = require('./item/events')

$(() => {
  // your JS code goes here

  // Authentication Event Handler
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#changePwd').on('click', authUi.resetAuth)
  $('#change-password-form').on('submit', authEvents.onChangePW)
  $('#sign-out').on('click', authEvents.onSignOut)

  // Create Warranty Modal Event Handler
  $('#createWarranty').on('click', () => {
    $('#create-item-form')[0].reset()
    $('#createModalLabel').html('Create Item Warranty')
    $('#createModalLabel').css('color', 'black')
  })
  $('#create-item-form').on('submit', itemEvents.onCreateWarranty)

  // Delete and Update Handlebar Buttons Event Handlers
  $('#warrantyList').on('click', '.deleteButton', itemEvents.onDeleteWarranty)
  $('#warrantyList').on('click', '.updateButton', itemEvents.onOpenUpdateModal)
  $('#warrantyList').on('submit', '.update-form', itemEvents.onUpdateWarranty)
})
