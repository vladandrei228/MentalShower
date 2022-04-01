'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  _inherits(_class, _HTMLElement);

  var _super = _createSuper(_class);

  function _class() {
    var _this;

    _classCallCheck(this, _class);

    _this = _super.call(this);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }

  _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">MentalShower documentation</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>Dependencies\n                                    </a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"properties.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-apps\"></span>Properties\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">Modules</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/AppModule.html\" data-type=\"entity-link\" >AppModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-AppModule-8cf06e63a5a53963a386ee3e6f314ba3ca68be6bc3613ad9fa0aa7b4018e52a1e50f0a2ad862c0d7955b7b139674868fa94452933b3d32a3b4cf93598bc7c189"' : 'data-target="#xs-components-links-module-AppModule-8cf06e63a5a53963a386ee3e6f314ba3ca68be6bc3613ad9fa0aa7b4018e52a1e50f0a2ad862c0d7955b7b139674868fa94452933b3d32a3b4cf93598bc7c189"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-AppModule-8cf06e63a5a53963a386ee3e6f314ba3ca68be6bc3613ad9fa0aa7b4018e52a1e50f0a2ad862c0d7955b7b139674868fa94452933b3d32a3b4cf93598bc7c189"' : 'id="xs-components-links-module-AppModule-8cf06e63a5a53963a386ee3e6f314ba3ca68be6bc3613ad9fa0aa7b4018e52a1e50f0a2ad862c0d7955b7b139674868fa94452933b3d32a3b4cf93598bc7c189"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/AppComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AppComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AppRoutingModule.html\" data-type=\"entity-link\" >AppRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/FirstQuestionPageModule.html\" data-type=\"entity-link\" >FirstQuestionPageModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-FirstQuestionPageModule-b56ca2a5d3232846b06552bfc6740cc0aadf2baa4b934e185c95cf09b5445c5e5e86a49618ba9766a267ed219ce19b170cba2959eab06aa16dfc2b03d1311f70"' : 'data-target="#xs-components-links-module-FirstQuestionPageModule-b56ca2a5d3232846b06552bfc6740cc0aadf2baa4b934e185c95cf09b5445c5e5e86a49618ba9766a267ed219ce19b170cba2959eab06aa16dfc2b03d1311f70"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-FirstQuestionPageModule-b56ca2a5d3232846b06552bfc6740cc0aadf2baa4b934e185c95cf09b5445c5e5e86a49618ba9766a267ed219ce19b170cba2959eab06aa16dfc2b03d1311f70"' : 'id="xs-components-links-module-FirstQuestionPageModule-b56ca2a5d3232846b06552bfc6740cc0aadf2baa4b934e185c95cf09b5445c5e5e86a49618ba9766a267ed219ce19b170cba2959eab06aa16dfc2b03d1311f70"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/FirstQuestionPage.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >FirstQuestionPage</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/FirstQuestionPageRoutingModule.html\" data-type=\"entity-link\" >FirstQuestionPageRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/HomePageModule.html\" data-type=\"entity-link\" >HomePageModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-HomePageModule-505138d4b0b902820bf04bf9e711dc5c228dc709f7eb29e730938c67b74c1e14c0502b3e3088157496bc55ca02f2a16dd453cf16dfda29790b02c7c447c557e6"' : 'data-target="#xs-components-links-module-HomePageModule-505138d4b0b902820bf04bf9e711dc5c228dc709f7eb29e730938c67b74c1e14c0502b3e3088157496bc55ca02f2a16dd453cf16dfda29790b02c7c447c557e6"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-HomePageModule-505138d4b0b902820bf04bf9e711dc5c228dc709f7eb29e730938c67b74c1e14c0502b3e3088157496bc55ca02f2a16dd453cf16dfda29790b02c7c447c557e6"' : 'id="xs-components-links-module-HomePageModule-505138d4b0b902820bf04bf9e711dc5c228dc709f7eb29e730938c67b74c1e14c0502b3e3088157496bc55ca02f2a16dd453cf16dfda29790b02c7c447c557e6"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/HomePage.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >HomePage</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/HomePageRoutingModule.html\" data-type=\"entity-link\" >HomePageRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/SecondQuestionPageModule.html\" data-type=\"entity-link\" >SecondQuestionPageModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-SecondQuestionPageModule-84c4f435861c5dc9b19f59538e13b573ad02cdd8264b14d03959ccfa8d33185a1169e382afbd0d998a2a8dbd3575811a9cd1d3b0e8f1e6c2098c2ead78324c83"' : 'data-target="#xs-components-links-module-SecondQuestionPageModule-84c4f435861c5dc9b19f59538e13b573ad02cdd8264b14d03959ccfa8d33185a1169e382afbd0d998a2a8dbd3575811a9cd1d3b0e8f1e6c2098c2ead78324c83"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-SecondQuestionPageModule-84c4f435861c5dc9b19f59538e13b573ad02cdd8264b14d03959ccfa8d33185a1169e382afbd0d998a2a8dbd3575811a9cd1d3b0e8f1e6c2098c2ead78324c83"' : 'id="xs-components-links-module-SecondQuestionPageModule-84c4f435861c5dc9b19f59538e13b573ad02cdd8264b14d03959ccfa8d33185a1169e382afbd0d998a2a8dbd3575811a9cd1d3b0e8f1e6c2098c2ead78324c83"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/SecondQuestionPage.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >SecondQuestionPage</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/SecondQuestionPageRoutingModule.html\" data-type=\"entity-link\" >SecondQuestionPageRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/thankyouPageModule.html\" data-type=\"entity-link\" >thankyouPageModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-thankyouPageModule-fe4f0e1cca2447eecd16e8c15f50909ee04dcc10b1ab372e4d87a9a509c5e7875a9b9713db9fe269339059a2dd81ed1b17d30ca10efdd2c013e39f94362b14ad"' : 'data-target="#xs-components-links-module-thankyouPageModule-fe4f0e1cca2447eecd16e8c15f50909ee04dcc10b1ab372e4d87a9a509c5e7875a9b9713db9fe269339059a2dd81ed1b17d30ca10efdd2c013e39f94362b14ad"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-thankyouPageModule-fe4f0e1cca2447eecd16e8c15f50909ee04dcc10b1ab372e4d87a9a509c5e7875a9b9713db9fe269339059a2dd81ed1b17d30ca10efdd2c013e39f94362b14ad"' : 'id="xs-components-links-module-thankyouPageModule-fe4f0e1cca2447eecd16e8c15f50909ee04dcc10b1ab372e4d87a9a509c5e7875a9b9713db9fe269339059a2dd81ed1b17d30ca10efdd2c013e39f94362b14ad"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/thankyouPage.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >thankyouPage</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/thankyouPageRoutingModule.html\" data-type=\"entity-link\" >thankyouPageRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/ThirdQuestionPageModule.html\" data-type=\"entity-link\" >ThirdQuestionPageModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-ThirdQuestionPageModule-1703edaac553dd2415684a24e73defee90c033b9e028062bf1a8fd4d00ffc71836a7639076347c1c610a5d3cbbc33178716ef09be70d6fc907bb1a98c1aed0cb"' : 'data-target="#xs-components-links-module-ThirdQuestionPageModule-1703edaac553dd2415684a24e73defee90c033b9e028062bf1a8fd4d00ffc71836a7639076347c1c610a5d3cbbc33178716ef09be70d6fc907bb1a98c1aed0cb"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-ThirdQuestionPageModule-1703edaac553dd2415684a24e73defee90c033b9e028062bf1a8fd4d00ffc71836a7639076347c1c610a5d3cbbc33178716ef09be70d6fc907bb1a98c1aed0cb"' : 'id="xs-components-links-module-ThirdQuestionPageModule-1703edaac553dd2415684a24e73defee90c033b9e028062bf1a8fd4d00ffc71836a7639076347c1c610a5d3cbbc33178716ef09be70d6fc907bb1a98c1aed0cb"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/ThirdQuestionPage.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ThirdQuestionPage</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/ThirdQuestionPageRoutingModule.html\" data-type=\"entity-link\" >ThirdQuestionPageRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/ZonePagePageModule.html\" data-type=\"entity-link\" >ZonePagePageModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-ZonePagePageModule-ce198134c744bc6821d45619ec580877b403bf9e33094f8ae9fbebbc11ad6c3f02f3d8cdeeb305cdf68e08e3807254314d8573b58e703dcbc4cd95b3f95c816e"' : 'data-target="#xs-components-links-module-ZonePagePageModule-ce198134c744bc6821d45619ec580877b403bf9e33094f8ae9fbebbc11ad6c3f02f3d8cdeeb305cdf68e08e3807254314d8573b58e703dcbc4cd95b3f95c816e"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-ZonePagePageModule-ce198134c744bc6821d45619ec580877b403bf9e33094f8ae9fbebbc11ad6c3f02f3d8cdeeb305cdf68e08e3807254314d8573b58e703dcbc4cd95b3f95c816e"' : 'id="xs-components-links-module-ZonePagePageModule-ce198134c744bc6821d45619ec580877b403bf9e33094f8ae9fbebbc11ad6c3f02f3d8cdeeb305cdf68e08e3807254314d8573b58e703dcbc4cd95b3f95c816e"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/ZonePagePage.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ZonePagePage</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/ZonePagePageRoutingModule.html\" data-type=\"entity-link\" >ZonePagePageRoutingModule</a>\n                            </li>\n                </ul>\n                </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>Miscellaneous</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/variables.html\" data-type=\"entity-link\">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <a data-type=\"chapter-link\" href=\"routes.html\"><span class=\"icon ion-ios-git-branch\"></span>Routes</a>\n                        </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>Documentation coverage</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"copyright\">\n                        Documentation generated using <a href=\"https://compodoc.app/\" target=\"_blank\">\n                            <img data-src=\"images/compodoc-vectorise.png\" class=\"img-responsive\" data-type=\"compodoc-logo\">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);

  return _class;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));