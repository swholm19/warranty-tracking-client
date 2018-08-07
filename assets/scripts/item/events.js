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
    .then(onGetWarranties)
    .catch(itemUi.createWarrantyError)
}

const onDeleteWarranty = function (event) {
  event.preventDefault()
  const itemId = $(event.target).attr('data-id')
  itemApi.deleteWarranty(itemId)
    .then(onGetWarranties)
    .catch(itemUi.deleteWarrantyError)
}

const onUpdateWarranty = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const itemId = $(event.target).attr('data-id')
  itemApi.updateWarranty(data, itemId)
    .then(() => itemUi.updateWarrantySuccess(itemId))
    .then(onGetWarranties)
    .catch(itemUi.updateWarrantyError)
}

const onOpenUpdateModal = function (event) {
  const itemId = $(event.target).attr('data-id')
  $(`[data-id="modal${itemId}"]`).modal('show')
}

module.exports = {
  onCreateWarranty,
  onGetWarranties,
  onDeleteWarranty,
  onUpdateWarranty,
  onOpenUpdateModal
}
