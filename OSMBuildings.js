! function() {
    var w3cColors = {
        aliceblue: "#f0f8ff",
        antiquewhite: "#faebd7",
        aqua: "#00ffff",
        aquamarine: "#7fffd4",
        azure: "#f0ffff",
        beige: "#f5f5dc",
        bisque: "#ffe4c4",
        black: "#000000",
        blanchedalmond: "#ffebcd",
        blue: "#0000ff",
        blueviolet: "#8a2be2",
        brown: "#a52a2a",
        burlywood: "#deb887",
        cadetblue: "#5f9ea0",
        chartreuse: "#7fff00",
        chocolate: "#d2691e",
        coral: "#ff7f50",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        darkgrey: "#a9a9a9",
        darkgreen: "#006400",
        darkkhaki: "#bdb76b",
        darkmagenta: "#8b008b",
        darkolivegreen: "#556b2f",
        darkorange: "#ff8c00",
        darkorchid: "#9932cc",
        darkred: "#8b0000",
        darksalmon: "#e9967a",
        darkseagreen: "#8fbc8f",
        darkslateblue: "#483d8b",
        darkslategray: "#2f4f4f",
        darkslategrey: "#2f4f4f",
        darkturquoise: "#00ced1",
        darkviolet: "#9400d3",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1e90ff",
        firebrick: "#b22222",
        floralwhite: "#fffaf0",
        forestgreen: "#228b22",
        fuchsia: "#ff00ff",
        gainsboro: "#dcdcdc",
        ghostwhite: "#f8f8ff",
        gold: "#ffd700",
        goldenrod: "#daa520",
        gray: "#808080",
        grey: "#808080",
        green: "#008000",
        greenyellow: "#adff2f",
        honeydew: "#f0fff0",
        hotpink: "#ff69b4",
        indianred: "#cd5c5c",
        indigo: "#4b0082",
        ivory: "#fffff0",
        khaki: "#f0e68c",
        lavender: "#e6e6fa",
        lavenderblush: "#fff0f5",
        lawngreen: "#7cfc00",
        lemonchiffon: "#fffacd",
        lightblue: "#add8e6",
        lightcoral: "#f08080",
        lightcyan: "#e0ffff",
        lightgoldenrodyellow: "#fafad2",
        lightgray: "#d3d3d3",
        lightgrey: "#d3d3d3",
        lightgreen: "#90ee90",
        lightpink: "#ffb6c1",
        lightsalmon: "#ffa07a",
        lightseagreen: "#20b2aa",
        lightskyblue: "#87cefa",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#b0c4de",
        lightyellow: "#ffffe0",
        lime: "#00ff00",
        limegreen: "#32cd32",
        linen: "#faf0e6",
        magenta: "#ff00ff",
        maroon: "#800000",
        mediumaquamarine: "#66cdaa",
        mediumblue: "#0000cd",
        mediumorchid: "#ba55d3",
        mediumpurple: "#9370db",
        mediumseagreen: "#3cb371",
        mediumslateblue: "#7b68ee",
        mediumspringgreen: "#00fa9a",
        mediumturquoise: "#48d1cc",
        mediumvioletred: "#c71585",
        midnightblue: "#191970",
        mintcream: "#f5fffa",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        navajowhite: "#ffdead",
        navy: "#000080",
        oldlace: "#fdf5e6",
        olive: "#808000",
        olivedrab: "#6b8e23",
        orange: "#ffa500",
        orangered: "#ff4500",
        orchid: "#da70d6",
        palegoldenrod: "#eee8aa",
        palegreen: "#98fb98",
        paleturquoise: "#afeeee",
        palevioletred: "#db7093",
        papayawhip: "#ffefd5",
        peachpuff: "#ffdab9",
        peru: "#cd853f",
        pink: "#ffc0cb",
        plum: "#dda0dd",
        powderblue: "#b0e0e6",
        purple: "#800080",
        rebeccapurple: "#663399",
        red: "#ff0000",
        rosybrown: "#bc8f8f",
        royalblue: "#4169e1",
        saddlebrown: "#8b4513",
        salmon: "#fa8072",
        sandybrown: "#f4a460",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        sienna: "#a0522d",
        silver: "#c0c0c0",
        skyblue: "#87ceeb",
        slateblue: "#6a5acd",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#fffafa",
        springgreen: "#00ff7f",
        steelblue: "#4682b4",
        tan: "#d2b48c",
        teal: "#008080",
        thistle: "#d8bfd8",
        tomato: "#ff6347",
        turquoise: "#40e0d0",
        violet: "#ee82ee",
        wheat: "#f5deb3",
        white: "#ffffff",
        whitesmoke: "#f5f5f5",
        yellow: "#ffff00",
        yellowgreen: "#9acd32"
    };

    function hue2rgb(e, t, n) {
        return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
    }

    function clamp(e, t) {
        if (void 0 !== e) return Math.min(t, Math.max(0, e || 0))
    }
    var Qolor = function(e, t, n, r) {
        this.r = clamp(e, 1), this.g = clamp(t, 1), this.b = clamp(n, 1), this.a = clamp(r, 1) || 1
    };
    Qolor.parse = function(e) {
        if ("string" == typeof e) {
            var t;
            if (e = e.toLowerCase(), t = (e = w3cColors[e] || e).match(/^#?(\w{2})(\w{2})(\w{2})$/)) return new Qolor(parseInt(t[1], 16) / 255, parseInt(t[2], 16) / 255, parseInt(t[3], 16) / 255);
            if (t = e.match(/^#?(\w)(\w)(\w)$/)) return new Qolor(parseInt(t[1] + t[1], 16) / 255, parseInt(t[2] + t[2], 16) / 255, parseInt(t[3] + t[3], 16) / 255);
            if (t = e.match(/rgba?\((\d+)\D+(\d+)\D+(\d+)(\D+([\d.]+))?\)/)) return new Qolor(parseFloat(t[1]) / 255, parseFloat(t[2]) / 255, parseFloat(t[3]) / 255, t[4] ? parseFloat(t[5]) : 1)
        }
        return new Qolor
    }, Qolor.fromHSL = function(e, t, n, r) {
        var i = (new Qolor).fromHSL(e, t, n);
        return i.a = void 0 === r ? 1 : r, i
    }, Qolor.prototype = {
        isValid: function() {
            return void 0 !== this.r && void 0 !== this.g && void 0 !== this.b
        },
        toHSL: function() {
            if (this.isValid()) {
                var e, t, n = Math.max(this.r, this.g, this.b),
                    r = Math.min(this.r, this.g, this.b),
                    i = (n + r) / 2,
                    o = n - r;
                if (o) {
                    switch (t = i > .5 ? o / (2 - n - r) : o / (n + r), n) {
                        case this.r:
                            e = (this.g - this.b) / o + (this.g < this.b ? 6 : 0);
                            break;
                        case this.g:
                            e = (this.b - this.r) / o + 2;
                            break;
                        case this.b:
                            e = (this.r - this.g) / o + 4
                    }
                    e *= 60
                } else e = t = 0;
                return {
                    h: e,
                    s: t,
                    l: i
                }
            }
        },
        fromHSL: function(e, t, n) {
            if (0 === t) return this.r = this.g = this.b = n, this;
            var r = n < .5 ? n * (1 + t) : n + t - n * t,
                i = 2 * n - r;
            return e /= 360, this.r = hue2rgb(i, r, e + 1 / 3), this.g = hue2rgb(i, r, e), this.b = hue2rgb(i, r, e - 1 / 3), this
        },
        toString: function() {
            if (this.isValid()) return 1 === this.a ? "#" + ((1 << 24) + (Math.round(255 * this.r) << 16) + (Math.round(255 * this.g) << 8) + Math.round(255 * this.b)).toString(16).slice(1, 7) : "rgba(" + [Math.round(255 * this.r), Math.round(255 * this.g), Math.round(255 * this.b), this.a.toFixed(2)].join(",") + ")"
        },
        toArray: function() {
            if (this.isValid) return [this.r, this.g, this.b]
        },
        hue: function(e) {
            var t = this.toHSL();
            return this.fromHSL(t.h + e, t.s, t.l)
        },
        saturation: function(e) {
            var t = this.toHSL();
            return this.fromHSL(t.h, t.s * e, t.l)
        },
        lightness: function(e) {
            var t = this.toHSL();
            return this.fromHSL(t.h, t.s, t.l * e)
        },
        clone: function() {
            return new Qolor(this.r, this.g, this.b, this.a)
        }
    };
    var suncalc = function() {
        "use strict";
        var e = Math.PI,
            t = Math.sin,
            n = Math.cos,
            r = Math.tan,
            i = Math.asin,
            o = Math.atan2,
            a = e / 180,
            s = 864e5,
            l = 2440588,
            u = 2451545;

        function h(e) {
            return function(e) {
                return e.valueOf() / s - .5 + l
            }(e) - u
        }
        var c = 23.4397 * a;

        function f(s) {
            var l, u, h = function(n) {
                return n + a * (1.9148 * t(n) + .02 * t(2 * n) + 3e-4 * t(3 * n)) + 102.9372 * a + e
            }(function(e) {
                return a * (357.5291 + .98560028 * e)
            }(s));
            return {
                dec: (l = h, u = 0, i(t(u) * n(c) + n(u) * t(c) * t(l))),
                ra: function(e, i) {
                    return o(t(e) * n(c) - r(i) * t(c), n(e))
                }(h, 0)
            }
        }
        return function(e, s, l) {
            var u = a * -l,
                c = a * s,
                d = h(e),
                m = f(d),
                p = function(e, t) {
                    return a * (280.16 + 360.9856235 * e) - t
                }(d, u) - m.ra;
            return {
                azimuth: function(e, i, a) {
                    return o(t(e), n(e) * t(i) - r(a) * n(i))
                }(p, c, m.dec),
                altitude: function(e, r, o) {
                    return i(t(r) * t(o) + n(r) * n(o) * n(e))
                }(p, c, m.dec)
            }
        }
    }();
    ! function(e) {
        var t = {};

        function n(r) {
            if (t[r]) return t[r].exports;
            var i = t[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
        }
        n.m = e, n.c = t, n.d = function(e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: r
            })
        }, n.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, n.t = function(e, t) {
            if (1 & t && (e = n(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var i in e) n.d(r, i, function(t) {
                    return e[t]
                }.bind(null, i));
            return r
        }, n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = "", n(n.s = "./src/icons/triangulateSVG.js")
    }({
        "./node_modules/abs-svg-path/index.js": function(module, exports) {
            eval("\nmodule.exports = absolutize\n\n/**\n * redefine `path` with absolute coordinates\n *\n * @param {Array} path\n * @return {Array}\n */\n\nfunction absolutize(path){\n\tvar startX = 0\n\tvar startY = 0\n\tvar x = 0\n\tvar y = 0\n\n\treturn path.map(function(seg){\n\t\tseg = seg.slice()\n\t\tvar type = seg[0]\n\t\tvar command = type.toUpperCase()\n\n\t\t// is relative\n\t\tif (type != command) {\n\t\t\tseg[0] = command\n\t\t\tswitch (type) {\n\t\t\t\tcase 'a':\n\t\t\t\t\tseg[6] += x\n\t\t\t\t\tseg[7] += y\n\t\t\t\t\tbreak\n\t\t\t\tcase 'v':\n\t\t\t\t\tseg[1] += y\n\t\t\t\t\tbreak\n\t\t\t\tcase 'h':\n\t\t\t\t\tseg[1] += x\n\t\t\t\t\tbreak\n\t\t\t\tdefault:\n\t\t\t\t\tfor (var i = 1; i < seg.length;) {\n\t\t\t\t\t\tseg[i++] += x\n\t\t\t\t\t\tseg[i++] += y\n\t\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t// update cursor state\n\t\tswitch (command) {\n\t\t\tcase 'Z':\n\t\t\t\tx = startX\n\t\t\t\ty = startY\n\t\t\t\tbreak\n\t\t\tcase 'H':\n\t\t\t\tx = seg[1]\n\t\t\t\tbreak\n\t\t\tcase 'V':\n\t\t\t\ty = seg[1]\n\t\t\t\tbreak\n\t\t\tcase 'M':\n\t\t\t\tx = startX = seg[1]\n\t\t\t\ty = startY = seg[2]\n\t\t\t\tbreak\n\t\t\tdefault:\n\t\t\t\tx = seg[seg.length - 2]\n\t\t\t\ty = seg[seg.length - 1]\n\t\t}\n\n\t\treturn seg\n\t})\n}\n\n\n//# sourceURL=webpack:///./node_modules/abs-svg-path/index.js?")
        },
        "./node_modules/adaptive-bezier-curve/function.js": function(module, exports) {
            eval("function clone(point) { //TODO: use gl-vec2 for this\n    return [point[0], point[1]]\n}\n\nfunction vec2(x, y) {\n    return [x, y]\n}\n\nmodule.exports = function createBezierBuilder(opt) {\n    opt = opt||{}\n\n    var RECURSION_LIMIT = typeof opt.recursion === 'number' ? opt.recursion : 8\n    var FLT_EPSILON = typeof opt.epsilon === 'number' ? opt.epsilon : 1.19209290e-7\n    var PATH_DISTANCE_EPSILON = typeof opt.pathEpsilon === 'number' ? opt.pathEpsilon : 1.0\n\n    var curve_angle_tolerance_epsilon = typeof opt.angleEpsilon === 'number' ? opt.angleEpsilon : 0.01\n    var m_angle_tolerance = opt.angleTolerance || 0\n    var m_cusp_limit = opt.cuspLimit || 0\n\n    return function bezierCurve(start, c1, c2, end, scale, points) {\n        if (!points)\n            points = []\n\n        scale = typeof scale === 'number' ? scale : 1.0\n        var distanceTolerance = PATH_DISTANCE_EPSILON / scale\n        distanceTolerance *= distanceTolerance\n        begin(start, c1, c2, end, points, distanceTolerance)\n        return points\n    }\n\n\n    ////// Based on:\n    ////// https://github.com/pelson/antigrain/blob/master/agg-2.4/src/agg_curves.cpp\n\n    function begin(start, c1, c2, end, points, distanceTolerance) {\n        points.push(clone(start))\n        var x1 = start[0],\n            y1 = start[1],\n            x2 = c1[0],\n            y2 = c1[1],\n            x3 = c2[0],\n            y3 = c2[1],\n            x4 = end[0],\n            y4 = end[1]\n        recursive(x1, y1, x2, y2, x3, y3, x4, y4, points, distanceTolerance, 0)\n        points.push(clone(end))\n    }\n\n    function recursive(x1, y1, x2, y2, x3, y3, x4, y4, points, distanceTolerance, level) {\n        if(level > RECURSION_LIMIT) \n            return\n\n        var pi = Math.PI\n\n        // Calculate all the mid-points of the line segments\n        //----------------------\n        var x12   = (x1 + x2) / 2\n        var y12   = (y1 + y2) / 2\n        var x23   = (x2 + x3) / 2\n        var y23   = (y2 + y3) / 2\n        var x34   = (x3 + x4) / 2\n        var y34   = (y3 + y4) / 2\n        var x123  = (x12 + x23) / 2\n        var y123  = (y12 + y23) / 2\n        var x234  = (x23 + x34) / 2\n        var y234  = (y23 + y34) / 2\n        var x1234 = (x123 + x234) / 2\n        var y1234 = (y123 + y234) / 2\n\n        if(level > 0) { // Enforce subdivision first time\n            // Try to approximate the full cubic curve by a single straight line\n            //------------------\n            var dx = x4-x1\n            var dy = y4-y1\n\n            var d2 = Math.abs((x2 - x4) * dy - (y2 - y4) * dx)\n            var d3 = Math.abs((x3 - x4) * dy - (y3 - y4) * dx)\n\n            var da1, da2\n\n            if(d2 > FLT_EPSILON && d3 > FLT_EPSILON) {\n                // Regular care\n                //-----------------\n                if((d2 + d3)*(d2 + d3) <= distanceTolerance * (dx*dx + dy*dy)) {\n                    // If the curvature doesn't exceed the distanceTolerance value\n                    // we tend to finish subdivisions.\n                    //----------------------\n                    if(m_angle_tolerance < curve_angle_tolerance_epsilon) {\n                        points.push(vec2(x1234, y1234))\n                        return\n                    }\n\n                    // Angle & Cusp Condition\n                    //----------------------\n                    var a23 = Math.atan2(y3 - y2, x3 - x2)\n                    da1 = Math.abs(a23 - Math.atan2(y2 - y1, x2 - x1))\n                    da2 = Math.abs(Math.atan2(y4 - y3, x4 - x3) - a23)\n                    if(da1 >= pi) da1 = 2*pi - da1\n                    if(da2 >= pi) da2 = 2*pi - da2\n\n                    if(da1 + da2 < m_angle_tolerance) {\n                        // Finally we can stop the recursion\n                        //----------------------\n                        points.push(vec2(x1234, y1234))\n                        return\n                    }\n\n                    if(m_cusp_limit !== 0.0) {\n                        if(da1 > m_cusp_limit) {\n                            points.push(vec2(x2, y2))\n                            return\n                        }\n\n                        if(da2 > m_cusp_limit) {\n                            points.push(vec2(x3, y3))\n                            return\n                        }\n                    }\n                }\n            }\n            else {\n                if(d2 > FLT_EPSILON) {\n                    // p1,p3,p4 are collinear, p2 is considerable\n                    //----------------------\n                    if(d2 * d2 <= distanceTolerance * (dx*dx + dy*dy)) {\n                        if(m_angle_tolerance < curve_angle_tolerance_epsilon) {\n                            points.push(vec2(x1234, y1234))\n                            return\n                        }\n\n                        // Angle Condition\n                        //----------------------\n                        da1 = Math.abs(Math.atan2(y3 - y2, x3 - x2) - Math.atan2(y2 - y1, x2 - x1))\n                        if(da1 >= pi) da1 = 2*pi - da1\n\n                        if(da1 < m_angle_tolerance) {\n                            points.push(vec2(x2, y2))\n                            points.push(vec2(x3, y3))\n                            return\n                        }\n\n                        if(m_cusp_limit !== 0.0) {\n                            if(da1 > m_cusp_limit) {\n                                points.push(vec2(x2, y2))\n                                return\n                            }\n                        }\n                    }\n                }\n                else if(d3 > FLT_EPSILON) {\n                    // p1,p2,p4 are collinear, p3 is considerable\n                    //----------------------\n                    if(d3 * d3 <= distanceTolerance * (dx*dx + dy*dy)) {\n                        if(m_angle_tolerance < curve_angle_tolerance_epsilon) {\n                            points.push(vec2(x1234, y1234))\n                            return\n                        }\n\n                        // Angle Condition\n                        //----------------------\n                        da1 = Math.abs(Math.atan2(y4 - y3, x4 - x3) - Math.atan2(y3 - y2, x3 - x2))\n                        if(da1 >= pi) da1 = 2*pi - da1\n\n                        if(da1 < m_angle_tolerance) {\n                            points.push(vec2(x2, y2))\n                            points.push(vec2(x3, y3))\n                            return\n                        }\n\n                        if(m_cusp_limit !== 0.0) {\n                            if(da1 > m_cusp_limit)\n                            {\n                                points.push(vec2(x3, y3))\n                                return\n                            }\n                        }\n                    }\n                }\n                else {\n                    // Collinear case\n                    //-----------------\n                    dx = x1234 - (x1 + x4) / 2\n                    dy = y1234 - (y1 + y4) / 2\n                    if(dx*dx + dy*dy <= distanceTolerance) {\n                        points.push(vec2(x1234, y1234))\n                        return\n                    }\n                }\n            }\n        }\n\n        // Continue subdivision\n        //----------------------\n        recursive(x1, y1, x12, y12, x123, y123, x1234, y1234, points, distanceTolerance, level + 1) \n        recursive(x1234, y1234, x234, y234, x34, y34, x4, y4, points, distanceTolerance, level + 1) \n    }\n}\n\n\n//# sourceURL=webpack:///./node_modules/adaptive-bezier-curve/function.js?")
        },
        "./node_modules/adaptive-bezier-curve/index.js": function(module, exports, __webpack_require__) {
            eval('module.exports = __webpack_require__(/*! ./function */ "./node_modules/adaptive-bezier-curve/function.js")()\n\n//# sourceURL=webpack:///./node_modules/adaptive-bezier-curve/index.js?')
        },
        "./node_modules/normalize-svg-path/index.js": function(module, exports) {
            eval("\nvar PI = Math.PI\nvar _120 = radians(120)\n\nmodule.exports = normalize\n\n/**\n * describe `path` in terms of cubic bézier \n * curves and move commands\n *\n * @param {Array} path\n * @return {Array}\n */\n\nfunction normalize(path){\n\t// init state\n\tvar prev\n\tvar result = []\n\tvar bezierX = 0\n\tvar bezierY = 0\n\tvar startX = 0\n\tvar startY = 0\n\tvar quadX = null\n\tvar quadY = null\n\tvar x = 0\n\tvar y = 0\n\n\tfor (var i = 0, len = path.length; i < len; i++) {\n\t\tvar seg = path[i]\n\t\tvar command = seg[0]\n\t\tswitch (command) {\n\t\t\tcase 'M':\n\t\t\t\tstartX = seg[1]\n\t\t\t\tstartY = seg[2]\n\t\t\t\tbreak\n\t\t\tcase 'A':\n\t\t\t\tseg = arc(x, y,seg[1],seg[2],radians(seg[3]),seg[4],seg[5],seg[6],seg[7])\n\t\t\t\t// split multi part\n\t\t\t\tseg.unshift('C')\n\t\t\t\tif (seg.length > 7) {\n\t\t\t\t\tresult.push(seg.splice(0, 7))\n\t\t\t\t\tseg.unshift('C')\n\t\t\t\t}\n\t\t\t\tbreak\n\t\t\tcase 'S':\n\t\t\t\t// default control point\n\t\t\t\tvar cx = x\n\t\t\t\tvar cy = y\n\t\t\t\tif (prev == 'C' || prev == 'S') {\n\t\t\t\t\tcx += cx - bezierX // reflect the previous command's control\n\t\t\t\t\tcy += cy - bezierY // point relative to the current point\n\t\t\t\t}\n\t\t\t\tseg = ['C', cx, cy, seg[1], seg[2], seg[3], seg[4]]\n\t\t\t\tbreak\n\t\t\tcase 'T':\n\t\t\t\tif (prev == 'Q' || prev == 'T') {\n\t\t\t\t\tquadX = x * 2 - quadX // as with 'S' reflect previous control point\n\t\t\t\t\tquadY = y * 2 - quadY\n\t\t\t\t} else {\n\t\t\t\t\tquadX = x\n\t\t\t\t\tquadY = y\n\t\t\t\t}\n\t\t\t\tseg = quadratic(x, y, quadX, quadY, seg[1], seg[2])\n\t\t\t\tbreak\n\t\t\tcase 'Q':\n\t\t\t\tquadX = seg[1]\n\t\t\t\tquadY = seg[2]\n\t\t\t\tseg = quadratic(x, y, seg[1], seg[2], seg[3], seg[4])\n\t\t\t\tbreak\n\t\t\tcase 'L':\n\t\t\t\tseg = line(x, y, seg[1], seg[2])\n\t\t\t\tbreak\n\t\t\tcase 'H':\n\t\t\t\tseg = line(x, y, seg[1], y)\n\t\t\t\tbreak\n\t\t\tcase 'V':\n\t\t\t\tseg = line(x, y, x, seg[1])\n\t\t\t\tbreak\n\t\t\tcase 'Z':\n\t\t\t\tseg = line(x, y, startX, startY)\n\t\t\t\tbreak\n\t\t}\n\n\t\t// update state\n\t\tprev = command\n\t\tx = seg[seg.length - 2]\n\t\ty = seg[seg.length - 1]\n\t\tif (seg.length > 4) {\n\t\t\tbezierX = seg[seg.length - 4]\n\t\t\tbezierY = seg[seg.length - 3]\n\t\t} else {\n\t\t\tbezierX = x\n\t\t\tbezierY = y\n\t\t}\n\t\tresult.push(seg)\n\t}\n\n\treturn result\n}\n\nfunction line(x1, y1, x2, y2){\n\treturn ['C', x1, y1, x2, y2, x2, y2]\n}\n\nfunction quadratic(x1, y1, cx, cy, x2, y2){\n\treturn [\n\t\t'C',\n\t\tx1/3 + (2/3) * cx,\n\t\ty1/3 + (2/3) * cy,\n\t\tx2/3 + (2/3) * cx,\n\t\ty2/3 + (2/3) * cy,\n\t\tx2,\n\t\ty2\n\t]\n}\n\n// This function is ripped from \n// github.com/DmitryBaranovskiy/raphael/blob/4d97d4/raphael.js#L2216-L2304 \n// which references w3.org/TR/SVG11/implnote.html#ArcImplementationNotes\n// TODO: make it human readable\n\nfunction arc(x1, y1, rx, ry, angle, large_arc_flag, sweep_flag, x2, y2, recursive) {\n\tif (!recursive) {\n\t\tvar xy = rotate(x1, y1, -angle)\n\t\tx1 = xy.x\n\t\ty1 = xy.y\n\t\txy = rotate(x2, y2, -angle)\n\t\tx2 = xy.x\n\t\ty2 = xy.y\n\t\tvar x = (x1 - x2) / 2\n\t\tvar y = (y1 - y2) / 2\n\t\tvar h = (x * x) / (rx * rx) + (y * y) / (ry * ry)\n\t\tif (h > 1) {\n\t\t\th = Math.sqrt(h)\n\t\t\trx = h * rx\n\t\t\try = h * ry\n\t\t}\n\t\tvar rx2 = rx * rx\n\t\tvar ry2 = ry * ry\n\t\tvar k = (large_arc_flag == sweep_flag ? -1 : 1)\n\t\t\t* Math.sqrt(Math.abs((rx2 * ry2 - rx2 * y * y - ry2 * x * x) / (rx2 * y * y + ry2 * x * x)))\n\t\tif (k == Infinity) k = 1 // neutralize\n\t\tvar cx = k * rx * y / ry + (x1 + x2) / 2\n\t\tvar cy = k * -ry * x / rx + (y1 + y2) / 2\n\t\tvar f1 = Math.asin(((y1 - cy) / ry).toFixed(9))\n\t\tvar f2 = Math.asin(((y2 - cy) / ry).toFixed(9))\n\n\t\tf1 = x1 < cx ? PI - f1 : f1\n\t\tf2 = x2 < cx ? PI - f2 : f2\n\t\tif (f1 < 0) f1 = PI * 2 + f1\n\t\tif (f2 < 0) f2 = PI * 2 + f2\n\t\tif (sweep_flag && f1 > f2) f1 = f1 - PI * 2\n\t\tif (!sweep_flag && f2 > f1) f2 = f2 - PI * 2\n\t} else {\n\t\tf1 = recursive[0]\n\t\tf2 = recursive[1]\n\t\tcx = recursive[2]\n\t\tcy = recursive[3]\n\t}\n\t// greater than 120 degrees requires multiple segments\n\tif (Math.abs(f2 - f1) > _120) {\n\t\tvar f2old = f2\n\t\tvar x2old = x2\n\t\tvar y2old = y2\n\t\tf2 = f1 + _120 * (sweep_flag && f2 > f1 ? 1 : -1)\n\t\tx2 = cx + rx * Math.cos(f2)\n\t\ty2 = cy + ry * Math.sin(f2)\n\t\tvar res = arc(x2, y2, rx, ry, angle, 0, sweep_flag, x2old, y2old, [f2, f2old, cx, cy])\n\t}\n\tvar t = Math.tan((f2 - f1) / 4)\n\tvar hx = 4 / 3 * rx * t\n\tvar hy = 4 / 3 * ry * t\n\tvar curve = [\n\t\t2 * x1 - (x1 + hx * Math.sin(f1)),\n\t\t2 * y1 - (y1 - hy * Math.cos(f1)),\n\t\tx2 + hx * Math.sin(f2),\n\t\ty2 - hy * Math.cos(f2),\n\t\tx2,\n\t\ty2\n\t]\n\tif (recursive) return curve\n\tif (res) curve = curve.concat(res)\n\tfor (var i = 0; i < curve.length;) {\n\t\tvar rot = rotate(curve[i], curve[i+1], angle)\n\t\tcurve[i++] = rot.x\n\t\tcurve[i++] = rot.y\n\t}\n\treturn curve\n}\n\nfunction rotate(x, y, rad){\n\treturn {\n\t\tx: x * Math.cos(rad) - y * Math.sin(rad),\n\t\ty: x * Math.sin(rad) + y * Math.cos(rad)\n\t}\n}\n\nfunction radians(degress){\n\treturn degress * (PI / 180)\n}\n\n\n//# sourceURL=webpack:///./node_modules/normalize-svg-path/index.js?")
        },
        "./node_modules/parse-svg-path/index.js": function(module, exports) {
            eval("\nmodule.exports = parse\n\n/**\n * expected argument lengths\n * @type {Object}\n */\n\nvar length = {a: 7, c: 6, h: 1, l: 2, m: 2, q: 4, s: 4, t: 2, v: 1, z: 0}\n\n/**\n * segment pattern\n * @type {RegExp}\n */\n\nvar segment = /([astvzqmhlc])([^astvzqmhlc]*)/ig\n\n/**\n * parse an svg path data string. Generates an Array\n * of commands where each command is an Array of the\n * form `[command, arg1, arg2, ...]`\n *\n * @param {String} path\n * @return {Array}\n */\n\nfunction parse(path) {\n\tvar data = []\n\tpath.replace(segment, function(_, command, args){\n\t\tvar type = command.toLowerCase()\n\t\targs = parseValues(args)\n\n\t\t// overloaded moveTo\n\t\tif (type == 'm' && args.length > 2) {\n\t\t\tdata.push([command].concat(args.splice(0, 2)))\n\t\t\ttype = 'l'\n\t\t\tcommand = command == 'm' ? 'l' : 'L'\n\t\t}\n\n\t\twhile (true) {\n\t\t\tif (args.length == length[type]) {\n\t\t\t\targs.unshift(command)\n\t\t\t\treturn data.push(args)\n\t\t\t}\n\t\t\tif (args.length < length[type]) throw new Error('malformed path data')\n\t\t\tdata.push([command].concat(args.splice(0, length[type])))\n\t\t}\n\t})\n\treturn data\n}\n\nvar number = /-?[0-9]*\\.?[0-9]+(?:e[-+]?\\d+)?/ig\n\nfunction parseValues(args) {\n\tvar numbers = args.match(number)\n\treturn numbers ? numbers.map(Number) : []\n}\n\n\n//# sourceURL=webpack:///./node_modules/parse-svg-path/index.js?")
        },
        "./node_modules/svg-path-contours/index.js": function(module, exports, __webpack_require__) {
            eval('var bezier = __webpack_require__(/*! adaptive-bezier-curve */ "./node_modules/adaptive-bezier-curve/index.js")\nvar abs = __webpack_require__(/*! abs-svg-path */ "./node_modules/abs-svg-path/index.js")\nvar norm = __webpack_require__(/*! normalize-svg-path */ "./node_modules/normalize-svg-path/index.js")\nvar copy = __webpack_require__(/*! vec2-copy */ "./node_modules/vec2-copy/index.js")\n\nfunction set(out, x, y) {\n    out[0] = x\n    out[1] = y\n    return out\n}\n\nvar tmp1 = [0,0],\n    tmp2 = [0,0],\n    tmp3 = [0,0]\n\nfunction bezierTo(points, scale, start, seg) {\n    bezier(start, \n        set(tmp1, seg[1], seg[2]), \n        set(tmp2, seg[3], seg[4]),\n        set(tmp3, seg[5], seg[6]), scale, points)\n}\n\nmodule.exports = function contours(svg, scale) {\n    var paths = []\n\n    var points = []\n    var pen = [0, 0]\n    norm(abs(svg)).forEach(function(segment, i, self) {\n        if (segment[0] === \'M\') {\n            copy(pen, segment.slice(1))\n            if (points.length>0) {\n                paths.push(points)\n                points = []\n            }\n        } else if (segment[0] === \'C\') {\n            bezierTo(points, scale, pen, segment)\n            set(pen, segment[5], segment[6])\n        } else {\n            throw new Error(\'illegal type in SVG: \'+segment[0])\n        }\n    })\n    if (points.length>0)\n        paths.push(points)\n    return paths\n}\n\n//# sourceURL=webpack:///./node_modules/svg-path-contours/index.js?')
        },
        "./node_modules/vec2-copy/index.js": function(module, exports) {
            eval("module.exports = function vec2Copy(out, a) {\n    out[0] = a[0]\n    out[1] = a[1]\n    return out\n}\n\n//# sourceURL=webpack:///./node_modules/vec2-copy/index.js?")
        },
        "./src/icons/triangulateSVG.js": function(module, exports, __webpack_require__) {
            eval('// webpack src/icons/triangulateSVG.js -o lib/triangulateSVG.js --mode development\n\nconst parseSVGPath = __webpack_require__(/*! parse-svg-path */ "./node_modules/parse-svg-path/index.js");\nconst getPathContours = __webpack_require__(/*! svg-path-contours */ "./node_modules/svg-path-contours/index.js");\n\n// TODO\n// rectangles, circles\n// colors from geometry\n// scale\n// simplify\n// ignore fill:none\n// <rect x="7.256" y="17.315" fill="none" width="57.489" height="35.508"/>\n// <rect x="7.256" y="49.216" fill="#F07D00" width="56.363" height="3.607"/>\n// <polygon fill="#003C64" stroke="#003C64" stroke-miterlimit="10" points="18.465,18.011 12.628,29.15 12.628,18.011 7.256,18.011 7.256,42.903 12.628,42.903 12.628,29.867 18.789,42.903 24.84,42.903 17.75,29.365 24.195,18.011"/>\n// <circle cx="25" cy="75" r="20" stroke="red" fill="transparent" stroke-width="5"/>\n// <ellipse cx="75" cy="75" rx="20" ry="5" stroke="red" fill="transparent" stroke-width="5"/>\n\nfunction SVGtoPolygons (svg) {\n  const res = [];\n\n  let rx = /<path[^/]+d="([^"]+)"/g;\n  let match;\n  do {\n    match = rx.exec(svg);\n    if (match) {\n      const path = parseSVGPath(match[1]);\n      const contours = getPathContours(path);\n      res.push(contours);\n    }\n  } while (match);\n\n  rx = /<polygon[^/]+points="([^"]+)"/g;\n  do {\n    match = rx.exec(svg);\n    if (match) {\n      const points = match[1]\n        .split(/\\s+/g)\n        .map(point => {\n          const p = point.split(\',\');\n          return [\n            parseFloat(p[0]),\n            parseFloat(p[1]),\n          ];\n        });\n      res.push([points]);\n    }\n  } while (match);\n\n  return res;\n}\n\nfunction getOffsetAndScale (polygons) {\n  let\n    minX = Infinity, maxX = -Infinity,\n    minY = Infinity, maxY = -Infinity;\n\n  polygons.forEach(poly => {\n    poly.forEach(ring => {\n      ring.forEach(point => {\n        minX = Math.min(minX, point[0]);\n        maxX = Math.max(maxX, point[0]);\n        minY = Math.min(minY, point[1]);\n        maxY = Math.max(maxY, point[1]);\n      });\n    });\n  });\n\n  return { offset: [minX, minY], scale: Math.max(maxX-minX, maxY-minY) };\n}\n\nwindow.triangulateSVG = function (svg) { // window... exposes it in webpack\n  const polygons = SVGtoPolygons(svg);\n\n  const { offset, scale } = getOffsetAndScale(polygons);\n\n  const res = [];\n\n  polygons.forEach(poly => {\n    const\n      vertices = [],\n      ringIndex = [];\n\n    let r = 0;\n    poly.forEach((ring, i) => {\n      ring.forEach(point => {\n        vertices.push(...point);\n      });\n\n      if (i) {\n        r += poly[i - 1].length;\n        ringIndex.push(r);\n      }\n    });\n\n    const triangles = earcut(vertices, ringIndex);\n    for (let t = 0; t < triangles.length-2; t+=3) {\n      const i1 = triangles[t  ];\n      const i2 = triangles[t+1];\n      const i3 = triangles[t+2];\n\n      const a = [ (vertices[i1*2]-offset[0])/scale, (vertices[i1*2+1]-offset[1])/scale ];\n      const b = [ (vertices[i2*2]-offset[0])/scale, (vertices[i2*2+1]-offset[1])/scale ];\n      const c = [ (vertices[i3*2]-offset[0])/scale, (vertices[i3*2+1]-offset[1])/scale ];\n\n      res.push([a, b, c]);\n    }\n  });\n\n  return res;\n};\n\n\n//# sourceURL=webpack:///./src/icons/triangulateSVG.js?')
        }
    });
    var earcut = function() {
        function e(e, i, o) {
            o = o || 2;
            var a, s, h, f, d, m, p, x = i && i.length,
                g = x ? i[0] * o : e.length,
                v = t(e, 0, g, o, !0),
                y = [];
            if (!v) return y;
            if (x && (v = function(e, r, i, o) {
                    var a, s, h, f, d, m = [];
                    for (a = 0, s = r.length; a < s; a++) h = r[a] * o, f = a < s - 1 ? r[a + 1] * o : e.length, (d = t(e, h, f, o, !1)) === d.next && (d.steiner = !0), m.push(c(d));
                    for (m.sort(l), a = 0; a < m.length; a++) u(m[a], i), i = n(i, i.next);
                    return i
                }(e, i, v, o)), e.length > 80 * o) {
                a = h = e[0], s = f = e[1];
                for (var w = o; w < g; w += o)(d = e[w]) < a && (a = d), (m = e[w + 1]) < s && (s = m), d > h && (h = d), m > f && (f = m);
                p = Math.max(h - a, f - s)
            }
            return r(v, y, o, a, s, p), y
        }

        function t(e, t, n, r, i) {
            var o, a;
            if (i === P(e, t, n, r) > 0)
                for (o = t; o < n; o += r) a = y(o, e[o], e[o + 1], a);
            else
                for (o = n - r; o >= t; o -= r) a = y(o, e[o], e[o + 1], a);
            return a && p(a, a.next) && (w(a), a = a.next), a
        }

        function n(e, t) {
            if (!e) return e;
            t || (t = e);
            var n, r = e;
            do {
                if (n = !1, r.steiner || !p(r, r.next) && 0 !== m(r.prev, r, r.next)) r = r.next;
                else {
                    if (w(r), (r = t = r.prev) === r.next) return null;
                    n = !0
                }
            } while (n || r !== t);
            return t
        }

        function r(e, t, l, u, c, f, d) {
            if (e) {
                !d && f && function(e, t, n, r) {
                    var i = e;
                    do {
                        null === i.z && (i.z = h(i.x, i.y, t, n, r)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next
                    } while (i !== e);
                    i.prevZ.nextZ = null, i.prevZ = null,
                        function(e) {
                            var t, n, r, i, o, a, s, l, u = 1;
                            do {
                                for (n = e, e = null, o = null, a = 0; n;) {
                                    for (a++, r = n, s = 0, t = 0; t < u && (s++, r = r.nextZ); t++);
                                    for (l = u; s > 0 || l > 0 && r;) 0 === s ? (i = r, r = r.nextZ, l--) : 0 !== l && r ? n.z <= r.z ? (i = n, n = n.nextZ, s--) : (i = r, r = r.nextZ, l--) : (i = n, n = n.nextZ, s--), o ? o.nextZ = i : e = i, i.prevZ = o, o = i;
                                    n = r
                                }
                                o.nextZ = null, u *= 2
                            } while (a > 1)
                        }(i)
                }(e, u, c, f);
                for (var m, p, x = e; e.prev !== e.next;)
                    if (m = e.prev, p = e.next, f ? o(e, u, c, f) : i(e)) t.push(m.i / l), t.push(e.i / l), t.push(p.i / l), w(e), e = p.next, x = p.next;
                    else if ((e = p) === x) {
                    d ? 1 === d ? r(e = a(e, t, l), t, l, u, c, f, 2) : 2 === d && s(e, t, l, u, c, f) : r(n(e), t, l, u, c, f, 1);
                    break
                }
            }
        }

        function i(e) {
            var t = e.prev,
                n = e,
                r = e.next;
            if (m(t, n, r) >= 0) return !1;
            for (var i = e.next.next; i !== e.prev;) {
                if (f(t.x, t.y, n.x, n.y, r.x, r.y, i.x, i.y) && m(i.prev, i, i.next) >= 0) return !1;
                i = i.next
            }
            return !0
        }

        function o(e, t, n, r) {
            var i = e.prev,
                o = e,
                a = e.next;
            if (m(i, o, a) >= 0) return !1;
            for (var s = i.x < o.x ? i.x < a.x ? i.x : a.x : o.x < a.x ? o.x : a.x, l = i.y < o.y ? i.y < a.y ? i.y : a.y : o.y < a.y ? o.y : a.y, u = i.x > o.x ? i.x > a.x ? i.x : a.x : o.x > a.x ? o.x : a.x, c = i.y > o.y ? i.y > a.y ? i.y : a.y : o.y > a.y ? o.y : a.y, d = h(s, l, t, n, r), p = h(u, c, t, n, r), x = e.nextZ; x && x.z <= p;) {
                if (x !== e.prev && x !== e.next && f(i.x, i.y, o.x, o.y, a.x, a.y, x.x, x.y) && m(x.prev, x, x.next) >= 0) return !1;
                x = x.nextZ
            }
            for (x = e.prevZ; x && x.z >= d;) {
                if (x !== e.prev && x !== e.next && f(i.x, i.y, o.x, o.y, a.x, a.y, x.x, x.y) && m(x.prev, x, x.next) >= 0) return !1;
                x = x.prevZ
            }
            return !0
        }

        function a(e, t, n) {
            var r = e;
            do {
                var i = r.prev,
                    o = r.next.next;
                !p(i, o) && x(i, r, r.next, o) && g(i, o) && g(o, i) && (t.push(i.i / n), t.push(r.i / n), t.push(o.i / n), w(r), w(r.next), r = e = o), r = r.next
            } while (r !== e);
            return r
        }

        function s(e, t, i, o, a, s) {
            var l = e;
            do {
                for (var u = l.next.next; u !== l.prev;) {
                    if (l.i !== u.i && d(l, u)) {
                        var h = v(l, u);
                        return l = n(l, l.next), h = n(h, h.next), r(l, t, i, o, a, s), void r(h, t, i, o, a, s)
                    }
                    u = u.next
                }
                l = l.next
            } while (l !== e)
        }

        function l(e, t) {
            return e.x - t.x
        }

        function u(e, t) {
            if (t = function(e, t) {
                    var n, r = t,
                        i = e.x,
                        o = e.y,
                        a = -1 / 0;
                    do {
                        if (o <= r.y && o >= r.next.y) {
                            var s = r.x + (o - r.y) * (r.next.x - r.x) / (r.next.y - r.y);
                            if (s <= i && s > a) {
                                if (a = s, s === i) {
                                    if (o === r.y) return r;
                                    if (o === r.next.y) return r.next
                                }
                                n = r.x < r.next.x ? r : r.next
                            }
                        }
                        r = r.next
                    } while (r !== t);
                    if (!n) return null;
                    if (i === a) return n.prev;
                    var l, u = n,
                        h = n.x,
                        c = n.y,
                        d = 1 / 0;
                    r = n.next;
                    for (; r !== u;) i >= r.x && r.x >= h && f(o < c ? i : a, o, h, c, o < c ? a : i, o, r.x, r.y) && ((l = Math.abs(o - r.y) / (i - r.x)) < d || l === d && r.x > n.x) && g(r, e) && (n = r, d = l), r = r.next;
                    return n
                }(e, t)) {
                var r = v(t, e);
                n(r, r.next)
            }
        }

        function h(e, t, n, r, i) {
            return (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - n) / i) | e << 8)) | e << 4)) | e << 2)) | e << 1)) | (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - r) / i) | t << 8)) | t << 4)) | t << 2)) | t << 1)) << 1
        }

        function c(e) {
            var t = e,
                n = e;
            do {
                t.x < n.x && (n = t), t = t.next
            } while (t !== e);
            return n
        }

        function f(e, t, n, r, i, o, a, s) {
            return (i - a) * (t - s) - (e - a) * (o - s) >= 0 && (e - a) * (r - s) - (n - a) * (t - s) >= 0 && (n - a) * (o - s) - (i - a) * (r - s) >= 0
        }

        function d(e, t) {
            return e.next.i !== t.i && e.prev.i !== t.i && ! function(e, t) {
                var n = e;
                do {
                    if (n.i !== e.i && n.next.i !== e.i && n.i !== t.i && n.next.i !== t.i && x(n, n.next, e, t)) return !0;
                    n = n.next
                } while (n !== e);
                return !1
            }(e, t) && g(e, t) && g(t, e) && function(e, t) {
                var n = e,
                    r = !1,
                    i = (e.x + t.x) / 2,
                    o = (e.y + t.y) / 2;
                do {
                    n.y > o != n.next.y > o && i < (n.next.x - n.x) * (o - n.y) / (n.next.y - n.y) + n.x && (r = !r), n = n.next
                } while (n !== e);
                return r
            }(e, t)
        }

        function m(e, t, n) {
            return (t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y)
        }

        function p(e, t) {
            return e.x === t.x && e.y === t.y
        }

        function x(e, t, n, r) {
            return !!(p(e, t) && p(n, r) || p(e, r) && p(n, t)) || m(e, t, n) > 0 != m(e, t, r) > 0 && m(n, r, e) > 0 != m(n, r, t) > 0
        }

        function g(e, t) {
            return m(e.prev, e, e.next) < 0 ? m(e, t, e.next) >= 0 && m(e, e.prev, t) >= 0 : m(e, t, e.prev) < 0 || m(e, e.next, t) < 0
        }

        function v(e, t) {
            var n = new b(e.i, e.x, e.y),
                r = new b(t.i, t.x, t.y),
                i = e.next,
                o = t.prev;
            return e.next = t, t.prev = e, n.next = i, i.prev = n, r.next = n, n.prev = r, o.next = r, r.prev = o, r
        }

        function y(e, t, n, r) {
            var i = new b(e, t, n);
            return r ? (i.next = r.next, i.prev = r, r.next.prev = i, r.next = i) : (i.prev = i, i.next = i), i
        }

        function w(e) {
            e.next.prev = e.prev, e.prev.next = e.next, e.prevZ && (e.prevZ.nextZ = e.nextZ), e.nextZ && (e.nextZ.prevZ = e.prevZ)
        }

        function b(e, t, n) {
            this.i = e, this.x = t, this.y = n, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
        }

        function P(e, t, n, r) {
            for (var i = 0, o = t, a = n - r; o < n; o += r) i += (e[a] - e[o]) * (e[o + 1] + e[a + 1]), a = o;
            return i
        }
        return e.deviation = function(e, t, n, r) {
            var i, o, a = t && t.length,
                s = a ? t[0] * n : e.length,
                l = Math.abs(P(e, 0, s, n));
            if (a)
                for (i = 0, o = t.length; i < o; i++) {
                    var u = t[i] * n,
                        h = i < o - 1 ? t[i + 1] * n : e.length;
                    l -= Math.abs(P(e, u, h, n))
                }
            var c = 0;
            for (i = 0, o = r.length; i < o; i += 3) {
                var f = r[i] * n,
                    d = r[i + 1] * n,
                    m = r[i + 2] * n;
                c += Math.abs((e[f] - e[m]) * (e[d + 1] - e[f + 1]) - (e[f] - e[d]) * (e[m + 1] - e[f + 1]))
            }
            return 0 === l && 0 === c ? 0 : Math.abs((c - l) / l)
        }, e.flatten = function(e) {
            for (var t = e[0][0].length, n = {
                    vertices: [],
                    holes: [],
                    dimensions: t
                }, r = 0, i = 0; i < e.length; i++) {
                for (var o = 0; o < e[i].length; o++)
                    for (var a = 0; a < t; a++) n.vertices.push(e[i][o][a]);
                i > 0 && (r += e[i - 1].length, n.holes.push(r))
            }
            return n
        }, e
    }();
    const shaders = {
            picking: {
                name: "picking",
                vs: "precision highp float; // is default in vertex shaders anyway, using highp fixes #49\nattribute vec4 aPosition;\nattribute vec3 aPickingColor;\nattribute float aZScale;\nuniform mat4 uModelMatrix;\nuniform mat4 uMatrix;\nuniform float uFogDistance;\nuniform float uFade;\nuniform float uIndex;\nvarying vec4 vColor;\nvoid main() {\nfloat f = clamp(uFade*aZScale, 0.0, 1.0);\nif (f == 0.0) {\ngl_Position = vec4(0.0, 0.0, 0.0, 0.0);\nvColor = vec4(0.0, 0.0, 0.0, 0.0);\n} else {\nvec4 pos = vec4(aPosition.x, aPosition.y, aPosition.z*f, aPosition.w);\ngl_Position = uMatrix * pos;\nvec4 mPosition = vec4(uModelMatrix * pos);\nfloat distance = length(mPosition);\nif (distance > uFogDistance) {\nvColor = vec4(0.0, 0.0, 0.0, 0.0);\n} else {\nvColor = vec4(clamp(uIndex, 0.0, 1.0), aPickingColor.g, aPickingColor.b, 1.0);\n}\n}\n}\n",
                fs: "#ifdef GL_ES\nprecision mediump float;\n#endif\nvarying vec4 vColor;\nvoid main() {\ngl_FragColor = vColor;\n}\n"
            },
            buildings: {
                name: "buildings",
                vs: "precision highp float; //is default in vertex shaders anyway, using highp fixes #49\n#define halfPi 1.57079632679\nattribute vec4 aPosition;\nattribute vec2 aTexCoord;\nattribute vec3 aNormal;\nattribute vec3 aColor;\nattribute float aHeight;\nattribute vec4 aTintColor;\nattribute float aZScale;\nuniform mat4 uModelMatrix;\nuniform mat4 uMatrix;\nuniform mat3 uNormalTransform;\nuniform vec3 uLightDirection;\nuniform vec3 uLightColor;\nuniform vec2 uViewDirOnMap;\nuniform vec2 uLowerEdgePoint;\nuniform float uFade;\nvarying vec3 vColor;\nvarying vec2 vTexCoord;\nvarying float verticalDistanceToLowerEdge;\nconst float gradientStrength = 0.4;\nvoid main() {\nfloat f = clamp(uFade*aZScale, 0.0, 1.0);\nif (f == 0.0) {\ngl_Position = vec4(0.0, 0.0, 0.0, 0.0);\nvColor = vec3(0.0, 0.0, 0.0);\n} else {\nvec4 pos = vec4(aPosition.x, aPosition.y, aPosition.z*f, aPosition.w);\ngl_Position = uMatrix * pos;\nvec3 color = aColor;\n// tint ***********************************************\nif (aTintColor.a > 0.0) {\ncolor = mix(aColor, aTintColor.rgb, 0.5);\n}\n//*** light intensity, defined by light direction on surface ****************\nvec3 transformedNormal = aNormal * uNormalTransform;\nfloat lightIntensity = max( dot(transformedNormal, uLightDirection), 0.0) / 1.5;\ncolor = color + uLightColor * lightIntensity;\nvTexCoord = aTexCoord;\n//*** vertical shading ******************************************************\nfloat verticalShading = clamp(gradientStrength - ((pos.z*gradientStrength) / (aHeight * f)), 0.0, gradientStrength);\n//***************************************************************************\nvColor = color-verticalShading;\nvec4 worldPos = uModelMatrix * pos;\nvec2 dirFromLowerEdge = worldPos.xy / worldPos.w - uLowerEdgePoint;\nverticalDistanceToLowerEdge = dot(dirFromLowerEdge, uViewDirOnMap);\n}\n}\n",
                fs: "#ifdef GL_ES\nprecision mediump float;\n#endif\nvarying vec3 vColor;\nvarying vec2 vTexCoord;\nvarying float verticalDistanceToLowerEdge;\nuniform vec3 uFogColor;\nuniform float uFogDistance;\nuniform float uFogBlurDistance;\nuniform sampler2D uWallTexIndex;\nvoid main() {\n\nfloat fogIntensity = (verticalDistanceToLowerEdge - uFogDistance) / uFogBlurDistance;\nfogIntensity = clamp(fogIntensity, 0.0, 1.0);\ngl_FragColor = vec4(vColor * texture2D(uWallTexIndex, vTexCoord).rgb, 1.0-fogIntensity);\n}\n"
            },
            buildings_with_shadows: {
                name: "buildings_with_shadows",
                vs: "precision highp float; //is default in vertex shaders anyway, using highp fixes #49\n#define halfPi 1.57079632679\nattribute vec4 aPosition;\nattribute vec3 aNormal;\nattribute vec3 aColor;\nattribute vec2 aTexCoord;\nattribute float aHeight;\nattribute vec4 aTintColor;\nattribute float aZScale;\nuniform mat4 uModelMatrix;\nuniform mat4 uMatrix;\nuniform mat4 uSunMatrix;\nuniform mat3 uNormalTransform;\nuniform vec2 uViewDirOnMap;\nuniform vec2 uLowerEdgePoint;\nuniform float uFade;\nvarying vec3 vColor;\nvarying vec2 vTexCoord;\nvarying vec3 vNormal;\nvarying vec3 vSunRelPosition;\nvarying float verticalDistanceToLowerEdge;\nfloat gradientStrength = 0.4;\nvoid main() {\nfloat f = clamp(uFade*aZScale, 0.0, 1.0);\nif (f == 0.0) {\ngl_Position = vec4(0.0, 0.0, 0.0, 0.0);\nvColor = vec3(0.0, 0.0, 0.0);\n} else {\nvec4 pos = vec4(aPosition.x, aPosition.y, aPosition.z*f, aPosition.w);\ngl_Position = uMatrix * pos;\nvec3 color = aColor;\n// tint ***********************************************\nif (aTintColor.a > 0.0) {\ncolor = mix(aColor, aTintColor.rgb, 0.5);\n}\n//*** light intensity, defined by light direction on surface ****************\nvNormal = aNormal;\nvTexCoord = aTexCoord;\n//vec3 transformedNormal = aNormal * uNormalTransform;\n//float lightIntensity = max( dot(aNormal, uLightDirection), 0.0) / 1.5;\n//color = color + uLightColor * lightIntensity;\n//*** vertical shading ******************************************************\nfloat verticalShading = clamp(gradientStrength - ((pos.z*gradientStrength) / (aHeight * f)), 0.0, gradientStrength);\n//***************************************************************************\nvColor = color-verticalShading;\nvec4 worldPos = uModelMatrix * pos;\nvec2 dirFromLowerEdge = worldPos.xy / worldPos.w - uLowerEdgePoint;\nverticalDistanceToLowerEdge = dot(dirFromLowerEdge, uViewDirOnMap);\n// *** shadow mapping ********\nvec4 sunRelPosition = uSunMatrix * pos;\nvSunRelPosition = (sunRelPosition.xyz / sunRelPosition.w + 1.0) / 2.0;\n}\n}\n",
                fs: "\n#ifdef GL_FRAGMENT_PRECISION_HIGH\nprecision highp float;\n#else\nprecision mediump float;\n#endif\nvarying vec2 vTexCoord;\nvarying vec3 vColor;\nvarying vec3 vNormal;\nvarying vec3 vSunRelPosition;\nvarying float verticalDistanceToLowerEdge;\nuniform vec3 uFogColor;\nuniform vec2 uShadowTexDimensions;\nuniform sampler2D uShadowTexIndex;\nuniform sampler2D uWallTexIndex;\nuniform float uFogDistance;\nuniform float uFogBlurDistance;\nuniform float uShadowStrength;\nuniform vec3 uLightDirection;\nuniform vec3 uLightColor;\nfloat isSeenBySun(const vec2 sunViewNDC, const float depth, const float bias) {\nif ( clamp( sunViewNDC, 0.0, 1.0) != sunViewNDC) //not inside sun's viewport\nreturn 1.0;\n\nfloat depthFromTexture = texture2D( uShadowTexIndex, sunViewNDC.xy).x;\n\n//compare depth values not in reciprocal but in linear depth\nreturn step(1.0/depthFromTexture, 1.0/depth + bias);\n}\nvoid main() {\nvec3 normal = normalize(vNormal); //may degenerate during per-pixel interpolation\nfloat diffuse = dot(uLightDirection, normal);\ndiffuse = max(diffuse, 0.0);\n// reduce shadow strength with:\n// - lowering sun positions, to be consistent with the shadows on the basemap (there,\n// shadows are faded out with lowering sun positions to hide shadow artifacts caused\n// when sun direction and map surface are almost perpendicular\n// - large angles between the sun direction and the surface normal, to hide shadow\n// artifacts that occur when surface normal and sun direction are almost perpendicular\nfloat shadowStrength = pow( max( min(\ndot(uLightDirection, vec3(0.0, 0.0, 1.0)),\ndot(uLightDirection, normal)\n), 0.0), 1.5);\nif (diffuse > 0.0 && shadowStrength > 0.0) {\n// note: the diffuse term is also the cosine between the surface normal and the\n// light direction\nfloat bias = clamp(0.0007*tan(acos(diffuse)), 0.0, 0.01);\nvec2 pos = fract( vSunRelPosition.xy * uShadowTexDimensions);\n\nvec2 tl = floor(vSunRelPosition.xy * uShadowTexDimensions) / uShadowTexDimensions;\nfloat tlVal = isSeenBySun( tl, vSunRelPosition.z, bias);\nfloat trVal = isSeenBySun( tl + vec2(1.0, 0.0) / uShadowTexDimensions, vSunRelPosition.z, bias);\nfloat blVal = isSeenBySun( tl + vec2(0.0, 1.0) / uShadowTexDimensions, vSunRelPosition.z, bias);\nfloat brVal = isSeenBySun( tl + vec2(1.0, 1.0) / uShadowTexDimensions, vSunRelPosition.z, bias);\nfloat occludedBySun = mix(\nmix(tlVal, trVal, pos.x),\nmix(blVal, brVal, pos.x),\npos.y);\ndiffuse *= 1.0 - (shadowStrength * (1.0 - occludedBySun));\n}\nvec3 color = vColor* texture2D( uWallTexIndex, vTexCoord.st).rgb +\n(diffuse/1.5) * uLightColor;\nfloat fogIntensity = (verticalDistanceToLowerEdge - uFogDistance) / uFogBlurDistance;\nfogIntensity = clamp(fogIntensity, 0.0, 1.0);\n//gl_FragColor = vec4( mix(color, uFogColor, fogIntensity), 1.0);\ngl_FragColor = vec4( color, 1.0-fogIntensity);\n}\n"
            },
            markers_simple: {
                name: "markers_simple",
                vs: "precision highp float; // is default in vertex shaders anyway, using highp fixes #49\nattribute vec4 aPosition;\nuniform mat4 uProjMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uModelMatrix;\nuniform vec3 uColor;\nvarying vec3 vColor;\n// TODO: fog distance handling is missing here\nvoid main() {\nmat4 modelView = uViewMatrix * uModelMatrix;\nmodelView[0][0] = 1.0;\nmodelView[0][1] = 0.0;\nmodelView[0][2] = 0.0;\nmodelView[1][0] = 0.0;\nmodelView[1][1] = 1.0;\nmodelView[1][2] = 0.0;\nmodelView[2][0] = 0.0;\nmodelView[2][1] = 0.0;\nmodelView[2][2] = 1.0;\nmat4 mvp = uProjMatrix * modelView;\nfloat reciprScaleOnscreen = 0.02;\nfloat w = (mvp * vec4(0,0,0,1)).w;\nw *= reciprScaleOnscreen;\nvec4 pos = vec4((aPosition.x * w), (aPosition.y * w) , aPosition.z * w, 1);\ngl_Position = mvp * pos;\nvColor = uColor;\n}\n",
                fs: "#ifdef GL_ES\nprecision mediump float;\n#endif\nvarying vec3 vColor;\nvoid main() {\ngl_FragColor = vec4(vColor, 1.0);\n}\n"
            },
            markers: {
                name: "markers",
                vs: "precision highp float; // is default in vertex shaders anyway, using highp fixes #49\nattribute vec4 aPosition;\nuniform mat4 uProjMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uModelMatrix;\nuniform vec3 uColor;\nuniform mat4 uSunMatrix;\nuniform vec2 uViewDirOnMap;\nuniform vec2 uLowerEdgePoint;\nvarying vec3 vColor;\nvarying vec3 vNormal;\nvarying vec3 vSunRelPosition;\nvarying float verticalDistanceToLowerEdge;\n// TODO: fog distance handling is missing here\nvoid main() {\nmat4 modelView = uViewMatrix * uModelMatrix;\nmodelView[0][0] = 1.0;\nmodelView[0][1] = 0.0;\nmodelView[0][2] = 0.0;\nmodelView[1][0] = 0.0;\nmodelView[1][1] = 1.0;\nmodelView[1][2] = 0.0;\nmodelView[2][0] = 0.0;\nmodelView[2][1] = 0.0;\nmodelView[2][2] = 1.0;\nmat4 mvp = uProjMatrix * modelView;\nfloat reciprScaleOnscreen = 0.02;\nfloat w = (mvp * vec4(0,0,0,1)).w;\nw *= reciprScaleOnscreen;\nvec4 pos = vec4((aPosition.x * w), (aPosition.y * w) , aPosition.z * w, 1);\ngl_Position = mvp * pos;\nvColor = uColor;\nvec4 worldPos = uModelMatrix * pos;\nvec2 dirFromLowerEdge = worldPos.xy / worldPos.w - uLowerEdgePoint;\nverticalDistanceToLowerEdge = dot(dirFromLowerEdge, uViewDirOnMap);\n// *** shadow mapping ********\nvec4 sunRelPosition = uSunMatrix * pos;\nvSunRelPosition = (sunRelPosition.xyz / sunRelPosition.w + 1.0) / 2.0;\n}\n",
                fs: "#ifdef GL_FRAGMENT_PRECISION_HIGH\nprecision highp float;\n#else\nprecision mediump float;\n#endif\nvarying vec3 vColor;\nvarying vec3 vNormal;\nvarying vec3 vSunRelPosition;\nvarying float verticalDistanceToLowerEdge;\nuniform vec3 uFogColor;\nuniform vec2 uShadowTexDimensions;\nuniform sampler2D uShadowTexIndex;\nuniform float uFogDistance;\nuniform float uFogBlurDistance;\nuniform float uShadowStrength;\nuniform vec3 uLightDirection;\nuniform vec3 uLightColor;\nfloat isSeenBySun(const vec2 sunViewNDC, const float depth, const float bias) {\nif ( clamp( sunViewNDC, 0.0, 1.0) != sunViewNDC) // not inside sun's viewport\nreturn 1.0;\n\nfloat depthFromTexture = texture2D( uShadowTexIndex, sunViewNDC.xy).x;\n\n// compare depth values not in reciprocal but in linear depth\nreturn step(1.0/depthFromTexture, 1.0/depth + bias);\n}\nvoid main() {\nvec3 normal = normalize(vec3(0.0, -1.0, 0.0)); //may degenerate during per-pixel interpolation\nfloat diffuse = dot(uLightDirection, normal);\ndiffuse = max(diffuse, 0.0);\n// reduce shadow strength with:\n// - lowering sun positions, to be consistent with the shadows on the basemap (there,\n// shadows are faded out with lowering sun positions to hide shadow artifacts caused\n// when sun direction and map surface are almost perpendicular\n// - large angles between the sun direction and the surface normal, to hide shadow\n// artifacts that occur when surface normal and sun direction are almost perpendicular\nfloat shadowStrength = pow( max( min(\ndot(uLightDirection, vec3(0.0, 0.0, 1.0)),\ndot(uLightDirection, normal)\n), 0.0), 1.5);\nif (diffuse > 0.0 && shadowStrength > 0.0) {\n// note: the diffuse term is also the cosine between the surface normal and the\n// light direction\nfloat bias = clamp(0.0007*tan(acos(diffuse)), 0.0, 0.01);\nvec2 pos = fract( vSunRelPosition.xy * uShadowTexDimensions);\n\nvec2 tl = floor(vSunRelPosition.xy * uShadowTexDimensions) / uShadowTexDimensions;\nfloat tlVal = isSeenBySun( tl, vSunRelPosition.z, bias);\nfloat trVal = isSeenBySun( tl + vec2(1.0, 0.0) / uShadowTexDimensions, vSunRelPosition.z, bias);\nfloat blVal = isSeenBySun( tl + vec2(0.0, 1.0) / uShadowTexDimensions, vSunRelPosition.z, bias);\nfloat brVal = isSeenBySun( tl + vec2(1.0, 1.0) / uShadowTexDimensions, vSunRelPosition.z, bias);\nfloat occludedBySun = mix(\nmix(tlVal, trVal, pos.x),\nmix(blVal, brVal, pos.x),\npos.y);\ndiffuse *= 1.0 - (shadowStrength * (1.0 - occludedBySun));\n}\nvec3 color = vColor + (diffuse/1.5) * uLightColor;\nfloat fogIntensity = (verticalDistanceToLowerEdge - uFogDistance) / uFogBlurDistance;\nfogIntensity = clamp(fogIntensity, 0.0, 1.0);\ngl_FragColor = vec4( color, 1.0-fogIntensity);\n}\n"
            },
            markers_picking: {
                name: "markers_picking",
                vs: "precision highp float; // is default in vertex shaders anyway, using highp fixes #49\nattribute vec4 aPosition;\nuniform vec3 uPickingColor;\nuniform mat4 uProjMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uModelMatrix;\nuniform float uFogDistance;\nuniform float uIndex;\nvarying vec3 vColor;\nvoid main() {\nmat4 modelView = uViewMatrix * uModelMatrix;\nmodelView[0][0] = 1.0;\nmodelView[0][1] = 0.0;\nmodelView[0][2] = 0.0;\nmodelView[1][0] = 0.0;\nmodelView[1][1] = 1.0;\nmodelView[1][2] = 0.0;\nmodelView[2][0] = 0.0;\nmodelView[2][1] = 0.0;\nmodelView[2][2] = 1.0;\nmat4 mvp = uProjMatrix * modelView;\nfloat reciprScaleOnscreen = 0.02;\nfloat w = (mvp * vec4(0,0,0,1)).w;\nw *= reciprScaleOnscreen;\nvec4 pos = vec4((aPosition.x * w), (aPosition.y * w) , aPosition.z * w, 1);\ngl_Position = mvp * pos;\n// vec4 pos = aPosition.x;\n// gl_Position = uMatrix * pos;\nvec4 mPosition = vec4(uModelMatrix * pos);\nfloat distance = length(mPosition);\nif (distance > uFogDistance) {\nvColor = vec3(0.0, 0.0, 0.0);\n} else {\nvColor = vec3(clamp(uIndex, 0.0, 1.0), uPickingColor.g, uPickingColor.b);\n}\n}\n",
                fs: "#ifdef GL_ES\nprecision mediump float;\n#endif\nvarying vec3 vColor;\nvoid main() {\ngl_FragColor = vec4(vColor, 1.0);\n}\n"
            },
            basemap: {
                name: "basemap",
                vs: "precision highp float; // is default in vertex shaders anyway, using highp fixes #49\n#define halfPi 1.57079632679\nattribute vec4 aPosition;\nattribute vec2 aTexCoord;\nuniform mat4 uViewMatrix;\nuniform mat4 uModelMatrix;\nuniform vec2 uViewDirOnMap;\nuniform vec2 uLowerEdgePoint;\nvarying vec2 vTexCoord;\nvarying float verticalDistanceToLowerEdge;\nvoid main() {\ngl_Position = uViewMatrix * aPosition;\nvTexCoord = aTexCoord;\nvec4 worldPos = uModelMatrix * aPosition;\nvec2 dirFromLowerEdge = worldPos.xy / worldPos.w - uLowerEdgePoint;\nverticalDistanceToLowerEdge = dot(dirFromLowerEdge, uViewDirOnMap);\n}\n",
                fs: "#ifdef GL_ES\nprecision mediump float;\n#endif\nuniform sampler2D uTexIndex;\nuniform vec3 uFogColor;\nvarying vec2 vTexCoord;\nvarying float verticalDistanceToLowerEdge;\nuniform float uFogDistance;\nuniform float uFogBlurDistance;\nvoid main() {\nfloat fogIntensity = (verticalDistanceToLowerEdge - uFogDistance) / uFogBlurDistance;\nfogIntensity = clamp(fogIntensity, 0.0, 1.0);\ngl_FragColor = vec4(texture2D(uTexIndex, vec2(vTexCoord.x, 1.0-vTexCoord.y)).rgb, 1.0-fogIntensity);\n}\n"
            },
            basemap_with_shadows: {
                name: "basemap_with_shadows",
                vs: "precision highp float; //is default in vertex shaders anyway, using highp fixes #49\nattribute vec3 aPosition;\nattribute vec3 aNormal;\nuniform mat4 uModelMatrix;\nuniform mat4 uMatrix;\nuniform mat4 uSunMatrix;\nuniform vec2 uViewDirOnMap;\nuniform vec2 uLowerEdgePoint;\n//varying vec2 vTexCoord;\nvarying vec3 vSunRelPosition;\nvarying vec3 vNormal;\nvarying float verticalDistanceToLowerEdge;\nvoid main() {\nvec4 pos = vec4(aPosition.xyz, 1.0);\ngl_Position = uMatrix * pos;\nvec4 sunRelPosition = uSunMatrix * pos;\nvSunRelPosition = (sunRelPosition.xyz / sunRelPosition.w + 1.0) / 2.0;\nvNormal = aNormal;\nvec4 worldPos = uModelMatrix * pos;\nvec2 dirFromLowerEdge = worldPos.xy / worldPos.w - uLowerEdgePoint;\nverticalDistanceToLowerEdge = dot(dirFromLowerEdge, uViewDirOnMap);\n}\n",
                fs: "\n#ifdef GL_FRAGMENT_PRECISION_HIGH\nprecision highp float;\n#else\nprecision mediump float;\n#endif\n/* This shader computes the diffuse brightness of the map layer. It does *not*\n* render the map texture itself, but is instead intended to be blended on top\n* of an already rendered map.\n* Note: this shader is not (and does not attempt to) be physically correct.\n* It is intented to be a blend between a useful illustration of cast\n* shadows and a mitigation of shadow casting artifacts occuring at\n* low angles on incidence.\n* Map brightness is only affected by shadows, not by light direction.\n* Shadows are darkest when light comes from straight above (and thus\n* shadows can be computed reliably) and become less and less visible\n* with the light source close to horizon (where moiré and offset\n* artifacts would otherwise be visible).\n*/\n//uniform sampler2D uTexIndex;\nuniform sampler2D uShadowTexIndex;\nuniform vec3 uFogColor;\nuniform vec3 uDirToSun;\nuniform vec2 uShadowTexDimensions;\nuniform float uShadowStrength;\nvarying vec2 vTexCoord;\nvarying vec3 vSunRelPosition;\nvarying vec3 vNormal;\nvarying float verticalDistanceToLowerEdge;\nuniform float uFogDistance;\nuniform float uFogBlurDistance;\nfloat isSeenBySun( const vec2 sunViewNDC, const float depth, const float bias) {\nif ( clamp( sunViewNDC, 0.0, 1.0) != sunViewNDC) //not inside sun's viewport\nreturn 1.0;\n\nfloat depthFromTexture = texture2D( uShadowTexIndex, sunViewNDC.xy).x;\n\n//compare depth values not in reciprocal but in linear depth\nreturn step(1.0/depthFromTexture, 1.0/depth + bias);\n}\nvoid main() {\n//vec2 tl = floor(vSunRelPosition.xy * uShadowTexDimensions) / uShadowTexDimensions;\n//gl_FragColor = vec4(vec3(texture2D( uShadowTexIndex, tl).x), 1.0);\n//return;\nfloat diffuse = dot(uDirToSun, normalize(vNormal));\ndiffuse = max(diffuse, 0.0);\n\nfloat shadowStrength = uShadowStrength * pow(diffuse, 1.5);\nif (diffuse > 0.0) {\n// note: the diffuse term is also the cosine between the surface normal and the\n// light direction\nfloat bias = clamp(0.0007*tan(acos(diffuse)), 0.0, 0.01);\n\nvec2 pos = fract( vSunRelPosition.xy * uShadowTexDimensions);\n\nvec2 tl = floor(vSunRelPosition.xy * uShadowTexDimensions) / uShadowTexDimensions;\nfloat tlVal = isSeenBySun( tl, vSunRelPosition.z, bias);\nfloat trVal = isSeenBySun( tl + vec2(1.0, 0.0) / uShadowTexDimensions, vSunRelPosition.z, bias);\nfloat blVal = isSeenBySun( tl + vec2(0.0, 1.0) / uShadowTexDimensions, vSunRelPosition.z, bias);\nfloat brVal = isSeenBySun( tl + vec2(1.0, 1.0) / uShadowTexDimensions, vSunRelPosition.z, bias);\ndiffuse = mix( mix(tlVal, trVal, pos.x),\nmix(blVal, brVal, pos.x),\npos.y);\n}\ndiffuse = mix(1.0, diffuse, shadowStrength);\n\nfloat fogIntensity = (verticalDistanceToLowerEdge - uFogDistance) / uFogBlurDistance;\nfogIntensity = clamp(fogIntensity, 0.0, 1.0);\nfloat darkness = (1.0 - diffuse);\ndarkness *= (1.0 - fogIntensity);\ngl_FragColor = vec4(vec3(1.0 - darkness), 1.0);\n}\n"
            },
            texture: {
                name: "texture",
                vs: "precision highp float; //is default in vertex shaders anyway, using highp fixes #49\nattribute vec4 aPosition;\nattribute vec2 aTexCoord;\nuniform mat4 uMatrix;\nvarying vec2 vTexCoord;\nvoid main() {\ngl_Position = uMatrix * aPosition;\nvTexCoord = aTexCoord;\n}\n",
                fs: "#ifdef GL_ES\nprecision mediump float;\n#endif\nuniform sampler2D uTexIndex;\nvarying vec2 vTexCoord;\nvoid main() {\ngl_FragColor = vec4(texture2D(uTexIndex, vTexCoord.st).rgb, 1.0);\n}\n"
            },
            depth_normal: {
                name: "depth_normal",
                vs: "precision highp float; //is default in vertex shaders anyway, using highp fixes #49\nattribute vec4 aPosition;\nattribute vec3 aNormal;\nattribute float aZScale;\nuniform mat4 uMatrix;\nuniform mat4 uModelMatrix;\nuniform mat3 uNormalMatrix;\nuniform vec2 uViewDirOnMap;\nuniform vec2 uLowerEdgePoint;\nuniform float uFade;\nvarying float verticalDistanceToLowerEdge;\nvarying vec3 vNormal;\nvoid main() {\nfloat f = clamp(uFade*aZScale, 0.0, 1.0);\nif (f == 0.0) {\ngl_Position = vec4(0.0, 0.0, 0.0, 0.0);\nverticalDistanceToLowerEdge = 0.0;\n} else {\nvec4 pos = vec4(aPosition.x, aPosition.y, aPosition.z*f, aPosition.w);\ngl_Position = uMatrix * pos;\nvNormal = uNormalMatrix * aNormal;\nvec4 worldPos = uModelMatrix * pos;\nvec2 dirFromLowerEdge = worldPos.xy / worldPos.w - uLowerEdgePoint;\nverticalDistanceToLowerEdge = dot(dirFromLowerEdge, uViewDirOnMap);\n}\n}\n",
                fs: "\n#ifdef GL_ES\nprecision mediump float;\n#endif\nuniform float uFogDistance;\nuniform float uFogBlurDistance;\nvarying float verticalDistanceToLowerEdge;\nvarying vec3 vNormal;\nvoid main() {\nfloat fogIntensity = (verticalDistanceToLowerEdge - uFogDistance) / uFogBlurDistance;\ngl_FragColor = vec4(normalize(vNormal) / 2.0 + 0.5, clamp(fogIntensity, 0.0, 1.0));\n}\n"
            },
            ambient_from_depth: {
                name: "ambient_from_depth",
                vs: "precision highp float; //is default in vertex shaders anyway, using highp fixes #49\nattribute vec4 aPosition;\nattribute vec2 aTexCoord;\nvarying vec2 vTexCoord;\nvoid main() {\ngl_Position = aPosition;\nvTexCoord = aTexCoord;\n}\n",
                fs: "#ifdef GL_FRAGMENT_PRECISION_HIGH\n// we need high precision for the depth values\nprecision highp float;\n#else\nprecision mediump float;\n#endif\nuniform sampler2D uDepthTexIndex;\nuniform sampler2D uFogTexIndex;\nuniform vec2 uInverseTexSize; //in 1/pixels, e.g. 1/512 if the texture is 512px wide\nuniform float uEffectStrength;\nuniform float uNearPlane;\nuniform float uFarPlane;\nvarying vec2 vTexCoord;\n/* Retrieves the depth value 'offset' pixels away from 'pos' from texture 'uDepthTexIndex'. */\nfloat getDepth(vec2 pos, ivec2 offset)\n{\nfloat z = texture2D(uDepthTexIndex, pos + float(offset) * uInverseTexSize).x;\nreturn (2.0 * uNearPlane) / (uFarPlane + uNearPlane - z * (uFarPlane - uNearPlane)); // linearize depth\n}\n/* getOcclusionFactor() determines a heuristic factor (from [0..1]) for how\n* much the fragment at 'pos' with depth 'depthHere'is occluded by the\n* fragment that is (dx, dy) texels away from it.\n*/\nfloat getOcclusionFactor(float depthHere, vec2 pos, ivec2 offset) {\nfloat depthThere = getDepth(pos, offset);\n/* if the fragment at (dx, dy) has no depth (i.e. there was nothing rendered there),\n* then 'here' is not occluded (result 1.0) */\nif (depthThere == 0.0)\nreturn 1.0;\n/* if the fragment at (dx, dy) is further away from the viewer than 'here', then\n* 'here is not occluded' */\nif (depthHere < depthThere )\nreturn 1.0;\nfloat relDepthDiff = depthThere / depthHere;\nfloat depthDiff = abs(depthThere - depthHere) * uFarPlane;\n/* if the fragment at (dx, dy) is closer to the viewer than 'here', then it occludes\n* 'here'. The occlusion is the higher the bigger the depth difference between the two\n* locations is.\n* However, if the depth difference is too high, we assume that 'there' lies in a\n* completely different depth region of the scene than 'here' and thus cannot occlude\n* 'here'. This last assumption gets rid of very dark artifacts around tall buildings.\n*/\nreturn depthDiff < 50.0 ? mix(0.99, 1.0, 1.0 - clamp(depthDiff, 0.0, 1.0)) : 1.0;\n}\n/* This shader approximates the ambient occlusion in screen space (SSAO).\n* It is based on the assumption that a pixel will be occluded by neighboring\n* pixels iff. those have a depth value closer to the camera than the original\n* pixel itself (the function getOcclusionFactor() computes this occlusion\n* by a single other pixel).\n*\n* A naive approach would sample all pixels within a given distance. For an\n* interesting-looking effect, the sampling area needs to be at least 9 pixels\n* wide (-/+ 4), requiring 81 texture lookups per pixel for ambient occlusion.\n* This overburdens many GPUs.\n* To make the ambient occlusion computation faster, we do not consider all\n* texels in the sampling area, but only 16. This causes some sampling artifacts\n* that are later removed by blurring the ambient occlusion texture (this is\n* done in a separate shader).\n*/\nvoid main() {\nfloat depthHere = getDepth(vTexCoord, ivec2(0, 0));\nfloat fogIntensity = texture2D(uFogTexIndex, vTexCoord).w;\nif (depthHere == 0.0)\n{\n\t//there was nothing rendered 'here' --\x3e it can't be occluded\ngl_FragColor = vec4(1.0);\nreturn;\n}\nfloat occlusionFactor = 1.0;\nocclusionFactor *= getOcclusionFactor(depthHere, vTexCoord, ivec2(-1, 0));\nocclusionFactor *= getOcclusionFactor(depthHere, vTexCoord, ivec2(+1, 0));\nocclusionFactor *= getOcclusionFactor(depthHere, vTexCoord, ivec2( 0, -1));\nocclusionFactor *= getOcclusionFactor(depthHere, vTexCoord, ivec2( 0, +1));\nocclusionFactor *= getOcclusionFactor(depthHere, vTexCoord, ivec2(-2, -2));\nocclusionFactor *= getOcclusionFactor(depthHere, vTexCoord, ivec2(+2, +2));\nocclusionFactor *= getOcclusionFactor(depthHere, vTexCoord, ivec2(+2, -2));\nocclusionFactor *= getOcclusionFactor(depthHere, vTexCoord, ivec2(-2, +2));\nocclusionFactor *= getOcclusionFactor(depthHere, vTexCoord, ivec2(-4, 0));\nocclusionFactor *= getOcclusionFactor(depthHere, vTexCoord, ivec2(+4, 0));\nocclusionFactor *= getOcclusionFactor(depthHere, vTexCoord, ivec2( 0, -4));\nocclusionFactor *= getOcclusionFactor(depthHere, vTexCoord, ivec2( 0, +4));\nocclusionFactor *= getOcclusionFactor(depthHere, vTexCoord, ivec2(-4, -4));\nocclusionFactor *= getOcclusionFactor(depthHere, vTexCoord, ivec2(+4, +4));\nocclusionFactor *= getOcclusionFactor(depthHere, vTexCoord, ivec2(+4, -4));\nocclusionFactor *= getOcclusionFactor(depthHere, vTexCoord, ivec2(-4, +4));\nocclusionFactor = pow(occlusionFactor, 4.0) + 55.0/255.0; // empirical bias determined to let SSAO have no effect on the map plane\nocclusionFactor = 1.0 - ((1.0 - occlusionFactor) * uEffectStrength * (1.0-fogIntensity));\ngl_FragColor = vec4(vec3(occlusionFactor), 1.0);\n}\n"
            },
            flat_color: {
                name: "flat_color",
                vs: "precision highp float; // is default in vertex shaders anyway, using highp fixes #49\nattribute vec4 aPosition;\nuniform mat4 uMatrix;\nvoid main() {\ngl_Position = uMatrix * aPosition;\n}\n",
                fs: "#ifdef GL_ES\nprecision mediump float;\n#endif\nuniform vec4 uColor;\nvoid main() {\ngl_FragColor = uColor;\n}\n"
            },
            horizon: {
                name: "horizon",
                vs: "precision highp float; // is default in vertex shaders anyway, using highp fixes #49\n#define halfPi 1.57079632679\nattribute vec4 aPosition;\nuniform mat4 uMatrix;\nuniform float uAbsoluteHeight;\nvarying vec2 vTexCoord;\nvarying float vRelativeHeight;\nvoid main() {\ngl_Position = uMatrix * aPosition;\nvRelativeHeight = aPosition.z / uAbsoluteHeight;\n}\n",
                fs: "#ifdef GL_ES\nprecision mediump float;\n#endif\nuniform vec3 uFogColor;\nvarying float vRelativeHeight;\nvoid main() {\nfloat blendFactor = min(100.0 * vRelativeHeight, 1.0);\nvec4 skyColor = vec4(0.9, 0.85, 1.0, 1.0);\ngl_FragColor = mix(vec4(uFogColor, 1.0), skyColor, blendFactor);\n}\n"
            },
            blur: {
                name: "blur",
                vs: "precision highp float; // is default in vertex shaders anyway, using highp fixes #49\nattribute vec4 aPosition;\nattribute vec2 aTexCoord;\nvarying vec2 vTexCoord;\nvoid main() {\ngl_Position = aPosition;\nvTexCoord = aTexCoord;\n}\n",
                fs: "#ifdef GL_ES\nprecision mediump float;\n#endif\nuniform sampler2D uTexIndex;\nuniform vec2 uInverseTexSize; // as 1/n pixels, e.g. 1/512 if the texture is 512px wide\nvarying vec2 vTexCoord;\n// Retrieves the texel color 'offset' pixels away from 'pos' from texture 'uTexIndex'.\nvec4 getTexel(vec2 pos, vec2 offset) {\nreturn texture2D(uTexIndex, pos + offset * uInverseTexSize);\n}\nvoid main() {\nvec4 center = texture2D(uTexIndex, vTexCoord);\nvec4 nonDiagonalNeighbors = getTexel(vTexCoord, vec2(-1.0, 0.0)) +\ngetTexel(vTexCoord, vec2(+1.0, 0.0)) +\ngetTexel(vTexCoord, vec2( 0.0, -1.0)) +\ngetTexel(vTexCoord, vec2( 0.0, +1.0));\nvec4 diagonalNeighbors = getTexel(vTexCoord, vec2(-1.0, -1.0)) +\ngetTexel(vTexCoord, vec2(+1.0, +1.0)) +\ngetTexel(vTexCoord, vec2(-1.0, +1.0)) +\ngetTexel(vTexCoord, vec2(+1.0, -1.0));\n\n// approximate Gaussian blur (mean 0.0, stdev 1.0)\ngl_FragColor = 0.2/1.0 * center +\n0.5/4.0 * nonDiagonalNeighbors +\n0.3/4.0 * diagonalNeighbors;\n}\n"
            }
        },
        workers = {
            feature: 'class Request{static load(e,t){const r=new XMLHttpRequest,n=setTimeout(e=>{4!==r.readyState&&(r.abort(),t("status"))},1e4);return r.onreadystatechange=(()=>{4===r.readyState&&(clearTimeout(n),!r.status||r.status<200||r.status>299?t("status"):t(null,r))}),r.open("GET",e),r.send(null),{abort:()=>{r.abort()}}}static getText(e,t){return this.load(e,(e,r)=>{e?t(e):void 0!==r.responseText?t(null,r.responseText):t("content")})}static getXML(e,t){return this.load(e,(e,r)=>{e?t(e):void 0!==r.responseXML?t(null,r.responseXML):t("content")})}static getJSON(e,t){return this.load(e,(r,n)=>{if(r)return void t(r);if(!n.responseText)return void t("content");let o;try{o=JSON.parse(n.responseText),t(null,o)}catch(r){console.warn(`Could not parse JSON from ${e}\\n${r.message}`),t("content")}})}}var w3cColors={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgrey:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",grey:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function hue2rgb(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function clamp(e,t){if(void 0!==e)return Math.min(t,Math.max(0,e||0))}var Qolor=function(e,t,r,n){this.r=clamp(e,1),this.g=clamp(t,1),this.b=clamp(r,1),this.a=clamp(n,1)||1};Qolor.parse=function(e){if("string"==typeof e){var t;if(e=e.toLowerCase(),t=(e=w3cColors[e]||e).match(/^#?(\\w{2})(\\w{2})(\\w{2})$/))return new Qolor(parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255);if(t=e.match(/^#?(\\w)(\\w)(\\w)$/))return new Qolor(parseInt(t[1]+t[1],16)/255,parseInt(t[2]+t[2],16)/255,parseInt(t[3]+t[3],16)/255);if(t=e.match(/rgba?\\((\\d+)\\D+(\\d+)\\D+(\\d+)(\\D+([\\d.]+))?\\)/))return new Qolor(parseFloat(t[1])/255,parseFloat(t[2])/255,parseFloat(t[3])/255,t[4]?parseFloat(t[5]):1)}return new Qolor},Qolor.fromHSL=function(e,t,r,n){var o=(new Qolor).fromHSL(e,t,r);return o.a=void 0===n?1:n,o},Qolor.prototype={isValid:function(){return void 0!==this.r&&void 0!==this.g&&void 0!==this.b},toHSL:function(){if(this.isValid()){var e,t,r=Math.max(this.r,this.g,this.b),n=Math.min(this.r,this.g,this.b),o=(r+n)/2,a=r-n;if(a){switch(t=o>.5?a/(2-r-n):a/(r+n),r){case this.r:e=(this.g-this.b)/a+(this.g<this.b?6:0);break;case this.g:e=(this.b-this.r)/a+2;break;case this.b:e=(this.r-this.g)/a+4}e*=60}else e=t=0;return{h:e,s:t,l:o}}},fromHSL:function(e,t,r){if(0===t)return this.r=this.g=this.b=r,this;var n=r<.5?r*(1+t):r+t-r*t,o=2*r-n;return e/=360,this.r=hue2rgb(o,n,e+1/3),this.g=hue2rgb(o,n,e),this.b=hue2rgb(o,n,e-1/3),this},toString:function(){if(this.isValid())return 1===this.a?"#"+((1<<24)+(Math.round(255*this.r)<<16)+(Math.round(255*this.g)<<8)+Math.round(255*this.b)).toString(16).slice(1,7):"rgba("+[Math.round(255*this.r),Math.round(255*this.g),Math.round(255*this.b),this.a.toFixed(2)].join(",")+")"},toArray:function(){if(this.isValid)return[this.r,this.g,this.b]},hue:function(e){var t=this.toHSL();return this.fromHSL(t.h+e,t.s,t.l)},saturation:function(e){var t=this.toHSL();return this.fromHSL(t.h,t.s*e,t.l)},lightness:function(e){var t=this.toHSL();return this.fromHSL(t.h,t.s,t.l*e)},clone:function(){return new Qolor(this.r,this.g,this.b,this.a)}};class OBJ{constructor(e,t,r){this.flipYZ=r,this.materialIndex={},this.vertexIndex=[],t&&this.readMTL(t),this.meshes=[],this.readOBJ(e)}readMTL(e){const t=e.split(/[\\r\\n]/g);let r,n=[];t.forEach(e=>{const t=e.trim().split(/\\s+/);switch(t[0]){case"newmtl":r&&(this.materialIndex[r]=n),r=t[1],n=[];break;case"Kd":n=[parseFloat(t[1]),parseFloat(t[2]),parseFloat(t[3])]}}),r&&(this.materialIndex[r]=n),e=null}readOBJ(e){let t,r,n=[];e.split(/[\\r\\n]/g).forEach(e=>{const o=e.trim().split(/\\s+/);switch(o[0]){case"g":case"o":this.storeMesh(t,r,n),t=o[1],n=[];break;case"usemtl":this.storeMesh(t,r,n),this.materialIndex[o[1]]&&(r=this.materialIndex[o[1]]),n=[];break;case"v":this.flipYZ?this.vertexIndex.push([parseFloat(o[1]),parseFloat(o[3]),parseFloat(o[2])]):this.vertexIndex.push([parseFloat(o[1]),parseFloat(o[2]),parseFloat(o[3])]);break;case"f":n.push([parseFloat(o[1])-1,parseFloat(o[2])-1,parseFloat(o[3])-1])}}),this.storeMesh(t,r,n)}storeMesh(e,t,r){if(r.length){const n=this.createGeometry(r);this.meshes.push({vertices:n.vertices,normals:n.normals,texCoords:n.texCoords,height:n.height,color:t,id:e})}}sub(e,t){return[e[0]-t[0],e[1]-t[1],e[2]-t[2]]}len(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}unit(e){const t=this.len(e);return[e[0]/t,e[1]/t,e[2]/t]}normal(e,t,r){const n=this.sub(e,t),o=this.sub(t,r);return this.unit([n[1]*o[2]-n[2]*o[1],n[2]*o[0]-n[0]*o[2],n[0]*o[1]-n[1]*o[0]])}createGeometry(e){const t=[],r=[],n=[];let o=-1/0;return e.forEach(e=>{const a=this.vertexIndex[e[0]],i=this.vertexIndex[e[1]],s=this.vertexIndex[e[2]],l=this.normal(a,i,s);t.push(a[0],a[2],a[1],i[0],i[2],i[1],s[0],s[2],s[1]),r.push(l[0],l[1],l[2],l[0],l[1],l[2],l[0],l[1],l[2]),n.push(0,0,0,0,0,0),o=Math.max(o,a[1],i[1],s[1])}),{vertices:t,normals:r,texCoords:n,height:o}}}OBJ.parse=function(e,t,r){return new OBJ(e,t,r).meshes};var earcut=function(){function e(e,o,a){a=a||2;var i,s,c,h,d,p,g,x=o&&o.length,v=x?o[0]*a:e.length,m=t(e,0,v,a,!0),y=[];if(!m)return y;if(x&&(m=function(e,n,o,a){var i,s,c,h,d,p=[];for(i=0,s=n.length;i<s;i++)c=n[i]*a,h=i<s-1?n[i+1]*a:e.length,(d=t(e,c,h,a,!1))===d.next&&(d.steiner=!0),p.push(u(d));for(p.sort(l),i=0;i<p.length;i++)f(p[i],o),o=r(o,o.next);return o}(e,o,m,a)),e.length>80*a){i=c=e[0],s=h=e[1];for(var b=a;b<v;b+=a)(d=e[b])<i&&(i=d),(p=e[b+1])<s&&(s=p),d>c&&(c=d),p>h&&(h=p);g=Math.max(c-i,h-s)}return n(m,y,a,i,s,g),y}function t(e,t,r,n,o){var a,i;if(o===w(e,t,r,n)>0)for(a=t;a<r;a+=n)i=y(a,e[a],e[a+1],i);else for(a=r-n;a>=t;a-=n)i=y(a,e[a],e[a+1],i);return i&&g(i,i.next)&&(b(i),i=i.next),i}function r(e,t){if(!e)return e;t||(t=e);var r,n=e;do{if(r=!1,n.steiner||!g(n,n.next)&&0!==p(n.prev,n,n.next))n=n.next;else{if(b(n),(n=t=n.prev)===n.next)return null;r=!0}}while(r||n!==t);return t}function n(e,t,l,f,u,h,d){if(e){!d&&h&&function(e,t,r,n){var o=e;do{null===o.z&&(o.z=c(o.x,o.y,t,r,n)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next}while(o!==e);o.prevZ.nextZ=null,o.prevZ=null,function(e){var t,r,n,o,a,i,s,l,f=1;do{for(r=e,e=null,a=null,i=0;r;){for(i++,n=r,s=0,t=0;t<f&&(s++,n=n.nextZ);t++);for(l=f;s>0||l>0&&n;)0===s?(o=n,n=n.nextZ,l--):0!==l&&n?r.z<=n.z?(o=r,r=r.nextZ,s--):(o=n,n=n.nextZ,l--):(o=r,r=r.nextZ,s--),a?a.nextZ=o:e=o,o.prevZ=a,a=o;r=n}a.nextZ=null,f*=2}while(i>1)}(o)}(e,f,u,h);for(var p,g,x=e;e.prev!==e.next;)if(p=e.prev,g=e.next,h?a(e,f,u,h):o(e))t.push(p.i/l),t.push(e.i/l),t.push(g.i/l),b(e),e=g.next,x=g.next;else if((e=g)===x){d?1===d?n(e=i(e,t,l),t,l,f,u,h,2):2===d&&s(e,t,l,f,u,h):n(r(e),t,l,f,u,h,1);break}}}function o(e){var t=e.prev,r=e,n=e.next;if(p(t,r,n)>=0)return!1;for(var o=e.next.next;o!==e.prev;){if(h(t.x,t.y,r.x,r.y,n.x,n.y,o.x,o.y)&&p(o.prev,o,o.next)>=0)return!1;o=o.next}return!0}function a(e,t,r,n){var o=e.prev,a=e,i=e.next;if(p(o,a,i)>=0)return!1;for(var s=o.x<a.x?o.x<i.x?o.x:i.x:a.x<i.x?a.x:i.x,l=o.y<a.y?o.y<i.y?o.y:i.y:a.y<i.y?a.y:i.y,f=o.x>a.x?o.x>i.x?o.x:i.x:a.x>i.x?a.x:i.x,u=o.y>a.y?o.y>i.y?o.y:i.y:a.y>i.y?a.y:i.y,d=c(s,l,t,r,n),g=c(f,u,t,r,n),x=e.nextZ;x&&x.z<=g;){if(x!==e.prev&&x!==e.next&&h(o.x,o.y,a.x,a.y,i.x,i.y,x.x,x.y)&&p(x.prev,x,x.next)>=0)return!1;x=x.nextZ}for(x=e.prevZ;x&&x.z>=d;){if(x!==e.prev&&x!==e.next&&h(o.x,o.y,a.x,a.y,i.x,i.y,x.x,x.y)&&p(x.prev,x,x.next)>=0)return!1;x=x.prevZ}return!0}function i(e,t,r){var n=e;do{var o=n.prev,a=n.next.next;!g(o,a)&&x(o,n,n.next,a)&&v(o,a)&&v(a,o)&&(t.push(o.i/r),t.push(n.i/r),t.push(a.i/r),b(n),b(n.next),n=e=a),n=n.next}while(n!==e);return n}function s(e,t,o,a,i,s){var l=e;do{for(var f=l.next.next;f!==l.prev;){if(l.i!==f.i&&d(l,f)){var c=m(l,f);return l=r(l,l.next),c=r(c,c.next),n(l,t,o,a,i,s),void n(c,t,o,a,i,s)}f=f.next}l=l.next}while(l!==e)}function l(e,t){return e.x-t.x}function f(e,t){if(t=function(e,t){var r,n=t,o=e.x,a=e.y,i=-1/0;do{if(a<=n.y&&a>=n.next.y){var s=n.x+(a-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(s<=o&&s>i){if(i=s,s===o){if(a===n.y)return n;if(a===n.next.y)return n.next}r=n.x<n.next.x?n:n.next}}n=n.next}while(n!==t);if(!r)return null;if(o===i)return r.prev;var l,f=r,c=r.x,u=r.y,d=1/0;n=r.next;for(;n!==f;)o>=n.x&&n.x>=c&&h(a<u?o:i,a,c,u,a<u?i:o,a,n.x,n.y)&&((l=Math.abs(a-n.y)/(o-n.x))<d||l===d&&n.x>r.x)&&v(n,e)&&(r=n,d=l),n=n.next;return r}(e,t)){var n=m(t,e);r(n,n.next)}}function c(e,t,r,n,o){return(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-r)/o)|e<<8))|e<<4))|e<<2))|e<<1))|(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=32767*(t-n)/o)|t<<8))|t<<4))|t<<2))|t<<1))<<1}function u(e){var t=e,r=e;do{t.x<r.x&&(r=t),t=t.next}while(t!==e);return r}function h(e,t,r,n,o,a,i,s){return(o-i)*(t-s)-(e-i)*(a-s)>=0&&(e-i)*(n-s)-(r-i)*(t-s)>=0&&(r-i)*(a-s)-(o-i)*(n-s)>=0}function d(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!function(e,t){var r=e;do{if(r.i!==e.i&&r.next.i!==e.i&&r.i!==t.i&&r.next.i!==t.i&&x(r,r.next,e,t))return!0;r=r.next}while(r!==e);return!1}(e,t)&&v(e,t)&&v(t,e)&&function(e,t){var r=e,n=!1,o=(e.x+t.x)/2,a=(e.y+t.y)/2;do{r.y>a!=r.next.y>a&&o<(r.next.x-r.x)*(a-r.y)/(r.next.y-r.y)+r.x&&(n=!n),r=r.next}while(r!==e);return n}(e,t)}function p(e,t,r){return(t.y-e.y)*(r.x-t.x)-(t.x-e.x)*(r.y-t.y)}function g(e,t){return e.x===t.x&&e.y===t.y}function x(e,t,r,n){return!!(g(e,t)&&g(r,n)||g(e,n)&&g(r,t))||p(e,t,r)>0!=p(e,t,n)>0&&p(r,n,e)>0!=p(r,n,t)>0}function v(e,t){return p(e.prev,e,e.next)<0?p(e,t,e.next)>=0&&p(e,e.prev,t)>=0:p(e,t,e.prev)<0||p(e,e.next,t)<0}function m(e,t){var r=new M(e.i,e.x,e.y),n=new M(t.i,t.x,t.y),o=e.next,a=t.prev;return e.next=t,t.prev=e,r.next=o,o.prev=r,n.next=r,r.prev=n,a.next=n,n.prev=a,n}function y(e,t,r,n){var o=new M(e,t,r);return n?(o.next=n.next,o.prev=n,n.next.prev=o,n.next=o):(o.prev=o,o.next=o),o}function b(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function M(e,t,r){this.i=e,this.x=t,this.y=r,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function w(e,t,r,n){for(var o=0,a=t,i=r-n;a<r;a+=n)o+=(e[i]-e[a])*(e[a+1]+e[i+1]),i=a;return o}return e.deviation=function(e,t,r,n){var o,a,i=t&&t.length,s=i?t[0]*r:e.length,l=Math.abs(w(e,0,s,r));if(i)for(o=0,a=t.length;o<a;o++){var f=t[o]*r,c=o<a-1?t[o+1]*r:e.length;l-=Math.abs(w(e,f,c,r))}var u=0;for(o=0,a=n.length;o<a;o+=3){var h=n[o]*r,d=n[o+1]*r,p=n[o+2]*r;u+=Math.abs((e[h]-e[p])*(e[d+1]-e[h+1])-(e[h]-e[d])*(e[p+1]-e[h+1]))}return 0===l&&0===u?0:Math.abs((u-l)/l)},e.flatten=function(e){for(var t=e[0][0].length,r={vertices:[],holes:[],dimensions:t},n=0,o=0;o<e.length;o++){for(var a=0;a<e[o].length;a++)for(var i=0;i<t;i++)r.vertices.push(e[o][a][i]);o>0&&(n+=e[o-1].length,r.holes.push(n))}return r},e}();const triangulate=function(){const e=10,t=[.8627450980392157,.8235294117647058,.7843137254901961],r=3,n={brick:"#cc7755",bronze:"#ffeecc",canvas:"#fff8f0",concrete:"#999999",copper:"#a0e0d0",glass:"#e8f8f8",gold:"#ffcc00",plants:"#009933",metal:"#aaaaaa",panel:"#fff8f0",plaster:"#999999",roof_tiles:"#f08060",silver:"#cccccc",slate:"#666666",stone:"#996666",tar_paper:"#333333",wood:"#deb887"},o={asphalt:"tar_paper",bitumen:"tar_paper",block:"stone",bricks:"brick",glas:"glass",glassfront:"glass",grass:"plants",masonry:"stone",granite:"stone",panels:"panel",paving_stones:"stone",plastered:"plaster",rooftiles:"roof_tiles",roofingfelt:"tar_paper",sandstone:"stone",sheet:"canvas",sheets:"canvas",shingle:"tar_paper",shingles:"tar_paper",slates:"slate",steel:"metal",tar:"tar_paper",tent:"canvas",thatch:"plants",tile:"roof_tiles",tiles:"roof_tiles"},a=.5,i=6378137*Math.PI/180;function s(e){return"string"!=typeof e?null:"#"===(e=e.toLowerCase())[0]?e:n[o[e]||e]||null}function l(e,r){r=r||0;let n,o=Qolor.parse(e);return[(n=o.isValid()?o.saturation(.7).toArray():t)[0]+r,n[1]+r,n[2]+r]}return function(t,n,o,f,c){const u=[i*Math.cos(o[1]/180*Math.PI),i];(function(e){switch(e.type){case"MultiPolygon":return e.coordinates;case"Polygon":return[e.coordinates];default:return[]}})(n.geometry).map(i=>{const h=function(e,t,r){return e.map((e,n)=>(0===n!==function(e){return 0<e.reduce((e,t,r,n)=>e+(r<n.length-1?(n[r+1][0]-t[0])*(n[r+1][1]+t[1]):0),0)}(e)&&e.reverse(),e.map(function(e){return[(e[0]-t[0])*r[0],-(e[1]-t[1])*r[1]]})))}(i,o,u);!function(t,n,o,i,f){const c=function(t,n){const o={};switch(o.center=[n.minX+(n.maxX-n.minX)/2,n.minY+(n.maxY-n.minY)/2],o.radius=(n.maxX-n.minX)/2,o.roofHeight=t.roofHeight||(t.roofLevels?t.roofLevels*r:0),t.roofShape){case"cone":case"pyramid":case"dome":case"onion":o.roofHeight=o.roofHeight||1*o.radius;break;case"gabled":case"hipped":case"half-hipped":case"skillion":case"gambrel":case"mansard":case"round":o.roofHeight=o.roofHeight||1*r;break;case"flat":o.roofHeight=0;break;default:o.roofHeight=0}let a;if(o.wallZ=t.minHeight||(t.minLevel?t.minLevel*r:0),void 0!==t.height)a=t.height,o.roofHeight=Math.min(o.roofHeight,a),o.roofZ=a-o.roofHeight,o.wallHeight=a-o.roofHeight-o.wallZ;else if(void 0!==t.levels)a=t.levels*r,o.roofZ=a,o.wallHeight=a-o.wallZ;else{switch(t.shape){case"cone":case"dome":case"pyramid":a=2*o.radius,o.roofHeight=0;break;case"sphere":a=4*o.radius,o.roofHeight=0;break;case"none":a=0;break;default:a=e}o.roofZ=a,o.wallHeight=a-o.wallZ}return o}(n,function(e){let t=1/0,r=1/0,n=-1/0,o=-1/0;for(let a=0;a<e.length;a++)t=Math.min(t,e[a][0]),r=Math.min(r,e[a][1]),n=Math.max(n,e[a][0]),o=Math.max(o,e[a][1]);return{minX:t,minY:r,maxX:n,maxY:o}}(o[0])),u=l(i||n.wallColor||n.color||s(n.material),f),h=l(i||n.roofColor||s(n.roofMaterial),f);switch(n.shape){case"cone":return void split.cylinder(t,c.center,c.radius,0,c.wallHeight,c.wallZ,u);case"dome":return void split.dome(t,c.center,c.radius,c.wallHeight,c.wallZ,u);case"pyramid":return void split.pyramid(t,o,c.center,c.wallHeight,c.wallZ,u);case"sphere":return void split.sphere(t,c.center,c.radius,c.wallHeight,c.wallZ,u)}switch(createRoof(t,n,o,c,h,u),n.shape){case"none":return;case"cylinder":return void split.cylinder(t,c.center,c.radius,c.radius,c.wallHeight,c.wallZ,u);default:let e=.2,r=.4;"glass"!==n.material&&(e=0,r=0,n.levels&&(r=parseFloat(n.levels)-parseFloat(n.minLevel||0)<<0)),split.extrusion(t,o,c.wallHeight,c.wallZ,u,[0,a,e/c.wallHeight,r/c.wallHeight])}}(t,n.properties,h,f,c)})}}();var createRoof;function roundPoint(e,t){return[Math.round(e[0]*t)/t,Math.round(e[1]*t)/t]}function pointOnSegment(e,t){return e=roundPoint(e,1e6),t[0]=roundPoint(t[0],1e6),t[1]=roundPoint(t[1],1e6),e[0]>=Math.min(t[0][0],t[1][0])&&e[0]<=Math.max(t[1][0],t[0][0])&&e[1]>=Math.min(t[0][1],t[1][1])&&e[1]<=Math.max(t[1][1],t[0][1])}function getVectorSegmentIntersection(e,t,r){var n,o,a,i,s,l=r[0],f=[r[1][0]-r[0][0],r[1][1]-r[0][1]];if(0!==t[0]||0!==f[0]){if(0!==t[0]&&(a=t[1]/t[0],n=e[1]-a*e[0]),0!==f[0]&&(i=f[1]/f[0],o=l[1]-i*l[0]),0===t[0]&&pointOnSegment(s=[e[0],i*e[0]+o],r))return s;if(0===f[0]&&pointOnSegment(s=[l[0],a*l[0]+n],r))return s;if(a!==i){var c=(o-n)/(a-i);return pointOnSegment(s=[c,a*c+n],r)?s:void 0}}}function getDistanceToLine(e,t){var r=t[0],n=t[1];if(r[0]!==n[0]||r[1]!==n[1]){var o=(n[1]-r[1])/(n[0]-r[0]),a=r[1]-o*r[0];if(0===o)return Math.abs(a-e[1]);if(o===1/0)return Math.abs(r[0]-e[0]);var i=-1/o,s=(e[1]-i*e[0]-a)/(o-i),l=o*s+a,f=e[0]-s,c=e[1]-l;return Math.sqrt(f*f+c*c)}}!function(){function e(e,t,r){const n=((e-90)/180-.5)*Math.PI;return function(e,t,r){for(var n,o=[],a=0;a<r.length-1;a++)if(void 0!==(n=getVectorSegmentIntersection(e,t,[r[a],r[a+1]]))){if(2===o.length)return;a++,r.splice(a,0,n),o.push(a)}if(!(o.length<2))return{index:o,roof:r}}(t,[Math.cos(n),Math.sin(n)],r)}function t(t,n,o,a,i,s,l){if(0,o.length>1||void 0===n.roofDirection)return r(t,n,o,i,s);const f=e(n.roofDirection,i.center,o[0]);if(!f)return r(t,n,o,i,s);const c=f.index;let u=f.roof;{const e=function(e,t){const r=[e[t[0]],e[t[1]]];return e.map(e=>getDistanceToLine(e,r))}(u,f.index),r=Math.max(...e);let n=(u=u.map((t,n)=>[t[0],t[1],(1-e[n]/r)*i.roofHeight])).slice(c[0],c[1]+1);split.polygon(t,[n],i.roofZ,s),n=(n=u.slice(c[1],u.length-1)).concat(u.slice(0,c[0]+1)),split.polygon(t,[n],i.roofZ,s);for(let e=0;e<u.length-1;e++)0===u[e][2]&&0===u[e+1][2]||split.quad(t,[u[e][0],u[e][1],i.roofZ+u[e][2]],[u[e][0],u[e][1],i.roofZ],[u[e+1][0],u[e+1][1],i.roofZ],[u[e+1][0],u[e+1][1],i.roofZ+u[e+1][2]],l)}}function r(e,t,r,n,o){"cylinder"===t.shape?split.circle(e,n.center,n.radius,n.roofZ,o):split.polygon(e,r,n.roofZ,o)}createRoof=function(e,n,o,a,i,s){switch(n.roofShape){case"cone":return function(e,t,r,n){split.polygon(e,t,r.roofZ,n),split.cylinder(e,r.center,r.radius,0,r.roofHeight,r.roofZ,n)}(e,o,a,i);case"dome":return function(e,t,r,n){split.polygon(e,t,r.roofZ,n),split.dome(e,r.center,r.radius,r.roofHeight,r.roofZ,n)}(e,o,a,i);case"pyramid":return function(e,t,r,n,o){"cylinder"===t.shape?split.cylinder(e,n.center,n.radius,0,n.roofHeight,n.roofZ,o):split.pyramid(e,r,n.center,n.roofHeight,n.roofZ,o)}(e,n,o,a,i);case"skillion":return function(e,t,n,o,a,i){if(void 0===t.roofDirection)return r(e,t,n,o,a);var s,l,f=t.roofDirection/180*Math.PI,c=1/0,u=-1/0;n[0].forEach(function(e){var t=e[1]*Math.cos(-f)+e[0]*Math.sin(-f);t<c&&(c=t,s=e),t>u&&(u=t,l=e)});var h=n[0],d=[Math.cos(f),Math.sin(f)],p=[s,[s[0]+d[0],s[1]+d[1]]],g=getDistanceToLine(l,p);n.forEach(function(e){e.forEach(function(e){var t=getDistanceToLine(e,p);e[2]=t/g*o.roofHeight})}),split.polygon(e,[h],o.roofZ,a),n.forEach(function(t){for(var r=0;r<t.length-1;r++)0===t[r][2]&&0===t[r+1][2]||split.quad(e,[t[r][0],t[r][1],o.roofZ+t[r][2]],[t[r][0],t[r][1],o.roofZ],[t[r+1][0],t[r+1][1],o.roofZ],[t[r+1][0],t[r+1][1],o.roofZ+t[r+1][2]],i)})}(e,n,o,a,i,s);case"gabled":case"hipped":case"half-hipped":case"gambrel":case"mansard":return t(e,n,o,0,a,i,s);case"round":return function(e,t,n,o,a,i){if(n.length>1||void 0===t.roofDirection)return r(e,t,n,o,a);return r(e,t,n,o,a)}(e,n,o,a,i);case"onion":return function(e,t,r,n){split.polygon(e,t,r.roofZ,n);for(var o,a,i=[{rScale:.8,hScale:0},{rScale:.9,hScale:.18},{rScale:.9,hScale:.35},{rScale:.8,hScale:.47},{rScale:.6,hScale:.59},{rScale:.5,hScale:.65},{rScale:.2,hScale:.82},{rScale:0,hScale:1}],s=0,l=i.length-1;s<l;s++)o=r.roofHeight*i[s].hScale,a=r.roofHeight*i[s+1].hScale,split.cylinder(e,r.center,r.radius*i[s].rScale,r.radius*i[s+1].rScale,a-o,r.roofZ+o,n)}(e,o,a,i);case"flat":default:return r(e,n,o,a,i)}}}();const split={NUM_Y_SEGMENTS:24,NUM_X_SEGMENTS:32,quad:(e,t,r,n,o,a)=>{split.triangle(e,t,r,n,a),split.triangle(e,n,o,t,a)},triangle:(e,t,r,n,o)=>{const a=vec3.normal(t,r,n);e.vertices.push(...t,...n,...r),e.normals.push(...a,...a,...a),e.colors.push(...o,...o,...o),e.texCoords.push(0,0,0,0,0,0)},circle:(e,t,r,n,o)=>{let a,i;n=n||0;for(let s=0;s<split.NUM_X_SEGMENTS;s++)a=s/split.NUM_X_SEGMENTS,i=(s+1)/split.NUM_X_SEGMENTS,split.triangle(e,[t[0]+r*Math.sin(a*Math.PI*2),t[1]+r*Math.cos(a*Math.PI*2),n],[t[0],t[1],n],[t[0]+r*Math.sin(i*Math.PI*2),t[1]+r*Math.cos(i*Math.PI*2),n],o)},polygon:(e,t,r,n)=>{r=r||0;const o=[],a=[];let i=0;t.forEach((e,n)=>{e.forEach(e=>{o.push(e[0],e[1],r+(e[2]||0))}),n&&(i+=t[n-1].length,a.push(i))});const s=earcut(o,a,3);for(let t=0;t<s.length-2;t+=3){const r=3*s[t],a=3*s[t+1],i=3*s[t+2];split.triangle(e,[o[r],o[r+1],o[r+2]],[o[a],o[a+1],o[a+2]],[o[i],o[i+1],o[i+2]],n)}},cube:(e,t,r,n,o,a,i,s)=>{const l=[o=o||0,a=a||0,i=i||0],f=[o+t,a,i],c=[o+t,a+r,i],u=[o,a+r,i],h=[o,a,i+n],d=[o+t,a,i+n],p=[o+t,a+r,i+n],g=[o,a+r,i+n];split.quad(e,f,l,u,c,s),split.quad(e,h,d,p,g,s),split.quad(e,l,f,d,h,s),split.quad(e,f,c,p,d,s),split.quad(e,c,u,g,p,s),split.quad(e,u,l,h,g,s)},cylinder:(e,t,r,n,o,a,i)=>{a=a||0;const s=split.NUM_X_SEGMENTS,l=2*Math.PI;let f,c,u,h,d,p;for(let g=0;g<s;g++)f=g/s*l,c=(g+1)/s*l,u=Math.sin(f),h=Math.cos(f),d=Math.sin(c),p=Math.cos(c),split.triangle(e,[t[0]+r*u,t[1]+r*h,a],[t[0]+n*d,t[1]+n*p,a+o],[t[0]+r*d,t[1]+r*p,a],i),0!==n&&split.triangle(e,[t[0]+n*u,t[1]+n*h,a+o],[t[0]+n*d,t[1]+n*p,a+o],[t[0]+r*u,t[1]+r*h,a],i)},dome:(e,t,r,n,o,a,i)=>{o=o||0;const s=split.NUM_Y_SEGMENTS/2,l=Math.PI/2,f=i?0:-l;let c,u,h,d,p,g,x,v,m,y;for(let i=0;i<s;i++)c=i/s*l+f,u=(i+1)/s*l+f,h=Math.cos(c),d=Math.sin(c),x=h*r,v=(p=Math.cos(u))*r,m=((g=Math.sin(u))-d)*n,y=o-g*n,split.cylinder(e,t,v,x,m,y,a)},sphere:(e,t,r,n,o,a)=>{o=o||0;let i=0;return i+=split.dome(e,t,r,n/2,o+n/2,a,!0),i+=split.dome(e,t,r,n/2,o+n/2,a)},pyramid:(e,t,r,n,o,a)=>{o=o||0;for(let i=0,s=(t=t[0]).length-1;i<s;i++)split.triangle(e,[t[i][0],t[i][1],o],[t[i+1][0],t[i+1][1],o],[r[0],r[1],o+n],a)},extrusion:(e,t,r,n,o,a)=>{n=n||0;let i,s,l,f,c,u,h,d,p,g,x,v,m=a[2]*r,y=a[3]*r;t.forEach(t=>{for(x=0,v=t.length-1;x<v;x++)i=t[x],s=t[x+1],l=vec2.len(vec2.sub(i,s)),f=[i[0],i[1],n],c=[s[0],s[1],n],u=[s[0],s[1],n+r],h=[i[0],i[1],n+r],d=vec3.normal(f,c,u),[].push.apply(e.vertices,[].concat(f,u,c,f,h,u)),[].push.apply(e.normals,[].concat(d,d,d,d,d,d)),[].push.apply(e.colors,[].concat(o,o,o,o,o,o)),p=a[0]*l<<0,g=a[1]*l<<0,e.texCoords.push(p,y,g,m,g,y,p,y,p,m,g,m)})}},vec3={len:e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),sub:(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],unit:e=>{const t=vec3.len(e);return[e[0]/t,e[1]/t,e[2]/t]},normal:(e,t,r)=>{const n=vec3.sub(e,t),o=vec3.sub(t,r);return vec3.unit([n[1]*o[2]-n[2]*o[1],n[2]*o[0]-n[0]*o[2],n[0]*o[1]-n[1]*o[0]])}},vec2={len:e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),add:(e,t)=>[e[0]+t[0],e[1]+t[1]],sub:(e,t)=>[e[0]-t[0],e[1]-t[1]],dot:(e,t)=>e[1]*t[0]-e[0]*t[1],scale:(e,t)=>[e[0]*t,e[1]*t],equals:(e,t)=>e[0]===t[0]&&e[1]===t[1]};function getGeoJSONBounds(e){const t=e.type,r=e.coordinates,n=[1/0,1/0],o=[-1/0,-1/0];return"Polygon"===t&&r.length?(r[0].forEach(e=>{e[0]<n[0]&&(n[0]=e[0]),e[1]<n[1]&&(n[1]=e[1]),e[0]>o[0]&&(o[0]=e[0]),e[1]>o[1]&&(o[1]=e[1])}),{min:n,max:o}):"MultiPolygon"===t?(r.forEach(e=>{e[0]&&e[0].forEach(e=>{e[0]<n[0]&&(n[0]=e[0]),e[1]<n[1]&&(n[1]=e[1]),e[0]>o[0]&&(o[0]=e[0]),e[1]>o[1]&&(o[1]=e[1])})}),{min:n,max:o}):void 0}function getOBJBounds(e){const t=[1/0,1/0],r=[-1/0,-1/0];for(let n=0;n<e.length;n+=3)e[n]<t[0]&&(t[0]=e[0]),e[n+1]<t[1]&&(t[1]=e[n+1]),e[0]>r[0]&&(r[0]=e[0]),e[n+1]>r[1]&&(r[1]=e[n+1]);return t[0]*=METERS_PER_DEGREE_LATITUDE*Math.cos(t[1]/180*Math.PI),t[1]*=METERS_PER_DEGREE_LATITUDE,r[0]*=METERS_PER_DEGREE_LATITUDE*Math.cos(r[1]/180*Math.PI),r[1]*=METERS_PER_DEGREE_LATITUDE,{min:t,max:r}}const METERS_PER_DEGREE_LATITUDE=6378137*Math.PI/180;function getOrigin(e){const t=e.coordinates;switch(e.type){case"Point":return t;case"MultiPoint":case"LineString":return t[0];case"MultiLineString":case"Polygon":return t[0][0];case"MultiPolygon":return t[0][0][0]}}function getPickingColor(e){return[0,(255&++e)/255,(e>>8&255)/255]}function postResult(e,t,r){const n={items:e,position:t,vertices:new Float32Array(r.vertices),normals:new Float32Array(r.normals),colors:new Float32Array(r.colors),texCoords:new Float32Array(r.texCoords),heights:new Float32Array(r.heights),pickingColors:new Float32Array(r.pickingColors)};postMessage(n,[n.vertices.buffer,n.normals.buffer,n.colors.buffer,n.texCoords.buffer,n.heights.buffer,n.pickingColors.buffer])}function loadGeoJSON(e,t={}){"object"==typeof e?(postMessage("load"),processGeoJSON(e,t)):Request.getJSON(e,(e,r)=>{e?postMessage("error"):(postMessage("load"),processGeoJSON(r,t))})}function processGeoJSON(e,t){if(!e||!e.features.length)return void postMessage("error");const r={vertices:[],normals:[],colors:[],texCoords:[],heights:[],pickingColors:[]},n=[],o=getOrigin(e.features[0].geometry),a={latitude:o[1],longitude:o[0]};e.features.forEach((e,a)=>{const i=e.properties,s=t.id||e.id,l=getPickingColor(a);let f=r.vertices.length;triangulate(r,e,o),f=(r.vertices.length-f)/3;for(let e=0;e<f;e++)r.heights.push(i.height),r.pickingColors.push(...l);i.bounds=getGeoJSONBounds(e.geometry),n.push({id:s,properties:i,vertexCount:f})}),postResult(n,a,r)}function loadOBJ(e,t={}){Request.getText(e,(r,n)=>{if(r)return void postMessage("error");let o=n.match(/^mtllib\\s+(.*)$/m);o?Request.getText(e.replace(/[^\\/]+$/,"")+o[1],(e,r)=>{e?postMessage("error"):(postMessage("load"),processOBJ(n,r,t))}):(postMessage("load"),processOBJ(n,null,t))})}function processOBJ(e,t,r={}){const n={vertices:[],normals:[],colors:[],texCoords:[],heights:[],pickingColors:[]},o=[],a=Qolor.parse(r.color).toArray(),i=r.position;OBJ.parse(e,t,r.flipYZ).forEach((e,t)=>{n.vertices.push(...e.vertices),n.normals.push(...e.normals),n.texCoords.push(...e.texCoords);const i=r.id||e.id,s={},l=(i/2%2?-1:1)*(i%2?.03:.06),f=a||e.color||DEFAULT_COLOR,c=e.vertices.length/3,u=getPickingColor(t);for(let t=0;t<c;t++)n.colors.push(f[0]+l,f[1]+l,f[2]+l),n.heights.push(e.height),n.pickingColors.push(...u);s.height=e.height,s.color=e.color,s.bounds=getOBJBounds(e.vertices),o.push({id:i,properties:s,vertexCount:c})}),postResult(o,i,n)}onmessage=function(e){const t=e.data;"GeoJSON"===t.type&&loadGeoJSON(t.url,t.options),"OBJ"===t.type&&loadOBJ(t.url,t.options)};'
        };
    class GLX {
        constructor(e, t) {
            let n;
            const r = {
                antialias: !t,
                depth: !0,
                premultipliedAlpha: !1
            };
            try {
                n = e.getContext("webgl", r)
            } catch (e) {}
            if (!n) try {
                n = e.getContext("experimental-webgl", r)
            } catch (e) {}
            if (!n) throw new Error("GL not supported");
            e.addEventListener("webglcontextlost", e => {
                console.warn("context lost")
            }), e.addEventListener("webglcontextrestored", e => {
                console.warn("context restored")
            }), n.viewport(0, 0, e.width, e.height), n.cullFace(n.BACK), n.enable(n.CULL_FACE), n.enable(n.DEPTH_TEST), n.clearColor(.5, .5, .5, 1), t || (n.anisotropyExtension = n.getExtension("EXT_texture_filter_anisotropic"), n.anisotropyExtension && (n.anisotropyExtension.maxAnisotropyLevel = n.getParameter(n.anisotropyExtension.MAX_TEXTURE_MAX_ANISOTROPY_EXT)), n.depthTextureExtension = n.getExtension("WEBGL_depth_texture")), this.GL = n
        }
        destroy() {
            this.GL.getExtension("WEBGL_lose_context").loseContext(), this.GL = null
        }
    }

    function rad(e) {
        return e * Math.PI / 180
    }

    function multiply(e, t, n) {
        const r = t[0],
            i = t[1],
            o = t[2],
            a = t[3],
            s = t[4],
            l = t[5],
            u = t[6],
            h = t[7],
            c = t[8],
            f = t[9],
            d = t[10],
            m = t[11],
            p = t[12],
            x = t[13],
            g = t[14],
            v = t[15],
            y = n[0],
            w = n[1],
            b = n[2],
            P = n[3],
            T = n[4],
            M = n[5],
            L = n[6],
            E = n[7],
            G = n[8],
            _ = n[9],
            S = n[10],
            A = n[11],
            D = n[12],
            C = n[13],
            F = n[14],
            R = n[15];
        e[0] = r * y + i * T + o * G + a * D, e[1] = r * w + i * M + o * _ + a * C, e[2] = r * b + i * L + o * S + a * F, e[3] = r * P + i * E + o * A + a * R, e[4] = s * y + l * T + u * G + h * D, e[5] = s * w + l * M + u * _ + h * C, e[6] = s * b + l * L + u * S + h * F, e[7] = s * P + l * E + u * A + h * R, e[8] = c * y + f * T + d * G + m * D, e[9] = c * w + f * M + d * _ + m * C, e[10] = c * b + f * L + d * S + m * F, e[11] = c * P + f * E + d * A + m * R, e[12] = p * y + x * T + g * G + v * D, e[13] = p * w + x * M + g * _ + v * C, e[14] = p * b + x * L + g * S + v * F, e[15] = p * P + x * E + g * A + v * R
    }
    GLX.Buffer = class {
        constructor(e, t) {
            this.id = GL.createBuffer(), this.itemSize = e, this.numItems = t.length / e, GL.bindBuffer(GL.ARRAY_BUFFER, this.id), GL.bufferData(GL.ARRAY_BUFFER, t, GL.STATIC_DRAW), t = null
        }
        enable() {
            GL.bindBuffer(GL.ARRAY_BUFFER, this.id)
        }
        use() {
            GL.bindBuffer(GL.ARRAY_BUFFER, this.id)
        }
        destroy() {
            GL.deleteBuffer(this.id), this.id = null
        }
    }, GLX.Framebuffer = class {
        constructor(e, t, n) {
            if (n && !GL.depthTextureExtension) throw new Error("GL: Depth textures are not supported");
            this.useDepthTexture = !!n, this.setSize(e, t)
        }
        setSize(e, t) {
            if (this.frameBuffer) {
                if (e === this.width && t === this.height) return
            } else this.frameBuffer = GL.createFramebuffer();
            if (GL.bindFramebuffer(GL.FRAMEBUFFER, this.frameBuffer), this.width = e, this.height = t, this.depthRenderBuffer && (GL.deleteRenderbuffer(this.depthRenderBuffer), this.depthRenderBuffer = null), this.depthTexture && (this.depthTexture.destroy(), this.depthTexture = null), this.useDepthTexture ? (this.depthTexture = new GLX.texture.Image, this.depthTexture.enable(0), GL.texParameteri(GL.TEXTURE_2D, GL.TEXTURE_MIN_FILTER, GL.NEAREST), GL.texParameteri(GL.TEXTURE_2D, GL.TEXTURE_MAG_FILTER, GL.NEAREST), GL.texParameteri(GL.TEXTURE_2D, GL.TEXTURE_WRAP_S, GL.CLAMP_TO_EDGE), GL.texParameteri(GL.TEXTURE_2D, GL.TEXTURE_WRAP_T, GL.CLAMP_TO_EDGE), GL.texImage2D(GL.TEXTURE_2D, 0, GL.DEPTH_STENCIL, e, t, 0, GL.DEPTH_STENCIL, GL.depthTextureExtension.UNSIGNED_INT_24_8_WEBGL, null), GL.framebufferTexture2D(GL.FRAMEBUFFER, GL.DEPTH_STENCIL_ATTACHMENT, GL.TEXTURE_2D, this.depthTexture.id, 0)) : (this.depthRenderBuffer = GL.createRenderbuffer(), GL.bindRenderbuffer(GL.RENDERBUFFER, this.depthRenderBuffer), GL.renderbufferStorage(GL.RENDERBUFFER, GL.DEPTH_COMPONENT16, e, t), GL.framebufferRenderbuffer(GL.FRAMEBUFFER, GL.DEPTH_ATTACHMENT, GL.RENDERBUFFER, this.depthRenderBuffer)), this.renderTexture && this.renderTexture.destroy(), this.renderTexture = new GLX.texture.Data(GL, e, t), GL.bindTexture(GL.TEXTURE_2D, this.renderTexture.id), GL.texParameteri(GL.TEXTURE_2D, GL.TEXTURE_WRAP_S, GL.CLAMP_TO_EDGE), GL.texParameteri(GL.TEXTURE_2D, GL.TEXTURE_WRAP_T, GL.CLAMP_TO_EDGE), GL.framebufferTexture2D(GL.FRAMEBUFFER, GL.COLOR_ATTACHMENT0, GL.TEXTURE_2D, this.renderTexture.id, 0), GL.checkFramebufferStatus(GL.FRAMEBUFFER) !== GL.FRAMEBUFFER_COMPLETE) throw new Error("Combination of framebuffer attachments doesn't work");
            GL.bindRenderbuffer(GL.RENDERBUFFER, null), GL.bindFramebuffer(GL.FRAMEBUFFER, null)
        }
        enable() {
            GL.bindFramebuffer(GL.FRAMEBUFFER, this.frameBuffer), this.useDepthTexture || GL.bindRenderbuffer(GL.RENDERBUFFER, this.depthRenderBuffer)
        }
        disable() {
            GL.bindFramebuffer(GL.FRAMEBUFFER, null), this.useDepthTexture || GL.bindRenderbuffer(GL.RENDERBUFFER, null)
        }
        getPixel(e, t) {
            if (e < 0 || t < 0 || e >= this.width || t >= this.height) return;
            const n = new Uint8Array(4);
            return GL.readPixels(e, t, 1, 1, GL.RGBA, GL.UNSIGNED_BYTE, n), n
        }
        getData() {
            const e = new Uint8Array(this.width * this.height * 4);
            return GL.readPixels(0, 0, this.width, this.height, GL.RGBA, GL.UNSIGNED_BYTE, e), e
        }
        destroy() {
            this.renderTexture && this.renderTexture.destroy(), this.depthTexture && this.depthTexture.destroy()
        }
    }, GLX.Shader = class {
        constructor(e) {
            if (this.name = e.source.name || "", this.id = GL.createProgram(), this.compile(GL.VERTEX_SHADER, e.source.vs), this.compile(GL.FRAGMENT_SHADER, e.source.fs), GL.linkProgram(this.id), !GL.getProgramParameter(this.id, GL.LINK_STATUS)) throw new Error(GL.getProgramParameter(this.id, GL.VALIDATE_STATUS) + "\n" + GL.getError());
            GL.useProgram(this.id), this.attributes = {}, (e.attributes || []).forEach(e => {
                this.locateAttribute(e)
            }), this.uniforms = {}, (e.uniforms || []).forEach(e => {
                this.locateUniform(e)
            })
        }
        locateAttribute(e) {
            const t = GL.getAttribLocation(this.id, e);
            if (t < 0) throw new Error(`unable to locate attribute "${e}" in shader "${this.name}"`);
            this.attributes[e] = t
        }
        locateUniform(e) {
            const t = GL.getUniformLocation(this.id, e);
            if (!t) throw new Error(`unable to locate uniform "${e}" in shader "${this.name}"`);
            this.uniforms[e] = t
        }
        compile(e, t) {
            const n = GL.createShader(e);
            if (GL.shaderSource(n, t), GL.compileShader(n), !GL.getShaderParameter(n, GL.COMPILE_STATUS)) throw new Error(GL.getShaderInfoLog(n));
            GL.attachShader(this.id, n)
        }
        enable() {
            GL.useProgram(this.id);
            for (let e in this.attributes) GL.enableVertexAttribArray(this.attributes[e])
        }
        disable() {
            if (this.attributes)
                for (let e in this.attributes) GL.disableVertexAttribArray(this.attributes[e])
        }
        setBuffer(e, t) {
            if (void 0 === this.attributes[e]) throw new Error(`attempt to bind buffer to invalid attribute "${e}" in shader "${this.name}"`);
            t.enable(), GL.vertexAttribPointer(this.attributes[e], t.itemSize, GL.FLOAT, !1, 0, 0)
        }
        setParam(e, t, n) {
            if (void 0 === this.uniforms[e]) throw new Error(`attempt to bind to invalid uniform "${e}" in shader "${this.name}"`);
            GL["uniform" + t](this.uniforms[e], n)
        }
        setMatrix(e, t, n) {
            if (void 0 === this.uniforms[e]) throw new Error(`attempt to bind to invalid uniform "${e}" in shader "${this.name}"`);
            GL["uniformMatrix" + t](this.uniforms[e], !1, n)
        }
        setTexture(e, t, n) {
            n.enable(t), this.setParam(e, "1i", t)
        }
        destroy() {
            this.disable(), this.id = null
        }
    }, GLX.Matrix = class {
        constructor(e) {
            this.data = new Float32Array(e || [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
        }
        multiply(e) {
            return multiply(this.data, this.data, e.data), this
        }
        translateTo(e, t, n) {
            return this.data[12] = e, this.data[13] = t, this.data[14] = n, this
        }
        translateBy(e, t, n) {
            return multiply(this.data, this.data, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, e, t, n, 1]), this
        }
        rotateX(e) {
            const t = rad(e),
                n = Math.cos(t),
                r = Math.sin(t);
            return multiply(this.data, this.data, [1, 0, 0, 0, 0, n, r, 0, 0, -r, n, 0, 0, 0, 0, 1]), this
        }
        rotateY(e) {
            const t = rad(e),
                n = Math.cos(t),
                r = Math.sin(t);
            return multiply(this.data, this.data, [n, 0, -r, 0, 0, 1, 0, 0, r, 0, n, 0, 0, 0, 0, 1]), this
        }
        rotateZ(e) {
            const t = rad(e),
                n = Math.cos(t),
                r = Math.sin(t);
            return multiply(this.data, this.data, [n, -r, 0, 0, r, n, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]), this
        }
        scale(e, t, n) {
            return multiply(this.data, this.data, [e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1]), this
        }
    }, GLX.Matrix.multiply = ((e, t) => {
        const n = new Float32Array(16);
        return multiply(n, e.data, t.data), n
    }), GLX.Matrix.Perspective = class extends GLX.Matrix {
        constructor(e, t, n, r) {
            const i = 1 / Math.tan(e * (Math.PI / 180) / 2),
                o = 1 / (n - r);
            super([i / t, 0, 0, 0, 0, i, 0, 0, 0, 0, (r + n) * o, -1, 0, 0, 2 * r * n * o, 0])
        }
    }, GLX.Matrix.Frustum = class extends GLX.Matrix {
        constructor(e, t, n, r, i, o) {
            const a = 1 / (t - e),
                s = 1 / (n - r),
                l = 1 / (i - o);
            super([2 * i * a, 0, 0, 0, 0, 2 * i * s, 0, 0, (t + e) * a, (n + r) * s, (o + i) * l, -1, 0, 0, o * i * 2 * l, 0])
        }
    }, GLX.Matrix.Ortho = class extends GLX.Matrix {
        constructor(e, t, n, r, i, o) {
            super([2 / (t - e), 0, 0, 0, 0, 2 / (n - r), 0, 0, 0, 0, -2 / (o - i), 0, -(t + e) / (t - e), -(n + r) / (n - r), -(o + i) / (o - i), 1])
        }
    }, GLX.Matrix.invert3 = (e => {
        const t = e[0],
            n = e[1],
            r = e[2],
            i = e[4],
            o = e[5],
            a = e[6],
            s = e[8],
            l = e[9],
            u = e[10],
            h = u * o - a * l,
            c = -u * i + a * s,
            f = l * i - o * s;
        let d = t * h + n * c + r * f;
        return d ? [h * (d = 1 / d), (-u * n + r * l) * d, (a * n - r * o) * d, c * d, (u * t - r * s) * d, (-a * t + r * i) * d, f * d, (-l * t + n * s) * d, (o * t - n * i) * d] : null
    }), GLX.Matrix.transpose3 = (e => new Float32Array([e[0], e[3], e[6], e[1], e[4], e[7], e[2], e[5], e[8]])), GLX.Matrix.transpose = (e => new Float32Array([e[0], e[4], e[8], e[12], e[1], e[5], e[9], e[13], e[2], e[6], e[10], e[14], e[3], e[7], e[11], e[15]])), GLX.Matrix.transform = (e => {
        const t = e[12],
            n = e[13],
            r = e[14],
            i = e[15];
        return {
            x: (t / i + 1) / 2,
            y: (n / i + 1) / 2,
            z: (r / i + 1) / 2
        }
    }), GLX.Matrix.invert = (e => {
        const t = new Float32Array(16),
            n = e[0],
            r = e[1],
            i = e[2],
            o = e[3],
            a = e[4],
            s = e[5],
            l = e[6],
            u = e[7],
            h = e[8],
            c = e[9],
            f = e[10],
            d = e[11],
            m = e[12],
            p = e[13],
            x = e[14],
            g = e[15],
            v = n * s - r * a,
            y = n * l - i * a,
            w = n * u - o * a,
            b = r * l - i * s,
            P = r * u - o * s,
            T = i * u - o * l,
            M = h * p - c * m,
            L = h * x - f * m,
            E = h * g - d * m,
            G = c * x - f * p,
            _ = c * g - d * p,
            S = f * g - d * x;
        let A = v * S - y * _ + w * G + b * E - P * L + T * M;
        if (A) return A = 1 / A, t[0] = (s * S - l * _ + u * G) * A, t[1] = (i * _ - r * S - o * G) * A, t[2] = (p * T - x * P + g * b) * A, t[3] = (f * P - c * T - d * b) * A, t[4] = (l * E - a * S - u * L) * A, t[5] = (n * S - i * E + o * L) * A, t[6] = (x * w - m * T - g * y) * A, t[7] = (h * T - f * w + d * y) * A, t[8] = (a * _ - s * E + u * M) * A, t[9] = (r * E - n * _ - o * M) * A, t[10] = (m * P - p * w + g * v) * A, t[11] = (c * w - h * P - d * v) * A, t[12] = (s * L - a * G - l * M) * A, t[13] = (n * G - r * L + i * M) * A, t[14] = (p * y - m * b - x * v) * A, t[15] = (h * b - c * y + f * v) * A, t
    }), GLX.Matrix.identity = (() => new GLX.Matrix([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])), GLX.texture = {}, GLX.texture.Image = class {
        constructor() {
            this.id = GL.createTexture(), GL.bindTexture(GL.TEXTURE_2D, this.id), GL.bindTexture(GL.TEXTURE_2D, null)
        }
        clamp(e, t) {
            if (e.width <= t && e.height <= t) return e;
            let n = t,
                r = t;
            const i = e.width / e.height;
            i < 1 ? n = Math.round(r * i) : r = Math.round(n / i);
            const o = document.createElement("CANVAS");
            return o.width = n, o.height = r, o.getContext("2d").drawImage(e, 0, 0, o.width, o.height), o
        }
        load(e, t) {
            const n = new Image;
            n.crossOrigin = "*", n.onload = (e => {
                this.set(n), t && t(n)
            }), n.onerror = (e => {
                t && t()
            }), n.src = e
        }
        color(e) {
            GL.bindTexture(GL.TEXTURE_2D, this.id), GL.texParameteri(GL.TEXTURE_2D, GL.TEXTURE_MIN_FILTER, GL.LINEAR), GL.texParameteri(GL.TEXTURE_2D, GL.TEXTURE_MAG_FILTER, GL.LINEAR), GL.texImage2D(GL.TEXTURE_2D, 0, GL.RGBA, 1, 1, 0, GL.RGBA, GL.UNSIGNED_BYTE, new Uint8Array([255 * e[0], 255 * e[1], 255 * e[2], 255 * (void 0 === e[3] ? 1 : e[3])])), GL.bindTexture(GL.TEXTURE_2D, null)
        }
        set(e) {
            this.id && (e = this.clamp(e, GL.getParameter(GL.MAX_TEXTURE_SIZE)), GL.bindTexture(GL.TEXTURE_2D, this.id), GL.texParameteri(GL.TEXTURE_2D, GL.TEXTURE_MIN_FILTER, GL.LINEAR_MIPMAP_NEAREST), GL.texParameteri(GL.TEXTURE_2D, GL.TEXTURE_MAG_FILTER, GL.LINEAR), GL.texImage2D(GL.TEXTURE_2D, 0, GL.RGBA, GL.RGBA, GL.UNSIGNED_BYTE, e), GL.generateMipmap(GL.TEXTURE_2D), GL.anisotropyExtension && GL.texParameterf(GL.TEXTURE_2D, GL.anisotropyExtension.TEXTURE_MAX_ANISOTROPY_EXT, GL.anisotropyExtension.maxAnisotropyLevel), GL.bindTexture(GL.TEXTURE_2D, null))
        }
        enable(e) {
            this.id && (GL.activeTexture(GL.TEXTURE0 + (e || 0)), GL.bindTexture(GL.TEXTURE_2D, this.id))
        }
        destroy() {
            GL.bindTexture(GL.TEXTURE_2D, null), GL.deleteTexture(this.id), this.id = null
        }
    }, GLX.texture.Data = class {
        constructor(e, t, n, r) {
            this.id = e.createTexture(), e.bindTexture(e.TEXTURE_2D, this.id), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST);
            let i = null;
            if (r) {
                const e = t * n * 4;
                (i = new Uint8Array(e)).set(r.subarray(0, e))
            }
            e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, t, n, 0, e.RGBA, e.UNSIGNED_BYTE, i), e.bindTexture(e.TEXTURE_2D, null), this.GL = e
        }
        enable(e) {
            this.GL.activeTexture(this.GL.TEXTURE0 + (e || 0)), this.GL.bindTexture(this.GL.TEXTURE_2D, this.id)
        }
        destroy() {
            this.GL.bindTexture(this.GL.TEXTURE_2D, null), this.GL.deleteTexture(this.id), this.id = null
        }
    };
    class Collection {
        constructor() {
            this.items = []
        }
        add(e) {
            this.items.push(e)
        }
        remove(e) {
            this.items = this.items.filter(t => t !== e)
        }
        forEach(e) {
            this.items.forEach(e)
        }
        destroy() {
            this.forEach(e => e.destroy()), this.items = []
        }
    }
    class WorkerPool {
        constructor(e, t) {
            this.items = [];
            for (let n = 0; n < t; n++) this.items[n] = new WorkerWrapper(e)
        }
        get(e) {
            for (let t = 0; t < this.items.length; t++)
                if (!this.items[t].busy) return this.items[t].busy = !0, void e(this.items[t]);
            setTimeout(() => {
                this.get(e)
            }, 50)
        }
        destroy() {
            this.items.forEach(e => e.destroy()), this.items = []
        }
    }
    class WorkerWrapper {
        constructor(e) {
            this.busy = !1, this.thread = new Worker(e)
        }
        postMessage(e) {
            this.thread.postMessage(e)
        }
        onMessage(e) {
            this.thread.onmessage = function(t) {
                e(t.data)
            }
        }
        free() {
            this.thread.onmessage = function(e) {}, this.busy = !1
        }
        destroy() {
            this.thread.close()
        }
    }
    class IconCollection extends Collection {
        get(e, t) {
            for (let n = 0; n < this.items.length; n++)
                if (this.items[n].url === e) return void t(null, this.items[n]);
            new Icon(e).load(t)
        }
    }
    class Icon {
        constructor(e = Icon.defaultURL) {
            this.type = "svg", this.url = e
        }
        load(e) {
            this.url !== Icon.defaultURL ? Request.getText(this.url, (t, n) => {
                t ? e(t) : this.onLoad(n, e)
            }) : this.onLoad(DEFAULT_ICON, e)
        }
        onLoad(e, t) {
            const n = [];
            triangulateSVG(e).forEach(e => {
                const t = [e[0][0], e[0][1], 0],
                    r = [e[1][0], e[1][1], 0],
                    i = [e[2][0], e[2][1], 0];
                n.push(...t, ...r, ...i)
            }), this.vertexBuffer = new GLX.Buffer(3, new Float32Array(n)), APP.icons.add(this), t(null, this)
        }
        destroy() {
            APP.icons.remove(this), this.vertexBuffer && this.vertexBuffer.destroy()
        }
    }
    Icon.defaultURL = "default_icon";
    class Marker {
        constructor(e, t = null, n = {}) {
            this.data = t;
            n.anchor;
            const r = n.scale || 1;
            this.color = Qolor.parse(n.color || Marker.defaultColor).toArray(), this.metersPerLon = METERS_PER_DEGREE_LATITUDE * Math.cos(e.latitude / 180 * Math.PI), this.longitude = e.longitude, this.latitude = e.latitude, this.altitude = e.altitude || 0, this.matrix = new GLX.Matrix, this.matrix.scale(r, r, r), n.url ? APP.icons.get(n.url, (e, t) => {
                e || (this.icon = t, APP.markers.add(this))
            }) : APP.icons.get(Icon.defaultURL, (e, t) => {
                e || (this.icon = t, APP.markers.add(this))
            })
        }
        getMatrix() {
            return this.matrix.translateTo((this.longitude - APP.position.longitude) * this.metersPerLon, (APP.position.latitude - this.latitude) * METERS_PER_DEGREE_LATITUDE, this.altitude), this.matrix
        }
        destroy() {
            APP.markers.remove(this)
        }
    }
    let APP, GL;
    Marker.defaultColor = "#ffcc00";
    class OSMBuildings {
        constructor(e = {}) {
            APP = this, e.style && (e.style.color || e.style.wallColor) && (DEFAULT_COLOR = Qolor.parse(e.style.color || e.style.wallColor).toArray()), this.view = new View, this.view.fogColor = Qolor.parse(e.fogColor || FOG_COLOR).toArray(), this.attribution = e.attribution || OSMBuildings.ATTRIBUTION, this.minZoom = Math.max(parseFloat(e.minZoom || MIN_ZOOM), MIN_ZOOM), this.maxZoom = Math.min(parseFloat(e.maxZoom || MAX_ZOOM), MAX_ZOOM), this.maxZoom < this.minZoom && (this.minZoom = MIN_ZOOM, this.maxZoom = MAX_ZOOM), this.bounds = e.bounds, this.position = e.position || {
                latitude: 52.52,
                longitude: 13.41
            }, this.zoom = e.zoom || this.minZoom + (this.maxZoom - this.minZoom) / 2, this.rotation = e.rotation || 0, this.tilt = e.tilt || 0;
            const t = Math.min(window.navigator.hardwareConcurrency || 2, 4),
                n = new Blob([workers.feature], {
                    type: "application/javascript"
                });
            this.workers = new WorkerPool(URL.createObjectURL(n), 4 * t), this.domNode = e.container, "string" == typeof this.domNode && (this.domNode = document.getElementById(e.container)), this.container = document.createElement("DIV"), this.container.className = "osmb", 0 === this.domNode.offsetHeight && (this.domNode.style.height = "100%", console.warn("Container height should be set. Now defaults to 100%.")), this.domNode.appendChild(this.container), this.canvas = document.createElement("CANVAS"), this.canvas.className = "osmb-viewport";
            this.canvas.width = this.width = 1 * this.domNode.offsetWidth, this.canvas.height = this.height = 1 * this.domNode.offsetHeight, this.container.appendChild(this.canvas), this.glx = new GLX(this.canvas, e.fastMode), GL = this.glx.GL, this.features = new FeatureCollection, this.icons = new IconCollection, this.markers = new Collection, this.events = new Events(this.canvas), e.disabled && this.setDisabled(!0), this._getStateFromUrl(), e.state && (this._setStateToUrl(), this.events.on("change", e => {
                this._setStateToUrl()
            })), this._attribution = document.createElement("DIV"), this._attribution.className = "osmb-attribution", this.container.appendChild(this._attribution), this._updateAttribution(), this.setDate(new Date), this.view.start(), this.emit("load", this)
        }
        appendTo() {}
        on(e, t) {
            this.events.on(e, t)
        }
        off(e, t) {
            this.events.off(e, t)
        }
        emit(e, t) {
            this.events.emit(e, t)
        }
        setDate(e) {
            View.Sun.setDate("string" == typeof e ? new Date(e) : e)
        }
        project(e, t, n) {
            const r = [(t - this.position.longitude) * METERS_PER_DEGREE_LONGITUDE, -(e - this.position.latitude) * METERS_PER_DEGREE_LATITUDE, n];
            let i = transformVec3(this.view.viewProjMatrix.data, r);
            return {
                x: (i = mul3scalar(add3(i, [1, 1, 1]), .5))[0] * this.width,
                y: (1 - i[1]) * this.height,
                z: i[2]
            }
        }
        unproject(e, t) {
            const n = GLX.Matrix.invert(this.view.viewProjMatrix.data);
            let r = [e / this.width, 1 - t / this.height];
            const i = getIntersectionWithXYPlane((r = add2(mul2scalar(r, 2), [-1, -1, -1]))[0], r[1], n);
            if (void 0 !== i) return {
                longitude: this.position.longitude + i[0] / METERS_PER_DEGREE_LONGITUDE,
                latitude: this.position.latitude - i[1] / METERS_PER_DEGREE_LATITUDE
            }
        }
        remove(e) {
            e.destroy && e.destroy()
        }
        addOBJ(e, t, n = {}) {
            return n.position = t, new Feature("OBJ", e, n)
        }
        addGeoJSON(e, t) {
            return new Feature("GeoJSON", e, t)
        }
        addGeoJSONTiles(e, t = {}) {
            return t.fixedZoom = t.fixedZoom || 15, this.dataGrid = new Grid(e, GeoJSONTile, t, 2), this.dataGrid
        }
        addMapTiles(e) {
            return this.basemapGrid = new Grid(e, BitmapTile, {}, 4), this.basemapGrid
        }
        highlight(e) {
            return this.features.setTintCallback(e || (() => !1))
        }
        hide(e) {
            this.features.setZScaleCallback(e)
        }
        show() {}
        getTarget() {}
        screenshot() {}
        _updateAttribution() {
            const e = [];
            this.attribution && e.push(this.attribution), this._attribution.innerHTML = e.join(" · ")
        }
        _getStateFromUrl() {
            const e = location.search,
                t = {};
            e && e.substring(1).replace(/(?:^|&)([^&=]*)=?([^&]*)/g, (e, n, r) => {
                n && (t[n] = r)
            }), this.setPosition(void 0 !== t.lat && void 0 !== t.lon ? {
                latitude: parseFloat(t.lat),
                longitude: parseFloat(t.lon)
            } : this.position), this.setZoom(void 0 !== t.zoom ? parseFloat(t.zoom) : this.zoom), this.setRotation(void 0 !== t.rotation ? parseFloat(t.rotation) : this.rotation), this.setTilt(void 0 !== t.tilt ? parseFloat(t.tilt) : this.tilt)
        }
        _setStateToUrl() {
            history.replaceState && !this.stateDebounce && (this.stateDebounce = setTimeout(() => {
                this.stateDebounce = null;
                const e = [];
                e.push("lat=" + this.position.latitude.toFixed(6)), e.push("lon=" + this.position.longitude.toFixed(6)), e.push("zoom=" + this.zoom.toFixed(1)), e.push("tilt=" + this.tilt.toFixed(1)), e.push("rotation=" + this.rotation.toFixed(1)), history.replaceState({}, "", "?" + e.join("&"))
            }, 1e3))
        }
        setDisabled(e) {
            this.events.isDisabled = !!e
        }
        isDisabled() {
            return !!this.events.isDisabled
        }
        getBounds() {
            return this.view.getViewQuad().map(e => getPositionFromLocal(e))
        }
        setZoom(e, t) {
            e = Math.max(e, this.minZoom), e = Math.min(e, this.maxZoom), this.zoom !== e && (this.zoom = e, this.events.emit("zoom", {
                zoom: e
            }), this.events.emit("change"))
        }
        getZoom() {
            return this.zoom
        }
        setPosition(e) {
            this.position = e, METERS_PER_DEGREE_LONGITUDE = METERS_PER_DEGREE_LATITUDE * Math.cos(this.position.latitude / 180 * Math.PI), this.events.emit("change")
        }
        getPosition() {
            return this.position
        }
        setSize(e, t) {
            e === this.width && t === this.height || (this.width = e, this.height = t, this.events.emit("resize", {
                width: this.width,
                height: this.height
            }))
        }
        getSize() {
            return {
                width: this.width,
                height: this.height
            }
        }
        setRotation(e) {
            e %= 360, this.rotation !== e && (this.rotation = e, this.events.emit("rotate", {
                rotation: e
            }), this.events.emit("change"))
        }
        getRotation() {
            return this.rotation
        }
        setTilt(e) {
            e = clamp(e, 0, MAX_TILT), this.tilt !== e && (this.tilt = e, this.events.emit("tilt", {
                tilt: e
            }), this.events.emit("change"))
        }
        getTilt() {
            return this.tilt
        }
        addMarker(e, t, n) {
            return new Marker(e, t, n)
        }
        destroy() {
            this.view.destroy(), this.events.destroy(), this.glx.destroy(), this.canvas.parentNode.removeChild(this.canvas), this.features.destroy(), this.markers.destroy(), this.domNode.innerHTML = ""
        }
    }

    function add2(e, t) {
        return [e[0] + t[0], e[1] + t[1]]
    }

    function mul2scalar(e, t) {
        return [e[0] * t, e[1] * t]
    }

    function getEventXY(e) {
        const t = e.target.getBoundingClientRect();
        return {
            x: e.x - t.left,
            y: e.y - t.top
        }
    }

    function addListener(e, t, n) {
        e.addEventListener(t, n, !1)
    }
    OSMBuildings.VERSION = null, OSMBuildings.ATTRIBUTION = '<a href="https://osmbuildings.org/">© OSM Buildings</a>', "function" == typeof define ? define([], OSMBuildings) : "object" == typeof module ? module.exports = OSMBuildings : window.OSMBuildings = OSMBuildings;
    class Events {
        constructor(e) {
            this.listeners = {}, this.isDisabled = !1, this.prevX = 0, this.prevY = 0, this.startZoom = 0, this.prevRotation = 0, this.prevTilt = 0, this.startDist = 0, this.startAngle = 0, this.button = null, this.addAllListeners(e)
        }
        addAllListeners(e) {
            const t = window.document;
            let n;
            "ontouchstart" in window ? (addListener(e, "touchstart", e => {
                this.onTouchStart(e)
            }), addListener(t, "touchmove", e => {
                this.onTouchMoveDocument(e)
            }), addListener(e, "touchmove", e => {
                this.onTouchMove(e)
            }), addListener(t, "touchend", e => {
                this.onTouchEndDocument(e)
            }), addListener(t, "gesturechange", e => {
                this.onGestureChangeDocument(e)
            })) : (addListener(e, "mousedown", e => {
                this.onMouseDown(e)
            }), addListener(t, "mousemove", e => {
                this.onMouseMoveDocument(e)
            }), addListener(e, "mousemove", e => {
                this.onMouseMove(e)
            }), addListener(t, "mouseup", e => {
                this.onMouseUpDocument(e)
            }), addListener(e, "mouseup", e => {
                this.onMouseUp(e)
            }), addListener(e, "dblclick", e => {
                this.onDoubleClick(e)
            }), addListener(e, "mousewheel", e => {
                this.onMouseWheel(e)
            }), addListener(e, "DOMMouseScroll", e => {
                this.onMouseWheel(e)
            }), addListener(e, "contextmenu", e => {
                this.onContextMenu(e)
            })), addListener(window, "resize", e => {
                n || (n = setTimeout(() => {
                    n = null, APP.setSize(APP.container.offsetWidth, APP.container.offsetHeight)
                }, 250))
            })
        }
        cancelEvent(e) {
            e.preventDefault && e.preventDefault(), e.returnValue = !1
        }
        onDoubleClick(e) {
            APP.view.speedUp(), this.cancelEvent(e);
            const t = getEventXY(e);
            this.emit("doubleclick", {
                x: t.x,
                y: t.y
            }), this.isDisabled || APP.setZoom(APP.zoom + 1, e)
        }
        onMouseDown(e) {
            APP.view.speedUp(), this.cancelEvent(e), this.startZoom = APP.zoom, this.prevRotation = APP.rotation, this.prevTilt = APP.tilt, this.prevX = e.clientX, this.prevY = e.clientY, this.isClick = !0, (1 === e.buttons || 0 === e.button) && e.altKey || 2 === e.buttons || 2 === e.button ? this.button = 2 : 1 !== e.buttons && 0 !== e.button || (this.button = 0);
            const t = getEventXY(e);
            this.emit("pointerdown", {
                x: t.x,
                y: t.y,
                button: this.button
            })
        }
        onMouseMoveDocument(e) {
            if (this.isClick) {
                const t = e.clientX - this.prevX,
                    n = e.clientY - this.prevY;
                this.isClick = t * t + n * n < 15
            }
            0 === this.button ? (APP.view.speedUp(), this.moveMap(e)) : 2 === this.button && (APP.view.speedUp(), this.rotateMap(e)), this.prevX = e.clientX, this.prevY = e.clientY
        }
        onMouseMove(e) {
            const t = getEventXY(e);
            this.emit("pointermove", t)
        }
        onMouseUpDocument(e) {
            0 === this.button ? (this.moveMap(e), this.button = null) : 2 === this.button && (this.rotateMap(e), this.button = null)
        }
        onMouseUp(e) {
            if (this.isClick) {
                const t = getEventXY(e);
                APP.view.Picking.getTarget(t.x, t.y, e => {
                    this.emit("pointerup", {
                        features: e.features,
                        marker: e.marker
                    })
                })
            }
        }
        onMouseWheel(e) {
            APP.view.speedUp(), this.cancelEvent(e);
            let t = 0;
            if (e.wheelDeltaY ? t = e.wheelDeltaY : e.wheelDelta ? t = e.wheelDelta : e.detail && (t = -e.detail), !this.isDisabled) {
                const n = .2 * (t > 0 ? 1 : t < 0 ? -1 : 0);
                APP.setZoom(APP.zoom + n, e)
            }
        }
        onContextMenu(e) {
            this.cancelEvent(e)
        }
        moveMap(e) {
            if (this.isDisabled) return;
            const t = .86 * Math.pow(2, -APP.zoom),
                n = 1 / Math.cos(APP.position.latitude / 180 * Math.PI),
                r = e.clientX - this.prevX,
                i = e.clientY - this.prevY,
                o = APP.rotation * Math.PI / 180,
                a = [Math.cos(o), Math.sin(o)],
                s = [Math.cos(o - Math.PI / 2), Math.sin(o - Math.PI / 2)],
                l = add2(mul2scalar(a, r), mul2scalar(s, -i)),
                u = {
                    longitude: APP.position.longitude - l[0] * t * n,
                    latitude: APP.position.latitude + l[1] * t
                };
            APP.setPosition(u), this.emit("move", u)
        }
        rotateMap(e) {
            this.isDisabled || (this.prevRotation += (e.clientX - this.prevX) * (360 / window.innerWidth), this.prevTilt -= (e.clientY - this.prevY) * (360 / window.innerHeight), APP.setRotation(this.prevRotation), APP.setTilt(this.prevTilt))
        }
        emitGestureChange(e) {
            const t = e.touches[0],
                n = e.touches[1],
                r = t.clientX - n.clientX,
                i = t.clientY - n.clientY,
                o = r * r + i * i,
                a = Math.atan2(i, r);
            this.onGestureChangeDocument({
                rotation: (a - this.startAngle) * (180 / Math.PI) % 360,
                scale: Math.sqrt(o / this.startDist)
            })
        }
        onTouchStart(e) {
            APP.view.speedUp(), this.cancelEvent(e), this.button = 0, this.isClick = !0;
            const t = e.touches[0];
            if (2 === e.touches.length && !("ongesturechange" in window)) {
                const n = e.touches[1],
                    r = t.clientX - n.clientX,
                    i = t.clientY - n.clientY;
                this.startDist = r * r + i * i, this.startAngle = Math.atan2(i, r)
            }
            this.startZoom = APP.zoom, this.prevRotation = APP.rotation, this.prevTilt = APP.tilt, this.prevX = t.clientX, this.prevY = t.clientY, this.emit("pointerdown", {
                x: e.x,
                y: e.y,
                button: 0
            })
        }
        onTouchMoveDocument(e) {
            if (null === this.button) return;
            APP.view.speedUp();
            const t = e.touches[0];
            if (this.isClick) {
                const e = t.clientX - this.prevX,
                    n = t.clientY - this.prevY;
                this.isClick = e * e + n * n < 15
            }
            e.touches.length > 1 ? (APP.setTilt(this.prevTilt + (this.prevY - t.clientY) * (360 / window.innerHeight)), this.prevTilt = APP.tilt, "ongesturechange" in window || this.emitGestureChange(e)) : this.moveMap(t), this.prevX = t.clientX, this.prevY = t.clientY
        }
        onTouchMove(e) {
            if (1 === e.touches.length) {
                const t = getEventXY(e.touches[0]);
                this.emit("pointermove", {
                    x: t.x,
                    y: t.y,
                    button: 0
                })
            }
        }
        onTouchEndDocument(e) {
            if (null === this.button) return;
            const t = e.touches[0];
            if (0 === e.touches.length)
                if (this.button = null, this.isClick) {
                    void 0 === e.x && (e.x = this.prevX << 0), void 0 === e.y && (e.y = this.prevY << 0);
                    const t = getEventXY(e);
                    APP.view.Picking.getTarget(t.x, t.y, e => {
                        this.emit("pointerup", {
                            features: e.features,
                            marker: e.marker
                        })
                    })
                } else this.emit("pointerup", {});
            else 1 === e.touches.length && (this.prevX = t.clientX, this.prevY = t.clientY)
        }
        onGestureChangeDocument(e) {
            null !== this.button && (APP.view.speedUp(), this.cancelEvent(e), this.isDisabled || (APP.setZoom(this.startZoom + (e.scale - 1)), APP.setRotation(this.prevRotation - e.rotation)), this.emit("gesture", e))
        }
        on(e, t) {
            (this.listeners[e] || (this.listeners[e] = [])).push(t)
        }
        off(e, t) {
            this.listeners[e] = (this.listeners[e] || []).filter(e => e !== t)
        }
        emit(e, t) {
            void 0 !== this.listeners[e] && setTimeout(() => {
                this.listeners[e].forEach(e => e(t))
            }, 0)
        }
        destroy() {
            this.listeners = {}
        }
    }
    const MIN_ZOOM = 15,
        MAX_ZOOM = 22,
        MAX_TILT = 45,
        TILE_SIZE = 256,
        DEFAULT_HEIGHT = 10,
        MAX_USED_ZOOM_LEVEL = 25;
    let DEFAULT_COLOR = Qolor.parse("rgb(220, 210, 200)").toArray();
    const FOG_COLOR = "#e8e0d8",
        BACKGROUND_COLOR = "#efe8e0",
        document = window.document,
        EARTH_RADIUS_IN_METERS = 6378137,
        EARTH_CIRCUMFERENCE_IN_METERS = EARTH_RADIUS_IN_METERS * Math.PI * 2,
        METERS_PER_DEGREE_LATITUDE = EARTH_CIRCUMFERENCE_IN_METERS / 360;
    let METERS_PER_DEGREE_LONGITUDE = METERS_PER_DEGREE_LATITUDE;
    const SHADOW_MAP_MAX_BUILDING_HEIGHT = 100,
        SHADOW_DEPTH_MAP_SIZE = 2048,
        BUILDING_TEXTURE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAQMAAACQp+OdAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wwCCAUQLpaUSQAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAAAGUExURebm5v///zFES9kAAAAcSURBVCjPY/gPBQyUMh4wAAH/KAPCoFaoDnYGAAKtZsamTRFlAAAAAElFTkSuQmCC",
        DEFAULT_ICON = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="512px" height="512px" viewBox="0 0 512 512"><path d="M256,0C167.641,0,96,71.625,96,160c0,24.75,5.625,48.219,15.672,69.125C112.234,230.313,256,512,256,512l142.594-279.375C409.719,210.844,416,186.156,416,160C416,71.625,344.375,0,256,0z M256,256c-53.016,0-96-43-96-96s42.984-96,96-96c53,0,96,43,96,96S309,256,256,256z"/></svg>';
    class Request {
        static load(e, t) {
            const n = new XMLHttpRequest,
                r = setTimeout(e => {
                    4 !== n.readyState && (n.abort(), t("status"))
                }, 1e4);
            return n.onreadystatechange = (() => {
                4 === n.readyState && (clearTimeout(r), !n.status || n.status < 200 || n.status > 299 ? t("status") : t(null, n))
            }), n.open("GET", e), n.send(null), {
                abort: () => {
                    n.abort()
                }
            }
        }
        static getText(e, t) {
            return this.load(e, (e, n) => {
                e ? t(e) : void 0 !== n.responseText ? t(null, n.responseText) : t("content")
            })
        }
        static getXML(e, t) {
            return this.load(e, (e, n) => {
                e ? t(e) : void 0 !== n.responseXML ? t(null, n.responseXML) : t("content")
            })
        }
        static getJSON(e, t) {
            return this.load(e, (n, r) => {
                if (n) return void t(n);
                if (!r.responseText) return void t("content");
                let i;
                try {
                    i = JSON.parse(r.responseText), t(null, i)
                } catch (n) {
                    console.warn(`Could not parse JSON from ${e}\n${n.message}`), t("content")
                }
            })
        }
    }

    function pattern(e, t) {
        return e.replace(/\{(\w+)\}/g, (e, n) => t[n] || e)
    }

    function substituteZCoordinate(e, t) {
        return e.map(e => [...e, t])
    }

    function clamp(e, t, n) {
		if(n===undefined)
		{
			return e;
		}
        return Math.min(n, Math.max(e, t))
    }
    class Grid {
        constructor(e, t, n = {}, r = 2) {
            this.source = e, this.tileClass = t, this.tiles = {}, this.buffer = 1, this.fixedZoom = n.fixedZoom, this.bounds = n.bounds || {
                w: -180,
                s: -90,
                e: 180,
                n: 90
            }, this.minZoom = Math.max(parseFloat(n.minZoom || APP.minZoom), APP.minZoom), this.maxZoom = Math.min(parseFloat(n.maxZoom || APP.maxZoom), APP.maxZoom), this.maxZoom < this.minZoom && (this.minZoom = APP.minZoom, this.maxZoom = APP.maxZoom), this.queue = [];
            for (let e = 0; e < r; e++) this.queueNext();
            this.update()
        }
        getURL(e, t, n) {
            const r = "abcd" [(e + t) % 4];
            return pattern(this.source, {
                s: r,
                x: e,
                y: t,
                z: n
            })
        }
        getClosestTiles(e, t) {
            return e
        }
        mergeTiles(e, t, n) {
            const r = {},
                i = {},
                o = [];
            let a;
            if (0 === t || t <= this.minZoom) {
                for (a in e) e[a][2] = t;
                return e
            }
            for (a in e) {
                const s = e[a],
                    l = (s[0] << 0) / 2,
                    u = (s[1] << 0) / 2;
                if (void 0 === r[[l, u]]) {
                    const e = getTileSizeOnScreen(l, u, t - 1, APP.view.viewProjMatrix);
                    r[[l, u]] = e < n
                }
                r[[l, u]] || void 0 === i[[s[0], s[1]]] && (i[[s[0], s[1]]] = !0, o.push([s[0], s[1], t]))
            }
            let s = [];
            for (a in r)
                if (r[a]) {
                    const e = a.split(",");
                    s.push([parseInt(e[0]), parseInt(e[1]), t - 1])
                } return s.length > 0 && (s = this.mergeTiles(s, t - 1, n)), o.concat(s)
        }
        getDistance(e, t) {
            const n = e[0] - t[0],
                r = e[1] - t[1];
            return n * n + r * r
        }
        update() {
            if (APP.zoom < this.minZoom || APP.zoom > this.maxZoom) return;
            const e = Math.round(this.fixedZoom || APP.zoom);
            let t = APP.view.getViewQuad(APP.view.viewProjMatrix.data),
                n = project([APP.position.longitude, APP.position.latitude], 1 << e);
            for (let n = 0; n < 4; n++) t[n] = getTilePositionFromLocal(t[n], e);
            let r = rasterConvexQuad(t);
            r = this.fixedZoom ? this.getClosestTiles(r, n) : this.mergeTiles(r, e, .5 * TILE_SIZE * TILE_SIZE);
            const i = {};
            r.forEach(t => {
                void 0 === t[2] && (t[2] = e), i[t.join(",")] = !0
            }), this.visibleTiles = i;
            for (let e in i) {
                const t = e.split(","),
                    n = parseInt(t[0]),
                    r = parseInt(t[1]),
                    i = parseInt(t[2]);
                this.tiles[e] || (this.tiles[e] = new this.tileClass(n, r, i), this.queue.push(this.tiles[e]))
            }
            this.purge(i), this.queue.forEach(e => {
                e.distance = this.getDistance([e.x, e.y], n)
            }), this.queue.sort((e, t) => t.distance - e.distance), this.updateTimer = setTimeout(() => {
                this.update()
            }, 100)
        }
        queueNext() {
            if (!this.queue.length) return void(this.queueTimer = setTimeout(this.queueNext.bind(this), 200));
            const e = this.queue.pop();
            e.load(this.getURL(e.x, e.y, e.zoom), () => {
                this.queueNext()
            })
        }
        purge(e) {
            const t = Math.round(APP.zoom);
            for (let n in this.tiles) {
                let r = this.tiles[n];
                if (!e[n])
                    if (this.fixedZoom) this.tiles[n].destroy(), delete this.tiles[n];
                    else {
                        if (r.zoom === t + 1) {
                            if (e[[r.x / 2 << 0, r.y / 2 << 0, t].join(",")]) continue
                        }
                        r.zoom === t - 1 && (e[[2 * r.x, 2 * r.y, t].join(",")] || e[[2 * r.x + 1, 2 * r.y, t].join(",")] || e[[2 * r.x, 2 * r.y + 1, t].join(",")] || e[[2 * r.x + 1, 2 * r.y + 1, t].join(",")]) || delete this.tiles[n]
                    }
            }
            this.queue = this.queue.filter(e => !!e)
        }
        destroy() {
            for (let e in this.tiles) this.tiles[e].destroy();
            this.tiles = {}, this.queue = [], clearTimeout(this.updateTimer), clearTimeout(this.queueTimer)
        }
    }
    class Tile {
        constructor(e, t, n) {
            this.x = e, this.y = t, this.zoom = n, this.key = [e, t, n].join(","), this.distance = 1 / 0
        }
        load() {}
        destroy() {}
    }
    class BitmapTile extends Tile {
        constructor(e, t, n) {
            super(e, t, n), this.latitude = tile2lat(t, n), this.longitude = tile2lon(e, n);
            const r = getTileSizeInMeters(this.latitude, n),
                i = [r, r, 0, r, 0, 0, 0, r, 0, 0, 0, 0];
            this.vertexBuffer = new GLX.Buffer(3, new Float32Array(i)), this.texCoordBuffer = new GLX.Buffer(2, new Float32Array([1, 0, 1, 1, 0, 0, 0, 1]))
        }
        load(e, t) {
            this.texture = new GLX.texture.Image, this.texture.load(e, e => {
                e && (GL.bindTexture(GL.TEXTURE_2D, this.texture.id), GL.texParameteri(GL.TEXTURE_2D, GL.TEXTURE_WRAP_S, GL.CLAMP_TO_EDGE), GL.texParameteri(GL.TEXTURE_2D, GL.TEXTURE_WRAP_T, GL.CLAMP_TO_EDGE), this.isReady = !0), t && t()
            })
        }
        destroy() {
            this.vertexBuffer.destroy(), this.texCoordBuffer.destroy(), this.texture && this.texture.destroy()
        }
    }
    class GeoJSONTile extends Tile {
        constructor(e, t, n, r) {
            super(e, t, n), this.options = r
        }
        load(e, t) {
            this.content = new Feature("GeoJSON", e, this.options, t)
        }
        destroy() {
            this.content && this.content.destroy()
        }
    }
    class FeatureCollection extends Collection {
        constructor() {
            super(), this.tintCallback = (() => {}), this.zScaleCallback = (() => {})
        }
        setTintCallback(e) {
            this.tintCallback = e, this.forEach(e => {
                e.applyTintAndZScale()
            })
        }
        setZScaleCallback(e) {
            this.zScaleCallback = e, this.forEach(e => {
                e.applyTintAndZScale()
            })
        }
    }
    class Feature {
        constructor(e, t, n = {}, r = function() {}) {
            this.type = e, this.options = n, this.callback = r, this.id = n.id, this.color = n.color, this.altitude = n.altitude || 0, this.matrix = new GLX.Matrix, this.scale(n.scale || 1), this.rotate(n.rotation || 0), this.minZoom = Math.max(parseFloat(n.minZoom || MIN_ZOOM), APP.minZoom), this.maxZoom = Math.min(parseFloat(n.maxZoom || MAX_ZOOM), APP.maxZoom), this.maxZoom < this.minZoom && (this.minZoom = MIN_ZOOM, this.maxZoom = MAX_ZOOM), this.load(t)
        }
        load(e) {
            APP.workers.get(t => {
                t.onMessage(e => {
                    if ("error" === e) return this.callback(), void t.free();
                    "load" !== e ? (this.onLoad(e), t.free()) : this.callback()
                }), t.postMessage({
                    type: this.type,
                    url: e,
                    options: this.options
                })
            })
        }
        onLoad(e) {
            this.longitude = e.position.longitude, this.latitude = e.position.latitude, this.metersPerLon = METERS_PER_DEGREE_LATITUDE * Math.cos(this.latitude / 180 * Math.PI), this.vertexBuffer = new GLX.Buffer(3, e.vertices), this.timer = setTimeout(() => {
                this.normalBuffer = new GLX.Buffer(3, e.normals), this.timer = setTimeout(() => {
                    this.colorBuffer = new GLX.Buffer(3, e.colors), this.timer = setTimeout(() => {
                        this.texCoordBuffer = new GLX.Buffer(2, e.texCoords), this.timer = setTimeout(() => {
                            this.heightBuffer = new GLX.Buffer(1, e.heights), this.timer = setTimeout(() => {
                                this.pickingBuffer = new GLX.Buffer(3, e.pickingColors), this.timer = setTimeout(() => {
                                    this.items = e.items, this.applyTintAndZScale(), APP.features.add(this), this.fade = 0
                                }, 20)
                            }, 20)
                        }, 20)
                    }, 20)
                }, 20)
            }, 20)
        }
        translateBy(e = 0, t = 0, n = 0) {
            this.matrix.translateBy(e, t, n)
        }
        scale(e) {
            this.matrix.scale(e, e, e)
        }
        rotate(e) {
            this.matrix.rotateZ(-e)
        }
        getMatrix() {
            return this.matrix.translateTo((this.longitude - APP.position.longitude) * this.metersPerLon, (APP.position.latitude - this.latitude) * METERS_PER_DEGREE_LATITUDE, this.altitude), this.matrix
        }
        getFade() {
            if (this.fade >= 1) return 1;
            APP.view.speedUp();
            const e = this.fade;
            return this.fade += 1 / 60, e
        }
        applyTintAndZScale() {
            const e = [],
                t = APP.features.tintCallback,
                n = [],
                r = APP.features.zScaleCallback;
            this.items.forEach(i => {
                const o = {
                        id: i.id,
                        properties: i.properties
                    },
                    a = t(o),
                    s = a ? [...Qolor.parse(a).toArray(), 1] : [0, 0, 0, 0],
                    l = r(o);
                for (let t = 0; t < i.vertexCount; t++) e.push(...s), n.push(l ? 0 : 1)
            }), this.tintBuffer = new GLX.Buffer(4, new Float32Array(e)), this.zScaleBuffer = new GLX.Buffer(1, new Float32Array(n))
        }
        destroy() {
            APP.features.remove(this), clearTimeout(this.timer), this.vertexBuffer && this.vertexBuffer.destroy(), this.normalBuffer && this.normalBuffer.destroy(), this.colorBuffer && this.colorBuffer.destroy(), this.texCoordBuffer && this.texCoordBuffer.destroy(), this.heightBuffer && this.heightBuffer.destroy(), this.pickingBuffer && this.pickingBuffer.destroy(), this.tintBuffer && this.tintBuffer.destroy(), this.zScaleBuffer && this.zScaleBuffer.destroy(), this.items = []
        }
    }
    class MapPlane {
        constructor() {
            this.size = 5e3, this.minZoom = APP.minZoom, this.maxZoom = APP.maxZoom, this.matrix = new GLX.Matrix, this.createGeometry()
        }
        createGeometry() {
            const e = 2 * this.size / 50,
                t = [0, 0, 1],
                n = [...t, ...t, ...t, ...t, ...t, ...t],
                r = [],
                i = [],
                o = [];
            for (let t = 0; t < 50; t++)
                for (let a = 0; a < 50; a++) {
                    const s = -this.size + t * e,
                        l = -this.size + a * e;
                    r.push(s, l, 0, s + e, l + e, 0, s + e, l, 0, s, l, 0, s, l + e, 0, s + e, l + e, 0), i.push(...n), o.push(1, 1, 1, 1, 1, 1)
                }
            this.vertexBuffer = new GLX.Buffer(3, new Float32Array(r)), this.normalBuffer = new GLX.Buffer(3, new Float32Array(i)), this.zScaleBuffer = new GLX.Buffer(1, new Float32Array(o))
        }
        getFade() {
            return 1
        }
        getMatrix() {
            return this.matrix
        }
        destroy() {
            this.vertexBuffer.destroy(), this.normalBuffer.destroy()
        }
    }

    function assert(e, t) {
        if (!e) throw t
    }

    function getNextPixel(e, t, n) {
        const r = [e[0] < t[0] ? 1 : -1, e[1] < t[1] ? 1 : -1],
            i = n[0] + (e[0] < t[0] ? 1 : 0),
            o = n[1] + (e[1] < t[1] ? 1 : 0),
            a = (i - e[0]) / (t[0] - e[0]),
            s = (o - e[1]) / (t[1] - e[1]);
        return (a <= 0 || a > 1) && (s <= 0 || s > 1) ? [void 0, void 0] : a <= 0 || a > 1 ? [n[0], n[1] + r[1]] : s <= 0 || s > 1 ? [n[0] + r[0], n[1]] : a < s ? [n[0] + r[0], n[1]] : [n[0], n[1] + r[1]]
    }

    function rasterTriangle(e, t, n) {
        const r = [e, t, n];
        if (r.sort((e, t) => e[1] < t[1]), e = r[0], t = r[1], n = r[2], e[1] == t[1]) return rasterFlatTriangle(e, t, n);
        if (t[1] == n[1]) return rasterFlatTriangle(t, n, e);
        const i = (t[1] - e[1]) / (n[1] - e[1]),
            o = [e[0] + i * (n[0] - e[0]), t[1]];
        return rasterFlatTriangle(o, t, e).concat(rasterFlatTriangle(o, t, n))
    }

    function rasterFlatTriangle(e, t, n) {
        const r = [];
        if (assert(e[1] === t[1], "not a flat triangle"), assert(n[1] !== e[1], "not a triangle"), assert(e[0] !== t[0], "not a triangle"), e[0] > t[0]) {
            const n = e;
            e = t, t = n
        }
        let i = [n[0] << 0, n[1] << 0],
            o = i.slice(0);
        r.push(i.slice(0));
        const a = n[1] < e[1] ? 1 : -1,
            s = i[1],
            l = (e[1] << 0) + a;
        let u, h;
        for (let c = s; c * a < l * a; c += a) {
            do {
                r.push(i.slice(0)), u = i, i = getNextPixel(n, e, i)
            } while (i[1] * a <= c * a);
            i = u;
            do {
                r.push(o.slice(0)), h = o, o = getNextPixel(n, t, o)
            } while (o[1] * a <= c * a);
            o = h;
            for (let e = i[0]; e <= o[0]; e++) r.push([e, c])
        }
        return r
    }

    function rasterConvexQuad(e) {
        assert(4 == e.length, "Error: Quadrilateral with more or less than four vertices");
        const t = rasterTriangle(e[0], e[1], e[2]),
            n = rasterTriangle(e[0], e[2], e[3]);
        return t.concat(n)
    }

    function normal(e, t, n) {
        const r = sub3(e, t),
            i = sub3(t, n);
        return norm3([r[1] * i[2] - r[2] * i[1], r[2] * i[0] - r[0] * i[2], r[0] * i[1] - r[1] * i[0]])
    }

    function getViewQuad(e, t, n) {
        const r = GLX.Matrix.invert(e);
        let i, o, a, s, l, u = getIntersectionWithXYPlane(-1, -1, r),
            h = getIntersectionWithXYPlane(1, -1, r),
            c = getIntersectionWithXYPlane(1, 1, r),
            f = getIntersectionWithXYPlane(-1, 1, r);
        if (u && h) return f && c || (l = dot2(i = norm2(sub2(a = getIntersectionWithXYPlane(-1, -.9, r), u)), n), f = add2(u, mul2scalar(i, t / l)), l = dot2(o = norm2(sub2(s = getIntersectionWithXYPlane(1, -.9, r), h)), n), c = add2(h, mul2scalar(o, t / l))), dot2(n, sub2(f, u)) > t && (l = dot2(i = norm2(sub2(f, u)), n), f = add2(u, mul2scalar(i, t / l))), dot2(n, sub2(c, h)) > t && (l = dot2(o = norm2(sub2(c, h)), n), c = add2(h, mul2scalar(o, t / l))), [u, h, c, f]
    }

    function getCoveringOrthoProjection(e, t, n, r, i) {
        const o = transformVec3(t.data, e[0]);
        let a = o[0],
            s = o[0],
            l = o[1],
            u = o[1];
        return e.forEach(e => {
            const n = transformVec3(t.data, e);
            a = Math.min(a, n[0]), s = Math.max(s, n[0]), l = Math.max(l, n[1]), u = Math.min(u, n[1])
        }), new GLX.Matrix.Ortho(a, s, l, u, n, r)
    }

    function transformVec3(e, t) {
        const n = t[0] * e[0] + t[1] * e[4] + t[2] * e[8] + e[12],
            r = t[0] * e[1] + t[1] * e[5] + t[2] * e[9] + e[13],
            i = t[0] * e[2] + t[1] * e[6] + t[2] * e[10] + e[14],
            o = t[0] * e[3] + t[1] * e[7] + t[2] * e[11] + e[15];
        return [n / o, r / o, i / o]
    }

    function getIntersectionWithXYPlane(e, t, n) {
        const r = transformVec3(n, [e, t, 0]),
            i = sub3(transformVec3(n, [e, t, 1]), r);
        if (i[2] >= 0) return;
        const o = add3(r, mul3scalar(i, -r[2] / i[2]));
        return [o[0], o[1]]
    }

    function getTileSizeOnScreen(e, t, n, r) {
        const i = tile2lon(e, n),
            o = tile2lat(t, n),
            a = new GLX.Matrix;
        a.translateBy((i - APP.position.longitude) * METERS_PER_DEGREE_LONGITUDE, (APP.position.latitude - o) * METERS_PER_DEGREE_LATITUDE, 0);
        const s = getTileSizeInMeters(APP.position.latitude, n),
            l = GLX.Matrix.multiply(a, r);
        return getConvexQuadArea([transformVec3(l, [0, 0, 0]), transformVec3(l, [s, 0, 0]), transformVec3(l, [0, s, 0]), transformVec3(l, [s, s, 0])].map(e => (e[0] = (e[0] + 1) / 2 * APP.width, e[1] = (e[1] + 1) / 2 * APP.height, e)))
    }

    function getTriangleArea(e, t, n) {
        const r = len2(sub2(e, t)),
            i = len2(sub2(e, n)),
            o = len2(sub2(t, n)),
            a = .5 * (r + i + o);
        return Math.sqrt(a * (a - r) * (a - i) * (a - o))
    }

    function getConvexQuadArea(e) {
        return getTriangleArea(e[0], e[1], e[2]) + getTriangleArea(e[0], e[2], e[3])
    }

    function getTileSizeInMeters(e, t) {
        return EARTH_CIRCUMFERENCE_IN_METERS * Math.cos(e / 180 * Math.PI) / Math.pow(2, t)
    }

    function getPositionFromLocal(e) {
        return {
            longitude: APP.position.longitude + e[0] / METERS_PER_DEGREE_LONGITUDE,
            latitude: APP.position.latitude - e[1] / METERS_PER_DEGREE_LATITUDE
        }
    }

    function getTilePositionFromLocal(e, t) {
        const n = getPositionFromLocal(e);
        return project([n.longitude, n.latitude], 1 << t)
    }

    function project(e, t = 1) {
        return [(e[0] / 360 + .5) * t, (1 - Math.log(Math.tan(e[1] * Math.PI / 180) + 1 / Math.cos(e[1] * Math.PI / 180)) / Math.PI) / 2 * t]
    }

    function tile2lon(e, t) {
        return e / Math.pow(2, t) * 360 - 180
    }

    function tile2lat(e, t) {
        const n = Math.PI - 2 * Math.PI * e / Math.pow(2, t);
        return 180 / Math.PI * Math.atan(.5 * (Math.exp(n) - Math.exp(-n)))
    }

    function len2(e) {
        return Math.sqrt(e[0] * e[0] + e[1] * e[1])
    }

    function dot2(e, t) {
        return e[0] * t[0] + e[1] * t[1]
    }

    function sub2(e, t) {
        return [e[0] - t[0], e[1] - t[1]]
    }

    function add2(e, t) {
        return [e[0] + t[0], e[1] + t[1]]
    }

    function mul2scalar(e, t) {
        return [e[0] * t, e[1] * t]
    }

    function norm2(e) {
        const t = len2(e);
        return [e[0] / t, e[1] / t]
    }

    function dot3(e, t) {
        return e[0] * t[0] + e[1] * t[1] + e[2] * t[2]
    }

    function sub3(e, t) {
        return [e[0] - t[0], e[1] - t[1], e[2] - t[2]]
    }

    function add3(e, t) {
        return [e[0] + t[0], e[1] + t[1], e[2] + t[2]]
    }

    function add3scalar(e, t) {
        return [e[0] + t, e[1] + t, e[2] + t]
    }

    function mul3scalar(e, t) {
        return [e[0] * t, e[1] * t, e[2] * t]
    }

    function len3(e) {
        return Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2])
    }

    function squaredLength(e) {
        return e[0] * e[0] + e[1] * e[1] + e[2] * e[2]
    }

    function norm3(e) {
        const t = len3(e);
        return [e[0] / t, e[1] / t, e[2] / t]
    }

    function dist3(e, t) {
        return len3(sub3(e, t))
    }

    function equal3(e, t) {
        return e[0] === t[0] && e[1] === t[1] && e[2] === t[2]
    }
    class View {
        getViewQuad() {
            return getViewQuad(this.viewProjMatrix.data, this.fogDistance + this.fogBlurDistance, this.viewDirOnMap)
        }
        start() {
            this.shadowsEnabled = !0, GL.depthTextureExtension || (console.warn("Shadows are disabled because your GPU does not support WEBGL_depth_texture"), this.shadowsEnabled = !1), this.setupViewport(), GL.cullFace(GL.BACK), GL.enable(GL.CULL_FACE), GL.enable(GL.DEPTH_TEST), this.Picking = new View.Picking, this.Horizon = new View.Horizon, this.Buildings = new View.Buildings, this.Markers = new View.MarkersSimple, this.Basemap = new View.Basemap, this.Overlay = new View.Overlay, this.ambientMap = new View.AmbientMap, this.blurredAmbientMap = new View.Blur, this.MapShadows = new View.MapShadows, this.shadowsEnabled && (this.cameraGBuffer = new View.DepthNormal, this.sunGBuffer = new View.DepthNormal), this.speedUp(), this.renderFrame()
        }
        renderFrame() {
            APP.zoom >= APP.minZoom && APP.zoom <= APP.maxZoom && requestAnimationFrame(() => {
                this.setupViewport(), GL.clearColor(this.fogColor[0], this.fogColor[1], this.fogColor[2], 0), GL.clear(GL.COLOR_BUFFER_BIT | GL.DEPTH_BUFFER_BIT);
                const e = [APP.width, APP.height];
                if (this.shadowsEnabled) {
                    const t = this.getViewQuad();
                    View.Sun.updateView(t), this.Horizon.updateGeometry(t), this.cameraGBuffer.render(this.viewMatrix, this.projMatrix, e, !0), this.sunGBuffer.render(View.Sun.viewMatrix, View.Sun.projMatrix, [SHADOW_DEPTH_MAP_SIZE, SHADOW_DEPTH_MAP_SIZE]), this.ambientMap.render(this.cameraGBuffer.framebuffer.depthTexture, this.cameraGBuffer.framebuffer.renderTexture, e, 2), this.blurredAmbientMap.render(this.ambientMap.framebuffer.renderTexture, e), this.Buildings.render(this.sunGBuffer.framebuffer), this.Markers.render(this.sunGBuffer.framebuffer), this.Basemap.render(), GL.enable(GL.BLEND), GL.blendFuncSeparate(GL.ZERO, GL.SRC_COLOR, GL.ZERO, GL.ONE), this.MapShadows.render(this.sunGBuffer.framebuffer, .5), this.Overlay.render(this.blurredAmbientMap.framebuffer.renderTexture, e), GL.blendFuncSeparate(GL.ONE_MINUS_DST_ALPHA, GL.DST_ALPHA, GL.ONE, GL.ONE), GL.disable(GL.DEPTH_TEST), this.Horizon.render(), GL.enable(GL.DEPTH_TEST), GL.disable(GL.BLEND)
                } else this.Buildings.render(), this.Markers.render(), GL.enable(GL.BLEND), GL.blendFuncSeparate(GL.ONE_MINUS_DST_ALPHA, GL.DST_ALPHA, GL.ONE, GL.ONE), GL.disable(GL.DEPTH_TEST), this.Horizon.render(), GL.disable(GL.BLEND), GL.enable(GL.DEPTH_TEST), this.Basemap.render();
                this.isFast ? this.renderFrame() : setTimeout(() => {
                    this.renderFrame()
                }, 250)
            })
        }
        setupViewport() {
            GL.canvas.width !== APP.width && (GL.canvas.width = APP.width), GL.canvas.height !== APP.height && (GL.canvas.height = APP.height);
            const e = 1.3567 * Math.pow(2, APP.zoom - 17),
                t = APP.width,
                n = APP.height;
            GL.viewport(0, 0, t, n), this.viewMatrix = (new GLX.Matrix).rotateZ(APP.rotation).rotateX(APP.tilt).translateBy(0, 8 / e, 0).translateBy(0, 0, -1220 / e), this.viewDirOnMap = [Math.sin(APP.rotation / 180 * Math.PI), -Math.cos(APP.rotation / 180 * Math.PI)];
            const r = 1024 / (2 * Math.tan(.125 * Math.PI)),
                i = 2 * Math.atan(n / 2 / r) / Math.PI * 180;
            this.nearPlane = 1, this.farPlane = 3e4, this.projMatrix = (new GLX.Matrix).translateTo(0, -n / (2 * e), 0).scale(1, -1, 1).multiply(new GLX.Matrix.Perspective(i, t / n, this.nearPlane, this.farPlane)).translateBy(0, -1, 0), this.viewProjMatrix = new GLX.Matrix(GLX.Matrix.multiply(this.viewMatrix, this.projMatrix)), this.lowerLeftOnMap = getIntersectionWithXYPlane(-1, -1, GLX.Matrix.invert(this.viewProjMatrix.data)), void 0 !== this.lowerLeftOnMap && (this.fogDistance = 5e3, this.fogBlurDistance = 1e4)
        }
        speedUp() {
            this.isFast = !0, clearTimeout(this.speedTimer), this.speedTimer = setTimeout(() => {
                this.isFast = !1
            }, 1e3)
        }
        destroy() {
            this.Picking.destroy(), this.Horizon.destroy(), this.Buildings.destroy(), this.Markers.destroy(), this.Basemap.destroy(), this.MapShadows.destroy(), this.cameraGBuffer && this.cameraGBuffer.destroy(), this.sunGBuffer && this.sunGBuffer.destroy(), this.ambientMap.destroy(), this.blurredAmbientMap.destroy(), clearTimeout(this.speedTimer)
        }
    }
    View.Picking = class {
        constructor() {
            this.featuresShader = new GLX.Shader({
                source: shaders.picking,
                attributes: ["aPosition", "aPickingColor", "aZScale"],
                uniforms: ["uModelMatrix", "uMatrix", "uFogDistance", "uFade", "uIndex"]
            }), this.markersShader = new GLX.Shader({
                source: shaders.markers_picking,
                attributes: ["aPosition"],
                uniforms: ["uPickingColor", "uModelMatrix", "uProjMatrix", "uViewMatrix", "uFogDistance", "uIndex"]
            }), this.size = [512, 512], this.framebuffer = new GLX.Framebuffer(this.size[0], this.size[1])
        }
        renderFeatures() {
            const e = this.featuresShader;
            e.enable(), e.setParam("uFogDistance", "1f", APP.view.fogDistance);
            const t = [];
            return APP.features.forEach(n => {
                if (APP.zoom < n.minZoom || APP.zoom > n.maxZoom) return;
                let r = n.getMatrix();
                r && (t.push(n.items), e.setParam("uFade", "1f", n.getFade()), e.setParam("uIndex", "1f", t.length / 256), e.setMatrix("uModelMatrix", "4fv", r.data), e.setMatrix("uMatrix", "4fv", GLX.Matrix.multiply(r, APP.view.viewProjMatrix)), e.setBuffer("aPosition", n.vertexBuffer), e.setBuffer("aPickingColor", n.pickingBuffer), e.setBuffer("aZScale", n.zScaleBuffer), GL.drawArrays(GL.TRIANGLES, 0, n.vertexBuffer.numItems))
            }), e.disable(), t
        }
        renderMarkers(e) {
            const t = this.markersShader;
            t.enable(), t.setParam("uFogDistance", "1f", APP.view.fogDistance);
            const n = [];
            return APP.markers.forEach((r, i) => {
                let o = r.getMatrix();
                n.push(r), t.setParam("uIndex", "1f", (e + 1) / 256), t.setMatrix("uModelMatrix", "4fv", o.data), t.setMatrix("uViewMatrix", "4fv", APP.view.viewMatrix.data), t.setMatrix("uProjMatrix", "4fv", APP.view.projMatrix.data), t.setBuffer("aPosition", r.icon.vertexBuffer);
                const a = [0, (255 & ++i) / 255, (i >> 8 & 255) / 255];
                t.setParam("uPickingColor", "3fv", a), GL.drawArrays(GL.TRIANGLES, 0, r.icon.vertexBuffer.numItems)
            }), t.disable(), n
        }
        findFeatures(e, t, n) {
            if (!e[t] || !e[t][n]) return;
            const r = e[t][n],
                i = [],
                o = r.properties.building || r.id;
            return APP.features.forEach(e => {
                e.items.forEach(e => {
                    e.id !== o && e.properties.building !== o || i.some(t => t.id === e.id) || i.push({
                        id: e.id,
                        properties: e.properties
                    })
                })
            }), i
        }
        getTarget(e, t, n) {
            requestAnimationFrame(() => {
                const r = {};
                GL.viewport(0, 0, this.size[0], this.size[1]), this.framebuffer.enable(), GL.clearColor(0, 0, 0, 1), GL.clear(GL.COLOR_BUFFER_BIT | GL.DEPTH_BUFFER_BIT);
                const i = this.renderFeatures(),
                    o = this.renderMarkers(i.length);
                GL.viewport(0, 0, APP.width, APP.height);
                const a = e / APP.width * this.size[0] << 0,
                    s = t / APP.height * this.size[1] << 0,
                    l = this.framebuffer.getPixel(a, this.size[1] - 1 - s);
                if (this.framebuffer.disable(), l) {
                    const e = l[0] - 1,
                        t = (l[1] | l[2] << 8) - 1;
                    r.features = this.findFeatures(i, e, t), r.marker = o[t] && o[t].data
                }
                n(r)
            })
        }
        destroy() {
            this.featuresShader.destroy(), this.markersShader.destroy(), this.framebuffer.destroy()
        }
    }, View.Sun = class {
        static setDate(e) {
            const t = suncalc(e, APP.position.latitude, APP.position.longitude);
            this.direction = [-Math.sin(t.azimuth) * Math.cos(t.altitude), Math.cos(t.azimuth) * Math.cos(t.altitude), Math.sin(t.altitude)];
            const n = t.azimuth / (Math.PI / 180),
                r = 90 - t.altitude / (Math.PI / 180);
            this.viewMatrix = (new GLX.Matrix).rotateZ(n).rotateX(r).translateTo(0, 0, -5e3).scale(1, -1, 1)
        }
        static updateView(e) {
            this.projMatrix = getCoveringOrthoProjection(substituteZCoordinate(e, 0).concat(substituteZCoordinate(e, SHADOW_MAP_MAX_BUILDING_HEIGHT)), this.viewMatrix, 1e3, 7500), this.viewProjMatrix = new GLX.Matrix(GLX.Matrix.multiply(this.viewMatrix, this.projMatrix))
        }
    }, View.Buildings = class {
        constructor() {
            this.shader = APP.view.shadowsEnabled ? new GLX.Shader({
                source: shaders.buildings_with_shadows,
                attributes: ["aPosition", "aTexCoord", "aColor", "aNormal", "aHeight", "aTintColor", "aZScale"],
                uniforms: ["uFogDistance", "uFogBlurDistance", "uLightColor", "uLightDirection", "uLowerEdgePoint", "uMatrix", "uModelMatrix", "uSunMatrix", "uShadowTexIndex", "uShadowTexDimensions", "uFade", "uViewDirOnMap", "uWallTexIndex"]
            }) : new GLX.Shader({
                source: shaders.buildings,
                attributes: ["aPosition", "aTexCoord", "aColor", "aNormal", "aHeight", "aTintColor", "aZScale"],
                uniforms: ["uModelMatrix", "uViewDirOnMap", "uMatrix", "uNormalTransform", "uLightColor", "uLightDirection", "uLowerEdgePoint", "uFogDistance", "uFogBlurDistance", "uFade", "uWallTexIndex"]
            }), this.wallTexture = new GLX.texture.Image, this.wallTexture.color([1, 1, 1]), this.wallTexture.load(BUILDING_TEXTURE)
        }
        render(e) {
            const t = this.shader;
            if (t.enable(), t.setParam("uFogDistance", "1f", APP.view.fogDistance), t.setParam("uFogBlurDistance", "1f", APP.view.fogBlurDistance), t.setParam("uLightColor", "3fv", [.5, .5, .5]), t.setParam("uLightDirection", "3fv", View.Sun.direction), t.setParam("uLowerEdgePoint", "2fv", APP.view.lowerLeftOnMap), t.setParam("uViewDirOnMap", "2fv", APP.view.viewDirOnMap), !APP.view.shadowsEnabled) {
                const e = new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
                t.setMatrix("uNormalTransform", "3fv", e)
            }
            t.setTexture("uWallTexIndex", 0, this.wallTexture), e && (t.setParam("uShadowTexDimensions", "2fv", [e.width, e.height]), t.setTexture("uShadowTexIndex", 1, e.depthTexture)), APP.features.forEach(e => {
                if (APP.zoom < e.minZoom || APP.zoom > e.maxZoom) return;
                const n = e.getMatrix();
                n && (t.setParam("uFade", "1f", e.getFade()), t.setMatrix("uModelMatrix", "4fv", n.data), t.setMatrix("uMatrix", "4fv", GLX.Matrix.multiply(n, APP.view.viewProjMatrix)), APP.view.shadowsEnabled && t.setMatrix("uSunMatrix", "4fv", GLX.Matrix.multiply(n, View.Sun.viewProjMatrix)), t.setBuffer("aPosition", e.vertexBuffer), t.setBuffer("aTexCoord", e.texCoordBuffer), t.setBuffer("aNormal", e.normalBuffer), t.setBuffer("aColor", e.colorBuffer), t.setBuffer("aHeight", e.heightBuffer), t.setBuffer("aTintColor", e.tintBuffer), t.setBuffer("aZScale", e.zScaleBuffer), GL.drawArrays(GL.TRIANGLES, 0, e.vertexBuffer.numItems))
            }), t.disable()
        }
        destroy() {}
    }, View.Markers = class {
        constructor() {
            this.shader = new GLX.Shader({
                source: shaders.markers,
                attributes: ["aPosition"],
                uniforms: ["uFogDistance", "uFogBlurDistance", "uLightColor", "uLightDirection", "uLowerEdgePoint", "uModelMatrix", "uSunMatrix", "uShadowTexIndex", "uShadowTexDimensions", "uViewDirOnMap", "uProjMatrix", "uViewMatrix", "uColor"]
            })
        }
        render(e) {
            const t = this.shader;
            t.enable(), t.setParam("uFogDistance", "1f", APP.view.fogDistance), t.setParam("uFogBlurDistance", "1f", APP.view.fogBlurDistance), t.setParam("uLightColor", "3fv", [.5, .5, .5]), t.setParam("uLightDirection", "3fv", View.Sun.direction), t.setParam("uLowerEdgePoint", "2fv", APP.view.lowerLeftOnMap), t.setParam("uViewDirOnMap", "2fv", APP.view.viewDirOnMap), t.setParam("uShadowTexDimensions", "2fv", [e.width, e.height]), t.setTexture("uShadowTexIndex", 1, e.depthTexture), t.setMatrix("uViewMatrix", "4fv", APP.view.viewMatrix.data), t.setMatrix("uProjMatrix", "4fv", APP.view.projMatrix.data), APP.markers.forEach(e => {
                const n = e.getMatrix();
                t.setMatrix("uModelMatrix", "4fv", n.data), t.setMatrix("uSunMatrix", "4fv", GLX.Matrix.multiply(n, View.Sun.viewProjMatrix)), t.setBuffer("aPosition", e.icon.vertexBuffer), t.setParam("uColor", "3fv", e.color), GL.drawArrays(GL.TRIANGLES, 0, e.icon.vertexBuffer.numItems)
            }), t.disable()
        }
        destroy() {
            this.shader.destroy()
        }
    }, View.MarkersSimple = class {
        constructor() {
            this.shader = new GLX.Shader({
                source: shaders.markers_simple,
                attributes: ["aPosition"],
                uniforms: ["uProjMatrix", "uViewMatrix", "uModelMatrix", "uColor"]
            })
        }
        render() {
            const e = this.shader;
            e.enable(), e.setMatrix("uViewMatrix", "4fv", APP.view.viewMatrix.data), e.setMatrix("uProjMatrix", "4fv", APP.view.projMatrix.data), APP.markers.forEach(t => {
                e.setMatrix("uModelMatrix", "4fv", t.getMatrix().data), e.setBuffer("aPosition", t.icon.vertexBuffer), e.setParam("uColor", "3fv", t.color), GL.drawArrays(GL.TRIANGLES, 0, t.icon.vertexBuffer.numItems)
            }), e.disable()
        }
        destroy() {
            this.shader.destroy()
        }
    }, View.MapShadows = class {
        constructor() {
            this.shader = new GLX.Shader({
                source: shaders.basemap_with_shadows,
                attributes: ["aPosition", "aNormal"],
                uniforms: ["uModelMatrix", "uViewDirOnMap", "uMatrix", "uDirToSun", "uLowerEdgePoint", "uFogDistance", "uFogBlurDistance", "uShadowTexDimensions", "uShadowStrength", "uShadowTexIndex", "uSunMatrix"]
            }), this.mapPlane = new MapPlane
        }
        render(e, t) {
            const n = this.mapPlane;
            if (APP.zoom < n.minZoom || APP.zoom > n.maxZoom) return;
            const r = this.shader;
            let i;
            r.enable(), GL.disable(GL.CULL_FACE), r.setParam("uDirToSun", "3fv", View.Sun.direction), r.setParam("uViewDirOnMap", "2fv", APP.view.viewDirOnMap), r.setParam("uLowerEdgePoint", "2fv", APP.view.lowerLeftOnMap), r.setParam("uFogDistance", "1f", APP.view.fogDistance), r.setParam("uFogBlurDistance", "1f", APP.view.fogBlurDistance), r.setParam("uShadowTexDimensions", "2fv", [e.width, e.height]), r.setParam("uShadowStrength", "1f", t), r.setTexture("uShadowTexIndex", 0, e.depthTexture), (i = n.getMatrix()) && (r.setMatrix("uModelMatrix", "4fv", i.data), r.setMatrix("uMatrix", "4fv", GLX.Matrix.multiply(i, APP.view.viewProjMatrix)), r.setMatrix("uSunMatrix", "4fv", GLX.Matrix.multiply(i, View.Sun.viewProjMatrix)), r.setBuffer("aPosition", n.vertexBuffer), r.setBuffer("aNormal", n.normalBuffer), GL.drawArrays(GL.TRIANGLES, 0, n.vertexBuffer.numItems), r.disable())
        }
        destroy() {
            this.mapPlane.destroy()
        }
    }, View.Basemap = class {
        constructor() {
            this.shader = new GLX.Shader({
                source: shaders.basemap,
                attributes: ["aPosition", "aTexCoord"],
                uniforms: ["uViewMatrix", "uModelMatrix", "uTexIndex", "uFogDistance", "uFogBlurDistance", "uLowerEdgePoint", "uViewDirOnMap"]
            })
        }
        render() {
            const e = APP.basemapGrid;
            if (!e) return;
            if (APP.zoom < e.minZoom || APP.zoom > e.maxZoom) return;
            const t = this.shader;
            t.enable(), t.setParam("uFogDistance", "1f", APP.view.fogDistance), t.setParam("uFogBlurDistance", "1f", APP.view.fogBlurDistance), t.setParam("uLowerEdgePoint", "2fv", APP.view.lowerLeftOnMap), t.setParam("uViewDirOnMap", "2fv", APP.view.viewDirOnMap);
            const n = Math.round(APP.zoom);
            let r;
            for (let t in e.visibleTiles) {
                if ((r = e.tiles[t]) && r.isReady) {
                    this.renderTile(r);
                    continue
                }
                const i = [r.x / 2 << 0, r.y / 2 << 0, n - 1].join(",");
                if (e.tiles[i] && e.tiles[i].isReady) {
                    this.renderTile(e.tiles[i]);
                    continue
                }
                const o = [
                    [2 * r.x, 2 * r.y, r.zoom + 1].join(","), [2 * r.x + 1, 2 * r.y, r.zoom + 1].join(","), [2 * r.x, 2 * r.y + 1, r.zoom + 1].join(","), [2 * r.x + 1, 2 * r.y + 1, r.zoom + 1].join(",")
                ];
                for (let t = 0; t < 4; t++) e.tiles[o[t]] && e.tiles[o[t]].isReady && this.renderTile(e.tiles[o[t]])
            }
            t.disable()
        }
        renderTile(e) {
            const t = this.shader,
                n = new GLX.Matrix;
            n.translateBy((e.longitude - APP.position.longitude) * METERS_PER_DEGREE_LONGITUDE, (-e.latitude + APP.position.latitude) * METERS_PER_DEGREE_LATITUDE, 0), GL.enable(GL.POLYGON_OFFSET_FILL), GL.polygonOffset(MAX_USED_ZOOM_LEVEL - e.zoom, MAX_USED_ZOOM_LEVEL - e.zoom), t.setMatrix("uModelMatrix", "4fv", n.data), t.setMatrix("uViewMatrix", "4fv", GLX.Matrix.multiply(n, APP.view.viewProjMatrix)), t.setBuffer("aPosition", e.vertexBuffer), t.setBuffer("aTexCoord", e.texCoordBuffer), t.setTexture("uTexIndex", 0, e.texture), GL.drawArrays(GL.TRIANGLE_STRIP, 0, e.vertexBuffer.numItems), GL.disable(GL.POLYGON_OFFSET_FILL)
        }
        destroy() {}
    }, View.HudRect = class {
        constructor() {
            this.shader = new GLX.Shader({
                source: shaders.texture,
                attributes: ["aPosition", "aTexCoord"],
                uniforms: ["uMatrix", "uTexIndex"]
            });
            const e = this.createGeometry();
            this.vertexBuffer = new GLX.Buffer(3, new Float32Array(e.vertices)), this.texCoordBuffer = new GLX.Buffer(2, new Float32Array(e.texCoords))
        }
        createGeometry() {
            const e = [],
                t = [];
            return e.push(0, 0, 1e-5, 1, 0, 1e-5, 1, 1, 1e-5), e.push(0, 0, 1e-5, 1, 1, 1e-5, 0, 1, 1e-5), t.push(.5, .5, 1, .5, 1, 1), t.push(.5, .5, 1, 1, .5, 1), {
                vertices: e,
                texCoords: t
            }
        }
        render(e) {
            const t = this.shader;
            t.enable(), GL.uniformMatrix4fv(t.uniforms.uMatrix, !1, GLX.Matrix.identity().data), this.vertexBuffer.enable(), GL.vertexAttribPointer(t.attributes.aPosition, this.vertexBuffer.itemSize, GL.FLOAT, !1, 0, 0), this.texCoordBuffer.enable(), GL.vertexAttribPointer(t.attributes.aTexCoord, this.texCoordBuffer.itemSize, GL.FLOAT, !1, 0, 0), e.enable(0), GL.uniform1i(t.uniforms.uTexIndex, 0), GL.drawArrays(GL.TRIANGLES, 0, this.vertexBuffer.numItems), t.disable()
        }
        destroy() {
            this.shader.destroy(), this.vertexBuffer.destroy(), this.texCoordBuffer.destroy()
        }
    }, View.DepthNormal = class {
        constructor() {
            this.shader = new GLX.Shader({
                source: shaders.depth_normal,
                attributes: ["aPosition", "aNormal", "aZScale"],
                uniforms: ["uMatrix", "uModelMatrix", "uNormalMatrix", "uFade", "uFogDistance", "uFogBlurDistance", "uViewDirOnMap", "uLowerEdgePoint"]
            }), this.framebuffer = new GLX.Framebuffer(128, 128, !0), this.mapPlane = new MapPlane
        }
        render(e, t, n) {
            const r = this.shader,
                i = this.framebuffer,
                o = new GLX.Matrix(GLX.Matrix.multiply(e, t));
            i.setSize(n[0], n[1]), r.enable(), i.enable(), GL.viewport(0, 0, n[0], n[1]), GL.clearColor(0, 0, 0, 1), GL.clear(GL.COLOR_BUFFER_BIT | GL.DEPTH_BUFFER_BIT), r.setParam("uViewDirOnMap", "2fv", APP.view.viewDirOnMap), r.setParam("uLowerEdgePoint", "2fv", APP.view.lowerLeftOnMap), r.setParam("uFogDistance", "1f", APP.view.fogDistance), r.setParam("uFogBlurDistance", "1f", APP.view.fogBlurDistance), APP.features.items.concat([this.mapPlane]).forEach(t => {
                if (APP.zoom < t.minZoom || APP.zoom > t.maxZoom) return;
                const n = t.getMatrix();
                n && (r.setParam("uFade", "1f", t.getFade()), r.setMatrix("uMatrix", "4fv", GLX.Matrix.multiply(n, o)), r.setMatrix("uModelMatrix", "4fv", n.data), r.setMatrix("uNormalMatrix", "3fv", GLX.Matrix.transpose3(GLX.Matrix.invert3(GLX.Matrix.multiply(n, e)))), r.setBuffer("aPosition", t.vertexBuffer), r.setBuffer("aNormal", t.normalBuffer), r.setBuffer("aZScale", t.zScaleBuffer), GL.drawArrays(GL.TRIANGLES, 0, t.vertexBuffer.numItems))
            }), r.disable(), i.disable(), GL.viewport(0, 0, APP.width, APP.height)
        }
        destroy() {
            this.shader.destroy(), this.framebuffer.destroy(), this.mapPlane.destroy()
        }
    }, View.AmbientMap = class {
        constructor() {
            this.shader = new GLX.Shader({
                source: shaders.ambient_from_depth,
                attributes: ["aPosition", "aTexCoord"],
                uniforms: ["uInverseTexSize", "uNearPlane", "uFarPlane", "uDepthTexIndex", "uFogTexIndex", "uEffectStrength"]
            }), this.framebuffer = new GLX.Framebuffer(128, 128), this.vertexBuffer = new GLX.Buffer(3, new Float32Array([-1, -1, 1e-5, 1, -1, 1e-5, 1, 1, 1e-5, -1, -1, 1e-5, 1, 1, 1e-5, -1, 1, 1e-5])), this.texCoordBuffer = new GLX.Buffer(2, new Float32Array([0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1]))
        }
        render(e, t, n, r) {
            const i = this.shader,
                o = this.framebuffer;
            void 0 === r && (r = 1), o.setSize(n[0], n[1]), GL.viewport(0, 0, n[0], n[1]), i.enable(), o.enable(), GL.clearColor(1, 0, 0, 1), GL.clear(GL.COLOR_BUFFER_BIT | GL.DEPTH_BUFFER_BIT), i.setParam("uInverseTexSize", "2fv", [1 / n[0], 1 / n[1]]), i.setParam("uEffectStrength", "1f", r), i.setParam("uNearPlane", "1f", APP.view.nearPlane), i.setParam("uFarPlane", "1f", APP.view.farPlane), i.setBuffer("aPosition", this.vertexBuffer), i.setBuffer("aTexCoord", this.texCoordBuffer), i.setTexture("uDepthTexIndex", 0, e), i.setTexture("uFogTexIndex", 1, t), GL.drawArrays(GL.TRIANGLES, 0, this.vertexBuffer.numItems), i.disable(), o.disable(), GL.viewport(0, 0, APP.width, APP.height)
        }
        destroy() {
            this.shader.destroy(), this.framebuffer.destroy(), this.vertexBuffer.destroy(), this.texCoordBuffer.destroy()
        }
    }, View.Overlay = class {
        constructor() {
            const e = this.createGeometry();
            this.vertexBuffer = new GLX.Buffer(3, new Float32Array(e.vertices)), this.texCoordBuffer = new GLX.Buffer(2, new Float32Array(e.texCoords)), this.shader = new GLX.Shader({
                source: shaders.texture,
                attributes: ["aPosition", "aTexCoord"],
                uniforms: ["uMatrix", "uTexIndex"]
            })
        }
        createGeometry() {
            const e = [],
                t = [];
            return e.push(-1, -1, 1e-5, 1, -1, 1e-5, 1, 1, 1e-5), e.push(-1, -1, 1e-5, 1, 1, 1e-5, -1, 1, 1e-5), t.push(0, 0, 1, 0, 1, 1), t.push(0, 0, 1, 1, 0, 1), {
                vertices: e,
                texCoords: t
            }
        }
        render(e) {
            const t = this.shader;
            t.enable(), GL.disable(GL.DEPTH_TEST), t.setMatrix("uMatrix", "4fv", GLX.Matrix.identity().data), t.setBuffer("aPosition", this.vertexBuffer), t.setBuffer("aTexCoord", this.texCoordBuffer), t.setTexture("uTexIndex", 0, e), GL.drawArrays(GL.TRIANGLES, 0, this.vertexBuffer.numItems), GL.enable(GL.DEPTH_TEST), t.disable()
        }
        destroy() {
            this.vertexBuffer.destroy(), this.texCoordBuffer.destroy(), this.shader.destroy()
        }
    }, View.Horizon = class {
        constructor() {
            this.HORIZON_HEIGHT = 2e3, this.skyShader = new GLX.Shader({
                source: shaders.horizon,
                attributes: ["aPosition"],
                uniforms: ["uAbsoluteHeight", "uMatrix", "uFogColor"]
            }), this.v1 = this.v2 = this.v3 = this.v4 = [!1, !1, !1], this.updateGeometry([
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]
            ]), this.floorShader = new GLX.Shader({
                source: shaders.flat_color,
                attributes: ["aPosition"],
                uniforms: ["uColor", "uMatrix"]
            })
        }
        updateGeometry(e) {
            let t = [e[3][0], e[3][1], 0],
                n = [e[2][0], e[2][1], 0],
                r = [e[2][0], e[2][1], this.HORIZON_HEIGHT],
                i = [e[3][0], e[3][1], this.HORIZON_HEIGHT];
            if (equal3(t, this.v1) && equal3(n, this.v2) && equal3(r, this.v3) && equal3(i, this.v4)) return;
            this.v1 = t, this.v2 = n, this.v3 = r, this.v4 = i, this.skyVertexBuffer && this.skyVertexBuffer.destroy();
            const o = [...t, ...n, ...r, ...t, ...r, ...i];
            this.skyVertexBuffer = new GLX.Buffer(3, new Float32Array(o)), t = [e[0][0], e[0][1], 1], n = [e[1][0], e[1][1], 1], r = [e[2][0], e[2][1], 1], i = [e[3][0], e[3][1], 1], this.floorVertexBuffer && this.floorVertexBuffer.destroy(), this.floorVertexBuffer = new GLX.Buffer(3, new Float32Array([...t, ...n, ...r, ...i]))
        }
        render() {
            const e = this.skyShader,
                t = this.floorShader,
                n = APP.view.fogColor;
            e.enable(), e.setParam("uFogColor", "3fv", n), e.setParam("uAbsoluteHeight", "1f", 10 * this.HORIZON_HEIGHT), e.setMatrix("uMatrix", "4fv", APP.view.viewProjMatrix.data), e.setBuffer("aPosition", this.skyVertexBuffer), GL.drawArrays(GL.TRIANGLES, 0, this.skyVertexBuffer.numItems), e.disable(), t.enable(), t.setParam("uColor", "4fv", [...n, 1]), t.setMatrix("uMatrix", "4fv", APP.view.viewProjMatrix.data), t.setBuffer("aPosition", this.floorVertexBuffer), GL.drawArrays(GL.TRIANGLE_FAN, 0, this.floorVertexBuffer.numItems), t.disable()
        }
        destroy() {
            this.skyVertexBuffer.destroy(), this.skyShader.destroy(), this.floorVertexBuffer.destroy(), this.floorShader.destroy()
        }
    }, View.Blur = class {
        constructor() {
            this.shader = new GLX.Shader({
                source: shaders.blur,
                attributes: ["aPosition", "aTexCoord"],
                uniforms: ["uInverseTexSize", "uTexIndex"]
            }), this.framebuffer = new GLX.Framebuffer(128, 128), this.vertexBuffer = new GLX.Buffer(3, new Float32Array([-1, -1, 1e-5, 1, -1, 1e-5, 1, 1, 1e-5, -1, -1, 1e-5, 1, 1, 1e-5, -1, 1, 1e-5])), this.texCoordBuffer = new GLX.Buffer(2, new Float32Array([0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1]))
        }
        render(e, t) {
            this.framebuffer.setSize(t[0], t[1]), GL.viewport(0, 0, t[0], t[1]), this.shader.enable(), this.framebuffer.enable(), GL.clearColor(1, 0, 0, 1), GL.clear(GL.COLOR_BUFFER_BIT | GL.DEPTH_BUFFER_BIT), this.shader.setParam("uInverseTexSize", "2fv", [1 / this.framebuffer.width, 1 / this.framebuffer.height]), this.shader.setBuffer("aPosition", this.vertexBuffer), this.shader.setBuffer("aTexCoord", this.texCoordBuffer), this.shader.setTexture("uTexIndex", 0, e), GL.drawArrays(GL.TRIANGLES, 0, this.vertexBuffer.numItems), this.shader.disable(), this.framebuffer.disable(), GL.viewport(0, 0, APP.width, APP.height)
        }
        destroy() {
            this.shader.destroy(), this.framebuffer.destroy(), this.vertexBuffer.destroy(), this.texCoordBuffer.destroy()
        }
    }, OSMBuildings.VERSION = "4.1.1"
}();