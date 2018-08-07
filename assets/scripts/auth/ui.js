'use strict'
const store = require('../store')

const signUpSuccess = function (signUpResponse) {
  console.log('Sign-up success!!!')
}

const signUpError = function (error) {
  console.log('Sign-up error!!!', error)
  // $('#signUpModalLabel').html('Error. Please Try Again ', error)
  // $('#signUpModalLabel').css('color', 'red')
}

const signInSuccess = function (response) {
  $('.login-view').css('display', 'none')
  $('.logged-in-view').css('display', 'block')
  console.log('Sign-in success!!!')
  store.user = response.user
}

const signInError = function () {
  console.log('Sign-in error!!!')
  // $('#signInModalLabel').html('Error. Please Try Again')
  // $('#signInModalLabel').css('color', 'red')
}

const changePasswordSuccess = function (response) {
}

const changePasswordError = function () {
}

const signOutSuccess = function (response) {
  $('.login-view').css('display', 'block')
  $('.logged-in-view').css('display', 'none')
  delete store.user
}

const signOutFailure = function () {
}

const resetAuth = function () {

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
