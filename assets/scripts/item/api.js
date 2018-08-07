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

const getWarranties = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/items',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createWarranty,
  getWarranties
}
