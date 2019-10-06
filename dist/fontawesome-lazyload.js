var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var helperClasses = [
        // Sizing Icons
        'xs', 'sm', 'lg', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x',
        // Fixed Width Icons
        'fw',
        // Icons in a List
        'ul', 'li',
        // Rotating Icons
        'rotate-90', 'rotate-180', 'rotate-270', 'flip-horizontal', 'flip-vertical', 'flip-both',
        // Animating Icons
        'spin', 'pulse', 'spinner',
        // Bordered + Pulled Icons
        'border', 'pull-right', 'pull-left',
        // Stacked Icons
        'fa-stack', 'fa-stack-1x', 'fa-stack-2x', 'fa-inverse',
        // Swapping Layer Opacity (Duotone Icons)
        'swap-opacity'
    ];
    function createElementFromString(html) {
        var template = document.createElement('div');
        html = html.trim();
        template.innerHTML = html;
        return template.children[0];
    }
    var defaultOptions = {
        url: "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5",
        fetch: {
            cache: 'force-cache'
        }
    };
    exports.faLazyload = function (userOptions) {
        if (userOptions === void 0) { userOptions = {}; }
        var options = __assign(__assign({}, defaultOptions), userOptions);
        var faElems = document.querySelectorAll('i.fab, i.fad, i.fal, i.far, i.fas');
        faElems.forEach(function (faElem) { return __awaiter(void 0, void 0, void 0, function () {
            var faIcon, faStyle, faBasename, response, svgIcon, svgElem;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        faIcon = Array.from(faElem.classList).filter(function (className) {
                            return (className.startsWith('fa-') &&
                                !helperClasses.includes(className.replace(/^fa-/, '')));
                        });
                        if (faElem.classList.contains('fab')) {
                            faStyle = 'brands';
                        }
                        else if (faElem.classList.contains('fas')) {
                            faStyle = 'solid';
                        }
                        else if (faElem.classList.contains('fad')) {
                            faStyle = 'duotone'; // Font Awesome Pro!
                        }
                        else if (faElem.classList.contains('fal')) {
                            faStyle = 'light'; // Font Awesome Pro!
                        }
                        else {
                            faStyle = 'regular';
                        }
                        faBasename = faIcon[0].replace(/^fa-/, '');
                        return [4 /*yield*/, fetch(options.url + "/svgs/" + faStyle + "/" + faBasename + ".svg", options.fetch)];
                    case 1:
                        response = _b.sent();
                        if (!(response.status === 200)) return [3 /*break*/, 3];
                        return [4 /*yield*/, response.text()];
                    case 2:
                        svgIcon = _b.sent();
                        svgElem = createElementFromString(svgIcon);
                        // Add classes from the <i> element
                        (_a = svgElem.classList).add.apply(_a, Array.from(faElem.classList));
                        // Style provided by svg-with-js.min.css
                        svgElem.classList.add('svg-inline--fa');
                        faElem.replaceWith(svgElem);
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    window.faLazyload;
});
