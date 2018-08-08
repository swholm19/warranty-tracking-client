'use strict'
const showItemsTemplate = require('../templates/item-listing.handlebars')

const createWarrantySuccess = function () {
  $('#createWarrantyItemModal').modal('hide')
}

const createWarrantyError = function () {
  $('#createModalLabel').html('ERROR CREATING WARRANTY PLEASE TRY AGAIN')
  $('#createModalLabel').css('color', 'red')
  $('#create-item-form')[0].reset()
}

const getWarrantySuccess = function (data) {
  $('.error-view').css('display', 'none')
  const showNewItemsHtml = showItemsTemplate({ items: data.items })
  $('#warrantyList').html(showNewItemsHtml)
  data.items.forEach((item) => {
    if (item.warning) {
      $(`[data-id="box_${item.id}"`).css('border-color', 'red')
    }
  })
}

const getWarrantyError = function () {
  $('#error-message').html('ERROR GETTING WARRANTIES PLEASE TRY AGAIN')
  $('.error-view').css('display', 'block')
}

const deleteWarrantyError = function () {
  $('#error-message').html('ERROR DELETING WARRANTY PLEASE TRY AGAIN')
  $('.error-view').css('display', 'block')
}

const updateWarrantySuccess = function (itemId) {
  $(`[data-id="modal${itemId}"]`).modal('hide')
  $('.modal-backdrop').remove()
}

const updateWarrantyError = function () {
  $('.itemUpdateTitle').html('ERROR UPDATING WARRANTY PLEASE TRY AGAIN')
  $('.itemUpdateTitle').css('color', 'red')
}

module.exports = {
  createWarrantySuccess,
  createWarrantyError,
  getWarrantySuccess,
  getWarrantyError,
  deleteWarrantyError,
  updateWarrantySuccess,
  updateWarrantyError
}
