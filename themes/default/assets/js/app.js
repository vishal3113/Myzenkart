/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssanimations-csscolumns-customelements-flexbox-history-picture-pointerevents-postmessage-sizes-srcset-webgl-websockets-webworkers-addtest-domprefixes-hasevent-mq-prefixedcssvalue-prefixes-setclasses-testallprops-testprop-teststyles !*/
!function (e, t, n) { function r(e, t) { return typeof e === t } function o() { var e, t, n, o, i, s, a; for (var l in C) if (C.hasOwnProperty(l)) { if (e = [], t = C[l], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length)) for (n = 0; n < t.options.aliases.length; n++)e.push(t.options.aliases[n].toLowerCase()); for (o = r(t.fn, "function") ? t.fn() : t.fn, i = 0; i < e.length; i++)s = e[i], a = s.split("."), 1 === a.length ? Modernizr[a[0]] = o : (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[a[0]][a[1]] = o), w.push((o ? "" : "no-") + a.join("-")) } } function i(e) { var t = S.className, n = Modernizr._config.classPrefix || ""; if (x && (t = t.baseVal), Modernizr._config.enableJSClass) { var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)"); t = t.replace(r, "$1" + n + "js$2") } Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n), x ? S.className.baseVal = t : S.className = t) } function s(e, t) { if ("object" == typeof e) for (var n in e) P(e, n) && s(n, e[n]); else { e = e.toLowerCase(); var r = e.split("."), o = Modernizr[r[0]]; if (2 == r.length && (o = o[r[1]]), "undefined" != typeof o) return Modernizr; t = "function" == typeof t ? t() : t, 1 == r.length ? Modernizr[r[0]] = t : (!Modernizr[r[0]] || Modernizr[r[0]] instanceof Boolean || (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])), Modernizr[r[0]][r[1]] = t), i([(t && 0 != t ? "" : "no-") + r.join("-")]), Modernizr._trigger(e, t) } return Modernizr } function a() { return "function" != typeof t.createElement ? t.createElement(arguments[0]) : x ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments) } function l() { var e = t.body; return e || (e = a(x ? "svg" : "body"), e.fake = !0), e } function u(e, n, r, o) { var i, s, u, f, d = "modernizr", c = a("div"), p = l(); if (parseInt(r, 10)) for (; r--;)u = a("div"), u.id = o ? o[r] : d + (r + 1), c.appendChild(u); return i = a("style"), i.type = "text/css", i.id = "s" + d, (p.fake ? p : c).appendChild(i), p.appendChild(c), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(t.createTextNode(e)), c.id = d, p.fake && (p.style.background = "", p.style.overflow = "hidden", f = S.style.overflow, S.style.overflow = "hidden", S.appendChild(p)), s = n(c, e), p.fake ? (p.parentNode.removeChild(p), S.style.overflow = f, S.offsetHeight) : c.parentNode.removeChild(c), !!s } function f(e, t) { return !!~("" + e).indexOf(t) } function d(e) { return e.replace(/([A-Z])/g, function (e, t) { return "-" + t.toLowerCase() }).replace(/^ms-/, "-ms-") } function c(t, n, r) { var o; if ("getComputedStyle" in e) { o = getComputedStyle.call(e, t, n); var i = e.console; if (null !== o) r && (o = o.getPropertyValue(r)); else if (i) { var s = i.error ? "error" : "log"; i[s].call(i, "getComputedStyle returning null, its possible modernizr test results are inaccurate") } } else o = !n && t.currentStyle && t.currentStyle[r]; return o } function p(t, r) { var o = t.length; if ("CSS" in e && "supports" in e.CSS) { for (; o--;)if (e.CSS.supports(d(t[o]), r)) return !0; return !1 } if ("CSSSupportsRule" in e) { for (var i = []; o--;)i.push("(" + d(t[o]) + ":" + r + ")"); return i = i.join(" or "), u("@supports (" + i + ") { #modernizr { position: absolute; } }", function (e) { return "absolute" == c(e, null, "position") }) } return n } function m(e) { return e.replace(/([a-z])-([a-z])/g, function (e, t, n) { return t + n.toUpperCase() }).replace(/^-/, "") } function h(e, t, o, i) { function s() { u && (delete N.style, delete N.modElem) } if (i = r(i, "undefined") ? !1 : i, !r(o, "undefined")) { var l = p(e, o); if (!r(l, "undefined")) return l } for (var u, d, c, h, v, A = ["modernizr", "tspan", "samp"]; !N.style && A.length;)u = !0, N.modElem = a(A.shift()), N.style = N.modElem.style; for (c = e.length, d = 0; c > d; d++)if (h = e[d], v = N.style[h], f(h, "-") && (h = m(h)), N.style[h] !== n) { if (i || r(o, "undefined")) return s(), "pfx" == t ? h : !0; try { N.style[h] = o } catch (g) { } if (N.style[h] != v) return s(), "pfx" == t ? h : !0 } return s(), !1 } function v(e, t) { return function () { return e.apply(t, arguments) } } function A(e, t, n) { var o; for (var i in e) if (e[i] in t) return n === !1 ? e[i] : (o = t[e[i]], r(o, "function") ? v(o, n || t) : o); return !1 } function g(e, t, n, o, i) { var s = e.charAt(0).toUpperCase() + e.slice(1), a = (e + " " + O.join(s + " ") + s).split(" "); return r(t, "string") || r(t, "undefined") ? h(a, t, o, i) : (a = (e + " " + T.join(s + " ") + s).split(" "), A(a, t, n)) } function y(e, t, r) { return g(e, n, n, t, r) } var C = [], b = { _version: "3.6.0", _config: { classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0 }, _q: [], on: function (e, t) { var n = this; setTimeout(function () { t(n[e]) }, 0) }, addTest: function (e, t, n) { C.push({ name: e, fn: t, options: n }) }, addAsyncTest: function (e) { C.push({ name: null, fn: e }) } }, Modernizr = function () { }; Modernizr.prototype = b, Modernizr = new Modernizr; var w = [], S = t.documentElement, x = "svg" === S.nodeName.toLowerCase(), _ = "Moz O ms Webkit", T = b._config.usePrefixes ? _.toLowerCase().split(" ") : []; b._domPrefixes = T; var E = b._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""]; b._prefixes = E; var P; !function () { var e = {}.hasOwnProperty; P = r(e, "undefined") || r(e.call, "undefined") ? function (e, t) { return t in e && r(e.constructor.prototype[t], "undefined") } : function (t, n) { return e.call(t, n) } }(), b._l = {}, b.on = function (e, t) { this._l[e] || (this._l[e] = []), this._l[e].push(t), Modernizr.hasOwnProperty(e) && setTimeout(function () { Modernizr._trigger(e, Modernizr[e]) }, 0) }, b._trigger = function (e, t) { if (this._l[e]) { var n = this._l[e]; setTimeout(function () { var e, r; for (e = 0; e < n.length; e++)(r = n[e])(t) }, 0), delete this._l[e] } }, Modernizr._q.push(function () { b.addTest = s }); var k = function () { function e(e, t) { var o; return e ? (t && "string" != typeof t || (t = a(t || "div")), e = "on" + e, o = e in t, !o && r && (t.setAttribute || (t = a("div")), t.setAttribute(e, ""), o = "function" == typeof t[e], t[e] !== n && (t[e] = n), t.removeAttribute(e)), o) : !1 } var r = !("onblur" in t.documentElement); return e }(); b.hasEvent = k; var z = function () { var t = e.matchMedia || e.msMatchMedia; return t ? function (e) { var n = t(e); return n && n.matches || !1 } : function (t) { var n = !1; return u("@media " + t + " { #modernizr { position: absolute; } }", function (t) { n = "absolute" == (e.getComputedStyle ? e.getComputedStyle(t, null) : t.currentStyle).position }), n } }(); b.mq = z; var B = function (e, t) { var n = !1, r = a("div"), o = r.style; if (e in o) { var i = T.length; for (o[e] = t, n = o[e]; i-- && !n;)o[e] = "-" + T[i] + "-" + t, n = o[e] } return "" === n && (n = !1), n }; b.prefixedCSSValue = B; var O = b._config.usePrefixes ? _.split(" ") : []; b._cssomPrefixes = O; var L = { elem: a("modernizr") }; Modernizr._q.push(function () { delete L.elem }); var N = { style: L.elem.style }; Modernizr._q.unshift(function () { delete N.style }), b.testAllProps = g, b.testAllProps = y; b.testProp = function (e, t, r) { return h([e], n, t, r) }, b.testStyles = u; Modernizr.addTest("customelements", "customElements" in e), Modernizr.addTest("history", function () { var t = navigator.userAgent; return -1 === t.indexOf("Android 2.") && -1 === t.indexOf("Android 4.0") || -1 === t.indexOf("Mobile Safari") || -1 !== t.indexOf("Chrome") || -1 !== t.indexOf("Windows Phone") || "file:" === location.protocol ? e.history && "pushState" in e.history : !1 }), Modernizr.addTest("pointerevents", function () { var e = !1, t = T.length; for (e = Modernizr.hasEvent("pointerdown"); t-- && !e;)k(T[t] + "pointerdown") && (e = !0); return e }), Modernizr.addTest("postmessage", "postMessage" in e), Modernizr.addTest("webgl", function () { var t = a("canvas"), n = "probablySupportsContext" in t ? "probablySupportsContext" : "supportsContext"; return n in t ? t[n]("webgl") || t[n]("experimental-webgl") : "WebGLRenderingContext" in e }); var R = !1; try { R = "WebSocket" in e && 2 === e.WebSocket.CLOSING } catch (j) { } Modernizr.addTest("websockets", R), Modernizr.addTest("cssanimations", y("animationName", "a", !0)), function () { Modernizr.addTest("csscolumns", function () { var e = !1, t = y("columnCount"); try { e = !!t, e && (e = new Boolean(e)) } catch (n) { } return e }); for (var e, t, n = ["Width", "Span", "Fill", "Gap", "Rule", "RuleColor", "RuleStyle", "RuleWidth", "BreakBefore", "BreakAfter", "BreakInside"], r = 0; r < n.length; r++)e = n[r].toLowerCase(), t = y("column" + n[r]), ("breakbefore" === e || "breakafter" === e || "breakinside" == e) && (t = t || y(n[r])), Modernizr.addTest("csscolumns." + e, t) }(), Modernizr.addTest("flexbox", y("flexBasis", "1px", !0)), Modernizr.addTest("picture", "HTMLPictureElement" in e), Modernizr.addAsyncTest(function () { var e, t, n, r = a("img"), o = "sizes" in r; !o && "srcset" in r ? (t = "data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==", e = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", n = function () { s("sizes", 2 == r.width) }, r.onload = n, r.onerror = n, r.setAttribute("sizes", "9px"), r.srcset = e + " 1w," + t + " 8w", r.src = e) : s("sizes", o) }), Modernizr.addTest("srcset", "srcset" in a("img")), Modernizr.addTest("webworkers", "Worker" in e), o(), i(w), delete b.addTest, delete b.addAsyncTest; for (var M = 0; M < Modernizr._q.length; M++)Modernizr._q[M](); e.Modernizr = Modernizr }(window, document);

/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function (e, t) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) { if (!e.document) throw new Error("jQuery requires a window with a document"); return t(e) } : t(e) }("undefined" != typeof window ? window : this, function (e, t) { "use strict"; var n = [], r = e.document, i = Object.getPrototypeOf, o = n.slice, a = n.concat, s = n.push, u = n.indexOf, l = {}, c = l.toString, f = l.hasOwnProperty, p = f.toString, d = p.call(Object), h = {}, g = function e(t) { return "function" == typeof t && "number" != typeof t.nodeType }, y = function e(t) { return null != t && t === t.window }, v = { type: !0, src: !0, noModule: !0 }; function m(e, t, n) { var i, o = (t = t || r).createElement("script"); if (o.text = e, n) for (i in v) n[i] && (o[i] = n[i]); t.head.appendChild(o).parentNode.removeChild(o) } function x(e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e } var b = "3.3.1", w = function (e, t) { return new w.fn.init(e, t) }, T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g; w.fn = w.prototype = { jquery: "3.3.1", constructor: w, length: 0, toArray: function () { return o.call(this) }, get: function (e) { return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e] }, pushStack: function (e) { var t = w.merge(this.constructor(), e); return t.prevObject = this, t }, each: function (e) { return w.each(this, e) }, map: function (e) { return this.pushStack(w.map(this, function (t, n) { return e.call(t, n, t) })) }, slice: function () { return this.pushStack(o.apply(this, arguments)) }, first: function () { return this.eq(0) }, last: function () { return this.eq(-1) }, eq: function (e) { var t = this.length, n = +e + (e < 0 ? t : 0); return this.pushStack(n >= 0 && n < t ? [this[n]] : []) }, end: function () { return this.prevObject || this.constructor() }, push: s, sort: n.sort, splice: n.splice }, w.extend = w.fn.extend = function () { var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1; for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || g(a) || (a = {}), s === u && (a = this, s--); s < u; s++)if (null != (e = arguments[s])) for (t in e) n = a[t], a !== (r = e[t]) && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && w.isPlainObject(n) ? n : {}, a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r)); return a }, w.extend({ expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) { throw new Error(e) }, noop: function () { }, isPlainObject: function (e) { var t, n; return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || "function" == typeof (n = f.call(t, "constructor") && t.constructor) && p.call(n) === d) }, isEmptyObject: function (e) { var t; for (t in e) return !1; return !0 }, globalEval: function (e) { m(e) }, each: function (e, t) { var n, r = 0; if (C(e)) { for (n = e.length; r < n; r++)if (!1 === t.call(e[r], r, e[r])) break } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break; return e }, trim: function (e) { return null == e ? "" : (e + "").replace(T, "") }, makeArray: function (e, t) { var n = t || []; return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n }, inArray: function (e, t, n) { return null == t ? -1 : u.call(t, e, n) }, merge: function (e, t) { for (var n = +t.length, r = 0, i = e.length; r < n; r++)e[i++] = t[r]; return e.length = i, e }, grep: function (e, t, n) { for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++)(r = !t(e[o], o)) !== s && i.push(e[o]); return i }, map: function (e, t, n) { var r, i, o = 0, s = []; if (C(e)) for (r = e.length; o < r; o++)null != (i = t(e[o], o, n)) && s.push(i); else for (o in e) null != (i = t(e[o], o, n)) && s.push(i); return a.apply([], s) }, guid: 1, support: h }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) { l["[object " + t + "]"] = t.toLowerCase() }); function C(e) { var t = !!e && "length" in e && e.length, n = x(e); return !g(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e) } var E = function (e) { var t, n, r, i, o, a, s, u, l, c, f, p, d, h, g, y, v, m, x, b = "sizzle" + 1 * new Date, w = e.document, T = 0, C = 0, E = ae(), k = ae(), S = ae(), D = function (e, t) { return e === t && (f = !0), 0 }, N = {}.hasOwnProperty, A = [], j = A.pop, q = A.push, L = A.push, H = A.slice, O = function (e, t) { for (var n = 0, r = e.length; n < r; n++)if (e[n] === t) return n; return -1 }, P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", I = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]", W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)", $ = new RegExp(M + "+", "g"), B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"), F = new RegExp("^" + M + "*," + M + "*"), _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"), X = new RegExp(W), U = new RegExp("^" + R + "$"), V = { ID: new RegExp("^#(" + R + ")"), CLASS: new RegExp("^\\.(" + R + ")"), TAG: new RegExp("^(" + R + "|[*])"), ATTR: new RegExp("^" + I), PSEUDO: new RegExp("^" + W), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"), bool: new RegExp("^(?:" + P + ")$", "i"), needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i") }, G = /^(?:input|select|textarea|button)$/i, Y = /^h\d$/i, Q = /^[^{]+\{\s*\[native \w/, J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, K = /[+~]/, Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"), ee = function (e, t, n) { var r = "0x" + t - 65536; return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320) }, te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ne = function (e, t) { return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e }, re = function () { p() }, ie = me(function (e) { return !0 === e.disabled && ("form" in e || "label" in e) }, { dir: "parentNode", next: "legend" }); try { L.apply(A = H.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType } catch (e) { L = { apply: A.length ? function (e, t) { q.apply(e, H.call(t)) } : function (e, t) { var n = e.length, r = 0; while (e[n++] = t[r++]); e.length = n - 1 } } } function oe(e, t, r, i) { var o, s, l, c, f, h, v, m = t && t.ownerDocument, T = t ? t.nodeType : 9; if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r; if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) { if (11 !== T && (f = J.exec(e))) if (o = f[1]) { if (9 === T) { if (!(l = t.getElementById(o))) return r; if (l.id === o) return r.push(l), r } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r } else { if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r; if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r } if (n.qsa && !S[e + " "] && (!y || !y.test(e))) { if (1 !== T) m = t, v = e; else if ("object" !== t.nodeName.toLowerCase()) { (c = t.getAttribute("id")) ? c = c.replace(te, ne) : t.setAttribute("id", c = b), s = (h = a(e)).length; while (s--) h[s] = "#" + c + " " + ve(h[s]); v = h.join(","), m = K.test(e) && ge(t.parentNode) || t } if (v) try { return L.apply(r, m.querySelectorAll(v)), r } catch (e) { } finally { c === b && t.removeAttribute("id") } } } return u(e.replace(B, "$1"), t, r, i) } function ae() { var e = []; function t(n, i) { return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i } return t } function se(e) { return e[b] = !0, e } function ue(e) { var t = d.createElement("fieldset"); try { return !!e(t) } catch (e) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } } function le(e, t) { var n = e.split("|"), i = n.length; while (i--) r.attrHandle[n[i]] = t } function ce(e, t) { var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex; if (r) return r; if (n) while (n = n.nextSibling) if (n === t) return -1; return e ? 1 : -1 } function fe(e) { return function (t) { return "input" === t.nodeName.toLowerCase() && t.type === e } } function pe(e) { return function (t) { var n = t.nodeName.toLowerCase(); return ("input" === n || "button" === n) && t.type === e } } function de(e) { return function (t) { return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label" in t && t.disabled === e } } function he(e) { return se(function (t) { return t = +t, se(function (n, r) { var i, o = e([], n.length, t), a = o.length; while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i])) }) }) } function ge(e) { return e && "undefined" != typeof e.getElementsByTagName && e } n = oe.support = {}, o = oe.isXML = function (e) { var t = e && (e.ownerDocument || e).documentElement; return !!t && "HTML" !== t.nodeName }, p = oe.setDocument = function (e) { var t, i, a = e ? e.ownerDocument || e : w; return a !== d && 9 === a.nodeType && a.documentElement ? (d = a, h = d.documentElement, g = !o(d), w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = ue(function (e) { return e.className = "i", !e.getAttribute("className") }), n.getElementsByTagName = ue(function (e) { return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length }), n.getElementsByClassName = Q.test(d.getElementsByClassName), n.getById = ue(function (e) { return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length }), n.getById ? (r.filter.ID = function (e) { var t = e.replace(Z, ee); return function (e) { return e.getAttribute("id") === t } }, r.find.ID = function (e, t) { if ("undefined" != typeof t.getElementById && g) { var n = t.getElementById(e); return n ? [n] : [] } }) : (r.filter.ID = function (e) { var t = e.replace(Z, ee); return function (e) { var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id"); return n && n.value === t } }, r.find.ID = function (e, t) { if ("undefined" != typeof t.getElementById && g) { var n, r, i, o = t.getElementById(e); if (o) { if ((n = o.getAttributeNode("id")) && n.value === e) return [o]; i = t.getElementsByName(e), r = 0; while (o = i[r++]) if ((n = o.getAttributeNode("id")) && n.value === e) return [o] } return [] } }), r.find.TAG = n.getElementsByTagName ? function (e, t) { return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0 } : function (e, t) { var n, r = [], i = 0, o = t.getElementsByTagName(e); if ("*" === e) { while (n = o[i++]) 1 === n.nodeType && r.push(n); return r } return o }, r.find.CLASS = n.getElementsByClassName && function (e, t) { if ("undefined" != typeof t.getElementsByClassName && g) return t.getElementsByClassName(e) }, v = [], y = [], (n.qsa = Q.test(d.querySelectorAll)) && (ue(function (e) { h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + b + "-]").length || y.push("~="), e.querySelectorAll(":checked").length || y.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || y.push(".#.+[+~]") }), ue(function (e) { e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>"; var t = d.createElement("input"); t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:") })), (n.matchesSelector = Q.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue(function (e) { n.disconnectedMatch = m.call(e, "*"), m.call(e, "[s!='']:x"), v.push("!=", W) }), y = y.length && new RegExp(y.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(h.compareDocumentPosition), x = t || Q.test(h.contains) ? function (e, t) { var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode; return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r))) } : function (e, t) { if (t) while (t = t.parentNode) if (t === e) return !0; return !1 }, D = t ? function (e, t) { if (e === t) return f = !0, 0; var r = !e.compareDocumentPosition - !t.compareDocumentPosition; return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & r ? -1 : 1) } : function (e, t) { if (e === t) return f = !0, 0; var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t]; if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0; if (i === o) return ce(e, t); n = e; while (n = n.parentNode) a.unshift(n); n = t; while (n = n.parentNode) s.unshift(n); while (a[r] === s[r]) r++; return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0 }, d) : d }, oe.matches = function (e, t) { return oe(e, null, null, t) }, oe.matchesSelector = function (e, t) { if ((e.ownerDocument || e) !== d && p(e), t = t.replace(z, "='$1']"), n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!y || !y.test(t))) try { var r = m.call(e, t); if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r } catch (e) { } return oe(t, d, null, [e]).length > 0 }, oe.contains = function (e, t) { return (e.ownerDocument || e) !== d && p(e), x(e, t) }, oe.attr = function (e, t) { (e.ownerDocument || e) !== d && p(e); var i = r.attrHandle[t.toLowerCase()], o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0; return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null }, oe.escape = function (e) { return (e + "").replace(te, ne) }, oe.error = function (e) { throw new Error("Syntax error, unrecognized expression: " + e) }, oe.uniqueSort = function (e) { var t, r = [], i = 0, o = 0; if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(D), f) { while (t = e[o++]) t === e[o] && (i = r.push(o)); while (i--) e.splice(r[i], 1) } return c = null, e }, i = oe.getText = function (e) { var t, n = "", r = 0, o = e.nodeType; if (o) { if (1 === o || 9 === o || 11 === o) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling)n += i(e) } else if (3 === o || 4 === o) return e.nodeValue } else while (t = e[r++]) n += i(t); return n }, (r = oe.selectors = { cacheLength: 50, createPseudo: se, match: V, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function (e) { return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function (e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e }, PSEUDO: function (e) { var t, n = !e[6] && e[2]; return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } }, filter: { TAG: function (e) { var t = e.replace(Z, ee).toLowerCase(); return "*" === e ? function () { return !0 } : function (e) { return e.nodeName && e.nodeName.toLowerCase() === t } }, CLASS: function (e) { var t = E[e + " "]; return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, function (e) { return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "") }) }, ATTR: function (e, t, n) { return function (r) { var i = oe.attr(r, e); return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace($, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-")) } }, CHILD: function (e, t, n, r, i) { var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t; return 1 === r && 0 === i ? function (e) { return !!e.parentNode } : function (t, n, u) { var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling", y = t.parentNode, v = s && t.nodeName.toLowerCase(), m = !u && !s, x = !1; if (y) { if (o) { while (g) { p = t; while (p = p[g]) if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1; h = g = "only" === e && !h && "nextSibling" } return !0 } if (h = [a ? y.firstChild : y.lastChild], a && m) { x = (d = (l = (c = (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], p = d && y.childNodes[d]; while (p = ++d && p && p[g] || (x = d = 0) || h.pop()) if (1 === p.nodeType && ++x && p === t) { c[e] = [T, d, x]; break } } else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x) while (p = ++d && p && p[g] || (x = d = 0) || h.pop()) if ((s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) && ++x && (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p === t)) break; return (x -= i) === r || x % r == 0 && x / r >= 0 } } }, PSEUDO: function (e, t) { var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e); return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function (e, n) { var r, o = i(e, t), a = o.length; while (a--) e[r = O(e, o[a])] = !(n[r] = o[a]) }) : function (e) { return i(e, 0, n) }) : i } }, pseudos: { not: se(function (e) { var t = [], n = [], r = s(e.replace(B, "$1")); return r[b] ? se(function (e, t, n, i) { var o, a = r(e, null, i, []), s = e.length; while (s--) (o = a[s]) && (e[s] = !(t[s] = o)) }) : function (e, i, o) { return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop() } }), has: se(function (e) { return function (t) { return oe(e, t).length > 0 } }), contains: se(function (e) { return e = e.replace(Z, ee), function (t) { return (t.textContent || t.innerText || i(t)).indexOf(e) > -1 } }), lang: se(function (e) { return U.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(), function (t) { var n; do { if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-") } while ((t = t.parentNode) && 1 === t.nodeType); return !1 } }), target: function (t) { var n = e.location && e.location.hash; return n && n.slice(1) === t.id }, root: function (e) { return e === h }, focus: function (e) { return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) }, enabled: de(!1), disabled: de(!0), checked: function (e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected }, selected: function (e) { return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected }, empty: function (e) { for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeType < 6) return !1; return !0 }, parent: function (e) { return !r.pseudos.empty(e) }, header: function (e) { return Y.test(e.nodeName) }, input: function (e) { return G.test(e.nodeName) }, button: function (e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t }, text: function (e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase()) }, first: he(function () { return [0] }), last: he(function (e, t) { return [t - 1] }), eq: he(function (e, t, n) { return [n < 0 ? n + t : n] }), even: he(function (e, t) { for (var n = 0; n < t; n += 2)e.push(n); return e }), odd: he(function (e, t) { for (var n = 1; n < t; n += 2)e.push(n); return e }), lt: he(function (e, t, n) { for (var r = n < 0 ? n + t : n; --r >= 0;)e.push(r); return e }), gt: he(function (e, t, n) { for (var r = n < 0 ? n + t : n; ++r < t;)e.push(r); return e }) } }).pseudos.nth = r.pseudos.eq; for (t in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) r.pseudos[t] = fe(t); for (t in { submit: !0, reset: !0 }) r.pseudos[t] = pe(t); function ye() { } ye.prototype = r.filters = r.pseudos, r.setFilters = new ye, a = oe.tokenize = function (e, t) { var n, i, o, a, s, u, l, c = k[e + " "]; if (c) return t ? 0 : c.slice(0); s = e, u = [], l = r.preFilter; while (s) { n && !(i = F.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = _.exec(s)) && (n = i.shift(), o.push({ value: n, type: i[0].replace(B, " ") }), s = s.slice(n.length)); for (a in r.filter) !(i = V[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({ value: n, type: a, matches: i }), s = s.slice(n.length)); if (!n) break } return t ? s.length : s ? oe.error(e) : k(e, u).slice(0) }; function ve(e) { for (var t = 0, n = e.length, r = ""; t < n; t++)r += e[t].value; return r } function me(e, t, n) { var r = t.dir, i = t.next, o = i || r, a = n && "parentNode" === o, s = C++; return t.first ? function (t, n, i) { while (t = t[r]) if (1 === t.nodeType || a) return e(t, n, i); return !1 } : function (t, n, u) { var l, c, f, p = [T, s]; if (u) { while (t = t[r]) if ((1 === t.nodeType || a) && e(t, n, u)) return !0 } else while (t = t[r]) if (1 === t.nodeType || a) if (f = t[b] || (t[b] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t; else { if ((l = c[o]) && l[0] === T && l[1] === s) return p[2] = l[2]; if (c[o] = p, p[2] = e(t, n, u)) return !0 } return !1 } } function xe(e) { return e.length > 1 ? function (t, n, r) { var i = e.length; while (i--) if (!e[i](t, n, r)) return !1; return !0 } : e[0] } function be(e, t, n) { for (var r = 0, i = t.length; r < i; r++)oe(e, t[r], n); return n } function we(e, t, n, r, i) { for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s))); return a } function Te(e, t, n, r, i, o) { return r && !r[b] && (r = Te(r)), i && !i[b] && (i = Te(i, o)), se(function (o, a, s, u) { var l, c, f, p = [], d = [], h = a.length, g = o || be(t || "*", s.nodeType ? [s] : s, []), y = !e || !o && t ? g : we(g, p, e, s, u), v = n ? i || (o ? e : h || r) ? [] : a : y; if (n && n(y, v, s, u), r) { l = we(v, d), r(l, [], s, u), c = l.length; while (c--) (f = l[c]) && (v[d[c]] = !(y[d[c]] = f)) } if (o) { if (i || e) { if (i) { l = [], c = v.length; while (c--) (f = v[c]) && l.push(y[c] = f); i(null, v = [], l, u) } c = v.length; while (c--) (f = v[c]) && (l = i ? O(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f)) } } else v = we(v === a ? v.splice(h, v.length) : v), i ? i(null, a, v, u) : L.apply(a, v) }) } function Ce(e) { for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = me(function (e) { return e === t }, s, !0), f = me(function (e) { return O(t, e) > -1 }, s, !0), p = [function (e, n, r) { var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r)); return t = null, i }]; u < o; u++)if (n = r.relative[e[u].type]) p = [me(xe(p), n)]; else { if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) { for (i = ++u; i < o; i++)if (r.relative[e[i].type]) break; return Te(u > 1 && xe(p), u > 1 && ve(e.slice(0, u - 1).concat({ value: " " === e[u - 2].type ? "*" : "" })).replace(B, "$1"), n, u < i && Ce(e.slice(u, i)), i < o && Ce(e = e.slice(i)), i < o && ve(e)) } p.push(n) } return xe(p) } function Ee(e, t) { var n = t.length > 0, i = e.length > 0, o = function (o, a, s, u, c) { var f, h, y, v = 0, m = "0", x = o && [], b = [], w = l, C = o || i && r.find.TAG("*", c), E = T += null == w ? 1 : Math.random() || .1, k = C.length; for (c && (l = a === d || a || c); m !== k && null != (f = C[m]); m++) { if (i && f) { h = 0, a || f.ownerDocument === d || (p(f), s = !g); while (y = e[h++]) if (y(f, a || d, s)) { u.push(f); break } c && (T = E) } n && ((f = !y && f) && v--, o && x.push(f)) } if (v += m, n && m !== v) { h = 0; while (y = t[h++]) y(x, b, a, s); if (o) { if (v > 0) while (m--) x[m] || b[m] || (b[m] = j.call(u)); b = we(b) } L.apply(u, b), c && !o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u) } return c && (T = E, l = w), x }; return n ? se(o) : o } return s = oe.compile = function (e, t) { var n, r = [], i = [], o = S[e + " "]; if (!o) { t || (t = a(e)), n = t.length; while (n--) (o = Ce(t[n]))[b] ? r.push(o) : i.push(o); (o = S(e, Ee(i, r))).selector = e } return o }, u = oe.select = function (e, t, n, i) { var o, u, l, c, f, p = "function" == typeof e && e, d = !i && a(e = p.selector || e); if (n = n || [], 1 === d.length) { if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) { if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0])) return n; p && (t = t.parentNode), e = e.slice(u.shift().value.length) } o = V.needsContext.test(e) ? 0 : u.length; while (o--) { if (l = u[o], r.relative[c = l.type]) break; if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), K.test(u[0].type) && ge(t.parentNode) || t))) { if (u.splice(o, 1), !(e = i.length && ve(u))) return L.apply(n, i), n; break } } } return (p || s(e, d))(i, t, !g, n, !t || K.test(e) && ge(t.parentNode) || t), n }, n.sortStable = b.split("").sort(D).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ue(function (e) { return 1 & e.compareDocumentPosition(d.createElement("fieldset")) }), ue(function (e) { return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href") }) || le("type|href|height|width", function (e, t, n) { if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) }), n.attributes && ue(function (e) { return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") }) || le("value", function (e, t, n) { if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue }), ue(function (e) { return null == e.getAttribute("disabled") }) || le(P, function (e, t, n) { var r; if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null }), oe }(e); w.find = E, w.expr = E.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = E.uniqueSort, w.text = E.getText, w.isXMLDoc = E.isXML, w.contains = E.contains, w.escapeSelector = E.escape; var k = function (e, t, n) { var r = [], i = void 0 !== n; while ((e = e[t]) && 9 !== e.nodeType) if (1 === e.nodeType) { if (i && w(e).is(n)) break; r.push(e) } return r }, S = function (e, t) { for (var n = []; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e); return n }, D = w.expr.match.needsContext; function N(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() } var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i; function j(e, t, n) { return g(t) ? w.grep(e, function (e, r) { return !!t.call(e, r, e) !== n }) : t.nodeType ? w.grep(e, function (e) { return e === t !== n }) : "string" != typeof t ? w.grep(e, function (e) { return u.call(t, e) > -1 !== n }) : w.filter(t, e, n) } w.filter = function (e, t, n) { var r = t[0]; return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function (e) { return 1 === e.nodeType })) }, w.fn.extend({ find: function (e) { var t, n, r = this.length, i = this; if ("string" != typeof e) return this.pushStack(w(e).filter(function () { for (t = 0; t < r; t++)if (w.contains(i[t], this)) return !0 })); for (n = this.pushStack([]), t = 0; t < r; t++)w.find(e, i[t], n); return r > 1 ? w.uniqueSort(n) : n }, filter: function (e) { return this.pushStack(j(this, e || [], !1)) }, not: function (e) { return this.pushStack(j(this, e || [], !0)) }, is: function (e) { return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1).length } }); var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/; (w.fn.init = function (e, t, n) { var i, o; if (!e) return this; if (n = n || q, "string" == typeof e) { if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e); if (i[1]) { if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), A.test(i[1]) && w.isPlainObject(t)) for (i in t) g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]); return this } return (o = r.getElementById(i[2])) && (this[0] = o, this.length = 1), this } return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this) }).prototype = w.fn, q = w(r); var H = /^(?:parents|prev(?:Until|All))/, O = { children: !0, contents: !0, next: !0, prev: !0 }; w.fn.extend({ has: function (e) { var t = w(e, this), n = t.length; return this.filter(function () { for (var e = 0; e < n; e++)if (w.contains(this, t[e])) return !0 }) }, closest: function (e, t) { var n, r = 0, i = this.length, o = [], a = "string" != typeof e && w(e); if (!D.test(e)) for (; r < i; r++)for (n = this[r]; n && n !== t; n = n.parentNode)if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) { o.push(n); break } return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o) }, index: function (e) { return e ? "string" == typeof e ? u.call(w(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function (e, t) { return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t)))) }, addBack: function (e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) } }); function P(e, t) { while ((e = e[t]) && 1 !== e.nodeType); return e } w.each({ parent: function (e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function (e) { return k(e, "parentNode") }, parentsUntil: function (e, t, n) { return k(e, "parentNode", n) }, next: function (e) { return P(e, "nextSibling") }, prev: function (e) { return P(e, "previousSibling") }, nextAll: function (e) { return k(e, "nextSibling") }, prevAll: function (e) { return k(e, "previousSibling") }, nextUntil: function (e, t, n) { return k(e, "nextSibling", n) }, prevUntil: function (e, t, n) { return k(e, "previousSibling", n) }, siblings: function (e) { return S((e.parentNode || {}).firstChild, e) }, children: function (e) { return S(e.firstChild) }, contents: function (e) { return N(e, "iframe") ? e.contentDocument : (N(e, "template") && (e = e.content || e), w.merge([], e.childNodes)) } }, function (e, t) { w.fn[e] = function (n, r) { var i = w.map(this, t, n); return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), this.length > 1 && (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()), this.pushStack(i) } }); var M = /[^\x20\t\r\n\f]+/g; function R(e) { var t = {}; return w.each(e.match(M) || [], function (e, n) { t[n] = !0 }), t } w.Callbacks = function (e) { e = "string" == typeof e ? R(e) : w.extend({}, e); var t, n, r, i, o = [], a = [], s = -1, u = function () { for (i = i || e.once, r = t = !0; a.length; s = -1) { n = a.shift(); while (++s < o.length) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1) } e.memory || (n = !1), t = !1, i && (o = n ? [] : "") }, l = { add: function () { return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) { w.each(n, function (n, r) { g(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== x(r) && t(r) }) }(arguments), n && !t && u()), this }, remove: function () { return w.each(arguments, function (e, t) { var n; while ((n = w.inArray(t, o, n)) > -1) o.splice(n, 1), n <= s && s-- }), this }, has: function (e) { return e ? w.inArray(e, o) > -1 : o.length > 0 }, empty: function () { return o && (o = []), this }, disable: function () { return i = a = [], o = n = "", this }, disabled: function () { return !o }, lock: function () { return i = a = [], n || t || (o = n = ""), this }, locked: function () { return !!i }, fireWith: function (e, n) { return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this }, fire: function () { return l.fireWith(this, arguments), this }, fired: function () { return !!r } }; return l }; function I(e) { return e } function W(e) { throw e } function $(e, t, n, r) { var i; try { e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r)) } catch (e) { n.apply(void 0, [e]) } } w.extend({ Deferred: function (t) { var n = [["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2], ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]], r = "pending", i = { state: function () { return r }, always: function () { return o.done(arguments).fail(arguments), this }, "catch": function (e) { return i.then(null, e) }, pipe: function () { var e = arguments; return w.Deferred(function (t) { w.each(n, function (n, r) { var i = g(e[r[4]]) && e[r[4]]; o[r[1]](function () { var e = i && i.apply(this, arguments); e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments) }) }), e = null }).promise() }, then: function (t, r, i) { var o = 0; function a(t, n, r, i) { return function () { var s = this, u = arguments, l = function () { var e, l; if (!(t < o)) { if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution"); l = e && ("object" == typeof e || "function" == typeof e) && e.then, g(l) ? i ? l.call(e, a(o, n, I, i), a(o, n, W, i)) : (o++, l.call(e, a(o, n, I, i), a(o, n, W, i), a(o, n, I, n.notifyWith))) : (r !== I && (s = void 0, u = [e]), (i || n.resolveWith)(s, u)) } }, c = i ? l : function () { try { l() } catch (e) { w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== W && (s = void 0, u = [e]), n.rejectWith(s, u)) } }; t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c)) } } return w.Deferred(function (e) { n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : I)), n[2][3].add(a(0, e, g(r) ? r : W)) }).promise() }, promise: function (e) { return null != e ? w.extend(e, i) : i } }, o = {}; return w.each(n, function (e, t) { var a = t[2], s = t[5]; i[t[1]] = a.add, s && a.add(function () { r = s }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function () { return o[t[0] + "With"](this === o ? void 0 : this, arguments), this }, o[t[0] + "With"] = a.fireWith }), i.promise(o), t && t.call(o, o), o }, when: function (e) { var t = arguments.length, n = t, r = Array(n), i = o.call(arguments), a = w.Deferred(), s = function (e) { return function (n) { r[e] = this, i[e] = arguments.length > 1 ? o.call(arguments) : n, --t || a.resolveWith(r, i) } }; if (t <= 1 && ($(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(i[n] && i[n].then))) return a.then(); while (n--) $(i[n], s(n), a.reject); return a.promise() } }); var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/; w.Deferred.exceptionHook = function (t, n) { e.console && e.console.warn && t && B.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n) }, w.readyException = function (t) { e.setTimeout(function () { throw t }) }; var F = w.Deferred(); w.fn.ready = function (e) { return F.then(e)["catch"](function (e) { w.readyException(e) }), this }, w.extend({ isReady: !1, readyWait: 1, ready: function (e) { (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || F.resolveWith(r, [w])) } }), w.ready.then = F.then; function _() { r.removeEventListener("DOMContentLoaded", _), e.removeEventListener("load", _), w.ready() } "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", _), e.addEventListener("load", _)); var z = function (e, t, n, r, i, o, a) { var s = 0, u = e.length, l = null == n; if ("object" === x(n)) { i = !0; for (s in n) z(e, t, s, n[s], !0, o, a) } else if (void 0 !== r && (i = !0, g(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) { return l.call(w(e), n) })), t)) for (; s < u; s++)t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n))); return i ? e : l ? t.call(e) : u ? t(e[0], n) : o }, X = /^-ms-/, U = /-([a-z])/g; function V(e, t) { return t.toUpperCase() } function G(e) { return e.replace(X, "ms-").replace(U, V) } var Y = function (e) { return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType }; function Q() { this.expando = w.expando + Q.uid++ } Q.uid = 1, Q.prototype = { cache: function (e) { var t = e[this.expando]; return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t }, set: function (e, t, n) { var r, i = this.cache(e); if ("string" == typeof t) i[G(t)] = n; else for (r in t) i[G(r)] = t[r]; return i }, get: function (e, t) { return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)] }, access: function (e, t, n) { return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t) }, remove: function (e, t) { var n, r = e[this.expando]; if (void 0 !== r) { if (void 0 !== t) { n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [t] : t.match(M) || []).length; while (n--) delete r[t[n]] } (void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]) } }, hasData: function (e) { var t = e[this.expando]; return void 0 !== t && !w.isEmptyObject(t) } }; var J = new Q, K = new Q, Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, ee = /[A-Z]/g; function te(e) { return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e) } function ne(e, t, n) { var r; if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) { try { n = te(n) } catch (e) { } K.set(e, t, n) } else n = void 0; return n } w.extend({ hasData: function (e) { return K.hasData(e) || J.hasData(e) }, data: function (e, t, n) { return K.access(e, t, n) }, removeData: function (e, t) { K.remove(e, t) }, _data: function (e, t, n) { return J.access(e, t, n) }, _removeData: function (e, t) { J.remove(e, t) } }), w.fn.extend({ data: function (e, t) { var n, r, i, o = this[0], a = o && o.attributes; if (void 0 === e) { if (this.length && (i = K.get(o), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) { n = a.length; while (n--) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = G(r.slice(5)), ne(o, r, i[r])); J.set(o, "hasDataAttrs", !0) } return i } return "object" == typeof e ? this.each(function () { K.set(this, e) }) : z(this, function (t) { var n; if (o && void 0 === t) { if (void 0 !== (n = K.get(o, e))) return n; if (void 0 !== (n = ne(o, e))) return n } else this.each(function () { K.set(this, e, t) }) }, null, t, arguments.length > 1, null, !0) }, removeData: function (e) { return this.each(function () { K.remove(this, e) }) } }), w.extend({ queue: function (e, t, n) { var r; if (e) return t = (t || "fx") + "queue", r = J.get(e, t), n && (!r || Array.isArray(n) ? r = J.access(e, t, w.makeArray(n)) : r.push(n)), r || [] }, dequeue: function (e, t) { t = t || "fx"; var n = w.queue(e, t), r = n.length, i = n.shift(), o = w._queueHooks(e, t), a = function () { w.dequeue(e, t) }; "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire() }, _queueHooks: function (e, t) { var n = t + "queueHooks"; return J.get(e, n) || J.access(e, n, { empty: w.Callbacks("once memory").add(function () { J.remove(e, [t + "queue", n]) }) }) } }), w.fn.extend({ queue: function (e, t) { var n = 2; return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function () { var n = w.queue(this, e, t); w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e) }) }, dequeue: function (e) { return this.each(function () { w.dequeue(this, e) }) }, clearQueue: function (e) { return this.queue(e || "fx", []) }, promise: function (e, t) { var n, r = 1, i = w.Deferred(), o = this, a = this.length, s = function () { --r || i.resolveWith(o, [o]) }; "string" != typeof e && (t = e, e = void 0), e = e || "fx"; while (a--) (n = J.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s)); return s(), i.promise(t) } }); var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"), oe = ["Top", "Right", "Bottom", "Left"], ae = function (e, t) { return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display") }, se = function (e, t, n, r) { var i, o, a = {}; for (o in t) a[o] = e.style[o], e.style[o] = t[o]; i = n.apply(e, r || []); for (o in t) e.style[o] = a[o]; return i }; function ue(e, t, n, r) { var i, o, a = 20, s = r ? function () { return r.cur() } : function () { return w.css(e, t, "") }, u = s(), l = n && n[3] || (w.cssNumber[t] ? "" : "px"), c = (w.cssNumber[t] || "px" !== l && +u) && ie.exec(w.css(e, t)); if (c && c[3] !== l) { u /= 2, l = l || c[3], c = +u || 1; while (a--) w.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o; c *= 2, w.style(e, t, c + l), n = n || [] } return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i } var le = {}; function ce(e) { var t, n = e.ownerDocument, r = e.nodeName, i = le[r]; return i || (t = n.body.appendChild(n.createElement(r)), i = w.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), le[r] = i, i) } function fe(e, t) { for (var n, r, i = [], o = 0, a = e.length; o < a; o++)(r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = J.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ae(r) && (i[o] = ce(r))) : "none" !== n && (i[o] = "none", J.set(r, "display", n))); for (o = 0; o < a; o++)null != i[o] && (e[o].style.display = i[o]); return e } w.fn.extend({ show: function () { return fe(this, !0) }, hide: function () { return fe(this) }, toggle: function (e) { return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () { ae(this) ? w(this).show() : w(this).hide() }) } }); var pe = /^(?:checkbox|radio)$/i, de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, he = /^$|^module$|\/(?:java|ecma)script/i, ge = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] }; ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td; function ye(e, t) { var n; return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && N(e, t) ? w.merge([e], n) : n } function ve(e, t) { for (var n = 0, r = e.length; n < r; n++)J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval")) } var me = /<|&#?\w+;/; function xe(e, t, n, r, i) { for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)if ((o = e[d]) || 0 === o) if ("object" === x(o)) w.merge(p, o.nodeType ? [o] : o); else if (me.test(o)) { a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2], c = u[0]; while (c--) a = a.lastChild; w.merge(p, a.childNodes), (a = f.firstChild).textContent = "" } else p.push(t.createTextNode(o)); f.textContent = "", d = 0; while (o = p[d++]) if (r && w.inArray(o, r) > -1) i && i.push(o); else if (l = w.contains(o.ownerDocument, o), a = ye(f.appendChild(o), "script"), l && ve(a), n) { c = 0; while (o = a[c++]) he.test(o.type || "") && n.push(o) } return f } !function () { var e = r.createDocumentFragment().appendChild(r.createElement("div")), t = r.createElement("input"); t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue }(); var be = r.documentElement, we = /^key/, Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Ce = /^([^.]*)(?:\.(.+)|)/; function Ee() { return !0 } function ke() { return !1 } function Se() { try { return r.activeElement } catch (e) { } } function De(e, t, n, r, i, o) { var a, s; if ("object" == typeof t) { "string" != typeof n && (r = r || n, n = void 0); for (s in t) De(e, s, n, r, t[s], o); return e } if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = ke; else if (!i) return e; return 1 === o && (a = i, (i = function (e) { return w().off(e), a.apply(this, arguments) }).guid = a.guid || (a.guid = w.guid++)), e.each(function () { w.event.add(this, t, i, r, n) }) } w.event = { global: {}, add: function (e, t, n, r, i) { var o, a, s, u, l, c, f, p, d, h, g, y = J.get(e); if (y) { n.handler && (n = (o = n).handler, i = o.selector), i && w.find.matchesSelector(be, i), n.guid || (n.guid = w.guid++), (u = y.events) || (u = y.events = {}), (a = y.handle) || (a = y.handle = function (t) { return "undefined" != typeof w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0 }), l = (t = (t || "").match(M) || [""]).length; while (l--) d = g = (s = Ce.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = w.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = w.event.special[d] || {}, c = w.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && w.expr.match.needsContext.test(i), namespace: h.join(".") }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), w.event.global[d] = !0) } }, remove: function (e, t, n, r, i) { var o, a, s, u, l, c, f, p, d, h, g, y = J.hasData(e) && J.get(e); if (y && (u = y.events)) { l = (t = (t || "").match(M) || [""]).length; while (l--) if (s = Ce.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) { f = w.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c)); a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || w.removeEvent(e, d, y.handle), delete u[d]) } else for (d in u) w.event.remove(e, d + t[l], n, r, !0); w.isEmptyObject(u) && J.remove(e, "handle events") } }, dispatch: function (e) { var t = w.event.fix(e), n, r, i, o, a, s, u = new Array(arguments.length), l = (J.get(this, "events") || {})[t.type] || [], c = w.event.special[t.type] || {}; for (u[0] = t, n = 1; n < arguments.length; n++)u[n] = arguments[n]; if (t.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) { s = w.event.handlers.call(this, t, l), n = 0; while ((o = s[n++]) && !t.isPropagationStopped()) { t.currentTarget = o.elem, r = 0; while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped()) t.rnamespace && !t.rnamespace.test(a.namespace) || (t.handleObj = a, t.data = a.data, void 0 !== (i = ((w.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation())) } return c.postDispatch && c.postDispatch.call(this, t), t.result } }, handlers: function (e, t) { var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target; if (u && l.nodeType && !("click" === e.type && e.button >= 1)) for (; l !== this; l = l.parentNode || this)if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) { for (o = [], a = {}, n = 0; n < u; n++)void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length), a[i] && o.push(r); o.length && s.push({ elem: l, handlers: o }) } return l = this, u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s }, addProp: function (e, t) { Object.defineProperty(w.Event.prototype, e, { enumerable: !0, configurable: !0, get: g(t) ? function () { if (this.originalEvent) return t(this.originalEvent) } : function () { if (this.originalEvent) return this.originalEvent[e] }, set: function (t) { Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) } }) }, fix: function (e) { return e[w.expando] ? e : new w.Event(e) }, special: { load: { noBubble: !0 }, focus: { trigger: function () { if (this !== Se() && this.focus) return this.focus(), !1 }, delegateType: "focusin" }, blur: { trigger: function () { if (this === Se() && this.blur) return this.blur(), !1 }, delegateType: "focusout" }, click: { trigger: function () { if ("checkbox" === this.type && this.click && N(this, "input")) return this.click(), !1 }, _default: function (e) { return N(e.target, "a") } }, beforeunload: { postDispatch: function (e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result) } } } }, w.removeEvent = function (e, t, n) { e.removeEventListener && e.removeEventListener(t, n) }, w.Event = function (e, t) { if (!(this instanceof w.Event)) return new w.Event(e, t); e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0 }, w.Event.prototype = { constructor: w.Event, isDefaultPrevented: ke, isPropagationStopped: ke, isImmediatePropagationStopped: ke, isSimulated: !1, preventDefault: function () { var e = this.originalEvent; this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault() }, stopPropagation: function () { var e = this.originalEvent; this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation() }, stopImmediatePropagation: function () { var e = this.originalEvent; this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation() } }, w.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function (e) { var t = e.button; return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which } }, w.event.addProp), w.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) { w.event.special[e] = { delegateType: t, bindType: t, handle: function (e) { var n, r = this, i = e.relatedTarget, o = e.handleObj; return i && (i === r || w.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n } } }), w.fn.extend({ on: function (e, t, n, r) { return De(this, e, t, n, r) }, one: function (e, t, n, r) { return De(this, e, t, n, r, 1) }, off: function (e, t, n) { var r, i; if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this; if ("object" == typeof e) { for (i in e) this.off(i, t, e[i]); return this } return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), this.each(function () { w.event.remove(this, e, n, t) }) } }); var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, Ae = /<script|<style|<link/i, je = /checked\s*(?:[^=]|=\s*.checked.)/i, qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g; function Le(e, t) { return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") ? w(e).children("tbody")[0] || e : e } function He(e) { return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e } function Oe(e) { return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e } function Pe(e, t) { var n, r, i, o, a, s, u, l; if (1 === t.nodeType) { if (J.hasData(e) && (o = J.access(e), a = J.set(t, o), l = o.events)) { delete a.handle, a.events = {}; for (i in l) for (n = 0, r = l[i].length; n < r; n++)w.event.add(t, i, l[i][n]) } K.hasData(e) && (s = K.access(e), u = w.extend({}, s), K.set(t, u)) } } function Me(e, t) { var n = t.nodeName.toLowerCase(); "input" === n && pe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue) } function Re(e, t, n, r) { t = a.apply([], t); var i, o, s, u, l, c, f = 0, p = e.length, d = p - 1, y = t[0], v = g(y); if (v || p > 1 && "string" == typeof y && !h.checkClone && je.test(y)) return e.each(function (i) { var o = e.eq(i); v && (t[0] = y.call(this, i, o.html())), Re(o, t, n, r) }); if (p && (i = xe(t, e[0].ownerDocument, !1, e, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r)) { for (u = (s = w.map(ye(i, "script"), He)).length; f < p; f++)l = i, f !== d && (l = w.clone(l, !0, !0), u && w.merge(s, ye(l, "script"))), n.call(e[f], l, f); if (u) for (c = s[s.length - 1].ownerDocument, w.map(s, Oe), f = 0; f < u; f++)l = s[f], he.test(l.type || "") && !J.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(l.src) : m(l.textContent.replace(qe, ""), c, l)) } return e } function Ie(e, t, n) { for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++)n || 1 !== r.nodeType || w.cleanData(ye(r)), r.parentNode && (n && w.contains(r.ownerDocument, r) && ve(ye(r, "script")), r.parentNode.removeChild(r)); return e } w.extend({ htmlPrefilter: function (e) { return e.replace(Ne, "<$1></$2>") }, clone: function (e, t, n) { var r, i, o, a, s = e.cloneNode(!0), u = w.contains(e.ownerDocument, e); if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e))) for (a = ye(s), r = 0, i = (o = ye(e)).length; r < i; r++)Me(o[r], a[r]); if (t) if (n) for (o = o || ye(e), a = a || ye(s), r = 0, i = o.length; r < i; r++)Pe(o[r], a[r]); else Pe(e, s); return (a = ye(s, "script")).length > 0 && ve(a, !u && ye(e, "script")), s }, cleanData: function (e) { for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++)if (Y(n)) { if (t = n[J.expando]) { if (t.events) for (r in t.events) i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle); n[J.expando] = void 0 } n[K.expando] && (n[K.expando] = void 0) } } }), w.fn.extend({ detach: function (e) { return Ie(this, e, !0) }, remove: function (e) { return Ie(this, e) }, text: function (e) { return z(this, function (e) { return void 0 === e ? w.text(this) : this.empty().each(function () { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e) }) }, null, e, arguments.length) }, append: function () { return Re(this, arguments, function (e) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e) }) }, prepend: function () { return Re(this, arguments, function (e) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var t = Le(this, e); t.insertBefore(e, t.firstChild) } }) }, before: function () { return Re(this, arguments, function (e) { this.parentNode && this.parentNode.insertBefore(e, this) }) }, after: function () { return Re(this, arguments, function (e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) }, empty: function () { for (var e, t = 0; null != (e = this[t]); t++)1 === e.nodeType && (w.cleanData(ye(e, !1)), e.textContent = ""); return this }, clone: function (e, t) { return e = null != e && e, t = null == t ? e : t, this.map(function () { return w.clone(this, e, t) }) }, html: function (e) { return z(this, function (e) { var t = this[0] || {}, n = 0, r = this.length; if (void 0 === e && 1 === t.nodeType) return t.innerHTML; if ("string" == typeof e && !Ae.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) { e = w.htmlPrefilter(e); try { for (; n < r; n++)1 === (t = this[n] || {}).nodeType && (w.cleanData(ye(t, !1)), t.innerHTML = e); t = 0 } catch (e) { } } t && this.empty().append(e) }, null, e, arguments.length) }, replaceWith: function () { var e = []; return Re(this, arguments, function (t) { var n = this.parentNode; w.inArray(this, e) < 0 && (w.cleanData(ye(this)), n && n.replaceChild(t, this)) }, e) } }), w.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) { w.fn[e] = function (e) { for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++)n = a === o ? this : this.clone(!0), w(i[a])[t](n), s.apply(r, n.get()); return this.pushStack(r) } }); var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"), $e = function (t) { var n = t.ownerDocument.defaultView; return n && n.opener || (n = e), n.getComputedStyle(t) }, Be = new RegExp(oe.join("|"), "i"); !function () { function t() { if (c) { l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", be.appendChild(l).appendChild(c); var t = e.getComputedStyle(c); i = "1%" !== t.top, u = 12 === n(t.marginLeft), c.style.right = "60%", s = 36 === n(t.right), o = 36 === n(t.width), c.style.position = "absolute", a = 36 === c.offsetWidth || "absolute", be.removeChild(l), c = null } } function n(e) { return Math.round(parseFloat(e)) } var i, o, a, s, u, l = r.createElement("div"), c = r.createElement("div"); c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(h, { boxSizingReliable: function () { return t(), o }, pixelBoxStyles: function () { return t(), s }, pixelPosition: function () { return t(), i }, reliableMarginLeft: function () { return t(), u }, scrollboxSize: function () { return t(), a } })) }(); function Fe(e, t, n) { var r, i, o, a, s = e.style; return (n = n || $e(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (a = w.style(e, t)), !h.pixelBoxStyles() && We.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a } function _e(e, t) { return { get: function () { if (!e()) return (this.get = t).apply(this, arguments); delete this.get } } } var ze = /^(none|table(?!-c[ea]).+)/, Xe = /^--/, Ue = { position: "absolute", visibility: "hidden", display: "block" }, Ve = { letterSpacing: "0", fontWeight: "400" }, Ge = ["Webkit", "Moz", "ms"], Ye = r.createElement("div").style; function Qe(e) { if (e in Ye) return e; var t = e[0].toUpperCase() + e.slice(1), n = Ge.length; while (n--) if ((e = Ge[n] + t) in Ye) return e } function Je(e) { var t = w.cssProps[e]; return t || (t = w.cssProps[e] = Qe(e) || e), t } function Ke(e, t, n) { var r = ie.exec(t); return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t } function Ze(e, t, n, r, i, o) { var a = "width" === t ? 1 : 0, s = 0, u = 0; if (n === (r ? "border" : "content")) return 0; for (; a < 4; a += 2)"margin" === n && (u += w.css(e, n + oe[a], !0, i)), r ? ("content" === n && (u -= w.css(e, "padding" + oe[a], !0, i)), "margin" !== n && (u -= w.css(e, "border" + oe[a] + "Width", !0, i))) : (u += w.css(e, "padding" + oe[a], !0, i), "padding" !== n ? u += w.css(e, "border" + oe[a] + "Width", !0, i) : s += w.css(e, "border" + oe[a] + "Width", !0, i)); return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5))), u } function et(e, t, n) { var r = $e(e), i = Fe(e, t, r), o = "border-box" === w.css(e, "boxSizing", !1, r), a = o; if (We.test(i)) { if (!n) return i; i = "auto" } return a = a && (h.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === w.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), a, r, i) + "px" } w.extend({ cssHooks: { opacity: { get: function (e, t) { if (t) { var n = Fe(e, "opacity"); return "" === n ? "1" : n } } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: {}, style: function (e, t, n, r) { if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) { var i, o, a, s = G(t), u = Xe.test(t), l = e.style; if (u || (t = Je(s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t]; "string" == (o = typeof n) && (i = ie.exec(n)) && i[1] && (n = ue(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (w.cssNumber[s] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n)) } }, css: function (e, t, n, r) { var i, o, a, s = G(t); return Xe.test(t) || (t = Je(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Fe(e, t, r)), "normal" === i && t in Ve && (i = Ve[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i } }), w.each(["height", "width"], function (e, t) { w.cssHooks[t] = { get: function (e, n, r) { if (n) return !ze.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : se(e, Ue, function () { return et(e, t, r) }) }, set: function (e, n, r) { var i, o = $e(e), a = "border-box" === w.css(e, "boxSizing", !1, o), s = r && Ze(e, t, r, a, o); return a && h.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)), s && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Ke(e, n, s) } } }), w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function (e, t) { if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, { marginLeft: 0 }, function () { return e.getBoundingClientRect().left })) + "px" }), w.each({ margin: "", padding: "", border: "Width" }, function (e, t) { w.cssHooks[e + t] = { expand: function (n) { for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)i[e + oe[r] + t] = o[r] || o[r - 2] || o[0]; return i } }, "margin" !== e && (w.cssHooks[e + t].set = Ke) }), w.fn.extend({ css: function (e, t) { return z(this, function (e, t, n) { var r, i, o = {}, a = 0; if (Array.isArray(t)) { for (r = $e(e), i = t.length; a < i; a++)o[t[a]] = w.css(e, t[a], !1, r); return o } return void 0 !== n ? w.style(e, t, n) : w.css(e, t) }, e, t, arguments.length > 1) } }); function tt(e, t, n, r, i) { return new tt.prototype.init(e, t, n, r, i) } w.Tween = tt, tt.prototype = { constructor: tt, init: function (e, t, n, r, i, o) { this.elem = e, this.prop = n, this.easing = i || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (w.cssNumber[n] ? "" : "px") }, cur: function () { var e = tt.propHooks[this.prop]; return e && e.get ? e.get(this) : tt.propHooks._default.get(this) }, run: function (e) { var t, n = tt.propHooks[this.prop]; return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : tt.propHooks._default.set(this), this } }, tt.prototype.init.prototype = tt.prototype, tt.propHooks = { _default: { get: function (e) { var t; return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 }, set: function (e) { w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit) } } }, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = { set: function (e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, w.easing = { linear: function (e) { return e }, swing: function (e) { return .5 - Math.cos(e * Math.PI) / 2 }, _default: "swing" }, w.fx = tt.prototype.init, w.fx.step = {}; var nt, rt, it = /^(?:toggle|show|hide)$/, ot = /queueHooks$/; function at() { rt && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval), w.fx.tick()) } function st() { return e.setTimeout(function () { nt = void 0 }), nt = Date.now() } function ut(e, t) { var n, r = 0, i = { height: e }; for (t = t ? 1 : 0; r < 4; r += 2 - t)i["margin" + (n = oe[r])] = i["padding" + n] = e; return t && (i.opacity = i.width = e), i } function lt(e, t, n) { for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++)if (r = i[o].call(n, t, e)) return r } function ct(e, t, n) { var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t, p = this, d = {}, h = e.style, g = e.nodeType && ae(e), y = J.get(e, "fxshow"); n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () { a.unqueued || s() }), a.unqueued++, p.always(function () { p.always(function () { a.unqueued--, w.queue(e, "fx").length || a.empty.fire() }) })); for (r in t) if (i = t[r], it.test(i)) { if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) { if ("show" !== i || !y || void 0 === y[r]) continue; g = !0 } d[r] = y && y[r] || w.style(e, r) } if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) { f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = y && y.display) && (l = J.get(e, "display")), "none" === (c = w.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = w.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (p.done(function () { h.display = l }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () { h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2] })), u = !1; for (r in d) u || (y ? "hidden" in y && (g = y.hidden) : y = J.access(e, "fxshow", { display: l }), o && (y.hidden = !g), g && fe([e], !0), p.done(function () { g || fe([e]), J.remove(e, "fxshow"); for (r in d) w.style(e, r, d[r]) })), u = lt(g ? y[r] : 0, r, p), r in y || (y[r] = u.start, g && (u.end = u.start, u.start = 0)) } } function ft(e, t) { var n, r, i, o, a; for (n in e) if (r = G(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = w.cssHooks[r]) && "expand" in a) { o = a.expand(o), delete e[r]; for (n in o) n in e || (e[n] = o[n], t[n] = i) } else t[r] = i } function pt(e, t, n) { var r, i, o = 0, a = pt.prefilters.length, s = w.Deferred().always(function () { delete u.elem }), u = function () { if (i) return !1; for (var t = nt || st(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++)l.tweens[o].run(r); return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1) }, l = s.promise({ elem: e, props: w.extend({}, t), opts: w.extend(!0, { specialEasing: {}, easing: w.easing._default }, n), originalProperties: t, originalOptions: n, startTime: nt || st(), duration: n.duration, tweens: [], createTween: function (t, n) { var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing); return l.tweens.push(r), r }, stop: function (t) { var n = 0, r = t ? l.tweens.length : 0; if (i) return this; for (i = !0; n < r; n++)l.tweens[n].run(1); return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this } }), c = l.props; for (ft(c, l.opts.specialEasing); o < a; o++)if (r = pt.prefilters[o].call(l, e, c, l.opts)) return g(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r; return w.map(c, lt, l), g(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), w.fx.timer(w.extend(u, { elem: e, anim: l, queue: l.opts.queue })), l } w.Animation = w.extend(pt, { tweeners: { "*": [function (e, t) { var n = this.createTween(e, t); return ue(n.elem, e, ie.exec(t), n), n }] }, tweener: function (e, t) { g(e) ? (t = e, e = ["*"]) : e = e.match(M); for (var n, r = 0, i = e.length; r < i; r++)n = e[r], pt.tweeners[n] = pt.tweeners[n] || [], pt.tweeners[n].unshift(t) }, prefilters: [ct], prefilter: function (e, t) { t ? pt.prefilters.unshift(e) : pt.prefilters.push(e) } }), w.speed = function (e, t, n) { var r = e && "object" == typeof e ? w.extend({}, e) : { complete: n || !n && t || g(e) && e, duration: e, easing: n && t || t && !g(t) && t }; return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () { g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue) }, r }, w.fn.extend({ fadeTo: function (e, t, n, r) { return this.filter(ae).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r) }, animate: function (e, t, n, r) { var i = w.isEmptyObject(e), o = w.speed(t, n, r), a = function () { var t = pt(this, w.extend({}, e), o); (i || J.get(this, "finish")) && t.stop(!0) }; return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a) }, stop: function (e, t, n) { var r = function (e) { var t = e.stop; delete e.stop, t(n) }; return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () { var t = !0, i = null != e && e + "queueHooks", o = w.timers, a = J.get(this); if (i) a[i] && a[i].stop && r(a[i]); else for (i in a) a[i] && a[i].stop && ot.test(i) && r(a[i]); for (i = o.length; i--;)o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1)); !t && n || w.dequeue(this, e) }) }, finish: function (e) { return !1 !== e && (e = e || "fx"), this.each(function () { var t, n = J.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = w.timers, a = r ? r.length : 0; for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;)o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1)); for (t = 0; t < a; t++)r[t] && r[t].finish && r[t].finish.call(this); delete n.finish }) } }), w.each(["toggle", "show", "hide"], function (e, t) { var n = w.fn[t]; w.fn[t] = function (e, r, i) { return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i) } }), w.each({ slideDown: ut("show"), slideUp: ut("hide"), slideToggle: ut("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) { w.fn[e] = function (e, n, r) { return this.animate(t, e, n, r) } }), w.timers = [], w.fx.tick = function () { var e, t = 0, n = w.timers; for (nt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1); n.length || w.fx.stop(), nt = void 0 }, w.fx.timer = function (e) { w.timers.push(e), w.fx.start() }, w.fx.interval = 13, w.fx.start = function () { rt || (rt = !0, at()) }, w.fx.stop = function () { rt = null }, w.fx.speeds = { slow: 600, fast: 200, _default: 400 }, w.fn.delay = function (t, n) { return t = w.fx ? w.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, r) { var i = e.setTimeout(n, t); r.stop = function () { e.clearTimeout(i) } }) }, function () { var e = r.createElement("input"), t = r.createElement("select").appendChild(r.createElement("option")); e.type = "checkbox", h.checkOn = "" !== e.value, h.optSelected = t.selected, (e = r.createElement("input")).value = "t", e.type = "radio", h.radioValue = "t" === e.value }(); var dt, ht = w.expr.attrHandle; w.fn.extend({ attr: function (e, t) { return z(this, w.attr, e, t, arguments.length > 1) }, removeAttr: function (e) { return this.each(function () { w.removeAttr(this, e) }) } }), w.extend({ attr: function (e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r) }, attrHooks: { type: { set: function (e, t) { if (!h.radioValue && "radio" === t && N(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } }, removeAttr: function (e, t) { var n, r = 0, i = t && t.match(M); if (i && 1 === e.nodeType) while (n = i[r++]) e.removeAttribute(n) } }), dt = { set: function (e, t, n) { return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n } }, w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) { var n = ht[t] || w.find.attr; ht[t] = function (e, t, r) { var i, o, a = t.toLowerCase(); return r || (o = ht[a], ht[a] = i, i = null != n(e, t, r) ? a : null, ht[a] = o), i } }); var gt = /^(?:input|select|textarea|button)$/i, yt = /^(?:a|area)$/i; w.fn.extend({ prop: function (e, t) { return z(this, w.prop, e, t, arguments.length > 1) }, removeProp: function (e) { return this.each(function () { delete this[w.propFix[e] || e] }) } }), w.extend({ prop: function (e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, i = w.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t] }, propHooks: { tabIndex: { get: function (e) { var t = w.find.attr(e, "tabindex"); return t ? parseInt(t, 10) : gt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1 } } }, propFix: { "for": "htmlFor", "class": "className" } }), h.optSelected || (w.propHooks.selected = { get: function (e) { var t = e.parentNode; return t && t.parentNode && t.parentNode.selectedIndex, null }, set: function (e) { var t = e.parentNode; t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex) } }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () { w.propFix[this.toLowerCase()] = this }); function vt(e) { return (e.match(M) || []).join(" ") } function mt(e) { return e.getAttribute && e.getAttribute("class") || "" } function xt(e) { return Array.isArray(e) ? e : "string" == typeof e ? e.match(M) || [] : [] } w.fn.extend({ addClass: function (e) { var t, n, r, i, o, a, s, u = 0; if (g(e)) return this.each(function (t) { w(this).addClass(e.call(this, t, mt(this))) }); if ((t = xt(e)).length) while (n = this[u++]) if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") { a = 0; while (o = t[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " "); i !== (s = vt(r)) && n.setAttribute("class", s) } return this }, removeClass: function (e) { var t, n, r, i, o, a, s, u = 0; if (g(e)) return this.each(function (t) { w(this).removeClass(e.call(this, t, mt(this))) }); if (!arguments.length) return this.attr("class", ""); if ((t = xt(e)).length) while (n = this[u++]) if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") { a = 0; while (o = t[a++]) while (r.indexOf(" " + o + " ") > -1) r = r.replace(" " + o + " ", " "); i !== (s = vt(r)) && n.setAttribute("class", s) } return this }, toggleClass: function (e, t) { var n = typeof e, r = "string" === n || Array.isArray(e); return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function (n) { w(this).toggleClass(e.call(this, n, mt(this), t), t) }) : this.each(function () { var t, i, o, a; if (r) { i = 0, o = w(this), a = xt(e); while (t = a[i++]) o.hasClass(t) ? o.removeClass(t) : o.addClass(t) } else void 0 !== e && "boolean" !== n || ((t = mt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || "")) }) }, hasClass: function (e) { var t, n, r = 0; t = " " + e + " "; while (n = this[r++]) if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1) return !0; return !1 } }); var bt = /\r/g; w.fn.extend({ val: function (e) { var t, n, r, i = this[0]; { if (arguments.length) return r = g(e), this.each(function (n) { var i; 1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, function (e) { return null == e ? "" : e + "" })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i)) }); if (i) return (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(bt, "") : null == n ? "" : n } } }), w.extend({ valHooks: { option: { get: function (e) { var t = w.find.attr(e, "value"); return null != t ? t : vt(w.text(e)) } }, select: { get: function (e) { var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length; for (r = o < 0 ? u : a ? o : 0; r < u; r++)if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) { if (t = w(n).val(), a) return t; s.push(t) } return s }, set: function (e, t) { var n, r, i = e.options, o = w.makeArray(t), a = i.length; while (a--) ((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0); return n || (e.selectedIndex = -1), o } } } }), w.each(["radio", "checkbox"], function () { w.valHooks[this] = { set: function (e, t) { if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1 } }, h.checkOn || (w.valHooks[this].get = function (e) { return null === e.getAttribute("value") ? "on" : e.value }) }), h.focusin = "onfocusin" in e; var wt = /^(?:focusinfocus|focusoutblur)$/, Tt = function (e) { e.stopPropagation() }; w.extend(w.event, { trigger: function (t, n, i, o) { var a, s, u, l, c, p, d, h, v = [i || r], m = f.call(t, "type") ? t.type : t, x = f.call(t, "namespace") ? t.namespace.split(".") : []; if (s = h = u = i = i || r, 3 !== i.nodeType && 8 !== i.nodeType && !wt.test(m + w.event.triggered) && (m.indexOf(".") > -1 && (m = (x = m.split(".")).shift(), x.sort()), c = m.indexOf(":") < 0 && "on" + m, t = t[w.expando] ? t : new w.Event(m, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = x.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : w.makeArray(n, [t]), d = w.event.special[m] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, n))) { if (!o && !d.noBubble && !y(i)) { for (l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode)v.push(s), u = s; u === (i.ownerDocument || r) && v.push(u.defaultView || u.parentWindow || e) } a = 0; while ((s = v[a++]) && !t.isPropagationStopped()) h = s, t.type = a > 1 ? l : d.bindType || m, (p = (J.get(s, "events") || {})[t.type] && J.get(s, "handle")) && p.apply(s, n), (p = c && s[c]) && p.apply && Y(s) && (t.result = p.apply(s, n), !1 === t.result && t.preventDefault()); return t.type = m, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !Y(i) || c && g(i[m]) && !y(i) && ((u = i[c]) && (i[c] = null), w.event.triggered = m, t.isPropagationStopped() && h.addEventListener(m, Tt), i[m](), t.isPropagationStopped() && h.removeEventListener(m, Tt), w.event.triggered = void 0, u && (i[c] = u)), t.result } }, simulate: function (e, t, n) { var r = w.extend(new w.Event, n, { type: e, isSimulated: !0 }); w.event.trigger(r, null, t) } }), w.fn.extend({ trigger: function (e, t) { return this.each(function () { w.event.trigger(e, t, this) }) }, triggerHandler: function (e, t) { var n = this[0]; if (n) return w.event.trigger(e, t, n, !0) } }), h.focusin || w.each({ focus: "focusin", blur: "focusout" }, function (e, t) { var n = function (e) { w.event.simulate(t, e.target, w.event.fix(e)) }; w.event.special[t] = { setup: function () { var r = this.ownerDocument || this, i = J.access(r, t); i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1) }, teardown: function () { var r = this.ownerDocument || this, i = J.access(r, t) - 1; i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t)) } } }); var Ct = e.location, Et = Date.now(), kt = /\?/; w.parseXML = function (t) { var n; if (!t || "string" != typeof t) return null; try { n = (new e.DOMParser).parseFromString(t, "text/xml") } catch (e) { n = void 0 } return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), n }; var St = /\[\]$/, Dt = /\r?\n/g, Nt = /^(?:submit|button|image|reset|file)$/i, At = /^(?:input|select|textarea|keygen)/i; function jt(e, t, n, r) { var i; if (Array.isArray(t)) w.each(t, function (t, i) { n || St.test(e) ? r(e, i) : jt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r) }); else if (n || "object" !== x(t)) r(e, t); else for (i in t) jt(e + "[" + i + "]", t[i], n, r) } w.param = function (e, t) { var n, r = [], i = function (e, t) { var n = g(t) ? t() : t; r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n) }; if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function () { i(this.name, this.value) }); else for (n in e) jt(n, e[n], t, i); return r.join("&") }, w.fn.extend({ serialize: function () { return w.param(this.serializeArray()) }, serializeArray: function () { return this.map(function () { var e = w.prop(this, "elements"); return e ? w.makeArray(e) : this }).filter(function () { var e = this.type; return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !Nt.test(e) && (this.checked || !pe.test(e)) }).map(function (e, t) { var n = w(this).val(); return null == n ? null : Array.isArray(n) ? w.map(n, function (e) { return { name: t.name, value: e.replace(Dt, "\r\n") } }) : { name: t.name, value: n.replace(Dt, "\r\n") } }).get() } }); var qt = /%20/g, Lt = /#.*$/, Ht = /([?&])_=[^&]*/, Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm, Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Mt = /^(?:GET|HEAD)$/, Rt = /^\/\//, It = {}, Wt = {}, $t = "*/".concat("*"), Bt = r.createElement("a"); Bt.href = Ct.href; function Ft(e) { return function (t, n) { "string" != typeof t && (n = t, t = "*"); var r, i = 0, o = t.toLowerCase().match(M) || []; if (g(n)) while (r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n) } } function _t(e, t, n, r) { var i = {}, o = e === Wt; function a(s) { var u; return i[s] = !0, w.each(e[s] || [], function (e, s) { var l = s(t, n, r); return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1) }), u } return a(t.dataTypes[0]) || !i["*"] && a("*") } function zt(e, t) { var n, r, i = w.ajaxSettings.flatOptions || {}; for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]); return r && w.extend(!0, e, r), e } function Xt(e, t, n) { var r, i, o, a, s = e.contents, u = e.dataTypes; while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type")); if (r) for (i in s) if (s[i] && s[i].test(r)) { u.unshift(i); break } if (u[0] in n) o = u[0]; else { for (i in n) { if (!u[0] || e.converters[i + " " + u[0]]) { o = i; break } a || (a = i) } o = o || a } if (o) return o !== u[0] && u.unshift(o), n[o] } function Ut(e, t, n, r) { var i, o, a, s, u, l = {}, c = e.dataTypes.slice(); if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a]; o = c.shift(); while (o) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) { if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) { !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1])); break } if (!0 !== a) if (a && e["throws"]) t = a(t); else try { t = a(t) } catch (e) { return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o } } } return { state: "success", data: t } } w.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Ct.href, type: "GET", isLocal: Pt.test(Ct.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": $t, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": w.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function (e, t) { return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e) }, ajaxPrefilter: Ft(It), ajaxTransport: Ft(Wt), ajax: function (t, n) { "object" == typeof t && (n = t, t = void 0), n = n || {}; var i, o, a, s, u, l, c, f, p, d, h = w.ajaxSetup({}, n), g = h.context || h, y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event, v = w.Deferred(), m = w.Callbacks("once memory"), x = h.statusCode || {}, b = {}, T = {}, C = "canceled", E = { readyState: 0, getResponseHeader: function (e) { var t; if (c) { if (!s) { s = {}; while (t = Ot.exec(a)) s[t[1].toLowerCase()] = t[2] } t = s[e.toLowerCase()] } return null == t ? null : t }, getAllResponseHeaders: function () { return c ? a : null }, setRequestHeader: function (e, t) { return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, b[e] = t), this }, overrideMimeType: function (e) { return null == c && (h.mimeType = e), this }, statusCode: function (e) { var t; if (e) if (c) E.always(e[E.status]); else for (t in e) x[t] = [x[t], e[t]]; return this }, abort: function (e) { var t = e || C; return i && i.abort(t), k(0, t), this } }; if (v.promise(E), h.url = ((t || h.url || Ct.href) + "").replace(Rt, Ct.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""], null == h.crossDomain) { l = r.createElement("a"); try { l.href = h.url, l.href = l.href, h.crossDomain = Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host } catch (e) { h.crossDomain = !0 } } if (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), _t(It, h, n, E), c) return E; (f = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Mt.test(h.type), o = h.url.replace(Lt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+")) : (d = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (kt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Ht, "$1"), d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d), h.url = o + d), h.ifModified && (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && E.setRequestHeader("Content-Type", h.contentType), E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]); for (p in h.headers) E.setRequestHeader(p, h.headers[p]); if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c)) return E.abort(); if (C = "abort", m.add(h.complete), E.done(h.success), E.fail(h.error), i = _t(Wt, h, n, E)) { if (E.readyState = 1, f && y.trigger("ajaxSend", [E, h]), c) return E; h.async && h.timeout > 0 && (u = e.setTimeout(function () { E.abort("timeout") }, h.timeout)); try { c = !1, i.send(b, k) } catch (e) { if (c) throw e; k(-1, e) } } else k(-1, "No Transport"); function k(t, n, r, s) { var l, p, d, b, T, C = n; c || (c = !0, u && e.clearTimeout(u), i = void 0, a = s || "", E.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, r && (b = Xt(h, E, r)), b = Ut(h, b, E, l), l ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T), (T = E.getResponseHeader("etag")) && (w.etag[o] = T)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, p = b.data, l = !(d = b.error))) : (d = C, !t && C || (C = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (n || C) + "", l ? v.resolveWith(g, [p, C, E]) : v.rejectWith(g, [E, C, d]), E.statusCode(x), x = void 0, f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]), m.fireWith(g, [E, C]), f && (y.trigger("ajaxComplete", [E, h]), --w.active || w.event.trigger("ajaxStop"))) } return E }, getJSON: function (e, t, n) { return w.get(e, t, n, "json") }, getScript: function (e, t) { return w.get(e, void 0, t, "script") } }), w.each(["get", "post"], function (e, t) { w[t] = function (e, n, r, i) { return g(n) && (i = i || r, r = n, n = void 0), w.ajax(w.extend({ url: e, type: t, dataType: i, data: n, success: r }, w.isPlainObject(e) && e)) } }), w._evalUrl = function (e) { return w.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 }) }, w.fn.extend({ wrapAll: function (e) { var t; return this[0] && (g(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () { var e = this; while (e.firstElementChild) e = e.firstElementChild; return e }).append(this)), this }, wrapInner: function (e) { return g(e) ? this.each(function (t) { w(this).wrapInner(e.call(this, t)) }) : this.each(function () { var t = w(this), n = t.contents(); n.length ? n.wrapAll(e) : t.append(e) }) }, wrap: function (e) { var t = g(e); return this.each(function (n) { w(this).wrapAll(t ? e.call(this, n) : e) }) }, unwrap: function (e) { return this.parent(e).not("body").each(function () { w(this).replaceWith(this.childNodes) }), this } }), w.expr.pseudos.hidden = function (e) { return !w.expr.pseudos.visible(e) }, w.expr.pseudos.visible = function (e) { return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length) }, w.ajaxSettings.xhr = function () { try { return new e.XMLHttpRequest } catch (e) { } }; var Vt = { 0: 200, 1223: 204 }, Gt = w.ajaxSettings.xhr(); h.cors = !!Gt && "withCredentials" in Gt, h.ajax = Gt = !!Gt, w.ajaxTransport(function (t) { var n, r; if (h.cors || Gt && !t.crossDomain) return { send: function (i, o) { var a, s = t.xhr(); if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (a in t.xhrFields) s[a] = t.xhrFields[a]; t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"); for (a in i) s.setRequestHeader(a, i[a]); n = function (e) { return function () { n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Vt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? { binary: s.response } : { text: s.responseText }, s.getAllResponseHeaders())) } }, s.onload = n(), r = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () { 4 === s.readyState && e.setTimeout(function () { n && r() }) }, n = n("abort"); try { s.send(t.hasContent && t.data || null) } catch (e) { if (n) throw e } }, abort: function () { n && n() } } }), w.ajaxPrefilter(function (e) { e.crossDomain && (e.contents.script = !1) }), w.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function (e) { return w.globalEval(e), e } } }), w.ajaxPrefilter("script", function (e) { void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET") }), w.ajaxTransport("script", function (e) { if (e.crossDomain) { var t, n; return { send: function (i, o) { t = w("<script>").prop({ charset: e.scriptCharset, src: e.url }).on("load error", n = function (e) { t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type) }), r.head.appendChild(t[0]) }, abort: function () { n && n() } } } }); var Yt = [], Qt = /(=)\?(?=&|$)|\?\?/; w.ajaxSetup({ jsonp: "callback", jsonpCallback: function () { var e = Yt.pop() || w.expando + "_" + Et++; return this[e] = !0, e } }), w.ajaxPrefilter("json jsonp", function (t, n, r) { var i, o, a, s = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data"); if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Qt, "$1" + i) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () { return a || w.error(i + " was not called"), a[0] }, t.dataTypes[0] = "json", o = e[i], e[i] = function () { a = arguments }, r.always(function () { void 0 === o ? w(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Yt.push(i)), a && g(o) && o(a[0]), a = o = void 0 }), "script" }), h.createHTMLDocument = function () { var e = r.implementation.createHTMLDocument("").body; return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length }(), w.parseHTML = function (e, t, n) { if ("string" != typeof e) return []; "boolean" == typeof t && (n = t, t = !1); var i, o, a; return t || (h.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href, t.head.appendChild(i)) : t = r), o = A.exec(e), a = !n && [], o ? [t.createElement(o[1])] : (o = xe([e], t, a), a && a.length && w(a).remove(), w.merge([], o.childNodes)) }, w.fn.load = function (e, t, n) { var r, i, o, a = this, s = e.indexOf(" "); return s > -1 && (r = vt(e.slice(s)), e = e.slice(0, s)), g(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && w.ajax({ url: e, type: i || "GET", dataType: "html", data: t }).done(function (e) { o = arguments, a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e) }).always(n && function (e, t) { a.each(function () { n.apply(this, o || [e.responseText, t, e]) }) }), this }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) { w.fn[t] = function (e) { return this.on(t, e) } }), w.expr.pseudos.animated = function (e) { return w.grep(w.timers, function (t) { return e === t.elem }).length }, w.offset = { setOffset: function (e, t, n) { var r, i, o, a, s, u, l, c = w.css(e, "position"), f = w(e), p = {}; "static" === c && (e.style.position = "relative"), s = f.offset(), o = w.css(e, "top"), u = w.css(e, "left"), (l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1) ? (a = (r = f.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), g(t) && (t = t.call(e, n, w.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : f.css(p) } }, w.fn.extend({ offset: function (e) { if (arguments.length) return void 0 === e ? this : this.each(function (t) { w.offset.setOffset(this, e, t) }); var t, n, r = this[0]; if (r) return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 } }, position: function () { if (this[0]) { var e, t, n, r = this[0], i = { top: 0, left: 0 }; if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect(); else { t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; while (e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position")) e = e.parentNode; e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0), i.left += w.css(e, "borderLeftWidth", !0)) } return { top: t.top - i.top - w.css(r, "marginTop", !0), left: t.left - i.left - w.css(r, "marginLeft", !0) } } }, offsetParent: function () { return this.map(function () { var e = this.offsetParent; while (e && "static" === w.css(e, "position")) e = e.offsetParent; return e || be }) } }), w.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) { var n = "pageYOffset" === t; w.fn[e] = function (r) { return z(this, function (e, r, i) { var o; if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r]; o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i }, e, r, arguments.length) } }), w.each(["top", "left"], function (e, t) { w.cssHooks[t] = _e(h.pixelPosition, function (e, n) { if (n) return n = Fe(e, t), We.test(n) ? w(e).position()[t] + "px" : n }) }), w.each({ Height: "height", Width: "width" }, function (e, t) { w.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, r) { w.fn[r] = function (i, o) { var a = arguments.length && (n || "boolean" != typeof i), s = n || (!0 === i || !0 === o ? "margin" : "border"); return z(this, function (t, n, i) { var o; return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s) }, t, a ? i : void 0, a) } }) }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) { w.fn[t] = function (e, n) { return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t) } }), w.fn.extend({ hover: function (e, t) { return this.mouseenter(e).mouseleave(t || e) } }), w.fn.extend({ bind: function (e, t, n) { return this.on(e, null, t, n) }, unbind: function (e, t) { return this.off(e, null, t) }, delegate: function (e, t, n, r) { return this.on(t, e, n, r) }, undelegate: function (e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) } }), w.proxy = function (e, t) { var n, r, i; if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return r = o.call(arguments, 2), i = function () { return e.apply(t || this, r.concat(o.call(arguments))) }, i.guid = e.guid = e.guid || w.guid++, i }, w.holdReady = function (e) { e ? w.readyWait++ : w.ready(!0) }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = N, w.isFunction = g, w.isWindow = y, w.camelCase = G, w.type = x, w.now = Date.now, w.isNumeric = function (e) { var t = w.type(e); return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e)) }, "function" == typeof define && define.amd && define("jquery", [], function () { return w }); var Jt = e.jQuery, Kt = e.$; return w.noConflict = function (t) { return e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Jt), w }, t || (e.jQuery = e.$ = w), w });

/*! jQuery UI - v1.11.4 - 2015-03-11
* http://jqueryui.com
* Includes: core.js, widget.js, mouse.js, position.js, accordion.js, autocomplete.js, button.js, datepicker.js, dialog.js, draggable.js, droppable.js, effect.js, effect-blind.js, effect-bounce.js, effect-clip.js, effect-drop.js, effect-explode.js, effect-fade.js, effect-fold.js, effect-highlight.js, effect-puff.js, effect-pulsate.js, effect-scale.js, effect-shake.js, effect-size.js, effect-slide.js, effect-transfer.js, menu.js, progressbar.js, resizable.js, selectable.js, selectmenu.js, slider.js, sortable.js, spinner.js, tabs.js, tooltip.js
* Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */
(function (e) { "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery) })(function (e) {
	function t(t, s) { var n, a, o, r = t.nodeName.toLowerCase(); return "area" === r ? (n = t.parentNode, a = n.name, t.href && a && "map" === n.nodeName.toLowerCase() ? (o = e("img[usemap='#" + a + "']")[0], !!o && i(o)) : !1) : (/^(input|select|textarea|button|object)$/.test(r) ? !t.disabled : "a" === r ? t.href || s : s) && i(t) } function i(t) { return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function () { return "hidden" === e.css(this, "visibility") }).length } function s(e) { for (var t, i; e.length && e[0] !== document;) { if (t = e.css("position"), ("absolute" === t || "relative" === t || "fixed" === t) && (i = parseInt(e.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i; e = e.parent() } return 0 } function n() { this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = { closeText: "Done", prevText: "Prev", nextText: "Next", currentText: "Today", monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], weekHeader: "Wk", dateFormat: "mm/dd/yy", firstDay: 0, isRTL: !1, showMonthAfterYear: !1, yearSuffix: "" }, this._defaults = { showOn: "focus", showAnim: "fadeIn", showOptions: {}, defaultDate: null, appendText: "", buttonText: "...", buttonImage: "", buttonImageOnly: !1, hideIfNoPrevNext: !1, navigationAsDateFormat: !1, gotoCurrent: !1, changeMonth: !1, changeYear: !1, yearRange: "c-10:c+10", showOtherMonths: !1, selectOtherMonths: !1, showWeek: !1, calculateWeek: this.iso8601Week, shortYearCutoff: "+10", minDate: null, maxDate: null, duration: "fast", beforeShowDay: null, beforeShow: null, onSelect: null, onChangeMonthYear: null, onClose: null, numberOfMonths: 1, showCurrentAtPos: 0, stepMonths: 1, stepBigMonths: 12, altField: "", altFormat: "", constrainInput: !0, showButtonPanel: !1, autoSize: !1, disabled: !1 }, e.extend(this._defaults, this.regional[""]), this.regional.en = e.extend(!0, {}, this.regional[""]), this.regional["en-US"] = e.extend(!0, {}, this.regional.en), this.dpDiv = a(e("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) } function a(t) { var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a"; return t.delegate(i, "mouseout", function () { e(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).removeClass("ui-datepicker-next-hover") }).delegate(i, "mouseover", o) } function o() { e.datepicker._isDisabledDatepicker(v.inline ? v.dpDiv.parent()[0] : v.input[0]) || (e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), e(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).addClass("ui-datepicker-next-hover")) } function r(t, i) { e.extend(t, i); for (var s in i) null == i[s] && (t[s] = i[s]); return t } function h(e) { return function () { var t = this.element.val(); e.apply(this, arguments), this._refresh(), t !== this.element.val() && this._trigger("change") } } e.ui = e.ui || {}, e.extend(e.ui, { version: "1.11.4", keyCode: { BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38 } }), e.fn.extend({ scrollParent: function (t) { var i = this.css("position"), s = "absolute" === i, n = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/, a = this.parents().filter(function () { var t = e(this); return s && "static" === t.css("position") ? !1 : n.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x")) }).eq(0); return "fixed" !== i && a.length ? a : e(this[0].ownerDocument || document) }, uniqueId: function () { var e = 0; return function () { return this.each(function () { this.id || (this.id = "ui-id-" + ++e) }) } }(), removeUniqueId: function () { return this.each(function () { /^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id") }) } }), e.extend(e.expr[":"], { data: e.expr.createPseudo ? e.expr.createPseudo(function (t) { return function (i) { return !!e.data(i, t) } }) : function (t, i, s) { return !!e.data(t, s[3]) }, focusable: function (i) { return t(i, !isNaN(e.attr(i, "tabindex"))) }, tabbable: function (i) { var s = e.attr(i, "tabindex"), n = isNaN(s); return (n || s >= 0) && t(i, !n) } }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function (t, i) { function s(t, i, s, a) { return e.each(n, function () { i -= parseFloat(e.css(t, "padding" + this)) || 0, s && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), a && (i -= parseFloat(e.css(t, "margin" + this)) || 0) }), i } var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"], a = i.toLowerCase(), o = { innerWidth: e.fn.innerWidth, innerHeight: e.fn.innerHeight, outerWidth: e.fn.outerWidth, outerHeight: e.fn.outerHeight }; e.fn["inner" + i] = function (t) { return void 0 === t ? o["inner" + i].call(this) : this.each(function () { e(this).css(a, s(this, t) + "px") }) }, e.fn["outer" + i] = function (t, n) { return "number" != typeof t ? o["outer" + i].call(this, t) : this.each(function () { e(this).css(a, s(this, t, !0, n) + "px") }) } }), e.fn.addBack || (e.fn.addBack = function (e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function (t) { return function (i) { return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this) } }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.fn.extend({ focus: function (t) { return function (i, s) { return "number" == typeof i ? this.each(function () { var t = this; setTimeout(function () { e(t).focus(), s && s.call(t) }, i) }) : t.apply(this, arguments) } }(e.fn.focus), disableSelection: function () { var e = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown"; return function () { return this.bind(e + ".ui-disableSelection", function (e) { e.preventDefault() }) } }(), enableSelection: function () { return this.unbind(".ui-disableSelection") }, zIndex: function (t) { if (void 0 !== t) return this.css("zIndex", t); if (this.length) for (var i, s, n = e(this[0]); n.length && n[0] !== document;) { if (i = n.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (s = parseInt(n.css("zIndex"), 10), !isNaN(s) && 0 !== s)) return s; n = n.parent() } return 0 } }), e.ui.plugin = { add: function (t, i, s) { var n, a = e.ui[t].prototype; for (n in s) a.plugins[n] = a.plugins[n] || [], a.plugins[n].push([i, s[n]]) }, call: function (e, t, i, s) { var n, a = e.plugins[t]; if (a && (s || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType)) for (n = 0; a.length > n; n++)e.options[a[n][0]] && a[n][1].apply(e.element, i) } }; var l = 0, u = Array.prototype.slice; e.cleanData = function (t) { return function (i) { var s, n, a; for (a = 0; null != (n = i[a]); a++)try { s = e._data(n, "events"), s && s.remove && e(n).triggerHandler("remove") } catch (o) { } t(i) } }(e.cleanData), e.widget = function (t, i, s) { var n, a, o, r, h = {}, l = t.split(".")[0]; return t = t.split(".")[1], n = l + "-" + t, s || (s = i, i = e.Widget), e.expr[":"][n.toLowerCase()] = function (t) { return !!e.data(t, n) }, e[l] = e[l] || {}, a = e[l][t], o = e[l][t] = function (e, t) { return this._createWidget ? (arguments.length && this._createWidget(e, t), void 0) : new o(e, t) }, e.extend(o, a, { version: s.version, _proto: e.extend({}, s), _childConstructors: [] }), r = new i, r.options = e.widget.extend({}, r.options), e.each(s, function (t, s) { return e.isFunction(s) ? (h[t] = function () { var e = function () { return i.prototype[t].apply(this, arguments) }, n = function (e) { return i.prototype[t].apply(this, e) }; return function () { var t, i = this._super, a = this._superApply; return this._super = e, this._superApply = n, t = s.apply(this, arguments), this._super = i, this._superApply = a, t } }(), void 0) : (h[t] = s, void 0) }), o.prototype = e.widget.extend(r, { widgetEventPrefix: a ? r.widgetEventPrefix || t : t }, h, { constructor: o, namespace: l, widgetName: t, widgetFullName: n }), a ? (e.each(a._childConstructors, function (t, i) { var s = i.prototype; e.widget(s.namespace + "." + s.widgetName, o, i._proto) }), delete a._childConstructors) : i._childConstructors.push(o), e.widget.bridge(t, o), o }, e.widget.extend = function (t) { for (var i, s, n = u.call(arguments, 1), a = 0, o = n.length; o > a; a++)for (i in n[a]) s = n[a][i], n[a].hasOwnProperty(i) && void 0 !== s && (t[i] = e.isPlainObject(s) ? e.isPlainObject(t[i]) ? e.widget.extend({}, t[i], s) : e.widget.extend({}, s) : s); return t }, e.widget.bridge = function (t, i) { var s = i.prototype.widgetFullName || t; e.fn[t] = function (n) { var a = "string" == typeof n, o = u.call(arguments, 1), r = this; return a ? this.each(function () { var i, a = e.data(this, s); return "instance" === n ? (r = a, !1) : a ? e.isFunction(a[n]) && "_" !== n.charAt(0) ? (i = a[n].apply(a, o), i !== a && void 0 !== i ? (r = i && i.jquery ? r.pushStack(i.get()) : i, !1) : void 0) : e.error("no such method '" + n + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; " + "attempted to call method '" + n + "'") }) : (o.length && (n = e.widget.extend.apply(null, [n].concat(o))), this.each(function () { var t = e.data(this, s); t ? (t.option(n || {}), t._init && t._init()) : e.data(this, s, new i(n, this)) })), r } }, e.Widget = function () { }, e.Widget._childConstructors = [], e.Widget.prototype = { widgetName: "widget", widgetEventPrefix: "", defaultElement: "<div>", options: { disabled: !1, create: null }, _createWidget: function (t, i) { i = e(i || this.defaultElement || this)[0], this.element = e(i), this.uuid = l++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = e(), this.hoverable = e(), this.focusable = e(), i !== this && (e.data(i, this.widgetFullName, this), this._on(!0, this.element, { remove: function (e) { e.target === i && this.destroy() } }), this.document = e(i.style ? i.ownerDocument : i.document || i), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init() }, _getCreateOptions: e.noop, _getCreateEventData: e.noop, _create: e.noop, _init: e.noop, destroy: function () { this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus") }, _destroy: e.noop, widget: function () { return this.element }, option: function (t, i) { var s, n, a, o = t; if (0 === arguments.length) return e.widget.extend({}, this.options); if ("string" == typeof t) if (o = {}, s = t.split("."), t = s.shift(), s.length) { for (n = o[t] = e.widget.extend({}, this.options[t]), a = 0; s.length - 1 > a; a++)n[s[a]] = n[s[a]] || {}, n = n[s[a]]; if (t = s.pop(), 1 === arguments.length) return void 0 === n[t] ? null : n[t]; n[t] = i } else { if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t]; o[t] = i } return this._setOptions(o), this }, _setOptions: function (e) { var t; for (t in e) this._setOption(t, e[t]); return this }, _setOption: function (e, t) { return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t), t && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this }, enable: function () { return this._setOptions({ disabled: !1 }) }, disable: function () { return this._setOptions({ disabled: !0 }) }, _on: function (t, i, s) { var n, a = this; "boolean" != typeof t && (s = i, i = t, t = !1), s ? (i = n = e(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), e.each(s, function (s, o) { function r() { return t || a.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? a[o] : o).apply(a, arguments) : void 0 } "string" != typeof o && (r.guid = o.guid = o.guid || r.guid || e.guid++); var h = s.match(/^([\w:-]*)\s*(.*)$/), l = h[1] + a.eventNamespace, u = h[2]; u ? n.delegate(u, l, r) : i.bind(l, r) }) }, _off: function (t, i) { i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(i).undelegate(i), this.bindings = e(this.bindings.not(t).get()), this.focusable = e(this.focusable.not(t).get()), this.hoverable = e(this.hoverable.not(t).get()) }, _delay: function (e, t) { function i() { return ("string" == typeof e ? s[e] : e).apply(s, arguments) } var s = this; return setTimeout(i, t || 0) }, _hoverable: function (t) { this.hoverable = this.hoverable.add(t), this._on(t, { mouseenter: function (t) { e(t.currentTarget).addClass("ui-state-hover") }, mouseleave: function (t) { e(t.currentTarget).removeClass("ui-state-hover") } }) }, _focusable: function (t) { this.focusable = this.focusable.add(t), this._on(t, { focusin: function (t) { e(t.currentTarget).addClass("ui-state-focus") }, focusout: function (t) { e(t.currentTarget).removeClass("ui-state-focus") } }) }, _trigger: function (t, i, s) { var n, a, o = this.options[t]; if (s = s || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], a = i.originalEvent) for (n in a) n in i || (i[n] = a[n]); return this.element.trigger(i, s), !(e.isFunction(o) && o.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented()) } }, e.each({ show: "fadeIn", hide: "fadeOut" }, function (t, i) { e.Widget.prototype["_" + t] = function (s, n, a) { "string" == typeof n && (n = { effect: n }); var o, r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : t; n = n || {}, "number" == typeof n && (n = { duration: n }), o = !e.isEmptyObject(n), n.complete = a, n.delay && s.delay(n.delay), o && e.effects && e.effects.effect[r] ? s[t](n) : r !== t && s[r] ? s[r](n.duration, n.easing, a) : s.queue(function (i) { e(this)[t](), a && a.call(s[0]), i() }) } }), e.widget; var d = !1; e(document).mouseup(function () { d = !1 }), e.widget("ui.mouse", { version: "1.11.4", options: { cancel: "input,textarea,button,select,option", distance: 1, delay: 0 }, _mouseInit: function () { var t = this; this.element.bind("mousedown." + this.widgetName, function (e) { return t._mouseDown(e) }).bind("click." + this.widgetName, function (i) { return !0 === e.data(i.target, t.widgetName + ".preventClickEvent") ? (e.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0 }), this.started = !1 }, _mouseDestroy: function () { this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate) }, _mouseDown: function (t) { if (!d) { this._mouseMoved = !1, this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t; var i = this, s = 1 === t.which, n = "string" == typeof this.options.cancel && t.target.nodeName ? e(t.target).closest(this.options.cancel).length : !1; return s && !n && this._mouseCapture(t) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () { i.mouseDelayMet = !0 }, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(t) !== !1, !this._mouseStarted) ? (t.preventDefault(), !0) : (!0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (e) { return i._mouseMove(e) }, this._mouseUpDelegate = function (e) { return i._mouseUp(e) }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), d = !0, !0)) : !0 } }, _mouseMove: function (t) { if (this._mouseMoved) { if (e.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button) return this._mouseUp(t); if (!t.which) return this._mouseUp(t) } return (t.which || t.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted) }, _mouseUp: function (t) { return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), d = !1, !1 }, _mouseDistanceMet: function (e) { return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance }, _mouseDelayMet: function () { return this.mouseDelayMet }, _mouseStart: function () { }, _mouseDrag: function () { }, _mouseStop: function () { }, _mouseCapture: function () { return !0 } }), function () { function t(e, t, i) { return [parseFloat(e[0]) * (p.test(e[0]) ? t / 100 : 1), parseFloat(e[1]) * (p.test(e[1]) ? i / 100 : 1)] } function i(t, i) { return parseInt(e.css(t, i), 10) || 0 } function s(t) { var i = t[0]; return 9 === i.nodeType ? { width: t.width(), height: t.height(), offset: { top: 0, left: 0 } } : e.isWindow(i) ? { width: t.width(), height: t.height(), offset: { top: t.scrollTop(), left: t.scrollLeft() } } : i.preventDefault ? { width: 0, height: 0, offset: { top: i.pageY, left: i.pageX } } : { width: t.outerWidth(), height: t.outerHeight(), offset: t.offset() } } e.ui = e.ui || {}; var n, a, o = Math.max, r = Math.abs, h = Math.round, l = /left|center|right/, u = /top|center|bottom/, d = /[\+\-]\d+(\.[\d]+)?%?/, c = /^\w+/, p = /%$/, f = e.fn.position; e.position = { scrollbarWidth: function () { if (void 0 !== n) return n; var t, i, s = e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), a = s.children()[0]; return e("body").append(s), t = a.offsetWidth, s.css("overflow", "scroll"), i = a.offsetWidth, t === i && (i = s[0].clientWidth), s.remove(), n = t - i }, getScrollInfo: function (t) { var i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"), s = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"), n = "scroll" === i || "auto" === i && t.width < t.element[0].scrollWidth, a = "scroll" === s || "auto" === s && t.height < t.element[0].scrollHeight; return { width: a ? e.position.scrollbarWidth() : 0, height: n ? e.position.scrollbarWidth() : 0 } }, getWithinInfo: function (t) { var i = e(t || window), s = e.isWindow(i[0]), n = !!i[0] && 9 === i[0].nodeType; return { element: i, isWindow: s, isDocument: n, offset: i.offset() || { left: 0, top: 0 }, scrollLeft: i.scrollLeft(), scrollTop: i.scrollTop(), width: s || n ? i.width() : i.outerWidth(), height: s || n ? i.height() : i.outerHeight() } } }, e.fn.position = function (n) { if (!n || !n.of) return f.apply(this, arguments); n = e.extend({}, n); var p, m, g, v, y, b, _ = e(n.of), x = e.position.getWithinInfo(n.within), w = e.position.getScrollInfo(x), k = (n.collision || "flip").split(" "), T = {}; return b = s(_), _[0].preventDefault && (n.at = "left top"), m = b.width, g = b.height, v = b.offset, y = e.extend({}, v), e.each(["my", "at"], function () { var e, t, i = (n[this] || "").split(" "); 1 === i.length && (i = l.test(i[0]) ? i.concat(["center"]) : u.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = l.test(i[0]) ? i[0] : "center", i[1] = u.test(i[1]) ? i[1] : "center", e = d.exec(i[0]), t = d.exec(i[1]), T[this] = [e ? e[0] : 0, t ? t[0] : 0], n[this] = [c.exec(i[0])[0], c.exec(i[1])[0]] }), 1 === k.length && (k[1] = k[0]), "right" === n.at[0] ? y.left += m : "center" === n.at[0] && (y.left += m / 2), "bottom" === n.at[1] ? y.top += g : "center" === n.at[1] && (y.top += g / 2), p = t(T.at, m, g), y.left += p[0], y.top += p[1], this.each(function () { var s, l, u = e(this), d = u.outerWidth(), c = u.outerHeight(), f = i(this, "marginLeft"), b = i(this, "marginTop"), D = d + f + i(this, "marginRight") + w.width, S = c + b + i(this, "marginBottom") + w.height, M = e.extend({}, y), C = t(T.my, u.outerWidth(), u.outerHeight()); "right" === n.my[0] ? M.left -= d : "center" === n.my[0] && (M.left -= d / 2), "bottom" === n.my[1] ? M.top -= c : "center" === n.my[1] && (M.top -= c / 2), M.left += C[0], M.top += C[1], a || (M.left = h(M.left), M.top = h(M.top)), s = { marginLeft: f, marginTop: b }, e.each(["left", "top"], function (t, i) { e.ui.position[k[t]] && e.ui.position[k[t]][i](M, { targetWidth: m, targetHeight: g, elemWidth: d, elemHeight: c, collisionPosition: s, collisionWidth: D, collisionHeight: S, offset: [p[0] + C[0], p[1] + C[1]], my: n.my, at: n.at, within: x, elem: u }) }), n.using && (l = function (e) { var t = v.left - M.left, i = t + m - d, s = v.top - M.top, a = s + g - c, h = { target: { element: _, left: v.left, top: v.top, width: m, height: g }, element: { element: u, left: M.left, top: M.top, width: d, height: c }, horizontal: 0 > i ? "left" : t > 0 ? "right" : "center", vertical: 0 > a ? "top" : s > 0 ? "bottom" : "middle" }; d > m && m > r(t + i) && (h.horizontal = "center"), c > g && g > r(s + a) && (h.vertical = "middle"), h.important = o(r(t), r(i)) > o(r(s), r(a)) ? "horizontal" : "vertical", n.using.call(this, e, h) }), u.offset(e.extend(M, { using: l })) }) }, e.ui.position = { fit: { left: function (e, t) { var i, s = t.within, n = s.isWindow ? s.scrollLeft : s.offset.left, a = s.width, r = e.left - t.collisionPosition.marginLeft, h = n - r, l = r + t.collisionWidth - a - n; t.collisionWidth > a ? h > 0 && 0 >= l ? (i = e.left + h + t.collisionWidth - a - n, e.left += h - i) : e.left = l > 0 && 0 >= h ? n : h > l ? n + a - t.collisionWidth : n : h > 0 ? e.left += h : l > 0 ? e.left -= l : e.left = o(e.left - r, e.left) }, top: function (e, t) { var i, s = t.within, n = s.isWindow ? s.scrollTop : s.offset.top, a = t.within.height, r = e.top - t.collisionPosition.marginTop, h = n - r, l = r + t.collisionHeight - a - n; t.collisionHeight > a ? h > 0 && 0 >= l ? (i = e.top + h + t.collisionHeight - a - n, e.top += h - i) : e.top = l > 0 && 0 >= h ? n : h > l ? n + a - t.collisionHeight : n : h > 0 ? e.top += h : l > 0 ? e.top -= l : e.top = o(e.top - r, e.top) } }, flip: { left: function (e, t) { var i, s, n = t.within, a = n.offset.left + n.scrollLeft, o = n.width, h = n.isWindow ? n.scrollLeft : n.offset.left, l = e.left - t.collisionPosition.marginLeft, u = l - h, d = l + t.collisionWidth - o - h, c = "left" === t.my[0] ? -t.elemWidth : "right" === t.my[0] ? t.elemWidth : 0, p = "left" === t.at[0] ? t.targetWidth : "right" === t.at[0] ? -t.targetWidth : 0, f = -2 * t.offset[0]; 0 > u ? (i = e.left + c + p + f + t.collisionWidth - o - a, (0 > i || r(u) > i) && (e.left += c + p + f)) : d > 0 && (s = e.left - t.collisionPosition.marginLeft + c + p + f - h, (s > 0 || d > r(s)) && (e.left += c + p + f)) }, top: function (e, t) { var i, s, n = t.within, a = n.offset.top + n.scrollTop, o = n.height, h = n.isWindow ? n.scrollTop : n.offset.top, l = e.top - t.collisionPosition.marginTop, u = l - h, d = l + t.collisionHeight - o - h, c = "top" === t.my[1], p = c ? -t.elemHeight : "bottom" === t.my[1] ? t.elemHeight : 0, f = "top" === t.at[1] ? t.targetHeight : "bottom" === t.at[1] ? -t.targetHeight : 0, m = -2 * t.offset[1]; 0 > u ? (s = e.top + p + f + m + t.collisionHeight - o - a, (0 > s || r(u) > s) && (e.top += p + f + m)) : d > 0 && (i = e.top - t.collisionPosition.marginTop + p + f + m - h, (i > 0 || d > r(i)) && (e.top += p + f + m)) } }, flipfit: { left: function () { e.ui.position.flip.left.apply(this, arguments), e.ui.position.fit.left.apply(this, arguments) }, top: function () { e.ui.position.flip.top.apply(this, arguments), e.ui.position.fit.top.apply(this, arguments) } } }, function () { var t, i, s, n, o, r = document.getElementsByTagName("body")[0], h = document.createElement("div"); t = document.createElement(r ? "div" : "body"), s = { visibility: "hidden", width: 0, height: 0, border: 0, margin: 0, background: "none" }, r && e.extend(s, { position: "absolute", left: "-1000px", top: "-1000px" }); for (o in s) t.style[o] = s[o]; t.appendChild(h), i = r || document.documentElement, i.insertBefore(t, i.firstChild), h.style.cssText = "position: absolute; left: 10.7432222px;", n = e(h).offset().left, a = n > 10 && 11 > n, t.innerHTML = "", i.removeChild(t) }() }(), e.ui.position, e.widget("ui.accordion", { version: "1.11.4", options: { active: 0, animate: {}, collapsible: !1, event: "click", header: "> li > :first-child,> :not(li):even", heightStyle: "auto", icons: { activeHeader: "ui-icon-triangle-1-s", header: "ui-icon-triangle-1-e" }, activate: null, beforeActivate: null }, hideProps: { borderTopWidth: "hide", borderBottomWidth: "hide", paddingTop: "hide", paddingBottom: "hide", height: "hide" }, showProps: { borderTopWidth: "show", borderBottomWidth: "show", paddingTop: "show", paddingBottom: "show", height: "show" }, _create: function () { var t = this.options; this.prevShow = this.prevHide = e(), this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"), t.collapsible || t.active !== !1 && null != t.active || (t.active = 0), this._processPanels(), 0 > t.active && (t.active += this.headers.length), this._refresh() }, _getCreateEventData: function () { return { header: this.active, panel: this.active.length ? this.active.next() : e() } }, _createIcons: function () { var t = this.options.icons; t && (e("<span>").addClass("ui-accordion-header-icon ui-icon " + t.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader), this.headers.addClass("ui-accordion-icons")) }, _destroyIcons: function () { this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove() }, _destroy: function () { var e; this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId(), this._destroyIcons(), e = this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display", "").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && e.css("height", "") }, _setOption: function (e, t) { return "active" === e ? (this._activate(t), void 0) : ("event" === e && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(t)), this._super(e, t), "collapsible" !== e || t || this.options.active !== !1 || this._activate(0), "icons" === e && (this._destroyIcons(), t && this._createIcons()), "disabled" === e && (this.element.toggleClass("ui-state-disabled", !!t).attr("aria-disabled", t), this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!t)), void 0) }, _keydown: function (t) { if (!t.altKey && !t.ctrlKey) { var i = e.ui.keyCode, s = this.headers.length, n = this.headers.index(t.target), a = !1; switch (t.keyCode) { case i.RIGHT: case i.DOWN: a = this.headers[(n + 1) % s]; break; case i.LEFT: case i.UP: a = this.headers[(n - 1 + s) % s]; break; case i.SPACE: case i.ENTER: this._eventHandler(t); break; case i.HOME: a = this.headers[0]; break; case i.END: a = this.headers[s - 1] }a && (e(t.target).attr("tabIndex", -1), e(a).attr("tabIndex", 0), a.focus(), t.preventDefault()) } }, _panelKeyDown: function (t) { t.keyCode === e.ui.keyCode.UP && t.ctrlKey && e(t.currentTarget).prev().focus() }, refresh: function () { var t = this.options; this._processPanels(), t.active === !1 && t.collapsible === !0 || !this.headers.length ? (t.active = !1, this.active = e()) : t.active === !1 ? this._activate(0) : this.active.length && !e.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (t.active = !1, this.active = e()) : this._activate(Math.max(0, t.active - 1)) : t.active = this.headers.index(this.active), this._destroyIcons(), this._refresh() }, _processPanels: function () { var e = this.headers, t = this.panels; this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all"), this.panels = this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide(), t && (this._off(e.not(this.headers)), this._off(t.not(this.panels))) }, _refresh: function () { var t, i = this.options, s = i.heightStyle, n = this.element.parent(); this.active = this._findActive(i.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"), this.active.next().addClass("ui-accordion-content-active").show(), this.headers.attr("role", "tab").each(function () { var t = e(this), i = t.uniqueId().attr("id"), s = t.next(), n = s.uniqueId().attr("id"); t.attr("aria-controls", n), s.attr("aria-labelledby", i) }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({ "aria-selected": "false", "aria-expanded": "false", tabIndex: -1 }).next().attr({ "aria-hidden": "true" }).hide(), this.active.length ? this.active.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 }).next().attr({ "aria-hidden": "false" }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(i.event), "fill" === s ? (t = n.height(), this.element.siblings(":visible").each(function () { var i = e(this), s = i.css("position"); "absolute" !== s && "fixed" !== s && (t -= i.outerHeight(!0)) }), this.headers.each(function () { t -= e(this).outerHeight(!0) }), this.headers.next().each(function () { e(this).height(Math.max(0, t - e(this).innerHeight() + e(this).height())) }).css("overflow", "auto")) : "auto" === s && (t = 0, this.headers.next().each(function () { t = Math.max(t, e(this).css("height", "").height()) }).height(t)) }, _activate: function (t) { var i = this._findActive(t)[0]; i !== this.active[0] && (i = i || this.active[0], this._eventHandler({ target: i, currentTarget: i, preventDefault: e.noop })) }, _findActive: function (t) { return "number" == typeof t ? this.headers.eq(t) : e() }, _setupEvents: function (t) { var i = { keydown: "_keydown" }; t && e.each(t.split(" "), function (e, t) { i[t] = "_eventHandler" }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), { keydown: "_panelKeyDown" }), this._hoverable(this.headers), this._focusable(this.headers) }, _eventHandler: function (t) { var i = this.options, s = this.active, n = e(t.currentTarget), a = n[0] === s[0], o = a && i.collapsible, r = o ? e() : n.next(), h = s.next(), l = { oldHeader: s, oldPanel: h, newHeader: o ? e() : n, newPanel: r }; t.preventDefault(), a && !i.collapsible || this._trigger("beforeActivate", t, l) === !1 || (i.active = o ? !1 : this.headers.index(n), this.active = a ? e() : n, this._toggle(l), s.removeClass("ui-accordion-header-active ui-state-active"), i.icons && s.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header), a || (n.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), i.icons && n.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader), n.next().addClass("ui-accordion-content-active"))) }, _toggle: function (t) { var i = t.newPanel, s = this.prevShow.length ? this.prevShow : t.oldPanel; this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = s, this.options.animate ? this._animate(i, s, t) : (s.hide(), i.show(), this._toggleComplete(t)), s.attr({ "aria-hidden": "true" }), s.prev().attr({ "aria-selected": "false", "aria-expanded": "false" }), i.length && s.length ? s.prev().attr({ tabIndex: -1, "aria-expanded": "false" }) : i.length && this.headers.filter(function () { return 0 === parseInt(e(this).attr("tabIndex"), 10) }).attr("tabIndex", -1), i.attr("aria-hidden", "false").prev().attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 }) }, _animate: function (e, t, i) { var s, n, a, o = this, r = 0, h = e.css("box-sizing"), l = e.length && (!t.length || e.index() < t.index()), u = this.options.animate || {}, d = l && u.down || u, c = function () { o._toggleComplete(i) }; return "number" == typeof d && (a = d), "string" == typeof d && (n = d), n = n || d.easing || u.easing, a = a || d.duration || u.duration, t.length ? e.length ? (s = e.show().outerHeight(), t.animate(this.hideProps, { duration: a, easing: n, step: function (e, t) { t.now = Math.round(e) } }), e.hide().animate(this.showProps, { duration: a, easing: n, complete: c, step: function (e, i) { i.now = Math.round(e), "height" !== i.prop ? "content-box" === h && (r += i.now) : "content" !== o.options.heightStyle && (i.now = Math.round(s - t.outerHeight() - r), r = 0) } }), void 0) : t.animate(this.hideProps, a, n, c) : e.animate(this.showProps, a, n, c) }, _toggleComplete: function (e) { var t = e.oldPanel; t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), t.length && (t.parent()[0].className = t.parent()[0].className), this._trigger("activate", null, e) } }), e.widget("ui.menu", {
		version: "1.11.4", defaultElement: "<ul>", delay: 300, options: { icons: { submenu: "ui-icon-carat-1-e" }, items: "> *", menus: "ul", position: { my: "left-1 top", at: "right top" }, role: "menu", blur: null, focus: null, select: null }, _create: function () {
			this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({ role: this.options.role, tabIndex: 0 }), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
				"mousedown .ui-menu-item": function (e) { e.preventDefault() }, "click .ui-menu-item": function (t) { var i = e(t.target); !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(t), t.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(t) : !this.element.is(":focus") && e(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer))) }, "mouseenter .ui-menu-item": function (t) {
					if (!this.previousFilter) {
						var i = e(t.currentTarget);
						i.siblings(".ui-state-active").removeClass("ui-state-active"), this.focus(t, i)
					}
				}, mouseleave: "collapseAll", "mouseleave .ui-menu": "collapseAll", focus: function (e, t) { var i = this.active || this.element.find(this.options.items).eq(0); t || this.focus(e, i) }, blur: function (t) { this._delay(function () { e.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(t) }) }, keydown: "_keydown"
			}), this.refresh(), this._on(this.document, { click: function (e) { this._closeOnDocumentClick(e) && this.collapseAll(e), this.mouseHandled = !1 } })
		}, _destroy: function () { this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function () { var t = e(this); t.data("ui-menu-submenu-carat") && t.remove() }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content") }, _keydown: function (t) { var i, s, n, a, o = !0; switch (t.keyCode) { case e.ui.keyCode.PAGE_UP: this.previousPage(t); break; case e.ui.keyCode.PAGE_DOWN: this.nextPage(t); break; case e.ui.keyCode.HOME: this._move("first", "first", t); break; case e.ui.keyCode.END: this._move("last", "last", t); break; case e.ui.keyCode.UP: this.previous(t); break; case e.ui.keyCode.DOWN: this.next(t); break; case e.ui.keyCode.LEFT: this.collapse(t); break; case e.ui.keyCode.RIGHT: this.active && !this.active.is(".ui-state-disabled") && this.expand(t); break; case e.ui.keyCode.ENTER: case e.ui.keyCode.SPACE: this._activate(t); break; case e.ui.keyCode.ESCAPE: this.collapse(t); break; default: o = !1, s = this.previousFilter || "", n = String.fromCharCode(t.keyCode), a = !1, clearTimeout(this.filterTimer), n === s ? a = !0 : n = s + n, i = this._filterMenuItems(n), i = a && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i, i.length || (n = String.fromCharCode(t.keyCode), i = this._filterMenuItems(n)), i.length ? (this.focus(t, i), this.previousFilter = n, this.filterTimer = this._delay(function () { delete this.previousFilter }, 1e3)) : delete this.previousFilter }o && t.preventDefault() }, _activate: function (e) { this.active.is(".ui-state-disabled") || (this.active.is("[aria-haspopup='true']") ? this.expand(e) : this.select(e)) }, refresh: function () { var t, i, s = this, n = this.options.icons.submenu, a = this.element.find(this.options.menus); this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length), a.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({ role: this.options.role, "aria-hidden": "true", "aria-expanded": "false" }).each(function () { var t = e(this), i = t.parent(), s = e("<span>").addClass("ui-menu-icon ui-icon " + n).data("ui-menu-submenu-carat", !0); i.attr("aria-haspopup", "true").prepend(s), t.attr("aria-labelledby", i.attr("id")) }), t = a.add(this.element), i = t.find(this.options.items), i.not(".ui-menu-item").each(function () { var t = e(this); s._isDivider(t) && t.addClass("ui-widget-content ui-menu-divider") }), i.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({ tabIndex: -1, role: this._itemRole() }), i.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !e.contains(this.element[0], this.active[0]) && this.blur() }, _itemRole: function () { return { menu: "menuitem", listbox: "option" }[this.options.role] }, _setOption: function (e, t) { "icons" === e && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu), "disabled" === e && this.element.toggleClass("ui-state-disabled", !!t).attr("aria-disabled", t), this._super(e, t) }, focus: function (e, t) { var i, s; this.blur(e, e && "focus" === e.type), this._scrollIntoView(t), this.active = t.first(), s = this.active.addClass("ui-state-focus").removeClass("ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"), e && "keydown" === e.type ? this._close() : this.timer = this._delay(function () { this._close() }, this.delay), i = t.children(".ui-menu"), i.length && e && /^mouse/.test(e.type) && this._startOpening(i), this.activeMenu = t.parent(), this._trigger("focus", e, { item: t }) }, _scrollIntoView: function (t) { var i, s, n, a, o, r; this._hasScroll() && (i = parseFloat(e.css(this.activeMenu[0], "borderTopWidth")) || 0, s = parseFloat(e.css(this.activeMenu[0], "paddingTop")) || 0, n = t.offset().top - this.activeMenu.offset().top - i - s, a = this.activeMenu.scrollTop(), o = this.activeMenu.height(), r = t.outerHeight(), 0 > n ? this.activeMenu.scrollTop(a + n) : n + r > o && this.activeMenu.scrollTop(a + n - o + r)) }, blur: function (e, t) { t || clearTimeout(this.timer), this.active && (this.active.removeClass("ui-state-focus"), this.active = null, this._trigger("blur", e, { item: this.active })) }, _startOpening: function (e) { clearTimeout(this.timer), "true" === e.attr("aria-hidden") && (this.timer = this._delay(function () { this._close(), this._open(e) }, this.delay)) }, _open: function (t) { var i = e.extend({ of: this.active }, this.options.position); clearTimeout(this.timer), this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true"), t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i) }, collapseAll: function (t, i) { clearTimeout(this.timer), this.timer = this._delay(function () { var s = i ? this.element : e(t && t.target).closest(this.element.find(".ui-menu")); s.length || (s = this.element), this._close(s), this.blur(t), this.activeMenu = s }, this.delay) }, _close: function (e) { e || (e = this.active ? this.active.parent() : this.element), e.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active") }, _closeOnDocumentClick: function (t) { return !e(t.target).closest(".ui-menu").length }, _isDivider: function (e) { return !/[^\-\u2014\u2013\s]/.test(e.text()) }, collapse: function (e) { var t = this.active && this.active.parent().closest(".ui-menu-item", this.element); t && t.length && (this._close(), this.focus(e, t)) }, expand: function (e) { var t = this.active && this.active.children(".ui-menu ").find(this.options.items).first(); t && t.length && (this._open(t.parent()), this._delay(function () { this.focus(e, t) })) }, next: function (e) { this._move("next", "first", e) }, previous: function (e) { this._move("prev", "last", e) }, isFirstItem: function () { return this.active && !this.active.prevAll(".ui-menu-item").length }, isLastItem: function () { return this.active && !this.active.nextAll(".ui-menu-item").length }, _move: function (e, t, i) { var s; this.active && (s = "first" === e || "last" === e ? this.active["first" === e ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[e + "All"](".ui-menu-item").eq(0)), s && s.length && this.active || (s = this.activeMenu.find(this.options.items)[t]()), this.focus(i, s) }, nextPage: function (t) { var i, s, n; return this.active ? (this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () { return i = e(this), 0 > i.offset().top - s - n }), this.focus(t, i)) : this.focus(t, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]())), void 0) : (this.next(t), void 0) }, previousPage: function (t) { var i, s, n; return this.active ? (this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.prevAll(".ui-menu-item").each(function () { return i = e(this), i.offset().top - s + n > 0 }), this.focus(t, i)) : this.focus(t, this.activeMenu.find(this.options.items).first())), void 0) : (this.next(t), void 0) }, _hasScroll: function () { return this.element.outerHeight() < this.element.prop("scrollHeight") }, select: function (t) { this.active = this.active || e(t.target).closest(".ui-menu-item"); var i = { item: this.active }; this.active.has(".ui-menu").length || this.collapseAll(t, !0), this._trigger("select", t, i) }, _filterMenuItems: function (t) { var i = t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"), s = RegExp("^" + i, "i"); return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function () { return s.test(e.trim(e(this).text())) }) }
	}), e.widget("ui.autocomplete", { version: "1.11.4", defaultElement: "<input>", options: { appendTo: null, autoFocus: !1, delay: 300, minLength: 1, position: { my: "left top", at: "left bottom", collision: "none" }, source: null, change: null, close: null, focus: null, open: null, response: null, search: null, select: null }, requestIndex: 0, pending: 0, _create: function () { var t, i, s, n = this.element[0].nodeName.toLowerCase(), a = "textarea" === n, o = "input" === n; this.isMultiLine = a ? !0 : o ? !1 : this.element.prop("isContentEditable"), this.valueMethod = this.element[a || o ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, { keydown: function (n) { if (this.element.prop("readOnly")) return t = !0, s = !0, i = !0, void 0; t = !1, s = !1, i = !1; var a = e.ui.keyCode; switch (n.keyCode) { case a.PAGE_UP: t = !0, this._move("previousPage", n); break; case a.PAGE_DOWN: t = !0, this._move("nextPage", n); break; case a.UP: t = !0, this._keyEvent("previous", n); break; case a.DOWN: t = !0, this._keyEvent("next", n); break; case a.ENTER: this.menu.active && (t = !0, n.preventDefault(), this.menu.select(n)); break; case a.TAB: this.menu.active && this.menu.select(n); break; case a.ESCAPE: this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(n), n.preventDefault()); break; default: i = !0, this._searchTimeout(n) } }, keypress: function (s) { if (t) return t = !1, (!this.isMultiLine || this.menu.element.is(":visible")) && s.preventDefault(), void 0; if (!i) { var n = e.ui.keyCode; switch (s.keyCode) { case n.PAGE_UP: this._move("previousPage", s); break; case n.PAGE_DOWN: this._move("nextPage", s); break; case n.UP: this._keyEvent("previous", s); break; case n.DOWN: this._keyEvent("next", s) } } }, input: function (e) { return s ? (s = !1, e.preventDefault(), void 0) : (this._searchTimeout(e), void 0) }, focus: function () { this.selectedItem = null, this.previous = this._value() }, blur: function (e) { return this.cancelBlur ? (delete this.cancelBlur, void 0) : (clearTimeout(this.searching), this.close(e), this._change(e), void 0) } }), this._initSource(), this.menu = e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({ role: null }).hide().menu("instance"), this._on(this.menu.element, { mousedown: function (t) { t.preventDefault(), this.cancelBlur = !0, this._delay(function () { delete this.cancelBlur }); var i = this.menu.element[0]; e(t.target).closest(".ui-menu-item").length || this._delay(function () { var t = this; this.document.one("mousedown", function (s) { s.target === t.element[0] || s.target === i || e.contains(i, s.target) || t.close() }) }) }, menufocus: function (t, i) { var s, n; return this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type)) ? (this.menu.blur(), this.document.one("mousemove", function () { e(t.target).trigger(t.originalEvent) }), void 0) : (n = i.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", t, { item: n }) && t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(n.value), s = i.item.attr("aria-label") || n.value, s && e.trim(s).length && (this.liveRegion.children().hide(), e("<div>").text(s).appendTo(this.liveRegion)), void 0) }, menuselect: function (e, t) { var i = t.item.data("ui-autocomplete-item"), s = this.previous; this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = s, this._delay(function () { this.previous = s, this.selectedItem = i })), !1 !== this._trigger("select", e, { item: i }) && this._value(i.value), this.term = this._value(), this.close(e), this.selectedItem = i } }), this.liveRegion = e("<span>", { role: "status", "aria-live": "assertive", "aria-relevant": "additions" }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body), this._on(this.window, { beforeunload: function () { this.element.removeAttr("autocomplete") } }) }, _destroy: function () { clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove() }, _setOption: function (e, t) { this._super(e, t), "source" === e && this._initSource(), "appendTo" === e && this.menu.element.appendTo(this._appendTo()), "disabled" === e && t && this.xhr && this.xhr.abort() }, _appendTo: function () { var t = this.options.appendTo; return t && (t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0)), t && t[0] || (t = this.element.closest(".ui-front")), t.length || (t = this.document[0].body), t }, _initSource: function () { var t, i, s = this; e.isArray(this.options.source) ? (t = this.options.source, this.source = function (i, s) { s(e.ui.autocomplete.filter(t, i.term)) }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function (t, n) { s.xhr && s.xhr.abort(), s.xhr = e.ajax({ url: i, data: t, dataType: "json", success: function (e) { n(e) }, error: function () { n([]) } }) }) : this.source = this.options.source }, _searchTimeout: function (e) { clearTimeout(this.searching), this.searching = this._delay(function () { var t = this.term === this._value(), i = this.menu.element.is(":visible"), s = e.altKey || e.ctrlKey || e.metaKey || e.shiftKey; (!t || t && !i && !s) && (this.selectedItem = null, this.search(null, e)) }, this.options.delay) }, search: function (e, t) { return e = null != e ? e : this._value(), this.term = this._value(), e.length < this.options.minLength ? this.close(t) : this._trigger("search", t) !== !1 ? this._search(e) : void 0 }, _search: function (e) { this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({ term: e }, this._response()) }, _response: function () { var t = ++this.requestIndex; return e.proxy(function (e) { t === this.requestIndex && this.__response(e), this.pending--, this.pending || this.element.removeClass("ui-autocomplete-loading") }, this) }, __response: function (e) { e && (e = this._normalize(e)), this._trigger("response", null, { content: e }), !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e), this._trigger("open")) : this._close() }, close: function (e) { this.cancelSearch = !0, this._close(e) }, _close: function (e) { this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", e)) }, _change: function (e) { this.previous !== this._value() && this._trigger("change", e, { item: this.selectedItem }) }, _normalize: function (t) { return t.length && t[0].label && t[0].value ? t : e.map(t, function (t) { return "string" == typeof t ? { label: t, value: t } : e.extend({}, t, { label: t.label || t.value, value: t.value || t.label }) }) }, _suggest: function (t) { var i = this.menu.element.empty(); this._renderMenu(i, t), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(e.extend({ of: this.element }, this.options.position)), this.options.autoFocus && this.menu.next() }, _resizeMenu: function () { var e = this.menu.element; e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth())) }, _renderMenu: function (t, i) { var s = this; e.each(i, function (e, i) { s._renderItemData(t, i) }) }, _renderItemData: function (e, t) { return this._renderItem(e, t).data("ui-autocomplete-item", t) }, _renderItem: function (t, i) { return e("<li>").text(i.label).appendTo(t) }, _move: function (e, t) { return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e) ? (this.isMultiLine || this._value(this.term), this.menu.blur(), void 0) : (this.menu[e](t), void 0) : (this.search(null, t), void 0) }, widget: function () { return this.menu.element }, _value: function () { return this.valueMethod.apply(this.element, arguments) }, _keyEvent: function (e, t) { (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(e, t), t.preventDefault()) } }), e.extend(e.ui.autocomplete, { escapeRegex: function (e) { return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&") }, filter: function (t, i) { var s = RegExp(e.ui.autocomplete.escapeRegex(i), "i"); return e.grep(t, function (e) { return s.test(e.label || e.value || e) }) } }), e.widget("ui.autocomplete", e.ui.autocomplete, { options: { messages: { noResults: "No search results.", results: function (e) { return e + (e > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate." } } }, __response: function (t) { var i; this._superApply(arguments), this.options.disabled || this.cancelSearch || (i = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults, this.liveRegion.children().hide(), e("<div>").text(i).appendTo(this.liveRegion)) } }), e.ui.autocomplete; var c, p = "ui-button ui-widget ui-state-default ui-corner-all", f = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only", m = function () { var t = e(this); setTimeout(function () { t.find(":ui-button").button("refresh") }, 1) }, g = function (t) { var i = t.name, s = t.form, n = e([]); return i && (i = i.replace(/'/g, "\\'"), n = s ? e(s).find("[name='" + i + "'][type=radio]") : e("[name='" + i + "'][type=radio]", t.ownerDocument).filter(function () { return !this.form })), n }; e.widget("ui.button", { version: "1.11.4", defaultElement: "<button>", options: { disabled: null, text: !0, label: null, icons: { primary: null, secondary: null } }, _create: function () { this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, m), "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title"); var t = this, i = this.options, s = "checkbox" === this.type || "radio" === this.type, n = s ? "" : "ui-state-active"; null === i.label && (i.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(p).attr("role", "button").bind("mouseenter" + this.eventNamespace, function () { i.disabled || this === c && e(this).addClass("ui-state-active") }).bind("mouseleave" + this.eventNamespace, function () { i.disabled || e(this).removeClass(n) }).bind("click" + this.eventNamespace, function (e) { i.disabled && (e.preventDefault(), e.stopImmediatePropagation()) }), this._on({ focus: function () { this.buttonElement.addClass("ui-state-focus") }, blur: function () { this.buttonElement.removeClass("ui-state-focus") } }), s && this.element.bind("change" + this.eventNamespace, function () { t.refresh() }), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () { return i.disabled ? !1 : void 0 }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () { if (i.disabled) return !1; e(this).addClass("ui-state-active"), t.buttonElement.attr("aria-pressed", "true"); var s = t.element[0]; g(s).not(s).map(function () { return e(this).button("widget")[0] }).removeClass("ui-state-active").attr("aria-pressed", "false") }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function () { return i.disabled ? !1 : (e(this).addClass("ui-state-active"), c = this, t.document.one("mouseup", function () { c = null }), void 0) }).bind("mouseup" + this.eventNamespace, function () { return i.disabled ? !1 : (e(this).removeClass("ui-state-active"), void 0) }).bind("keydown" + this.eventNamespace, function (t) { return i.disabled ? !1 : ((t.keyCode === e.ui.keyCode.SPACE || t.keyCode === e.ui.keyCode.ENTER) && e(this).addClass("ui-state-active"), void 0) }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function () { e(this).removeClass("ui-state-active") }), this.buttonElement.is("a") && this.buttonElement.keyup(function (t) { t.keyCode === e.ui.keyCode.SPACE && e(this).click() })), this._setOption("disabled", i.disabled), this._resetButton() }, _determineButtonType: function () { var e, t, i; this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button", "checkbox" === this.type || "radio" === this.type ? (e = this.element.parents().last(), t = "label[for='" + this.element.attr("id") + "']", this.buttonElement = e.find(t), this.buttonElement.length || (e = e.length ? e.siblings() : this.element.siblings(), this.buttonElement = e.filter(t), this.buttonElement.length || (this.buttonElement = e.find(t))), this.element.addClass("ui-helper-hidden-accessible"), i = this.element.is(":checked"), i && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element }, widget: function () { return this.buttonElement }, _destroy: function () { this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(p + " ui-state-active " + f).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title") }, _setOption: function (e, t) { return this._super(e, t), "disabled" === e ? (this.widget().toggleClass("ui-state-disabled", !!t), this.element.prop("disabled", !!t), t && ("checkbox" === this.type || "radio" === this.type ? this.buttonElement.removeClass("ui-state-focus") : this.buttonElement.removeClass("ui-state-focus ui-state-active")), void 0) : (this._resetButton(), void 0) }, refresh: function () { var t = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled"); t !== this.options.disabled && this._setOption("disabled", t), "radio" === this.type ? g(this.element[0]).each(function () { e(this).is(":checked") ? e(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false") }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false")) }, _resetButton: function () { if ("input" === this.type) return this.options.label && this.element.val(this.options.label), void 0; var t = this.buttonElement.removeClass(f), i = e("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(), s = this.options.icons, n = s.primary && s.secondary, a = []; s.primary || s.secondary ? (this.options.text && a.push("ui-button-text-icon" + (n ? "s" : s.primary ? "-primary" : "-secondary")), s.primary && t.prepend("<span class='ui-button-icon-primary ui-icon " + s.primary + "'></span>"), s.secondary && t.append("<span class='ui-button-icon-secondary ui-icon " + s.secondary + "'></span>"), this.options.text || (a.push(n ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || t.attr("title", e.trim(i)))) : a.push("ui-button-text-only"), t.addClass(a.join(" ")) } }), e.widget("ui.buttonset", { version: "1.11.4", options: { items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)" }, _create: function () { this.element.addClass("ui-buttonset") }, _init: function () { this.refresh() }, _setOption: function (e, t) { "disabled" === e && this.buttons.button("option", e, t), this._super(e, t) }, refresh: function () { var t = "rtl" === this.element.css("direction"), i = this.element.find(this.options.items), s = i.filter(":ui-button"); i.not(":ui-button").button(), s.button("refresh"), this.buttons = i.map(function () { return e(this).button("widget")[0] }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(t ? "ui-corner-left" : "ui-corner-right").end().end() }, _destroy: function () { this.element.removeClass("ui-buttonset"), this.buttons.map(function () { return e(this).button("widget")[0] }).removeClass("ui-corner-left ui-corner-right").end().button("destroy") } }), e.ui.button, e.extend(e.ui, { datepicker: { version: "1.11.4" } }); var v; e.extend(n.prototype, {
		markerClassName: "hasDatepicker", maxRows: 4, _widgetDatepicker: function () { return this.dpDiv }, setDefaults: function (e) { return r(this._defaults, e || {}), this }, _attachDatepicker: function (t, i) { var s, n, a; s = t.nodeName.toLowerCase(), n = "div" === s || "span" === s, t.id || (this.uuid += 1, t.id = "dp" + this.uuid), a = this._newInst(e(t), n), a.settings = e.extend({}, i || {}), "input" === s ? this._connectDatepicker(t, a) : n && this._inlineDatepicker(t, a) }, _newInst: function (t, i) { var s = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"); return { id: s, input: t, selectedDay: 0, selectedMonth: 0, selectedYear: 0, drawMonth: 0, drawYear: 0, inline: i, dpDiv: i ? a(e("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv } }, _connectDatepicker: function (t, i) { var s = e(t); i.append = e([]), i.trigger = e([]), s.hasClass(this.markerClassName) || (this._attachments(s, i), s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(i), e.data(t, "datepicker", i), i.settings.disabled && this._disableDatepicker(t)) }, _attachments: function (t, i) { var s, n, a, o = this._get(i, "appendText"), r = this._get(i, "isRTL"); i.append && i.append.remove(), o && (i.append = e("<span class='" + this._appendClass + "'>" + o + "</span>"), t[r ? "before" : "after"](i.append)), t.unbind("focus", this._showDatepicker), i.trigger && i.trigger.remove(), s = this._get(i, "showOn"), ("focus" === s || "both" === s) && t.focus(this._showDatepicker), ("button" === s || "both" === s) && (n = this._get(i, "buttonText"), a = this._get(i, "buttonImage"), i.trigger = e(this._get(i, "buttonImageOnly") ? e("<img/>").addClass(this._triggerClass).attr({ src: a, alt: n, title: n }) : e("<button type='button'></button>").addClass(this._triggerClass).html(a ? e("<img/>").attr({ src: a, alt: n, title: n }) : n)), t[r ? "before" : "after"](i.trigger), i.trigger.click(function () { return e.datepicker._datepickerShowing && e.datepicker._lastInput === t[0] ? e.datepicker._hideDatepicker() : e.datepicker._datepickerShowing && e.datepicker._lastInput !== t[0] ? (e.datepicker._hideDatepicker(), e.datepicker._showDatepicker(t[0])) : e.datepicker._showDatepicker(t[0]), !1 })) }, _autoSize: function (e) { if (this._get(e, "autoSize") && !e.inline) { var t, i, s, n, a = new Date(2009, 11, 20), o = this._get(e, "dateFormat"); o.match(/[DM]/) && (t = function (e) { for (i = 0, s = 0, n = 0; e.length > n; n++)e[n].length > i && (i = e[n].length, s = n); return s }, a.setMonth(t(this._get(e, o.match(/MM/) ? "monthNames" : "monthNamesShort"))), a.setDate(t(this._get(e, o.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - a.getDay())), e.input.attr("size", this._formatDate(e, a).length) } }, _inlineDatepicker: function (t, i) { var s = e(t); s.hasClass(this.markerClassName) || (s.addClass(this.markerClassName).append(i.dpDiv), e.data(t, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(t), i.dpDiv.css("display", "block")) }, _dialogDatepicker: function (t, i, s, n, a) { var o, h, l, u, d, c = this._dialogInst; return c || (this.uuid += 1, o = "dp" + this.uuid, this._dialogInput = e("<input type='text' id='" + o + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), e("body").append(this._dialogInput), c = this._dialogInst = this._newInst(this._dialogInput, !1), c.settings = {}, e.data(this._dialogInput[0], "datepicker", c)), r(c.settings, n || {}), i = i && i.constructor === Date ? this._formatDate(c, i) : i, this._dialogInput.val(i), this._pos = a ? a.length ? a : [a.pageX, a.pageY] : null, this._pos || (h = document.documentElement.clientWidth, l = document.documentElement.clientHeight, u = document.documentElement.scrollLeft || document.body.scrollLeft, d = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [h / 2 - 100 + u, l / 2 - 150 + d]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), c.settings.onSelect = s, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), e.blockUI && e.blockUI(this.dpDiv), e.data(this._dialogInput[0], "datepicker", c), this }, _destroyDatepicker: function (t) { var i, s = e(t), n = e.data(t, "datepicker"); s.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), e.removeData(t, "datepicker"), "input" === i ? (n.append.remove(), n.trigger.remove(), s.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && s.removeClass(this.markerClassName).empty(), v === n && (v = null)) }, _enableDatepicker: function (t) { var i, s, n = e(t), a = e.data(t, "datepicker"); n.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !1, a.trigger.filter("button").each(function () { this.disabled = !1 }).end().filter("img").css({ opacity: "1.0", cursor: "" })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().removeClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = e.map(this._disabledInputs, function (e) { return e === t ? null : e })) }, _disableDatepicker: function (t) { var i, s, n = e(t), a = e.data(t, "datepicker"); n.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !0, a.trigger.filter("button").each(function () { this.disabled = !0 }).end().filter("img").css({ opacity: "0.5", cursor: "default" })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().addClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = e.map(this._disabledInputs, function (e) { return e === t ? null : e }), this._disabledInputs[this._disabledInputs.length] = t) }, _isDisabledDatepicker: function (e) { if (!e) return !1; for (var t = 0; this._disabledInputs.length > t; t++)if (this._disabledInputs[t] === e) return !0; return !1 }, _getInst: function (t) { try { return e.data(t, "datepicker") } catch (i) { throw "Missing instance data for this datepicker" } }, _optionDatepicker: function (t, i, s) { var n, a, o, h, l = this._getInst(t); return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? e.extend({}, e.datepicker._defaults) : l ? "all" === i ? e.extend({}, l.settings) : this._get(l, i) : null : (n = i || {}, "string" == typeof i && (n = {}, n[i] = s), l && (this._curInst === l && this._hideDatepicker(), a = this._getDateDatepicker(t, !0), o = this._getMinMaxDate(l, "min"), h = this._getMinMaxDate(l, "max"), r(l.settings, n), null !== o && void 0 !== n.dateFormat && void 0 === n.minDate && (l.settings.minDate = this._formatDate(l, o)), null !== h && void 0 !== n.dateFormat && void 0 === n.maxDate && (l.settings.maxDate = this._formatDate(l, h)), "disabled" in n && (n.disabled ? this._disableDatepicker(t) : this._enableDatepicker(t)), this._attachments(e(t), l), this._autoSize(l), this._setDate(l, a), this._updateAlternate(l), this._updateDatepicker(l)), void 0) }, _changeDatepicker: function (e, t, i) { this._optionDatepicker(e, t, i) }, _refreshDatepicker: function (e) { var t = this._getInst(e); t && this._updateDatepicker(t) }, _setDateDatepicker: function (e, t) { var i = this._getInst(e); i && (this._setDate(i, t), this._updateDatepicker(i), this._updateAlternate(i)) }, _getDateDatepicker: function (e, t) { var i = this._getInst(e); return i && !i.inline && this._setDateFromField(i, t), i ? this._getDate(i) : null }, _doKeyDown: function (t) { var i, s, n, a = e.datepicker._getInst(t.target), o = !0, r = a.dpDiv.is(".ui-datepicker-rtl"); if (a._keyEvent = !0, e.datepicker._datepickerShowing) switch (t.keyCode) { case 9: e.datepicker._hideDatepicker(), o = !1; break; case 13: return n = e("td." + e.datepicker._dayOverClass + ":not(." + e.datepicker._currentClass + ")", a.dpDiv), n[0] && e.datepicker._selectDay(t.target, a.selectedMonth, a.selectedYear, n[0]), i = e.datepicker._get(a, "onSelect"), i ? (s = e.datepicker._formatDate(a), i.apply(a.input ? a.input[0] : null, [s, a])) : e.datepicker._hideDatepicker(), !1; case 27: e.datepicker._hideDatepicker(); break; case 33: e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(a, "stepBigMonths") : -e.datepicker._get(a, "stepMonths"), "M"); break; case 34: e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(a, "stepBigMonths") : +e.datepicker._get(a, "stepMonths"), "M"); break; case 35: (t.ctrlKey || t.metaKey) && e.datepicker._clearDate(t.target), o = t.ctrlKey || t.metaKey; break; case 36: (t.ctrlKey || t.metaKey) && e.datepicker._gotoToday(t.target), o = t.ctrlKey || t.metaKey; break; case 37: (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, r ? 1 : -1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(a, "stepBigMonths") : -e.datepicker._get(a, "stepMonths"), "M"); break; case 38: (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, -7, "D"), o = t.ctrlKey || t.metaKey; break; case 39: (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, r ? -1 : 1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(a, "stepBigMonths") : +e.datepicker._get(a, "stepMonths"), "M"); break; case 40: (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, 7, "D"), o = t.ctrlKey || t.metaKey; break; default: o = !1 } else 36 === t.keyCode && t.ctrlKey ? e.datepicker._showDatepicker(this) : o = !1; o && (t.preventDefault(), t.stopPropagation()) }, _doKeyPress: function (t) {
			var i, s, n = e.datepicker._getInst(t.target);
			return e.datepicker._get(n, "constrainInput") ? (i = e.datepicker._possibleChars(e.datepicker._get(n, "dateFormat")), s = String.fromCharCode(null == t.charCode ? t.keyCode : t.charCode), t.ctrlKey || t.metaKey || " " > s || !i || i.indexOf(s) > -1) : void 0
		}, _doKeyUp: function (t) { var i, s = e.datepicker._getInst(t.target); if (s.input.val() !== s.lastVal) try { i = e.datepicker.parseDate(e.datepicker._get(s, "dateFormat"), s.input ? s.input.val() : null, e.datepicker._getFormatConfig(s)), i && (e.datepicker._setDateFromField(s), e.datepicker._updateAlternate(s), e.datepicker._updateDatepicker(s)) } catch (n) { } return !0 }, _showDatepicker: function (t) { if (t = t.target || t, "input" !== t.nodeName.toLowerCase() && (t = e("input", t.parentNode)[0]), !e.datepicker._isDisabledDatepicker(t) && e.datepicker._lastInput !== t) { var i, n, a, o, h, l, u; i = e.datepicker._getInst(t), e.datepicker._curInst && e.datepicker._curInst !== i && (e.datepicker._curInst.dpDiv.stop(!0, !0), i && e.datepicker._datepickerShowing && e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])), n = e.datepicker._get(i, "beforeShow"), a = n ? n.apply(t, [t, i]) : {}, a !== !1 && (r(i.settings, a), i.lastVal = null, e.datepicker._lastInput = t, e.datepicker._setDateFromField(i), e.datepicker._inDialog && (t.value = ""), e.datepicker._pos || (e.datepicker._pos = e.datepicker._findPos(t), e.datepicker._pos[1] += t.offsetHeight), o = !1, e(t).parents().each(function () { return o |= "fixed" === e(this).css("position"), !o }), h = { left: e.datepicker._pos[0], top: e.datepicker._pos[1] }, e.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({ position: "absolute", display: "block", top: "-1000px" }), e.datepicker._updateDatepicker(i), h = e.datepicker._checkOffset(i, h, o), i.dpDiv.css({ position: e.datepicker._inDialog && e.blockUI ? "static" : o ? "fixed" : "absolute", display: "none", left: h.left + "px", top: h.top + "px" }), i.inline || (l = e.datepicker._get(i, "showAnim"), u = e.datepicker._get(i, "duration"), i.dpDiv.css("z-index", s(e(t)) + 1), e.datepicker._datepickerShowing = !0, e.effects && e.effects.effect[l] ? i.dpDiv.show(l, e.datepicker._get(i, "showOptions"), u) : i.dpDiv[l || "show"](l ? u : null), e.datepicker._shouldFocusInput(i) && i.input.focus(), e.datepicker._curInst = i)) } }, _updateDatepicker: function (t) { this.maxRows = 4, v = t, t.dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t); var i, s = this._getNumberOfMonths(t), n = s[1], a = 17, r = t.dpDiv.find("." + this._dayOverClass + " a"); r.length > 0 && o.apply(r.get(0)), t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), n > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + n).css("width", a * n + "em"), t.dpDiv[(1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t === e.datepicker._curInst && e.datepicker._datepickerShowing && e.datepicker._shouldFocusInput(t) && t.input.focus(), t.yearshtml && (i = t.yearshtml, setTimeout(function () { i === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), i = t.yearshtml = null }, 0)) }, _shouldFocusInput: function (e) { return e.input && e.input.is(":visible") && !e.input.is(":disabled") && !e.input.is(":focus") }, _checkOffset: function (t, i, s) { var n = t.dpDiv.outerWidth(), a = t.dpDiv.outerHeight(), o = t.input ? t.input.outerWidth() : 0, r = t.input ? t.input.outerHeight() : 0, h = document.documentElement.clientWidth + (s ? 0 : e(document).scrollLeft()), l = document.documentElement.clientHeight + (s ? 0 : e(document).scrollTop()); return i.left -= this._get(t, "isRTL") ? n - o : 0, i.left -= s && i.left === t.input.offset().left ? e(document).scrollLeft() : 0, i.top -= s && i.top === t.input.offset().top + r ? e(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + n > h && h > n ? Math.abs(i.left + n - h) : 0), i.top -= Math.min(i.top, i.top + a > l && l > a ? Math.abs(a + r) : 0), i }, _findPos: function (t) { for (var i, s = this._getInst(t), n = this._get(s, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || e.expr.filters.hidden(t));)t = t[n ? "previousSibling" : "nextSibling"]; return i = e(t).offset(), [i.left, i.top] }, _hideDatepicker: function (t) { var i, s, n, a, o = this._curInst; !o || t && o !== e.data(t, "datepicker") || this._datepickerShowing && (i = this._get(o, "showAnim"), s = this._get(o, "duration"), n = function () { e.datepicker._tidyDialog(o) }, e.effects && (e.effects.effect[i] || e.effects[i]) ? o.dpDiv.hide(i, e.datepicker._get(o, "showOptions"), s, n) : o.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? s : null, n), i || n(), this._datepickerShowing = !1, a = this._get(o, "onClose"), a && a.apply(o.input ? o.input[0] : null, [o.input ? o.input.val() : "", o]), this._lastInput = null, this._inDialog && (this._dialogInput.css({ position: "absolute", left: "0", top: "-100px" }), e.blockUI && (e.unblockUI(), e("body").append(this.dpDiv))), this._inDialog = !1) }, _tidyDialog: function (e) { e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar") }, _checkExternalClick: function (t) { if (e.datepicker._curInst) { var i = e(t.target), s = e.datepicker._getInst(i[0]); (i[0].id !== e.datepicker._mainDivId && 0 === i.parents("#" + e.datepicker._mainDivId).length && !i.hasClass(e.datepicker.markerClassName) && !i.closest("." + e.datepicker._triggerClass).length && e.datepicker._datepickerShowing && (!e.datepicker._inDialog || !e.blockUI) || i.hasClass(e.datepicker.markerClassName) && e.datepicker._curInst !== s) && e.datepicker._hideDatepicker() } }, _adjustDate: function (t, i, s) { var n = e(t), a = this._getInst(n[0]); this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(a, i + ("M" === s ? this._get(a, "showCurrentAtPos") : 0), s), this._updateDatepicker(a)) }, _gotoToday: function (t) { var i, s = e(t), n = this._getInst(s[0]); this._get(n, "gotoCurrent") && n.currentDay ? (n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, n.drawYear = n.selectedYear = n.currentYear) : (i = new Date, n.selectedDay = i.getDate(), n.drawMonth = n.selectedMonth = i.getMonth(), n.drawYear = n.selectedYear = i.getFullYear()), this._notifyChange(n), this._adjustDate(s) }, _selectMonthYear: function (t, i, s) { var n = e(t), a = this._getInst(n[0]); a["selected" + ("M" === s ? "Month" : "Year")] = a["draw" + ("M" === s ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(a), this._adjustDate(n) }, _selectDay: function (t, i, s, n) { var a, o = e(t); e(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(o[0]) || (a = this._getInst(o[0]), a.selectedDay = a.currentDay = e("a", n).html(), a.selectedMonth = a.currentMonth = i, a.selectedYear = a.currentYear = s, this._selectDate(t, this._formatDate(a, a.currentDay, a.currentMonth, a.currentYear))) }, _clearDate: function (t) { var i = e(t); this._selectDate(i, "") }, _selectDate: function (t, i) { var s, n = e(t), a = this._getInst(n[0]); i = null != i ? i : this._formatDate(a), a.input && a.input.val(i), this._updateAlternate(a), s = this._get(a, "onSelect"), s ? s.apply(a.input ? a.input[0] : null, [i, a]) : a.input && a.input.trigger("change"), a.inline ? this._updateDatepicker(a) : (this._hideDatepicker(), this._lastInput = a.input[0], "object" != typeof a.input[0] && a.input.focus(), this._lastInput = null) }, _updateAlternate: function (t) { var i, s, n, a = this._get(t, "altField"); a && (i = this._get(t, "altFormat") || this._get(t, "dateFormat"), s = this._getDate(t), n = this.formatDate(i, s, this._getFormatConfig(t)), e(a).each(function () { e(this).val(n) })) }, noWeekends: function (e) { var t = e.getDay(); return [t > 0 && 6 > t, ""] }, iso8601Week: function (e) { var t, i = new Date(e.getTime()); return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), t = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((t - i) / 864e5) / 7) + 1 }, parseDate: function (t, i, s) { if (null == t || null == i) throw "Invalid arguments"; if (i = "object" == typeof i ? "" + i : i + "", "" === i) return null; var n, a, o, r, h = 0, l = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff, u = "string" != typeof l ? l : (new Date).getFullYear() % 100 + parseInt(l, 10), d = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort, c = (s ? s.dayNames : null) || this._defaults.dayNames, p = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort, f = (s ? s.monthNames : null) || this._defaults.monthNames, m = -1, g = -1, v = -1, y = -1, b = !1, _ = function (e) { var i = t.length > n + 1 && t.charAt(n + 1) === e; return i && n++, i }, x = function (e) { var t = _(e), s = "@" === e ? 14 : "!" === e ? 20 : "y" === e && t ? 4 : "o" === e ? 3 : 2, n = "y" === e ? s : 1, a = RegExp("^\\d{" + n + "," + s + "}"), o = i.substring(h).match(a); if (!o) throw "Missing number at position " + h; return h += o[0].length, parseInt(o[0], 10) }, w = function (t, s, n) { var a = -1, o = e.map(_(t) ? n : s, function (e, t) { return [[t, e]] }).sort(function (e, t) { return -(e[1].length - t[1].length) }); if (e.each(o, function (e, t) { var s = t[1]; return i.substr(h, s.length).toLowerCase() === s.toLowerCase() ? (a = t[0], h += s.length, !1) : void 0 }), -1 !== a) return a + 1; throw "Unknown name at position " + h }, k = function () { if (i.charAt(h) !== t.charAt(n)) throw "Unexpected literal at position " + h; h++ }; for (n = 0; t.length > n; n++)if (b) "'" !== t.charAt(n) || _("'") ? k() : b = !1; else switch (t.charAt(n)) { case "d": v = x("d"); break; case "D": w("D", d, c); break; case "o": y = x("o"); break; case "m": g = x("m"); break; case "M": g = w("M", p, f); break; case "y": m = x("y"); break; case "@": r = new Date(x("@")), m = r.getFullYear(), g = r.getMonth() + 1, v = r.getDate(); break; case "!": r = new Date((x("!") - this._ticksTo1970) / 1e4), m = r.getFullYear(), g = r.getMonth() + 1, v = r.getDate(); break; case "'": _("'") ? k() : b = !0; break; default: k() }if (i.length > h && (o = i.substr(h), !/^\s+/.test(o))) throw "Extra/unparsed characters found in date: " + o; if (-1 === m ? m = (new Date).getFullYear() : 100 > m && (m += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (u >= m ? 0 : -100)), y > -1) for (g = 1, v = y; ;) { if (a = this._getDaysInMonth(m, g - 1), a >= v) break; g++, v -= a } if (r = this._daylightSavingAdjust(new Date(m, g - 1, v)), r.getFullYear() !== m || r.getMonth() + 1 !== g || r.getDate() !== v) throw "Invalid date"; return r }, ATOM: "yy-mm-dd", COOKIE: "D, dd M yy", ISO_8601: "yy-mm-dd", RFC_822: "D, d M y", RFC_850: "DD, dd-M-y", RFC_1036: "D, d M y", RFC_1123: "D, d M yy", RFC_2822: "D, d M yy", RSS: "D, d M y", TICKS: "!", TIMESTAMP: "@", W3C: "yy-mm-dd", _ticksTo1970: 1e7 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)), formatDate: function (e, t, i) { if (!t) return ""; var s, n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort, a = (i ? i.dayNames : null) || this._defaults.dayNames, o = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort, r = (i ? i.monthNames : null) || this._defaults.monthNames, h = function (t) { var i = e.length > s + 1 && e.charAt(s + 1) === t; return i && s++, i }, l = function (e, t, i) { var s = "" + t; if (h(e)) for (; i > s.length;)s = "0" + s; return s }, u = function (e, t, i, s) { return h(e) ? s[t] : i[t] }, d = "", c = !1; if (t) for (s = 0; e.length > s; s++)if (c) "'" !== e.charAt(s) || h("'") ? d += e.charAt(s) : c = !1; else switch (e.charAt(s)) { case "d": d += l("d", t.getDate(), 2); break; case "D": d += u("D", t.getDay(), n, a); break; case "o": d += l("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3); break; case "m": d += l("m", t.getMonth() + 1, 2); break; case "M": d += u("M", t.getMonth(), o, r); break; case "y": d += h("y") ? t.getFullYear() : (10 > t.getYear() % 100 ? "0" : "") + t.getYear() % 100; break; case "@": d += t.getTime(); break; case "!": d += 1e4 * t.getTime() + this._ticksTo1970; break; case "'": h("'") ? d += "'" : c = !0; break; default: d += e.charAt(s) }return d }, _possibleChars: function (e) { var t, i = "", s = !1, n = function (i) { var s = e.length > t + 1 && e.charAt(t + 1) === i; return s && t++, s }; for (t = 0; e.length > t; t++)if (s) "'" !== e.charAt(t) || n("'") ? i += e.charAt(t) : s = !1; else switch (e.charAt(t)) { case "d": case "m": case "y": case "@": i += "0123456789"; break; case "D": case "M": return null; case "'": n("'") ? i += "'" : s = !0; break; default: i += e.charAt(t) }return i }, _get: function (e, t) { return void 0 !== e.settings[t] ? e.settings[t] : this._defaults[t] }, _setDateFromField: function (e, t) { if (e.input.val() !== e.lastVal) { var i = this._get(e, "dateFormat"), s = e.lastVal = e.input ? e.input.val() : null, n = this._getDefaultDate(e), a = n, o = this._getFormatConfig(e); try { a = this.parseDate(i, s, o) || n } catch (r) { s = t ? "" : s } e.selectedDay = a.getDate(), e.drawMonth = e.selectedMonth = a.getMonth(), e.drawYear = e.selectedYear = a.getFullYear(), e.currentDay = s ? a.getDate() : 0, e.currentMonth = s ? a.getMonth() : 0, e.currentYear = s ? a.getFullYear() : 0, this._adjustInstDate(e) } }, _getDefaultDate: function (e) { return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date)) }, _determineDate: function (t, i, s) { var n = function (e) { var t = new Date; return t.setDate(t.getDate() + e), t }, a = function (i) { try { return e.datepicker.parseDate(e.datepicker._get(t, "dateFormat"), i, e.datepicker._getFormatConfig(t)) } catch (s) { } for (var n = (i.toLowerCase().match(/^c/) ? e.datepicker._getDate(t) : null) || new Date, a = n.getFullYear(), o = n.getMonth(), r = n.getDate(), h = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = h.exec(i); l;) { switch (l[2] || "d") { case "d": case "D": r += parseInt(l[1], 10); break; case "w": case "W": r += 7 * parseInt(l[1], 10); break; case "m": case "M": o += parseInt(l[1], 10), r = Math.min(r, e.datepicker._getDaysInMonth(a, o)); break; case "y": case "Y": a += parseInt(l[1], 10), r = Math.min(r, e.datepicker._getDaysInMonth(a, o)) }l = h.exec(i) } return new Date(a, o, r) }, o = null == i || "" === i ? s : "string" == typeof i ? a(i) : "number" == typeof i ? isNaN(i) ? s : n(i) : new Date(i.getTime()); return o = o && "Invalid Date" == "" + o ? s : o, o && (o.setHours(0), o.setMinutes(0), o.setSeconds(0), o.setMilliseconds(0)), this._daylightSavingAdjust(o) }, _daylightSavingAdjust: function (e) { return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null }, _setDate: function (e, t, i) { var s = !t, n = e.selectedMonth, a = e.selectedYear, o = this._restrictMinMax(e, this._determineDate(e, t, new Date)); e.selectedDay = e.currentDay = o.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = o.getMonth(), e.drawYear = e.selectedYear = e.currentYear = o.getFullYear(), n === e.selectedMonth && a === e.selectedYear || i || this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(s ? "" : this._formatDate(e)) }, _getDate: function (e) { var t = !e.currentYear || e.input && "" === e.input.val() ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay)); return t }, _attachHandlers: function (t) { var i = this._get(t, "stepMonths"), s = "#" + t.id.replace(/\\\\/g, "\\"); t.dpDiv.find("[data-handler]").map(function () { var t = { prev: function () { e.datepicker._adjustDate(s, -i, "M") }, next: function () { e.datepicker._adjustDate(s, +i, "M") }, hide: function () { e.datepicker._hideDatepicker() }, today: function () { e.datepicker._gotoToday(s) }, selectDay: function () { return e.datepicker._selectDay(s, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1 }, selectMonth: function () { return e.datepicker._selectMonthYear(s, this, "M"), !1 }, selectYear: function () { return e.datepicker._selectMonthYear(s, this, "Y"), !1 } }; e(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")]) }) }, _generateHTML: function (e) { var t, i, s, n, a, o, r, h, l, u, d, c, p, f, m, g, v, y, b, _, x, w, k, T, D, S, M, C, N, A, P, I, H, z, F, E, O, j, W, L = new Date, R = this._daylightSavingAdjust(new Date(L.getFullYear(), L.getMonth(), L.getDate())), Y = this._get(e, "isRTL"), B = this._get(e, "showButtonPanel"), J = this._get(e, "hideIfNoPrevNext"), q = this._get(e, "navigationAsDateFormat"), K = this._getNumberOfMonths(e), V = this._get(e, "showCurrentAtPos"), U = this._get(e, "stepMonths"), Q = 1 !== K[0] || 1 !== K[1], G = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)), X = this._getMinMaxDate(e, "min"), $ = this._getMinMaxDate(e, "max"), Z = e.drawMonth - V, et = e.drawYear; if (0 > Z && (Z += 12, et--), $) for (t = this._daylightSavingAdjust(new Date($.getFullYear(), $.getMonth() - K[0] * K[1] + 1, $.getDate())), t = X && X > t ? X : t; this._daylightSavingAdjust(new Date(et, Z, 1)) > t;)Z--, 0 > Z && (Z = 11, et--); for (e.drawMonth = Z, e.drawYear = et, i = this._get(e, "prevText"), i = q ? this.formatDate(i, this._daylightSavingAdjust(new Date(et, Z - U, 1)), this._getFormatConfig(e)) : i, s = this._canAdjustMonth(e, -1, et, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>" : J ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>", n = this._get(e, "nextText"), n = q ? this.formatDate(n, this._daylightSavingAdjust(new Date(et, Z + U, 1)), this._getFormatConfig(e)) : n, a = this._canAdjustMonth(e, 1, et, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>" : J ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>", o = this._get(e, "currentText"), r = this._get(e, "gotoCurrent") && e.currentDay ? G : R, o = q ? this.formatDate(o, r, this._getFormatConfig(e)) : o, h = e.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(e, "closeText") + "</button>", l = B ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Y ? h : "") + (this._isInRange(e, r) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + o + "</button>" : "") + (Y ? "" : h) + "</div>" : "", u = parseInt(this._get(e, "firstDay"), 10), u = isNaN(u) ? 0 : u, d = this._get(e, "showWeek"), c = this._get(e, "dayNames"), p = this._get(e, "dayNamesMin"), f = this._get(e, "monthNames"), m = this._get(e, "monthNamesShort"), g = this._get(e, "beforeShowDay"), v = this._get(e, "showOtherMonths"), y = this._get(e, "selectOtherMonths"), b = this._getDefaultDate(e), _ = "", w = 0; K[0] > w; w++) { for (k = "", this.maxRows = 4, T = 0; K[1] > T; T++) { if (D = this._daylightSavingAdjust(new Date(et, Z, e.selectedDay)), S = " ui-corner-all", M = "", Q) { if (M += "<div class='ui-datepicker-group", K[1] > 1) switch (T) { case 0: M += " ui-datepicker-group-first", S = " ui-corner-" + (Y ? "right" : "left"); break; case K[1] - 1: M += " ui-datepicker-group-last", S = " ui-corner-" + (Y ? "left" : "right"); break; default: M += " ui-datepicker-group-middle", S = "" }M += "'>" } for (M += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + S + "'>" + (/all|left/.test(S) && 0 === w ? Y ? a : s : "") + (/all|right/.test(S) && 0 === w ? Y ? s : a : "") + this._generateMonthYearHeader(e, Z, et, X, $, w > 0 || T > 0, f, m) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>", C = d ? "<th class='ui-datepicker-week-col'>" + this._get(e, "weekHeader") + "</th>" : "", x = 0; 7 > x; x++)N = (x + u) % 7, C += "<th scope='col'" + ((x + u + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + c[N] + "'>" + p[N] + "</span></th>"; for (M += C + "</tr></thead><tbody>", A = this._getDaysInMonth(et, Z), et === e.selectedYear && Z === e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, A)), P = (this._getFirstDayOfMonth(et, Z) - u + 7) % 7, I = Math.ceil((P + A) / 7), H = Q ? this.maxRows > I ? this.maxRows : I : I, this.maxRows = H, z = this._daylightSavingAdjust(new Date(et, Z, 1 - P)), F = 0; H > F; F++) { for (M += "<tr>", E = d ? "<td class='ui-datepicker-week-col'>" + this._get(e, "calculateWeek")(z) + "</td>" : "", x = 0; 7 > x; x++)O = g ? g.apply(e.input ? e.input[0] : null, [z]) : [!0, ""], j = z.getMonth() !== Z, W = j && !y || !O[0] || X && X > z || $ && z > $, E += "<td class='" + ((x + u + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (j ? " ui-datepicker-other-month" : "") + (z.getTime() === D.getTime() && Z === e.selectedMonth && e._keyEvent || b.getTime() === z.getTime() && b.getTime() === D.getTime() ? " " + this._dayOverClass : "") + (W ? " " + this._unselectableClass + " ui-state-disabled" : "") + (j && !v ? "" : " " + O[1] + (z.getTime() === G.getTime() ? " " + this._currentClass : "") + (z.getTime() === R.getTime() ? " ui-datepicker-today" : "")) + "'" + (j && !v || !O[2] ? "" : " title='" + O[2].replace(/'/g, "&#39;") + "'") + (W ? "" : " data-handler='selectDay' data-event='click' data-month='" + z.getMonth() + "' data-year='" + z.getFullYear() + "'") + ">" + (j && !v ? "&#xa0;" : W ? "<span class='ui-state-default'>" + z.getDate() + "</span>" : "<a class='ui-state-default" + (z.getTime() === R.getTime() ? " ui-state-highlight" : "") + (z.getTime() === G.getTime() ? " ui-state-active" : "") + (j ? " ui-priority-secondary" : "") + "' href='#'>" + z.getDate() + "</a>") + "</td>", z.setDate(z.getDate() + 1), z = this._daylightSavingAdjust(z); M += E + "</tr>" } Z++, Z > 11 && (Z = 0, et++), M += "</tbody></table>" + (Q ? "</div>" + (K[0] > 0 && T === K[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), k += M } _ += k } return _ += l, e._keyEvent = !1, _ }, _generateMonthYearHeader: function (e, t, i, s, n, a, o, r) { var h, l, u, d, c, p, f, m, g = this._get(e, "changeMonth"), v = this._get(e, "changeYear"), y = this._get(e, "showMonthAfterYear"), b = "<div class='ui-datepicker-title'>", _ = ""; if (a || !g) _ += "<span class='ui-datepicker-month'>" + o[t] + "</span>"; else { for (h = s && s.getFullYear() === i, l = n && n.getFullYear() === i, _ += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", u = 0; 12 > u; u++)(!h || u >= s.getMonth()) && (!l || n.getMonth() >= u) && (_ += "<option value='" + u + "'" + (u === t ? " selected='selected'" : "") + ">" + r[u] + "</option>"); _ += "</select>" } if (y || (b += _ + (!a && g && v ? "" : "&#xa0;")), !e.yearshtml) if (e.yearshtml = "", a || !v) b += "<span class='ui-datepicker-year'>" + i + "</span>"; else { for (d = this._get(e, "yearRange").split(":"), c = (new Date).getFullYear(), p = function (e) { var t = e.match(/c[+\-].*/) ? i + parseInt(e.substring(1), 10) : e.match(/[+\-].*/) ? c + parseInt(e, 10) : parseInt(e, 10); return isNaN(t) ? c : t }, f = p(d[0]), m = Math.max(f, p(d[1] || "")), f = s ? Math.max(f, s.getFullYear()) : f, m = n ? Math.min(m, n.getFullYear()) : m, e.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; m >= f; f++)e.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>"; e.yearshtml += "</select>", b += e.yearshtml, e.yearshtml = null } return b += this._get(e, "yearSuffix"), y && (b += (!a && g && v ? "" : "&#xa0;") + _), b += "</div>" }, _adjustInstDate: function (e, t, i) { var s = e.drawYear + ("Y" === i ? t : 0), n = e.drawMonth + ("M" === i ? t : 0), a = Math.min(e.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? t : 0), o = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(s, n, a))); e.selectedDay = o.getDate(), e.drawMonth = e.selectedMonth = o.getMonth(), e.drawYear = e.selectedYear = o.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(e) }, _restrictMinMax: function (e, t) { var i = this._getMinMaxDate(e, "min"), s = this._getMinMaxDate(e, "max"), n = i && i > t ? i : t; return s && n > s ? s : n }, _notifyChange: function (e) { var t = this._get(e, "onChangeMonthYear"); t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e]) }, _getNumberOfMonths: function (e) { var t = this._get(e, "numberOfMonths"); return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t }, _getMinMaxDate: function (e, t) { return this._determineDate(e, this._get(e, t + "Date"), null) }, _getDaysInMonth: function (e, t) { return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate() }, _getFirstDayOfMonth: function (e, t) { return new Date(e, t, 1).getDay() }, _canAdjustMonth: function (e, t, i, s) { var n = this._getNumberOfMonths(e), a = this._daylightSavingAdjust(new Date(i, s + (0 > t ? t : n[0] * n[1]), 1)); return 0 > t && a.setDate(this._getDaysInMonth(a.getFullYear(), a.getMonth())), this._isInRange(e, a) }, _isInRange: function (e, t) { var i, s, n = this._getMinMaxDate(e, "min"), a = this._getMinMaxDate(e, "max"), o = null, r = null, h = this._get(e, "yearRange"); return h && (i = h.split(":"), s = (new Date).getFullYear(), o = parseInt(i[0], 10), r = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (o += s), i[1].match(/[+\-].*/) && (r += s)), (!n || t.getTime() >= n.getTime()) && (!a || t.getTime() <= a.getTime()) && (!o || t.getFullYear() >= o) && (!r || r >= t.getFullYear()) }, _getFormatConfig: function (e) { var t = this._get(e, "shortYearCutoff"); return t = "string" != typeof t ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), { shortYearCutoff: t, dayNamesShort: this._get(e, "dayNamesShort"), dayNames: this._get(e, "dayNames"), monthNamesShort: this._get(e, "monthNamesShort"), monthNames: this._get(e, "monthNames") } }, _formatDate: function (e, t, i, s) { t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear); var n = t ? "object" == typeof t ? t : this._daylightSavingAdjust(new Date(s, i, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay)); return this.formatDate(this._get(e, "dateFormat"), n, this._getFormatConfig(e)) }
	}), e.fn.datepicker = function (t) { if (!this.length) return this; e.datepicker.initialized || (e(document).mousedown(e.datepicker._checkExternalClick), e.datepicker.initialized = !0), 0 === e("#" + e.datepicker._mainDivId).length && e("body").append(e.datepicker.dpDiv); var i = Array.prototype.slice.call(arguments, 1); return "string" != typeof t || "isDisabled" !== t && "getDate" !== t && "widget" !== t ? "option" === t && 2 === arguments.length && "string" == typeof arguments[1] ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(i)) : this.each(function () { "string" == typeof t ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this].concat(i)) : e.datepicker._attachDatepicker(this, t) }) : e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(i)) }, e.datepicker = new n, e.datepicker.initialized = !1, e.datepicker.uuid = (new Date).getTime(), e.datepicker.version = "1.11.4", e.datepicker, e.widget("ui.draggable", e.ui.mouse, {
		version: "1.11.4", widgetEventPrefix: "drag", options: { addClasses: !0, appendTo: "parent", axis: !1, connectToSortable: !1, containment: !1, cursor: "auto", cursorAt: !1, grid: !1, handle: !1, helper: "original", iframeFix: !1, opacity: !1, refreshPositions: !1, revert: !1, revertDuration: 500, scope: "default", scroll: !0, scrollSensitivity: 20, scrollSpeed: 20, snap: !1, snapMode: "both", snapTolerance: 20, stack: !1, zIndex: !1, drag: null, start: null, stop: null }, _create: function () { "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._setHandleClassName(), this._mouseInit() }, _setOption: function (e, t) { this._super(e, t), "handle" === e && (this._removeHandleClassName(), this._setHandleClassName()) }, _destroy: function () { return (this.helper || this.element).is(".ui-draggable-dragging") ? (this.destroyOnClear = !0, void 0) : (this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._removeHandleClassName(), this._mouseDestroy(), void 0) }, _mouseCapture: function (t) { var i = this.options; return this._blurActiveElement(t), this.helper || i.disabled || e(t.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(t), this.handle ? (this._blockFrames(i.iframeFix === !0 ? "iframe" : i.iframeFix), !0) : !1) }, _blockFrames: function (t) { this.iframeBlocks = this.document.find(t).map(function () { var t = e(this); return e("<div>").css("position", "absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0] }) }, _unblockFrames: function () { this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks) }, _blurActiveElement: function (t) { var i = this.document[0]; if (this.handleElement.is(t.target)) try { i.activeElement && "body" !== i.activeElement.nodeName.toLowerCase() && e(i.activeElement).blur() } catch (s) { } }, _mouseStart: function (t) { var i = this.options; return this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), e.ui.ddmanager && (e.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function () { return "fixed" === e(this).css("position") }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(t), this.originalPosition = this.position = this._generatePosition(t, !1), this.originalPageX = t.pageX, this.originalPageY = t.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this._normalizeRightBottom(), this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0) }, _refreshOffsets: function (e) { this.offset = { top: this.positionAbs.top - this.margins.top, left: this.positionAbs.left - this.margins.left, scroll: !1, parent: this._getParentOffset(), relative: this._getRelativeOffset() }, this.offset.click = { left: e.pageX - this.offset.left, top: e.pageY - this.offset.top } }, _mouseDrag: function (t, i) { if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(t, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) { var s = this._uiHash(); if (this._trigger("drag", t, s) === !1) return this._mouseUp({}), !1; this.position = s.position } return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1 }, _mouseStop: function (t) { var i = this, s = !1; return e.ui.ddmanager && !this.options.dropBehaviour && (s = e.ui.ddmanager.drop(this, t)), this.dropped && (s = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !s || "valid" === this.options.revert && s || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () { i._trigger("stop", t) !== !1 && i._clear() }) : this._trigger("stop", t) !== !1 && this._clear(), !1 }, _mouseUp: function (t) { return this._unblockFrames(), e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t), this.handleElement.is(t.target) && this.element.focus(), e.ui.mouse.prototype._mouseUp.call(this, t) }, cancel: function () { return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this }, _getHandle: function (t) { return this.options.handle ? !!e(t.target).closest(this.element.find(this.options.handle)).length : !0 }, _setHandleClassName: function () { this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this.handleElement.addClass("ui-draggable-handle") }, _removeHandleClassName: function () { this.handleElement.removeClass("ui-draggable-handle") }, _createHelper: function (t) { var i = this.options, s = e.isFunction(i.helper), n = s ? e(i.helper.apply(this.element[0], [t])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element; return n.parents("body").length || n.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), s && n[0] === this.element[0] && this._setPositionRelative(), n[0] === this.element[0] || /(fixed|absolute)/.test(n.css("position")) || n.css("position", "absolute"), n }, _setPositionRelative: function () { /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative") }, _adjustOffsetFromHelper: function (t) { "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = { left: +t[0], top: +t[1] || 0 }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top) }, _isRootNode: function (e) { return /(html|body)/i.test(e.tagName) || e === this.document[0] }, _getParentOffset: function () { var t = this.offsetParent.offset(), i = this.document[0]; return "absolute" === this.cssPosition && this.scrollParent[0] !== i && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (t = { top: 0, left: 0 }), { top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0) } }, _getRelativeOffset: function () { if ("relative" !== this.cssPosition) return { top: 0, left: 0 }; var e = this.element.position(), t = this._isRootNode(this.scrollParent[0]); return { top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + (t ? 0 : this.scrollParent.scrollTop()), left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + (t ? 0 : this.scrollParent.scrollLeft()) } }, _cacheMargins: function () { this.margins = { left: parseInt(this.element.css("marginLeft"), 10) || 0, top: parseInt(this.element.css("marginTop"), 10) || 0, right: parseInt(this.element.css("marginRight"), 10) || 0, bottom: parseInt(this.element.css("marginBottom"), 10) || 0 } }, _cacheHelperProportions: function () { this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() } }, _setContainment: function () {
			var t, i, s, n = this.options, a = this.document[0]; return this.relativeContainer = null, n.containment ? "window" === n.containment ? (this.containment = [e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, e(window).scrollLeft() + e(window).width() - this.helperProportions.width - this.margins.left, e(window).scrollTop() + (e(window).height() || a.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : "document" === n.containment ? (this.containment = [0, 0, e(a).width() - this.helperProportions.width - this.margins.left, (e(a).height() || a.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : n.containment.constructor === Array ? (this.containment = n.containment, void 0) : ("parent" === n.containment && (n.containment = this.helper[0].parentNode), i = e(n.containment), s = i[0], s && (t = /(scroll|auto)/.test(i.css("overflow")), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (t ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i), void 0) : (this.containment = null, void 0)
		}, _convertPositionTo: function (e, t) { t || (t = this.position); var i = "absolute" === e ? 1 : -1, s = this._isRootNode(this.scrollParent[0]); return { top: t.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : s ? 0 : this.offset.scroll.top) * i, left: t.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : s ? 0 : this.offset.scroll.left) * i } }, _generatePosition: function (e, t) { var i, s, n, a, o = this.options, r = this._isRootNode(this.scrollParent[0]), h = e.pageX, l = e.pageY; return r && this.offset.scroll || (this.offset.scroll = { top: this.scrollParent.scrollTop(), left: this.scrollParent.scrollLeft() }), t && (this.containment && (this.relativeContainer ? (s = this.relativeContainer.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, e.pageX - this.offset.click.left < i[0] && (h = i[0] + this.offset.click.left), e.pageY - this.offset.click.top < i[1] && (l = i[1] + this.offset.click.top), e.pageX - this.offset.click.left > i[2] && (h = i[2] + this.offset.click.left), e.pageY - this.offset.click.top > i[3] && (l = i[3] + this.offset.click.top)), o.grid && (n = o.grid[1] ? this.originalPageY + Math.round((l - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY, l = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - o.grid[1] : n + o.grid[1] : n, a = o.grid[0] ? this.originalPageX + Math.round((h - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX, h = i ? a - this.offset.click.left >= i[0] || a - this.offset.click.left > i[2] ? a : a - this.offset.click.left >= i[0] ? a - o.grid[0] : a + o.grid[0] : a), "y" === o.axis && (h = this.originalPageX), "x" === o.axis && (l = this.originalPageY)), { top: l - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top), left: h - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left) } }, _clear: function () { this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy() }, _normalizeRightBottom: function () { "y" !== this.options.axis && "auto" !== this.helper.css("right") && (this.helper.width(this.helper.width()), this.helper.css("right", "auto")), "x" !== this.options.axis && "auto" !== this.helper.css("bottom") && (this.helper.height(this.helper.height()), this.helper.css("bottom", "auto")) }, _trigger: function (t, i, s) { return s = s || this._uiHash(), e.ui.plugin.call(this, t, [i, s, this], !0), /^(drag|start|stop)/.test(t) && (this.positionAbs = this._convertPositionTo("absolute"), s.offset = this.positionAbs), e.Widget.prototype._trigger.call(this, t, i, s) }, plugins: {}, _uiHash: function () { return { helper: this.helper, position: this.position, originalPosition: this.originalPosition, offset: this.positionAbs } }
	}), e.ui.plugin.add("draggable", "connectToSortable", { start: function (t, i, s) { var n = e.extend({}, i, { item: s.element }); s.sortables = [], e(s.options.connectToSortable).each(function () { var i = e(this).sortable("instance"); i && !i.options.disabled && (s.sortables.push(i), i.refreshPositions(), i._trigger("activate", t, n)) }) }, stop: function (t, i, s) { var n = e.extend({}, i, { item: s.element }); s.cancelHelperRemoval = !1, e.each(s.sortables, function () { var e = this; e.isOver ? (e.isOver = 0, s.cancelHelperRemoval = !0, e.cancelHelperRemoval = !1, e._storedCSS = { position: e.placeholder.css("position"), top: e.placeholder.css("top"), left: e.placeholder.css("left") }, e._mouseStop(t), e.options.helper = e.options._helper) : (e.cancelHelperRemoval = !0, e._trigger("deactivate", t, n)) }) }, drag: function (t, i, s) { e.each(s.sortables, function () { var n = !1, a = this; a.positionAbs = s.positionAbs, a.helperProportions = s.helperProportions, a.offset.click = s.offset.click, a._intersectsWith(a.containerCache) && (n = !0, e.each(s.sortables, function () { return this.positionAbs = s.positionAbs, this.helperProportions = s.helperProportions, this.offset.click = s.offset.click, this !== a && this._intersectsWith(this.containerCache) && e.contains(a.element[0], this.element[0]) && (n = !1), n })), n ? (a.isOver || (a.isOver = 1, s._parent = i.helper.parent(), a.currentItem = i.helper.appendTo(a.element).data("ui-sortable-item", !0), a.options._helper = a.options.helper, a.options.helper = function () { return i.helper[0] }, t.target = a.currentItem[0], a._mouseCapture(t, !0), a._mouseStart(t, !0, !0), a.offset.click.top = s.offset.click.top, a.offset.click.left = s.offset.click.left, a.offset.parent.left -= s.offset.parent.left - a.offset.parent.left, a.offset.parent.top -= s.offset.parent.top - a.offset.parent.top, s._trigger("toSortable", t), s.dropped = a.element, e.each(s.sortables, function () { this.refreshPositions() }), s.currentItem = s.element, a.fromOutside = s), a.currentItem && (a._mouseDrag(t), i.position = a.position)) : a.isOver && (a.isOver = 0, a.cancelHelperRemoval = !0, a.options._revert = a.options.revert, a.options.revert = !1, a._trigger("out", t, a._uiHash(a)), a._mouseStop(t, !0), a.options.revert = a.options._revert, a.options.helper = a.options._helper, a.placeholder && a.placeholder.remove(), i.helper.appendTo(s._parent), s._refreshOffsets(t), i.position = s._generatePosition(t, !0), s._trigger("fromSortable", t), s.dropped = !1, e.each(s.sortables, function () { this.refreshPositions() })) }) } }), e.ui.plugin.add("draggable", "cursor", { start: function (t, i, s) { var n = e("body"), a = s.options; n.css("cursor") && (a._cursor = n.css("cursor")), n.css("cursor", a.cursor) }, stop: function (t, i, s) { var n = s.options; n._cursor && e("body").css("cursor", n._cursor) } }), e.ui.plugin.add("draggable", "opacity", { start: function (t, i, s) { var n = e(i.helper), a = s.options; n.css("opacity") && (a._opacity = n.css("opacity")), n.css("opacity", a.opacity) }, stop: function (t, i, s) { var n = s.options; n._opacity && e(i.helper).css("opacity", n._opacity) } }), e.ui.plugin.add("draggable", "scroll", { start: function (e, t, i) { i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset()) }, drag: function (t, i, s) { var n = s.options, a = !1, o = s.scrollParentNotHidden[0], r = s.document[0]; o !== r && "HTML" !== o.tagName ? (n.axis && "x" === n.axis || (s.overflowOffset.top + o.offsetHeight - t.pageY < n.scrollSensitivity ? o.scrollTop = a = o.scrollTop + n.scrollSpeed : t.pageY - s.overflowOffset.top < n.scrollSensitivity && (o.scrollTop = a = o.scrollTop - n.scrollSpeed)), n.axis && "y" === n.axis || (s.overflowOffset.left + o.offsetWidth - t.pageX < n.scrollSensitivity ? o.scrollLeft = a = o.scrollLeft + n.scrollSpeed : t.pageX - s.overflowOffset.left < n.scrollSensitivity && (o.scrollLeft = a = o.scrollLeft - n.scrollSpeed))) : (n.axis && "x" === n.axis || (t.pageY - e(r).scrollTop() < n.scrollSensitivity ? a = e(r).scrollTop(e(r).scrollTop() - n.scrollSpeed) : e(window).height() - (t.pageY - e(r).scrollTop()) < n.scrollSensitivity && (a = e(r).scrollTop(e(r).scrollTop() + n.scrollSpeed))), n.axis && "y" === n.axis || (t.pageX - e(r).scrollLeft() < n.scrollSensitivity ? a = e(r).scrollLeft(e(r).scrollLeft() - n.scrollSpeed) : e(window).width() - (t.pageX - e(r).scrollLeft()) < n.scrollSensitivity && (a = e(r).scrollLeft(e(r).scrollLeft() + n.scrollSpeed)))), a !== !1 && e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(s, t) } }), e.ui.plugin.add("draggable", "snap", { start: function (t, i, s) { var n = s.options; s.snapElements = [], e(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)" : n.snap).each(function () { var t = e(this), i = t.offset(); this !== s.element[0] && s.snapElements.push({ item: this, width: t.outerWidth(), height: t.outerHeight(), top: i.top, left: i.left }) }) }, drag: function (t, i, s) { var n, a, o, r, h, l, u, d, c, p, f = s.options, m = f.snapTolerance, g = i.offset.left, v = g + s.helperProportions.width, y = i.offset.top, b = y + s.helperProportions.height; for (c = s.snapElements.length - 1; c >= 0; c--)h = s.snapElements[c].left - s.margins.left, l = h + s.snapElements[c].width, u = s.snapElements[c].top - s.margins.top, d = u + s.snapElements[c].height, h - m > v || g > l + m || u - m > b || y > d + m || !e.contains(s.snapElements[c].item.ownerDocument, s.snapElements[c].item) ? (s.snapElements[c].snapping && s.options.snap.release && s.options.snap.release.call(s.element, t, e.extend(s._uiHash(), { snapItem: s.snapElements[c].item })), s.snapElements[c].snapping = !1) : ("inner" !== f.snapMode && (n = m >= Math.abs(u - b), a = m >= Math.abs(d - y), o = m >= Math.abs(h - v), r = m >= Math.abs(l - g), n && (i.position.top = s._convertPositionTo("relative", { top: u - s.helperProportions.height, left: 0 }).top), a && (i.position.top = s._convertPositionTo("relative", { top: d, left: 0 }).top), o && (i.position.left = s._convertPositionTo("relative", { top: 0, left: h - s.helperProportions.width }).left), r && (i.position.left = s._convertPositionTo("relative", { top: 0, left: l }).left)), p = n || a || o || r, "outer" !== f.snapMode && (n = m >= Math.abs(u - y), a = m >= Math.abs(d - b), o = m >= Math.abs(h - g), r = m >= Math.abs(l - v), n && (i.position.top = s._convertPositionTo("relative", { top: u, left: 0 }).top), a && (i.position.top = s._convertPositionTo("relative", { top: d - s.helperProportions.height, left: 0 }).top), o && (i.position.left = s._convertPositionTo("relative", { top: 0, left: h }).left), r && (i.position.left = s._convertPositionTo("relative", { top: 0, left: l - s.helperProportions.width }).left)), !s.snapElements[c].snapping && (n || a || o || r || p) && s.options.snap.snap && s.options.snap.snap.call(s.element, t, e.extend(s._uiHash(), { snapItem: s.snapElements[c].item })), s.snapElements[c].snapping = n || a || o || r || p) } }), e.ui.plugin.add("draggable", "stack", { start: function (t, i, s) { var n, a = s.options, o = e.makeArray(e(a.stack)).sort(function (t, i) { return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(i).css("zIndex"), 10) || 0) }); o.length && (n = parseInt(e(o[0]).css("zIndex"), 10) || 0, e(o).each(function (t) { e(this).css("zIndex", n + t) }), this.css("zIndex", n + o.length)) } }), e.ui.plugin.add("draggable", "zIndex", { start: function (t, i, s) { var n = e(i.helper), a = s.options; n.css("zIndex") && (a._zIndex = n.css("zIndex")), n.css("zIndex", a.zIndex) }, stop: function (t, i, s) { var n = s.options; n._zIndex && e(i.helper).css("zIndex", n._zIndex) } }), e.ui.draggable, e.widget("ui.resizable", e.ui.mouse, { version: "1.11.4", widgetEventPrefix: "resize", options: { alsoResize: !1, animate: !1, animateDuration: "slow", animateEasing: "swing", aspectRatio: !1, autoHide: !1, containment: !1, ghost: !1, grid: !1, handles: "e,s,se", helper: !1, maxHeight: null, maxWidth: null, minHeight: 10, minWidth: 10, zIndex: 90, resize: null, start: null, stop: null }, _num: function (e) { return parseInt(e, 10) || 0 }, _isNumber: function (e) { return !isNaN(parseInt(e, 10)) }, _hasScroll: function (t, i) { if ("hidden" === e(t).css("overflow")) return !1; var s = i && "left" === i ? "scrollLeft" : "scrollTop", n = !1; return t[s] > 0 ? !0 : (t[s] = 1, n = t[s] > 0, t[s] = 0, n) }, _create: function () { var t, i, s, n, a, o = this, r = this.options; if (this.element.addClass("ui-resizable"), e.extend(this, { _aspectRatio: !!r.aspectRatio, aspectRatio: r.aspectRatio, originalElement: this.element, _proportionallyResizeElements: [], _helper: r.helper || r.ghost || r.animate ? r.helper || "ui-resizable-helper" : null }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({ position: this.element.css("position"), width: this.element.outerWidth(), height: this.element.outerHeight(), top: this.element.css("top"), left: this.element.css("left") })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, this.element.css({ marginLeft: this.originalElement.css("marginLeft"), marginTop: this.originalElement.css("marginTop"), marginRight: this.originalElement.css("marginRight"), marginBottom: this.originalElement.css("marginBottom") }), this.originalElement.css({ marginLeft: 0, marginTop: 0, marginRight: 0, marginBottom: 0 }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({ position: "static", zoom: 1, display: "block" })), this.originalElement.css({ margin: this.originalElement.css("margin") }), this._proportionallyResize()), this.handles = r.handles || (e(".ui-resizable-handle", this.element).length ? { n: ".ui-resizable-n", e: ".ui-resizable-e", s: ".ui-resizable-s", w: ".ui-resizable-w", se: ".ui-resizable-se", sw: ".ui-resizable-sw", ne: ".ui-resizable-ne", nw: ".ui-resizable-nw" } : "e,s,se"), this._handles = e(), this.handles.constructor === String) for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), t = this.handles.split(","), this.handles = {}, i = 0; t.length > i; i++)s = e.trim(t[i]), a = "ui-resizable-" + s, n = e("<div class='ui-resizable-handle " + a + "'></div>"), n.css({ zIndex: r.zIndex }), "se" === s && n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[s] = ".ui-resizable-" + s, this.element.append(n); this._renderAxis = function (t) { var i, s, n, a; t = t || this.element; for (i in this.handles) this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = e(this.handles[i]), this._on(this.handles[i], { mousedown: o._mouseDown })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (s = e(this.handles[i], this.element), a = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(), n = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), t.css(n, a), this._proportionallyResize()), this._handles = this._handles.add(this.handles[i]) }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.mouseover(function () { o.resizing || (this.className && (n = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), o.axis = n && n[1] ? n[1] : "se") }), r.autoHide && (this._handles.hide(), e(this.element).addClass("ui-resizable-autohide").mouseenter(function () { r.disabled || (e(this).removeClass("ui-resizable-autohide"), o._handles.show()) }).mouseleave(function () { r.disabled || o.resizing || (e(this).addClass("ui-resizable-autohide"), o._handles.hide()) })), this._mouseInit() }, _destroy: function () { this._mouseDestroy(); var t, i = function (t) { e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove() }; return this.elementIsWrapper && (i(this.element), t = this.element, this.originalElement.css({ position: t.css("position"), width: t.outerWidth(), height: t.outerHeight(), top: t.css("top"), left: t.css("left") }).insertAfter(t), t.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this }, _mouseCapture: function (t) { var i, s, n = !1; for (i in this.handles) s = e(this.handles[i])[0], (s === t.target || e.contains(s, t.target)) && (n = !0); return !this.options.disabled && n }, _mouseStart: function (t) { var i, s, n, a = this.options, o = this.element; return this.resizing = !0, this._renderProxy(), i = this._num(this.helper.css("left")), s = this._num(this.helper.css("top")), a.containment && (i += e(a.containment).scrollLeft() || 0, s += e(a.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = { left: i, top: s }, this.size = this._helper ? { width: this.helper.width(), height: this.helper.height() } : { width: o.width(), height: o.height() }, this.originalSize = this._helper ? { width: o.outerWidth(), height: o.outerHeight() } : { width: o.width(), height: o.height() }, this.sizeDiff = { width: o.outerWidth() - o.width(), height: o.outerHeight() - o.height() }, this.originalPosition = { left: i, top: s }, this.originalMousePosition = { left: t.pageX, top: t.pageY }, this.aspectRatio = "number" == typeof a.aspectRatio ? a.aspectRatio : this.originalSize.width / this.originalSize.height || 1, n = e(".ui-resizable-" + this.axis).css("cursor"), e("body").css("cursor", "auto" === n ? this.axis + "-resize" : n), o.addClass("ui-resizable-resizing"), this._propagate("start", t), !0 }, _mouseDrag: function (t) { var i, s, n = this.originalMousePosition, a = this.axis, o = t.pageX - n.left || 0, r = t.pageY - n.top || 0, h = this._change[a]; return this._updatePrevProperties(), h ? (i = h.apply(this, [t, o, r]), this._updateVirtualBoundaries(t.shiftKey), (this._aspectRatio || t.shiftKey) && (i = this._updateRatio(i, t)), i = this._respectSize(i, t), this._updateCache(i), this._propagate("resize", t), s = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), e.isEmptyObject(s) || (this._updatePrevProperties(), this._trigger("resize", t, this.ui()), this._applyChanges()), !1) : !1 }, _mouseStop: function (t) { this.resizing = !1; var i, s, n, a, o, r, h, l = this.options, u = this; return this._helper && (i = this._proportionallyResizeElements, s = i.length && /textarea/i.test(i[0].nodeName), n = s && this._hasScroll(i[0], "left") ? 0 : u.sizeDiff.height, a = s ? 0 : u.sizeDiff.width, o = { width: u.helper.width() - a, height: u.helper.height() - n }, r = parseInt(u.element.css("left"), 10) + (u.position.left - u.originalPosition.left) || null, h = parseInt(u.element.css("top"), 10) + (u.position.top - u.originalPosition.top) || null, l.animate || this.element.css(e.extend(o, { top: h, left: r })), u.helper.height(u.size.height), u.helper.width(u.size.width), this._helper && !l.animate && this._proportionallyResize()), e("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1 }, _updatePrevProperties: function () { this.prevPosition = { top: this.position.top, left: this.position.left }, this.prevSize = { width: this.size.width, height: this.size.height } }, _applyChanges: function () { var e = {}; return this.position.top !== this.prevPosition.top && (e.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (e.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (e.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (e.height = this.size.height + "px"), this.helper.css(e), e }, _updateVirtualBoundaries: function (e) { var t, i, s, n, a, o = this.options; a = { minWidth: this._isNumber(o.minWidth) ? o.minWidth : 0, maxWidth: this._isNumber(o.maxWidth) ? o.maxWidth : 1 / 0, minHeight: this._isNumber(o.minHeight) ? o.minHeight : 0, maxHeight: this._isNumber(o.maxHeight) ? o.maxHeight : 1 / 0 }, (this._aspectRatio || e) && (t = a.minHeight * this.aspectRatio, s = a.minWidth / this.aspectRatio, i = a.maxHeight * this.aspectRatio, n = a.maxWidth / this.aspectRatio, t > a.minWidth && (a.minWidth = t), s > a.minHeight && (a.minHeight = s), a.maxWidth > i && (a.maxWidth = i), a.maxHeight > n && (a.maxHeight = n)), this._vBoundaries = a }, _updateCache: function (e) { this.offset = this.helper.offset(), this._isNumber(e.left) && (this.position.left = e.left), this._isNumber(e.top) && (this.position.top = e.top), this._isNumber(e.height) && (this.size.height = e.height), this._isNumber(e.width) && (this.size.width = e.width) }, _updateRatio: function (e) { var t = this.position, i = this.size, s = this.axis; return this._isNumber(e.height) ? e.width = e.height * this.aspectRatio : this._isNumber(e.width) && (e.height = e.width / this.aspectRatio), "sw" === s && (e.left = t.left + (i.width - e.width), e.top = null), "nw" === s && (e.top = t.top + (i.height - e.height), e.left = t.left + (i.width - e.width)), e }, _respectSize: function (e) { var t = this._vBoundaries, i = this.axis, s = this._isNumber(e.width) && t.maxWidth && t.maxWidth < e.width, n = this._isNumber(e.height) && t.maxHeight && t.maxHeight < e.height, a = this._isNumber(e.width) && t.minWidth && t.minWidth > e.width, o = this._isNumber(e.height) && t.minHeight && t.minHeight > e.height, r = this.originalPosition.left + this.originalSize.width, h = this.position.top + this.size.height, l = /sw|nw|w/.test(i), u = /nw|ne|n/.test(i); return a && (e.width = t.minWidth), o && (e.height = t.minHeight), s && (e.width = t.maxWidth), n && (e.height = t.maxHeight), a && l && (e.left = r - t.minWidth), s && l && (e.left = r - t.maxWidth), o && u && (e.top = h - t.minHeight), n && u && (e.top = h - t.maxHeight), e.width || e.height || e.left || !e.top ? e.width || e.height || e.top || !e.left || (e.left = null) : e.top = null, e }, _getPaddingPlusBorderDimensions: function (e) { for (var t = 0, i = [], s = [e.css("borderTopWidth"), e.css("borderRightWidth"), e.css("borderBottomWidth"), e.css("borderLeftWidth")], n = [e.css("paddingTop"), e.css("paddingRight"), e.css("paddingBottom"), e.css("paddingLeft")]; 4 > t; t++)i[t] = parseInt(s[t], 10) || 0, i[t] += parseInt(n[t], 10) || 0; return { height: i[0] + i[2], width: i[1] + i[3] } }, _proportionallyResize: function () { if (this._proportionallyResizeElements.length) for (var e, t = 0, i = this.helper || this.element; this._proportionallyResizeElements.length > t; t++)e = this._proportionallyResizeElements[t], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(e)), e.css({ height: i.height() - this.outerDimensions.height || 0, width: i.width() - this.outerDimensions.width || 0 }) }, _renderProxy: function () { var t = this.element, i = this.options; this.elementOffset = t.offset(), this._helper ? (this.helper = this.helper || e("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({ width: this.element.outerWidth() - 1, height: this.element.outerHeight() - 1, position: "absolute", left: this.elementOffset.left + "px", top: this.elementOffset.top + "px", zIndex: ++i.zIndex }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element }, _change: { e: function (e, t) { return { width: this.originalSize.width + t } }, w: function (e, t) { var i = this.originalSize, s = this.originalPosition; return { left: s.left + t, width: i.width - t } }, n: function (e, t, i) { var s = this.originalSize, n = this.originalPosition; return { top: n.top + i, height: s.height - i } }, s: function (e, t, i) { return { height: this.originalSize.height + i } }, se: function (t, i, s) { return e.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, i, s])) }, sw: function (t, i, s) { return e.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, i, s])) }, ne: function (t, i, s) { return e.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, i, s])) }, nw: function (t, i, s) { return e.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, i, s])) } }, _propagate: function (t, i) { e.ui.plugin.call(this, t, [i, this.ui()]), "resize" !== t && this._trigger(t, i, this.ui()) }, plugins: {}, ui: function () { return { originalElement: this.originalElement, element: this.element, helper: this.helper, position: this.position, size: this.size, originalSize: this.originalSize, originalPosition: this.originalPosition } } }), e.ui.plugin.add("resizable", "animate", { stop: function (t) { var i = e(this).resizable("instance"), s = i.options, n = i._proportionallyResizeElements, a = n.length && /textarea/i.test(n[0].nodeName), o = a && i._hasScroll(n[0], "left") ? 0 : i.sizeDiff.height, r = a ? 0 : i.sizeDiff.width, h = { width: i.size.width - r, height: i.size.height - o }, l = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null, u = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null; i.element.animate(e.extend(h, u && l ? { top: u, left: l } : {}), { duration: s.animateDuration, easing: s.animateEasing, step: function () { var s = { width: parseInt(i.element.css("width"), 10), height: parseInt(i.element.css("height"), 10), top: parseInt(i.element.css("top"), 10), left: parseInt(i.element.css("left"), 10) }; n && n.length && e(n[0]).css({ width: s.width, height: s.height }), i._updateCache(s), i._propagate("resize", t) } }) } }), e.ui.plugin.add("resizable", "containment", { start: function () { var t, i, s, n, a, o, r, h = e(this).resizable("instance"), l = h.options, u = h.element, d = l.containment, c = d instanceof e ? d.get(0) : /parent/.test(d) ? u.parent().get(0) : d; c && (h.containerElement = e(c), /document/.test(d) || d === document ? (h.containerOffset = { left: 0, top: 0 }, h.containerPosition = { left: 0, top: 0 }, h.parentData = { element: e(document), left: 0, top: 0, width: e(document).width(), height: e(document).height() || document.body.parentNode.scrollHeight }) : (t = e(c), i = [], e(["Top", "Right", "Left", "Bottom"]).each(function (e, s) { i[e] = h._num(t.css("padding" + s)) }), h.containerOffset = t.offset(), h.containerPosition = t.position(), h.containerSize = { height: t.innerHeight() - i[3], width: t.innerWidth() - i[1] }, s = h.containerOffset, n = h.containerSize.height, a = h.containerSize.width, o = h._hasScroll(c, "left") ? c.scrollWidth : a, r = h._hasScroll(c) ? c.scrollHeight : n, h.parentData = { element: c, left: s.left, top: s.top, width: o, height: r })) }, resize: function (t) { var i, s, n, a, o = e(this).resizable("instance"), r = o.options, h = o.containerOffset, l = o.position, u = o._aspectRatio || t.shiftKey, d = { top: 0, left: 0 }, c = o.containerElement, p = !0; c[0] !== document && /static/.test(c.css("position")) && (d = h), l.left < (o._helper ? h.left : 0) && (o.size.width = o.size.width + (o._helper ? o.position.left - h.left : o.position.left - d.left), u && (o.size.height = o.size.width / o.aspectRatio, p = !1), o.position.left = r.helper ? h.left : 0), l.top < (o._helper ? h.top : 0) && (o.size.height = o.size.height + (o._helper ? o.position.top - h.top : o.position.top), u && (o.size.width = o.size.height * o.aspectRatio, p = !1), o.position.top = o._helper ? h.top : 0), n = o.containerElement.get(0) === o.element.parent().get(0), a = /relative|absolute/.test(o.containerElement.css("position")), n && a ? (o.offset.left = o.parentData.left + o.position.left, o.offset.top = o.parentData.top + o.position.top) : (o.offset.left = o.element.offset().left, o.offset.top = o.element.offset().top), i = Math.abs(o.sizeDiff.width + (o._helper ? o.offset.left - d.left : o.offset.left - h.left)), s = Math.abs(o.sizeDiff.height + (o._helper ? o.offset.top - d.top : o.offset.top - h.top)), i + o.size.width >= o.parentData.width && (o.size.width = o.parentData.width - i, u && (o.size.height = o.size.width / o.aspectRatio, p = !1)), s + o.size.height >= o.parentData.height && (o.size.height = o.parentData.height - s, u && (o.size.width = o.size.height * o.aspectRatio, p = !1)), p || (o.position.left = o.prevPosition.left, o.position.top = o.prevPosition.top, o.size.width = o.prevSize.width, o.size.height = o.prevSize.height) }, stop: function () { var t = e(this).resizable("instance"), i = t.options, s = t.containerOffset, n = t.containerPosition, a = t.containerElement, o = e(t.helper), r = o.offset(), h = o.outerWidth() - t.sizeDiff.width, l = o.outerHeight() - t.sizeDiff.height; t._helper && !i.animate && /relative/.test(a.css("position")) && e(this).css({ left: r.left - n.left - s.left, width: h, height: l }), t._helper && !i.animate && /static/.test(a.css("position")) && e(this).css({ left: r.left - n.left - s.left, width: h, height: l }) } }), e.ui.plugin.add("resizable", "alsoResize", { start: function () { var t = e(this).resizable("instance"), i = t.options; e(i.alsoResize).each(function () { var t = e(this); t.data("ui-resizable-alsoresize", { width: parseInt(t.width(), 10), height: parseInt(t.height(), 10), left: parseInt(t.css("left"), 10), top: parseInt(t.css("top"), 10) }) }) }, resize: function (t, i) { var s = e(this).resizable("instance"), n = s.options, a = s.originalSize, o = s.originalPosition, r = { height: s.size.height - a.height || 0, width: s.size.width - a.width || 0, top: s.position.top - o.top || 0, left: s.position.left - o.left || 0 }; e(n.alsoResize).each(function () { var t = e(this), s = e(this).data("ui-resizable-alsoresize"), n = {}, a = t.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"]; e.each(a, function (e, t) { var i = (s[t] || 0) + (r[t] || 0); i && i >= 0 && (n[t] = i || null) }), t.css(n) }) }, stop: function () { e(this).removeData("resizable-alsoresize") } }), e.ui.plugin.add("resizable", "ghost", { start: function () { var t = e(this).resizable("instance"), i = t.options, s = t.size; t.ghost = t.originalElement.clone(), t.ghost.css({ opacity: .25, display: "block", position: "relative", height: s.height, width: s.width, margin: 0, left: 0, top: 0 }).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost : ""), t.ghost.appendTo(t.helper) }, resize: function () { var t = e(this).resizable("instance"); t.ghost && t.ghost.css({ position: "relative", height: t.size.height, width: t.size.width }) }, stop: function () { var t = e(this).resizable("instance"); t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0)) } }), e.ui.plugin.add("resizable", "grid", { resize: function () { var t, i = e(this).resizable("instance"), s = i.options, n = i.size, a = i.originalSize, o = i.originalPosition, r = i.axis, h = "number" == typeof s.grid ? [s.grid, s.grid] : s.grid, l = h[0] || 1, u = h[1] || 1, d = Math.round((n.width - a.width) / l) * l, c = Math.round((n.height - a.height) / u) * u, p = a.width + d, f = a.height + c, m = s.maxWidth && p > s.maxWidth, g = s.maxHeight && f > s.maxHeight, v = s.minWidth && s.minWidth > p, y = s.minHeight && s.minHeight > f; s.grid = h, v && (p += l), y && (f += u), m && (p -= l), g && (f -= u), /^(se|s|e)$/.test(r) ? (i.size.width = p, i.size.height = f) : /^(ne)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.top = o.top - c) : /^(sw)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.left = o.left - d) : ((0 >= f - u || 0 >= p - l) && (t = i._getPaddingPlusBorderDimensions(this)), f - u > 0 ? (i.size.height = f, i.position.top = o.top - c) : (f = u - t.height, i.size.height = f, i.position.top = o.top + a.height - f), p - l > 0 ? (i.size.width = p, i.position.left = o.left - d) : (p = l - t.width, i.size.width = p, i.position.left = o.left + a.width - p)) } }), e.ui.resizable, e.widget("ui.dialog", {
		version: "1.11.4", options: { appendTo: "body", autoOpen: !0, buttons: [], closeOnEscape: !0, closeText: "Close", dialogClass: "", draggable: !0, hide: null, height: "auto", maxHeight: null, maxWidth: null, minHeight: 150, minWidth: 150, modal: !1, position: { my: "center", at: "center", of: window, collision: "fit", using: function (t) { var i = e(this).css(t).offset().top; 0 > i && e(this).css("top", t.top - i) } }, resizable: !0, show: null, title: null, width: 300, beforeClose: null, close: null, drag: null, dragStart: null, dragStop: null, focus: null, open: null, resize: null, resizeStart: null, resizeStop: null }, sizeRelatedOptions: { buttons: !0, height: !0, maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0, width: !0 }, resizableRelatedOptions: { maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0 }, _create: function () { this.originalCss = { display: this.element[0].style.display, width: this.element[0].style.width, minHeight: this.element[0].style.minHeight, maxHeight: this.element[0].style.maxHeight, height: this.element[0].style.height }, this.originalPosition = { parent: this.element.parent(), index: this.element.parent().children().index(this.element) }, this.originalTitle = this.element.attr("title"), this.options.title = this.options.title || this.originalTitle, this._createWrapper(), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog), this._createTitlebar(), this._createButtonPane(), this.options.draggable && e.fn.draggable && this._makeDraggable(), this.options.resizable && e.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus() }, _init: function () { this.options.autoOpen && this.open() }, _appendTo: function () { var t = this.options.appendTo; return t && (t.jquery || t.nodeType) ? e(t) : this.document.find(t || "body").eq(0) }, _destroy: function () { var e, t = this.originalPosition; this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(), this.uiDialog.stop(!0, !0).remove(), this.originalTitle && this.element.attr("title", this.originalTitle), e = t.parent.children().eq(t.index), e.length && e[0] !== this.element[0] ? e.before(this.element) : t.parent.append(this.element) }, widget: function () { return this.uiDialog }, disable: e.noop, enable: e.noop, close: function (t) { var i, s = this; if (this._isOpen && this._trigger("beforeClose", t) !== !1) { if (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), !this.opener.filter(":focusable").focus().length) try { i = this.document[0].activeElement, i && "body" !== i.nodeName.toLowerCase() && e(i).blur() } catch (n) { } this._hide(this.uiDialog, this.options.hide, function () { s._trigger("close", t) }) } }, isOpen: function () { return this._isOpen }, moveToTop: function () { this._moveToTop() }, _moveToTop: function (t, i) { var s = !1, n = this.uiDialog.siblings(".ui-front:visible").map(function () { return +e(this).css("z-index") }).get(), a = Math.max.apply(null, n); return a >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", a + 1), s = !0), s && !i && this._trigger("focus", t), s }, open: function () { var t = this; return this._isOpen ? (this._moveToTop() && this._focusTabbable(), void 0) : (this._isOpen = !0, this.opener = e(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function () { t._focusTabbable(), t._trigger("focus") }), this._makeFocusTarget(), this._trigger("open"), void 0) }, _focusTabbable: function () { var e = this._focusedElement; e || (e = this.element.find("[autofocus]")), e.length || (e = this.element.find(":tabbable")), e.length || (e = this.uiDialogButtonPane.find(":tabbable")), e.length || (e = this.uiDialogTitlebarClose.filter(":tabbable")), e.length || (e = this.uiDialog), e.eq(0).focus() }, _keepFocus: function (t) { function i() { var t = this.document[0].activeElement, i = this.uiDialog[0] === t || e.contains(this.uiDialog[0], t); i || this._focusTabbable() } t.preventDefault(), i.call(this), this._delay(i) }, _createWrapper: function () {
			this.uiDialog = e("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({ tabIndex: -1, role: "dialog" }).appendTo(this._appendTo()), this._on(this.uiDialog, {
				keydown: function (t) {
					if (this.options.closeOnEscape && !t.isDefaultPrevented() && t.keyCode && t.keyCode === e.ui.keyCode.ESCAPE) return t.preventDefault(), this.close(t), void 0;
					if (t.keyCode === e.ui.keyCode.TAB && !t.isDefaultPrevented()) { var i = this.uiDialog.find(":tabbable"), s = i.filter(":first"), n = i.filter(":last"); t.target !== n[0] && t.target !== this.uiDialog[0] || t.shiftKey ? t.target !== s[0] && t.target !== this.uiDialog[0] || !t.shiftKey || (this._delay(function () { n.focus() }), t.preventDefault()) : (this._delay(function () { s.focus() }), t.preventDefault()) }
				}, mousedown: function (e) { this._moveToTop(e) && this._focusTabbable() }
			}), this.element.find("[aria-describedby]").length || this.uiDialog.attr({ "aria-describedby": this.element.uniqueId().attr("id") })
		}, _createTitlebar: function () { var t; this.uiDialogTitlebar = e("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog), this._on(this.uiDialogTitlebar, { mousedown: function (t) { e(t.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus() } }), this.uiDialogTitlebarClose = e("<button type='button'></button>").button({ label: this.options.closeText, icons: { primary: "ui-icon-closethick" }, text: !1 }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar), this._on(this.uiDialogTitlebarClose, { click: function (e) { e.preventDefault(), this.close(e) } }), t = e("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar), this._title(t), this.uiDialog.attr({ "aria-labelledby": t.attr("id") }) }, _title: function (e) { this.options.title || e.html("&#160;"), e.text(this.options.title) }, _createButtonPane: function () { this.uiDialogButtonPane = e("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), this.uiButtonSet = e("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane), this._createButtons() }, _createButtons: function () { var t = this, i = this.options.buttons; return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), e.isEmptyObject(i) || e.isArray(i) && !i.length ? (this.uiDialog.removeClass("ui-dialog-buttons"), void 0) : (e.each(i, function (i, s) { var n, a; s = e.isFunction(s) ? { click: s, text: i } : s, s = e.extend({ type: "button" }, s), n = s.click, s.click = function () { n.apply(t.element[0], arguments) }, a = { icons: s.icons, text: s.showText }, delete s.icons, delete s.showText, e("<button></button>", s).button(a).appendTo(t.uiButtonSet) }), this.uiDialog.addClass("ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog), void 0) }, _makeDraggable: function () { function t(e) { return { position: e.position, offset: e.offset } } var i = this, s = this.options; this.uiDialog.draggable({ cancel: ".ui-dialog-content, .ui-dialog-titlebar-close", handle: ".ui-dialog-titlebar", containment: "document", start: function (s, n) { e(this).addClass("ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", s, t(n)) }, drag: function (e, s) { i._trigger("drag", e, t(s)) }, stop: function (n, a) { var o = a.offset.left - i.document.scrollLeft(), r = a.offset.top - i.document.scrollTop(); s.position = { my: "left top", at: "left" + (o >= 0 ? "+" : "") + o + " " + "top" + (r >= 0 ? "+" : "") + r, of: i.window }, e(this).removeClass("ui-dialog-dragging"), i._unblockFrames(), i._trigger("dragStop", n, t(a)) } }) }, _makeResizable: function () { function t(e) { return { originalPosition: e.originalPosition, originalSize: e.originalSize, position: e.position, size: e.size } } var i = this, s = this.options, n = s.resizable, a = this.uiDialog.css("position"), o = "string" == typeof n ? n : "n,e,s,w,se,sw,ne,nw"; this.uiDialog.resizable({ cancel: ".ui-dialog-content", containment: "document", alsoResize: this.element, maxWidth: s.maxWidth, maxHeight: s.maxHeight, minWidth: s.minWidth, minHeight: this._minHeight(), handles: o, start: function (s, n) { e(this).addClass("ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", s, t(n)) }, resize: function (e, s) { i._trigger("resize", e, t(s)) }, stop: function (n, a) { var o = i.uiDialog.offset(), r = o.left - i.document.scrollLeft(), h = o.top - i.document.scrollTop(); s.height = i.uiDialog.height(), s.width = i.uiDialog.width(), s.position = { my: "left top", at: "left" + (r >= 0 ? "+" : "") + r + " " + "top" + (h >= 0 ? "+" : "") + h, of: i.window }, e(this).removeClass("ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", n, t(a)) } }).css("position", a) }, _trackFocus: function () { this._on(this.widget(), { focusin: function (t) { this._makeFocusTarget(), this._focusedElement = e(t.target) } }) }, _makeFocusTarget: function () { this._untrackInstance(), this._trackingInstances().unshift(this) }, _untrackInstance: function () { var t = this._trackingInstances(), i = e.inArray(this, t); -1 !== i && t.splice(i, 1) }, _trackingInstances: function () { var e = this.document.data("ui-dialog-instances"); return e || (e = [], this.document.data("ui-dialog-instances", e)), e }, _minHeight: function () { var e = this.options; return "auto" === e.height ? e.minHeight : Math.min(e.minHeight, e.height) }, _position: function () { var e = this.uiDialog.is(":visible"); e || this.uiDialog.show(), this.uiDialog.position(this.options.position), e || this.uiDialog.hide() }, _setOptions: function (t) { var i = this, s = !1, n = {}; e.each(t, function (e, t) { i._setOption(e, t), e in i.sizeRelatedOptions && (s = !0), e in i.resizableRelatedOptions && (n[e] = t) }), s && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", n) }, _setOption: function (e, t) { var i, s, n = this.uiDialog; "dialogClass" === e && n.removeClass(this.options.dialogClass).addClass(t), "disabled" !== e && (this._super(e, t), "appendTo" === e && this.uiDialog.appendTo(this._appendTo()), "buttons" === e && this._createButtons(), "closeText" === e && this.uiDialogTitlebarClose.button({ label: "" + t }), "draggable" === e && (i = n.is(":data(ui-draggable)"), i && !t && n.draggable("destroy"), !i && t && this._makeDraggable()), "position" === e && this._position(), "resizable" === e && (s = n.is(":data(ui-resizable)"), s && !t && n.resizable("destroy"), s && "string" == typeof t && n.resizable("option", "handles", t), s || t === !1 || this._makeResizable()), "title" === e && this._title(this.uiDialogTitlebar.find(".ui-dialog-title"))) }, _size: function () { var e, t, i, s = this.options; this.element.show().css({ width: "auto", minHeight: 0, maxHeight: "none", height: 0 }), s.minWidth > s.width && (s.width = s.minWidth), e = this.uiDialog.css({ height: "auto", width: s.width }).outerHeight(), t = Math.max(0, s.minHeight - e), i = "number" == typeof s.maxHeight ? Math.max(0, s.maxHeight - e) : "none", "auto" === s.height ? this.element.css({ minHeight: t, maxHeight: i, height: "auto" }) : this.element.height(Math.max(0, s.height - e)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight()) }, _blockFrames: function () { this.iframeBlocks = this.document.find("iframe").map(function () { var t = e(this); return e("<div>").css({ position: "absolute", width: t.outerWidth(), height: t.outerHeight() }).appendTo(t.parent()).offset(t.offset())[0] }) }, _unblockFrames: function () { this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks) }, _allowInteraction: function (t) { return e(t.target).closest(".ui-dialog").length ? !0 : !!e(t.target).closest(".ui-datepicker").length }, _createOverlay: function () { if (this.options.modal) { var t = !0; this._delay(function () { t = !1 }), this.document.data("ui-dialog-overlays") || this._on(this.document, { focusin: function (e) { t || this._allowInteraction(e) || (e.preventDefault(), this._trackingInstances()[0]._focusTabbable()) } }), this.overlay = e("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()), this._on(this.overlay, { mousedown: "_keepFocus" }), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1) } }, _destroyOverlay: function () { if (this.options.modal && this.overlay) { var e = this.document.data("ui-dialog-overlays") - 1; e ? this.document.data("ui-dialog-overlays", e) : this.document.unbind("focusin").removeData("ui-dialog-overlays"), this.overlay.remove(), this.overlay = null } }
	}), e.widget("ui.droppable", { version: "1.11.4", widgetEventPrefix: "drop", options: { accept: "*", activeClass: !1, addClasses: !0, greedy: !1, hoverClass: !1, scope: "default", tolerance: "intersect", activate: null, deactivate: null, drop: null, out: null, over: null }, _create: function () { var t, i = this.options, s = i.accept; this.isover = !1, this.isout = !0, this.accept = e.isFunction(s) ? s : function (e) { return e.is(s) }, this.proportions = function () { return arguments.length ? (t = arguments[0], void 0) : t ? t : t = { width: this.element[0].offsetWidth, height: this.element[0].offsetHeight } }, this._addToManager(i.scope), i.addClasses && this.element.addClass("ui-droppable") }, _addToManager: function (t) { e.ui.ddmanager.droppables[t] = e.ui.ddmanager.droppables[t] || [], e.ui.ddmanager.droppables[t].push(this) }, _splice: function (e) { for (var t = 0; e.length > t; t++)e[t] === this && e.splice(t, 1) }, _destroy: function () { var t = e.ui.ddmanager.droppables[this.options.scope]; this._splice(t), this.element.removeClass("ui-droppable ui-droppable-disabled") }, _setOption: function (t, i) { if ("accept" === t) this.accept = e.isFunction(i) ? i : function (e) { return e.is(i) }; else if ("scope" === t) { var s = e.ui.ddmanager.droppables[this.options.scope]; this._splice(s), this._addToManager(i) } this._super(t, i) }, _activate: function (t) { var i = e.ui.ddmanager.current; this.options.activeClass && this.element.addClass(this.options.activeClass), i && this._trigger("activate", t, this.ui(i)) }, _deactivate: function (t) { var i = e.ui.ddmanager.current; this.options.activeClass && this.element.removeClass(this.options.activeClass), i && this._trigger("deactivate", t, this.ui(i)) }, _over: function (t) { var i = e.ui.ddmanager.current; i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", t, this.ui(i))) }, _out: function (t) { var i = e.ui.ddmanager.current; i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", t, this.ui(i))) }, _drop: function (t, i) { var s = i || e.ui.ddmanager.current, n = !1; return s && (s.currentItem || s.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function () { var i = e(this).droppable("instance"); return i.options.greedy && !i.options.disabled && i.options.scope === s.options.scope && i.accept.call(i.element[0], s.currentItem || s.element) && e.ui.intersect(s, e.extend(i, { offset: i.element.offset() }), i.options.tolerance, t) ? (n = !0, !1) : void 0 }), n ? !1 : this.accept.call(this.element[0], s.currentItem || s.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", t, this.ui(s)), this.element) : !1) : !1 }, ui: function (e) { return { draggable: e.currentItem || e.element, helper: e.helper, position: e.position, offset: e.positionAbs } } }), e.ui.intersect = function () { function e(e, t, i) { return e >= t && t + i > e } return function (t, i, s, n) { if (!i.offset) return !1; var a = (t.positionAbs || t.position.absolute).left + t.margins.left, o = (t.positionAbs || t.position.absolute).top + t.margins.top, r = a + t.helperProportions.width, h = o + t.helperProportions.height, l = i.offset.left, u = i.offset.top, d = l + i.proportions().width, c = u + i.proportions().height; switch (s) { case "fit": return a >= l && d >= r && o >= u && c >= h; case "intersect": return a + t.helperProportions.width / 2 > l && d > r - t.helperProportions.width / 2 && o + t.helperProportions.height / 2 > u && c > h - t.helperProportions.height / 2; case "pointer": return e(n.pageY, u, i.proportions().height) && e(n.pageX, l, i.proportions().width); case "touch": return (o >= u && c >= o || h >= u && c >= h || u > o && h > c) && (a >= l && d >= a || r >= l && d >= r || l > a && r > d); default: return !1 } } }(), e.ui.ddmanager = { current: null, droppables: { "default": [] }, prepareOffsets: function (t, i) { var s, n, a = e.ui.ddmanager.droppables[t.options.scope] || [], o = i ? i.type : null, r = (t.currentItem || t.element).find(":data(ui-droppable)").addBack(); e: for (s = 0; a.length > s; s++)if (!(a[s].options.disabled || t && !a[s].accept.call(a[s].element[0], t.currentItem || t.element))) { for (n = 0; r.length > n; n++)if (r[n] === a[s].element[0]) { a[s].proportions().height = 0; continue e } a[s].visible = "none" !== a[s].element.css("display"), a[s].visible && ("mousedown" === o && a[s]._activate.call(a[s], i), a[s].offset = a[s].element.offset(), a[s].proportions({ width: a[s].element[0].offsetWidth, height: a[s].element[0].offsetHeight })) } }, drop: function (t, i) { var s = !1; return e.each((e.ui.ddmanager.droppables[t.options.scope] || []).slice(), function () { this.options && (!this.options.disabled && this.visible && e.ui.intersect(t, this, this.options.tolerance, i) && (s = this._drop.call(this, i) || s), !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i))) }), s }, dragStart: function (t, i) { t.element.parentsUntil("body").bind("scroll.droppable", function () { t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, i) }) }, drag: function (t, i) { t.options.refreshPositions && e.ui.ddmanager.prepareOffsets(t, i), e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function () { if (!this.options.disabled && !this.greedyChild && this.visible) { var s, n, a, o = e.ui.intersect(t, this, this.options.tolerance, i), r = !o && this.isover ? "isout" : o && !this.isover ? "isover" : null; r && (this.options.greedy && (n = this.options.scope, a = this.element.parents(":data(ui-droppable)").filter(function () { return e(this).droppable("instance").options.scope === n }), a.length && (s = e(a[0]).droppable("instance"), s.greedyChild = "isover" === r)), s && "isover" === r && (s.isover = !1, s.isout = !0, s._out.call(s, i)), this[r] = !0, this["isout" === r ? "isover" : "isout"] = !1, this["isover" === r ? "_over" : "_out"].call(this, i), s && "isout" === r && (s.isout = !1, s.isover = !0, s._over.call(s, i))) } }) }, dragStop: function (t, i) { t.element.parentsUntil("body").unbind("scroll.droppable"), t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, i) } }, e.ui.droppable; var y = "ui-effects-", b = e; e.effects = { effect: {} }, function (e, t) { function i(e, t, i) { var s = d[t.type] || {}; return null == e ? i || !t.def ? null : t.def : (e = s.floor ? ~~e : parseFloat(e), isNaN(e) ? t.def : s.mod ? (e + s.mod) % s.mod : 0 > e ? 0 : e > s.max ? s.max : e) } function s(i) { var s = l(), n = s._rgba = []; return i = i.toLowerCase(), f(h, function (e, a) { var o, r = a.re.exec(i), h = r && a.parse(r), l = a.space || "rgba"; return h ? (o = s[l](h), s[u[l].cache] = o[u[l].cache], n = s._rgba = o._rgba, !1) : t }), n.length ? ("0,0,0,0" === n.join() && e.extend(n, a.transparent), s) : a[i] } function n(e, t, i) { return i = (i + 1) % 1, 1 > 6 * i ? e + 6 * (t - e) * i : 1 > 2 * i ? t : 2 > 3 * i ? e + 6 * (t - e) * (2 / 3 - i) : e } var a, o = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor", r = /^([\-+])=\s*(\d+\.?\d*)/, h = [{ re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function (e) { return [e[1], e[2], e[3], e[4]] } }, { re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function (e) { return [2.55 * e[1], 2.55 * e[2], 2.55 * e[3], e[4]] } }, { re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/, parse: function (e) { return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)] } }, { re: /#([a-f0-9])([a-f0-9])([a-f0-9])/, parse: function (e) { return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)] } }, { re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, space: "hsla", parse: function (e) { return [e[1], e[2] / 100, e[3] / 100, e[4]] } }], l = e.Color = function (t, i, s, n) { return new e.Color.fn.parse(t, i, s, n) }, u = { rgba: { props: { red: { idx: 0, type: "byte" }, green: { idx: 1, type: "byte" }, blue: { idx: 2, type: "byte" } } }, hsla: { props: { hue: { idx: 0, type: "degrees" }, saturation: { idx: 1, type: "percent" }, lightness: { idx: 2, type: "percent" } } } }, d = { "byte": { floor: !0, max: 255 }, percent: { max: 1 }, degrees: { mod: 360, floor: !0 } }, c = l.support = {}, p = e("<p>")[0], f = e.each; p.style.cssText = "background-color:rgba(1,1,1,.5)", c.rgba = p.style.backgroundColor.indexOf("rgba") > -1, f(u, function (e, t) { t.cache = "_" + e, t.props.alpha = { idx: 3, type: "percent", def: 1 } }), l.fn = e.extend(l.prototype, { parse: function (n, o, r, h) { if (n === t) return this._rgba = [null, null, null, null], this; (n.jquery || n.nodeType) && (n = e(n).css(o), o = t); var d = this, c = e.type(n), p = this._rgba = []; return o !== t && (n = [n, o, r, h], c = "array"), "string" === c ? this.parse(s(n) || a._default) : "array" === c ? (f(u.rgba.props, function (e, t) { p[t.idx] = i(n[t.idx], t) }), this) : "object" === c ? (n instanceof l ? f(u, function (e, t) { n[t.cache] && (d[t.cache] = n[t.cache].slice()) }) : f(u, function (t, s) { var a = s.cache; f(s.props, function (e, t) { if (!d[a] && s.to) { if ("alpha" === e || null == n[e]) return; d[a] = s.to(d._rgba) } d[a][t.idx] = i(n[e], t, !0) }), d[a] && 0 > e.inArray(null, d[a].slice(0, 3)) && (d[a][3] = 1, s.from && (d._rgba = s.from(d[a]))) }), this) : t }, is: function (e) { var i = l(e), s = !0, n = this; return f(u, function (e, a) { var o, r = i[a.cache]; return r && (o = n[a.cache] || a.to && a.to(n._rgba) || [], f(a.props, function (e, i) { return null != r[i.idx] ? s = r[i.idx] === o[i.idx] : t })), s }), s }, _space: function () { var e = [], t = this; return f(u, function (i, s) { t[s.cache] && e.push(i) }), e.pop() }, transition: function (e, t) { var s = l(e), n = s._space(), a = u[n], o = 0 === this.alpha() ? l("transparent") : this, r = o[a.cache] || a.to(o._rgba), h = r.slice(); return s = s[a.cache], f(a.props, function (e, n) { var a = n.idx, o = r[a], l = s[a], u = d[n.type] || {}; null !== l && (null === o ? h[a] = l : (u.mod && (l - o > u.mod / 2 ? o += u.mod : o - l > u.mod / 2 && (o -= u.mod)), h[a] = i((l - o) * t + o, n))) }), this[n](h) }, blend: function (t) { if (1 === this._rgba[3]) return this; var i = this._rgba.slice(), s = i.pop(), n = l(t)._rgba; return l(e.map(i, function (e, t) { return (1 - s) * n[t] + s * e })) }, toRgbaString: function () { var t = "rgba(", i = e.map(this._rgba, function (e, t) { return null == e ? t > 2 ? 1 : 0 : e }); return 1 === i[3] && (i.pop(), t = "rgb("), t + i.join() + ")" }, toHslaString: function () { var t = "hsla(", i = e.map(this.hsla(), function (e, t) { return null == e && (e = t > 2 ? 1 : 0), t && 3 > t && (e = Math.round(100 * e) + "%"), e }); return 1 === i[3] && (i.pop(), t = "hsl("), t + i.join() + ")" }, toHexString: function (t) { var i = this._rgba.slice(), s = i.pop(); return t && i.push(~~(255 * s)), "#" + e.map(i, function (e) { return e = (e || 0).toString(16), 1 === e.length ? "0" + e : e }).join("") }, toString: function () { return 0 === this._rgba[3] ? "transparent" : this.toRgbaString() } }), l.fn.parse.prototype = l.fn, u.hsla.to = function (e) { if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]]; var t, i, s = e[0] / 255, n = e[1] / 255, a = e[2] / 255, o = e[3], r = Math.max(s, n, a), h = Math.min(s, n, a), l = r - h, u = r + h, d = .5 * u; return t = h === r ? 0 : s === r ? 60 * (n - a) / l + 360 : n === r ? 60 * (a - s) / l + 120 : 60 * (s - n) / l + 240, i = 0 === l ? 0 : .5 >= d ? l / u : l / (2 - u), [Math.round(t) % 360, i, d, null == o ? 1 : o] }, u.hsla.from = function (e) { if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]]; var t = e[0] / 360, i = e[1], s = e[2], a = e[3], o = .5 >= s ? s * (1 + i) : s + i - s * i, r = 2 * s - o; return [Math.round(255 * n(r, o, t + 1 / 3)), Math.round(255 * n(r, o, t)), Math.round(255 * n(r, o, t - 1 / 3)), a] }, f(u, function (s, n) { var a = n.props, o = n.cache, h = n.to, u = n.from; l.fn[s] = function (s) { if (h && !this[o] && (this[o] = h(this._rgba)), s === t) return this[o].slice(); var n, r = e.type(s), d = "array" === r || "object" === r ? s : arguments, c = this[o].slice(); return f(a, function (e, t) { var s = d["object" === r ? e : t.idx]; null == s && (s = c[t.idx]), c[t.idx] = i(s, t) }), u ? (n = l(u(c)), n[o] = c, n) : l(c) }, f(a, function (t, i) { l.fn[t] || (l.fn[t] = function (n) { var a, o = e.type(n), h = "alpha" === t ? this._hsla ? "hsla" : "rgba" : s, l = this[h](), u = l[i.idx]; return "undefined" === o ? u : ("function" === o && (n = n.call(this, u), o = e.type(n)), null == n && i.empty ? this : ("string" === o && (a = r.exec(n), a && (n = u + parseFloat(a[2]) * ("+" === a[1] ? 1 : -1))), l[i.idx] = n, this[h](l))) }) }) }), l.hook = function (t) { var i = t.split(" "); f(i, function (t, i) { e.cssHooks[i] = { set: function (t, n) { var a, o, r = ""; if ("transparent" !== n && ("string" !== e.type(n) || (a = s(n)))) { if (n = l(a || n), !c.rgba && 1 !== n._rgba[3]) { for (o = "backgroundColor" === i ? t.parentNode : t; ("" === r || "transparent" === r) && o && o.style;)try { r = e.css(o, "backgroundColor"), o = o.parentNode } catch (h) { } n = n.blend(r && "transparent" !== r ? r : "_default") } n = n.toRgbaString() } try { t.style[i] = n } catch (h) { } } }, e.fx.step[i] = function (t) { t.colorInit || (t.start = l(t.elem, i), t.end = l(t.end), t.colorInit = !0), e.cssHooks[i].set(t.elem, t.start.transition(t.end, t.pos)) } }) }, l.hook(o), e.cssHooks.borderColor = { expand: function (e) { var t = {}; return f(["Top", "Right", "Bottom", "Left"], function (i, s) { t["border" + s + "Color"] = e }), t } }, a = e.Color.names = { aqua: "#00ffff", black: "#000000", blue: "#0000ff", fuchsia: "#ff00ff", gray: "#808080", green: "#008000", lime: "#00ff00", maroon: "#800000", navy: "#000080", olive: "#808000", purple: "#800080", red: "#ff0000", silver: "#c0c0c0", teal: "#008080", white: "#ffffff", yellow: "#ffff00", transparent: [null, null, null, 0], _default: "#ffffff" } }(b), function () { function t(t) { var i, s, n = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle, a = {}; if (n && n.length && n[0] && n[n[0]]) for (s = n.length; s--;)i = n[s], "string" == typeof n[i] && (a[e.camelCase(i)] = n[i]); else for (i in n) "string" == typeof n[i] && (a[i] = n[i]); return a } function i(t, i) { var s, a, o = {}; for (s in i) a = i[s], t[s] !== a && (n[s] || (e.fx.step[s] || !isNaN(parseFloat(a))) && (o[s] = a)); return o } var s = ["add", "remove", "toggle"], n = { border: 1, borderBottom: 1, borderColor: 1, borderLeft: 1, borderRight: 1, borderTop: 1, borderWidth: 1, margin: 1, padding: 1 }; e.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (t, i) { e.fx.step[i] = function (e) { ("none" !== e.end && !e.setAttr || 1 === e.pos && !e.setAttr) && (b.style(e.elem, i, e.end), e.setAttr = !0) } }), e.fn.addBack || (e.fn.addBack = function (e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) }), e.effects.animateClass = function (n, a, o, r) { var h = e.speed(a, o, r); return this.queue(function () { var a, o = e(this), r = o.attr("class") || "", l = h.children ? o.find("*").addBack() : o; l = l.map(function () { var i = e(this); return { el: i, start: t(this) } }), a = function () { e.each(s, function (e, t) { n[t] && o[t + "Class"](n[t]) }) }, a(), l = l.map(function () { return this.end = t(this.el[0]), this.diff = i(this.start, this.end), this }), o.attr("class", r), l = l.map(function () { var t = this, i = e.Deferred(), s = e.extend({}, h, { queue: !1, complete: function () { i.resolve(t) } }); return this.el.animate(this.diff, s), i.promise() }), e.when.apply(e, l.get()).done(function () { a(), e.each(arguments, function () { var t = this.el; e.each(this.diff, function (e) { t.css(e, "") }) }), h.complete.call(o[0]) }) }) }, e.fn.extend({ addClass: function (t) { return function (i, s, n, a) { return s ? e.effects.animateClass.call(this, { add: i }, s, n, a) : t.apply(this, arguments) } }(e.fn.addClass), removeClass: function (t) { return function (i, s, n, a) { return arguments.length > 1 ? e.effects.animateClass.call(this, { remove: i }, s, n, a) : t.apply(this, arguments) } }(e.fn.removeClass), toggleClass: function (t) { return function (i, s, n, a, o) { return "boolean" == typeof s || void 0 === s ? n ? e.effects.animateClass.call(this, s ? { add: i } : { remove: i }, n, a, o) : t.apply(this, arguments) : e.effects.animateClass.call(this, { toggle: i }, s, n, a) } }(e.fn.toggleClass), switchClass: function (t, i, s, n, a) { return e.effects.animateClass.call(this, { add: i, remove: t }, s, n, a) } }) }(), function () { function t(t, i, s, n) { return e.isPlainObject(t) && (i = t, t = t.effect), t = { effect: t }, null == i && (i = {}), e.isFunction(i) && (n = i, s = null, i = {}), ("number" == typeof i || e.fx.speeds[i]) && (n = s, s = i, i = {}), e.isFunction(s) && (n = s, s = null), i && e.extend(t, i), s = s || i.duration, t.duration = e.fx.off ? 0 : "number" == typeof s ? s : s in e.fx.speeds ? e.fx.speeds[s] : e.fx.speeds._default, t.complete = n || i.complete, t } function i(t) { return !t || "number" == typeof t || e.fx.speeds[t] ? !0 : "string" != typeof t || e.effects.effect[t] ? e.isFunction(t) ? !0 : "object" != typeof t || t.effect ? !1 : !0 : !0 } e.extend(e.effects, { version: "1.11.4", save: function (e, t) { for (var i = 0; t.length > i; i++)null !== t[i] && e.data(y + t[i], e[0].style[t[i]]) }, restore: function (e, t) { var i, s; for (s = 0; t.length > s; s++)null !== t[s] && (i = e.data(y + t[s]), void 0 === i && (i = ""), e.css(t[s], i)) }, setMode: function (e, t) { return "toggle" === t && (t = e.is(":hidden") ? "show" : "hide"), t }, getBaseline: function (e, t) { var i, s; switch (e[0]) { case "top": i = 0; break; case "middle": i = .5; break; case "bottom": i = 1; break; default: i = e[0] / t.height }switch (e[1]) { case "left": s = 0; break; case "center": s = .5; break; case "right": s = 1; break; default: s = e[1] / t.width }return { x: s, y: i } }, createWrapper: function (t) { if (t.parent().is(".ui-effects-wrapper")) return t.parent(); var i = { width: t.outerWidth(!0), height: t.outerHeight(!0), "float": t.css("float") }, s = e("<div></div>").addClass("ui-effects-wrapper").css({ fontSize: "100%", background: "transparent", border: "none", margin: 0, padding: 0 }), n = { width: t.width(), height: t.height() }, a = document.activeElement; try { a.id } catch (o) { a = document.body } return t.wrap(s), (t[0] === a || e.contains(t[0], a)) && e(a).focus(), s = t.parent(), "static" === t.css("position") ? (s.css({ position: "relative" }), t.css({ position: "relative" })) : (e.extend(i, { position: t.css("position"), zIndex: t.css("z-index") }), e.each(["top", "left", "bottom", "right"], function (e, s) { i[s] = t.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = "auto") }), t.css({ position: "relative", top: 0, left: 0, right: "auto", bottom: "auto" })), t.css(n), s.css(i).show() }, removeWrapper: function (t) { var i = document.activeElement; return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), (t[0] === i || e.contains(t[0], i)) && e(i).focus()), t }, setTransition: function (t, i, s, n) { return n = n || {}, e.each(i, function (e, i) { var a = t.cssUnit(i); a[0] > 0 && (n[i] = a[0] * s + a[1]) }), n } }), e.fn.extend({ effect: function () { function i(t) { function i() { e.isFunction(a) && a.call(n[0]), e.isFunction(t) && t() } var n = e(this), a = s.complete, r = s.mode; (n.is(":hidden") ? "hide" === r : "show" === r) ? (n[r](), i()) : o.call(n[0], s, i) } var s = t.apply(this, arguments), n = s.mode, a = s.queue, o = e.effects.effect[s.effect]; return e.fx.off || !o ? n ? this[n](s.duration, s.complete) : this.each(function () { s.complete && s.complete.call(this) }) : a === !1 ? this.each(i) : this.queue(a || "fx", i) }, show: function (e) { return function (s) { if (i(s)) return e.apply(this, arguments); var n = t.apply(this, arguments); return n.mode = "show", this.effect.call(this, n) } }(e.fn.show), hide: function (e) { return function (s) { if (i(s)) return e.apply(this, arguments); var n = t.apply(this, arguments); return n.mode = "hide", this.effect.call(this, n) } }(e.fn.hide), toggle: function (e) { return function (s) { if (i(s) || "boolean" == typeof s) return e.apply(this, arguments); var n = t.apply(this, arguments); return n.mode = "toggle", this.effect.call(this, n) } }(e.fn.toggle), cssUnit: function (t) { var i = this.css(t), s = []; return e.each(["em", "px", "%", "pt"], function (e, t) { i.indexOf(t) > 0 && (s = [parseFloat(i), t]) }), s } }) }(), function () { var t = {}; e.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (e, i) { t[i] = function (t) { return Math.pow(t, e + 2) } }), e.extend(t, { Sine: function (e) { return 1 - Math.cos(e * Math.PI / 2) }, Circ: function (e) { return 1 - Math.sqrt(1 - e * e) }, Elastic: function (e) { return 0 === e || 1 === e ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin((80 * (e - 1) - 7.5) * Math.PI / 15) }, Back: function (e) { return e * e * (3 * e - 2) }, Bounce: function (e) { for (var t, i = 4; ((t = Math.pow(2, --i)) - 1) / 11 > e;); return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * t - 2) / 22 - e, 2) } }), e.each(t, function (t, i) { e.easing["easeIn" + t] = i, e.easing["easeOut" + t] = function (e) { return 1 - i(1 - e) }, e.easing["easeInOut" + t] = function (e) { return .5 > e ? i(2 * e) / 2 : 1 - i(-2 * e + 2) / 2 } }) }(), e.effects, e.effects.effect.blind = function (t, i) { var s, n, a, o = e(this), r = /up|down|vertical/, h = /up|left|vertical|horizontal/, l = ["position", "top", "bottom", "left", "right", "height", "width"], u = e.effects.setMode(o, t.mode || "hide"), d = t.direction || "up", c = r.test(d), p = c ? "height" : "width", f = c ? "top" : "left", m = h.test(d), g = {}, v = "show" === u; o.parent().is(".ui-effects-wrapper") ? e.effects.save(o.parent(), l) : e.effects.save(o, l), o.show(), s = e.effects.createWrapper(o).css({ overflow: "hidden" }), n = s[p](), a = parseFloat(s.css(f)) || 0, g[p] = v ? n : 0, m || (o.css(c ? "bottom" : "right", 0).css(c ? "top" : "left", "auto").css({ position: "absolute" }), g[f] = v ? a : n + a), v && (s.css(p, 0), m || s.css(f, a + n)), s.animate(g, { duration: t.duration, easing: t.easing, queue: !1, complete: function () { "hide" === u && o.hide(), e.effects.restore(o, l), e.effects.removeWrapper(o), i() } }) }, e.effects.effect.bounce = function (t, i) { var s, n, a, o = e(this), r = ["position", "top", "bottom", "left", "right", "height", "width"], h = e.effects.setMode(o, t.mode || "effect"), l = "hide" === h, u = "show" === h, d = t.direction || "up", c = t.distance, p = t.times || 5, f = 2 * p + (u || l ? 1 : 0), m = t.duration / f, g = t.easing, v = "up" === d || "down" === d ? "top" : "left", y = "up" === d || "left" === d, b = o.queue(), _ = b.length; for ((u || l) && r.push("opacity"), e.effects.save(o, r), o.show(), e.effects.createWrapper(o), c || (c = o["top" === v ? "outerHeight" : "outerWidth"]() / 3), u && (a = { opacity: 1 }, a[v] = 0, o.css("opacity", 0).css(v, y ? 2 * -c : 2 * c).animate(a, m, g)), l && (c /= Math.pow(2, p - 1)), a = {}, a[v] = 0, s = 0; p > s; s++)n = {}, n[v] = (y ? "-=" : "+=") + c, o.animate(n, m, g).animate(a, m, g), c = l ? 2 * c : c / 2; l && (n = { opacity: 0 }, n[v] = (y ? "-=" : "+=") + c, o.animate(n, m, g)), o.queue(function () { l && o.hide(), e.effects.restore(o, r), e.effects.removeWrapper(o), i() }), _ > 1 && b.splice.apply(b, [1, 0].concat(b.splice(_, f + 1))), o.dequeue() }, e.effects.effect.clip = function (t, i) { var s, n, a, o = e(this), r = ["position", "top", "bottom", "left", "right", "height", "width"], h = e.effects.setMode(o, t.mode || "hide"), l = "show" === h, u = t.direction || "vertical", d = "vertical" === u, c = d ? "height" : "width", p = d ? "top" : "left", f = {}; e.effects.save(o, r), o.show(), s = e.effects.createWrapper(o).css({ overflow: "hidden" }), n = "IMG" === o[0].tagName ? s : o, a = n[c](), l && (n.css(c, 0), n.css(p, a / 2)), f[c] = l ? a : 0, f[p] = l ? 0 : a / 2, n.animate(f, { queue: !1, duration: t.duration, easing: t.easing, complete: function () { l || o.hide(), e.effects.restore(o, r), e.effects.removeWrapper(o), i() } }) }, e.effects.effect.drop = function (t, i) { var s, n = e(this), a = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"], o = e.effects.setMode(n, t.mode || "hide"), r = "show" === o, h = t.direction || "left", l = "up" === h || "down" === h ? "top" : "left", u = "up" === h || "left" === h ? "pos" : "neg", d = { opacity: r ? 1 : 0 }; e.effects.save(n, a), n.show(), e.effects.createWrapper(n), s = t.distance || n["top" === l ? "outerHeight" : "outerWidth"](!0) / 2, r && n.css("opacity", 0).css(l, "pos" === u ? -s : s), d[l] = (r ? "pos" === u ? "+=" : "-=" : "pos" === u ? "-=" : "+=") + s, n.animate(d, { queue: !1, duration: t.duration, easing: t.easing, complete: function () { "hide" === o && n.hide(), e.effects.restore(n, a), e.effects.removeWrapper(n), i() } }) }, e.effects.effect.explode = function (t, i) { function s() { b.push(this), b.length === d * c && n() } function n() { p.css({ visibility: "visible" }), e(b).remove(), m || p.hide(), i() } var a, o, r, h, l, u, d = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3, c = d, p = e(this), f = e.effects.setMode(p, t.mode || "hide"), m = "show" === f, g = p.show().css("visibility", "hidden").offset(), v = Math.ceil(p.outerWidth() / c), y = Math.ceil(p.outerHeight() / d), b = []; for (a = 0; d > a; a++)for (h = g.top + a * y, u = a - (d - 1) / 2, o = 0; c > o; o++)r = g.left + o * v, l = o - (c - 1) / 2, p.clone().appendTo("body").wrap("<div></div>").css({ position: "absolute", visibility: "visible", left: -o * v, top: -a * y }).parent().addClass("ui-effects-explode").css({ position: "absolute", overflow: "hidden", width: v, height: y, left: r + (m ? l * v : 0), top: h + (m ? u * y : 0), opacity: m ? 0 : 1 }).animate({ left: r + (m ? 0 : l * v), top: h + (m ? 0 : u * y), opacity: m ? 1 : 0 }, t.duration || 500, t.easing, s) }, e.effects.effect.fade = function (t, i) { var s = e(this), n = e.effects.setMode(s, t.mode || "toggle"); s.animate({ opacity: n }, { queue: !1, duration: t.duration, easing: t.easing, complete: i }) }, e.effects.effect.fold = function (t, i) { var s, n, a = e(this), o = ["position", "top", "bottom", "left", "right", "height", "width"], r = e.effects.setMode(a, t.mode || "hide"), h = "show" === r, l = "hide" === r, u = t.size || 15, d = /([0-9]+)%/.exec(u), c = !!t.horizFirst, p = h !== c, f = p ? ["width", "height"] : ["height", "width"], m = t.duration / 2, g = {}, v = {}; e.effects.save(a, o), a.show(), s = e.effects.createWrapper(a).css({ overflow: "hidden" }), n = p ? [s.width(), s.height()] : [s.height(), s.width()], d && (u = parseInt(d[1], 10) / 100 * n[l ? 0 : 1]), h && s.css(c ? { height: 0, width: u } : { height: u, width: 0 }), g[f[0]] = h ? n[0] : u, v[f[1]] = h ? n[1] : 0, s.animate(g, m, t.easing).animate(v, m, t.easing, function () { l && a.hide(), e.effects.restore(a, o), e.effects.removeWrapper(a), i() }) }, e.effects.effect.highlight = function (t, i) { var s = e(this), n = ["backgroundImage", "backgroundColor", "opacity"], a = e.effects.setMode(s, t.mode || "show"), o = { backgroundColor: s.css("backgroundColor") }; "hide" === a && (o.opacity = 0), e.effects.save(s, n), s.show().css({ backgroundImage: "none", backgroundColor: t.color || "#ffff99" }).animate(o, { queue: !1, duration: t.duration, easing: t.easing, complete: function () { "hide" === a && s.hide(), e.effects.restore(s, n), i() } }) }, e.effects.effect.size = function (t, i) {
		var s, n, a, o = e(this), r = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"], h = ["position", "top", "bottom", "left", "right", "overflow", "opacity"], l = ["width", "height", "overflow"], u = ["fontSize"], d = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"], c = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"], p = e.effects.setMode(o, t.mode || "effect"), f = t.restore || "effect" !== p, m = t.scale || "both", g = t.origin || ["middle", "center"], v = o.css("position"), y = f ? r : h, b = { height: 0, width: 0, outerHeight: 0, outerWidth: 0 }; "show" === p && o.show(), s = { height: o.height(), width: o.width(), outerHeight: o.outerHeight(), outerWidth: o.outerWidth() }, "toggle" === t.mode && "show" === p ? (o.from = t.to || b, o.to = t.from || s) : (o.from = t.from || ("show" === p ? b : s), o.to = t.to || ("hide" === p ? b : s)), a = { from: { y: o.from.height / s.height, x: o.from.width / s.width }, to: { y: o.to.height / s.height, x: o.to.width / s.width } }, ("box" === m || "both" === m) && (a.from.y !== a.to.y && (y = y.concat(d), o.from = e.effects.setTransition(o, d, a.from.y, o.from), o.to = e.effects.setTransition(o, d, a.to.y, o.to)), a.from.x !== a.to.x && (y = y.concat(c), o.from = e.effects.setTransition(o, c, a.from.x, o.from), o.to = e.effects.setTransition(o, c, a.to.x, o.to))), ("content" === m || "both" === m) && a.from.y !== a.to.y && (y = y.concat(u).concat(l), o.from = e.effects.setTransition(o, u, a.from.y, o.from), o.to = e.effects.setTransition(o, u, a.to.y, o.to)), e.effects.save(o, y), o.show(), e.effects.createWrapper(o), o.css("overflow", "hidden").css(o.from), g && (n = e.effects.getBaseline(g, s), o.from.top = (s.outerHeight - o.outerHeight()) * n.y, o.from.left = (s.outerWidth - o.outerWidth()) * n.x, o.to.top = (s.outerHeight - o.to.outerHeight) * n.y, o.to.left = (s.outerWidth - o.to.outerWidth) * n.x), o.css(o.from), ("content" === m || "both" === m) && (d = d.concat(["marginTop", "marginBottom"]).concat(u), c = c.concat(["marginLeft", "marginRight"]), l = r.concat(d).concat(c), o.find("*[width]").each(function () {
			var i = e(this), s = { height: i.height(), width: i.width(), outerHeight: i.outerHeight(), outerWidth: i.outerWidth() };
			f && e.effects.save(i, l), i.from = { height: s.height * a.from.y, width: s.width * a.from.x, outerHeight: s.outerHeight * a.from.y, outerWidth: s.outerWidth * a.from.x }, i.to = { height: s.height * a.to.y, width: s.width * a.to.x, outerHeight: s.height * a.to.y, outerWidth: s.width * a.to.x }, a.from.y !== a.to.y && (i.from = e.effects.setTransition(i, d, a.from.y, i.from), i.to = e.effects.setTransition(i, d, a.to.y, i.to)), a.from.x !== a.to.x && (i.from = e.effects.setTransition(i, c, a.from.x, i.from), i.to = e.effects.setTransition(i, c, a.to.x, i.to)), i.css(i.from), i.animate(i.to, t.duration, t.easing, function () { f && e.effects.restore(i, l) })
		})), o.animate(o.to, { queue: !1, duration: t.duration, easing: t.easing, complete: function () { 0 === o.to.opacity && o.css("opacity", o.from.opacity), "hide" === p && o.hide(), e.effects.restore(o, y), f || ("static" === v ? o.css({ position: "relative", top: o.to.top, left: o.to.left }) : e.each(["top", "left"], function (e, t) { o.css(t, function (t, i) { var s = parseInt(i, 10), n = e ? o.to.left : o.to.top; return "auto" === i ? n + "px" : s + n + "px" }) })), e.effects.removeWrapper(o), i() } })
	}, e.effects.effect.scale = function (t, i) { var s = e(this), n = e.extend(!0, {}, t), a = e.effects.setMode(s, t.mode || "effect"), o = parseInt(t.percent, 10) || (0 === parseInt(t.percent, 10) ? 0 : "hide" === a ? 0 : 100), r = t.direction || "both", h = t.origin, l = { height: s.height(), width: s.width(), outerHeight: s.outerHeight(), outerWidth: s.outerWidth() }, u = { y: "horizontal" !== r ? o / 100 : 1, x: "vertical" !== r ? o / 100 : 1 }; n.effect = "size", n.queue = !1, n.complete = i, "effect" !== a && (n.origin = h || ["middle", "center"], n.restore = !0), n.from = t.from || ("show" === a ? { height: 0, width: 0, outerHeight: 0, outerWidth: 0 } : l), n.to = { height: l.height * u.y, width: l.width * u.x, outerHeight: l.outerHeight * u.y, outerWidth: l.outerWidth * u.x }, n.fade && ("show" === a && (n.from.opacity = 0, n.to.opacity = 1), "hide" === a && (n.from.opacity = 1, n.to.opacity = 0)), s.effect(n) }, e.effects.effect.puff = function (t, i) { var s = e(this), n = e.effects.setMode(s, t.mode || "hide"), a = "hide" === n, o = parseInt(t.percent, 10) || 150, r = o / 100, h = { height: s.height(), width: s.width(), outerHeight: s.outerHeight(), outerWidth: s.outerWidth() }; e.extend(t, { effect: "scale", queue: !1, fade: !0, mode: n, complete: i, percent: a ? o : 100, from: a ? h : { height: h.height * r, width: h.width * r, outerHeight: h.outerHeight * r, outerWidth: h.outerWidth * r } }), s.effect(t) }, e.effects.effect.pulsate = function (t, i) { var s, n = e(this), a = e.effects.setMode(n, t.mode || "show"), o = "show" === a, r = "hide" === a, h = o || "hide" === a, l = 2 * (t.times || 5) + (h ? 1 : 0), u = t.duration / l, d = 0, c = n.queue(), p = c.length; for ((o || !n.is(":visible")) && (n.css("opacity", 0).show(), d = 1), s = 1; l > s; s++)n.animate({ opacity: d }, u, t.easing), d = 1 - d; n.animate({ opacity: d }, u, t.easing), n.queue(function () { r && n.hide(), i() }), p > 1 && c.splice.apply(c, [1, 0].concat(c.splice(p, l + 1))), n.dequeue() }, e.effects.effect.shake = function (t, i) { var s, n = e(this), a = ["position", "top", "bottom", "left", "right", "height", "width"], o = e.effects.setMode(n, t.mode || "effect"), r = t.direction || "left", h = t.distance || 20, l = t.times || 3, u = 2 * l + 1, d = Math.round(t.duration / u), c = "up" === r || "down" === r ? "top" : "left", p = "up" === r || "left" === r, f = {}, m = {}, g = {}, v = n.queue(), y = v.length; for (e.effects.save(n, a), n.show(), e.effects.createWrapper(n), f[c] = (p ? "-=" : "+=") + h, m[c] = (p ? "+=" : "-=") + 2 * h, g[c] = (p ? "-=" : "+=") + 2 * h, n.animate(f, d, t.easing), s = 1; l > s; s++)n.animate(m, d, t.easing).animate(g, d, t.easing); n.animate(m, d, t.easing).animate(f, d / 2, t.easing).queue(function () { "hide" === o && n.hide(), e.effects.restore(n, a), e.effects.removeWrapper(n), i() }), y > 1 && v.splice.apply(v, [1, 0].concat(v.splice(y, u + 1))), n.dequeue() }, e.effects.effect.slide = function (t, i) { var s, n = e(this), a = ["position", "top", "bottom", "left", "right", "width", "height"], o = e.effects.setMode(n, t.mode || "show"), r = "show" === o, h = t.direction || "left", l = "up" === h || "down" === h ? "top" : "left", u = "up" === h || "left" === h, d = {}; e.effects.save(n, a), n.show(), s = t.distance || n["top" === l ? "outerHeight" : "outerWidth"](!0), e.effects.createWrapper(n).css({ overflow: "hidden" }), r && n.css(l, u ? isNaN(s) ? "-" + s : -s : s), d[l] = (r ? u ? "+=" : "-=" : u ? "-=" : "+=") + s, n.animate(d, { queue: !1, duration: t.duration, easing: t.easing, complete: function () { "hide" === o && n.hide(), e.effects.restore(n, a), e.effects.removeWrapper(n), i() } }) }, e.effects.effect.transfer = function (t, i) { var s = e(this), n = e(t.to), a = "fixed" === n.css("position"), o = e("body"), r = a ? o.scrollTop() : 0, h = a ? o.scrollLeft() : 0, l = n.offset(), u = { top: l.top - r, left: l.left - h, height: n.innerHeight(), width: n.innerWidth() }, d = s.offset(), c = e("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(t.className).css({ top: d.top - r, left: d.left - h, height: s.innerHeight(), width: s.innerWidth(), position: a ? "fixed" : "absolute" }).animate(u, t.duration, t.easing, function () { c.remove(), i() }) }, e.widget("ui.progressbar", { version: "1.11.4", options: { max: 100, value: 0, change: null, complete: null }, min: 0, _create: function () { this.oldValue = this.options.value = this._constrainedValue(), this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({ role: "progressbar", "aria-valuemin": this.min }), this.valueDiv = e("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this._refreshValue() }, _destroy: function () { this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove() }, value: function (e) { return void 0 === e ? this.options.value : (this.options.value = this._constrainedValue(e), this._refreshValue(), void 0) }, _constrainedValue: function (e) { return void 0 === e && (e = this.options.value), this.indeterminate = e === !1, "number" != typeof e && (e = 0), this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, e)) }, _setOptions: function (e) { var t = e.value; delete e.value, this._super(e), this.options.value = this._constrainedValue(t), this._refreshValue() }, _setOption: function (e, t) { "max" === e && (t = Math.max(this.min, t)), "disabled" === e && this.element.toggleClass("ui-state-disabled", !!t).attr("aria-disabled", t), this._super(e, t) }, _percentage: function () { return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min) }, _refreshValue: function () { var t = this.options.value, i = this._percentage(); this.valueDiv.toggle(this.indeterminate || t > this.min).toggleClass("ui-corner-right", t === this.options.max).width(i.toFixed(0) + "%"), this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = e("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))) : (this.element.attr({ "aria-valuemax": this.options.max, "aria-valuenow": t }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== t && (this.oldValue = t, this._trigger("change")), t === this.options.max && this._trigger("complete") } }), e.widget("ui.selectable", e.ui.mouse, { version: "1.11.4", options: { appendTo: "body", autoRefresh: !0, distance: 0, filter: "*", tolerance: "touch", selected: null, selecting: null, start: null, stop: null, unselected: null, unselecting: null }, _create: function () { var t, i = this; this.element.addClass("ui-selectable"), this.dragged = !1, this.refresh = function () { t = e(i.options.filter, i.element[0]), t.addClass("ui-selectee"), t.each(function () { var t = e(this), i = t.offset(); e.data(this, "selectable-item", { element: this, $element: t, left: i.left, top: i.top, right: i.left + t.outerWidth(), bottom: i.top + t.outerHeight(), startselected: !1, selected: t.hasClass("ui-selected"), selecting: t.hasClass("ui-selecting"), unselecting: t.hasClass("ui-unselecting") }) }) }, this.refresh(), this.selectees = t.addClass("ui-selectee"), this._mouseInit(), this.helper = e("<div class='ui-selectable-helper'></div>") }, _destroy: function () { this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy() }, _mouseStart: function (t) { var i = this, s = this.options; this.opos = [t.pageX, t.pageY], this.options.disabled || (this.selectees = e(s.filter, this.element[0]), this._trigger("start", t), e(s.appendTo).append(this.helper), this.helper.css({ left: t.pageX, top: t.pageY, width: 0, height: 0 }), s.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function () { var s = e.data(this, "selectable-item"); s.startselected = !0, t.metaKey || t.ctrlKey || (s.$element.removeClass("ui-selected"), s.selected = !1, s.$element.addClass("ui-unselecting"), s.unselecting = !0, i._trigger("unselecting", t, { unselecting: s.element })) }), e(t.target).parents().addBack().each(function () { var s, n = e.data(this, "selectable-item"); return n ? (s = !t.metaKey && !t.ctrlKey || !n.$element.hasClass("ui-selected"), n.$element.removeClass(s ? "ui-unselecting" : "ui-selected").addClass(s ? "ui-selecting" : "ui-unselecting"), n.unselecting = !s, n.selecting = s, n.selected = s, s ? i._trigger("selecting", t, { selecting: n.element }) : i._trigger("unselecting", t, { unselecting: n.element }), !1) : void 0 })) }, _mouseDrag: function (t) { if (this.dragged = !0, !this.options.disabled) { var i, s = this, n = this.options, a = this.opos[0], o = this.opos[1], r = t.pageX, h = t.pageY; return a > r && (i = r, r = a, a = i), o > h && (i = h, h = o, o = i), this.helper.css({ left: a, top: o, width: r - a, height: h - o }), this.selectees.each(function () { var i = e.data(this, "selectable-item"), l = !1; i && i.element !== s.element[0] && ("touch" === n.tolerance ? l = !(i.left > r || a > i.right || i.top > h || o > i.bottom) : "fit" === n.tolerance && (l = i.left > a && r > i.right && i.top > o && h > i.bottom), l ? (i.selected && (i.$element.removeClass("ui-selected"), i.selected = !1), i.unselecting && (i.$element.removeClass("ui-unselecting"), i.unselecting = !1), i.selecting || (i.$element.addClass("ui-selecting"), i.selecting = !0, s._trigger("selecting", t, { selecting: i.element }))) : (i.selecting && ((t.metaKey || t.ctrlKey) && i.startselected ? (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.$element.addClass("ui-selected"), i.selected = !0) : (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.startselected && (i.$element.addClass("ui-unselecting"), i.unselecting = !0), s._trigger("unselecting", t, { unselecting: i.element }))), i.selected && (t.metaKey || t.ctrlKey || i.startselected || (i.$element.removeClass("ui-selected"), i.selected = !1, i.$element.addClass("ui-unselecting"), i.unselecting = !0, s._trigger("unselecting", t, { unselecting: i.element }))))) }), !1 } }, _mouseStop: function (t) { var i = this; return this.dragged = !1, e(".ui-unselecting", this.element[0]).each(function () { var s = e.data(this, "selectable-item"); s.$element.removeClass("ui-unselecting"), s.unselecting = !1, s.startselected = !1, i._trigger("unselected", t, { unselected: s.element }) }), e(".ui-selecting", this.element[0]).each(function () { var s = e.data(this, "selectable-item"); s.$element.removeClass("ui-selecting").addClass("ui-selected"), s.selecting = !1, s.selected = !0, s.startselected = !0, i._trigger("selected", t, { selected: s.element }) }), this._trigger("stop", t), this.helper.remove(), !1 } }), e.widget("ui.selectmenu", { version: "1.11.4", defaultElement: "<select>", options: { appendTo: null, disabled: null, icons: { button: "ui-icon-triangle-1-s" }, position: { my: "left top", at: "left bottom", collision: "none" }, width: null, change: null, close: null, focus: null, open: null, select: null }, _create: function () { var e = this.element.uniqueId().attr("id"); this.ids = { element: e, button: e + "-button", menu: e + "-menu" }, this._drawButton(), this._drawMenu(), this.options.disabled && this.disable() }, _drawButton: function () { var t = this; this.label = e("label[for='" + this.ids.element + "']").attr("for", this.ids.button), this._on(this.label, { click: function (e) { this.button.focus(), e.preventDefault() } }), this.element.hide(), this.button = e("<span>", { "class": "ui-selectmenu-button ui-widget ui-state-default ui-corner-all", tabindex: this.options.disabled ? -1 : 0, id: this.ids.button, role: "combobox", "aria-expanded": "false", "aria-autocomplete": "list", "aria-owns": this.ids.menu, "aria-haspopup": "true" }).insertAfter(this.element), e("<span>", { "class": "ui-icon " + this.options.icons.button }).prependTo(this.button), this.buttonText = e("<span>", { "class": "ui-selectmenu-text" }).appendTo(this.button), this._setText(this.buttonText, this.element.find("option:selected").text()), this._resizeButton(), this._on(this.button, this._buttonEvents), this.button.one("focusin", function () { t.menuItems || t._refreshMenu() }), this._hoverable(this.button), this._focusable(this.button) }, _drawMenu: function () { var t = this; this.menu = e("<ul>", { "aria-hidden": "true", "aria-labelledby": this.ids.button, id: this.ids.menu }), this.menuWrap = e("<div>", { "class": "ui-selectmenu-menu ui-front" }).append(this.menu).appendTo(this._appendTo()), this.menuInstance = this.menu.menu({ role: "listbox", select: function (e, i) { e.preventDefault(), t._setSelection(), t._select(i.item.data("ui-selectmenu-item"), e) }, focus: function (e, i) { var s = i.item.data("ui-selectmenu-item"); null != t.focusIndex && s.index !== t.focusIndex && (t._trigger("focus", e, { item: s }), t.isOpen || t._select(s, e)), t.focusIndex = s.index, t.button.attr("aria-activedescendant", t.menuItems.eq(s.index).attr("id")) } }).menu("instance"), this.menu.addClass("ui-corner-bottom").removeClass("ui-corner-all"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function () { return !1 }, this.menuInstance._isDivider = function () { return !1 } }, refresh: function () { this._refreshMenu(), this._setText(this.buttonText, this._getSelectedItem().text()), this.options.width || this._resizeButton() }, _refreshMenu: function () { this.menu.empty(); var e, t = this.element.find("option"); t.length && (this._parseOptions(t), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup"), e = this._getSelectedItem(), this.menuInstance.focus(null, e), this._setAria(e.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled"))) }, open: function (e) { this.options.disabled || (this.menuItems ? (this.menu.find(".ui-state-focus").removeClass("ui-state-focus"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", e)) }, _position: function () { this.menuWrap.position(e.extend({ of: this.button }, this.options.position)) }, close: function (e) { this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", e)) }, widget: function () { return this.button }, menuWidget: function () { return this.menu }, _renderMenu: function (t, i) { var s = this, n = ""; e.each(i, function (i, a) { a.optgroup !== n && (e("<li>", { "class": "ui-selectmenu-optgroup ui-menu-divider" + (a.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : ""), text: a.optgroup }).appendTo(t), n = a.optgroup), s._renderItemData(t, a) }) }, _renderItemData: function (e, t) { return this._renderItem(e, t).data("ui-selectmenu-item", t) }, _renderItem: function (t, i) { var s = e("<li>"); return i.disabled && s.addClass("ui-state-disabled"), this._setText(s, i.label), s.appendTo(t) }, _setText: function (e, t) { t ? e.text(t) : e.html("&#160;") }, _move: function (e, t) { var i, s, n = ".ui-menu-item"; this.isOpen ? i = this.menuItems.eq(this.focusIndex) : (i = this.menuItems.eq(this.element[0].selectedIndex), n += ":not(.ui-state-disabled)"), s = "first" === e || "last" === e ? i["first" === e ? "prevAll" : "nextAll"](n).eq(-1) : i[e + "All"](n).eq(0), s.length && this.menuInstance.focus(t, s) }, _getSelectedItem: function () { return this.menuItems.eq(this.element[0].selectedIndex) }, _toggle: function (e) { this[this.isOpen ? "close" : "open"](e) }, _setSelection: function () { var e; this.range && (window.getSelection ? (e = window.getSelection(), e.removeAllRanges(), e.addRange(this.range)) : this.range.select(), this.button.focus()) }, _documentClick: { mousedown: function (t) { this.isOpen && (e(t.target).closest(".ui-selectmenu-menu, #" + this.ids.button).length || this.close(t)) } }, _buttonEvents: { mousedown: function () { var e; window.getSelection ? (e = window.getSelection(), e.rangeCount && (this.range = e.getRangeAt(0))) : this.range = document.selection.createRange() }, click: function (e) { this._setSelection(), this._toggle(e) }, keydown: function (t) { var i = !0; switch (t.keyCode) { case e.ui.keyCode.TAB: case e.ui.keyCode.ESCAPE: this.close(t), i = !1; break; case e.ui.keyCode.ENTER: this.isOpen && this._selectFocusedItem(t); break; case e.ui.keyCode.UP: t.altKey ? this._toggle(t) : this._move("prev", t); break; case e.ui.keyCode.DOWN: t.altKey ? this._toggle(t) : this._move("next", t); break; case e.ui.keyCode.SPACE: this.isOpen ? this._selectFocusedItem(t) : this._toggle(t); break; case e.ui.keyCode.LEFT: this._move("prev", t); break; case e.ui.keyCode.RIGHT: this._move("next", t); break; case e.ui.keyCode.HOME: case e.ui.keyCode.PAGE_UP: this._move("first", t); break; case e.ui.keyCode.END: case e.ui.keyCode.PAGE_DOWN: this._move("last", t); break; default: this.menu.trigger(t), i = !1 }i && t.preventDefault() } }, _selectFocusedItem: function (e) { var t = this.menuItems.eq(this.focusIndex); t.hasClass("ui-state-disabled") || this._select(t.data("ui-selectmenu-item"), e) }, _select: function (e, t) { var i = this.element[0].selectedIndex; this.element[0].selectedIndex = e.index, this._setText(this.buttonText, e.label), this._setAria(e), this._trigger("select", t, { item: e }), e.index !== i && this._trigger("change", t, { item: e }), this.close(t) }, _setAria: function (e) { var t = this.menuItems.eq(e.index).attr("id"); this.button.attr({ "aria-labelledby": t, "aria-activedescendant": t }), this.menu.attr("aria-activedescendant", t) }, _setOption: function (e, t) { "icons" === e && this.button.find("span.ui-icon").removeClass(this.options.icons.button).addClass(t.button), this._super(e, t), "appendTo" === e && this.menuWrap.appendTo(this._appendTo()), "disabled" === e && (this.menuInstance.option("disabled", t), this.button.toggleClass("ui-state-disabled", t).attr("aria-disabled", t), this.element.prop("disabled", t), t ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0)), "width" === e && this._resizeButton() }, _appendTo: function () { var t = this.options.appendTo; return t && (t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0)), t && t[0] || (t = this.element.closest(".ui-front")), t.length || (t = this.document[0].body), t }, _toggleAttr: function () { this.button.toggleClass("ui-corner-top", this.isOpen).toggleClass("ui-corner-all", !this.isOpen).attr("aria-expanded", this.isOpen), this.menuWrap.toggleClass("ui-selectmenu-open", this.isOpen), this.menu.attr("aria-hidden", !this.isOpen) }, _resizeButton: function () { var e = this.options.width; e || (e = this.element.show().outerWidth(), this.element.hide()), this.button.outerWidth(e) }, _resizeMenu: function () { this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1)) }, _getCreateOptions: function () { return { disabled: this.element.prop("disabled") } }, _parseOptions: function (t) { var i = []; t.each(function (t, s) { var n = e(s), a = n.parent("optgroup"); i.push({ element: n, index: t, value: n.val(), label: n.text(), optgroup: a.attr("label") || "", disabled: a.prop("disabled") || n.prop("disabled") }) }), this.items = i }, _destroy: function () { this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.label.attr("for", this.ids.element) } }), e.widget("ui.slider", e.ui.mouse, { version: "1.11.4", widgetEventPrefix: "slide", options: { animate: !1, distance: 0, max: 100, min: 0, orientation: "horizontal", range: !1, step: 1, value: 0, values: null, change: null, slide: null, start: null, stop: null }, numPages: 5, _create: function () { this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1 }, _refresh: function () { this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue() }, _createHandles: function () { var t, i, s = this.options, n = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"), a = "<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>", o = []; for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), t = n.length; i > t; t++)o.push(a); this.handles = n.add(e(o.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function (t) { e(this).data("ui-slider-handle-index", t) }) }, _createRange: function () { var t = this.options, i = ""; t.range ? (t.range === !0 && (t.values ? t.values.length && 2 !== t.values.length ? t.values = [t.values[0], t.values[0]] : e.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({ left: "", bottom: "" }) : (this.range = e("<div></div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(i + ("min" === t.range || "max" === t.range ? " ui-slider-range-" + t.range : ""))) : (this.range && this.range.remove(), this.range = null) }, _setupEvents: function () { this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles) }, _destroy: function () { this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy() }, _mouseCapture: function (t) { var i, s, n, a, o, r, h, l, u = this, d = this.options; return d.disabled ? !1 : (this.elementSize = { width: this.element.outerWidth(), height: this.element.outerHeight() }, this.elementOffset = this.element.offset(), i = { x: t.pageX, y: t.pageY }, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function (t) { var i = Math.abs(s - u.values(t)); (n > i || n === i && (t === u._lastChangedValue || u.values(t) === d.min)) && (n = i, a = e(this), o = t) }), r = this._start(t, o), r === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = o, a.addClass("ui-state-active").focus(), h = a.offset(), l = !e(t.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? { left: 0, top: 0 } : { left: t.pageX - h.left - a.width() / 2, top: t.pageY - h.top - a.height() / 2 - (parseInt(a.css("borderTopWidth"), 10) || 0) - (parseInt(a.css("borderBottomWidth"), 10) || 0) + (parseInt(a.css("marginTop"), 10) || 0) }, this.handles.hasClass("ui-state-hover") || this._slide(t, o, s), this._animateOff = !0, !0)) }, _mouseStart: function () { return !0 }, _mouseDrag: function (e) { var t = { x: e.pageX, y: e.pageY }, i = this._normValueFromMouse(t); return this._slide(e, this._handleIndex, i), !1 }, _mouseStop: function (e) { return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(e, this._handleIndex), this._change(e, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1 }, _detectOrientation: function () { this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal" }, _normValueFromMouse: function (e) { var t, i, s, n, a; return "horizontal" === this.orientation ? (t = this.elementSize.width, i = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, i = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s = i / t, s > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), a = this._valueMin() + s * n, this._trimAlignValue(a) }, _start: function (e, t) { var i = { handle: this.handles[t], value: this.value() }; return this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("start", e, i) }, _slide: function (e, t, i) { var s, n, a; this.options.values && this.options.values.length ? (s = this.values(t ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === t && i > s || 1 === t && s > i) && (i = s), i !== this.values(t) && (n = this.values(), n[t] = i, a = this._trigger("slide", e, { handle: this.handles[t], value: i, values: n }), s = this.values(t ? 0 : 1), a !== !1 && this.values(t, i))) : i !== this.value() && (a = this._trigger("slide", e, { handle: this.handles[t], value: i }), a !== !1 && this.value(i)) }, _stop: function (e, t) { var i = { handle: this.handles[t], value: this.value() }; this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("stop", e, i) }, _change: function (e, t) { if (!this._keySliding && !this._mouseSliding) { var i = { handle: this.handles[t], value: this.value() }; this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._lastChangedValue = t, this._trigger("change", e, i) } }, value: function (e) { return arguments.length ? (this.options.value = this._trimAlignValue(e), this._refreshValue(), this._change(null, 0), void 0) : this._value() }, values: function (t, i) { var s, n, a; if (arguments.length > 1) return this.options.values[t] = this._trimAlignValue(i), this._refreshValue(), this._change(null, t), void 0; if (!arguments.length) return this._values(); if (!e.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(t) : this.value(); for (s = this.options.values, n = arguments[0], a = 0; s.length > a; a += 1)s[a] = this._trimAlignValue(n[a]), this._change(null, a); this._refreshValue() }, _setOption: function (t, i) { var s, n = 0; switch ("range" === t && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), e.isArray(this.options.values) && (n = this.options.values.length), "disabled" === t && this.element.toggleClass("ui-state-disabled", !!i), this._super(t, i), t) { case "orientation": this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue(), this.handles.css("horizontal" === i ? "bottom" : "left", ""); break; case "value": this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1; break; case "values": for (this._animateOff = !0, this._refreshValue(), s = 0; n > s; s += 1)this._change(null, s); this._animateOff = !1; break; case "step": case "min": case "max": this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1; break; case "range": this._animateOff = !0, this._refresh(), this._animateOff = !1 } }, _value: function () { var e = this.options.value; return e = this._trimAlignValue(e) }, _values: function (e) { var t, i, s; if (arguments.length) return t = this.options.values[e], t = this._trimAlignValue(t); if (this.options.values && this.options.values.length) { for (i = this.options.values.slice(), s = 0; i.length > s; s += 1)i[s] = this._trimAlignValue(i[s]); return i } return [] }, _trimAlignValue: function (e) { if (this._valueMin() >= e) return this._valueMin(); if (e >= this._valueMax()) return this._valueMax(); var t = this.options.step > 0 ? this.options.step : 1, i = (e - this._valueMin()) % t, s = e - i; return 2 * Math.abs(i) >= t && (s += i > 0 ? t : -t), parseFloat(s.toFixed(5)) }, _calculateNewMax: function () { var e = this.options.max, t = this._valueMin(), i = this.options.step, s = Math.floor(+(e - t).toFixed(this._precision()) / i) * i; e = s + t, this.max = parseFloat(e.toFixed(this._precision())) }, _precision: function () { var e = this._precisionOf(this.options.step); return null !== this.options.min && (e = Math.max(e, this._precisionOf(this.options.min))), e }, _precisionOf: function (e) { var t = "" + e, i = t.indexOf("."); return -1 === i ? 0 : t.length - i - 1 }, _valueMin: function () { return this.options.min }, _valueMax: function () { return this.max }, _refreshValue: function () { var t, i, s, n, a, o = this.options.range, r = this.options, h = this, l = this._animateOff ? !1 : r.animate, u = {}; this.options.values && this.options.values.length ? this.handles.each(function (s) { i = 100 * ((h.values(s) - h._valueMin()) / (h._valueMax() - h._valueMin())), u["horizontal" === h.orientation ? "left" : "bottom"] = i + "%", e(this).stop(1, 1)[l ? "animate" : "css"](u, r.animate), h.options.range === !0 && ("horizontal" === h.orientation ? (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({ left: i + "%" }, r.animate), 1 === s && h.range[l ? "animate" : "css"]({ width: i - t + "%" }, { queue: !1, duration: r.animate })) : (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({ bottom: i + "%" }, r.animate), 1 === s && h.range[l ? "animate" : "css"]({ height: i - t + "%" }, { queue: !1, duration: r.animate }))), t = i }) : (s = this.value(), n = this._valueMin(), a = this._valueMax(), i = a !== n ? 100 * ((s - n) / (a - n)) : 0, u["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[l ? "animate" : "css"](u, r.animate), "min" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({ width: i + "%" }, r.animate), "max" === o && "horizontal" === this.orientation && this.range[l ? "animate" : "css"]({ width: 100 - i + "%" }, { queue: !1, duration: r.animate }), "min" === o && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({ height: i + "%" }, r.animate), "max" === o && "vertical" === this.orientation && this.range[l ? "animate" : "css"]({ height: 100 - i + "%" }, { queue: !1, duration: r.animate })) }, _handleEvents: { keydown: function (t) { var i, s, n, a, o = e(t.target).data("ui-slider-handle-index"); switch (t.keyCode) { case e.ui.keyCode.HOME: case e.ui.keyCode.END: case e.ui.keyCode.PAGE_UP: case e.ui.keyCode.PAGE_DOWN: case e.ui.keyCode.UP: case e.ui.keyCode.RIGHT: case e.ui.keyCode.DOWN: case e.ui.keyCode.LEFT: if (t.preventDefault(), !this._keySliding && (this._keySliding = !0, e(t.target).addClass("ui-state-active"), i = this._start(t, o), i === !1)) return }switch (a = this.options.step, s = n = this.options.values && this.options.values.length ? this.values(o) : this.value(), t.keyCode) { case e.ui.keyCode.HOME: n = this._valueMin(); break; case e.ui.keyCode.END: n = this._valueMax(); break; case e.ui.keyCode.PAGE_UP: n = this._trimAlignValue(s + (this._valueMax() - this._valueMin()) / this.numPages); break; case e.ui.keyCode.PAGE_DOWN: n = this._trimAlignValue(s - (this._valueMax() - this._valueMin()) / this.numPages); break; case e.ui.keyCode.UP: case e.ui.keyCode.RIGHT: if (s === this._valueMax()) return; n = this._trimAlignValue(s + a); break; case e.ui.keyCode.DOWN: case e.ui.keyCode.LEFT: if (s === this._valueMin()) return; n = this._trimAlignValue(s - a) }this._slide(t, o, n) }, keyup: function (t) { var i = e(t.target).data("ui-slider-handle-index"); this._keySliding && (this._keySliding = !1, this._stop(t, i), this._change(t, i), e(t.target).removeClass("ui-state-active")) } } }), e.widget("ui.sortable", e.ui.mouse, {
		version: "1.11.4", widgetEventPrefix: "sort", ready: !1, options: { appendTo: "parent", axis: !1, connectWith: !1, containment: !1, cursor: "auto", cursorAt: !1, dropOnEmpty: !0, forcePlaceholderSize: !1, forceHelperSize: !1, grid: !1, handle: !1, helper: "original", items: "> *", opacity: !1, placeholder: !1, revert: !1, scroll: !0, scrollSensitivity: 20, scrollSpeed: 20, scope: "default", tolerance: "intersect", zIndex: 1e3, activate: null, beforeStop: null, change: null, deactivate: null, out: null, over: null, receive: null, remove: null, sort: null, start: null, stop: null, update: null }, _isOverAxis: function (e, t, i) { return e >= t && t + i > e }, _isFloating: function (e) { return /left|right/.test(e.css("float")) || /inline|table-cell/.test(e.css("display")) }, _create: function () { this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0 }, _setOption: function (e, t) { this._super(e, t), "handle" === e && this._setHandleClassName() }, _setHandleClassName: function () { this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"), e.each(this.items, function () { (this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item).addClass("ui-sortable-handle") }) }, _destroy: function () { this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"), this._mouseDestroy(); for (var e = this.items.length - 1; e >= 0; e--)this.items[e].item.removeData(this.widgetName + "-item"); return this }, _mouseCapture: function (t, i) { var s = null, n = !1, a = this; return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(t), e(t.target).parents().each(function () { return e.data(this, a.widgetName + "-item") === a ? (s = e(this), !1) : void 0 }), e.data(t.target, a.widgetName + "-item") === a && (s = e(t.target)), s ? !this.options.handle || i || (e(this.options.handle, s).find("*").addBack().each(function () { this === t.target && (n = !0) }), n) ? (this.currentItem = s, this._removeCurrentsFromItems(), !0) : !1 : !1) }, _mouseStart: function (t, i, s) {
			var n, a, o = this.options; if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = { top: this.offset.top - this.margins.top, left: this.offset.left - this.margins.left }, e.extend(this.offset, { click: { left: t.pageX - this.offset.left, top: t.pageY - this.offset.top }, parent: this._getParentOffset(), relative: this._getRelativeOffset() }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt), this.domPosition = { prev: this.currentItem.prev()[0], parent: this.currentItem.parent()[0] }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), o.containment && this._setContainment(), o.cursor && "auto" !== o.cursor && (a = this.document.find("body"), this.storedCursor = a.css("cursor"), a.css("cursor", o.cursor), this.storedStylesheet = e("<style>*{ cursor: " + o.cursor + " !important; }</style>").appendTo(a)), o.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", o.opacity)), o.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", o.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s) for (n = this.containers.length - 1; n >= 0; n--)this.containers[n]._trigger("activate", t, this._uiHash(this));
			return e.ui.ddmanager && (e.ui.ddmanager.current = this), e.ui.ddmanager && !o.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(t), !0
		}, _mouseDrag: function (t) { var i, s, n, a, o = this.options, r = !1; for (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < o.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + o.scrollSpeed : t.pageY - this.overflowOffset.top < o.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - o.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < o.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + o.scrollSpeed : t.pageX - this.overflowOffset.left < o.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - o.scrollSpeed)) : (t.pageY - this.document.scrollTop() < o.scrollSensitivity ? r = this.document.scrollTop(this.document.scrollTop() - o.scrollSpeed) : this.window.height() - (t.pageY - this.document.scrollTop()) < o.scrollSensitivity && (r = this.document.scrollTop(this.document.scrollTop() + o.scrollSpeed)), t.pageX - this.document.scrollLeft() < o.scrollSensitivity ? r = this.document.scrollLeft(this.document.scrollLeft() - o.scrollSpeed) : this.window.width() - (t.pageX - this.document.scrollLeft()) < o.scrollSensitivity && (r = this.document.scrollLeft(this.document.scrollLeft() + o.scrollSpeed))), r !== !1 && e.ui.ddmanager && !o.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)if (s = this.items[i], n = s.item[0], a = this._intersectsWithPointer(s), a && s.instance === this.currentContainer && n !== this.currentItem[0] && this.placeholder[1 === a ? "next" : "prev"]()[0] !== n && !e.contains(this.placeholder[0], n) && ("semi-dynamic" === this.options.type ? !e.contains(this.element[0], n) : !0)) { if (this.direction = 1 === a ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(s)) break; this._rearrange(t, s), this._trigger("change", t, this._uiHash()); break } return this._contactContainers(t), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1 }, _mouseStop: function (t, i) { if (t) { if (e.ui.ddmanager && !this.options.dropBehaviour && e.ui.ddmanager.drop(this, t), this.options.revert) { var s = this, n = this.placeholder.offset(), a = this.options.axis, o = {}; a && "x" !== a || (o.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), a && "y" !== a || (o.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, e(this.helper).animate(o, parseInt(this.options.revert, 10) || 500, function () { s._clear(t) }) } else this._clear(t, i); return !1 } }, cancel: function () { if (this.dragging) { this._mouseUp({ target: null }), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show(); for (var t = this.containers.length - 1; t >= 0; t--)this.containers[t]._trigger("deactivate", null, this._uiHash(this)), this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), this.containers[t].containerCache.over = 0) } return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), e.extend(this, { helper: null, dragging: !1, reverting: !1, _noFinalSort: null }), this.domPosition.prev ? e(this.domPosition.prev).after(this.currentItem) : e(this.domPosition.parent).prepend(this.currentItem)), this }, serialize: function (t) { var i = this._getItemsAsjQuery(t && t.connected), s = []; return t = t || {}, e(i).each(function () { var i = (e(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[\-=_](.+)/); i && s.push((t.key || i[1] + "[]") + "=" + (t.key && t.expression ? i[1] : i[2])) }), !s.length && t.key && s.push(t.key + "="), s.join("&") }, toArray: function (t) { var i = this._getItemsAsjQuery(t && t.connected), s = []; return t = t || {}, i.each(function () { s.push(e(t.item || this).attr(t.attribute || "id") || "") }), s }, _intersectsWith: function (e) { var t = this.positionAbs.left, i = t + this.helperProportions.width, s = this.positionAbs.top, n = s + this.helperProportions.height, a = e.left, o = a + e.width, r = e.top, h = r + e.height, l = this.offset.click.top, u = this.offset.click.left, d = "x" === this.options.axis || s + l > r && h > s + l, c = "y" === this.options.axis || t + u > a && o > t + u, p = d && c; return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > e[this.floating ? "width" : "height"] ? p : t + this.helperProportions.width / 2 > a && o > i - this.helperProportions.width / 2 && s + this.helperProportions.height / 2 > r && h > n - this.helperProportions.height / 2 }, _intersectsWithPointer: function (e) { var t = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, e.top, e.height), i = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, e.left, e.width), s = t && i, n = this._getDragVerticalDirection(), a = this._getDragHorizontalDirection(); return s ? this.floating ? a && "right" === a || "down" === n ? 2 : 1 : n && ("down" === n ? 2 : 1) : !1 }, _intersectsWithSides: function (e) { var t = this._isOverAxis(this.positionAbs.top + this.offset.click.top, e.top + e.height / 2, e.height), i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, e.left + e.width / 2, e.width), s = this._getDragVerticalDirection(), n = this._getDragHorizontalDirection(); return this.floating && n ? "right" === n && i || "left" === n && !i : s && ("down" === s && t || "up" === s && !t) }, _getDragVerticalDirection: function () { var e = this.positionAbs.top - this.lastPositionAbs.top; return 0 !== e && (e > 0 ? "down" : "up") }, _getDragHorizontalDirection: function () { var e = this.positionAbs.left - this.lastPositionAbs.left; return 0 !== e && (e > 0 ? "right" : "left") }, refresh: function (e) { return this._refreshItems(e), this._setHandleClassName(), this.refreshPositions(), this }, _connectWith: function () { var e = this.options; return e.connectWith.constructor === String ? [e.connectWith] : e.connectWith }, _getItemsAsjQuery: function (t) { function i() { r.push(this) } var s, n, a, o, r = [], h = [], l = this._connectWith(); if (l && t) for (s = l.length - 1; s >= 0; s--)for (a = e(l[s], this.document[0]), n = a.length - 1; n >= 0; n--)o = e.data(a[n], this.widgetFullName), o && o !== this && !o.options.disabled && h.push([e.isFunction(o.options.items) ? o.options.items.call(o.element) : e(o.options.items, o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), o]); for (h.push([e.isFunction(this.options.items) ? this.options.items.call(this.element, null, { options: this.options, item: this.currentItem }) : e(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), s = h.length - 1; s >= 0; s--)h[s][0].each(i); return e(r) }, _removeCurrentsFromItems: function () { var t = this.currentItem.find(":data(" + this.widgetName + "-item)"); this.items = e.grep(this.items, function (e) { for (var i = 0; t.length > i; i++)if (t[i] === e.item[0]) return !1; return !0 }) }, _refreshItems: function (t) { this.items = [], this.containers = [this]; var i, s, n, a, o, r, h, l, u = this.items, d = [[e.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, { item: this.currentItem }) : e(this.options.items, this.element), this]], c = this._connectWith(); if (c && this.ready) for (i = c.length - 1; i >= 0; i--)for (n = e(c[i], this.document[0]), s = n.length - 1; s >= 0; s--)a = e.data(n[s], this.widgetFullName), a && a !== this && !a.options.disabled && (d.push([e.isFunction(a.options.items) ? a.options.items.call(a.element[0], t, { item: this.currentItem }) : e(a.options.items, a.element), a]), this.containers.push(a)); for (i = d.length - 1; i >= 0; i--)for (o = d[i][1], r = d[i][0], s = 0, l = r.length; l > s; s++)h = e(r[s]), h.data(this.widgetName + "-item", o), u.push({ item: h, instance: o, width: 0, height: 0, left: 0, top: 0 }) }, refreshPositions: function (t) { this.floating = this.items.length ? "x" === this.options.axis || this._isFloating(this.items[0].item) : !1, this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset()); var i, s, n, a; for (i = this.items.length - 1; i >= 0; i--)s = this.items[i], s.instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? e(this.options.toleranceElement, s.item) : s.item, t || (s.width = n.outerWidth(), s.height = n.outerHeight()), a = n.offset(), s.left = a.left, s.top = a.top); if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this); else for (i = this.containers.length - 1; i >= 0; i--)a = this.containers[i].element.offset(), this.containers[i].containerCache.left = a.left, this.containers[i].containerCache.top = a.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight(); return this }, _createPlaceholder: function (t) { t = t || this; var i, s = t.options; s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = { element: function () { var s = t.currentItem[0].nodeName.toLowerCase(), n = e("<" + s + ">", t.document[0]).addClass(i || t.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper"); return "tbody" === s ? t._createTrPlaceholder(t.currentItem.find("tr").eq(0), e("<tr>", t.document[0]).appendTo(n)) : "tr" === s ? t._createTrPlaceholder(t.currentItem, n) : "img" === s && n.attr("src", t.currentItem.attr("src")), i || n.css("visibility", "hidden"), n }, update: function (e, n) { (!i || s.forcePlaceholderSize) && (n.height() || n.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css("paddingTop") || 0, 10) - parseInt(t.currentItem.css("paddingBottom") || 0, 10)), n.width() || n.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css("paddingLeft") || 0, 10) - parseInt(t.currentItem.css("paddingRight") || 0, 10))) } }), t.placeholder = e(s.placeholder.element.call(t.element, t.currentItem)), t.currentItem.after(t.placeholder), s.placeholder.update(t, t.placeholder) }, _createTrPlaceholder: function (t, i) { var s = this; t.children().each(function () { e("<td>&#160;</td>", s.document[0]).attr("colspan", e(this).attr("colspan") || 1).appendTo(i) }) }, _contactContainers: function (t) { var i, s, n, a, o, r, h, l, u, d, c = null, p = null; for (i = this.containers.length - 1; i >= 0; i--)if (!e.contains(this.currentItem[0], this.containers[i].element[0])) if (this._intersectsWith(this.containers[i].containerCache)) { if (c && e.contains(this.containers[i].element[0], c.element[0])) continue; c = this.containers[i], p = i } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", t, this._uiHash(this)), this.containers[i].containerCache.over = 0); if (c) if (1 === this.containers.length) this.containers[p].containerCache.over || (this.containers[p]._trigger("over", t, this._uiHash(this)), this.containers[p].containerCache.over = 1); else { for (n = 1e4, a = null, u = c.floating || this._isFloating(this.currentItem), o = u ? "left" : "top", r = u ? "width" : "height", d = u ? "clientX" : "clientY", s = this.items.length - 1; s >= 0; s--)e.contains(this.containers[p].element[0], this.items[s].item[0]) && this.items[s].item[0] !== this.currentItem[0] && (h = this.items[s].item.offset()[o], l = !1, t[d] - h > this.items[s][r] / 2 && (l = !0), n > Math.abs(t[d] - h) && (n = Math.abs(t[d] - h), a = this.items[s], this.direction = l ? "up" : "down")); if (!a && !this.options.dropOnEmpty) return; if (this.currentContainer === this.containers[p]) return this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", t, this._uiHash()), this.currentContainer.containerCache.over = 1), void 0; a ? this._rearrange(t, a, null, !0) : this._rearrange(t, null, this.containers[p].element, !0), this._trigger("change", t, this._uiHash()), this.containers[p]._trigger("change", t, this._uiHash(this)), this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[p]._trigger("over", t, this._uiHash(this)), this.containers[p].containerCache.over = 1 } }, _createHelper: function (t) { var i = this.options, s = e.isFunction(i.helper) ? e(i.helper.apply(this.element[0], [t, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem; return s.parents("body").length || e("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), s[0] === this.currentItem[0] && (this._storedCSS = { width: this.currentItem[0].style.width, height: this.currentItem[0].style.height, position: this.currentItem.css("position"), top: this.currentItem.css("top"), left: this.currentItem.css("left") }), (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()), (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()), s }, _adjustOffsetFromHelper: function (t) { "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = { left: +t[0], top: +t[1] || 0 }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top) }, _getParentOffset: function () { this.offsetParent = this.helper.offsetParent(); var t = this.offsetParent.offset(); return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && e.ui.ie) && (t = { top: 0, left: 0 }), { top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0) } }, _getRelativeOffset: function () { if ("relative" === this.cssPosition) { var e = this.currentItem.position(); return { top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft() } } return { top: 0, left: 0 } }, _cacheMargins: function () { this.margins = { left: parseInt(this.currentItem.css("marginLeft"), 10) || 0, top: parseInt(this.currentItem.css("marginTop"), 10) || 0 } }, _cacheHelperProportions: function () { this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() } }, _setContainment: function () { var t, i, s, n = this.options; "parent" === n.containment && (n.containment = this.helper[0].parentNode), ("document" === n.containment || "window" === n.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === n.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === n.containment ? this.document.width() : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(n.containment) || (t = e(n.containment)[0], i = e(n.containment).offset(), s = "hidden" !== e(t).css("overflow"), this.containment = [i.left + (parseInt(e(t).css("borderLeftWidth"), 10) || 0) + (parseInt(e(t).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(e(t).css("borderTopWidth"), 10) || 0) + (parseInt(e(t).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(e(t).css("borderLeftWidth"), 10) || 0) - (parseInt(e(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(e(t).css("borderTopWidth"), 10) || 0) - (parseInt(e(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]) }, _convertPositionTo: function (t, i) { i || (i = this.position); var s = "absolute" === t ? 1 : -1, n = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, a = /(html|body)/i.test(n[0].tagName); return { top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : a ? 0 : n.scrollTop()) * s, left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : a ? 0 : n.scrollLeft()) * s } }, _generatePosition: function (t) { var i, s, n = this.options, a = t.pageX, o = t.pageY, r = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, h = /(html|body)/i.test(r[0].tagName); return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (a = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (o = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (a = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (o = this.containment[3] + this.offset.click.top)), n.grid && (i = this.originalPageY + Math.round((o - this.originalPageY) / n.grid[1]) * n.grid[1], o = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1] : i, s = this.originalPageX + Math.round((a - this.originalPageX) / n.grid[0]) * n.grid[0], a = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0] : s)), { top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : r.scrollTop()), left: a - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : r.scrollLeft()) } }, _rearrange: function (e, t, i, s) { i ? i[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? t.item[0] : t.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1; var n = this.counter; this._delay(function () { n === this.counter && this.refreshPositions(!s) }) }, _clear: function (e, t) { function i(e, t, i) { return function (s) { i._trigger(e, s, t._uiHash(t)) } } this.reverting = !1; var s, n = []; if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) { for (s in this._storedCSS) ("auto" === this._storedCSS[s] || "static" === this._storedCSS[s]) && (this._storedCSS[s] = ""); this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") } else this.currentItem.show(); for (this.fromOutside && !t && n.push(function (e) { this._trigger("receive", e, this._uiHash(this.fromOutside)) }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || t || n.push(function (e) { this._trigger("update", e, this._uiHash()) }), this !== this.currentContainer && (t || (n.push(function (e) { this._trigger("remove", e, this._uiHash()) }), n.push(function (e) { return function (t) { e._trigger("receive", t, this._uiHash(this)) } }.call(this, this.currentContainer)), n.push(function (e) { return function (t) { e._trigger("update", t, this._uiHash(this)) } }.call(this, this.currentContainer)))), s = this.containers.length - 1; s >= 0; s--)t || n.push(i("deactivate", this, this.containers[s])), this.containers[s].containerCache.over && (n.push(i("out", this, this.containers[s])), this.containers[s].containerCache.over = 0); if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, t || this._trigger("beforeStop", e, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !t) { for (s = 0; n.length > s; s++)n[s].call(this, e); this._trigger("stop", e, this._uiHash()) } return this.fromOutside = !1, !this.cancelHelperRemoval }, _trigger: function () { e.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel() }, _uiHash: function (t) { var i = t || this; return { helper: i.helper, placeholder: i.placeholder || e([]), position: i.position, originalPosition: i.originalPosition, offset: i.positionAbs, item: i.currentItem, sender: t ? t.element : null } }
	}), e.widget("ui.spinner", { version: "1.11.4", defaultElement: "<input>", widgetEventPrefix: "spin", options: { culture: null, icons: { down: "ui-icon-triangle-1-s", up: "ui-icon-triangle-1-n" }, incremental: !0, max: null, min: null, numberFormat: null, page: 10, step: 1, change: null, spin: null, start: null, stop: null }, _create: function () { this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, { beforeunload: function () { this.element.removeAttr("autocomplete") } }) }, _getCreateOptions: function () { var t = {}, i = this.element; return e.each(["min", "max", "step"], function (e, s) { var n = i.attr(s); void 0 !== n && n.length && (t[s] = n) }), t }, _events: { keydown: function (e) { this._start(e) && this._keydown(e) && e.preventDefault() }, keyup: "_stop", focus: function () { this.previous = this.element.val() }, blur: function (e) { return this.cancelBlur ? (delete this.cancelBlur, void 0) : (this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger("change", e), void 0) }, mousewheel: function (e, t) { if (t) { if (!this.spinning && !this._start(e)) return !1; this._spin((t > 0 ? 1 : -1) * this.options.step, e), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function () { this.spinning && this._stop(e) }, 100), e.preventDefault() } }, "mousedown .ui-spinner-button": function (t) { function i() { var e = this.element[0] === this.document[0].activeElement; e || (this.element.focus(), this.previous = s, this._delay(function () { this.previous = s })) } var s; s = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), t.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function () { delete this.cancelBlur, i.call(this) }), this._start(t) !== !1 && this._repeat(null, e(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t) }, "mouseup .ui-spinner-button": "_stop", "mouseenter .ui-spinner-button": function (t) { return e(t.currentTarget).hasClass("ui-state-active") ? this._start(t) === !1 ? !1 : (this._repeat(null, e(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t), void 0) : void 0 }, "mouseleave .ui-spinner-button": "_stop" }, _draw: function () { var e = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml()); this.element.attr("role", "spinbutton"), this.buttons = e.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"), this.buttons.height() > Math.ceil(.5 * e.height()) && e.height() > 0 && e.height(e.height()), this.options.disabled && this.disable() }, _keydown: function (t) { var i = this.options, s = e.ui.keyCode; switch (t.keyCode) { case s.UP: return this._repeat(null, 1, t), !0; case s.DOWN: return this._repeat(null, -1, t), !0; case s.PAGE_UP: return this._repeat(null, i.page, t), !0; case s.PAGE_DOWN: return this._repeat(null, -i.page, t), !0 }return !1 }, _uiSpinnerHtml: function () { return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>" }, _buttonHtml: function () { return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span>" + "</a>" + "<a class='ui-spinner-button ui-spinner-down ui-corner-br'>" + "<span class='ui-icon " + this.options.icons.down + "'>&#9660;</span>" + "</a>" }, _start: function (e) { return this.spinning || this._trigger("start", e) !== !1 ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1 }, _repeat: function (e, t, i) { e = e || 500, clearTimeout(this.timer), this.timer = this._delay(function () { this._repeat(40, t, i) }, e), this._spin(t * this.options.step, i) }, _spin: function (e, t) { var i = this.value() || 0; this.counter || (this.counter = 1), i = this._adjustValue(i + e * this._increment(this.counter)), this.spinning && this._trigger("spin", t, { value: i }) === !1 || (this._value(i), this.counter++) }, _increment: function (t) { var i = this.options.incremental; return i ? e.isFunction(i) ? i(t) : Math.floor(t * t * t / 5e4 - t * t / 500 + 17 * t / 200 + 1) : 1 }, _precision: function () { var e = this._precisionOf(this.options.step); return null !== this.options.min && (e = Math.max(e, this._precisionOf(this.options.min))), e }, _precisionOf: function (e) { var t = "" + e, i = t.indexOf("."); return -1 === i ? 0 : t.length - i - 1 }, _adjustValue: function (e) { var t, i, s = this.options; return t = null !== s.min ? s.min : 0, i = e - t, i = Math.round(i / s.step) * s.step, e = t + i, e = parseFloat(e.toFixed(this._precision())), null !== s.max && e > s.max ? s.max : null !== s.min && s.min > e ? s.min : e }, _stop: function (e) { this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", e)) }, _setOption: function (e, t) { if ("culture" === e || "numberFormat" === e) { var i = this._parse(this.element.val()); return this.options[e] = t, this.element.val(this._format(i)), void 0 } ("max" === e || "min" === e || "step" === e) && "string" == typeof t && (t = this._parse(t)), "icons" === e && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(t.up), this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(t.down)), this._super(e, t), "disabled" === e && (this.widget().toggleClass("ui-state-disabled", !!t), this.element.prop("disabled", !!t), this.buttons.button(t ? "disable" : "enable")) }, _setOptions: h(function (e) { this._super(e) }), _parse: function (e) { return "string" == typeof e && "" !== e && (e = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(e, 10, this.options.culture) : +e), "" === e || isNaN(e) ? null : e }, _format: function (e) { return "" === e ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(e, this.options.numberFormat, this.options.culture) : e }, _refresh: function () { this.element.attr({ "aria-valuemin": this.options.min, "aria-valuemax": this.options.max, "aria-valuenow": this._parse(this.element.val()) }) }, isValid: function () { var e = this.value(); return null === e ? !1 : e === this._adjustValue(e) }, _value: function (e, t) { var i; "" !== e && (i = this._parse(e), null !== i && (t || (i = this._adjustValue(i)), e = this._format(i))), this.element.val(e), this._refresh() }, _destroy: function () { this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.uiSpinner.replaceWith(this.element) }, stepUp: h(function (e) { this._stepUp(e) }), _stepUp: function (e) { this._start() && (this._spin((e || 1) * this.options.step), this._stop()) }, stepDown: h(function (e) { this._stepDown(e) }), _stepDown: function (e) { this._start() && (this._spin((e || 1) * -this.options.step), this._stop()) }, pageUp: h(function (e) { this._stepUp((e || 1) * this.options.page) }), pageDown: h(function (e) { this._stepDown((e || 1) * this.options.page) }), value: function (e) { return arguments.length ? (h(this._value).call(this, e), void 0) : this._parse(this.element.val()) }, widget: function () { return this.uiSpinner } }), e.widget("ui.tabs", {
		version: "1.11.4", delay: 300, options: { active: null, collapsible: !1, event: "click", heightStyle: "content", hide: null, show: null, activate: null, beforeActivate: null, beforeLoad: null, load: null }, _isLocal: function () { var e = /#.*$/; return function (t) { var i, s; t = t.cloneNode(!1), i = t.href.replace(e, ""), s = location.href.replace(e, ""); try { i = decodeURIComponent(i) } catch (n) { } try { s = decodeURIComponent(s) } catch (n) { } return t.hash.length > 1 && i === s } }(), _create: function () { var t = this, i = this.options; this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", i.collapsible), this._processTabs(), i.active = this._initialActive(), e.isArray(i.disabled) && (i.disabled = e.unique(i.disabled.concat(e.map(this.tabs.filter(".ui-state-disabled"), function (e) { return t.tabs.index(e) }))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(i.active) : e(), this._refresh(), this.active.length && this.load(i.active) }, _initialActive: function () { var t = this.options.active, i = this.options.collapsible, s = location.hash.substring(1); return null === t && (s && this.tabs.each(function (i, n) { return e(n).attr("aria-controls") === s ? (t = i, !1) : void 0 }), null === t && (t = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === t || -1 === t) && (t = this.tabs.length ? 0 : !1)), t !== !1 && (t = this.tabs.index(this.tabs.eq(t)), -1 === t && (t = i ? !1 : 0)), !i && t === !1 && this.anchors.length && (t = 0), t }, _getCreateEventData: function () { return { tab: this.active, panel: this.active.length ? this._getPanelForTab(this.active) : e() } }, _tabKeydown: function (t) { var i = e(this.document[0].activeElement).closest("li"), s = this.tabs.index(i), n = !0; if (!this._handlePageNav(t)) { switch (t.keyCode) { case e.ui.keyCode.RIGHT: case e.ui.keyCode.DOWN: s++; break; case e.ui.keyCode.UP: case e.ui.keyCode.LEFT: n = !1, s--; break; case e.ui.keyCode.END: s = this.anchors.length - 1; break; case e.ui.keyCode.HOME: s = 0; break; case e.ui.keyCode.SPACE: return t.preventDefault(), clearTimeout(this.activating), this._activate(s), void 0; case e.ui.keyCode.ENTER: return t.preventDefault(), clearTimeout(this.activating), this._activate(s === this.options.active ? !1 : s), void 0; default: return }t.preventDefault(), clearTimeout(this.activating), s = this._focusNextTab(s, n), t.ctrlKey || t.metaKey || (i.attr("aria-selected", "false"), this.tabs.eq(s).attr("aria-selected", "true"), this.activating = this._delay(function () { this.option("active", s) }, this.delay)) } }, _panelKeydown: function (t) { this._handlePageNav(t) || t.ctrlKey && t.keyCode === e.ui.keyCode.UP && (t.preventDefault(), this.active.focus()) }, _handlePageNav: function (t) { return t.altKey && t.keyCode === e.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : t.altKey && t.keyCode === e.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0 }, _findNextTab: function (t, i) { function s() { return t > n && (t = 0), 0 > t && (t = n), t } for (var n = this.tabs.length - 1; -1 !== e.inArray(s(), this.options.disabled);)t = i ? t + 1 : t - 1; return t }, _focusNextTab: function (e, t) { return e = this._findNextTab(e, t), this.tabs.eq(e).focus(), e }, _setOption: function (e, t) { return "active" === e ? (this._activate(t), void 0) : "disabled" === e ? (this._setupDisabled(t), void 0) : (this._super(e, t), "collapsible" === e && (this.element.toggleClass("ui-tabs-collapsible", t), t || this.options.active !== !1 || this._activate(0)), "event" === e && this._setupEvents(t), "heightStyle" === e && this._setupHeightStyle(t), void 0) }, _sanitizeSelector: function (e) { return e ? e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : "" }, refresh: function () { var t = this.options, i = this.tablist.children(":has(a[href])"); t.disabled = e.map(i.filter(".ui-state-disabled"), function (e) { return i.index(e) }), this._processTabs(), t.active !== !1 && this.anchors.length ? this.active.length && !e.contains(this.tablist[0], this.active[0]) ? this.tabs.length === t.disabled.length ? (t.active = !1, this.active = e()) : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1)) : t.active = this.tabs.index(this.active) : (t.active = !1, this.active = e()), this._refresh() }, _refresh: function () { this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({ "aria-selected": "false", "aria-expanded": "false", tabIndex: -1 }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({ "aria-hidden": "true" }), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 }), this._getPanelForTab(this.active).show().attr({ "aria-hidden": "false" })) : this.tabs.eq(0).attr("tabIndex", 0) }, _processTabs: function () {
			var t = this, i = this.tabs, s = this.anchors, n = this.panels;
			this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist").delegate("> li", "mousedown" + this.eventNamespace, function (t) { e(this).is(".ui-state-disabled") && t.preventDefault() }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function () { e(this).closest("li").is(".ui-state-disabled") && this.blur() }), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({ role: "tab", tabIndex: -1 }), this.anchors = this.tabs.map(function () { return e("a", this)[0] }).addClass("ui-tabs-anchor").attr({ role: "presentation", tabIndex: -1 }), this.panels = e(), this.anchors.each(function (i, s) { var n, a, o, r = e(s).uniqueId().attr("id"), h = e(s).closest("li"), l = h.attr("aria-controls"); t._isLocal(s) ? (n = s.hash, o = n.substring(1), a = t.element.find(t._sanitizeSelector(n))) : (o = h.attr("aria-controls") || e({}).uniqueId()[0].id, n = "#" + o, a = t.element.find(n), a.length || (a = t._createPanel(o), a.insertAfter(t.panels[i - 1] || t.tablist)), a.attr("aria-live", "polite")), a.length && (t.panels = t.panels.add(a)), l && h.data("ui-tabs-aria-controls", l), h.attr({ "aria-controls": o, "aria-labelledby": r }), a.attr("aria-labelledby", r) }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel"), i && (this._off(i.not(this.tabs)), this._off(s.not(this.anchors)), this._off(n.not(this.panels)))
		}, _getList: function () { return this.tablist || this.element.find("ol,ul").eq(0) }, _createPanel: function (t) { return e("<div>").attr("id", t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0) }, _setupDisabled: function (t) { e.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : t = !1); for (var i, s = 0; i = this.tabs[s]; s++)t === !0 || -1 !== e.inArray(s, t) ? e(i).addClass("ui-state-disabled").attr("aria-disabled", "true") : e(i).removeClass("ui-state-disabled").removeAttr("aria-disabled"); this.options.disabled = t }, _setupEvents: function (t) { var i = {}; t && e.each(t.split(" "), function (e, t) { i[t] = "_eventHandler" }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, { click: function (e) { e.preventDefault() } }), this._on(this.anchors, i), this._on(this.tabs, { keydown: "_tabKeydown" }), this._on(this.panels, { keydown: "_panelKeydown" }), this._focusable(this.tabs), this._hoverable(this.tabs) }, _setupHeightStyle: function (t) { var i, s = this.element.parent(); "fill" === t ? (i = s.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function () { var t = e(this), s = t.css("position"); "absolute" !== s && "fixed" !== s && (i -= t.outerHeight(!0)) }), this.element.children().not(this.panels).each(function () { i -= e(this).outerHeight(!0) }), this.panels.each(function () { e(this).height(Math.max(0, i - e(this).innerHeight() + e(this).height())) }).css("overflow", "auto")) : "auto" === t && (i = 0, this.panels.each(function () { i = Math.max(i, e(this).height("").height()) }).height(i)) }, _eventHandler: function (t) { var i = this.options, s = this.active, n = e(t.currentTarget), a = n.closest("li"), o = a[0] === s[0], r = o && i.collapsible, h = r ? e() : this._getPanelForTab(a), l = s.length ? this._getPanelForTab(s) : e(), u = { oldTab: s, oldPanel: l, newTab: r ? e() : a, newPanel: h }; t.preventDefault(), a.hasClass("ui-state-disabled") || a.hasClass("ui-tabs-loading") || this.running || o && !i.collapsible || this._trigger("beforeActivate", t, u) === !1 || (i.active = r ? !1 : this.tabs.index(a), this.active = o ? e() : a, this.xhr && this.xhr.abort(), l.length || h.length || e.error("jQuery UI Tabs: Mismatching fragment identifier."), h.length && this.load(this.tabs.index(a), t), this._toggle(t, u)) }, _toggle: function (t, i) { function s() { a.running = !1, a._trigger("activate", t, i) } function n() { i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), o.length && a.options.show ? a._show(o, a.options.show, s) : (o.show(), s()) } var a = this, o = i.newPanel, r = i.oldPanel; this.running = !0, r.length && this.options.hide ? this._hide(r, this.options.hide, function () { i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), n() }) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), r.hide(), n()), r.attr("aria-hidden", "true"), i.oldTab.attr({ "aria-selected": "false", "aria-expanded": "false" }), o.length && r.length ? i.oldTab.attr("tabIndex", -1) : o.length && this.tabs.filter(function () { return 0 === e(this).attr("tabIndex") }).attr("tabIndex", -1), o.attr("aria-hidden", "false"), i.newTab.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 }) }, _activate: function (t) { var i, s = this._findActive(t); s[0] !== this.active[0] && (s.length || (s = this.active), i = s.find(".ui-tabs-anchor")[0], this._eventHandler({ target: i, currentTarget: i, preventDefault: e.noop })) }, _findActive: function (t) { return t === !1 ? e() : this.tabs.eq(t) }, _getIndex: function (e) { return "string" == typeof e && (e = this.anchors.index(this.anchors.filter("[href$='" + e + "']"))), e }, _destroy: function () { this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), this.tablist.unbind(this.eventNamespace), this.tabs.add(this.panels).each(function () { e.data(this, "ui-tabs-destroy") ? e(this).remove() : e(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role") }), this.tabs.each(function () { var t = e(this), i = t.data("ui-tabs-aria-controls"); i ? t.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : t.removeAttr("aria-controls") }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "") }, enable: function (t) { var i = this.options.disabled; i !== !1 && (void 0 === t ? i = !1 : (t = this._getIndex(t), i = e.isArray(i) ? e.map(i, function (e) { return e !== t ? e : null }) : e.map(this.tabs, function (e, i) { return i !== t ? i : null })), this._setupDisabled(i)) }, disable: function (t) { var i = this.options.disabled; if (i !== !0) { if (void 0 === t) i = !0; else { if (t = this._getIndex(t), -1 !== e.inArray(t, i)) return; i = e.isArray(i) ? e.merge([t], i).sort() : [t] } this._setupDisabled(i) } }, load: function (t, i) { t = this._getIndex(t); var s = this, n = this.tabs.eq(t), a = n.find(".ui-tabs-anchor"), o = this._getPanelForTab(n), r = { tab: n, panel: o }, h = function (e, t) { "abort" === t && s.panels.stop(!1, !0), n.removeClass("ui-tabs-loading"), o.removeAttr("aria-busy"), e === s.xhr && delete s.xhr }; this._isLocal(a[0]) || (this.xhr = e.ajax(this._ajaxSettings(a, i, r)), this.xhr && "canceled" !== this.xhr.statusText && (n.addClass("ui-tabs-loading"), o.attr("aria-busy", "true"), this.xhr.done(function (e, t, n) { setTimeout(function () { o.html(e), s._trigger("load", i, r), h(n, t) }, 1) }).fail(function (e, t) { setTimeout(function () { h(e, t) }, 1) }))) }, _ajaxSettings: function (t, i, s) { var n = this; return { url: t.attr("href"), beforeSend: function (t, a) { return n._trigger("beforeLoad", i, e.extend({ jqXHR: t, ajaxSettings: a }, s)) } } }, _getPanelForTab: function (t) { var i = e(t).attr("aria-controls"); return this.element.find(this._sanitizeSelector("#" + i)) }
	}), e.widget("ui.tooltip", { version: "1.11.4", options: { content: function () { var t = e(this).attr("title") || ""; return e("<a>").text(t).html() }, hide: !0, items: "[title]:not([disabled])", position: { my: "left top+15", at: "left bottom", collision: "flipfit flip" }, show: !0, tooltipClass: null, track: !1, close: null, open: null }, _addDescribedBy: function (t, i) { var s = (t.attr("aria-describedby") || "").split(/\s+/); s.push(i), t.data("ui-tooltip-id", i).attr("aria-describedby", e.trim(s.join(" "))) }, _removeDescribedBy: function (t) { var i = t.data("ui-tooltip-id"), s = (t.attr("aria-describedby") || "").split(/\s+/), n = e.inArray(i, s); -1 !== n && s.splice(n, 1), t.removeData("ui-tooltip-id"), s = e.trim(s.join(" ")), s ? t.attr("aria-describedby", s) : t.removeAttr("aria-describedby") }, _create: function () { this._on({ mouseover: "open", focusin: "open" }), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable(), this.liveRegion = e("<div>").attr({ role: "log", "aria-live": "assertive", "aria-relevant": "additions" }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body) }, _setOption: function (t, i) { var s = this; return "disabled" === t ? (this[i ? "_disable" : "_enable"](), this.options[t] = i, void 0) : (this._super(t, i), "content" === t && e.each(this.tooltips, function (e, t) { s._updateContent(t.element) }), void 0) }, _disable: function () { var t = this; e.each(this.tooltips, function (i, s) { var n = e.Event("blur"); n.target = n.currentTarget = s.element[0], t.close(n, !0) }), this.element.find(this.options.items).addBack().each(function () { var t = e(this); t.is("[title]") && t.data("ui-tooltip-title", t.attr("title")).removeAttr("title") }) }, _enable: function () { this.element.find(this.options.items).addBack().each(function () { var t = e(this); t.data("ui-tooltip-title") && t.attr("title", t.data("ui-tooltip-title")) }) }, open: function (t) { var i = this, s = e(t ? t.target : this.element).closest(this.options.items); s.length && !s.data("ui-tooltip-id") && (s.attr("title") && s.data("ui-tooltip-title", s.attr("title")), s.data("ui-tooltip-open", !0), t && "mouseover" === t.type && s.parents().each(function () { var t, s = e(this); s.data("ui-tooltip-open") && (t = e.Event("blur"), t.target = t.currentTarget = this, i.close(t, !0)), s.attr("title") && (s.uniqueId(), i.parents[this.id] = { element: this, title: s.attr("title") }, s.attr("title", "")) }), this._registerCloseHandlers(t, s), this._updateContent(s, t)) }, _updateContent: function (e, t) { var i, s = this.options.content, n = this, a = t ? t.type : null; return "string" == typeof s ? this._open(t, e, s) : (i = s.call(e[0], function (i) { n._delay(function () { e.data("ui-tooltip-open") && (t && (t.type = a), this._open(t, e, i)) }) }), i && this._open(t, e, i), void 0) }, _open: function (t, i, s) { function n(e) { l.of = e, o.is(":hidden") || o.position(l) } var a, o, r, h, l = e.extend({}, this.options.position); if (s) { if (a = this._find(i)) return a.tooltip.find(".ui-tooltip-content").html(s), void 0; i.is("[title]") && (t && "mouseover" === t.type ? i.attr("title", "") : i.removeAttr("title")), a = this._tooltip(i), o = a.tooltip, this._addDescribedBy(i, o.attr("id")), o.find(".ui-tooltip-content").html(s), this.liveRegion.children().hide(), s.clone ? (h = s.clone(), h.removeAttr("id").find("[id]").removeAttr("id")) : h = s, e("<div>").html(h).appendTo(this.liveRegion), this.options.track && t && /^mouse/.test(t.type) ? (this._on(this.document, { mousemove: n }), n(t)) : o.position(e.extend({ of: i }, this.options.position)), o.hide(), this._show(o, this.options.show), this.options.show && this.options.show.delay && (r = this.delayedShow = setInterval(function () { o.is(":visible") && (n(l.of), clearInterval(r)) }, e.fx.interval)), this._trigger("open", t, { tooltip: o }) } }, _registerCloseHandlers: function (t, i) { var s = { keyup: function (t) { if (t.keyCode === e.ui.keyCode.ESCAPE) { var s = e.Event(t); s.currentTarget = i[0], this.close(s, !0) } } }; i[0] !== this.element[0] && (s.remove = function () { this._removeTooltip(this._find(i).tooltip) }), t && "mouseover" !== t.type || (s.mouseleave = "close"), t && "focusin" !== t.type || (s.focusout = "close"), this._on(!0, i, s) }, close: function (t) { var i, s = this, n = e(t ? t.currentTarget : this.element), a = this._find(n); return a ? (i = a.tooltip, a.closing || (clearInterval(this.delayedShow), n.data("ui-tooltip-title") && !n.attr("title") && n.attr("title", n.data("ui-tooltip-title")), this._removeDescribedBy(n), a.hiding = !0, i.stop(!0), this._hide(i, this.options.hide, function () { s._removeTooltip(e(this)) }), n.removeData("ui-tooltip-open"), this._off(n, "mouseleave focusout keyup"), n[0] !== this.element[0] && this._off(n, "remove"), this._off(this.document, "mousemove"), t && "mouseleave" === t.type && e.each(this.parents, function (t, i) { e(i.element).attr("title", i.title), delete s.parents[t] }), a.closing = !0, this._trigger("close", t, { tooltip: i }), a.hiding || (a.closing = !1)), void 0) : (n.removeData("ui-tooltip-open"), void 0) }, _tooltip: function (t) { var i = e("<div>").attr("role", "tooltip").addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || "")), s = i.uniqueId().attr("id"); return e("<div>").addClass("ui-tooltip-content").appendTo(i), i.appendTo(this.document[0].body), this.tooltips[s] = { element: t, tooltip: i } }, _find: function (e) { var t = e.data("ui-tooltip-id"); return t ? this.tooltips[t] : null }, _removeTooltip: function (e) { e.remove(), delete this.tooltips[e.attr("id")] }, _destroy: function () { var t = this; e.each(this.tooltips, function (i, s) { var n = e.Event("blur"), a = s.element; n.target = n.currentTarget = a[0], t.close(n, !0), e("#" + i).remove(), a.data("ui-tooltip-title") && (a.attr("title") || a.attr("title", a.data("ui-tooltip-title")), a.removeData("ui-tooltip-title")) }), this.liveRegion.remove() } })
});

// Place any jQuery/helper plugins in here.
/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); +function (a) { "use strict"; var b = a.fn.jquery.split(" ")[0].split("."); if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4") }(jQuery), +function (a) { "use strict"; function b() { var a = document.createElement("bootstrap"), b = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" }; for (var c in b) if (void 0 !== a.style[c]) return { end: b[c] }; return !1 } a.fn.emulateTransitionEnd = function (b) { var c = !1, d = this; a(this).one("bsTransitionEnd", function () { c = !0 }); var e = function () { c || a(d).trigger(a.support.transition.end) }; return setTimeout(e, b), this }, a(function () { a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = { bindType: a.support.transition.end, delegateType: a.support.transition.end, handle: function (b) { if (a(b.target).is(this)) return b.handleObj.handler.apply(this, arguments) } }) }) }(jQuery), +function (a) { "use strict"; function b(b) { return this.each(function () { var c = a(this), e = c.data("bs.alert"); e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c) }) } var c = '[data-dismiss="alert"]', d = function (b) { a(b).on("click", c, this.close) }; d.VERSION = "3.3.7", d.TRANSITION_DURATION = 150, d.prototype.close = function (b) { function c() { g.detach().trigger("closed.bs.alert").remove() } var e = a(this), f = e.attr("data-target"); f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, "")); var g = a("#" === f ? [] : f); b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c()) }; var e = a.fn.alert; a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function () { return a.fn.alert = e, this }, a(document).on("click.bs.alert.data-api", c, d.prototype.close) }(jQuery), +function (a) { "use strict"; function b(b) { return this.each(function () { var d = a(this), e = d.data("bs.button"), f = "object" == typeof b && b; e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b) }) } var c = function (b, d) { this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1 }; c.VERSION = "3.3.7", c.DEFAULTS = { loadingText: "loading..." }, c.prototype.setState = function (b) { var c = "disabled", d = this.$element, e = d.is("input") ? "val" : "html", f = d.data(); b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function () { d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c).prop(c, !0)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c).prop(c, !1)) }, this), 0) }, c.prototype.toggle = function () { var a = !0, b = this.$element.closest('[data-toggle="buttons"]'); if (b.length) { var c = this.$element.find("input"); "radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change") } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active") }; var d = a.fn.button; a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function () { return a.fn.button = d, this }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (c) { var d = a(c.target).closest(".btn"); b.call(d, "toggle"), a(c.target).is('input[type="radio"], input[type="checkbox"]') || (c.preventDefault(), d.is("input,button") ? d.trigger("focus") : d.find("input:visible,button:visible").first().trigger("focus")) }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (b) { a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type)) }) }(jQuery), +function (a) { "use strict"; function b(b) { return this.each(function () { var d = a(this), e = d.data("bs.carousel"), f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b), g = "string" == typeof b ? b : f.slide; e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle() }) } var c = function (b, c) { this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this)) }; c.VERSION = "3.3.7", c.TRANSITION_DURATION = 600, c.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }, c.prototype.keydown = function (a) { if (!/input|textarea/i.test(a.target.tagName)) { switch (a.which) { case 37: this.prev(); break; case 39: this.next(); break; default: return }a.preventDefault() } }, c.prototype.cycle = function (b) { return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this }, c.prototype.getItemIndex = function (a) { return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active) }, c.prototype.getItemForDirection = function (a, b) { var c = this.getItemIndex(b), d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1; if (d && !this.options.wrap) return b; var e = "prev" == a ? -1 : 1, f = (c + e) % this.$items.length; return this.$items.eq(f) }, c.prototype.to = function (a) { var b = this, c = this.getItemIndex(this.$active = this.$element.find(".item.active")); if (!(a > this.$items.length - 1 || a < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function () { b.to(a) }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a)) }, c.prototype.pause = function (b) { return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this }, c.prototype.next = function () { if (!this.sliding) return this.slide("next") }, c.prototype.prev = function () { if (!this.sliding) return this.slide("prev") }, c.prototype.slide = function (b, d) { var e = this.$element.find(".item.active"), f = d || this.getItemForDirection(b, e), g = this.interval, h = "next" == b ? "left" : "right", i = this; if (f.hasClass("active")) return this.sliding = !1; var j = f[0], k = a.Event("slide.bs.carousel", { relatedTarget: j, direction: h }); if (this.$element.trigger(k), !k.isDefaultPrevented()) { if (this.sliding = !0, g && this.pause(), this.$indicators.length) { this.$indicators.find(".active").removeClass("active"); var l = a(this.$indicators.children()[this.getItemIndex(f)]); l && l.addClass("active") } var m = a.Event("slid.bs.carousel", { relatedTarget: j, direction: h }); return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function () { f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function () { i.$element.trigger(m) }, 0) }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this } }; var d = a.fn.carousel; a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function () { return a.fn.carousel = d, this }; var e = function (c) { var d, e = a(this), f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, "")); if (f.hasClass("carousel")) { var g = a.extend({}, f.data(), e.data()), h = e.attr("data-slide-to"); h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault() } }; a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function () { a('[data-ride="carousel"]').each(function () { var c = a(this); b.call(c, c.data()) }) }) }(jQuery), +function (a) { "use strict"; function b(b) { var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""); return a(d) } function c(b) { return this.each(function () { var c = a(this), e = c.data("bs.collapse"), f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b); !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]() }) } var d = function (b, c) { this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle() }; d.VERSION = "3.3.7", d.TRANSITION_DURATION = 350, d.DEFAULTS = { toggle: !0 }, d.prototype.dimension = function () { var a = this.$element.hasClass("width"); return a ? "width" : "height" }, d.prototype.show = function () { if (!this.transitioning && !this.$element.hasClass("in")) { var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing"); if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) { var f = a.Event("show.bs.collapse"); if (this.$element.trigger(f), !f.isDefaultPrevented()) { e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null)); var g = this.dimension(); this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1; var h = function () { this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse") }; if (!a.support.transition) return h.call(this); var i = a.camelCase(["scroll", g].join("-")); this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i]) } } } }, d.prototype.hide = function () { if (!this.transitioning && this.$element.hasClass("in")) { var b = a.Event("hide.bs.collapse"); if (this.$element.trigger(b), !b.isDefaultPrevented()) { var c = this.dimension(); this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1; var e = function () { this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse") }; return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this) } } }, d.prototype.toggle = function () { this[this.$element.hasClass("in") ? "hide" : "show"]() }, d.prototype.getParent = function () { return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function (c, d) { var e = a(d); this.addAriaAndCollapsedClass(b(e), e) }, this)).end() }, d.prototype.addAriaAndCollapsedClass = function (a, b) { var c = a.hasClass("in"); a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c) }; var e = a.fn.collapse; a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function () { return a.fn.collapse = e, this }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (d) { var e = a(this); e.attr("data-target") || d.preventDefault(); var f = b(e), g = f.data("bs.collapse"), h = g ? "toggle" : e.data(); c.call(f, h) }) }(jQuery), +function (a) { "use strict"; function b(b) { var c = b.attr("data-target"); c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, "")); var d = c && a(c); return d && d.length ? d : b.parent() } function c(c) { c && 3 === c.which || (a(e).remove(), a(f).each(function () { var d = a(this), e = b(d), f = { relatedTarget: this }; e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f))))) })) } function d(b) { return this.each(function () { var c = a(this), d = c.data("bs.dropdown"); d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c) }) } var e = ".dropdown-backdrop", f = '[data-toggle="dropdown"]', g = function (b) { a(b).on("click.bs.dropdown", this.toggle) }; g.VERSION = "3.3.7", g.prototype.toggle = function (d) { var e = a(this); if (!e.is(".disabled, :disabled")) { var f = b(e), g = f.hasClass("open"); if (c(), !g) { "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c); var h = { relatedTarget: this }; if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return; e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h)) } return !1 } }, g.prototype.keydown = function (c) { if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) { var d = a(this); if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) { var e = b(d), g = e.hasClass("open"); if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click"); var h = " li:not(.disabled):visible a", i = e.find(".dropdown-menu" + h); if (i.length) { var j = i.index(c.target); 38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus") } } } }; var h = a.fn.dropdown; a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function () { return a.fn.dropdown = h, this }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function (a) { a.stopPropagation() }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown) }(jQuery), +function (a) { "use strict"; function b(b, d) { return this.each(function () { var e = a(this), f = e.data("bs.modal"), g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b); f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d) }) } var c = function (b, c) { this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function () { this.$element.trigger("loaded.bs.modal") }, this)) }; c.VERSION = "3.3.7", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }, c.prototype.toggle = function (a) { return this.isShown ? this.hide() : this.show(a) }, c.prototype.show = function (b) { var d = this, e = a.Event("show.bs.modal", { relatedTarget: b }); this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () { d.$element.one("mouseup.dismiss.bs.modal", function (b) { a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0) }) }), this.backdrop(function () { var e = a.support.transition && d.$element.hasClass("fade"); d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus(); var f = a.Event("shown.bs.modal", { relatedTarget: b }); e ? d.$dialog.one("bsTransitionEnd", function () { d.$element.trigger("focus").trigger(f) }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f) })) }, c.prototype.hide = function (b) { b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal()) }, c.prototype.enforceFocus = function () { a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) { document === a.target || this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus") }, this)) }, c.prototype.escape = function () { this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function (a) { 27 == a.which && this.hide() }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal") }, c.prototype.resize = function () { this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal") }, c.prototype.hideModal = function () { var a = this; this.$element.hide(), this.backdrop(function () { a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal") }) }, c.prototype.removeBackdrop = function () { this.$backdrop && this.$backdrop.remove(), this.$backdrop = null }, c.prototype.backdrop = function (b) { var d = this, e = this.$element.hasClass("fade") ? "fade" : ""; if (this.isShown && this.options.backdrop) { var f = a.support.transition && e; if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function (a) { return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())) }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return; f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b() } else if (!this.isShown && this.$backdrop) { this.$backdrop.removeClass("in"); var g = function () { d.removeBackdrop(), b && b() }; a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g() } else b && b() }, c.prototype.handleUpdate = function () { this.adjustDialog() }, c.prototype.adjustDialog = function () { var a = this.$element[0].scrollHeight > document.documentElement.clientHeight; this.$element.css({ paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "", paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : "" }) }, c.prototype.resetAdjustments = function () { this.$element.css({ paddingLeft: "", paddingRight: "" }) }, c.prototype.checkScrollbar = function () { var a = window.innerWidth; if (!a) { var b = document.documentElement.getBoundingClientRect(); a = b.right - Math.abs(b.left) } this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar() }, c.prototype.setScrollbar = function () { var a = parseInt(this.$body.css("padding-right") || 0, 10); this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth) }, c.prototype.resetScrollbar = function () { this.$body.css("padding-right", this.originalBodyPad) }, c.prototype.measureScrollbar = function () { var a = document.createElement("div"); a.className = "modal-scrollbar-measure", this.$body.append(a); var b = a.offsetWidth - a.clientWidth; return this.$body[0].removeChild(a), b }; var d = a.fn.modal; a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function () { return a.fn.modal = d, this }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (c) { var d = a(this), e = d.attr("href"), f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")), g = f.data("bs.modal") ? "toggle" : a.extend({ remote: !/#/.test(e) && e }, f.data(), d.data()); d.is("a") && c.preventDefault(), f.one("show.bs.modal", function (a) { a.isDefaultPrevented() || f.one("hidden.bs.modal", function () { d.is(":visible") && d.trigger("focus") }) }), b.call(f, g, this) }) }(jQuery), +function (a) { "use strict"; function b(b) { return this.each(function () { var d = a(this), e = d.data("bs.tooltip"), f = "object" == typeof b && b; !e && /destroy|hide/.test(b) || (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]()) }) } var c = function (a, b) { this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b) }; c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.DEFAULTS = { animation: !0, placement: "top", selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, container: !1, viewport: { selector: "body", padding: 0 } }, c.prototype.init = function (b, c, d) { if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = { click: !1, hover: !1, focus: !1 }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!"); for (var e = this.options.trigger.split(" "), f = e.length; f--;) { var g = e[f]; if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this)); else if ("manual" != g) { var h = "hover" == g ? "mouseenter" : "focusin", i = "hover" == g ? "mouseleave" : "focusout"; this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this)) } } this.options.selector ? this._options = a.extend({}, this.options, { trigger: "manual", selector: "" }) : this.fixTitle() }, c.prototype.getDefaults = function () { return c.DEFAULTS }, c.prototype.getOptions = function (b) { return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = { show: b.delay, hide: b.delay }), b }, c.prototype.getDelegateOptions = function () { var b = {}, c = this.getDefaults(); return this._options && a.each(this._options, function (a, d) { c[a] != d && (b[a] = d) }), b }, c.prototype.enter = function (b) { var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type); return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void (c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void (c.timeout = setTimeout(function () { "in" == c.hoverState && c.show() }, c.options.delay.show)) : c.show()) }, c.prototype.isInStateTrue = function () { for (var a in this.inState) if (this.inState[a]) return !0; return !1 }, c.prototype.leave = function (b) { var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type); if (c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), !c.isInStateTrue()) return clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void (c.timeout = setTimeout(function () { "out" == c.hoverState && c.hide() }, c.options.delay.hide)) : c.hide() }, c.prototype.show = function () { var b = a.Event("show.bs." + this.type); if (this.hasContent() && this.enabled) { this.$element.trigger(b); var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]); if (b.isDefaultPrevented() || !d) return; var e = this, f = this.tip(), g = this.getUID(this.type); this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade"); var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement, i = /\s?auto?\s?/i, j = i.test(h); j && (h = h.replace(i, "") || "top"), f.detach().css({ top: 0, left: 0, display: "block" }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type); var k = this.getPosition(), l = f[0].offsetWidth, m = f[0].offsetHeight; if (j) { var n = h, o = this.getPosition(this.$viewport); h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h) } var p = this.getCalculatedOffset(h, k, l, m); this.applyPlacement(p, h); var q = function () { var a = e.hoverState; e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e) }; a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q() } }, c.prototype.applyPlacement = function (b, c) { var d = this.tip(), e = d[0].offsetWidth, f = d[0].offsetHeight, g = parseInt(d.css("margin-top"), 10), h = parseInt(d.css("margin-left"), 10); isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({ using: function (a) { d.css({ top: Math.round(a.top), left: Math.round(a.left) }) } }, b), 0), d.addClass("in"); var i = d[0].offsetWidth, j = d[0].offsetHeight; "top" == c && j != f && (b.top = b.top + f - j); var k = this.getViewportAdjustedDelta(c, b, i, j); k.left ? b.left += k.left : b.top += k.top; var l = /top|bottom/.test(c), m = l ? 2 * k.left - e + i : 2 * k.top - f + j, n = l ? "offsetWidth" : "offsetHeight"; d.offset(b), this.replaceArrow(m, d[0][n], l) }, c.prototype.replaceArrow = function (a, b, c) { this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "") }, c.prototype.setContent = function () { var a = this.tip(), b = this.getTitle(); a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right") }, c.prototype.hide = function (b) { function d() { "in" != e.hoverState && f.detach(), e.$element && e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b() } var e = this, f = a(this.$tip), g = a.Event("hide.bs." + this.type); if (this.$element.trigger(g), !g.isDefaultPrevented()) return f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this }, c.prototype.fixTitle = function () { var a = this.$element; (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "") }, c.prototype.hasContent = function () { return this.getTitle() }, c.prototype.getPosition = function (b) { b = b || this.$element; var c = b[0], d = "BODY" == c.tagName, e = c.getBoundingClientRect(); null == e.width && (e = a.extend({}, e, { width: e.right - e.left, height: e.bottom - e.top })); var f = window.SVGElement && c instanceof window.SVGElement, g = d ? { top: 0, left: 0 } : f ? null : b.offset(), h = { scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop() }, i = d ? { width: a(window).width(), height: a(window).height() } : null; return a.extend({}, e, h, i, g) }, c.prototype.getCalculatedOffset = function (a, b, c, d) { return "bottom" == a ? { top: b.top + b.height, left: b.left + b.width / 2 - c / 2 } : "top" == a ? { top: b.top - d, left: b.left + b.width / 2 - c / 2 } : "left" == a ? { top: b.top + b.height / 2 - d / 2, left: b.left - c } : { top: b.top + b.height / 2 - d / 2, left: b.left + b.width } }, c.prototype.getViewportAdjustedDelta = function (a, b, c, d) { var e = { top: 0, left: 0 }; if (!this.$viewport) return e; var f = this.options.viewport && this.options.viewport.padding || 0, g = this.getPosition(this.$viewport); if (/right|left/.test(a)) { var h = b.top - f - g.scroll, i = b.top + f - g.scroll + d; h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i) } else { var j = b.left - f, k = b.left + f + c; j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k) } return e }, c.prototype.getTitle = function () { var a, b = this.$element, c = this.options; return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title) }, c.prototype.getUID = function (a) { do a += ~~(1e6 * Math.random()); while (document.getElementById(a)); return a }, c.prototype.tip = function () { if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!"); return this.$tip }, c.prototype.arrow = function () { return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow") }, c.prototype.enable = function () { this.enabled = !0 }, c.prototype.disable = function () { this.enabled = !1 }, c.prototype.toggleEnabled = function () { this.enabled = !this.enabled }, c.prototype.toggle = function (b) { var c = this; b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c) }, c.prototype.destroy = function () { var a = this; clearTimeout(this.timeout), this.hide(function () { a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null, a.$element = null }) }; var d = a.fn.tooltip; a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function () { return a.fn.tooltip = d, this } }(jQuery), +function (a) { "use strict"; function b(b) { return this.each(function () { var d = a(this), e = d.data("bs.popover"), f = "object" == typeof b && b; !e && /destroy|hide/.test(b) || (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]()) }) } var c = function (a, b) { this.init("popover", a, b) }; if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js"); c.VERSION = "3.3.7", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>' }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function () { return c.DEFAULTS }, c.prototype.setContent = function () { var a = this.tip(), b = this.getTitle(), c = this.getContent(); a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide() }, c.prototype.hasContent = function () { return this.getTitle() || this.getContent() }, c.prototype.getContent = function () { var a = this.$element, b = this.options; return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content) }, c.prototype.arrow = function () { return this.$arrow = this.$arrow || this.tip().find(".arrow") }; var d = a.fn.popover; a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function () { return a.fn.popover = d, this } }(jQuery), +function (a) {
	"use strict"; function b(c, d) { this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process() } function c(c) { return this.each(function () { var d = a(this), e = d.data("bs.scrollspy"), f = "object" == typeof c && c; e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]() }) } b.VERSION = "3.3.7", b.DEFAULTS = { offset: 10 }, b.prototype.getScrollHeight = function () { return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight) }, b.prototype.refresh = function () { var b = this, c = "offset", d = 0; this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () { var b = a(this), e = b.data("target") || b.attr("href"), f = /^#./.test(e) && a(e); return f && f.length && f.is(":visible") && [[f[c]().top + d, e]] || null }).sort(function (a, b) { return a[0] - b[0] }).each(function () { b.offsets.push(this[0]), b.targets.push(this[1]) }) }, b.prototype.process = function () { var a, b = this.$scrollElement.scrollTop() + this.options.offset, c = this.getScrollHeight(), d = this.options.offset + c - this.$scrollElement.height(), e = this.offsets, f = this.targets, g = this.activeTarget; if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a); if (g && b < e[0]) return this.activeTarget = null, this.clear(); for (a = e.length; a--;)g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a]) }, b.prototype.activate = function (b) {
		this.activeTarget = b, this.clear(); var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]', d = a(c).parents("li").addClass("active"); d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
	}, b.prototype.clear = function () { a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active") }; var d = a.fn.scrollspy; a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function () { return a.fn.scrollspy = d, this }, a(window).on("load.bs.scrollspy.data-api", function () { a('[data-spy="scroll"]').each(function () { var b = a(this); c.call(b, b.data()) }) })
}(jQuery), +function (a) { "use strict"; function b(b) { return this.each(function () { var d = a(this), e = d.data("bs.tab"); e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]() }) } var c = function (b) { this.element = a(b) }; c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.prototype.show = function () { var b = this.element, c = b.closest("ul:not(.dropdown-menu)"), d = b.data("target"); if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) { var e = c.find(".active:last a"), f = a.Event("hide.bs.tab", { relatedTarget: b[0] }), g = a.Event("show.bs.tab", { relatedTarget: e[0] }); if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) { var h = a(d); this.activate(b.closest("li"), c), this.activate(h, h.parent(), function () { e.trigger({ type: "hidden.bs.tab", relatedTarget: b[0] }), b.trigger({ type: "shown.bs.tab", relatedTarget: e[0] }) }) } } }, c.prototype.activate = function (b, d, e) { function f() { g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e() } var g = d.find("> .active"), h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length); g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in") }; var d = a.fn.tab; a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function () { return a.fn.tab = d, this }; var e = function (c) { c.preventDefault(), b.call(a(this), "show") }; a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e) }(jQuery), +function (a) { "use strict"; function b(b) { return this.each(function () { var d = a(this), e = d.data("bs.affix"), f = "object" == typeof b && b; e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]() }) } var c = function (b, d) { this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition() }; c.VERSION = "3.3.7", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = { offset: 0, target: window }, c.prototype.getState = function (a, b, c, d) { var e = this.$target.scrollTop(), f = this.$element.offset(), g = this.$target.height(); if (null != c && "top" == this.affixed) return e < c && "top"; if ("bottom" == this.affixed) return null != c ? !(e + this.unpin <= f.top) && "bottom" : !(e + g <= a - d) && "bottom"; var h = null == this.affixed, i = h ? e : f.top, j = h ? g : b; return null != c && e <= c ? "top" : null != d && i + j >= a - d && "bottom" }, c.prototype.getPinnedOffset = function () { if (this.pinnedOffset) return this.pinnedOffset; this.$element.removeClass(c.RESET).addClass("affix"); var a = this.$target.scrollTop(), b = this.$element.offset(); return this.pinnedOffset = b.top - a }, c.prototype.checkPositionWithEventLoop = function () { setTimeout(a.proxy(this.checkPosition, this), 1) }, c.prototype.checkPosition = function () { if (this.$element.is(":visible")) { var b = this.$element.height(), d = this.options.offset, e = d.top, f = d.bottom, g = Math.max(a(document).height(), a(document.body).height()); "object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element)); var h = this.getState(g, b, e, f); if (this.affixed != h) { null != this.unpin && this.$element.css("top", ""); var i = "affix" + (h ? "-" + h : ""), j = a.Event(i + ".bs.affix"); if (this.$element.trigger(j), j.isDefaultPrevented()) return; this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix") } "bottom" == h && this.$element.offset({ top: g - b - f }) } }; var d = a.fn.affix; a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function () { return a.fn.affix = d, this }, a(window).on("load", function () { a('[data-spy="affix"]').each(function () { var c = a(this), d = c.data(); d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d) }) }) }(jQuery);

/*! jquery.selectBoxIt - v3.8.0 - 2013-10-05
* http://www.selectboxit.com
* Copyright (c) 2013 Greg Franko; Licensed MIT*/
!function (a) { "use strict"; a(window.jQuery, window, document) }(function (a, b, c, d) { "use strict"; a.widget("selectBox.selectBoxIt", { VERSION: "3.8.0", options: { showEffect: "none", showEffectOptions: {}, showEffectSpeed: "medium", hideEffect: "none", hideEffectOptions: {}, hideEffectSpeed: "medium", showFirstOption: !0, defaultText: "", defaultIcon: "", downArrowIcon: "", theme: "default", keydownOpen: !0, isMobile: function () { var a = navigator.userAgent || navigator.vendor || b.opera; return /iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/.test(a) }, "native": !1, aggressiveChange: !1, selectWhenHidden: !0, viewport: a(b), similarSearch: !1, copyAttributes: ["title", "rel"], copyClasses: "button", nativeMousedown: !1, customShowHideEvent: !1, autoWidth: !0, html: !0, populate: "", dynamicPositioning: !0, hideCurrent: !1 }, getThemes: function () { var b = this, c = a(b.element).attr("data-theme") || "c"; return { bootstrap: { focus: "active", hover: "", enabled: "enabled", disabled: "disabled", arrow: "caret", button: "btn", list: "dropdown-menu", container: "bootstrap", open: "open" }, jqueryui: { focus: "ui-state-focus", hover: "ui-state-hover", enabled: "ui-state-enabled", disabled: "ui-state-disabled", arrow: "ui-icon ui-icon-triangle-1-s", button: "ui-widget ui-state-default", list: "ui-widget ui-widget-content", container: "jqueryui", open: "selectboxit-open" }, jquerymobile: { focus: "ui-btn-down-" + c, hover: "ui-btn-hover-" + c, enabled: "ui-enabled", disabled: "ui-disabled", arrow: "ui-icon ui-icon-arrow-d ui-icon-shadow", button: "ui-btn ui-btn-icon-right ui-btn-corner-all ui-shadow ui-btn-up-" + c, list: "ui-btn ui-btn-icon-right ui-btn-corner-all ui-shadow ui-btn-up-" + c, container: "jquerymobile", open: "selectboxit-open" }, "default": { focus: "selectboxit-focus", hover: "selectboxit-hover", enabled: "selectboxit-enabled", disabled: "selectboxit-disabled", arrow: "fa fa-angle-down", button: "selectboxit-btn", list: "selectboxit-list", container: "selectboxit-container", open: "selectboxit-open" } } }, isDeferred: function (b) { return a.isPlainObject(b) && b.promise && b.done }, _create: function (b) { var d = this, e = d.options.populate, f = d.options.theme; if (d.element.is("select")) return d.widgetProto = a.Widget.prototype, d.originalElem = d.element[0], d.selectBox = d.element, d.options.populate && d.add && !b && d.add(e), d.selectItems = d.element.find("option"), d.firstSelectItem = d.selectItems.slice(0, 1), d.documentHeight = a(c).height(), d.theme = a.isPlainObject(f) ? a.extend({}, d.getThemes()["default"], f) : d.getThemes()[f] ? d.getThemes()[f] : d.getThemes()["default"], d.currentFocus = 0, d.blur = !0, d.textArray = [], d.currentIndex = 0, d.currentText = "", d.flipped = !1, b || (d.selectBoxStyles = d.selectBox.attr("style")), d._createDropdownButton()._createUnorderedList()._copyAttributes()._replaceSelectBox()._addClasses(d.theme)._eventHandlers(), d.originalElem.disabled && d.disable && d.disable(), d._ariaAccessibility && d._ariaAccessibility(), d.isMobile = d.options.isMobile(), d._mobile && d._mobile(), d.options["native"] && this._applyNativeSelect(), d.triggerEvent("create"), d }, _createDropdownButton: function () { var b = this, c = b.originalElemId = b.originalElem.id || "", d = b.originalElemValue = b.originalElem.value || "", e = b.originalElemName = b.originalElem.name || "", f = b.options.copyClasses, g = b.selectBox.attr("class") || ""; return b.dropdownText = a("<span/>", { id: c && c + "SelectBoxItText", "class": "selectboxit-text", unselectable: "on", text: b.firstSelectItem.text() }).attr("data-val", d), b.dropdownImageContainer = a("<span/>", { "class": "selectboxit-option-icon-container" }), b.dropdownImage = a("<i/>", { id: c && c + "SelectBoxItDefaultIcon", "class": "selectboxit-default-icon", unselectable: "on" }), b.dropdown = a("<span/>", { id: c && c + "SelectBoxIt", "class": "selectboxit " + ("button" === f ? g : "") + " " + (b.selectBox.prop("disabled") ? b.theme.disabled : b.theme.enabled), name: e, tabindex: b.selectBox.attr("tabindex") || "0", unselectable: "on" }).append(b.dropdownImageContainer.append(b.dropdownImage)).append(b.dropdownText), b.dropdownContainer = a("<span/>", { id: c && c + "SelectBoxItContainer", "class": "selectboxit-container " + b.theme.container + " " + ("container" === f ? g : "") }).append(b.dropdown), b }, _createUnorderedList: function () { var b, c, d, e, f, g, h, i, j, k, l, m, n, o = this, p = "", q = o.originalElemId || "", r = a("<ul/>", { id: q && q + "SelectBoxItOptions", "class": "selectboxit-options", tabindex: -1 }); if (o.options.showFirstOption || (o.selectItems.first().attr("disabled", "disabled"), o.selectItems = o.selectBox.find("option").slice(1)), o.selectItems.each(function (q) { m = a(this), c = "", d = "", b = m.prop("disabled"), e = m.attr("data-icon") || "", f = m.attr("data-iconurl") || "", g = f ? "selectboxit-option-icon-url" : "", h = f ? "style=\"background-image:url('" + f + "');\"" : "", i = m.attr("data-selectedtext"), j = m.attr("data-text"), l = j ? j : m.text(), n = m.parent(), n.is("optgroup") && (c = "selectboxit-optgroup-option", 0 === m.index() && (d = '<span class="selectboxit-optgroup-header ' + n.first().attr("class") + '"data-disabled="true">' + n.first().attr("label") + "</span>")), p += d + '<li data-id="' + q + '" data-val="' + this.value + '" data-disabled="' + b + '" class="' + c + " selectboxit-option " + (a(this).attr("class") || "") + '"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon ' + e + " " + (g || o.theme.container) + '"' + h + "></i></span>" + (o.options.html ? l : o.htmlEscape(l)) + "</a></li>", k = m.attr("data-search"), o.textArray[q] = b ? "" : k ? k : l, this.selected && (o._setText(o.dropdownText, i || l), o.currentFocus = q) }), o.options.defaultText || o.selectBox.attr("data-text")) { var s = o.options.defaultText || o.selectBox.attr("data-text"); o._setText(o.dropdownText, s), o.options.defaultText = s } return r.append(p), o.list = r, o.dropdownContainer.append(o.list), o.listItems = o.list.children("li"), o.listAnchors = o.list.find("a"), o.listItems.first().addClass("selectboxit-option-first"), o.listItems.last().addClass("selectboxit-option-last"), o.list.find("li[data-disabled='true']").not(".optgroupHeader").addClass(o.theme.disabled), o.dropdownImage.addClass(o.selectBox.attr("data-icon") || o.options.defaultIcon || o.listItems.eq(o.currentFocus).find("i").attr("class")), o.dropdownImage.attr("style", o.listItems.eq(o.currentFocus).find("i").attr("style")), o }, _replaceSelectBox: function () { var b, c, e, f = this, g = f.originalElem.id || "", h = f.selectBox.attr("data-size"), i = f.listSize = h === d ? "auto" : "0" === h ? "auto" : +h; return f.selectBox.css("display", "none").after(f.dropdownContainer), f.dropdownContainer.appendTo("body").addClass("selectboxit-rendering"), b = f.dropdown.height(), f.downArrow = a("<i/>", { id: g && g + "SelectBoxItArrow", "class": "selectboxit-arrow", unselectable: "on" }), f.downArrowContainer = a("<span/>", { id: g && g + "SelectBoxItArrowContainer", "class": "selectboxit-arrow-container", unselectable: "on" }).append(f.downArrow), f.dropdown.append(f.downArrowContainer), f.listItems.removeClass("selectboxit-selected").eq(f.currentFocus).addClass("selectboxit-selected"), c = f.downArrowContainer.outerWidth(!0), e = f.dropdownImage.outerWidth(!0), f.options.autoWidth && (f.dropdown.css({ width: "auto" }).css({ width: f.list.outerWidth(!0) + c + e }), f.list.css({ "min-width": f.dropdown.width() })), f.dropdownText.css({ "max-width": f.dropdownContainer.outerWidth(!0) - (c + e) }), f.selectBox.after(f.dropdownContainer), f.dropdownContainer.removeClass("selectboxit-rendering"), "number" === a.type(i) && (f.maxHeight = f.listAnchors.outerHeight(!0) * i), f }, _scrollToView: function (a) { var b = this, c = b.listItems.eq(b.currentFocus), d = b.list.scrollTop(), e = c.height(), f = c.position().top, g = Math.abs(f), h = b.list.height(); return "search" === a ? e > h - f ? b.list.scrollTop(d + (f - (h - e))) : -1 > f && b.list.scrollTop(f - e) : "up" === a ? -1 > f && b.list.scrollTop(d - g) : "down" === a && e > h - f && b.list.scrollTop(d + (g - h + e)), b }, _callbackSupport: function (b) { var c = this; return a.isFunction(b) && b.call(c, c.dropdown), c }, _setText: function (a, b) { var c = this; return c.options.html ? a.html(b) : a.text(b), c }, open: function (a) { var b = this, c = b.options.showEffect, d = b.options.showEffectSpeed, e = b.options.showEffectOptions, f = b.options["native"], g = b.isMobile; return !b.listItems.length || b.dropdown.hasClass(b.theme.disabled) ? b : (f || g || this.list.is(":visible") || (b.triggerEvent("open"), b._dynamicPositioning && b.options.dynamicPositioning && b._dynamicPositioning(), "none" === c ? b.list.show() : "show" === c || "slideDown" === c || "fadeIn" === c ? b.list[c](d) : b.list.show(c, e, d), b.list.promise().done(function () { b._scrollToView("search") })), b._callbackSupport(a), b) }, close: function (a) { var b = this, c = b.options.hideEffect, d = b.options.hideEffectSpeed, e = b.options.hideEffectOptions, f = b.options["native"], g = b.isMobile; return f || g || !b.list.is(":visible") || (b.triggerEvent("close"), "none" === c ? b.list.hide() : "hide" === c || "slideUp" === c || "fadeOut" === c ? b.list[c](d) : b.list.hide(c, e, d)), b._callbackSupport(a), b }, toggle: function () { var a = this, b = a.list.is(":visible"); b ? a.close() : b || a.open() }, _keyMappings: { 38: "up", 40: "down", 13: "enter", 8: "backspace", 9: "tab", 32: "space", 27: "esc" }, _keydownMethods: function () { var a = this, b = a.list.is(":visible") || !a.options.keydownOpen; return { down: function () { a.moveDown && b && a.moveDown() }, up: function () { a.moveUp && b && a.moveUp() }, enter: function () { var b = a.listItems.eq(a.currentFocus); a._update(b), "true" !== b.attr("data-preventclose") && a.close(), a.triggerEvent("enter") }, tab: function () { a.triggerEvent("tab-blur"), a.close() }, backspace: function () { a.triggerEvent("backspace") }, esc: function () { a.close() } } }, _eventHandlers: function () { var b, c, d = this, e = d.options.nativeMousedown, f = d.options.customShowHideEvent, g = d.focusClass, h = d.hoverClass, i = d.openClass; return this.dropdown.on({ "click.selectBoxIt": function () { d.dropdown.trigger("focus", !0), d.originalElem.disabled || (d.triggerEvent("click"), e || f || d.toggle()) }, "mousedown.selectBoxIt": function () { a(this).data("mdown", !0), d.triggerEvent("mousedown"), e && !f && d.toggle() }, "mouseup.selectBoxIt": function () { d.triggerEvent("mouseup") }, "blur.selectBoxIt": function () { d.blur && (d.triggerEvent("blur"), d.close(), a(this).removeClass(g)) }, "focus.selectBoxIt": function (b, c) { var e = a(this).data("mdown"); a(this).removeData("mdown"), e || c || setTimeout(function () { d.triggerEvent("tab-focus") }, 0), c || (a(this).hasClass(d.theme.disabled) || a(this).addClass(g), d.triggerEvent("focus")) }, "keydown.selectBoxIt": function (a) { var b = d._keyMappings[a.keyCode], c = d._keydownMethods()[b]; c && (c(), !d.options.keydownOpen || "up" !== b && "down" !== b || d.open()), c && "tab" !== b && a.preventDefault() }, "keypress.selectBoxIt": function (a) { var b = a.charCode || a.keyCode, c = d._keyMappings[a.charCode || a.keyCode], e = String.fromCharCode(b); d.search && (!c || c && "space" === c) && d.search(e, !0, !0), "space" === c && a.preventDefault() }, "mouseenter.selectBoxIt": function () { d.triggerEvent("mouseenter") }, "mouseleave.selectBoxIt": function () { d.triggerEvent("mouseleave") } }), d.list.on({ "mouseover.selectBoxIt": function () { d.blur = !1 }, "mouseout.selectBoxIt": function () { d.blur = !0 }, "focusin.selectBoxIt": function () { d.dropdown.trigger("focus", !0) } }), d.list.on({ "mousedown.selectBoxIt": function () { d._update(a(this)), d.triggerEvent("option-click"), "false" === a(this).attr("data-disabled") && "true" !== a(this).attr("data-preventclose") && d.close(), setTimeout(function () { d.dropdown.trigger("focus", !0) }, 0) }, "focusin.selectBoxIt": function () { d.listItems.not(a(this)).removeAttr("data-active"), a(this).attr("data-active", ""); var b = d.list.is(":hidden"); (d.options.searchWhenHidden && b || d.options.aggressiveChange || b && d.options.selectWhenHidden) && d._update(a(this)), a(this).addClass(g) }, "mouseup.selectBoxIt": function () { e && !f && (d._update(a(this)), d.triggerEvent("option-mouseup"), "false" === a(this).attr("data-disabled") && "true" !== a(this).attr("data-preventclose") && d.close()) }, "mouseenter.selectBoxIt": function () { "false" === a(this).attr("data-disabled") && (d.listItems.removeAttr("data-active"), a(this).addClass(g).attr("data-active", ""), d.listItems.not(a(this)).removeClass(g), a(this).addClass(g), d.currentFocus = +a(this).attr("data-id")) }, "mouseleave.selectBoxIt": function () { "false" === a(this).attr("data-disabled") && (d.listItems.not(a(this)).removeClass(g).removeAttr("data-active"), a(this).addClass(g), d.currentFocus = +a(this).attr("data-id")) }, "blur.selectBoxIt": function () { a(this).removeClass(g) } }, ".selectboxit-option"), d.list.on({ "click.selectBoxIt": function (a) { a.preventDefault() } }, "a"), d.selectBox.on({ "change.selectBoxIt, internal-change.selectBoxIt": function (a, e) { var f, g; e || (f = d.list.find('li[data-val="' + d.originalElem.value + '"]'), f.length && (d.listItems.eq(d.currentFocus).removeClass(d.focusClass), d.currentFocus = +f.attr("data-id"))), f = d.listItems.eq(d.currentFocus), g = f.attr("data-selectedtext"), b = f.attr("data-text"), c = b ? b : f.find("a").text(), d._setText(d.dropdownText, g || c), d.dropdownText.attr("data-val", d.originalElem.value), f.find("i").attr("class") && (d.dropdownImage.attr("class", f.find("i").attr("class")).addClass("selectboxit-default-icon"), d.dropdownImage.attr("style", f.find("i").attr("style"))), d.triggerEvent("changed") }, "disable.selectBoxIt": function () { d.dropdown.addClass(d.theme.disabled) }, "enable.selectBoxIt": function () { d.dropdown.removeClass(d.theme.disabled) }, "open.selectBoxIt": function () { var a, b = d.list.find("li[data-val='" + d.dropdownText.attr("data-val") + "']"); b.length || (b = d.listItems.not("[data-disabled=true]").first()), d.currentFocus = +b.attr("data-id"), a = d.listItems.eq(d.currentFocus), d.dropdown.addClass(i).removeClass(h).addClass(g), d.listItems.removeClass(d.selectedClass).removeAttr("data-active").not(a).removeClass(g), a.addClass(d.selectedClass).addClass(g), d.options.hideCurrent && (d.listItems.show(), a.hide()) }, "close.selectBoxIt": function () { d.dropdown.removeClass(i) }, "blur.selectBoxIt": function () { d.dropdown.removeClass(g) }, "mouseenter.selectBoxIt": function () { a(this).hasClass(d.theme.disabled) || d.dropdown.addClass(h) }, "mouseleave.selectBoxIt": function () { d.dropdown.removeClass(h) }, destroy: function (a) { a.preventDefault(), a.stopPropagation() } }), d }, _update: function (a) { var b, c, d, e = this, f = e.options.defaultText || e.selectBox.attr("data-text"), g = e.listItems.eq(e.currentFocus); "false" === a.attr("data-disabled") && (b = e.listItems.eq(e.currentFocus).attr("data-selectedtext"), c = g.attr("data-text"), d = c ? c : g.text(), (f && e.options.html ? e.dropdownText.html() === f : e.dropdownText.text() === f) && e.selectBox.val() === a.attr("data-val") ? e.triggerEvent("change") : (e.selectBox.val(a.attr("data-val")), e.currentFocus = +a.attr("data-id"), e.originalElem.value !== e.dropdownText.attr("data-val") && e.triggerEvent("change"))) }, _addClasses: function (a) { var b = this, c = (b.focusClass = a.focus, b.hoverClass = a.hover, a.button), d = a.list, e = a.arrow, f = a.container; return b.openClass = a.open, b.selectedClass = "selectboxit-selected", b.downArrow.addClass(b.selectBox.attr("data-downarrow") || b.options.downArrowIcon || e), b.dropdownContainer.addClass(f), b.dropdown.addClass(c), b.list.addClass(d), b }, refresh: function (a, b) { var c = this; return c._destroySelectBoxIt()._create(!0), b || c.triggerEvent("refresh"), c._callbackSupport(a), c }, htmlEscape: function (a) { return String(a).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;") }, triggerEvent: function (a) { var b = this, c = b.options.showFirstOption ? b.currentFocus : b.currentFocus - 1 >= 0 ? b.currentFocus : 0; return b.selectBox.trigger(a, { selectbox: b.selectBox, selectboxOption: b.selectItems.eq(c), dropdown: b.dropdown, dropdownOption: b.listItems.eq(b.currentFocus) }), b }, _copyAttributes: function () { var a = this; return a._addSelectBoxAttributes && a._addSelectBoxAttributes(), a }, _realOuterWidth: function (a) { if (a.is(":visible")) return a.outerWidth(!0); var b, c = a.clone(); return c.css({ visibility: "hidden", display: "block", position: "absolute" }).appendTo("body"), b = c.outerWidth(!0), c.remove(), b } }); var e = a.selectBox.selectBoxIt.prototype; e.add = function (b, c) { this._populate(b, function (b) { var d, e, f = this, g = a.type(b), h = 0, i = [], j = f._isJSON(b), k = j && f._parseJSON(b); if (b && ("array" === g || j && k.data && "array" === a.type(k.data)) || "object" === g && b.data && "array" === a.type(b.data)) { for (f._isJSON(b) && (b = k), b.data && (b = b.data), e = b.length; e - 1 >= h; h += 1)d = b[h], a.isPlainObject(d) ? i.push(a("<option/>", d)) : "string" === a.type(d) && i.push(a("<option/>", { text: d, value: d })); f.selectBox.append(i) } else b && "string" === g && !f._isJSON(b) ? f.selectBox.append(b) : b && "object" === g ? f.selectBox.append(a("<option/>", b)) : b && f._isJSON(b) && a.isPlainObject(f._parseJSON(b)) && f.selectBox.append(a("<option/>", f._parseJSON(b))); return f.dropdown ? f.refresh(function () { f._callbackSupport(c) }, !0) : f._callbackSupport(c), f }) }, e._parseJSON = function (b) { return JSON && JSON.parse && JSON.parse(b) || a.parseJSON(b) }, e._isJSON = function (a) { var b, c = this; try { return b = c._parseJSON(a), !0 } catch (d) { return !1 } }, e._populate = function (b, c) { var d = this; return b = a.isFunction(b) ? b.call() : b, d.isDeferred(b) ? b.done(function (a) { c.call(d, a) }) : c.call(d, b), d }, e._ariaAccessibility = function () { var b = this, c = a("label[for='" + b.originalElem.id + "']"); return b.dropdownContainer.attr({ role: "combobox", "aria-autocomplete": "list", "aria-haspopup": "true", "aria-expanded": "false", "aria-owns": b.list[0].id }), b.dropdownText.attr({ "aria-live": "polite" }), b.dropdown.on({ "disable.selectBoxIt": function () { b.dropdownContainer.attr("aria-disabled", "true") }, "enable.selectBoxIt": function () { b.dropdownContainer.attr("aria-disabled", "false") } }), c.length && b.dropdownContainer.attr("aria-labelledby", c[0].id), b.list.attr({ role: "listbox", "aria-hidden": "true" }), b.listItems.attr({ role: "option" }), b.selectBox.on({ "open.selectBoxIt": function () { b.list.attr("aria-hidden", "false"), b.dropdownContainer.attr("aria-expanded", "true") }, "close.selectBoxIt": function () { b.list.attr("aria-hidden", "true"), b.dropdownContainer.attr("aria-expanded", "false") } }), b }, e._addSelectBoxAttributes = function () { var b = this; return b._addAttributes(b.selectBox.prop("attributes"), b.dropdown), b.selectItems.each(function (c) { b._addAttributes(a(this).prop("attributes"), b.listItems.eq(c)) }), b }, e._addAttributes = function (b, c) { var d = this, e = d.options.copyAttributes; return b.length && a.each(b, function (b, d) { var f = d.name.toLowerCase(), g = d.value; "null" === g || -1 === a.inArray(f, e) && -1 === f.indexOf("data") || c.attr(f, g) }), d }, e.destroy = function (a) { var b = this; return b._destroySelectBoxIt(), b.widgetProto.destroy.call(b), b._callbackSupport(a), b }, e._destroySelectBoxIt = function () { var b = this; return b.dropdown.off(".selectBoxIt"), a.contains(b.dropdownContainer[0], b.originalElem) && b.dropdownContainer.before(b.selectBox), b.dropdownContainer.remove(), b.selectBox.removeAttr("style").attr("style", b.selectBoxStyles), b.selectBox.show(), b.triggerEvent("destroy"), b }, e.disable = function (a) { var b = this; return b.options.disabled || (b.close(), b.selectBox.attr("disabled", "disabled"), b.dropdown.removeAttr("tabindex").removeClass(b.theme.enabled).addClass(b.theme.disabled), b.setOption("disabled", !0), b.triggerEvent("disable")), b._callbackSupport(a), b }, e.disableOption = function (b, c) { var d, e, f, g = this, h = a.type(b); return "number" === h && (g.close(), d = g.selectBox.find("option").eq(b), g.triggerEvent("disable-option"), d.attr("disabled", "disabled"), g.listItems.eq(b).attr("data-disabled", "true").addClass(g.theme.disabled), g.currentFocus === b && (e = g.listItems.eq(g.currentFocus).nextAll("li").not("[data-disabled='true']").first().length, f = g.listItems.eq(g.currentFocus).prevAll("li").not("[data-disabled='true']").first().length, e ? g.moveDown() : f ? g.moveUp() : g.disable())), g._callbackSupport(c), g }, e._isDisabled = function () { var a = this; return a.originalElem.disabled && a.disable(), a }, e._dynamicPositioning = function () { var b = this; if ("number" === a.type(b.listSize)) b.list.css("max-height", b.maxHeight || "none"); else { var c = b.dropdown.offset().top, d = b.list.data("max-height") || b.list.outerHeight(), e = b.dropdown.outerHeight(), f = b.options.viewport, g = f.height(), h = a.isWindow(f.get(0)) ? f.scrollTop() : f.offset().top, i = g + h >= c + e + d, j = !i; if (b.list.data("max-height") || b.list.data("max-height", b.list.outerHeight()), j) if (b.dropdown.offset().top - h >= d) b.list.css("max-height", d), b.list.css("top", b.dropdown.position().top - b.list.outerHeight()); else { var k = Math.abs(c + e + d - (g + h)), l = Math.abs(b.dropdown.offset().top - h - d); l > k ? (b.list.css("max-height", d - k - e / 2), b.list.css("top", "auto")) : (b.list.css("max-height", d - l - e / 2), b.list.css("top", b.dropdown.position().top - b.list.outerHeight())) } else b.list.css("max-height", d), b.list.css("top", "auto") } return b }, e.enable = function (a) { var b = this; return b.options.disabled && (b.triggerEvent("enable"), b.selectBox.removeAttr("disabled"), b.dropdown.attr("tabindex", 0).removeClass(b.theme.disabled).addClass(b.theme.enabled), b.setOption("disabled", !1), b._callbackSupport(a)), b }, e.enableOption = function (b, c) { var d, e = this, f = a.type(b); return "number" === f && (d = e.selectBox.find("option").eq(b), e.triggerEvent("enable-option"), d.removeAttr("disabled"), e.listItems.eq(b).attr("data-disabled", "false").removeClass(e.theme.disabled)), e._callbackSupport(c), e }, e.moveDown = function (a) { var b = this; b.currentFocus += 1; var c = "true" === b.listItems.eq(b.currentFocus).attr("data-disabled") ? !0 : !1, d = b.listItems.eq(b.currentFocus).nextAll("li").not("[data-disabled='true']").first().length; if (b.currentFocus === b.listItems.length) b.currentFocus -= 1; else { if (c && d) return b.listItems.eq(b.currentFocus - 1).blur(), b.moveDown(), void 0; c && !d ? b.currentFocus -= 1 : (b.listItems.eq(b.currentFocus - 1).blur().end().eq(b.currentFocus).focusin(), b._scrollToView("down"), b.triggerEvent("moveDown")) } return b._callbackSupport(a), b }, e.moveUp = function (a) { var b = this; b.currentFocus -= 1; var c = "true" === b.listItems.eq(b.currentFocus).attr("data-disabled") ? !0 : !1, d = b.listItems.eq(b.currentFocus).prevAll("li").not("[data-disabled='true']").first().length; if (-1 === b.currentFocus) b.currentFocus += 1; else { if (c && d) return b.listItems.eq(b.currentFocus + 1).blur(), b.moveUp(), void 0; c && !d ? b.currentFocus += 1 : (b.listItems.eq(this.currentFocus + 1).blur().end().eq(b.currentFocus).focusin(), b._scrollToView("up"), b.triggerEvent("moveUp")) } return b._callbackSupport(a), b }, e._setCurrentSearchOption = function (a) { var b = this; return (b.options.aggressiveChange || b.options.selectWhenHidden || b.listItems.eq(a).is(":visible")) && b.listItems.eq(a).data("disabled") !== !0 && (b.listItems.eq(b.currentFocus).blur(), b.currentIndex = a, b.currentFocus = a, b.listItems.eq(b.currentFocus).focusin(), b._scrollToView("search"), b.triggerEvent("search")), b }, e._searchAlgorithm = function (a, b) { var c, d, e, f, g = this, h = !1, i = g.textArray, j = g.currentText; for (c = a, e = i.length; e > c; c += 1) { for (f = i[c], d = 0; e > d; d += 1)-1 !== i[d].search(b) && (h = !0, d = e); if (h || (g.currentText = g.currentText.charAt(g.currentText.length - 1).replace(/[|()\[{.+*?$\\]/g, "\\$0"), j = g.currentText), b = new RegExp(j, "gi"), j.length < 3) { if (b = new RegExp(j.charAt(0), "gi"), -1 !== f.charAt(0).search(b)) return g._setCurrentSearchOption(c), (f.substring(0, j.length).toLowerCase() !== j.toLowerCase() || g.options.similarSearch) && (g.currentIndex += 1), !1 } else if (-1 !== f.search(b)) return g._setCurrentSearchOption(c), !1; if (f.toLowerCase() === g.currentText.toLowerCase()) return g._setCurrentSearchOption(c), g.currentText = "", !1 } return !0 }, e.search = function (a, b, c) { var d = this; c ? d.currentText += a.replace(/[|()\[{.+*?$\\]/g, "\\$0") : d.currentText = a.replace(/[|()\[{.+*?$\\]/g, "\\$0"); var e = d._searchAlgorithm(d.currentIndex, new RegExp(d.currentText, "gi")); return e && d._searchAlgorithm(0, d.currentText), d._callbackSupport(b), d }, e._updateMobileText = function () { var a, b, c, d = this; a = d.selectBox.find("option").filter(":selected"), b = a.attr("data-text"), c = b ? b : a.text(), d._setText(d.dropdownText, c), d.list.find('li[data-val="' + a.val() + '"]').find("i").attr("class") && d.dropdownImage.attr("class", d.list.find('li[data-val="' + a.val() + '"]').find("i").attr("class")).addClass("selectboxit-default-icon") }, e._applyNativeSelect = function () { var a = this; return a.dropdownContainer.append(a.selectBox), a.dropdown.attr("tabindex", "-1"), a.selectBox.css({ display: "block", visibility: "visible", width: a._realOuterWidth(a.dropdown), height: a.dropdown.outerHeight(), opacity: "0", position: "absolute", top: "0", left: "0", cursor: "pointer", "z-index": "999999", margin: a.dropdown.css("margin"), padding: "0", "-webkit-appearance": "menulist-button" }), a.originalElem.disabled && a.triggerEvent("disable"), this }, e._mobileEvents = function () { var a = this; a.selectBox.on({ "changed.selectBoxIt": function () { a.hasChanged = !0, a._updateMobileText(), a.triggerEvent("option-click") }, "mousedown.selectBoxIt": function () { a.hasChanged || !a.options.defaultText || a.originalElem.disabled || (a._updateMobileText(), a.triggerEvent("option-click")) }, "enable.selectBoxIt": function () { a.selectBox.removeClass("selectboxit-rendering") }, "disable.selectBoxIt": function () { a.selectBox.addClass("selectboxit-rendering") } }) }, e._mobile = function () { var a = this; return a.isMobile && (a._applyNativeSelect(), a._mobileEvents()), this }, e.remove = function (b, c) { var d, e, f = this, g = a.type(b), h = 0, i = ""; if ("array" === g) { for (e = b.length; e - 1 >= h; h += 1)d = b[h], "number" === a.type(d) && (i += i.length ? ", option:eq(" + d + ")" : "option:eq(" + d + ")"); f.selectBox.find(i).remove() } else "number" === g ? f.selectBox.find("option").eq(b).remove() : f.selectBox.find("option").remove(); return f.dropdown ? f.refresh(function () { f._callbackSupport(c) }, !0) : f._callbackSupport(c), f }, e.selectOption = function (b, c) { var d = this, e = a.type(b); return "number" === e ? d.selectBox.val(d.selectItems.eq(b).val()).change() : "string" === e && d.selectBox.val(b).change(), d._callbackSupport(c), d }, e.setOption = function (b, c, d) { var e = this; return "string" === a.type(b) && (e.options[b] = c), e.refresh(function () { e._callbackSupport(d) }, !0), e }, e.setOptions = function (b, c) { var d = this; return a.isPlainObject(b) && (d.options = a.extend({}, d.options, b)), d.refresh(function () { d._callbackSupport(c) }, !0), d }, e.wait = function (a, b) { var c = this; return c.widgetProto._delay.call(c, b, a), c } });

/*! iCheck v1.0.2 by Damir Sultanov, http://git.io/arlzeA, MIT Licensed */
(function (f) {
	function A(a, b, d) { var c = a[0], g = /er/.test(d) ? _indeterminate : /bl/.test(d) ? n : k, e = d == _update ? { checked: c[k], disabled: c[n], indeterminate: "true" == a.attr(_indeterminate) || "false" == a.attr(_determinate) } : c[g]; if (/^(ch|di|in)/.test(d) && !e) x(a, g); else if (/^(un|en|de)/.test(d) && e) q(a, g); else if (d == _update) for (var f in e) e[f] ? x(a, f, !0) : q(a, f, !0); else if (!b || "toggle" == d) { if (!b) a[_callback]("ifClicked"); e ? c[_type] !== r && q(a, g) : x(a, g) } } function x(a, b, d) {
		var c = a[0], g = a.parent(), e = b == k, u = b == _indeterminate,
			v = b == n, s = u ? _determinate : e ? y : "enabled", F = l(a, s + t(c[_type])), B = l(a, b + t(c[_type])); if (!0 !== c[b]) { if (!d && b == k && c[_type] == r && c.name) { var w = a.closest("form"), p = 'input[name="' + c.name + '"]', p = w.length ? w.find(p) : f(p); p.each(function () { this !== c && f(this).data(m) && q(f(this), b) }) } u ? (c[b] = !0, c[k] && q(a, k, "force")) : (d || (c[b] = !0), e && c[_indeterminate] && q(a, _indeterminate, !1)); D(a, e, b, d) } c[n] && l(a, _cursor, !0) && g.find("." + C).css(_cursor, "default"); g[_add](B || l(a, b) || ""); g.attr("role") && !u && g.attr("aria-" + (v ? n : k), "true");
		g[_remove](F || l(a, s) || "")
	} function q(a, b, d) { var c = a[0], g = a.parent(), e = b == k, f = b == _indeterminate, m = b == n, s = f ? _determinate : e ? y : "enabled", q = l(a, s + t(c[_type])), r = l(a, b + t(c[_type])); if (!1 !== c[b]) { if (f || !d || "force" == d) c[b] = !1; D(a, e, s, d) } !c[n] && l(a, _cursor, !0) && g.find("." + C).css(_cursor, "pointer"); g[_remove](r || l(a, b) || ""); g.attr("role") && !f && g.attr("aria-" + (m ? n : k), "false"); g[_add](q || l(a, s) || "") } function E(a, b) {
		if (a.data(m)) {
			a.parent().html(a.attr("style", a.data(m).s || "")); if (b) a[_callback](b); a.off(".i").unwrap();
			f(_label + '[for="' + a[0].id + '"]').add(a.closest(_label)).off(".i")
		}
	} function l(a, b, f) { if (a.data(m)) return a.data(m).o[b + (f ? "" : "Class")] } function t(a) { return a.charAt(0).toUpperCase() + a.slice(1) } function D(a, b, f, c) { if (!c) { if (b) a[_callback]("ifToggled"); a[_callback]("ifChanged")[_callback]("if" + t(f)) } } var m = "iCheck", C = m + "-helper", r = "radio", k = "checked", y = "un" + k, n = "disabled"; _determinate = "determinate"; _indeterminate = "in" + _determinate; _update = "update"; _type = "type"; _click = "click"; _touch = "touchbegin.i touchend.i";
	_add = "addClass"; _remove = "removeClass"; _callback = "trigger"; _label = "label"; _cursor = "cursor"; _mobile = /ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent); f.fn[m] = function (a, b) {
		var d = 'input[type="checkbox"], input[type="' + r + '"]', c = f(), g = function (a) { a.each(function () { var a = f(this); c = a.is(d) ? c.add(a) : c.add(a.find(d)) }) }; if (/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(a)) return a = a.toLowerCase(), g(this), c.each(function () {
			var c =
				f(this); "destroy" == a ? E(c, "ifDestroyed") : A(c, !0, a); f.isFunction(b) && b()
		}); if ("object" != typeof a && a) return this; var e = f.extend({ checkedClass: k, disabledClass: n, indeterminateClass: _indeterminate, labelHover: !0 }, a), l = e.handle, v = e.hoverClass || "hover", s = e.focusClass || "focus", t = e.activeClass || "active", B = !!e.labelHover, w = e.labelHoverClass || "hover", p = ("" + e.increaseArea).replace("%", "") | 0; if ("checkbox" == l || l == r) d = 'input[type="' + l + '"]'; -50 > p && (p = -50); g(this); return c.each(function () {
			var a = f(this); E(a); var c = this,
				b = c.id, g = -p + "%", d = 100 + 2 * p + "%", d = { position: "absolute", top: g, left: g, display: "block", width: d, height: d, margin: 0, padding: 0, background: "#fff", border: 0, opacity: 0 }, g = _mobile ? { position: "absolute", visibility: "hidden" } : p ? d : { position: "absolute", opacity: 0 }, l = "checkbox" == c[_type] ? e.checkboxClass || "icheckbox" : e.radioClass || "i" + r, z = f(_label + '[for="' + b + '"]').add(a.closest(_label)), u = !!e.aria, y = m + "-" + Math.random().toString(36).substr(2, 6), h = '<div class="' + l + '" ' + (u ? 'role="' + c[_type] + '" ' : ""); u && z.each(function () {
					h +=
						'aria-labelledby="'; this.id ? h += this.id : (this.id = y, h += y); h += '"'
				}); h = a.wrap(h + "/>")[_callback]("ifCreated").parent().append(e.insert); d = f('<ins class="' + C + '"/>').css(d).appendTo(h); a.data(m, { o: e, s: a.attr("style") }).css(g); e.inheritClass && h[_add](c.className || ""); e.inheritID && b && h.attr("id", m + "-" + b); "static" == h.css("position") && h.css("position", "relative"); A(a, !0, _update); if (z.length) z.on(_click + ".i mouseover.i mouseout.i " + _touch, function (b) {
					var d = b[_type], e = f(this); if (!c[n]) {
						if (d == _click) {
							if (f(b.target).is("a")) return;
							A(a, !1, !0)
						} else B && (/ut|nd/.test(d) ? (h[_remove](v), e[_remove](w)) : (h[_add](v), e[_add](w))); if (_mobile) b.stopPropagation(); else return !1
					}
				}); a.on(_click + ".i focus.i blur.i keyup.i keydown.i keypress.i", function (b) { var d = b[_type]; b = b.keyCode; if (d == _click) return !1; if ("keydown" == d && 32 == b) return c[_type] == r && c[k] || (c[k] ? q(a, k) : x(a, k)), !1; if ("keyup" == d && c[_type] == r) !c[k] && x(a, k); else if (/us|ur/.test(d)) h["blur" == d ? _remove : _add](s) }); d.on(_click + " mousedown mouseup mouseover mouseout " + _touch, function (b) {
					var d =
						b[_type], e = /wn|up/.test(d) ? t : v; if (!c[n]) { if (d == _click) A(a, !1, !0); else { if (/wn|er|in/.test(d)) h[_add](e); else h[_remove](e + " " + t); if (z.length && B && e == v) z[/ut|nd/.test(d) ? _remove : _add](w) } if (_mobile) b.stopPropagation(); else return !1 }
				})
		})
	}
})(window.jQuery || window.Zepto);

/*
 * Ion.RangeSlider
 * version 2.2.0 Build: 380
 * © Denis Ineshin, 2017
 * https://github.com/IonDen
*/
!function (t) { "function" == typeof define && define.amd ? define(["jquery"], function (i) { return t(i, document, window, navigator) }) : "object" == typeof exports ? t(require("jquery"), document, window, navigator) : t(jQuery, document, window, navigator) }(function (t, i, s, o, e) { "use strict"; var h, r, n = 0, a = (h = o.userAgent, r = /msie\s\d+/i, h.search(r) > 0 && r.exec(h).toString().split(" ")[1] < 9 && (t("html").addClass("lt-ie9"), !0)); Function.prototype.bind || (Function.prototype.bind = function (t) { var i = this, s = [].slice; if ("function" != typeof i) throw new TypeError; var o = s.call(arguments, 1), e = function () { if (this instanceof e) { var h = function () { }; h.prototype = i.prototype; var r = new h, n = i.apply(r, o.concat(s.call(arguments))); return Object(n) === n ? n : r } return i.apply(t, o.concat(s.call(arguments))) }; return e }), Array.prototype.indexOf || (Array.prototype.indexOf = function (t, i) { var s; if (null == this) throw new TypeError('"this" is null or not defined'); var o = Object(this), e = o.length >>> 0; if (0 === e) return -1; var h = +i || 0; if (Math.abs(h) === 1 / 0 && (h = 0), h >= e) return -1; for (s = Math.max(h >= 0 ? h : e - Math.abs(h), 0); s < e;) { if (s in o && o[s] === t) return s; s++ } return -1 }); var c = function (o, h, r) { this.VERSION = "2.2.0", this.input = o, this.plugin_count = r, this.current_plugin = 0, this.calc_count = 0, this.update_tm = 0, this.old_from = 0, this.old_to = 0, this.old_min_interval = null, this.raf_id = null, this.dragging = !1, this.force_redraw = !1, this.no_diapason = !1, this.has_tab_index = !0, this.is_key = !1, this.is_update = !1, this.is_start = !0, this.is_finish = !1, this.is_active = !1, this.is_resize = !1, this.is_click = !1, h = h || {}, this.$cache = { win: t(s), body: t(i.body), input: t(o), cont: null, rs: null, min: null, max: null, from: null, to: null, single: null, bar: null, line: null, s_single: null, s_from: null, s_to: null, shad_single: null, shad_from: null, shad_to: null, edge: null, grid: null, grid_labels: [] }, this.coords = { x_gap: 0, x_pointer: 0, w_rs: 0, w_rs_old: 0, w_handle: 0, p_gap: 0, p_gap_left: 0, p_gap_right: 0, p_step: 0, p_pointer: 0, p_handle: 0, p_single_fake: 0, p_single_real: 0, p_from_fake: 0, p_from_real: 0, p_to_fake: 0, p_to_real: 0, p_bar_x: 0, p_bar_w: 0, grid_gap: 0, big_num: 0, big: [], big_w: [], big_p: [], big_x: [] }, this.labels = { w_min: 0, w_max: 0, w_from: 0, w_to: 0, w_single: 0, p_min: 0, p_max: 0, p_from_fake: 0, p_from_left: 0, p_to_fake: 0, p_to_left: 0, p_single_fake: 0, p_single_left: 0 }; var n, a, c, l = this.$cache.input, _ = l.prop("value"); n = { type: "single", min: 10, max: 100, from: null, to: null, step: 1, min_interval: 0, max_interval: 0, drag_interval: !1, values: [], p_values: [], from_fixed: !1, from_min: null, from_max: null, from_shadow: !1, to_fixed: !1, to_min: null, to_max: null, to_shadow: !1, prettify_enabled: !0, prettify_separator: " ", prettify: null, force_edges: !1, keyboard: !0, grid: !1, grid_margin: !0, grid_num: 4, grid_snap: !1, hide_min_max: !1, hide_from_to: !1, prefix: "", postfix: "", max_postfix: "", decorate_both: !0, values_separator: " — ", input_values_separator: ";", disable: !1, block: !1, extra_classes: "", scope: null, onStart: null, onChange: null, onFinish: null, onUpdate: null }, "INPUT" !== l[0].nodeName && console && console.warn && console.warn("Base element should be <input>!", l[0]), (a = { type: l.data("type"), min: l.data("min"), max: l.data("max"), from: l.data("from"), to: l.data("to"), step: l.data("step"), min_interval: l.data("minInterval"), max_interval: l.data("maxInterval"), drag_interval: l.data("dragInterval"), values: l.data("values"), from_fixed: l.data("fromFixed"), from_min: l.data("fromMin"), from_max: l.data("fromMax"), from_shadow: l.data("fromShadow"), to_fixed: l.data("toFixed"), to_min: l.data("toMin"), to_max: l.data("toMax"), to_shadow: l.data("toShadow"), prettify_enabled: l.data("prettifyEnabled"), prettify_separator: l.data("prettifySeparator"), force_edges: l.data("forceEdges"), keyboard: l.data("keyboard"), grid: l.data("grid"), grid_margin: l.data("gridMargin"), grid_num: l.data("gridNum"), grid_snap: l.data("gridSnap"), hide_min_max: l.data("hideMinMax"), hide_from_to: l.data("hideFromTo"), prefix: l.data("prefix"), postfix: l.data("postfix"), max_postfix: l.data("maxPostfix"), decorate_both: l.data("decorateBoth"), values_separator: l.data("valuesSeparator"), input_values_separator: l.data("inputValuesSeparator"), disable: l.data("disable"), block: l.data("block"), extra_classes: l.data("extraClasses") }).values = a.values && a.values.split(","); for (c in a) a.hasOwnProperty(c) && (a[c] !== e && "" !== a[c] || delete a[c]); _ !== e && "" !== _ && ((_ = _.split(a.input_values_separator || h.input_values_separator || ";"))[0] && _[0] == +_[0] && (_[0] = +_[0]), _[1] && _[1] == +_[1] && (_[1] = +_[1]), h && h.values && h.values.length ? (n.from = _[0] && h.values.indexOf(_[0]), n.to = _[1] && h.values.indexOf(_[1])) : (n.from = _[0] && +_[0], n.to = _[1] && +_[1])), t.extend(n, h), t.extend(n, a), this.options = n, this.update_check = {}, this.validate(), this.result = { input: this.$cache.input, slider: null, min: this.options.min, max: this.options.max, from: this.options.from, from_percent: 0, from_value: null, to: this.options.to, to_percent: 0, to_value: null }, this.init() }; c.prototype = { init: function (t) { this.no_diapason = !1, this.coords.p_step = this.convertToPercent(this.options.step, !0), this.target = "base", this.toggleInput(), this.append(), this.setMinMax(), t ? (this.force_redraw = !0, this.calc(!0), this.callOnUpdate()) : (this.force_redraw = !0, this.calc(!0), this.callOnStart()), this.updateScene() }, append: function () { var t = '<span class="irs js-irs-' + this.plugin_count + " " + this.options.extra_classes + '"></span>'; this.$cache.input.before(t), this.$cache.input.prop("readonly", !0), this.$cache.cont = this.$cache.input.prev(), this.result.slider = this.$cache.cont, this.$cache.cont.html('<span class="irs"><span class="irs-line" tabindex="0"><span class="irs-line-left"></span><span class="irs-line-mid"></span><span class="irs-line-right"></span></span><span class="irs-min">0</span><span class="irs-max">1</span><span class="irs-from">0</span><span class="irs-to">0</span><span class="irs-single">0</span></span><span class="irs-grid"></span><span class="irs-bar"></span>'), this.$cache.rs = this.$cache.cont.find(".irs"), this.$cache.min = this.$cache.cont.find(".irs-min"), this.$cache.max = this.$cache.cont.find(".irs-max"), this.$cache.from = this.$cache.cont.find(".irs-from"), this.$cache.to = this.$cache.cont.find(".irs-to"), this.$cache.single = this.$cache.cont.find(".irs-single"), this.$cache.bar = this.$cache.cont.find(".irs-bar"), this.$cache.line = this.$cache.cont.find(".irs-line"), this.$cache.grid = this.$cache.cont.find(".irs-grid"), "single" === this.options.type ? (this.$cache.cont.append('<span class="irs-bar-edge"></span><span class="irs-shadow shadow-single"></span><span class="irs-slider single"></span>'), this.$cache.edge = this.$cache.cont.find(".irs-bar-edge"), this.$cache.s_single = this.$cache.cont.find(".single"), this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.shad_single = this.$cache.cont.find(".shadow-single")) : (this.$cache.cont.append('<span class="irs-shadow shadow-from"></span><span class="irs-shadow shadow-to"></span><span class="irs-slider from"></span><span class="irs-slider to"></span>'), this.$cache.s_from = this.$cache.cont.find(".from"), this.$cache.s_to = this.$cache.cont.find(".to"), this.$cache.shad_from = this.$cache.cont.find(".shadow-from"), this.$cache.shad_to = this.$cache.cont.find(".shadow-to"), this.setTopHandler()), this.options.hide_from_to && (this.$cache.from[0].style.display = "none", this.$cache.to[0].style.display = "none", this.$cache.single[0].style.display = "none"), this.appendGrid(), this.options.disable ? (this.appendDisableMask(), this.$cache.input[0].disabled = !0) : (this.$cache.input[0].disabled = !1, this.removeDisableMask(), this.bindEvents()), this.options.disable || (this.options.block ? this.appendDisableMask() : this.removeDisableMask()), this.options.drag_interval && (this.$cache.bar[0].style.cursor = "ew-resize") }, setTopHandler: function () { var t = this.options.min, i = this.options.max, s = this.options.from, o = this.options.to; s > t && o === i ? this.$cache.s_from.addClass("type_last") : o < i && this.$cache.s_to.addClass("type_last") }, changeLevel: function (t) { switch (t) { case "single": this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_single_fake), this.$cache.s_single.addClass("state_hover"); break; case "from": this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake), this.$cache.s_from.addClass("state_hover"), this.$cache.s_from.addClass("type_last"), this.$cache.s_to.removeClass("type_last"); break; case "to": this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_to_fake), this.$cache.s_to.addClass("state_hover"), this.$cache.s_to.addClass("type_last"), this.$cache.s_from.removeClass("type_last"); break; case "both": this.coords.p_gap_left = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake), this.coords.p_gap_right = this.toFixed(this.coords.p_to_fake - this.coords.p_pointer), this.$cache.s_to.removeClass("type_last"), this.$cache.s_from.removeClass("type_last") } }, appendDisableMask: function () { this.$cache.cont.append('<span class="irs-disable-mask"></span>'), this.$cache.cont.addClass("irs-disabled") }, removeDisableMask: function () { this.$cache.cont.remove(".irs-disable-mask"), this.$cache.cont.removeClass("irs-disabled") }, remove: function () { this.$cache.cont.remove(), this.$cache.cont = null, this.$cache.line.off("keydown.irs_" + this.plugin_count), this.$cache.body.off("touchmove.irs_" + this.plugin_count), this.$cache.body.off("mousemove.irs_" + this.plugin_count), this.$cache.win.off("touchend.irs_" + this.plugin_count), this.$cache.win.off("mouseup.irs_" + this.plugin_count), a && (this.$cache.body.off("mouseup.irs_" + this.plugin_count), this.$cache.body.off("mouseleave.irs_" + this.plugin_count)), this.$cache.grid_labels = [], this.coords.big = [], this.coords.big_w = [], this.coords.big_p = [], this.coords.big_x = [], cancelAnimationFrame(this.raf_id) }, bindEvents: function () { this.no_diapason || (this.$cache.body.on("touchmove.irs_" + this.plugin_count, this.pointerMove.bind(this)), this.$cache.body.on("mousemove.irs_" + this.plugin_count, this.pointerMove.bind(this)), this.$cache.win.on("touchend.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.win.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.line.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.line.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.line.on("focus.irs_" + this.plugin_count, this.pointerFocus.bind(this)), this.options.drag_interval && "double" === this.options.type ? (this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "both")), this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "both"))) : (this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))), "single" === this.options.type ? (this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.s_single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.shad_single.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.s_single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.edge.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_single.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))) : (this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, null)), this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, null)), this.$cache.from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.s_from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.s_to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.shad_from.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_to.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.s_from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.s_to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.shad_from.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_to.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))), this.options.keyboard && this.$cache.line.on("keydown.irs_" + this.plugin_count, this.key.bind(this, "keyboard")), a && (this.$cache.body.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.body.on("mouseleave.irs_" + this.plugin_count, this.pointerUp.bind(this)))) }, pointerFocus: function (t) { var i, s; this.target || (i = (s = "single" === this.options.type ? this.$cache.single : this.$cache.from).offset().left, i += s.width() / 2 - 1, this.pointerClick("single", { preventDefault: function () { }, pageX: i })) }, pointerMove: function (t) { if (this.dragging) { var i = t.pageX || t.originalEvent.touches && t.originalEvent.touches[0].pageX; this.coords.x_pointer = i - this.coords.x_gap, this.calc() } }, pointerUp: function (i) { this.current_plugin === this.plugin_count && this.is_active && (this.is_active = !1, this.$cache.cont.find(".state_hover").removeClass("state_hover"), this.force_redraw = !0, a && t("*").prop("unselectable", !1), this.updateScene(), this.restoreOriginalMinInterval(), (t.contains(this.$cache.cont[0], i.target) || this.dragging) && this.callOnFinish(), this.dragging = !1) }, pointerDown: function (i, s) { s.preventDefault(); var o = s.pageX || s.originalEvent.touches && s.originalEvent.touches[0].pageX; 2 !== s.button && ("both" === i && this.setTempMinInterval(), i || (i = this.target || "from"), this.current_plugin = this.plugin_count, this.target = i, this.is_active = !0, this.dragging = !0, this.coords.x_gap = this.$cache.rs.offset().left, this.coords.x_pointer = o - this.coords.x_gap, this.calcPointerPercent(), this.changeLevel(i), a && t("*").prop("unselectable", !0), this.$cache.line.trigger("focus"), this.updateScene()) }, pointerClick: function (t, i) { i.preventDefault(); var s = i.pageX || i.originalEvent.touches && i.originalEvent.touches[0].pageX; 2 !== i.button && (this.current_plugin = this.plugin_count, this.target = t, this.is_click = !0, this.coords.x_gap = this.$cache.rs.offset().left, this.coords.x_pointer = +(s - this.coords.x_gap).toFixed(), this.force_redraw = !0, this.calc(), this.$cache.line.trigger("focus")) }, key: function (t, i) { if (!(this.current_plugin !== this.plugin_count || i.altKey || i.ctrlKey || i.shiftKey || i.metaKey)) { switch (i.which) { case 83: case 65: case 40: case 37: i.preventDefault(), this.moveByKey(!1); break; case 87: case 68: case 38: case 39: i.preventDefault(), this.moveByKey(!0) }return !0 } }, moveByKey: function (t) { var i = this.coords.p_pointer, s = (this.options.max - this.options.min) / 100; s = this.options.step / s, t ? i += s : i -= s, this.coords.x_pointer = this.toFixed(this.coords.w_rs / 100 * i), this.is_key = !0, this.calc() }, setMinMax: function () { if (this.options) { if (this.options.hide_min_max) return this.$cache.min[0].style.display = "none", void (this.$cache.max[0].style.display = "none"); if (this.options.values.length) this.$cache.min.html(this.decorate(this.options.p_values[this.options.min])), this.$cache.max.html(this.decorate(this.options.p_values[this.options.max])); else { var t = this._prettify(this.options.min), i = this._prettify(this.options.max); this.result.min_pretty = t, this.result.max_pretty = i, this.$cache.min.html(this.decorate(t, this.options.min)), this.$cache.max.html(this.decorate(i, this.options.max)) } this.labels.w_min = this.$cache.min.outerWidth(!1), this.labels.w_max = this.$cache.max.outerWidth(!1) } }, setTempMinInterval: function () { var t = this.result.to - this.result.from; null === this.old_min_interval && (this.old_min_interval = this.options.min_interval), this.options.min_interval = t }, restoreOriginalMinInterval: function () { null !== this.old_min_interval && (this.options.min_interval = this.old_min_interval, this.old_min_interval = null) }, calc: function (t) { if (this.options && (this.calc_count++, (10 === this.calc_count || t) && (this.calc_count = 0, this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.calcHandlePercent()), this.coords.w_rs)) { this.calcPointerPercent(); var i = this.getHandleX(); switch ("both" === this.target && (this.coords.p_gap = 0, i = this.getHandleX()), "click" === this.target && (this.coords.p_gap = this.coords.p_handle / 2, i = this.getHandleX(), this.options.drag_interval ? this.target = "both_one" : this.target = this.chooseHandle(i)), this.target) { case "base": var s = (this.options.max - this.options.min) / 100, o = (this.result.from - this.options.min) / s, e = (this.result.to - this.options.min) / s; this.coords.p_single_real = this.toFixed(o), this.coords.p_from_real = this.toFixed(o), this.coords.p_to_real = this.toFixed(e), this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real), this.target = null; break; case "single": if (this.options.from_fixed) break; this.coords.p_single_real = this.convertToRealPercent(i), this.coords.p_single_real = this.calcWithStep(this.coords.p_single_real), this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max), this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real); break; case "from": if (this.options.from_fixed) break; this.coords.p_from_real = this.convertToRealPercent(i), this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real), this.coords.p_from_real > this.coords.p_to_real && (this.coords.p_from_real = this.coords.p_to_real), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_real = this.checkMaxInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real); break; case "to": if (this.options.to_fixed) break; this.coords.p_to_real = this.convertToRealPercent(i), this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real), this.coords.p_to_real < this.coords.p_from_real && (this.coords.p_to_real = this.coords.p_from_real), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_real = this.checkMaxInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real); break; case "both": if (this.options.from_fixed || this.options.to_fixed) break; i = this.toFixed(i + .001 * this.coords.p_handle), this.coords.p_from_real = this.convertToRealPercent(i) - this.coords.p_gap_left, this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_real = this.convertToRealPercent(i) + this.coords.p_gap_right, this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real); break; case "both_one": if (this.options.from_fixed || this.options.to_fixed) break; var h = this.convertToRealPercent(i), r = this.result.from_percent, n = this.result.to_percent - r, a = n / 2, c = h - a, l = h + a; c < 0 && (l = (c = 0) + n), l > 100 && (c = (l = 100) - n), this.coords.p_from_real = this.calcWithStep(c), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_real = this.calcWithStep(l), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real) }"single" === this.options.type ? (this.coords.p_bar_x = this.coords.p_handle / 2, this.coords.p_bar_w = this.coords.p_single_fake, this.result.from_percent = this.coords.p_single_real, this.result.from = this.convertToValue(this.coords.p_single_real), this.result.from_pretty = this._prettify(this.result.from), this.options.values.length && (this.result.from_value = this.options.values[this.result.from])) : (this.coords.p_bar_x = this.toFixed(this.coords.p_from_fake + this.coords.p_handle / 2), this.coords.p_bar_w = this.toFixed(this.coords.p_to_fake - this.coords.p_from_fake), this.result.from_percent = this.coords.p_from_real, this.result.from = this.convertToValue(this.coords.p_from_real), this.result.from_pretty = this._prettify(this.result.from), this.result.to_percent = this.coords.p_to_real, this.result.to = this.convertToValue(this.coords.p_to_real), this.result.to_pretty = this._prettify(this.result.to), this.options.values.length && (this.result.from_value = this.options.values[this.result.from], this.result.to_value = this.options.values[this.result.to])), this.calcMinMax(), this.calcLabels() } }, calcPointerPercent: function () { this.coords.w_rs ? (this.coords.x_pointer < 0 || isNaN(this.coords.x_pointer) ? this.coords.x_pointer = 0 : this.coords.x_pointer > this.coords.w_rs && (this.coords.x_pointer = this.coords.w_rs), this.coords.p_pointer = this.toFixed(this.coords.x_pointer / this.coords.w_rs * 100)) : this.coords.p_pointer = 0 }, convertToRealPercent: function (t) { return t / (100 - this.coords.p_handle) * 100 }, convertToFakePercent: function (t) { return t / 100 * (100 - this.coords.p_handle) }, getHandleX: function () { var t = 100 - this.coords.p_handle, i = this.toFixed(this.coords.p_pointer - this.coords.p_gap); return i < 0 ? i = 0 : i > t && (i = t), i }, calcHandlePercent: function () { "single" === this.options.type ? this.coords.w_handle = this.$cache.s_single.outerWidth(!1) : this.coords.w_handle = this.$cache.s_from.outerWidth(!1), this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100) }, chooseHandle: function (t) { return "single" === this.options.type ? "single" : t >= this.coords.p_from_real + (this.coords.p_to_real - this.coords.p_from_real) / 2 ? this.options.to_fixed ? "from" : "to" : this.options.from_fixed ? "to" : "from" }, calcMinMax: function () { this.coords.w_rs && (this.labels.p_min = this.labels.w_min / this.coords.w_rs * 100, this.labels.p_max = this.labels.w_max / this.coords.w_rs * 100) }, calcLabels: function () { this.coords.w_rs && !this.options.hide_from_to && ("single" === this.options.type ? (this.labels.w_single = this.$cache.single.outerWidth(!1), this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100, this.labels.p_single_left = this.coords.p_single_fake + this.coords.p_handle / 2 - this.labels.p_single_fake / 2, this.labels.p_single_left = this.checkEdges(this.labels.p_single_left, this.labels.p_single_fake)) : (this.labels.w_from = this.$cache.from.outerWidth(!1), this.labels.p_from_fake = this.labels.w_from / this.coords.w_rs * 100, this.labels.p_from_left = this.coords.p_from_fake + this.coords.p_handle / 2 - this.labels.p_from_fake / 2, this.labels.p_from_left = this.toFixed(this.labels.p_from_left), this.labels.p_from_left = this.checkEdges(this.labels.p_from_left, this.labels.p_from_fake), this.labels.w_to = this.$cache.to.outerWidth(!1), this.labels.p_to_fake = this.labels.w_to / this.coords.w_rs * 100, this.labels.p_to_left = this.coords.p_to_fake + this.coords.p_handle / 2 - this.labels.p_to_fake / 2, this.labels.p_to_left = this.toFixed(this.labels.p_to_left), this.labels.p_to_left = this.checkEdges(this.labels.p_to_left, this.labels.p_to_fake), this.labels.w_single = this.$cache.single.outerWidth(!1), this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100, this.labels.p_single_left = (this.labels.p_from_left + this.labels.p_to_left + this.labels.p_to_fake) / 2 - this.labels.p_single_fake / 2, this.labels.p_single_left = this.toFixed(this.labels.p_single_left), this.labels.p_single_left = this.checkEdges(this.labels.p_single_left, this.labels.p_single_fake))) }, updateScene: function () { this.raf_id && (cancelAnimationFrame(this.raf_id), this.raf_id = null), clearTimeout(this.update_tm), this.update_tm = null, this.options && (this.drawHandles(), this.is_active ? this.raf_id = requestAnimationFrame(this.updateScene.bind(this)) : this.update_tm = setTimeout(this.updateScene.bind(this), 300)) }, drawHandles: function () { this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.coords.w_rs && (this.coords.w_rs !== this.coords.w_rs_old && (this.target = "base", this.is_resize = !0), (this.coords.w_rs !== this.coords.w_rs_old || this.force_redraw) && (this.setMinMax(), this.calc(!0), this.drawLabels(), this.options.grid && (this.calcGridMargin(), this.calcGridLabels()), this.force_redraw = !0, this.coords.w_rs_old = this.coords.w_rs, this.drawShadow()), this.coords.w_rs && (this.dragging || this.force_redraw || this.is_key) && ((this.old_from !== this.result.from || this.old_to !== this.result.to || this.force_redraw || this.is_key) && (this.drawLabels(), this.$cache.bar[0].style.left = this.coords.p_bar_x + "%", this.$cache.bar[0].style.width = this.coords.p_bar_w + "%", "single" === this.options.type ? (this.$cache.s_single[0].style.left = this.coords.p_single_fake + "%", this.$cache.single[0].style.left = this.labels.p_single_left + "%") : (this.$cache.s_from[0].style.left = this.coords.p_from_fake + "%", this.$cache.s_to[0].style.left = this.coords.p_to_fake + "%", (this.old_from !== this.result.from || this.force_redraw) && (this.$cache.from[0].style.left = this.labels.p_from_left + "%"), (this.old_to !== this.result.to || this.force_redraw) && (this.$cache.to[0].style.left = this.labels.p_to_left + "%"), this.$cache.single[0].style.left = this.labels.p_single_left + "%"), this.writeToInput(), this.old_from === this.result.from && this.old_to === this.result.to || this.is_start || (this.$cache.input.trigger("change"), this.$cache.input.trigger("input")), this.old_from = this.result.from, this.old_to = this.result.to, this.is_resize || this.is_update || this.is_start || this.is_finish || this.callOnChange(), (this.is_key || this.is_click) && (this.is_key = !1, this.is_click = !1, this.callOnFinish()), this.is_update = !1, this.is_resize = !1, this.is_finish = !1), this.is_start = !1, this.is_key = !1, this.is_click = !1, this.force_redraw = !1)) }, drawLabels: function () { if (this.options) { var t, i, s, o, e, h = this.options.values.length, r = this.options.p_values; if (!this.options.hide_from_to) if ("single" === this.options.type) h ? (t = this.decorate(r[this.result.from]), this.$cache.single.html(t)) : (o = this._prettify(this.result.from), t = this.decorate(o, this.result.from), this.$cache.single.html(t)), this.calcLabels(), this.labels.p_single_left < this.labels.p_min + 1 ? this.$cache.min[0].style.visibility = "hidden" : this.$cache.min[0].style.visibility = "visible", this.labels.p_single_left + this.labels.p_single_fake > 100 - this.labels.p_max - 1 ? this.$cache.max[0].style.visibility = "hidden" : this.$cache.max[0].style.visibility = "visible"; else { h ? (this.options.decorate_both ? (t = this.decorate(r[this.result.from]), t += this.options.values_separator, t += this.decorate(r[this.result.to])) : t = this.decorate(r[this.result.from] + this.options.values_separator + r[this.result.to]), i = this.decorate(r[this.result.from]), s = this.decorate(r[this.result.to]), this.$cache.single.html(t), this.$cache.from.html(i), this.$cache.to.html(s)) : (o = this._prettify(this.result.from), e = this._prettify(this.result.to), this.options.decorate_both ? (t = this.decorate(o, this.result.from), t += this.options.values_separator, t += this.decorate(e, this.result.to)) : t = this.decorate(o + this.options.values_separator + e, this.result.to), i = this.decorate(o, this.result.from), s = this.decorate(e, this.result.to), this.$cache.single.html(t), this.$cache.from.html(i), this.$cache.to.html(s)), this.calcLabels(); var n = Math.min(this.labels.p_single_left, this.labels.p_from_left), a = this.labels.p_single_left + this.labels.p_single_fake, c = this.labels.p_to_left + this.labels.p_to_fake, l = Math.max(a, c); this.labels.p_from_left + this.labels.p_from_fake >= this.labels.p_to_left ? (this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.single[0].style.visibility = "visible", this.result.from === this.result.to ? ("from" === this.target ? this.$cache.from[0].style.visibility = "visible" : "to" === this.target ? this.$cache.to[0].style.visibility = "visible" : this.target || (this.$cache.from[0].style.visibility = "visible"), this.$cache.single[0].style.visibility = "hidden", l = c) : (this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.single[0].style.visibility = "visible", l = Math.max(a, c))) : (this.$cache.from[0].style.visibility = "visible", this.$cache.to[0].style.visibility = "visible", this.$cache.single[0].style.visibility = "hidden"), n < this.labels.p_min + 1 ? this.$cache.min[0].style.visibility = "hidden" : this.$cache.min[0].style.visibility = "visible", l > 100 - this.labels.p_max - 1 ? this.$cache.max[0].style.visibility = "hidden" : this.$cache.max[0].style.visibility = "visible" } } }, drawShadow: function () { var t, i, s, o, e = this.options, h = this.$cache, r = "number" == typeof e.from_min && !isNaN(e.from_min), n = "number" == typeof e.from_max && !isNaN(e.from_max), a = "number" == typeof e.to_min && !isNaN(e.to_min), c = "number" == typeof e.to_max && !isNaN(e.to_max); "single" === e.type ? e.from_shadow && (r || n) ? (t = this.convertToPercent(r ? e.from_min : e.min), i = this.convertToPercent(n ? e.from_max : e.max) - t, t = this.toFixed(t - this.coords.p_handle / 100 * t), i = this.toFixed(i - this.coords.p_handle / 100 * i), t += this.coords.p_handle / 2, h.shad_single[0].style.display = "block", h.shad_single[0].style.left = t + "%", h.shad_single[0].style.width = i + "%") : h.shad_single[0].style.display = "none" : (e.from_shadow && (r || n) ? (t = this.convertToPercent(r ? e.from_min : e.min), i = this.convertToPercent(n ? e.from_max : e.max) - t, t = this.toFixed(t - this.coords.p_handle / 100 * t), i = this.toFixed(i - this.coords.p_handle / 100 * i), t += this.coords.p_handle / 2, h.shad_from[0].style.display = "block", h.shad_from[0].style.left = t + "%", h.shad_from[0].style.width = i + "%") : h.shad_from[0].style.display = "none", e.to_shadow && (a || c) ? (s = this.convertToPercent(a ? e.to_min : e.min), o = this.convertToPercent(c ? e.to_max : e.max) - s, s = this.toFixed(s - this.coords.p_handle / 100 * s), o = this.toFixed(o - this.coords.p_handle / 100 * o), s += this.coords.p_handle / 2, h.shad_to[0].style.display = "block", h.shad_to[0].style.left = s + "%", h.shad_to[0].style.width = o + "%") : h.shad_to[0].style.display = "none") }, writeToInput: function () { "single" === this.options.type ? (this.options.values.length ? this.$cache.input.prop("value", this.result.from_value) : this.$cache.input.prop("value", this.result.from), this.$cache.input.data("from", this.result.from)) : (this.options.values.length ? this.$cache.input.prop("value", this.result.from_value + this.options.input_values_separator + this.result.to_value) : this.$cache.input.prop("value", this.result.from + this.options.input_values_separator + this.result.to), this.$cache.input.data("from", this.result.from), this.$cache.input.data("to", this.result.to)) }, callOnStart: function () { this.writeToInput(), this.options.onStart && "function" == typeof this.options.onStart && (this.options.scope ? this.options.onStart.call(this.options.scope, this.result) : this.options.onStart(this.result)) }, callOnChange: function () { this.writeToInput(), this.options.onChange && "function" == typeof this.options.onChange && (this.options.scope ? this.options.onChange.call(this.options.scope, this.result) : this.options.onChange(this.result)) }, callOnFinish: function () { this.writeToInput(), this.options.onFinish && "function" == typeof this.options.onFinish && (this.options.scope ? this.options.onFinish.call(this.options.scope, this.result) : this.options.onFinish(this.result)) }, callOnUpdate: function () { this.writeToInput(), this.options.onUpdate && "function" == typeof this.options.onUpdate && (this.options.scope ? this.options.onUpdate.call(this.options.scope, this.result) : this.options.onUpdate(this.result)) }, toggleInput: function () { this.$cache.input.toggleClass("irs-hidden-input"), this.has_tab_index ? this.$cache.input.prop("tabindex", -1) : this.$cache.input.removeProp("tabindex"), this.has_tab_index = !this.has_tab_index }, convertToPercent: function (t, i) { var s, o = this.options.max - this.options.min, e = o / 100; return o ? (s = (i ? t : t - this.options.min) / e, this.toFixed(s)) : (this.no_diapason = !0, 0) }, convertToValue: function (t) { var i, s, o = this.options.min, e = this.options.max, h = o.toString().split(".")[1], r = e.toString().split(".")[1], n = 0, a = 0; if (0 === t) return this.options.min; if (100 === t) return this.options.max; h && (n = i = h.length), r && (n = s = r.length), i && s && (n = i >= s ? i : s), o < 0 && (o = +(o + (a = Math.abs(o))).toFixed(n), e = +(e + a).toFixed(n)); var c, l = (e - o) / 100 * t + o, _ = this.options.step.toString().split(".")[1]; return _ ? l = +l.toFixed(_.length) : (l /= this.options.step, l = +(l *= this.options.step).toFixed(0)), a && (l -= a), (c = _ ? +l.toFixed(_.length) : this.toFixed(l)) < this.options.min ? c = this.options.min : c > this.options.max && (c = this.options.max), c }, calcWithStep: function (t) { var i = Math.round(t / this.coords.p_step) * this.coords.p_step; return i > 100 && (i = 100), 100 === t && (i = 100), this.toFixed(i) }, checkMinInterval: function (t, i, s) { var o, e, h = this.options; return h.min_interval ? (o = this.convertToValue(t), e = this.convertToValue(i), "from" === s ? e - o < h.min_interval && (o = e - h.min_interval) : o - e < h.min_interval && (o = e + h.min_interval), this.convertToPercent(o)) : t }, checkMaxInterval: function (t, i, s) { var o, e, h = this.options; return h.max_interval ? (o = this.convertToValue(t), e = this.convertToValue(i), "from" === s ? e - o > h.max_interval && (o = e - h.max_interval) : o - e > h.max_interval && (o = e + h.max_interval), this.convertToPercent(o)) : t }, checkDiapason: function (t, i, s) { var o = this.convertToValue(t), e = this.options; return "number" != typeof i && (i = e.min), "number" != typeof s && (s = e.max), o < i && (o = i), o > s && (o = s), this.convertToPercent(o) }, toFixed: function (t) { return +(t = t.toFixed(20)) }, _prettify: function (t) { return this.options.prettify_enabled ? this.options.prettify && "function" == typeof this.options.prettify ? this.options.prettify(t) : this.prettify(t) : t }, prettify: function (t) { return t.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + this.options.prettify_separator) }, checkEdges: function (t, i) { return this.options.force_edges ? (t < 0 ? t = 0 : t > 100 - i && (t = 100 - i), this.toFixed(t)) : this.toFixed(t) }, validate: function () { var t, i, s = this.options, o = this.result, e = s.values, h = e.length; if ("string" == typeof s.min && (s.min = +s.min), "string" == typeof s.max && (s.max = +s.max), "string" == typeof s.from && (s.from = +s.from), "string" == typeof s.to && (s.to = +s.to), "string" == typeof s.step && (s.step = +s.step), "string" == typeof s.from_min && (s.from_min = +s.from_min), "string" == typeof s.from_max && (s.from_max = +s.from_max), "string" == typeof s.to_min && (s.to_min = +s.to_min), "string" == typeof s.to_max && (s.to_max = +s.to_max), "string" == typeof s.grid_num && (s.grid_num = +s.grid_num), s.max < s.min && (s.max = s.min), h) for (s.p_values = [], s.min = 0, s.max = h - 1, s.step = 1, s.grid_num = s.max, s.grid_snap = !0, i = 0; i < h; i++)t = +e[i], isNaN(t) ? t = e[i] : (e[i] = t, t = this._prettify(t)), s.p_values.push(t); ("number" != typeof s.from || isNaN(s.from)) && (s.from = s.min), ("number" != typeof s.to || isNaN(s.to)) && (s.to = s.max), "single" === s.type ? (s.from < s.min && (s.from = s.min), s.from > s.max && (s.from = s.max)) : (s.from < s.min && (s.from = s.min), s.from > s.max && (s.from = s.max), s.to < s.min && (s.to = s.min), s.to > s.max && (s.to = s.max), this.update_check.from && (this.update_check.from !== s.from && s.from > s.to && (s.from = s.to), this.update_check.to !== s.to && s.to < s.from && (s.to = s.from)), s.from > s.to && (s.from = s.to), s.to < s.from && (s.to = s.from)), ("number" != typeof s.step || isNaN(s.step) || !s.step || s.step < 0) && (s.step = 1), "number" == typeof s.from_min && s.from < s.from_min && (s.from = s.from_min), "number" == typeof s.from_max && s.from > s.from_max && (s.from = s.from_max), "number" == typeof s.to_min && s.to < s.to_min && (s.to = s.to_min), "number" == typeof s.to_max && s.from > s.to_max && (s.to = s.to_max), o && (o.min !== s.min && (o.min = s.min), o.max !== s.max && (o.max = s.max), (o.from < o.min || o.from > o.max) && (o.from = s.from), (o.to < o.min || o.to > o.max) && (o.to = s.to)), ("number" != typeof s.min_interval || isNaN(s.min_interval) || !s.min_interval || s.min_interval < 0) && (s.min_interval = 0), ("number" != typeof s.max_interval || isNaN(s.max_interval) || !s.max_interval || s.max_interval < 0) && (s.max_interval = 0), s.min_interval && s.min_interval > s.max - s.min && (s.min_interval = s.max - s.min), s.max_interval && s.max_interval > s.max - s.min && (s.max_interval = s.max - s.min) }, decorate: function (t, i) { var s = "", o = this.options; return o.prefix && (s += o.prefix), s += t, o.max_postfix && (o.values.length && t === o.p_values[o.max] ? (s += o.max_postfix, o.postfix && (s += " ")) : i === o.max && (s += o.max_postfix, o.postfix && (s += " "))), o.postfix && (s += o.postfix), s }, updateFrom: function () { this.result.from = this.options.from, this.result.from_percent = this.convertToPercent(this.result.from), this.result.from_pretty = this._prettify(this.result.from), this.options.values && (this.result.from_value = this.options.values[this.result.from]) }, updateTo: function () { this.result.to = this.options.to, this.result.to_percent = this.convertToPercent(this.result.to), this.result.to_pretty = this._prettify(this.result.to), this.options.values && (this.result.to_value = this.options.values[this.result.to]) }, updateResult: function () { this.result.min = this.options.min, this.result.max = this.options.max, this.updateFrom(), this.updateTo() }, appendGrid: function () { if (this.options.grid) { var t, i, s, o, e, h = this.options, r = h.max - h.min, n = h.grid_num, a = 0, c = 0, l = 4, _ = ""; for (this.calcGridMargin(), h.grid_snap ? r > 50 ? (n = 50 / h.step, a = this.toFixed(h.step / .5)) : (n = r / h.step, a = this.toFixed(h.step / (r / 100))) : a = this.toFixed(100 / n), n > 4 && (l = 3), n > 7 && (l = 2), n > 14 && (l = 1), n > 28 && (l = 0), t = 0; t < n + 1; t++) { for (s = l, (c = this.toFixed(a * t)) > 100 && (c = 100), this.coords.big[t] = c, o = (c - a * (t - 1)) / (s + 1), i = 1; i <= s && 0 !== c; i++)_ += '<span class="irs-grid-pol small" style="left: ' + this.toFixed(c - o * i) + '%"></span>'; _ += '<span class="irs-grid-pol" style="left: ' + c + '%"></span>', e = this.convertToValue(c), _ += '<span class="irs-grid-text js-grid-text-' + t + '" style="left: ' + c + '%">' + (e = h.values.length ? h.p_values[e] : this._prettify(e)) + "</span>" } this.coords.big_num = Math.ceil(n + 1), this.$cache.cont.addClass("irs-with-grid"), this.$cache.grid.html(_), this.cacheGridLabels() } }, cacheGridLabels: function () { var t, i, s = this.coords.big_num; for (i = 0; i < s; i++)t = this.$cache.grid.find(".js-grid-text-" + i), this.$cache.grid_labels.push(t); this.calcGridLabels() }, calcGridLabels: function () { var t, i, s = [], o = [], e = this.coords.big_num; for (t = 0; t < e; t++)this.coords.big_w[t] = this.$cache.grid_labels[t].outerWidth(!1), this.coords.big_p[t] = this.toFixed(this.coords.big_w[t] / this.coords.w_rs * 100), this.coords.big_x[t] = this.toFixed(this.coords.big_p[t] / 2), s[t] = this.toFixed(this.coords.big[t] - this.coords.big_x[t]), o[t] = this.toFixed(s[t] + this.coords.big_p[t]); for (this.options.force_edges && (s[0] < -this.coords.grid_gap && (s[0] = -this.coords.grid_gap, o[0] = this.toFixed(s[0] + this.coords.big_p[0]), this.coords.big_x[0] = this.coords.grid_gap), o[e - 1] > 100 + this.coords.grid_gap && (o[e - 1] = 100 + this.coords.grid_gap, s[e - 1] = this.toFixed(o[e - 1] - this.coords.big_p[e - 1]), this.coords.big_x[e - 1] = this.toFixed(this.coords.big_p[e - 1] - this.coords.grid_gap))), this.calcGridCollision(2, s, o), this.calcGridCollision(4, s, o), t = 0; t < e; t++)i = this.$cache.grid_labels[t][0], this.coords.big_x[t] !== Number.POSITIVE_INFINITY && (i.style.marginLeft = -this.coords.big_x[t] + "%") }, calcGridCollision: function (t, i, s) { var o, e, h, r = this.coords.big_num; for (o = 0; o < r && !((e = o + t / 2) >= r); o += t)h = this.$cache.grid_labels[e][0], s[o] <= i[e] ? h.style.visibility = "visible" : h.style.visibility = "hidden" }, calcGridMargin: function () { this.options.grid_margin && (this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.coords.w_rs && ("single" === this.options.type ? this.coords.w_handle = this.$cache.s_single.outerWidth(!1) : this.coords.w_handle = this.$cache.s_from.outerWidth(!1), this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100), this.coords.grid_gap = this.toFixed(this.coords.p_handle / 2 - .1), this.$cache.grid[0].style.width = this.toFixed(100 - this.coords.p_handle) + "%", this.$cache.grid[0].style.left = this.coords.grid_gap + "%")) }, update: function (i) { this.input && (this.is_update = !0, this.options.from = this.result.from, this.options.to = this.result.to, this.update_check.from = this.result.from, this.update_check.to = this.result.to, this.options = t.extend(this.options, i), this.validate(), this.updateResult(i), this.toggleInput(), this.remove(), this.init(!0)) }, reset: function () { this.input && (this.updateResult(), this.update()) }, destroy: function () { this.input && (this.toggleInput(), this.$cache.input.prop("readonly", !1), t.data(this.input, "ionRangeSlider", null), this.remove(), this.input = null, this.options = null) } }, t.fn.ionRangeSlider = function (i) { return this.each(function () { t.data(this, "ionRangeSlider") || t.data(this, "ionRangeSlider", new c(this, i, n++)) }) }, function () { for (var t = 0, i = ["ms", "moz", "webkit", "o"], o = 0; o < i.length && !s.requestAnimationFrame; ++o)s.requestAnimationFrame = s[i[o] + "RequestAnimationFrame"], s.cancelAnimationFrame = s[i[o] + "CancelAnimationFrame"] || s[i[o] + "CancelRequestAnimationFrame"]; s.requestAnimationFrame || (s.requestAnimationFrame = function (i, o) { var e = (new Date).getTime(), h = Math.max(0, 16 - (e - t)), r = s.setTimeout(function () { i(e + h) }, h); return t = e + h, r }), s.cancelAnimationFrame || (s.cancelAnimationFrame = function (t) { clearTimeout(t) }) }() });

/*
* Project: Bootstrap Notify = v3.1.5
* Description: Turns standard Bootstrap alerts into "Growl-like" notifications.
* Author: Mouse0270 aka Robert McIntosh
* License: MIT License
* Website: https://github.com/mouse0270/bootstrap-growl
*/!function (t) { "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : jQuery) }(function (t) { function s(s) { var e = !1; return t('[data-notify="container"]').each(function (i, n) { var a = t(n), o = a.find('[data-notify="title"]').text().trim(), r = a.find('[data-notify="message"]').html().trim(), l = o === t("<div>" + s.settings.content.title + "</div>").html().trim(), d = r === t("<div>" + s.settings.content.message + "</div>").html().trim(), g = a.hasClass("alert-" + s.settings.type); return l && d && g && (e = !0), !e }), e } function e(e, n, a) { var o = { content: { message: "object" == typeof n ? n.message : n, title: n.title ? n.title : "", icon: n.icon ? n.icon : "", url: n.url ? n.url : "#", target: n.target ? n.target : "-" } }; a = t.extend(!0, {}, o, a), this.settings = t.extend(!0, {}, i, a), this._defaults = i, "-" === this.settings.content.target && (this.settings.content.target = this.settings.url_target), this.animations = { start: "webkitAnimationStart oanimationstart MSAnimationStart animationstart", end: "webkitAnimationEnd oanimationend MSAnimationEnd animationend" }, "number" == typeof this.settings.offset && (this.settings.offset = { x: this.settings.offset, y: this.settings.offset }), (this.settings.allow_duplicates || !this.settings.allow_duplicates && !s(this)) && this.init() } var i = { element: "body", position: null, type: "info", allow_dismiss: !0, allow_duplicates: !0, newest_on_top: !1, showProgressbar: !1, placement: { from: "top", align: "right" }, offset: 20, spacing: 10, z_index: 1031, delay: 5e3, timer: 1e3, url_target: "_blank", mouse_over: null, animate: { enter: "animated fadeInDown", exit: "animated fadeOutUp" }, onShow: null, onShown: null, onClose: null, onClosed: null, icon_type: "class", template: '<div data-notify="container" class="col-xs-11 col-sm-4 alert alert-{0}" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss">&times;</button><span data-notify="icon"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>' }; String.format = function () { for (var t = arguments[0], s = 1; s < arguments.length; s++)t = t.replace(RegExp("\\{" + (s - 1) + "\\}", "gm"), arguments[s]); return t }, t.extend(e.prototype, { init: function () { var t = this; this.buildNotify(), this.settings.content.icon && this.setIcon(), "#" != this.settings.content.url && this.styleURL(), this.styleDismiss(), this.placement(), this.bind(), this.notify = { $ele: this.$ele, update: function (s, e) { var i = {}; "string" == typeof s ? i[s] = e : i = s; for (var n in i) switch (n) { case "type": this.$ele.removeClass("alert-" + t.settings.type), this.$ele.find('[data-notify="progressbar"] > .progress-bar').removeClass("progress-bar-" + t.settings.type), t.settings.type = i[n], this.$ele.addClass("alert-" + i[n]).find('[data-notify="progressbar"] > .progress-bar').addClass("progress-bar-" + i[n]); break; case "icon": var a = this.$ele.find('[data-notify="icon"]'); "class" === t.settings.icon_type.toLowerCase() ? a.removeClass(t.settings.content.icon).addClass(i[n]) : (a.is("img") || a.find("img"), a.attr("src", i[n])); break; case "progress": var o = t.settings.delay - t.settings.delay * (i[n] / 100); this.$ele.data("notify-delay", o), this.$ele.find('[data-notify="progressbar"] > div').attr("aria-valuenow", i[n]).css("width", i[n] + "%"); break; case "url": this.$ele.find('[data-notify="url"]').attr("href", i[n]); break; case "target": this.$ele.find('[data-notify="url"]').attr("target", i[n]); break; default: this.$ele.find('[data-notify="' + n + '"]').html(i[n]) }var r = this.$ele.outerHeight() + parseInt(t.settings.spacing) + parseInt(t.settings.offset.y); t.reposition(r) }, close: function () { t.close() } } }, buildNotify: function () { var s = this.settings.content; this.$ele = t(String.format(this.settings.template, this.settings.type, s.title, s.message, s.url, s.target)), this.$ele.attr("data-notify-position", this.settings.placement.from + "-" + this.settings.placement.align), this.settings.allow_dismiss || this.$ele.find('[data-notify="dismiss"]').css("display", "none"), (this.settings.delay <= 0 && !this.settings.showProgressbar || !this.settings.showProgressbar) && this.$ele.find('[data-notify="progressbar"]').remove() }, setIcon: function () { "class" === this.settings.icon_type.toLowerCase() ? this.$ele.find('[data-notify="icon"]').addClass(this.settings.content.icon) : this.$ele.find('[data-notify="icon"]').is("img") ? this.$ele.find('[data-notify="icon"]').attr("src", this.settings.content.icon) : this.$ele.find('[data-notify="icon"]').append('<img src="' + this.settings.content.icon + '" alt="Notify Icon" />') }, styleDismiss: function () { this.$ele.find('[data-notify="dismiss"]').css({ position: "absolute", right: "10px", top: "5px", zIndex: this.settings.z_index + 2 }) }, styleURL: function () { this.$ele.find('[data-notify="url"]').css({ backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)", height: "100%", left: 0, position: "absolute", top: 0, width: "100%", zIndex: this.settings.z_index + 1 }) }, placement: function () { var s = this, e = this.settings.offset.y, i = { display: "inline-block", margin: "0px auto", position: this.settings.position ? this.settings.position : "body" === this.settings.element ? "fixed" : "absolute", transition: "all .5s ease-in-out", zIndex: this.settings.z_index }, n = !1, a = this.settings; switch (t('[data-notify-position="' + this.settings.placement.from + "-" + this.settings.placement.align + '"]:not([data-closing="true"])').each(function () { e = Math.max(e, parseInt(t(this).css(a.placement.from)) + parseInt(t(this).outerHeight()) + parseInt(a.spacing)) }), this.settings.newest_on_top === !0 && (e = this.settings.offset.y), i[this.settings.placement.from] = e + "px", this.settings.placement.align) { case "left": case "right": i[this.settings.placement.align] = this.settings.offset.x + "px"; break; case "center": i.left = 0, i.right = 0 }this.$ele.css(i).addClass(this.settings.animate.enter), t.each(Array("webkit-", "moz-", "o-", "ms-", ""), function (t, e) { s.$ele[0].style[e + "AnimationIterationCount"] = 1 }), t(this.settings.element).append(this.$ele), this.settings.newest_on_top === !0 && (e = parseInt(e) + parseInt(this.settings.spacing) + this.$ele.outerHeight(), this.reposition(e)), t.isFunction(s.settings.onShow) && s.settings.onShow.call(this.$ele), this.$ele.one(this.animations.start, function () { n = !0 }).one(this.animations.end, function () { s.$ele.removeClass(s.settings.animate.enter), t.isFunction(s.settings.onShown) && s.settings.onShown.call(this) }), setTimeout(function () { n || t.isFunction(s.settings.onShown) && s.settings.onShown.call(this) }, 600) }, bind: function () { var s = this; if (this.$ele.find('[data-notify="dismiss"]').on("click", function () { s.close() }), this.$ele.mouseover(function () { t(this).data("data-hover", "true") }).mouseout(function () { t(this).data("data-hover", "false") }), this.$ele.data("data-hover", "false"), this.settings.delay > 0) { s.$ele.data("notify-delay", s.settings.delay); var e = setInterval(function () { var t = parseInt(s.$ele.data("notify-delay")) - s.settings.timer; if ("false" === s.$ele.data("data-hover") && "pause" === s.settings.mouse_over || "pause" != s.settings.mouse_over) { var i = (s.settings.delay - t) / s.settings.delay * 100; s.$ele.data("notify-delay", t), s.$ele.find('[data-notify="progressbar"] > div').attr("aria-valuenow", i).css("width", i + "%") } t <= -s.settings.timer && (clearInterval(e), s.close()) }, s.settings.timer) } }, close: function () { var s = this, e = parseInt(this.$ele.css(this.settings.placement.from)), i = !1; this.$ele.attr("data-closing", "true").addClass(this.settings.animate.exit), s.reposition(e), t.isFunction(s.settings.onClose) && s.settings.onClose.call(this.$ele), this.$ele.one(this.animations.start, function () { i = !0 }).one(this.animations.end, function () { t(this).remove(), t.isFunction(s.settings.onClosed) && s.settings.onClosed.call(this) }), setTimeout(function () { i || (s.$ele.remove(), s.settings.onClosed && s.settings.onClosed(s.$ele)) }, 600) }, reposition: function (s) { var e = this, i = '[data-notify-position="' + this.settings.placement.from + "-" + this.settings.placement.align + '"]:not([data-closing="true"])', n = this.$ele.nextAll(i); this.settings.newest_on_top === !0 && (n = this.$ele.prevAll(i)), n.each(function () { t(this).css(e.settings.placement.from, s), s = parseInt(s) + parseInt(e.settings.spacing) + t(this).outerHeight() }) } }), t.notify = function (t, s) { var i = new e(this, t, s); return i.notify }, t.notifyDefaults = function (s) { return i = t.extend(!0, {}, i, s) }, t.notifyClose = function (s) { "warning" === s && (s = "danger"), "undefined" == typeof s || "all" === s ? t("[data-notify]").find('[data-notify="dismiss"]').trigger("click") : "success" === s || "info" === s || "warning" === s || "danger" === s ? t(".alert-" + s + "[data-notify]").find('[data-notify="dismiss"]').trigger("click") : s ? t(s + "[data-notify]").find('[data-notify="dismiss"]').trigger("click") : t('[data-notify-position="' + s + '"]').find('[data-notify="dismiss"]').trigger("click") }, t.notifyCloseExcept = function (s) { "warning" === s && (s = "danger"), "success" === s || "info" === s || "warning" === s || "danger" === s ? t("[data-notify]").not(".alert-" + s).find('[data-notify="dismiss"]').trigger("click") : t("[data-notify]").not(s).find('[data-notify="dismiss"]').trigger("click") } });

/*!
 * jquery-confirm v3.3.0 (http://craftpip.github.io/jquery-confirm/)
 * Author: Boniface Pereira
 * Website: www.craftpip.com
 * Contact: hey@craftpip.com
 *
 * Copyright 2013-2017 jquery-confirm
 * Licensed under MIT (https://github.com/craftpip/jquery-confirm/blob/master/LICENSE)
 */
if ("undefined" == typeof jQuery) throw new Error("jquery-confirm requires jQuery"); var jconfirm, Jconfirm; !function (t, i) { "use strict"; t.fn.confirm = function (i, n) { return void 0 === i && (i = {}), "string" == typeof i && (i = { content: i, title: n || !1 }), t(this).each(function () { var n = t(this); n.attr("jc-attached") ? console.warn("jConfirm has already been attached to this element ", n[0]) : (n.on("click", function (o) { o.preventDefault(); var e = t.extend({}, i); if (n.attr("data-title") && (e.title = n.attr("data-title")), n.attr("data-content") && (e.content = n.attr("data-content")), void 0 === e.buttons && (e.buttons = {}), e.$target = n, n.attr("href") && 0 == Object.keys(e.buttons).length) { var s = t.extend(!0, {}, jconfirm.pluginDefaults.defaultButtons, (jconfirm.defaults || {}).defaultButtons || {}), a = Object.keys(s)[0]; e.buttons = s, e.buttons[a].action = function () { location.href = n.attr("href") } } e.closeIcon = !1; t.confirm(e) }), n.attr("jc-attached", !0)) }), t(this) }, t.confirm = function (i, n) { if (void 0 === i && (i = {}), "string" == typeof i && (i = { content: i, title: n || !1 }), "object" != typeof i.buttons && (i.buttons = {}), 0 == Object.keys(i.buttons).length) { var o = t.extend(!0, {}, jconfirm.pluginDefaults.defaultButtons, (jconfirm.defaults || {}).defaultButtons || {}); i.buttons = o } return jconfirm(i) }, t.alert = function (i, n) { if (void 0 === i && (i = {}), "string" == typeof i && (i = { content: i, title: n || !1 }), "object" != typeof i.buttons && (i.buttons = {}), 0 == Object.keys(i.buttons).length) { var o = t.extend(!0, {}, jconfirm.pluginDefaults.defaultButtons, (jconfirm.defaults || {}).defaultButtons || {}), e = Object.keys(o)[0]; i.buttons[e] = o[e] } return jconfirm(i) }, t.dialog = function (t, i) { return void 0 === t && (t = {}), "string" == typeof t && (t = { content: t, title: i || !1, closeIcon: function () { } }), t.buttons = {}, void 0 === t.closeIcon && (t.closeIcon = function () { }), t.confirmKeys = [13], jconfirm(t) }, jconfirm = function (i) { void 0 === i && (i = {}); var n = t.extend(!0, {}, jconfirm.pluginDefaults); jconfirm.defaults && (n = t.extend(!0, n, jconfirm.defaults)), n = t.extend(!0, {}, n, i); var o = new Jconfirm(n); return jconfirm.instances.push(o), o }, (Jconfirm = function (i) { t.extend(this, i), this._init() }).prototype = { _init: function () { var i = this; jconfirm.instances.length || (jconfirm.lastFocused = t("body").find(":focus")), this._id = Math.round(99999 * Math.random()), this.contentParsed = t(document.createElement("div")), this.lazyOpen || setTimeout(function () { i.open() }, 0) }, _buildHTML: function () { var i = this; this._parseAnimation(this.animation, "o"), this._parseAnimation(this.closeAnimation, "c"), this._parseBgDismissAnimation(this.backgroundDismissAnimation), this._parseColumnClass(this.columnClass), this._parseTheme(this.theme), this._parseType(this.type); var n = t(this.template); n.find(".jconfirm-box").addClass(this.animationParsed).addClass(this.backgroundDismissAnimationParsed).addClass(this.typeParsed), this.typeAnimated && n.find(".jconfirm-box").addClass("jconfirm-type-animated"), this.useBootstrap ? (n.find(".jc-bs3-row").addClass(this.bootstrapClasses.row), n.find(".jc-bs3-row").addClass("justify-content-md-center justify-content-sm-center justify-content-xs-center justify-content-lg-center"), n.find(".jconfirm-box-container").addClass(this.columnClassParsed), this.containerFluid ? n.find(".jc-bs3-container").addClass(this.bootstrapClasses.containerFluid) : n.find(".jc-bs3-container").addClass(this.bootstrapClasses.container)) : n.find(".jconfirm-box").css("width", this.boxWidth), this.titleClass && n.find(".jconfirm-title-c").addClass(this.titleClass), n.addClass(this.themeParsed); var o = "jconfirm-box" + this._id; n.find(".jconfirm-box").attr("aria-labelledby", o).attr("tabindex", -1), n.find(".jconfirm-content").attr("id", o), null !== this.bgOpacity && n.find(".jconfirm-bg").css("opacity", this.bgOpacity), this.rtl && n.addClass("jconfirm-rtl"), this.$el = n.appendTo(this.container), this.$jconfirmBoxContainer = this.$el.find(".jconfirm-box-container"), this.$jconfirmBox = this.$body = this.$el.find(".jconfirm-box"), this.$jconfirmBg = this.$el.find(".jconfirm-bg"), this.$title = this.$el.find(".jconfirm-title"), this.$titleContainer = this.$el.find(".jconfirm-title-c"), this.$content = this.$el.find("div.jconfirm-content"), this.$contentPane = this.$el.find(".jconfirm-content-pane"), this.$icon = this.$el.find(".jconfirm-icon-c"), this.$closeIcon = this.$el.find(".jconfirm-closeIcon"), this.$holder = this.$el.find(".jconfirm-holder"), this.$btnc = this.$el.find(".jconfirm-buttons"), this.$scrollPane = this.$el.find(".jconfirm-scrollpane"), i.setStartingPoint(), this._contentReady = t.Deferred(), this._modalReady = t.Deferred(), this.$holder.css({ "padding-top": this.offsetTop, "padding-bottom": this.offsetBottom }), this.setTitle(), this.setIcon(), this._setButtons(), this._parseContent(), this.initDraggable(), this.isAjax && this.showLoading(!1), t.when(this._contentReady, this._modalReady).then(function () { i.isAjaxLoading ? setTimeout(function () { i.isAjaxLoading = !1, i.setContent(), i.setTitle(), i.setIcon(), setTimeout(function () { i.hideLoading(!1), i._updateContentMaxHeight() }, 100), "function" == typeof i.onContentReady && i.onContentReady() }, 50) : (i._updateContentMaxHeight(), i.setTitle(), i.setIcon(), "function" == typeof i.onContentReady && i.onContentReady()), i.autoClose && i._startCountDown() }), this._watchContent(), "none" === this.animation && (this.animationSpeed = 1, this.animationBounce = 1), this.$body.css(this._getCSS(this.animationSpeed, this.animationBounce)), this.$contentPane.css(this._getCSS(this.animationSpeed, 1)), this.$jconfirmBg.css(this._getCSS(this.animationSpeed, 1)), this.$jconfirmBoxContainer.css(this._getCSS(this.animationSpeed, 1)) }, _typePrefix: "jconfirm-type-", typeParsed: "", _parseType: function (t) { this.typeParsed = this._typePrefix + t }, setType: function (t) { var i = this.typeParsed; this._parseType(t), this.$jconfirmBox.removeClass(i).addClass(this.typeParsed) }, themeParsed: "", _themePrefix: "jconfirm-", setTheme: function (t) { var i = this.theme; this.theme = t || this.theme, this._parseTheme(this.theme), i && this.$el.removeClass(i), this.$el.addClass(this.themeParsed), this.theme = t }, _parseTheme: function (i) { var n = this; i = i.split(","), t.each(i, function (o, e) { -1 === e.indexOf(n._themePrefix) && (i[o] = n._themePrefix + t.trim(e)) }), this.themeParsed = i.join(" ").toLowerCase() }, backgroundDismissAnimationParsed: "", _bgDismissPrefix: "jconfirm-hilight-", _parseBgDismissAnimation: function (i) { var n = i.split(","), o = this; t.each(n, function (i, e) { -1 === e.indexOf(o._bgDismissPrefix) && (n[i] = o._bgDismissPrefix + t.trim(e)) }), this.backgroundDismissAnimationParsed = n.join(" ").toLowerCase() }, animationParsed: "", closeAnimationParsed: "", _animationPrefix: "jconfirm-animation-", setAnimation: function (t) { this.animation = t || this.animation, this._parseAnimation(this.animation, "o") }, _parseAnimation: function (i, n) { n = n || "o"; var o = i.split(","), e = this; t.each(o, function (i, n) { -1 === n.indexOf(e._animationPrefix) && (o[i] = e._animationPrefix + t.trim(n)) }); var s = o.join(" ").toLowerCase(); return "o" === n ? this.animationParsed = s : this.closeAnimationParsed = s, s }, setCloseAnimation: function (t) { this.closeAnimation = t || this.closeAnimation, this._parseAnimation(this.closeAnimation, "c") }, setAnimationSpeed: function (t) { this.animationSpeed = t || this.animationSpeed }, columnClassParsed: "", setColumnClass: function (t) { this.useBootstrap ? (this.columnClass = t || this.columnClass, this._parseColumnClass(this.columnClass), this.$jconfirmBoxContainer.addClass(this.columnClassParsed)) : console.warn("cannot set columnClass, useBootstrap is set to false") }, _updateContentMaxHeight: function () { var n = t(i).height() - (this.$jconfirmBox.outerHeight() - this.$contentPane.outerHeight()) - (this.offsetTop + this.offsetBottom); this.$contentPane.css({ "max-height": n + "px" }) }, setBoxWidth: function (t) { this.useBootstrap ? console.warn("cannot set boxWidth, useBootstrap is set to true") : (this.boxWidth = t, this.$jconfirmBox.css("width", t)) }, _parseColumnClass: function (t) { var i; switch (t = t.toLowerCase()) { case "xl": case "xlarge": i = "col-md-12"; break; case "l": case "large": i = "col-md-8 col-md-offset-2"; break; case "m": case "medium": i = "col-md-6 col-md-offset-3"; break; case "s": case "small": i = "col-md-4 col-md-offset-4"; break; case "xs": case "xsmall": i = "col-md-2 col-md-offset-5"; break; default: i = t }this.columnClassParsed = i }, initDraggable: function () { var n = this, o = this.$titleContainer; this.resetDrag(), this.draggable && (o.on("mousedown", function (t) { o.addClass("jconfirm-hand"), n.mouseX = t.clientX, n.mouseY = t.clientY, n.isDrag = !0 }), t(i).on("mousemove." + this._id, function (t) { n.isDrag && (n.movingX = t.clientX - n.mouseX + n.initialX, n.movingY = t.clientY - n.mouseY + n.initialY, n.setDrag()) }), t(i).on("mouseup." + this._id, function () { o.removeClass("jconfirm-hand"), n.isDrag && (n.isDrag = !1, n.initialX = n.movingX, n.initialY = n.movingY) })) }, resetDrag: function () { this.isDrag = !1, this.initialX = 0, this.initialY = 0, this.movingX = 0, this.movingY = 0, this.mouseX = 0, this.mouseY = 0, this.$jconfirmBoxContainer.css("transform", "translate(0px, 0px)") }, setDrag: function () { if (this.draggable) { this.alignMiddle = !1; var n = this.$jconfirmBox.outerWidth(), o = this.$jconfirmBox.outerHeight(), e = t(i).width(), s = t(i).height(), a = this; if (a.movingX % 1 == 0 || a.movingY % 1 == 0) { if (a.dragWindowBorder) { var c = e / 2 - n / 2, r = s / 2 - o / 2; r -= a.dragWindowGap, (c -= a.dragWindowGap) + a.movingX < 0 ? a.movingX = -c : c - a.movingX < 0 && (a.movingX = c), r + a.movingY < 0 ? a.movingY = -r : r - a.movingY < 0 && (a.movingY = r) } a.$jconfirmBoxContainer.css("transform", "translate(" + a.movingX + "px, " + a.movingY + "px)") } } }, _scrollTop: function () { if ("undefined" != typeof pageYOffset) return pageYOffset; var t = document.body, i = document.documentElement; return (i = i.clientHeight ? i : t).scrollTop }, _watchContent: function () { var n = this; this._timer && clearInterval(this._timer); var o = 0; this._timer = setInterval(function () { if (n.smoothContent) { var e = n.$content.outerHeight() || 0; e !== o && (n.$contentPane.css({ height: e }).scrollTop(0), o = e); var s = t(i).height(); n.offsetTop + n.offsetBottom + n.$jconfirmBox.height() - n.$contentPane.height() + n.$content.height() < s ? n.$contentPane.addClass("no-scroll") : n.$contentPane.removeClass("no-scroll") } }, this.watchInterval) }, _overflowClass: "jconfirm-overflow", _hilightAnimating: !1, highlight: function () { this.hiLightModal() }, hiLightModal: function () { var t = this; if (!this._hilightAnimating) { t.$body.addClass("hilight"); var i = parseFloat(t.$body.css("animation-duration")) || 2; this._hilightAnimating = !0, setTimeout(function () { t._hilightAnimating = !1, t.$body.removeClass("hilight") }, 1e3 * i) } }, _bindEvents: function () { var n = this; this.boxClicked = !1, this.$scrollPane.click(function (t) { if (!n.boxClicked) { var i, o = !1, e = !1; if ("string" == typeof (i = "function" == typeof n.backgroundDismiss ? n.backgroundDismiss() : n.backgroundDismiss) && void 0 !== n.buttons[i] ? (o = i, e = !1) : e = void 0 === i || 1 == !!i, o) { var s = n.buttons[o].action.apply(n); e = void 0 === s || !!s } e ? n.close() : n.hiLightModal() } n.boxClicked = !1 }), this.$jconfirmBox.click(function (t) { n.boxClicked = !0 }); var o = !1; t(i).on("jcKeyDown." + n._id, function (t) { o || (o = !0) }), t(i).on("keyup." + n._id, function (t) { o && (n.reactOnKey(t), o = !1) }), t(i).on("resize." + this._id, function () { n._updateContentMaxHeight(), setTimeout(function () { n.resetDrag() }, 100) }) }, _cubic_bezier: "0.36, 0.55, 0.19", _getCSS: function (t, i) { return { "-webkit-transition-duration": t / 1e3 + "s", "transition-duration": t / 1e3 + "s", "-webkit-transition-timing-function": "cubic-bezier(" + this._cubic_bezier + ", " + i + ")", "transition-timing-function": "cubic-bezier(" + this._cubic_bezier + ", " + i + ")" } }, _setButtons: function () { var i = this, n = 0; if ("object" != typeof this.buttons && (this.buttons = {}), t.each(this.buttons, function (o, e) { n += 1, "function" == typeof e && (i.buttons[o] = e = { action: e }), i.buttons[o].text = e.text || o, i.buttons[o].btnClass = e.btnClass || "btn-default", i.buttons[o].action = e.action || function () { }, i.buttons[o].keys = e.keys || [], i.buttons[o].isHidden = e.isHidden || !1, i.buttons[o].isDisabled = e.isDisabled || !1, t.each(i.buttons[o].keys, function (t, n) { i.buttons[o].keys[t] = n.toLowerCase() }); var s = t('<button type="button" class="btn"></button>').html(i.buttons[o].text).addClass(i.buttons[o].btnClass).prop("disabled", i.buttons[o].isDisabled).css("display", i.buttons[o].isHidden ? "none" : "").click(function (t) { t.preventDefault(); var n = i.buttons[o].action.apply(i, [i.buttons[o]]); i.onAction.apply(i, [o, i.buttons[o]]), i._stopCountDown(), (void 0 === n || n) && i.close() }); i.buttons[o].el = s, i.buttons[o].setText = function (t) { s.html(t) }, i.buttons[o].addClass = function (t) { s.addClass(t) }, i.buttons[o].removeClass = function (t) { s.removeClass(t) }, i.buttons[o].disable = function () { i.buttons[o].isDisabled = !0, s.prop("disabled", !0) }, i.buttons[o].enable = function () { i.buttons[o].isDisabled = !1, s.prop("disabled", !1) }, i.buttons[o].show = function () { i.buttons[o].isHidden = !1, s.css("display", "") }, i.buttons[o].hide = function () { i.buttons[o].isHidden = !0, s.css("display", "none") }, i["$_" + o] = i["$$" + o] = s, i.$btnc.append(s) }), 0 === n && this.$btnc.hide(), null === this.closeIcon && 0 === n && (this.closeIcon = !0), this.closeIcon) { if (this.closeIconClass) { var o = '<i class="' + this.closeIconClass + '"></i>'; this.$closeIcon.html(o) } this.$closeIcon.click(function (t) { t.preventDefault(); var n, o = !1, e = !1; if ("string" == typeof (n = "function" == typeof i.closeIcon ? i.closeIcon() : i.closeIcon) && void 0 !== i.buttons[n] ? (o = n, e = !1) : e = void 0 === n || 1 == !!n, o) { var s = i.buttons[o].action.apply(i); e = void 0 === s || !!s } e && i.close() }), this.$closeIcon.show() } else this.$closeIcon.hide() }, setTitle: function (t, i) { if (i = i || !1, void 0 !== t) if ("string" == typeof t) this.title = t; else if ("function" == typeof t) { "function" == typeof t.promise && console.error("Promise was returned from title function, this is not supported."); var n = t(); this.title = "string" == typeof n && n } else this.title = !1; this.isAjaxLoading && !i || (this.$title.html(this.title || ""), this.updateTitleContainer()) }, setIcon: function (t, i) { if (i = i || !1, void 0 !== t) if ("string" == typeof t) this.icon = t; else if ("function" == typeof t) { var n = t(); this.icon = "string" == typeof n && n } else this.icon = !1; this.isAjaxLoading && !i || (this.$icon.html(this.icon ? '<i class="' + this.icon + '"></i>' : ""), this.updateTitleContainer()) }, updateTitleContainer: function () { this.title || this.icon ? this.$titleContainer.show() : this.$titleContainer.hide() }, setContentPrepend: function (t, i) { t && this.contentParsed.prepend(t) }, setContentAppend: function (t) { t && this.contentParsed.append(t) }, setContent: function (t, i) { i = !!i; var n = this; t && this.contentParsed.html("").append(t), this.isAjaxLoading && !i || (this.$content.html(""), this.$content.append(this.contentParsed), setTimeout(function () { n.$body.find("input[autofocus]:visible:first").focus() }, 100)) }, loadingSpinner: !1, showLoading: function (t) { this.loadingSpinner = !0, this.$jconfirmBox.addClass("loading"), t && this.$btnc.find("button").prop("disabled", !0) }, hideLoading: function (t) { this.loadingSpinner = !1, this.$jconfirmBox.removeClass("loading"), t && this.$btnc.find("button").prop("disabled", !1) }, ajaxResponse: !1, contentParsed: "", isAjax: !1, isAjaxLoading: !1, _parseContent: function () { var i = this, n = "&nbsp;"; if ("function" == typeof this.content) { var o = this.content.apply(this); "string" == typeof o ? this.content = o : "object" == typeof o && "function" == typeof o.always ? (this.isAjax = !0, this.isAjaxLoading = !0, o.always(function (t, n, o) { i.ajaxResponse = { data: t, status: n, xhr: o }, i._contentReady.resolve(t, n, o), "function" == typeof i.contentLoaded && i.contentLoaded(t, n, o) }), this.content = n) : this.content = n } if ("string" == typeof this.content && "url:" === this.content.substr(0, 4).toLowerCase()) { this.isAjax = !0, this.isAjaxLoading = !0; var e = this.content.substring(4, this.content.length); t.get(e).done(function (t) { i.contentParsed.html(t) }).always(function (t, n, o) { i.ajaxResponse = { data: t, status: n, xhr: o }, i._contentReady.resolve(t, n, o), "function" == typeof i.contentLoaded && i.contentLoaded(t, n, o) }) } this.content || (this.content = n), this.isAjax || (this.contentParsed.html(this.content), this.setContent(), i._contentReady.resolve()) }, _stopCountDown: function () { clearInterval(this.autoCloseInterval), this.$cd && this.$cd.remove() }, _startCountDown: function () { var i = this, n = this.autoClose.split("|"); if (2 !== n.length) return console.error("Invalid option for autoClose. example 'close|10000'"), !1; var o = n[0], e = parseInt(n[1]); if (void 0 === this.buttons[o]) return console.error("Invalid button key '" + o + "' for autoClose"), !1; var s = Math.ceil(e / 1e3); this.$cd = t('<span class="countdown"> (' + s + ")</span>").appendTo(this["$_" + o]), this.autoCloseInterval = setInterval(function () { i.$cd.html(" (" + (s -= 1) + ") "), s <= 0 && (i["$$" + o].trigger("click"), i._stopCountDown()) }, 1e3) }, _getKey: function (t) { switch (t) { case 192: return "tilde"; case 13: return "enter"; case 16: return "shift"; case 9: return "tab"; case 20: return "capslock"; case 17: return "ctrl"; case 91: return "win"; case 18: return "alt"; case 27: return "esc"; case 32: return "space" }var i = String.fromCharCode(t); return !!/^[A-z0-9]+$/.test(i) && i.toLowerCase() }, reactOnKey: function (i) { var n = this, o = t(".jconfirm"); if (o.eq(o.length - 1)[0] !== this.$el[0]) return !1; var e = i.which; if (this.$content.find(":input").is(":focus") && /13|32/.test(e)) return !1; var s = this._getKey(e); if ("esc" === s && this.escapeKey) if (!0 === this.escapeKey) this.$scrollPane.trigger("click"); else if ("string" == typeof this.escapeKey || "function" == typeof this.escapeKey) { var a; (a = "function" == typeof this.escapeKey ? this.escapeKey() : this.escapeKey) && (void 0 === this.buttons[a] ? console.warn("Invalid escapeKey, no buttons found with key " + a) : this["$_" + a].trigger("click")) } t.each(this.buttons, function (t, i) { -1 != i.keys.indexOf(s) && n["$_" + t].trigger("click") }) }, setDialogCenter: function () { console.info("setDialogCenter is deprecated, dialogs are centered with CSS3 tables") }, _unwatchContent: function () { clearInterval(this._timer) }, close: function () { var n = this; return "function" == typeof this.onClose && this.onClose(), this._unwatchContent(), t(i).unbind("resize." + this._id), t(i).unbind("keyup." + this._id), t(i).unbind("jcKeyDown." + this._id), this.draggable && (t(i).unbind("mousemove." + this._id), t(i).unbind("mouseup." + this._id), this.$titleContainer.unbind("mousedown")), n.$el.removeClass(n.loadedClass), t("body").removeClass("jconfirm-no-scroll-" + n._id), n.$jconfirmBoxContainer.removeClass("jconfirm-no-transition"), setTimeout(function () { n.$body.addClass(n.closeAnimationParsed), n.$jconfirmBg.addClass("jconfirm-bg-h"); var o = "none" === n.closeAnimation ? 1 : n.animationSpeed; setTimeout(function () { n.$el.remove(); jconfirm.instances; for (var o = jconfirm.instances.length - 1; o >= 0; o--)jconfirm.instances[o]._id === n._id && jconfirm.instances.splice(o, 1); if (!jconfirm.instances.length && n.scrollToPreviousElement && jconfirm.lastFocused && jconfirm.lastFocused.length && t.contains(document, jconfirm.lastFocused[0])) { var e = jconfirm.lastFocused; if (n.scrollToPreviousElementAnimate) { var s = t(i).scrollTop(), a = jconfirm.lastFocused.offset().top, c = t(i).height(); if (a > s && a < s + c) e.focus(); else { var r = a - Math.round(c / 3); t("html, body").animate({ scrollTop: r }, n.animationSpeed, "swing", function () { e.focus() }) } } else e.focus(); jconfirm.lastFocused = !1 } "function" == typeof n.onDestroy && n.onDestroy() }, .4 * o) }, 50), !0 }, open: function () { return !this.isOpen() && (this._buildHTML(), this._bindEvents(), this._open(), !0) }, setStartingPoint: function () { var n = !1; if (!0 !== this.animateFromElement && this.animateFromElement) n = this.animateFromElement, jconfirm.lastClicked = !1; else { if (!jconfirm.lastClicked || !0 !== this.animateFromElement) return !1; n = jconfirm.lastClicked, jconfirm.lastClicked = !1 } if (!n) return !1; var o = n.offset(), e = n.outerHeight() / 2, s = n.outerWidth() / 2; e -= this.$jconfirmBox.outerHeight() / 2, s -= this.$jconfirmBox.outerWidth() / 2; var a = o.top + e; a -= this._scrollTop(); var c = o.left + s, r = t(i).height() / 2, l = t(i).width() / 2; if (a -= r - this.$jconfirmBox.outerHeight() / 2, c -= l - this.$jconfirmBox.outerWidth() / 2, Math.abs(a) > r || Math.abs(c) > l) return !1; this.$jconfirmBoxContainer.css("transform", "translate(" + c + "px, " + a + "px)") }, _open: function () { var t = this; "function" == typeof t.onOpenBefore && t.onOpenBefore(), this.$body.removeClass(this.animationParsed), this.$jconfirmBg.removeClass("jconfirm-bg-h"), this.$body.focus(), t.$jconfirmBoxContainer.css("transform", "translate(0px, 0px)"), setTimeout(function () { t.$body.css(t._getCSS(t.animationSpeed, 1)), t.$body.css({ "transition-property": t.$body.css("transition-property") + ", margin" }), t.$jconfirmBoxContainer.addClass("jconfirm-no-transition"), t._modalReady.resolve(), "function" == typeof t.onOpen && t.onOpen(), t.$el.addClass(t.loadedClass) }, this.animationSpeed) }, loadedClass: "jconfirm-open", isClosed: function () { return !this.$el || "" === this.$el.css("display") }, isOpen: function () { return !this.isClosed() }, toggle: function () { this.isOpen() ? this.close() : this.open() } }, jconfirm.instances = [], jconfirm.lastFocused = !1, jconfirm.pluginDefaults = { template: '<div class="jconfirm"><div class="jconfirm-bg jconfirm-bg-h"></div><div class="jconfirm-scrollpane"><div class="jconfirm-row"><div class="jconfirm-cell"><div class="jconfirm-holder"><div class="jc-bs3-container"><div class="jc-bs3-row"><div class="jconfirm-box-container jconfirm-animated"><div class="jconfirm-box" role="dialog" aria-labelledby="labelled" tabindex="-1"><div class="jconfirm-closeIcon">&times;</div><div class="jconfirm-title-c"><span class="jconfirm-icon-c"></span><span class="jconfirm-title"></span></div><div class="jconfirm-content-pane"><div class="jconfirm-content"></div></div><div class="jconfirm-buttons"></div><div class="jconfirm-clear"></div></div></div></div></div></div></div></div></div></div>', title: "Hello", titleClass: "", type: "default", typeAnimated: !0, draggable: !0, dragWindowGap: 15, dragWindowBorder: !0, animateFromElement: !0, alignMiddle: !0, smoothContent: !0, content: "Are you sure to continue?", buttons: {}, defaultButtons: { ok: { action: function () { } }, close: { action: function () { } } }, contentLoaded: function () { }, icon: "", lazyOpen: !1, bgOpacity: null, theme: "light", animation: "scale", closeAnimation: "scale", animationSpeed: 400, animationBounce: 1, escapeKey: !0, rtl: !1, container: "body", containerFluid: !1, backgroundDismiss: !1, backgroundDismissAnimation: "shake", autoClose: !1, closeIcon: null, closeIconClass: !1, watchInterval: 100, columnClass: "col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1", boxWidth: "50%", scrollToPreviousElement: !0, scrollToPreviousElementAnimate: !0, useBootstrap: !0, offsetTop: 40, offsetBottom: 40, bootstrapClasses: { container: "container", containerFluid: "container-fluid", row: "row" }, onContentReady: function () { }, onOpenBefore: function () { }, onOpen: function () { }, onClose: function () { }, onDestroy: function () { }, onAction: function () { } }; var n = !1; t(i).on("keydown", function (o) { if (!n) { var e = !1; t(o.target).closest(".jconfirm-box").length && (e = !0), e && t(i).trigger("jcKeyDown"), n = !0 } }), t(i).on("keyup", function () { n = !1 }), jconfirm.lastClicked = !1, t(document).on("mousedown", "button, a", function () { jconfirm.lastClicked = t(this) }) }(jQuery, window);

/*!
 * Validator v0.9.0 for Bootstrap 3, by @1000hz
 * Copyright 2015 Cina Saffary
 * Licensed under http://opensource.org/licenses/MIT
 *
 * https://github.com/1000hz/bootstrap-validator
 */
!function (t) { "use strict"; var e = ':input:not([type="submit"], button):enabled', a = function (e, r) { this.$element = t(e), this.options = r, r.errors = t.extend({}, a.DEFAULTS.errors, r.errors); for (var i in r.custom) if (!r.errors[i]) throw new Error("Missing default error message for custom validator: " + i); t.extend(a.VALIDATORS, r.custom), this.$element.attr("novalidate", !0), this.toggleSubmit(), this.$element.on("input.bs.validator change.bs.validator focusout.bs.validator", t.proxy(this.validateInput, this)), this.$element.on("submit.bs.validator", t.proxy(this.onSubmit, this)), this.$element.find("[data-match]").each(function () { var e = t(this), a = e.data("match"); t(a).on("input.bs.validator", function (t) { e.val() && e.trigger("input.bs.validator") }) }) }; function r(e) { return this.each(function () { var r = t(this), i = t.extend({}, a.DEFAULTS, r.data(), "object" == typeof e && e), o = r.data("bs.validator"); (o || "destroy" != e) && (o || r.data("bs.validator", o = new a(this, i)), "string" == typeof e && o[e]()) }) } a.DEFAULTS = { delay: 500, html: !1, disable: !0, custom: {}, errors: { match: "Does not match", minlength: "Not long enough" }, feedback: { success: "glyphicon-ok", error: "glyphicon-warning-sign" } }, a.VALIDATORS = { native: function (t) { var e = t[0]; return !e.checkValidity || e.checkValidity() }, match: function (e) { var a = e.data("match"); return !e.val() || e.val() === t(a).val() }, minlength: function (t) { var e = t.data("minlength"); return !t.val() || t.val().length >= e } }, a.prototype.validateInput = function (e) { var a = t(e.target), r = a.data("bs.validator.errors"); if (a.is('[type="radio"]') && (a = this.$element.find('input[name="' + a.attr("name") + '"]')), this.$element.trigger(e = t.Event("validate.bs.validator", { relatedTarget: a[0] })), !e.isDefaultPrevented()) { var i = this; this.runValidators(a).done(function (o) { a.data("bs.validator.errors", o), o.length ? i.showErrors(a) : i.clearErrors(a), r && o.toString() === r.toString() || (e = o.length ? t.Event("invalid.bs.validator", { relatedTarget: a[0], detail: o }) : t.Event("valid.bs.validator", { relatedTarget: a[0], detail: r }), i.$element.trigger(e)), i.toggleSubmit(), i.$element.trigger(t.Event("validated.bs.validator", { relatedTarget: a[0] })) }) } }, a.prototype.runValidators = function (e) { var r = [], i = t.Deferred(), o = this.options; function n(t) { return e.data(t + "-error") || e.data("error") || "native" == t && e[0].validationMessage || o.errors[t] } return e.data("bs.validator.deferred") && e.data("bs.validator.deferred").reject(), e.data("bs.validator.deferred", i), t.each(a.VALIDATORS, t.proxy(function (t, a) { if ((e.data(t) || "native" == t) && !a.call(this, e)) { var i = n(t); !~r.indexOf(i) && r.push(i) } }, this)), !r.length && e.val() && e.data("remote") ? this.defer(e, function () { var a = {}; a[e.attr("name")] = e.val(), t.get(e.data("remote"), a).fail(function (t, e, a) { r.push(n("remote") || a) }).always(function () { i.resolve(r) }) }) : i.resolve(r), i.promise() }, a.prototype.validate = function () { var t = this.options.delay; return this.options.delay = 0, this.$element.find(e).trigger("input.bs.validator"), this.options.delay = t, this }, a.prototype.showErrors = function (e) { var a = this.options.html ? "html" : "text"; this.defer(e, function () { var r = e.closest(".form-group"), i = r.find(".help-block.with-errors"), o = r.find(".form-control-feedback"), n = e.data("bs.validator.errors"); n.length && (n = t("<ul/>").addClass("list-unstyled").append(t.map(n, function (e) { return t("<li/>")[a](e) })), void 0 === i.data("bs.validator.originalContent") && i.data("bs.validator.originalContent", i.html()), i.empty().append(n), r.addClass("has-error"), o.length && o.removeClass(this.options.feedback.success) && o.addClass(this.options.feedback.error) && r.removeClass("has-success")) }) }, a.prototype.clearErrors = function (t) { var e = t.closest(".form-group"), a = e.find(".help-block.with-errors"), r = e.find(".form-control-feedback"); a.html(a.data("bs.validator.originalContent")), e.removeClass("has-error"), r.length && r.removeClass(this.options.feedback.error) && r.addClass(this.options.feedback.success) && e.addClass("has-success") }, a.prototype.hasErrors = function () { return !!this.$element.find(e).filter(function () { return !!(t(this).data("bs.validator.errors") || []).length }).length }, a.prototype.isIncomplete = function () { return !!this.$element.find(e).filter("[required]").filter(function () { return "checkbox" === this.type ? !this.checked : "radio" === this.type ? !t('[name="' + this.name + '"]:checked').length : "" === t.trim(this.value) }).length }, a.prototype.onSubmit = function (t) { this.validate(), (this.isIncomplete() || this.hasErrors()) && t.preventDefault() }, a.prototype.toggleSubmit = function () { this.options.disable && t('button[type="submit"], input[type="submit"]').filter('[form="' + this.$element.attr("id") + '"]').add(this.$element.find('input[type="submit"], button[type="submit"]')).toggleClass("disabled", this.isIncomplete() || this.hasErrors()).css({ "pointer-events": "all", cursor: "pointer" }) }, a.prototype.defer = function (e, a) { if (a = t.proxy(a, this), !this.options.delay) return a(); window.clearTimeout(e.data("bs.validator.timeout")), e.data("bs.validator.timeout", window.setTimeout(a, this.options.delay)) }, a.prototype.destroy = function () { return this.$element.removeAttr("novalidate").removeData("bs.validator").off(".bs.validator"), this.$element.find(e).off(".bs.validator").removeData(["bs.validator.errors", "bs.validator.deferred"]).each(function () { var e = t(this), a = e.data("bs.validator.timeout"); window.clearTimeout(a) && e.removeData("bs.validator.timeout") }), this.$element.find(".help-block.with-errors").each(function () { var e = t(this), a = e.data("bs.validator.originalContent"); e.removeData("bs.validator.originalContent").html(a) }), this.$element.find('input[type="submit"], button[type="submit"]').removeClass("disabled"), this.$element.find(".has-error").removeClass("has-error"), this }; var i = t.fn.validator; t.fn.validator = r, t.fn.validator.Constructor = a, t.fn.validator.noConflict = function () { return t.fn.validator = i, this }, t(window).on("load", function () { t('form[data-toggle="validator"]').each(function () { var e = t(this); r.call(e, e.data()) }) }) }(jQuery);

/*
 * bootstrap-datepicker.js
 * Repo: https://github.com/eternicode/bootstrap-datepicker/
 */
!function (t, e) { var i = t(window); function a() { return new Date(Date.UTC.apply(Date, arguments)) } function s() { var t = new Date; return a(t.getFullYear(), t.getMonth(), t.getDate()) } function n(t) { return function () { return this[t].apply(this, arguments) } } var r, h = (r = { get: function (t) { return this.slice(t)[0] }, contains: function (t) { for (var e = t && t.valueOf(), i = 0, a = this.length; i < a; i++)if (this[i].valueOf() === e) return i; return -1 }, remove: function (t) { this.splice(t, 1) }, replace: function (e) { e && (t.isArray(e) || (e = [e]), this.clear(), this.push.apply(this, e)) }, clear: function () { this.splice(0) }, copy: function () { var t = new h; return t.replace(this), t } }, function () { var e = []; return e.push.apply(e, arguments), t.extend(e, r), e }), o = function (e, i) { this.dates = new h, this.viewDate = s(), this.focusDate = null, this._process_options(i), this.element = t(e), this.isInline = !1, this.isInput = this.element.is("input"), this.component = !!this.element.is(".date") && this.element.find(".add-on, .input-group-addon, .btn"), this.hasInput = this.component && this.element.find("input").length, this.component && 0 === this.component.length && (this.component = !1), this.picker = t(f.template), this._buildEvents(), this._attachEvents(), this.isInline ? this.picker.addClass("datepicker-inline").appendTo(this.element) : this.picker.addClass("datepicker-dropdown dropdown-menu"), this.o.rtl && this.picker.addClass("datepicker-rtl"), this.viewMode = this.o.startView, this.o.calendarWeeks && this.picker.find("tfoot th.today").attr("colspan", function (t, e) { return parseInt(e) + 1 }), this._allow_update = !1, this.setStartDate(this._o.startDate), this.setEndDate(this._o.endDate), this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled), this.fillDow(), this.fillMonths(), this._allow_update = !0, this.update(), this.showMode(), this.isInline && this.show() }; o.prototype = { constructor: o, _process_options: function (e) { this._o = t.extend({}, this._o, e); var i = this.o = t.extend({}, this._o), a = i.language; switch (p[a] || (a = a.split("-")[0], p[a] || (a = c.language)), i.language = a, i.startView) { case 2: case "decade": i.startView = 2; break; case 1: case "year": i.startView = 1; break; default: i.startView = 0 }switch (i.minViewMode) { case 1: case "months": i.minViewMode = 1; break; case 2: case "years": i.minViewMode = 2; break; default: i.minViewMode = 0 }i.startView = Math.max(i.startView, i.minViewMode), !0 !== i.multidate && (i.multidate = Number(i.multidate) || !1, !1 !== i.multidate ? i.multidate = Math.max(0, i.multidate) : i.multidate = 1), i.multidateSeparator = String(i.multidateSeparator), i.weekStart %= 7, i.weekEnd = (i.weekStart + 6) % 7; var s = f.parseFormat(i.format); i.startDate !== -1 / 0 && (i.startDate ? i.startDate instanceof Date ? i.startDate = this._local_to_utc(this._zero_time(i.startDate)) : i.startDate = f.parseDate(i.startDate, s, i.language) : i.startDate = -1 / 0), i.endDate !== 1 / 0 && (i.endDate ? i.endDate instanceof Date ? i.endDate = this._local_to_utc(this._zero_time(i.endDate)) : i.endDate = f.parseDate(i.endDate, s, i.language) : i.endDate = 1 / 0), i.daysOfWeekDisabled = i.daysOfWeekDisabled || [], t.isArray(i.daysOfWeekDisabled) || (i.daysOfWeekDisabled = i.daysOfWeekDisabled.split(/[,\s]*/)), i.daysOfWeekDisabled = t.map(i.daysOfWeekDisabled, function (t) { return parseInt(t, 10) }); var n = String(i.orientation).toLowerCase().split(/\s+/g), r = i.orientation.toLowerCase(); if (n = t.grep(n, function (t) { return /^auto|left|right|top|bottom$/.test(t) }), i.orientation = { x: "auto", y: "auto" }, r && "auto" !== r) if (1 === n.length) switch (n[0]) { case "top": case "bottom": i.orientation.y = n[0]; break; case "left": case "right": i.orientation.x = n[0] } else r = t.grep(n, function (t) { return /^left|right$/.test(t) }), i.orientation.x = r[0] || "auto", r = t.grep(n, function (t) { return /^top|bottom$/.test(t) }), i.orientation.y = r[0] || "auto"; else; }, _events: [], _secondaryEvents: [], _applyEvents: function (t) { for (var i, a, s, n = 0; n < t.length; n++)i = t[n][0], 2 === t[n].length ? (a = e, s = t[n][1]) : 3 === t[n].length && (a = t[n][1], s = t[n][2]), i.on(s, a) }, _unapplyEvents: function (t) { for (var i, a, s, n = 0; n < t.length; n++)i = t[n][0], 2 === t[n].length ? (s = e, a = t[n][1]) : 3 === t[n].length && (s = t[n][1], a = t[n][2]), i.off(a, s) }, _buildEvents: function () { this.isInput ? this._events = [[this.element, { focus: t.proxy(this.show, this), keyup: t.proxy(function (e) { -1 === t.inArray(e.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) && this.update() }, this), keydown: t.proxy(this.keydown, this) }]] : this.component && this.hasInput ? this._events = [[this.element.find("input"), { focus: t.proxy(this.show, this), keyup: t.proxy(function (e) { -1 === t.inArray(e.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) && this.update() }, this), keydown: t.proxy(this.keydown, this) }], [this.component, { click: t.proxy(this.show, this) }]] : this.element.is("div") ? this.isInline = !0 : this._events = [[this.element, { click: t.proxy(this.show, this) }]], this._events.push([this.element, "*", { blur: t.proxy(function (t) { this._focused_from = t.target }, this) }], [this.element, { blur: t.proxy(function (t) { this._focused_from = t.target }, this) }]), this._secondaryEvents = [[this.picker, { click: t.proxy(this.click, this) }], [t(window), { resize: t.proxy(this.place, this) }], [t(document), { "mousedown touchstart": t.proxy(function (t) { this.element.is(t.target) || this.element.find(t.target).length || this.picker.is(t.target) || this.picker.find(t.target).length || this.hide() }, this) }]] }, _attachEvents: function () { this._detachEvents(), this._applyEvents(this._events) }, _detachEvents: function () { this._unapplyEvents(this._events) }, _attachSecondaryEvents: function () { this._detachSecondaryEvents(), this._applyEvents(this._secondaryEvents) }, _detachSecondaryEvents: function () { this._unapplyEvents(this._secondaryEvents) }, _trigger: function (e, i) { var a = i || this.dates.get(-1), s = this._utc_to_local(a); this.element.trigger({ type: e, date: s, dates: t.map(this.dates, this._utc_to_local), format: t.proxy(function (t, e) { 0 === arguments.length ? (t = this.dates.length - 1, e = this.o.format) : "string" == typeof t && (e = t, t = this.dates.length - 1), e = e || this.o.format; var i = this.dates.get(t); return f.formatDate(i, e, this.o.language) }, this) }) }, show: function () { this.isInline || this.picker.appendTo("body"), this.picker.show(), this.place(), this._attachSecondaryEvents(), this._trigger("show") }, hide: function () { this.isInline || this.picker.is(":visible") && (this.focusDate = null, this.picker.hide().detach(), this._detachSecondaryEvents(), this.viewMode = this.o.startView, this.showMode(), this.o.forceParse && (this.isInput && this.element.val() || this.hasInput && this.element.find("input").val()) && this.setValue(), this._trigger("hide")) }, remove: function () { this.hide(), this._detachEvents(), this._detachSecondaryEvents(), this.picker.remove(), delete this.element.data().datepicker, this.isInput || delete this.element.data().date }, _utc_to_local: function (t) { return t && new Date(t.getTime() + 6e4 * t.getTimezoneOffset()) }, _local_to_utc: function (t) { return t && new Date(t.getTime() - 6e4 * t.getTimezoneOffset()) }, _zero_time: function (t) { return t && new Date(t.getFullYear(), t.getMonth(), t.getDate()) }, _zero_utc_time: function (t) { return t && new Date(Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate())) }, getDates: function () { return t.map(this.dates, this._utc_to_local) }, getUTCDates: function () { return t.map(this.dates, function (t) { return new Date(t) }) }, getDate: function () { return this._utc_to_local(this.getUTCDate()) }, getUTCDate: function () { return new Date(this.dates.get(-1)) }, setDates: function () { var e = t.isArray(arguments[0]) ? arguments[0] : arguments; this.update.apply(this, e), this._trigger("changeDate"), this.setValue() }, setUTCDates: function () { var e = t.isArray(arguments[0]) ? arguments[0] : arguments; this.update.apply(this, t.map(e, this._utc_to_local)), this._trigger("changeDate"), this.setValue() }, setDate: n("setDates"), setUTCDate: n("setUTCDates"), setValue: function () { var t = this.getFormattedDate(); this.isInput ? this.element.val(t).change() : this.component && this.element.find("input").val(t).change() }, getFormattedDate: function (i) { i === e && (i = this.o.format); var a = this.o.language; return t.map(this.dates, function (t) { return f.formatDate(t, i, a) }).join(this.o.multidateSeparator) }, setStartDate: function (t) { this._process_options({ startDate: t }), this.update(), this.updateNavArrows() }, setEndDate: function (t) { this._process_options({ endDate: t }), this.update(), this.updateNavArrows() }, setDaysOfWeekDisabled: function (t) { this._process_options({ daysOfWeekDisabled: t }), this.update(), this.updateNavArrows() }, place: function () { if (!this.isInline) { var e = this.picker.outerWidth(), a = this.picker.outerHeight(), s = i.width(), n = i.height(), r = i.scrollTop(), h = parseInt(this.element.parents().filter(function () { return "auto" !== t(this).css("z-index") }).first().css("z-index")) + 10, o = this.component ? this.component.parent().offset() : this.element.offset(), d = this.component ? this.component.outerHeight(!0) : this.element.outerHeight(!1), l = this.component ? this.component.outerWidth(!0) : this.element.outerWidth(!1), c = o.left, u = o.top; this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"), "auto" !== this.o.orientation.x ? (this.picker.addClass("datepicker-orient-" + this.o.orientation.x), "right" === this.o.orientation.x && (c -= e - l)) : (this.picker.addClass("datepicker-orient-left"), o.left < 0 ? c -= o.left - 10 : o.left + e > s && (c = s - e - 10)); var p, f, g = this.o.orientation.y; "auto" === g && (p = -r + o.top - a, f = r + n - (o.top + d + a), g = Math.max(p, f) === f ? "top" : "bottom"), this.picker.addClass("datepicker-orient-" + g), "top" === g ? u += d : u -= a + parseInt(this.picker.css("padding-top")), this.picker.css({ top: u, left: c, zIndex: h }) } }, _allow_update: !0, update: function () { if (this._allow_update) { var e = this.dates.copy(), i = [], a = !1; arguments.length ? (t.each(arguments, t.proxy(function (t, e) { e instanceof Date && (e = this._local_to_utc(e)), i.push(e) }, this)), a = !0) : (i = (i = this.isInput ? this.element.val() : this.element.data("date") || this.element.find("input").val()) && this.o.multidate ? i.split(this.o.multidateSeparator) : [i], delete this.element.data().date), i = t.map(i, t.proxy(function (t) { return f.parseDate(t, this.o.format, this.o.language) }, this)), i = t.grep(i, t.proxy(function (t) { return t < this.o.startDate || t > this.o.endDate || !t }, this), !0), this.dates.replace(i), this.dates.length ? this.viewDate = new Date(this.dates.get(-1)) : this.viewDate < this.o.startDate ? this.viewDate = new Date(this.o.startDate) : this.viewDate > this.o.endDate && (this.viewDate = new Date(this.o.endDate)), a ? this.setValue() : i.length && String(e) !== String(this.dates) && this._trigger("changeDate"), !this.dates.length && e.length && this._trigger("clearDate"), this.fill() } }, fillDow: function () { var t = this.o.weekStart, e = "<tr>"; if (this.o.calendarWeeks) { var i = '<th class="cw">&nbsp;</th>'; e += i, this.picker.find(".datepicker-days thead tr:first-child").prepend(i) } for (; t < this.o.weekStart + 7;)e += '<th class="dow">' + p[this.o.language].daysMin[t++ % 7] + "</th>"; e += "</tr>", this.picker.find(".datepicker-days thead").append(e) }, fillMonths: function () { for (var t = "", e = 0; e < 12;)t += '<span class="month">' + p[this.o.language].monthsShort[e++] + "</span>"; this.picker.find(".datepicker-months td").html(t) }, setRange: function (e) { e && e.length ? this.range = t.map(e, function (t) { return t.valueOf() }) : delete this.range, this.fill() }, getClassNames: function (e) { var i = [], a = this.viewDate.getUTCFullYear(), s = this.viewDate.getUTCMonth(), n = new Date; return e.getUTCFullYear() < a || e.getUTCFullYear() === a && e.getUTCMonth() < s ? i.push("old") : (e.getUTCFullYear() > a || e.getUTCFullYear() === a && e.getUTCMonth() > s) && i.push("new"), this.focusDate && e.valueOf() === this.focusDate.valueOf() && i.push("focused"), this.o.todayHighlight && e.getUTCFullYear() === n.getFullYear() && e.getUTCMonth() === n.getMonth() && e.getUTCDate() === n.getDate() && i.push("today"), -1 !== this.dates.contains(e) && i.push("active"), (e.valueOf() < this.o.startDate || e.valueOf() > this.o.endDate || -1 !== t.inArray(e.getUTCDay(), this.o.daysOfWeekDisabled)) && i.push("disabled"), this.range && (e > this.range[0] && e < this.range[this.range.length - 1] && i.push("range"), -1 !== t.inArray(e.valueOf(), this.range) && i.push("selected")), i }, fill: function () { var i, s = new Date(this.viewDate), n = s.getUTCFullYear(), r = s.getUTCMonth(), h = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCFullYear() : -1 / 0, o = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCMonth() : -1 / 0, d = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0, l = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0, c = p[this.o.language].today || p.en.today || "", u = p[this.o.language].clear || p.en.clear || ""; this.picker.find(".datepicker-days thead th.datepicker-switch").text(p[this.o.language].months[r] + " " + n), this.picker.find("tfoot th.today").text(c).toggle(!1 !== this.o.todayBtn), this.picker.find("tfoot th.clear").text(u).toggle(!1 !== this.o.clearBtn), this.updateNavArrows(), this.fillMonths(); var g = a(n, r - 1, 28), D = f.getDaysInMonth(g.getUTCFullYear(), g.getUTCMonth()); g.setUTCDate(D), g.setUTCDate(D - (g.getUTCDay() - this.o.weekStart + 7) % 7); var v = new Date(g); v.setUTCDate(v.getUTCDate() + 42), v = v.valueOf(); for (var m, y = []; g.valueOf() < v;) { if (g.getUTCDay() === this.o.weekStart && (y.push("<tr>"), this.o.calendarWeeks)) { var w = new Date(+g + (this.o.weekStart - g.getUTCDay() - 7) % 7 * 864e5), k = new Date(Number(w) + (11 - w.getUTCDay()) % 7 * 864e5), _ = new Date(Number(_ = a(k.getUTCFullYear(), 0, 1)) + (11 - _.getUTCDay()) % 7 * 864e5), C = (k - _) / 864e5 / 7 + 1; y.push('<td class="cw">' + C + "</td>") } if ((m = this.getClassNames(g)).push("day"), this.o.beforeShowDay !== t.noop) { var T = this.o.beforeShowDay(this._utc_to_local(g)); T === e ? T = {} : "boolean" == typeof T ? T = { enabled: T } : "string" == typeof T && (T = { classes: T }), !1 === T.enabled && m.push("disabled"), T.classes && (m = m.concat(T.classes.split(/\s+/))), T.tooltip && (i = T.tooltip) } m = t.unique(m), y.push('<td class="' + m.join(" ") + '"' + (i ? ' title="' + i + '"' : "") + ">" + g.getUTCDate() + "</td>"), g.getUTCDay() === this.o.weekEnd && y.push("</tr>"), g.setUTCDate(g.getUTCDate() + 1) } this.picker.find(".datepicker-days tbody").empty().append(y.join("")); var b = this.picker.find(".datepicker-months").find("th:eq(1)").text(n).end().find("span").removeClass("active"); t.each(this.dates, function (t, e) { e.getUTCFullYear() === n && b.eq(e.getUTCMonth()).addClass("active") }), (n < h || n > d) && b.addClass("disabled"), n === h && b.slice(0, o).addClass("disabled"), n === d && b.slice(l + 1).addClass("disabled"), y = "", n = 10 * parseInt(n / 10, 10); var U = this.picker.find(".datepicker-years").find("th:eq(1)").text(n + "-" + (n + 9)).end().find("td"); n -= 1; for (var M, x = t.map(this.dates, function (t) { return t.getUTCFullYear() }), S = -1; S < 11; S++)M = ["year"], -1 === S ? M.push("old") : 10 === S && M.push("new"), -1 !== t.inArray(n, x) && M.push("active"), (n < h || n > d) && M.push("disabled"), y += '<span class="' + M.join(" ") + '">' + n + "</span>", n += 1; U.html(y) }, updateNavArrows: function () { if (this._allow_update) { var t = new Date(this.viewDate), e = t.getUTCFullYear(), i = t.getUTCMonth(); switch (this.viewMode) { case 0: this.o.startDate !== -1 / 0 && e <= this.o.startDate.getUTCFullYear() && i <= this.o.startDate.getUTCMonth() ? this.picker.find(".prev").css({ visibility: "hidden" }) : this.picker.find(".prev").css({ visibility: "visible" }), this.o.endDate !== 1 / 0 && e >= this.o.endDate.getUTCFullYear() && i >= this.o.endDate.getUTCMonth() ? this.picker.find(".next").css({ visibility: "hidden" }) : this.picker.find(".next").css({ visibility: "visible" }); break; case 1: case 2: this.o.startDate !== -1 / 0 && e <= this.o.startDate.getUTCFullYear() ? this.picker.find(".prev").css({ visibility: "hidden" }) : this.picker.find(".prev").css({ visibility: "visible" }), this.o.endDate !== 1 / 0 && e >= this.o.endDate.getUTCFullYear() ? this.picker.find(".next").css({ visibility: "hidden" }) : this.picker.find(".next").css({ visibility: "visible" }) } } }, click: function (e) { e.preventDefault(); var i, s, n, r = t(e.target).closest("span, td, th"); if (1 === r.length) switch (r[0].nodeName.toLowerCase()) { case "th": switch (r[0].className) { case "datepicker-switch": this.showMode(1); break; case "prev": case "next": var h = f.modes[this.viewMode].navStep * ("prev" === r[0].className ? -1 : 1); switch (this.viewMode) { case 0: this.viewDate = this.moveMonth(this.viewDate, h), this._trigger("changeMonth", this.viewDate); break; case 1: case 2: this.viewDate = this.moveYear(this.viewDate, h), 1 === this.viewMode && this._trigger("changeYear", this.viewDate) }this.fill(); break; case "today": var o = new Date; o = a(o.getFullYear(), o.getMonth(), o.getDate(), 0, 0, 0), this.showMode(-2); var d = "linked" === this.o.todayBtn ? null : "view"; this._setDate(o, d); break; case "clear": var l; this.isInput ? l = this.element : this.component && (l = this.element.find("input")), l && l.val("").change(), this.update(), this._trigger("changeDate"), this.o.autoclose && this.hide() }break; case "span": r.is(".disabled") || (this.viewDate.setUTCDate(1), r.is(".month") ? (n = 1, s = r.parent().find("span").index(r), i = this.viewDate.getUTCFullYear(), this.viewDate.setUTCMonth(s), this._trigger("changeMonth", this.viewDate), 1 === this.o.minViewMode && this._setDate(a(i, s, n))) : (n = 1, s = 0, i = parseInt(r.text(), 10) || 0, this.viewDate.setUTCFullYear(i), this._trigger("changeYear", this.viewDate), 2 === this.o.minViewMode && this._setDate(a(i, s, n))), this.showMode(-1), this.fill()); break; case "td": r.is(".day") && !r.is(".disabled") && (n = parseInt(r.text(), 10) || 1, i = this.viewDate.getUTCFullYear(), s = this.viewDate.getUTCMonth(), r.is(".old") ? 0 === s ? (s = 11, i -= 1) : s -= 1 : r.is(".new") && (11 === s ? (s = 0, i += 1) : s += 1), this._setDate(a(i, s, n))) }this.picker.is(":visible") && this._focused_from && t(this._focused_from).focus(), delete this._focused_from }, _toggle_multidate: function (t) { var e = this.dates.contains(t); if (t ? -1 !== e ? this.dates.remove(e) : this.dates.push(t) : this.dates.clear(), "number" == typeof this.o.multidate) for (; this.dates.length > this.o.multidate;)this.dates.remove(0) }, _setDate: function (t, e) { var i; e && "date" !== e || this._toggle_multidate(t && new Date(t)), e && "view" !== e || (this.viewDate = t && new Date(t)), this.fill(), this.setValue(), this._trigger("changeDate"), this.isInput ? i = this.element : this.component && (i = this.element.find("input")), i && i.change(), !this.o.autoclose || e && "date" !== e || this.hide() }, moveMonth: function (t, i) { if (!t) return e; if (!i) return t; var a, s, n = new Date(t.valueOf()), r = n.getUTCDate(), h = n.getUTCMonth(), o = Math.abs(i); if (i = i > 0 ? 1 : -1, 1 === o) s = -1 === i ? function () { return n.getUTCMonth() === h } : function () { return n.getUTCMonth() !== a }, a = h + i, n.setUTCMonth(a), (a < 0 || a > 11) && (a = (a + 12) % 12); else { for (var d = 0; d < o; d++)n = this.moveMonth(n, i); a = n.getUTCMonth(), n.setUTCDate(r), s = function () { return a !== n.getUTCMonth() } } for (; s();)n.setUTCDate(--r), n.setUTCMonth(a); return n }, moveYear: function (t, e) { return this.moveMonth(t, 12 * e) }, dateWithinRange: function (t) { return t >= this.o.startDate && t <= this.o.endDate }, keydown: function (t) { if (this.picker.is(":not(:visible)")) 27 === t.keyCode && this.show(); else { var e, i, a, n, r = !1, h = this.focusDate || this.viewDate; switch (t.keyCode) { case 27: this.focusDate ? (this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill()) : this.hide(), t.preventDefault(); break; case 37: case 39: if (!this.o.keyboardNavigation) break; e = 37 === t.keyCode ? -1 : 1, t.ctrlKey ? (i = this.moveYear(this.dates.get(-1) || s(), e), a = this.moveYear(h, e), this._trigger("changeYear", this.viewDate)) : t.shiftKey ? (i = this.moveMonth(this.dates.get(-1) || s(), e), a = this.moveMonth(h, e), this._trigger("changeMonth", this.viewDate)) : ((i = new Date(this.dates.get(-1) || s())).setUTCDate(i.getUTCDate() + e), (a = new Date(h)).setUTCDate(h.getUTCDate() + e)), this.dateWithinRange(i) && (this.focusDate = this.viewDate = a, this.setValue(), this.fill(), t.preventDefault()); break; case 38: case 40: if (!this.o.keyboardNavigation) break; e = 38 === t.keyCode ? -1 : 1, t.ctrlKey ? (i = this.moveYear(this.dates.get(-1) || s(), e), a = this.moveYear(h, e), this._trigger("changeYear", this.viewDate)) : t.shiftKey ? (i = this.moveMonth(this.dates.get(-1) || s(), e), a = this.moveMonth(h, e), this._trigger("changeMonth", this.viewDate)) : ((i = new Date(this.dates.get(-1) || s())).setUTCDate(i.getUTCDate() + 7 * e), (a = new Date(h)).setUTCDate(h.getUTCDate() + 7 * e)), this.dateWithinRange(i) && (this.focusDate = this.viewDate = a, this.setValue(), this.fill(), t.preventDefault()); break; case 32: break; case 13: h = this.focusDate || this.dates.get(-1) || this.viewDate, this._toggle_multidate(h), r = !0, this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.setValue(), this.fill(), this.picker.is(":visible") && (t.preventDefault(), this.o.autoclose && this.hide()); break; case 9: this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill(), this.hide() }if (r) this.dates.length ? this._trigger("changeDate") : this._trigger("clearDate"), this.isInput ? n = this.element : this.component && (n = this.element.find("input")), n && n.change() } }, showMode: function (t) { t && (this.viewMode = Math.max(this.o.minViewMode, Math.min(2, this.viewMode + t))), this.picker.find(">div").hide().filter(".datepicker-" + f.modes[this.viewMode].clsName).css("display", "block"), this.updateNavArrows() } }; var d = function (e, i) { this.element = t(e), this.inputs = t.map(i.inputs, function (t) { return t.jquery ? t[0] : t }), delete i.inputs, t(this.inputs).datepicker(i).bind("changeDate", t.proxy(this.dateUpdated, this)), this.pickers = t.map(this.inputs, function (e) { return t(e).data("datepicker") }), this.updateDates() }; d.prototype = { updateDates: function () { this.dates = t.map(this.pickers, function (t) { return t.getUTCDate() }), this.updateRanges() }, updateRanges: function () { var e = t.map(this.dates, function (t) { return t.valueOf() }); t.each(this.pickers, function (t, i) { i.setRange(e) }) }, dateUpdated: function (e) { if (!this.updating) { this.updating = !0; var i = t(e.target).data("datepicker").getUTCDate(), a = t.inArray(e.target, this.inputs), s = this.inputs.length; if (-1 !== a) { if (t.each(this.pickers, function (t, e) { e.getUTCDate() || e.setUTCDate(i) }), i < this.dates[a]) for (; a >= 0 && i < this.dates[a];)this.pickers[a--].setUTCDate(i); else if (i > this.dates[a]) for (; a < s && i > this.dates[a];)this.pickers[a++].setUTCDate(i); this.updateDates(), delete this.updating } } }, remove: function () { t.map(this.pickers, function (t) { t.remove() }), delete this.element.data().datepicker } }; var l = t.fn.datepicker; t.fn.datepicker = function (i) { var a, s = Array.apply(null, arguments); return s.shift(), this.each(function () { var n = t(this), r = n.data("datepicker"), h = "object" == typeof i && i; if (!r) { var l = function (e, i) { var a = t(e).data(), s = {}, n = new RegExp("^" + i.toLowerCase() + "([A-Z])"); function r(t, e) { return e.toLowerCase() } i = new RegExp("^" + i.toLowerCase()); for (var h in a) i.test(h) && (s[h.replace(n, r)] = a[h]); return s }(this, "date"), f = function (e) { var i = {}; if (p[e] || (e = e.split("-")[0], p[e])) { var a = p[e]; return t.each(u, function (t, e) { e in a && (i[e] = a[e]) }), i } }(t.extend({}, c, l, h).language), g = t.extend({}, c, f, l, h); if (n.is(".input-daterange") || g.inputs) { var D = { inputs: g.inputs || n.find("input").toArray() }; n.data("datepicker", r = new d(this, t.extend(g, D))) } else n.data("datepicker", r = new o(this, g)) } if ("string" == typeof i && "function" == typeof r[i] && (a = r[i].apply(r, s)) !== e) return !1 }), a !== e ? a : this }; var c = t.fn.datepicker.defaults = { autoclose: !1, beforeShowDay: t.noop, calendarWeeks: !1, clearBtn: !1, daysOfWeekDisabled: [], endDate: 1 / 0, forceParse: !0, format: "mm/dd/yyyy", keyboardNavigation: !0, language: "en", minViewMode: 0, multidate: !1, multidateSeparator: ",", orientation: "auto", rtl: !1, startDate: -1 / 0, startView: 0, todayBtn: !1, todayHighlight: !1, weekStart: 0 }, u = t.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"]; t.fn.datepicker.Constructor = o; var p = t.fn.datepicker.dates = { en: { days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], today: "Today", clear: "Clear" } }, f = { modes: [{ clsName: "days", navFnc: "Month", navStep: 1 }, { clsName: "months", navFnc: "FullYear", navStep: 1 }, { clsName: "years", navFnc: "FullYear", navStep: 10 }], isLeapYear: function (t) { return t % 4 == 0 && t % 100 != 0 || t % 400 == 0 }, getDaysInMonth: function (t, e) { return [31, f.isLeapYear(t) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][e] }, validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g, nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g, parseFormat: function (t) { var e = t.replace(this.validParts, "\0").split("\0"), i = t.match(this.validParts); if (!e || !e.length || !i || 0 === i.length) throw new Error("Invalid date format."); return { separators: e, parts: i } }, parseDate: function (i, s, n) { if (!i) return e; if (i instanceof Date) return i; "string" == typeof s && (s = f.parseFormat(s)); var r, h, d, l = /([\-+]\d+)([dmwy])/, c = i.match(/([\-+]\d+)([dmwy])/g); if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(i)) { for (i = new Date, d = 0; d < c.length; d++)switch (r = l.exec(c[d]), h = parseInt(r[1]), r[2]) { case "d": i.setUTCDate(i.getUTCDate() + h); break; case "m": i = o.prototype.moveMonth.call(o.prototype, i, h); break; case "w": i.setUTCDate(i.getUTCDate() + 7 * h); break; case "y": i = o.prototype.moveYear.call(o.prototype, i, h) }return a(i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate(), 0, 0, 0) } c = i && i.match(this.nonpunctuation) || [], i = new Date; var u, g, D = {}, v = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"], m = { yyyy: function (t, e) { return t.setUTCFullYear(e) }, yy: function (t, e) { return t.setUTCFullYear(2e3 + e) }, m: function (t, e) { if (isNaN(t)) return t; for (e -= 1; e < 0;)e += 12; for (e %= 12, t.setUTCMonth(e); t.getUTCMonth() !== e;)t.setUTCDate(t.getUTCDate() - 1); return t }, d: function (t, e) { return t.setUTCDate(e) } }; m.M = m.MM = m.mm = m.m, m.dd = m.d, i = a(i.getFullYear(), i.getMonth(), i.getDate(), 0, 0, 0); var y = s.parts.slice(); function w() { var t = this.slice(0, c[d].length); return t === c[d].slice(0, t.length) } if (c.length !== y.length && (y = t(y).filter(function (e, i) { return -1 !== t.inArray(i, v) }).toArray()), c.length === y.length) { var k, _, C; for (d = 0, k = y.length; d < k; d++) { if (u = parseInt(c[d], 10), r = y[d], isNaN(u)) switch (r) { case "MM": g = t(p[n].months).filter(w), u = t.inArray(g[0], p[n].months) + 1; break; case "M": g = t(p[n].monthsShort).filter(w), u = t.inArray(g[0], p[n].monthsShort) + 1 }D[r] = u } for (d = 0; d < v.length; d++)(C = v[d]) in D && !isNaN(D[C]) && (_ = new Date(i), m[C](_, D[C]), isNaN(_) || (i = _)) } return i }, formatDate: function (e, i, a) { if (!e) return ""; "string" == typeof i && (i = f.parseFormat(i)); var s = { d: e.getUTCDate(), D: p[a].daysShort[e.getUTCDay()], DD: p[a].days[e.getUTCDay()], m: e.getUTCMonth() + 1, M: p[a].monthsShort[e.getUTCMonth()], MM: p[a].months[e.getUTCMonth()], yy: e.getUTCFullYear().toString().substring(2), yyyy: e.getUTCFullYear() }; s.dd = (s.d < 10 ? "0" : "") + s.d, s.mm = (s.m < 10 ? "0" : "") + s.m, e = []; for (var n = t.extend([], i.separators), r = 0, h = i.parts.length; r <= h; r++)n.length && e.push(n.shift()), e.push(s[i.parts[r]]); return e.join("") }, headTemplate: '<thead><tr><th class="prev">&laquo;</th><th colspan="5" class="datepicker-switch"></th><th class="next">&raquo;</th></tr></thead>', contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>', footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>' }; f.template = '<div class="datepicker"><div class="datepicker-days"><table class="table table-condensed">' + f.headTemplate + "<tbody></tbody>" + f.footTemplate + '</table></div><div class="datepicker-months"><table class="table table-condensed">' + f.headTemplate + f.contTemplate + f.footTemplate + '</table></div><div class="datepicker-years"><table class="table table-condensed">' + f.headTemplate + f.contTemplate + f.footTemplate + "</table></div></div>", t.fn.datepicker.DPGlobal = f, t.fn.datepicker.noConflict = function () { return t.fn.datepicker = l, this }, t(document).on("focus.datepicker.data-api click.datepicker.data-api", '[data-provide="datepicker"]', function (e) { var i = t(this); i.data("datepicker") || (e.preventDefault(), i.datepicker("show")) }), t(function () { t('[data-provide="datepicker-inline"]').datepicker() }) }(window.jQuery);

/*
 * jQzoom Evolution Library v2.3  - Javascript Image magnifier
 * http://www.mind-projects.it
 *
 * Copyright 2011, Engineer Marco Renzi
 * Licensed under the BSD license.
 */
! function ($) {
	"use strict";
	var body = $(document.body),
		window = $(window),
		jqzoompluging_disabled = !1;
	$.fn.jqzoom = function (e) {
		return this.each(function () {
			"a" == this.nodeName.toLowerCase() && new jqzoom(this, e)
		})
	};
	var jqzoom = function (el, options) {
		var api = null;
		if (api = $(el).data("jqzoom"), api) return api;
		var obj = this,
			settings = $.extend({}, $.jqzoom.defaults, options || {});
		obj.el = el, el.rel = $(el).attr("data-rel"), el.zoom_active = !1, el.zoom_disabled = !1, el.largeimageloading = !1, el.largeimageloaded = !1, el.scale = {}, el.timer = null, el.mousepos = {}, el.mouseDown = !1, $(el).css({
			"outline-style": "none",
			"text-decoration": "none"
		});
		var img = $("img:eq(0)", el);
		el.title = $(el).attr("title"), el.imagetitle = img.attr("title");
		var zoomtitle = $.trim(el.title).length > 0 ? el.title : el.imagetitle,
			smallimage = new Smallimage(img),
			lens = new Lens,
			stage = new Stage,
			largeimage = new Largeimage,
			loader = new Loader;
		$(el).bind("click", function (e) {
			return e.preventDefault(), !1
		});
		var zoomtypes = ["standard", "drag", "innerzoom", "reverse"];

		function Smallimage(image) {
			var $obj = this;
			return this.node = image[0], this.findborder = function () {
				var bordertop = 0;
				bordertop = image.css("border-top-width");
				var btop = "",
					borderleft = 0;
				borderleft = image.css("border-left-width");
				var bleft = "";
				if (bordertop)
					for (var i = 0; i < 3; i++) {
						var x = [];
						if (x = bordertop.substr(i, 1), 0 != isNaN(x)) break;
						btop = btop + "" + bordertop.substr(i, 1)
					}
				if (borderleft)
					for (i = 0; i < 3 && !isNaN(borderleft.substr(i, 1)); i++) bleft += borderleft.substr(i, 1);
				$obj.btop = btop.length > 0 ? eval(btop) : 0, $obj.bleft = bleft.length > 0 ? eval(bleft) : 0
			}, this.fetchdata = function () {
				$obj.findborder(), $obj.w = image.width(), $obj.h = image.height(), $obj.ow = image.outerWidth(), $obj.oh = image.outerHeight(), $obj.pos = image.offset(), $obj.pos.l = image.offset().left + $obj.bleft, $obj.pos.t = image.offset().top + $obj.btop, $obj.pos.r = $obj.w + $obj.pos.l, $obj.pos.b = $obj.h + $obj.pos.t, $obj.rightlimit = image.offset().left + $obj.ow, $obj.bottomlimit = image.offset().top + $obj.oh
			}, this.node.onerror = function () {
				throw alert("Problems while loading image."), "Problems while loading image."
			}, this.node.onload = function () {
				$obj.fetchdata(), 0 == $(".zoomPad", el).length && obj.create()
			}, $obj
		}

		function Loader() {
			return this.append = function () {
				this.node = $("<div/>").addClass("zoomPreload").css("visibility", "hidden").html(settings.preloadText), $(".zoomPad", el).append(this.node)
			}, this.show = function () {
				this.node.top = (smallimage.oh - this.node.height()) / 2, this.node.left = (smallimage.ow - this.node.width()) / 2, this.node.css({
					top: this.node.top,
					left: this.node.left,
					position: "absolute",
					visibility: "visible"
				})
			}, this.hide = function () {
				this.node.css("visibility", "hidden")
			}, this
		}

		function Lens() {
			var e = this;
			return this.node = $("<div/>").addClass("zoomPup"), this.append = function () {
				$(".zoomPad", el).append($(this.node).hide()), "reverse" == settings.zoomType && (this.image = new Image, this.image.src = smallimage.node.src, $(this.node).empty().append(this.image))
			}, this.setdimensions = function () {
				this.node.w = parseInt(settings.zoomWidth / el.scale.x) > smallimage.w ? smallimage.w : parseInt(settings.zoomWidth / el.scale.x), this.node.h = parseInt(settings.zoomHeight / el.scale.y) > smallimage.h ? smallimage.h : parseInt(settings.zoomHeight / el.scale.y), this.node.top = (smallimage.oh - this.node.h - 2) / 2, this.node.left = (smallimage.ow - this.node.w - 2) / 2, this.node.css({
					top: 0,
					left: 0,
					width: this.node.w + "px",
					height: this.node.h + "px",
					position: "absolute",
					display: "none",
					borderWidth: "1px"
				}), "reverse" == settings.zoomType && (this.image.src = smallimage.node.src, $(this.node).css({
					opacity: 1
				}), $(this.image).css({
					position: "absolute",
					display: "block",
					left: -(this.node.left + 1 - smallimage.bleft) + "px",
					top: -(this.node.top + 1 - smallimage.btop) + "px"
				}))
			}, this.setcenter = function () {
				this.node.top = (smallimage.oh - this.node.h - 2) / 2, this.node.left = (smallimage.ow - this.node.w - 2) / 2, this.node.css({
					top: this.node.top,
					left: this.node.left
				}), "reverse" == settings.zoomType && $(this.image).css({
					position: "absolute",
					display: "block",
					left: -(this.node.left + 1 - smallimage.bleft) + "px",
					top: -(this.node.top + 1 - smallimage.btop) + "px"
				}), largeimage.setposition()
			}, this.setposition = function (e) {
				el.mousepos.x = e.pageX, el.mousepos.y = e.pageY;
				var t, o, s, i, a = 0,
					l = 0;
				a = el.mousepos.x + smallimage.bleft - smallimage.pos.l - (this.node.w + 2) / 2, l = el.mousepos.y + smallimage.btop - smallimage.pos.t - (this.node.h + 2) / 2, o = this.node, el.mousepos.x - o.w / 2 < smallimage.pos.l ? a = smallimage.bleft - 1 : (t = this.node, el.mousepos.x + t.w / 2 > smallimage.pos.r && (a = smallimage.w + smallimage.bleft - this.node.w - 1)), i = this.node, el.mousepos.y - i.h / 2 < smallimage.pos.t ? l = smallimage.btop - 1 : (s = this.node, el.mousepos.y + s.h / 2 > smallimage.pos.b && (l = smallimage.h + smallimage.btop - this.node.h - 1)), this.node.left = a, this.node.top = l, this.node.css({
					left: a + "px",
					top: l + "px"
				}), "reverse" == settings.zoomType && ($.browser.msie && $.browser.version > 7 && $(this.node).empty().append(this.image), $(this.image).css({
					position: "absolute",
					display: "block",
					left: -(this.node.left + 1 - smallimage.bleft) + "px",
					top: -(this.node.top + 1 - smallimage.btop) + "px"
				})), largeimage.setposition()
			}, this.hide = function () {
				img.css({
					opacity: 1
				}), this.node.hide()
			}, this.show = function () {
				"innerzoom" == settings.zoomType || !settings.lens && "drag" != settings.zoomType || this.node.show(), "reverse" == settings.zoomType && img.css({
					opacity: settings.imageOpacity
				})
			}, this.getoffset = function () {
				var t = {};
				return t.left = e.node.left, t.top = e.node.top, t
			}, this
		}

		function Stage() {
			var e = this;
			this.node = $("<div class='zoomWindow'><div class='zoomWrapper'><div class='zoomWrapperImage'></div></div></div>"), this.ieframe = $('<iframe class="zoomIframe" src="javascript:\'\';" marginwidth="0" marginheight="0" align="bottom" scrolling="no" frameborder="0" ></iframe>'), this.setposition = function () {
				if (this.node.leftpos = 0, this.node.toppos = 0, "innerzoom" != settings.zoomType) switch (settings.position) {
					case "left":
						this.node.leftpos = smallimage.pos.l - smallimage.bleft - Math.abs(settings.xOffset) - settings.zoomWidth > 0 ? 0 - settings.zoomWidth - Math.abs(settings.xOffset) : smallimage.ow + Math.abs(settings.xOffset), this.node.toppos = Math.abs(settings.yOffset);
						break;
					case "top":
						this.node.leftpos = Math.abs(settings.xOffset), this.node.toppos = smallimage.pos.t - smallimage.btop - Math.abs(settings.yOffset) - settings.zoomHeight > 0 ? 0 - settings.zoomHeight - Math.abs(settings.yOffset) : smallimage.oh + Math.abs(settings.yOffset);
						break;
					case "bottom":
						this.node.leftpos = Math.abs(settings.xOffset), this.node.toppos = smallimage.pos.t - smallimage.btop + smallimage.oh + Math.abs(settings.yOffset) + settings.zoomHeight < screen.height ? smallimage.oh + Math.abs(settings.yOffset) : 0 - settings.zoomHeight - Math.abs(settings.yOffset);
						break;
					default:
						this.node.leftpos = smallimage.rightlimit + Math.abs(settings.xOffset) + settings.zoomWidth < screen.width ? smallimage.ow + Math.abs(settings.xOffset) : 0 - settings.zoomWidth - Math.abs(settings.xOffset), this.node.toppos = Math.abs(settings.yOffset)
				}
				return this.node.css({
					left: this.node.leftpos + "px",
					top: this.node.toppos + "px"
				}), this
			}, this.append = function () {
				if ($(".zoomPad", el).append(this.node), this.node.css({
					position: "absolute",
					display: "none",
					zIndex: 5001
				}), "innerzoom" == settings.zoomType) {
					this.node.css({
						cursor: "default"
					});
					var t = 0 == smallimage.bleft ? 1 : smallimage.bleft;
					$(".zoomWrapper", this.node).css({
						borderWidth: t + "px"
					})
				}
				$(".zoomWrapper", this.node).css({
					width: Math.round(settings.zoomWidth) + "px",
					borderWidth: t + "px"
				}), $(".zoomWrapperImage", this.node).css({
					width: "100%",
					height: Math.round(settings.zoomHeight) + "px"
				}), e.setposition()
			}, this.hide = function () {
				switch (settings.hideEffect) {
					case "fadeout":
						this.node.fadeOut(settings.fadeoutSpeed, function () { });
						break;
					default:
						this.node.hide()
				}
				this.ieframe.hide()
			}, this.show = function () {
				switch (settings.showEffect) {
					case "fadein":
						this.node.fadeIn(), this.node.fadeIn(settings.fadeinSpeed, function () { });
						break;
					default:
						this.node.show()
				}
				"innerzoom" != settings.zoomType && (this.ieframe.width = this.node.width(), this.ieframe.height = this.node.height(), this.ieframe.left = this.node.leftpos, this.ieframe.top = this.node.toppos, this.ieframe.css({
					display: "block",
					position: "absolute",
					left: this.ieframe.left,
					top: this.ieframe.top,
					zIndex: 99,
					width: this.ieframe.width + "px",
					height: this.ieframe.height + "px"
				}), $(".zoomPad", el).append(this.ieframe), this.ieframe.show())
			}
		}

		function Largeimage() {
			var e = this;
			return this.node = new Image, this.loadimage = function (e) {
				loader.show(), this.url = e, this.node.style.position = "absolute", this.node.style.border = "0px", this.node.style.display = "none", this.node.style.left = "-5000px", this.node.style.top = "0px", document.body.appendChild(this.node), this.node.src = e
			}, this.fetchdata = function () {
				var t = $(this.node),
					o = {};
				this.node.style.display = "block", e.w = t.width(), e.h = t.height(), e.pos = t.offset(), e.pos.l = t.offset().left, e.pos.t = t.offset().top, e.pos.r = e.w + e.pos.l, e.pos.b = e.h + e.pos.t, o.x = e.w / smallimage.w, o.y = e.h / smallimage.h, el.scale = o, document.body.removeChild(this.node), $(".zoomWrapperImage", el).empty().append(this.node), lens.setdimensions()
			}, this.node.onerror = function () {
				throw alert("Problems while loading the big image."), "Problems while loading the big image."
			}, this.node.onload = function () {
				e.fetchdata(), loader.hide(), el.largeimageloading = !1, el.largeimageloaded = !0, ("drag" == settings.zoomType || settings.alwaysOn) && (lens.show(), stage.show(), lens.setcenter())
			}, this.setposition = function () {
				var e = -el.scale.x * (lens.getoffset().left - smallimage.bleft + 1),
					t = -el.scale.y * (lens.getoffset().top - smallimage.btop + 1);
				$(this.node).css({
					left: e + "px",
					top: t + "px"
				})
			}, this
		}
		$.inArray($.trim(settings.zoomType), zoomtypes) < 0 && (settings.zoomType = "standard"), $.extend(obj, {
			create: function () {
				0 == $(".zoomPad", el).length && (el.zoomPad = $("<div/>").addClass("zoomPad"), img.wrap(el.zoomPad)), "innerzoom" == settings.zoomType && (settings.zoomWidth = smallimage.w, settings.zoomHeight = smallimage.h), 0 == $(".zoomPup", el).length && lens.append(), 0 == $(".zoomWindow", el).length && stage.append(), 0 == $(".zoomPreload", el).length && loader.append(), (settings.preloadImages || "drag" == settings.zoomType || settings.alwaysOn) && obj.load(), obj.init()
			},
			init: function () {
				"drag" == settings.zoomType && ($(".zoomPad", el).mousedown(function () {
					el.mouseDown = !0
				}), $(".zoomPad", el).mouseup(function () {
					el.mouseDown = !1
				}), document.body.ondragstart = function () {
					return !1
				}, $(".zoomPad", el).css({
					cursor: "default"
				}), $(".zoomPup", el).css({
					cursor: "move"
				})), "innerzoom" == settings.zoomType && $(".zoomWrapper", el).css({
					cursor: "crosshair"
				}), $(".zoomPad", el).bind("mouseenter mouseover", function (e) {
					img.attr("title", ""), $(el).attr("title", ""), el.zoom_active = !0, smallimage.fetchdata(), el.largeimageloaded ? obj.activate(e) : obj.load()
				}), $(".zoomPad", el).bind("mouseleave", function (e) {
					obj.deactivate()
				}), $(".zoomPad", el).bind("mousemove", function (e) {
					if (e.pageX > smallimage.pos.r || e.pageX < smallimage.pos.l || e.pageY < smallimage.pos.t || e.pageY > smallimage.pos.b) return lens.setcenter(), !1;
					el.zoom_active = !0, el.largeimageloaded && !$(".zoomWindow", el).is(":visible") && obj.activate(e), el.largeimageloaded && ("drag" != settings.zoomType || "drag" == settings.zoomType && el.mouseDown) && lens.setposition(e)
				});
				var thumb_preload = new Array,
					i = 0,
					thumblist = new Array;
				if (thumblist = $("a").filter(function () {
					var e = new RegExp("gallery[\\s]*:[\\s]*'" + $.trim(el.rel) + "'", "i"),
						t = $(this).attr("data-rel");
					if (e.test(t)) return this
				}), thumblist.length > 0) {
					var first = thumblist.splice(0, 1);
					thumblist.push(first)
				}
				thumblist.each(function () {
					if (settings.preloadImages) {
						var thumb_options = $.extend({}, eval("(" + $.trim($(this).attr("data-rel")) + ")"));
						thumb_preload[i] = new Image, thumb_preload[i].src = thumb_options.largeimage, i++
					}
					$(this).on("click", function (e) {
						return !$(this).hasClass("zoomThumbActive") && (thumblist.each(function () {
							$(this).removeClass("zoomThumbActive")
						}), e.preventDefault(), obj.swapimage(this), !1)
					})
				})
			},
			load: function () {
				if (0 == el.largeimageloaded && 0 == el.largeimageloading) {
					var e = $(el).attr("href");
					el.largeimageloading = !0, largeimage.loadimage(e)
				}
			},
			activate: function (e) {
				clearTimeout(el.timer), lens.show(), stage.show()
			},
			deactivate: function (e) {
				switch (settings.zoomType) {
					case "drag":
						break;
					default:
						img.attr("title", el.imagetitle), $(el).attr("title", el.title), settings.alwaysOn ? lens.setcenter() : (stage.hide(), lens.hide())
				}
				el.zoom_active = !1
			},
			swapimage: function (link) {
				el.largeimageloading = !1, el.largeimageloaded = !1;
				var options = new Object;
				if (options = $.extend({}, eval("(" + $.trim($(link).attr("data-rel")) + ")")), !options.smallimage || !options.largeimage) throw alert("ERROR :: Missing parameter for largeimage or smallimage."), "ERROR :: Missing parameter for largeimage or smallimage.";
				var smallimage = options.smallimage,
					largeimage = options.largeimage;
				return $(link).addClass("zoomThumbActive"), $(el).attr("href", largeimage), img.attr("src", smallimage), lens.hide(), stage.hide(), obj.load(), !1
			}
		}), img[0].complete && (smallimage.fetchdata(), 0 == $(".zoomPad", el).length && obj.create()), $(el).data("jqzoom", obj)
	};
	$.jqzoom = {
		defaults: {
			zoomType: "standard",
			zoomWidth: 300,
			zoomHeight: 300,
			xOffset: 10,
			yOffset: 0,
			position: "right",
			preloadImages: !0,
			preloadText: "Loading image...",
			title: !0,
			lens: !0,
			imageOpacity: .4,
			alwaysOn: !1,
			showEffect: "show",
			hideEffect: "hide",
			fadeinSpeed: "slow",
			fadeoutSpeed: "2000"
		},
		disable: function (e) {
			return $(e).data("jqzoom").disable(), !1
		},
		enable: function (e) {
			return $(e).data("jqzoom").enable(), !1
		},
		disableAll: function (e) {
			jqzoompluging_disabled = !0
		},
		enableAll: function (e) {
			jqzoompluging_disabled = !1
		}
	}
}(jQuery);
(function (e) { e.fn.ddslick = function (l) { if (c[l]) { return c[l].apply(this, Array.prototype.slice.call(arguments, 1)) } else { if (typeof l === "object" || !l) { return c.init.apply(this, arguments) } else { e.error("Method " + l + " does not exists.") } } }; var c = {}, d = { data: [], keepJSONItemsOnTop: false, width: 260, height: null, background: "#eee", selectText: "", defaultSelectedIndex: null, truncateDescription: true, imagePosition: "left", showSelectedHTML: true, clickOffToClose: true, embedCSS: true, onSelected: function () { } }, i = '<div class="dd-select"><input class="dd-selected-value" type="hidden" /><a class="dd-selected"></a><span class="dd-pointer dd-pointer-down"></span></div>', a = '<ul class="dd-options"></ul>', b = '<style id="css-ddslick" type="text/css">.dd-select{ border-radius:2px; border:solid 1px #ccc; position:relative; cursor:pointer;}.dd-desc { color:#aaa; display:block; overflow: hidden; font-weight:normal; line-height: 1.4em; }.dd-selected{ overflow:hidden; display:block; font-weight:bold;}.dd-pointer{ width:0; height:0; position:absolute; right:10px; top:50%; margin-top:-3px;}.dd-pointer-down{ border:solid 5px transparent; border-top:solid 5px #000; }.dd-pointer-up{border:solid 5px transparent !important; border-bottom:solid 5px #000 !important; margin-top:-8px;}.dd-options{ border:solid 1px #ccc; border-top:none; list-style:none; box-shadow:0px 1px 5px #ddd; display:none; position:absolute; z-index:2000; margin:0; padding:0;background:#fff; overflow:auto;}.dd-option{ padding:10px; display:block; border-bottom:solid 1px #ddd; overflow:hidden; text-decoration:none; color:#333; cursor:pointer;-webkit-transition: all 0.25s ease-in-out; -moz-transition: all 0.25s ease-in-out;-o-transition: all 0.25s ease-in-out;-ms-transition: all 0.25s ease-in-out; }.dd-options > li:last-child > .dd-option{ border-bottom:none;}.dd-option:hover{ background:#f3f3f3; color:#000;}.dd-selected-description-truncated { text-overflow: ellipsis; white-space:nowrap; }.dd-option-selected { background:#f6f6f6; }.dd-option-image, .dd-selected-image { vertical-align:middle; float:left; margin-right:5px; max-width:64px;}.dd-image-right { float:right; margin-right:15px; margin-left:5px;}.dd-container{ position:relative;}​ .dd-selected-text { font-weight:bold}​</style>'; c.init = function (l) { var l = e.extend({}, d, l); if (e("#css-ddslick").length <= 0 && l.embedCSS) { e(b).appendTo("head") } return this.each(function () { var p = e(this), q = p.data("ddslick"); if (!q) { var n = [], o = l.data; p.find("option").each(function () { var w = e(this), v = w.data(); n.push({ text: e.trim(w.text()), value: w.val(), selected: w.is(":selected"), description: v.description, imageSrc: v.imagesrc }) }); if (l.keepJSONItemsOnTop) { e.merge(l.data, n) } else { l.data = e.merge(n, l.data) } var m = p, s = e('<div id="' + p.attr("id") + '"></div>'); p.replaceWith(s); p = s; p.addClass("dd-container").append(i).append(a); var n = p.find(".dd-select"), u = p.find(".dd-options"); u.css({ width: l.width }); n.css({ width: l.width, background: l.background }); p.css({ width: l.width }); if (l.height != null) { u.css({ height: l.height, overflow: "auto" }) } e.each(l.data, function (v, w) { if (w.selected) { l.defaultSelectedIndex = v } u.append('<li><a class="dd-option">' + (w.value ? ' <input class="dd-option-value" type="hidden" value="' + w.value + '" />' : "") + (w.imageSrc ? ' <img class="dd-option-image' + (l.imagePosition == "right" ? " dd-image-right" : "") + '" src="' + w.imageSrc + '" />' : "") + (w.text ? ' <label class="dd-option-text">' + w.text + "</label>" : "") + (w.description ? ' <small class="dd-option-description dd-desc">' + w.description + "</small>" : "") + "</a></li>") }); var t = { settings: l, original: m, selectedIndex: -1, selectedItem: null, selectedData: null }; p.data("ddslick", t); if (l.selectText.length > 0 && l.defaultSelectedIndex == null) { p.find(".dd-selected").html(l.selectText) } else { var r = (l.defaultSelectedIndex != null && l.defaultSelectedIndex >= 0 && l.defaultSelectedIndex < l.data.length) ? l.defaultSelectedIndex : 0; j(p, r) } p.find(".dd-select").on("click.ddslick", function () { f(p) }); p.find(".dd-option").on("click.ddslick", function () { j(p, e(this).closest("li").index()) }); if (l.clickOffToClose) { u.addClass("dd-click-off-close"); p.on("click.ddslick", function (v) { v.stopPropagation() }); e("body").on("click", function () { e(".dd-click-off-close").slideUp(50).siblings(".dd-select").find(".dd-pointer").removeClass("dd-pointer-up") }) } } }) }; c.select = function (l) { return this.each(function () { if (l.index !== undefined) { j(e(this), l.index) } }) }; c.open = function () { return this.each(function () { var m = e(this), l = m.data("ddslick"); if (l) { f(m) } }) }; c.close = function () { return this.each(function () { var m = e(this), l = m.data("ddslick"); if (l) { k(m) } }) }; c.destroy = function () { return this.each(function () { var n = e(this), m = n.data("ddslick"); if (m) { var l = m.original; n.removeData("ddslick").unbind(".ddslick").replaceWith(l) } }) }; function j(q, s) { var u = q.data("ddslick"); var r = q.find(".dd-selected"), n = r.siblings(".dd-selected-value"), v = q.find(".dd-options"), l = r.siblings(".dd-pointer"), p = q.find(".dd-option").eq(s), m = p.closest("li"), o = u.settings, t = u.settings.data[s]; q.find(".dd-option").removeClass("dd-option-selected"); p.addClass("dd-option-selected"); u.selectedIndex = s; u.selectedItem = m; u.selectedData = t; if (o.showSelectedHTML) { r.html((t.imageSrc ? '<img class="dd-selected-image' + (o.imagePosition == "right" ? " dd-image-right" : "") + '" src="' + t.imageSrc + '" />' : "") + (t.text ? '<label class="dd-selected-text">' + t.text + "</label>" : "") + (t.description ? '<small class="dd-selected-description dd-desc' + (o.truncateDescription ? " dd-selected-description-truncated" : "") + '" >' + t.description + "</small>" : "")) } else { r.html(t.text) } n.val(t.value); u.original.val(t.value); q.data("ddslick", u); k(q); g(q); if (typeof o.onSelected == "function") { o.onSelected.call(this, u) } } function f(p) { var o = p.find(".dd-select"), m = o.siblings(".dd-options"), l = o.find(".dd-pointer"), n = m.is(":visible"); e(".dd-click-off-close").not(m).slideUp(50); e(".dd-pointer").removeClass("dd-pointer-up"); if (n) { m.slideUp("fast"); l.removeClass("dd-pointer-up") } else { m.slideDown("fast"); l.addClass("dd-pointer-up") } h(p) } function k(l) { l.find(".dd-options").slideUp(50); l.find(".dd-pointer").removeClass("dd-pointer-up").removeClass("dd-pointer-up") } function g(o) { var n = o.find(".dd-select").css("height"); var m = o.find(".dd-selected-description"); var l = o.find(".dd-selected-image"); if (m.length <= 0 && l.length > 0) { o.find(".dd-selected-text").css("lineHeight", n) } } function h(l) { l.find(".dd-option").each(function () { var p = e(this); var n = p.css("height"); var o = p.find(".dd-option-description"); var m = l.find(".dd-option-image"); if (o.length <= 0 && m.length > 0) { p.find(".dd-option-text").css("lineHeight", n) } }) } })(jQuery);
/*!

jQuery Plugin Mobile Mega Menu
Blake Cerecero
Blake@DigitalBlake.com
http://DigitalBlake.com
@blakecerecero

*/
'use strict';

(function ($) {
	jQuery.fn.extend({

		// Plugin Name
		mobileMegaMenu: function (options) {

			// Defaults options are set here
			// Every default goes within the { } brackets as seen below
			// A comma separates the different values
			var defaults = {
				changeToggleText: false,
				enableWidgetRegion: false,
				prependCloseButton: false,
				stayOnActive: true,
				toogleTextOnClose: 'Close Menu',
				menuToggle: 'toggle-menu'
			};

			var settings = $.extend(defaults, options);

			return this.each(function () {
				/* ------------------------- Plugin Starts Here ------------------------- */

				/* Variables */
				var animationSpeed = 250, // Change SCSS to match this speed
					nextButton = '<a class="next-button" href="#"><div class="arrow"><i class="fas fa-chevron-right"></i></div></a>',
					backButton = '<li><a class="back-button" href="#"><i class="fas fa-chevron-left"></i> Back</a></li>',
					closeButton = '<li><a class="close-button ' + settings.menuToggle + '" href="#">Close Menu</a></li>',
					maxHeight = -1;

				var $menuRoot = $(this), // Root of Mobile Mega Menu
					$currentText = $('a.' + settings.menuToggle).html(); // Existing text of menu toggle

				/* ------------------------- Add next button to main menu items with sub menus and add back button to top of every sub ul after the root */
				$menuRoot.find('ul a').addClass('menu-item');
				$menuRoot.find('ul ul').before(nextButton).siblings('a:first-of-type').addClass('has-next-button');
				$menuRoot.find('ul ul').prepend(backButton);

				/* ------------------------- Prepend Close Button  */
				if (settings.prependCloseButton) {
					$menuRoot.find('ul').closest('ul').prepend(closeButton);
				}

				/* Variables */
				var $toggleMenu = $('a.' + settings.menuToggle), // DOM Search for Menu Toggle
					$nextAction = $menuRoot.find('a.next-button'), // DOM Search for Next Button
					$backAction = $menuRoot.find('a.back-button'); // DOM Search for Back Button

				/* ------------------------- Generate and move Widget Region */
				if (settings.enableWidgetRegion) {
					var widgets = $menuRoot.find('.widget-region').detach();
					$menuRoot.find('ul:first').append(widgets);
				}

				/* ------------------------- Set a variable to calculate height of the tallest ul in the menu, then set that height as the min-height of the menu container */
				var subLists = $menuRoot.find('ul');
				var resizeTimer;

				// use setTimeout to prevent function call on every pixel resize
				// for better performance
				$(window).resize(function () {
					clearTimeout(resizeTimer);

					resizeTimer = setTimeout(function () {
						min_el_height();
					}, 500);
				});

				function min_el_height() {
					subLists.toArray().forEach(function (element) {
						maxHeight = maxHeight > $(element).height() ? maxHeight : $(element).height();
					});

					$menuRoot.css('min-height', maxHeight - 188);
				};

				min_el_height(); // call function once on initialization

				/* ------------------------- Set active menu item as is-in-view */
				if (settings.stayOnActive) {
					var windowHref = window.location.href;
					var pageUrl = windowHref.replace('#', '');

					// Will also work for relative and absolute hrefs
					$menuRoot.find('ul li a').filter(function () {
						// Grab anchors that are part of the original menu structure and not anything added by the plugin
						if ($(this).hasClass('menu-item')) {
							// Turn the href for the anchor into an array
							var menuItem = String(this.href).split('/');
							menuItem.pop(); // Remove last empty item in array
							menuItem.pop(); // Remove last page item in array

							// Find parent of anchor and turn it into an array
							var currentItemParent = $(this).parents('li').parents('li').children('a.menu-item')
							var currentItemParentURL = String($(currentItemParent).attr('href')).split('/');
							currentItemParentURL.pop(); // Remove last empty item in array

							if (currentItemParent.length) { // If the current page has a parent
								if (JSON.stringify(menuItem) === JSON.stringify(currentItemParentURL)) { // JSON.stringify so we can compare our arrays
									return this.href === pageUrl; // If the page URL and menu URL match return true
								}
							} else {
								return this.href === pageUrl; // If the page URL and menu URL match return true
							}
						}
					}).addClass('active').css('font-weight', 'bold');

					if ($menuRoot.find('a.active').siblings('ul').length > 0) {
						$menuRoot.find('a.active').removeClass('active').css('font-weight', 'bold').siblings('ul').find('li:first-of-type').first().find('a').addClass('active');
					}

					$menuRoot.find('a.active').closest('ul').addClass('is-in-view').parents('ul').addClass('has-been-viewed');
					$menuRoot.find('a.active').closest('ul').parents().siblings('li').find('ul').hide();
				}

				/* ------------------------- Actions ------------------------- */

				/* ------------------------- Open Menu ------------------------- */
				$toggleMenu.click(function (event) {
					event.preventDefault();

					/* When the menu is first opened give the first ul its is-in-view class */
					if (!$menuRoot.find('ul:first-child').hasClass('has-been-viewed')) {
						$menuRoot.find('ul:first-child').toggleClass('is-in-view');
					}

					/* Change text when the menu is open to show the option to close the menu */
					if (settings.changeToggleText) {
						if (!$menuRoot.hasClass('open')) {
							$('a.' + settings.menuToggle).html(settings.toogleTextOnClose);
						} else if ($menuRoot.hasClass('open')) {
							$('a.' + settings.menuToggle).html($currentText);
						}
					}

					/* Open menu by adding open class and removing hidden, reverse on close */
					$menuRoot.toggleClass('open');

				});/* End a.toggle-menu */



				/* ------------------------- Next Button ------------------------- */
				$nextAction.click(function (event) {
					event.preventDefault();

					setTimeout(function () {
						$('html, body').animate({ scrollTop: 0 }, animationSpeed);
					}, animationSpeed);

					/* Set is-in-view class for current ul and only that ul */
					$(this).siblings('ul:first-of-type').addClass('is-in-view');
					/* Once the sub ul is visible we hide other sibling uls so that they do not appear above the is-in-view ul */
					$(this).parents().siblings('li').find('ul').hide();
					/* If we use the back button and decide to go into another submenu we need to bring back the hidden sibling uls */
					$(this).siblings('ul').show();
					/* Once we go in a level we remove the is-in-view class and add the has-been-viewed class, this allows for the slide off animation and the slide in animations  */
					$(this).parents('ul:first-of-type').addClass('has-been-viewed').removeClass('is-in-view');
				});



				/* ------------------------- Back Button ------------------------- */
				$backAction.click(function (event) {
					event.preventDefault();

					/* As we traverse back up the menu we reset the previous menu item from has-been-viewed to the is-in-view class.
					Bringing back the slide in and slide off aniamtions. Once the animation is complete we go back down the DOM and remove the previous is-in-view ul class */
					$(this).parents('ul.is-in-view').closest('ul.has-been-viewed').toggleClass('has-been-viewed is-in-view').promise().done(function () {
						$menuRoot.find('ul.is-in-view ul.is-in-view').toggleClass('is-in-view');
					});
				});



				/* ------------------------- Modernizer: For when css animations are not supported ------------------------- */
				if ($('html').hasClass('no-csstransforms') || $('html').hasClass('no-cssanimations')) {

					/* Toggle Menu */
					$toggleMenu.click(function (event) {
						event.preventDefault();

						$menuRoot.css('transform', 'none');

						if ($menuRoot.hasClass('open')) {
							$menuRoot.animate({
								left: 0
							});
						} else {
							$menuRoot.animate({
								left: '-100%'
							});
						}

					});

					/* Next */
					$nextAction.click(function (event) {
						event.preventDefault();

						$menuRoot.find('.has-been-viewed').css('transform', 'none');

						$menuRoot.find('ul').animate({
							right: '+=100%'
						}, animationSpeed);
					});

					/* Back */
					$backAction.click(function (event) {
						event.preventDefault();

						$menuRoot.find('.has-been-viewed').css('transform', 'none');

						$menuRoot.find('ul').animate({
							right: '-=100%'
						}, animationSpeed);
					});

				} /* End Modernizer */



			}); // End this.each / End Plugin

		} // End mobileMegaMenu
	}); // End jQuery.fn.extend
}(jQuery)); // End function

!function (i) { "use strict"; "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery) }(function (i) { "use strict"; var e = window.Slick || {}; (e = function () { var e = 0; return function (t, o) { var s, n = this; n.defaults = { accessibility: !0, adaptiveHeight: !1, appendArrows: i(t), appendDots: i(t), arrows: !0, asNavFor: null, prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>', nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>', autoplay: !1, autoplaySpeed: 3e3, centerMode: !1, centerPadding: "50px", cssEase: "ease", customPaging: function (e, t) { return i('<button type="button" />').text(t + 1) }, dots: !1, dotsClass: "slick-dots", draggable: !0, easing: "linear", edgeFriction: .35, fade: !1, focusOnSelect: !1, focusOnChange: !1, infinite: !0, initialSlide: 0, lazyLoad: "ondemand", mobileFirst: !1, pauseOnHover: !0, pauseOnFocus: !0, pauseOnDotsHover: !1, respondTo: "window", responsive: null, rows: 1, rtl: !1, slide: "", slidesPerRow: 1, slidesToShow: 1, slidesToScroll: 1, speed: 500, swipe: !0, swipeToSlide: !1, touchMove: !0, touchThreshold: 5, useCSS: !0, useTransform: !0, variableWidth: !1, vertical: !1, verticalSwiping: !1, waitForAnimate: !0, zIndex: 1e3 }, n.initials = { animating: !1, dragging: !1, autoPlayTimer: null, currentDirection: 0, currentLeft: null, currentSlide: 0, direction: 1, $dots: null, listWidth: null, listHeight: null, loadIndex: 0, $nextArrow: null, $prevArrow: null, scrolling: !1, slideCount: null, slideWidth: null, $slideTrack: null, $slides: null, sliding: !1, slideOffset: 0, swipeLeft: null, swiping: !1, $list: null, touchObject: {}, transformsEnabled: !1, unslicked: !1 }, i.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = i(t), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, s = i(t).data("slick") || {}, n.options = i.extend({}, n.defaults, o, s), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = i.proxy(n.autoPlay, n), n.autoPlayClear = i.proxy(n.autoPlayClear, n), n.autoPlayIterator = i.proxy(n.autoPlayIterator, n), n.changeSlide = i.proxy(n.changeSlide, n), n.clickHandler = i.proxy(n.clickHandler, n), n.selectHandler = i.proxy(n.selectHandler, n), n.setPosition = i.proxy(n.setPosition, n), n.swipeHandler = i.proxy(n.swipeHandler, n), n.dragHandler = i.proxy(n.dragHandler, n), n.keyHandler = i.proxy(n.keyHandler, n), n.instanceUid = e++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0) } }()).prototype.activateADA = function () { this.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" }) }, e.prototype.addSlide = e.prototype.slickAdd = function (e, t, o) { var s = this; if ("boolean" == typeof t) o = t, t = null; else if (t < 0 || t >= s.slideCount) return !1; s.unload(), "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : !0 === o ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function (e, t) { i(t).attr("data-slick-index", e) }), s.$slidesCache = s.$slides, s.reinit() }, e.prototype.animateHeight = function () { var i = this; if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) { var e = i.$slides.eq(i.currentSlide).outerHeight(!0); i.$list.animate({ height: e }, i.options.speed) } }, e.prototype.animateSlide = function (e, t) { var o = {}, s = this; s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (e = -e), !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({ left: e }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({ top: e }, s.options.speed, s.options.easing, t) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft), i({ animStart: s.currentLeft }).animate({ animStart: e }, { duration: s.options.speed, easing: s.options.easing, step: function (i) { i = Math.ceil(i), !1 === s.options.vertical ? (o[s.animType] = "translate(" + i + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)", s.$slideTrack.css(o)) }, complete: function () { t && t.call() } })) : (s.applyTransition(), e = Math.ceil(e), !1 === s.options.vertical ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(o), t && setTimeout(function () { s.disableTransition(), t.call() }, s.options.speed)) }, e.prototype.getNavTarget = function () { var e = this, t = e.options.asNavFor; return t && null !== t && (t = i(t).not(e.$slider)), t }, e.prototype.asNavFor = function (e) { var t = this.getNavTarget(); null !== t && "object" == typeof t && t.each(function () { var t = i(this).slick("getSlick"); t.unslicked || t.slideHandler(e, !0) }) }, e.prototype.applyTransition = function (i) { var e = this, t = {}; !1 === e.options.fade ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t) }, e.prototype.autoPlay = function () { var i = this; i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed)) }, e.prototype.autoPlayClear = function () { var i = this; i.autoPlayTimer && clearInterval(i.autoPlayTimer) }, e.prototype.autoPlayIterator = function () { var i = this, e = i.currentSlide + i.options.slidesToScroll; i.paused || i.interrupted || i.focussed || (!1 === i.options.infinite && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll, i.currentSlide - 1 == 0 && (i.direction = 1))), i.slideHandler(e)) }, e.prototype.buildArrows = function () { var e = this; !0 === e.options.arrows && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" })) }, e.prototype.buildDots = function () { var e, t, o = this; if (!0 === o.options.dots) { for (o.$slider.addClass("slick-dotted"), t = i("<ul />").addClass(o.options.dotsClass), e = 0; e <= o.getDotCount(); e += 1)t.append(i("<li />").append(o.options.customPaging.call(this, o, e))); o.$dots = t.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active") } }, e.prototype.buildOut = function () { var e = this; e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function (e, t) { i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "") }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable") }, e.prototype.buildRows = function () { var i, e, t, o, s, n, r, l = this; if (o = document.createDocumentFragment(), n = l.$slider.children(), l.options.rows > 1) { for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; i < s; i++) { var d = document.createElement("div"); for (e = 0; e < l.options.rows; e++) { var a = document.createElement("div"); for (t = 0; t < l.options.slidesPerRow; t++) { var c = i * r + (e * l.options.slidesPerRow + t); n.get(c) && a.appendChild(n.get(c)) } d.appendChild(a) } o.appendChild(d) } l.$slider.empty().append(o), l.$slider.children().children().children().css({ width: 100 / l.options.slidesPerRow + "%", display: "inline-block" }) } }, e.prototype.checkResponsive = function (e, t) { var o, s, n, r = this, l = !1, d = r.$slider.width(), a = window.innerWidth || i(window).width(); if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) { s = null; for (o in r.breakpoints) r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o])); null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), l = s), e || !1 === l || r.$slider.trigger("breakpoint", [r, l]) } }, e.prototype.changeSlide = function (e, t) { var o, s, n, r = this, l = i(e.currentTarget); switch (l.is("a") && e.preventDefault(), l.is("li") || (l = l.closest("li")), n = r.slideCount % r.options.slidesToScroll != 0, o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) { case "previous": s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t); break; case "next": s = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t); break; case "index": var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll; r.slideHandler(r.checkNavigable(d), !1, t), l.children().trigger("focus"); break; default: return } }, e.prototype.checkNavigable = function (i) { var e, t; if (e = this.getNavigableIndexes(), t = 0, i > e[e.length - 1]) i = e[e.length - 1]; else for (var o in e) { if (i < e[o]) { i = t; break } t = e[o] } return i }, e.prototype.cleanUpEvents = function () { var e = this; e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), i(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().off("click.slick", e.selectHandler), i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), i(window).off("resize.slick.slick-" + e.instanceUid, e.resize), i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition) }, e.prototype.cleanUpSlideEvents = function () { var e = this; e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1)) }, e.prototype.cleanUpRows = function () { var i, e = this; e.options.rows > 1 && ((i = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(i)) }, e.prototype.clickHandler = function (i) { !1 === this.shouldClick && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault()) }, e.prototype.destroy = function (e) { var t = this; t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), i(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () { i(this).attr("style", i(this).data("originalStyling")) }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t]) }, e.prototype.disableTransition = function (i) { var e = this, t = {}; t[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t) }, e.prototype.fadeSlide = function (i, e) { var t = this; !1 === t.cssTransitions ? (t.$slides.eq(i).css({ zIndex: t.options.zIndex }), t.$slides.eq(i).animate({ opacity: 1 }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css({ opacity: 1, zIndex: t.options.zIndex }), e && setTimeout(function () { t.disableTransition(i), e.call() }, t.options.speed)) }, e.prototype.fadeSlideOut = function (i) { var e = this; !1 === e.cssTransitions ? e.$slides.eq(i).animate({ opacity: 0, zIndex: e.options.zIndex - 2 }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({ opacity: 0, zIndex: e.options.zIndex - 2 })) }, e.prototype.filterSlides = e.prototype.slickFilter = function (i) { var e = this; null !== i && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit()) }, e.prototype.focusHandler = function () { var e = this; e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (t) { t.stopImmediatePropagation(); var o = i(this); setTimeout(function () { e.options.pauseOnFocus && (e.focussed = o.is(":focus"), e.autoPlay()) }, 0) }) }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () { return this.currentSlide }, e.prototype.getDotCount = function () { var i = this, e = 0, t = 0, o = 0; if (!0 === i.options.infinite) if (i.slideCount <= i.options.slidesToShow) ++o; else for (; e < i.slideCount;)++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow; else if (!0 === i.options.centerMode) o = i.slideCount; else if (i.options.asNavFor) for (; e < i.slideCount;)++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow; else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll); return o - 1 }, e.prototype.getLeft = function (i) { var e, t, o, s, n = this, r = 0; return n.slideOffset = 0, t = n.$slides.first().outerHeight(!0), !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, s = -1, !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)), r = t * n.options.slidesToShow * s), n.slideCount % n.options.slidesToScroll != 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1, r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, r = n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth, r = (i + n.options.slidesToShow - n.slideCount) * t), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, r = 0), !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = !1 === n.options.vertical ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r, !0 === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, e += (n.$list.width() - o.outerWidth()) / 2)), e }, e.prototype.getOption = e.prototype.slickGetOption = function (i) { return this.options[i] }, e.prototype.getNavigableIndexes = function () { var i, e = this, t = 0, o = 0, s = []; for (!1 === e.options.infinite ? i = e.slideCount : (t = -1 * e.options.slidesToScroll, o = -1 * e.options.slidesToScroll, i = 2 * e.slideCount); t < i;)s.push(t), t = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow; return s }, e.prototype.getSlick = function () { return this }, e.prototype.getSlideCount = function () { var e, t, o = this; return t = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function (s, n) { if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft) return e = n, !1 }), Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll }, e.prototype.goTo = e.prototype.slickGoTo = function (i, e) { this.changeSlide({ data: { message: "index", index: parseInt(i) } }, e) }, e.prototype.init = function (e) { var t = this; i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay()) }, e.prototype.initADA = function () { var e = this, t = Math.ceil(e.slideCount / e.options.slidesToShow), o = e.getNavigableIndexes().filter(function (i) { return i >= 0 && i < e.slideCount }); e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (t) { var s = o.indexOf(t); i(this).attr({ role: "tabpanel", id: "slick-slide" + e.instanceUid + t, tabindex: -1 }), -1 !== s && i(this).attr({ "aria-describedby": "slick-slide-control" + e.instanceUid + s }) }), e.$dots.attr("role", "tablist").find("li").each(function (s) { var n = o[s]; i(this).attr({ role: "presentation" }), i(this).find("button").first().attr({ role: "tab", id: "slick-slide-control" + e.instanceUid + s, "aria-controls": "slick-slide" + e.instanceUid + n, "aria-label": s + 1 + " of " + t, "aria-selected": null, tabindex: "-1" }) }).eq(e.currentSlide).find("button").attr({ "aria-selected": "true", tabindex: "0" }).end()); for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++)e.$slides.eq(s).attr("tabindex", 0); e.activateADA() }, e.prototype.initArrowEvents = function () { var i = this; !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, i.changeSlide), !0 === i.options.accessibility && (i.$prevArrow.on("keydown.slick", i.keyHandler), i.$nextArrow.on("keydown.slick", i.keyHandler))) }, e.prototype.initDotEvents = function () { var e = this; !0 === e.options.dots && (i("li", e.$dots).on("click.slick", { message: "index" }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1)) }, e.prototype.initSlideEvents = function () { var e = this; e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1))) }, e.prototype.initializeEvents = function () { var e = this; e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", { action: "start" }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", { action: "move" }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", { action: "end" }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), i(document).on(e.visibilityChange, i.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)), i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)), i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), i(e.setPosition) }, e.prototype.initUI = function () { var i = this; !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show() }, e.prototype.keyHandler = function (i) { var e = this; i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === e.options.accessibility ? e.changeSlide({ data: { message: !0 === e.options.rtl ? "next" : "previous" } }) : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({ data: { message: !0 === e.options.rtl ? "previous" : "next" } })) }, e.prototype.lazyLoad = function () { function e(e) { i("img[data-lazy]", e).each(function () { var e = i(this), t = i(this).attr("data-lazy"), o = i(this).attr("data-srcset"), s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"), r = document.createElement("img"); r.onload = function () { e.animate({ opacity: 0 }, 100, function () { o && (e.attr("srcset", o), s && e.attr("sizes", s)), e.attr("src", t).animate({ opacity: 1 }, 200, function () { e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading") }), n.$slider.trigger("lazyLoaded", [n, e, t]) }) }, r.onerror = function () { e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, e, t]) }, r.src = t }) } var t, o, s, n = this; if (!0 === n.options.centerMode ? !0 === n.options.infinite ? s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, s = Math.ceil(o + n.options.slidesToShow), !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)), t = n.$slider.find(".slick-slide").slice(o, s), "anticipated" === n.options.lazyLoad) for (var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++)r < 0 && (r = n.slideCount - 1), t = (t = t.add(d.eq(r))).add(d.eq(l)), r--, l++; e(t), n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow)) }, e.prototype.loadSlider = function () { var i = this; i.setPosition(), i.$slideTrack.css({ opacity: 1 }), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad() }, e.prototype.next = e.prototype.slickNext = function () { this.changeSlide({ data: { message: "next" } }) }, e.prototype.orientationChange = function () { var i = this; i.checkResponsive(), i.setPosition() }, e.prototype.pause = e.prototype.slickPause = function () { var i = this; i.autoPlayClear(), i.paused = !0 }, e.prototype.play = e.prototype.slickPlay = function () { var i = this; i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1 }, e.prototype.postSlide = function (e) { var t = this; t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange && i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus())) }, e.prototype.prev = e.prototype.slickPrev = function () { this.changeSlide({ data: { message: "previous" } }) }, e.prototype.preventDefault = function (i) { i.preventDefault() }, e.prototype.progressiveLazyLoad = function (e) { e = e || 1; var t, o, s, n, r, l = this, d = i("img[data-lazy]", l.$slider); d.length ? (t = d.first(), o = t.attr("data-lazy"), s = t.attr("data-srcset"), n = t.attr("data-sizes") || l.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function () { s && (t.attr("srcset", s), n && t.attr("sizes", n)), t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === l.options.adaptiveHeight && l.setPosition(), l.$slider.trigger("lazyLoaded", [l, t, o]), l.progressiveLazyLoad() }, r.onerror = function () { e < 3 ? setTimeout(function () { l.progressiveLazyLoad(e + 1) }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), l.$slider.trigger("lazyLoadError", [l, t, o]), l.progressiveLazyLoad()) }, r.src = o) : l.$slider.trigger("allImagesLoaded", [l]) }, e.prototype.refresh = function (e) { var t, o, s = this; o = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > o && (s.currentSlide = o), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), t = s.currentSlide, s.destroy(!0), i.extend(s, s.initials, { currentSlide: t }), s.init(), e || s.changeSlide({ data: { message: "index", index: t } }, !1) }, e.prototype.registerBreakpoints = function () { var e, t, o, s = this, n = s.options.responsive || null; if ("array" === i.type(n) && n.length) { s.respondTo = s.options.respondTo || "window"; for (e in n) if (o = s.breakpoints.length - 1, n.hasOwnProperty(e)) { for (t = n[e].breakpoint; o >= 0;)s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--; s.breakpoints.push(t), s.breakpointSettings[t] = n[e].settings } s.breakpoints.sort(function (i, e) { return s.options.mobileFirst ? i - e : e - i }) } }, e.prototype.reinit = function () { var e = this; e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e]) }, e.prototype.resize = function () { var e = this; i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function () { e.windowWidth = i(window).width(), e.checkResponsive(), e.unslicked || e.setPosition() }, 50)) }, e.prototype.removeSlide = e.prototype.slickRemove = function (i, e, t) { var o = this; if (i = "boolean" == typeof i ? !0 === (e = i) ? 0 : o.slideCount - 1 : !0 === e ? --i : i, o.slideCount < 1 || i < 0 || i > o.slideCount - 1) return !1; o.unload(), !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, o.reinit() }, e.prototype.setCSS = function (i) { var e, t, o = this, s = {}; !0 === o.options.rtl && (i = -i), e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px", s[o.positionProp] = i, !1 === o.transformsEnabled ? o.$slideTrack.css(s) : (s = {}, !1 === o.cssTransitions ? (s[o.animType] = "translate(" + e + ", " + t + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)", o.$slideTrack.css(s))) }, e.prototype.setDimensions = function () { var i = this; !1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({ padding: "0px " + i.options.centerPadding }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), !0 === i.options.centerMode && i.$list.css({ padding: i.options.centerPadding + " 0px" })), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length))); var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width(); !1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e) }, e.prototype.setFade = function () { var e, t = this; t.$slides.each(function (o, s) { e = t.slideWidth * o * -1, !0 === t.options.rtl ? i(s).css({ position: "relative", right: e, top: 0, zIndex: t.options.zIndex - 2, opacity: 0 }) : i(s).css({ position: "relative", left: e, top: 0, zIndex: t.options.zIndex - 2, opacity: 0 }) }), t.$slides.eq(t.currentSlide).css({ zIndex: t.options.zIndex - 1, opacity: 1 }) }, e.prototype.setHeight = function () { var i = this; if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) { var e = i.$slides.eq(i.currentSlide).outerHeight(!0); i.$list.css("height", e) } }, e.prototype.setOption = e.prototype.slickSetOption = function () { var e, t, o, s, n, r = this, l = !1; if ("object" === i.type(arguments[0]) ? (o = arguments[0], l = arguments[1], n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0], s = arguments[1], l = arguments[2], "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")), "single" === n) r.options[o] = s; else if ("multiple" === n) i.each(o, function (i, e) { r.options[i] = e }); else if ("responsive" === n) for (t in s) if ("array" !== i.type(r.options.responsive)) r.options.responsive = [s[t]]; else { for (e = r.options.responsive.length - 1; e >= 0;)r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), e--; r.options.responsive.push(s[t]) } l && (r.unload(), r.reinit()) }, e.prototype.setPosition = function () { var i = this; i.setDimensions(), i.setHeight(), !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i]) }, e.prototype.setProps = function () { var i = this, e = document.body.style; i.positionProp = !0 === i.options.vertical ? "top" : "left", "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === i.options.useCSS && (i.cssTransitions = !0), i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), void 0 !== e.transform && !1 !== i.animType && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType }, e.prototype.setSlideClasses = function (i) { var e, t, o, s, n = this; if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(i).addClass("slick-current"), !0 === n.options.centerMode) { var r = n.options.slidesToShow % 2 == 0 ? 1 : 0; e = Math.floor(n.options.slidesToShow / 2), !0 === n.options.infinite && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i, t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(i).addClass("slick-center") } else i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = !0 === n.options.infinite ? n.options.slidesToShow + i : i, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")); "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad() }, e.prototype.setupInfinite = function () { var e, t, o, s = this; if (!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && (t = null, s.slideCount > s.options.slidesToShow)) { for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - o; e -= 1)t = e - 1, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned"); for (e = 0; e < o + s.slideCount; e += 1)t = e, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned"); s.$slideTrack.find(".slick-cloned").find("[id]").each(function () { i(this).attr("id", "") }) } }, e.prototype.interrupt = function (i) { var e = this; i || e.autoPlay(), e.interrupted = i }, e.prototype.selectHandler = function (e) { var t = this, o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide"), s = parseInt(o.attr("data-slick-index")); s || (s = 0), t.slideCount <= t.options.slidesToShow ? t.slideHandler(s, !1, !0) : t.slideHandler(s) }, e.prototype.slideHandler = function (i, e, t) { var o, s, n, r, l, d = null, a = this; if (e = e || !1, !(!0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === i)) if (!1 === e && a.asNavFor(i), o = i, d = a.getLeft(o), r = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft, !1 === a.options.infinite && !1 === a.options.centerMode && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function () { a.postSlide(o) }) : a.postSlide(o)); else if (!1 === a.options.infinite && !0 === a.options.centerMode && (i < 0 || i > a.slideCount - a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function () { a.postSlide(o) }) : a.postSlide(o)); else { if (a.options.autoplay && clearInterval(a.autoPlayTimer), s = o < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : o - a.slideCount : o, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, s]), n = a.currentSlide, a.currentSlide = s, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide), a.updateDots(), a.updateArrows(), !0 === a.options.fade) return !0 !== t ? (a.fadeSlideOut(n), a.fadeSlide(s, function () { a.postSlide(s) })) : a.postSlide(s), void a.animateHeight(); !0 !== t ? a.animateSlide(d, function () { a.postSlide(s) }) : a.postSlide(s) } }, e.prototype.startLoad = function () { var i = this; !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading") }, e.prototype.swipeDirection = function () { var i, e, t, o, s = this; return i = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, t = Math.atan2(e, i), (o = Math.round(180 * t / Math.PI)) < 0 && (o = 360 - Math.abs(o)), o <= 45 && o >= 0 ? !1 === s.options.rtl ? "left" : "right" : o <= 360 && o >= 315 ? !1 === s.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical" }, e.prototype.swipeEnd = function (i) { var e, t, o = this; if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1, !1; if (o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1; if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) { switch (t = o.swipeDirection()) { case "left": case "down": e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0; break; case "right": case "up": e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1 }"vertical" != t && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [o, t])) } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {}) }, e.prototype.swipeHandler = function (i) { var e = this; if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), i.data.action) { case "start": e.swipeStart(i); break; case "move": e.swipeMove(i); break; case "end": e.swipeEnd(i) } }, e.prototype.swipeMove = function (i) { var e, t, o, s, n, r, l = this; return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null, !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide), l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX, l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY, l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))), !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0, !1) : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r), t = l.swipeDirection(), void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0, i.preventDefault()), s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1), !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1), o = l.touchObject.swipeLength, l.touchObject.edgeHit = !1, !1 === l.options.infinite && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction, l.touchObject.edgeHit = !0), !1 === l.options.vertical ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s, !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s), !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? (l.swipeLeft = null, !1) : void l.setCSS(l.swipeLeft)))) }, e.prototype.swipeStart = function (i) { var e, t = this; if (t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow) return t.touchObject = {}, !1; void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, t.dragging = !0 }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () { var i = this; null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit()) }, e.prototype.unload = function () { var e = this; i(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "") }, e.prototype.unslick = function (i) { var e = this; e.$slider.trigger("unslick", [e, i]), e.destroy() }, e.prototype.updateArrows = function () { var i = this; Math.floor(i.options.slidesToShow / 2), !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode ? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"))) }, e.prototype.updateDots = function () { var i = this; null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active")) }, e.prototype.visibility = function () { var i = this; i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1) }, i.fn.slick = function () { var i, t, o = this, s = arguments[0], n = Array.prototype.slice.call(arguments, 1), r = o.length; for (i = 0; i < r; i++)if ("object" == typeof s || void 0 === s ? o[i].slick = new e(o[i], s) : t = o[i].slick[s].apply(o[i].slick, n), void 0 !== t) return t; return o } });

/**
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
/**
 * Owl carousel
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
; (function ($, window, document, undefined) {

	/**
	 * Creates a carousel.
	 * @class The Owl Carousel.
	 * @public
	 * @param {HTMLElement|jQuery} element - The element to create the carousel for.
	 * @param {Object} [options] - The options
	 */
	function Owl(element, options) {

		/**
		 * Current settings for the carousel.
		 * @public
		 */
		this.settings = null;

		/**
		 * Current options set by the caller including defaults.
		 * @public
		 */
		this.options = $.extend({}, Owl.Defaults, options);

		/**
		 * Plugin element.
		 * @public
		 */
		this.$element = $(element);

		/**
		 * Proxied event handlers.
		 * @protected
		 */
		this._handlers = {};

		/**
		 * References to the running plugins of this carousel.
		 * @protected
		 */
		this._plugins = {};

		/**
		 * Currently suppressed events to prevent them from being retriggered.
		 * @protected
		 */
		this._supress = {};

		/**
		 * Absolute current position.
		 * @protected
		 */
		this._current = null;

		/**
		 * Animation speed in milliseconds.
		 * @protected
		 */
		this._speed = null;

		/**
		 * Coordinates of all items in pixel.
		 * @todo The name of this member is missleading.
		 * @protected
		 */
		this._coordinates = [];

		/**
		 * Current breakpoint.
		 * @todo Real media queries would be nice.
		 * @protected
		 */
		this._breakpoint = null;

		/**
		 * Current width of the plugin element.
		 */
		this._width = null;

		/**
		 * All real items.
		 * @protected
		 */
		this._items = [];

		/**
		 * All cloned items.
		 * @protected
		 */
		this._clones = [];

		/**
		 * Merge values of all items.
		 * @todo Maybe this could be part of a plugin.
		 * @protected
		 */
		this._mergers = [];

		/**
		 * Widths of all items.
		 */
		this._widths = [];

		/**
		 * Invalidated parts within the update process.
		 * @protected
		 */
		this._invalidated = {};

		/**
		 * Ordered list of workers for the update process.
		 * @protected
		 */
		this._pipe = [];

		/**
		 * Current state information for the drag operation.
		 * @todo #261
		 * @protected
		 */
		this._drag = {
			time: null,
			target: null,
			pointer: null,
			stage: {
				start: null,
				current: null
			},
			direction: null
		};

		/**
		 * Current state information and their tags.
		 * @type {Object}
		 * @protected
		 */
		this._states = {
			current: {},
			tags: {
				'initializing': ['busy'],
				'animating': ['busy'],
				'dragging': ['interacting']
			}
		};

		$.each(['onResize', 'onThrottledResize'], $.proxy(function (i, handler) {
			this._handlers[handler] = $.proxy(this[handler], this);
		}, this));

		$.each(Owl.Plugins, $.proxy(function (key, plugin) {
			this._plugins[key.charAt(0).toLowerCase() + key.slice(1)]
				= new plugin(this);
		}, this));

		$.each(Owl.Workers, $.proxy(function (priority, worker) {
			this._pipe.push({
				'filter': worker.filter,
				'run': $.proxy(worker.run, this)
			});
		}, this));

		this.setup();
		this.initialize();
	}

	/**
	 * Default options for the carousel.
	 * @public
	 */
	Owl.Defaults = {
		items: 3,
		loop: false,
		center: false,
		rewind: false,
		checkVisibility: true,

		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		freeDrag: false,

		margin: 0,
		stagePadding: 0,

		merge: false,
		mergeFit: true,
		autoWidth: false,

		startPosition: 0,
		rtl: false,

		smartSpeed: 250,
		fluidSpeed: false,
		dragEndSpeed: false,

		responsive: {},
		responsiveRefreshRate: 200,
		responsiveBaseElement: window,

		fallbackEasing: 'swing',
		slideTransition: '',

		info: false,

		nestedItemSelector: false,
		itemElement: 'div',
		stageElement: 'div',

		refreshClass: 'owl-refresh',
		loadedClass: 'owl-loaded',
		loadingClass: 'owl-loading',
		rtlClass: 'owl-rtl',
		responsiveClass: 'owl-responsive',
		dragClass: 'owl-drag',
		itemClass: 'owl-item',
		stageClass: 'owl-stage',
		stageOuterClass: 'owl-stage-outer',
		grabClass: 'owl-grab'
	};

	/**
	 * Enumeration for width.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Width = {
		Default: 'default',
		Inner: 'inner',
		Outer: 'outer'
	};

	/**
	 * Enumeration for types.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Type = {
		Event: 'event',
		State: 'state'
	};

	/**
	 * Contains all registered plugins.
	 * @public
	 */
	Owl.Plugins = {};

	/**
	 * List of workers involved in the update process.
	 */
	Owl.Workers = [{
		filter: ['width', 'settings'],
		run: function () {
			this._width = this.$element.width();
		}
	}, {
		filter: ['width', 'items', 'settings'],
		run: function (cache) {
			cache.current = this._items && this._items[this.relative(this._current)];
		}
	}, {
		filter: ['items', 'settings'],
		run: function () {
			this.$stage.children('.cloned').remove();
		}
	}, {
		filter: ['width', 'items', 'settings'],
		run: function (cache) {
			var margin = this.settings.margin || '',
				grid = !this.settings.autoWidth,
				rtl = this.settings.rtl,
				css = {
					'width': 'auto',
					'margin-left': rtl ? margin : '',
					'margin-right': rtl ? '' : margin
				};

			!grid && this.$stage.children().css(css);

			cache.css = css;
		}
	}, {
		filter: ['width', 'items', 'settings'],
		run: function (cache) {
			var width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
				merge = null,
				iterator = this._items.length,
				grid = !this.settings.autoWidth,
				widths = [];

			cache.items = {
				merge: false,
				width: width
			};

			while (iterator--) {
				merge = this._mergers[iterator];
				merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;

				cache.items.merge = merge > 1 || cache.items.merge;

				widths[iterator] = !grid ? this._items[iterator].width() : width * merge;
			}

			this._widths = widths;
		}
	}, {
		filter: ['items', 'settings'],
		run: function () {
			var clones = [],
				items = this._items,
				settings = this.settings,
				// TODO: Should be computed from number of min width items in stage
				view = Math.max(settings.items * 2, 4),
				size = Math.ceil(items.length / 2) * 2,
				repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0,
				append = '',
				prepend = '';

			repeat /= 2;

			while (repeat > 0) {
				// Switch to only using appended clones
				clones.push(this.normalize(clones.length / 2, true));
				append = append + items[clones[clones.length - 1]][0].outerHTML;
				clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
				prepend = items[clones[clones.length - 1]][0].outerHTML + prepend;
				repeat -= 1;
			}

			this._clones = clones;

			$(append).addClass('cloned').appendTo(this.$stage);
			$(prepend).addClass('cloned').prependTo(this.$stage);
		}
	}, {
		filter: ['width', 'items', 'settings'],
		run: function () {
			var rtl = this.settings.rtl ? 1 : -1,
				size = this._clones.length + this._items.length,
				iterator = -1,
				previous = 0,
				current = 0,
				coordinates = [];

			while (++iterator < size) {
				previous = coordinates[iterator - 1] || 0;
				current = this._widths[this.relative(iterator)] + this.settings.margin;
				coordinates.push(previous + current * rtl);
			}

			this._coordinates = coordinates;
		}
	}, {
		filter: ['width', 'items', 'settings'],
		run: function () {
			var padding = this.settings.stagePadding,
				coordinates = this._coordinates,
				css = {
					'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
					'padding-left': padding || '',
					'padding-right': padding || ''
				};

			this.$stage.css(css);
		}
	}, {
		filter: ['width', 'items', 'settings'],
		run: function (cache) {
			var iterator = this._coordinates.length,
				grid = !this.settings.autoWidth,
				items = this.$stage.children();

			if (grid && cache.items.merge) {
				while (iterator--) {
					cache.css.width = this._widths[this.relative(iterator)];
					items.eq(iterator).css(cache.css);
				}
			} else if (grid) {
				cache.css.width = cache.items.width;
				items.css(cache.css);
			}
		}
	}, {
		filter: ['items'],
		run: function () {
			this._coordinates.length < 1 && this.$stage.removeAttr('style');
		}
	}, {
		filter: ['width', 'items', 'settings'],
		run: function (cache) {
			cache.current = cache.current ? this.$stage.children().index(cache.current) : 0;
			cache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current));
			this.reset(cache.current);
		}
	}, {
		filter: ['position'],
		run: function () {
			this.animate(this.coordinates(this._current));
		}
	}, {
		filter: ['width', 'position', 'items', 'settings'],
		run: function () {
			var rtl = this.settings.rtl ? 1 : -1,
				padding = this.settings.stagePadding * 2,
				begin = this.coordinates(this.current()) + padding,
				end = begin + this.width() * rtl,
				inner, outer, matches = [], i, n;

			for (i = 0, n = this._coordinates.length; i < n; i++) {
				inner = this._coordinates[i - 1] || 0;
				outer = Math.abs(this._coordinates[i]) + padding * rtl;

				if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end)))
					|| (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
					matches.push(i);
				}
			}

			this.$stage.children('.active').removeClass('active');
			this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass('active');

			this.$stage.children('.center').removeClass('center');
			if (this.settings.center) {
				this.$stage.children().eq(this.current()).addClass('center');
			}
		}
	}];

	/**
	 * Create the stage DOM element
	 */
	Owl.prototype.initializeStage = function () {
		this.$stage = this.$element.find('.' + this.settings.stageClass);

		// if the stage is already in the DOM, grab it and skip stage initialization
		if (this.$stage.length) {
			return;
		}

		this.$element.addClass(this.options.loadingClass);

		// create stage
		this.$stage = $('<' + this.settings.stageElement + '>', {
			"class": this.settings.stageClass
		}).wrap($('<div/>', {
			"class": this.settings.stageOuterClass
		}));

		// append stage
		this.$element.append(this.$stage.parent());
	};

	/**
	 * Create item DOM elements
	 */
	Owl.prototype.initializeItems = function () {
		var $items = this.$element.find('.owl-item');

		// if the items are already in the DOM, grab them and skip item initialization
		if ($items.length) {
			this._items = $items.get().map(function (item) {
				return $(item);
			});

			this._mergers = this._items.map(function () {
				return 1;
			});

			this.refresh();

			return;
		}

		// append content
		this.replace(this.$element.children().not(this.$stage.parent()));

		// check visibility
		if (this.isVisible()) {
			// update view
			this.refresh();
		} else {
			// invalidate width
			this.invalidate('width');
		}

		this.$element
			.removeClass(this.options.loadingClass)
			.addClass(this.options.loadedClass);
	};

	/**
	 * Initializes the carousel.
	 * @protected
	 */
	Owl.prototype.initialize = function () {
		this.enter('initializing');
		this.trigger('initialize');

		this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);

		if (this.settings.autoWidth && !this.is('pre-loading')) {
			var imgs, nestedSelector, width;
			imgs = this.$element.find('img');
			nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
			width = this.$element.children(nestedSelector).width();

			if (imgs.length && width <= 0) {
				this.preloadAutoWidthImages(imgs);
			}
		}

		this.initializeStage();
		this.initializeItems();

		// register event handlers
		this.registerEventHandlers();

		this.leave('initializing');
		this.trigger('initialized');
	};

	/**
	 * @returns {Boolean} visibility of $element
	 *                    if you know the carousel will always be visible you can set `checkVisibility` to `false` to
	 *                    prevent the expensive browser layout forced reflow the $element.is(':visible') does
	 */
	Owl.prototype.isVisible = function () {
		return this.settings.checkVisibility
			? this.$element.is(':visible')
			: true;
	};

	/**
	 * Setups the current settings.
	 * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
	 * @todo Support for media queries by using `matchMedia` would be nice.
	 * @public
	 */
	Owl.prototype.setup = function () {
		var viewport = this.viewport(),
			overwrites = this.options.responsive,
			match = -1,
			settings = null;

		if (!overwrites) {
			settings = $.extend({}, this.options);
		} else {
			$.each(overwrites, function (breakpoint) {
				if (breakpoint <= viewport && breakpoint > match) {
					match = Number(breakpoint);
				}
			});

			settings = $.extend({}, this.options, overwrites[match]);
			if (typeof settings.stagePadding === 'function') {
				settings.stagePadding = settings.stagePadding();
			}
			delete settings.responsive;

			// responsive class
			if (settings.responsiveClass) {
				this.$element.attr('class',
					this.$element.attr('class').replace(new RegExp('(' + this.options.responsiveClass + '-)\\S+\\s', 'g'), '$1' + match)
				);
			}
		}

		this.trigger('change', { property: { name: 'settings', value: settings } });
		this._breakpoint = match;
		this.settings = settings;
		this.invalidate('settings');
		this.trigger('changed', { property: { name: 'settings', value: this.settings } });
	};

	/**
	 * Updates option logic if necessery.
	 * @protected
	 */
	Owl.prototype.optionsLogic = function () {
		if (this.settings.autoWidth) {
			this.settings.stagePadding = false;
			this.settings.merge = false;
		}
	};

	/**
	 * Prepares an item before add.
	 * @todo Rename event parameter `content` to `item`.
	 * @protected
	 * @returns {jQuery|HTMLElement} - The item container.
	 */
	Owl.prototype.prepare = function (item) {
		var event = this.trigger('prepare', { content: item });

		if (!event.data) {
			event.data = $('<' + this.settings.itemElement + '/>')
				.addClass(this.options.itemClass).append(item)
		}

		this.trigger('prepared', { content: event.data });

		return event.data;
	};

	/**
	 * Updates the view.
	 * @public
	 */
	Owl.prototype.update = function () {
		var i = 0,
			n = this._pipe.length,
			filter = $.proxy(function (p) { return this[p] }, this._invalidated),
			cache = {};

		while (i < n) {
			if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
				this._pipe[i].run(cache);
			}
			i++;
		}

		this._invalidated = {};

		!this.is('valid') && this.enter('valid');
	};

	/**
	 * Gets the width of the view.
	 * @public
	 * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
	 * @returns {Number} - The width of the view in pixel.
	 */
	Owl.prototype.width = function (dimension) {
		dimension = dimension || Owl.Width.Default;
		switch (dimension) {
			case Owl.Width.Inner:
			case Owl.Width.Outer:
				return this._width;
			default:
				return this._width - this.settings.stagePadding * 2 + this.settings.margin;
		}
	};

	/**
	 * Refreshes the carousel primarily for adaptive purposes.
	 * @public
	 */
	Owl.prototype.refresh = function () {
		this.enter('refreshing');
		this.trigger('refresh');

		this.setup();

		this.optionsLogic();

		this.$element.addClass(this.options.refreshClass);

		this.update();

		this.$element.removeClass(this.options.refreshClass);

		this.leave('refreshing');
		this.trigger('refreshed');
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onThrottledResize = function () {
		window.clearTimeout(this.resizeTimer);
		this.resizeTimer = window.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onResize = function () {
		if (!this._items.length) {
			return false;
		}

		if (this._width === this.$element.width()) {
			return false;
		}

		if (!this.isVisible()) {
			return false;
		}

		this.enter('resizing');

		if (this.trigger('resize').isDefaultPrevented()) {
			this.leave('resizing');
			return false;
		}

		this.invalidate('width');

		this.refresh();

		this.leave('resizing');
		this.trigger('resized');
	};

	/**
	 * Registers event handlers.
	 * @todo Check `msPointerEnabled`
	 * @todo #261
	 * @protected
	 */
	Owl.prototype.registerEventHandlers = function () {
		if ($.support.transition) {
			this.$stage.on($.support.transition.end + '.owl.core', $.proxy(this.onTransitionEnd, this));
		}

		if (this.settings.responsive !== false) {
			this.on(window, 'resize', this._handlers.onThrottledResize);
		}

		if (this.settings.mouseDrag) {
			this.$element.addClass(this.options.dragClass);
			this.$stage.on('mousedown.owl.core', $.proxy(this.onDragStart, this));
			this.$stage.on('dragstart.owl.core selectstart.owl.core', function () { return false });
		}

		if (this.settings.touchDrag) {
			this.$stage.on('touchstart.owl.core', $.proxy(this.onDragStart, this));
			this.$stage.on('touchcancel.owl.core', $.proxy(this.onDragEnd, this));
		}
	};

	/**
	 * Handles `touchstart` and `mousedown` events.
	 * @todo Horizontal swipe threshold as option
	 * @todo #261
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragStart = function (event) {
		var stage = null;

		if (event.which === 3) {
			return;
		}

		if ($.support.transform) {
			stage = this.$stage.css('transform').replace(/.*\(|\)| /g, '').split(',');
			stage = {
				x: stage[stage.length === 16 ? 12 : 4],
				y: stage[stage.length === 16 ? 13 : 5]
			};
		} else {
			stage = this.$stage.position();
			stage = {
				x: this.settings.rtl ?
					stage.left + this.$stage.width() - this.width() + this.settings.margin :
					stage.left,
				y: stage.top
			};
		}

		if (this.is('animating')) {
			$.support.transform ? this.animate(stage.x) : this.$stage.stop()
			this.invalidate('position');
		}

		this.$element.toggleClass(this.options.grabClass, event.type === 'mousedown');

		this.speed(0);

		this._drag.time = new Date().getTime();
		this._drag.target = $(event.target);
		this._drag.stage.start = stage;
		this._drag.stage.current = stage;
		this._drag.pointer = this.pointer(event);

		$(document).on('mouseup.owl.core touchend.owl.core', $.proxy(this.onDragEnd, this));

		$(document).one('mousemove.owl.core touchmove.owl.core', $.proxy(function (event) {
			var delta = this.difference(this._drag.pointer, this.pointer(event));

			$(document).on('mousemove.owl.core touchmove.owl.core', $.proxy(this.onDragMove, this));

			if (Math.abs(delta.x) < Math.abs(delta.y) && this.is('valid')) {
				return;
			}

			event.preventDefault();

			this.enter('dragging');
			this.trigger('drag');
		}, this));
	};

	/**
	 * Handles the `touchmove` and `mousemove` events.
	 * @todo #261
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragMove = function (event) {
		var minimum = null,
			maximum = null,
			pull = null,
			delta = this.difference(this._drag.pointer, this.pointer(event)),
			stage = this.difference(this._drag.stage.start, delta);

		if (!this.is('dragging')) {
			return;
		}

		event.preventDefault();

		if (this.settings.loop) {
			minimum = this.coordinates(this.minimum());
			maximum = this.coordinates(this.maximum() + 1) - minimum;
			stage.x = (((stage.x - minimum) % maximum + maximum) % maximum) + minimum;
		} else {
			minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
			maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
			pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
			stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
		}

		this._drag.stage.current = stage;

		this.animate(stage.x);
	};

	/**
	 * Handles the `touchend` and `mouseup` events.
	 * @todo #261
	 * @todo Threshold for click event
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragEnd = function (event) {
		var delta = this.difference(this._drag.pointer, this.pointer(event)),
			stage = this._drag.stage.current,
			direction = delta.x > 0 ^ this.settings.rtl ? 'left' : 'right';

		$(document).off('.owl.core');

		this.$element.removeClass(this.options.grabClass);

		if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
			this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
			this.current(this.closest(stage.x, delta.x !== 0 ? direction : this._drag.direction));
			this.invalidate('position');
			this.update();

			this._drag.direction = direction;

			if (Math.abs(delta.x) > 3 || new Date().getTime() - this._drag.time > 300) {
				this._drag.target.one('click.owl.core', function () { return false; });
			}
		}

		if (!this.is('dragging')) {
			return;
		}

		this.leave('dragging');
		this.trigger('dragged');
	};

	/**
	 * Gets absolute position of the closest item for a coordinate.
	 * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
	 * @protected
	 * @param {Number} coordinate - The coordinate in pixel.
	 * @param {String} direction - The direction to check for the closest item. Ether `left` or `right`.
	 * @return {Number} - The absolute position of the closest item.
	 */
	Owl.prototype.closest = function (coordinate, direction) {
		var position = -1,
			pull = 30,
			width = this.width(),
			coordinates = this.coordinates();

		if (!this.settings.freeDrag) {
			// check closest item
			$.each(coordinates, $.proxy(function (index, value) {
				// on a left pull, check on current index
				if (direction === 'left' && coordinate > value - pull && coordinate < value + pull) {
					position = index;
					// on a right pull, check on previous index
					// to do so, subtract width from value and set position = index + 1
				} else if (direction === 'right' && coordinate > value - width - pull && coordinate < value - width + pull) {
					position = index + 1;
				} else if (this.op(coordinate, '<', value)
					&& this.op(coordinate, '>', coordinates[index + 1] !== undefined ? coordinates[index + 1] : value - width)) {
					position = direction === 'left' ? index + 1 : index;
				}
				return position === -1;
			}, this));
		}

		if (!this.settings.loop) {
			// non loop boundries
			if (this.op(coordinate, '>', coordinates[this.minimum()])) {
				position = coordinate = this.minimum();
			} else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
				position = coordinate = this.maximum();
			}
		}

		return position;
	};

	/**
	 * Animates the stage.
	 * @todo #270
	 * @public
	 * @param {Number} coordinate - The coordinate in pixels.
	 */
	Owl.prototype.animate = function (coordinate) {
		var animate = this.speed() > 0;

		this.is('animating') && this.onTransitionEnd();

		if (animate) {
			this.enter('animating');
			this.trigger('translate');
		}

		if ($.support.transform3d && $.support.transition) {
			this.$stage.css({
				transform: 'translate3d(' + coordinate + 'px,0px,0px)',
				transition: (this.speed() / 1000) + 's' + (
					this.settings.slideTransition ? ' ' + this.settings.slideTransition : ''
				)
			});
		} else if (animate) {
			this.$stage.animate({
				left: coordinate + 'px'
			}, this.speed(), this.settings.fallbackEasing, $.proxy(this.onTransitionEnd, this));
		} else {
			this.$stage.css({
				left: coordinate + 'px'
			});
		}
	};

	/**
	 * Checks whether the carousel is in a specific state or not.
	 * @param {String} state - The state to check.
	 * @returns {Boolean} - The flag which indicates if the carousel is busy.
	 */
	Owl.prototype.is = function (state) {
		return this._states.current[state] && this._states.current[state] > 0;
	};

	/**
	 * Sets the absolute position of the current item.
	 * @public
	 * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
	 * @returns {Number} - The absolute position of the current item.
	 */
	Owl.prototype.current = function (position) {
		if (position === undefined) {
			return this._current;
		}

		if (this._items.length === 0) {
			return undefined;
		}

		position = this.normalize(position);

		if (this._current !== position) {
			var event = this.trigger('change', { property: { name: 'position', value: position } });

			if (event.data !== undefined) {
				position = this.normalize(event.data);
			}

			this._current = position;

			this.invalidate('position');

			this.trigger('changed', { property: { name: 'position', value: this._current } });
		}

		return this._current;
	};

	/**
	 * Invalidates the given part of the update routine.
	 * @param {String} [part] - The part to invalidate.
	 * @returns {Array.<String>} - The invalidated parts.
	 */
	Owl.prototype.invalidate = function (part) {
		if ($.type(part) === 'string') {
			this._invalidated[part] = true;
			this.is('valid') && this.leave('valid');
		}
		return $.map(this._invalidated, function (v, i) { return i });
	};

	/**
	 * Resets the absolute position of the current item.
	 * @public
	 * @param {Number} position - The absolute position of the new item.
	 */
	Owl.prototype.reset = function (position) {
		position = this.normalize(position);

		if (position === undefined) {
			return;
		}

		this._speed = 0;
		this._current = position;

		this.suppress(['translate', 'translated']);

		this.animate(this.coordinates(position));

		this.release(['translate', 'translated']);
	};

	/**
	 * Normalizes an absolute or a relative position of an item.
	 * @public
	 * @param {Number} position - The absolute or relative position to normalize.
	 * @param {Boolean} [relative=false] - Whether the given position is relative or not.
	 * @returns {Number} - The normalized position.
	 */
	Owl.prototype.normalize = function (position, relative) {
		var n = this._items.length,
			m = relative ? 0 : this._clones.length;

		if (!this.isNumeric(position) || n < 1) {
			position = undefined;
		} else if (position < 0 || position >= n + m) {
			position = ((position - m / 2) % n + n) % n + m / 2;
		}

		return position;
	};

	/**
	 * Converts an absolute position of an item into a relative one.
	 * @public
	 * @param {Number} position - The absolute position to convert.
	 * @returns {Number} - The converted position.
	 */
	Owl.prototype.relative = function (position) {
		position -= this._clones.length / 2;
		return this.normalize(position, true);
	};

	/**
	 * Gets the maximum position for the current item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.maximum = function (relative) {
		var settings = this.settings,
			maximum = this._coordinates.length,
			iterator,
			reciprocalItemsWidth,
			elementWidth;

		if (settings.loop) {
			maximum = this._clones.length / 2 + this._items.length - 1;
		} else if (settings.autoWidth || settings.merge) {
			iterator = this._items.length;
			if (iterator) {
				reciprocalItemsWidth = this._items[--iterator].width();
				elementWidth = this.$element.width();
				while (iterator--) {
					reciprocalItemsWidth += this._items[iterator].width() + this.settings.margin;
					if (reciprocalItemsWidth > elementWidth) {
						break;
					}
				}
			}
			maximum = iterator + 1;
		} else if (settings.center) {
			maximum = this._items.length - 1;
		} else {
			maximum = this._items.length - settings.items;
		}

		if (relative) {
			maximum -= this._clones.length / 2;
		}

		return Math.max(maximum, 0);
	};

	/**
	 * Gets the minimum position for the current item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.minimum = function (relative) {
		return relative ? 0 : this._clones.length / 2;
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.items = function (position) {
		if (position === undefined) {
			return this._items.slice();
		}

		position = this.normalize(position, true);
		return this._items[position];
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.mergers = function (position) {
		if (position === undefined) {
			return this._mergers.slice();
		}

		position = this.normalize(position, true);
		return this._mergers[position];
	};

	/**
	 * Gets the absolute positions of clones for an item.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
	 */
	Owl.prototype.clones = function (position) {
		var odd = this._clones.length / 2,
			even = odd + this._items.length,
			map = function (index) { return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2 };

		if (position === undefined) {
			return $.map(this._clones, function (v, i) { return map(i) });
		}

		return $.map(this._clones, function (v, i) { return v === position ? map(i) : null });
	};

	/**
	 * Sets the current animation speed.
	 * @public
	 * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
	 * @returns {Number} - The current animation speed in milliseconds.
	 */
	Owl.prototype.speed = function (speed) {
		if (speed !== undefined) {
			this._speed = speed;
		}

		return this._speed;
	};

	/**
	 * Gets the coordinate of an item.
	 * @todo The name of this method is missleanding.
	 * @public
	 * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
	 * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
	 */
	Owl.prototype.coordinates = function (position) {
		var multiplier = 1,
			newPosition = position - 1,
			coordinate;

		if (position === undefined) {
			return $.map(this._coordinates, $.proxy(function (coordinate, index) {
				return this.coordinates(index);
			}, this));
		}

		if (this.settings.center) {
			if (this.settings.rtl) {
				multiplier = -1;
				newPosition = position + 1;
			}

			coordinate = this._coordinates[position];
			coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
		} else {
			coordinate = this._coordinates[newPosition] || 0;
		}

		coordinate = Math.ceil(coordinate);

		return coordinate;
	};

	/**
	 * Calculates the speed for a translation.
	 * @protected
	 * @param {Number} from - The absolute position of the start item.
	 * @param {Number} to - The absolute position of the target item.
	 * @param {Number} [factor=undefined] - The time factor in milliseconds.
	 * @returns {Number} - The time in milliseconds for the translation.
	 */
	Owl.prototype.duration = function (from, to, factor) {
		if (factor === 0) {
			return 0;
		}

		return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
	};

	/**
	 * Slides to the specified item.
	 * @public
	 * @param {Number} position - The position of the item.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.to = function (position, speed) {
		var current = this.current(),
			revert = null,
			distance = position - this.relative(current),
			direction = (distance > 0) - (distance < 0),
			items = this._items.length,
			minimum = this.minimum(),
			maximum = this.maximum();

		if (this.settings.loop) {
			if (!this.settings.rewind && Math.abs(distance) > items / 2) {
				distance += direction * -1 * items;
			}

			position = current + distance;
			revert = ((position - minimum) % items + items) % items + minimum;

			if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
				current = revert - distance;
				position = revert;
				this.reset(current);
			}
		} else if (this.settings.rewind) {
			maximum += 1;
			position = (position % maximum + maximum) % maximum;
		} else {
			position = Math.max(minimum, Math.min(maximum, position));
		}

		this.speed(this.duration(current, position, speed));
		this.current(position);

		if (this.isVisible()) {
			this.update();
		}
	};

	/**
	 * Slides to the next item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.next = function (speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) + 1, speed);
	};

	/**
	 * Slides to the previous item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.prev = function (speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) - 1, speed);
	};

	/**
	 * Handles the end of an animation.
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onTransitionEnd = function (event) {

		// if css2 animation then event object is undefined
		if (event !== undefined) {
			event.stopPropagation();

			// Catch only owl-stage transitionEnd event
			if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
				return false;
			}
		}

		this.leave('animating');
		this.trigger('translated');
	};

	/**
	 * Gets viewport width.
	 * @protected
	 * @return {Number} - The width in pixel.
	 */
	Owl.prototype.viewport = function () {
		var width;
		if (this.options.responsiveBaseElement !== window) {
			width = $(this.options.responsiveBaseElement).width();
		} else if (window.innerWidth) {
			width = window.innerWidth;
		} else if (document.documentElement && document.documentElement.clientWidth) {
			width = document.documentElement.clientWidth;
		} else {
			console.warn('Can not detect viewport width.');
		}
		return width;
	};

	/**
	 * Replaces the current content.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The new content.
	 */
	Owl.prototype.replace = function (content) {
		this.$stage.empty();
		this._items = [];

		if (content) {
			content = (content instanceof jQuery) ? content : $(content);
		}

		if (this.settings.nestedItemSelector) {
			content = content.find('.' + this.settings.nestedItemSelector);
		}

		content.filter(function () {
			return this.nodeType === 1;
		}).each($.proxy(function (index, item) {
			item = this.prepare(item);
			this.$stage.append(item);
			this._items.push(item);
			this._mergers.push(item.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		}, this));

		this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);

		this.invalidate('items');
	};

	/**
	 * Adds an item.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The item content to add.
	 * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
	 */
	Owl.prototype.add = function (content, position) {
		var current = this.relative(this._current);

		position = position === undefined ? this._items.length : this.normalize(position, true);
		content = content instanceof jQuery ? content : $(content);

		this.trigger('add', { content: content, position: position });

		content = this.prepare(content);

		if (this._items.length === 0 || position === this._items.length) {
			this._items.length === 0 && this.$stage.append(content);
			this._items.length !== 0 && this._items[position - 1].after(content);
			this._items.push(content);
			this._mergers.push(content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		} else {
			this._items[position].before(content);
			this._items.splice(position, 0, content);
			this._mergers.splice(position, 0, content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		}

		this._items[current] && this.reset(this._items[current].index());

		this.invalidate('items');

		this.trigger('added', { content: content, position: position });
	};

	/**
	 * Removes an item by its position.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {Number} position - The relative position of the item to remove.
	 */
	Owl.prototype.remove = function (position) {
		position = this.normalize(position, true);

		if (position === undefined) {
			return;
		}

		this.trigger('remove', { content: this._items[position], position: position });

		this._items[position].remove();
		this._items.splice(position, 1);
		this._mergers.splice(position, 1);

		this.invalidate('items');

		this.trigger('removed', { content: null, position: position });
	};

	/**
	 * Preloads images with auto width.
	 * @todo Replace by a more generic approach
	 * @protected
	 */
	Owl.prototype.preloadAutoWidthImages = function (images) {
		images.each($.proxy(function (i, element) {
			this.enter('pre-loading');
			element = $(element);
			$(new Image()).one('load', $.proxy(function (e) {
				element.attr('src', e.target.src);
				element.css('opacity', 1);
				this.leave('pre-loading');
				!this.is('pre-loading') && !this.is('initializing') && this.refresh();
			}, this)).attr('src', element.attr('src') || element.attr('data-src') || element.attr('data-src-retina'));
		}, this));
	};

	/**
	 * Destroys the carousel.
	 * @public
	 */
	Owl.prototype.destroy = function () {

		this.$element.off('.owl.core');
		this.$stage.off('.owl.core');
		$(document).off('.owl.core');

		if (this.settings.responsive !== false) {
			window.clearTimeout(this.resizeTimer);
			this.off(window, 'resize', this._handlers.onThrottledResize);
		}

		for (var i in this._plugins) {
			this._plugins[i].destroy();
		}

		this.$stage.children('.cloned').remove();

		this.$stage.unwrap();
		this.$stage.children().contents().unwrap();
		this.$stage.children().unwrap();
		this.$stage.remove();
		this.$element
			.removeClass(this.options.refreshClass)
			.removeClass(this.options.loadingClass)
			.removeClass(this.options.loadedClass)
			.removeClass(this.options.rtlClass)
			.removeClass(this.options.dragClass)
			.removeClass(this.options.grabClass)
			.attr('class', this.$element.attr('class').replace(new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'), ''))
			.removeData('owl.carousel');
	};

	/**
	 * Operators to calculate right-to-left and left-to-right.
	 * @protected
	 * @param {Number} [a] - The left side operand.
	 * @param {String} [o] - The operator.
	 * @param {Number} [b] - The right side operand.
	 */
	Owl.prototype.op = function (a, o, b) {
		var rtl = this.settings.rtl;
		switch (o) {
			case '<':
				return rtl ? a > b : a < b;
			case '>':
				return rtl ? a < b : a > b;
			case '>=':
				return rtl ? a <= b : a >= b;
			case '<=':
				return rtl ? a >= b : a <= b;
			default:
				break;
		}
	};

	/**
	 * Attaches to an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The event handler to attach.
	 * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
	 */
	Owl.prototype.on = function (element, event, listener, capture) {
		if (element.addEventListener) {
			element.addEventListener(event, listener, capture);
		} else if (element.attachEvent) {
			element.attachEvent('on' + event, listener);
		}
	};

	/**
	 * Detaches from an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The attached event handler to detach.
	 * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
	 */
	Owl.prototype.off = function (element, event, listener, capture) {
		if (element.removeEventListener) {
			element.removeEventListener(event, listener, capture);
		} else if (element.detachEvent) {
			element.detachEvent('on' + event, listener);
		}
	};

	/**
	 * Triggers a public event.
	 * @todo Remove `status`, `relatedTarget` should be used instead.
	 * @protected
	 * @param {String} name - The event name.
	 * @param {*} [data=null] - The event data.
	 * @param {String} [namespace=carousel] - The event namespace.
	 * @param {String} [state] - The state which is associated with the event.
	 * @param {Boolean} [enter=false] - Indicates if the call enters the specified state or not.
	 * @returns {Event} - The event arguments.
	 */
	Owl.prototype.trigger = function (name, data, namespace, state, enter) {
		var status = {
			item: { count: this._items.length, index: this.current() }
		}, handler = $.camelCase(
			$.grep(['on', name, namespace], function (v) { return v })
				.join('-').toLowerCase()
		), event = $.Event(
			[name, 'owl', namespace || 'carousel'].join('.').toLowerCase(),
			$.extend({ relatedTarget: this }, status, data)
		);

		if (!this._supress[name]) {
			$.each(this._plugins, function (name, plugin) {
				if (plugin.onTrigger) {
					plugin.onTrigger(event);
				}
			});

			this.register({ type: Owl.Type.Event, name: name });
			this.$element.trigger(event);

			if (this.settings && typeof this.settings[handler] === 'function') {
				this.settings[handler].call(this, event);
			}
		}

		return event;
	};

	/**
	 * Enters a state.
	 * @param name - The state name.
	 */
	Owl.prototype.enter = function (name) {
		$.each([name].concat(this._states.tags[name] || []), $.proxy(function (i, name) {
			if (this._states.current[name] === undefined) {
				this._states.current[name] = 0;
			}

			this._states.current[name]++;
		}, this));
	};

	/**
	 * Leaves a state.
	 * @param name - The state name.
	 */
	Owl.prototype.leave = function (name) {
		$.each([name].concat(this._states.tags[name] || []), $.proxy(function (i, name) {
			this._states.current[name]--;
		}, this));
	};

	/**
	 * Registers an event or state.
	 * @public
	 * @param {Object} object - The event or state to register.
	 */
	Owl.prototype.register = function (object) {
		if (object.type === Owl.Type.Event) {
			if (!$.event.special[object.name]) {
				$.event.special[object.name] = {};
			}

			if (!$.event.special[object.name].owl) {
				var _default = $.event.special[object.name]._default;
				$.event.special[object.name]._default = function (e) {
					if (_default && _default.apply && (!e.namespace || e.namespace.indexOf('owl') === -1)) {
						return _default.apply(this, arguments);
					}
					return e.namespace && e.namespace.indexOf('owl') > -1;
				};
				$.event.special[object.name].owl = true;
			}
		} else if (object.type === Owl.Type.State) {
			if (!this._states.tags[object.name]) {
				this._states.tags[object.name] = object.tags;
			} else {
				this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
			}

			this._states.tags[object.name] = $.grep(this._states.tags[object.name], $.proxy(function (tag, i) {
				return $.inArray(tag, this._states.tags[object.name]) === i;
			}, this));
		}
	};

	/**
	 * Suppresses events.
	 * @protected
	 * @param {Array.<String>} events - The events to suppress.
	 */
	Owl.prototype.suppress = function (events) {
		$.each(events, $.proxy(function (index, event) {
			this._supress[event] = true;
		}, this));
	};

	/**
	 * Releases suppressed events.
	 * @protected
	 * @param {Array.<String>} events - The events to release.
	 */
	Owl.prototype.release = function (events) {
		$.each(events, $.proxy(function (index, event) {
			delete this._supress[event];
		}, this));
	};

	/**
	 * Gets unified pointer coordinates from event.
	 * @todo #261
	 * @protected
	 * @param {Event} - The `mousedown` or `touchstart` event.
	 * @returns {Object} - Contains `x` and `y` coordinates of current pointer position.
	 */
	Owl.prototype.pointer = function (event) {
		var result = { x: null, y: null };

		event = event.originalEvent || event || window.event;

		event = event.touches && event.touches.length ?
			event.touches[0] : event.changedTouches && event.changedTouches.length ?
				event.changedTouches[0] : event;

		if (event.pageX) {
			result.x = event.pageX;
			result.y = event.pageY;
		} else {
			result.x = event.clientX;
			result.y = event.clientY;
		}

		return result;
	};

	/**
	 * Determines if the input is a Number or something that can be coerced to a Number
	 * @protected
	 * @param {Number|String|Object|Array|Boolean|RegExp|Function|Symbol} - The input to be tested
	 * @returns {Boolean} - An indication if the input is a Number or can be coerced to a Number
	 */
	Owl.prototype.isNumeric = function (number) {
		return !isNaN(parseFloat(number));
	};

	/**
	 * Gets the difference of two vectors.
	 * @todo #261
	 * @protected
	 * @param {Object} - The first vector.
	 * @param {Object} - The second vector.
	 * @returns {Object} - The difference.
	 */
	Owl.prototype.difference = function (first, second) {
		return {
			x: first.x - second.x,
			y: first.y - second.y
		};
	};

	/**
	 * The jQuery Plugin for the Owl Carousel
	 * @todo Navigation plugin `next` and `prev`
	 * @public
	 */
	$.fn.owlCarousel = function (option) {
		var args = Array.prototype.slice.call(arguments, 1);

		return this.each(function () {
			var $this = $(this),
				data = $this.data('owl.carousel');

			if (!data) {
				data = new Owl(this, typeof option == 'object' && option);
				$this.data('owl.carousel', data);

				$.each([
					'next', 'prev', 'to', 'destroy', 'refresh', 'replace', 'add', 'remove'
				], function (i, event) {
					data.register({ type: Owl.Type.Event, name: event });
					data.$element.on(event + '.owl.carousel.core', $.proxy(function (e) {
						if (e.namespace && e.relatedTarget !== this) {
							this.suppress([event]);
							data[event].apply(this, [].slice.call(arguments, 1));
							this.release([event]);
						}
					}, data));
				});
			}

			if (typeof option == 'string' && option.charAt(0) !== '_') {
				data[option].apply(data, args);
			}
		});
	};

	/**
	 * The constructor for the jQuery Plugin
	 * @public
	 */
	$.fn.owlCarousel.Constructor = Owl;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoRefresh Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
; (function ($, window, document, undefined) {

	/**
	 * Creates the auto refresh plugin.
	 * @class The Auto Refresh Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var AutoRefresh = function (carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Refresh interval.
		 * @protected
		 * @type {number}
		 */
		this._interval = null;

		/**
		 * Whether the element is currently visible or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._visible = null;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function (e) {
				if (e.namespace && this._core.settings.autoRefresh) {
					this.watch();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoRefresh.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	AutoRefresh.Defaults = {
		autoRefresh: true,
		autoRefreshInterval: 500
	};

	/**
	 * Watches the element.
	 */
	AutoRefresh.prototype.watch = function () {
		if (this._interval) {
			return;
		}

		this._visible = this._core.isVisible();
		this._interval = window.setInterval($.proxy(this.refresh, this), this._core.settings.autoRefreshInterval);
	};

	/**
	 * Refreshes the element.
	 */
	AutoRefresh.prototype.refresh = function () {
		if (this._core.isVisible() === this._visible) {
			return;
		}

		this._visible = !this._visible;

		this._core.$element.toggleClass('owl-hidden', !this._visible);

		this._visible && (this._core.invalidate('width') && this._core.refresh());
	};

	/**
	 * Destroys the plugin.
	 */
	AutoRefresh.prototype.destroy = function () {
		var handler, property;

		window.clearInterval(this._interval);

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh;

})(window.Zepto || window.jQuery, window, document);

/**
 * Lazy Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
; (function ($, window, document, undefined) {

	/**
	 * Creates the lazy plugin.
	 * @class The Lazy Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Lazy = function (carousel) {

		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Already loaded items.
		 * @protected
		 * @type {Array.<jQuery>}
		 */
		this._loaded = [];

		/**
		 * Event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel change.owl.carousel resized.owl.carousel': $.proxy(function (e) {
				if (!e.namespace) {
					return;
				}

				if (!this._core.settings || !this._core.settings.lazyLoad) {
					return;
				}

				if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
					var settings = this._core.settings,
						n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
						i = ((settings.center && n * -1) || 0),
						position = (e.property && e.property.value !== undefined ? e.property.value : this._core.current()) + i,
						clones = this._core.clones().length,
						load = $.proxy(function (i, v) { this.load(v) }, this);
					//TODO: Need documentation for this new option
					if (settings.lazyLoadEager > 0) {
						n += settings.lazyLoadEager;
						// If the carousel is looping also preload images that are to the "left"
						if (settings.loop) {
							position -= settings.lazyLoadEager;
							n++;
						}
					}

					while (i++ < n) {
						this.load(clones / 2 + this._core.relative(position));
						clones && $.each(this._core.clones(this._core.relative(position)), load);
						position++;
					}
				}
			}, this)
		};

		// set the default options
		this._core.options = $.extend({}, Lazy.Defaults, this._core.options);

		// register event handler
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Lazy.Defaults = {
		lazyLoad: false,
		lazyLoadEager: 0
	};

	/**
	 * Loads all resources of an item at the specified position.
	 * @param {Number} position - The absolute position of the item.
	 * @protected
	 */
	Lazy.prototype.load = function (position) {
		var $item = this._core.$stage.children().eq(position),
			$elements = $item && $item.find('.owl-lazy');

		if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
			return;
		}

		$elements.each($.proxy(function (index, element) {
			var $element = $(element), image,
				url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src') || $element.attr('data-srcset');

			this._core.trigger('load', { element: $element, url: url }, 'lazy');

			if ($element.is('img')) {
				$element.one('load.owl.lazy', $.proxy(function () {
					$element.css('opacity', 1);
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this)).attr('src', url);
			} else if ($element.is('source')) {
				$element.one('load.owl.lazy', $.proxy(function () {
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this)).attr('srcset', url);
			} else {
				image = new Image();
				image.onload = $.proxy(function () {
					$element.css({
						'background-image': 'url("' + url + '")',
						'opacity': '1'
					});
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this);
				image.src = url;
			}
		}, this));

		this._loaded.push($item.get(0));
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Lazy.prototype.destroy = function () {
		var handler, property;

		for (handler in this.handlers) {
			this._core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoHeight Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
; (function ($, window, document, undefined) {

	/**
	 * Creates the auto height plugin.
	 * @class The Auto Height Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var AutoHeight = function (carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		this._previousHeight = null;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel refreshed.owl.carousel': $.proxy(function (e) {
				if (e.namespace && this._core.settings.autoHeight) {
					this.update();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function (e) {
				if (e.namespace && this._core.settings.autoHeight && e.property.name === 'position') {
					this.update();
				}
			}, this),
			'loaded.owl.lazy': $.proxy(function (e) {
				if (e.namespace && this._core.settings.autoHeight
					&& e.element.closest('.' + this._core.settings.itemClass).index() === this._core.current()) {
					this.update();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
		this._intervalId = null;
		var refThis = this;

		// These changes have been taken from a PR by gavrochelegnou proposed in #1575
		// and have been made compatible with the latest jQuery version
		$(window).on('load', function () {
			if (refThis._core.settings.autoHeight) {
				refThis.update();
			}
		});

		// Autoresize the height of the carousel when window is resized
		// When carousel has images, the height is dependent on the width
		// and should also change on resize
		$(window).resize(function () {
			if (refThis._core.settings.autoHeight) {
				if (refThis._intervalId != null) {
					clearTimeout(refThis._intervalId);
				}

				refThis._intervalId = setTimeout(function () {
					refThis.update();
				}, 250);
			}
		});

	};

	/**
	 * Default options.
	 * @public
	 */
	AutoHeight.Defaults = {
		autoHeight: false,
		autoHeightClass: 'owl-height'
	};

	/**
	 * Updates the view.
	 */
	AutoHeight.prototype.update = function () {
		var start = this._core._current,
			end = start + this._core.settings.items,
			lazyLoadEnabled = this._core.settings.lazyLoad,
			visible = this._core.$stage.children().toArray().slice(start, end),
			heights = [],
			maxheight = 0;

		$.each(visible, function (index, item) {
			heights.push($(item).height());
		});

		maxheight = Math.max.apply(null, heights);

		if (maxheight <= 1 && lazyLoadEnabled && this._previousHeight) {
			maxheight = this._previousHeight;
		}

		this._previousHeight = maxheight;

		this._core.$stage.parent()
			.height(maxheight)
			.addClass(this._core.settings.autoHeightClass);
	};

	AutoHeight.prototype.destroy = function () {
		var handler, property;

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] !== 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;

})(window.Zepto || window.jQuery, window, document);

/**
 * Video Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
; (function ($, window, document, undefined) {

	/**
	 * Creates the video plugin.
	 * @class The Video Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Video = function (carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Cache all video URLs.
		 * @protected
		 * @type {Object}
		 */
		this._videos = {};

		/**
		 * Current playing item.
		 * @protected
		 * @type {jQuery}
		 */
		this._playing = null;

		/**
		 * All event handlers.
		 * @todo The cloned content removale is too late
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function (e) {
				if (e.namespace) {
					this._core.register({ type: 'state', name: 'playing', tags: ['interacting'] });
				}
			}, this),
			'resize.owl.carousel': $.proxy(function (e) {
				if (e.namespace && this._core.settings.video && this.isInFullScreen()) {
					e.preventDefault();
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function (e) {
				if (e.namespace && this._core.is('resizing')) {
					this._core.$stage.find('.cloned .owl-video-frame').remove();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function (e) {
				if (e.namespace && e.property.name === 'position' && this._playing) {
					this.stop();
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function (e) {
				if (!e.namespace) {
					return;
				}

				var $element = $(e.content).find('.owl-video');

				if ($element.length) {
					$element.css('display', 'none');
					this.fetch($element, $(e.content));
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Video.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);

		this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function (e) {
			this.play(e);
		}, this));
	};

	/**
	 * Default options.
	 * @public
	 */
	Video.Defaults = {
		video: false,
		videoHeight: false,
		videoWidth: false
	};

	/**
	 * Gets the video ID and the type (YouTube/Vimeo/vzaar only).
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {jQuery} item - The item containing the video.
	 */
	Video.prototype.fetch = function (target, item) {
		var type = (function () {
			if (target.attr('data-vimeo-id')) {
				return 'vimeo';
			} else if (target.attr('data-vzaar-id')) {
				return 'vzaar'
			} else {
				return 'youtube';
			}
		})(),
			id = target.attr('data-vimeo-id') || target.attr('data-youtube-id') || target.attr('data-vzaar-id'),
			width = target.attr('data-width') || this._core.settings.videoWidth,
			height = target.attr('data-height') || this._core.settings.videoHeight,
			url = target.attr('href');

		if (url) {

			/*
					Parses the id's out of the following urls (and probably more):
					https://www.youtube.com/watch?v=:id
					https://youtu.be/:id
					https://vimeo.com/:id
					https://vimeo.com/channels/:channel/:id
					https://vimeo.com/groups/:group/videos/:id
					https://app.vzaar.com/videos/:id

					Visual example: https://regexper.com/#(http%3A%7Chttps%3A%7C)%5C%2F%5C%2F(player.%7Cwww.%7Capp.)%3F(vimeo%5C.com%7Cyoutu(be%5C.com%7C%5C.be%7Cbe%5C.googleapis%5C.com)%7Cvzaar%5C.com)%5C%2F(video%5C%2F%7Cvideos%5C%2F%7Cembed%5C%2F%7Cchannels%5C%2F.%2B%5C%2F%7Cgroups%5C%2F.%2B%5C%2F%7Cwatch%5C%3Fv%3D%7Cv%5C%2F)%3F(%5BA-Za-z0-9._%25-%5D*)(%5C%26%5CS%2B)%3F
			*/

			id = url.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);

			if (id[3].indexOf('youtu') > -1) {
				type = 'youtube';
			} else if (id[3].indexOf('vimeo') > -1) {
				type = 'vimeo';
			} else if (id[3].indexOf('vzaar') > -1) {
				type = 'vzaar';
			} else {
				throw new Error('Video URL not supported.');
			}
			id = id[6];
		} else {
			throw new Error('Missing video URL.');
		}

		this._videos[url] = {
			type: type,
			id: id,
			width: width,
			height: height
		};

		item.attr('data-video', url);

		this.thumbnail(target, this._videos[url]);
	};

	/**
	 * Creates video thumbnail.
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {Object} info - The video info object.
	 * @see `fetch`
	 */
	Video.prototype.thumbnail = function (target, video) {
		var tnLink,
			icon,
			path,
			dimensions = video.width && video.height ? 'width:' + video.width + 'px;height:' + video.height + 'px;' : '',
			customTn = target.find('img'),
			srcType = 'src',
			lazyClass = '',
			settings = this._core.settings,
			create = function (path) {
				icon = '<div class="owl-video-play-icon"></div>';

				if (settings.lazyLoad) {
					tnLink = $('<div/>', {
						"class": 'owl-video-tn ' + lazyClass,
						"srcType": path
					});
				} else {
					tnLink = $('<div/>', {
						"class": "owl-video-tn",
						"style": 'opacity:1;background-image:url(' + path + ')'
					});
				}
				target.after(tnLink);
				target.after(icon);
			};

		// wrap video content into owl-video-wrapper div
		target.wrap($('<div/>', {
			"class": "owl-video-wrapper",
			"style": dimensions
		}));

		if (this._core.settings.lazyLoad) {
			srcType = 'data-src';
			lazyClass = 'owl-lazy';
		}

		// custom thumbnail
		if (customTn.length) {
			create(customTn.attr(srcType));
			customTn.remove();
			return false;
		}

		if (video.type === 'youtube') {
			path = "//img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
			create(path);
		} else if (video.type === 'vimeo') {
			$.ajax({
				type: 'GET',
				url: '//vimeo.com/api/v2/video/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function (data) {
					path = data[0].thumbnail_large;
					create(path);
				}
			});
		} else if (video.type === 'vzaar') {
			$.ajax({
				type: 'GET',
				url: '//vzaar.com/api/videos/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function (data) {
					path = data.framegrab_url;
					create(path);
				}
			});
		}
	};

	/**
	 * Stops the current video.
	 * @public
	 */
	Video.prototype.stop = function () {
		this._core.trigger('stop', null, 'video');
		this._playing.find('.owl-video-frame').remove();
		this._playing.removeClass('owl-video-playing');
		this._playing = null;
		this._core.leave('playing');
		this._core.trigger('stopped', null, 'video');
	};

	/**
	 * Starts the current video.
	 * @public
	 * @param {Event} event - The event arguments.
	 */
	Video.prototype.play = function (event) {
		var target = $(event.target),
			item = target.closest('.' + this._core.settings.itemClass),
			video = this._videos[item.attr('data-video')],
			width = video.width || '100%',
			height = video.height || this._core.$stage.height(),
			html,
			iframe;

		if (this._playing) {
			return;
		}

		this._core.enter('playing');
		this._core.trigger('play', null, 'video');

		item = this._core.items(this._core.relative(item.index()));

		this._core.reset(item.index());

		html = $('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>');
		html.attr('height', height);
		html.attr('width', width);
		if (video.type === 'youtube') {
			html.attr('src', '//www.youtube.com/embed/' + video.id + '?autoplay=1&rel=0&v=' + video.id);
		} else if (video.type === 'vimeo') {
			html.attr('src', '//player.vimeo.com/video/' + video.id + '?autoplay=1');
		} else if (video.type === 'vzaar') {
			html.attr('src', '//view.vzaar.com/' + video.id + '/player?autoplay=true');
		}

		iframe = $(html).wrap('<div class="owl-video-frame" />').insertAfter(item.find('.owl-video'));

		this._playing = item.addClass('owl-video-playing');
	};

	/**
	 * Checks whether an video is currently in full screen mode or not.
	 * @todo Bad style because looks like a readonly method but changes members.
	 * @protected
	 * @returns {Boolean}
	 */
	Video.prototype.isInFullScreen = function () {
		var element = document.fullscreenElement || document.mozFullScreenElement ||
			document.webkitFullscreenElement;

		return element && $(element).parent().hasClass('owl-video-frame');
	};

	/**
	 * Destroys the plugin.
	 */
	Video.prototype.destroy = function () {
		var handler, property;

		this._core.$element.off('click.owl.video');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Video = Video;

})(window.Zepto || window.jQuery, window, document);

/**
 * Animate Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
; (function ($, window, document, undefined) {

	/**
	 * Creates the animate plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Animate = function (scope) {
		this.core = scope;
		this.core.options = $.extend({}, Animate.Defaults, this.core.options);
		this.swapping = true;
		this.previous = undefined;
		this.next = undefined;

		this.handlers = {
			'change.owl.carousel': $.proxy(function (e) {
				if (e.namespace && e.property.name == 'position') {
					this.previous = this.core.current();
					this.next = e.property.value;
				}
			}, this),
			'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function (e) {
				if (e.namespace) {
					this.swapping = e.type == 'translated';
				}
			}, this),
			'translate.owl.carousel': $.proxy(function (e) {
				if (e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
					this.swap();
				}
			}, this)
		};

		this.core.$element.on(this.handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Animate.Defaults = {
		animateOut: false,
		animateIn: false
	};

	/**
	 * Toggles the animation classes whenever an translations starts.
	 * @protected
	 * @returns {Boolean|undefined}
	 */
	Animate.prototype.swap = function () {

		if (this.core.settings.items !== 1) {
			return;
		}

		if (!$.support.animation || !$.support.transition) {
			return;
		}

		this.core.speed(0);

		var left,
			clear = $.proxy(this.clear, this),
			previous = this.core.$stage.children().eq(this.previous),
			next = this.core.$stage.children().eq(this.next),
			incoming = this.core.settings.animateIn,
			outgoing = this.core.settings.animateOut;

		if (this.core.current() === this.previous) {
			return;
		}

		if (outgoing) {
			left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
			previous.one($.support.animation.end, clear)
				.css({ 'left': left + 'px' })
				.addClass('animated owl-animated-out')
				.addClass(outgoing);
		}

		if (incoming) {
			next.one($.support.animation.end, clear)
				.addClass('animated owl-animated-in')
				.addClass(incoming);
		}
	};

	Animate.prototype.clear = function (e) {
		$(e.target).css({ 'left': '' })
			.removeClass('animated owl-animated-out owl-animated-in')
			.removeClass(this.core.settings.animateIn)
			.removeClass(this.core.settings.animateOut);
		this.core.onTransitionEnd();
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Animate.prototype.destroy = function () {
		var handler, property;

		for (handler in this.handlers) {
			this.core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Animate = Animate;

})(window.Zepto || window.jQuery, window, document);

/**
 * Autoplay Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author Artus Kolanowski
 * @author David Deutsch
 * @author Tom De Caluwé
 * @license The MIT License (MIT)
 */
; (function ($, window, document, undefined) {

	/**
	 * Creates the autoplay plugin.
	 * @class The Autoplay Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Autoplay = function (carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * The autoplay timeout id.
		 * @type {Number}
		 */
		this._call = null;

		/**
		 * Depending on the state of the plugin, this variable contains either
		 * the start time of the timer or the current timer value if it's
		 * paused. Since we start in a paused state we initialize the timer
		 * value.
		 * @type {Number}
		 */
		this._time = 0;

		/**
		 * Stores the timeout currently used.
		 * @type {Number}
		 */
		this._timeout = 0;

		/**
		 * Indicates whenever the autoplay is paused.
		 * @type {Boolean}
		 */
		this._paused = true;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'changed.owl.carousel': $.proxy(function (e) {
				if (e.namespace && e.property.name === 'settings') {
					if (this._core.settings.autoplay) {
						this.play();
					} else {
						this.stop();
					}
				} else if (e.namespace && e.property.name === 'position' && this._paused) {
					// Reset the timer. This code is triggered when the position
					// of the carousel was changed through user interaction.
					this._time = 0;
				}
			}, this),
			'initialized.owl.carousel': $.proxy(function (e) {
				if (e.namespace && this._core.settings.autoplay) {
					this.play();
				}
			}, this),
			'play.owl.autoplay': $.proxy(function (e, t, s) {
				if (e.namespace) {
					this.play(t, s);
				}
			}, this),
			'stop.owl.autoplay': $.proxy(function (e) {
				if (e.namespace) {
					this.stop();
				}
			}, this),
			'mouseover.owl.autoplay': $.proxy(function () {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.pause();
				}
			}, this),
			'mouseleave.owl.autoplay': $.proxy(function () {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.play();
				}
			}, this),
			'touchstart.owl.core': $.proxy(function () {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.pause();
				}
			}, this),
			'touchend.owl.core': $.proxy(function () {
				if (this._core.settings.autoplayHoverPause) {
					this.play();
				}
			}, this)
		};

		// register event handlers
		this._core.$element.on(this._handlers);

		// set default options
		this._core.options = $.extend({}, Autoplay.Defaults, this._core.options);
	};

	/**
	 * Default options.
	 * @public
	 */
	Autoplay.Defaults = {
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		autoplaySpeed: false
	};

	/**
	 * Transition to the next slide and set a timeout for the next transition.
	 * @private
	 * @param {Number} [speed] - The animation speed for the animations.
	 */
	Autoplay.prototype._next = function (speed) {
		this._call = window.setTimeout(
			$.proxy(this._next, this, speed),
			this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()
		);

		if (this._core.is('interacting') || document.hidden) {
			return;
		}
		this._core.next(speed || this._core.settings.autoplaySpeed);
	}

	/**
	 * Reads the current timer value when the timer is playing.
	 * @public
	 */
	Autoplay.prototype.read = function () {
		return new Date().getTime() - this._time;
	};

	/**
	 * Starts the autoplay.
	 * @public
	 * @param {Number} [timeout] - The interval before the next animation starts.
	 * @param {Number} [speed] - The animation speed for the animations.
	 */
	Autoplay.prototype.play = function (timeout, speed) {
		var elapsed;

		if (!this._core.is('rotating')) {
			this._core.enter('rotating');
		}

		timeout = timeout || this._core.settings.autoplayTimeout;

		// Calculate the elapsed time since the last transition. If the carousel
		// wasn't playing this calculation will yield zero.
		elapsed = Math.min(this._time % (this._timeout || timeout), timeout);

		if (this._paused) {
			// Start the clock.
			this._time = this.read();
			this._paused = false;
		} else {
			// Clear the active timeout to allow replacement.
			window.clearTimeout(this._call);
		}

		// Adjust the origin of the timer to match the new timeout value.
		this._time += this.read() % timeout - elapsed;

		this._timeout = timeout;
		this._call = window.setTimeout($.proxy(this._next, this, speed), timeout - elapsed);
	};

	/**
	 * Stops the autoplay.
	 * @public
	 */
	Autoplay.prototype.stop = function () {
		if (this._core.is('rotating')) {
			// Reset the clock.
			this._time = 0;
			this._paused = true;

			window.clearTimeout(this._call);
			this._core.leave('rotating');
		}
	};

	/**
	 * Pauses the autoplay.
	 * @public
	 */
	Autoplay.prototype.pause = function () {
		if (this._core.is('rotating') && !this._paused) {
			// Pause the clock.
			this._time = this.read();
			this._paused = true;

			window.clearTimeout(this._call);
		}
	};

	/**
	 * Destroys the plugin.
	 */
	Autoplay.prototype.destroy = function () {
		var handler, property;

		this.stop();

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;

})(window.Zepto || window.jQuery, window, document);

/**
 * Navigation Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
; (function ($, window, document, undefined) {
	'use strict';

	/**
	 * Creates the navigation plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} carousel - The Owl Carousel.
	 */
	var Navigation = function (carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Indicates whether the plugin is initialized or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._initialized = false;

		/**
		 * The current paging indexes.
		 * @protected
		 * @type {Array}
		 */
		this._pages = [];

		/**
		 * All DOM elements of the user interface.
		 * @protected
		 * @type {Object}
		 */
		this._controls = {};

		/**
		 * Markup for an indicator.
		 * @protected
		 * @type {Array.<String>}
		 */
		this._templates = [];

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * Overridden methods of the carousel.
		 * @protected
		 * @type {Object}
		 */
		this._overrides = {
			next: this._core.next,
			prev: this._core.prev,
			to: this._core.to
		};

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'prepared.owl.carousel': $.proxy(function (e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.push('<div class="' + this._core.settings.dotClass + '">' +
						$(e.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot') + '</div>');
				}
			}, this),
			'added.owl.carousel': $.proxy(function (e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.splice(e.position, 0, this._templates.pop());
				}
			}, this),
			'remove.owl.carousel': $.proxy(function (e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.splice(e.position, 1);
				}
			}, this),
			'changed.owl.carousel': $.proxy(function (e) {
				if (e.namespace && e.property.name == 'position') {
					this.draw();
				}
			}, this),
			'initialized.owl.carousel': $.proxy(function (e) {
				if (e.namespace && !this._initialized) {
					this._core.trigger('initialize', null, 'navigation');
					this.initialize();
					this.update();
					this.draw();
					this._initialized = true;
					this._core.trigger('initialized', null, 'navigation');
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function (e) {
				if (e.namespace && this._initialized) {
					this._core.trigger('refresh', null, 'navigation');
					this.update();
					this.draw();
					this._core.trigger('refreshed', null, 'navigation');
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Navigation.Defaults, this._core.options);

		// register event handlers
		this.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 * @todo Rename `slideBy` to `navBy`
	 */
	Navigation.Defaults = {
		nav: false,
		navText: [
			'<span aria-label="' + 'Previous' + '">&#x2039;</span>',
			'<span aria-label="' + 'Next' + '">&#x203a;</span>'
		],
		navSpeed: false,
		navElement: 'button type="button" role="presentation"',
		navContainer: false,
		navContainerClass: 'owl-nav',
		navClass: [
			'owl-prev',
			'owl-next'
		],
		slideBy: 1,
		dotClass: 'owl-dot',
		dotsClass: 'owl-dots',
		dots: true,
		dotsEach: false,
		dotsData: false,
		dotsSpeed: false,
		dotsContainer: false
	};

	/**
	 * Initializes the layout of the plugin and extends the carousel.
	 * @protected
	 */
	Navigation.prototype.initialize = function () {
		var override,
			settings = this._core.settings;

		// create DOM structure for relative navigation
		this._controls.$relative = (settings.navContainer ? $(settings.navContainer)
			: $('<div>').addClass(settings.navContainerClass).appendTo(this.$element)).addClass('disabled');

		this._controls.$previous = $('<' + settings.navElement + '>')
			.addClass(settings.navClass[0])
			.html(settings.navText[0])
			.prependTo(this._controls.$relative)
			.on('click', $.proxy(function (e) {
				this.prev(settings.navSpeed);
			}, this));
		this._controls.$next = $('<' + settings.navElement + '>')
			.addClass(settings.navClass[1])
			.html(settings.navText[1])
			.appendTo(this._controls.$relative)
			.on('click', $.proxy(function (e) {
				this.next(settings.navSpeed);
			}, this));

		// create DOM structure for absolute navigation
		if (!settings.dotsData) {
			this._templates = [$('<button role="button">')
				.addClass(settings.dotClass)
				.append($('<span>'))
				.prop('outerHTML')];
		}

		this._controls.$absolute = (settings.dotsContainer ? $(settings.dotsContainer)
			: $('<div>').addClass(settings.dotsClass).appendTo(this.$element)).addClass('disabled');

		this._controls.$absolute.on('click', 'button', $.proxy(function (e) {
			var index = $(e.target).parent().is(this._controls.$absolute)
				? $(e.target).index() : $(e.target).parent().index();

			e.preventDefault();

			this.to(index, settings.dotsSpeed);
		}, this));

		/*$el.on('focusin', function() {
			$(document).off(".carousel");

			$(document).on('keydown.carousel', function(e) {
				if(e.keyCode == 37) {
					$el.trigger('prev.owl')
				}
				if(e.keyCode == 39) {
					$el.trigger('next.owl')
				}
			});
		});*/

		// override public methods of the carousel
		for (override in this._overrides) {
			this._core[override] = $.proxy(this[override], this);
		}
	};

	/**
	 * Destroys the plugin.
	 * @protected
	 */
	Navigation.prototype.destroy = function () {
		var handler, control, property, override, settings;
		settings = this._core.settings;

		for (handler in this._handlers) {
			this.$element.off(handler, this._handlers[handler]);
		}
		for (control in this._controls) {
			if (control === '$relative' && settings.navContainer) {
				this._controls[control].html('');
			} else {
				this._controls[control].remove();
			}
		}
		for (override in this.overides) {
			this._core[override] = this._overrides[override];
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	/**
	 * Updates the internal state.
	 * @protected
	 */
	Navigation.prototype.update = function () {
		var i, j, k,
			lower = this._core.clones().length / 2,
			upper = lower + this._core.items().length,
			maximum = this._core.maximum(true),
			settings = this._core.settings,
			size = settings.center || settings.autoWidth || settings.dotsData
				? 1 : settings.dotsEach || settings.items;

		if (settings.slideBy !== 'page') {
			settings.slideBy = Math.min(settings.slideBy, settings.items);
		}

		if (settings.dots || settings.slideBy == 'page') {
			this._pages = [];

			for (i = lower, j = 0, k = 0; i < upper; i++) {
				if (j >= size || j === 0) {
					this._pages.push({
						start: Math.min(maximum, i - lower),
						end: i - lower + size - 1
					});
					if (Math.min(maximum, i - lower) === maximum) {
						break;
					}
					j = 0, ++k;
				}
				j += this._core.mergers(this._core.relative(i));
			}
		}
	};

	/**
	 * Draws the user interface.
	 * @todo The option `dotsData` wont work.
	 * @protected
	 */
	Navigation.prototype.draw = function () {
		var difference,
			settings = this._core.settings,
			disabled = this._core.items().length <= settings.items,
			index = this._core.relative(this._core.current()),
			loop = settings.loop || settings.rewind;

		this._controls.$relative.toggleClass('disabled', !settings.nav || disabled);

		if (settings.nav) {
			this._controls.$previous.toggleClass('disabled', !loop && index <= this._core.minimum(true));
			this._controls.$next.toggleClass('disabled', !loop && index >= this._core.maximum(true));
		}

		this._controls.$absolute.toggleClass('disabled', !settings.dots || disabled);

		if (settings.dots) {
			difference = this._pages.length - this._controls.$absolute.children().length;

			if (settings.dotsData && difference !== 0) {
				this._controls.$absolute.html(this._templates.join(''));
			} else if (difference > 0) {
				this._controls.$absolute.append(new Array(difference + 1).join(this._templates[0]));
			} else if (difference < 0) {
				this._controls.$absolute.children().slice(difference).remove();
			}

			this._controls.$absolute.find('.active').removeClass('active');
			this._controls.$absolute.children().eq($.inArray(this.current(), this._pages)).addClass('active');
		}
	};

	/**
	 * Extends event data.
	 * @protected
	 * @param {Event} event - The event object which gets thrown.
	 */
	Navigation.prototype.onTrigger = function (event) {
		var settings = this._core.settings;

		event.page = {
			index: $.inArray(this.current(), this._pages),
			count: this._pages.length,
			size: settings && (settings.center || settings.autoWidth || settings.dotsData
				? 1 : settings.dotsEach || settings.items)
		};
	};

	/**
	 * Gets the current page position of the carousel.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.current = function () {
		var current = this._core.relative(this._core.current());
		return $.grep(this._pages, $.proxy(function (page, index) {
			return page.start <= current && page.end >= current;
		}, this)).pop();
	};

	/**
	 * Gets the current succesor/predecessor position.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.getPosition = function (successor) {
		var position, length,
			settings = this._core.settings;

		if (settings.slideBy == 'page') {
			position = $.inArray(this.current(), this._pages);
			length = this._pages.length;
			successor ? ++position : --position;
			position = this._pages[((position % length) + length) % length].start;
		} else {
			position = this._core.relative(this._core.current());
			length = this._core.items().length;
			successor ? position += settings.slideBy : position -= settings.slideBy;
		}

		return position;
	};

	/**
	 * Slides to the next item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.next = function (speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
	};

	/**
	 * Slides to the previous item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.prev = function (speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
	};

	/**
	 * Slides to the specified item or page.
	 * @public
	 * @param {Number} position - The position of the item or page.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
	 */
	Navigation.prototype.to = function (position, speed, standard) {
		var length;

		if (!standard && this._pages.length) {
			length = this._pages.length;
			$.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
		} else {
			$.proxy(this._overrides.to, this._core)(position, speed);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;

})(window.Zepto || window.jQuery, window, document);

/**
 * Hash Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
; (function ($, window, document, undefined) {
	'use strict';

	/**
	 * Creates the hash plugin.
	 * @class The Hash Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Hash = function (carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Hash index for the items.
		 * @protected
		 * @type {Object}
		 */
		this._hashes = {};

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function (e) {
				if (e.namespace && this._core.settings.startPosition === 'URLHash') {
					$(window).trigger('hashchange.owl.navigation');
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function (e) {
				if (e.namespace) {
					var hash = $(e.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash');

					if (!hash) {
						return;
					}

					this._hashes[hash] = e.content;
				}
			}, this),
			'changed.owl.carousel': $.proxy(function (e) {
				if (e.namespace && e.property.name === 'position') {
					var current = this._core.items(this._core.relative(this._core.current())),
						hash = $.map(this._hashes, function (item, hash) {
							return item === current ? hash : null;
						}).join();

					if (!hash || window.location.hash.slice(1) === hash) {
						return;
					}

					window.location.hash = hash;
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Hash.Defaults, this._core.options);

		// register the event handlers
		this.$element.on(this._handlers);

		// register event listener for hash navigation
		$(window).on('hashchange.owl.navigation', $.proxy(function (e) {
			var hash = window.location.hash.substring(1),
				items = this._core.$stage.children(),
				position = this._hashes[hash] && items.index(this._hashes[hash]);

			if (position === undefined || position === this._core.current()) {
				return;
			}

			this._core.to(this._core.relative(position), false, true);
		}, this));
	};

	/**
	 * Default options.
	 * @public
	 */
	Hash.Defaults = {
		URLhashListener: false
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Hash.prototype.destroy = function () {
		var handler, property;

		$(window).off('hashchange.owl.navigation');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Hash = Hash;

})(window.Zepto || window.jQuery, window, document);

/**
 * Support Plugin
 *
 * @version 2.3.4
 * @author Vivid Planet Software GmbH
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
; (function ($, window, document, undefined) {

	var style = $('<support>').get(0).style,
		prefixes = 'Webkit Moz O ms'.split(' '),
		events = {
			transition: {
				end: {
					WebkitTransition: 'webkitTransitionEnd',
					MozTransition: 'transitionend',
					OTransition: 'oTransitionEnd',
					transition: 'transitionend'
				}
			},
			animation: {
				end: {
					WebkitAnimation: 'webkitAnimationEnd',
					MozAnimation: 'animationend',
					OAnimation: 'oAnimationEnd',
					animation: 'animationend'
				}
			}
		},
		tests = {
			csstransforms: function () {
				return !!test('transform');
			},
			csstransforms3d: function () {
				return !!test('perspective');
			},
			csstransitions: function () {
				return !!test('transition');
			},
			cssanimations: function () {
				return !!test('animation');
			}
		};

	function test(property, prefixed) {
		var result = false,
			upper = property.charAt(0).toUpperCase() + property.slice(1);

		$.each((property + ' ' + prefixes.join(upper + ' ') + upper).split(' '), function (i, property) {
			if (style[property] !== undefined) {
				result = prefixed ? property : true;
				return false;
			}
		});

		return result;
	}

	function prefixed(property) {
		return test(property, true);
	}

	if (tests.csstransitions()) {
		/* jshint -W053 */
		$.support.transition = new String(prefixed('transition'))
		$.support.transition.end = events.transition.end[$.support.transition];
	}

	if (tests.cssanimations()) {
		/* jshint -W053 */
		$.support.animation = new String(prefixed('animation'))
		$.support.animation.end = events.animation.end[$.support.animation];
	}

	if (tests.csstransforms()) {
		/* jshint -W053 */
		$.support.transform = new String(prefixed('transform'));
		$.support.transform3d = tests.csstransforms3d();
	}

})(window.Zepto || window.jQuery, window, document);

/*
 * Very simple jQuery Color Picker
 * https://github.com/tkrotoff/jquery-simplecolorpicker
 *
 * Copyright (C) 2012-2013 Tanguy Krotoff <tkrotoff@gmail.com>
 *
 * Licensed under the MIT license
 */
(function ($) {
	'use strict';

	/**
	 * Constructor.
	 */
	var SimpleColorPicker = function (select, options) {
		this.init('simplecolorpicker', select, options);
	};

	/**
	 * SimpleColorPicker class.
	 */
	SimpleColorPicker.prototype = {
		constructor: SimpleColorPicker,

		init: function (type, select, options) {
			var self = this;

			self.type = type;

			self.$select = $(select);
			self.$select.hide();

			self.options = $.extend({}, $.fn.simplecolorpicker.defaults, options);

			self.$colorList = null;

			if (self.options.picker === true) {
				var selectText = self.$select.find('> option:selected').text();
				self.$icon = $('<span class="simplecolorpicker icon"'
					+ ' title="' + selectText + '"'
					+ ' style="background-color: ' + self.$select.val() + ';"'
					+ ' role="button" tabindex="0">'
					+ '</span>').insertAfter(self.$select);
				self.$icon.on('click.' + self.type, $.proxy(self.showPicker, self));

				self.$picker = $('<span class="simplecolorpicker picker ' + self.options.theme + '"></span>').appendTo(document.body);
				self.$colorList = self.$picker;

				// Hide picker when clicking outside
				$(document).on('mousedown.' + self.type, $.proxy(self.hidePicker, self));
				self.$picker.on('mousedown.' + self.type, $.proxy(self.mousedown, self));
			} else {
				self.$inline = $('<span class="simplecolorpicker inline ' + self.options.theme + '"></span>').insertAfter(self.$select);
				self.$colorList = self.$inline;
			}

			// Build the list of colors
			// <span class="color selected" title="Green" style="background-color: #7bd148;" role="button"></span>
			self.$select.find('> option').each(function () {
				var $option = $(this);
				var color = $option.val();

				var isSelected = $option.is(':selected');
				var isDisabled = $option.is(':disabled');

				var selected = '';
				if (isSelected === true) {
					selected = ' data-selected';
				}

				var disabled = '';
				if (isDisabled === true) {
					disabled = ' data-disabled';
				}

				var title = '';
				if (isDisabled === false) {
					// title = 'data-toggle="tooltip" data-title="' + $option.text() + '"';
					title = ' title="' + $option.text() + '"';
				}

				var role = '';
				if (isDisabled === false) {
					role = ' role="button" tabindex="0"';
				}

				var $colorSpan = $('<span class="color"'
					+ title
					+ ' style="background-color: ' + $option.data('color') + ';"'
					+ ' data-color="' + color + '"'
					+ selected
					+ disabled
					+ role + '>'
					+ '</span>');

				self.$colorList.append($colorSpan);
				$colorSpan.on('click.' + self.type, $.proxy(self.colorSpanClicked, self));

				var $next = $option.next();
				if ($next.is('optgroup') === true) {
					// Vertical break, like hr
					self.$colorList.append('<span class="vr"></span>');
				}
			});
		},

		/**
		 * Changes the selected color.
		 *
		 * @param color the hexadecimal color to select, ex: '#fbd75b'
		 */
		selectColor: function (color) {
			var self = this;

			var $colorSpan = self.$colorList.find('> span.color').filter(function () {
				return $(this).data('color').toLowerCase() === color.toLowerCase();
			});

			if ($colorSpan.length > 0) {
				self.selectColorSpan($colorSpan);
			} else {
				console.error("The given color '" + color + "' could not be found");
			}
		},

		showPicker: function () {
			var pos = this.$icon.offset();
			this.$picker.css({
				// Remove some pixels to align the picker icon with the icons inside the dropdown
				left: pos.left - 6,
				top: pos.top + this.$icon.outerHeight()
			});

			this.$picker.show(this.options.pickerDelay);
		},

		hidePicker: function () {
			this.$picker.hide(this.options.pickerDelay);
		},

		/**
		 * Selects the given span inside $colorList.
		 *
		 * The given span becomes the selected one.
		 * It also changes the HTML select value, this will emit the 'change' event.
		 */
		selectColorSpan: function ($colorSpan) {
			var color = $colorSpan.data('color');
			var title = $colorSpan.prop('title');

			// Mark this span as the selected one
			$colorSpan.siblings().removeAttr('data-selected');
			$colorSpan.attr('data-selected', '');

			if (this.options.picker === true) {
				this.$icon.css('background-color', color);
				this.$icon.prop('title', title);
				this.hidePicker();
			}

			// Change HTML select value
			this.$select.val(color);
		},

		/**
		 * The user clicked on a color inside $colorList.
		 */
		colorSpanClicked: function (e) {
			// When a color is clicked, make it the new selected one (unless disabled)
			if ($(e.target).is('[data-disabled]') === false) {
				this.selectColorSpan($(e.target));
				this.$select.trigger('change');
			}
		},

		/**
		 * Prevents the mousedown event from "eating" the click event.
		 */
		mousedown: function (e) {
			e.stopPropagation();
			e.preventDefault();
		},

		destroy: function () {
			if (this.options.picker === true) {
				this.$icon.off('.' + this.type);
				this.$icon.remove();
				$(document).off('.' + this.type);
			}

			this.$colorList.off('.' + this.type);
			this.$colorList.remove();

			this.$select.removeData(this.type);
			this.$select.show();
		}
	};

	/**
	 * Plugin definition.
	 * How to use: $('#id').simplecolorpicker()
	 */
	$.fn.simplecolorpicker = function (option) {
		var args = $.makeArray(arguments);
		args.shift();

		// For HTML element passed to the plugin
		return this.each(function () {
			var $this = $(this),
				data = $this.data('simplecolorpicker'),
				options = typeof option === 'object' && option;
			if (data === undefined) {
				$this.data('simplecolorpicker', (data = new SimpleColorPicker(this, options)));
			}
			if (typeof option === 'string') {
				data[option].apply(data, args);
			}
		});
	};

	/**
	 * Default options.
	 */
	$.fn.simplecolorpicker.defaults = {
		// No theme by default
		theme: '',

		// Show the picker or make it inline
		picker: false,

		// Animation delay in milliseconds
		pickerDelay: 0
	};

})(jQuery);

/**
 * simplebar - v6.2.5
 * Scrollbars, simpler.
 * https://grsmto.github.io/simplebar/
 *
 * Made by Adrien Denat from a fork by Jonathan Nicol
 * Under MIT License
 */

var SimpleBar = function () { "use strict"; var e = function (t, i) { return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) { e.__proto__ = t } || function (e, t) { for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]) }, e(t, i) }; var t = !("undefined" == typeof window || !window.document || !window.document.createElement), i = "object" == typeof global && global && global.Object === Object && global, s = "object" == typeof self && self && self.Object === Object && self, r = i || s || Function("return this")(), l = r.Symbol, o = Object.prototype, n = o.hasOwnProperty, a = o.toString, c = l ? l.toStringTag : void 0; var h = Object.prototype.toString; var u = l ? l.toStringTag : void 0; function d(e) { return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : u && u in Object(e) ? function (e) { var t = n.call(e, c), i = e[c]; try { e[c] = void 0; var s = !0 } catch (e) { } var r = a.call(e); return s && (t ? e[c] = i : delete e[c]), r }(e) : function (e) { return h.call(e) }(e) } var p = /\s/; var v = /^\s+/; function f(e) { return e ? e.slice(0, function (e) { for (var t = e.length; t-- && p.test(e.charAt(t));); return t }(e) + 1).replace(v, "") : e } function m(e) { var t = typeof e; return null != e && ("object" == t || "function" == t) } var b = /^[-+]0x[0-9a-f]+$/i, g = /^0b[01]+$/i, x = /^0o[0-7]+$/i, y = parseInt; function E(e) { if ("number" == typeof e) return e; if (function (e) { return "symbol" == typeof e || function (e) { return null != e && "object" == typeof e }(e) && "[object Symbol]" == d(e) }(e)) return NaN; if (m(e)) { var t = "function" == typeof e.valueOf ? e.valueOf() : e; e = m(t) ? t + "" : t } if ("string" != typeof e) return 0 === e ? e : +e; e = f(e); var i = g.test(e); return i || x.test(e) ? y(e.slice(2), i ? 2 : 8) : b.test(e) ? NaN : +e } var O = function () { return r.Date.now() }, w = Math.max, S = Math.min; function A(e, t, i) { var s, r, l, o, n, a, c = 0, h = !1, u = !1, d = !0; if ("function" != typeof e) throw new TypeError("Expected a function"); function p(t) { var i = s, l = r; return s = r = void 0, c = t, o = e.apply(l, i) } function v(e) { return c = e, n = setTimeout(b, t), h ? p(e) : o } function f(e) { var i = e - a; return void 0 === a || i >= t || i < 0 || u && e - c >= l } function b() { var e = O(); if (f(e)) return g(e); n = setTimeout(b, function (e) { var i = t - (e - a); return u ? S(i, l - (e - c)) : i }(e)) } function g(e) { return n = void 0, d && s ? p(e) : (s = r = void 0, o) } function x() { var e = O(), i = f(e); if (s = arguments, r = this, a = e, i) { if (void 0 === n) return v(a); if (u) return clearTimeout(n), n = setTimeout(b, t), p(a) } return void 0 === n && (n = setTimeout(b, t)), o } return t = E(t) || 0, m(i) && (h = !!i.leading, l = (u = "maxWait" in i) ? w(E(i.maxWait) || 0, t) : l, d = "trailing" in i ? !!i.trailing : d), x.cancel = function () { void 0 !== n && clearTimeout(n), c = 0, s = a = r = n = void 0 }, x.flush = function () { return void 0 === n ? o : g(O()) }, x } var k = function () { return k = Object.assign || function (e) { for (var t, i = 1, s = arguments.length; i < s; i++)for (var r in t = arguments[i]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); return e }, k.apply(this, arguments) }, W = null, M = null; function N() { if (null === W) { if ("undefined" == typeof document) return W = 0; var e = document.body, t = document.createElement("div"); t.classList.add("simplebar-hide-scrollbar"), e.appendChild(t); var i = t.getBoundingClientRect().right; e.removeChild(t), W = i } return W } function L(e) { return e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window } function z(e) { return e && e.ownerDocument ? e.ownerDocument : document } t && window.addEventListener("resize", (function () { M !== window.devicePixelRatio && (M = window.devicePixelRatio, W = null) })); var C = function (e) { return Array.prototype.reduce.call(e, (function (e, t) { var i = t.name.match(/data-simplebar-(.+)/); if (i) { var s = i[1].replace(/\W+(.)/g, (function (e, t) { return t.toUpperCase() })); switch (t.value) { case "true": e[s] = !0; break; case "false": e[s] = !1; break; case void 0: e[s] = !0; break; default: e[s] = t.value } } return e }), {}) }; function T(e, t) { var i; e && (i = e.classList).add.apply(i, t.split(" ")) } function R(e, t) { e && t.split(" ").forEach((function (t) { e.classList.remove(t) })) } function D(e) { return ".".concat(e.split(" ").join(".")) } var V = Object.freeze({ __proto__: null, getElementWindow: L, getElementDocument: z, getOptions: C, addClasses: T, removeClasses: R, classNamesToQuery: D }), H = L, j = z, B = C, _ = T, q = R, P = D, X = function () { function e(t, i) { void 0 === i && (i = {}); var s = this; if (this.removePreventClickId = null, this.minScrollbarWidth = 20, this.stopScrollDelay = 175, this.isScrolling = !1, this.isMouseEntering = !1, this.scrollXTicking = !1, this.scrollYTicking = !1, this.wrapperEl = null, this.contentWrapperEl = null, this.contentEl = null, this.offsetEl = null, this.maskEl = null, this.placeholderEl = null, this.heightAutoObserverWrapperEl = null, this.heightAutoObserverEl = null, this.rtlHelpers = null, this.scrollbarWidth = 0, this.resizeObserver = null, this.mutationObserver = null, this.elStyles = null, this.isRtl = null, this.mouseX = 0, this.mouseY = 0, this.onMouseMove = function () { }, this.onWindowResize = function () { }, this.onStopScrolling = function () { }, this.onMouseEntered = function () { }, this.onScroll = function () { var e = H(s.el); s.scrollXTicking || (e.requestAnimationFrame(s.scrollX), s.scrollXTicking = !0), s.scrollYTicking || (e.requestAnimationFrame(s.scrollY), s.scrollYTicking = !0), s.isScrolling || (s.isScrolling = !0, _(s.el, s.classNames.scrolling)), s.showScrollbar("x"), s.showScrollbar("y"), s.onStopScrolling() }, this.scrollX = function () { s.axis.x.isOverflowing && s.positionScrollbar("x"), s.scrollXTicking = !1 }, this.scrollY = function () { s.axis.y.isOverflowing && s.positionScrollbar("y"), s.scrollYTicking = !1 }, this._onStopScrolling = function () { q(s.el, s.classNames.scrolling), s.options.autoHide && (s.hideScrollbar("x"), s.hideScrollbar("y")), s.isScrolling = !1 }, this.onMouseEnter = function () { s.isMouseEntering || (_(s.el, s.classNames.mouseEntered), s.showScrollbar("x"), s.showScrollbar("y"), s.isMouseEntering = !0), s.onMouseEntered() }, this._onMouseEntered = function () { q(s.el, s.classNames.mouseEntered), s.options.autoHide && (s.hideScrollbar("x"), s.hideScrollbar("y")), s.isMouseEntering = !1 }, this._onMouseMove = function (e) { s.mouseX = e.clientX, s.mouseY = e.clientY, (s.axis.x.isOverflowing || s.axis.x.forceVisible) && s.onMouseMoveForAxis("x"), (s.axis.y.isOverflowing || s.axis.y.forceVisible) && s.onMouseMoveForAxis("y") }, this.onMouseLeave = function () { s.onMouseMove.cancel(), (s.axis.x.isOverflowing || s.axis.x.forceVisible) && s.onMouseLeaveForAxis("x"), (s.axis.y.isOverflowing || s.axis.y.forceVisible) && s.onMouseLeaveForAxis("y"), s.mouseX = -1, s.mouseY = -1 }, this._onWindowResize = function () { s.scrollbarWidth = s.getScrollbarWidth(), s.hideNativeScrollbar() }, this.onPointerEvent = function (e) { var t, i; s.axis.x.track.el && s.axis.y.track.el && s.axis.x.scrollbar.el && s.axis.y.scrollbar.el && (s.axis.x.track.rect = s.axis.x.track.el.getBoundingClientRect(), s.axis.y.track.rect = s.axis.y.track.el.getBoundingClientRect(), (s.axis.x.isOverflowing || s.axis.x.forceVisible) && (t = s.isWithinBounds(s.axis.x.track.rect)), (s.axis.y.isOverflowing || s.axis.y.forceVisible) && (i = s.isWithinBounds(s.axis.y.track.rect)), (t || i) && (e.stopPropagation(), "pointerdown" === e.type && "touch" !== e.pointerType && (t && (s.axis.x.scrollbar.rect = s.axis.x.scrollbar.el.getBoundingClientRect(), s.isWithinBounds(s.axis.x.scrollbar.rect) ? s.onDragStart(e, "x") : s.onTrackClick(e, "x")), i && (s.axis.y.scrollbar.rect = s.axis.y.scrollbar.el.getBoundingClientRect(), s.isWithinBounds(s.axis.y.scrollbar.rect) ? s.onDragStart(e, "y") : s.onTrackClick(e, "y"))))) }, this.drag = function (t) { var i, r, l, o, n, a, c, h, u, d, p; if (s.draggedAxis && s.contentWrapperEl) { var v = s.axis[s.draggedAxis].track, f = null !== (r = null === (i = v.rect) || void 0 === i ? void 0 : i[s.axis[s.draggedAxis].sizeAttr]) && void 0 !== r ? r : 0, m = s.axis[s.draggedAxis].scrollbar, b = null !== (o = null === (l = s.contentWrapperEl) || void 0 === l ? void 0 : l[s.axis[s.draggedAxis].scrollSizeAttr]) && void 0 !== o ? o : 0, g = parseInt(null !== (a = null === (n = s.elStyles) || void 0 === n ? void 0 : n[s.axis[s.draggedAxis].sizeAttr]) && void 0 !== a ? a : "0px", 10); t.preventDefault(), t.stopPropagation(); var x = ("y" === s.draggedAxis ? t.pageY : t.pageX) - (null !== (h = null === (c = v.rect) || void 0 === c ? void 0 : c[s.axis[s.draggedAxis].offsetAttr]) && void 0 !== h ? h : 0) - s.axis[s.draggedAxis].dragOffset, y = (x = "x" === s.draggedAxis && s.isRtl ? (null !== (d = null === (u = v.rect) || void 0 === u ? void 0 : u[s.axis[s.draggedAxis].sizeAttr]) && void 0 !== d ? d : 0) - m.size - x : x) / (f - m.size) * (b - g); "x" === s.draggedAxis && s.isRtl && (y = (null === (p = e.getRtlHelpers()) || void 0 === p ? void 0 : p.isScrollingToNegative) ? -y : y), s.contentWrapperEl[s.axis[s.draggedAxis].scrollOffsetAttr] = y } }, this.onEndDrag = function (e) { var t = j(s.el), i = H(s.el); e.preventDefault(), e.stopPropagation(), q(s.el, s.classNames.dragging), t.removeEventListener("mousemove", s.drag, !0), t.removeEventListener("mouseup", s.onEndDrag, !0), s.removePreventClickId = i.setTimeout((function () { t.removeEventListener("click", s.preventClick, !0), t.removeEventListener("dblclick", s.preventClick, !0), s.removePreventClickId = null })) }, this.preventClick = function (e) { e.preventDefault(), e.stopPropagation() }, this.el = t, this.options = k(k({}, e.defaultOptions), i), this.classNames = k(k({}, e.defaultOptions.classNames), i.classNames), this.axis = { x: { scrollOffsetAttr: "scrollLeft", sizeAttr: "width", scrollSizeAttr: "scrollWidth", offsetSizeAttr: "offsetWidth", offsetAttr: "left", overflowAttr: "overflowX", dragOffset: 0, isOverflowing: !0, forceVisible: !1, track: { size: null, el: null, rect: null, isVisible: !1 }, scrollbar: { size: null, el: null, rect: null, isVisible: !1 } }, y: { scrollOffsetAttr: "scrollTop", sizeAttr: "height", scrollSizeAttr: "scrollHeight", offsetSizeAttr: "offsetHeight", offsetAttr: "top", overflowAttr: "overflowY", dragOffset: 0, isOverflowing: !0, forceVisible: !1, track: { size: null, el: null, rect: null, isVisible: !1 }, scrollbar: { size: null, el: null, rect: null, isVisible: !1 } } }, "object" != typeof this.el || !this.el.nodeName) throw new Error("Argument passed to SimpleBar must be an HTML element instead of ".concat(this.el)); this.onMouseMove = function (e, t, i) { var s = !0, r = !0; if ("function" != typeof e) throw new TypeError("Expected a function"); return m(i) && (s = "leading" in i ? !!i.leading : s, r = "trailing" in i ? !!i.trailing : r), A(e, t, { leading: s, maxWait: t, trailing: r }) }(this._onMouseMove, 64), this.onWindowResize = A(this._onWindowResize, 64, { leading: !0 }), this.onStopScrolling = A(this._onStopScrolling, this.stopScrollDelay), this.onMouseEntered = A(this._onMouseEntered, this.stopScrollDelay), this.init() } return e.getRtlHelpers = function () { if (e.rtlHelpers) return e.rtlHelpers; var t = document.createElement("div"); t.innerHTML = '<div class="simplebar-dummy-scrollbar-size"><div></div></div>'; var i = t.firstElementChild, s = null == i ? void 0 : i.firstElementChild; if (!s) return null; document.body.appendChild(i), i.scrollLeft = 0; var r = e.getOffset(i), l = e.getOffset(s); i.scrollLeft = -999; var o = e.getOffset(s); return document.body.removeChild(i), e.rtlHelpers = { isScrollOriginAtZero: r.left !== l.left, isScrollingToNegative: l.left !== o.left }, e.rtlHelpers }, e.prototype.getScrollbarWidth = function () { try { return this.contentWrapperEl && "none" === getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar").display || "scrollbarWidth" in document.documentElement.style || "-ms-overflow-style" in document.documentElement.style ? 0 : N() } catch (e) { return N() } }, e.getOffset = function (e) { var t = e.getBoundingClientRect(), i = j(e), s = H(e); return { top: t.top + (s.pageYOffset || i.documentElement.scrollTop), left: t.left + (s.pageXOffset || i.documentElement.scrollLeft) } }, e.prototype.init = function () { t && (this.initDOM(), this.rtlHelpers = e.getRtlHelpers(), this.scrollbarWidth = this.getScrollbarWidth(), this.recalculate(), this.initListeners()) }, e.prototype.initDOM = function () { var e, t; this.wrapperEl = this.el.querySelector(P(this.classNames.wrapper)), this.contentWrapperEl = this.options.scrollableNode || this.el.querySelector(P(this.classNames.contentWrapper)), this.contentEl = this.options.contentNode || this.el.querySelector(P(this.classNames.contentEl)), this.offsetEl = this.el.querySelector(P(this.classNames.offset)), this.maskEl = this.el.querySelector(P(this.classNames.mask)), this.placeholderEl = this.findChild(this.wrapperEl, P(this.classNames.placeholder)), this.heightAutoObserverWrapperEl = this.el.querySelector(P(this.classNames.heightAutoObserverWrapperEl)), this.heightAutoObserverEl = this.el.querySelector(P(this.classNames.heightAutoObserverEl)), this.axis.x.track.el = this.findChild(this.el, "".concat(P(this.classNames.track)).concat(P(this.classNames.horizontal))), this.axis.y.track.el = this.findChild(this.el, "".concat(P(this.classNames.track)).concat(P(this.classNames.vertical))), this.axis.x.scrollbar.el = (null === (e = this.axis.x.track.el) || void 0 === e ? void 0 : e.querySelector(P(this.classNames.scrollbar))) || null, this.axis.y.scrollbar.el = (null === (t = this.axis.y.track.el) || void 0 === t ? void 0 : t.querySelector(P(this.classNames.scrollbar))) || null, this.options.autoHide || (_(this.axis.x.scrollbar.el, this.classNames.visible), _(this.axis.y.scrollbar.el, this.classNames.visible)) }, e.prototype.initListeners = function () { var e, t = this, i = H(this.el); if (this.el.addEventListener("mouseenter", this.onMouseEnter), this.el.addEventListener("pointerdown", this.onPointerEvent, !0), this.el.addEventListener("mousemove", this.onMouseMove), this.el.addEventListener("mouseleave", this.onMouseLeave), null === (e = this.contentWrapperEl) || void 0 === e || e.addEventListener("scroll", this.onScroll), i.addEventListener("resize", this.onWindowResize), this.contentEl) { if (window.ResizeObserver) { var s = !1, r = i.ResizeObserver || ResizeObserver; this.resizeObserver = new r((function () { s && i.requestAnimationFrame((function () { t.recalculate() })) })), this.resizeObserver.observe(this.el), this.resizeObserver.observe(this.contentEl), i.requestAnimationFrame((function () { s = !0 })) } this.mutationObserver = new i.MutationObserver((function () { i.requestAnimationFrame((function () { t.recalculate() })) })), this.mutationObserver.observe(this.contentEl, { childList: !0, subtree: !0, characterData: !0 }) } }, e.prototype.recalculate = function () { if (this.heightAutoObserverEl && this.contentEl && this.contentWrapperEl && this.wrapperEl && this.placeholderEl) { var e = H(this.el); this.elStyles = e.getComputedStyle(this.el), this.isRtl = "rtl" === this.elStyles.direction; var t = this.contentEl.offsetWidth, i = this.heightAutoObserverEl.offsetHeight <= 1, s = this.heightAutoObserverEl.offsetWidth <= 1 || t > 0, r = this.contentWrapperEl.offsetWidth, l = this.elStyles.overflowX, o = this.elStyles.overflowY; this.contentEl.style.padding = "".concat(this.elStyles.paddingTop, " ").concat(this.elStyles.paddingRight, " ").concat(this.elStyles.paddingBottom, " ").concat(this.elStyles.paddingLeft), this.wrapperEl.style.margin = "-".concat(this.elStyles.paddingTop, " -").concat(this.elStyles.paddingRight, " -").concat(this.elStyles.paddingBottom, " -").concat(this.elStyles.paddingLeft); var n = this.contentEl.scrollHeight, a = this.contentEl.scrollWidth; this.contentWrapperEl.style.height = i ? "auto" : "100%", this.placeholderEl.style.width = s ? "".concat(t || a, "px") : "auto", this.placeholderEl.style.height = "".concat(n, "px"); var c = this.contentWrapperEl.offsetHeight; this.axis.x.isOverflowing = 0 !== t && a > t, this.axis.y.isOverflowing = n > c, this.axis.x.isOverflowing = "hidden" !== l && this.axis.x.isOverflowing, this.axis.y.isOverflowing = "hidden" !== o && this.axis.y.isOverflowing, this.axis.x.forceVisible = "x" === this.options.forceVisible || !0 === this.options.forceVisible, this.axis.y.forceVisible = "y" === this.options.forceVisible || !0 === this.options.forceVisible, this.hideNativeScrollbar(); var h = this.axis.x.isOverflowing ? this.scrollbarWidth : 0, u = this.axis.y.isOverflowing ? this.scrollbarWidth : 0; this.axis.x.isOverflowing = this.axis.x.isOverflowing && a > r - u, this.axis.y.isOverflowing = this.axis.y.isOverflowing && n > c - h, this.axis.x.scrollbar.size = this.getScrollbarSize("x"), this.axis.y.scrollbar.size = this.getScrollbarSize("y"), this.axis.x.scrollbar.el && (this.axis.x.scrollbar.el.style.width = "".concat(this.axis.x.scrollbar.size, "px")), this.axis.y.scrollbar.el && (this.axis.y.scrollbar.el.style.height = "".concat(this.axis.y.scrollbar.size, "px")), this.positionScrollbar("x"), this.positionScrollbar("y"), this.toggleTrackVisibility("x"), this.toggleTrackVisibility("y") } }, e.prototype.getScrollbarSize = function (e) { var t, i; if (void 0 === e && (e = "y"), !this.axis[e].isOverflowing || !this.contentEl) return 0; var s, r = this.contentEl[this.axis[e].scrollSizeAttr], l = null !== (i = null === (t = this.axis[e].track.el) || void 0 === t ? void 0 : t[this.axis[e].offsetSizeAttr]) && void 0 !== i ? i : 0, o = l / r; return s = Math.max(~~(o * l), this.options.scrollbarMinSize), this.options.scrollbarMaxSize && (s = Math.min(s, this.options.scrollbarMaxSize)), s }, e.prototype.positionScrollbar = function (t) { var i, s, r; void 0 === t && (t = "y"); var l = this.axis[t].scrollbar; if (this.axis[t].isOverflowing && this.contentWrapperEl && l.el && this.elStyles) { var o = this.contentWrapperEl[this.axis[t].scrollSizeAttr], n = (null === (i = this.axis[t].track.el) || void 0 === i ? void 0 : i[this.axis[t].offsetSizeAttr]) || 0, a = parseInt(this.elStyles[this.axis[t].sizeAttr], 10), c = this.contentWrapperEl[this.axis[t].scrollOffsetAttr]; c = "x" === t && this.isRtl && (null === (s = e.getRtlHelpers()) || void 0 === s ? void 0 : s.isScrollOriginAtZero) ? -c : c, "x" === t && this.isRtl && (c = (null === (r = e.getRtlHelpers()) || void 0 === r ? void 0 : r.isScrollingToNegative) ? c : -c); var h = c / (o - a), u = ~~((n - l.size) * h); u = "x" === t && this.isRtl ? -u + (n - l.size) : u, l.el.style.transform = "x" === t ? "translate3d(".concat(u, "px, 0, 0)") : "translate3d(0, ".concat(u, "px, 0)") } }, e.prototype.toggleTrackVisibility = function (e) { void 0 === e && (e = "y"); var t = this.axis[e].track.el, i = this.axis[e].scrollbar.el; t && i && this.contentWrapperEl && (this.axis[e].isOverflowing || this.axis[e].forceVisible ? (t.style.visibility = "visible", this.contentWrapperEl.style[this.axis[e].overflowAttr] = "scroll", this.el.classList.add("".concat(this.classNames.scrollable, "-").concat(e))) : (t.style.visibility = "hidden", this.contentWrapperEl.style[this.axis[e].overflowAttr] = "hidden", this.el.classList.remove("".concat(this.classNames.scrollable, "-").concat(e))), this.axis[e].isOverflowing ? i.style.display = "block" : i.style.display = "none") }, e.prototype.showScrollbar = function (e) { void 0 === e && (e = "y"), this.axis[e].isOverflowing && !this.axis[e].scrollbar.isVisible && (_(this.axis[e].scrollbar.el, this.classNames.visible), this.axis[e].scrollbar.isVisible = !0) }, e.prototype.hideScrollbar = function (e) { void 0 === e && (e = "y"), this.axis[e].isOverflowing && this.axis[e].scrollbar.isVisible && (q(this.axis[e].scrollbar.el, this.classNames.visible), this.axis[e].scrollbar.isVisible = !1) }, e.prototype.hideNativeScrollbar = function () { this.offsetEl && (this.offsetEl.style[this.isRtl ? "left" : "right"] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? "-".concat(this.scrollbarWidth, "px") : "0px", this.offsetEl.style.bottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? "-".concat(this.scrollbarWidth, "px") : "0px") }, e.prototype.onMouseMoveForAxis = function (e) { void 0 === e && (e = "y"); var t = this.axis[e]; t.track.el && t.scrollbar.el && (t.track.rect = t.track.el.getBoundingClientRect(), t.scrollbar.rect = t.scrollbar.el.getBoundingClientRect(), this.isWithinBounds(t.track.rect) ? (this.showScrollbar(e), _(t.track.el, this.classNames.hover), this.isWithinBounds(t.scrollbar.rect) ? _(t.scrollbar.el, this.classNames.hover) : q(t.scrollbar.el, this.classNames.hover)) : (q(t.track.el, this.classNames.hover), this.options.autoHide && this.hideScrollbar(e))) }, e.prototype.onMouseLeaveForAxis = function (e) { void 0 === e && (e = "y"), q(this.axis[e].track.el, this.classNames.hover), q(this.axis[e].scrollbar.el, this.classNames.hover), this.options.autoHide && this.hideScrollbar(e) }, e.prototype.onDragStart = function (e, t) { var i; void 0 === t && (t = "y"); var s = j(this.el), r = H(this.el), l = this.axis[t].scrollbar, o = "y" === t ? e.pageY : e.pageX; this.axis[t].dragOffset = o - ((null === (i = l.rect) || void 0 === i ? void 0 : i[this.axis[t].offsetAttr]) || 0), this.draggedAxis = t, _(this.el, this.classNames.dragging), s.addEventListener("mousemove", this.drag, !0), s.addEventListener("mouseup", this.onEndDrag, !0), null === this.removePreventClickId ? (s.addEventListener("click", this.preventClick, !0), s.addEventListener("dblclick", this.preventClick, !0)) : (r.clearTimeout(this.removePreventClickId), this.removePreventClickId = null) }, e.prototype.onTrackClick = function (e, t) { var i, s, r, l, o = this; void 0 === t && (t = "y"); var n = this.axis[t]; if (this.options.clickOnTrack && n.scrollbar.el && this.contentWrapperEl) { e.preventDefault(); var a = H(this.el); this.axis[t].scrollbar.rect = n.scrollbar.el.getBoundingClientRect(); var c = null !== (s = null === (i = this.axis[t].scrollbar.rect) || void 0 === i ? void 0 : i[this.axis[t].offsetAttr]) && void 0 !== s ? s : 0, h = parseInt(null !== (l = null === (r = this.elStyles) || void 0 === r ? void 0 : r[this.axis[t].sizeAttr]) && void 0 !== l ? l : "0px", 10), u = this.contentWrapperEl[this.axis[t].scrollOffsetAttr], d = ("y" === t ? this.mouseY - c : this.mouseX - c) < 0 ? -1 : 1, p = -1 === d ? u - h : u + h, v = function () { o.contentWrapperEl && (-1 === d ? u > p && (u -= 40, o.contentWrapperEl[o.axis[t].scrollOffsetAttr] = u, a.requestAnimationFrame(v)) : u < p && (u += 40, o.contentWrapperEl[o.axis[t].scrollOffsetAttr] = u, a.requestAnimationFrame(v))) }; v() } }, e.prototype.getContentElement = function () { return this.contentEl }, e.prototype.getScrollElement = function () { return this.contentWrapperEl }, e.prototype.removeListeners = function () { var e = H(this.el); this.el.removeEventListener("mouseenter", this.onMouseEnter), this.el.removeEventListener("pointerdown", this.onPointerEvent, !0), this.el.removeEventListener("mousemove", this.onMouseMove), this.el.removeEventListener("mouseleave", this.onMouseLeave), this.contentWrapperEl && this.contentWrapperEl.removeEventListener("scroll", this.onScroll), e.removeEventListener("resize", this.onWindowResize), this.mutationObserver && this.mutationObserver.disconnect(), this.resizeObserver && this.resizeObserver.disconnect(), this.onMouseMove.cancel(), this.onWindowResize.cancel(), this.onStopScrolling.cancel(), this.onMouseEntered.cancel() }, e.prototype.unMount = function () { this.removeListeners() }, e.prototype.isWithinBounds = function (e) { return this.mouseX >= e.left && this.mouseX <= e.left + e.width && this.mouseY >= e.top && this.mouseY <= e.top + e.height }, e.prototype.findChild = function (e, t) { var i = e.matches || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector; return Array.prototype.filter.call(e.children, (function (e) { return i.call(e, t) }))[0] }, e.rtlHelpers = null, e.defaultOptions = { forceVisible: !1, clickOnTrack: !0, scrollbarMinSize: 25, scrollbarMaxSize: 0, ariaLabel: "scrollable content", classNames: { contentEl: "simplebar-content", contentWrapper: "simplebar-content-wrapper", offset: "simplebar-offset", mask: "simplebar-mask", wrapper: "simplebar-wrapper", placeholder: "simplebar-placeholder", scrollbar: "simplebar-scrollbar", track: "simplebar-track", heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper", heightAutoObserverEl: "simplebar-height-auto-observer", visible: "simplebar-visible", horizontal: "simplebar-horizontal", vertical: "simplebar-vertical", hover: "simplebar-hover", dragging: "simplebar-dragging", scrolling: "simplebar-scrolling", scrollable: "simplebar-scrollable", mouseEntered: "simplebar-mouse-entered" }, scrollableNode: null, contentNode: null, autoHide: !0 }, e.getOptions = B, e.helpers = V, e }(), Y = X.helpers, F = Y.getOptions, I = Y.addClasses, $ = function (t) { function i() { for (var e = [], s = 0; s < arguments.length; s++)e[s] = arguments[s]; var r = t.apply(this, e) || this; return i.instances.set(e[0], r), r } return function (t, i) { if ("function" != typeof i && null !== i) throw new TypeError("Class extends value " + String(i) + " is not a constructor or null"); function s() { this.constructor = t } e(t, i), t.prototype = null === i ? Object.create(i) : (s.prototype = i.prototype, new s) }(i, t), i.initDOMLoadedElements = function () { document.removeEventListener("DOMContentLoaded", this.initDOMLoadedElements), window.removeEventListener("load", this.initDOMLoadedElements), Array.prototype.forEach.call(document.querySelectorAll("[data-simplebar]"), (function (e) { "init" === e.getAttribute("data-simplebar") || i.instances.has(e) || new i(e, F(e.attributes)) })) }, i.removeObserver = function () { var e; null === (e = i.globalObserver) || void 0 === e || e.disconnect() }, i.prototype.initDOM = function () { var e, t, i, s = this; if (!Array.prototype.filter.call(this.el.children, (function (e) { return e.classList.contains(s.classNames.wrapper) })).length) { for (this.wrapperEl = document.createElement("div"), this.contentWrapperEl = document.createElement("div"), this.offsetEl = document.createElement("div"), this.maskEl = document.createElement("div"), this.contentEl = document.createElement("div"), this.placeholderEl = document.createElement("div"), this.heightAutoObserverWrapperEl = document.createElement("div"), this.heightAutoObserverEl = document.createElement("div"), I(this.wrapperEl, this.classNames.wrapper), I(this.contentWrapperEl, this.classNames.contentWrapper), I(this.offsetEl, this.classNames.offset), I(this.maskEl, this.classNames.mask), I(this.contentEl, this.classNames.contentEl), I(this.placeholderEl, this.classNames.placeholder), I(this.heightAutoObserverWrapperEl, this.classNames.heightAutoObserverWrapperEl), I(this.heightAutoObserverEl, this.classNames.heightAutoObserverEl); this.el.firstChild;)this.contentEl.appendChild(this.el.firstChild); this.contentWrapperEl.appendChild(this.contentEl), this.offsetEl.appendChild(this.contentWrapperEl), this.maskEl.appendChild(this.offsetEl), this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl), this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl), this.wrapperEl.appendChild(this.maskEl), this.wrapperEl.appendChild(this.placeholderEl), this.el.appendChild(this.wrapperEl), null === (e = this.contentWrapperEl) || void 0 === e || e.setAttribute("tabindex", "0"), null === (t = this.contentWrapperEl) || void 0 === t || t.setAttribute("role", "region"), null === (i = this.contentWrapperEl) || void 0 === i || i.setAttribute("aria-label", this.options.ariaLabel) } if (!this.axis.x.track.el || !this.axis.y.track.el) { var r = document.createElement("div"), l = document.createElement("div"); I(r, this.classNames.track), I(l, this.classNames.scrollbar), r.appendChild(l), this.axis.x.track.el = r.cloneNode(!0), I(this.axis.x.track.el, this.classNames.horizontal), this.axis.y.track.el = r.cloneNode(!0), I(this.axis.y.track.el, this.classNames.vertical), this.el.appendChild(this.axis.x.track.el), this.el.appendChild(this.axis.y.track.el) } X.prototype.initDOM.call(this), this.el.setAttribute("data-simplebar", "init") }, i.prototype.unMount = function () { X.prototype.unMount.call(this), i.instances.delete(this.el) }, i.initHtmlApi = function () { this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this), "undefined" != typeof MutationObserver && (this.globalObserver = new MutationObserver(i.handleMutations), this.globalObserver.observe(document, { childList: !0, subtree: !0 })), "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll ? window.setTimeout(this.initDOMLoadedElements) : (document.addEventListener("DOMContentLoaded", this.initDOMLoadedElements), window.addEventListener("load", this.initDOMLoadedElements)) }, i.handleMutations = function (e) { e.forEach((function (e) { e.addedNodes.forEach((function (e) { 1 === e.nodeType && (e.hasAttribute("data-simplebar") ? !i.instances.has(e) && document.documentElement.contains(e) && new i(e, F(e.attributes)) : e.querySelectorAll("[data-simplebar]").forEach((function (e) { "init" !== e.getAttribute("data-simplebar") && !i.instances.has(e) && document.documentElement.contains(e) && new i(e, F(e.attributes)) }))) })), e.removedNodes.forEach((function (e) { 1 === e.nodeType && ("init" === e.getAttribute("data-simplebar") ? i.instances.has(e) && !document.documentElement.contains(e) && i.instances.get(e).unMount() : Array.prototype.forEach.call(e.querySelectorAll('[data-simplebar="init"]'), (function (e) { i.instances.has(e) && !document.documentElement.contains(e) && i.instances.get(e).unMount() }))) })) })) }, i.instances = new WeakMap, i }(X); return t && $.initHtmlApi(), $ }();

/*
 * Nice Select Plugin
*/
!function (e, t) { "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.NiceSelect = t() : e.NiceSelect = t() }(self, (() => (() => { "use strict"; var e = { d: (t, i) => { for (var s in i) e.o(i, s) && !e.o(t, s) && Object.defineProperty(t, s, { enumerable: !0, get: i[s] }) }, o: (e, t) => Object.prototype.hasOwnProperty.call(e, t), r: e => { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) } }, t = {}; function i(e) { var t = document.createEvent("MouseEvents"); t.initEvent("click", !0, !1), e.dispatchEvent(t) } function s(e) { var t = document.createEvent("HTMLEvents"); t.initEvent("change", !0, !1), e.dispatchEvent(t) } function o(e) { var t = document.createEvent("FocusEvent"); t.initEvent("focusin", !0, !1), e.dispatchEvent(t) } function n(e) { var t = document.createEvent("FocusEvent"); t.initEvent("focusout", !0, !1), e.dispatchEvent(t) } function d(e) { var t = document.createEvent("UIEvent"); t.initEvent("modalclose", !0, !1), e.dispatchEvent(t) } function l(e, t) { "invalid" == t ? (c(this.dropdown, "invalid"), h(this.dropdown, "valid")) : (c(this.dropdown, "valid"), h(this.dropdown, "invalid")) } function r(e, t) { return null != e[t] ? e[t] : e.getAttribute(t) } function a(e, t) { return !!e && e.classList.contains(t) } function c(e, t) { if (e) return e.classList.add(t) } function h(e, t) { if (e) return e.classList.remove(t) } e.r(t), e.d(t, { bind: () => f, default: () => u }); var p = { data: null, searchable: !1, showSelectedItems: !1 }; function u(e, t) { this.el = e, this.config = Object.assign({}, p, t || {}), this.data = this.config.data, this.selectedOptions = [], this.placeholder = r(this.el, "placeholder") || this.config.placeholder || "Select an option", this.searchtext = r(this.el, "searchtext") || this.config.searchtext || "Search", this.selectedtext = r(this.el, "selectedtext") || this.config.selectedtext || "selected", this.dropdown = null, this.multiple = r(this.el, "multiple"), this.disabled = r(this.el, "disabled"), this.create() } function f(e, t) { return new u(e, t) } return u.prototype.create = function () { this.el.style.opacity = "0", this.el.style.width = "0", this.el.style.padding = "0", this.el.style.height = "0", this.data ? this.processData(this.data) : this.extractData(), this.renderDropdown(), this.bindEvent() }, u.prototype.processData = function (e) { var t = []; e.forEach((e => { t.push({ data: e, attributes: { selected: !!e.selected, disabled: !!e.disabled, optgroup: "optgroup" == e.value } }) })), this.options = t }, u.prototype.extractData = function () { var e = this.el.querySelectorAll("option,optgroup"), t = [], i = [], s = []; e.forEach((e => { if ("OPTGROUP" == e.tagName) var s = { text: e.label, value: "optgroup" }; else s = { text: e.innerText, value: e.value, selected: null != e.getAttribute("selected") || this.el.value == e.value, disabled: null != e.getAttribute("disabled") }; var o = { selected: e.selected, disabled: e.disabled, optgroup: "OPTGROUP" == e.tagName }; t.push(s), i.push({ data: s, attributes: o }) })), this.data = t, this.options = i, this.options.forEach((e => { e.attributes.selected && s.push(e) })), this.selectedOptions = s }, u.prototype.renderDropdown = function () { var e = ["nice-select", r(this.el, "class") || "", this.disabled ? "disabled" : "", this.multiple ? "has-multiple" : ""]; let t = '<div class="nice-select-search-box">'; t += `<input type="text" class="nice-select-search" placeholder="${this.searchtext}..." title="search"/>`, t += "</div>"; var i = `<div class="${e.join(" ")}" tabindex="${this.disabled ? null : 0}">`; i += `<span class="${this.multiple ? "multiple-options" : "current"}"></span>`, i += '<div class="nice-select-dropdown">', i += `${this.config.searchable ? t : ""}`, i += '<ul class="list"></ul>', i += "</div>", i += "</div>", this.el.insertAdjacentHTML("afterend", i), this.dropdown = this.el.nextElementSibling, this._renderSelectedItems(), this._renderItems() }, u.prototype._renderSelectedItems = function () { if (this.multiple) { var e = ""; this.config.showSelectedItems || this.config.showSelectedItems || "auto" == window.getComputedStyle(this.dropdown).width || this.selectedOptions.length < 2 ? (this.selectedOptions.forEach((function (t) { e += `<span class="current">${t.data.text}</span>` })), e = "" == e ? this.placeholder : e) : e = this.selectedOptions.length + " " + this.selectedtext, this.dropdown.querySelector(".multiple-options").innerHTML = e } else { var t = this.selectedOptions.length > 0 ? this.selectedOptions[0].data.text : this.placeholder; this.dropdown.querySelector(".current").innerHTML = t } }, u.prototype._renderItems = function () { var e = this.dropdown.querySelector("ul"); this.options.forEach((t => { e.appendChild(this._renderItem(t)) })) }, u.prototype._renderItem = function (e) { var t = document.createElement("li"); if (t.innerHTML = e.data.text, e.attributes.optgroup) c(t, "optgroup"); else { t.setAttribute("data-value", e.data.value); var i = ["option", e.attributes.selected ? "selected" : null, e.attributes.disabled ? "disabled" : null]; t.addEventListener("click", this._onItemClicked.bind(this, e)), t.classList.add(...i) } return e.element = t, t }, u.prototype.update = function () { if (this.extractData(), this.dropdown) { var e = a(this.dropdown, "open"); this.dropdown.parentNode.removeChild(this.dropdown), this.create(), e && i(this.dropdown) } r(this.el, "disabled") ? this.disable() : this.enable() }, u.prototype.disable = function () { this.disabled || (this.disabled = !0, c(this.dropdown, "disabled")) }, u.prototype.enable = function () { this.disabled && (this.disabled = !1, h(this.dropdown, "disabled")) }, u.prototype.clear = function () { this.resetSelectValue(), this.selectedOptions = [], this._renderSelectedItems(), this.update(), s(this.el) }, u.prototype.destroy = function () { this.dropdown && (this.dropdown.parentNode.removeChild(this.dropdown), this.el.style.display = "") }, u.prototype.bindEvent = function () { this.dropdown.addEventListener("click", this._onClicked.bind(this)), this.dropdown.addEventListener("keydown", this._onKeyPressed.bind(this)), this.dropdown.addEventListener("focusin", o.bind(this, this.el)), this.dropdown.addEventListener("focusout", n.bind(this, this.el)), this.el.addEventListener("invalid", l.bind(this, this.el, "invalid")), window.addEventListener("click", this._onClickedOutside.bind(this)), this.config.searchable && this._bindSearchEvent() }, u.prototype._bindSearchEvent = function () { var e = this.dropdown.querySelector(".nice-select-search"); e && e.addEventListener("click", (function (e) { return e.stopPropagation(), !1 })), e.addEventListener("input", this._onSearchChanged.bind(this)) }, u.prototype._onClicked = function (e) { var t, i; if (e.preventDefault(), a(this.dropdown, "open") ? this.multiple || (h(this.dropdown, "open"), d(this.el)) : (c(this.dropdown, "open"), t = this.el, (i = document.createEvent("UIEvent")).initEvent("modalopen", !0, !1), t.dispatchEvent(i)), a(this.dropdown, "open")) { var s = this.dropdown.querySelector(".nice-select-search"); s && (s.value = "", s.focus()); var o = this.dropdown.querySelector(".focus"); h(o, "focus"), c(o = this.dropdown.querySelector(".selected"), "focus"), this.dropdown.querySelectorAll("ul li").forEach((function (e) { e.style.display = "" })) } else this.dropdown.focus() }, u.prototype._onItemClicked = function (e, t) { var i = t.target; a(i, "disabled") || (this.multiple ? a(i, "selected") ? (h(i, "selected"), this.selectedOptions.splice(this.selectedOptions.indexOf(e), 1), this.el.querySelector(`option[value="${i.dataset.value}"]`).removeAttribute("selected")) : (c(i, "selected"), this.selectedOptions.push(e)) : (this.selectedOptions.forEach((function (e) { h(e.element, "selected") })), c(i, "selected"), this.selectedOptions = [e]), this._renderSelectedItems(), this.updateSelectValue()) }, u.prototype.updateSelectValue = function () { if (this.multiple) { var e = this.el; this.selectedOptions.forEach((function (t) { var i = e.querySelector(`option[value="${t.data.value}"]`); i && i.setAttribute("selected", !0) })) } else this.selectedOptions.length > 0 && (this.el.value = this.selectedOptions[0].data.value); s(this.el) }, u.prototype.resetSelectValue = function () { if (this.multiple) { var e = this.el; this.selectedOptions.forEach((function (t) { var i = e.querySelector(`option[value="${t.data.value}"]`); i && i.removeAttribute("selected") })) } else this.selectedOptions.length > 0 && (this.el.selectedIndex = -1); s(this.el) }, u.prototype._onClickedOutside = function (e) { this.dropdown.contains(e.target) || (h(this.dropdown, "open"), d(this.el)) }, u.prototype._onKeyPressed = function (e) { var t = this.dropdown.querySelector(".focus"), s = a(this.dropdown, "open"); if (13 == e.keyCode) i(s ? t : this.dropdown); else if (40 == e.keyCode) { if (s) { var o = this._findNext(t); o && (h(this.dropdown.querySelector(".focus"), "focus"), c(o, "focus")) } else i(this.dropdown); e.preventDefault() } else if (38 == e.keyCode) { if (s) { var n = this._findPrev(t); n && (h(this.dropdown.querySelector(".focus"), "focus"), c(n, "focus")) } else i(this.dropdown); e.preventDefault() } else if (27 == e.keyCode && s) i(this.dropdown); else if (32 === e.keyCode && s) return !1; return !1 }, u.prototype._findNext = function (e) { for (e = e ? e.nextElementSibling : this.dropdown.querySelector(".list .option"); e;) { if (!a(e, "disabled") && "none" != e.style.display) return e; e = e.nextElementSibling } return null }, u.prototype._findPrev = function (e) { for (e = e ? e.previousElementSibling : this.dropdown.querySelector(".list .option:last-child"); e;) { if (!a(e, "disabled") && "none" != e.style.display) return e; e = e.previousElementSibling } return null }, u.prototype._onSearchChanged = function (e) { var t = a(this.dropdown, "open"), i = e.target.value; if ("" == (i = i.toLowerCase())) this.options.forEach((function (e) { e.element.style.display = "" })); else if (t) { var s = new RegExp(i); this.options.forEach((function (e) { var t = e.data.text.toLowerCase(), i = s.test(t); e.element.style.display = i ? "" : "none" })) } this.dropdown.querySelectorAll(".focus").forEach((function (e) { h(e, "focus") })), c(this._findNext(null), "focus") }, t })()));


// STICKY HEADER
$(window).on('load', function () {
	var header = document.getElementById("header-main");
	var promo = document.getElementById('top-promo-banner');
	var offset = header.offsetTop + promo.offsetHeight;

	window.addEventListener('scroll', function () {
		if (window.pageYOffset > offset) {
			header.classList.add("headerSticky");
		} else {
			header.classList.remove("headerSticky");
		}
	});
});

//MOBILE MENU SCROLL
/*
const mobileMenu = document.querySelector('.main-menu.mobile-mega-menu');
const menuBottom = document.querySelector('.main-menu-bottom');
var scrollPos = 0;
mobileMenu.addEventListener('scroll', function(e) {
		var currentPos = mobileMenu.scrollTop;
		if(currentPos > scrollPos){
				menuBottom.style.display = 'none';
		}else{
				menuBottom.style.display = 'block';
		}
		scrollPos = currentPos;
});
*/

// ACCARDION
const sectionTitle = document.querySelector('.account-sidebar-nav-title');
const sectionTitleCont = document.querySelector('.account-sidebar-nav');
// const parent = document.querySelector('.col-md-2.nopadding');
if (sectionTitle) {
	sectionTitle.addEventListener('click', function () {
		if (sectionTitleCont.classList.contains('accorHeight')) {
			sectionTitleCont.classList.remove('accorHeight')
			// parent.classList.remove('active')
		} else {
			sectionTitleCont.classList.add('accorHeight')
			sectionTitle.html = '<em class="fa fa-caret-down"></em>';
			// parent.classList.add('active')
		}
		// sectionTitleCont.classList.toggle('accorHeight')
	})
}
"use strict";
; (function ($, window, document) {
	$("[data-link]").hide(); // hide the ajax functional button untill the page load completely

	// Initiase Slick slider
	initSlickSliders($('body').hasClass('rtl'));

	// Header
	$('.main-menu-toggle').click(function () {
		$('.close-sidebar').addClass('active');
		$('body').addClass('overflow');
	})
	$('.close-sidebar').click(function () {
		$('.mobile-mega-menu').removeClass('open');
		$(this).removeClass('active');
		$('body').removeClass('overflow');
	})
	$(document).keyup(function (e) {
		$('.mobile-mega-menu').removeClass('open');
		$('.close-sidebar').removeClass('active');
		$('body').removeClass('overflow');
	});

	$(document).ready(function () {
		$("[data-link]").show(); // hide the ajax functional button untill the page load completely

		$('img').on('error', function () {
			$(this).hide();
		});

		// // Initiase Slick slider
		// initSlickSliders($('body').hasClass('rtl'));

		// Header
		$('[data-search]').on({
			focus: function () {
				$('.search-box-dropdown').addClass('active');
			},
			blur: function (e) {
				setTimeout(function () {
					$('.search-box-dropdown').removeClass('active');
				}, 250);
			}
		});

		// $('[data-menu-link]').click(function () {
		//     // $('[data-menu-toggle]').removeClass('active');
		//     $(this).siblings('[data-menu-toggle]').toggleClass('active');
		// })

		// jqzoom thumbs adjustment
		$('.jqzoom-thumbs li a').on('click', function () {
			$('.jqzoom-thumbs li.active').removeClass('active');
			$(this).closest('li').addClass('active');
		});

		// Product Filters
		$('#filter_opt_sort').on('change', function () {
			let opt = $(this).attr('name');
			let href = removeQueryStringParameter(window.location.href, opt); //Remove currect sorting
			opt = opt + '=' + $(this).val();
			window.location.href = getFormatedUrlStr(href, opt);
		});
		$('.filter_opt_checkbox').on('ifChecked', function () {
			let value = $(this).val() ?? 'true';
			let opt = $(this).attr('name') + '=' + value;
			window.location.href = getFormatedUrlStr(window.location.href, opt);
		});
		$('.filter_opt_checkbox').on('ifUnchecked', function () {
			let opt = $(this).attr('name');
			let href = removeQueryStringParameter(window.location.href, 'page'); //Reset the pagination
			window.location.href = removeQueryStringParameter(href, opt);
		});

		$('.link-filter-opt').on('click', function (e) {
			e.preventDefault();
			let href = window.location.href;
			let opt = $(this).data('name');

			// Removing all category, category grp and category sub-grp
			let cat = ["in", "insubgrp", "ingrp"];
			let a = cat.indexOf(opt);
			if (a !== -1) {
				cat.forEach(function (s) {
					href = removeQueryStringParameter(href, s); //Remove currect filter
				});
			}
			else {
				href = removeQueryStringParameter(window.location.href, opt); //Remove currect filter
			}

			window.location.href = getFormatedUrlStr(href, opt + '=' + $(this).data('value'));
		});

		$('.clear-filter').on('click', function (e) {
			e.preventDefault();
			window.location.href = removeQueryStringParameter(window.location.href, $(this).data('name')); //Remove the filter
		});

		$("#filterBtn").click(function (e) {
			e.preventDefault();
			$(".category-filters").slideToggle();
		});

		// Prevent the option if disabled
		$("#buy-now-btn").on("click", function (e) {
			if ($(this).attr('disabled')) {
				e.preventDefault();
			}
			else {
				apply_busy_filter('body');
			}
		});

		// On checkout page
		// $('#shipping-address-checkbox').on('ifChecked', function() {
		//     $('#shipping-address').removeClass('hide');
		// });
		// $('#shipping-address-checkbox').on('ifUnchecked', function() {
		//     $('#shipping-address').addClass('hide');
		// });
		// View Switcher
		$("a.viewSwitcher").bind("click", function (e) {
			e.preventDefault();
			if ($(this).hasClass('btn-default')) {
				//Aulter the active button
				$('.viewSwitcher').toggleClass('btn-primary btn-default');

				// Aulter the product widget view
				var product_list = $('.product-list-wrapper .product');
				product_list.parent().toggleClass('list-view-card');
				product_list.toggleClass('product-list-view product-grid-view');

				// Change the action buttons
				$('.product-actions').toggleClass('btn-group');
				$('.product-actions a.btn-default, .product-actions a.btn-link').toggleClass('btn-sm');
				$('.product-actions a:first-child').toggleClass('btn-link btn-default');
			}
			return false;
		});
		// End View Switcher

		// FEEDBACK SYSTEM
		$('.feedback-stars span.star').on('mouseover', function () {
			var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on
			$(this).parent().children('span.star').each(function (e) {
				if (e < onStar)
					$(this).addClass('rated');
				else
					$(this).removeClass('rated');
			});
		});

		$('.feedback-stars span.star').on('click', function () {
			var onStar = parseInt($(this).data('value'), 10); // The star currently selected
			var wrapper = $(this).parent();

			// Update the rating value
			wrapper.children('input.rating-value').val(onStar);

			wrapper.children('span.star').each(function (e) {
				if (e < onStar) {
					$(this).addClass('rated');
					$(this).children('i').removeClass('far').addClass('fas');
				}
				else {
					$(this).removeClass('rated');
					$(this).children('i').removeClass('fas').addClass('far');
				}
			});
			$(this).siblings('span.response').text($(this).data('title'));
		});
		//END FEEDBACK SYSTEM

		// DISPUTE FORM
		$('#disputeOpenModal input[name="order_received"]').on('ifChecked', function () {
			if ($(this).val() == 1) {
				$('#select_disputed_item, #return_goods_checkbox').removeClass('hidden').addClass('show');
				$('#select_disputed_item select#product_id').attr('required', 'required');
			}
			else {
				$('#select_disputed_item, #return_goods_checkbox').removeClass('show').addClass('hidden');
				$('#select_disputed_item select#product_id').removeAttr('required');
			}
		});
		$('#disputeOpenModal input#return_goods').on('ifChecked', function () {
			$('#return_goods_help_txt').removeClass('hidden').addClass('show');
		});
		$('#disputeOpenModal input#return_goods').on('ifUnchecked', function () {
			$('#return_goods_help_txt').removeClass('show').addClass('hidden');
		});
		//END DISPUTE FORM

		// Make recaptcha field required if exist
		var $recaptcha = document.querySelector('#g-recaptcha-response');
		if ($recaptcha) {
			$recaptcha.setAttribute("required", "required");
		}

		// Shop feedback
		$('.shop-rating-count').on('click', function (e) {
			$('ul.nav a[href="' + $(this).data('tab') + '"]').tab('show');
		});

	});

	//promo banner hide
	// Define the expiration time for the cookie (e.g., 24 hours)
	const expire_at = new Date(Date.now() + (24 * 60 * 60 * 1000));

	// Function to get a specific cookie by name
	function getCookie(cookieName) {
		let cookie = {};
		document.cookie.split(';').forEach(function (el) {
			let [key, value] = el.split('=');
			cookie[key.trim()] = value;
		});
		return cookie[cookieName];
	}

	// Check the cookie value
	const cookieValue = getCookie('promo_banner_hidden');

	// Check if the cookie is not set or is not equal to "true"
	if (cookieValue !== "true") {
		// Show the promo content by removing the "hidden" class
		$("#promo-content-container").removeClass('hidden');
	}

	// Handle the action when the user interacts with the promo banner
	$('#top-promo-banner .close-button').click(function () {
		// Hide the promo content and set a cookie to remember that the user has closed the banner
		$("#promo-content-container").addClass('hidden');

		document.cookie = `promo_banner_hidden=true; expires=${expire_at.toUTCString()}`;
	});

	// Slick sliders
	function initSlickSliders(rtl = false) {
		// Main slider
		$('.banner-slider').slick({
			rtl: rtl,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			autoplay: true,
			dots: true,
			cssEase: 'linear',
			fade: !rtl,
		});

		// Deal slider
		$('.deal-slider').slick({
			rtl: rtl,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			autoplay: true,
			dots: true
		});

		// Deal slider
		$('.best-seller-slider').slick({
			rtl: rtl,
			slidesToShow: 1,
			slidesToScroll: 1,
			nextArrow: '.best-seller-right',
			prevArrow: '.best-seller-left',
			dots: false,
			rows: 1,
		});

		// Options for slick sliders
		let slickOptions = {
			rtl: rtl,
			slidesToShow: 7,
			slidesToScroll: 7,
			arrows: true,
			dots: false,
			responsive: [
				{
					breakpoint: 1536,
					settings: {
						slidesToShow: 6,
						slidesToScroll: 6,
					}
				}, {
					breakpoint: 1199,
					settings: {
						slidesToShow: 5,
						slidesToScroll: 5,
					}
				}, {
					breakpoint: 991,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
					}
				}, {
					breakpoint: 420,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					}
				}
			]
		};

		// Feature items slider
		$('.feature-items-inner:first-child').css('display', 'block');
		$('.feature-items-inner').slick(slickOptions);

		// Top rated items slider
		$('.top-rated-items-inner').css('display', 'block').slick($.extend({}, slickOptions, {
			nextArrow: '.top-rated-right',
			prevArrow: '.top-rated-left',
		}));

		// bundle items slider
		$('.bundle-items-inner').css('display', 'block').slick($.extend({}, slickOptions, {
			nextArrow: '.bundle-right',
			prevArrow: '.bundle-left',
		}));

		// Neckband items slider
		$('.neckbands-items-inner').css('display', 'block').slick($.extend({}, slickOptions, {
			nextArrow: '.neckbands-right',
			prevArrow: '.neckbands-left',
		}));

		// Top selling slider
		$('.top-selling-items-inner').css('display', 'block').slick($.extend({}, slickOptions, {
			nextArrow: '.top-selling-right',
			prevArrow: '.top-selling-left',
		}));

		// Best under items slider
		$('.best-under-items-inner').css('display', 'block').slick($.extend({}, slickOptions, {
			slidesToShow: 6,
			nextArrow: '.best-under-right',
			prevArrow: '.best-under-left',
		}));

		// Dest deals items slider
		$('.best-deals-items-inner').css('display', 'block').slick($.extend({}, slickOptions, {
			nextArrow: '.best-deal-right',
			prevArrow: '.best-deal-left',
		}));

		//Digital products items slider
		$('.digital-products-items-inner').css('display', 'block').slick($.extend({}, slickOptions, {
			nextArrow: '.digital-left',
			prevArrow: '.digital-right',
		}));

		//Auction products items slider
		$('.auction-products-items-inner').css('display', 'block').slick($.extend({}, slickOptions, {
			nextArrow: '.auction-left',
			prevArrow: '.auction-right',
		}));

		// Flash Deal items slider
		$('.flashdeal-items-inner').css('display', 'block').slick($.extend({}, slickOptions, {
			nextArrow: '.flashdeal-right',
			prevArrow: '.flashdeal-left',
		}));

		// Recent items slider
		$('.recent-items-inner').css('display', 'block').slick($.extend({}, slickOptions, {
			nextArrow: '.recent-right',
			prevArrow: '.recent-left',
		}));

		// Shop profile page slider
		$('#shop-page-slider').slick({
			lazyLoad: 'progressive',
			autoplay: true,
			autoplaySpeed: 2000,
			arrows: false,
			dots: true,
			infinite: true,
			rtl: rtl
		});
	}
	// END Slick sliders
}(window.jQuery, window, document));

function apply_busy_filter(dom = 'body') {
	jQuery(dom).addClass('busy');
	jQuery('#loading').show();
}
function remove_busy_filter(dom = 'body') {
	jQuery(dom).removeClass('busy');
	jQuery('#loading').hide();
}

// Update global cart item count
function increaseCartItem(value = 1) {
	return setCartItemCount(getCartItemCount() + value);
}
function decreaseCartItem(value = 1) {
	return setCartItemCount(getCartItemCount() - value);
}
function getCartItemCount() {
	return Number(jQuery("#globalCartItemCount").text());
}
function setCartItemCount(value = 0) {
	jQuery('#globalCartItemCount').removeClass('hidden').text(value);
	return;
}

// Update global wishlist item count
function increaseWishlistItem(value = 1) {
	return setWishlistItemCount(getWishlistItemCount() + value);
}

function getWishlistItemCount() {
	return Number(jQuery("#globalWishlistItemCount").text());
}
function setWishlistItemCount(value = 0) {
	jQuery('#globalWishlistItemCount').removeClass('hidden').text(value);
	return;
}

// Helper functions for Filter
function getFormatedUrlStr(sourceURL, opt) {
	var url = removeQueryStringParameter(sourceURL, 'page'); //Reset the pagination;

	if (url.indexOf('?') !== -1) {
		return url + '&' + opt;
	}

	return url + '?' + opt;
}

function removeQueryStringParameter(sourceURL, key) {

	var rtn = sourceURL.split("?")[0],
		param,
		params_arr = [],
		queryString = (sourceURL.indexOf("?") !== -1) ? sourceURL.split("?")[1] : "";


	if (key == "all") {
		if (sourceURL.includes("/search?")) {

			url = new URL(sourceURL);
			var paramsToKeep = [];
			let count = 0;

			for (var [key, value] of url.searchParams.entries()) {
				if (count < 2) {
					paramsToKeep.push(key + '=' + value);
					count++;
				}
			}

			return rtn + '?' + paramsToKeep.join('&');
		}

		return rtn;
	}

	if (queryString !== "") {
		params_arr = queryString.split("&");

		for (var i = params_arr.length - 1; i >= 0; i -= 1) {
			param = params_arr[i].split("=")[0];

			if (param === key) {
				params_arr.splice(i, 1);
			}
		}

		rtn = rtn + "?" + params_arr.join("&");
	}

	return rtn;
}

/**
* global search mobile view
*/
let searchBtn = document.querySelector('.search-btn span'),
	exitBtn = document.querySelector('.exit-search'),
	searchContainer = document.querySelector('.global-search')

searchBtn.addEventListener('pointerdown', () => {
	searchContainer.classList.add('open')
	document.querySelector('.wrapper').classList.add('searching')
})

exitBtn.addEventListener('pointerdown', () => {
	searchContainer.classList.remove('open')
	document.querySelector('.wrapper').classList.remove('searching')
})

document.addEventListener('pointerdown', e => {
	if (searchContainer.classList.contains('open') && !e.target.closest('.global-search') && e.target != searchBtn) {
		searchContainer.classList.remove('open')
		document.querySelector('.wrapper').classList.remove('searching')
	}
})

/**
* dynamic width for mega-menu
*/
function setTargetWidth() {
	var widthOrigin = document.getElementById('primary-nav-container');
	var megaMenu = document.querySelectorAll('.mega-dropdown');
	megaMenu.forEach(e => {
		e.style.width = (widthOrigin.offsetWidth - 270) + 'px';
	});
	if (document.querySelector('.ei-slider')) {
		let fullHeight = document.querySelector('.ei-slider').scrollHeight
		megaMenu.forEach(e => {
			e.style.height = (fullHeight - 19) + 'px';
		});
	}
}
setTargetWidth();
window.addEventListener('resize', setTargetWidth);

/**
 * dynamic height for all-categories dropdown
 */
let cateScroll = document.querySelector('.header .menu-list-wrapper')
if (document.querySelector('.ei-slider')) {
	let fullHeight = document.querySelector('.ei-slider').scrollHeight - 36
	cateScroll.style.height = fullHeight + 'px'
}

/**
 * appropriate .col- classes for the .banner-block\s
 */
let bannerCol = document.querySelectorAll('.banner-block [class^="col-lg-"]');

bannerCol.forEach(e => {
	if (!e.classList.contains('col-lg-12') && !e.classList.contains('col-lg-8')) {
		e.className += " col-sm-6 mb-4 mb-md-0";
	}
});

/**
 * NiceSelect activation for all-category filter in the global search-bar
 */
NiceSelect.bind(document.getElementById("niceSelect"), { searchable: true });

/**
 * making space at the bottom of the search bar if the trending-keywords exist or not
 */
if ($('.header-search').find('.trending-words').length === 0) {
	$('.header-search').css('padding-bottom', '15px')
}
