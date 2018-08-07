'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const itemUi = require('./ui.js')
const itemApi = require('./api.js')

const onGetWarranties = function () {
  itemApi.getWarranties()
    .then(itemUi.getWarrantySuccess)
    .catch(itemUi.getWarrantyError)
}

const onCreateWarranty = function (event) {
  event.preventDefault()
  const formdata = getFormFields(event.target)
  itemApi.createWarranty(formdata)
    .then(itemUi.createWarrantySuccess)
    .then(onGetWarranties)
    .catch(itemUi.createWarrantyError)
}

module.exports = {
  onCreateWarranty,
  onGetWarranties
}
