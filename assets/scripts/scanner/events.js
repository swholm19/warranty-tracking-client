// const Quagga = require('quagga').default
import Quagga from 'quagga'

const startScan = function () {
  Quagga.init({
    inputStream: {
      name: 'Live',
      type: 'LiveStream',
      target: document.querySelector('#scanner-container'),
      constraints: {
        width: 500,
        height: 320,
        facingMode: 'environment'
      }
    },
    decoder: {
      readers: [
        'code_128_reader',
        'ean_reader',
        'ean_8_reader',
        'code_39_reader',
        'code_39_vin_reader',
        'codabar_reader',
        'upc_reader',
        'upc_e_reader',
        'i2of5_reader'
      ]
    }
  }, function (err) {
    if (err) {
      console.log(err)
      return
    }
    console.log('Initialization finished. Ready to start')
    Quagga.start()
  })

  Quagga.onProcessed(function (result) {
    const drawingCtx = Quagga.canvas.ctx.overlay
    const drawingCanvas = Quagga.canvas.dom.overlay

    if (result) {
      if (result.boxes) {
        drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute('width')), parseInt(drawingCanvas.getAttribute('height')))
        result.boxes.filter(function (box) {
          return box !== result.box
        }).forEach(function (box) {
          Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, { color: 'green', lineWidth: 2 })
        })
      }

      if (result.box) {
        Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, { color: '#00F', lineWidth: 2 })
      }

      if (result.codeResult && result.codeResult.code) {
        Quagga.ImageDebug.drawPath(result.line, { x: 'x', y: 'y' }, drawingCtx, { color: 'red', lineWidth: 3 })
      }
    }
  })

  Quagga.onDetected(function (result) {
    $('input[name="item[serial_id]"]').val(result.codeResult.code)
    $('#scanWarrantyItemModal').modal('hide')
    stopScan()
  })
}

const stopScan = function () {
  Quagga.stop()
  Quagga.offProcessed()
  Quagga.offDetected()
  $('#scanner-container').html('')
}

module.exports = {
  startScan,
  stopScan
}
