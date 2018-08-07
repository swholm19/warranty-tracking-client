'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const authUi = require('./ui.js')
const authApi = require('./api.js')
const itemEvents = require('../item/events')

const onSignUp = function (event) {
  event.preventDefault()
  const formdata = getFormFields(event.target)
  authApi.signUp(formdata)
    .then(authUi.signUpSuccess)
    .catch(authUi.signUpError)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.signIn(data)
    .then(authUi.signInSuccess)
    .then(itemEvents.onGetWarranties)
    .catch(authUi.signInError)
}

const onChangePW = function () {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.changePassword(data)
    .then(authUi.changePasswordSuccess)
    .catch(authUi.changePasswordError)
}

const onSignOut = function (event) {
  event.preventDefault()
  authApi.signOut()
    .then(authUi.signOutSuccess)
    .catch(authUi.signOutFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePW,
  onSignOut
}
