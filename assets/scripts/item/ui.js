'use strict'
const showItemsTemplate = require('../templates/item-listing.handlebars')

const createWarrantyError = function (error) {
  console.log('Create Warranty error!!!', error)
}

const getWarrantySuccess = function (data) {
  const showNewItemsHtml = showItemsTemplate({ items: data.items })
  $('#warrantyList').html(showNewItemsHtml)
}

const getWarrantyError = function () {
  console.log('Get Warranty error!!!')
}

const deleteWarrantyError = function (error) {
  console.log('Delete Warranty error!!!', error)
}

const updateWarrantySuccess = function (itemId) {
  $(`[data-id="modal${itemId}"]`).modal('hide')
  $('.modal-backdrop').remove()
}

const updateWarrantyError = function (error) {
  console.log('Update Warranty error!!!', error)
}

module.exports = {
  createWarrantyError,
  getWarrantySuccess,
  getWarrantyError,
  deleteWarrantyError,
  updateWarrantySuccess,
  updateWarrantyError
}
