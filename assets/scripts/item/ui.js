'use strict'

const createWarrantySuccess = function (signUpResponse) {
  console.log('Create Warranty!!!')
}

const createWarrantyError = function (error) {
  console.log('Create Warranty error!!!', error)
}

const getWarrantySuccess = function (data) {
  console.log('warranty data is: ', data)
  // const showNewItemsHtml = showItemsTemplate({ items: yourItems })
  // $('#inventoryList').html(showNewItemsHtml)
}

const getWarrantyError = function () {
  console.log('errororo in getting warranty')
}

module.exports = {
  createWarrantyError,
  createWarrantySuccess,
  getWarrantySuccess,
  getWarrantyError
}
