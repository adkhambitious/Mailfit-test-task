// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"icons/close.svg":[function(require,module,exports) {
module.exports = "/close.1a8adba6.svg";
},{}],"images/milan.png":[function(require,module,exports) {
module.exports = "/milan.ffe87a44.png";
},{}],"images/berlin.png":[function(require,module,exports) {
module.exports = "/berlin.8daf8a40.png";
},{}],"images/venice.png":[function(require,module,exports) {
module.exports = "/venice.4a4ed4b5.png";
},{}],"images/vicenze.png":[function(require,module,exports) {
module.exports = "/vicenze.975b272d.png";
},{}],"images/barcelona.png":[function(require,module,exports) {
module.exports = "/barcelona.76e9c29b.png";
},{}],"images/madrid.png":[function(require,module,exports) {
module.exports = "/madrid.83dd1868.png";
},{}],"images/fraiburg.png":[function(require,module,exports) {
module.exports = "/fraiburg.242e322b.png";
},{}],"images/kash.png":[function(require,module,exports) {
module.exports = "/kash.3c561d1d.png";
},{}],"images/antaliya.png":[function(require,module,exports) {
module.exports = "/antaliya.ba1d7835.png";
},{}],"images/athens.png":[function(require,module,exports) {
module.exports = "/athens.0c7d9a57.png";
},{}],"images/portu.png":[function(require,module,exports) {
module.exports = "/portu.3f84a903.png";
},{}],"images/lissbon.png":[function(require,module,exports) {
module.exports = "/lissbon.74ea4c5a.png";
},{}],"travels.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.travels = void 0;

var _milan = _interopRequireDefault(require("./images/milan.png"));

var _berlin = _interopRequireDefault(require("./images/berlin.png"));

var _venice = _interopRequireDefault(require("./images/venice.png"));

var _vicenze = _interopRequireDefault(require("./images/vicenze.png"));

var _barcelona = _interopRequireDefault(require("./images/barcelona.png"));

var _madrid = _interopRequireDefault(require("./images/madrid.png"));

var _fraiburg = _interopRequireDefault(require("./images/fraiburg.png"));

var _kash = _interopRequireDefault(require("./images/kash.png"));

var _antaliya = _interopRequireDefault(require("./images/antaliya.png"));

var _athens = _interopRequireDefault(require("./images/athens.png"));

var _portu = _interopRequireDefault(require("./images/portu.png"));

var _lissbon = _interopRequireDefault(require("./images/lissbon.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var travels = {
  milan: {
    cityCode: "milan",
    countryCode: "italy",
    direction: "normal",
    city: "Милан",
    country: "Италия",
    information: "Милан –<br>крупный город на севере Италии, расположенный в Ломбардии, мировая столица дизайна и моды.",
    imagePath: _milan.default
  },
  venice: {
    cityCode: "venice",
    countryCode: "italy",
    direction: "normal",
    city: "Венеция",
    country: "Италия",
    information: "Венеция –<br>столица одноименной области на севере Италии. Город расположен на более чем 100 небольших островах в лагуне Адриатического моря.",
    imagePath: _berlin.default
  },
  berlin: {
    cityCode: "berlin",
    countryCode: "germany",
    direction: "normal",
    city: "Берлин",
    country: "Германия",
    information: "Берлин –<br>столица Германии, история которой восходит к XIII в. О непростой истории города в XX в. напоминают Мемориал жертвам Холокоста и граффити на руинах Берлинской стены",
    imagePath: _venice.default
  },
  fraiburg: {
    cityCode: "fraiburg",
    countryCode: "germany",
    direction: "normal",
    city: "Фрайбург",
    country: "Германия",
    information: "Фрайбург-им-Брайсгау –<br>оживленный университетский город в горах Шварцвальд на юго-западе Германии, известный своим умеренным климатом и восстановленным после войны средневековым Старым городом.",
    imagePath: _vicenze.default
  },
  athens: {
    cityCode: "athens",
    countryCode: "greece",
    direction: "reverse",
    city: "Афины",
    country: "Греция",
    information: "Афины –<br>столица современной Греции и центр древнегреческой цивилизации, которая славилась своим могуществом в эпоху античности.",
    imagePath: _barcelona.default
  },
  madrid: {
    cityCode: "madrid",
    countryCode: "spain",
    direction: "reverse",
    city: "Мадрид",
    country: "Испания",
    information: "Мадрид – столица Испании в центре Пиренейского полуострова, город элегантных бульваров и огромных ухоженных парков, к числу которых относится парк Буэн-Ретиро.",
    imagePath: _madrid.default
  },
  barcelona: {
    cityCode: "barcelona",
    countryCode: "spain",
    direction: "normal",
    city: "Барселона",
    country: "Испания",
    information: "Барселона – столица автономной области Каталония. Этот многонациональный город знаменит своей архитектурой и искусством.",
    imagePath: _fraiburg.default
  },
  portu: {
    cityCode: "portu",
    countryCode: "portugal",
    direction: "normal",
    city: "Порту",
    country: "Португалия",
    information: "Порту -<br>второй по величине (после Лиссабона) город в Португалии, центр одноимённого округа и муниципалитета.",
    imagePath: _kash.default
  },
  lissbon: {
    cityCode: "lissbon",
    countryCode: "portugal",
    direction: "normal",
    city: "Лиссабон",
    country: "Португалия",
    information: "Лиссабон – <br>столица Португалии, расположенная на нескольких холмах и омываемая водами Атлантического океана.",
    imagePath: _antaliya.default
  },
  vicenze: {
    cityCode: "vicenze",
    countryCode: "italy",
    direction: "normal",
    city: "Виченца",
    country: "Италия",
    information: "Виче́нца — город в итальянской области Венеция, административный центр одноимённой провинции.",
    imagePath: _athens.default
  },
  kash: {
    cityCode: "kash",
    countryCode: "turkey",
    direction: "reverse",
    city: "Каш",
    country: "Турция",
    information: "Каш — город и порт на средиземноморском побережье Турции, центр одноименного района провинции Анталья.",
    imagePath: _portu.default
  },
  antaliya: {
    cityCode: "antaliya",
    countryCode: "turkey",
    direction: "reverse",
    city: "Анталия",
    country: "Турция",
    information: "Анталья – курортный город, который славится своей Старой гаванью, где швартуются яхты, и пляжами, окруженными огромными отелями.",
    imagePath: _lissbon.default
  }
};
exports.travels = travels;
},{"./images/milan.png":"images/milan.png","./images/berlin.png":"images/berlin.png","./images/venice.png":"images/venice.png","./images/vicenze.png":"images/vicenze.png","./images/barcelona.png":"images/barcelona.png","./images/madrid.png":"images/madrid.png","./images/fraiburg.png":"images/fraiburg.png","./images/kash.png":"images/kash.png","./images/antaliya.png":"images/antaliya.png","./images/athens.png":"images/athens.png","./images/portu.png":"images/portu.png","./images/lissbon.png":"images/lissbon.png"}],"createNewElement.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createNewElement = void 0;

var createNewElement = function createNewElement(htmlString) {
  var tempElement = document.createElement('div');
  tempElement.innerHTML = htmlString;
  return tempElement.firstElementChild;
};

exports.createNewElement = createNewElement;
},{}],"cardInformation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initSlidesEventListeners = void 0;

var _close = _interopRequireDefault(require("./icons/close.svg"));

var _travels = require("./travels");

var _createNewElement = require("./createNewElement");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createFullCard = function createFullCard(cityName, countryName, description, imagePath, shiftValue, order) {
  return (0, _createNewElement.createNewElement)("\n    <div style=\"left: ".concat(shiftValue, "px\" class=\"full-card ").concat(order > 2 && order < 9 ? "full-card_order_reverse" : '', " js-full-card\">\n        <img class=\"full-card__picture\" src=\"").concat(imagePath, "\" alt=\"The city you chose\">\n        <p class=\"current__city disposition_absolute\">").concat(cityName, "</p>\n        <p class=\"current__country disposition_absolute\">").concat(countryName, "</p>\n        <div class=\"card-about\">\n            <p class=\"full-card__text\">\n                ").concat(description, "\n            </p>\n            <a class=\"card-about__button\" href=\"#\">\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435</a>\n            <button class=\"icon\"><img class=\"icon__img\" src=\"").concat(_close.default, "\"></button>\n        </div>\n    </div>\n"));
};

var swiperWrapper = document.querySelector('.swiper-wrapper');
var deleteLastFullCard = [];
var previousFullCard;

var initSlidesEventListeners = function initSlidesEventListeners() {
  var countryCardContainers = document.querySelectorAll(".js-card-container");
  countryCardContainers.forEach(function (countryCardContainer) {
    countryCardContainer.querySelector('.js-card').addEventListener("click", function (event) {
      if (previousFullCard !== undefined) {
        previousFullCard.remove();
      }

      var values = swiperWrapper.style.transform.split(',').map(function (item) {
        return item.replace('translate3d(', '').replace(')', '').replace('px', '');
      });
      var shiftValue = Math.abs(values[0]);
      var cityCode = countryCardContainer.dataset.infoAbtCity;
      var order = countryCardContainer.dataset.order;
      console.log(order);
      var travel = _travels.travels[cityCode];
      var sideToOpen = travel.direction;
      console.log(travel, sideToOpen);
      var imagePath = countryCardContainer.querySelector('img').src;
      var fullCountryCard = createFullCard(travel.city, travel.country, travel.information, imagePath, shiftValue, order);
      countryCardContainer.append(fullCountryCard);
      previousFullCard = fullCountryCard;
      var icon = fullCountryCard.querySelector(".icon");
      icon.addEventListener("click", function (event) {
        countryCardContainer.removeChild(fullCountryCard);
      });
    });
  });
};

exports.initSlidesEventListeners = initSlidesEventListeners;
},{"./icons/close.svg":"icons/close.svg","./travels":"travels.js","./createNewElement":"createNewElement.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55026" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","cardInformation.js"], null)
//# sourceMappingURL=/cardInformation.5c3baf47.js.map