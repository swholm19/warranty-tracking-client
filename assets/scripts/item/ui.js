'use strict'
const showItemsTemplate = require('../templates/item-listing.handlebars')

const createWarrantyError = function (error) {
  console.log('Create Warranty error!!!', error)
}

const getWarrantySuccess = function (data) {
  console.log('warranty data is: ', data)
  const showNewItemsHtml = showItemsTemplate({ items: data.items })
  $('#warrantyList').html(showNewItemsHtml)
}

const getWarrantyError = function () {
  console.log('Get Warranty error!!!')
}

const deleteWarrantyError = function (error) {
  console.log('Delete Warranty error!!!', error)
}

module.exports = {
  createWarrantyError,
  getWarrantySuccess,
  getWarrantyError,
  deleteWarrantyError
}
