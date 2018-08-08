'use strict'
const store = require('../store')

const signUpSuccess = function (signUpResponse) {
  $('.error-view').css('display', 'none')
}

const signUpError = function (error) {
  $('#error-message').html('ERROR SIGNING-UP PLEASE TRY AGAIN', error)
  $('.error-view').css('display', 'block')
}

const signInSuccess = function (response) {
  $('.login-view').css('display', 'none')
  $('.logged-in-view').css('display', 'block')
  $('.error-view').css('display', 'none')
  store.user = response.user
}

const signInError = function (error) {
  $('#error-message').html('ERROR SIGNING-IN PLEASE TRY AGAIN', error)
  $('.error-view').css('display', 'block')
}

const changePasswordSuccess = function (response) {
  $('#changePasswordModalLabel').html('You have successfully change your password.', response)
  $('#changePasswordModalLabel').css('color', 'green')
}

const changePasswordError = function () {
  $('#changePasswordModalLabel').html('ERROR CHANGING PASSWORD PLEASE TRY AGAIN')
  $('#changePasswordModalLabel').css('color', 'red')
}

const signOutSuccess = function (response) {
  $('.login-view').css('display', 'block')
  $('.logged-in-view').css('display', 'none')
  $('.error-view').css('display', 'none')
  resetAuth()
  delete store.user
}

const signOutFailure = function (error) {
  $('#error-message').html('ERROR SIGNING-OUT PLEASE TRY AGAIN ', error)
  $('.error-view').css('display', 'block')
}

const resetAuth = function () {
  $('#changePasswordModalLabel').html('Change Password')
  $('#changePasswordModalLabel').css('color', 'black')
  $('#sign-up-form')[0].reset()
  $('#sign-in-form')[0].reset()
  $('#change-password-form')[0].reset()
}

module.exports = {
  signUpSuccess,
  signUpError,
  signInSuccess,
  signInError,
  changePasswordSuccess,
  changePasswordError,
  signOutSuccess,
  signOutFailure,
  resetAuth
}
