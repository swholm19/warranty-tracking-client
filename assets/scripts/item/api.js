'use strict'
const config = require('../config')
const store = require('../store')

const createWarranty = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/items',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateWarranty = function (data, itemId) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/items/' + itemId,
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getWarranties = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/items',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteWarranty = function (itemId) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/items/' + itemId,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createWarranty,
  getWarranties,
  deleteWarranty,
  updateWarranty
}
