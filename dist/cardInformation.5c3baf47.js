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
},{}],"cardInformation.js":[function(require,module,exports) {
"use strict";

var _close = _interopRequireDefault(require("./icons/close.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var travels = {
  milan: {
    city: "Милан",
    country: "Италия",
    information: "Милан –<br>крупный город на севере Италии, расположенный в Ломбардии, мировая столица дизайна и моды."
  },
  venice: {
    city: "Венеция",
    country: "Италия",
    information: "Венеция –<br>столица одноименной области на севере Италии. Город расположен на более чем 100 небольших островах в лагуне Адриатического моря."
  },
  berlin: {
    city: "Берлин",
    country: "Германия",
    information: "Берлин –<br>столица Германии, история которой восходит к XIII в. О непростой истории города в XX в. напоминают Мемориал жертвам Холокоста и граффити на руинах Берлинской стены"
  },
  fraiburg: {
    city: "Фрайбург",
    country: "Германия",
    information: "Фрайбург-им-Брайсгау –<br>оживленный университетский город в горах Шварцвальд на юго-западе Германии, известный своим умеренным климатом и восстановленным после войны средневековым Старым городом."
  },
  athens: {
    city: "Афины",
    country: "Греция",
    information: "Афины –<br>столица современной Греции и центр древнегреческой цивилизации, которая славилась своим могуществом в эпоху античности."
  },
  madrid: {
    city: "Мадрид",
    country: "Испания",
    information: "Мадрид – столица Испании в центре Пиренейского полуострова, город элегантных бульваров и огромных ухоженных парков, к числу которых относится парк Буэн-Ретиро."
  },
  barcelona: {
    city: "Барселона",
    country: "Испания",
    information: "Барселона – столица автономной области Каталония. Этот многонациональный город знаменит своей архитектурой и искусством."
  },
  portu: {
    city: "Порту",
    country: "Португалия",
    information: "Порту -<br>второй по величине (после Лиссабона) город в Португалии, центр одноимённого округа и муниципалитета."
  },
  lissbon: {
    city: "Лиссабон",
    country: "Португалия",
    information: "Лиссабон – <br>столица Португалии, расположенная на нескольких холмах и омываемая водами Атлантического океана."
  },
  vicenze: {
    city: "Виченца",
    country: "Италия",
    information: "Виче́нца — город в итальянской области Венеция, административный центр одноимённой провинции."
  },
  kash: {
    city: "Каш",
    country: "Турция",
    information: "Каш — город и порт на средиземноморском побережье Турции, центр одноименного района провинции Анталья."
  },
  antaliya: {
    city: "Анталия",
    country: "Турция",
    information: "Анталья – курортный город, который славится своей Старой гаванью, где швартуются яхты, и пляжами, окруженными огромными отелями."
  }
};

var createNewElement = function createNewElement(htmlString) {
  var tempElement = document.createElement('div');
  tempElement.innerHTML = htmlString;
  return tempElement.firstElementChild;
};

var createFullCard = function createFullCard(cityName, countryName, description, imagePath) {
  var isReverse = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  return createNewElement("\n    <div class=\"full-card ".concat(isReverse ? "full-card_order_reverse" : '', " js-full-card\">\n        <img class=\"full-card__picture\" src=\"").concat(imagePath, "\" alt=\"The city you chose\">\n        <p class=\"current__city disposition_absolute\">").concat(cityName, "</p>\n        <p class=\"current__country disposition_absolute\">").concat(countryName, "</p>\n        <div class=\"card-about\">\n            <p class=\"full-card__text\">\n                ").concat(description, "\n            </p>\n            <a class=\"card-about__button\" href=\"#\">\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435</a>\n            <button class=\"icon\"><img class=\"icon__img\" src=\"").concat(_close.default, "\"></button>\n        </div>\n    </div>\n"));
};

var currentCity = document.querySelector(".current__city"); // Город

var currentCountry = document.querySelector(".current__country"); // Страна

var fullCardText = document.querySelector(".full-card__text"); // Инфромация о стране

var fullCardPicture = document.querySelector(".full-card__picture"); // Картинка карточки

var cardImage = document.querySelector(".image");
var countryCards = document.querySelectorAll(".js-card-container"); // Все кнопки карточек

var fullCard = document.querySelector(".full-card"); // Целая карточка для того, чтобы она могла исчезать

countryCards.forEach(function (countryCard) {
  countryCard.addEventListener("click", function (event) {
    var cityInformation = countryCard.dataset.infoAbtCity;
    var countryData = travels[cityInformation];
    var imagePath = countryCard.querySelector('img').src;
    var fullCountryCard = createFullCard(countryData.city, countryData.country, countryData.information, imagePath);
    countryCard.append(fullCountryCard);
  });
}); // const icon = document.querySelector(".icon");
// icon.addEventListener("click", event => {
//     console.log(event.currentTarget);
//     fullCard.classList.remove("full-card__clicked");
// });
},{"./icons/close.svg":"icons/close.svg"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57814" + '/');

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