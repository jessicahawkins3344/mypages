var calcMortgage = function(t) {
    var e = {};

    function n(i) {
        if (e[i]) return e[i].exports;
        var r = e[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    return n.m = t, n.c = e, n.d = function(t, e, i) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        })
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var r in t) n.d(i, r, function(e) {
                return t[e]
            }.bind(null, r));
        return i
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 18)
}([function(t, e, n) {
    "use strict";
    (function(t) {
        n.d(e, "a", function() {
            return a
        });
        var i = n(2),
            r = function() {};
        r.prototype.getFormValues = function(e) {
            var n = t("#mg-form input"),
                r = t("#mg-form select");
            Object(i.d)(n, e), Object(i.d)(r, e)
        }, r.prototype.calcMonthlyPayment = function(t) {
            var e = t || 0;
            this.debt = this.homeValue - this.downPayment, this.rate = this.interestRate / 100 / 12;
            var n = 12 * this.mortgageTerm;
            n -= e;
            var i = Math.pow(1 + this.rate, n);
            this.K = this.rate * i / (i - 1), this.annuent = this.debt * this.K
        }, r.prototype.calcBiweeklyPayment = function() {
            this.biRate = this.interestRate / 100 / 26, this.biAnnuent = this.debt * this.K / 2
        };
        var a = new r
    }).call(this, n(3))
}, function(t, e, n) {
    "use strict";
    (function(t) {
        n.d(e, "b", function() {
            return i
        }), n.d(e, "a", function() {
            return r
        });
        n(7);

        function i(t) {
            return (Math.round(100 * t) / 100).toLocaleString("en", {
                minimumFractionDigits: 2
            })
        }

        function r(t) {
            return Number(t.replace(/,/g, ""))
        }
        t(document).ready(function() {
            t('[data-format="decimal-locate"]').each(function(t, e) {
                new Cleave(e, {
                    numeral: !0,
                    numeralDecimalScale: 2,
                    numeralThousandsGroupStyle: "thousand"
                })
            }), t('[data-format="decimal"]').each(function(t, e) {
                new Cleave(e, {
                    numeral: !0,
                    numeralDecimalScale: 2,
                    numeralThousandsGroupStyle: "none"
                })
            }), t('[data-format="decimal3"]').each(function(t, e) {
                new Cleave(e, {
                    numeral: !0,
                    numeralDecimalScale: 3,
                    numeralThousandsGroupStyle: "none"
                })
            })
        })
    }).call(this, n(3))
}, function(t, e, n) {
    "use strict";
    (function(t) {
        n.d(e, "c", function() {
            return r
        }), n.d(e, "a", function() {
            return a
        }), n.d(e, "d", function() {
            return o
        }), n.d(e, "b", function() {
            return s
        });
        var i = n(1);
        n(12);

        function r(t) {
            return ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][t %= 12]
        }

        function a(e, n, r) {
            e.text(n).animateNumber({
                number: n,
                numberStep: function(e, n) {
                    t(n.elem).text(Object(i.b)(e))
                }
            }, r)
        }

        function o(e, n) {
            e.each(function(e, r) {
                var a = t(r).attr("id");
                n[a] = Object(i.a)(t(r).val())
            })
        }

        function s(t, e) {
            return Math.round(e / t * 100)
        }
    }).call(this, n(3))
}, function(t, e, n) {
    var i;
    /*!
     * jQuery JavaScript Library v3.3.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2018-01-20T17:24Z
     */
    /*!
     * jQuery JavaScript Library v3.3.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2018-01-20T17:24Z
     */
    ! function(e, n) {
        "use strict";
        "object" == typeof t && "object" == typeof t.exports ? t.exports = e.document ? n(e, !0) : function(t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return n(t)
        } : n(e)
    }("undefined" != typeof window ? window : this, function(n, r) {
        "use strict";
        var a = [],
            o = n.document,
            s = Object.getPrototypeOf,
            l = a.slice,
            u = a.concat,
            c = a.push,
            d = a.indexOf,
            h = {},
            f = h.toString,
            p = h.hasOwnProperty,
            g = p.toString,
            m = g.call(Object),
            v = {},
            y = function(t) {
                return "function" == typeof t && "number" != typeof t.nodeType
            },
            b = function(t) {
                return null != t && t === t.window
            },
            x = {
                type: !0,
                src: !0,
                noModule: !0
            };

        function w(t, e, n) {
            var i, r = (e = e || o).createElement("script");
            if (r.text = t, n)
                for (i in x) n[i] && (r[i] = n[i]);
            e.head.appendChild(r).parentNode.removeChild(r)
        }

        function k(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? h[f.call(t)] || "object" : typeof t
        }
        var C = function(t, e) {
                return new C.fn.init(t, e)
            },
            D = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

        function S(t) {
            var e = !!t && "length" in t && t.length,
                n = k(t);
            return !y(t) && !b(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
        }
        C.fn = C.prototype = {
            jquery: "3.3.1",
            constructor: C,
            length: 0,
            toArray: function() {
                return l.call(this)
            },
            get: function(t) {
                return null == t ? l.call(this) : t < 0 ? this[t + this.length] : this[t]
            },
            pushStack: function(t) {
                var e = C.merge(this.constructor(), t);
                return e.prevObject = this, e
            },
            each: function(t) {
                return C.each(this, t)
            },
            map: function(t) {
                return this.pushStack(C.map(this, function(e, n) {
                    return t.call(e, n, e)
                }))
            },
            slice: function() {
                return this.pushStack(l.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(t) {
                var e = this.length,
                    n = +t + (t < 0 ? e : 0);
                return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: c,
            sort: a.sort,
            splice: a.splice
        }, C.extend = C.fn.extend = function() {
            var t, e, n, i, r, a, o = arguments[0] || {},
                s = 1,
                l = arguments.length,
                u = !1;
            for ("boolean" == typeof o && (u = o, o = arguments[s] || {}, s++), "object" == typeof o || y(o) || (o = {}), s === l && (o = this, s--); s < l; s++)
                if (null != (t = arguments[s]))
                    for (e in t) n = o[e], o !== (i = t[e]) && (u && i && (C.isPlainObject(i) || (r = Array.isArray(i))) ? (r ? (r = !1, a = n && Array.isArray(n) ? n : []) : a = n && C.isPlainObject(n) ? n : {}, o[e] = C.extend(u, a, i)) : void 0 !== i && (o[e] = i));
            return o
        }, C.extend({
            expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(t) {
                throw new Error(t)
            },
            noop: function() {},
            isPlainObject: function(t) {
                var e, n;
                return !(!t || "[object Object]" !== f.call(t)) && (!(e = s(t)) || "function" == typeof(n = p.call(e, "constructor") && e.constructor) && g.call(n) === m)
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            globalEval: function(t) {
                w(t)
            },
            each: function(t, e) {
                var n, i = 0;
                if (S(t))
                    for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++);
                else
                    for (i in t)
                        if (!1 === e.call(t[i], i, t[i])) break;
                return t
            },
            trim: function(t) {
                return null == t ? "" : (t + "").replace(D, "")
            },
            makeArray: function(t, e) {
                var n = e || [];
                return null != t && (S(Object(t)) ? C.merge(n, "string" == typeof t ? [t] : t) : c.call(n, t)), n
            },
            inArray: function(t, e, n) {
                return null == e ? -1 : d.call(e, t, n)
            },
            merge: function(t, e) {
                for (var n = +e.length, i = 0, r = t.length; i < n; i++) t[r++] = e[i];
                return t.length = r, t
            },
            grep: function(t, e, n) {
                for (var i = [], r = 0, a = t.length, o = !n; r < a; r++) !e(t[r], r) !== o && i.push(t[r]);
                return i
            },
            map: function(t, e, n) {
                var i, r, a = 0,
                    o = [];
                if (S(t))
                    for (i = t.length; a < i; a++) null != (r = e(t[a], a, n)) && o.push(r);
                else
                    for (a in t) null != (r = e(t[a], a, n)) && o.push(r);
                return u.apply([], o)
            },
            guid: 1,
            support: v
        }), "function" == typeof Symbol && (C.fn[Symbol.iterator] = a[Symbol.iterator]), C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
            h["[object " + e + "]"] = e.toLowerCase()
        });
        var T =
            /*!
             * Sizzle CSS Selector Engine v2.3.3
             * https://sizzlejs.com/
             *
             * Copyright jQuery Foundation and other contributors
             * Released under the MIT license
             * http://jquery.org/license
             *
             * Date: 2016-08-08
             */
            function(t) {
                var e, n, i, r, a, o, s, l, u, c, d, h, f, p, g, m, v, y, b, x = "sizzle" + 1 * new Date,
                    w = t.document,
                    k = 0,
                    C = 0,
                    D = ot(),
                    S = ot(),
                    T = ot(),
                    M = function(t, e) {
                        return t === e && (d = !0), 0
                    },
                    _ = {}.hasOwnProperty,
                    A = [],
                    P = A.pop,
                    I = A.push,
                    O = A.push,
                    F = A.slice,
                    L = function(t, e) {
                        for (var n = 0, i = t.length; n < i; n++)
                            if (t[n] === e) return n;
                        return -1
                    },
                    N = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    E = "[\\x20\\t\\r\\n\\f]",
                    R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                    B = "\\[" + E + "*(" + R + ")(?:" + E + "*([*^$|!~]?=)" + E + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + E + "*\\]",
                    V = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + B + ")*)|.*)\\)|)",
                    W = new RegExp(E + "+", "g"),
                    j = new RegExp("^" + E + "+|((?:^|[^\\\\])(?:\\\\.)*)" + E + "+$", "g"),
                    z = new RegExp("^" + E + "*," + E + "*"),
                    H = new RegExp("^" + E + "*([>+~]|" + E + ")" + E + "*"),
                    U = new RegExp("=" + E + "*([^\\]'\"]*?)" + E + "*\\]", "g"),
                    q = new RegExp(V),
                    $ = new RegExp("^" + R + "$"),
                    Y = {
                        ID: new RegExp("^#(" + R + ")"),
                        CLASS: new RegExp("^\\.(" + R + ")"),
                        TAG: new RegExp("^(" + R + "|[*])"),
                        ATTR: new RegExp("^" + B),
                        PSEUDO: new RegExp("^" + V),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + E + "*(even|odd|(([+-]|)(\\d*)n|)" + E + "*(?:([+-]|)" + E + "*(\\d+)|))" + E + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + N + ")$", "i"),
                        needsContext: new RegExp("^" + E + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + E + "*((?:-\\d)?\\d*)" + E + "*\\)|)(?=[^-]|$)", "i")
                    },
                    X = /^(?:input|select|textarea|button)$/i,
                    K = /^h\d$/i,
                    G = /^[^{]+\{\s*\[native \w/,
                    J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    Z = /[+~]/,
                    Q = new RegExp("\\\\([\\da-f]{1,6}" + E + "?|(" + E + ")|.)", "ig"),
                    tt = function(t, e, n) {
                        var i = "0x" + e - 65536;
                        return i != i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                    },
                    et = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    nt = function(t, e) {
                        return e ? "\0" === t ? "ï¿½" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
                    },
                    it = function() {
                        h()
                    },
                    rt = yt(function(t) {
                        return !0 === t.disabled && ("form" in t || "label" in t)
                    }, {
                        dir: "parentNode",
                        next: "legend"
                    });
                try {
                    O.apply(A = F.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType
                } catch (t) {
                    O = {
                        apply: A.length ? function(t, e) {
                            I.apply(t, F.call(e))
                        } : function(t, e) {
                            for (var n = t.length, i = 0; t[n++] = e[i++];);
                            t.length = n - 1
                        }
                    }
                }

                function at(t, e, i, r) {
                    var a, s, u, c, d, p, v, y = e && e.ownerDocument,
                        k = e ? e.nodeType : 9;
                    if (i = i || [], "string" != typeof t || !t || 1 !== k && 9 !== k && 11 !== k) return i;
                    if (!r && ((e ? e.ownerDocument || e : w) !== f && h(e), e = e || f, g)) {
                        if (11 !== k && (d = J.exec(t)))
                            if (a = d[1]) {
                                if (9 === k) {
                                    if (!(u = e.getElementById(a))) return i;
                                    if (u.id === a) return i.push(u), i
                                } else if (y && (u = y.getElementById(a)) && b(e, u) && u.id === a) return i.push(u), i
                            } else {
                                if (d[2]) return O.apply(i, e.getElementsByTagName(t)), i;
                                if ((a = d[3]) && n.getElementsByClassName && e.getElementsByClassName) return O.apply(i, e.getElementsByClassName(a)), i
                            }
                        if (n.qsa && !T[t + " "] && (!m || !m.test(t))) {
                            if (1 !== k) y = e, v = t;
                            else if ("object" !== e.nodeName.toLowerCase()) {
                                for ((c = e.getAttribute("id")) ? c = c.replace(et, nt) : e.setAttribute("id", c = x), s = (p = o(t)).length; s--;) p[s] = "#" + c + " " + vt(p[s]);
                                v = p.join(","), y = Z.test(t) && gt(e.parentNode) || e
                            }
                            if (v) try {
                                return O.apply(i, y.querySelectorAll(v)), i
                            } catch (t) {} finally {
                                c === x && e.removeAttribute("id")
                            }
                        }
                    }
                    return l(t.replace(j, "$1"), e, i, r)
                }

                function ot() {
                    var t = [];
                    return function e(n, r) {
                        return t.push(n + " ") > i.cacheLength && delete e[t.shift()], e[n + " "] = r
                    }
                }

                function st(t) {
                    return t[x] = !0, t
                }

                function lt(t) {
                    var e = f.createElement("fieldset");
                    try {
                        return !!t(e)
                    } catch (t) {
                        return !1
                    } finally {
                        e.parentNode && e.parentNode.removeChild(e), e = null
                    }
                }

                function ut(t, e) {
                    for (var n = t.split("|"), r = n.length; r--;) i.attrHandle[n[r]] = e
                }

                function ct(t, e) {
                    var n = e && t,
                        i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                    if (i) return i;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === e) return -1;
                    return t ? 1 : -1
                }

                function dt(t) {
                    return function(e) {
                        return "input" === e.nodeName.toLowerCase() && e.type === t
                    }
                }

                function ht(t) {
                    return function(e) {
                        var n = e.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && e.type === t
                    }
                }

                function ft(t) {
                    return function(e) {
                        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && rt(e) === t : e.disabled === t : "label" in e && e.disabled === t
                    }
                }

                function pt(t) {
                    return st(function(e) {
                        return e = +e, st(function(n, i) {
                            for (var r, a = t([], n.length, e), o = a.length; o--;) n[r = a[o]] && (n[r] = !(i[r] = n[r]))
                        })
                    })
                }

                function gt(t) {
                    return t && void 0 !== t.getElementsByTagName && t
                }
                for (e in n = at.support = {}, a = at.isXML = function(t) {
                        var e = t && (t.ownerDocument || t).documentElement;
                        return !!e && "HTML" !== e.nodeName
                    }, h = at.setDocument = function(t) {
                        var e, r, o = t ? t.ownerDocument || t : w;
                        return o !== f && 9 === o.nodeType && o.documentElement ? (p = (f = o).documentElement, g = !a(f), w !== f && (r = f.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", it, !1) : r.attachEvent && r.attachEvent("onunload", it)), n.attributes = lt(function(t) {
                            return t.className = "i", !t.getAttribute("className")
                        }), n.getElementsByTagName = lt(function(t) {
                            return t.appendChild(f.createComment("")), !t.getElementsByTagName("*").length
                        }), n.getElementsByClassName = G.test(f.getElementsByClassName), n.getById = lt(function(t) {
                            return p.appendChild(t).id = x, !f.getElementsByName || !f.getElementsByName(x).length
                        }), n.getById ? (i.filter.ID = function(t) {
                            var e = t.replace(Q, tt);
                            return function(t) {
                                return t.getAttribute("id") === e
                            }
                        }, i.find.ID = function(t, e) {
                            if (void 0 !== e.getElementById && g) {
                                var n = e.getElementById(t);
                                return n ? [n] : []
                            }
                        }) : (i.filter.ID = function(t) {
                            var e = t.replace(Q, tt);
                            return function(t) {
                                var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                                return n && n.value === e
                            }
                        }, i.find.ID = function(t, e) {
                            if (void 0 !== e.getElementById && g) {
                                var n, i, r, a = e.getElementById(t);
                                if (a) {
                                    if ((n = a.getAttributeNode("id")) && n.value === t) return [a];
                                    for (r = e.getElementsByName(t), i = 0; a = r[i++];)
                                        if ((n = a.getAttributeNode("id")) && n.value === t) return [a]
                                }
                                return []
                            }
                        }), i.find.TAG = n.getElementsByTagName ? function(t, e) {
                            return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : n.qsa ? e.querySelectorAll(t) : void 0
                        } : function(t, e) {
                            var n, i = [],
                                r = 0,
                                a = e.getElementsByTagName(t);
                            if ("*" === t) {
                                for (; n = a[r++];) 1 === n.nodeType && i.push(n);
                                return i
                            }
                            return a
                        }, i.find.CLASS = n.getElementsByClassName && function(t, e) {
                            if (void 0 !== e.getElementsByClassName && g) return e.getElementsByClassName(t)
                        }, v = [], m = [], (n.qsa = G.test(f.querySelectorAll)) && (lt(function(t) {
                            p.appendChild(t).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + E + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || m.push("\\[" + E + "*(?:value|" + N + ")"), t.querySelectorAll("[id~=" + x + "-]").length || m.push("~="), t.querySelectorAll(":checked").length || m.push(":checked"), t.querySelectorAll("a#" + x + "+*").length || m.push(".#.+[+~]")
                        }), lt(function(t) {
                            t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var e = f.createElement("input");
                            e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && m.push("name" + E + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), p.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), m.push(",.*:")
                        })), (n.matchesSelector = G.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && lt(function(t) {
                            n.disconnectedMatch = y.call(t, "*"), y.call(t, "[s!='']:x"), v.push("!=", V)
                        }), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), e = G.test(p.compareDocumentPosition), b = e || G.test(p.contains) ? function(t, e) {
                            var n = 9 === t.nodeType ? t.documentElement : t,
                                i = e && e.parentNode;
                            return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                        } : function(t, e) {
                            if (e)
                                for (; e = e.parentNode;)
                                    if (e === t) return !0;
                            return !1
                        }, M = e ? function(t, e) {
                            if (t === e) return d = !0, 0;
                            var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                            return i || (1 & (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !n.sortDetached && e.compareDocumentPosition(t) === i ? t === f || t.ownerDocument === w && b(w, t) ? -1 : e === f || e.ownerDocument === w && b(w, e) ? 1 : c ? L(c, t) - L(c, e) : 0 : 4 & i ? -1 : 1)
                        } : function(t, e) {
                            if (t === e) return d = !0, 0;
                            var n, i = 0,
                                r = t.parentNode,
                                a = e.parentNode,
                                o = [t],
                                s = [e];
                            if (!r || !a) return t === f ? -1 : e === f ? 1 : r ? -1 : a ? 1 : c ? L(c, t) - L(c, e) : 0;
                            if (r === a) return ct(t, e);
                            for (n = t; n = n.parentNode;) o.unshift(n);
                            for (n = e; n = n.parentNode;) s.unshift(n);
                            for (; o[i] === s[i];) i++;
                            return i ? ct(o[i], s[i]) : o[i] === w ? -1 : s[i] === w ? 1 : 0
                        }, f) : f
                    }, at.matches = function(t, e) {
                        return at(t, null, null, e)
                    }, at.matchesSelector = function(t, e) {
                        if ((t.ownerDocument || t) !== f && h(t), e = e.replace(U, "='$1']"), n.matchesSelector && g && !T[e + " "] && (!v || !v.test(e)) && (!m || !m.test(e))) try {
                            var i = y.call(t, e);
                            if (i || n.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                        } catch (t) {}
                        return at(e, f, null, [t]).length > 0
                    }, at.contains = function(t, e) {
                        return (t.ownerDocument || t) !== f && h(t), b(t, e)
                    }, at.attr = function(t, e) {
                        (t.ownerDocument || t) !== f && h(t);
                        var r = i.attrHandle[e.toLowerCase()],
                            a = r && _.call(i.attrHandle, e.toLowerCase()) ? r(t, e, !g) : void 0;
                        return void 0 !== a ? a : n.attributes || !g ? t.getAttribute(e) : (a = t.getAttributeNode(e)) && a.specified ? a.value : null
                    }, at.escape = function(t) {
                        return (t + "").replace(et, nt)
                    }, at.error = function(t) {
                        throw new Error("Syntax error, unrecognized expression: " + t)
                    }, at.uniqueSort = function(t) {
                        var e, i = [],
                            r = 0,
                            a = 0;
                        if (d = !n.detectDuplicates, c = !n.sortStable && t.slice(0), t.sort(M), d) {
                            for (; e = t[a++];) e === t[a] && (r = i.push(a));
                            for (; r--;) t.splice(i[r], 1)
                        }
                        return c = null, t
                    }, r = at.getText = function(t) {
                        var e, n = "",
                            i = 0,
                            a = t.nodeType;
                        if (a) {
                            if (1 === a || 9 === a || 11 === a) {
                                if ("string" == typeof t.textContent) return t.textContent;
                                for (t = t.firstChild; t; t = t.nextSibling) n += r(t)
                            } else if (3 === a || 4 === a) return t.nodeValue
                        } else
                            for (; e = t[i++];) n += r(e);
                        return n
                    }, (i = at.selectors = {
                        cacheLength: 50,
                        createPseudo: st,
                        match: Y,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: !0
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: !0
                            },
                            "~": {
                                dir: "previousSibling"
                            }
                        },
                        preFilter: {
                            ATTR: function(t) {
                                return t[1] = t[1].replace(Q, tt), t[3] = (t[3] || t[4] || t[5] || "").replace(Q, tt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                            },
                            CHILD: function(t) {
                                return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || at.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && at.error(t[0]), t
                            },
                            PSEUDO: function(t) {
                                var e, n = !t[6] && t[2];
                                return Y.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && q.test(n) && (e = o(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function(t) {
                                var e = t.replace(Q, tt).toLowerCase();
                                return "*" === t ? function() {
                                    return !0
                                } : function(t) {
                                    return t.nodeName && t.nodeName.toLowerCase() === e
                                }
                            },
                            CLASS: function(t) {
                                var e = D[t + " "];
                                return e || (e = new RegExp("(^|" + E + ")" + t + "(" + E + "|$)")) && D(t, function(t) {
                                    return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                                })
                            },
                            ATTR: function(t, e, n) {
                                return function(i) {
                                    var r = at.attr(i, t);
                                    return null == r ? "!=" === e : !e || (r += "", "=" === e ? r === n : "!=" === e ? r !== n : "^=" === e ? n && 0 === r.indexOf(n) : "*=" === e ? n && r.indexOf(n) > -1 : "$=" === e ? n && r.slice(-n.length) === n : "~=" === e ? (" " + r.replace(W, " ") + " ").indexOf(n) > -1 : "|=" === e && (r === n || r.slice(0, n.length + 1) === n + "-"))
                                }
                            },
                            CHILD: function(t, e, n, i, r) {
                                var a = "nth" !== t.slice(0, 3),
                                    o = "last" !== t.slice(-4),
                                    s = "of-type" === e;
                                return 1 === i && 0 === r ? function(t) {
                                    return !!t.parentNode
                                } : function(e, n, l) {
                                    var u, c, d, h, f, p, g = a !== o ? "nextSibling" : "previousSibling",
                                        m = e.parentNode,
                                        v = s && e.nodeName.toLowerCase(),
                                        y = !l && !s,
                                        b = !1;
                                    if (m) {
                                        if (a) {
                                            for (; g;) {
                                                for (h = e; h = h[g];)
                                                    if (s ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                                p = g = "only" === t && !p && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (p = [o ? m.firstChild : m.lastChild], o && y) {
                                            for (b = (f = (u = (c = (d = (h = m)[x] || (h[x] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[t] || [])[0] === k && u[1]) && u[2], h = f && m.childNodes[f]; h = ++f && h && h[g] || (b = f = 0) || p.pop();)
                                                if (1 === h.nodeType && ++b && h === e) {
                                                    c[t] = [k, f, b];
                                                    break
                                                }
                                        } else if (y && (b = f = (u = (c = (d = (h = e)[x] || (h[x] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[t] || [])[0] === k && u[1]), !1 === b)
                                            for (;
                                                (h = ++f && h && h[g] || (b = f = 0) || p.pop()) && ((s ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++b || (y && ((c = (d = h[x] || (h[x] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[t] = [k, b]), h !== e)););
                                        return (b -= r) === i || b % i == 0 && b / i >= 0
                                    }
                                }
                            },
                            PSEUDO: function(t, e) {
                                var n, r = i.pseudos[t] || i.setFilters[t.toLowerCase()] || at.error("unsupported pseudo: " + t);
                                return r[x] ? r(e) : r.length > 1 ? (n = [t, t, "", e], i.setFilters.hasOwnProperty(t.toLowerCase()) ? st(function(t, n) {
                                    for (var i, a = r(t, e), o = a.length; o--;) t[i = L(t, a[o])] = !(n[i] = a[o])
                                }) : function(t) {
                                    return r(t, 0, n)
                                }) : r
                            }
                        },
                        pseudos: {
                            not: st(function(t) {
                                var e = [],
                                    n = [],
                                    i = s(t.replace(j, "$1"));
                                return i[x] ? st(function(t, e, n, r) {
                                    for (var a, o = i(t, null, r, []), s = t.length; s--;)(a = o[s]) && (t[s] = !(e[s] = a))
                                }) : function(t, r, a) {
                                    return e[0] = t, i(e, null, a, n), e[0] = null, !n.pop()
                                }
                            }),
                            has: st(function(t) {
                                return function(e) {
                                    return at(t, e).length > 0
                                }
                            }),
                            contains: st(function(t) {
                                return t = t.replace(Q, tt),
                                    function(e) {
                                        return (e.textContent || e.innerText || r(e)).indexOf(t) > -1
                                    }
                            }),
                            lang: st(function(t) {
                                return $.test(t || "") || at.error("unsupported lang: " + t), t = t.replace(Q, tt).toLowerCase(),
                                    function(e) {
                                        var n;
                                        do {
                                            if (n = g ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                                        } while ((e = e.parentNode) && 1 === e.nodeType);
                                        return !1
                                    }
                            }),
                            target: function(e) {
                                var n = t.location && t.location.hash;
                                return n && n.slice(1) === e.id
                            },
                            root: function(t) {
                                return t === p
                            },
                            focus: function(t) {
                                return t === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                            },
                            enabled: ft(!1),
                            disabled: ft(!0),
                            checked: function(t) {
                                var e = t.nodeName.toLowerCase();
                                return "input" === e && !!t.checked || "option" === e && !!t.selected
                            },
                            selected: function(t) {
                                return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                            },
                            empty: function(t) {
                                for (t = t.firstChild; t; t = t.nextSibling)
                                    if (t.nodeType < 6) return !1;
                                return !0
                            },
                            parent: function(t) {
                                return !i.pseudos.empty(t)
                            },
                            header: function(t) {
                                return K.test(t.nodeName)
                            },
                            input: function(t) {
                                return X.test(t.nodeName)
                            },
                            button: function(t) {
                                var e = t.nodeName.toLowerCase();
                                return "input" === e && "button" === t.type || "button" === e
                            },
                            text: function(t) {
                                var e;
                                return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                            },
                            first: pt(function() {
                                return [0]
                            }),
                            last: pt(function(t, e) {
                                return [e - 1]
                            }),
                            eq: pt(function(t, e, n) {
                                return [n < 0 ? n + e : n]
                            }),
                            even: pt(function(t, e) {
                                for (var n = 0; n < e; n += 2) t.push(n);
                                return t
                            }),
                            odd: pt(function(t, e) {
                                for (var n = 1; n < e; n += 2) t.push(n);
                                return t
                            }),
                            lt: pt(function(t, e, n) {
                                for (var i = n < 0 ? n + e : n; --i >= 0;) t.push(i);
                                return t
                            }),
                            gt: pt(function(t, e, n) {
                                for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i);
                                return t
                            })
                        }
                    }).pseudos.nth = i.pseudos.eq, {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) i.pseudos[e] = dt(e);
                for (e in {
                        submit: !0,
                        reset: !0
                    }) i.pseudos[e] = ht(e);

                function mt() {}

                function vt(t) {
                    for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
                    return i
                }

                function yt(t, e, n) {
                    var i = e.dir,
                        r = e.next,
                        a = r || i,
                        o = n && "parentNode" === a,
                        s = C++;
                    return e.first ? function(e, n, r) {
                        for (; e = e[i];)
                            if (1 === e.nodeType || o) return t(e, n, r);
                        return !1
                    } : function(e, n, l) {
                        var u, c, d, h = [k, s];
                        if (l) {
                            for (; e = e[i];)
                                if ((1 === e.nodeType || o) && t(e, n, l)) return !0
                        } else
                            for (; e = e[i];)
                                if (1 === e.nodeType || o)
                                    if (c = (d = e[x] || (e[x] = {}))[e.uniqueID] || (d[e.uniqueID] = {}), r && r === e.nodeName.toLowerCase()) e = e[i] || e;
                                    else {
                                        if ((u = c[a]) && u[0] === k && u[1] === s) return h[2] = u[2];
                                        if (c[a] = h, h[2] = t(e, n, l)) return !0
                                    } return !1
                    }
                }

                function bt(t) {
                    return t.length > 1 ? function(e, n, i) {
                        for (var r = t.length; r--;)
                            if (!t[r](e, n, i)) return !1;
                        return !0
                    } : t[0]
                }

                function xt(t, e, n, i, r) {
                    for (var a, o = [], s = 0, l = t.length, u = null != e; s < l; s++)(a = t[s]) && (n && !n(a, i, r) || (o.push(a), u && e.push(s)));
                    return o
                }

                function wt(t, e, n, i, r, a) {
                    return i && !i[x] && (i = wt(i)), r && !r[x] && (r = wt(r, a)), st(function(a, o, s, l) {
                        var u, c, d, h = [],
                            f = [],
                            p = o.length,
                            g = a || function(t, e, n) {
                                for (var i = 0, r = e.length; i < r; i++) at(t, e[i], n);
                                return n
                            }(e || "*", s.nodeType ? [s] : s, []),
                            m = !t || !a && e ? g : xt(g, h, t, s, l),
                            v = n ? r || (a ? t : p || i) ? [] : o : m;
                        if (n && n(m, v, s, l), i)
                            for (u = xt(v, f), i(u, [], s, l), c = u.length; c--;)(d = u[c]) && (v[f[c]] = !(m[f[c]] = d));
                        if (a) {
                            if (r || t) {
                                if (r) {
                                    for (u = [], c = v.length; c--;)(d = v[c]) && u.push(m[c] = d);
                                    r(null, v = [], u, l)
                                }
                                for (c = v.length; c--;)(d = v[c]) && (u = r ? L(a, d) : h[c]) > -1 && (a[u] = !(o[u] = d))
                            }
                        } else v = xt(v === o ? v.splice(p, v.length) : v), r ? r(null, o, v, l) : O.apply(o, v)
                    })
                }

                function kt(t) {
                    for (var e, n, r, a = t.length, o = i.relative[t[0].type], s = o || i.relative[" "], l = o ? 1 : 0, c = yt(function(t) {
                            return t === e
                        }, s, !0), d = yt(function(t) {
                            return L(e, t) > -1
                        }, s, !0), h = [function(t, n, i) {
                            var r = !o && (i || n !== u) || ((e = n).nodeType ? c(t, n, i) : d(t, n, i));
                            return e = null, r
                        }]; l < a; l++)
                        if (n = i.relative[t[l].type]) h = [yt(bt(h), n)];
                        else {
                            if ((n = i.filter[t[l].type].apply(null, t[l].matches))[x]) {
                                for (r = ++l; r < a && !i.relative[t[r].type]; r++);
                                return wt(l > 1 && bt(h), l > 1 && vt(t.slice(0, l - 1).concat({
                                    value: " " === t[l - 2].type ? "*" : ""
                                })).replace(j, "$1"), n, l < r && kt(t.slice(l, r)), r < a && kt(t = t.slice(r)), r < a && vt(t))
                            }
                            h.push(n)
                        }
                    return bt(h)
                }
                return mt.prototype = i.filters = i.pseudos, i.setFilters = new mt, o = at.tokenize = function(t, e) {
                    var n, r, a, o, s, l, u, c = S[t + " "];
                    if (c) return e ? 0 : c.slice(0);
                    for (s = t, l = [], u = i.preFilter; s;) {
                        for (o in n && !(r = z.exec(s)) || (r && (s = s.slice(r[0].length) || s), l.push(a = [])), n = !1, (r = H.exec(s)) && (n = r.shift(), a.push({
                                value: n,
                                type: r[0].replace(j, " ")
                            }), s = s.slice(n.length)), i.filter) !(r = Y[o].exec(s)) || u[o] && !(r = u[o](r)) || (n = r.shift(), a.push({
                            value: n,
                            type: o,
                            matches: r
                        }), s = s.slice(n.length));
                        if (!n) break
                    }
                    return e ? s.length : s ? at.error(t) : S(t, l).slice(0)
                }, s = at.compile = function(t, e) {
                    var n, r = [],
                        a = [],
                        s = T[t + " "];
                    if (!s) {
                        for (e || (e = o(t)), n = e.length; n--;)(s = kt(e[n]))[x] ? r.push(s) : a.push(s);
                        (s = T(t, function(t, e) {
                            var n = e.length > 0,
                                r = t.length > 0,
                                a = function(a, o, s, l, c) {
                                    var d, p, m, v = 0,
                                        y = "0",
                                        b = a && [],
                                        x = [],
                                        w = u,
                                        C = a || r && i.find.TAG("*", c),
                                        D = k += null == w ? 1 : Math.random() || .1,
                                        S = C.length;
                                    for (c && (u = o === f || o || c); y !== S && null != (d = C[y]); y++) {
                                        if (r && d) {
                                            for (p = 0, o || d.ownerDocument === f || (h(d), s = !g); m = t[p++];)
                                                if (m(d, o || f, s)) {
                                                    l.push(d);
                                                    break
                                                }
                                            c && (k = D)
                                        }
                                        n && ((d = !m && d) && v--, a && b.push(d))
                                    }
                                    if (v += y, n && y !== v) {
                                        for (p = 0; m = e[p++];) m(b, x, o, s);
                                        if (a) {
                                            if (v > 0)
                                                for (; y--;) b[y] || x[y] || (x[y] = P.call(l));
                                            x = xt(x)
                                        }
                                        O.apply(l, x), c && !a && x.length > 0 && v + e.length > 1 && at.uniqueSort(l)
                                    }
                                    return c && (k = D, u = w), b
                                };
                            return n ? st(a) : a
                        }(a, r))).selector = t
                    }
                    return s
                }, l = at.select = function(t, e, n, r) {
                    var a, l, u, c, d, h = "function" == typeof t && t,
                        f = !r && o(t = h.selector || t);
                    if (n = n || [], 1 === f.length) {
                        if ((l = f[0] = f[0].slice(0)).length > 2 && "ID" === (u = l[0]).type && 9 === e.nodeType && g && i.relative[l[1].type]) {
                            if (!(e = (i.find.ID(u.matches[0].replace(Q, tt), e) || [])[0])) return n;
                            h && (e = e.parentNode), t = t.slice(l.shift().value.length)
                        }
                        for (a = Y.needsContext.test(t) ? 0 : l.length; a-- && (u = l[a], !i.relative[c = u.type]);)
                            if ((d = i.find[c]) && (r = d(u.matches[0].replace(Q, tt), Z.test(l[0].type) && gt(e.parentNode) || e))) {
                                if (l.splice(a, 1), !(t = r.length && vt(l))) return O.apply(n, r), n;
                                break
                            }
                    }
                    return (h || s(t, f))(r, e, !g, n, !e || Z.test(t) && gt(e.parentNode) || e), n
                }, n.sortStable = x.split("").sort(M).join("") === x, n.detectDuplicates = !!d, h(), n.sortDetached = lt(function(t) {
                    return 1 & t.compareDocumentPosition(f.createElement("fieldset"))
                }), lt(function(t) {
                    return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
                }) || ut("type|href|height|width", function(t, e, n) {
                    if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
                }), n.attributes && lt(function(t) {
                    return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
                }) || ut("value", function(t, e, n) {
                    if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
                }), lt(function(t) {
                    return null == t.getAttribute("disabled")
                }) || ut(N, function(t, e, n) {
                    var i;
                    if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
                }), at
            }(n);
        C.find = T, C.expr = T.selectors, C.expr[":"] = C.expr.pseudos, C.uniqueSort = C.unique = T.uniqueSort, C.text = T.getText, C.isXMLDoc = T.isXML, C.contains = T.contains, C.escapeSelector = T.escape;
        var M = function(t, e, n) {
                for (var i = [], r = void 0 !== n;
                    (t = t[e]) && 9 !== t.nodeType;)
                    if (1 === t.nodeType) {
                        if (r && C(t).is(n)) break;
                        i.push(t)
                    }
                return i
            },
            _ = function(t, e) {
                for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
                return n
            },
            A = C.expr.match.needsContext;

        function P(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        }
        var I = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

        function O(t, e, n) {
            return y(e) ? C.grep(t, function(t, i) {
                return !!e.call(t, i, t) !== n
            }) : e.nodeType ? C.grep(t, function(t) {
                return t === e !== n
            }) : "string" != typeof e ? C.grep(t, function(t) {
                return d.call(e, t) > -1 !== n
            }) : C.filter(e, t, n)
        }
        C.filter = function(t, e, n) {
            var i = e[0];
            return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? C.find.matchesSelector(i, t) ? [i] : [] : C.find.matches(t, C.grep(e, function(t) {
                return 1 === t.nodeType
            }))
        }, C.fn.extend({
            find: function(t) {
                var e, n, i = this.length,
                    r = this;
                if ("string" != typeof t) return this.pushStack(C(t).filter(function() {
                    for (e = 0; e < i; e++)
                        if (C.contains(r[e], this)) return !0
                }));
                for (n = this.pushStack([]), e = 0; e < i; e++) C.find(t, r[e], n);
                return i > 1 ? C.uniqueSort(n) : n
            },
            filter: function(t) {
                return this.pushStack(O(this, t || [], !1))
            },
            not: function(t) {
                return this.pushStack(O(this, t || [], !0))
            },
            is: function(t) {
                return !!O(this, "string" == typeof t && A.test(t) ? C(t) : t || [], !1).length
            }
        });
        var F, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (C.fn.init = function(t, e, n) {
            var i, r;
            if (!t) return this;
            if (n = n || F, "string" == typeof t) {
                if (!(i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : L.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                if (i[1]) {
                    if (e = e instanceof C ? e[0] : e, C.merge(this, C.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : o, !0)), I.test(i[1]) && C.isPlainObject(e))
                        for (i in e) y(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                    return this
                }
                return (r = o.getElementById(i[2])) && (this[0] = r, this.length = 1), this
            }
            return t.nodeType ? (this[0] = t, this.length = 1, this) : y(t) ? void 0 !== n.ready ? n.ready(t) : t(C) : C.makeArray(t, this)
        }).prototype = C.fn, F = C(o);
        var N = /^(?:parents|prev(?:Until|All))/,
            E = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };

        function R(t, e) {
            for (;
                (t = t[e]) && 1 !== t.nodeType;);
            return t
        }
        C.fn.extend({
            has: function(t) {
                var e = C(t, this),
                    n = e.length;
                return this.filter(function() {
                    for (var t = 0; t < n; t++)
                        if (C.contains(this, e[t])) return !0
                })
            },
            closest: function(t, e) {
                var n, i = 0,
                    r = this.length,
                    a = [],
                    o = "string" != typeof t && C(t);
                if (!A.test(t))
                    for (; i < r; i++)
                        for (n = this[i]; n && n !== e; n = n.parentNode)
                            if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && C.find.matchesSelector(n, t))) {
                                a.push(n);
                                break
                            }
                return this.pushStack(a.length > 1 ? C.uniqueSort(a) : a)
            },
            index: function(t) {
                return t ? "string" == typeof t ? d.call(C(t), this[0]) : d.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(t, e) {
                return this.pushStack(C.uniqueSort(C.merge(this.get(), C(t, e))))
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), C.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(t) {
                return M(t, "parentNode")
            },
            parentsUntil: function(t, e, n) {
                return M(t, "parentNode", n)
            },
            next: function(t) {
                return R(t, "nextSibling")
            },
            prev: function(t) {
                return R(t, "previousSibling")
            },
            nextAll: function(t) {
                return M(t, "nextSibling")
            },
            prevAll: function(t) {
                return M(t, "previousSibling")
            },
            nextUntil: function(t, e, n) {
                return M(t, "nextSibling", n)
            },
            prevUntil: function(t, e, n) {
                return M(t, "previousSibling", n)
            },
            siblings: function(t) {
                return _((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return _(t.firstChild)
            },
            contents: function(t) {
                return P(t, "iframe") ? t.contentDocument : (P(t, "template") && (t = t.content || t), C.merge([], t.childNodes))
            }
        }, function(t, e) {
            C.fn[t] = function(n, i) {
                var r = C.map(this, e, n);
                return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = C.filter(i, r)), this.length > 1 && (E[t] || C.uniqueSort(r), N.test(t) && r.reverse()), this.pushStack(r)
            }
        });
        var B = /[^\x20\t\r\n\f]+/g;

        function V(t) {
            return t
        }

        function W(t) {
            throw t
        }

        function j(t, e, n, i) {
            var r;
            try {
                t && y(r = t.promise) ? r.call(t).done(e).fail(n) : t && y(r = t.then) ? r.call(t, e, n) : e.apply(void 0, [t].slice(i))
            } catch (t) {
                n.apply(void 0, [t])
            }
        }
        C.Callbacks = function(t) {
            t = "string" == typeof t ? function(t) {
                var e = {};
                return C.each(t.match(B) || [], function(t, n) {
                    e[n] = !0
                }), e
            }(t) : C.extend({}, t);
            var e, n, i, r, a = [],
                o = [],
                s = -1,
                l = function() {
                    for (r = r || t.once, i = e = !0; o.length; s = -1)
                        for (n = o.shift(); ++s < a.length;) !1 === a[s].apply(n[0], n[1]) && t.stopOnFalse && (s = a.length, n = !1);
                    t.memory || (n = !1), e = !1, r && (a = n ? [] : "")
                },
                u = {
                    add: function() {
                        return a && (n && !e && (s = a.length - 1, o.push(n)), function e(n) {
                            C.each(n, function(n, i) {
                                y(i) ? t.unique && u.has(i) || a.push(i) : i && i.length && "string" !== k(i) && e(i)
                            })
                        }(arguments), n && !e && l()), this
                    },
                    remove: function() {
                        return C.each(arguments, function(t, e) {
                            for (var n;
                                (n = C.inArray(e, a, n)) > -1;) a.splice(n, 1), n <= s && s--
                        }), this
                    },
                    has: function(t) {
                        return t ? C.inArray(t, a) > -1 : a.length > 0
                    },
                    empty: function() {
                        return a && (a = []), this
                    },
                    disable: function() {
                        return r = o = [], a = n = "", this
                    },
                    disabled: function() {
                        return !a
                    },
                    lock: function() {
                        return r = o = [], n || e || (a = n = ""), this
                    },
                    locked: function() {
                        return !!r
                    },
                    fireWith: function(t, n) {
                        return r || (n = [t, (n = n || []).slice ? n.slice() : n], o.push(n), e || l()), this
                    },
                    fire: function() {
                        return u.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!i
                    }
                };
            return u
        }, C.extend({
            Deferred: function(t) {
                var e = [
                        ["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2],
                        ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]
                    ],
                    i = "pending",
                    r = {
                        state: function() {
                            return i
                        },
                        always: function() {
                            return a.done(arguments).fail(arguments), this
                        },
                        catch: function(t) {
                            return r.then(null, t)
                        },
                        pipe: function() {
                            var t = arguments;
                            return C.Deferred(function(n) {
                                C.each(e, function(e, i) {
                                    var r = y(t[i[4]]) && t[i[4]];
                                    a[i[1]](function() {
                                        var t = r && r.apply(this, arguments);
                                        t && y(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this, r ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        then: function(t, i, r) {
                            var a = 0;

                            function o(t, e, i, r) {
                                return function() {
                                    var s = this,
                                        l = arguments,
                                        u = function() {
                                            var n, u;
                                            if (!(t < a)) {
                                                if ((n = i.apply(s, l)) === e.promise()) throw new TypeError("Thenable self-resolution");
                                                u = n && ("object" == typeof n || "function" == typeof n) && n.then, y(u) ? r ? u.call(n, o(a, e, V, r), o(a, e, W, r)) : (a++, u.call(n, o(a, e, V, r), o(a, e, W, r), o(a, e, V, e.notifyWith))) : (i !== V && (s = void 0, l = [n]), (r || e.resolveWith)(s, l))
                                            }
                                        },
                                        c = r ? u : function() {
                                            try {
                                                u()
                                            } catch (n) {
                                                C.Deferred.exceptionHook && C.Deferred.exceptionHook(n, c.stackTrace), t + 1 >= a && (i !== W && (s = void 0, l = [n]), e.rejectWith(s, l))
                                            }
                                        };
                                    t ? c() : (C.Deferred.getStackHook && (c.stackTrace = C.Deferred.getStackHook()), n.setTimeout(c))
                                }
                            }
                            return C.Deferred(function(n) {
                                e[0][3].add(o(0, n, y(r) ? r : V, n.notifyWith)), e[1][3].add(o(0, n, y(t) ? t : V)), e[2][3].add(o(0, n, y(i) ? i : W))
                            }).promise()
                        },
                        promise: function(t) {
                            return null != t ? C.extend(t, r) : r
                        }
                    },
                    a = {};
                return C.each(e, function(t, n) {
                    var o = n[2],
                        s = n[5];
                    r[n[1]] = o.add, s && o.add(function() {
                        i = s
                    }, e[3 - t][2].disable, e[3 - t][3].disable, e[0][2].lock, e[0][3].lock), o.add(n[3].fire), a[n[0]] = function() {
                        return a[n[0] + "With"](this === a ? void 0 : this, arguments), this
                    }, a[n[0] + "With"] = o.fireWith
                }), r.promise(a), t && t.call(a, a), a
            },
            when: function(t) {
                var e = arguments.length,
                    n = e,
                    i = Array(n),
                    r = l.call(arguments),
                    a = C.Deferred(),
                    o = function(t) {
                        return function(n) {
                            i[t] = this, r[t] = arguments.length > 1 ? l.call(arguments) : n, --e || a.resolveWith(i, r)
                        }
                    };
                if (e <= 1 && (j(t, a.done(o(n)).resolve, a.reject, !e), "pending" === a.state() || y(r[n] && r[n].then))) return a.then();
                for (; n--;) j(r[n], o(n), a.reject);
                return a.promise()
            }
        });
        var z = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        C.Deferred.exceptionHook = function(t, e) {
            n.console && n.console.warn && t && z.test(t.name) && n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e)
        }, C.readyException = function(t) {
            n.setTimeout(function() {
                throw t
            })
        };
        var H = C.Deferred();

        function U() {
            o.removeEventListener("DOMContentLoaded", U), n.removeEventListener("load", U), C.ready()
        }
        C.fn.ready = function(t) {
            return H.then(t).catch(function(t) {
                C.readyException(t)
            }), this
        }, C.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(t) {
                (!0 === t ? --C.readyWait : C.isReady) || (C.isReady = !0, !0 !== t && --C.readyWait > 0 || H.resolveWith(o, [C]))
            }
        }), C.ready.then = H.then, "complete" === o.readyState || "loading" !== o.readyState && !o.documentElement.doScroll ? n.setTimeout(C.ready) : (o.addEventListener("DOMContentLoaded", U), n.addEventListener("load", U));
        var q = function(t, e, n, i, r, a, o) {
                var s = 0,
                    l = t.length,
                    u = null == n;
                if ("object" === k(n))
                    for (s in r = !0, n) q(t, e, s, n[s], !0, a, o);
                else if (void 0 !== i && (r = !0, y(i) || (o = !0), u && (o ? (e.call(t, i), e = null) : (u = e, e = function(t, e, n) {
                        return u.call(C(t), n)
                    })), e))
                    for (; s < l; s++) e(t[s], n, o ? i : i.call(t[s], s, e(t[s], n)));
                return r ? t : u ? e.call(t) : l ? e(t[0], n) : a
            },
            $ = /^-ms-/,
            Y = /-([a-z])/g;

        function X(t, e) {
            return e.toUpperCase()
        }

        function K(t) {
            return t.replace($, "ms-").replace(Y, X)
        }
        var G = function(t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        };

        function J() {
            this.expando = C.expando + J.uid++
        }
        J.uid = 1, J.prototype = {
            cache: function(t) {
                var e = t[this.expando];
                return e || (e = {}, G(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0
                }))), e
            },
            set: function(t, e, n) {
                var i, r = this.cache(t);
                if ("string" == typeof e) r[K(e)] = n;
                else
                    for (i in e) r[K(i)] = e[i];
                return r
            },
            get: function(t, e) {
                return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][K(e)]
            },
            access: function(t, e, n) {
                return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e)
            },
            remove: function(t, e) {
                var n, i = t[this.expando];
                if (void 0 !== i) {
                    if (void 0 !== e) {
                        n = (e = Array.isArray(e) ? e.map(K) : (e = K(e)) in i ? [e] : e.match(B) || []).length;
                        for (; n--;) delete i[e[n]]
                    }(void 0 === e || C.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                }
            },
            hasData: function(t) {
                var e = t[this.expando];
                return void 0 !== e && !C.isEmptyObject(e)
            }
        };
        var Z = new J,
            Q = new J,
            tt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            et = /[A-Z]/g;

        function nt(t, e, n) {
            var i;
            if (void 0 === n && 1 === t.nodeType)
                if (i = "data-" + e.replace(et, "-$&").toLowerCase(), "string" == typeof(n = t.getAttribute(i))) {
                    try {
                        n = function(t) {
                            return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : tt.test(t) ? JSON.parse(t) : t)
                        }(n)
                    } catch (t) {}
                    Q.set(t, e, n)
                } else n = void 0;
            return n
        }
        C.extend({
            hasData: function(t) {
                return Q.hasData(t) || Z.hasData(t)
            },
            data: function(t, e, n) {
                return Q.access(t, e, n)
            },
            removeData: function(t, e) {
                Q.remove(t, e)
            },
            _data: function(t, e, n) {
                return Z.access(t, e, n)
            },
            _removeData: function(t, e) {
                Z.remove(t, e)
            }
        }), C.fn.extend({
            data: function(t, e) {
                var n, i, r, a = this[0],
                    o = a && a.attributes;
                if (void 0 === t) {
                    if (this.length && (r = Q.get(a), 1 === a.nodeType && !Z.get(a, "hasDataAttrs"))) {
                        for (n = o.length; n--;) o[n] && 0 === (i = o[n].name).indexOf("data-") && (i = K(i.slice(5)), nt(a, i, r[i]));
                        Z.set(a, "hasDataAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof t ? this.each(function() {
                    Q.set(this, t)
                }) : q(this, function(e) {
                    var n;
                    if (a && void 0 === e) return void 0 !== (n = Q.get(a, t)) ? n : void 0 !== (n = nt(a, t)) ? n : void 0;
                    this.each(function() {
                        Q.set(this, t, e)
                    })
                }, null, e, arguments.length > 1, null, !0)
            },
            removeData: function(t) {
                return this.each(function() {
                    Q.remove(this, t)
                })
            }
        }), C.extend({
            queue: function(t, e, n) {
                var i;
                if (t) return e = (e || "fx") + "queue", i = Z.get(t, e), n && (!i || Array.isArray(n) ? i = Z.access(t, e, C.makeArray(n)) : i.push(n)), i || []
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var n = C.queue(t, e),
                    i = n.length,
                    r = n.shift(),
                    a = C._queueHooks(t, e);
                "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete a.stop, r.call(t, function() {
                    C.dequeue(t, e)
                }, a)), !i && a && a.empty.fire()
            },
            _queueHooks: function(t, e) {
                var n = e + "queueHooks";
                return Z.get(t, n) || Z.access(t, n, {
                    empty: C.Callbacks("once memory").add(function() {
                        Z.remove(t, [e + "queue", n])
                    })
                })
            }
        }), C.fn.extend({
            queue: function(t, e) {
                var n = 2;
                return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? C.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                    var n = C.queue(this, t, e);
                    C._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && C.dequeue(this, t)
                })
            },
            dequeue: function(t) {
                return this.each(function() {
                    C.dequeue(this, t)
                })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, e) {
                var n, i = 1,
                    r = C.Deferred(),
                    a = this,
                    o = this.length,
                    s = function() {
                        --i || r.resolveWith(a, [a])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; o--;)(n = Z.get(a[o], t + "queueHooks")) && n.empty && (i++, n.empty.add(s));
                return s(), r.promise(e)
            }
        });
        var it = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            rt = new RegExp("^(?:([+-])=|)(" + it + ")([a-z%]*)$", "i"),
            at = ["Top", "Right", "Bottom", "Left"],
            ot = function(t, e) {
                return "none" === (t = e || t).style.display || "" === t.style.display && C.contains(t.ownerDocument, t) && "none" === C.css(t, "display")
            },
            st = function(t, e, n, i) {
                var r, a, o = {};
                for (a in e) o[a] = t.style[a], t.style[a] = e[a];
                for (a in r = n.apply(t, i || []), e) t.style[a] = o[a];
                return r
            };

        function lt(t, e, n, i) {
            var r, a, o = 20,
                s = i ? function() {
                    return i.cur()
                } : function() {
                    return C.css(t, e, "")
                },
                l = s(),
                u = n && n[3] || (C.cssNumber[e] ? "" : "px"),
                c = (C.cssNumber[e] || "px" !== u && +l) && rt.exec(C.css(t, e));
            if (c && c[3] !== u) {
                for (l /= 2, u = u || c[3], c = +l || 1; o--;) C.style(t, e, c + u), (1 - a) * (1 - (a = s() / l || .5)) <= 0 && (o = 0), c /= a;
                c *= 2, C.style(t, e, c + u), n = n || []
            }
            return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r
        }
        var ut = {};

        function ct(t) {
            var e, n = t.ownerDocument,
                i = t.nodeName,
                r = ut[i];
            return r || (e = n.body.appendChild(n.createElement(i)), r = C.css(e, "display"), e.parentNode.removeChild(e), "none" === r && (r = "block"), ut[i] = r, r)
        }

        function dt(t, e) {
            for (var n, i, r = [], a = 0, o = t.length; a < o; a++)(i = t[a]).style && (n = i.style.display, e ? ("none" === n && (r[a] = Z.get(i, "display") || null, r[a] || (i.style.display = "")), "" === i.style.display && ot(i) && (r[a] = ct(i))) : "none" !== n && (r[a] = "none", Z.set(i, "display", n)));
            for (a = 0; a < o; a++) null != r[a] && (t[a].style.display = r[a]);
            return t
        }
        C.fn.extend({
            show: function() {
                return dt(this, !0)
            },
            hide: function() {
                return dt(this)
            },
            toggle: function(t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                    ot(this) ? C(this).show() : C(this).hide()
                })
            }
        });
        var ht = /^(?:checkbox|radio)$/i,
            ft = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
            pt = /^$|^module$|\/(?:java|ecma)script/i,
            gt = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };

        function mt(t, e) {
            var n;
            return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && P(t, e) ? C.merge([t], n) : n
        }

        function vt(t, e) {
            for (var n = 0, i = t.length; n < i; n++) Z.set(t[n], "globalEval", !e || Z.get(e[n], "globalEval"))
        }
        gt.optgroup = gt.option, gt.tbody = gt.tfoot = gt.colgroup = gt.caption = gt.thead, gt.th = gt.td;
        var yt, bt, xt = /<|&#?\w+;/;

        function wt(t, e, n, i, r) {
            for (var a, o, s, l, u, c, d = e.createDocumentFragment(), h = [], f = 0, p = t.length; f < p; f++)
                if ((a = t[f]) || 0 === a)
                    if ("object" === k(a)) C.merge(h, a.nodeType ? [a] : a);
                    else if (xt.test(a)) {
                for (o = o || d.appendChild(e.createElement("div")), s = (ft.exec(a) || ["", ""])[1].toLowerCase(), l = gt[s] || gt._default, o.innerHTML = l[1] + C.htmlPrefilter(a) + l[2], c = l[0]; c--;) o = o.lastChild;
                C.merge(h, o.childNodes), (o = d.firstChild).textContent = ""
            } else h.push(e.createTextNode(a));
            for (d.textContent = "", f = 0; a = h[f++];)
                if (i && C.inArray(a, i) > -1) r && r.push(a);
                else if (u = C.contains(a.ownerDocument, a), o = mt(d.appendChild(a), "script"), u && vt(o), n)
                for (c = 0; a = o[c++];) pt.test(a.type || "") && n.push(a);
            return d
        }
        yt = o.createDocumentFragment().appendChild(o.createElement("div")), (bt = o.createElement("input")).setAttribute("type", "radio"), bt.setAttribute("checked", "checked"), bt.setAttribute("name", "t"), yt.appendChild(bt), v.checkClone = yt.cloneNode(!0).cloneNode(!0).lastChild.checked, yt.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!yt.cloneNode(!0).lastChild.defaultValue;
        var kt = o.documentElement,
            Ct = /^key/,
            Dt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            St = /^([^.]*)(?:\.(.+)|)/;

        function Tt() {
            return !0
        }

        function Mt() {
            return !1
        }

        function _t() {
            try {
                return o.activeElement
            } catch (t) {}
        }

        function At(t, e, n, i, r, a) {
            var o, s;
            if ("object" == typeof e) {
                for (s in "string" != typeof n && (i = i || n, n = void 0), e) At(t, s, n, i, e[s], a);
                return t
            }
            if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = Mt;
            else if (!r) return t;
            return 1 === a && (o = r, (r = function(t) {
                return C().off(t), o.apply(this, arguments)
            }).guid = o.guid || (o.guid = C.guid++)), t.each(function() {
                C.event.add(this, e, r, i, n)
            })
        }
        C.event = {
            global: {},
            add: function(t, e, n, i, r) {
                var a, o, s, l, u, c, d, h, f, p, g, m = Z.get(t);
                if (m)
                    for (n.handler && (n = (a = n).handler, r = a.selector), r && C.find.matchesSelector(kt, r), n.guid || (n.guid = C.guid++), (l = m.events) || (l = m.events = {}), (o = m.handle) || (o = m.handle = function(e) {
                            return void 0 !== C && C.event.triggered !== e.type ? C.event.dispatch.apply(t, arguments) : void 0
                        }), u = (e = (e || "").match(B) || [""]).length; u--;) f = g = (s = St.exec(e[u]) || [])[1], p = (s[2] || "").split(".").sort(), f && (d = C.event.special[f] || {}, f = (r ? d.delegateType : d.bindType) || f, d = C.event.special[f] || {}, c = C.extend({
                        type: f,
                        origType: g,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && C.expr.match.needsContext.test(r),
                        namespace: p.join(".")
                    }, a), (h = l[f]) || ((h = l[f] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(t, i, p, o) || t.addEventListener && t.addEventListener(f, o)), d.add && (d.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, c) : h.push(c), C.event.global[f] = !0)
            },
            remove: function(t, e, n, i, r) {
                var a, o, s, l, u, c, d, h, f, p, g, m = Z.hasData(t) && Z.get(t);
                if (m && (l = m.events)) {
                    for (u = (e = (e || "").match(B) || [""]).length; u--;)
                        if (f = g = (s = St.exec(e[u]) || [])[1], p = (s[2] || "").split(".").sort(), f) {
                            for (d = C.event.special[f] || {}, h = l[f = (i ? d.delegateType : d.bindType) || f] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = a = h.length; a--;) c = h[a], !r && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (h.splice(a, 1), c.selector && h.delegateCount--, d.remove && d.remove.call(t, c));
                            o && !h.length && (d.teardown && !1 !== d.teardown.call(t, p, m.handle) || C.removeEvent(t, f, m.handle), delete l[f])
                        } else
                            for (f in l) C.event.remove(t, f + e[u], n, i, !0);
                    C.isEmptyObject(l) && Z.remove(t, "handle events")
                }
            },
            dispatch: function(t) {
                var e, n, i, r, a, o, s = C.event.fix(t),
                    l = new Array(arguments.length),
                    u = (Z.get(this, "events") || {})[s.type] || [],
                    c = C.event.special[s.type] || {};
                for (l[0] = s, e = 1; e < arguments.length; e++) l[e] = arguments[e];
                if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                    for (o = C.event.handlers.call(this, s, u), e = 0;
                        (r = o[e++]) && !s.isPropagationStopped();)
                        for (s.currentTarget = r.elem, n = 0;
                            (a = r.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(a.namespace) || (s.handleObj = a, s.data = a.data, void 0 !== (i = ((C.event.special[a.origType] || {}).handle || a.handler).apply(r.elem, l)) && !1 === (s.result = i) && (s.preventDefault(), s.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, s), s.result
                }
            },
            handlers: function(t, e) {
                var n, i, r, a, o, s = [],
                    l = e.delegateCount,
                    u = t.target;
                if (l && u.nodeType && !("click" === t.type && t.button >= 1))
                    for (; u !== this; u = u.parentNode || this)
                        if (1 === u.nodeType && ("click" !== t.type || !0 !== u.disabled)) {
                            for (a = [], o = {}, n = 0; n < l; n++) void 0 === o[r = (i = e[n]).selector + " "] && (o[r] = i.needsContext ? C(r, this).index(u) > -1 : C.find(r, this, null, [u]).length), o[r] && a.push(i);
                            a.length && s.push({
                                elem: u,
                                handlers: a
                            })
                        }
                return u = this, l < e.length && s.push({
                    elem: u,
                    handlers: e.slice(l)
                }), s
            },
            addProp: function(t, e) {
                Object.defineProperty(C.Event.prototype, t, {
                    enumerable: !0,
                    configurable: !0,
                    get: y(e) ? function() {
                        if (this.originalEvent) return e(this.originalEvent)
                    } : function() {
                        if (this.originalEvent) return this.originalEvent[t]
                    },
                    set: function(e) {
                        Object.defineProperty(this, t, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: e
                        })
                    }
                })
            },
            fix: function(t) {
                return t[C.expando] ? t : new C.Event(t)
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== _t() && this.focus) return this.focus(), !1
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === _t() && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if ("checkbox" === this.type && this.click && P(this, "input")) return this.click(), !1
                    },
                    _default: function(t) {
                        return P(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            }
        }, C.removeEvent = function(t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n)
        }, C.Event = function(t, e) {
            if (!(this instanceof C.Event)) return new C.Event(t, e);
            t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? Tt : Mt, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && C.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[C.expando] = !0
        }, C.Event.prototype = {
            constructor: C.Event,
            isDefaultPrevented: Mt,
            isPropagationStopped: Mt,
            isImmediatePropagationStopped: Mt,
            isSimulated: !1,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = Tt, t && !this.isSimulated && t.preventDefault()
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = Tt, t && !this.isSimulated && t.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = Tt, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, C.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(t) {
                var e = t.button;
                return null == t.which && Ct.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && Dt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
            }
        }, C.event.addProp), C.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(t, e) {
            C.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var n, i = t.relatedTarget,
                        r = t.handleObj;
                    return i && (i === this || C.contains(this, i)) || (t.type = r.origType, n = r.handler.apply(this, arguments), t.type = e), n
                }
            }
        }), C.fn.extend({
            on: function(t, e, n, i) {
                return At(this, t, e, n, i)
            },
            one: function(t, e, n, i) {
                return At(this, t, e, n, i, 1)
            },
            off: function(t, e, n) {
                var i, r;
                if (t && t.preventDefault && t.handleObj) return i = t.handleObj, C(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof t) {
                    for (r in t) this.off(r, e, t[r]);
                    return this
                }
                return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = Mt), this.each(function() {
                    C.event.remove(this, t, n, e)
                })
            }
        });
        var Pt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            It = /<script|<style|<link/i,
            Ot = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ft = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function Lt(t, e) {
            return P(t, "table") && P(11 !== e.nodeType ? e : e.firstChild, "tr") && C(t).children("tbody")[0] || t
        }

        function Nt(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
        }

        function Et(t) {
            return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t
        }

        function Rt(t, e) {
            var n, i, r, a, o, s, l, u;
            if (1 === e.nodeType) {
                if (Z.hasData(t) && (a = Z.access(t), o = Z.set(e, a), u = a.events))
                    for (r in delete o.handle, o.events = {}, u)
                        for (n = 0, i = u[r].length; n < i; n++) C.event.add(e, r, u[r][n]);
                Q.hasData(t) && (s = Q.access(t), l = C.extend({}, s), Q.set(e, l))
            }
        }

        function Bt(t, e, n, i) {
            e = u.apply([], e);
            var r, a, o, s, l, c, d = 0,
                h = t.length,
                f = h - 1,
                p = e[0],
                g = y(p);
            if (g || h > 1 && "string" == typeof p && !v.checkClone && Ot.test(p)) return t.each(function(r) {
                var a = t.eq(r);
                g && (e[0] = p.call(this, r, a.html())), Bt(a, e, n, i)
            });
            if (h && (a = (r = wt(e, t[0].ownerDocument, !1, t, i)).firstChild, 1 === r.childNodes.length && (r = a), a || i)) {
                for (s = (o = C.map(mt(r, "script"), Nt)).length; d < h; d++) l = r, d !== f && (l = C.clone(l, !0, !0), s && C.merge(o, mt(l, "script"))), n.call(t[d], l, d);
                if (s)
                    for (c = o[o.length - 1].ownerDocument, C.map(o, Et), d = 0; d < s; d++) l = o[d], pt.test(l.type || "") && !Z.access(l, "globalEval") && C.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? C._evalUrl && C._evalUrl(l.src) : w(l.textContent.replace(Ft, ""), c, l))
            }
            return t
        }

        function Vt(t, e, n) {
            for (var i, r = e ? C.filter(e, t) : t, a = 0; null != (i = r[a]); a++) n || 1 !== i.nodeType || C.cleanData(mt(i)), i.parentNode && (n && C.contains(i.ownerDocument, i) && vt(mt(i, "script")), i.parentNode.removeChild(i));
            return t
        }
        C.extend({
            htmlPrefilter: function(t) {
                return t.replace(Pt, "<$1></$2>")
            },
            clone: function(t, e, n) {
                var i, r, a, o, s, l, u, c = t.cloneNode(!0),
                    d = C.contains(t.ownerDocument, t);
                if (!(v.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || C.isXMLDoc(t)))
                    for (o = mt(c), i = 0, r = (a = mt(t)).length; i < r; i++) s = a[i], l = o[i], void 0, "input" === (u = l.nodeName.toLowerCase()) && ht.test(s.type) ? l.checked = s.checked : "input" !== u && "textarea" !== u || (l.defaultValue = s.defaultValue);
                if (e)
                    if (n)
                        for (a = a || mt(t), o = o || mt(c), i = 0, r = a.length; i < r; i++) Rt(a[i], o[i]);
                    else Rt(t, c);
                return (o = mt(c, "script")).length > 0 && vt(o, !d && mt(t, "script")), c
            },
            cleanData: function(t) {
                for (var e, n, i, r = C.event.special, a = 0; void 0 !== (n = t[a]); a++)
                    if (G(n)) {
                        if (e = n[Z.expando]) {
                            if (e.events)
                                for (i in e.events) r[i] ? C.event.remove(n, i) : C.removeEvent(n, i, e.handle);
                            n[Z.expando] = void 0
                        }
                        n[Q.expando] && (n[Q.expando] = void 0)
                    }
            }
        }), C.fn.extend({
            detach: function(t) {
                return Vt(this, t, !0)
            },
            remove: function(t) {
                return Vt(this, t)
            },
            text: function(t) {
                return q(this, function(t) {
                    return void 0 === t ? C.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                    })
                }, null, t, arguments.length)
            },
            append: function() {
                return Bt(this, arguments, function(t) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Lt(this, t).appendChild(t)
                })
            },
            prepend: function() {
                return Bt(this, arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = Lt(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function() {
                return Bt(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function() {
                return Bt(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (C.cleanData(mt(t, !1)), t.textContent = "");
                return this
            },
            clone: function(t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map(function() {
                    return C.clone(this, t, e)
                })
            },
            html: function(t) {
                return q(this, function(t) {
                    var e = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                    if ("string" == typeof t && !It.test(t) && !gt[(ft.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = C.htmlPrefilter(t);
                        try {
                            for (; n < i; n++) 1 === (e = this[n] || {}).nodeType && (C.cleanData(mt(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (t) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function() {
                var t = [];
                return Bt(this, arguments, function(e) {
                    var n = this.parentNode;
                    C.inArray(this, t) < 0 && (C.cleanData(mt(this)), n && n.replaceChild(e, this))
                }, t)
            }
        }), C.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(t, e) {
            C.fn[t] = function(t) {
                for (var n, i = [], r = C(t), a = r.length - 1, o = 0; o <= a; o++) n = o === a ? this : this.clone(!0), C(r[o])[e](n), c.apply(i, n.get());
                return this.pushStack(i)
            }
        });
        var Wt = new RegExp("^(" + it + ")(?!px)[a-z%]+$", "i"),
            jt = function(t) {
                var e = t.ownerDocument.defaultView;
                return e && e.opener || (e = n), e.getComputedStyle(t)
            },
            zt = new RegExp(at.join("|"), "i");

        function Ht(t, e, n) {
            var i, r, a, o, s = t.style;
            return (n = n || jt(t)) && ("" !== (o = n.getPropertyValue(e) || n[e]) || C.contains(t.ownerDocument, t) || (o = C.style(t, e)), !v.pixelBoxStyles() && Wt.test(o) && zt.test(e) && (i = s.width, r = s.minWidth, a = s.maxWidth, s.minWidth = s.maxWidth = s.width = o, o = n.width, s.width = i, s.minWidth = r, s.maxWidth = a)), void 0 !== o ? o + "" : o
        }

        function Ut(t, e) {
            return {
                get: function() {
                    if (!t()) return (this.get = e).apply(this, arguments);
                    delete this.get
                }
            }
        }! function() {
            function t() {
                if (c) {
                    u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", kt.appendChild(u).appendChild(c);
                    var t = n.getComputedStyle(c);
                    i = "1%" !== t.top, l = 12 === e(t.marginLeft), c.style.right = "60%", s = 36 === e(t.right), r = 36 === e(t.width), c.style.position = "absolute", a = 36 === c.offsetWidth || "absolute", kt.removeChild(u), c = null
                }
            }

            function e(t) {
                return Math.round(parseFloat(t))
            }
            var i, r, a, s, l, u = o.createElement("div"),
                c = o.createElement("div");
            c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === c.style.backgroundClip, C.extend(v, {
                boxSizingReliable: function() {
                    return t(), r
                },
                pixelBoxStyles: function() {
                    return t(), s
                },
                pixelPosition: function() {
                    return t(), i
                },
                reliableMarginLeft: function() {
                    return t(), l
                },
                scrollboxSize: function() {
                    return t(), a
                }
            }))
        }();
        var qt = /^(none|table(?!-c[ea]).+)/,
            $t = /^--/,
            Yt = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Xt = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            Kt = ["Webkit", "Moz", "ms"],
            Gt = o.createElement("div").style;

        function Jt(t) {
            var e = C.cssProps[t];
            return e || (e = C.cssProps[t] = function(t) {
                if (t in Gt) return t;
                for (var e = t[0].toUpperCase() + t.slice(1), n = Kt.length; n--;)
                    if ((t = Kt[n] + e) in Gt) return t
            }(t) || t), e
        }

        function Zt(t, e, n) {
            var i = rt.exec(e);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
        }

        function Qt(t, e, n, i, r, a) {
            var o = "width" === e ? 1 : 0,
                s = 0,
                l = 0;
            if (n === (i ? "border" : "content")) return 0;
            for (; o < 4; o += 2) "margin" === n && (l += C.css(t, n + at[o], !0, r)), i ? ("content" === n && (l -= C.css(t, "padding" + at[o], !0, r)), "margin" !== n && (l -= C.css(t, "border" + at[o] + "Width", !0, r))) : (l += C.css(t, "padding" + at[o], !0, r), "padding" !== n ? l += C.css(t, "border" + at[o] + "Width", !0, r) : s += C.css(t, "border" + at[o] + "Width", !0, r));
            return !i && a >= 0 && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - a - l - s - .5))), l
        }

        function te(t, e, n) {
            var i = jt(t),
                r = Ht(t, e, i),
                a = "border-box" === C.css(t, "boxSizing", !1, i),
                o = a;
            if (Wt.test(r)) {
                if (!n) return r;
                r = "auto"
            }
            return o = o && (v.boxSizingReliable() || r === t.style[e]), ("auto" === r || !parseFloat(r) && "inline" === C.css(t, "display", !1, i)) && (r = t["offset" + e[0].toUpperCase() + e.slice(1)], o = !0), (r = parseFloat(r) || 0) + Qt(t, e, n || (a ? "border" : "content"), o, i, r) + "px"
        }

        function ee(t, e, n, i, r) {
            return new ee.prototype.init(t, e, n, i, r)
        }
        C.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var n = Ht(t, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function(t, e, n, i) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var r, a, o, s = K(e),
                        l = $t.test(e),
                        u = t.style;
                    if (l || (e = Jt(s)), o = C.cssHooks[e] || C.cssHooks[s], void 0 === n) return o && "get" in o && void 0 !== (r = o.get(t, !1, i)) ? r : u[e];
                    "string" === (a = typeof n) && (r = rt.exec(n)) && r[1] && (n = lt(t, e, r), a = "number"), null != n && n == n && ("number" === a && (n += r && r[3] || (C.cssNumber[s] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (u[e] = "inherit"), o && "set" in o && void 0 === (n = o.set(t, n, i)) || (l ? u.setProperty(e, n) : u[e] = n))
                }
            },
            css: function(t, e, n, i) {
                var r, a, o, s = K(e);
                return $t.test(e) || (e = Jt(s)), (o = C.cssHooks[e] || C.cssHooks[s]) && "get" in o && (r = o.get(t, !0, n)), void 0 === r && (r = Ht(t, e, i)), "normal" === r && e in Xt && (r = Xt[e]), "" === n || n ? (a = parseFloat(r), !0 === n || isFinite(a) ? a || 0 : r) : r
            }
        }), C.each(["height", "width"], function(t, e) {
            C.cssHooks[e] = {
                get: function(t, n, i) {
                    if (n) return !qt.test(C.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? te(t, e, i) : st(t, Yt, function() {
                        return te(t, e, i)
                    })
                },
                set: function(t, n, i) {
                    var r, a = jt(t),
                        o = "border-box" === C.css(t, "boxSizing", !1, a),
                        s = i && Qt(t, e, i, o, a);
                    return o && v.scrollboxSize() === a.position && (s -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(a[e]) - Qt(t, e, "border", !1, a) - .5)), s && (r = rt.exec(n)) && "px" !== (r[3] || "px") && (t.style[e] = n, n = C.css(t, e)), Zt(0, n, s)
                }
            }
        }), C.cssHooks.marginLeft = Ut(v.reliableMarginLeft, function(t, e) {
            if (e) return (parseFloat(Ht(t, "marginLeft")) || t.getBoundingClientRect().left - st(t, {
                marginLeft: 0
            }, function() {
                return t.getBoundingClientRect().left
            })) + "px"
        }), C.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(t, e) {
            C.cssHooks[t + e] = {
                expand: function(n) {
                    for (var i = 0, r = {}, a = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[t + at[i] + e] = a[i] || a[i - 2] || a[0];
                    return r
                }
            }, "margin" !== t && (C.cssHooks[t + e].set = Zt)
        }), C.fn.extend({
            css: function(t, e) {
                return q(this, function(t, e, n) {
                    var i, r, a = {},
                        o = 0;
                    if (Array.isArray(e)) {
                        for (i = jt(t), r = e.length; o < r; o++) a[e[o]] = C.css(t, e[o], !1, i);
                        return a
                    }
                    return void 0 !== n ? C.style(t, e, n) : C.css(t, e)
                }, t, e, arguments.length > 1)
            }
        }), C.Tween = ee, ee.prototype = {
            constructor: ee,
            init: function(t, e, n, i, r, a) {
                this.elem = t, this.prop = n, this.easing = r || C.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = a || (C.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var t = ee.propHooks[this.prop];
                return t && t.get ? t.get(this) : ee.propHooks._default.get(this)
            },
            run: function(t) {
                var e, n = ee.propHooks[this.prop];
                return this.options.duration ? this.pos = e = C.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : ee.propHooks._default.set(this), this
            }
        }, ee.prototype.init.prototype = ee.prototype, ee.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = C.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
                },
                set: function(t) {
                    C.fx.step[t.prop] ? C.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[C.cssProps[t.prop]] && !C.cssHooks[t.prop] ? t.elem[t.prop] = t.now : C.style(t.elem, t.prop, t.now + t.unit)
                }
            }
        }, ee.propHooks.scrollTop = ee.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, C.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            },
            _default: "swing"
        }, C.fx = ee.prototype.init, C.fx.step = {};
        var ne, ie, re = /^(?:toggle|show|hide)$/,
            ae = /queueHooks$/;

        function oe() {
            ie && (!1 === o.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(oe) : n.setTimeout(oe, C.fx.interval), C.fx.tick())
        }

        function se() {
            return n.setTimeout(function() {
                ne = void 0
            }), ne = Date.now()
        }

        function le(t, e) {
            var n, i = 0,
                r = {
                    height: t
                };
            for (e = e ? 1 : 0; i < 4; i += 2 - e) r["margin" + (n = at[i])] = r["padding" + n] = t;
            return e && (r.opacity = r.width = t), r
        }

        function ue(t, e, n) {
            for (var i, r = (ce.tweeners[e] || []).concat(ce.tweeners["*"]), a = 0, o = r.length; a < o; a++)
                if (i = r[a].call(n, e, t)) return i
        }

        function ce(t, e, n) {
            var i, r, a = 0,
                o = ce.prefilters.length,
                s = C.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (r) return !1;
                    for (var e = ne || se(), n = Math.max(0, u.startTime + u.duration - e), i = 1 - (n / u.duration || 0), a = 0, o = u.tweens.length; a < o; a++) u.tweens[a].run(i);
                    return s.notifyWith(t, [u, i, n]), i < 1 && o ? n : (o || s.notifyWith(t, [u, 1, 0]), s.resolveWith(t, [u]), !1)
                },
                u = s.promise({
                    elem: t,
                    props: C.extend({}, e),
                    opts: C.extend(!0, {
                        specialEasing: {},
                        easing: C.easing._default
                    }, n),
                    originalProperties: e,
                    originalOptions: n,
                    startTime: ne || se(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(e, n) {
                        var i = C.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                        return u.tweens.push(i), i
                    },
                    stop: function(e) {
                        var n = 0,
                            i = e ? u.tweens.length : 0;
                        if (r) return this;
                        for (r = !0; n < i; n++) u.tweens[n].run(1);
                        return e ? (s.notifyWith(t, [u, 1, 0]), s.resolveWith(t, [u, e])) : s.rejectWith(t, [u, e]), this
                    }
                }),
                c = u.props;
            for (! function(t, e) {
                    var n, i, r, a, o;
                    for (n in t)
                        if (r = e[i = K(n)], a = t[n], Array.isArray(a) && (r = a[1], a = t[n] = a[0]), n !== i && (t[i] = a, delete t[n]), (o = C.cssHooks[i]) && "expand" in o)
                            for (n in a = o.expand(a), delete t[i], a) n in t || (t[n] = a[n], e[n] = r);
                        else e[i] = r
                }(c, u.opts.specialEasing); a < o; a++)
                if (i = ce.prefilters[a].call(u, t, c, u.opts)) return y(i.stop) && (C._queueHooks(u.elem, u.opts.queue).stop = i.stop.bind(i)), i;
            return C.map(c, ue, u), y(u.opts.start) && u.opts.start.call(t, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), C.fx.timer(C.extend(l, {
                elem: t,
                anim: u,
                queue: u.opts.queue
            })), u
        }
        C.Animation = C.extend(ce, {
                tweeners: {
                    "*": [function(t, e) {
                        var n = this.createTween(t, e);
                        return lt(n.elem, t, rt.exec(e), n), n
                    }]
                },
                tweener: function(t, e) {
                    y(t) ? (e = t, t = ["*"]) : t = t.match(B);
                    for (var n, i = 0, r = t.length; i < r; i++) n = t[i], ce.tweeners[n] = ce.tweeners[n] || [], ce.tweeners[n].unshift(e)
                },
                prefilters: [function(t, e, n) {
                    var i, r, a, o, s, l, u, c, d = "width" in e || "height" in e,
                        h = this,
                        f = {},
                        p = t.style,
                        g = t.nodeType && ot(t),
                        m = Z.get(t, "fxshow");
                    for (i in n.queue || (null == (o = C._queueHooks(t, "fx")).unqueued && (o.unqueued = 0, s = o.empty.fire, o.empty.fire = function() {
                            o.unqueued || s()
                        }), o.unqueued++, h.always(function() {
                            h.always(function() {
                                o.unqueued--, C.queue(t, "fx").length || o.empty.fire()
                            })
                        })), e)
                        if (r = e[i], re.test(r)) {
                            if (delete e[i], a = a || "toggle" === r, r === (g ? "hide" : "show")) {
                                if ("show" !== r || !m || void 0 === m[i]) continue;
                                g = !0
                            }
                            f[i] = m && m[i] || C.style(t, i)
                        }
                    if ((l = !C.isEmptyObject(e)) || !C.isEmptyObject(f))
                        for (i in d && 1 === t.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (u = m && m.display) && (u = Z.get(t, "display")), "none" === (c = C.css(t, "display")) && (u ? c = u : (dt([t], !0), u = t.style.display || u, c = C.css(t, "display"), dt([t]))), ("inline" === c || "inline-block" === c && null != u) && "none" === C.css(t, "float") && (l || (h.done(function() {
                                p.display = u
                            }), null == u && (c = p.display, u = "none" === c ? "" : c)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", h.always(function() {
                                p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                            })), l = !1, f) l || (m ? "hidden" in m && (g = m.hidden) : m = Z.access(t, "fxshow", {
                            display: u
                        }), a && (m.hidden = !g), g && dt([t], !0), h.done(function() {
                            for (i in g || dt([t]), Z.remove(t, "fxshow"), f) C.style(t, i, f[i])
                        })), l = ue(g ? m[i] : 0, i, h), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0))
                }],
                prefilter: function(t, e) {
                    e ? ce.prefilters.unshift(t) : ce.prefilters.push(t)
                }
            }), C.speed = function(t, e, n) {
                var i = t && "object" == typeof t ? C.extend({}, t) : {
                    complete: n || !n && e || y(t) && t,
                    duration: t,
                    easing: n && e || e && !y(e) && e
                };
                return C.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in C.fx.speeds ? i.duration = C.fx.speeds[i.duration] : i.duration = C.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                    y(i.old) && i.old.call(this), i.queue && C.dequeue(this, i.queue)
                }, i
            }, C.fn.extend({
                fadeTo: function(t, e, n, i) {
                    return this.filter(ot).css("opacity", 0).show().end().animate({
                        opacity: e
                    }, t, n, i)
                },
                animate: function(t, e, n, i) {
                    var r = C.isEmptyObject(t),
                        a = C.speed(e, n, i),
                        o = function() {
                            var e = ce(this, C.extend({}, t), a);
                            (r || Z.get(this, "finish")) && e.stop(!0)
                        };
                    return o.finish = o, r || !1 === a.queue ? this.each(o) : this.queue(a.queue, o)
                },
                stop: function(t, e, n) {
                    var i = function(t) {
                        var e = t.stop;
                        delete t.stop, e(n)
                    };
                    return "string" != typeof t && (n = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function() {
                        var e = !0,
                            r = null != t && t + "queueHooks",
                            a = C.timers,
                            o = Z.get(this);
                        if (r) o[r] && o[r].stop && i(o[r]);
                        else
                            for (r in o) o[r] && o[r].stop && ae.test(r) && i(o[r]);
                        for (r = a.length; r--;) a[r].elem !== this || null != t && a[r].queue !== t || (a[r].anim.stop(n), e = !1, a.splice(r, 1));
                        !e && n || C.dequeue(this, t)
                    })
                },
                finish: function(t) {
                    return !1 !== t && (t = t || "fx"), this.each(function() {
                        var e, n = Z.get(this),
                            i = n[t + "queue"],
                            r = n[t + "queueHooks"],
                            a = C.timers,
                            o = i ? i.length : 0;
                        for (n.finish = !0, C.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = a.length; e--;) a[e].elem === this && a[e].queue === t && (a[e].anim.stop(!0), a.splice(e, 1));
                        for (e = 0; e < o; e++) i[e] && i[e].finish && i[e].finish.call(this);
                        delete n.finish
                    })
                }
            }), C.each(["toggle", "show", "hide"], function(t, e) {
                var n = C.fn[e];
                C.fn[e] = function(t, i, r) {
                    return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(le(e, !0), t, i, r)
                }
            }), C.each({
                slideDown: le("show"),
                slideUp: le("hide"),
                slideToggle: le("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(t, e) {
                C.fn[t] = function(t, n, i) {
                    return this.animate(e, t, n, i)
                }
            }), C.timers = [], C.fx.tick = function() {
                var t, e = 0,
                    n = C.timers;
                for (ne = Date.now(); e < n.length; e++)(t = n[e])() || n[e] !== t || n.splice(e--, 1);
                n.length || C.fx.stop(), ne = void 0
            }, C.fx.timer = function(t) {
                C.timers.push(t), C.fx.start()
            }, C.fx.interval = 13, C.fx.start = function() {
                ie || (ie = !0, oe())
            }, C.fx.stop = function() {
                ie = null
            }, C.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, C.fn.delay = function(t, e) {
                return t = C.fx && C.fx.speeds[t] || t, e = e || "fx", this.queue(e, function(e, i) {
                    var r = n.setTimeout(e, t);
                    i.stop = function() {
                        n.clearTimeout(r)
                    }
                })
            },
            function() {
                var t = o.createElement("input"),
                    e = o.createElement("select").appendChild(o.createElement("option"));
                t.type = "checkbox", v.checkOn = "" !== t.value, v.optSelected = e.selected, (t = o.createElement("input")).value = "t", t.type = "radio", v.radioValue = "t" === t.value
            }();
        var de, he = C.expr.attrHandle;
        C.fn.extend({
            attr: function(t, e) {
                return q(this, C.attr, t, e, arguments.length > 1)
            },
            removeAttr: function(t) {
                return this.each(function() {
                    C.removeAttr(this, t)
                })
            }
        }), C.extend({
            attr: function(t, e, n) {
                var i, r, a = t.nodeType;
                if (3 !== a && 8 !== a && 2 !== a) return void 0 === t.getAttribute ? C.prop(t, e, n) : (1 === a && C.isXMLDoc(t) || (r = C.attrHooks[e.toLowerCase()] || (C.expr.match.bool.test(e) ? de : void 0)), void 0 !== n ? null === n ? void C.removeAttr(t, e) : r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : r && "get" in r && null !== (i = r.get(t, e)) ? i : null == (i = C.find.attr(t, e)) ? void 0 : i)
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!v.radioValue && "radio" === e && P(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e), n && (t.value = n), e
                        }
                    }
                }
            },
            removeAttr: function(t, e) {
                var n, i = 0,
                    r = e && e.match(B);
                if (r && 1 === t.nodeType)
                    for (; n = r[i++];) t.removeAttribute(n)
            }
        }), de = {
            set: function(t, e, n) {
                return !1 === e ? C.removeAttr(t, n) : t.setAttribute(n, n), n
            }
        }, C.each(C.expr.match.bool.source.match(/\w+/g), function(t, e) {
            var n = he[e] || C.find.attr;
            he[e] = function(t, e, i) {
                var r, a, o = e.toLowerCase();
                return i || (a = he[o], he[o] = r, r = null != n(t, e, i) ? o : null, he[o] = a), r
            }
        });
        var fe = /^(?:input|select|textarea|button)$/i,
            pe = /^(?:a|area)$/i;

        function ge(t) {
            return (t.match(B) || []).join(" ")
        }

        function me(t) {
            return t.getAttribute && t.getAttribute("class") || ""
        }

        function ve(t) {
            return Array.isArray(t) ? t : "string" == typeof t && t.match(B) || []
        }
        C.fn.extend({
            prop: function(t, e) {
                return q(this, C.prop, t, e, arguments.length > 1)
            },
            removeProp: function(t) {
                return this.each(function() {
                    delete this[C.propFix[t] || t]
                })
            }
        }), C.extend({
            prop: function(t, e, n) {
                var i, r, a = t.nodeType;
                if (3 !== a && 8 !== a && 2 !== a) return 1 === a && C.isXMLDoc(t) || (e = C.propFix[e] || e, r = C.propHooks[e]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        var e = C.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : fe.test(t.nodeName) || pe.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), v.optSelected || (C.propHooks.selected = {
            get: function(t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null
            },
            set: function(t) {
                var e = t.parentNode;
                e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
            }
        }), C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            C.propFix[this.toLowerCase()] = this
        }), C.fn.extend({
            addClass: function(t) {
                var e, n, i, r, a, o, s, l = 0;
                if (y(t)) return this.each(function(e) {
                    C(this).addClass(t.call(this, e, me(this)))
                });
                if ((e = ve(t)).length)
                    for (; n = this[l++];)
                        if (r = me(n), i = 1 === n.nodeType && " " + ge(r) + " ") {
                            for (o = 0; a = e[o++];) i.indexOf(" " + a + " ") < 0 && (i += a + " ");
                            r !== (s = ge(i)) && n.setAttribute("class", s)
                        }
                return this
            },
            removeClass: function(t) {
                var e, n, i, r, a, o, s, l = 0;
                if (y(t)) return this.each(function(e) {
                    C(this).removeClass(t.call(this, e, me(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ((e = ve(t)).length)
                    for (; n = this[l++];)
                        if (r = me(n), i = 1 === n.nodeType && " " + ge(r) + " ") {
                            for (o = 0; a = e[o++];)
                                for (; i.indexOf(" " + a + " ") > -1;) i = i.replace(" " + a + " ", " ");
                            r !== (s = ge(i)) && n.setAttribute("class", s)
                        }
                return this
            },
            toggleClass: function(t, e) {
                var n = typeof t,
                    i = "string" === n || Array.isArray(t);
                return "boolean" == typeof e && i ? e ? this.addClass(t) : this.removeClass(t) : y(t) ? this.each(function(n) {
                    C(this).toggleClass(t.call(this, n, me(this), e), e)
                }) : this.each(function() {
                    var e, r, a, o;
                    if (i)
                        for (r = 0, a = C(this), o = ve(t); e = o[r++];) a.hasClass(e) ? a.removeClass(e) : a.addClass(e);
                    else void 0 !== t && "boolean" !== n || ((e = me(this)) && Z.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : Z.get(this, "__className__") || ""))
                })
            },
            hasClass: function(t) {
                var e, n, i = 0;
                for (e = " " + t + " "; n = this[i++];)
                    if (1 === n.nodeType && (" " + ge(me(n)) + " ").indexOf(e) > -1) return !0;
                return !1
            }
        });
        var ye = /\r/g;
        C.fn.extend({
            val: function(t) {
                var e, n, i, r = this[0];
                return arguments.length ? (i = y(t), this.each(function(n) {
                    var r;
                    1 === this.nodeType && (null == (r = i ? t.call(this, n, C(this).val()) : t) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = C.map(r, function(t) {
                        return null == t ? "" : t + ""
                    })), (e = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
                })) : r ? (e = C.valHooks[r.type] || C.valHooks[r.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(r, "value")) ? n : "string" == typeof(n = r.value) ? n.replace(ye, "") : null == n ? "" : n : void 0
            }
        }), C.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = C.find.attr(t, "value");
                        return null != e ? e : ge(C.text(t))
                    }
                },
                select: {
                    get: function(t) {
                        var e, n, i, r = t.options,
                            a = t.selectedIndex,
                            o = "select-one" === t.type,
                            s = o ? null : [],
                            l = o ? a + 1 : r.length;
                        for (i = a < 0 ? l : o ? a : 0; i < l; i++)
                            if (((n = r[i]).selected || i === a) && !n.disabled && (!n.parentNode.disabled || !P(n.parentNode, "optgroup"))) {
                                if (e = C(n).val(), o) return e;
                                s.push(e)
                            }
                        return s
                    },
                    set: function(t, e) {
                        for (var n, i, r = t.options, a = C.makeArray(e), o = r.length; o--;)((i = r[o]).selected = C.inArray(C.valHooks.option.get(i), a) > -1) && (n = !0);
                        return n || (t.selectedIndex = -1), a
                    }
                }
            }
        }), C.each(["radio", "checkbox"], function() {
            C.valHooks[this] = {
                set: function(t, e) {
                    if (Array.isArray(e)) return t.checked = C.inArray(C(t).val(), e) > -1
                }
            }, v.checkOn || (C.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        }), v.focusin = "onfocusin" in n;
        var be = /^(?:focusinfocus|focusoutblur)$/,
            xe = function(t) {
                t.stopPropagation()
            };
        C.extend(C.event, {
            trigger: function(t, e, i, r) {
                var a, s, l, u, c, d, h, f, g = [i || o],
                    m = p.call(t, "type") ? t.type : t,
                    v = p.call(t, "namespace") ? t.namespace.split(".") : [];
                if (s = f = l = i = i || o, 3 !== i.nodeType && 8 !== i.nodeType && !be.test(m + C.event.triggered) && (m.indexOf(".") > -1 && (m = (v = m.split(".")).shift(), v.sort()), c = m.indexOf(":") < 0 && "on" + m, (t = t[C.expando] ? t : new C.Event(m, "object" == typeof t && t)).isTrigger = r ? 2 : 3, t.namespace = v.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), e = null == e ? [t] : C.makeArray(e, [t]), h = C.event.special[m] || {}, r || !h.trigger || !1 !== h.trigger.apply(i, e))) {
                    if (!r && !h.noBubble && !b(i)) {
                        for (u = h.delegateType || m, be.test(u + m) || (s = s.parentNode); s; s = s.parentNode) g.push(s), l = s;
                        l === (i.ownerDocument || o) && g.push(l.defaultView || l.parentWindow || n)
                    }
                    for (a = 0;
                        (s = g[a++]) && !t.isPropagationStopped();) f = s, t.type = a > 1 ? u : h.bindType || m, (d = (Z.get(s, "events") || {})[t.type] && Z.get(s, "handle")) && d.apply(s, e), (d = c && s[c]) && d.apply && G(s) && (t.result = d.apply(s, e), !1 === t.result && t.preventDefault());
                    return t.type = m, r || t.isDefaultPrevented() || h._default && !1 !== h._default.apply(g.pop(), e) || !G(i) || c && y(i[m]) && !b(i) && ((l = i[c]) && (i[c] = null), C.event.triggered = m, t.isPropagationStopped() && f.addEventListener(m, xe), i[m](), t.isPropagationStopped() && f.removeEventListener(m, xe), C.event.triggered = void 0, l && (i[c] = l)), t.result
                }
            },
            simulate: function(t, e, n) {
                var i = C.extend(new C.Event, n, {
                    type: t,
                    isSimulated: !0
                });
                C.event.trigger(i, null, e)
            }
        }), C.fn.extend({
            trigger: function(t, e) {
                return this.each(function() {
                    C.event.trigger(t, e, this)
                })
            },
            triggerHandler: function(t, e) {
                var n = this[0];
                if (n) return C.event.trigger(t, e, n, !0)
            }
        }), v.focusin || C.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            var n = function(t) {
                C.event.simulate(e, t.target, C.event.fix(t))
            };
            C.event.special[e] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                        r = Z.access(i, e);
                    r || i.addEventListener(t, n, !0), Z.access(i, e, (r || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                        r = Z.access(i, e) - 1;
                    r ? Z.access(i, e, r) : (i.removeEventListener(t, n, !0), Z.remove(i, e))
                }
            }
        });
        var we = n.location,
            ke = Date.now(),
            Ce = /\?/;
        C.parseXML = function(t) {
            var e;
            if (!t || "string" != typeof t) return null;
            try {
                e = (new n.DOMParser).parseFromString(t, "text/xml")
            } catch (t) {
                e = void 0
            }
            return e && !e.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + t), e
        };
        var De = /\[\]$/,
            Se = /\r?\n/g,
            Te = /^(?:submit|button|image|reset|file)$/i,
            Me = /^(?:input|select|textarea|keygen)/i;

        function _e(t, e, n, i) {
            var r;
            if (Array.isArray(e)) C.each(e, function(e, r) {
                n || De.test(t) ? i(t, r) : _e(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, n, i)
            });
            else if (n || "object" !== k(e)) i(t, e);
            else
                for (r in e) _e(t + "[" + r + "]", e[r], n, i)
        }
        C.param = function(t, e) {
            var n, i = [],
                r = function(t, e) {
                    var n = y(e) ? e() : e;
                    i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
                };
            if (Array.isArray(t) || t.jquery && !C.isPlainObject(t)) C.each(t, function() {
                r(this.name, this.value)
            });
            else
                for (n in t) _e(n, t[n], e, r);
            return i.join("&")
        }, C.fn.extend({
            serialize: function() {
                return C.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var t = C.prop(this, "elements");
                    return t ? C.makeArray(t) : this
                }).filter(function() {
                    var t = this.type;
                    return this.name && !C(this).is(":disabled") && Me.test(this.nodeName) && !Te.test(t) && (this.checked || !ht.test(t))
                }).map(function(t, e) {
                    var n = C(this).val();
                    return null == n ? null : Array.isArray(n) ? C.map(n, function(t) {
                        return {
                            name: e.name,
                            value: t.replace(Se, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: n.replace(Se, "\r\n")
                    }
                }).get()
            }
        });
        var Ae = /%20/g,
            Pe = /#.*$/,
            Ie = /([?&])_=[^&]*/,
            Oe = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Fe = /^(?:GET|HEAD)$/,
            Le = /^\/\//,
            Ne = {},
            Ee = {},
            Re = "*/".concat("*"),
            Be = o.createElement("a");

        function Ve(t) {
            return function(e, n) {
                "string" != typeof e && (n = e, e = "*");
                var i, r = 0,
                    a = e.toLowerCase().match(B) || [];
                if (y(n))
                    for (; i = a[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
            }
        }

        function We(t, e, n, i) {
            var r = {},
                a = t === Ee;

            function o(s) {
                var l;
                return r[s] = !0, C.each(t[s] || [], function(t, s) {
                    var u = s(e, n, i);
                    return "string" != typeof u || a || r[u] ? a ? !(l = u) : void 0 : (e.dataTypes.unshift(u), o(u), !1)
                }), l
            }
            return o(e.dataTypes[0]) || !r["*"] && o("*")
        }

        function je(t, e) {
            var n, i, r = C.ajaxSettings.flatOptions || {};
            for (n in e) void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
            return i && C.extend(!0, t, i), t
        }
        Be.href = we.href, C.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: we.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(we.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Re,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": C.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? je(je(t, C.ajaxSettings), e) : je(C.ajaxSettings, t)
            },
            ajaxPrefilter: Ve(Ne),
            ajaxTransport: Ve(Ee),
            ajax: function(t, e) {
                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var i, r, a, s, l, u, c, d, h, f, p = C.ajaxSetup({}, e),
                    g = p.context || p,
                    m = p.context && (g.nodeType || g.jquery) ? C(g) : C.event,
                    v = C.Deferred(),
                    y = C.Callbacks("once memory"),
                    b = p.statusCode || {},
                    x = {},
                    w = {},
                    k = "canceled",
                    D = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (c) {
                                if (!s)
                                    for (s = {}; e = Oe.exec(a);) s[e[1].toLowerCase()] = e[2];
                                e = s[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function() {
                            return c ? a : null
                        },
                        setRequestHeader: function(t, e) {
                            return null == c && (t = w[t.toLowerCase()] = w[t.toLowerCase()] || t, x[t] = e), this
                        },
                        overrideMimeType: function(t) {
                            return null == c && (p.mimeType = t), this
                        },
                        statusCode: function(t) {
                            var e;
                            if (t)
                                if (c) D.always(t[D.status]);
                                else
                                    for (e in t) b[e] = [b[e], t[e]];
                            return this
                        },
                        abort: function(t) {
                            var e = t || k;
                            return i && i.abort(e), S(0, e), this
                        }
                    };
                if (v.promise(D), p.url = ((t || p.url || we.href) + "").replace(Le, we.protocol + "//"), p.type = e.method || e.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(B) || [""], null == p.crossDomain) {
                    u = o.createElement("a");
                    try {
                        u.href = p.url, u.href = u.href, p.crossDomain = Be.protocol + "//" + Be.host != u.protocol + "//" + u.host
                    } catch (t) {
                        p.crossDomain = !0
                    }
                }
                if (p.data && p.processData && "string" != typeof p.data && (p.data = C.param(p.data, p.traditional)), We(Ne, p, e, D), c) return D;
                for (h in (d = C.event && p.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Fe.test(p.type), r = p.url.replace(Pe, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Ae, "+")) : (f = p.url.slice(r.length), p.data && (p.processData || "string" == typeof p.data) && (r += (Ce.test(r) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (r = r.replace(Ie, "$1"), f = (Ce.test(r) ? "&" : "?") + "_=" + ke++ + f), p.url = r + f), p.ifModified && (C.lastModified[r] && D.setRequestHeader("If-Modified-Since", C.lastModified[r]), C.etag[r] && D.setRequestHeader("If-None-Match", C.etag[r])), (p.data && p.hasContent && !1 !== p.contentType || e.contentType) && D.setRequestHeader("Content-Type", p.contentType), D.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Re + "; q=0.01" : "") : p.accepts["*"]), p.headers) D.setRequestHeader(h, p.headers[h]);
                if (p.beforeSend && (!1 === p.beforeSend.call(g, D, p) || c)) return D.abort();
                if (k = "abort", y.add(p.complete), D.done(p.success), D.fail(p.error), i = We(Ee, p, e, D)) {
                    if (D.readyState = 1, d && m.trigger("ajaxSend", [D, p]), c) return D;
                    p.async && p.timeout > 0 && (l = n.setTimeout(function() {
                        D.abort("timeout")
                    }, p.timeout));
                    try {
                        c = !1, i.send(x, S)
                    } catch (t) {
                        if (c) throw t;
                        S(-1, t)
                    }
                } else S(-1, "No Transport");

                function S(t, e, o, s) {
                    var u, h, f, x, w, k = e;
                    c || (c = !0, l && n.clearTimeout(l), i = void 0, a = s || "", D.readyState = t > 0 ? 4 : 0, u = t >= 200 && t < 300 || 304 === t, o && (x = function(t, e, n) {
                        for (var i, r, a, o, s = t.contents, l = t.dataTypes;
                            "*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
                        if (i)
                            for (r in s)
                                if (s[r] && s[r].test(i)) {
                                    l.unshift(r);
                                    break
                                }
                        if (l[0] in n) a = l[0];
                        else {
                            for (r in n) {
                                if (!l[0] || t.converters[r + " " + l[0]]) {
                                    a = r;
                                    break
                                }
                                o || (o = r)
                            }
                            a = a || o
                        }
                        if (a) return a !== l[0] && l.unshift(a), n[a]
                    }(p, D, o)), x = function(t, e, n, i) {
                        var r, a, o, s, l, u = {},
                            c = t.dataTypes.slice();
                        if (c[1])
                            for (o in t.converters) u[o.toLowerCase()] = t.converters[o];
                        for (a = c.shift(); a;)
                            if (t.responseFields[a] && (n[t.responseFields[a]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = a, a = c.shift())
                                if ("*" === a) a = l;
                                else if ("*" !== l && l !== a) {
                            if (!(o = u[l + " " + a] || u["* " + a]))
                                for (r in u)
                                    if ((s = r.split(" "))[1] === a && (o = u[l + " " + s[0]] || u["* " + s[0]])) {
                                        !0 === o ? o = u[r] : !0 !== u[r] && (a = s[0], c.unshift(s[1]));
                                        break
                                    }
                            if (!0 !== o)
                                if (o && t.throws) e = o(e);
                                else try {
                                    e = o(e)
                                } catch (t) {
                                    return {
                                        state: "parsererror",
                                        error: o ? t : "No conversion from " + l + " to " + a
                                    }
                                }
                        }
                        return {
                            state: "success",
                            data: e
                        }
                    }(p, x, D, u), u ? (p.ifModified && ((w = D.getResponseHeader("Last-Modified")) && (C.lastModified[r] = w), (w = D.getResponseHeader("etag")) && (C.etag[r] = w)), 204 === t || "HEAD" === p.type ? k = "nocontent" : 304 === t ? k = "notmodified" : (k = x.state, h = x.data, u = !(f = x.error))) : (f = k, !t && k || (k = "error", t < 0 && (t = 0))), D.status = t, D.statusText = (e || k) + "", u ? v.resolveWith(g, [h, k, D]) : v.rejectWith(g, [D, k, f]), D.statusCode(b), b = void 0, d && m.trigger(u ? "ajaxSuccess" : "ajaxError", [D, p, u ? h : f]), y.fireWith(g, [D, k]), d && (m.trigger("ajaxComplete", [D, p]), --C.active || C.event.trigger("ajaxStop")))
                }
                return D
            },
            getJSON: function(t, e, n) {
                return C.get(t, e, n, "json")
            },
            getScript: function(t, e) {
                return C.get(t, void 0, e, "script")
            }
        }), C.each(["get", "post"], function(t, e) {
            C[e] = function(t, n, i, r) {
                return y(n) && (r = r || i, i = n, n = void 0), C.ajax(C.extend({
                    url: t,
                    type: e,
                    dataType: r,
                    data: n,
                    success: i
                }, C.isPlainObject(t) && t))
            }
        }), C._evalUrl = function(t) {
            return C.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                throws: !0
            })
        }, C.fn.extend({
            wrapAll: function(t) {
                var e;
                return this[0] && (y(t) && (t = t.call(this[0])), e = C(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                    return t
                }).append(this)), this
            },
            wrapInner: function(t) {
                return y(t) ? this.each(function(e) {
                    C(this).wrapInner(t.call(this, e))
                }) : this.each(function() {
                    var e = C(this),
                        n = e.contents();
                    n.length ? n.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) {
                var e = y(t);
                return this.each(function(n) {
                    C(this).wrapAll(e ? t.call(this, n) : t)
                })
            },
            unwrap: function(t) {
                return this.parent(t).not("body").each(function() {
                    C(this).replaceWith(this.childNodes)
                }), this
            }
        }), C.expr.pseudos.hidden = function(t) {
            return !C.expr.pseudos.visible(t)
        }, C.expr.pseudos.visible = function(t) {
            return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
        }, C.ajaxSettings.xhr = function() {
            try {
                return new n.XMLHttpRequest
            } catch (t) {}
        };
        var ze = {
                0: 200,
                1223: 204
            },
            He = C.ajaxSettings.xhr();
        v.cors = !!He && "withCredentials" in He, v.ajax = He = !!He, C.ajaxTransport(function(t) {
            var e, i;
            if (v.cors || He && !t.crossDomain) return {
                send: function(r, a) {
                    var o, s = t.xhr();
                    if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (o in t.xhrFields) s[o] = t.xhrFields[o];
                    for (o in t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) s.setRequestHeader(o, r[o]);
                    e = function(t) {
                        return function() {
                            e && (e = i = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === t ? s.abort() : "error" === t ? "number" != typeof s.status ? a(0, "error") : a(s.status, s.statusText) : a(ze[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                binary: s.response
                            } : {
                                text: s.responseText
                            }, s.getAllResponseHeaders()))
                        }
                    }, s.onload = e(), i = s.onerror = s.ontimeout = e("error"), void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function() {
                        4 === s.readyState && n.setTimeout(function() {
                            e && i()
                        })
                    }, e = e("abort");
                    try {
                        s.send(t.hasContent && t.data || null)
                    } catch (t) {
                        if (e) throw t
                    }
                },
                abort: function() {
                    e && e()
                }
            }
        }), C.ajaxPrefilter(function(t) {
            t.crossDomain && (t.contents.script = !1)
        }), C.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(t) {
                    return C.globalEval(t), t
                }
            }
        }), C.ajaxPrefilter("script", function(t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
        }), C.ajaxTransport("script", function(t) {
            var e, n;
            if (t.crossDomain) return {
                send: function(i, r) {
                    e = C("<script>").prop({
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", n = function(t) {
                        e.remove(), n = null, t && r("error" === t.type ? 404 : 200, t.type)
                    }), o.head.appendChild(e[0])
                },
                abort: function() {
                    n && n()
                }
            }
        });
        var Ue, qe = [],
            $e = /(=)\?(?=&|$)|\?\?/;
        C.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = qe.pop() || C.expando + "_" + ke++;
                return this[t] = !0, t
            }
        }), C.ajaxPrefilter("json jsonp", function(t, e, i) {
            var r, a, o, s = !1 !== t.jsonp && ($e.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && $e.test(t.data) && "data");
            if (s || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = y(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace($e, "$1" + r) : !1 !== t.jsonp && (t.url += (Ce.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
                return o || C.error(r + " was not called"), o[0]
            }, t.dataTypes[0] = "json", a = n[r], n[r] = function() {
                o = arguments
            }, i.always(function() {
                void 0 === a ? C(n).removeProp(r) : n[r] = a, t[r] && (t.jsonpCallback = e.jsonpCallback, qe.push(r)), o && y(a) && a(o[0]), o = a = void 0
            }), "script"
        }), v.createHTMLDocument = ((Ue = o.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ue.childNodes.length), C.parseHTML = function(t, e, n) {
            return "string" != typeof t ? [] : ("boolean" == typeof e && (n = e, e = !1), e || (v.createHTMLDocument ? ((i = (e = o.implementation.createHTMLDocument("")).createElement("base")).href = o.location.href, e.head.appendChild(i)) : e = o), r = I.exec(t), a = !n && [], r ? [e.createElement(r[1])] : (r = wt([t], e, a), a && a.length && C(a).remove(), C.merge([], r.childNodes)));
            var i, r, a
        }, C.fn.load = function(t, e, n) {
            var i, r, a, o = this,
                s = t.indexOf(" ");
            return s > -1 && (i = ge(t.slice(s)), t = t.slice(0, s)), y(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), o.length > 0 && C.ajax({
                url: t,
                type: r || "GET",
                dataType: "html",
                data: e
            }).done(function(t) {
                a = arguments, o.html(i ? C("<div>").append(C.parseHTML(t)).find(i) : t)
            }).always(n && function(t, e) {
                o.each(function() {
                    n.apply(this, a || [t.responseText, e, t])
                })
            }), this
        }, C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
            C.fn[e] = function(t) {
                return this.on(e, t)
            }
        }), C.expr.pseudos.animated = function(t) {
            return C.grep(C.timers, function(e) {
                return t === e.elem
            }).length
        }, C.offset = {
            setOffset: function(t, e, n) {
                var i, r, a, o, s, l, u = C.css(t, "position"),
                    c = C(t),
                    d = {};
                "static" === u && (t.style.position = "relative"), s = c.offset(), a = C.css(t, "top"), l = C.css(t, "left"), ("absolute" === u || "fixed" === u) && (a + l).indexOf("auto") > -1 ? (o = (i = c.position()).top, r = i.left) : (o = parseFloat(a) || 0, r = parseFloat(l) || 0), y(e) && (e = e.call(t, n, C.extend({}, s))), null != e.top && (d.top = e.top - s.top + o), null != e.left && (d.left = e.left - s.left + r), "using" in e ? e.using.call(t, d) : c.css(d)
            }
        }, C.fn.extend({
            offset: function(t) {
                if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                    C.offset.setOffset(this, t, e)
                });
                var e, n, i = this[0];
                return i ? i.getClientRects().length ? (e = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                    top: e.top + n.pageYOffset,
                    left: e.left + n.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function() {
                if (this[0]) {
                    var t, e, n, i = this[0],
                        r = {
                            top: 0,
                            left: 0
                        };
                    if ("fixed" === C.css(i, "position")) e = i.getBoundingClientRect();
                    else {
                        for (e = this.offset(), n = i.ownerDocument, t = i.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === C.css(t, "position");) t = t.parentNode;
                        t && t !== i && 1 === t.nodeType && ((r = C(t).offset()).top += C.css(t, "borderTopWidth", !0), r.left += C.css(t, "borderLeftWidth", !0))
                    }
                    return {
                        top: e.top - r.top - C.css(i, "marginTop", !0),
                        left: e.left - r.left - C.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent; t && "static" === C.css(t, "position");) t = t.offsetParent;
                    return t || kt
                })
            }
        }), C.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, e) {
            var n = "pageYOffset" === e;
            C.fn[t] = function(i) {
                return q(this, function(t, i, r) {
                    var a;
                    if (b(t) ? a = t : 9 === t.nodeType && (a = t.defaultView), void 0 === r) return a ? a[e] : t[i];
                    a ? a.scrollTo(n ? a.pageXOffset : r, n ? r : a.pageYOffset) : t[i] = r
                }, t, i, arguments.length)
            }
        }), C.each(["top", "left"], function(t, e) {
            C.cssHooks[e] = Ut(v.pixelPosition, function(t, n) {
                if (n) return n = Ht(t, e), Wt.test(n) ? C(t).position()[e] + "px" : n
            })
        }), C.each({
            Height: "height",
            Width: "width"
        }, function(t, e) {
            C.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, function(n, i) {
                C.fn[i] = function(r, a) {
                    var o = arguments.length && (n || "boolean" != typeof r),
                        s = n || (!0 === r || !0 === a ? "margin" : "border");
                    return q(this, function(e, n, r) {
                        var a;
                        return b(e) ? 0 === i.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (a = e.documentElement, Math.max(e.body["scroll" + t], a["scroll" + t], e.body["offset" + t], a["offset" + t], a["client" + t])) : void 0 === r ? C.css(e, n, s) : C.style(e, n, r, s)
                    }, e, o ? r : void 0, o)
                }
            })
        }), C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(t, e) {
            C.fn[e] = function(t, n) {
                return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
            }
        }), C.fn.extend({
            hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }
        }), C.fn.extend({
            bind: function(t, e, n) {
                return this.on(t, null, e, n)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, n, i) {
                return this.on(e, t, n, i)
            },
            undelegate: function(t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
            }
        }), C.proxy = function(t, e) {
            var n, i, r;
            if ("string" == typeof e && (n = t[e], e = t, t = n), y(t)) return i = l.call(arguments, 2), (r = function() {
                return t.apply(e || this, i.concat(l.call(arguments)))
            }).guid = t.guid = t.guid || C.guid++, r
        }, C.holdReady = function(t) {
            t ? C.readyWait++ : C.ready(!0)
        }, C.isArray = Array.isArray, C.parseJSON = JSON.parse, C.nodeName = P, C.isFunction = y, C.isWindow = b, C.camelCase = K, C.type = k, C.now = Date.now, C.isNumeric = function(t) {
            var e = C.type(t);
            return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
        }, void 0 === (i = function() {
            return C
        }.apply(e, [])) || (t.exports = i);
        var Ye = n.jQuery,
            Xe = n.$;
        return C.noConflict = function(t) {
            return n.$ === C && (n.$ = Xe), t && n.jQuery === C && (n.jQuery = Ye), C
        }, r || (n.jQuery = n.$ = C), C
    })
}, function(t, e, n) {
    "use strict";
    (function(t) {
        n.d(e, "a", function() {
            return o
        });
        var i = n(6),
            r = n(2),
            a = function(t) {
                this.formOpenBtn = t, this.extraPayment = 0
            };
        a.prototype = {
            init: function() {
                var e = this;
                t(this.formOpenBtn).on("click", function() {
                    e._showExtra()
                }), t("#extraPaymentsForm").on("change", function() {
                    i.a.fireEvent("onExtraValuesChange")
                })
            },
            _showExtra: function() {
                var e = t("#extraPaymentsContent"),
                    n = t("#addExtraPayments");
                e.hasClass("opened") ? (e.removeClass("opened"), n.text("Add extra payments"), this.extraContainerOpened = !1) : (e.addClass("opened"), n.text("Hide extra payments"), this.extraContainerOpened = !0)
            },
            getExtraFormValues: function() {
                if (this.extraTotal = 0, this.extraContainerOpened) {
                    var e = t("#extraPaymentsForm input"),
                        n = t("#extraPaymentsForm select");
                    Object(r.d)(e, this), Object(r.d)(n, this)
                } else this.extraMonthly = this.extraYeary = this.extraOneTime = 0
            },
            checkExtra: function(t, e) {
                var n = this.extraMonthly;
                return t % 12 === this.extraYearyMonth && (n += this.extraYeary), e === this.extraOneTimeYear && t % 12 === this.extraOneTimeMonth && (n += this.extraOneTime), this.extraTotal += n, n
            }
        };
        var o = new a("#addExtraPayments")
    }).call(this, n(3))
}, function(t, e, n) {
    "use strict";
    (function(t) {
        n.d(e, "a", function() {
            return o
        });
        n(13);
        var i = n(6),
            r = n(1),
            a = function(e) {
                this.$showScheduleBtn = t(e.showScheduleBtn), this.$schedulePayoffDate = t(e.schedulePayoffDateBlock), this.$scheduleBlock = t(e.scheduleBlock), this.$scheduleTbody = t(e.scheduleTbody), this.$sheduleContainer = t(e.sheduleContainer)
            };
        a.prototype = {
            init: function() {
                var e = this;
                t(this.$showScheduleBtn).on("click", function() {
                    e._scrollToSchedule(), e._showHideScheduleContainer()
                }), this._initScheduleDatepicker()
            },
            _initScheduleDatepicker: function() {
                var e = this,
                    n = this.dateScheduleDatePicker = t(".datepicker");
                n.datepicker({
                    assumeNearbyYear: !0
                }), n.on("changeDate", function() {
                    var t = e.month,
                        n = e.year;
                    e.getDate();
                    var r = t !== e.month || n !== e.year;
                    i.a.fireEvent("onStartDayChanged", [r])
                }), n.datepicker("update", "getDate"), this.getDate()
            },
            getDate: function() {
                var t = this.dateScheduleDatePicker.datepicker("getDate");
                this.day = t.getDate(), this.month = t.getMonth(), this.year = t.getFullYear()
            },
            changePayoffDate: function(t) {
                this.$schedulePayoffDate.text(this._convertPayoffDate(t))
            },
            _convertPayoffDate: function(t) {
                var e = this.day,
                    n = t.length - 1;
                return t[n].month + " " + e + ", " + t[n].year
            },
            _showHideScheduleContainer: function() {
                var t = this.$scheduleBlock;
                t.hasClass("opened") ? (t.removeClass("opened"), this.$showScheduleBtn.find("span").text("Show"), this.scheduleContainerOpened = !1) : (t.addClass("opened"), this.$showScheduleBtn.find("span").text("Hide"), this.scheduleContainerOpened = !0, i.a.fireEvent("onScheduleContainerOpen"))
            },
            _scrollToSchedule: function() {
                if (!this.$scheduleBlock.hasClass("opened")) {
                    var e = t("html")[0].scrollTop,
                        n = this.$sheduleContainer[0].getBoundingClientRect().top + e + 50;
                    t("html").animate({
                        scrollTop: n
                    })
                }
            },
            renderScheduleTable: function(t) {
                if (this.$scheduleBlock.hasClass("opened")) {
                    var e = "";
                    this.changePayoffDate(t);
                    performance.now();
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        e += '<tr><td class="left ' + n + '">' + i.month + " " + i.year + '</td><td class="td-annuent">$' + Object(r.b)(i.annuent) + '</td><td class="td-principal">$' + Object(r.b)(i.principal) + '</td><td class="td-interest">$' + Object(r.b)(i.interest) + '</td><td class="td-total-interest">$' + Object(r.b)(i.totalInterest) + '</td><td class="righ td-balance">$' + Object(r.b)(i.balance) + "</td></tr>"
                    }
                    performance.now();
                    this.$scheduleTbody.html(e);
                    performance.now()
                }
            },
            renderBiweeklyScheduleTable: function(t) {
                if (this.$scheduleBlock.hasClass("opened"))
                    for (var e = "", n = "", i = 1; i < t.length; i++) {
                        var a = t[i].biweeklyBalance ? t[i].biweeklyBalance.biBalance : 0,
                            o = t[i].monthlyBalance ? t[i].monthlyBalance.balance : 0;
                        e += '<tr><td class="left ' + i + '">' + i + '</td><td class="righ td-balance">$' + Object(r.b)(a) + '</td><td class="righ td-balance">$' + Object(r.b)(o) + "</td></tr>"
                    }
                this.$scheduleTbody.html(e), this.$scheduleTbody.append(n)
            }
        };
        var o = new a({
            showScheduleBtn: "#showAmortSchedule",
            schedulePayoffDateBlock: "#schedulePayoffDate",
            scheduleBlock: ".amortization-schedule",
            scheduleTbody: "#amoSchedule",
            sheduleContainer: "#scheduleContainer"
        })
    }).call(this, n(3))
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return r
    });
    var i, r = (i = [], {
        addListener: function(t, e) {
            i[t] || (i[t] = []), i[t].push(e)
        },
        fireEvent: function(t, e) {
            if (i[t])
                for (var n = 0; n < i[t].length; n++) i[t][n].apply(this, e)
        }
    })
}, function(t, e, n) {
    /*!
     * cleave.js - 1.3.3
     * https://github.com/nosir/cleave.js
     * Apache License Version 2.0
     *
     * Copyright (C) 2012-2018 Max Huang https://github.com/nosir/
     */
    t.exports = function(t) {
        function e(i) {
            if (n[i]) return n[i].exports;
            var r = n[i] = {
                exports: {},
                id: i,
                loaded: !1
            };
            return t[i].call(r.exports, r, r.exports, e), r.loaded = !0, r.exports
        }
        var n = {};
        return e.m = t, e.c = n, e.p = "", e(0)
    }([function(t, e, n) {
        (function(e) {
            "use strict";
            var i = function(t, e) {
                var n = this;
                if (n.element = "string" == typeof t ? document.querySelector(t) : void 0 !== t.length && t.length > 0 ? t[0] : t, !n.element) throw new Error("[cleave.js] Please check the element");
                e.initValue = n.element.value, n.properties = i.DefaultProperties.assign({}, e), n.init()
            };
            i.prototype = {
                init: function() {
                    var t = this,
                        e = t.properties;
                    return e.numeral || e.phone || e.creditCard || e.date || 0 !== e.blocksLength || e.prefix ? (e.maxLength = i.Util.getMaxLength(e.blocks), t.isAndroid = i.Util.isAndroid(), t.lastInputValue = "", t.onChangeListener = t.onChange.bind(t), t.onKeyDownListener = t.onKeyDown.bind(t), t.onFocusListener = t.onFocus.bind(t), t.onCutListener = t.onCut.bind(t), t.onCopyListener = t.onCopy.bind(t), t.element.addEventListener("input", t.onChangeListener), t.element.addEventListener("keydown", t.onKeyDownListener), t.element.addEventListener("focus", t.onFocusListener), t.element.addEventListener("cut", t.onCutListener), t.element.addEventListener("copy", t.onCopyListener), t.initPhoneFormatter(), t.initDateFormatter(), t.initNumeralFormatter(), void((e.initValue || e.prefix && !e.noImmediatePrefix) && t.onInput(e.initValue))) : void t.onInput(e.initValue)
                },
                initNumeralFormatter: function() {
                    var t = this.properties;
                    t.numeral && (t.numeralFormatter = new i.NumeralFormatter(t.numeralDecimalMark, t.numeralIntegerScale, t.numeralDecimalScale, t.numeralThousandsGroupStyle, t.numeralPositiveOnly, t.stripLeadingZeroes, t.delimiter))
                },
                initDateFormatter: function() {
                    var t = this.properties;
                    t.date && (t.dateFormatter = new i.DateFormatter(t.datePattern), t.blocks = t.dateFormatter.getBlocks(), t.blocksLength = t.blocks.length, t.maxLength = i.Util.getMaxLength(t.blocks))
                },
                initPhoneFormatter: function() {
                    var t = this.properties;
                    if (t.phone) try {
                        t.phoneFormatter = new i.PhoneFormatter(new t.root.Cleave.AsYouTypeFormatter(t.phoneRegionCode), t.delimiter)
                    } catch (t) {
                        throw new Error("[cleave.js] Please include phone-type-formatter.{country}.js lib")
                    }
                },
                onKeyDown: function(t) {
                    var e = this,
                        n = e.properties,
                        r = t.which || t.keyCode,
                        a = i.Util,
                        o = e.element.value;
                    return a.isAndroidBackspaceKeydown(e.lastInputValue, o) && (r = 8), e.lastInputValue = o, 8 === r && a.isDelimiter(o.slice(-n.delimiterLength), n.delimiter, n.delimiters) ? void(n.backspace = !0) : void(n.backspace = !1)
                },
                onChange: function() {
                    this.onInput(this.element.value)
                },
                onFocus: function() {
                    var t = this.properties;
                    i.Util.fixPrefixCursor(this.element, t.prefix, t.delimiter, t.delimiters)
                },
                onCut: function(t) {
                    this.copyClipboardData(t), this.onInput("")
                },
                onCopy: function(t) {
                    this.copyClipboardData(t)
                },
                copyClipboardData: function(t) {
                    var e = this.properties,
                        n = i.Util,
                        r = this.element.value,
                        a = "";
                    a = e.copyDelimiter ? r : n.stripDelimiters(r, e.delimiter, e.delimiters);
                    try {
                        t.clipboardData ? t.clipboardData.setData("Text", a) : window.clipboardData.setData("Text", a), t.preventDefault()
                    } catch (t) {}
                },
                onInput: function(t) {
                    var e = this,
                        n = e.properties,
                        r = i.Util;
                    return n.numeral || !n.backspace || r.isDelimiter(t.slice(-n.delimiterLength), n.delimiter, n.delimiters) || (t = r.headStr(t, t.length - n.delimiterLength)), n.phone ? (!n.prefix || n.noImmediatePrefix && !t.length ? n.result = n.phoneFormatter.format(t) : n.result = n.prefix + n.phoneFormatter.format(t).slice(n.prefix.length), void e.updateValueState()) : n.numeral ? (!n.prefix || n.noImmediatePrefix && !t.length ? n.result = n.numeralFormatter.format(t) : n.result = n.prefix + n.numeralFormatter.format(t), void e.updateValueState()) : (n.date && (t = n.dateFormatter.getValidatedDate(t)), t = r.stripDelimiters(t, n.delimiter, n.delimiters), t = r.getPrefixStrippedValue(t, n.prefix, n.prefixLength), t = n.numericOnly ? r.strip(t, /[^\d]/g) : t, t = n.uppercase ? t.toUpperCase() : t, t = n.lowercase ? t.toLowerCase() : t, !n.prefix || n.noImmediatePrefix && !t.length || (t = n.prefix + t, 0 !== n.blocksLength) ? (n.creditCard && e.updateCreditCardPropsByValue(t), t = r.headStr(t, n.maxLength), n.result = r.getFormattedValue(t, n.blocks, n.blocksLength, n.delimiter, n.delimiters, n.delimiterLazyShow), void e.updateValueState()) : (n.result = t, void e.updateValueState()))
                },
                updateCreditCardPropsByValue: function(t) {
                    var e, n = this.properties,
                        r = i.Util;
                    r.headStr(n.result, 4) !== r.headStr(t, 4) && (e = i.CreditCardDetector.getInfo(t, n.creditCardStrictMode), n.blocks = e.blocks, n.blocksLength = n.blocks.length, n.maxLength = r.getMaxLength(n.blocks), n.creditCardType !== e.type && (n.creditCardType = e.type, n.onCreditCardTypeChanged.call(this, n.creditCardType)))
                },
                setCurrentSelection: function(t, e) {
                    e.length !== t && i.Util.setSelection(this.element, t)
                },
                updateValueState: function() {
                    var t = this,
                        e = t.properties;
                    if (t.element) {
                        var n = t.element.selectionEnd,
                            r = t.element.value;
                        if (n += i.Util.getPositionOffset(n, r, e.result, e.delimiter, e.delimiters), t.isAndroid) return void window.setTimeout(function() {
                            t.element.value = e.result, t.setCurrentSelection(n, r)
                        }, 1);
                        t.element.value = e.result, t.setCurrentSelection(n, r), e.onValueChanged.call(t, {
                            target: {
                                value: e.result,
                                rawValue: t.getRawValue()
                            }
                        })
                    }
                },
                setPhoneRegionCode: function(t) {
                    var e = this,
                        n = e.properties;
                    n.phoneRegionCode = t, e.initPhoneFormatter(), e.onChange()
                },
                setRawValue: function(t) {
                    var e = this,
                        n = e.properties;
                    t = void 0 !== t && null !== t ? t.toString() : "", n.numeral && (t = t.replace(".", n.numeralDecimalMark)), n.backspace = !1, e.element.value = t, e.onInput(t)
                },
                getRawValue: function() {
                    var t = this.properties,
                        e = i.Util,
                        n = this.element.value;
                    return t.rawValueTrimPrefix && (n = e.getPrefixStrippedValue(n, t.prefix, t.prefixLength)), n = t.numeral ? t.numeralFormatter.getRawValue(n) : e.stripDelimiters(n, t.delimiter, t.delimiters)
                },
                getISOFormatDate: function() {
                    var t = this.properties;
                    return t.date ? t.dateFormatter.getISOFormatDate() : ""
                },
                getFormattedValue: function() {
                    return this.element.value
                },
                destroy: function() {
                    var t = this;
                    t.element.removeEventListener("input", t.onChangeListener), t.element.removeEventListener("keydown", t.onKeyDownListener), t.element.removeEventListener("focus", t.onFocusListener), t.element.removeEventListener("cut", t.onCutListener), t.element.removeEventListener("copy", t.onCopyListener)
                },
                toString: function() {
                    return "[Cleave Object]"
                }
            }, i.NumeralFormatter = n(1), i.DateFormatter = n(2), i.PhoneFormatter = n(3), i.CreditCardDetector = n(4), i.Util = n(5), i.DefaultProperties = n(6), ("object" == typeof e && e ? e : window).Cleave = i, t.exports = i
        }).call(e, function() {
            return this
        }())
    }, function(t, e) {
        "use strict";
        var n = function(t, e, i, r, a, o, s) {
            var l = this;
            l.numeralDecimalMark = t || ".", l.numeralIntegerScale = e > 0 ? e : 0, l.numeralDecimalScale = i >= 0 ? i : 2, l.numeralThousandsGroupStyle = r || n.groupStyle.thousand, l.numeralPositiveOnly = !!a, l.stripLeadingZeroes = !1 !== o, l.delimiter = s || "" === s ? s : ",", l.delimiterRE = s ? new RegExp("\\" + s, "g") : ""
        };
        n.groupStyle = {
            thousand: "thousand",
            lakh: "lakh",
            wan: "wan",
            none: "none"
        }, n.prototype = {
            getRawValue: function(t) {
                return t.replace(this.delimiterRE, "").replace(this.numeralDecimalMark, ".")
            },
            format: function(t) {
                var e, i, r = this,
                    a = "";
                switch (t = t.replace(/[A-Za-z]/g, "").replace(r.numeralDecimalMark, "M").replace(/[^\dM-]/g, "").replace(/^\-/, "N").replace(/\-/g, "").replace("N", r.numeralPositiveOnly ? "" : "-").replace("M", r.numeralDecimalMark), r.stripLeadingZeroes && (t = t.replace(/^(-)?0+(?=\d)/, "$1")), i = t, t.indexOf(r.numeralDecimalMark) >= 0 && (e = t.split(r.numeralDecimalMark), i = e[0], a = r.numeralDecimalMark + e[1].slice(0, r.numeralDecimalScale)), r.numeralIntegerScale > 0 && (i = i.slice(0, r.numeralIntegerScale + ("-" === t.slice(0, 1) ? 1 : 0))), r.numeralThousandsGroupStyle) {
                    case n.groupStyle.lakh:
                        i = i.replace(/(\d)(?=(\d\d)+\d$)/g, "$1" + r.delimiter);
                        break;
                    case n.groupStyle.wan:
                        i = i.replace(/(\d)(?=(\d{4})+$)/g, "$1" + r.delimiter);
                        break;
                    case n.groupStyle.thousand:
                        i = i.replace(/(\d)(?=(\d{3})+$)/g, "$1" + r.delimiter)
                }
                return i.toString() + (r.numeralDecimalScale > 0 ? a.toString() : "")
            }
        }, t.exports = n
    }, function(t, e) {
        "use strict";
        var n = function(t) {
            var e = this;
            e.date = [], e.blocks = [], e.datePattern = t, e.initBlocks()
        };
        n.prototype = {
            initBlocks: function() {
                var t = this;
                t.datePattern.forEach(function(e) {
                    "Y" === e ? t.blocks.push(4) : t.blocks.push(2)
                })
            },
            getISOFormatDate: function() {
                var t = this,
                    e = t.date;
                return e[2] ? e[2] + "-" + t.addLeadingZero(e[1]) + "-" + t.addLeadingZero(e[0]) : ""
            },
            getBlocks: function() {
                return this.blocks
            },
            getValidatedDate: function(t) {
                var e = this,
                    n = "";
                return t = t.replace(/[^\d]/g, ""), e.blocks.forEach(function(i, r) {
                    if (t.length > 0) {
                        var a = t.slice(0, i),
                            o = a.slice(0, 1),
                            s = t.slice(i);
                        switch (e.datePattern[r]) {
                            case "d":
                                "00" === a ? a = "01" : parseInt(o, 10) > 3 ? a = "0" + o : parseInt(a, 10) > 31 && (a = "31");
                                break;
                            case "m":
                                "00" === a ? a = "01" : parseInt(o, 10) > 1 ? a = "0" + o : parseInt(a, 10) > 12 && (a = "12")
                        }
                        n += a, t = s
                    }
                }), this.getFixedDateString(n)
            },
            getFixedDateString: function(t) {
                var e, n, i, r = this,
                    a = r.datePattern,
                    o = [],
                    s = 0,
                    l = 0,
                    u = 0,
                    c = 0,
                    d = 0,
                    h = 0,
                    f = !1;
                return 4 === t.length && "y" !== a[0].toLowerCase() && "y" !== a[1].toLowerCase() && (c = "d" === a[0] ? 0 : 2, d = 2 - c, e = parseInt(t.slice(c, c + 2), 10), n = parseInt(t.slice(d, d + 2), 10), o = this.getFixedDate(e, n, 0)), 8 === t.length && (a.forEach(function(t, e) {
                    switch (t) {
                        case "d":
                            s = e;
                            break;
                        case "m":
                            l = e;
                            break;
                        default:
                            u = e
                    }
                }), h = 2 * u, c = s <= u ? 2 * s : 2 * s + 2, d = l <= u ? 2 * l : 2 * l + 2, e = parseInt(t.slice(c, c + 2), 10), n = parseInt(t.slice(d, d + 2), 10), i = parseInt(t.slice(h, h + 4), 10), f = 4 === t.slice(h, h + 4).length, o = this.getFixedDate(e, n, i)), r.date = o, 0 === o.length ? t : a.reduce(function(t, e) {
                    switch (e) {
                        case "d":
                            return t + r.addLeadingZero(o[0]);
                        case "m":
                            return t + r.addLeadingZero(o[1]);
                        default:
                            return t + (f ? r.addLeadingZeroForYear(o[2]) : "")
                    }
                }, "")
            },
            getFixedDate: function(t, e, n) {
                return t = Math.min(t, 31), e = Math.min(e, 12), n = parseInt(n || 0, 10), (e < 7 && e % 2 == 0 || e > 8 && e % 2 == 1) && (t = Math.min(t, 2 === e ? this.isLeapYear(n) ? 29 : 28 : 30)), [t, e, n]
            },
            isLeapYear: function(t) {
                return t % 4 == 0 && t % 100 != 0 || t % 400 == 0
            },
            addLeadingZero: function(t) {
                return (t < 10 ? "0" : "") + t
            },
            addLeadingZeroForYear: function(t) {
                return (t < 10 ? "000" : t < 100 ? "00" : t < 1e3 ? "0" : "") + t
            }
        }, t.exports = n
    }, function(t, e) {
        "use strict";
        var n = function(t, e) {
            var n = this;
            n.delimiter = e || "" === e ? e : " ", n.delimiterRE = e ? new RegExp("\\" + e, "g") : "", n.formatter = t
        };
        n.prototype = {
            setFormatter: function(t) {
                this.formatter = t
            },
            format: function(t) {
                var e = this;
                e.formatter.clear();
                for (var n, i = "", r = !1, a = 0, o = (t = (t = t.replace(/[^\d+]/g, "")).replace(e.delimiterRE, "")).length; a < o; a++) n = e.formatter.inputDigit(t.charAt(a)), /[\s()-]/g.test(n) ? (i = n, r = !0) : r || (i = n);
                return i = (i = i.replace(/[()]/g, "")).replace(/[\s-]/g, e.delimiter)
            }
        }, t.exports = n
    }, function(t, e) {
        "use strict";
        var n = {
            blocks: {
                uatp: [4, 5, 6],
                amex: [4, 6, 5],
                diners: [4, 6, 4],
                discover: [4, 4, 4, 4],
                mastercard: [4, 4, 4, 4],
                dankort: [4, 4, 4, 4],
                instapayment: [4, 4, 4, 4],
                jcb: [4, 4, 4, 4],
                maestro: [4, 4, 4, 4],
                visa: [4, 4, 4, 4],
                mir: [4, 4, 4, 4],
                unionPay: [4, 4, 4, 4],
                general: [4, 4, 4, 4],
                generalStrict: [4, 4, 4, 7]
            },
            re: {
                uatp: /^(?!1800)1\d{0,14}/,
                amex: /^3[47]\d{0,13}/,
                discover: /^(?:6011|65\d{0,2}|64[4-9]\d?)\d{0,12}/,
                diners: /^3(?:0([0-5]|9)|[689]\d?)\d{0,11}/,
                mastercard: /^(5[1-5]\d{0,2}|22[2-9]\d{0,1}|2[3-7]\d{0,2})\d{0,12}/,
                dankort: /^(5019|4175|4571)\d{0,12}/,
                instapayment: /^63[7-9]\d{0,13}/,
                jcb: /^(?:2131|1800|35\d{0,2})\d{0,12}/,
                maestro: /^(?:5[0678]\d{0,2}|6304|67\d{0,2})\d{0,12}/,
                mir: /^220[0-4]\d{0,12}/,
                visa: /^4\d{0,15}/,
                unionPay: /^62\d{0,14}/
            },
            getInfo: function(t, e) {
                var i = n.blocks,
                    r = n.re;
                for (var a in e = !!e, r)
                    if (r[a].test(t)) {
                        var o;
                        return o = e ? i.generalStrict : i[a], {
                            type: a,
                            blocks: o
                        }
                    }
                return {
                    type: "unknown",
                    blocks: e ? i.generalStrict : i.general
                }
            }
        };
        t.exports = n
    }, function(t, e) {
        "use strict";
        var n = {
            noop: function() {},
            strip: function(t, e) {
                return t.replace(e, "")
            },
            isDelimiter: function(t, e, n) {
                return 0 === n.length ? t === e : n.some(function(e) {
                    if (t === e) return !0
                })
            },
            getDelimiterREByDelimiter: function(t) {
                return new RegExp(t.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1"), "g")
            },
            getPositionOffset: function(t, e, n, i, r) {
                var a, o, s;
                return a = this.stripDelimiters(e.slice(0, t), i, r), o = this.stripDelimiters(n.slice(0, t), i, r), 0 != (s = a.length - o.length) ? s / Math.abs(s) : 0
            },
            stripDelimiters: function(t, e, n) {
                var i = this;
                if (0 === n.length) {
                    var r = e ? i.getDelimiterREByDelimiter(e) : "";
                    return t.replace(r, "")
                }
                return n.forEach(function(e) {
                    t = t.replace(i.getDelimiterREByDelimiter(e), "")
                }), t
            },
            headStr: function(t, e) {
                return t.slice(0, e)
            },
            getMaxLength: function(t) {
                return t.reduce(function(t, e) {
                    return t + e
                }, 0)
            },
            getPrefixStrippedValue: function(t, e, n) {
                if (t.slice(0, n) !== e) {
                    var i = this.getFirstDiffIndex(e, t.slice(0, n));
                    t = e + t.slice(i, i + 1) + t.slice(n + 1)
                }
                return t.slice(n)
            },
            getFirstDiffIndex: function(t, e) {
                for (var n = 0; t.charAt(n) === e.charAt(n);)
                    if ("" === t.charAt(n++)) return -1;
                return n
            },
            getFormattedValue: function(t, e, n, i, r, a) {
                var o, s = "",
                    l = r.length > 0;
                return 0 === n ? t : (e.forEach(function(e, u) {
                    if (t.length > 0) {
                        var c = t.slice(0, e),
                            d = t.slice(e);
                        o = l ? r[a ? u - 1 : u] || o : i, a ? (u > 0 && (s += o), s += c) : (s += c, c.length === e && u < n - 1 && (s += o)), t = d
                    }
                }), s)
            },
            fixPrefixCursor: function(t, e, n, i) {
                if (t) {
                    var r = t.value,
                        a = n || i[0] || " ";
                    if (t.setSelectionRange && e && !(e.length + a.length < r.length)) {
                        var o = 2 * r.length;
                        setTimeout(function() {
                            t.setSelectionRange(o, o)
                        }, 1)
                    }
                }
            },
            setSelection: function(t, e) {
                if (t === document.activeElement)
                    if (t.createTextRange) {
                        var n = t.createTextRange();
                        n.move("character", e), n.select()
                    } else try {
                        t.setSelectionRange(e, e)
                    } catch (t) {
                        console.warn("The input element type does not support selection")
                    }
            },
            isAndroid: function() {
                return navigator && /android/i.test(navigator.userAgent)
            },
            isAndroidBackspaceKeydown: function(t, e) {
                return !!(this.isAndroid() && t && e) && e === t.slice(0, -1)
            }
        };
        t.exports = n
    }, function(t, e) {
        (function(e) {
            "use strict";
            var n = {
                assign: function(t, n) {
                    return t = t || {}, n = n || {}, t.creditCard = !!n.creditCard, t.creditCardStrictMode = !!n.creditCardStrictMode, t.creditCardType = "", t.onCreditCardTypeChanged = n.onCreditCardTypeChanged || function() {}, t.phone = !!n.phone, t.phoneRegionCode = n.phoneRegionCode || "AU", t.phoneFormatter = {}, t.date = !!n.date, t.datePattern = n.datePattern || ["d", "m", "Y"], t.dateFormatter = {}, t.numeral = !!n.numeral, t.numeralIntegerScale = n.numeralIntegerScale > 0 ? n.numeralIntegerScale : 0, t.numeralDecimalScale = n.numeralDecimalScale >= 0 ? n.numeralDecimalScale : 2, t.numeralDecimalMark = n.numeralDecimalMark || ".", t.numeralThousandsGroupStyle = n.numeralThousandsGroupStyle || "thousand", t.numeralPositiveOnly = !!n.numeralPositiveOnly, t.stripLeadingZeroes = !1 !== n.stripLeadingZeroes, t.numericOnly = t.creditCard || t.date || !!n.numericOnly, t.uppercase = !!n.uppercase, t.lowercase = !!n.lowercase, t.prefix = t.creditCard || t.date ? "" : n.prefix || "", t.noImmediatePrefix = !!n.noImmediatePrefix, t.prefixLength = t.prefix.length, t.rawValueTrimPrefix = !!n.rawValueTrimPrefix, t.copyDelimiter = !!n.copyDelimiter, t.initValue = void 0 !== n.initValue && null !== n.initValue ? n.initValue.toString() : "", t.delimiter = n.delimiter || "" === n.delimiter ? n.delimiter : n.date ? "/" : n.numeral ? "," : (n.phone, " "), t.delimiterLength = t.delimiter.length, t.delimiterLazyShow = !!n.delimiterLazyShow, t.delimiters = n.delimiters || [], t.blocks = n.blocks || [], t.blocksLength = t.blocks.length, t.root = "object" == typeof e && e ? e : window, t.maxLength = 0, t.backspace = !1, t.result = "", t.onValueChanged = n.onValueChanged || function() {}, t
                }
            };
            t.exports = n
        }).call(e, function() {
            return this
        }())
    }])
}, function(t, e, n) {
    "use strict";
    (function(t) {
        n.d(e, "a", function() {
            return a
        });
        var i = n(1),
            r = n(0);
        t(document).ready(function() {
            var e, n, i = t('[data-toggle="tooltip"]'),
                r = i.parent();
            i.tooltip({
                trigger: "manual"
            }), i.on("mouseenter click", function() {
                var i = this;
                clearTimeout(e), n = setTimeout(function() {
                    t(i).tooltip("show")
                }, 150)
            }), r.on("mouseenter", ".tooltip", function() {
                clearTimeout(e)
            }), i.on("mouseleave", function() {
                clearTimeout(n), e = setTimeout(function() {
                    i.tooltip("hide")
                }, 200)
            }), r.on("mouseleave", ".tooltip", function() {
                e = setTimeout(function() {
                    i.tooltip("hide")
                }, 200)
            })
        });
        var a = {
            download: function(e) {
                for (var n = {
                        data: []
                    }, a = 0; a < e.length; a++) {
                    var o = e[a],
                        s = "$" + Object(i.b)(o.annuent),
                        l = "$" + Object(i.b)(o.principal),
                        u = "$" + Object(i.b)(o.interest),
                        c = "$" + Object(i.b)(o.totalInterest),
                        d = "$" + Object(i.b)(o.balance),
                        h = {
                            date: o.month + " " + o.year,
                            annuent: s,
                            principal: l,
                            interest: u,
                            totalInterest: c,
                            balance: d
                        };
                    n.data.push(h)
                }
                n.homeValue = "$" + Object(i.b)(r.a.homeValue), n.downPayment = "$" + Object(i.b)(r.a.downPayment), n.term = "$" + Object(i.b)(r.a.mortgageTerm), n.interestRate = "$" + Object(i.b)(r.a.interestRate), t.ajax({
                    type: "POST",
                    url: "/generate-schedule",
                    data: {
                        data: JSON.stringify(n)
                    },
                    success: function(t) {
                        t && t.id && window.location.replace("/dl?id=" + t.id)
                    },
                    dataType: "json"
                })
            }
        }
    }).call(this, n(3))
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return r
    });
    n(16), n(1);
    var i = function() {};
    i.prototype.init = function() {
        var t = document.getElementById("doughnut").getContext("2d");
        this.chart = new Chart(t, {
            type: "doughnut",
            data: {
                datasets: [{
                    data: [],
                    backgroundColor: ["rgba(247, 96, 129, 1)", "rgba(250, 205, 89, 1)", "rgba(93, 192, 193, 1)", "rgba(248, 159, 63, 1)"]
                }]
            },
            options: {
                cutoutPercentage: 65,
                responsive: !0,
                responsiveAnimationDuration: 0,
                scales: {},
                animation: {
                    animateScale: !0,
                    animateRotate: !0
                },
                tooltips: {
                    backgroundColor: "rgba(255, 255, 255, 1)",
                    cornerRadius: 3,
                    borderWidth: 1,
                    borderColor: "rgba(0, 0, 0, .7)",
                    xPadding: 10,
                    yPadding: 10,
                    bodyFontColor: "#333",
                    callbacks: {
                        label: function(t, e) {
                            var n = t.datasetIndex,
                                i = t.index;
                            return e.labels[i] + " " + e.datasets[n].data[i] + "%"
                        }
                    }
                },
                legend: {
                    display: !1
                }
            }
        })
    };
    var r = new i
}, function(t, e, n) {
    (function(t) {
        ! function(t) {
            "use strict";
            var e = ".dropdown-backdrop",
                n = '[data-toggle="dropdown"]',
                i = function(e) {
                    t(e).on("click.bs.dropdown", this.toggle)
                };

            function r(e) {
                var n = e.attr("data-target");
                n || (n = (n = e.attr("href")) && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
                var i = n && t(n);
                return i && i.length ? i : e.parent()
            }

            function a(i) {
                i && 3 === i.which || (t(e).remove(), t(n).each(function() {
                    var e = t(this),
                        n = r(e),
                        a = {
                            relatedTarget: this
                        };
                    n.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(n[0], i.target) || (n.trigger(i = t.Event("hide.bs.dropdown", a)), i.isDefaultPrevented() || (e.attr("aria-expanded", "false"), n.removeClass("open").trigger(t.Event("hidden.bs.dropdown", a)))))
                }))
            }
            i.VERSION = "3.3.7", i.prototype.toggle = function(e) {
                var n = t(this);
                if (!n.is(".disabled, :disabled")) {
                    var i = r(n),
                        o = i.hasClass("open");
                    if (a(), !o) {
                        "ontouchstart" in document.documentElement && !i.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", a);
                        var s = {
                            relatedTarget: this
                        };
                        if (i.trigger(e = t.Event("show.bs.dropdown", s)), e.isDefaultPrevented()) return;
                        n.trigger("focus").attr("aria-expanded", "true"), i.toggleClass("open").trigger(t.Event("shown.bs.dropdown", s))
                    }
                    return !1
                }
            }, i.prototype.keydown = function(e) {
                if (/(38|40|27|32)/.test(e.which) && !/input|textarea/i.test(e.target.tagName)) {
                    var i = t(this);
                    if (e.preventDefault(), e.stopPropagation(), !i.is(".disabled, :disabled")) {
                        var a = r(i),
                            o = a.hasClass("open");
                        if (!o && 27 != e.which || o && 27 == e.which) return 27 == e.which && a.find(n).trigger("focus"), i.trigger("click");
                        var s = a.find(".dropdown-menu li:not(.disabled):visible a");
                        if (s.length) {
                            var l = s.index(e.target);
                            38 == e.which && l > 0 && l--, 40 == e.which && l < s.length - 1 && l++, ~l || (l = 0), s.eq(l).trigger("focus")
                        }
                    }
                }
            };
            var o = t.fn.dropdown;
            t.fn.dropdown = function(e) {
                return this.each(function() {
                    var n = t(this),
                        r = n.data("bs.dropdown");
                    r || n.data("bs.dropdown", r = new i(this)), "string" == typeof e && r[e].call(n)
                })
            }, t.fn.dropdown.Constructor = i, t.fn.dropdown.noConflict = function() {
                return t.fn.dropdown = o, this
            }, t(document).on("click.bs.dropdown.data-api", a).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
                t.stopPropagation()
            }).on("click.bs.dropdown.data-api", n, i.prototype.toggle).on("keydown.bs.dropdown.data-api", n, i.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", i.prototype.keydown)
        }(t)
    }).call(this, n(3))
}, function(t, e, n) {
    (function(t) {
        ! function(t) {
            "use strict";
            var e = function(t, e) {
                this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
            };
            e.VERSION = "3.3.7", e.TRANSITION_DURATION = 150, e.DEFAULTS = {
                animation: !0,
                placement: "top",
                selector: !1,
                template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: !1,
                container: !1,
                viewport: {
                    selector: "body",
                    padding: 0
                }
            }, e.prototype.init = function(e, n, i) {
                if (this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                        click: !1,
                        hover: !1,
                        focus: !1
                    }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
                for (var r = this.options.trigger.split(" "), a = r.length; a--;) {
                    var o = r[a];
                    if ("click" == o) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
                    else if ("manual" != o) {
                        var s = "hover" == o ? "mouseenter" : "focusin",
                            l = "hover" == o ? "mouseleave" : "focusout";
                        this.$element.on(s + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
                    }
                }
                this.options.selector ? this._options = t.extend({}, this.options, {
                    trigger: "manual",
                    selector: ""
                }) : this.fixTitle()
            }, e.prototype.getDefaults = function() {
                return e.DEFAULTS
            }, e.prototype.getOptions = function(e) {
                return (e = t.extend({}, this.getDefaults(), this.$element.data(), e)).delay && "number" == typeof e.delay && (e.delay = {
                    show: e.delay,
                    hide: e.delay
                }), e
            }, e.prototype.getDelegateOptions = function() {
                var e = {},
                    n = this.getDefaults();
                return this._options && t.each(this._options, function(t, i) {
                    n[t] != i && (e[t] = i)
                }), e
            }, e.prototype.enter = function(e) {
                var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
                if (n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusin" == e.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState) n.hoverState = "in";
                else {
                    if (clearTimeout(n.timeout), n.hoverState = "in", !n.options.delay || !n.options.delay.show) return n.show();
                    n.timeout = setTimeout(function() {
                        "in" == n.hoverState && n.show()
                    }, n.options.delay.show)
                }
            }, e.prototype.isInStateTrue = function() {
                for (var t in this.inState)
                    if (this.inState[t]) return !0;
                return !1
            }, e.prototype.leave = function(e) {
                var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
                if (n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusout" == e.type ? "focus" : "hover"] = !1), !n.isInStateTrue()) {
                    if (clearTimeout(n.timeout), n.hoverState = "out", !n.options.delay || !n.options.delay.hide) return n.hide();
                    n.timeout = setTimeout(function() {
                        "out" == n.hoverState && n.hide()
                    }, n.options.delay.hide)
                }
            }, e.prototype.show = function() {
                var n = t.Event("show.bs." + this.type);
                if (this.hasContent() && this.enabled) {
                    this.$element.trigger(n);
                    var i = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                    if (n.isDefaultPrevented() || !i) return;
                    var r = this,
                        a = this.tip(),
                        o = this.getUID(this.type);
                    this.setContent(), a.attr("id", o), this.$element.attr("aria-describedby", o), this.options.animation && a.addClass("fade");
                    var s = "function" == typeof this.options.placement ? this.options.placement.call(this, a[0], this.$element[0]) : this.options.placement,
                        l = /\s?auto?\s?/i,
                        u = l.test(s);
                    u && (s = s.replace(l, "") || "top"), a.detach().css({
                        top: 0,
                        left: 0,
                        display: "block"
                    }).addClass(s).data("bs." + this.type, this), this.options.container ? a.appendTo(this.options.container) : a.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
                    var c = this.getPosition(),
                        d = a[0].offsetWidth,
                        h = a[0].offsetHeight;
                    if (u) {
                        var f = s,
                            p = this.getPosition(this.$viewport);
                        s = "bottom" == s && c.bottom + h > p.bottom ? "top" : "top" == s && c.top - h < p.top ? "bottom" : "right" == s && c.right + d > p.width ? "left" : "left" == s && c.left - d < p.left ? "right" : s, a.removeClass(f).addClass(s)
                    }
                    var g = this.getCalculatedOffset(s, c, d, h);
                    this.applyPlacement(g, s);
                    var m = function() {
                        var t = r.hoverState;
                        r.$element.trigger("shown.bs." + r.type), r.hoverState = null, "out" == t && r.leave(r)
                    };
                    t.support.transition && this.$tip.hasClass("fade") ? a.one("bsTransitionEnd", m).emulateTransitionEnd(e.TRANSITION_DURATION) : m()
                }
            }, e.prototype.applyPlacement = function(e, n) {
                var i = this.tip(),
                    r = i[0].offsetWidth,
                    a = i[0].offsetHeight,
                    o = parseInt(i.css("margin-top"), 10),
                    s = parseInt(i.css("margin-left"), 10);
                isNaN(o) && (o = 0), isNaN(s) && (s = 0), e.top += o, e.left += s, t.offset.setOffset(i[0], t.extend({
                    using: function(t) {
                        i.css({
                            top: Math.round(t.top),
                            left: Math.round(t.left)
                        })
                    }
                }, e), 0), i.addClass("in");
                var l = i[0].offsetWidth,
                    u = i[0].offsetHeight;
                "top" == n && u != a && (e.top = e.top + a - u);
                var c = this.getViewportAdjustedDelta(n, e, l, u);
                c.left ? e.left += c.left : e.top += c.top;
                var d = /top|bottom/.test(n),
                    h = d ? 2 * c.left - r + l : 2 * c.top - a + u,
                    f = d ? "offsetWidth" : "offsetHeight";
                i.offset(e), this.replaceArrow(h, i[0][f], d)
            }, e.prototype.replaceArrow = function(t, e, n) {
                this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
            }, e.prototype.setContent = function() {
                var t = this.tip(),
                    e = this.getTitle();
                t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
            }, e.prototype.hide = function(n) {
                var i = this,
                    r = t(this.$tip),
                    a = t.Event("hide.bs." + this.type);

                function o() {
                    "in" != i.hoverState && r.detach(), i.$element && i.$element.removeAttr("aria-describedby").trigger("hidden.bs." + i.type), n && n()
                }
                if (this.$element.trigger(a), !a.isDefaultPrevented()) return r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", o).emulateTransitionEnd(e.TRANSITION_DURATION) : o(), this.hoverState = null, this
            }, e.prototype.fixTitle = function() {
                var t = this.$element;
                (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
            }, e.prototype.hasContent = function() {
                return this.getTitle()
            }, e.prototype.getPosition = function(e) {
                var n = (e = e || this.$element)[0],
                    i = "BODY" == n.tagName,
                    r = n.getBoundingClientRect();
                null == r.width && (r = t.extend({}, r, {
                    width: r.right - r.left,
                    height: r.bottom - r.top
                }));
                var a = window.SVGElement && n instanceof window.SVGElement,
                    o = i ? {
                        top: 0,
                        left: 0
                    } : a ? null : e.offset(),
                    s = {
                        scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
                    },
                    l = i ? {
                        width: t(window).width(),
                        height: t(window).height()
                    } : null;
                return t.extend({}, r, s, l, o)
            }, e.prototype.getCalculatedOffset = function(t, e, n, i) {
                return "bottom" == t ? {
                    top: e.top + e.height,
                    left: e.left + e.width / 2 - n / 2
                } : "top" == t ? {
                    top: e.top - i,
                    left: e.left + e.width / 2 - n / 2
                } : "left" == t ? {
                    top: e.top + e.height / 2 - i / 2,
                    left: e.left - n
                } : {
                    top: e.top + e.height / 2 - i / 2,
                    left: e.left + e.width
                }
            }, e.prototype.getViewportAdjustedDelta = function(t, e, n, i) {
                var r = {
                    top: 0,
                    left: 0
                };
                if (!this.$viewport) return r;
                var a = this.options.viewport && this.options.viewport.padding || 0,
                    o = this.getPosition(this.$viewport);
                if (/right|left/.test(t)) {
                    var s = e.top - a - o.scroll,
                        l = e.top + a - o.scroll + i;
                    s < o.top ? r.top = o.top - s : l > o.top + o.height && (r.top = o.top + o.height - l)
                } else {
                    var u = e.left - a,
                        c = e.left + a + n;
                    u < o.left ? r.left = o.left - u : c > o.right && (r.left = o.left + o.width - c)
                }
                return r
            }, e.prototype.getTitle = function() {
                var t = this.$element,
                    e = this.options;
                return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
            }, e.prototype.getUID = function(t) {
                do {
                    t += ~~(1e6 * Math.random())
                } while (document.getElementById(t));
                return t
            }, e.prototype.tip = function() {
                if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
                return this.$tip
            }, e.prototype.arrow = function() {
                return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
            }, e.prototype.enable = function() {
                this.enabled = !0
            }, e.prototype.disable = function() {
                this.enabled = !1
            }, e.prototype.toggleEnabled = function() {
                this.enabled = !this.enabled
            }, e.prototype.toggle = function(e) {
                var n = this;
                e && ((n = t(e.currentTarget).data("bs." + this.type)) || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), e ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
            }, e.prototype.destroy = function() {
                var t = this;
                clearTimeout(this.timeout), this.hide(function() {
                    t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null
                })
            };
            var n = t.fn.tooltip;
            t.fn.tooltip = function(n) {
                return this.each(function() {
                    var i = t(this),
                        r = i.data("bs.tooltip"),
                        a = "object" == typeof n && n;
                    !r && /destroy|hide/.test(n) || (r || i.data("bs.tooltip", r = new e(this, a)), "string" == typeof n && r[n]())
                })
            }, t.fn.tooltip.Constructor = e, t.fn.tooltip.noConflict = function() {
                return t.fn.tooltip = n, this
            }
        }(t)
    }).call(this, n(3))
}, function(t, e, n) {
    (function(t) {
        /** @preserve jQuery animateNumber plugin v0.0.14
         * (c) 2013, Alexandr Borisov.
         * https://github.com/aishek/jquery-animateNumber
         */
        ! function(t) {
            var e = function(t) {
                    return t.split("").reverse().join("")
                },
                n = {
                    numberStep: function(e, n) {
                        var i = Math.floor(e);
                        t(n.elem).text(i)
                    }
                },
                i = function(t) {
                    var e = t.elem;
                    if (e.nodeType && e.parentNode) {
                        var i = e._animateNumberSetter;
                        i || (i = n.numberStep), i(t.now, t)
                    }
                };
            t.Tween && t.Tween.propHooks ? t.Tween.propHooks.number = {
                set: i
            } : t.fx.step.number = i;
            t.animateNumber = {
                numberStepFactories: {
                    append: function(e) {
                        return function(n, i) {
                            var r = Math.floor(n);
                            t(i.elem).prop("number", n).text(r + e)
                        }
                    },
                    separator: function(n, i, r) {
                        return n = n || " ", i = i || 3, r = r || "",
                            function(a, o) {
                                var s = a < 0,
                                    l = Math.floor((s ? -1 : 1) * a).toString(),
                                    u = t(o.elem);
                                l.length > i && (l = function(t) {
                                    var n = t.length - 1,
                                        i = e(t[n]);
                                    return t[n] = e(parseInt(i, 10).toString()), t
                                }(function(t, e) {
                                    for (var n, i, r, a = t.split("").reverse(), o = [], s = 0, l = Math.ceil(t.length / e); s < l; s++) {
                                        for (n = "", r = 0; r < e && (i = s * e + r) !== t.length; r++) n += a[i];
                                        o.push(n)
                                    }
                                    return o
                                }(l, i)).join(n), l = e(l));
                                u.prop("number", a).text((s ? "-" : "") + l + r)
                            }
                    }
                }
            }, t.fn.animateNumber = function() {
                for (var e = arguments[0], i = t.extend({}, n, e), r = t(this), a = [i], o = 1, s = arguments.length; o < s; o++) a.push(arguments[o]);
                if (e.numberStep) {
                    var l = this.each(function() {
                            this._animateNumberSetter = e.numberStep
                        }),
                        u = i.complete;
                    i.complete = function() {
                        l.each(function() {
                            delete this._animateNumberSetter
                        }), u && u.apply(this, arguments)
                    }
                }
                return r.animate.apply(r, a)
            }
        }(t)
    }).call(this, n(3))
}, function(t, e, n) {
    var i, r, a;
    /*!
     * Datepicker for Bootstrap v1.8.0 (https://github.com/uxsolutions/bootstrap-datepicker)
     *
     * Licensed under the Apache License v2.0 (http://www.apache.org/licenses/LICENSE-2.0)
     */
    r = [n(3)], void 0 === (a = "function" == typeof(i = function(t, e) {
        function n() {
            return new Date(Date.UTC.apply(Date, arguments))
        }

        function i() {
            var t = new Date;
            return n(t.getFullYear(), t.getMonth(), t.getDate())
        }

        function r(t, e) {
            return t.getUTCFullYear() === e.getUTCFullYear() && t.getUTCMonth() === e.getUTCMonth() && t.getUTCDate() === e.getUTCDate()
        }

        function a(n, i) {
            return function() {
                return i !== e && t.fn.datepicker.deprecated(i), this[n].apply(this, arguments)
            }
        }

        function o(e) {
            var n = {};
            if (p[e] || (e = e.split("-")[0], p[e])) {
                var i = p[e];
                return t.each(f, function(t, e) {
                    e in i && (n[e] = i[e])
                }), n
            }
        }
        var s = function() {
                var e = {
                    get: function(t) {
                        return this.slice(t)[0]
                    },
                    contains: function(t) {
                        for (var e = t && t.valueOf(), n = 0, i = this.length; n < i; n++)
                            if (0 <= this[n].valueOf() - e && this[n].valueOf() - e < 864e5) return n;
                        return -1
                    },
                    remove: function(t) {
                        this.splice(t, 1)
                    },
                    replace: function(e) {
                        e && (t.isArray(e) || (e = [e]), this.clear(), this.push.apply(this, e))
                    },
                    clear: function() {
                        this.length = 0
                    },
                    copy: function() {
                        var t = new s;
                        return t.replace(this), t
                    }
                };
                return function() {
                    var n = [];
                    return n.push.apply(n, arguments), t.extend(n, e), n
                }
            }(),
            l = function(e, n) {
                t.data(e, "datepicker", this), this._process_options(n), this.dates = new s, this.viewDate = this.o.defaultViewDate, this.focusDate = null, this.element = t(e), this.isInput = this.element.is("input"), this.inputField = this.isInput ? this.element : this.element.find("input"), this.component = !!this.element.hasClass("date") && this.element.find(".add-on, .input-group-addon, .btn"), this.component && 0 === this.component.length && (this.component = !1), this.isInline = !this.component && this.element.is("div"), this.picker = t(g.template), this._check_template(this.o.templates.leftArrow) && this.picker.find(".prev").html(this.o.templates.leftArrow), this._check_template(this.o.templates.rightArrow) && this.picker.find(".next").html(this.o.templates.rightArrow), this._buildEvents(), this._attachEvents(), this.isInline ? this.picker.addClass("datepicker-inline").appendTo(this.element) : this.picker.addClass("datepicker-dropdown dropdown-menu"), this.o.rtl && this.picker.addClass("datepicker-rtl"), this.o.calendarWeeks && this.picker.find(".datepicker-days .datepicker-switch, thead .datepicker-title, tfoot .today, tfoot .clear").attr("colspan", function(t, e) {
                    return Number(e) + 1
                }), this._process_options({
                    startDate: this._o.startDate,
                    endDate: this._o.endDate,
                    daysOfWeekDisabled: this.o.daysOfWeekDisabled,
                    daysOfWeekHighlighted: this.o.daysOfWeekHighlighted,
                    datesDisabled: this.o.datesDisabled
                }), this._allow_update = !1, this.setViewMode(this.o.startView), this._allow_update = !0, this.fillDow(), this.fillMonths(), this.update(), this.isInline && this.show()
            };
        l.prototype = {
            constructor: l,
            _resolveViewName: function(e) {
                return t.each(g.viewModes, function(n, i) {
                    if (e === n || -1 !== t.inArray(e, i.names)) return e = n, !1
                }), e
            },
            _resolveDaysOfWeek: function(e) {
                return t.isArray(e) || (e = e.split(/[,\s]*/)), t.map(e, Number)
            },
            _check_template: function(n) {
                try {
                    if (n === e || "" === n) return !1;
                    if ((n.match(/[<>]/g) || []).length <= 0) return !0;
                    var i = t(n);
                    return i.length > 0
                } catch (t) {
                    return !1
                }
            },
            _process_options: function(e) {
                this._o = t.extend({}, this._o, e);
                var r = this.o = t.extend({}, this._o),
                    a = r.language;
                p[a] || (a = a.split("-")[0], p[a] || (a = h.language)), r.language = a, r.startView = this._resolveViewName(r.startView), r.minViewMode = this._resolveViewName(r.minViewMode), r.maxViewMode = this._resolveViewName(r.maxViewMode), r.startView = Math.max(this.o.minViewMode, Math.min(this.o.maxViewMode, r.startView)), !0 !== r.multidate && (r.multidate = Number(r.multidate) || !1, !1 !== r.multidate && (r.multidate = Math.max(0, r.multidate))), r.multidateSeparator = String(r.multidateSeparator), r.weekStart %= 7, r.weekEnd = (r.weekStart + 6) % 7;
                var o = g.parseFormat(r.format);
                r.startDate !== -1 / 0 && (r.startDate ? r.startDate instanceof Date ? r.startDate = this._local_to_utc(this._zero_time(r.startDate)) : r.startDate = g.parseDate(r.startDate, o, r.language, r.assumeNearbyYear) : r.startDate = -1 / 0), r.endDate !== 1 / 0 && (r.endDate ? r.endDate instanceof Date ? r.endDate = this._local_to_utc(this._zero_time(r.endDate)) : r.endDate = g.parseDate(r.endDate, o, r.language, r.assumeNearbyYear) : r.endDate = 1 / 0), r.daysOfWeekDisabled = this._resolveDaysOfWeek(r.daysOfWeekDisabled || []), r.daysOfWeekHighlighted = this._resolveDaysOfWeek(r.daysOfWeekHighlighted || []), r.datesDisabled = r.datesDisabled || [], t.isArray(r.datesDisabled) || (r.datesDisabled = r.datesDisabled.split(",")), r.datesDisabled = t.map(r.datesDisabled, function(t) {
                    return g.parseDate(t, o, r.language, r.assumeNearbyYear)
                });
                var s = String(r.orientation).toLowerCase().split(/\s+/g),
                    l = r.orientation.toLowerCase();
                if (s = t.grep(s, function(t) {
                        return /^auto|left|right|top|bottom$/.test(t)
                    }), r.orientation = {
                        x: "auto",
                        y: "auto"
                    }, l && "auto" !== l)
                    if (1 === s.length) switch (s[0]) {
                        case "top":
                        case "bottom":
                            r.orientation.y = s[0];
                            break;
                        case "left":
                        case "right":
                            r.orientation.x = s[0]
                    } else l = t.grep(s, function(t) {
                        return /^left|right$/.test(t)
                    }), r.orientation.x = l[0] || "auto", l = t.grep(s, function(t) {
                        return /^top|bottom$/.test(t)
                    }), r.orientation.y = l[0] || "auto";
                if (r.defaultViewDate instanceof Date || "string" == typeof r.defaultViewDate) r.defaultViewDate = g.parseDate(r.defaultViewDate, o, r.language, r.assumeNearbyYear);
                else if (r.defaultViewDate) {
                    var u = r.defaultViewDate.year || (new Date).getFullYear(),
                        c = r.defaultViewDate.month || 0,
                        d = r.defaultViewDate.day || 1;
                    r.defaultViewDate = n(u, c, d)
                } else r.defaultViewDate = i()
            },
            _events: [],
            _secondaryEvents: [],
            _applyEvents: function(t) {
                for (var n, i, r, a = 0; a < t.length; a++) n = t[a][0], 2 === t[a].length ? (i = e, r = t[a][1]) : 3 === t[a].length && (i = t[a][1], r = t[a][2]), n.on(r, i)
            },
            _unapplyEvents: function(t) {
                for (var n, i, r, a = 0; a < t.length; a++) n = t[a][0], 2 === t[a].length ? (r = e, i = t[a][1]) : 3 === t[a].length && (r = t[a][1], i = t[a][2]), n.off(i, r)
            },
            _buildEvents: function() {
                var e = {
                    keyup: t.proxy(function(e) {
                        -1 === t.inArray(e.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) && this.update()
                    }, this),
                    keydown: t.proxy(this.keydown, this),
                    paste: t.proxy(this.paste, this)
                };
                !0 === this.o.showOnFocus && (e.focus = t.proxy(this.show, this)), this.isInput ? this._events = [
                    [this.element, e]
                ] : this.component && this.inputField.length ? this._events = [
                    [this.inputField, e],
                    [this.component, {
                        click: t.proxy(this.show, this)
                    }]
                ] : this._events = [
                    [this.element, {
                        click: t.proxy(this.show, this),
                        keydown: t.proxy(this.keydown, this)
                    }]
                ], this._events.push([this.element, "*", {
                    blur: t.proxy(function(t) {
                        this._focused_from = t.target
                    }, this)
                }], [this.element, {
                    blur: t.proxy(function(t) {
                        this._focused_from = t.target
                    }, this)
                }]), this.o.immediateUpdates && this._events.push([this.element, {
                    "changeYear changeMonth": t.proxy(function(t) {
                        this.update(t.date)
                    }, this)
                }]), this._secondaryEvents = [
                    [this.picker, {
                        click: t.proxy(this.click, this)
                    }],
                    [this.picker, ".prev, .next", {
                        click: t.proxy(this.navArrowsClick, this)
                    }],
                    [this.picker, ".day:not(.disabled)", {
                        click: t.proxy(this.dayCellClick, this)
                    }],
                    [t(window), {
                        resize: t.proxy(this.place, this)
                    }],
                    [t(document), {
                        "mousedown touchstart": t.proxy(function(t) {
                            this.element.is(t.target) || this.element.find(t.target).length || this.picker.is(t.target) || this.picker.find(t.target).length || this.isInline || this.hide()
                        }, this)
                    }]
                ]
            },
            _attachEvents: function() {
                this._detachEvents(), this._applyEvents(this._events)
            },
            _detachEvents: function() {
                this._unapplyEvents(this._events)
            },
            _attachSecondaryEvents: function() {
                this._detachSecondaryEvents(), this._applyEvents(this._secondaryEvents)
            },
            _detachSecondaryEvents: function() {
                this._unapplyEvents(this._secondaryEvents)
            },
            _trigger: function(e, n) {
                var i = n || this.dates.get(-1),
                    r = this._utc_to_local(i);
                this.element.trigger({
                    type: e,
                    date: r,
                    viewMode: this.viewMode,
                    dates: t.map(this.dates, this._utc_to_local),
                    format: t.proxy(function(t, e) {
                        0 === arguments.length ? (t = this.dates.length - 1, e = this.o.format) : "string" == typeof t && (e = t, t = this.dates.length - 1), e = e || this.o.format;
                        var n = this.dates.get(t);
                        return g.formatDate(n, e, this.o.language)
                    }, this)
                })
            },
            show: function() {
                if (!(this.inputField.prop("disabled") || this.inputField.prop("readonly") && !1 === this.o.enableOnReadonly)) return this.isInline || this.picker.appendTo(this.o.container), this.place(), this.picker.show(), this._attachSecondaryEvents(), this._trigger("show"), (window.navigator.msMaxTouchPoints || "ontouchstart" in document) && this.o.disableTouchKeyboard && t(this.element).blur(), this
            },
            hide: function() {
                return this.isInline || !this.picker.is(":visible") ? this : (this.focusDate = null, this.picker.hide().detach(), this._detachSecondaryEvents(), this.setViewMode(this.o.startView), this.o.forceParse && this.inputField.val() && this.setValue(), this._trigger("hide"), this)
            },
            destroy: function() {
                return this.hide(), this._detachEvents(), this._detachSecondaryEvents(), this.picker.remove(), delete this.element.data().datepicker, this.isInput || delete this.element.data().date, this
            },
            paste: function(e) {
                var n;
                if (e.originalEvent.clipboardData && e.originalEvent.clipboardData.types && -1 !== t.inArray("text/plain", e.originalEvent.clipboardData.types)) n = e.originalEvent.clipboardData.getData("text/plain");
                else {
                    if (!window.clipboardData) return;
                    n = window.clipboardData.getData("Text")
                }
                this.setDate(n), this.update(), e.preventDefault()
            },
            _utc_to_local: function(t) {
                if (!t) return t;
                var e = new Date(t.getTime() + 6e4 * t.getTimezoneOffset());
                return e.getTimezoneOffset() !== t.getTimezoneOffset() && (e = new Date(t.getTime() + 6e4 * e.getTimezoneOffset())), e
            },
            _local_to_utc: function(t) {
                return t && new Date(t.getTime() - 6e4 * t.getTimezoneOffset())
            },
            _zero_time: function(t) {
                return t && new Date(t.getFullYear(), t.getMonth(), t.getDate())
            },
            _zero_utc_time: function(t) {
                return t && n(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate())
            },
            getDates: function() {
                return t.map(this.dates, this._utc_to_local)
            },
            getUTCDates: function() {
                return t.map(this.dates, function(t) {
                    return new Date(t)
                })
            },
            getDate: function() {
                return this._utc_to_local(this.getUTCDate())
            },
            getUTCDate: function() {
                var t = this.dates.get(-1);
                return t !== e ? new Date(t) : null
            },
            clearDates: function() {
                this.inputField.val(""), this.update(), this._trigger("changeDate"), this.o.autoclose && this.hide()
            },
            setDates: function() {
                var e = t.isArray(arguments[0]) ? arguments[0] : arguments;
                return this.update.apply(this, e), this._trigger("changeDate"), this.setValue(), this
            },
            setUTCDates: function() {
                var e = t.isArray(arguments[0]) ? arguments[0] : arguments;
                return this.setDates.apply(this, t.map(e, this._utc_to_local)), this
            },
            setDate: a("setDates"),
            setUTCDate: a("setUTCDates"),
            remove: a("destroy", "Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead"),
            setValue: function() {
                var t = this.getFormattedDate();
                return this.inputField.val(t), this
            },
            getFormattedDate: function(n) {
                n === e && (n = this.o.format);
                var i = this.o.language;
                return t.map(this.dates, function(t) {
                    return g.formatDate(t, n, i)
                }).join(this.o.multidateSeparator)
            },
            getStartDate: function() {
                return this.o.startDate
            },
            setStartDate: function(t) {
                return this._process_options({
                    startDate: t
                }), this.update(), this.updateNavArrows(), this
            },
            getEndDate: function() {
                return this.o.endDate
            },
            setEndDate: function(t) {
                return this._process_options({
                    endDate: t
                }), this.update(), this.updateNavArrows(), this
            },
            setDaysOfWeekDisabled: function(t) {
                return this._process_options({
                    daysOfWeekDisabled: t
                }), this.update(), this
            },
            setDaysOfWeekHighlighted: function(t) {
                return this._process_options({
                    daysOfWeekHighlighted: t
                }), this.update(), this
            },
            setDatesDisabled: function(t) {
                return this._process_options({
                    datesDisabled: t
                }), this.update(), this
            },
            place: function() {
                if (this.isInline) return this;
                var e = this.picker.outerWidth(),
                    n = this.picker.outerHeight(),
                    i = t(this.o.container),
                    r = i.width(),
                    a = "body" === this.o.container ? t(document).scrollTop() : i.scrollTop(),
                    o = i.offset(),
                    s = [0];
                this.element.parents().each(function() {
                    var e = t(this).css("z-index");
                    "auto" !== e && 0 !== Number(e) && s.push(Number(e))
                });
                var l = Math.max.apply(Math, s) + this.o.zIndexOffset,
                    u = this.component ? this.component.parent().offset() : this.element.offset(),
                    c = this.component ? this.component.outerHeight(!0) : this.element.outerHeight(!1),
                    d = this.component ? this.component.outerWidth(!0) : this.element.outerWidth(!1),
                    h = u.left - o.left,
                    f = u.top - o.top;
                "body" !== this.o.container && (f += a), this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"), "auto" !== this.o.orientation.x ? (this.picker.addClass("datepicker-orient-" + this.o.orientation.x), "right" === this.o.orientation.x && (h -= e - d)) : u.left < 0 ? (this.picker.addClass("datepicker-orient-left"), h -= u.left - 10) : h + e > r ? (this.picker.addClass("datepicker-orient-right"), h += d - e) : this.o.rtl ? this.picker.addClass("datepicker-orient-right") : this.picker.addClass("datepicker-orient-left");
                var p = this.o.orientation.y;
                if ("auto" === p && (p = -a + f - n < 0 ? "bottom" : "top"), this.picker.addClass("datepicker-orient-" + p), "top" === p ? f -= n + parseInt(this.picker.css("padding-top")) : f += c, this.o.rtl) {
                    var g = r - (h + d);
                    this.picker.css({
                        top: f,
                        right: g,
                        zIndex: l
                    })
                } else this.picker.css({
                    top: f,
                    left: h,
                    zIndex: l
                });
                return this
            },
            _allow_update: !0,
            update: function() {
                if (!this._allow_update) return this;
                var e = this.dates.copy(),
                    n = [],
                    i = !1;
                return arguments.length ? (t.each(arguments, t.proxy(function(t, e) {
                    e instanceof Date && (e = this._local_to_utc(e)), n.push(e)
                }, this)), i = !0) : (n = (n = this.isInput ? this.element.val() : this.element.data("date") || this.inputField.val()) && this.o.multidate ? n.split(this.o.multidateSeparator) : [n], delete this.element.data().date), n = t.map(n, t.proxy(function(t) {
                    return g.parseDate(t, this.o.format, this.o.language, this.o.assumeNearbyYear)
                }, this)), n = t.grep(n, t.proxy(function(t) {
                    return !this.dateWithinRange(t) || !t
                }, this), !0), this.dates.replace(n), this.o.updateViewDate && (this.dates.length ? this.viewDate = new Date(this.dates.get(-1)) : this.viewDate < this.o.startDate ? this.viewDate = new Date(this.o.startDate) : this.viewDate > this.o.endDate ? this.viewDate = new Date(this.o.endDate) : this.viewDate = this.o.defaultViewDate), i ? (this.setValue(), this.element.change()) : this.dates.length && String(e) !== String(this.dates) && i && (this._trigger("changeDate"), this.element.change()), !this.dates.length && e.length && (this._trigger("clearDate"), this.element.change()), this.fill(), this
            },
            fillDow: function() {
                if (this.o.showWeekDays) {
                    var e = this.o.weekStart,
                        n = "<tr>";
                    for (this.o.calendarWeeks && (n += '<th class="cw">&#160;</th>'); e < this.o.weekStart + 7;) n += '<th class="dow', -1 !== t.inArray(e, this.o.daysOfWeekDisabled) && (n += " disabled"), n += '">' + p[this.o.language].daysMin[e++ % 7] + "</th>";
                    n += "</tr>", this.picker.find(".datepicker-days thead").append(n)
                }
            },
            fillMonths: function() {
                for (var t, e = this._utc_to_local(this.viewDate), n = "", i = 0; i < 12; i++) t = e && e.getMonth() === i ? " focused" : "", n += '<span class="month' + t + '">' + p[this.o.language].monthsShort[i] + "</span>";
                this.picker.find(".datepicker-months td").html(n)
            },
            setRange: function(e) {
                e && e.length ? this.range = t.map(e, function(t) {
                    return t.valueOf()
                }) : delete this.range, this.fill()
            },
            getClassNames: function(e) {
                var n = [],
                    a = this.viewDate.getUTCFullYear(),
                    o = this.viewDate.getUTCMonth(),
                    s = i();
                return e.getUTCFullYear() < a || e.getUTCFullYear() === a && e.getUTCMonth() < o ? n.push("old") : (e.getUTCFullYear() > a || e.getUTCFullYear() === a && e.getUTCMonth() > o) && n.push("new"), this.focusDate && e.valueOf() === this.focusDate.valueOf() && n.push("focused"), this.o.todayHighlight && r(e, s) && n.push("today"), -1 !== this.dates.contains(e) && n.push("active"), this.dateWithinRange(e) || n.push("disabled"), this.dateIsDisabled(e) && n.push("disabled", "disabled-date"), -1 !== t.inArray(e.getUTCDay(), this.o.daysOfWeekHighlighted) && n.push("highlighted"), this.range && (e > this.range[0] && e < this.range[this.range.length - 1] && n.push("range"), -1 !== t.inArray(e.valueOf(), this.range) && n.push("selected"), e.valueOf() === this.range[0] && n.push("range-start"), e.valueOf() === this.range[this.range.length - 1] && n.push("range-end")), n
            },
            _fill_yearsView: function(n, i, r, a, o, s, l) {
                for (var u, c, d, h = "", f = r / 10, p = this.picker.find(n), g = Math.floor(a / r) * r, m = g + 9 * f, v = Math.floor(this.viewDate.getFullYear() / f) * f, y = t.map(this.dates, function(t) {
                        return Math.floor(t.getUTCFullYear() / f) * f
                    }), b = g - f; b <= m + f; b += f) u = [i], c = null, b === g - f ? u.push("old") : b === m + f && u.push("new"), -1 !== t.inArray(b, y) && u.push("active"), (b < o || b > s) && u.push("disabled"), b === v && u.push("focused"), l !== t.noop && ((d = l(new Date(b, 0, 1))) === e ? d = {} : "boolean" == typeof d ? d = {
                    enabled: d
                } : "string" == typeof d && (d = {
                    classes: d
                }), !1 === d.enabled && u.push("disabled"), d.classes && (u = u.concat(d.classes.split(/\s+/))), d.tooltip && (c = d.tooltip)), h += '<span class="' + u.join(" ") + '"' + (c ? ' title="' + c + '"' : "") + ">" + b + "</span>";
                p.find(".datepicker-switch").text(g + "-" + m), p.find("td").html(h)
            },
            fill: function() {
                var i, r, a = new Date(this.viewDate),
                    o = a.getUTCFullYear(),
                    s = a.getUTCMonth(),
                    l = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCFullYear() : -1 / 0,
                    u = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCMonth() : -1 / 0,
                    c = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0,
                    d = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0,
                    h = p[this.o.language].today || p.en.today || "",
                    f = p[this.o.language].clear || p.en.clear || "",
                    m = p[this.o.language].titleFormat || p.en.titleFormat;
                if (!isNaN(o) && !isNaN(s)) {
                    this.picker.find(".datepicker-days .datepicker-switch").text(g.formatDate(a, m, this.o.language)), this.picker.find("tfoot .today").text(h).css("display", !0 === this.o.todayBtn || "linked" === this.o.todayBtn ? "table-cell" : "none"), this.picker.find("tfoot .clear").text(f).css("display", !0 === this.o.clearBtn ? "table-cell" : "none"), this.picker.find("thead .datepicker-title").text(this.o.title).css("display", "string" == typeof this.o.title && "" !== this.o.title ? "table-cell" : "none"), this.updateNavArrows(), this.fillMonths();
                    var v = n(o, s, 0),
                        y = v.getUTCDate();
                    v.setUTCDate(y - (v.getUTCDay() - this.o.weekStart + 7) % 7);
                    var b = new Date(v);
                    v.getUTCFullYear() < 100 && b.setUTCFullYear(v.getUTCFullYear()), b.setUTCDate(b.getUTCDate() + 42), b = b.valueOf();
                    for (var x, w, k = []; v.valueOf() < b;) {
                        if ((x = v.getUTCDay()) === this.o.weekStart && (k.push("<tr>"), this.o.calendarWeeks)) {
                            var C = new Date(+v + (this.o.weekStart - x - 7) % 7 * 864e5),
                                D = new Date(Number(C) + (11 - C.getUTCDay()) % 7 * 864e5),
                                S = new Date(Number(S = n(D.getUTCFullYear(), 0, 1)) + (11 - S.getUTCDay()) % 7 * 864e5),
                                T = (D - S) / 864e5 / 7 + 1;
                            k.push('<td class="cw">' + T + "</td>")
                        }(w = this.getClassNames(v)).push("day");
                        var M = v.getUTCDate();
                        this.o.beforeShowDay !== t.noop && ((r = this.o.beforeShowDay(this._utc_to_local(v))) === e ? r = {} : "boolean" == typeof r ? r = {
                            enabled: r
                        } : "string" == typeof r && (r = {
                            classes: r
                        }), !1 === r.enabled && w.push("disabled"), r.classes && (w = w.concat(r.classes.split(/\s+/))), r.tooltip && (i = r.tooltip), r.content && (M = r.content)), w = t.isFunction(t.uniqueSort) ? t.uniqueSort(w) : t.unique(w), k.push('<td class="' + w.join(" ") + '"' + (i ? ' title="' + i + '"' : "") + ' data-date="' + v.getTime().toString() + '">' + M + "</td>"), i = null, x === this.o.weekEnd && k.push("</tr>"), v.setUTCDate(v.getUTCDate() + 1)
                    }
                    this.picker.find(".datepicker-days tbody").html(k.join(""));
                    var _ = p[this.o.language].monthsTitle || p.en.monthsTitle || "Months",
                        A = this.picker.find(".datepicker-months").find(".datepicker-switch").text(this.o.maxViewMode < 2 ? _ : o).end().find("tbody span").removeClass("active");
                    if (t.each(this.dates, function(t, e) {
                            e.getUTCFullYear() === o && A.eq(e.getUTCMonth()).addClass("active")
                        }), (o < l || o > c) && A.addClass("disabled"), o === l && A.slice(0, u).addClass("disabled"), o === c && A.slice(d + 1).addClass("disabled"), this.o.beforeShowMonth !== t.noop) {
                        var P = this;
                        t.each(A, function(n, i) {
                            var r = new Date(o, n, 1),
                                a = P.o.beforeShowMonth(r);
                            a === e ? a = {} : "boolean" == typeof a ? a = {
                                enabled: a
                            } : "string" == typeof a && (a = {
                                classes: a
                            }), !1 !== a.enabled || t(i).hasClass("disabled") || t(i).addClass("disabled"), a.classes && t(i).addClass(a.classes), a.tooltip && t(i).prop("title", a.tooltip)
                        })
                    }
                    this._fill_yearsView(".datepicker-years", "year", 10, o, l, c, this.o.beforeShowYear), this._fill_yearsView(".datepicker-decades", "decade", 100, o, l, c, this.o.beforeShowDecade), this._fill_yearsView(".datepicker-centuries", "century", 1e3, o, l, c, this.o.beforeShowCentury)
                }
            },
            updateNavArrows: function() {
                if (this._allow_update) {
                    var t, e, n = new Date(this.viewDate),
                        i = n.getUTCFullYear(),
                        r = n.getUTCMonth(),
                        a = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCFullYear() : -1 / 0,
                        o = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCMonth() : -1 / 0,
                        s = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0,
                        l = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0,
                        u = 1;
                    switch (this.viewMode) {
                        case 4:
                            u *= 10;
                        case 3:
                            u *= 10;
                        case 2:
                            u *= 10;
                        case 1:
                            t = Math.floor(i / u) * u < a, e = Math.floor(i / u) * u + u > s;
                            break;
                        case 0:
                            t = i <= a && r < o, e = i >= s && r > l
                    }
                    this.picker.find(".prev").toggleClass("disabled", t), this.picker.find(".next").toggleClass("disabled", e)
                }
            },
            click: function(e) {
                var r, a, o, s;
                e.preventDefault(), e.stopPropagation(), (r = t(e.target)).hasClass("datepicker-switch") && this.viewMode !== this.o.maxViewMode && this.setViewMode(this.viewMode + 1), r.hasClass("today") && !r.hasClass("day") && (this.setViewMode(0), this._setDate(i(), "linked" === this.o.todayBtn ? null : "view")), r.hasClass("clear") && this.clearDates(), r.hasClass("disabled") || (r.hasClass("month") || r.hasClass("year") || r.hasClass("decade") || r.hasClass("century")) && (this.viewDate.setUTCDate(1), a = 1, 1 === this.viewMode ? (s = r.parent().find("span").index(r), o = this.viewDate.getUTCFullYear(), this.viewDate.setUTCMonth(s)) : (s = 0, o = Number(r.text()), this.viewDate.setUTCFullYear(o)), this._trigger(g.viewModes[this.viewMode - 1].e, this.viewDate), this.viewMode === this.o.minViewMode ? this._setDate(n(o, s, a)) : (this.setViewMode(this.viewMode - 1), this.fill())), this.picker.is(":visible") && this._focused_from && this._focused_from.focus(), delete this._focused_from
            },
            dayCellClick: function(e) {
                var n = t(e.currentTarget),
                    i = n.data("date"),
                    r = new Date(i);
                this.o.updateViewDate && (r.getUTCFullYear() !== this.viewDate.getUTCFullYear() && this._trigger("changeYear", this.viewDate), r.getUTCMonth() !== this.viewDate.getUTCMonth() && this._trigger("changeMonth", this.viewDate)), this._setDate(r)
            },
            navArrowsClick: function(e) {
                var n = t(e.currentTarget),
                    i = n.hasClass("prev") ? -1 : 1;
                0 !== this.viewMode && (i *= 12 * g.viewModes[this.viewMode].navStep), this.viewDate = this.moveMonth(this.viewDate, i), this._trigger(g.viewModes[this.viewMode].e, this.viewDate), this.fill()
            },
            _toggle_multidate: function(t) {
                var e = this.dates.contains(t);
                if (t || this.dates.clear(), -1 !== e ? (!0 === this.o.multidate || this.o.multidate > 1 || this.o.toggleActive) && this.dates.remove(e) : !1 === this.o.multidate ? (this.dates.clear(), this.dates.push(t)) : this.dates.push(t), "number" == typeof this.o.multidate)
                    for (; this.dates.length > this.o.multidate;) this.dates.remove(0)
            },
            _setDate: function(t, e) {
                e && "date" !== e || this._toggle_multidate(t && new Date(t)), (!e && this.o.updateViewDate || "view" === e) && (this.viewDate = t && new Date(t)), this.fill(), this.setValue(), e && "view" === e || this._trigger("changeDate"), this.inputField.trigger("change"), !this.o.autoclose || e && "date" !== e || this.hide()
            },
            moveDay: function(t, e) {
                var n = new Date(t);
                return n.setUTCDate(t.getUTCDate() + e), n
            },
            moveWeek: function(t, e) {
                return this.moveDay(t, 7 * e)
            },
            moveMonth: function(t, e) {
                if (! function(t) {
                        return t && !isNaN(t.getTime())
                    }(t)) return this.o.defaultViewDate;
                if (!e) return t;
                var n, i, r = new Date(t.valueOf()),
                    a = r.getUTCDate(),
                    o = r.getUTCMonth(),
                    s = Math.abs(e);
                if (e = e > 0 ? 1 : -1, 1 === s) i = -1 === e ? function() {
                    return r.getUTCMonth() === o
                } : function() {
                    return r.getUTCMonth() !== n
                }, n = o + e, r.setUTCMonth(n), n = (n + 12) % 12;
                else {
                    for (var l = 0; l < s; l++) r = this.moveMonth(r, e);
                    n = r.getUTCMonth(), r.setUTCDate(a), i = function() {
                        return n !== r.getUTCMonth()
                    }
                }
                for (; i();) r.setUTCDate(--a), r.setUTCMonth(n);
                return r
            },
            moveYear: function(t, e) {
                return this.moveMonth(t, 12 * e)
            },
            moveAvailableDate: function(t, e, n) {
                do {
                    if (t = this[n](t, e), !this.dateWithinRange(t)) return !1;
                    n = "moveDay"
                } while (this.dateIsDisabled(t));
                return t
            },
            weekOfDateIsDisabled: function(e) {
                return -1 !== t.inArray(e.getUTCDay(), this.o.daysOfWeekDisabled)
            },
            dateIsDisabled: function(e) {
                return this.weekOfDateIsDisabled(e) || t.grep(this.o.datesDisabled, function(t) {
                    return r(e, t)
                }).length > 0
            },
            dateWithinRange: function(t) {
                return t >= this.o.startDate && t <= this.o.endDate
            },
            keydown: function(t) {
                if (this.picker.is(":visible")) {
                    var e, n, i = !1,
                        r = this.focusDate || this.viewDate;
                    switch (t.keyCode) {
                        case 27:
                            this.focusDate ? (this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill()) : this.hide(), t.preventDefault(), t.stopPropagation();
                            break;
                        case 37:
                        case 38:
                        case 39:
                        case 40:
                            if (!this.o.keyboardNavigation || 7 === this.o.daysOfWeekDisabled.length) break;
                            e = 37 === t.keyCode || 38 === t.keyCode ? -1 : 1, 0 === this.viewMode ? t.ctrlKey ? (n = this.moveAvailableDate(r, e, "moveYear")) && this._trigger("changeYear", this.viewDate) : t.shiftKey ? (n = this.moveAvailableDate(r, e, "moveMonth")) && this._trigger("changeMonth", this.viewDate) : 37 === t.keyCode || 39 === t.keyCode ? n = this.moveAvailableDate(r, e, "moveDay") : this.weekOfDateIsDisabled(r) || (n = this.moveAvailableDate(r, e, "moveWeek")) : 1 === this.viewMode ? (38 !== t.keyCode && 40 !== t.keyCode || (e *= 4), n = this.moveAvailableDate(r, e, "moveMonth")) : 2 === this.viewMode && (38 !== t.keyCode && 40 !== t.keyCode || (e *= 4), n = this.moveAvailableDate(r, e, "moveYear")), n && (this.focusDate = this.viewDate = n, this.setValue(), this.fill(), t.preventDefault());
                            break;
                        case 13:
                            if (!this.o.forceParse) break;
                            r = this.focusDate || this.dates.get(-1) || this.viewDate, this.o.keyboardNavigation && (this._toggle_multidate(r), i = !0), this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.setValue(), this.fill(), this.picker.is(":visible") && (t.preventDefault(), t.stopPropagation(), this.o.autoclose && this.hide());
                            break;
                        case 9:
                            this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill(), this.hide()
                    }
                    i && (this.dates.length ? this._trigger("changeDate") : this._trigger("clearDate"), this.inputField.trigger("change"))
                } else 40 !== t.keyCode && 27 !== t.keyCode || (this.show(), t.stopPropagation())
            },
            setViewMode: function(t) {
                this.viewMode = t, this.picker.children("div").hide().filter(".datepicker-" + g.viewModes[this.viewMode].clsName).show(), this.updateNavArrows(), this._trigger("changeViewMode", new Date(this.viewDate))
            }
        };
        var u = function(e, n) {
            t.data(e, "datepicker", this), this.element = t(e), this.inputs = t.map(n.inputs, function(t) {
                return t.jquery ? t[0] : t
            }), delete n.inputs, this.keepEmptyValues = n.keepEmptyValues, delete n.keepEmptyValues, d.call(t(this.inputs), n).on("changeDate", t.proxy(this.dateUpdated, this)), this.pickers = t.map(this.inputs, function(e) {
                return t.data(e, "datepicker")
            }), this.updateDates()
        };
        u.prototype = {
            updateDates: function() {
                this.dates = t.map(this.pickers, function(t) {
                    return t.getUTCDate()
                }), this.updateRanges()
            },
            updateRanges: function() {
                var e = t.map(this.dates, function(t) {
                    return t.valueOf()
                });
                t.each(this.pickers, function(t, n) {
                    n.setRange(e)
                })
            },
            clearDates: function() {
                t.each(this.pickers, function(t, e) {
                    e.clearDates()
                })
            },
            dateUpdated: function(n) {
                if (!this.updating) {
                    this.updating = !0;
                    var i = t.data(n.target, "datepicker");
                    if (i !== e) {
                        var r = i.getUTCDate(),
                            a = this.keepEmptyValues,
                            o = t.inArray(n.target, this.inputs),
                            s = o - 1,
                            l = o + 1,
                            u = this.inputs.length;
                        if (-1 !== o) {
                            if (t.each(this.pickers, function(t, e) {
                                    e.getUTCDate() || e !== i && a || e.setUTCDate(r)
                                }), r < this.dates[s])
                                for (; s >= 0 && r < this.dates[s];) this.pickers[s--].setUTCDate(r);
                            else if (r > this.dates[l])
                                for (; l < u && r > this.dates[l];) this.pickers[l++].setUTCDate(r);
                            this.updateDates(), delete this.updating
                        }
                    }
                }
            },
            destroy: function() {
                t.map(this.pickers, function(t) {
                    t.destroy()
                }), t(this.inputs).off("changeDate", this.dateUpdated), delete this.element.data().datepicker
            },
            remove: a("destroy", "Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead")
        };
        var c = t.fn.datepicker,
            d = function(n) {
                var i, r = Array.apply(null, arguments);
                if (r.shift(), this.each(function() {
                        var e = t(this),
                            a = e.data("datepicker"),
                            s = "object" == typeof n && n;
                        if (!a) {
                            var c = function(e, n) {
                                    function i(t, e) {
                                        return e.toLowerCase()
                                    }
                                    var r, a = t(e).data(),
                                        o = {},
                                        s = new RegExp("^" + n.toLowerCase() + "([A-Z])");
                                    for (var l in n = new RegExp("^" + n.toLowerCase()), a) n.test(l) && (r = l.replace(s, i), o[r] = a[l]);
                                    return o
                                }(this, "date"),
                                d = t.extend({}, h, c, s),
                                f = o(d.language),
                                p = t.extend({}, h, f, c, s);
                            e.hasClass("input-daterange") || p.inputs ? (t.extend(p, {
                                inputs: p.inputs || e.find("input").toArray()
                            }), a = new u(this, p)) : a = new l(this, p), e.data("datepicker", a)
                        }
                        "string" == typeof n && "function" == typeof a[n] && (i = a[n].apply(a, r))
                    }), i === e || i instanceof l || i instanceof u) return this;
                if (this.length > 1) throw new Error("Using only allowed for the collection of a single element (" + n + " function)");
                return i
            };
        t.fn.datepicker = d;
        var h = t.fn.datepicker.defaults = {
                assumeNearbyYear: !1,
                autoclose: !1,
                beforeShowDay: t.noop,
                beforeShowMonth: t.noop,
                beforeShowYear: t.noop,
                beforeShowDecade: t.noop,
                beforeShowCentury: t.noop,
                calendarWeeks: !1,
                clearBtn: !1,
                toggleActive: !1,
                daysOfWeekDisabled: [],
                daysOfWeekHighlighted: [],
                datesDisabled: [],
                endDate: 1 / 0,
                forceParse: !0,
                format: "mm/dd/yyyy",
                keepEmptyValues: !1,
                keyboardNavigation: !0,
                language: "en",
                minViewMode: 0,
                maxViewMode: 4,
                multidate: !1,
                multidateSeparator: ",",
                orientation: "auto",
                rtl: !1,
                startDate: -1 / 0,
                startView: 0,
                todayBtn: !1,
                todayHighlight: !1,
                updateViewDate: !0,
                weekStart: 0,
                disableTouchKeyboard: !1,
                enableOnReadonly: !0,
                showOnFocus: !0,
                zIndexOffset: 10,
                container: "body",
                immediateUpdates: !1,
                title: "",
                templates: {
                    leftArrow: "&#x00AB;",
                    rightArrow: "&#x00BB;"
                },
                showWeekDays: !0
            },
            f = t.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"];
        t.fn.datepicker.Constructor = l;
        var p = t.fn.datepicker.dates = {
                en: {
                    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    today: "Today",
                    clear: "Clear",
                    titleFormat: "MM yyyy"
                }
            },
            g = {
                viewModes: [{
                    names: ["days", "month"],
                    clsName: "days",
                    e: "changeMonth"
                }, {
                    names: ["months", "year"],
                    clsName: "months",
                    e: "changeYear",
                    navStep: 1
                }, {
                    names: ["years", "decade"],
                    clsName: "years",
                    e: "changeDecade",
                    navStep: 10
                }, {
                    names: ["decades", "century"],
                    clsName: "decades",
                    e: "changeCentury",
                    navStep: 100
                }, {
                    names: ["centuries", "millennium"],
                    clsName: "centuries",
                    e: "changeMillennium",
                    navStep: 1e3
                }],
                validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
                nonpunctuation: /[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,
                parseFormat: function(t) {
                    if ("function" == typeof t.toValue && "function" == typeof t.toDisplay) return t;
                    var e = t.replace(this.validParts, "\0").split("\0"),
                        n = t.match(this.validParts);
                    if (!e || !e.length || !n || 0 === n.length) throw new Error("Invalid date format.");
                    return {
                        separators: e,
                        parts: n
                    }
                },
                parseDate: function(n, r, a, o) {
                    function s() {
                        var t = this.slice(0, u[h].length),
                            e = u[h].slice(0, t.length);
                        return t.toLowerCase() === e.toLowerCase()
                    }
                    if (!n) return e;
                    if (n instanceof Date) return n;
                    if ("string" == typeof r && (r = g.parseFormat(r)), r.toValue) return r.toValue(n, r, a);
                    var u, c, d, h, f, m = {
                            d: "moveDay",
                            m: "moveMonth",
                            w: "moveWeek",
                            y: "moveYear"
                        },
                        v = {
                            yesterday: "-1d",
                            today: "+0d",
                            tomorrow: "+1d"
                        };
                    if (n in v && (n = v[n]), /^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/i.test(n)) {
                        for (u = n.match(/([\-+]\d+)([dmwy])/gi), n = new Date, h = 0; h < u.length; h++) c = u[h].match(/([\-+]\d+)([dmwy])/i), d = Number(c[1]), f = m[c[2].toLowerCase()], n = l.prototype[f](n, d);
                        return l.prototype._zero_utc_time(n)
                    }
                    u = n && n.match(this.nonpunctuation) || [];
                    var y, b, x = {},
                        w = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"],
                        k = {
                            yyyy: function(t, e) {
                                return t.setUTCFullYear(o ? function(t, e) {
                                    return !0 === e && (e = 10), t < 100 && (t += 2e3) > (new Date).getFullYear() + e && (t -= 100), t
                                }(e, o) : e)
                            },
                            m: function(t, e) {
                                if (isNaN(t)) return t;
                                for (e -= 1; e < 0;) e += 12;
                                for (e %= 12, t.setUTCMonth(e); t.getUTCMonth() !== e;) t.setUTCDate(t.getUTCDate() - 1);
                                return t
                            },
                            d: function(t, e) {
                                return t.setUTCDate(e)
                            }
                        };
                    k.yy = k.yyyy, k.M = k.MM = k.mm = k.m, k.dd = k.d, n = i();
                    var C = r.parts.slice();
                    if (u.length !== C.length && (C = t(C).filter(function(e, n) {
                            return -1 !== t.inArray(n, w)
                        }).toArray()), u.length === C.length) {
                        var D, S, T;
                        for (h = 0, D = C.length; h < D; h++) {
                            if (y = parseInt(u[h], 10), c = C[h], isNaN(y)) switch (c) {
                                case "MM":
                                    b = t(p[a].months).filter(s), y = t.inArray(b[0], p[a].months) + 1;
                                    break;
                                case "M":
                                    b = t(p[a].monthsShort).filter(s), y = t.inArray(b[0], p[a].monthsShort) + 1
                            }
                            x[c] = y
                        }
                        for (h = 0; h < w.length; h++)(T = w[h]) in x && !isNaN(x[T]) && (S = new Date(n), k[T](S, x[T]), isNaN(S) || (n = S))
                    }
                    return n
                },
                formatDate: function(e, n, i) {
                    if (!e) return "";
                    if ("string" == typeof n && (n = g.parseFormat(n)), n.toDisplay) return n.toDisplay(e, n, i);
                    var r = {
                        d: e.getUTCDate(),
                        D: p[i].daysShort[e.getUTCDay()],
                        DD: p[i].days[e.getUTCDay()],
                        m: e.getUTCMonth() + 1,
                        M: p[i].monthsShort[e.getUTCMonth()],
                        MM: p[i].months[e.getUTCMonth()],
                        yy: e.getUTCFullYear().toString().substring(2),
                        yyyy: e.getUTCFullYear()
                    };
                    r.dd = (r.d < 10 ? "0" : "") + r.d, r.mm = (r.m < 10 ? "0" : "") + r.m, e = [];
                    for (var a = t.extend([], n.separators), o = 0, s = n.parts.length; o <= s; o++) a.length && e.push(a.shift()), e.push(r[n.parts[o]]);
                    return e.join("")
                },
                headTemplate: '<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev">' + h.templates.leftArrow + '</th><th colspan="5" class="datepicker-switch"></th><th class="next">' + h.templates.rightArrow + "</th></tr></thead>",
                contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
                footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'
            };
        g.template = '<div class="datepicker"><div class="datepicker-days"><table class="table-condensed">' + g.headTemplate + "<tbody></tbody>" + g.footTemplate + '</table></div><div class="datepicker-months"><table class="table-condensed">' + g.headTemplate + g.contTemplate + g.footTemplate + '</table></div><div class="datepicker-years"><table class="table-condensed">' + g.headTemplate + g.contTemplate + g.footTemplate + '</table></div><div class="datepicker-decades"><table class="table-condensed">' + g.headTemplate + g.contTemplate + g.footTemplate + '</table></div><div class="datepicker-centuries"><table class="table-condensed">' + g.headTemplate + g.contTemplate + g.footTemplate + "</table></div></div>", t.fn.datepicker.DPGlobal = g, t.fn.datepicker.noConflict = function() {
            return t.fn.datepicker = c, this
        }, t.fn.datepicker.version = "1.8.0", t.fn.datepicker.deprecated = function(t) {
            var e = window.console;
            e && e.warn && e.warn("DEPRECATED: " + t)
        }, t(document).on("focus.datepicker.data-api click.datepicker.data-api", '[data-provide="datepicker"]', function(e) {
            var n = t(this);
            n.data("datepicker") || (e.preventDefault(), d.call(n, "show"))
        }), t(function() {
            d.call(t('[data-provide="datepicker-inline"]'))
        })
    }) ? i.apply(e, r) : i) || (t.exports = a)
}, function(t, e, n) {
    "use strict";
    (function(t) {
        var e = n(1),
            i = (n(7), function(t, e, n, i) {
                this.el = t, this.onValueChangedFoo = e, this.numeralThousandsGroupStyle = n, this.loading = !0, this.numeralDecimalScale = i || 2
            });
        i.prototype = {
            init: function() {
                this.checkEl() && this.initMask()
            },
            checkEl: function() {
                return document.querySelector(this.el)
            },
            initMask: function() {
                var t = this;
                new Cleave(this.el, {
                    numeral: !0,
                    numeralDecimalScale: 3,
                    numeralThousandsGroupStyle: this.numeralThousandsGroupStyle,
                    onValueChanged: function(e) {
                        t.loading ? t.loading = void 0 : t.onValueChangedFoo(e)
                    }
                })
            }
        }, t(document).ready(function() {
            var n = Object(e.a)(t("#homeValue").val()),
                r = t("#downPayment"),
                a = r.length ? Object(e.a)(r.val()) : 0;
            [
                ["#downPayment", "#downPaymentPerc", "#homeValue", 2],
                ["#taxes", "#taxesPerc", "#homeValue", 2],
                ["#insurance", "#insurancePerc", "#homeValue", 2],
                ["#pmi", "#pmiPerc", "debt", 3]
            ].forEach(function(r) {
                var o = "debt" !== r[2] ? n : n - a;
                new i(r[0], function(n) {
                    var i = Object(e.a)(n.target.value) / o * 100;
                    t(r[1]).val(Object(e.b)(i))
                }, "thousand").init(), new i(r[1], function(n) {
                    var i = n.target.value * o / 100;
                    t(r[0]).val(Object(e.b)(i))
                }, "none").init()
            }), new i("#mortgageTerm", function(e) {
                var n = e.target.value;
                t("#mortgageTermMonths").val(Math.round(12 * n * 100) / 100)
            }, "none", 0).init(), new i("#mortgageTermMonths", function(e) {
                var n = e.target.value;
                t("#mortgageTerm").val(Math.round(n / 12 * 100) / 100)
            }, "none", 0).init()
        })
    }).call(this, n(3))
}, function(t, e, n) {
    (function(t) {
        t(document).ready(function() {
            t("#mobileNavToggler").on("click", function() {
                var e = t("#mobileNav"),
                    n = t("#mobileNavToggler");
                e.hasClass("opened") ? (e.removeClass("opened"), n.removeClass("fix")) : (e.addClass("opened"), n.addClass("fix"))
            })
        })
    }).call(this, n(3))
}, function(t, e, n) {
    var i;
    t.exports = function t(e, n, r) {
        function a(s, l) {
            if (!n[s]) {
                if (!e[s]) {
                    var u = "function" == typeof i && i;
                    if (!l && u) return i(s, !0);
                    if (o) return o(s, !0);
                    var c = new Error("Cannot find module '" + s + "'");
                    throw c.code = "MODULE_NOT_FOUND", c
                }
                var d = n[s] = {
                    exports: {}
                };
                e[s][0].call(d.exports, function(t) {
                    var n = e[s][1][t];
                    return a(n || t)
                }, d, d.exports, t, e, n, r)
            }
            return n[s].exports
        }
        for (var o = "function" == typeof i && i, s = 0; s < r.length; s++) a(r[s]);
        return a
    }({
        1: [function(t, e, n) {}, {}],
        2: [function(t, e, n) {
            var i = t(6);

            function r(t) {
                if (t) {
                    var e = [0, 0, 0],
                        n = 1,
                        r = t.match(/^#([a-fA-F0-9]{3})$/i);
                    if (r) {
                        r = r[1];
                        for (var a = 0; a < e.length; a++) e[a] = parseInt(r[a] + r[a], 16)
                    } else if (r = t.match(/^#([a-fA-F0-9]{6})$/i))
                        for (r = r[1], a = 0; a < e.length; a++) e[a] = parseInt(r.slice(2 * a, 2 * a + 2), 16);
                    else if (r = t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                        for (a = 0; a < e.length; a++) e[a] = parseInt(r[a + 1]);
                        n = parseFloat(r[4])
                    } else if (r = t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                        for (a = 0; a < e.length; a++) e[a] = Math.round(2.55 * parseFloat(r[a + 1]));
                        n = parseFloat(r[4])
                    } else if (r = t.match(/(\w+)/)) {
                        if ("transparent" == r[1]) return [0, 0, 0, 0];
                        if (!(e = i[r[1]])) return
                    }
                    for (a = 0; a < e.length; a++) e[a] = c(e[a], 0, 255);
                    return n = n || 0 == n ? c(n, 0, 1) : 1, e[3] = n, e
                }
            }

            function a(t) {
                if (t) {
                    var e = t.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
                    if (e) {
                        var n = parseFloat(e[4]);
                        return [c(parseInt(e[1]), 0, 360), c(parseFloat(e[2]), 0, 100), c(parseFloat(e[3]), 0, 100), c(isNaN(n) ? 1 : n, 0, 1)]
                    }
                }
            }

            function o(t) {
                if (t) {
                    var e = t.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
                    if (e) {
                        var n = parseFloat(e[4]);
                        return [c(parseInt(e[1]), 0, 360), c(parseFloat(e[2]), 0, 100), c(parseFloat(e[3]), 0, 100), c(isNaN(n) ? 1 : n, 0, 1)]
                    }
                }
            }

            function s(t, e) {
                return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")"
            }

            function l(t, e) {
                return "rgba(" + Math.round(t[0] / 255 * 100) + "%, " + Math.round(t[1] / 255 * 100) + "%, " + Math.round(t[2] / 255 * 100) + "%, " + (e || t[3] || 1) + ")"
            }

            function u(t, e) {
                return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")"
            }

            function c(t, e, n) {
                return Math.min(Math.max(e, t), n)
            }

            function d(t) {
                var e = t.toString(16).toUpperCase();
                return e.length < 2 ? "0" + e : e
            }
            e.exports = {
                getRgba: r,
                getHsla: a,
                getRgb: function(t) {
                    var e = r(t);
                    return e && e.slice(0, 3)
                },
                getHsl: function(t) {
                    var e = a(t);
                    return e && e.slice(0, 3)
                },
                getHwb: o,
                getAlpha: function(t) {
                    var e = r(t);
                    return e ? e[3] : (e = a(t)) ? e[3] : (e = o(t)) ? e[3] : void 0
                },
                hexString: function(t) {
                    return "#" + d(t[0]) + d(t[1]) + d(t[2])
                },
                rgbString: function(t, e) {
                    return e < 1 || t[3] && t[3] < 1 ? s(t, e) : "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")"
                },
                rgbaString: s,
                percentString: function(t, e) {
                    if (e < 1 || t[3] && t[3] < 1) return l(t, e);
                    var n = Math.round(t[0] / 255 * 100),
                        i = Math.round(t[1] / 255 * 100),
                        r = Math.round(t[2] / 255 * 100);
                    return "rgb(" + n + "%, " + i + "%, " + r + "%)"
                },
                percentaString: l,
                hslString: function(t, e) {
                    return e < 1 || t[3] && t[3] < 1 ? u(t, e) : "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)"
                },
                hslaString: u,
                hwbString: function(t, e) {
                    return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (void 0 !== e && 1 !== e ? ", " + e : "") + ")"
                },
                keyword: function(t) {
                    return h[t.slice(0, 3)]
                }
            };
            var h = {};
            for (var f in i) h[i[f]] = f
        }, {
            6: 6
        }],
        3: [function(t, e, n) {
            var i = t(5),
                r = t(2),
                a = function(t) {
                    return t instanceof a ? t : this instanceof a ? (this.valid = !1, this.values = {
                        rgb: [0, 0, 0],
                        hsl: [0, 0, 0],
                        hsv: [0, 0, 0],
                        hwb: [0, 0, 0],
                        cmyk: [0, 0, 0, 0],
                        alpha: 1
                    }, void("string" == typeof t ? (e = r.getRgba(t)) ? this.setValues("rgb", e) : (e = r.getHsla(t)) ? this.setValues("hsl", e) : (e = r.getHwb(t)) && this.setValues("hwb", e) : "object" == typeof t && (void 0 !== (e = t).r || void 0 !== e.red ? this.setValues("rgb", e) : void 0 !== e.l || void 0 !== e.lightness ? this.setValues("hsl", e) : void 0 !== e.v || void 0 !== e.value ? this.setValues("hsv", e) : void 0 !== e.w || void 0 !== e.whiteness ? this.setValues("hwb", e) : void 0 === e.c && void 0 === e.cyan || this.setValues("cmyk", e)))) : new a(t);
                    var e
                };
            a.prototype = {
                isValid: function() {
                    return this.valid
                },
                rgb: function() {
                    return this.setSpace("rgb", arguments)
                },
                hsl: function() {
                    return this.setSpace("hsl", arguments)
                },
                hsv: function() {
                    return this.setSpace("hsv", arguments)
                },
                hwb: function() {
                    return this.setSpace("hwb", arguments)
                },
                cmyk: function() {
                    return this.setSpace("cmyk", arguments)
                },
                rgbArray: function() {
                    return this.values.rgb
                },
                hslArray: function() {
                    return this.values.hsl
                },
                hsvArray: function() {
                    return this.values.hsv
                },
                hwbArray: function() {
                    var t = this.values;
                    return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb
                },
                cmykArray: function() {
                    return this.values.cmyk
                },
                rgbaArray: function() {
                    var t = this.values;
                    return t.rgb.concat([t.alpha])
                },
                hslaArray: function() {
                    var t = this.values;
                    return t.hsl.concat([t.alpha])
                },
                alpha: function(t) {
                    return void 0 === t ? this.values.alpha : (this.setValues("alpha", t), this)
                },
                red: function(t) {
                    return this.setChannel("rgb", 0, t)
                },
                green: function(t) {
                    return this.setChannel("rgb", 1, t)
                },
                blue: function(t) {
                    return this.setChannel("rgb", 2, t)
                },
                hue: function(t) {
                    return t && (t = (t %= 360) < 0 ? 360 + t : t), this.setChannel("hsl", 0, t)
                },
                saturation: function(t) {
                    return this.setChannel("hsl", 1, t)
                },
                lightness: function(t) {
                    return this.setChannel("hsl", 2, t)
                },
                saturationv: function(t) {
                    return this.setChannel("hsv", 1, t)
                },
                whiteness: function(t) {
                    return this.setChannel("hwb", 1, t)
                },
                blackness: function(t) {
                    return this.setChannel("hwb", 2, t)
                },
                value: function(t) {
                    return this.setChannel("hsv", 2, t)
                },
                cyan: function(t) {
                    return this.setChannel("cmyk", 0, t)
                },
                magenta: function(t) {
                    return this.setChannel("cmyk", 1, t)
                },
                yellow: function(t) {
                    return this.setChannel("cmyk", 2, t)
                },
                black: function(t) {
                    return this.setChannel("cmyk", 3, t)
                },
                hexString: function() {
                    return r.hexString(this.values.rgb)
                },
                rgbString: function() {
                    return r.rgbString(this.values.rgb, this.values.alpha)
                },
                rgbaString: function() {
                    return r.rgbaString(this.values.rgb, this.values.alpha)
                },
                percentString: function() {
                    return r.percentString(this.values.rgb, this.values.alpha)
                },
                hslString: function() {
                    return r.hslString(this.values.hsl, this.values.alpha)
                },
                hslaString: function() {
                    return r.hslaString(this.values.hsl, this.values.alpha)
                },
                hwbString: function() {
                    return r.hwbString(this.values.hwb, this.values.alpha)
                },
                keyword: function() {
                    return r.keyword(this.values.rgb, this.values.alpha)
                },
                rgbNumber: function() {
                    var t = this.values.rgb;
                    return t[0] << 16 | t[1] << 8 | t[2]
                },
                luminosity: function() {
                    for (var t = this.values.rgb, e = [], n = 0; n < t.length; n++) {
                        var i = t[n] / 255;
                        e[n] = i <= .03928 ? i / 12.92 : Math.pow((i + .055) / 1.055, 2.4)
                    }
                    return .2126 * e[0] + .7152 * e[1] + .0722 * e[2]
                },
                contrast: function(t) {
                    var e = this.luminosity(),
                        n = t.luminosity();
                    return e > n ? (e + .05) / (n + .05) : (n + .05) / (e + .05)
                },
                level: function(t) {
                    var e = this.contrast(t);
                    return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : ""
                },
                dark: function() {
                    var t = this.values.rgb;
                    return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128
                },
                light: function() {
                    return !this.dark()
                },
                negate: function() {
                    for (var t = [], e = 0; e < 3; e++) t[e] = 255 - this.values.rgb[e];
                    return this.setValues("rgb", t), this
                },
                lighten: function(t) {
                    var e = this.values.hsl;
                    return e[2] += e[2] * t, this.setValues("hsl", e), this
                },
                darken: function(t) {
                    var e = this.values.hsl;
                    return e[2] -= e[2] * t, this.setValues("hsl", e), this
                },
                saturate: function(t) {
                    var e = this.values.hsl;
                    return e[1] += e[1] * t, this.setValues("hsl", e), this
                },
                desaturate: function(t) {
                    var e = this.values.hsl;
                    return e[1] -= e[1] * t, this.setValues("hsl", e), this
                },
                whiten: function(t) {
                    var e = this.values.hwb;
                    return e[1] += e[1] * t, this.setValues("hwb", e), this
                },
                blacken: function(t) {
                    var e = this.values.hwb;
                    return e[2] += e[2] * t, this.setValues("hwb", e), this
                },
                greyscale: function() {
                    var t = this.values.rgb,
                        e = .3 * t[0] + .59 * t[1] + .11 * t[2];
                    return this.setValues("rgb", [e, e, e]), this
                },
                clearer: function(t) {
                    var e = this.values.alpha;
                    return this.setValues("alpha", e - e * t), this
                },
                opaquer: function(t) {
                    var e = this.values.alpha;
                    return this.setValues("alpha", e + e * t), this
                },
                rotate: function(t) {
                    var e = this.values.hsl,
                        n = (e[0] + t) % 360;
                    return e[0] = n < 0 ? 360 + n : n, this.setValues("hsl", e), this
                },
                mix: function(t, e) {
                    var n = this,
                        i = t,
                        r = void 0 === e ? .5 : e,
                        a = 2 * r - 1,
                        o = n.alpha() - i.alpha(),
                        s = ((a * o == -1 ? a : (a + o) / (1 + a * o)) + 1) / 2,
                        l = 1 - s;
                    return this.rgb(s * n.red() + l * i.red(), s * n.green() + l * i.green(), s * n.blue() + l * i.blue()).alpha(n.alpha() * r + i.alpha() * (1 - r))
                },
                toJSON: function() {
                    return this.rgb()
                },
                clone: function() {
                    var t, e, n = new a,
                        i = this.values,
                        r = n.values;
                    for (var o in i) i.hasOwnProperty(o) && (t = i[o], "[object Array]" === (e = {}.toString.call(t)) ? r[o] = t.slice(0) : "[object Number]" === e ? r[o] = t : console.error("unexpected color value:", t));
                    return n
                }
            }, a.prototype.spaces = {
                rgb: ["red", "green", "blue"],
                hsl: ["hue", "saturation", "lightness"],
                hsv: ["hue", "saturation", "value"],
                hwb: ["hue", "whiteness", "blackness"],
                cmyk: ["cyan", "magenta", "yellow", "black"]
            }, a.prototype.maxes = {
                rgb: [255, 255, 255],
                hsl: [360, 100, 100],
                hsv: [360, 100, 100],
                hwb: [360, 100, 100],
                cmyk: [100, 100, 100, 100]
            }, a.prototype.getValues = function(t) {
                for (var e = this.values, n = {}, i = 0; i < t.length; i++) n[t.charAt(i)] = e[t][i];
                return 1 !== e.alpha && (n.a = e.alpha), n
            }, a.prototype.setValues = function(t, e) {
                var n, r, a = this.values,
                    o = this.spaces,
                    s = this.maxes,
                    l = 1;
                if (this.valid = !0, "alpha" === t) l = e;
                else if (e.length) a[t] = e.slice(0, t.length), l = e[t.length];
                else if (void 0 !== e[t.charAt(0)]) {
                    for (n = 0; n < t.length; n++) a[t][n] = e[t.charAt(n)];
                    l = e.a
                } else if (void 0 !== e[o[t][0]]) {
                    var u = o[t];
                    for (n = 0; n < t.length; n++) a[t][n] = e[u[n]];
                    l = e.alpha
                }
                if (a.alpha = Math.max(0, Math.min(1, void 0 === l ? a.alpha : l)), "alpha" === t) return !1;
                for (n = 0; n < t.length; n++) r = Math.max(0, Math.min(s[t][n], a[t][n])), a[t][n] = Math.round(r);
                for (var c in o) c !== t && (a[c] = i[t][c](a[t]));
                return !0
            }, a.prototype.setSpace = function(t, e) {
                var n = e[0];
                return void 0 === n ? this.getValues(t) : ("number" == typeof n && (n = Array.prototype.slice.call(e)), this.setValues(t, n), this)
            }, a.prototype.setChannel = function(t, e, n) {
                var i = this.values[t];
                return void 0 === n ? i[e] : n === i[e] ? this : (i[e] = n, this.setValues(t, i), this)
            }, "undefined" != typeof window && (window.Color = a), e.exports = a
        }, {
            2: 2,
            5: 5
        }],
        4: [function(t, e, n) {
            function i(t) {
                var e, n, i = t[0] / 255,
                    r = t[1] / 255,
                    a = t[2] / 255,
                    o = Math.min(i, r, a),
                    s = Math.max(i, r, a),
                    l = s - o;
                return s == o ? e = 0 : i == s ? e = (r - a) / l : r == s ? e = 2 + (a - i) / l : a == s && (e = 4 + (i - r) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), n = (o + s) / 2, [e, 100 * (s == o ? 0 : n <= .5 ? l / (s + o) : l / (2 - s - o)), 100 * n]
            }

            function a(t) {
                var e, n, i = t[0],
                    r = t[1],
                    a = t[2],
                    o = Math.min(i, r, a),
                    s = Math.max(i, r, a),
                    l = s - o;
                return n = 0 == s ? 0 : l / s * 1e3 / 10, s == o ? e = 0 : i == s ? e = (r - a) / l : r == s ? e = 2 + (a - i) / l : a == s && (e = 4 + (i - r) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), [e, n, s / 255 * 1e3 / 10]
            }

            function o(t) {
                var e = t[0],
                    n = t[1],
                    r = t[2];
                return [i(t)[0], 1 / 255 * Math.min(e, Math.min(n, r)) * 100, 100 * (r = 1 - 1 / 255 * Math.max(e, Math.max(n, r)))]
            }

            function s(t) {
                var e, n = t[0] / 255,
                    i = t[1] / 255,
                    r = t[2] / 255;
                return [100 * ((1 - n - (e = Math.min(1 - n, 1 - i, 1 - r))) / (1 - e) || 0), 100 * ((1 - i - e) / (1 - e) || 0), 100 * ((1 - r - e) / (1 - e) || 0), 100 * e]
            }

            function l(t) {
                return S[JSON.stringify(t)]
            }

            function u(t) {
                var e = t[0] / 255,
                    n = t[1] / 255,
                    i = t[2] / 255;
                return [100 * (.4124 * (e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92) + .3576 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92) + .1805 * (i = i > .04045 ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92)), 100 * (.2126 * e + .7152 * n + .0722 * i), 100 * (.0193 * e + .1192 * n + .9505 * i)]
            }

            function c(t) {
                var e = u(t),
                    n = e[0],
                    i = e[1],
                    r = e[2];
                return i /= 100, r /= 108.883, n = (n /= 95.047) > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, [116 * (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116) - 16, 500 * (n - i), 200 * (i - (r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116))]
            }

            function d(t) {
                var e, n, i, r, a, o = t[0] / 360,
                    s = t[1] / 100,
                    l = t[2] / 100;
                if (0 == s) return [a = 255 * l, a, a];
                e = 2 * l - (n = l < .5 ? l * (1 + s) : l + s - l * s), r = [0, 0, 0];
                for (var u = 0; u < 3; u++)(i = o + 1 / 3 * -(u - 1)) < 0 && i++, i > 1 && i--, a = 6 * i < 1 ? e + 6 * (n - e) * i : 2 * i < 1 ? n : 3 * i < 2 ? e + (n - e) * (2 / 3 - i) * 6 : e, r[u] = 255 * a;
                return r
            }

            function h(t) {
                var e = t[0] / 60,
                    n = t[1] / 100,
                    i = t[2] / 100,
                    r = Math.floor(e) % 6,
                    a = e - Math.floor(e),
                    o = 255 * i * (1 - n),
                    s = 255 * i * (1 - n * a),
                    l = 255 * i * (1 - n * (1 - a));
                switch (i *= 255, r) {
                    case 0:
                        return [i, l, o];
                    case 1:
                        return [s, i, o];
                    case 2:
                        return [o, i, l];
                    case 3:
                        return [o, s, i];
                    case 4:
                        return [l, o, i];
                    case 5:
                        return [i, o, s]
                }
            }

            function f(t) {
                var e, n, i, a, o = t[0] / 360,
                    s = t[1] / 100,
                    l = t[2] / 100,
                    u = s + l;
                switch (u > 1 && (s /= u, l /= u), i = 6 * o - (e = Math.floor(6 * o)), 0 != (1 & e) && (i = 1 - i), a = s + i * ((n = 1 - l) - s), e) {
                    default:
                        case 6:
                        case 0:
                        r = n,
                    g = a,
                    b = s;
                    break;
                    case 1:
                            r = a,
                        g = n,
                        b = s;
                        break;
                    case 2:
                            r = s,
                        g = n,
                        b = a;
                        break;
                    case 3:
                            r = s,
                        g = a,
                        b = n;
                        break;
                    case 4:
                            r = a,
                        g = s,
                        b = n;
                        break;
                    case 5:
                            r = n,
                        g = s,
                        b = a
                }
                return [255 * r, 255 * g, 255 * b]
            }

            function p(t) {
                var e = t[0] / 100,
                    n = t[1] / 100,
                    i = t[2] / 100,
                    r = t[3] / 100;
                return [255 * (1 - Math.min(1, e * (1 - r) + r)), 255 * (1 - Math.min(1, n * (1 - r) + r)), 255 * (1 - Math.min(1, i * (1 - r) + r))]
            }

            function m(t) {
                var e, n, i, r = t[0] / 100,
                    a = t[1] / 100,
                    o = t[2] / 100;
                return n = -.9689 * r + 1.8758 * a + .0415 * o, i = .0557 * r + -.204 * a + 1.057 * o, e = (e = 3.2406 * r + -1.5372 * a + -.4986 * o) > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : e *= 12.92, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : n *= 12.92, i = i > .0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : i *= 12.92, [255 * (e = Math.min(Math.max(0, e), 1)), 255 * (n = Math.min(Math.max(0, n), 1)), 255 * (i = Math.min(Math.max(0, i), 1))]
            }

            function v(t) {
                var e = t[0],
                    n = t[1],
                    i = t[2];
                return n /= 100, i /= 108.883, e = (e /= 95.047) > .008856 ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116, [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (e - n), 200 * (n - (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116))]
            }

            function y(t) {
                var e, n, i, r, a = t[0],
                    o = t[1],
                    s = t[2];
                return a <= 8 ? r = (n = 100 * a / 903.3) / 100 * 7.787 + 16 / 116 : (n = 100 * Math.pow((a + 16) / 116, 3), r = Math.pow(n / 100, 1 / 3)), [e = e / 95.047 <= .008856 ? e = 95.047 * (o / 500 + r - 16 / 116) / 7.787 : 95.047 * Math.pow(o / 500 + r, 3), n, i = i / 108.883 <= .008859 ? i = 108.883 * (r - s / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(r - s / 200, 3)]
            }

            function x(t) {
                var e, n = t[0],
                    i = t[1],
                    r = t[2];
                return (e = 360 * Math.atan2(r, i) / 2 / Math.PI) < 0 && (e += 360), [n, Math.sqrt(i * i + r * r), e]
            }

            function w(t) {
                return m(y(t))
            }

            function k(t) {
                var e, n = t[0],
                    i = t[1];
                return e = t[2] / 360 * 2 * Math.PI, [n, i * Math.cos(e), i * Math.sin(e)]
            }

            function C(t) {
                return D[t]
            }
            e.exports = {
                rgb2hsl: i,
                rgb2hsv: a,
                rgb2hwb: o,
                rgb2cmyk: s,
                rgb2keyword: l,
                rgb2xyz: u,
                rgb2lab: c,
                rgb2lch: function(t) {
                    return x(c(t))
                },
                hsl2rgb: d,
                hsl2hsv: function(t) {
                    var e = t[0],
                        n = t[1] / 100,
                        i = t[2] / 100;
                    return 0 === i ? [0, 0, 0] : [e, 2 * (n *= (i *= 2) <= 1 ? i : 2 - i) / (i + n) * 100, (i + n) / 2 * 100]
                },
                hsl2hwb: function(t) {
                    return o(d(t))
                },
                hsl2cmyk: function(t) {
                    return s(d(t))
                },
                hsl2keyword: function(t) {
                    return l(d(t))
                },
                hsv2rgb: h,
                hsv2hsl: function(t) {
                    var e, n, i = t[0],
                        r = t[1] / 100,
                        a = t[2] / 100;
                    return e = r * a, [i, 100 * (e = (e /= (n = (2 - r) * a) <= 1 ? n : 2 - n) || 0), 100 * (n /= 2)]
                },
                hsv2hwb: function(t) {
                    return o(h(t))
                },
                hsv2cmyk: function(t) {
                    return s(h(t))
                },
                hsv2keyword: function(t) {
                    return l(h(t))
                },
                hwb2rgb: f,
                hwb2hsl: function(t) {
                    return i(f(t))
                },
                hwb2hsv: function(t) {
                    return a(f(t))
                },
                hwb2cmyk: function(t) {
                    return s(f(t))
                },
                hwb2keyword: function(t) {
                    return l(f(t))
                },
                cmyk2rgb: p,
                cmyk2hsl: function(t) {
                    return i(p(t))
                },
                cmyk2hsv: function(t) {
                    return a(p(t))
                },
                cmyk2hwb: function(t) {
                    return o(p(t))
                },
                cmyk2keyword: function(t) {
                    return l(p(t))
                },
                keyword2rgb: C,
                keyword2hsl: function(t) {
                    return i(C(t))
                },
                keyword2hsv: function(t) {
                    return a(C(t))
                },
                keyword2hwb: function(t) {
                    return o(C(t))
                },
                keyword2cmyk: function(t) {
                    return s(C(t))
                },
                keyword2lab: function(t) {
                    return c(C(t))
                },
                keyword2xyz: function(t) {
                    return u(C(t))
                },
                xyz2rgb: m,
                xyz2lab: v,
                xyz2lch: function(t) {
                    return x(v(t))
                },
                lab2xyz: y,
                lab2rgb: w,
                lab2lch: x,
                lch2lab: k,
                lch2xyz: function(t) {
                    return y(k(t))
                },
                lch2rgb: function(t) {
                    return w(k(t))
                }
            };
            var D = {
                    aliceblue: [240, 248, 255],
                    antiquewhite: [250, 235, 215],
                    aqua: [0, 255, 255],
                    aquamarine: [127, 255, 212],
                    azure: [240, 255, 255],
                    beige: [245, 245, 220],
                    bisque: [255, 228, 196],
                    black: [0, 0, 0],
                    blanchedalmond: [255, 235, 205],
                    blue: [0, 0, 255],
                    blueviolet: [138, 43, 226],
                    brown: [165, 42, 42],
                    burlywood: [222, 184, 135],
                    cadetblue: [95, 158, 160],
                    chartreuse: [127, 255, 0],
                    chocolate: [210, 105, 30],
                    coral: [255, 127, 80],
                    cornflowerblue: [100, 149, 237],
                    cornsilk: [255, 248, 220],
                    crimson: [220, 20, 60],
                    cyan: [0, 255, 255],
                    darkblue: [0, 0, 139],
                    darkcyan: [0, 139, 139],
                    darkgoldenrod: [184, 134, 11],
                    darkgray: [169, 169, 169],
                    darkgreen: [0, 100, 0],
                    darkgrey: [169, 169, 169],
                    darkkhaki: [189, 183, 107],
                    darkmagenta: [139, 0, 139],
                    darkolivegreen: [85, 107, 47],
                    darkorange: [255, 140, 0],
                    darkorchid: [153, 50, 204],
                    darkred: [139, 0, 0],
                    darksalmon: [233, 150, 122],
                    darkseagreen: [143, 188, 143],
                    darkslateblue: [72, 61, 139],
                    darkslategray: [47, 79, 79],
                    darkslategrey: [47, 79, 79],
                    darkturquoise: [0, 206, 209],
                    darkviolet: [148, 0, 211],
                    deeppink: [255, 20, 147],
                    deepskyblue: [0, 191, 255],
                    dimgray: [105, 105, 105],
                    dimgrey: [105, 105, 105],
                    dodgerblue: [30, 144, 255],
                    firebrick: [178, 34, 34],
                    floralwhite: [255, 250, 240],
                    forestgreen: [34, 139, 34],
                    fuchsia: [255, 0, 255],
                    gainsboro: [220, 220, 220],
                    ghostwhite: [248, 248, 255],
                    gold: [255, 215, 0],
                    goldenrod: [218, 165, 32],
                    gray: [128, 128, 128],
                    green: [0, 128, 0],
                    greenyellow: [173, 255, 47],
                    grey: [128, 128, 128],
                    honeydew: [240, 255, 240],
                    hotpink: [255, 105, 180],
                    indianred: [205, 92, 92],
                    indigo: [75, 0, 130],
                    ivory: [255, 255, 240],
                    khaki: [240, 230, 140],
                    lavender: [230, 230, 250],
                    lavenderblush: [255, 240, 245],
                    lawngreen: [124, 252, 0],
                    lemonchiffon: [255, 250, 205],
                    lightblue: [173, 216, 230],
                    lightcoral: [240, 128, 128],
                    lightcyan: [224, 255, 255],
                    lightgoldenrodyellow: [250, 250, 210],
                    lightgray: [211, 211, 211],
                    lightgreen: [144, 238, 144],
                    lightgrey: [211, 211, 211],
                    lightpink: [255, 182, 193],
                    lightsalmon: [255, 160, 122],
                    lightseagreen: [32, 178, 170],
                    lightskyblue: [135, 206, 250],
                    lightslategray: [119, 136, 153],
                    lightslategrey: [119, 136, 153],
                    lightsteelblue: [176, 196, 222],
                    lightyellow: [255, 255, 224],
                    lime: [0, 255, 0],
                    limegreen: [50, 205, 50],
                    linen: [250, 240, 230],
                    magenta: [255, 0, 255],
                    maroon: [128, 0, 0],
                    mediumaquamarine: [102, 205, 170],
                    mediumblue: [0, 0, 205],
                    mediumorchid: [186, 85, 211],
                    mediumpurple: [147, 112, 219],
                    mediumseagreen: [60, 179, 113],
                    mediumslateblue: [123, 104, 238],
                    mediumspringgreen: [0, 250, 154],
                    mediumturquoise: [72, 209, 204],
                    mediumvioletred: [199, 21, 133],
                    midnightblue: [25, 25, 112],
                    mintcream: [245, 255, 250],
                    mistyrose: [255, 228, 225],
                    moccasin: [255, 228, 181],
                    navajowhite: [255, 222, 173],
                    navy: [0, 0, 128],
                    oldlace: [253, 245, 230],
                    olive: [128, 128, 0],
                    olivedrab: [107, 142, 35],
                    orange: [255, 165, 0],
                    orangered: [255, 69, 0],
                    orchid: [218, 112, 214],
                    palegoldenrod: [238, 232, 170],
                    palegreen: [152, 251, 152],
                    paleturquoise: [175, 238, 238],
                    palevioletred: [219, 112, 147],
                    papayawhip: [255, 239, 213],
                    peachpuff: [255, 218, 185],
                    peru: [205, 133, 63],
                    pink: [255, 192, 203],
                    plum: [221, 160, 221],
                    powderblue: [176, 224, 230],
                    purple: [128, 0, 128],
                    rebeccapurple: [102, 51, 153],
                    red: [255, 0, 0],
                    rosybrown: [188, 143, 143],
                    royalblue: [65, 105, 225],
                    saddlebrown: [139, 69, 19],
                    salmon: [250, 128, 114],
                    sandybrown: [244, 164, 96],
                    seagreen: [46, 139, 87],
                    seashell: [255, 245, 238],
                    sienna: [160, 82, 45],
                    silver: [192, 192, 192],
                    skyblue: [135, 206, 235],
                    slateblue: [106, 90, 205],
                    slategray: [112, 128, 144],
                    slategrey: [112, 128, 144],
                    snow: [255, 250, 250],
                    springgreen: [0, 255, 127],
                    steelblue: [70, 130, 180],
                    tan: [210, 180, 140],
                    teal: [0, 128, 128],
                    thistle: [216, 191, 216],
                    tomato: [255, 99, 71],
                    turquoise: [64, 224, 208],
                    violet: [238, 130, 238],
                    wheat: [245, 222, 179],
                    white: [255, 255, 255],
                    whitesmoke: [245, 245, 245],
                    yellow: [255, 255, 0],
                    yellowgreen: [154, 205, 50]
                },
                S = {};
            for (var T in D) S[JSON.stringify(D[T])] = T
        }, {}],
        5: [function(t, e, n) {
            var i = t(4),
                r = function() {
                    return new u
                };
            for (var a in i) {
                r[a + "Raw"] = function(t) {
                    return function(e) {
                        return "number" == typeof e && (e = Array.prototype.slice.call(arguments)), i[t](e)
                    }
                }(a);
                var o = /(\w+)2(\w+)/.exec(a),
                    s = o[1],
                    l = o[2];
                (r[s] = r[s] || {})[l] = r[a] = function(t) {
                    return function(e) {
                        "number" == typeof e && (e = Array.prototype.slice.call(arguments));
                        var n = i[t](e);
                        if ("string" == typeof n || void 0 === n) return n;
                        for (var r = 0; r < n.length; r++) n[r] = Math.round(n[r]);
                        return n
                    }
                }(a)
            }
            var u = function() {
                this.convs = {}
            };
            u.prototype.routeSpace = function(t, e) {
                var n = e[0];
                return void 0 === n ? this.getValues(t) : ("number" == typeof n && (n = Array.prototype.slice.call(e)), this.setValues(t, n))
            }, u.prototype.setValues = function(t, e) {
                return this.space = t, this.convs = {}, this.convs[t] = e, this
            }, u.prototype.getValues = function(t) {
                var e = this.convs[t];
                if (!e) {
                    var n = this.space,
                        i = this.convs[n];
                    e = r[n][t](i), this.convs[t] = e
                }
                return e
            }, ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function(t) {
                u.prototype[t] = function(e) {
                    return this.routeSpace(t, arguments)
                }
            }), e.exports = r
        }, {
            4: 4
        }],
        6: [function(t, e, n) {
            "use strict";
            e.exports = {
                aliceblue: [240, 248, 255],
                antiquewhite: [250, 235, 215],
                aqua: [0, 255, 255],
                aquamarine: [127, 255, 212],
                azure: [240, 255, 255],
                beige: [245, 245, 220],
                bisque: [255, 228, 196],
                black: [0, 0, 0],
                blanchedalmond: [255, 235, 205],
                blue: [0, 0, 255],
                blueviolet: [138, 43, 226],
                brown: [165, 42, 42],
                burlywood: [222, 184, 135],
                cadetblue: [95, 158, 160],
                chartreuse: [127, 255, 0],
                chocolate: [210, 105, 30],
                coral: [255, 127, 80],
                cornflowerblue: [100, 149, 237],
                cornsilk: [255, 248, 220],
                crimson: [220, 20, 60],
                cyan: [0, 255, 255],
                darkblue: [0, 0, 139],
                darkcyan: [0, 139, 139],
                darkgoldenrod: [184, 134, 11],
                darkgray: [169, 169, 169],
                darkgreen: [0, 100, 0],
                darkgrey: [169, 169, 169],
                darkkhaki: [189, 183, 107],
                darkmagenta: [139, 0, 139],
                darkolivegreen: [85, 107, 47],
                darkorange: [255, 140, 0],
                darkorchid: [153, 50, 204],
                darkred: [139, 0, 0],
                darksalmon: [233, 150, 122],
                darkseagreen: [143, 188, 143],
                darkslateblue: [72, 61, 139],
                darkslategray: [47, 79, 79],
                darkslategrey: [47, 79, 79],
                darkturquoise: [0, 206, 209],
                darkviolet: [148, 0, 211],
                deeppink: [255, 20, 147],
                deepskyblue: [0, 191, 255],
                dimgray: [105, 105, 105],
                dimgrey: [105, 105, 105],
                dodgerblue: [30, 144, 255],
                firebrick: [178, 34, 34],
                floralwhite: [255, 250, 240],
                forestgreen: [34, 139, 34],
                fuchsia: [255, 0, 255],
                gainsboro: [220, 220, 220],
                ghostwhite: [248, 248, 255],
                gold: [255, 215, 0],
                goldenrod: [218, 165, 32],
                gray: [128, 128, 128],
                green: [0, 128, 0],
                greenyellow: [173, 255, 47],
                grey: [128, 128, 128],
                honeydew: [240, 255, 240],
                hotpink: [255, 105, 180],
                indianred: [205, 92, 92],
                indigo: [75, 0, 130],
                ivory: [255, 255, 240],
                khaki: [240, 230, 140],
                lavender: [230, 230, 250],
                lavenderblush: [255, 240, 245],
                lawngreen: [124, 252, 0],
                lemonchiffon: [255, 250, 205],
                lightblue: [173, 216, 230],
                lightcoral: [240, 128, 128],
                lightcyan: [224, 255, 255],
                lightgoldenrodyellow: [250, 250, 210],
                lightgray: [211, 211, 211],
                lightgreen: [144, 238, 144],
                lightgrey: [211, 211, 211],
                lightpink: [255, 182, 193],
                lightsalmon: [255, 160, 122],
                lightseagreen: [32, 178, 170],
                lightskyblue: [135, 206, 250],
                lightslategray: [119, 136, 153],
                lightslategrey: [119, 136, 153],
                lightsteelblue: [176, 196, 222],
                lightyellow: [255, 255, 224],
                lime: [0, 255, 0],
                limegreen: [50, 205, 50],
                linen: [250, 240, 230],
                magenta: [255, 0, 255],
                maroon: [128, 0, 0],
                mediumaquamarine: [102, 205, 170],
                mediumblue: [0, 0, 205],
                mediumorchid: [186, 85, 211],
                mediumpurple: [147, 112, 219],
                mediumseagreen: [60, 179, 113],
                mediumslateblue: [123, 104, 238],
                mediumspringgreen: [0, 250, 154],
                mediumturquoise: [72, 209, 204],
                mediumvioletred: [199, 21, 133],
                midnightblue: [25, 25, 112],
                mintcream: [245, 255, 250],
                mistyrose: [255, 228, 225],
                moccasin: [255, 228, 181],
                navajowhite: [255, 222, 173],
                navy: [0, 0, 128],
                oldlace: [253, 245, 230],
                olive: [128, 128, 0],
                olivedrab: [107, 142, 35],
                orange: [255, 165, 0],
                orangered: [255, 69, 0],
                orchid: [218, 112, 214],
                palegoldenrod: [238, 232, 170],
                palegreen: [152, 251, 152],
                paleturquoise: [175, 238, 238],
                palevioletred: [219, 112, 147],
                papayawhip: [255, 239, 213],
                peachpuff: [255, 218, 185],
                peru: [205, 133, 63],
                pink: [255, 192, 203],
                plum: [221, 160, 221],
                powderblue: [176, 224, 230],
                purple: [128, 0, 128],
                rebeccapurple: [102, 51, 153],
                red: [255, 0, 0],
                rosybrown: [188, 143, 143],
                royalblue: [65, 105, 225],
                saddlebrown: [139, 69, 19],
                salmon: [250, 128, 114],
                sandybrown: [244, 164, 96],
                seagreen: [46, 139, 87],
                seashell: [255, 245, 238],
                sienna: [160, 82, 45],
                silver: [192, 192, 192],
                skyblue: [135, 206, 235],
                slateblue: [106, 90, 205],
                slategray: [112, 128, 144],
                slategrey: [112, 128, 144],
                snow: [255, 250, 250],
                springgreen: [0, 255, 127],
                steelblue: [70, 130, 180],
                tan: [210, 180, 140],
                teal: [0, 128, 128],
                thistle: [216, 191, 216],
                tomato: [255, 99, 71],
                turquoise: [64, 224, 208],
                violet: [238, 130, 238],
                wheat: [245, 222, 179],
                white: [255, 255, 255],
                whitesmoke: [245, 245, 245],
                yellow: [255, 255, 0],
                yellowgreen: [154, 205, 50]
            }
        }, {}],
        7: [function(t, e, n) {
            var i = t(29)();
            i.helpers = t(45), t(27)(i), i.defaults = t(25), i.Element = t(26), i.elements = t(40), i.Interaction = t(28), i.layouts = t(30), i.platform = t(48), i.plugins = t(31), i.Ticks = t(34), t(22)(i), t(23)(i), t(24)(i), t(33)(i), t(32)(i), t(35)(i), t(55)(i), t(53)(i), t(54)(i), t(56)(i), t(57)(i), t(58)(i), t(15)(i), t(16)(i), t(17)(i), t(18)(i), t(19)(i), t(20)(i), t(21)(i), t(8)(i), t(9)(i), t(10)(i), t(11)(i), t(12)(i), t(13)(i), t(14)(i);
            var r = t(49);
            for (var a in r) r.hasOwnProperty(a) && i.plugins.register(r[a]);
            i.platform.initialize(), e.exports = i, "undefined" != typeof window && (window.Chart = i), i.Legend = r.legend._element, i.Title = r.title._element, i.pluginService = i.plugins, i.PluginBase = i.Element.extend({}), i.canvasHelpers = i.helpers.canvas, i.layoutService = i.layouts
        }, {
            10: 10,
            11: 11,
            12: 12,
            13: 13,
            14: 14,
            15: 15,
            16: 16,
            17: 17,
            18: 18,
            19: 19,
            20: 20,
            21: 21,
            22: 22,
            23: 23,
            24: 24,
            25: 25,
            26: 26,
            27: 27,
            28: 28,
            29: 29,
            30: 30,
            31: 31,
            32: 32,
            33: 33,
            34: 34,
            35: 35,
            40: 40,
            45: 45,
            48: 48,
            49: 49,
            53: 53,
            54: 54,
            55: 55,
            56: 56,
            57: 57,
            58: 58,
            8: 8,
            9: 9
        }],
        8: [function(t, e, n) {
            "use strict";
            e.exports = function(t) {
                t.Bar = function(e, n) {
                    return n.type = "bar", new t(e, n)
                }
            }
        }, {}],
        9: [function(t, e, n) {
            "use strict";
            e.exports = function(t) {
                t.Bubble = function(e, n) {
                    return n.type = "bubble", new t(e, n)
                }
            }
        }, {}],
        10: [function(t, e, n) {
            "use strict";
            e.exports = function(t) {
                t.Doughnut = function(e, n) {
                    return n.type = "doughnut", new t(e, n)
                }
            }
        }, {}],
        11: [function(t, e, n) {
            "use strict";
            e.exports = function(t) {
                t.Line = function(e, n) {
                    return n.type = "line", new t(e, n)
                }
            }
        }, {}],
        12: [function(t, e, n) {
            "use strict";
            e.exports = function(t) {
                t.PolarArea = function(e, n) {
                    return n.type = "polarArea", new t(e, n)
                }
            }
        }, {}],
        13: [function(t, e, n) {
            "use strict";
            e.exports = function(t) {
                t.Radar = function(e, n) {
                    return n.type = "radar", new t(e, n)
                }
            }
        }, {}],
        14: [function(t, e, n) {
            "use strict";
            e.exports = function(t) {
                t.Scatter = function(e, n) {
                    return n.type = "scatter", new t(e, n)
                }
            }
        }, {}],
        15: [function(t, e, n) {
            "use strict";
            var i = t(25),
                r = t(40),
                a = t(45);
            i._set("bar", {
                hover: {
                    mode: "label"
                },
                scales: {
                    xAxes: [{
                        type: "category",
                        categoryPercentage: .8,
                        barPercentage: .9,
                        offset: !0,
                        gridLines: {
                            offsetGridLines: !0
                        }
                    }],
                    yAxes: [{
                        type: "linear"
                    }]
                }
            }), i._set("horizontalBar", {
                hover: {
                    mode: "index",
                    axis: "y"
                },
                scales: {
                    xAxes: [{
                        type: "linear",
                        position: "bottom"
                    }],
                    yAxes: [{
                        position: "left",
                        type: "category",
                        categoryPercentage: .8,
                        barPercentage: .9,
                        offset: !0,
                        gridLines: {
                            offsetGridLines: !0
                        }
                    }]
                },
                elements: {
                    rectangle: {
                        borderSkipped: "left"
                    }
                },
                tooltips: {
                    callbacks: {
                        title: function(t, e) {
                            var n = "";
                            return t.length > 0 && (t[0].yLabel ? n = t[0].yLabel : e.labels.length > 0 && t[0].index < e.labels.length && (n = e.labels[t[0].index])), n
                        },
                        label: function(t, e) {
                            return (e.datasets[t.datasetIndex].label || "") + ": " + t.xLabel
                        }
                    },
                    mode: "index",
                    axis: "y"
                }
            }), e.exports = function(t) {
                t.controllers.bar = t.DatasetController.extend({
                    dataElementType: r.Rectangle,
                    initialize: function() {
                        var e;
                        t.DatasetController.prototype.initialize.apply(this, arguments), (e = this.getMeta()).stack = this.getDataset().stack, e.bar = !0
                    },
                    update: function(t) {
                        var e, n, i = this.getMeta().data;
                        for (this._ruler = this.getRuler(), e = 0, n = i.length; e < n; ++e) this.updateElement(i[e], e, t)
                    },
                    updateElement: function(t, e, n) {
                        var i = this,
                            r = i.chart,
                            o = i.getMeta(),
                            s = i.getDataset(),
                            l = t.custom || {},
                            u = r.options.elements.rectangle;
                        t._xScale = i.getScaleForId(o.xAxisID), t._yScale = i.getScaleForId(o.yAxisID), t._datasetIndex = i.index, t._index = e, t._model = {
                            datasetLabel: s.label,
                            label: r.data.labels[e],
                            borderSkipped: l.borderSkipped ? l.borderSkipped : u.borderSkipped,
                            backgroundColor: l.backgroundColor ? l.backgroundColor : a.valueAtIndexOrDefault(s.backgroundColor, e, u.backgroundColor),
                            borderColor: l.borderColor ? l.borderColor : a.valueAtIndexOrDefault(s.borderColor, e, u.borderColor),
                            borderWidth: l.borderWidth ? l.borderWidth : a.valueAtIndexOrDefault(s.borderWidth, e, u.borderWidth)
                        }, i.updateElementGeometry(t, e, n), t.pivot()
                    },
                    updateElementGeometry: function(t, e, n) {
                        var i = this,
                            r = t._model,
                            a = i.getValueScale(),
                            o = a.getBasePixel(),
                            s = a.isHorizontal(),
                            l = i._ruler || i.getRuler(),
                            u = i.calculateBarValuePixels(i.index, e),
                            c = i.calculateBarIndexPixels(i.index, e, l);
                        r.horizontal = s, r.base = n ? o : u.base, r.x = s ? n ? o : u.head : c.center, r.y = s ? c.center : n ? o : u.head, r.height = s ? c.size : void 0, r.width = s ? void 0 : c.size
                    },
                    getValueScaleId: function() {
                        return this.getMeta().yAxisID
                    },
                    getIndexScaleId: function() {
                        return this.getMeta().xAxisID
                    },
                    getValueScale: function() {
                        return this.getScaleForId(this.getValueScaleId())
                    },
                    getIndexScale: function() {
                        return this.getScaleForId(this.getIndexScaleId())
                    },
                    _getStacks: function(t) {
                        var e, n, i = this.chart,
                            r = this.getIndexScale().options.stacked,
                            a = void 0 === t ? i.data.datasets.length : t + 1,
                            o = [];
                        for (e = 0; e < a; ++e)(n = i.getDatasetMeta(e)).bar && i.isDatasetVisible(e) && (!1 === r || !0 === r && -1 === o.indexOf(n.stack) || void 0 === r && (void 0 === n.stack || -1 === o.indexOf(n.stack))) && o.push(n.stack);
                        return o
                    },
                    getStackCount: function() {
                        return this._getStacks().length
                    },
                    getStackIndex: function(t, e) {
                        var n = this._getStacks(t),
                            i = void 0 !== e ? n.indexOf(e) : -1;
                        return -1 === i ? n.length - 1 : i
                    },
                    getRuler: function() {
                        var t, e, n = this.getIndexScale(),
                            i = this.getStackCount(),
                            r = this.index,
                            o = n.isHorizontal(),
                            s = o ? n.left : n.top,
                            l = s + (o ? n.width : n.height),
                            u = [];
                        for (t = 0, e = this.getMeta().data.length; t < e; ++t) u.push(n.getPixelForValue(null, t, r));
                        return {
                            min: a.isNullOrUndef(n.options.barThickness) ? function(t, e) {
                                var n, i, r, a, o = t.isHorizontal() ? t.width : t.height,
                                    s = t.getTicks();
                                for (r = 1, a = e.length; r < a; ++r) o = Math.min(o, e[r] - e[r - 1]);
                                for (r = 0, a = s.length; r < a; ++r) i = t.getPixelForTick(r), o = r > 0 ? Math.min(o, i - n) : o, n = i;
                                return o
                            }(n, u) : -1,
                            pixels: u,
                            start: s,
                            end: l,
                            stackCount: i,
                            scale: n
                        }
                    },
                    calculateBarValuePixels: function(t, e) {
                        var n, i, r, a, o, s, l = this.chart,
                            u = this.getMeta(),
                            c = this.getValueScale(),
                            d = l.data.datasets,
                            h = c.getRightValue(d[t].data[e]),
                            f = c.options.stacked,
                            p = u.stack,
                            g = 0;
                        if (f || void 0 === f && void 0 !== p)
                            for (n = 0; n < t; ++n)(i = l.getDatasetMeta(n)).bar && i.stack === p && i.controller.getValueScaleId() === c.id && l.isDatasetVisible(n) && (r = c.getRightValue(d[n].data[e]), (h < 0 && r < 0 || h >= 0 && r > 0) && (g += r));
                        return a = c.getPixelForValue(g), {
                            size: s = ((o = c.getPixelForValue(g + h)) - a) / 2,
                            base: a,
                            head: o,
                            center: o + s / 2
                        }
                    },
                    calculateBarIndexPixels: function(t, e, n) {
                        var i, r, o, s, l, u, c, d, h, f, p, g, m, v, y, b, x, w = n.scale.options,
                            k = "flex" === w.barThickness ? (h = e, p = w, m = (f = n).pixels, v = m[h], y = h > 0 ? m[h - 1] : null, b = h < m.length - 1 ? m[h + 1] : null, x = p.categoryPercentage, null === y && (y = v - (null === b ? f.end - v : b - v)), null === b && (b = v + v - y), g = v - (v - y) / 2 * x, {
                                chunk: (b - y) / 2 * x / f.stackCount,
                                ratio: p.barPercentage,
                                start: g
                            }) : (i = e, r = n, u = (o = w).barThickness, c = r.stackCount, d = r.pixels[i], a.isNullOrUndef(u) ? (s = r.min * o.categoryPercentage, l = o.barPercentage) : (s = u * c, l = 1), {
                                chunk: s / c,
                                ratio: l,
                                start: d - s / 2
                            }),
                            C = this.getStackIndex(t, this.getMeta().stack),
                            D = k.start + k.chunk * C + k.chunk / 2,
                            S = Math.min(a.valueOrDefault(w.maxBarThickness, 1 / 0), k.chunk * k.ratio);
                        return {
                            base: D - S / 2,
                            head: D + S / 2,
                            center: D,
                            size: S
                        }
                    },
                    draw: function() {
                        var t = this.chart,
                            e = this.getValueScale(),
                            n = this.getMeta().data,
                            i = this.getDataset(),
                            r = n.length,
                            o = 0;
                        for (a.canvas.clipArea(t.ctx, t.chartArea); o < r; ++o) isNaN(e.getRightValue(i.data[o])) || n[o].draw();
                        a.canvas.unclipArea(t.ctx)
                    },
                    setHoverStyle: function(t) {
                        var e = this.chart.data.datasets[t._datasetIndex],
                            n = t._index,
                            i = t.custom || {},
                            r = t._model;
                        r.backgroundColor = i.hoverBackgroundColor ? i.hoverBackgroundColor : a.valueAtIndexOrDefault(e.hoverBackgroundColor, n, a.getHoverColor(r.backgroundColor)), r.borderColor = i.hoverBorderColor ? i.hoverBorderColor : a.valueAtIndexOrDefault(e.hoverBorderColor, n, a.getHoverColor(r.borderColor)), r.borderWidth = i.hoverBorderWidth ? i.hoverBorderWidth : a.valueAtIndexOrDefault(e.hoverBorderWidth, n, r.borderWidth)
                    },
                    removeHoverStyle: function(t) {
                        var e = this.chart.data.datasets[t._datasetIndex],
                            n = t._index,
                            i = t.custom || {},
                            r = t._model,
                            o = this.chart.options.elements.rectangle;
                        r.backgroundColor = i.backgroundColor ? i.backgroundColor : a.valueAtIndexOrDefault(e.backgroundColor, n, o.backgroundColor), r.borderColor = i.borderColor ? i.borderColor : a.valueAtIndexOrDefault(e.borderColor, n, o.borderColor), r.borderWidth = i.borderWidth ? i.borderWidth : a.valueAtIndexOrDefault(e.borderWidth, n, o.borderWidth)
                    }
                }), t.controllers.horizontalBar = t.controllers.bar.extend({
                    getValueScaleId: function() {
                        return this.getMeta().xAxisID
                    },
                    getIndexScaleId: function() {
                        return this.getMeta().yAxisID
                    }
                })
            }
        }, {
            25: 25,
            40: 40,
            45: 45
        }],
        16: [function(t, e, n) {
            "use strict";
            var i = t(25),
                r = t(40),
                a = t(45);
            i._set("bubble", {
                hover: {
                    mode: "single"
                },
                scales: {
                    xAxes: [{
                        type: "linear",
                        position: "bottom",
                        id: "x-axis-0"
                    }],
                    yAxes: [{
                        type: "linear",
                        position: "left",
                        id: "y-axis-0"
                    }]
                },
                tooltips: {
                    callbacks: {
                        title: function() {
                            return ""
                        },
                        label: function(t, e) {
                            var n = e.datasets[t.datasetIndex].label || "",
                                i = e.datasets[t.datasetIndex].data[t.index];
                            return n + ": (" + t.xLabel + ", " + t.yLabel + ", " + i.r + ")"
                        }
                    }
                }
            }), e.exports = function(t) {
                t.controllers.bubble = t.DatasetController.extend({
                    dataElementType: r.Point,
                    update: function(t) {
                        var e = this,
                            n = e.getMeta().data;
                        a.each(n, function(n, i) {
                            e.updateElement(n, i, t)
                        })
                    },
                    updateElement: function(t, e, n) {
                        var i = this,
                            r = i.getMeta(),
                            a = t.custom || {},
                            o = i.getScaleForId(r.xAxisID),
                            s = i.getScaleForId(r.yAxisID),
                            l = i._resolveElementOptions(t, e),
                            u = i.getDataset().data[e],
                            c = i.index,
                            d = n ? o.getPixelForDecimal(.5) : o.getPixelForValue("object" == typeof u ? u : NaN, e, c),
                            h = n ? s.getBasePixel() : s.getPixelForValue(u, e, c);
                        t._xScale = o, t._yScale = s, t._options = l, t._datasetIndex = c, t._index = e, t._model = {
                            backgroundColor: l.backgroundColor,
                            borderColor: l.borderColor,
                            borderWidth: l.borderWidth,
                            hitRadius: l.hitRadius,
                            pointStyle: l.pointStyle,
                            radius: n ? 0 : l.radius,
                            skip: a.skip || isNaN(d) || isNaN(h),
                            x: d,
                            y: h
                        }, t.pivot()
                    },
                    setHoverStyle: function(t) {
                        var e = t._model,
                            n = t._options;
                        e.backgroundColor = a.valueOrDefault(n.hoverBackgroundColor, a.getHoverColor(n.backgroundColor)), e.borderColor = a.valueOrDefault(n.hoverBorderColor, a.getHoverColor(n.borderColor)), e.borderWidth = a.valueOrDefault(n.hoverBorderWidth, n.borderWidth), e.radius = n.radius + n.hoverRadius
                    },
                    removeHoverStyle: function(t) {
                        var e = t._model,
                            n = t._options;
                        e.backgroundColor = n.backgroundColor, e.borderColor = n.borderColor, e.borderWidth = n.borderWidth, e.radius = n.radius
                    },
                    _resolveElementOptions: function(t, e) {
                        var n, i, r, o = this.chart,
                            s = o.data.datasets[this.index],
                            l = t.custom || {},
                            u = o.options.elements.point,
                            c = a.options.resolve,
                            d = s.data[e],
                            h = {},
                            f = {
                                chart: o,
                                dataIndex: e,
                                dataset: s,
                                datasetIndex: this.index
                            },
                            p = ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle"];
                        for (n = 0, i = p.length; n < i; ++n) h[r = p[n]] = c([l[r], s[r], u[r]], f, e);
                        return h.radius = c([l.radius, d ? d.r : void 0, s.radius, u.radius], f, e), h
                    }
                })
            }
        }, {
            25: 25,
            40: 40,
            45: 45
        }],
        17: [function(t, e, n) {
            "use strict";
            var i = t(25),
                r = t(40),
                a = t(45);
            i._set("doughnut", {
                animation: {
                    animateRotate: !0,
                    animateScale: !1
                },
                hover: {
                    mode: "single"
                },
                legendCallback: function(t) {
                    var e = [];
                    e.push('<ul class="' + t.id + '-legend">');
                    var n = t.data,
                        i = n.datasets,
                        r = n.labels;
                    if (i.length)
                        for (var a = 0; a < i[0].data.length; ++a) e.push('<li><span style="background-color:' + i[0].backgroundColor[a] + '"></span>'), r[a] && e.push(r[a]), e.push("</li>");
                    return e.push("</ul>"), e.join("")
                },
                legend: {
                    labels: {
                        generateLabels: function(t) {
                            var e = t.data;
                            return e.labels.length && e.datasets.length ? e.labels.map(function(n, i) {
                                var r = t.getDatasetMeta(0),
                                    o = e.datasets[0],
                                    s = r.data[i],
                                    l = s && s.custom || {},
                                    u = a.valueAtIndexOrDefault,
                                    c = t.options.elements.arc;
                                return {
                                    text: n,
                                    fillStyle: l.backgroundColor ? l.backgroundColor : u(o.backgroundColor, i, c.backgroundColor),
                                    strokeStyle: l.borderColor ? l.borderColor : u(o.borderColor, i, c.borderColor),
                                    lineWidth: l.borderWidth ? l.borderWidth : u(o.borderWidth, i, c.borderWidth),
                                    hidden: isNaN(o.data[i]) || r.data[i].hidden,
                                    index: i
                                }
                            }) : []
                        }
                    },
                    onClick: function(t, e) {
                        var n, i, r, a = e.index,
                            o = this.chart;
                        for (n = 0, i = (o.data.datasets || []).length; n < i; ++n)(r = o.getDatasetMeta(n)).data[a] && (r.data[a].hidden = !r.data[a].hidden);
                        o.update()
                    }
                },
                cutoutPercentage: 50,
                rotation: -.5 * Math.PI,
                circumference: 2 * Math.PI,
                tooltips: {
                    callbacks: {
                        title: function() {
                            return ""
                        },
                        label: function(t, e) {
                            var n = e.labels[t.index],
                                i = ": " + e.datasets[t.datasetIndex].data[t.index];
                            return a.isArray(n) ? (n = n.slice())[0] += i : n += i, n
                        }
                    }
                }
            }), i._set("pie", a.clone(i.doughnut)), i._set("pie", {
                cutoutPercentage: 0
            }), e.exports = function(t) {
                t.controllers.doughnut = t.controllers.pie = t.DatasetController.extend({
                    dataElementType: r.Arc,
                    linkScales: a.noop,
                    getRingIndex: function(t) {
                        for (var e = 0, n = 0; n < t; ++n) this.chart.isDatasetVisible(n) && ++e;
                        return e
                    },
                    update: function(t) {
                        var e = this,
                            n = e.chart,
                            i = n.chartArea,
                            r = n.options,
                            o = r.elements.arc,
                            s = i.right - i.left - o.borderWidth,
                            l = i.bottom - i.top - o.borderWidth,
                            u = Math.min(s, l),
                            c = {
                                x: 0,
                                y: 0
                            },
                            d = e.getMeta(),
                            h = r.cutoutPercentage,
                            f = r.circumference;
                        if (f < 2 * Math.PI) {
                            var p = r.rotation % (2 * Math.PI),
                                g = (p += 2 * Math.PI * (p >= Math.PI ? -1 : p < -Math.PI ? 1 : 0)) + f,
                                m = Math.cos(p),
                                v = Math.sin(p),
                                y = Math.cos(g),
                                b = Math.sin(g),
                                x = p <= 0 && g >= 0 || p <= 2 * Math.PI && 2 * Math.PI <= g,
                                w = p <= .5 * Math.PI && .5 * Math.PI <= g || p <= 2.5 * Math.PI && 2.5 * Math.PI <= g,
                                k = p <= -Math.PI && -Math.PI <= g || p <= Math.PI && Math.PI <= g,
                                C = p <= .5 * -Math.PI && .5 * -Math.PI <= g || p <= 1.5 * Math.PI && 1.5 * Math.PI <= g,
                                D = h / 100,
                                S = k ? -1 : Math.min(m * (m < 0 ? 1 : D), y * (y < 0 ? 1 : D)),
                                T = C ? -1 : Math.min(v * (v < 0 ? 1 : D), b * (b < 0 ? 1 : D)),
                                M = x ? 1 : Math.max(m * (m > 0 ? 1 : D), y * (y > 0 ? 1 : D)),
                                _ = w ? 1 : Math.max(v * (v > 0 ? 1 : D), b * (b > 0 ? 1 : D)),
                                A = .5 * (M - S),
                                P = .5 * (_ - T);
                            u = Math.min(s / A, l / P), c = {
                                x: -.5 * (M + S),
                                y: -.5 * (_ + T)
                            }
                        }
                        n.borderWidth = e.getMaxBorderWidth(d.data), n.outerRadius = Math.max((u - n.borderWidth) / 2, 0), n.innerRadius = Math.max(h ? n.outerRadius / 100 * h : 0, 0), n.radiusLength = (n.outerRadius - n.innerRadius) / n.getVisibleDatasetCount(), n.offsetX = c.x * n.outerRadius, n.offsetY = c.y * n.outerRadius, d.total = e.calculateTotal(), e.outerRadius = n.outerRadius - n.radiusLength * e.getRingIndex(e.index), e.innerRadius = Math.max(e.outerRadius - n.radiusLength, 0), a.each(d.data, function(n, i) {
                            e.updateElement(n, i, t)
                        })
                    },
                    updateElement: function(t, e, n) {
                        var i = this,
                            r = i.chart,
                            o = r.chartArea,
                            s = r.options,
                            l = s.animation,
                            u = (o.left + o.right) / 2,
                            c = (o.top + o.bottom) / 2,
                            d = s.rotation,
                            h = s.rotation,
                            f = i.getDataset(),
                            p = n && l.animateRotate ? 0 : t.hidden ? 0 : i.calculateCircumference(f.data[e]) * (s.circumference / (2 * Math.PI)),
                            g = n && l.animateScale ? 0 : i.innerRadius,
                            m = n && l.animateScale ? 0 : i.outerRadius,
                            v = a.valueAtIndexOrDefault;
                        a.extend(t, {
                            _datasetIndex: i.index,
                            _index: e,
                            _model: {
                                x: u + r.offsetX,
                                y: c + r.offsetY,
                                startAngle: d,
                                endAngle: h,
                                circumference: p,
                                outerRadius: m,
                                innerRadius: g,
                                label: v(f.label, e, r.data.labels[e])
                            }
                        });
                        var y = t._model;
                        this.removeHoverStyle(t), n && l.animateRotate || (y.startAngle = 0 === e ? s.rotation : i.getMeta().data[e - 1]._model.endAngle, y.endAngle = y.startAngle + y.circumference), t.pivot()
                    },
                    removeHoverStyle: function(e) {
                        t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc)
                    },
                    calculateTotal: function() {
                        var t, e = this.getDataset(),
                            n = this.getMeta(),
                            i = 0;
                        return a.each(n.data, function(n, r) {
                            t = e.data[r], isNaN(t) || n.hidden || (i += Math.abs(t))
                        }), i
                    },
                    calculateCircumference: function(t) {
                        var e = this.getMeta().total;
                        return e > 0 && !isNaN(t) ? 2 * Math.PI * (Math.abs(t) / e) : 0
                    },
                    getMaxBorderWidth: function(t) {
                        for (var e, n, i = 0, r = this.index, a = t.length, o = 0; o < a; o++) e = t[o]._model ? t[o]._model.borderWidth : 0, i = (n = t[o]._chart ? t[o]._chart.config.data.datasets[r].hoverBorderWidth : 0) > (i = e > i ? e : i) ? n : i;
                        return i
                    }
                })
            }
        }, {
            25: 25,
            40: 40,
            45: 45
        }],
        18: [function(t, e, n) {
            "use strict";
            var i = t(25),
                r = t(40),
                a = t(45);
            i._set("line", {
                showLines: !0,
                spanGaps: !1,
                hover: {
                    mode: "label"
                },
                scales: {
                    xAxes: [{
                        type: "category",
                        id: "x-axis-0"
                    }],
                    yAxes: [{
                        type: "linear",
                        id: "y-axis-0"
                    }]
                }
            }), e.exports = function(t) {
                function e(t, e) {
                    return a.valueOrDefault(t.showLine, e.showLines)
                }
                t.controllers.line = t.DatasetController.extend({
                    datasetElementType: r.Line,
                    dataElementType: r.Point,
                    update: function(t) {
                        var n, i, r, o = this,
                            s = o.getMeta(),
                            l = s.dataset,
                            u = s.data || [],
                            c = o.chart.options,
                            d = c.elements.line,
                            h = o.getScaleForId(s.yAxisID),
                            f = o.getDataset(),
                            p = e(f, c);
                        for (p && (r = l.custom || {}, void 0 !== f.tension && void 0 === f.lineTension && (f.lineTension = f.tension), l._scale = h, l._datasetIndex = o.index, l._children = u, l._model = {
                                spanGaps: f.spanGaps ? f.spanGaps : c.spanGaps,
                                tension: r.tension ? r.tension : a.valueOrDefault(f.lineTension, d.tension),
                                backgroundColor: r.backgroundColor ? r.backgroundColor : f.backgroundColor || d.backgroundColor,
                                borderWidth: r.borderWidth ? r.borderWidth : f.borderWidth || d.borderWidth,
                                borderColor: r.borderColor ? r.borderColor : f.borderColor || d.borderColor,
                                borderCapStyle: r.borderCapStyle ? r.borderCapStyle : f.borderCapStyle || d.borderCapStyle,
                                borderDash: r.borderDash ? r.borderDash : f.borderDash || d.borderDash,
                                borderDashOffset: r.borderDashOffset ? r.borderDashOffset : f.borderDashOffset || d.borderDashOffset,
                                borderJoinStyle: r.borderJoinStyle ? r.borderJoinStyle : f.borderJoinStyle || d.borderJoinStyle,
                                fill: r.fill ? r.fill : void 0 !== f.fill ? f.fill : d.fill,
                                steppedLine: r.steppedLine ? r.steppedLine : a.valueOrDefault(f.steppedLine, d.stepped),
                                cubicInterpolationMode: r.cubicInterpolationMode ? r.cubicInterpolationMode : a.valueOrDefault(f.cubicInterpolationMode, d.cubicInterpolationMode)
                            }, l.pivot()), n = 0, i = u.length; n < i; ++n) o.updateElement(u[n], n, t);
                        for (p && 0 !== l._model.tension && o.updateBezierControlPoints(), n = 0, i = u.length; n < i; ++n) u[n].pivot()
                    },
                    getPointBackgroundColor: function(t, e) {
                        var n = this.chart.options.elements.point.backgroundColor,
                            i = this.getDataset(),
                            r = t.custom || {};
                        return r.backgroundColor ? n = r.backgroundColor : i.pointBackgroundColor ? n = a.valueAtIndexOrDefault(i.pointBackgroundColor, e, n) : i.backgroundColor && (n = i.backgroundColor), n
                    },
                    getPointBorderColor: function(t, e) {
                        var n = this.chart.options.elements.point.borderColor,
                            i = this.getDataset(),
                            r = t.custom || {};
                        return r.borderColor ? n = r.borderColor : i.pointBorderColor ? n = a.valueAtIndexOrDefault(i.pointBorderColor, e, n) : i.borderColor && (n = i.borderColor), n
                    },
                    getPointBorderWidth: function(t, e) {
                        var n = this.chart.options.elements.point.borderWidth,
                            i = this.getDataset(),
                            r = t.custom || {};
                        return isNaN(r.borderWidth) ? !isNaN(i.pointBorderWidth) || a.isArray(i.pointBorderWidth) ? n = a.valueAtIndexOrDefault(i.pointBorderWidth, e, n) : isNaN(i.borderWidth) || (n = i.borderWidth) : n = r.borderWidth, n
                    },
                    updateElement: function(t, e, n) {
                        var i, r, o = this,
                            s = o.getMeta(),
                            l = t.custom || {},
                            u = o.getDataset(),
                            c = o.index,
                            d = u.data[e],
                            h = o.getScaleForId(s.yAxisID),
                            f = o.getScaleForId(s.xAxisID),
                            p = o.chart.options.elements.point;
                        void 0 !== u.radius && void 0 === u.pointRadius && (u.pointRadius = u.radius), void 0 !== u.hitRadius && void 0 === u.pointHitRadius && (u.pointHitRadius = u.hitRadius), i = f.getPixelForValue("object" == typeof d ? d : NaN, e, c), r = n ? h.getBasePixel() : o.calculatePointY(d, e, c), t._xScale = f, t._yScale = h, t._datasetIndex = c, t._index = e, t._model = {
                            x: i,
                            y: r,
                            skip: l.skip || isNaN(i) || isNaN(r),
                            radius: l.radius || a.valueAtIndexOrDefault(u.pointRadius, e, p.radius),
                            pointStyle: l.pointStyle || a.valueAtIndexOrDefault(u.pointStyle, e, p.pointStyle),
                            backgroundColor: o.getPointBackgroundColor(t, e),
                            borderColor: o.getPointBorderColor(t, e),
                            borderWidth: o.getPointBorderWidth(t, e),
                            tension: s.dataset._model ? s.dataset._model.tension : 0,
                            steppedLine: !!s.dataset._model && s.dataset._model.steppedLine,
                            hitRadius: l.hitRadius || a.valueAtIndexOrDefault(u.pointHitRadius, e, p.hitRadius)
                        }
                    },
                    calculatePointY: function(t, e, n) {
                        var i, r, a, o = this.chart,
                            s = this.getMeta(),
                            l = this.getScaleForId(s.yAxisID),
                            u = 0,
                            c = 0;
                        if (l.options.stacked) {
                            for (i = 0; i < n; i++)
                                if (r = o.data.datasets[i], "line" === (a = o.getDatasetMeta(i)).type && a.yAxisID === l.id && o.isDatasetVisible(i)) {
                                    var d = Number(l.getRightValue(r.data[e]));
                                    d < 0 ? c += d || 0 : u += d || 0
                                }
                            var h = Number(l.getRightValue(t));
                            return h < 0 ? l.getPixelForValue(c + h) : l.getPixelForValue(u + h)
                        }
                        return l.getPixelForValue(t)
                    },
                    updateBezierControlPoints: function() {
                        var t, e, n, i, r = this.getMeta(),
                            o = this.chart.chartArea,
                            s = r.data || [];

                        function l(t, e, n) {
                            return Math.max(Math.min(t, n), e)
                        }
                        if (r.dataset._model.spanGaps && (s = s.filter(function(t) {
                                return !t._model.skip
                            })), "monotone" === r.dataset._model.cubicInterpolationMode) a.splineCurveMonotone(s);
                        else
                            for (t = 0, e = s.length; t < e; ++t) n = s[t]._model, i = a.splineCurve(a.previousItem(s, t)._model, n, a.nextItem(s, t)._model, r.dataset._model.tension), n.controlPointPreviousX = i.previous.x, n.controlPointPreviousY = i.previous.y, n.controlPointNextX = i.next.x, n.controlPointNextY = i.next.y;
                        if (this.chart.options.elements.line.capBezierPoints)
                            for (t = 0, e = s.length; t < e; ++t)(n = s[t]._model).controlPointPreviousX = l(n.controlPointPreviousX, o.left, o.right), n.controlPointPreviousY = l(n.controlPointPreviousY, o.top, o.bottom), n.controlPointNextX = l(n.controlPointNextX, o.left, o.right), n.controlPointNextY = l(n.controlPointNextY, o.top, o.bottom)
                    },
                    draw: function() {
                        var t = this.chart,
                            n = this.getMeta(),
                            i = n.data || [],
                            r = t.chartArea,
                            o = i.length,
                            s = 0;
                        for (a.canvas.clipArea(t.ctx, r), e(this.getDataset(), t.options) && n.dataset.draw(), a.canvas.unclipArea(t.ctx); s < o; ++s) i[s].draw(r)
                    },
                    setHoverStyle: function(t) {
                        var e = this.chart.data.datasets[t._datasetIndex],
                            n = t._index,
                            i = t.custom || {},
                            r = t._model;
                        r.radius = i.hoverRadius || a.valueAtIndexOrDefault(e.pointHoverRadius, n, this.chart.options.elements.point.hoverRadius), r.backgroundColor = i.hoverBackgroundColor || a.valueAtIndexOrDefault(e.pointHoverBackgroundColor, n, a.getHoverColor(r.backgroundColor)), r.borderColor = i.hoverBorderColor || a.valueAtIndexOrDefault(e.pointHoverBorderColor, n, a.getHoverColor(r.borderColor)), r.borderWidth = i.hoverBorderWidth || a.valueAtIndexOrDefault(e.pointHoverBorderWidth, n, r.borderWidth)
                    },
                    removeHoverStyle: function(t) {
                        var e = this,
                            n = e.chart.data.datasets[t._datasetIndex],
                            i = t._index,
                            r = t.custom || {},
                            o = t._model;
                        void 0 !== n.radius && void 0 === n.pointRadius && (n.pointRadius = n.radius), o.radius = r.radius || a.valueAtIndexOrDefault(n.pointRadius, i, e.chart.options.elements.point.radius), o.backgroundColor = e.getPointBackgroundColor(t, i), o.borderColor = e.getPointBorderColor(t, i), o.borderWidth = e.getPointBorderWidth(t, i)
                    }
                })
            }
        }, {
            25: 25,
            40: 40,
            45: 45
        }],
        19: [function(t, e, n) {
            "use strict";
            var i = t(25),
                r = t(40),
                a = t(45);
            i._set("polarArea", {
                scale: {
                    type: "radialLinear",
                    angleLines: {
                        display: !1
                    },
                    gridLines: {
                        circular: !0
                    },
                    pointLabels: {
                        display: !1
                    },
                    ticks: {
                        beginAtZero: !0
                    }
                },
                animation: {
                    animateRotate: !0,
                    animateScale: !0
                },
                startAngle: -.5 * Math.PI,
                legendCallback: function(t) {
                    var e = [];
                    e.push('<ul class="' + t.id + '-legend">');
                    var n = t.data,
                        i = n.datasets,
                        r = n.labels;
                    if (i.length)
                        for (var a = 0; a < i[0].data.length; ++a) e.push('<li><span style="background-color:' + i[0].backgroundColor[a] + '"></span>'), r[a] && e.push(r[a]), e.push("</li>");
                    return e.push("</ul>"), e.join("")
                },
                legend: {
                    labels: {
                        generateLabels: function(t) {
                            var e = t.data;
                            return e.labels.length && e.datasets.length ? e.labels.map(function(n, i) {
                                var r = t.getDatasetMeta(0),
                                    o = e.datasets[0],
                                    s = r.data[i].custom || {},
                                    l = a.valueAtIndexOrDefault,
                                    u = t.options.elements.arc;
                                return {
                                    text: n,
                                    fillStyle: s.backgroundColor ? s.backgroundColor : l(o.backgroundColor, i, u.backgroundColor),
                                    strokeStyle: s.borderColor ? s.borderColor : l(o.borderColor, i, u.borderColor),
                                    lineWidth: s.borderWidth ? s.borderWidth : l(o.borderWidth, i, u.borderWidth),
                                    hidden: isNaN(o.data[i]) || r.data[i].hidden,
                                    index: i
                                }
                            }) : []
                        }
                    },
                    onClick: function(t, e) {
                        var n, i, r, a = e.index,
                            o = this.chart;
                        for (n = 0, i = (o.data.datasets || []).length; n < i; ++n)(r = o.getDatasetMeta(n)).data[a].hidden = !r.data[a].hidden;
                        o.update()
                    }
                },
                tooltips: {
                    callbacks: {
                        title: function() {
                            return ""
                        },
                        label: function(t, e) {
                            return e.labels[t.index] + ": " + t.yLabel
                        }
                    }
                }
            }), e.exports = function(t) {
                t.controllers.polarArea = t.DatasetController.extend({
                    dataElementType: r.Arc,
                    linkScales: a.noop,
                    update: function(t) {
                        var e = this,
                            n = e.chart,
                            i = n.chartArea,
                            r = e.getMeta(),
                            o = n.options,
                            s = o.elements.arc,
                            l = Math.min(i.right - i.left, i.bottom - i.top);
                        n.outerRadius = Math.max((l - s.borderWidth / 2) / 2, 0), n.innerRadius = Math.max(o.cutoutPercentage ? n.outerRadius / 100 * o.cutoutPercentage : 1, 0), n.radiusLength = (n.outerRadius - n.innerRadius) / n.getVisibleDatasetCount(), e.outerRadius = n.outerRadius - n.radiusLength * e.index, e.innerRadius = e.outerRadius - n.radiusLength, r.count = e.countVisibleElements(), a.each(r.data, function(n, i) {
                            e.updateElement(n, i, t)
                        })
                    },
                    updateElement: function(t, e, n) {
                        for (var i = this, r = i.chart, o = i.getDataset(), s = r.options, l = s.animation, u = r.scale, c = r.data.labels, d = i.calculateCircumference(o.data[e]), h = u.xCenter, f = u.yCenter, p = 0, g = i.getMeta(), m = 0; m < e; ++m) isNaN(o.data[m]) || g.data[m].hidden || ++p;
                        var v = s.startAngle,
                            y = t.hidden ? 0 : u.getDistanceFromCenterForValue(o.data[e]),
                            b = v + d * p,
                            x = b + (t.hidden ? 0 : d),
                            w = l.animateScale ? 0 : u.getDistanceFromCenterForValue(o.data[e]);
                        a.extend(t, {
                            _datasetIndex: i.index,
                            _index: e,
                            _scale: u,
                            _model: {
                                x: h,
                                y: f,
                                innerRadius: 0,
                                outerRadius: n ? w : y,
                                startAngle: n && l.animateRotate ? v : b,
                                endAngle: n && l.animateRotate ? v : x,
                                label: a.valueAtIndexOrDefault(c, e, c[e])
                            }
                        }), i.removeHoverStyle(t), t.pivot()
                    },
                    removeHoverStyle: function(e) {
                        t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc)
                    },
                    countVisibleElements: function() {
                        var t = this.getDataset(),
                            e = this.getMeta(),
                            n = 0;
                        return a.each(e.data, function(e, i) {
                            isNaN(t.data[i]) || e.hidden || n++
                        }), n
                    },
                    calculateCircumference: function(t) {
                        var e = this.getMeta().count;
                        return e > 0 && !isNaN(t) ? 2 * Math.PI / e : 0
                    }
                })
            }
        }, {
            25: 25,
            40: 40,
            45: 45
        }],
        20: [function(t, e, n) {
            "use strict";
            var i = t(25),
                r = t(40),
                a = t(45);
            i._set("radar", {
                scale: {
                    type: "radialLinear"
                },
                elements: {
                    line: {
                        tension: 0
                    }
                }
            }), e.exports = function(t) {
                t.controllers.radar = t.DatasetController.extend({
                    datasetElementType: r.Line,
                    dataElementType: r.Point,
                    linkScales: a.noop,
                    update: function(t) {
                        var e = this,
                            n = e.getMeta(),
                            i = n.dataset,
                            r = n.data,
                            o = i.custom || {},
                            s = e.getDataset(),
                            l = e.chart.options.elements.line,
                            u = e.chart.scale;
                        void 0 !== s.tension && void 0 === s.lineTension && (s.lineTension = s.tension), a.extend(n.dataset, {
                            _datasetIndex: e.index,
                            _scale: u,
                            _children: r,
                            _loop: !0,
                            _model: {
                                tension: o.tension ? o.tension : a.valueOrDefault(s.lineTension, l.tension),
                                backgroundColor: o.backgroundColor ? o.backgroundColor : s.backgroundColor || l.backgroundColor,
                                borderWidth: o.borderWidth ? o.borderWidth : s.borderWidth || l.borderWidth,
                                borderColor: o.borderColor ? o.borderColor : s.borderColor || l.borderColor,
                                fill: o.fill ? o.fill : void 0 !== s.fill ? s.fill : l.fill,
                                borderCapStyle: o.borderCapStyle ? o.borderCapStyle : s.borderCapStyle || l.borderCapStyle,
                                borderDash: o.borderDash ? o.borderDash : s.borderDash || l.borderDash,
                                borderDashOffset: o.borderDashOffset ? o.borderDashOffset : s.borderDashOffset || l.borderDashOffset,
                                borderJoinStyle: o.borderJoinStyle ? o.borderJoinStyle : s.borderJoinStyle || l.borderJoinStyle
                            }
                        }), n.dataset.pivot(), a.each(r, function(n, i) {
                            e.updateElement(n, i, t)
                        }, e), e.updateBezierControlPoints()
                    },
                    updateElement: function(t, e, n) {
                        var i = this,
                            r = t.custom || {},
                            o = i.getDataset(),
                            s = i.chart.scale,
                            l = i.chart.options.elements.point,
                            u = s.getPointPositionForValue(e, o.data[e]);
                        void 0 !== o.radius && void 0 === o.pointRadius && (o.pointRadius = o.radius), void 0 !== o.hitRadius && void 0 === o.pointHitRadius && (o.pointHitRadius = o.hitRadius), a.extend(t, {
                            _datasetIndex: i.index,
                            _index: e,
                            _scale: s,
                            _model: {
                                x: n ? s.xCenter : u.x,
                                y: n ? s.yCenter : u.y,
                                tension: r.tension ? r.tension : a.valueOrDefault(o.lineTension, i.chart.options.elements.line.tension),
                                radius: r.radius ? r.radius : a.valueAtIndexOrDefault(o.pointRadius, e, l.radius),
                                backgroundColor: r.backgroundColor ? r.backgroundColor : a.valueAtIndexOrDefault(o.pointBackgroundColor, e, l.backgroundColor),
                                borderColor: r.borderColor ? r.borderColor : a.valueAtIndexOrDefault(o.pointBorderColor, e, l.borderColor),
                                borderWidth: r.borderWidth ? r.borderWidth : a.valueAtIndexOrDefault(o.pointBorderWidth, e, l.borderWidth),
                                pointStyle: r.pointStyle ? r.pointStyle : a.valueAtIndexOrDefault(o.pointStyle, e, l.pointStyle),
                                hitRadius: r.hitRadius ? r.hitRadius : a.valueAtIndexOrDefault(o.pointHitRadius, e, l.hitRadius)
                            }
                        }), t._model.skip = r.skip ? r.skip : isNaN(t._model.x) || isNaN(t._model.y)
                    },
                    updateBezierControlPoints: function() {
                        var t = this.chart.chartArea,
                            e = this.getMeta();
                        a.each(e.data, function(n, i) {
                            var r = n._model,
                                o = a.splineCurve(a.previousItem(e.data, i, !0)._model, r, a.nextItem(e.data, i, !0)._model, r.tension);
                            r.controlPointPreviousX = Math.max(Math.min(o.previous.x, t.right), t.left), r.controlPointPreviousY = Math.max(Math.min(o.previous.y, t.bottom), t.top), r.controlPointNextX = Math.max(Math.min(o.next.x, t.right), t.left), r.controlPointNextY = Math.max(Math.min(o.next.y, t.bottom), t.top), n.pivot()
                        })
                    },
                    setHoverStyle: function(t) {
                        var e = this.chart.data.datasets[t._datasetIndex],
                            n = t.custom || {},
                            i = t._index,
                            r = t._model;
                        r.radius = n.hoverRadius ? n.hoverRadius : a.valueAtIndexOrDefault(e.pointHoverRadius, i, this.chart.options.elements.point.hoverRadius), r.backgroundColor = n.hoverBackgroundColor ? n.hoverBackgroundColor : a.valueAtIndexOrDefault(e.pointHoverBackgroundColor, i, a.getHoverColor(r.backgroundColor)), r.borderColor = n.hoverBorderColor ? n.hoverBorderColor : a.valueAtIndexOrDefault(e.pointHoverBorderColor, i, a.getHoverColor(r.borderColor)), r.borderWidth = n.hoverBorderWidth ? n.hoverBorderWidth : a.valueAtIndexOrDefault(e.pointHoverBorderWidth, i, r.borderWidth)
                    },
                    removeHoverStyle: function(t) {
                        var e = this.chart.data.datasets[t._datasetIndex],
                            n = t.custom || {},
                            i = t._index,
                            r = t._model,
                            o = this.chart.options.elements.point;
                        r.radius = n.radius ? n.radius : a.valueAtIndexOrDefault(e.pointRadius, i, o.radius), r.backgroundColor = n.backgroundColor ? n.backgroundColor : a.valueAtIndexOrDefault(e.pointBackgroundColor, i, o.backgroundColor), r.borderColor = n.borderColor ? n.borderColor : a.valueAtIndexOrDefault(e.pointBorderColor, i, o.borderColor), r.borderWidth = n.borderWidth ? n.borderWidth : a.valueAtIndexOrDefault(e.pointBorderWidth, i, o.borderWidth)
                    }
                })
            }
        }, {
            25: 25,
            40: 40,
            45: 45
        }],
        21: [function(t, e, n) {
            "use strict";
            t(25)._set("scatter", {
                hover: {
                    mode: "single"
                },
                scales: {
                    xAxes: [{
                        id: "x-axis-1",
                        type: "linear",
                        position: "bottom"
                    }],
                    yAxes: [{
                        id: "y-axis-1",
                        type: "linear",
                        position: "left"
                    }]
                },
                showLines: !1,
                tooltips: {
                    callbacks: {
                        title: function() {
                            return ""
                        },
                        label: function(t) {
                            return "(" + t.xLabel + ", " + t.yLabel + ")"
                        }
                    }
                }
            }), e.exports = function(t) {
                t.controllers.scatter = t.controllers.line
            }
        }, {
            25: 25
        }],
        22: [function(t, e, n) {
            "use strict";
            var i = t(25),
                r = t(26),
                a = t(45);
            i._set("global", {
                animation: {
                    duration: 1e3,
                    easing: "easeOutQuart",
                    onProgress: a.noop,
                    onComplete: a.noop
                }
            }), e.exports = function(t) {
                t.Animation = r.extend({
                    chart: null,
                    currentStep: 0,
                    numSteps: 60,
                    easing: "",
                    render: null,
                    onAnimationProgress: null,
                    onAnimationComplete: null
                }), t.animationService = {
                    frameDuration: 17,
                    animations: [],
                    dropFrames: 0,
                    request: null,
                    addAnimation: function(t, e, n, i) {
                        var r, a, o = this.animations;
                        for (e.chart = t, i || (t.animating = !0), r = 0, a = o.length; r < a; ++r)
                            if (o[r].chart === t) return void(o[r] = e);
                        o.push(e), 1 === o.length && this.requestAnimationFrame()
                    },
                    cancelAnimation: function(t) {
                        var e = a.findIndex(this.animations, function(e) {
                            return e.chart === t
                        }); - 1 !== e && (this.animations.splice(e, 1), t.animating = !1)
                    },
                    requestAnimationFrame: function() {
                        var t = this;
                        null === t.request && (t.request = a.requestAnimFrame.call(window, function() {
                            t.request = null, t.startDigest()
                        }))
                    },
                    startDigest: function() {
                        var t = this,
                            e = Date.now(),
                            n = 0;
                        t.dropFrames > 1 && (n = Math.floor(t.dropFrames), t.dropFrames = t.dropFrames % 1), t.advance(1 + n);
                        var i = Date.now();
                        t.dropFrames += (i - e) / t.frameDuration, t.animations.length > 0 && t.requestAnimationFrame()
                    },
                    advance: function(t) {
                        for (var e, n, i = this.animations, r = 0; r < i.length;) n = (e = i[r]).chart, e.currentStep = (e.currentStep || 0) + t, e.currentStep = Math.min(e.currentStep, e.numSteps), a.callback(e.render, [n, e], n), a.callback(e.onAnimationProgress, [e], n), e.currentStep >= e.numSteps ? (a.callback(e.onAnimationComplete, [e], n), n.animating = !1, i.splice(r, 1)) : ++r
                    }
                }, Object.defineProperty(t.Animation.prototype, "animationObject", {
                    get: function() {
                        return this
                    }
                }), Object.defineProperty(t.Animation.prototype, "chartInstance", {
                    get: function() {
                        return this.chart
                    },
                    set: function(t) {
                        this.chart = t
                    }
                })
            }
        }, {
            25: 25,
            26: 26,
            45: 45
        }],
        23: [function(t, e, n) {
            "use strict";
            var i = t(25),
                r = t(45),
                a = t(28),
                o = t(30),
                s = t(48),
                l = t(31);
            e.exports = function(t) {
                function e(t) {
                    return "top" === t || "bottom" === t
                }
                t.types = {}, t.instances = {}, t.controllers = {}, r.extend(t.prototype, {
                    construct: function(e, n) {
                        var a, o, l = this;
                        (o = (a = (a = n) || {}).data = a.data || {}).datasets = o.datasets || [], o.labels = o.labels || [], a.options = r.configMerge(i.global, i[a.type], a.options || {}), n = a;
                        var u = s.acquireContext(e, n),
                            c = u && u.canvas,
                            d = c && c.height,
                            h = c && c.width;
                        l.id = r.uid(), l.ctx = u, l.canvas = c, l.config = n, l.width = h, l.height = d, l.aspectRatio = d ? h / d : null, l.options = n.options, l._bufferedRender = !1, l.chart = l, l.controller = l, t.instances[l.id] = l, Object.defineProperty(l, "data", {
                            get: function() {
                                return l.config.data
                            },
                            set: function(t) {
                                l.config.data = t
                            }
                        }), u && c ? (l.initialize(), l.update()) : console.error("Failed to create chart: can't acquire context from the given item")
                    },
                    initialize: function() {
                        var t = this;
                        return l.notify(t, "beforeInit"), r.retinaScale(t, t.options.devicePixelRatio), t.bindEvents(), t.options.responsive && t.resize(!0), t.ensureScalesHaveIDs(), t.buildOrUpdateScales(), t.initToolTip(), l.notify(t, "afterInit"), t
                    },
                    clear: function() {
                        return r.canvas.clear(this), this
                    },
                    stop: function() {
                        return t.animationService.cancelAnimation(this), this
                    },
                    resize: function(t) {
                        var e = this,
                            n = e.options,
                            i = e.canvas,
                            a = n.maintainAspectRatio && e.aspectRatio || null,
                            o = Math.max(0, Math.floor(r.getMaximumWidth(i))),
                            s = Math.max(0, Math.floor(a ? o / a : r.getMaximumHeight(i)));
                        if ((e.width !== o || e.height !== s) && (i.width = e.width = o, i.height = e.height = s, i.style.width = o + "px", i.style.height = s + "px", r.retinaScale(e, n.devicePixelRatio), !t)) {
                            var u = {
                                width: o,
                                height: s
                            };
                            l.notify(e, "resize", [u]), e.options.onResize && e.options.onResize(e, u), e.stop(), e.update(e.options.responsiveAnimationDuration)
                        }
                    },
                    ensureScalesHaveIDs: function() {
                        var t = this.options,
                            e = t.scales || {},
                            n = t.scale;
                        r.each(e.xAxes, function(t, e) {
                            t.id = t.id || "x-axis-" + e
                        }), r.each(e.yAxes, function(t, e) {
                            t.id = t.id || "y-axis-" + e
                        }), n && (n.id = n.id || "scale")
                    },
                    buildOrUpdateScales: function() {
                        var n = this,
                            i = n.options,
                            a = n.scales || {},
                            o = [],
                            s = Object.keys(a).reduce(function(t, e) {
                                return t[e] = !1, t
                            }, {});
                        i.scales && (o = o.concat((i.scales.xAxes || []).map(function(t) {
                            return {
                                options: t,
                                dtype: "category",
                                dposition: "bottom"
                            }
                        }), (i.scales.yAxes || []).map(function(t) {
                            return {
                                options: t,
                                dtype: "linear",
                                dposition: "left"
                            }
                        }))), i.scale && o.push({
                            options: i.scale,
                            dtype: "radialLinear",
                            isDefault: !0,
                            dposition: "chartArea"
                        }), r.each(o, function(i) {
                            var o = i.options,
                                l = o.id,
                                u = r.valueOrDefault(o.type, i.dtype);
                            e(o.position) !== e(i.dposition) && (o.position = i.dposition), s[l] = !0;
                            var c = null;
                            if (l in a && a[l].type === u)(c = a[l]).options = o, c.ctx = n.ctx, c.chart = n;
                            else {
                                var d = t.scaleService.getScaleConstructor(u);
                                if (!d) return;
                                c = new d({
                                    id: l,
                                    type: u,
                                    options: o,
                                    ctx: n.ctx,
                                    chart: n
                                }), a[c.id] = c
                            }
                            c.mergeTicksOptions(), i.isDefault && (n.scale = c)
                        }), r.each(s, function(t, e) {
                            t || delete a[e]
                        }), n.scales = a, t.scaleService.addScalesToLayout(this)
                    },
                    buildOrUpdateControllers: function() {
                        var e = this,
                            n = [],
                            i = [];
                        return r.each(e.data.datasets, function(r, a) {
                            var o = e.getDatasetMeta(a),
                                s = r.type || e.config.type;
                            if (o.type && o.type !== s && (e.destroyDatasetMeta(a), o = e.getDatasetMeta(a)), o.type = s, n.push(o.type), o.controller) o.controller.updateIndex(a), o.controller.linkScales();
                            else {
                                var l = t.controllers[o.type];
                                if (void 0 === l) throw new Error('"' + o.type + '" is not a chart type.');
                                o.controller = new l(e, a), i.push(o.controller)
                            }
                        }, e), i
                    },
                    resetElements: function() {
                        var t = this;
                        r.each(t.data.datasets, function(e, n) {
                            t.getDatasetMeta(n).controller.reset()
                        }, t)
                    },
                    reset: function() {
                        this.resetElements(), this.tooltip.initialize()
                    },
                    update: function(e) {
                        var n, i, a = this;
                        if (e && "object" == typeof e || (e = {
                                duration: e,
                                lazy: arguments[1]
                            }), i = (n = a).options, r.each(n.scales, function(t) {
                                o.removeBox(n, t)
                            }), i = r.configMerge(t.defaults.global, t.defaults[n.config.type], i), n.options = n.config.options = i, n.ensureScalesHaveIDs(), n.buildOrUpdateScales(), n.tooltip._options = i.tooltips, n.tooltip.initialize(), l._invalidate(a), !1 !== l.notify(a, "beforeUpdate")) {
                            a.tooltip._data = a.data;
                            var s = a.buildOrUpdateControllers();
                            r.each(a.data.datasets, function(t, e) {
                                a.getDatasetMeta(e).controller.buildOrUpdateElements()
                            }, a), a.updateLayout(), a.options.animation && a.options.animation.duration && r.each(s, function(t) {
                                t.reset()
                            }), a.updateDatasets(), a.tooltip.initialize(), a.lastActive = [], l.notify(a, "afterUpdate"), a._bufferedRender ? a._bufferedRequest = {
                                duration: e.duration,
                                easing: e.easing,
                                lazy: e.lazy
                            } : a.render(e)
                        }
                    },
                    updateLayout: function() {
                        !1 !== l.notify(this, "beforeLayout") && (o.update(this, this.width, this.height), l.notify(this, "afterScaleUpdate"), l.notify(this, "afterLayout"))
                    },
                    updateDatasets: function() {
                        if (!1 !== l.notify(this, "beforeDatasetsUpdate")) {
                            for (var t = 0, e = this.data.datasets.length; t < e; ++t) this.updateDataset(t);
                            l.notify(this, "afterDatasetsUpdate")
                        }
                    },
                    updateDataset: function(t) {
                        var e = this.getDatasetMeta(t),
                            n = {
                                meta: e,
                                index: t
                            };
                        !1 !== l.notify(this, "beforeDatasetUpdate", [n]) && (e.controller.update(), l.notify(this, "afterDatasetUpdate", [n]))
                    },
                    render: function(e) {
                        var n = this;
                        e && "object" == typeof e || (e = {
                            duration: e,
                            lazy: arguments[1]
                        });
                        var i = e.duration,
                            a = e.lazy;
                        if (!1 !== l.notify(n, "beforeRender")) {
                            var o = n.options.animation,
                                s = function(t) {
                                    l.notify(n, "afterRender"), r.callback(o && o.onComplete, [t], n)
                                };
                            if (o && (void 0 !== i && 0 !== i || void 0 === i && 0 !== o.duration)) {
                                var u = new t.Animation({
                                    numSteps: (i || o.duration) / 16.66,
                                    easing: e.easing || o.easing,
                                    render: function(t, e) {
                                        var n = r.easing.effects[e.easing],
                                            i = e.currentStep,
                                            a = i / e.numSteps;
                                        t.draw(n(a), a, i)
                                    },
                                    onAnimationProgress: o.onProgress,
                                    onAnimationComplete: s
                                });
                                t.animationService.addAnimation(n, u, i, a)
                            } else n.draw(), s(new t.Animation({
                                numSteps: 0,
                                chart: n
                            }));
                            return n
                        }
                    },
                    draw: function(t) {
                        var e = this;
                        e.clear(), r.isNullOrUndef(t) && (t = 1), e.transition(t), !1 !== l.notify(e, "beforeDraw", [t]) && (r.each(e.boxes, function(t) {
                            t.draw(e.chartArea)
                        }, e), e.scale && e.scale.draw(), e.drawDatasets(t), e._drawTooltip(t), l.notify(e, "afterDraw", [t]))
                    },
                    transition: function(t) {
                        for (var e = 0, n = (this.data.datasets || []).length; e < n; ++e) this.isDatasetVisible(e) && this.getDatasetMeta(e).controller.transition(t);
                        this.tooltip.transition(t)
                    },
                    drawDatasets: function(t) {
                        var e = this;
                        if (!1 !== l.notify(e, "beforeDatasetsDraw", [t])) {
                            for (var n = (e.data.datasets || []).length - 1; n >= 0; --n) e.isDatasetVisible(n) && e.drawDataset(n, t);
                            l.notify(e, "afterDatasetsDraw", [t])
                        }
                    },
                    drawDataset: function(t, e) {
                        var n = this.getDatasetMeta(t),
                            i = {
                                meta: n,
                                index: t,
                                easingValue: e
                            };
                        !1 !== l.notify(this, "beforeDatasetDraw", [i]) && (n.controller.draw(e), l.notify(this, "afterDatasetDraw", [i]))
                    },
                    _drawTooltip: function(t) {
                        var e = this.tooltip,
                            n = {
                                tooltip: e,
                                easingValue: t
                            };
                        !1 !== l.notify(this, "beforeTooltipDraw", [n]) && (e.draw(), l.notify(this, "afterTooltipDraw", [n]))
                    },
                    getElementAtEvent: function(t) {
                        return a.modes.single(this, t)
                    },
                    getElementsAtEvent: function(t) {
                        return a.modes.label(this, t, {
                            intersect: !0
                        })
                    },
                    getElementsAtXAxis: function(t) {
                        return a.modes["x-axis"](this, t, {
                            intersect: !0
                        })
                    },
                    getElementsAtEventForMode: function(t, e, n) {
                        var i = a.modes[e];
                        return "function" == typeof i ? i(this, t, n) : []
                    },
                    getDatasetAtEvent: function(t) {
                        return a.modes.dataset(this, t, {
                            intersect: !0
                        })
                    },
                    getDatasetMeta: function(t) {
                        var e = this.data.datasets[t];
                        e._meta || (e._meta = {});
                        var n = e._meta[this.id];
                        return n || (n = e._meta[this.id] = {
                            type: null,
                            data: [],
                            dataset: null,
                            controller: null,
                            hidden: null,
                            xAxisID: null,
                            yAxisID: null
                        }), n
                    },
                    getVisibleDatasetCount: function() {
                        for (var t = 0, e = 0, n = this.data.datasets.length; e < n; ++e) this.isDatasetVisible(e) && t++;
                        return t
                    },
                    isDatasetVisible: function(t) {
                        var e = this.getDatasetMeta(t);
                        return "boolean" == typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden
                    },
                    generateLegend: function() {
                        return this.options.legendCallback(this)
                    },
                    destroyDatasetMeta: function(t) {
                        var e = this.id,
                            n = this.data.datasets[t],
                            i = n._meta && n._meta[e];
                        i && (i.controller.destroy(), delete n._meta[e])
                    },
                    destroy: function() {
                        var e, n, i = this,
                            a = i.canvas;
                        for (i.stop(), e = 0, n = i.data.datasets.length; e < n; ++e) i.destroyDatasetMeta(e);
                        a && (i.unbindEvents(), r.canvas.clear(i), s.releaseContext(i.ctx), i.canvas = null, i.ctx = null), l.notify(i, "destroy"), delete t.instances[i.id]
                    },
                    toBase64Image: function() {
                        return this.canvas.toDataURL.apply(this.canvas, arguments)
                    },
                    initToolTip: function() {
                        var e = this;
                        e.tooltip = new t.Tooltip({
                            _chart: e,
                            _chartInstance: e,
                            _data: e.data,
                            _options: e.options.tooltips
                        }, e)
                    },
                    bindEvents: function() {
                        var t = this,
                            e = t._listeners = {},
                            n = function() {
                                t.eventHandler.apply(t, arguments)
                            };
                        r.each(t.options.events, function(i) {
                            s.addEventListener(t, i, n), e[i] = n
                        }), t.options.responsive && (n = function() {
                            t.resize()
                        }, s.addEventListener(t, "resize", n), e.resize = n)
                    },
                    unbindEvents: function() {
                        var t = this,
                            e = t._listeners;
                        e && (delete t._listeners, r.each(e, function(e, n) {
                            s.removeEventListener(t, n, e)
                        }))
                    },
                    updateHoverStyle: function(t, e, n) {
                        var i, r, a, o = n ? "setHoverStyle" : "removeHoverStyle";
                        for (r = 0, a = t.length; r < a; ++r)(i = t[r]) && this.getDatasetMeta(i._datasetIndex).controller[o](i)
                    },
                    eventHandler: function(t) {
                        var e = this,
                            n = e.tooltip;
                        if (!1 !== l.notify(e, "beforeEvent", [t])) {
                            e._bufferedRender = !0, e._bufferedRequest = null;
                            var i = e.handleEvent(t);
                            n && (i = n._start ? n.handleEvent(t) : i | n.handleEvent(t)), l.notify(e, "afterEvent", [t]);
                            var r = e._bufferedRequest;
                            return r ? e.render(r) : i && !e.animating && (e.stop(), e.render(e.options.hover.animationDuration, !0)), e._bufferedRender = !1, e._bufferedRequest = null, e
                        }
                    },
                    handleEvent: function(t) {
                        var e, n = this,
                            i = n.options || {},
                            a = i.hover;
                        return n.lastActive = n.lastActive || [], "mouseout" === t.type ? n.active = [] : n.active = n.getElementsAtEventForMode(t, a.mode, a), r.callback(i.onHover || i.hover.onHover, [t.native, n.active], n), "mouseup" !== t.type && "click" !== t.type || i.onClick && i.onClick.call(n, t.native, n.active), n.lastActive.length && n.updateHoverStyle(n.lastActive, a.mode, !1), n.active.length && a.mode && n.updateHoverStyle(n.active, a.mode, !0), e = !r.arrayEquals(n.active, n.lastActive), n.lastActive = n.active, e
                    }
                }), t.Controller = t
            }
        }, {
            25: 25,
            28: 28,
            30: 30,
            31: 31,
            45: 45,
            48: 48
        }],
        24: [function(t, e, n) {
            "use strict";
            var i = t(45);
            e.exports = function(t) {
                var e = ["push", "pop", "shift", "splice", "unshift"];

                function n(t, n) {
                    var i = t._chartjs;
                    if (i) {
                        var r = i.listeners,
                            a = r.indexOf(n); - 1 !== a && r.splice(a, 1), r.length > 0 || (e.forEach(function(e) {
                            delete t[e]
                        }), delete t._chartjs)
                    }
                }
                t.DatasetController = function(t, e) {
                    this.initialize(t, e)
                }, i.extend(t.DatasetController.prototype, {
                    datasetElementType: null,
                    dataElementType: null,
                    initialize: function(t, e) {
                        this.chart = t, this.index = e, this.linkScales(), this.addElements()
                    },
                    updateIndex: function(t) {
                        this.index = t
                    },
                    linkScales: function() {
                        var t = this,
                            e = t.getMeta(),
                            n = t.getDataset();
                        null !== e.xAxisID && e.xAxisID in t.chart.scales || (e.xAxisID = n.xAxisID || t.chart.options.scales.xAxes[0].id), null !== e.yAxisID && e.yAxisID in t.chart.scales || (e.yAxisID = n.yAxisID || t.chart.options.scales.yAxes[0].id)
                    },
                    getDataset: function() {
                        return this.chart.data.datasets[this.index]
                    },
                    getMeta: function() {
                        return this.chart.getDatasetMeta(this.index)
                    },
                    getScaleForId: function(t) {
                        return this.chart.scales[t]
                    },
                    reset: function() {
                        this.update(!0)
                    },
                    destroy: function() {
                        this._data && n(this._data, this)
                    },
                    createMetaDataset: function() {
                        var t = this.datasetElementType;
                        return t && new t({
                            _chart: this.chart,
                            _datasetIndex: this.index
                        })
                    },
                    createMetaData: function(t) {
                        var e = this.dataElementType;
                        return e && new e({
                            _chart: this.chart,
                            _datasetIndex: this.index,
                            _index: t
                        })
                    },
                    addElements: function() {
                        var t, e, n = this.getMeta(),
                            i = this.getDataset().data || [],
                            r = n.data;
                        for (t = 0, e = i.length; t < e; ++t) r[t] = r[t] || this.createMetaData(t);
                        n.dataset = n.dataset || this.createMetaDataset()
                    },
                    addElementAndReset: function(t) {
                        var e = this.createMetaData(t);
                        this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0)
                    },
                    buildOrUpdateElements: function() {
                        var t, r, a = this,
                            o = a.getDataset(),
                            s = o.data || (o.data = []);
                        a._data !== s && (a._data && n(a._data, a), r = a, (t = s)._chartjs ? t._chartjs.listeners.push(r) : (Object.defineProperty(t, "_chartjs", {
                            configurable: !0,
                            enumerable: !1,
                            value: {
                                listeners: [r]
                            }
                        }), e.forEach(function(e) {
                            var n = "onData" + e.charAt(0).toUpperCase() + e.slice(1),
                                r = t[e];
                            Object.defineProperty(t, e, {
                                configurable: !0,
                                enumerable: !1,
                                value: function() {
                                    var e = Array.prototype.slice.call(arguments),
                                        a = r.apply(this, e);
                                    return i.each(t._chartjs.listeners, function(t) {
                                        "function" == typeof t[n] && t[n].apply(t, e)
                                    }), a
                                }
                            })
                        })), a._data = s), a.resyncElements()
                    },
                    update: i.noop,
                    transition: function(t) {
                        for (var e = this.getMeta(), n = e.data || [], i = n.length, r = 0; r < i; ++r) n[r].transition(t);
                        e.dataset && e.dataset.transition(t)
                    },
                    draw: function() {
                        var t = this.getMeta(),
                            e = t.data || [],
                            n = e.length,
                            i = 0;
                        for (t.dataset && t.dataset.draw(); i < n; ++i) e[i].draw()
                    },
                    removeHoverStyle: function(t, e) {
                        var n = this.chart.data.datasets[t._datasetIndex],
                            r = t._index,
                            a = t.custom || {},
                            o = i.valueAtIndexOrDefault,
                            s = t._model;
                        s.backgroundColor = a.backgroundColor ? a.backgroundColor : o(n.backgroundColor, r, e.backgroundColor), s.borderColor = a.borderColor ? a.borderColor : o(n.borderColor, r, e.borderColor), s.borderWidth = a.borderWidth ? a.borderWidth : o(n.borderWidth, r, e.borderWidth)
                    },
                    setHoverStyle: function(t) {
                        var e = this.chart.data.datasets[t._datasetIndex],
                            n = t._index,
                            r = t.custom || {},
                            a = i.valueAtIndexOrDefault,
                            o = i.getHoverColor,
                            s = t._model;
                        s.backgroundColor = r.hoverBackgroundColor ? r.hoverBackgroundColor : a(e.hoverBackgroundColor, n, o(s.backgroundColor)), s.borderColor = r.hoverBorderColor ? r.hoverBorderColor : a(e.hoverBorderColor, n, o(s.borderColor)), s.borderWidth = r.hoverBorderWidth ? r.hoverBorderWidth : a(e.hoverBorderWidth, n, s.borderWidth)
                    },
                    resyncElements: function() {
                        var t = this.getMeta(),
                            e = this.getDataset().data,
                            n = t.data.length,
                            i = e.length;
                        i < n ? t.data.splice(i, n - i) : i > n && this.insertElements(n, i - n)
                    },
                    insertElements: function(t, e) {
                        for (var n = 0; n < e; ++n) this.addElementAndReset(t + n)
                    },
                    onDataPush: function() {
                        this.insertElements(this.getDataset().data.length - 1, arguments.length)
                    },
                    onDataPop: function() {
                        this.getMeta().data.pop()
                    },
                    onDataShift: function() {
                        this.getMeta().data.shift()
                    },
                    onDataSplice: function(t, e) {
                        this.getMeta().data.splice(t, e), this.insertElements(t, arguments.length - 2)
                    },
                    onDataUnshift: function() {
                        this.insertElements(0, arguments.length)
                    }
                }), t.DatasetController.extend = i.inherits
            }
        }, {
            45: 45
        }],
        25: [function(t, e, n) {
            "use strict";
            var i = t(45);
            e.exports = {
                _set: function(t, e) {
                    return i.merge(this[t] || (this[t] = {}), e)
                }
            }
        }, {
            45: 45
        }],
        26: [function(t, e, n) {
            "use strict";
            var i = t(3),
                r = t(45),
                a = function(t) {
                    r.extend(this, t), this.initialize.apply(this, arguments)
                };
            r.extend(a.prototype, {
                initialize: function() {
                    this.hidden = !1
                },
                pivot: function() {
                    var t = this;
                    return t._view || (t._view = r.clone(t._model)), t._start = {}, t
                },
                transition: function(t) {
                    var e = this,
                        n = e._model,
                        r = e._start,
                        a = e._view;
                    return n && 1 !== t ? (a || (a = e._view = {}), r || (r = e._start = {}), function(t, e, n, r) {
                        var a, o, s, l, u, c, d, h, f, p = Object.keys(n);
                        for (a = 0, o = p.length; a < o; ++a)
                            if (c = n[s = p[a]], e.hasOwnProperty(s) || (e[s] = c), (l = e[s]) !== c && "_" !== s[0]) {
                                if (t.hasOwnProperty(s) || (t[s] = l), (d = typeof c) == typeof(u = t[s]))
                                    if ("string" === d) {
                                        if ((h = i(u)).valid && (f = i(c)).valid) {
                                            e[s] = f.mix(h, r).rgbString();
                                            continue
                                        }
                                    } else if ("number" === d && isFinite(u) && isFinite(c)) {
                                    e[s] = u + (c - u) * r;
                                    continue
                                }
                                e[s] = c
                            }
                    }(r, a, n, t), e) : (e._view = n, e._start = null, e)
                },
                tooltipPosition: function() {
                    return {
                        x: this._model.x,
                        y: this._model.y
                    }
                },
                hasValue: function() {
                    return r.isNumber(this._model.x) && r.isNumber(this._model.y)
                }
            }), a.extend = r.inherits, e.exports = a
        }, {
            3: 3,
            45: 45
        }],
        27: [function(t, e, n) {
            "use strict";
            var i = t(3),
                r = t(25),
                a = t(45);
            e.exports = function(t) {
                function e(t, e, n) {
                    var i;
                    return "string" == typeof t ? (i = parseInt(t, 10), -1 !== t.indexOf("%") && (i = i / 100 * e.parentNode[n])) : i = t, i
                }

                function n(t) {
                    return null != t && "none" !== t
                }

                function o(t, i, r) {
                    var a = document.defaultView,
                        o = t.parentNode,
                        s = a.getComputedStyle(t)[i],
                        l = a.getComputedStyle(o)[i],
                        u = n(s),
                        c = n(l),
                        d = Number.POSITIVE_INFINITY;
                    return u || c ? Math.min(u ? e(s, t, r) : d, c ? e(l, o, r) : d) : "none"
                }
                a.configMerge = function() {
                    return a.merge(a.clone(arguments[0]), [].slice.call(arguments, 1), {
                        merger: function(e, n, i, r) {
                            var o = n[e] || {},
                                s = i[e];
                            "scales" === e ? n[e] = a.scaleMerge(o, s) : "scale" === e ? n[e] = a.merge(o, [t.scaleService.getScaleDefaults(s.type), s]) : a._merger(e, n, i, r)
                        }
                    })
                }, a.scaleMerge = function() {
                    return a.merge(a.clone(arguments[0]), [].slice.call(arguments, 1), {
                        merger: function(e, n, i, r) {
                            if ("xAxes" === e || "yAxes" === e) {
                                var o, s, l, u = i[e].length;
                                for (n[e] || (n[e] = []), o = 0; o < u; ++o) l = i[e][o], s = a.valueOrDefault(l.type, "xAxes" === e ? "category" : "linear"), o >= n[e].length && n[e].push({}), !n[e][o].type || l.type && l.type !== n[e][o].type ? a.merge(n[e][o], [t.scaleService.getScaleDefaults(s), l]) : a.merge(n[e][o], l)
                            } else a._merger(e, n, i, r)
                        }
                    })
                }, a.where = function(t, e) {
                    if (a.isArray(t) && Array.prototype.filter) return t.filter(e);
                    var n = [];
                    return a.each(t, function(t) {
                        e(t) && n.push(t)
                    }), n
                }, a.findIndex = Array.prototype.findIndex ? function(t, e, n) {
                    return t.findIndex(e, n)
                } : function(t, e, n) {
                    n = void 0 === n ? t : n;
                    for (var i = 0, r = t.length; i < r; ++i)
                        if (e.call(n, t[i], i, t)) return i;
                    return -1
                }, a.findNextWhere = function(t, e, n) {
                    a.isNullOrUndef(n) && (n = -1);
                    for (var i = n + 1; i < t.length; i++) {
                        var r = t[i];
                        if (e(r)) return r
                    }
                }, a.findPreviousWhere = function(t, e, n) {
                    a.isNullOrUndef(n) && (n = t.length);
                    for (var i = n - 1; i >= 0; i--) {
                        var r = t[i];
                        if (e(r)) return r
                    }
                }, a.isNumber = function(t) {
                    return !isNaN(parseFloat(t)) && isFinite(t)
                }, a.almostEquals = function(t, e, n) {
                    return Math.abs(t - e) < n
                }, a.almostWhole = function(t, e) {
                    var n = Math.round(t);
                    return n - e < t && n + e > t
                }, a.max = function(t) {
                    return t.reduce(function(t, e) {
                        return isNaN(e) ? t : Math.max(t, e)
                    }, Number.NEGATIVE_INFINITY)
                }, a.min = function(t) {
                    return t.reduce(function(t, e) {
                        return isNaN(e) ? t : Math.min(t, e)
                    }, Number.POSITIVE_INFINITY)
                }, a.sign = Math.sign ? function(t) {
                    return Math.sign(t)
                } : function(t) {
                    return 0 == (t = +t) || isNaN(t) ? t : t > 0 ? 1 : -1
                }, a.log10 = Math.log10 ? function(t) {
                    return Math.log10(t)
                } : function(t) {
                    var e = Math.log(t) * Math.LOG10E,
                        n = Math.round(e);
                    return t === Math.pow(10, n) ? n : e
                }, a.toRadians = function(t) {
                    return t * (Math.PI / 180)
                }, a.toDegrees = function(t) {
                    return t * (180 / Math.PI)
                }, a.getAngleFromPoint = function(t, e) {
                    var n = e.x - t.x,
                        i = e.y - t.y,
                        r = Math.sqrt(n * n + i * i),
                        a = Math.atan2(i, n);
                    return a < -.5 * Math.PI && (a += 2 * Math.PI), {
                        angle: a,
                        distance: r
                    }
                }, a.distanceBetweenPoints = function(t, e) {
                    return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
                }, a.aliasPixel = function(t) {
                    return t % 2 == 0 ? 0 : .5
                }, a.splineCurve = function(t, e, n, i) {
                    var r = t.skip ? e : t,
                        a = e,
                        o = n.skip ? e : n,
                        s = Math.sqrt(Math.pow(a.x - r.x, 2) + Math.pow(a.y - r.y, 2)),
                        l = Math.sqrt(Math.pow(o.x - a.x, 2) + Math.pow(o.y - a.y, 2)),
                        u = s / (s + l),
                        c = l / (s + l),
                        d = i * (u = isNaN(u) ? 0 : u),
                        h = i * (c = isNaN(c) ? 0 : c);
                    return {
                        previous: {
                            x: a.x - d * (o.x - r.x),
                            y: a.y - d * (o.y - r.y)
                        },
                        next: {
                            x: a.x + h * (o.x - r.x),
                            y: a.y + h * (o.y - r.y)
                        }
                    }
                }, a.EPSILON = Number.EPSILON || 1e-14, a.splineCurveMonotone = function(t) {
                    var e, n, i, r, o, s, l, u, c, d = (t || []).map(function(t) {
                            return {
                                model: t._model,
                                deltaK: 0,
                                mK: 0
                            }
                        }),
                        h = d.length;
                    for (e = 0; e < h; ++e)
                        if (!(i = d[e]).model.skip) {
                            if (n = e > 0 ? d[e - 1] : null, (r = e < h - 1 ? d[e + 1] : null) && !r.model.skip) {
                                var f = r.model.x - i.model.x;
                                i.deltaK = 0 !== f ? (r.model.y - i.model.y) / f : 0
                            }!n || n.model.skip ? i.mK = i.deltaK : !r || r.model.skip ? i.mK = n.deltaK : this.sign(n.deltaK) !== this.sign(i.deltaK) ? i.mK = 0 : i.mK = (n.deltaK + i.deltaK) / 2
                        }
                    for (e = 0; e < h - 1; ++e) i = d[e], r = d[e + 1], i.model.skip || r.model.skip || (a.almostEquals(i.deltaK, 0, this.EPSILON) ? i.mK = r.mK = 0 : (o = i.mK / i.deltaK, s = r.mK / i.deltaK, (u = Math.pow(o, 2) + Math.pow(s, 2)) <= 9 || (l = 3 / Math.sqrt(u), i.mK = o * l * i.deltaK, r.mK = s * l * i.deltaK)));
                    for (e = 0; e < h; ++e)(i = d[e]).model.skip || (n = e > 0 ? d[e - 1] : null, r = e < h - 1 ? d[e + 1] : null, n && !n.model.skip && (c = (i.model.x - n.model.x) / 3, i.model.controlPointPreviousX = i.model.x - c, i.model.controlPointPreviousY = i.model.y - c * i.mK), r && !r.model.skip && (c = (r.model.x - i.model.x) / 3, i.model.controlPointNextX = i.model.x + c, i.model.controlPointNextY = i.model.y + c * i.mK))
                }, a.nextItem = function(t, e, n) {
                    return n ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1]
                }, a.previousItem = function(t, e, n) {
                    return n ? e <= 0 ? t[t.length - 1] : t[e - 1] : e <= 0 ? t[0] : t[e - 1]
                }, a.niceNum = function(t, e) {
                    var n = Math.floor(a.log10(t)),
                        i = t / Math.pow(10, n);
                    return (e ? i < 1.5 ? 1 : i < 3 ? 2 : i < 7 ? 5 : 10 : i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * Math.pow(10, n)
                }, a.requestAnimFrame = "undefined" == typeof window ? function(t) {
                    t()
                } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
                    return window.setTimeout(t, 1e3 / 60)
                }, a.getRelativePosition = function(t, e) {
                    var n, i, r = t.originalEvent || t,
                        o = t.currentTarget || t.srcElement,
                        s = o.getBoundingClientRect(),
                        l = r.touches;
                    l && l.length > 0 ? (n = l[0].clientX, i = l[0].clientY) : (n = r.clientX, i = r.clientY);
                    var u = parseFloat(a.getStyle(o, "padding-left")),
                        c = parseFloat(a.getStyle(o, "padding-top")),
                        d = parseFloat(a.getStyle(o, "padding-right")),
                        h = parseFloat(a.getStyle(o, "padding-bottom")),
                        f = s.right - s.left - u - d,
                        p = s.bottom - s.top - c - h;
                    return {
                        x: n = Math.round((n - s.left - u) / f * o.width / e.currentDevicePixelRatio),
                        y: i = Math.round((i - s.top - c) / p * o.height / e.currentDevicePixelRatio)
                    }
                }, a.getConstraintWidth = function(t) {
                    return o(t, "max-width", "clientWidth")
                }, a.getConstraintHeight = function(t) {
                    return o(t, "max-height", "clientHeight")
                }, a.getMaximumWidth = function(t) {
                    var e = t.parentNode;
                    if (!e) return t.clientWidth;
                    var n = parseInt(a.getStyle(e, "padding-left"), 10),
                        i = parseInt(a.getStyle(e, "padding-right"), 10),
                        r = e.clientWidth - n - i,
                        o = a.getConstraintWidth(t);
                    return isNaN(o) ? r : Math.min(r, o)
                }, a.getMaximumHeight = function(t) {
                    var e = t.parentNode;
                    if (!e) return t.clientHeight;
                    var n = parseInt(a.getStyle(e, "padding-top"), 10),
                        i = parseInt(a.getStyle(e, "padding-bottom"), 10),
                        r = e.clientHeight - n - i,
                        o = a.getConstraintHeight(t);
                    return isNaN(o) ? r : Math.min(r, o)
                }, a.getStyle = function(t, e) {
                    return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e)
                }, a.retinaScale = function(t, e) {
                    var n = t.currentDevicePixelRatio = e || window.devicePixelRatio || 1;
                    if (1 !== n) {
                        var i = t.canvas,
                            r = t.height,
                            a = t.width;
                        i.height = r * n, i.width = a * n, t.ctx.scale(n, n), i.style.height || i.style.width || (i.style.height = r + "px", i.style.width = a + "px")
                    }
                }, a.fontString = function(t, e, n) {
                    return e + " " + t + "px " + n
                }, a.longestText = function(t, e, n, i) {
                    var r = (i = i || {}).data = i.data || {},
                        o = i.garbageCollect = i.garbageCollect || [];
                    i.font !== e && (r = i.data = {}, o = i.garbageCollect = [], i.font = e), t.font = e;
                    var s = 0;
                    a.each(n, function(e) {
                        null != e && !0 !== a.isArray(e) ? s = a.measureText(t, r, o, s, e) : a.isArray(e) && a.each(e, function(e) {
                            null == e || a.isArray(e) || (s = a.measureText(t, r, o, s, e))
                        })
                    });
                    var l = o.length / 2;
                    if (l > n.length) {
                        for (var u = 0; u < l; u++) delete r[o[u]];
                        o.splice(0, l)
                    }
                    return s
                }, a.measureText = function(t, e, n, i, r) {
                    var a = e[r];
                    return a || (a = e[r] = t.measureText(r).width, n.push(r)), a > i && (i = a), i
                }, a.numberOfLabelLines = function(t) {
                    var e = 1;
                    return a.each(t, function(t) {
                        a.isArray(t) && t.length > e && (e = t.length)
                    }), e
                }, a.color = i ? function(t) {
                    return t instanceof CanvasGradient && (t = r.global.defaultColor), i(t)
                } : function(t) {
                    return console.error("Color.js not found!"), t
                }, a.getHoverColor = function(t) {
                    return t instanceof CanvasPattern ? t : a.color(t).saturate(.5).darken(.1).rgbString()
                }
            }
        }, {
            25: 25,
            3: 3,
            45: 45
        }],
        28: [function(t, e, n) {
            "use strict";
            var i = t(45);

            function r(t, e) {
                return t.native ? {
                    x: t.x,
                    y: t.y
                } : i.getRelativePosition(t, e)
            }

            function a(t, e) {
                var n, i, r, a, o;
                for (i = 0, a = t.data.datasets.length; i < a; ++i)
                    if (t.isDatasetVisible(i))
                        for (r = 0, o = (n = t.getDatasetMeta(i)).data.length; r < o; ++r) {
                            var s = n.data[r];
                            s._view.skip || e(s)
                        }
            }

            function o(t, e) {
                var n = [];
                return a(t, function(t) {
                    t.inRange(e.x, e.y) && n.push(t)
                }), n
            }

            function s(t, e, n, i) {
                var r = Number.POSITIVE_INFINITY,
                    o = [];
                return a(t, function(t) {
                    if (!n || t.inRange(e.x, e.y)) {
                        var a = t.getCenterPoint(),
                            s = i(e, a);
                        s < r ? (o = [t], r = s) : s === r && o.push(t)
                    }
                }), o
            }

            function l(t) {
                var e = -1 !== t.indexOf("x"),
                    n = -1 !== t.indexOf("y");
                return function(t, i) {
                    var r = e ? Math.abs(t.x - i.x) : 0,
                        a = n ? Math.abs(t.y - i.y) : 0;
                    return Math.sqrt(Math.pow(r, 2) + Math.pow(a, 2))
                }
            }

            function u(t, e, n) {
                var i = r(e, t);
                n.axis = n.axis || "x";
                var a = l(n.axis),
                    u = n.intersect ? o(t, i) : s(t, i, !1, a),
                    c = [];
                return u.length ? (t.data.datasets.forEach(function(e, n) {
                    if (t.isDatasetVisible(n)) {
                        var i = t.getDatasetMeta(n).data[u[0]._index];
                        i && !i._view.skip && c.push(i)
                    }
                }), c) : []
            }
            e.exports = {
                modes: {
                    single: function(t, e) {
                        var n = r(e, t),
                            i = [];
                        return a(t, function(t) {
                            if (t.inRange(n.x, n.y)) return i.push(t), i
                        }), i.slice(0, 1)
                    },
                    label: u,
                    index: u,
                    dataset: function(t, e, n) {
                        var i = r(e, t);
                        n.axis = n.axis || "xy";
                        var a = l(n.axis),
                            u = n.intersect ? o(t, i) : s(t, i, !1, a);
                        return u.length > 0 && (u = t.getDatasetMeta(u[0]._datasetIndex).data), u
                    },
                    "x-axis": function(t, e) {
                        return u(t, e, {
                            intersect: !1
                        })
                    },
                    point: function(t, e) {
                        return o(t, r(e, t))
                    },
                    nearest: function(t, e, n) {
                        var i = r(e, t);
                        n.axis = n.axis || "xy";
                        var a = l(n.axis),
                            o = s(t, i, n.intersect, a);
                        return o.length > 1 && o.sort(function(t, e) {
                            var n = t.getArea() - e.getArea();
                            return 0 === n && (n = t._datasetIndex - e._datasetIndex), n
                        }), o.slice(0, 1)
                    },
                    x: function(t, e, n) {
                        var i = r(e, t),
                            o = [],
                            s = !1;
                        return a(t, function(t) {
                            t.inXRange(i.x) && o.push(t), t.inRange(i.x, i.y) && (s = !0)
                        }), n.intersect && !s && (o = []), o
                    },
                    y: function(t, e, n) {
                        var i = r(e, t),
                            o = [],
                            s = !1;
                        return a(t, function(t) {
                            t.inYRange(i.y) && o.push(t), t.inRange(i.x, i.y) && (s = !0)
                        }), n.intersect && !s && (o = []), o
                    }
                }
            }
        }, {
            45: 45
        }],
        29: [function(t, e, n) {
            "use strict";
            t(25)._set("global", {
                responsive: !0,
                responsiveAnimationDuration: 0,
                maintainAspectRatio: !0,
                events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
                hover: {
                    onHover: null,
                    mode: "nearest",
                    intersect: !0,
                    animationDuration: 400
                },
                onClick: null,
                defaultColor: "rgba(0,0,0,0.1)",
                defaultFontColor: "#666",
                defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                defaultFontSize: 12,
                defaultFontStyle: "normal",
                showLines: !0,
                elements: {},
                layout: {
                    padding: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }
                }
            }), e.exports = function() {
                var t = function(t, e) {
                    return this.construct(t, e), this
                };
                return t.Chart = t, t
            }
        }, {
            25: 25
        }],
        30: [function(t, e, n) {
            "use strict";
            var i = t(45);

            function r(t, e) {
                return i.where(t, function(t) {
                    return t.position === e
                })
            }

            function a(t, e) {
                t.forEach(function(t, e) {
                    return t._tmpIndex_ = e, t
                }), t.sort(function(t, n) {
                    var i = e ? n : t,
                        r = e ? t : n;
                    return i.weight === r.weight ? i._tmpIndex_ - r._tmpIndex_ : i.weight - r.weight
                }), t.forEach(function(t) {
                    delete t._tmpIndex_
                })
            }
            e.exports = {
                defaults: {},
                addBox: function(t, e) {
                    t.boxes || (t.boxes = []), e.fullWidth = e.fullWidth || !1, e.position = e.position || "top", e.weight = e.weight || 0, t.boxes.push(e)
                },
                removeBox: function(t, e) {
                    var n = t.boxes ? t.boxes.indexOf(e) : -1; - 1 !== n && t.boxes.splice(n, 1)
                },
                configure: function(t, e, n) {
                    for (var i, r = ["fullWidth", "position", "weight"], a = r.length, o = 0; o < a; ++o) i = r[o], n.hasOwnProperty(i) && (e[i] = n[i])
                },
                update: function(t, e, n) {
                    if (t) {
                        var o = t.options.layout || {},
                            s = i.options.toPadding(o.padding),
                            l = s.left,
                            u = s.right,
                            c = s.top,
                            d = s.bottom,
                            h = r(t.boxes, "left"),
                            f = r(t.boxes, "right"),
                            p = r(t.boxes, "top"),
                            g = r(t.boxes, "bottom"),
                            m = r(t.boxes, "chartArea");
                        a(h, !0), a(f, !1), a(p, !0), a(g, !1);
                        var v = e - l - u,
                            y = n - c - d,
                            b = y / 2,
                            x = (e - v / 2) / (h.length + f.length),
                            w = (n - b) / (p.length + g.length),
                            k = v,
                            C = y,
                            D = [];
                        i.each(h.concat(f, p, g), function(t) {
                            var e, n = t.isHorizontal();
                            n ? (e = t.update(t.fullWidth ? v : k, w), C -= e.height) : (e = t.update(x, C), k -= e.width), D.push({
                                horizontal: n,
                                minSize: e,
                                box: t
                            })
                        });
                        var S = 0,
                            T = 0,
                            M = 0,
                            _ = 0;
                        i.each(p.concat(g), function(t) {
                            if (t.getPadding) {
                                var e = t.getPadding();
                                S = Math.max(S, e.left), T = Math.max(T, e.right)
                            }
                        }), i.each(h.concat(f), function(t) {
                            if (t.getPadding) {
                                var e = t.getPadding();
                                M = Math.max(M, e.top), _ = Math.max(_, e.bottom)
                            }
                        });
                        var A = l,
                            P = u,
                            I = c,
                            O = d;
                        i.each(h.concat(f), V), i.each(h, function(t) {
                            A += t.width
                        }), i.each(f, function(t) {
                            P += t.width
                        }), i.each(p.concat(g), V), i.each(p, function(t) {
                            I += t.height
                        }), i.each(g, function(t) {
                            O += t.height
                        }), i.each(h.concat(f), function(t) {
                            var e = i.findNextWhere(D, function(e) {
                                    return e.box === t
                                }),
                                n = {
                                    left: 0,
                                    right: 0,
                                    top: I,
                                    bottom: O
                                };
                            e && t.update(e.minSize.width, C, n)
                        }), A = l, P = u, I = c, O = d, i.each(h, function(t) {
                            A += t.width
                        }), i.each(f, function(t) {
                            P += t.width
                        }), i.each(p, function(t) {
                            I += t.height
                        }), i.each(g, function(t) {
                            O += t.height
                        });
                        var F = Math.max(S - A, 0);
                        A += F, P += Math.max(T - P, 0);
                        var L = Math.max(M - I, 0);
                        I += L, O += Math.max(_ - O, 0);
                        var N = n - I - O,
                            E = e - A - P;
                        E === k && N === C || (i.each(h, function(t) {
                            t.height = N
                        }), i.each(f, function(t) {
                            t.height = N
                        }), i.each(p, function(t) {
                            t.fullWidth || (t.width = E)
                        }), i.each(g, function(t) {
                            t.fullWidth || (t.width = E)
                        }), C = N, k = E);
                        var R = l + F,
                            B = c + L;
                        i.each(h.concat(p), W), R += k, B += C, i.each(f, W), i.each(g, W), t.chartArea = {
                            left: A,
                            top: I,
                            right: A + k,
                            bottom: I + C
                        }, i.each(m, function(e) {
                            e.left = t.chartArea.left, e.top = t.chartArea.top, e.right = t.chartArea.right, e.bottom = t.chartArea.bottom, e.update(k, C)
                        })
                    }

                    function V(t) {
                        var e = i.findNextWhere(D, function(e) {
                            return e.box === t
                        });
                        if (e)
                            if (t.isHorizontal()) {
                                var n = {
                                    left: Math.max(A, S),
                                    right: Math.max(P, T),
                                    top: 0,
                                    bottom: 0
                                };
                                t.update(t.fullWidth ? v : k, y / 2, n)
                            } else t.update(e.minSize.width, C)
                    }

                    function W(t) {
                        t.isHorizontal() ? (t.left = t.fullWidth ? l : A, t.right = t.fullWidth ? e - u : A + k, t.top = B, t.bottom = B + t.height, B = t.bottom) : (t.left = R, t.right = R + t.width, t.top = I, t.bottom = I + C, R = t.right)
                    }
                }
            }
        }, {
            45: 45
        }],
        31: [function(t, e, n) {
            "use strict";
            var i = t(25),
                r = t(45);
            i._set("global", {
                plugins: {}
            }), e.exports = {
                _plugins: [],
                _cacheId: 0,
                register: function(t) {
                    var e = this._plugins;
                    [].concat(t).forEach(function(t) {
                        -1 === e.indexOf(t) && e.push(t)
                    }), this._cacheId++
                },
                unregister: function(t) {
                    var e = this._plugins;
                    [].concat(t).forEach(function(t) {
                        var n = e.indexOf(t); - 1 !== n && e.splice(n, 1)
                    }), this._cacheId++
                },
                clear: function() {
                    this._plugins = [], this._cacheId++
                },
                count: function() {
                    return this._plugins.length
                },
                getAll: function() {
                    return this._plugins
                },
                notify: function(t, e, n) {
                    var i, r, a, o, s, l = this.descriptors(t),
                        u = l.length;
                    for (i = 0; i < u; ++i)
                        if ("function" == typeof(s = (a = (r = l[i]).plugin)[e]) && ((o = [t].concat(n || [])).push(r.options), !1 === s.apply(a, o))) return !1;
                    return !0
                },
                descriptors: function(t) {
                    var e = t.$plugins || (t.$plugins = {});
                    if (e.id === this._cacheId) return e.descriptors;
                    var n = [],
                        a = [],
                        o = t && t.config || {},
                        s = o.options && o.options.plugins || {};
                    return this._plugins.concat(o.plugins || []).forEach(function(t) {
                        if (-1 === n.indexOf(t)) {
                            var e = t.id,
                                o = s[e];
                            !1 !== o && (!0 === o && (o = r.clone(i.global.plugins[e])), n.push(t), a.push({
                                plugin: t,
                                options: o || {}
                            }))
                        }
                    }), e.descriptors = a, e.id = this._cacheId, a
                },
                _invalidate: function(t) {
                    delete t.$plugins
                }
            }
        }, {
            25: 25,
            45: 45
        }],
        32: [function(t, e, n) {
            "use strict";
            var i = t(25),
                r = t(26),
                a = t(45),
                o = t(34);

            function s(t) {
                var e, n, i = [];
                for (e = 0, n = t.length; e < n; ++e) i.push(t[e].label);
                return i
            }

            function l(t, e, n) {
                var i = t.getPixelForTick(e);
                return n && (i -= 0 === e ? (t.getPixelForTick(1) - i) / 2 : (i - t.getPixelForTick(e - 1)) / 2), i
            }
            i._set("scale", {
                display: !0,
                position: "left",
                offset: !1,
                gridLines: {
                    display: !0,
                    color: "rgba(0, 0, 0, 0.1)",
                    lineWidth: 1,
                    drawBorder: !0,
                    drawOnChartArea: !0,
                    drawTicks: !0,
                    tickMarkLength: 10,
                    zeroLineWidth: 1,
                    zeroLineColor: "rgba(0,0,0,0.25)",
                    zeroLineBorderDash: [],
                    zeroLineBorderDashOffset: 0,
                    offsetGridLines: !1,
                    borderDash: [],
                    borderDashOffset: 0
                },
                scaleLabel: {
                    display: !1,
                    labelString: "",
                    lineHeight: 1.2,
                    padding: {
                        top: 4,
                        bottom: 4
                    }
                },
                ticks: {
                    beginAtZero: !1,
                    minRotation: 0,
                    maxRotation: 50,
                    mirror: !1,
                    padding: 0,
                    reverse: !1,
                    display: !0,
                    autoSkip: !0,
                    autoSkipPadding: 0,
                    labelOffset: 0,
                    callback: o.formatters.values,
                    minor: {},
                    major: {}
                }
            }), e.exports = function(t) {
                function e(t, e, n) {
                    return a.isArray(e) ? a.longestText(t, n, e) : t.measureText(e).width
                }

                function n(t) {
                    var e = a.valueOrDefault,
                        n = i.global,
                        r = e(t.fontSize, n.defaultFontSize),
                        o = e(t.fontStyle, n.defaultFontStyle),
                        s = e(t.fontFamily, n.defaultFontFamily);
                    return {
                        size: r,
                        style: o,
                        family: s,
                        font: a.fontString(r, o, s)
                    }
                }

                function o(t) {
                    return a.options.toLineHeight(a.valueOrDefault(t.lineHeight, 1.2), a.valueOrDefault(t.fontSize, i.global.defaultFontSize))
                }
                t.Scale = r.extend({
                    getPadding: function() {
                        return {
                            left: this.paddingLeft || 0,
                            top: this.paddingTop || 0,
                            right: this.paddingRight || 0,
                            bottom: this.paddingBottom || 0
                        }
                    },
                    getTicks: function() {
                        return this._ticks
                    },
                    mergeTicksOptions: function() {
                        var t = this.options.ticks;
                        for (var e in !1 === t.minor && (t.minor = {
                                display: !1
                            }), !1 === t.major && (t.major = {
                                display: !1
                            }), t) "major" !== e && "minor" !== e && (void 0 === t.minor[e] && (t.minor[e] = t[e]), void 0 === t.major[e] && (t.major[e] = t[e]))
                    },
                    beforeUpdate: function() {
                        a.callback(this.options.beforeUpdate, [this])
                    },
                    update: function(t, e, n) {
                        var i, r, o, s, l, u, c = this;
                        for (c.beforeUpdate(), c.maxWidth = t, c.maxHeight = e, c.margins = a.extend({
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0
                            }, n), c.longestTextCache = c.longestTextCache || {}, c.beforeSetDimensions(), c.setDimensions(), c.afterSetDimensions(), c.beforeDataLimits(), c.determineDataLimits(), c.afterDataLimits(), c.beforeBuildTicks(), l = c.buildTicks() || [], c.afterBuildTicks(), c.beforeTickToLabelConversion(), o = c.convertTicksToLabels(l) || c.ticks, c.afterTickToLabelConversion(), c.ticks = o, i = 0, r = o.length; i < r; ++i) s = o[i], (u = l[i]) ? u.label = s : l.push(u = {
                            label: s,
                            major: !1
                        });
                        return c._ticks = l, c.beforeCalculateTickRotation(), c.calculateTickRotation(), c.afterCalculateTickRotation(), c.beforeFit(), c.fit(), c.afterFit(), c.afterUpdate(), c.minSize
                    },
                    afterUpdate: function() {
                        a.callback(this.options.afterUpdate, [this])
                    },
                    beforeSetDimensions: function() {
                        a.callback(this.options.beforeSetDimensions, [this])
                    },
                    setDimensions: function() {
                        var t = this;
                        t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0
                    },
                    afterSetDimensions: function() {
                        a.callback(this.options.afterSetDimensions, [this])
                    },
                    beforeDataLimits: function() {
                        a.callback(this.options.beforeDataLimits, [this])
                    },
                    determineDataLimits: a.noop,
                    afterDataLimits: function() {
                        a.callback(this.options.afterDataLimits, [this])
                    },
                    beforeBuildTicks: function() {
                        a.callback(this.options.beforeBuildTicks, [this])
                    },
                    buildTicks: a.noop,
                    afterBuildTicks: function() {
                        a.callback(this.options.afterBuildTicks, [this])
                    },
                    beforeTickToLabelConversion: function() {
                        a.callback(this.options.beforeTickToLabelConversion, [this])
                    },
                    convertTicksToLabels: function() {
                        var t = this.options.ticks;
                        this.ticks = this.ticks.map(t.userCallback || t.callback, this)
                    },
                    afterTickToLabelConversion: function() {
                        a.callback(this.options.afterTickToLabelConversion, [this])
                    },
                    beforeCalculateTickRotation: function() {
                        a.callback(this.options.beforeCalculateTickRotation, [this])
                    },
                    calculateTickRotation: function() {
                        var t = this,
                            e = t.ctx,
                            i = t.options.ticks,
                            r = s(t._ticks),
                            o = n(i);
                        e.font = o.font;
                        var l = i.minRotation || 0;
                        if (r.length && t.options.display && t.isHorizontal())
                            for (var u, c = a.longestText(e, o.font, r, t.longestTextCache), d = c, h = t.getPixelForTick(1) - t.getPixelForTick(0) - 6; d > h && l < i.maxRotation;) {
                                var f = a.toRadians(l);
                                if (u = Math.cos(f), Math.sin(f) * c > t.maxHeight) {
                                    l--;
                                    break
                                }
                                l++, d = u * c
                            }
                        t.labelRotation = l
                    },
                    afterCalculateTickRotation: function() {
                        a.callback(this.options.afterCalculateTickRotation, [this])
                    },
                    beforeFit: function() {
                        a.callback(this.options.beforeFit, [this])
                    },
                    fit: function() {
                        var t = this,
                            i = t.minSize = {
                                width: 0,
                                height: 0
                            },
                            r = s(t._ticks),
                            l = t.options,
                            u = l.ticks,
                            c = l.scaleLabel,
                            d = l.gridLines,
                            h = l.display,
                            f = t.isHorizontal(),
                            p = n(u),
                            g = l.gridLines.tickMarkLength;
                        if (i.width = f ? t.isFullWidth() ? t.maxWidth - t.margins.left - t.margins.right : t.maxWidth : h && d.drawTicks ? g : 0, i.height = f ? h && d.drawTicks ? g : 0 : t.maxHeight, c.display && h) {
                            var m = o(c) + a.options.toPadding(c.padding).height;
                            f ? i.height += m : i.width += m
                        }
                        if (u.display && h) {
                            var v = a.longestText(t.ctx, p.font, r, t.longestTextCache),
                                y = a.numberOfLabelLines(r),
                                b = .5 * p.size,
                                x = t.options.ticks.padding;
                            if (f) {
                                t.longestLabelWidth = v;
                                var w = a.toRadians(t.labelRotation),
                                    k = Math.cos(w),
                                    C = Math.sin(w) * v + p.size * y + b * (y - 1) + b;
                                i.height = Math.min(t.maxHeight, i.height + C + x), t.ctx.font = p.font;
                                var D = e(t.ctx, r[0], p.font),
                                    S = e(t.ctx, r[r.length - 1], p.font);
                                0 !== t.labelRotation ? (t.paddingLeft = "bottom" === l.position ? k * D + 3 : k * b + 3, t.paddingRight = "bottom" === l.position ? k * b + 3 : k * S + 3) : (t.paddingLeft = D / 2 + 3, t.paddingRight = S / 2 + 3)
                            } else u.mirror ? v = 0 : v += x + b, i.width = Math.min(t.maxWidth, i.width + v), t.paddingTop = p.size / 2, t.paddingBottom = p.size / 2
                        }
                        t.handleMargins(), t.width = i.width, t.height = i.height
                    },
                    handleMargins: function() {
                        var t = this;
                        t.margins && (t.paddingLeft = Math.max(t.paddingLeft - t.margins.left, 0), t.paddingTop = Math.max(t.paddingTop - t.margins.top, 0), t.paddingRight = Math.max(t.paddingRight - t.margins.right, 0), t.paddingBottom = Math.max(t.paddingBottom - t.margins.bottom, 0))
                    },
                    afterFit: function() {
                        a.callback(this.options.afterFit, [this])
                    },
                    isHorizontal: function() {
                        return "top" === this.options.position || "bottom" === this.options.position
                    },
                    isFullWidth: function() {
                        return this.options.fullWidth
                    },
                    getRightValue: function(t) {
                        if (a.isNullOrUndef(t)) return NaN;
                        if ("number" == typeof t && !isFinite(t)) return NaN;
                        if (t)
                            if (this.isHorizontal()) {
                                if (void 0 !== t.x) return this.getRightValue(t.x)
                            } else if (void 0 !== t.y) return this.getRightValue(t.y);
                        return t
                    },
                    getLabelForIndex: a.noop,
                    getPixelForValue: a.noop,
                    getValueForPixel: a.noop,
                    getPixelForTick: function(t) {
                        var e = this,
                            n = e.options.offset;
                        if (e.isHorizontal()) {
                            var i = (e.width - (e.paddingLeft + e.paddingRight)) / Math.max(e._ticks.length - (n ? 0 : 1), 1),
                                r = i * t + e.paddingLeft;
                            n && (r += i / 2);
                            var a = e.left + Math.round(r);
                            return a += e.isFullWidth() ? e.margins.left : 0
                        }
                        var o = e.height - (e.paddingTop + e.paddingBottom);
                        return e.top + t * (o / (e._ticks.length - 1))
                    },
                    getPixelForDecimal: function(t) {
                        var e = this;
                        if (e.isHorizontal()) {
                            var n = (e.width - (e.paddingLeft + e.paddingRight)) * t + e.paddingLeft,
                                i = e.left + Math.round(n);
                            return i += e.isFullWidth() ? e.margins.left : 0
                        }
                        return e.top + t * e.height
                    },
                    getBasePixel: function() {
                        return this.getPixelForValue(this.getBaseValue())
                    },
                    getBaseValue: function() {
                        var t = this.min,
                            e = this.max;
                        return this.beginAtZero ? 0 : t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0
                    },
                    _autoSkip: function(t) {
                        var e, n, i, r, o = this,
                            s = o.isHorizontal(),
                            l = o.options.ticks.minor,
                            u = t.length,
                            c = a.toRadians(o.labelRotation),
                            d = Math.cos(c),
                            h = o.longestLabelWidth * d,
                            f = [];
                        for (l.maxTicksLimit && (r = l.maxTicksLimit), s && (e = !1, (h + l.autoSkipPadding) * u > o.width - (o.paddingLeft + o.paddingRight) && (e = 1 + Math.floor((h + l.autoSkipPadding) * u / (o.width - (o.paddingLeft + o.paddingRight)))), r && u > r && (e = Math.max(e, Math.floor(u / r)))), n = 0; n < u; n++) i = t[n], (e > 1 && n % e > 0 || n % e == 0 && n + e >= u) && n !== u - 1 && delete i.label, f.push(i);
                        return f
                    },
                    draw: function(t) {
                        var e = this,
                            r = e.options;
                        if (r.display) {
                            var s = e.ctx,
                                u = i.global,
                                c = r.ticks.minor,
                                d = r.ticks.major || c,
                                h = r.gridLines,
                                f = r.scaleLabel,
                                p = 0 !== e.labelRotation,
                                g = e.isHorizontal(),
                                m = c.autoSkip ? e._autoSkip(e.getTicks()) : e.getTicks(),
                                v = a.valueOrDefault(c.fontColor, u.defaultFontColor),
                                y = n(c),
                                b = a.valueOrDefault(d.fontColor, u.defaultFontColor),
                                x = n(d),
                                w = h.drawTicks ? h.tickMarkLength : 0,
                                k = a.valueOrDefault(f.fontColor, u.defaultFontColor),
                                C = n(f),
                                D = a.options.toPadding(f.padding),
                                S = a.toRadians(e.labelRotation),
                                T = [],
                                M = e.options.gridLines.lineWidth,
                                _ = "right" === r.position ? e.right : e.right - M - w,
                                A = "right" === r.position ? e.right + w : e.right,
                                P = "bottom" === r.position ? e.top + M : e.bottom - w - M,
                                I = "bottom" === r.position ? e.top + M + w : e.bottom + M;
                            if (a.each(m, function(n, i) {
                                    if (!a.isNullOrUndef(n.label)) {
                                        var o, s, d, f, v, y, b, x, k, C, D, O, F, L, N = n.label;
                                        i === e.zeroLineIndex && r.offset === h.offsetGridLines ? (o = h.zeroLineWidth, s = h.zeroLineColor, d = h.zeroLineBorderDash, f = h.zeroLineBorderDashOffset) : (o = a.valueAtIndexOrDefault(h.lineWidth, i), s = a.valueAtIndexOrDefault(h.color, i), d = a.valueOrDefault(h.borderDash, u.borderDash), f = a.valueOrDefault(h.borderDashOffset, u.borderDashOffset));
                                        var E = "middle",
                                            R = "middle",
                                            B = c.padding;
                                        if (g) {
                                            var V = w + B;
                                            "bottom" === r.position ? (R = p ? "middle" : "top", E = p ? "right" : "center", L = e.top + V) : (R = p ? "middle" : "bottom", E = p ? "left" : "center", L = e.bottom - V);
                                            var W = l(e, i, h.offsetGridLines && m.length > 1);
                                            W < e.left && (s = "rgba(0,0,0,0)"), W += a.aliasPixel(o), F = e.getPixelForTick(i) + c.labelOffset, v = b = k = D = W, y = P, x = I, C = t.top, O = t.bottom + M
                                        } else {
                                            var j, z = "left" === r.position;
                                            c.mirror ? (E = z ? "left" : "right", j = B) : (E = z ? "right" : "left", j = w + B), F = z ? e.right - j : e.left + j;
                                            var H = l(e, i, h.offsetGridLines && m.length > 1);
                                            H < e.top && (s = "rgba(0,0,0,0)"), H += a.aliasPixel(o), L = e.getPixelForTick(i) + c.labelOffset, v = _, b = A, k = t.left, D = t.right + M, y = x = C = O = H
                                        }
                                        T.push({
                                            tx1: v,
                                            ty1: y,
                                            tx2: b,
                                            ty2: x,
                                            x1: k,
                                            y1: C,
                                            x2: D,
                                            y2: O,
                                            labelX: F,
                                            labelY: L,
                                            glWidth: o,
                                            glColor: s,
                                            glBorderDash: d,
                                            glBorderDashOffset: f,
                                            rotation: -1 * S,
                                            label: N,
                                            major: n.major,
                                            textBaseline: R,
                                            textAlign: E
                                        })
                                    }
                                }), a.each(T, function(t) {
                                    if (h.display && (s.save(), s.lineWidth = t.glWidth, s.strokeStyle = t.glColor, s.setLineDash && (s.setLineDash(t.glBorderDash), s.lineDashOffset = t.glBorderDashOffset), s.beginPath(), h.drawTicks && (s.moveTo(t.tx1, t.ty1), s.lineTo(t.tx2, t.ty2)), h.drawOnChartArea && (s.moveTo(t.x1, t.y1), s.lineTo(t.x2, t.y2)), s.stroke(), s.restore()), c.display) {
                                        s.save(), s.translate(t.labelX, t.labelY), s.rotate(t.rotation), s.font = t.major ? x.font : y.font, s.fillStyle = t.major ? b : v, s.textBaseline = t.textBaseline, s.textAlign = t.textAlign;
                                        var n = t.label;
                                        if (a.isArray(n))
                                            for (var i = n.length, r = 1.5 * y.size, o = e.isHorizontal() ? 0 : -r * (i - 1) / 2, l = 0; l < i; ++l) s.fillText("" + n[l], 0, o), o += r;
                                        else s.fillText(n, 0, 0);
                                        s.restore()
                                    }
                                }), f.display) {
                                var O, F, L = 0,
                                    N = o(f) / 2;
                                if (g) O = e.left + (e.right - e.left) / 2, F = "bottom" === r.position ? e.bottom - N - D.bottom : e.top + N + D.top;
                                else {
                                    var E = "left" === r.position;
                                    O = E ? e.left + N + D.top : e.right - N - D.top, F = e.top + (e.bottom - e.top) / 2, L = E ? -.5 * Math.PI : .5 * Math.PI
                                }
                                s.save(), s.translate(O, F), s.rotate(L), s.textAlign = "center", s.textBaseline = "middle", s.fillStyle = k, s.font = C.font, s.fillText(f.labelString, 0, 0), s.restore()
                            }
                            if (h.drawBorder) {
                                s.lineWidth = a.valueAtIndexOrDefault(h.lineWidth, 0), s.strokeStyle = a.valueAtIndexOrDefault(h.color, 0);
                                var R = e.left,
                                    B = e.right + M,
                                    V = e.top,
                                    W = e.bottom + M,
                                    j = a.aliasPixel(s.lineWidth);
                                g ? (V = W = "top" === r.position ? e.bottom : e.top, V += j, W += j) : (R = B = "left" === r.position ? e.right : e.left, R += j, B += j), s.beginPath(), s.moveTo(R, V), s.lineTo(B, W), s.stroke()
                            }
                        }
                    }
                })
            }
        }, {
            25: 25,
            26: 26,
            34: 34,
            45: 45
        }],
        33: [function(t, e, n) {
            "use strict";
            var i = t(25),
                r = t(45),
                a = t(30);
            e.exports = function(t) {
                t.scaleService = {
                    constructors: {},
                    defaults: {},
                    registerScaleType: function(t, e, n) {
                        this.constructors[t] = e, this.defaults[t] = r.clone(n)
                    },
                    getScaleConstructor: function(t) {
                        return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0
                    },
                    getScaleDefaults: function(t) {
                        return this.defaults.hasOwnProperty(t) ? r.merge({}, [i.scale, this.defaults[t]]) : {}
                    },
                    updateScaleDefaults: function(t, e) {
                        this.defaults.hasOwnProperty(t) && (this.defaults[t] = r.extend(this.defaults[t], e))
                    },
                    addScalesToLayout: function(t) {
                        r.each(t.scales, function(e) {
                            e.fullWidth = e.options.fullWidth, e.position = e.options.position, e.weight = e.options.weight, a.addBox(t, e)
                        })
                    }
                }
            }
        }, {
            25: 25,
            30: 30,
            45: 45
        }],
        34: [function(t, e, n) {
            "use strict";
            var i = t(45);
            e.exports = {
                formatters: {
                    values: function(t) {
                        return i.isArray(t) ? t : "" + t
                    },
                    linear: function(t, e, n) {
                        var r = n.length > 3 ? n[2] - n[1] : n[1] - n[0];
                        Math.abs(r) > 1 && t !== Math.floor(t) && (r = t - Math.floor(t));
                        var a = i.log10(Math.abs(r)),
                            o = "";
                        if (0 !== t) {
                            var s = -1 * Math.floor(a);
                            s = Math.max(Math.min(s, 20), 0), o = t.toFixed(s)
                        } else o = "0";
                        return o
                    },
                    logarithmic: function(t, e, n) {
                        var r = t / Math.pow(10, Math.floor(i.log10(t)));
                        return 0 === t ? "0" : 1 === r || 2 === r || 5 === r || 0 === e || e === n.length - 1 ? t.toExponential() : ""
                    }
                }
            }
        }, {
            45: 45
        }],
        35: [function(t, e, n) {
            "use strict";
            var i = t(25),
                r = t(26),
                a = t(45);
            i._set("global", {
                tooltips: {
                    enabled: !0,
                    custom: null,
                    mode: "nearest",
                    position: "average",
                    intersect: !0,
                    backgroundColor: "rgba(0,0,0,0.8)",
                    titleFontStyle: "bold",
                    titleSpacing: 2,
                    titleMarginBottom: 6,
                    titleFontColor: "#fff",
                    titleAlign: "left",
                    bodySpacing: 2,
                    bodyFontColor: "#fff",
                    bodyAlign: "left",
                    footerFontStyle: "bold",
                    footerSpacing: 2,
                    footerMarginTop: 6,
                    footerFontColor: "#fff",
                    footerAlign: "left",
                    yPadding: 6,
                    xPadding: 6,
                    caretPadding: 2,
                    caretSize: 5,
                    cornerRadius: 6,
                    multiKeyBackground: "#fff",
                    displayColors: !0,
                    borderColor: "rgba(0,0,0,0)",
                    borderWidth: 0,
                    callbacks: {
                        beforeTitle: a.noop,
                        title: function(t, e) {
                            var n = "",
                                i = e.labels,
                                r = i ? i.length : 0;
                            if (t.length > 0) {
                                var a = t[0];
                                a.xLabel ? n = a.xLabel : r > 0 && a.index < r && (n = i[a.index])
                            }
                            return n
                        },
                        afterTitle: a.noop,
                        beforeBody: a.noop,
                        beforeLabel: a.noop,
                        label: function(t, e) {
                            var n = e.datasets[t.datasetIndex].label || "";
                            return n && (n += ": "), n += t.yLabel
                        },
                        labelColor: function(t, e) {
                            var n = e.getDatasetMeta(t.datasetIndex).data[t.index]._view;
                            return {
                                borderColor: n.borderColor,
                                backgroundColor: n.backgroundColor
                            }
                        },
                        labelTextColor: function() {
                            return this._options.bodyFontColor
                        },
                        afterLabel: a.noop,
                        afterBody: a.noop,
                        beforeFooter: a.noop,
                        footer: a.noop,
                        afterFooter: a.noop
                    }
                }
            }), e.exports = function(t) {
                function e(t, e) {
                    var n = a.color(t);
                    return n.alpha(e * n.alpha()).rgbaString()
                }

                function n(t, e) {
                    return e && (a.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t
                }

                function o(t) {
                    var e = i.global,
                        n = a.valueOrDefault;
                    return {
                        xPadding: t.xPadding,
                        yPadding: t.yPadding,
                        xAlign: t.xAlign,
                        yAlign: t.yAlign,
                        bodyFontColor: t.bodyFontColor,
                        _bodyFontFamily: n(t.bodyFontFamily, e.defaultFontFamily),
                        _bodyFontStyle: n(t.bodyFontStyle, e.defaultFontStyle),
                        _bodyAlign: t.bodyAlign,
                        bodyFontSize: n(t.bodyFontSize, e.defaultFontSize),
                        bodySpacing: t.bodySpacing,
                        titleFontColor: t.titleFontColor,
                        _titleFontFamily: n(t.titleFontFamily, e.defaultFontFamily),
                        _titleFontStyle: n(t.titleFontStyle, e.defaultFontStyle),
                        titleFontSize: n(t.titleFontSize, e.defaultFontSize),
                        _titleAlign: t.titleAlign,
                        titleSpacing: t.titleSpacing,
                        titleMarginBottom: t.titleMarginBottom,
                        footerFontColor: t.footerFontColor,
                        _footerFontFamily: n(t.footerFontFamily, e.defaultFontFamily),
                        _footerFontStyle: n(t.footerFontStyle, e.defaultFontStyle),
                        footerFontSize: n(t.footerFontSize, e.defaultFontSize),
                        _footerAlign: t.footerAlign,
                        footerSpacing: t.footerSpacing,
                        footerMarginTop: t.footerMarginTop,
                        caretSize: t.caretSize,
                        cornerRadius: t.cornerRadius,
                        backgroundColor: t.backgroundColor,
                        opacity: 0,
                        legendColorBackground: t.multiKeyBackground,
                        displayColors: t.displayColors,
                        borderColor: t.borderColor,
                        borderWidth: t.borderWidth
                    }
                }
                t.Tooltip = r.extend({
                    initialize: function() {
                        this._model = o(this._options), this._lastActive = []
                    },
                    getTitle: function() {
                        var t = this._options.callbacks,
                            e = t.beforeTitle.apply(this, arguments),
                            i = t.title.apply(this, arguments),
                            r = t.afterTitle.apply(this, arguments),
                            a = [];
                        return a = n(a = n(a = n(a, e), i), r)
                    },
                    getBeforeBody: function() {
                        var t = this._options.callbacks.beforeBody.apply(this, arguments);
                        return a.isArray(t) ? t : void 0 !== t ? [t] : []
                    },
                    getBody: function(t, e) {
                        var i = this,
                            r = i._options.callbacks,
                            o = [];
                        return a.each(t, function(t) {
                            var a = {
                                before: [],
                                lines: [],
                                after: []
                            };
                            n(a.before, r.beforeLabel.call(i, t, e)), n(a.lines, r.label.call(i, t, e)), n(a.after, r.afterLabel.call(i, t, e)), o.push(a)
                        }), o
                    },
                    getAfterBody: function() {
                        var t = this._options.callbacks.afterBody.apply(this, arguments);
                        return a.isArray(t) ? t : void 0 !== t ? [t] : []
                    },
                    getFooter: function() {
                        var t = this._options.callbacks,
                            e = t.beforeFooter.apply(this, arguments),
                            i = t.footer.apply(this, arguments),
                            r = t.afterFooter.apply(this, arguments),
                            a = [];
                        return a = n(a = n(a = n(a, e), i), r)
                    },
                    update: function(e) {
                        var n, i, r, s, l, u, c, d, h, f, p, g, m, v, y, b, x, w, k, C, D = this,
                            S = D._options,
                            T = D._model,
                            M = D._model = o(S),
                            _ = D._active,
                            A = D._data,
                            P = {
                                xAlign: T.xAlign,
                                yAlign: T.yAlign
                            },
                            I = {
                                x: T.x,
                                y: T.y
                            },
                            O = {
                                width: T.width,
                                height: T.height
                            },
                            F = {
                                x: T.caretX,
                                y: T.caretY
                            };
                        if (_.length) {
                            M.opacity = 1;
                            var L = [],
                                N = [];
                            F = t.Tooltip.positioners[S.position].call(D, _, D._eventPosition);
                            var E = [];
                            for (n = 0, i = _.length; n < i; ++n) E.push((b = _[n], x = void 0, w = void 0, x = b._xScale, w = b._yScale || b._scale, k = b._index, C = b._datasetIndex, {
                                xLabel: x ? x.getLabelForIndex(k, C) : "",
                                yLabel: w ? w.getLabelForIndex(k, C) : "",
                                index: k,
                                datasetIndex: C,
                                x: b._model.x,
                                y: b._model.y
                            }));
                            S.filter && (E = E.filter(function(t) {
                                return S.filter(t, A)
                            })), S.itemSort && (E = E.sort(function(t, e) {
                                return S.itemSort(t, e, A)
                            })), a.each(E, function(t) {
                                L.push(S.callbacks.labelColor.call(D, t, D._chart)), N.push(S.callbacks.labelTextColor.call(D, t, D._chart))
                            }), M.title = D.getTitle(E, A), M.beforeBody = D.getBeforeBody(E, A), M.body = D.getBody(E, A), M.afterBody = D.getAfterBody(E, A), M.footer = D.getFooter(E, A), M.x = Math.round(F.x), M.y = Math.round(F.y), M.caretPadding = S.caretPadding, M.labelColors = L, M.labelTextColors = N, M.dataPoints = E, P = function(t, e) {
                                var n, i, r, a, o, s = t._model,
                                    l = t._chart,
                                    u = t._chart.chartArea,
                                    c = "center",
                                    d = "center";
                                s.y < e.height ? d = "top" : s.y > l.height - e.height && (d = "bottom");
                                var h = (u.left + u.right) / 2,
                                    f = (u.top + u.bottom) / 2;
                                "center" === d ? (n = function(t) {
                                    return t <= h
                                }, i = function(t) {
                                    return t > h
                                }) : (n = function(t) {
                                    return t <= e.width / 2
                                }, i = function(t) {
                                    return t >= l.width - e.width / 2
                                }), r = function(t) {
                                    return t + e.width + s.caretSize + s.caretPadding > l.width
                                }, a = function(t) {
                                    return t - e.width - s.caretSize - s.caretPadding < 0
                                }, o = function(t) {
                                    return t <= f ? "top" : "bottom"
                                }, n(s.x) ? (c = "left", r(s.x) && (c = "center", d = o(s.y))) : i(s.x) && (c = "right", a(s.x) && (c = "center", d = o(s.y)));
                                var p = t._options;
                                return {
                                    xAlign: p.xAlign ? p.xAlign : c,
                                    yAlign: p.yAlign ? p.yAlign : d
                                }
                            }(this, O = function(t, e) {
                                var n = t._chart.ctx,
                                    i = 2 * e.yPadding,
                                    r = 0,
                                    o = e.body,
                                    s = o.reduce(function(t, e) {
                                        return t + e.before.length + e.lines.length + e.after.length
                                    }, 0);
                                s += e.beforeBody.length + e.afterBody.length;
                                var l = e.title.length,
                                    u = e.footer.length,
                                    c = e.titleFontSize,
                                    d = e.bodyFontSize,
                                    h = e.footerFontSize;
                                i += l * c, i += l ? (l - 1) * e.titleSpacing : 0, i += l ? e.titleMarginBottom : 0, i += s * d, i += s ? (s - 1) * e.bodySpacing : 0, i += u ? e.footerMarginTop : 0, i += u * h, i += u ? (u - 1) * e.footerSpacing : 0;
                                var f = 0,
                                    p = function(t) {
                                        r = Math.max(r, n.measureText(t).width + f)
                                    };
                                return n.font = a.fontString(c, e._titleFontStyle, e._titleFontFamily), a.each(e.title, p), n.font = a.fontString(d, e._bodyFontStyle, e._bodyFontFamily), a.each(e.beforeBody.concat(e.afterBody), p), f = e.displayColors ? d + 2 : 0, a.each(o, function(t) {
                                    a.each(t.before, p), a.each(t.lines, p), a.each(t.after, p)
                                }), f = 0, n.font = a.fontString(h, e._footerFontStyle, e._footerFontFamily), a.each(e.footer, p), {
                                    width: r += 2 * e.xPadding,
                                    height: i
                                }
                            }(this, M)), r = M, s = O, l = P, u = D._chart, c = r.x, d = r.y, h = r.caretSize, f = r.caretPadding, p = r.cornerRadius, g = l.xAlign, m = l.yAlign, v = h + f, y = p + f, "right" === g ? c -= s.width : "center" === g && ((c -= s.width / 2) + s.width > u.width && (c = u.width - s.width), c < 0 && (c = 0)), "top" === m ? d += v : d -= "bottom" === m ? s.height + v : s.height / 2, "center" === m ? "left" === g ? c += v : "right" === g && (c -= v) : "left" === g ? c -= y : "right" === g && (c += y), I = {
                                x: c,
                                y: d
                            }
                        } else M.opacity = 0;
                        return M.xAlign = P.xAlign, M.yAlign = P.yAlign, M.x = I.x, M.y = I.y, M.width = O.width, M.height = O.height, M.caretX = F.x, M.caretY = F.y, D._model = M, e && S.custom && S.custom.call(D, M), D
                    },
                    drawCaret: function(t, e) {
                        var n = this._chart.ctx,
                            i = this._view,
                            r = this.getCaretPosition(t, e, i);
                        n.lineTo(r.x1, r.y1), n.lineTo(r.x2, r.y2), n.lineTo(r.x3, r.y3)
                    },
                    getCaretPosition: function(t, e, n) {
                        var i, r, a, o, s, l, u = n.caretSize,
                            c = n.cornerRadius,
                            d = n.xAlign,
                            h = n.yAlign,
                            f = t.x,
                            p = t.y,
                            g = e.width,
                            m = e.height;
                        if ("center" === h) s = p + m / 2, "left" === d ? (r = (i = f) - u, a = i, o = s + u, l = s - u) : (r = (i = f + g) + u, a = i, o = s - u, l = s + u);
                        else if ("left" === d ? (i = (r = f + c + u) - u, a = r + u) : "right" === d ? (i = (r = f + g - c - u) - u, a = r + u) : (i = (r = n.caretX) - u, a = r + u), "top" === h) s = (o = p) - u, l = o;
                        else {
                            s = (o = p + m) + u, l = o;
                            var v = a;
                            a = i, i = v
                        }
                        return {
                            x1: i,
                            x2: r,
                            x3: a,
                            y1: o,
                            y2: s,
                            y3: l
                        }
                    },
                    drawTitle: function(t, n, i, r) {
                        var o = n.title;
                        if (o.length) {
                            i.textAlign = n._titleAlign, i.textBaseline = "top";
                            var s, l, u = n.titleFontSize,
                                c = n.titleSpacing;
                            for (i.fillStyle = e(n.titleFontColor, r), i.font = a.fontString(u, n._titleFontStyle, n._titleFontFamily), s = 0, l = o.length; s < l; ++s) i.fillText(o[s], t.x, t.y), t.y += u + c, s + 1 === o.length && (t.y += n.titleMarginBottom - c)
                        }
                    },
                    drawBody: function(t, n, i, r) {
                        var o = n.bodyFontSize,
                            s = n.bodySpacing,
                            l = n.body;
                        i.textAlign = n._bodyAlign, i.textBaseline = "top", i.font = a.fontString(o, n._bodyFontStyle, n._bodyFontFamily);
                        var u = 0,
                            c = function(e) {
                                i.fillText(e, t.x + u, t.y), t.y += o + s
                            };
                        i.fillStyle = e(n.bodyFontColor, r), a.each(n.beforeBody, c);
                        var d = n.displayColors;
                        u = d ? o + 2 : 0, a.each(l, function(s, l) {
                            var u = e(n.labelTextColors[l], r);
                            i.fillStyle = u, a.each(s.before, c), a.each(s.lines, function(a) {
                                d && (i.fillStyle = e(n.legendColorBackground, r), i.fillRect(t.x, t.y, o, o), i.lineWidth = 1, i.strokeStyle = e(n.labelColors[l].borderColor, r), i.strokeRect(t.x, t.y, o, o), i.fillStyle = e(n.labelColors[l].backgroundColor, r), i.fillRect(t.x + 1, t.y + 1, o - 2, o - 2), i.fillStyle = u), c(a)
                            }), a.each(s.after, c)
                        }), u = 0, a.each(n.afterBody, c), t.y -= s
                    },
                    drawFooter: function(t, n, i, r) {
                        var o = n.footer;
                        o.length && (t.y += n.footerMarginTop, i.textAlign = n._footerAlign, i.textBaseline = "top", i.fillStyle = e(n.footerFontColor, r), i.font = a.fontString(n.footerFontSize, n._footerFontStyle, n._footerFontFamily), a.each(o, function(e) {
                            i.fillText(e, t.x, t.y), t.y += n.footerFontSize + n.footerSpacing
                        }))
                    },
                    drawBackground: function(t, n, i, r, a) {
                        i.fillStyle = e(n.backgroundColor, a), i.strokeStyle = e(n.borderColor, a), i.lineWidth = n.borderWidth;
                        var o = n.xAlign,
                            s = n.yAlign,
                            l = t.x,
                            u = t.y,
                            c = r.width,
                            d = r.height,
                            h = n.cornerRadius;
                        i.beginPath(), i.moveTo(l + h, u), "top" === s && this.drawCaret(t, r), i.lineTo(l + c - h, u), i.quadraticCurveTo(l + c, u, l + c, u + h), "center" === s && "right" === o && this.drawCaret(t, r), i.lineTo(l + c, u + d - h), i.quadraticCurveTo(l + c, u + d, l + c - h, u + d), "bottom" === s && this.drawCaret(t, r), i.lineTo(l + h, u + d), i.quadraticCurveTo(l, u + d, l, u + d - h), "center" === s && "left" === o && this.drawCaret(t, r), i.lineTo(l, u + h), i.quadraticCurveTo(l, u, l + h, u), i.closePath(), i.fill(), n.borderWidth > 0 && i.stroke()
                    },
                    draw: function() {
                        var t = this._chart.ctx,
                            e = this._view;
                        if (0 !== e.opacity) {
                            var n = {
                                    width: e.width,
                                    height: e.height
                                },
                                i = {
                                    x: e.x,
                                    y: e.y
                                },
                                r = Math.abs(e.opacity < .001) ? 0 : e.opacity,
                                a = e.title.length || e.beforeBody.length || e.body.length || e.afterBody.length || e.footer.length;
                            this._options.enabled && a && (this.drawBackground(i, e, t, n, r), i.x += e.xPadding, i.y += e.yPadding, this.drawTitle(i, e, t, r), this.drawBody(i, e, t, r), this.drawFooter(i, e, t, r))
                        }
                    },
                    handleEvent: function(t) {
                        var e, n = this,
                            i = n._options;
                        return n._lastActive = n._lastActive || [], "mouseout" === t.type ? n._active = [] : n._active = n._chart.getElementsAtEventForMode(t, i.mode, i), (e = !a.arrayEquals(n._active, n._lastActive)) && (n._lastActive = n._active, (i.enabled || i.custom) && (n._eventPosition = {
                            x: t.x,
                            y: t.y
                        }, n.update(!0), n.pivot())), e
                    }
                }), t.Tooltip.positioners = {
                    average: function(t) {
                        if (!t.length) return !1;
                        var e, n, i = 0,
                            r = 0,
                            a = 0;
                        for (e = 0, n = t.length; e < n; ++e) {
                            var o = t[e];
                            if (o && o.hasValue()) {
                                var s = o.tooltipPosition();
                                i += s.x, r += s.y, ++a
                            }
                        }
                        return {
                            x: Math.round(i / a),
                            y: Math.round(r / a)
                        }
                    },
                    nearest: function(t, e) {
                        var n, i, r, o = e.x,
                            s = e.y,
                            l = Number.POSITIVE_INFINITY;
                        for (n = 0, i = t.length; n < i; ++n) {
                            var u = t[n];
                            if (u && u.hasValue()) {
                                var c = u.getCenterPoint(),
                                    d = a.distanceBetweenPoints(e, c);
                                d < l && (l = d, r = u)
                            }
                        }
                        if (r) {
                            var h = r.tooltipPosition();
                            o = h.x, s = h.y
                        }
                        return {
                            x: o,
                            y: s
                        }
                    }
                }
            }
        }, {
            25: 25,
            26: 26,
            45: 45
        }],
        36: [function(t, e, n) {
            "use strict";
            var i = t(25),
                r = t(26),
                a = t(45);
            i._set("global", {
                elements: {
                    arc: {
                        backgroundColor: i.global.defaultColor,
                        borderColor: "#fff",
                        borderWidth: 2
                    }
                }
            }), e.exports = r.extend({
                inLabelRange: function(t) {
                    var e = this._view;
                    return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2)
                },
                inRange: function(t, e) {
                    var n = this._view;
                    if (n) {
                        for (var i = a.getAngleFromPoint(n, {
                                x: t,
                                y: e
                            }), r = i.angle, o = i.distance, s = n.startAngle, l = n.endAngle; l < s;) l += 2 * Math.PI;
                        for (; r > l;) r -= 2 * Math.PI;
                        for (; r < s;) r += 2 * Math.PI;
                        var u = r >= s && r <= l,
                            c = o >= n.innerRadius && o <= n.outerRadius;
                        return u && c
                    }
                    return !1
                },
                getCenterPoint: function() {
                    var t = this._view,
                        e = (t.startAngle + t.endAngle) / 2,
                        n = (t.innerRadius + t.outerRadius) / 2;
                    return {
                        x: t.x + Math.cos(e) * n,
                        y: t.y + Math.sin(e) * n
                    }
                },
                getArea: function() {
                    var t = this._view;
                    return Math.PI * ((t.endAngle - t.startAngle) / (2 * Math.PI)) * (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2))
                },
                tooltipPosition: function() {
                    var t = this._view,
                        e = t.startAngle + (t.endAngle - t.startAngle) / 2,
                        n = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
                    return {
                        x: t.x + Math.cos(e) * n,
                        y: t.y + Math.sin(e) * n
                    }
                },
                draw: function() {
                    var t = this._chart.ctx,
                        e = this._view,
                        n = e.startAngle,
                        i = e.endAngle;
                    t.beginPath(), t.arc(e.x, e.y, e.outerRadius, n, i), t.arc(e.x, e.y, e.innerRadius, i, n, !0), t.closePath(), t.strokeStyle = e.borderColor, t.lineWidth = e.borderWidth, t.fillStyle = e.backgroundColor, t.fill(), t.lineJoin = "bevel", e.borderWidth && t.stroke()
                }
            })
        }, {
            25: 25,
            26: 26,
            45: 45
        }],
        37: [function(t, e, n) {
            "use strict";
            var i = t(25),
                r = t(26),
                a = t(45),
                o = i.global;
            i._set("global", {
                elements: {
                    line: {
                        tension: .4,
                        backgroundColor: o.defaultColor,
                        borderWidth: 3,
                        borderColor: o.defaultColor,
                        borderCapStyle: "butt",
                        borderDash: [],
                        borderDashOffset: 0,
                        borderJoinStyle: "miter",
                        capBezierPoints: !0,
                        fill: !0
                    }
                }
            }), e.exports = r.extend({
                draw: function() {
                    var t, e, n, i, r = this._view,
                        s = this._chart.ctx,
                        l = r.spanGaps,
                        u = this._children.slice(),
                        c = o.elements.line,
                        d = -1;
                    for (this._loop && u.length && u.push(u[0]), s.save(), s.lineCap = r.borderCapStyle || c.borderCapStyle, s.setLineDash && s.setLineDash(r.borderDash || c.borderDash), s.lineDashOffset = r.borderDashOffset || c.borderDashOffset, s.lineJoin = r.borderJoinStyle || c.borderJoinStyle, s.lineWidth = r.borderWidth || c.borderWidth, s.strokeStyle = r.borderColor || o.defaultColor, s.beginPath(), d = -1, t = 0; t < u.length; ++t) e = u[t], n = a.previousItem(u, t), i = e._view, 0 === t ? i.skip || (s.moveTo(i.x, i.y), d = t) : (n = -1 === d ? n : u[d], i.skip || (d !== t - 1 && !l || -1 === d ? s.moveTo(i.x, i.y) : a.canvas.lineTo(s, n._view, e._view), d = t));
                    s.stroke(), s.restore()
                }
            })
        }, {
            25: 25,
            26: 26,
            45: 45
        }],
        38: [function(t, e, n) {
            "use strict";
            var i = t(25),
                r = t(26),
                a = t(45),
                o = i.global.defaultColor;

            function s(t) {
                var e = this._view;
                return !!e && Math.abs(t - e.x) < e.radius + e.hitRadius
            }
            i._set("global", {
                elements: {
                    point: {
                        radius: 3,
                        pointStyle: "circle",
                        backgroundColor: o,
                        borderColor: o,
                        borderWidth: 1,
                        hitRadius: 1,
                        hoverRadius: 4,
                        hoverBorderWidth: 1
                    }
                }
            }), e.exports = r.extend({
                inRange: function(t, e) {
                    var n = this._view;
                    return !!n && Math.pow(t - n.x, 2) + Math.pow(e - n.y, 2) < Math.pow(n.hitRadius + n.radius, 2)
                },
                inLabelRange: s,
                inXRange: s,
                inYRange: function(t) {
                    var e = this._view;
                    return !!e && Math.abs(t - e.y) < e.radius + e.hitRadius
                },
                getCenterPoint: function() {
                    var t = this._view;
                    return {
                        x: t.x,
                        y: t.y
                    }
                },
                getArea: function() {
                    return Math.PI * Math.pow(this._view.radius, 2)
                },
                tooltipPosition: function() {
                    var t = this._view;
                    return {
                        x: t.x,
                        y: t.y,
                        padding: t.radius + t.borderWidth
                    }
                },
                draw: function(t) {
                    var e = this._view,
                        n = this._model,
                        r = this._chart.ctx,
                        s = e.pointStyle,
                        l = e.radius,
                        u = e.x,
                        c = e.y,
                        d = a.color,
                        h = 0;
                    e.skip || (r.strokeStyle = e.borderColor || o, r.lineWidth = a.valueOrDefault(e.borderWidth, i.global.elements.point.borderWidth), r.fillStyle = e.backgroundColor || o, void 0 !== t && (n.x < t.left || 1.01 * t.right < n.x || n.y < t.top || 1.01 * t.bottom < n.y) && (n.x < t.left ? h = (u - n.x) / (t.left - n.x) : 1.01 * t.right < n.x ? h = (n.x - u) / (n.x - t.right) : n.y < t.top ? h = (c - n.y) / (t.top - n.y) : 1.01 * t.bottom < n.y && (h = (n.y - c) / (n.y - t.bottom)), h = Math.round(100 * h) / 100, r.strokeStyle = d(r.strokeStyle).alpha(h).rgbString(), r.fillStyle = d(r.fillStyle).alpha(h).rgbString()), a.canvas.drawPoint(r, s, l, u, c))
                }
            })
        }, {
            25: 25,
            26: 26,
            45: 45
        }],
        39: [function(t, e, n) {
            "use strict";
            var i = t(25),
                r = t(26);

            function a(t) {
                return void 0 !== t._view.width
            }

            function o(t) {
                var e, n, i, r, o = t._view;
                if (a(t)) {
                    var s = o.width / 2;
                    e = o.x - s, n = o.x + s, i = Math.min(o.y, o.base), r = Math.max(o.y, o.base)
                } else {
                    var l = o.height / 2;
                    e = Math.min(o.x, o.base), n = Math.max(o.x, o.base), i = o.y - l, r = o.y + l
                }
                return {
                    left: e,
                    top: i,
                    right: n,
                    bottom: r
                }
            }
            i._set("global", {
                elements: {
                    rectangle: {
                        backgroundColor: i.global.defaultColor,
                        borderColor: i.global.defaultColor,
                        borderSkipped: "bottom",
                        borderWidth: 0
                    }
                }
            }), e.exports = r.extend({
                draw: function() {
                    var t, e, n, i, r, a, o, s = this._chart.ctx,
                        l = this._view,
                        u = l.borderWidth;
                    if (l.horizontal ? (t = l.base, e = l.x, n = l.y - l.height / 2, i = l.y + l.height / 2, r = e > t ? 1 : -1, a = 1, o = l.borderSkipped || "left") : (t = l.x - l.width / 2, e = l.x + l.width / 2, n = l.y, r = 1, a = (i = l.base) > n ? 1 : -1, o = l.borderSkipped || "bottom"), u) {
                        var c = Math.min(Math.abs(t - e), Math.abs(n - i)),
                            d = (u = u > c ? c : u) / 2,
                            h = t + ("left" !== o ? d * r : 0),
                            f = e + ("right" !== o ? -d * r : 0),
                            p = n + ("top" !== o ? d * a : 0),
                            g = i + ("bottom" !== o ? -d * a : 0);
                        h !== f && (n = p, i = g), p !== g && (t = h, e = f)
                    }
                    s.beginPath(), s.fillStyle = l.backgroundColor, s.strokeStyle = l.borderColor, s.lineWidth = u;
                    var m = [
                            [t, i],
                            [t, n],
                            [e, n],
                            [e, i]
                        ],
                        v = ["bottom", "left", "top", "right"].indexOf(o, 0);

                    function y(t) {
                        return m[(v + t) % 4]
                    } - 1 === v && (v = 0);
                    var b = y(0);
                    s.moveTo(b[0], b[1]);
                    for (var x = 1; x < 4; x++) b = y(x), s.lineTo(b[0], b[1]);
                    s.fill(), u && s.stroke()
                },
                height: function() {
                    var t = this._view;
                    return t.base - t.y
                },
                inRange: function(t, e) {
                    var n = !1;
                    if (this._view) {
                        var i = o(this);
                        n = t >= i.left && t <= i.right && e >= i.top && e <= i.bottom
                    }
                    return n
                },
                inLabelRange: function(t, e) {
                    if (!this._view) return !1;
                    var n = o(this);
                    return a(this) ? t >= n.left && t <= n.right : e >= n.top && e <= n.bottom
                },
                inXRange: function(t) {
                    var e = o(this);
                    return t >= e.left && t <= e.right
                },
                inYRange: function(t) {
                    var e = o(this);
                    return t >= e.top && t <= e.bottom
                },
                getCenterPoint: function() {
                    var t, e, n = this._view;
                    return a(this) ? (t = n.x, e = (n.y + n.base) / 2) : (t = (n.x + n.base) / 2, e = n.y), {
                        x: t,
                        y: e
                    }
                },
                getArea: function() {
                    var t = this._view;
                    return t.width * Math.abs(t.y - t.base)
                },
                tooltipPosition: function() {
                    var t = this._view;
                    return {
                        x: t.x,
                        y: t.y
                    }
                }
            })
        }, {
            25: 25,
            26: 26
        }],
        40: [function(t, e, n) {
            "use strict";
            e.exports = {}, e.exports.Arc = t(36), e.exports.Line = t(37), e.exports.Point = t(38), e.exports.Rectangle = t(39)
        }, {
            36: 36,
            37: 37,
            38: 38,
            39: 39
        }],
        41: [function(t, e, n) {
            "use strict";
            var i = t(42);
            n = e.exports = {
                clear: function(t) {
                    t.ctx.clearRect(0, 0, t.width, t.height)
                },
                roundedRect: function(t, e, n, i, r, a) {
                    if (a) {
                        var o = Math.min(a, i / 2),
                            s = Math.min(a, r / 2);
                        t.moveTo(e + o, n), t.lineTo(e + i - o, n), t.quadraticCurveTo(e + i, n, e + i, n + s), t.lineTo(e + i, n + r - s), t.quadraticCurveTo(e + i, n + r, e + i - o, n + r), t.lineTo(e + o, n + r), t.quadraticCurveTo(e, n + r, e, n + r - s), t.lineTo(e, n + s), t.quadraticCurveTo(e, n, e + o, n)
                    } else t.rect(e, n, i, r)
                },
                drawPoint: function(t, e, n, i, r) {
                    var a, o, s, l, u, c;
                    if (!e || "object" != typeof e || "[object HTMLImageElement]" !== (a = e.toString()) && "[object HTMLCanvasElement]" !== a) {
                        if (!(isNaN(n) || n <= 0)) {
                            switch (e) {
                                default: t.beginPath(),
                                t.arc(i, r, n, 0, 2 * Math.PI),
                                t.closePath(),
                                t.fill();
                                break;
                                case "triangle":
                                        t.beginPath(),
                                    u = (o = 3 * n / Math.sqrt(3)) * Math.sqrt(3) / 2,
                                    t.moveTo(i - o / 2, r + u / 3),
                                    t.lineTo(i + o / 2, r + u / 3),
                                    t.lineTo(i, r - 2 * u / 3),
                                    t.closePath(),
                                    t.fill();
                                    break;
                                case "rect":
                                        c = 1 / Math.SQRT2 * n,
                                    t.beginPath(),
                                    t.fillRect(i - c, r - c, 2 * c, 2 * c),
                                    t.strokeRect(i - c, r - c, 2 * c, 2 * c);
                                    break;
                                case "rectRounded":
                                        var d = n / Math.SQRT2,
                                        h = i - d,
                                        f = r - d,
                                        p = Math.SQRT2 * n;t.beginPath(),
                                    this.roundedRect(t, h, f, p, p, n / 2),
                                    t.closePath(),
                                    t.fill();
                                    break;
                                case "rectRot":
                                        c = 1 / Math.SQRT2 * n,
                                    t.beginPath(),
                                    t.moveTo(i - c, r),
                                    t.lineTo(i, r + c),
                                    t.lineTo(i + c, r),
                                    t.lineTo(i, r - c),
                                    t.closePath(),
                                    t.fill();
                                    break;
                                case "cross":
                                        t.beginPath(),
                                    t.moveTo(i, r + n),
                                    t.lineTo(i, r - n),
                                    t.moveTo(i - n, r),
                                    t.lineTo(i + n, r),
                                    t.closePath();
                                    break;
                                case "crossRot":
                                        t.beginPath(),
                                    s = Math.cos(Math.PI / 4) * n,
                                    l = Math.sin(Math.PI / 4) * n,
                                    t.moveTo(i - s, r - l),
                                    t.lineTo(i + s, r + l),
                                    t.moveTo(i - s, r + l),
                                    t.lineTo(i + s, r - l),
                                    t.closePath();
                                    break;
                                case "star":
                                        t.beginPath(),
                                    t.moveTo(i, r + n),
                                    t.lineTo(i, r - n),
                                    t.moveTo(i - n, r),
                                    t.lineTo(i + n, r),
                                    s = Math.cos(Math.PI / 4) * n,
                                    l = Math.sin(Math.PI / 4) * n,
                                    t.moveTo(i - s, r - l),
                                    t.lineTo(i + s, r + l),
                                    t.moveTo(i - s, r + l),
                                    t.lineTo(i + s, r - l),
                                    t.closePath();
                                    break;
                                case "line":
                                        t.beginPath(),
                                    t.moveTo(i - n, r),
                                    t.lineTo(i + n, r),
                                    t.closePath();
                                    break;
                                case "dash":
                                        t.beginPath(),
                                    t.moveTo(i, r),
                                    t.lineTo(i + n, r),
                                    t.closePath()
                            }
                            t.stroke()
                        }
                    } else t.drawImage(e, i - e.width / 2, r - e.height / 2, e.width, e.height)
                },
                clipArea: function(t, e) {
                    t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip()
                },
                unclipArea: function(t) {
                    t.restore()
                },
                lineTo: function(t, e, n, i) {
                    if (n.steppedLine) return "after" === n.steppedLine && !i || "after" !== n.steppedLine && i ? t.lineTo(e.x, n.y) : t.lineTo(n.x, e.y), void t.lineTo(n.x, n.y);
                    n.tension ? t.bezierCurveTo(i ? e.controlPointPreviousX : e.controlPointNextX, i ? e.controlPointPreviousY : e.controlPointNextY, i ? n.controlPointNextX : n.controlPointPreviousX, i ? n.controlPointNextY : n.controlPointPreviousY, n.x, n.y) : t.lineTo(n.x, n.y)
                }
            }, i.clear = n.clear, i.drawRoundedRectangle = function(t) {
                t.beginPath(), n.roundedRect.apply(n, arguments), t.closePath()
            }
        }, {
            42: 42
        }],
        42: [function(t, e, n) {
            "use strict";
            var i, r = {
                noop: function() {},
                uid: (i = 0, function() {
                    return i++
                }),
                isNullOrUndef: function(t) {
                    return null == t
                },
                isArray: Array.isArray ? Array.isArray : function(t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                },
                isObject: function(t) {
                    return null !== t && "[object Object]" === Object.prototype.toString.call(t)
                },
                valueOrDefault: function(t, e) {
                    return void 0 === t ? e : t
                },
                valueAtIndexOrDefault: function(t, e, n) {
                    return r.valueOrDefault(r.isArray(t) ? t[e] : t, n)
                },
                callback: function(t, e, n) {
                    if (t && "function" == typeof t.call) return t.apply(n, e)
                },
                each: function(t, e, n, i) {
                    var a, o, s;
                    if (r.isArray(t))
                        if (o = t.length, i)
                            for (a = o - 1; a >= 0; a--) e.call(n, t[a], a);
                        else
                            for (a = 0; a < o; a++) e.call(n, t[a], a);
                    else if (r.isObject(t))
                        for (o = (s = Object.keys(t)).length, a = 0; a < o; a++) e.call(n, t[s[a]], s[a])
                },
                arrayEquals: function(t, e) {
                    var n, i, a, o;
                    if (!t || !e || t.length !== e.length) return !1;
                    for (n = 0, i = t.length; n < i; ++n)
                        if (a = t[n], o = e[n], a instanceof Array && o instanceof Array) {
                            if (!r.arrayEquals(a, o)) return !1
                        } else if (a !== o) return !1;
                    return !0
                },
                clone: function(t) {
                    if (r.isArray(t)) return t.map(r.clone);
                    if (r.isObject(t)) {
                        for (var e = {}, n = Object.keys(t), i = n.length, a = 0; a < i; ++a) e[n[a]] = r.clone(t[n[a]]);
                        return e
                    }
                    return t
                },
                _merger: function(t, e, n, i) {
                    var a = e[t],
                        o = n[t];
                    r.isObject(a) && r.isObject(o) ? r.merge(a, o, i) : e[t] = r.clone(o)
                },
                _mergerIf: function(t, e, n) {
                    var i = e[t],
                        a = n[t];
                    r.isObject(i) && r.isObject(a) ? r.mergeIf(i, a) : e.hasOwnProperty(t) || (e[t] = r.clone(a))
                },
                merge: function(t, e, n) {
                    var i, a, o, s, l, u = r.isArray(e) ? e : [e],
                        c = u.length;
                    if (!r.isObject(t)) return t;
                    for (i = (n = n || {}).merger || r._merger, a = 0; a < c; ++a)
                        if (e = u[a], r.isObject(e))
                            for (l = 0, s = (o = Object.keys(e)).length; l < s; ++l) i(o[l], t, e, n);
                    return t
                },
                mergeIf: function(t, e) {
                    return r.merge(t, e, {
                        merger: r._mergerIf
                    })
                },
                extend: function(t) {
                    for (var e = function(e, n) {
                            t[n] = e
                        }, n = 1, i = arguments.length; n < i; ++n) r.each(arguments[n], e);
                    return t
                },
                inherits: function(t) {
                    var e = this,
                        n = t && t.hasOwnProperty("constructor") ? t.constructor : function() {
                            return e.apply(this, arguments)
                        },
                        i = function() {
                            this.constructor = n
                        };
                    return i.prototype = e.prototype, n.prototype = new i, n.extend = r.inherits, t && r.extend(n.prototype, t), n.__super__ = e.prototype, n
                }
            };
            e.exports = r, r.callCallback = r.callback, r.indexOf = function(t, e, n) {
                return Array.prototype.indexOf.call(t, e, n)
            }, r.getValueOrDefault = r.valueOrDefault, r.getValueAtIndexOrDefault = r.valueAtIndexOrDefault
        }, {}],
        43: [function(t, e, n) {
            "use strict";
            var i = t(42),
                r = {
                    linear: function(t) {
                        return t
                    },
                    easeInQuad: function(t) {
                        return t * t
                    },
                    easeOutQuad: function(t) {
                        return -t * (t - 2)
                    },
                    easeInOutQuad: function(t) {
                        return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
                    },
                    easeInCubic: function(t) {
                        return t * t * t
                    },
                    easeOutCubic: function(t) {
                        return (t -= 1) * t * t + 1
                    },
                    easeInOutCubic: function(t) {
                        return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
                    },
                    easeInQuart: function(t) {
                        return t * t * t * t
                    },
                    easeOutQuart: function(t) {
                        return -((t -= 1) * t * t * t - 1)
                    },
                    easeInOutQuart: function(t) {
                        return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
                    },
                    easeInQuint: function(t) {
                        return t * t * t * t * t
                    },
                    easeOutQuint: function(t) {
                        return (t -= 1) * t * t * t * t + 1
                    },
                    easeInOutQuint: function(t) {
                        return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
                    },
                    easeInSine: function(t) {
                        return 1 - Math.cos(t * (Math.PI / 2))
                    },
                    easeOutSine: function(t) {
                        return Math.sin(t * (Math.PI / 2))
                    },
                    easeInOutSine: function(t) {
                        return -.5 * (Math.cos(Math.PI * t) - 1)
                    },
                    easeInExpo: function(t) {
                        return 0 === t ? 0 : Math.pow(2, 10 * (t - 1))
                    },
                    easeOutExpo: function(t) {
                        return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
                    },
                    easeInOutExpo: function(t) {
                        return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t))
                    },
                    easeInCirc: function(t) {
                        return t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1)
                    },
                    easeOutCirc: function(t) {
                        return Math.sqrt(1 - (t -= 1) * t)
                    },
                    easeInOutCirc: function(t) {
                        return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                    },
                    easeInElastic: function(t) {
                        var e = 1.70158,
                            n = 0,
                            i = 1;
                        return 0 === t ? 0 : 1 === t ? 1 : (n || (n = .3), i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), -i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n))
                    },
                    easeOutElastic: function(t) {
                        var e = 1.70158,
                            n = 0,
                            i = 1;
                        return 0 === t ? 0 : 1 === t ? 1 : (n || (n = .3), i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), i * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / n) + 1)
                    },
                    easeInOutElastic: function(t) {
                        var e = 1.70158,
                            n = 0,
                            i = 1;
                        return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (n || (n = .45), i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), t < 1 ? i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * -.5 : i * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * .5 + 1)
                    },
                    easeInBack: function(t) {
                        return t * t * (2.70158 * t - 1.70158)
                    },
                    easeOutBack: function(t) {
                        return (t -= 1) * t * (2.70158 * t + 1.70158) + 1
                    },
                    easeInOutBack: function(t) {
                        var e = 1.70158;
                        return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
                    },
                    easeInBounce: function(t) {
                        return 1 - r.easeOutBounce(1 - t)
                    },
                    easeOutBounce: function(t) {
                        return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                    },
                    easeInOutBounce: function(t) {
                        return t < .5 ? .5 * r.easeInBounce(2 * t) : .5 * r.easeOutBounce(2 * t - 1) + .5
                    }
                };
            e.exports = {
                effects: r
            }, i.easingEffects = r
        }, {
            42: 42
        }],
        44: [function(t, e, n) {
            "use strict";
            var i = t(42);
            e.exports = {
                toLineHeight: function(t, e) {
                    var n = ("" + t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
                    if (!n || "normal" === n[1]) return 1.2 * e;
                    switch (t = +n[2], n[3]) {
                        case "px":
                            return t;
                        case "%":
                            t /= 100
                    }
                    return e * t
                },
                toPadding: function(t) {
                    var e, n, r, a;
                    return i.isObject(t) ? (e = +t.top || 0, n = +t.right || 0, r = +t.bottom || 0, a = +t.left || 0) : e = n = r = a = +t || 0, {
                        top: e,
                        right: n,
                        bottom: r,
                        left: a,
                        height: e + r,
                        width: a + n
                    }
                },
                resolve: function(t, e, n) {
                    var r, a, o;
                    for (r = 0, a = t.length; r < a; ++r)
                        if (void 0 !== (o = t[r]) && (void 0 !== e && "function" == typeof o && (o = o(e)), void 0 !== n && i.isArray(o) && (o = o[n]), void 0 !== o)) return o
                }
            }
        }, {
            42: 42
        }],
        45: [function(t, e, n) {
            "use strict";
            e.exports = t(42), e.exports.easing = t(43), e.exports.canvas = t(41), e.exports.options = t(44)
        }, {
            41: 41,
            42: 42,
            43: 43,
            44: 44
        }],
        46: [function(t, e, n) {
            e.exports = {
                acquireContext: function(t) {
                    return t && t.canvas && (t = t.canvas), t && t.getContext("2d") || null
                }
            }
        }, {}],
        47: [function(t, e, n) {
            "use strict";
            var i = t(45),
                r = "$chartjs",
                a = "chartjs-",
                o = a + "render-monitor",
                s = a + "render-animation",
                l = ["animationstart", "webkitAnimationStart"],
                u = {
                    touchstart: "mousedown",
                    touchmove: "mousemove",
                    touchend: "mouseup",
                    pointerenter: "mouseenter",
                    pointerdown: "mousedown",
                    pointermove: "mousemove",
                    pointerup: "mouseup",
                    pointerleave: "mouseout",
                    pointerout: "mouseout"
                };

            function c(t, e) {
                var n = i.getStyle(t, e),
                    r = n && n.match(/^(\d+)(\.\d+)?px$/);
                return r ? Number(r[1]) : void 0
            }
            var d = !! function() {
                var t = !1;
                try {
                    var e = Object.defineProperty({}, "passive", {
                        get: function() {
                            t = !0
                        }
                    });
                    window.addEventListener("e", null, e)
                } catch (t) {}
                return t
            }() && {
                passive: !0
            };

            function h(t, e, n) {
                t.addEventListener(e, n, d)
            }

            function f(t, e, n) {
                t.removeEventListener(e, n, d)
            }

            function p(t, e, n, i, r) {
                return {
                    type: t,
                    chart: e,
                    native: r || null,
                    x: void 0 !== n ? n : null,
                    y: void 0 !== i ? i : null
                }
            }

            function g(t, e, n) {
                var u, c, d, f, g, m, v, y, b = t[r] || (t[r] = {}),
                    x = b.resizer = function(t) {
                        var e = document.createElement("div"),
                            n = a + "size-monitor",
                            i = "position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;";
                        e.style.cssText = i, e.className = n, e.innerHTML = '<div class="' + n + '-expand" style="' + i + '"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="' + n + '-shrink" style="' + i + '"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div>';
                        var r = e.childNodes[0],
                            o = e.childNodes[1];
                        e._reset = function() {
                            r.scrollLeft = 1e6, r.scrollTop = 1e6, o.scrollLeft = 1e6, o.scrollTop = 1e6
                        };
                        var s = function() {
                            e._reset(), t()
                        };
                        return h(r, "scroll", s.bind(r, "expand")), h(o, "scroll", s.bind(o, "shrink")), e
                    }((u = function() {
                        if (b.resizer) return e(p("resize", n))
                    }, d = !1, f = [], function() {
                        f = Array.prototype.slice.call(arguments), c = c || this, d || (d = !0, i.requestAnimFrame.call(window, function() {
                            d = !1, u.apply(c, f)
                        }))
                    }));
                m = function() {
                    if (b.resizer) {
                        var e = t.parentNode;
                        e && e !== x.parentNode && e.insertBefore(x, e.firstChild), x._reset()
                    }
                }, v = (g = t)[r] || (g[r] = {}), y = v.renderProxy = function(t) {
                    t.animationName === s && m()
                }, i.each(l, function(t) {
                    h(g, t, y)
                }), v.reflow = !!g.offsetParent, g.classList.add(o)
            }

            function m(t) {
                var e, n, a, s = t[r] || {},
                    u = s.resizer;
                delete s.resizer, n = (e = t)[r] || {}, (a = n.renderProxy) && (i.each(l, function(t) {
                    f(e, t, a)
                }), delete n.renderProxy), e.classList.remove(o), u && u.parentNode && u.parentNode.removeChild(u)
            }
            e.exports = {
                _enabled: "undefined" != typeof window && "undefined" != typeof document,
                initialize: function() {
                    var t, e, n, i = "from{opacity:0.99}to{opacity:1}";
                    e = "@-webkit-keyframes " + s + "{" + i + "}@keyframes " + s + "{" + i + "}." + o + "{-webkit-animation:" + s + " 0.001s;animation:" + s + " 0.001s;}", n = (t = this)._style || document.createElement("style"), t._style || (t._style = n, e = "/* Chart.js */\n" + e, n.setAttribute("type", "text/css"), document.getElementsByTagName("head")[0].appendChild(n)), n.appendChild(document.createTextNode(e))
                },
                acquireContext: function(t, e) {
                    "string" == typeof t ? t = document.getElementById(t) : t.length && (t = t[0]), t && t.canvas && (t = t.canvas);
                    var n = t && t.getContext && t.getContext("2d");
                    return n && n.canvas === t ? (function(t, e) {
                        var n = t.style,
                            i = t.getAttribute("height"),
                            a = t.getAttribute("width");
                        if (t[r] = {
                                initial: {
                                    height: i,
                                    width: a,
                                    style: {
                                        display: n.display,
                                        height: n.height,
                                        width: n.width
                                    }
                                }
                            }, n.display = n.display || "block", null === a || "" === a) {
                            var o = c(t, "width");
                            void 0 !== o && (t.width = o)
                        }
                        if (null === i || "" === i)
                            if ("" === t.style.height) t.height = t.width / (e.options.aspectRatio || 2);
                            else {
                                var s = c(t, "height");
                                void 0 !== o && (t.height = s)
                            }
                    }(t, e), n) : null
                },
                releaseContext: function(t) {
                    var e = t.canvas;
                    if (e[r]) {
                        var n = e[r].initial;
                        ["height", "width"].forEach(function(t) {
                            var r = n[t];
                            i.isNullOrUndef(r) ? e.removeAttribute(t) : e.setAttribute(t, r)
                        }), i.each(n.style || {}, function(t, n) {
                            e.style[n] = t
                        }), e.width = e.width, delete e[r]
                    }
                },
                addEventListener: function(t, e, n) {
                    var a = t.canvas;
                    if ("resize" !== e) {
                        var o = n[r] || (n[r] = {});
                        h(a, e, (o.proxies || (o.proxies = {}))[t.id + "_" + e] = function(e) {
                            var r, a, o, s;
                            n((a = t, o = u[(r = e).type] || r.type, s = i.getRelativePosition(r, a), p(o, a, s.x, s.y, r)))
                        })
                    } else g(a, n, t)
                },
                removeEventListener: function(t, e, n) {
                    var i = t.canvas;
                    if ("resize" !== e) {
                        var a = ((n[r] || {}).proxies || {})[t.id + "_" + e];
                        a && f(i, e, a)
                    } else m(i)
                }
            }, i.addEvent = h, i.removeEvent = f
        }, {
            45: 45
        }],
        48: [function(t, e, n) {
            "use strict";
            var i = t(45),
                r = t(46),
                a = t(47),
                o = a._enabled ? a : r;
            e.exports = i.extend({
                initialize: function() {},
                acquireContext: function() {},
                releaseContext: function() {},
                addEventListener: function() {},
                removeEventListener: function() {}
            }, o)
        }, {
            45: 45,
            46: 46,
            47: 47
        }],
        49: [function(t, e, n) {
            "use strict";
            e.exports = {}, e.exports.filler = t(50), e.exports.legend = t(51), e.exports.title = t(52)
        }, {
            50: 50,
            51: 51,
            52: 52
        }],
        50: [function(t, e, n) {
            "use strict";
            var i = t(25),
                r = t(40),
                a = t(45);
            i._set("global", {
                plugins: {
                    filler: {
                        propagate: !0
                    }
                }
            });
            var o = {
                dataset: function(t) {
                    var e = t.fill,
                        n = t.chart,
                        i = n.getDatasetMeta(e),
                        r = i && n.isDatasetVisible(e) && i.dataset._children || [],
                        a = r.length || 0;
                    return a ? function(t, e) {
                        return e < a && r[e]._view || null
                    } : null
                },
                boundary: function(t) {
                    var e = t.boundary,
                        n = e ? e.x : null,
                        i = e ? e.y : null;
                    return function(t) {
                        return {
                            x: null === n ? t.x : n,
                            y: null === i ? t.y : i
                        }
                    }
                }
            };

            function s(t, e, n) {
                var i, r = t._model || {},
                    a = r.fill;
                if (void 0 === a && (a = !!r.backgroundColor), !1 === a || null === a) return !1;
                if (!0 === a) return "origin";
                if (i = parseFloat(a, 10), isFinite(i) && Math.floor(i) === i) return "-" !== a[0] && "+" !== a[0] || (i = e + i), !(i === e || i < 0 || i >= n) && i;
                switch (a) {
                    case "bottom":
                        return "start";
                    case "top":
                        return "end";
                    case "zero":
                        return "origin";
                    case "origin":
                    case "start":
                    case "end":
                        return a;
                    default:
                        return !1
                }
            }

            function l(t) {
                var e, n = t.el._model || {},
                    i = t.el._scale || {},
                    r = t.fill,
                    a = null;
                if (isFinite(r)) return null;
                if ("start" === r ? a = void 0 === n.scaleBottom ? i.bottom : n.scaleBottom : "end" === r ? a = void 0 === n.scaleTop ? i.top : n.scaleTop : void 0 !== n.scaleZero ? a = n.scaleZero : i.getBasePosition ? a = i.getBasePosition() : i.getBasePixel && (a = i.getBasePixel()), null != a) {
                    if (void 0 !== a.x && void 0 !== a.y) return a;
                    if ("number" == typeof a && isFinite(a)) return {
                        x: (e = i.isHorizontal()) ? a : null,
                        y: e ? null : a
                    }
                }
                return null
            }

            function u(t, e, n) {
                var i, r = t[e].fill,
                    a = [e];
                if (!n) return r;
                for (; !1 !== r && -1 === a.indexOf(r);) {
                    if (!isFinite(r)) return r;
                    if (!(i = t[r])) return !1;
                    if (i.visible) return r;
                    a.push(r), r = i.fill
                }
                return !1
            }

            function c(t) {
                return t && !t.skip
            }

            function d(t, e, n, i, r) {
                var o;
                if (i && r) {
                    for (t.moveTo(e[0].x, e[0].y), o = 1; o < i; ++o) a.canvas.lineTo(t, e[o - 1], e[o]);
                    for (t.lineTo(n[r - 1].x, n[r - 1].y), o = r - 1; o > 0; --o) a.canvas.lineTo(t, n[o], n[o - 1], !0)
                }
            }
            e.exports = {
                id: "filler",
                afterDatasetsUpdate: function(t, e) {
                    var n, i, a, c, d, h, f, p = (t.data.datasets || []).length,
                        g = e.propagate,
                        m = [];
                    for (i = 0; i < p; ++i) c = null, (a = (n = t.getDatasetMeta(i)).dataset) && a._model && a instanceof r.Line && (c = {
                        visible: t.isDatasetVisible(i),
                        fill: s(a, i, p),
                        chart: t,
                        el: a
                    }), n.$filler = c, m.push(c);
                    for (i = 0; i < p; ++i)(c = m[i]) && (c.fill = u(m, i, g), c.boundary = l(c), c.mapper = (f = void 0, h = (d = c).fill, f = "dataset", !1 === h ? null : (isFinite(h) || (f = "boundary"), o[f](d))))
                },
                beforeDatasetDraw: function(t, e) {
                    var n = e.meta.$filler;
                    if (n) {
                        var r = t.ctx,
                            o = n.el,
                            s = o._view,
                            l = o._children || [],
                            u = n.mapper,
                            h = s.backgroundColor || i.global.defaultColor;
                        u && h && l.length && (a.canvas.clipArea(r, t.chartArea), function(t, e, n, i, r, a) {
                            var o, s, l, u, h, f, p, g = e.length,
                                m = i.spanGaps,
                                v = [],
                                y = [],
                                b = 0,
                                x = 0;
                            for (t.beginPath(), o = 0, s = g + !!a; o < s; ++o) h = n(u = e[l = o % g]._view, l, i), f = c(u), p = c(h), f && p ? (b = v.push(u), x = y.push(h)) : b && x && (m ? (f && v.push(u), p && y.push(h)) : (d(t, v, y, b, x), b = x = 0, v = [], y = []));
                            d(t, v, y, b, x), t.closePath(), t.fillStyle = r, t.fill()
                        }(r, l, u, s, h, o._loop), a.canvas.unclipArea(r))
                    }
                }
            }
        }, {
            25: 25,
            40: 40,
            45: 45
        }],
        51: [function(t, e, n) {
            "use strict";
            var i = t(25),
                r = t(26),
                a = t(45),
                o = t(30),
                s = a.noop;

            function l(t, e) {
                return t.usePointStyle ? e * Math.SQRT2 : t.boxWidth
            }
            i._set("global", {
                legend: {
                    display: !0,
                    position: "top",
                    fullWidth: !0,
                    reverse: !1,
                    weight: 1e3,
                    onClick: function(t, e) {
                        var n = e.datasetIndex,
                            i = this.chart,
                            r = i.getDatasetMeta(n);
                        r.hidden = null === r.hidden ? !i.data.datasets[n].hidden : null, i.update()
                    },
                    onHover: null,
                    labels: {
                        boxWidth: 40,
                        padding: 10,
                        generateLabels: function(t) {
                            var e = t.data;
                            return a.isArray(e.datasets) ? e.datasets.map(function(e, n) {
                                return {
                                    text: e.label,
                                    fillStyle: a.isArray(e.backgroundColor) ? e.backgroundColor[0] : e.backgroundColor,
                                    hidden: !t.isDatasetVisible(n),
                                    lineCap: e.borderCapStyle,
                                    lineDash: e.borderDash,
                                    lineDashOffset: e.borderDashOffset,
                                    lineJoin: e.borderJoinStyle,
                                    lineWidth: e.borderWidth,
                                    strokeStyle: e.borderColor,
                                    pointStyle: e.pointStyle,
                                    datasetIndex: n
                                }
                            }, this) : []
                        }
                    }
                },
                legendCallback: function(t) {
                    var e = [];
                    e.push('<ul class="' + t.id + '-legend">');
                    for (var n = 0; n < t.data.datasets.length; n++) e.push('<li><span style="background-color:' + t.data.datasets[n].backgroundColor + '"></span>'), t.data.datasets[n].label && e.push(t.data.datasets[n].label), e.push("</li>");
                    return e.push("</ul>"), e.join("")
                }
            });
            var u = r.extend({
                initialize: function(t) {
                    a.extend(this, t), this.legendHitBoxes = [], this.doughnutMode = !1
                },
                beforeUpdate: s,
                update: function(t, e, n) {
                    var i = this;
                    return i.beforeUpdate(), i.maxWidth = t, i.maxHeight = e, i.margins = n, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize
                },
                afterUpdate: s,
                beforeSetDimensions: s,
                setDimensions: function() {
                    var t = this;
                    t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
                        width: 0,
                        height: 0
                    }
                },
                afterSetDimensions: s,
                beforeBuildLabels: s,
                buildLabels: function() {
                    var t = this,
                        e = t.options.labels || {},
                        n = a.callback(e.generateLabels, [t.chart], t) || [];
                    e.filter && (n = n.filter(function(n) {
                        return e.filter(n, t.chart.data)
                    })), t.options.reverse && n.reverse(), t.legendItems = n
                },
                afterBuildLabels: s,
                beforeFit: s,
                fit: function() {
                    var t = this,
                        e = t.options,
                        n = e.labels,
                        r = e.display,
                        o = t.ctx,
                        s = i.global,
                        u = a.valueOrDefault,
                        c = u(n.fontSize, s.defaultFontSize),
                        d = u(n.fontStyle, s.defaultFontStyle),
                        h = u(n.fontFamily, s.defaultFontFamily),
                        f = a.fontString(c, d, h),
                        p = t.legendHitBoxes = [],
                        g = t.minSize,
                        m = t.isHorizontal();
                    if (m ? (g.width = t.maxWidth, g.height = r ? 10 : 0) : (g.width = r ? 10 : 0, g.height = t.maxHeight), r)
                        if (o.font = f, m) {
                            var v = t.lineWidths = [0],
                                y = t.legendItems.length ? c + n.padding : 0;
                            o.textAlign = "left", o.textBaseline = "top", a.each(t.legendItems, function(e, i) {
                                var r = l(n, c) + c / 2 + o.measureText(e.text).width;
                                v[v.length - 1] + r + n.padding >= t.width && (y += c + n.padding, v[v.length] = t.left), p[i] = {
                                    left: 0,
                                    top: 0,
                                    width: r,
                                    height: c
                                }, v[v.length - 1] += r + n.padding
                            }), g.height += y
                        } else {
                            var b = n.padding,
                                x = t.columnWidths = [],
                                w = n.padding,
                                k = 0,
                                C = 0,
                                D = c + b;
                            a.each(t.legendItems, function(t, e) {
                                var i = l(n, c) + c / 2 + o.measureText(t.text).width;
                                C + D > g.height && (w += k + n.padding, x.push(k), k = 0, C = 0), k = Math.max(k, i), C += D, p[e] = {
                                    left: 0,
                                    top: 0,
                                    width: i,
                                    height: c
                                }
                            }), w += k, x.push(k), g.width += w
                        }
                    t.width = g.width, t.height = g.height
                },
                afterFit: s,
                isHorizontal: function() {
                    return "top" === this.options.position || "bottom" === this.options.position
                },
                draw: function() {
                    var t = this,
                        e = t.options,
                        n = e.labels,
                        r = i.global,
                        o = r.elements.line,
                        s = t.width,
                        u = t.lineWidths;
                    if (e.display) {
                        var c, d = t.ctx,
                            h = a.valueOrDefault,
                            f = h(n.fontColor, r.defaultFontColor),
                            p = h(n.fontSize, r.defaultFontSize),
                            g = h(n.fontStyle, r.defaultFontStyle),
                            m = h(n.fontFamily, r.defaultFontFamily),
                            v = a.fontString(p, g, m);
                        d.textAlign = "left", d.textBaseline = "middle", d.lineWidth = .5, d.strokeStyle = f, d.fillStyle = f, d.font = v;
                        var y = l(n, p),
                            b = t.legendHitBoxes,
                            x = t.isHorizontal();
                        c = x ? {
                            x: t.left + (s - u[0]) / 2,
                            y: t.top + n.padding,
                            line: 0
                        } : {
                            x: t.left + n.padding,
                            y: t.top + n.padding,
                            line: 0
                        };
                        var w = p + n.padding;
                        a.each(t.legendItems, function(i, l) {
                            var f, g, m, v, k, C = d.measureText(i.text).width,
                                D = y + p / 2 + C,
                                S = c.x,
                                T = c.y;
                            x ? S + D >= s && (T = c.y += w, c.line++, S = c.x = t.left + (s - u[c.line]) / 2) : T + w > t.bottom && (S = c.x = S + t.columnWidths[c.line] + n.padding, T = c.y = t.top + n.padding, c.line++),
                                function(t, n, i) {
                                    if (!(isNaN(y) || y <= 0)) {
                                        d.save(), d.fillStyle = h(i.fillStyle, r.defaultColor), d.lineCap = h(i.lineCap, o.borderCapStyle), d.lineDashOffset = h(i.lineDashOffset, o.borderDashOffset), d.lineJoin = h(i.lineJoin, o.borderJoinStyle), d.lineWidth = h(i.lineWidth, o.borderWidth), d.strokeStyle = h(i.strokeStyle, r.defaultColor);
                                        var s = 0 === h(i.lineWidth, o.borderWidth);
                                        if (d.setLineDash && d.setLineDash(h(i.lineDash, o.borderDash)), e.labels && e.labels.usePointStyle) {
                                            var l = p * Math.SQRT2 / 2,
                                                u = l / Math.SQRT2,
                                                c = t + u,
                                                f = n + u;
                                            a.canvas.drawPoint(d, i.pointStyle, l, c, f)
                                        } else s || d.strokeRect(t, n, y, p), d.fillRect(t, n, y, p);
                                        d.restore()
                                    }
                                }(S, T, i), b[l].left = S, b[l].top = T, f = i, g = C, v = y + (m = p / 2) + S, k = T + m, d.fillText(f.text, v, k), f.hidden && (d.beginPath(), d.lineWidth = 2, d.moveTo(v, k), d.lineTo(v + g, k), d.stroke()), x ? c.x += D + n.padding : c.y += w
                        })
                    }
                },
                handleEvent: function(t) {
                    var e = this,
                        n = e.options,
                        i = "mouseup" === t.type ? "click" : t.type,
                        r = !1;
                    if ("mousemove" === i) {
                        if (!n.onHover) return
                    } else {
                        if ("click" !== i) return;
                        if (!n.onClick) return
                    }
                    var a = t.x,
                        o = t.y;
                    if (a >= e.left && a <= e.right && o >= e.top && o <= e.bottom)
                        for (var s = e.legendHitBoxes, l = 0; l < s.length; ++l) {
                            var u = s[l];
                            if (a >= u.left && a <= u.left + u.width && o >= u.top && o <= u.top + u.height) {
                                if ("click" === i) {
                                    n.onClick.call(e, t.native, e.legendItems[l]), r = !0;
                                    break
                                }
                                if ("mousemove" === i) {
                                    n.onHover.call(e, t.native, e.legendItems[l]), r = !0;
                                    break
                                }
                            }
                        }
                    return r
                }
            });

            function c(t, e) {
                var n = new u({
                    ctx: t.ctx,
                    options: e,
                    chart: t
                });
                o.configure(t, n, e), o.addBox(t, n), t.legend = n
            }
            e.exports = {
                id: "legend",
                _element: u,
                beforeInit: function(t) {
                    var e = t.options.legend;
                    e && c(t, e)
                },
                beforeUpdate: function(t) {
                    var e = t.options.legend,
                        n = t.legend;
                    e ? (a.mergeIf(e, i.global.legend), n ? (o.configure(t, n, e), n.options = e) : c(t, e)) : n && (o.removeBox(t, n), delete t.legend)
                },
                afterEvent: function(t, e) {
                    var n = t.legend;
                    n && n.handleEvent(e)
                }
            }
        }, {
            25: 25,
            26: 26,
            30: 30,
            45: 45
        }],
        52: [function(t, e, n) {
            "use strict";
            var i = t(25),
                r = t(26),
                a = t(45),
                o = t(30),
                s = a.noop;
            i._set("global", {
                title: {
                    display: !1,
                    fontStyle: "bold",
                    fullWidth: !0,
                    lineHeight: 1.2,
                    padding: 10,
                    position: "top",
                    text: "",
                    weight: 2e3
                }
            });
            var l = r.extend({
                initialize: function(t) {
                    a.extend(this, t), this.legendHitBoxes = []
                },
                beforeUpdate: s,
                update: function(t, e, n) {
                    var i = this;
                    return i.beforeUpdate(), i.maxWidth = t, i.maxHeight = e, i.margins = n, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize
                },
                afterUpdate: s,
                beforeSetDimensions: s,
                setDimensions: function() {
                    var t = this;
                    t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
                        width: 0,
                        height: 0
                    }
                },
                afterSetDimensions: s,
                beforeBuildLabels: s,
                buildLabels: s,
                afterBuildLabels: s,
                beforeFit: s,
                fit: function() {
                    var t = this,
                        e = a.valueOrDefault,
                        n = t.options,
                        r = n.display,
                        o = e(n.fontSize, i.global.defaultFontSize),
                        s = t.minSize,
                        l = a.isArray(n.text) ? n.text.length : 1,
                        u = a.options.toLineHeight(n.lineHeight, o),
                        c = r ? l * u + 2 * n.padding : 0;
                    t.isHorizontal() ? (s.width = t.maxWidth, s.height = c) : (s.width = c, s.height = t.maxHeight), t.width = s.width, t.height = s.height
                },
                afterFit: s,
                isHorizontal: function() {
                    var t = this.options.position;
                    return "top" === t || "bottom" === t
                },
                draw: function() {
                    var t = this,
                        e = t.ctx,
                        n = a.valueOrDefault,
                        r = t.options,
                        o = i.global;
                    if (r.display) {
                        var s, l, u, c = n(r.fontSize, o.defaultFontSize),
                            d = n(r.fontStyle, o.defaultFontStyle),
                            h = n(r.fontFamily, o.defaultFontFamily),
                            f = a.fontString(c, d, h),
                            p = a.options.toLineHeight(r.lineHeight, c),
                            g = p / 2 + r.padding,
                            m = 0,
                            v = t.top,
                            y = t.left,
                            b = t.bottom,
                            x = t.right;
                        e.fillStyle = n(r.fontColor, o.defaultFontColor), e.font = f, t.isHorizontal() ? (l = y + (x - y) / 2, u = v + g, s = x - y) : (l = "left" === r.position ? y + g : x - g, u = v + (b - v) / 2, s = b - v, m = Math.PI * ("left" === r.position ? -.5 : .5)), e.save(), e.translate(l, u), e.rotate(m), e.textAlign = "center", e.textBaseline = "middle";
                        var w = r.text;
                        if (a.isArray(w))
                            for (var k = 0, C = 0; C < w.length; ++C) e.fillText(w[C], 0, k, s), k += p;
                        else e.fillText(w, 0, 0, s);
                        e.restore()
                    }
                }
            });

            function u(t, e) {
                var n = new l({
                    ctx: t.ctx,
                    options: e,
                    chart: t
                });
                o.configure(t, n, e), o.addBox(t, n), t.titleBlock = n
            }
            e.exports = {
                id: "title",
                _element: l,
                beforeInit: function(t) {
                    var e = t.options.title;
                    e && u(t, e)
                },
                beforeUpdate: function(t) {
                    var e = t.options.title,
                        n = t.titleBlock;
                    e ? (a.mergeIf(e, i.global.title), n ? (o.configure(t, n, e), n.options = e) : u(t, e)) : n && (o.removeBox(t, n), delete t.titleBlock)
                }
            }
        }, {
            25: 25,
            26: 26,
            30: 30,
            45: 45
        }],
        53: [function(t, e, n) {
            "use strict";
            e.exports = function(t) {
                var e = t.Scale.extend({
                    getLabels: function() {
                        var t = this.chart.data;
                        return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels
                    },
                    determineDataLimits: function() {
                        var t, e = this,
                            n = e.getLabels();
                        e.minIndex = 0, e.maxIndex = n.length - 1, void 0 !== e.options.ticks.min && (t = n.indexOf(e.options.ticks.min), e.minIndex = -1 !== t ? t : e.minIndex), void 0 !== e.options.ticks.max && (t = n.indexOf(e.options.ticks.max), e.maxIndex = -1 !== t ? t : e.maxIndex), e.min = n[e.minIndex], e.max = n[e.maxIndex]
                    },
                    buildTicks: function() {
                        var t = this,
                            e = t.getLabels();
                        t.ticks = 0 === t.minIndex && t.maxIndex === e.length - 1 ? e : e.slice(t.minIndex, t.maxIndex + 1)
                    },
                    getLabelForIndex: function(t, e) {
                        var n = this,
                            i = n.chart.data,
                            r = n.isHorizontal();
                        return i.yLabels && !r ? n.getRightValue(i.datasets[e].data[t]) : n.ticks[t - n.minIndex]
                    },
                    getPixelForValue: function(t, e) {
                        var n, i = this,
                            r = i.options.offset,
                            a = Math.max(i.maxIndex + 1 - i.minIndex - (r ? 0 : 1), 1);
                        if (null != t && (n = i.isHorizontal() ? t.x : t.y), void 0 !== n || void 0 !== t && isNaN(e)) {
                            t = n || t;
                            var o = i.getLabels().indexOf(t);
                            e = -1 !== o ? o : e
                        }
                        if (i.isHorizontal()) {
                            var s = i.width / a,
                                l = s * (e - i.minIndex);
                            return r && (l += s / 2), i.left + Math.round(l)
                        }
                        var u = i.height / a,
                            c = u * (e - i.minIndex);
                        return r && (c += u / 2), i.top + Math.round(c)
                    },
                    getPixelForTick: function(t) {
                        return this.getPixelForValue(this.ticks[t], t + this.minIndex, null)
                    },
                    getValueForPixel: function(t) {
                        var e = this,
                            n = e.options.offset,
                            i = Math.max(e._ticks.length - (n ? 0 : 1), 1),
                            r = e.isHorizontal(),
                            a = (r ? e.width : e.height) / i;
                        return t -= r ? e.left : e.top, n && (t -= a / 2), (t <= 0 ? 0 : Math.round(t / a)) + e.minIndex
                    },
                    getBasePixel: function() {
                        return this.bottom
                    }
                });
                t.scaleService.registerScaleType("category", e, {
                    position: "bottom"
                })
            }
        }, {}],
        54: [function(t, e, n) {
            "use strict";
            var i = t(25),
                r = t(45),
                a = t(34);
            e.exports = function(t) {
                var e = {
                        position: "left",
                        ticks: {
                            callback: a.formatters.linear
                        }
                    },
                    n = t.LinearScaleBase.extend({
                        determineDataLimits: function() {
                            var t = this,
                                e = t.options,
                                n = t.chart,
                                i = n.data.datasets,
                                a = t.isHorizontal();

                            function o(e) {
                                return a ? e.xAxisID === t.id : e.yAxisID === t.id
                            }
                            t.min = null, t.max = null;
                            var s = e.stacked;
                            if (void 0 === s && r.each(i, function(t, e) {
                                    if (!s) {
                                        var i = n.getDatasetMeta(e);
                                        n.isDatasetVisible(e) && o(i) && void 0 !== i.stack && (s = !0)
                                    }
                                }), e.stacked || s) {
                                var l = {};
                                r.each(i, function(i, a) {
                                    var s = n.getDatasetMeta(a),
                                        u = [s.type, void 0 === e.stacked && void 0 === s.stack ? a : "", s.stack].join(".");
                                    void 0 === l[u] && (l[u] = {
                                        positiveValues: [],
                                        negativeValues: []
                                    });
                                    var c = l[u].positiveValues,
                                        d = l[u].negativeValues;
                                    n.isDatasetVisible(a) && o(s) && r.each(i.data, function(n, i) {
                                        var r = +t.getRightValue(n);
                                        isNaN(r) || s.data[i].hidden || (c[i] = c[i] || 0, d[i] = d[i] || 0, e.relativePoints ? c[i] = 100 : r < 0 ? d[i] += r : c[i] += r)
                                    })
                                }), r.each(l, function(e) {
                                    var n = e.positiveValues.concat(e.negativeValues),
                                        i = r.min(n),
                                        a = r.max(n);
                                    t.min = null === t.min ? i : Math.min(t.min, i), t.max = null === t.max ? a : Math.max(t.max, a)
                                })
                            } else r.each(i, function(e, i) {
                                var a = n.getDatasetMeta(i);
                                n.isDatasetVisible(i) && o(a) && r.each(e.data, function(e, n) {
                                    var i = +t.getRightValue(e);
                                    isNaN(i) || a.data[n].hidden || (null === t.min ? t.min = i : i < t.min && (t.min = i), null === t.max ? t.max = i : i > t.max && (t.max = i))
                                })
                            });
                            t.min = isFinite(t.min) && !isNaN(t.min) ? t.min : 0, t.max = isFinite(t.max) && !isNaN(t.max) ? t.max : 1, this.handleTickRangeOptions()
                        },
                        getTickLimit: function() {
                            var t, e = this.options.ticks;
                            if (this.isHorizontal()) t = Math.min(e.maxTicksLimit ? e.maxTicksLimit : 11, Math.ceil(this.width / 50));
                            else {
                                var n = r.valueOrDefault(e.fontSize, i.global.defaultFontSize);
                                t = Math.min(e.maxTicksLimit ? e.maxTicksLimit : 11, Math.ceil(this.height / (2 * n)))
                            }
                            return t
                        },
                        handleDirectionalChanges: function() {
                            this.isHorizontal() || this.ticks.reverse()
                        },
                        getLabelForIndex: function(t, e) {
                            return +this.getRightValue(this.chart.data.datasets[e].data[t])
                        },
                        getPixelForValue: function(t) {
                            var e = this,
                                n = e.start,
                                i = +e.getRightValue(t),
                                r = e.end - n;
                            return e.isHorizontal() ? e.left + e.width / r * (i - n) : e.bottom - e.height / r * (i - n)
                        },
                        getValueForPixel: function(t) {
                            var e = this,
                                n = e.isHorizontal(),
                                i = n ? e.width : e.height,
                                r = (n ? t - e.left : e.bottom - t) / i;
                            return e.start + (e.end - e.start) * r
                        },
                        getPixelForTick: function(t) {
                            return this.getPixelForValue(this.ticksAsNumbers[t])
                        }
                    });
                t.scaleService.registerScaleType("linear", n, e)
            }
        }, {
            25: 25,
            34: 34,
            45: 45
        }],
        55: [function(t, e, n) {
            "use strict";
            var i = t(45);
            e.exports = function(t) {
                var e = i.noop;
                t.LinearScaleBase = t.Scale.extend({
                    getRightValue: function(e) {
                        return "string" == typeof e ? +e : t.Scale.prototype.getRightValue.call(this, e)
                    },
                    handleTickRangeOptions: function() {
                        var t = this,
                            e = t.options.ticks;
                        if (e.beginAtZero) {
                            var n = i.sign(t.min),
                                r = i.sign(t.max);
                            n < 0 && r < 0 ? t.max = 0 : n > 0 && r > 0 && (t.min = 0)
                        }
                        var a = void 0 !== e.min || void 0 !== e.suggestedMin,
                            o = void 0 !== e.max || void 0 !== e.suggestedMax;
                        void 0 !== e.min ? t.min = e.min : void 0 !== e.suggestedMin && (null === t.min ? t.min = e.suggestedMin : t.min = Math.min(t.min, e.suggestedMin)), void 0 !== e.max ? t.max = e.max : void 0 !== e.suggestedMax && (null === t.max ? t.max = e.suggestedMax : t.max = Math.max(t.max, e.suggestedMax)), a !== o && t.min >= t.max && (a ? t.max = t.min + 1 : t.min = t.max - 1), t.min === t.max && (t.max++, e.beginAtZero || t.min--)
                    },
                    getTickLimit: e,
                    handleDirectionalChanges: e,
                    buildTicks: function() {
                        var t = this,
                            e = t.options.ticks,
                            n = t.getTickLimit(),
                            r = {
                                maxTicks: n = Math.max(2, n),
                                min: e.min,
                                max: e.max,
                                stepSize: i.valueOrDefault(e.fixedStepSize, e.stepSize)
                            },
                            a = t.ticks = function(t, e) {
                                var n, r = [];
                                if (t.stepSize && t.stepSize > 0) n = t.stepSize;
                                else {
                                    var a = i.niceNum(e.max - e.min, !1);
                                    n = i.niceNum(a / (t.maxTicks - 1), !0)
                                }
                                var o = Math.floor(e.min / n) * n,
                                    s = Math.ceil(e.max / n) * n;
                                t.min && t.max && t.stepSize && i.almostWhole((t.max - t.min) / t.stepSize, n / 1e3) && (o = t.min, s = t.max);
                                var l = (s - o) / n;
                                l = i.almostEquals(l, Math.round(l), n / 1e3) ? Math.round(l) : Math.ceil(l);
                                var u = 1;
                                n < 1 && (u = Math.pow(10, n.toString().length - 2), o = Math.round(o * u) / u, s = Math.round(s * u) / u), r.push(void 0 !== t.min ? t.min : o);
                                for (var c = 1; c < l; ++c) r.push(Math.round((o + c * n) * u) / u);
                                return r.push(void 0 !== t.max ? t.max : s), r
                            }(r, t);
                        t.handleDirectionalChanges(), t.max = i.max(a), t.min = i.min(a), e.reverse ? (a.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max)
                    },
                    convertTicksToLabels: function() {
                        var e = this;
                        e.ticksAsNumbers = e.ticks.slice(), e.zeroLineIndex = e.ticks.indexOf(0), t.Scale.prototype.convertTicksToLabels.call(e)
                    }
                })
            }
        }, {
            45: 45
        }],
        56: [function(t, e, n) {
            "use strict";
            var i = t(45),
                r = t(34);
            e.exports = function(t) {
                var e = {
                        position: "left",
                        ticks: {
                            callback: r.formatters.logarithmic
                        }
                    },
                    n = t.Scale.extend({
                        determineDataLimits: function() {
                            var t = this,
                                e = t.options,
                                n = t.chart,
                                r = n.data.datasets,
                                a = t.isHorizontal();

                            function o(e) {
                                return a ? e.xAxisID === t.id : e.yAxisID === t.id
                            }
                            t.min = null, t.max = null, t.minNotZero = null;
                            var s = e.stacked;
                            if (void 0 === s && i.each(r, function(t, e) {
                                    if (!s) {
                                        var i = n.getDatasetMeta(e);
                                        n.isDatasetVisible(e) && o(i) && void 0 !== i.stack && (s = !0)
                                    }
                                }), e.stacked || s) {
                                var l = {};
                                i.each(r, function(r, a) {
                                    var s = n.getDatasetMeta(a),
                                        u = [s.type, void 0 === e.stacked && void 0 === s.stack ? a : "", s.stack].join(".");
                                    n.isDatasetVisible(a) && o(s) && (void 0 === l[u] && (l[u] = []), i.each(r.data, function(e, n) {
                                        var i = l[u],
                                            r = +t.getRightValue(e);
                                        isNaN(r) || s.data[n].hidden || r < 0 || (i[n] = i[n] || 0, i[n] += r)
                                    }))
                                }), i.each(l, function(e) {
                                    if (e.length > 0) {
                                        var n = i.min(e),
                                            r = i.max(e);
                                        t.min = null === t.min ? n : Math.min(t.min, n), t.max = null === t.max ? r : Math.max(t.max, r)
                                    }
                                })
                            } else i.each(r, function(e, r) {
                                var a = n.getDatasetMeta(r);
                                n.isDatasetVisible(r) && o(a) && i.each(e.data, function(e, n) {
                                    var i = +t.getRightValue(e);
                                    isNaN(i) || a.data[n].hidden || i < 0 || (null === t.min ? t.min = i : i < t.min && (t.min = i), null === t.max ? t.max = i : i > t.max && (t.max = i), 0 !== i && (null === t.minNotZero || i < t.minNotZero) && (t.minNotZero = i))
                                })
                            });
                            this.handleTickRangeOptions()
                        },
                        handleTickRangeOptions: function() {
                            var t = this,
                                e = t.options.ticks,
                                n = i.valueOrDefault;
                            t.min = n(e.min, t.min), t.max = n(e.max, t.max), t.min === t.max && (0 !== t.min && null !== t.min ? (t.min = Math.pow(10, Math.floor(i.log10(t.min)) - 1), t.max = Math.pow(10, Math.floor(i.log10(t.max)) + 1)) : (t.min = 1, t.max = 10)), null === t.min && (t.min = Math.pow(10, Math.floor(i.log10(t.max)) - 1)), null === t.max && (t.max = 0 !== t.min ? Math.pow(10, Math.floor(i.log10(t.min)) + 1) : 10), null === t.minNotZero && (t.min > 0 ? t.minNotZero = t.min : t.max < 1 ? t.minNotZero = Math.pow(10, Math.floor(i.log10(t.max))) : t.minNotZero = 1)
                        },
                        buildTicks: function() {
                            var t = this,
                                e = t.options.ticks,
                                n = !t.isHorizontal(),
                                r = {
                                    min: e.min,
                                    max: e.max
                                },
                                a = t.ticks = function(t, e) {
                                    var n, r, a = [],
                                        o = i.valueOrDefault,
                                        s = o(t.min, Math.pow(10, Math.floor(i.log10(e.min)))),
                                        l = Math.floor(i.log10(e.max)),
                                        u = Math.ceil(e.max / Math.pow(10, l));
                                    0 === s ? (n = Math.floor(i.log10(e.minNotZero)), r = Math.floor(e.minNotZero / Math.pow(10, n)), a.push(s), s = r * Math.pow(10, n)) : (n = Math.floor(i.log10(s)), r = Math.floor(s / Math.pow(10, n)));
                                    for (var c = n < 0 ? Math.pow(10, Math.abs(n)) : 1; a.push(s), 10 == ++r && (r = 1, c = ++n >= 0 ? 1 : c), s = Math.round(r * Math.pow(10, n) * c) / c, n < l || n === l && r < u;);
                                    var d = o(t.max, s);
                                    return a.push(d), a
                                }(r, t);
                            t.max = i.max(a), t.min = i.min(a), e.reverse ? (n = !n, t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max), n && a.reverse()
                        },
                        convertTicksToLabels: function() {
                            this.tickValues = this.ticks.slice(), t.Scale.prototype.convertTicksToLabels.call(this)
                        },
                        getLabelForIndex: function(t, e) {
                            return +this.getRightValue(this.chart.data.datasets[e].data[t])
                        },
                        getPixelForTick: function(t) {
                            return this.getPixelForValue(this.tickValues[t])
                        },
                        _getFirstTickValue: function(t) {
                            var e = Math.floor(i.log10(t));
                            return Math.floor(t / Math.pow(10, e)) * Math.pow(10, e)
                        },
                        getPixelForValue: function(e) {
                            var n, r, a, o, s, l = this,
                                u = l.options.ticks.reverse,
                                c = i.log10,
                                d = l._getFirstTickValue(l.minNotZero),
                                h = 0;
                            return e = +l.getRightValue(e), u ? (a = l.end, o = l.start, s = -1) : (a = l.start, o = l.end, s = 1), l.isHorizontal() ? (n = l.width, r = u ? l.right : l.left) : (n = l.height, s *= -1, r = u ? l.top : l.bottom), e !== a && (0 === a && (n -= h = i.getValueOrDefault(l.options.ticks.fontSize, t.defaults.global.defaultFontSize), a = d), 0 !== e && (h += n / (c(o) - c(a)) * (c(e) - c(a))), r += s * h), r
                        },
                        getValueForPixel: function(e) {
                            var n, r, a, o, s = this,
                                l = s.options.ticks.reverse,
                                u = i.log10,
                                c = s._getFirstTickValue(s.minNotZero);
                            if (l ? (r = s.end, a = s.start) : (r = s.start, a = s.end), s.isHorizontal() ? (n = s.width, o = l ? s.right - e : e - s.left) : (n = s.height, o = l ? e - s.top : s.bottom - e), o !== r) {
                                if (0 === r) {
                                    var d = i.getValueOrDefault(s.options.ticks.fontSize, t.defaults.global.defaultFontSize);
                                    o -= d, n -= d, r = c
                                }
                                o *= u(a) - u(r), o /= n, o = Math.pow(10, u(r) + o)
                            }
                            return o
                        }
                    });
                t.scaleService.registerScaleType("logarithmic", n, e)
            }
        }, {
            34: 34,
            45: 45
        }],
        57: [function(t, e, n) {
            "use strict";
            var i = t(25),
                r = t(45),
                a = t(34);
            e.exports = function(t) {
                var e = i.global,
                    n = {
                        display: !0,
                        animate: !0,
                        position: "chartArea",
                        angleLines: {
                            display: !0,
                            color: "rgba(0, 0, 0, 0.1)",
                            lineWidth: 1
                        },
                        gridLines: {
                            circular: !1
                        },
                        ticks: {
                            showLabelBackdrop: !0,
                            backdropColor: "rgba(255,255,255,0.75)",
                            backdropPaddingY: 2,
                            backdropPaddingX: 2,
                            callback: a.formatters.linear
                        },
                        pointLabels: {
                            display: !0,
                            fontSize: 10,
                            callback: function(t) {
                                return t
                            }
                        }
                    };

                function o(t) {
                    var e = t.options;
                    return e.angleLines.display || e.pointLabels.display ? t.chart.data.labels.length : 0
                }

                function s(t) {
                    var n = t.options.pointLabels,
                        i = r.valueOrDefault(n.fontSize, e.defaultFontSize),
                        a = r.valueOrDefault(n.fontStyle, e.defaultFontStyle),
                        o = r.valueOrDefault(n.fontFamily, e.defaultFontFamily);
                    return {
                        size: i,
                        style: a,
                        family: o,
                        font: r.fontString(i, a, o)
                    }
                }

                function l(t, e, n, i, r) {
                    return t === i || t === r ? {
                        start: e - n / 2,
                        end: e + n / 2
                    } : t < i || t > r ? {
                        start: e - n - 5,
                        end: e
                    } : {
                        start: e,
                        end: e + n + 5
                    }
                }

                function u(t, e, n, i) {
                    if (r.isArray(e))
                        for (var a = n.y, o = 1.5 * i, s = 0; s < e.length; ++s) t.fillText(e[s], n.x, a), a += o;
                    else t.fillText(e, n.x, n.y)
                }

                function c(t) {
                    return r.isNumber(t) ? t : 0
                }
                var d = t.LinearScaleBase.extend({
                    setDimensions: function() {
                        var t = this,
                            n = t.options,
                            i = n.ticks;
                        t.width = t.maxWidth, t.height = t.maxHeight, t.xCenter = Math.round(t.width / 2), t.yCenter = Math.round(t.height / 2);
                        var a = r.min([t.height, t.width]),
                            o = r.valueOrDefault(i.fontSize, e.defaultFontSize);
                        t.drawingArea = n.display ? a / 2 - (o / 2 + i.backdropPaddingY) : a / 2
                    },
                    determineDataLimits: function() {
                        var t = this,
                            e = t.chart,
                            n = Number.POSITIVE_INFINITY,
                            i = Number.NEGATIVE_INFINITY;
                        r.each(e.data.datasets, function(a, o) {
                            if (e.isDatasetVisible(o)) {
                                var s = e.getDatasetMeta(o);
                                r.each(a.data, function(e, r) {
                                    var a = +t.getRightValue(e);
                                    isNaN(a) || s.data[r].hidden || (n = Math.min(a, n), i = Math.max(a, i))
                                })
                            }
                        }), t.min = n === Number.POSITIVE_INFINITY ? 0 : n, t.max = i === Number.NEGATIVE_INFINITY ? 0 : i, t.handleTickRangeOptions()
                    },
                    getTickLimit: function() {
                        var t = this.options.ticks,
                            n = r.valueOrDefault(t.fontSize, e.defaultFontSize);
                        return Math.min(t.maxTicksLimit ? t.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * n)))
                    },
                    convertTicksToLabels: function() {
                        var e = this;
                        t.LinearScaleBase.prototype.convertTicksToLabels.call(e), e.pointLabels = e.chart.data.labels.map(e.options.pointLabels.callback, e)
                    },
                    getLabelForIndex: function(t, e) {
                        return +this.getRightValue(this.chart.data.datasets[e].data[t])
                    },
                    fit: function() {
                        var t, e;
                        this.options.pointLabels.display ? function(t) {
                            var e, n, i, a = s(t),
                                u = Math.min(t.height / 2, t.width / 2),
                                c = {
                                    r: t.width,
                                    l: 0,
                                    t: t.height,
                                    b: 0
                                },
                                d = {};
                            t.ctx.font = a.font, t._pointLabelSizes = [];
                            var h, f, p, g = o(t);
                            for (e = 0; e < g; e++) {
                                i = t.getPointPosition(e, u), h = t.ctx, f = a.size, p = t.pointLabels[e] || "", n = r.isArray(p) ? {
                                    w: r.longestText(h, h.font, p),
                                    h: p.length * f + 1.5 * (p.length - 1) * f
                                } : {
                                    w: h.measureText(p).width,
                                    h: f
                                }, t._pointLabelSizes[e] = n;
                                var m = t.getIndexAngle(e),
                                    v = r.toDegrees(m) % 360,
                                    y = l(v, i.x, n.w, 0, 180),
                                    b = l(v, i.y, n.h, 90, 270);
                                y.start < c.l && (c.l = y.start, d.l = m), y.end > c.r && (c.r = y.end, d.r = m), b.start < c.t && (c.t = b.start, d.t = m), b.end > c.b && (c.b = b.end, d.b = m)
                            }
                            t.setReductions(u, c, d)
                        }(this) : (t = this, e = Math.min(t.height / 2, t.width / 2), t.drawingArea = Math.round(e), t.setCenterPoint(0, 0, 0, 0))
                    },
                    setReductions: function(t, e, n) {
                        var i = e.l / Math.sin(n.l),
                            r = Math.max(e.r - this.width, 0) / Math.sin(n.r),
                            a = -e.t / Math.cos(n.t),
                            o = -Math.max(e.b - this.height, 0) / Math.cos(n.b);
                        i = c(i), r = c(r), a = c(a), o = c(o), this.drawingArea = Math.min(Math.round(t - (i + r) / 2), Math.round(t - (a + o) / 2)), this.setCenterPoint(i, r, a, o)
                    },
                    setCenterPoint: function(t, e, n, i) {
                        var r = this,
                            a = r.width - e - r.drawingArea,
                            o = t + r.drawingArea,
                            s = n + r.drawingArea,
                            l = r.height - i - r.drawingArea;
                        r.xCenter = Math.round((o + a) / 2 + r.left), r.yCenter = Math.round((s + l) / 2 + r.top)
                    },
                    getIndexAngle: function(t) {
                        return t * (2 * Math.PI / o(this)) + (this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0) * Math.PI * 2 / 360
                    },
                    getDistanceFromCenterForValue: function(t) {
                        var e = this;
                        if (null === t) return 0;
                        var n = e.drawingArea / (e.max - e.min);
                        return e.options.ticks.reverse ? (e.max - t) * n : (t - e.min) * n
                    },
                    getPointPosition: function(t, e) {
                        var n = this.getIndexAngle(t) - Math.PI / 2;
                        return {
                            x: Math.round(Math.cos(n) * e) + this.xCenter,
                            y: Math.round(Math.sin(n) * e) + this.yCenter
                        }
                    },
                    getPointPositionForValue: function(t, e) {
                        return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
                    },
                    getBasePosition: function() {
                        var t = this.min,
                            e = this.max;
                        return this.getPointPositionForValue(0, this.beginAtZero ? 0 : t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0)
                    },
                    draw: function() {
                        var t = this,
                            n = t.options,
                            i = n.gridLines,
                            a = n.ticks,
                            l = r.valueOrDefault;
                        if (n.display) {
                            var c = t.ctx,
                                d = this.getIndexAngle(0),
                                h = l(a.fontSize, e.defaultFontSize),
                                f = l(a.fontStyle, e.defaultFontStyle),
                                p = l(a.fontFamily, e.defaultFontFamily),
                                g = r.fontString(h, f, p);
                            r.each(t.ticks, function(n, s) {
                                if (s > 0 || a.reverse) {
                                    var u = t.getDistanceFromCenterForValue(t.ticksAsNumbers[s]);
                                    if (i.display && 0 !== s && function(t, e, n, i) {
                                            var a = t.ctx;
                                            if (a.strokeStyle = r.valueAtIndexOrDefault(e.color, i - 1), a.lineWidth = r.valueAtIndexOrDefault(e.lineWidth, i - 1), t.options.gridLines.circular) a.beginPath(), a.arc(t.xCenter, t.yCenter, n, 0, 2 * Math.PI), a.closePath(), a.stroke();
                                            else {
                                                var s = o(t);
                                                if (0 === s) return;
                                                a.beginPath();
                                                var l = t.getPointPosition(0, n);
                                                a.moveTo(l.x, l.y);
                                                for (var u = 1; u < s; u++) l = t.getPointPosition(u, n), a.lineTo(l.x, l.y);
                                                a.closePath(), a.stroke()
                                            }
                                        }(t, i, u, s), a.display) {
                                        var f = l(a.fontColor, e.defaultFontColor);
                                        if (c.font = g, c.save(), c.translate(t.xCenter, t.yCenter), c.rotate(d), a.showLabelBackdrop) {
                                            var p = c.measureText(n).width;
                                            c.fillStyle = a.backdropColor, c.fillRect(-p / 2 - a.backdropPaddingX, -u - h / 2 - a.backdropPaddingY, p + 2 * a.backdropPaddingX, h + 2 * a.backdropPaddingY)
                                        }
                                        c.textAlign = "center", c.textBaseline = "middle", c.fillStyle = f, c.fillText(n, 0, -u), c.restore()
                                    }
                                }
                            }), (n.angleLines.display || n.pointLabels.display) && function(t) {
                                var n = t.ctx,
                                    i = t.options,
                                    a = i.angleLines,
                                    l = i.pointLabels;
                                n.lineWidth = a.lineWidth, n.strokeStyle = a.color;
                                var c, d, h, f, p = t.getDistanceFromCenterForValue(i.ticks.reverse ? t.min : t.max),
                                    g = s(t);
                                n.textBaseline = "top";
                                for (var m = o(t) - 1; m >= 0; m--) {
                                    if (a.display) {
                                        var v = t.getPointPosition(m, p);
                                        n.beginPath(), n.moveTo(t.xCenter, t.yCenter), n.lineTo(v.x, v.y), n.stroke(), n.closePath()
                                    }
                                    if (l.display) {
                                        var y = t.getPointPosition(m, p + 5),
                                            b = r.valueAtIndexOrDefault(l.fontColor, m, e.defaultFontColor);
                                        n.font = g.font, n.fillStyle = b;
                                        var x = t.getIndexAngle(m),
                                            w = r.toDegrees(x);
                                        n.textAlign = 0 === (f = w) || 180 === f ? "center" : f < 180 ? "left" : "right", c = w, d = t._pointLabelSizes[m], h = y, 90 === c || 270 === c ? h.y -= d.h / 2 : (c > 270 || c < 90) && (h.y -= d.h), u(n, t.pointLabels[m] || "", y, g.size)
                                    }
                                }
                            }(t)
                        }
                    }
                });
                t.scaleService.registerScaleType("radialLinear", d, n)
            }
        }, {
            25: 25,
            34: 34,
            45: 45
        }],
        58: [function(t, e, n) {
            "use strict";
            var i = t(1);
            i = "function" == typeof i ? i : window.moment;
            var r = t(25),
                a = t(45),
                o = Number.MIN_SAFE_INTEGER || -9007199254740991,
                s = Number.MAX_SAFE_INTEGER || 9007199254740991,
                l = {
                    millisecond: {
                        common: !0,
                        size: 1,
                        steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]
                    },
                    second: {
                        common: !0,
                        size: 1e3,
                        steps: [1, 2, 5, 10, 30]
                    },
                    minute: {
                        common: !0,
                        size: 6e4,
                        steps: [1, 2, 5, 10, 30]
                    },
                    hour: {
                        common: !0,
                        size: 36e5,
                        steps: [1, 2, 3, 6, 12]
                    },
                    day: {
                        common: !0,
                        size: 864e5,
                        steps: [1, 2, 5]
                    },
                    week: {
                        common: !1,
                        size: 6048e5,
                        steps: [1, 2, 3, 4]
                    },
                    month: {
                        common: !0,
                        size: 2628e6,
                        steps: [1, 2, 3]
                    },
                    quarter: {
                        common: !1,
                        size: 7884e6,
                        steps: [1, 2, 3, 4]
                    },
                    year: {
                        common: !0,
                        size: 3154e7
                    }
                },
                u = Object.keys(l);

            function c(t, e) {
                return t - e
            }

            function d(t) {
                var e, n, i, r = {},
                    a = [];
                for (e = 0, n = t.length; e < n; ++e) r[i = t[e]] || (r[i] = !0, a.push(i));
                return a
            }

            function h(t, e, n, i) {
                var r = function(t, e, n) {
                        for (var i, r, a, o = 0, s = t.length - 1; o >= 0 && o <= s;) {
                            if (r = t[(i = o + s >> 1) - 1] || null, a = t[i], !r) return {
                                lo: null,
                                hi: a
                            };
                            if (a[e] < n) o = i + 1;
                            else {
                                if (!(r[e] > n)) return {
                                    lo: r,
                                    hi: a
                                };
                                s = i - 1
                            }
                        }
                        return {
                            lo: a,
                            hi: null
                        }
                    }(t, e, n),
                    a = r.lo ? r.hi ? r.lo : t[t.length - 2] : t[0],
                    o = r.lo ? r.hi ? r.hi : t[t.length - 1] : t[1],
                    s = o[e] - a[e],
                    l = s ? (n - a[e]) / s : 0,
                    u = (o[i] - a[i]) * l;
                return a[i] + u
            }

            function f(t, e) {
                var n = e.parser,
                    r = e.parser || e.format;
                return "function" == typeof n ? n(t) : "string" == typeof t && "string" == typeof r ? i(t, r) : (t instanceof i || (t = i(t)), t.isValid() ? t : "function" == typeof r ? r(t) : t)
            }

            function p(t, e) {
                if (a.isNullOrUndef(t)) return null;
                var n = e.options.time,
                    i = f(e.getRightValue(t), n);
                return i.isValid() ? (n.round && i.startOf(n.round), i.valueOf()) : null
            }

            function g(t) {
                for (var e = u.indexOf(t) + 1, n = u.length; e < n; ++e)
                    if (l[u[e]].common) return u[e]
            }

            function m(t, e, n, r) {
                var o, c = r.time,
                    d = c.unit || function(t, e, n, i) {
                        var r, a, o, c = u.length;
                        for (r = u.indexOf(t); r < c - 1; ++r)
                            if (o = (a = l[u[r]]).steps ? a.steps[a.steps.length - 1] : s, a.common && Math.ceil((n - e) / (o * a.size)) <= i) return u[r];
                        return u[c - 1]
                    }(c.minUnit, t, e, n),
                    h = g(d),
                    f = a.valueOrDefault(c.stepSize, c.unitStepSize),
                    p = "week" === d && c.isoWeekday,
                    m = r.ticks.major.enabled,
                    v = l[d],
                    y = i(t),
                    b = i(e),
                    x = [];
                for (f || (f = function(t, e, n, i) {
                        var r, a, o, s = e - t,
                            u = l[n],
                            c = u.size,
                            d = u.steps;
                        if (!d) return Math.ceil(s / (i * c));
                        for (r = 0, a = d.length; r < a && (o = d[r], !(Math.ceil(s / (c * o)) <= i)); ++r);
                        return o
                    }(t, e, d, n)), p && (y = y.isoWeekday(p), b = b.isoWeekday(p)), y = y.startOf(p ? "day" : d), (b = b.startOf(p ? "day" : d)) < e && b.add(1, d), o = i(y), m && h && !p && !c.round && (o.startOf(h), o.add(~~((y - o) / (v.size * f)) * f, d)); o < b; o.add(f, d)) x.push(+o);
                return x.push(+o), x
            }
            e.exports = function(t) {
                var e = t.Scale.extend({
                    initialize: function() {
                        if (!i) throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");
                        this.mergeTicksOptions(), t.Scale.prototype.initialize.call(this)
                    },
                    update: function() {
                        var e = this.options;
                        return e.time && e.time.format && console.warn("options.time.format is deprecated and replaced by options.time.parser."), t.Scale.prototype.update.apply(this, arguments)
                    },
                    getRightValue: function(e) {
                        return e && void 0 !== e.t && (e = e.t), t.Scale.prototype.getRightValue.call(this, e)
                    },
                    determineDataLimits: function() {
                        var t, e, n, r, l, u, h = this,
                            f = h.chart,
                            g = h.options.time,
                            m = g.unit || "day",
                            v = s,
                            y = o,
                            b = [],
                            x = [],
                            w = [];
                        for (t = 0, n = f.data.labels.length; t < n; ++t) w.push(p(f.data.labels[t], h));
                        for (t = 0, n = (f.data.datasets || []).length; t < n; ++t)
                            if (f.isDatasetVisible(t))
                                if (l = f.data.datasets[t].data, a.isObject(l[0]))
                                    for (x[t] = [], e = 0, r = l.length; e < r; ++e) u = p(l[e], h), b.push(u), x[t][e] = u;
                                else b.push.apply(b, w), x[t] = w.slice(0);
                        else x[t] = [];
                        w.length && (w = d(w).sort(c), v = Math.min(v, w[0]), y = Math.max(y, w[w.length - 1])), b.length && (b = d(b).sort(c), v = Math.min(v, b[0]), y = Math.max(y, b[b.length - 1])), v = p(g.min, h) || v, y = p(g.max, h) || y, v = v === s ? +i().startOf(m) : v, y = y === o ? +i().endOf(m) + 1 : y, h.min = Math.min(v, y), h.max = Math.max(v + 1, y), h._horizontal = h.isHorizontal(), h._table = [], h._timestamps = {
                            data: b,
                            datasets: x,
                            labels: w
                        }
                    },
                    buildTicks: function() {
                        var t, e, n, r, a, o, s, c, d, v, y, b, x = this,
                            w = x.min,
                            k = x.max,
                            C = x.options,
                            D = C.time,
                            S = [],
                            T = [];
                        switch (C.ticks.source) {
                            case "data":
                                S = x._timestamps.data;
                                break;
                            case "labels":
                                S = x._timestamps.labels;
                                break;
                            case "auto":
                            default:
                                S = m(w, k, x.getLabelCapacity(w), C)
                        }
                        for ("ticks" === C.bounds && S.length && (w = S[0], k = S[S.length - 1]), w = p(D.min, x) || w, k = p(D.max, x) || k, t = 0, e = S.length; t < e; ++t)(n = S[t]) >= w && n <= k && T.push(n);
                        return x.min = w, x.max = k, x._unit = D.unit || function(t, e, n, r) {
                                var a, o, s = i.duration(i(r).diff(i(n)));
                                for (a = u.length - 1; a >= u.indexOf(e); a--)
                                    if (o = u[a], l[o].common && s.as(o) >= t.length) return o;
                                return u[e ? u.indexOf(e) : 0]
                            }(T, D.minUnit, x.min, x.max), x._majorUnit = g(x._unit), x._table = function(t, e, n, i) {
                                if (!t.length) return [{
                                    time: e,
                                    pos: 0
                                }, {
                                    time: n,
                                    pos: 1
                                }];
                                var r, a, o, s, l, u = [],
                                    c = [e];
                                for (r = 0, a = t.length; r < a; ++r)(s = t[r]) > e && s < n && c.push(s);
                                for (c.push(n), r = 0, a = c.length; r < a; ++r) l = c[r + 1], o = c[r - 1], s = c[r], void 0 !== o && void 0 !== l && Math.round((l + o) / 2) === s || u.push({
                                    time: s,
                                    pos: r / (a - 1)
                                });
                                return u
                            }(x._timestamps.data, w, k, C.distribution), x._offsets = (r = x._table, a = T, o = w, s = k, y = 0, b = 0, (c = C).offset && a.length && (c.time.min || (d = a.length > 1 ? a[1] : s, v = a[0], y = (h(r, "time", d, "pos") - h(r, "time", v, "pos")) / 2), c.time.max || (d = a[a.length - 1], v = a.length > 1 ? a[a.length - 2] : o, b = (h(r, "time", d, "pos") - h(r, "time", v, "pos")) / 2)), {
                                left: y,
                                right: b
                            }), x._labelFormat = function(t, e) {
                                var n, i, r, a = t.length;
                                for (n = 0; n < a; n++) {
                                    if (0 !== (i = f(t[n], e)).millisecond()) return "MMM D, YYYY h:mm:ss.SSS a";
                                    0 === i.second() && 0 === i.minute() && 0 === i.hour() || (r = !0)
                                }
                                return r ? "MMM D, YYYY h:mm:ss a" : "MMM D, YYYY"
                            }(x._timestamps.data, D),
                            function(t, e) {
                                var n, r, a, o, s = [];
                                for (n = 0, r = t.length; n < r; ++n) a = t[n], o = !!e && a === +i(a).startOf(e), s.push({
                                    value: a,
                                    major: o
                                });
                                return s
                            }(T, x._majorUnit)
                    },
                    getLabelForIndex: function(t, e) {
                        var n = this.chart.data,
                            i = this.options.time,
                            r = n.labels && t < n.labels.length ? n.labels[t] : "",
                            o = n.datasets[e].data[t];
                        return a.isObject(o) && (r = this.getRightValue(o)), i.tooltipFormat ? f(r, i).format(i.tooltipFormat) : "string" == typeof r ? r : f(r, i).format(this._labelFormat)
                    },
                    tickFormatFunction: function(t, e, n, i) {
                        var r = this.options,
                            o = t.valueOf(),
                            s = r.time.displayFormats,
                            l = s[this._unit],
                            u = this._majorUnit,
                            c = s[u],
                            d = t.clone().startOf(u).valueOf(),
                            h = r.ticks.major,
                            f = h.enabled && u && c && o === d,
                            p = t.format(i || (f ? c : l)),
                            g = f ? h : r.ticks.minor,
                            m = a.valueOrDefault(g.callback, g.userCallback);
                        return m ? m(p, e, n) : p
                    },
                    convertTicksToLabels: function(t) {
                        var e, n, r = [];
                        for (e = 0, n = t.length; e < n; ++e) r.push(this.tickFormatFunction(i(t[e].value), e, t));
                        return r
                    },
                    getPixelForOffset: function(t) {
                        var e = this,
                            n = e._horizontal ? e.width : e.height,
                            i = e._horizontal ? e.left : e.top,
                            r = h(e._table, "time", t, "pos");
                        return i + n * (e._offsets.left + r) / (e._offsets.left + 1 + e._offsets.right)
                    },
                    getPixelForValue: function(t, e, n) {
                        var i = null;
                        if (void 0 !== e && void 0 !== n && (i = this._timestamps.datasets[n][e]), null === i && (i = p(t, this)), null !== i) return this.getPixelForOffset(i)
                    },
                    getPixelForTick: function(t) {
                        var e = this.getTicks();
                        return t >= 0 && t < e.length ? this.getPixelForOffset(e[t].value) : null
                    },
                    getValueForPixel: function(t) {
                        var e = this,
                            n = e._horizontal ? e.width : e.height,
                            r = e._horizontal ? e.left : e.top,
                            a = (n ? (t - r) / n : 0) * (e._offsets.left + 1 + e._offsets.left) - e._offsets.right,
                            o = h(e._table, "pos", a, "time");
                        return i(o)
                    },
                    getLabelWidth: function(t) {
                        var e = this.options.ticks,
                            n = this.ctx.measureText(t).width,
                            i = a.toRadians(e.maxRotation),
                            o = Math.cos(i),
                            s = Math.sin(i);
                        return n * o + a.valueOrDefault(e.fontSize, r.global.defaultFontSize) * s
                    },
                    getLabelCapacity: function(t) {
                        var e = this,
                            n = e.options.time.displayFormats.millisecond,
                            r = e.tickFormatFunction(i(t), 0, [], n),
                            a = e.getLabelWidth(r),
                            o = e.isHorizontal() ? e.width : e.height,
                            s = Math.floor(o / a);
                        return s > 0 ? s : 1
                    }
                });
                t.scaleService.registerScaleType("time", e, {
                    position: "bottom",
                    distribution: "linear",
                    bounds: "data",
                    time: {
                        parser: !1,
                        format: !1,
                        unit: !1,
                        round: !1,
                        displayFormat: !1,
                        isoWeekday: !1,
                        minUnit: "millisecond",
                        displayFormats: {
                            millisecond: "h:mm:ss.SSS a",
                            second: "h:mm:ss a",
                            minute: "h:mm a",
                            hour: "hA",
                            day: "MMM D",
                            week: "ll",
                            month: "MMM YYYY",
                            quarter: "[Q]Q - YYYY",
                            year: "YYYY"
                        }
                    },
                    ticks: {
                        autoSkip: !1,
                        source: "auto",
                        major: {
                            enabled: !1
                        }
                    }
                })
            }
        }, {
            1: 1,
            25: 25,
            45: 45
        }]
    }, {}, [7])(7)
}, function(t, e, n) {
    "use strict";
    (function(t) {
        n.d(e, "a", function() {
            return a
        });
        var i = n(0),
            r = function(e) {
                var n = this;
                this.newReload = !0, this.keyword = e, this.hashArr = [], this.formValues = {}, t("#createSharelink").on("click", function() {
                    var e = n.createSharelink();
                    t(".calc-links__item").css("opacity", 0), t("#sharelinkField").addClass("visible").val(e).select()
                }), t("#copySharelink").on("click", function() {
                    console.log("copy to buffer")
                }), t("body").on("click", function(e) {
                    t(e.target).closest(".calc-links__container").length || (t("#sharelinkField").removeClass("visible"), t(".calc-links__item").css("opacity", 1))
                })
            };
        r.prototype.checkLoadFromHash = function() {
            return this.newReload && location.hash && this.checkKeywordHash()
        }, r.prototype.getHash = function() {
            var t = location.hash;
            this.hashArr = t.slice(1).split("&")
        }, r.prototype.getHashKeyValue = function(t) {
            for (var e, n = {}, i = 0; i < this.hashArr.length; i++)(e = this.hashArr[i].split("=")) && (n[e[0]] = decodeURIComponent(e[1]) || null);
            return t ? n.hasOwnProperty(t) ? n[t] : null : n
        }, r.prototype.checkKeywordHash = function() {
            return Array.isArray(location.hash.match(this.keyword))
        }, r.prototype.setHashValuesToForm = function() {
            var e = this;
            this.newReload = !1, this.getHash(), t("#mg-form input").each(function(n, i) {
                var r = t(i).attr("id"),
                    a = e.replaceValue(r),
                    o = e.getHashKeyValue(a);
                o && t(i).val(Number(o).toLocaleString("en"))
            })
        }, r.prototype.createSharelink = function() {
            i.a.getFormValues(this.formValues);
            var t = location.origin + location.pathname + "#" + this.keyword + "&";
            for (var e in this.formValues) {
                for (var n = "", r = e.match(/[A-Z]/g), a = 0; a < r.length; a++) a < 2 && (n += r[a]);
                t += e[0] + n.toLowerCase() + "=" + this.formValues[e] + "&"
            }
            return "&" === t.slice(-1) && (t = t.slice(0, t.length - 1)), t
        }, r.prototype.replaceShortcutKey = function(t) {
            return this.correspondance[t] || t
        }, r.prototype.replaceValue = function(t) {
            for (var e in this.correspondance)
                if (this.correspondance[e] === t) return e;
            return t
        }, r.prototype.correspondance = {
            hv: "homeValue",
            dp: "downPayment",
            dpp: "downPaymentPerc",
            ir: "interestRate",
            mt: "mortgageTerm",
            mtp: "mortgageTermPerc"
        };
        var a = new r("mtg")
    }).call(this, n(3))
}, function(t, e, n) {
    "use strict";
    n.r(e),
        function(t) {
            n(10), n(11);
            var e = n(6),
                i = n(0),
                r = n(4),
                a = n(5),
                o = n(9),
                s = n(8),
                l = n(17),
                u = n(1),
                c = n(2);
            n(14), n(15);
            t(document).ready(function() {
                new d(t("#calculateBtn"))
            });
            var d = function(t) {
                this.$calculateBtn = t, this.init()
            };
            d.prototype = {
                init: function() {
                    var n = this;
                    
                    r.a.init(), a.a.init(), o.a.init(), n.calculateAndDraw(), this.$calculateBtn.on("click", function() {
                        n.calculateAndDraw()
                    }), e.a.addListener("onStartDayChanged", function(t) {
                        t ? (n.doScheduleArr(), a.a.renderScheduleTable(n.scheduleArr)) : a.a.changePayoffDate(n.scheduleArr)
                    }), e.a.addListener("onScheduleContainerOpen", function() {
                        var t = performance.now();
                        n.doScheduleArr();
                        var e = performance.now();
                        console.log("doScheduleArr", e - t), a.a.renderScheduleTable(n.scheduleArr)
                    }), e.a.addListener("onExtraValuesChange", function() {
                        n.doCalculations(), n.fillResultTable(), n.updateDoughnutChart(), a.a.renderScheduleTable(n.scheduleArr)
                    }), t("#downloadPdf").on("click", function() {
                        s.a.download(n.scheduleArr)
                    }), l.a.checkLoadFromHash() ? (l.a.setHashValuesToForm(), this.calculateAndDraw()) : (this.doCalculations(), this.updateDoughnutChart([13, 0, 51, 37]))
                },
                calculateAndDraw: function() {
                    this.doCalculations(), this.fillResultTable(), this.updateDoughnutChart(), a.a.scheduleContainerOpened && a.a.renderScheduleTable(this.scheduleArr)
                },
                doCalculations: function() {
                    i.a.getFormValues(i.a), i.a.calcMonthlyPayment(), r.a.getExtraFormValues(), this.doScheduleArr()
                },
                doScheduleArr: function() {
                    this.scheduleArr = [];
                    for (var t = i.a.debt, e = 0, n = a.a.month + 1, o = a.a.year, s = 0; s < i.a.mortgageTermMonths; s++) {
                        var l = Object(c.c)(n),
                            u = r.a.extraContainerOpened ? r.a.checkExtra(n, o) : 0,
                            d = i.a.annuent + u,
                            h = t * i.a.rate,
                            f = d - h;
                        if (t -= f, e += h, this.scheduleArr.push({
                                month: l,
                                year: o,
                                annuent: d,
                                principal: f,
                                interest: h,
                                totalInterest: e,
                                balance: t
                            }), t < 0) {
                            var p = this.scheduleArr[s - 1].balance,
                                g = this.scheduleArr[s].interest = p * i.a.rate,
                                m = this.scheduleArr[s].principal = p;
                            this.scheduleArr[s].annuent = g + m, this.scheduleArr[s].balance = 0;
                            break
                        }
                        n += 1, "Dec" === l && (o += 1)
                    }
                    i.a.totalInterest = e
                },
                fillResultTable: function() {
                    var e = Object(u.b)(i.a.annuent + r.a.extraMonthly);
                    t("#resMonthlyPrincipalAndInterest").text(Object(u.b)(i.a.annuent)), t("#resMonthlyExtraPayment").text(Object(u.b)(r.a.extraMonthly)), t("#totalMounthlyPayment").text(e), t("#resDownPayment").text(Object(u.b)(i.a.downPayment)), t("#resExtraPayments").text(Object(u.b)(r.a.extraTotal)), t("#totalPrincipalPaid").text(Object(u.b)(i.a.debt - r.a.extraTotal)), t("#totalInterestPaid").text(Object(u.b)(i.a.totalInterest));
                    var n = i.a.downPayment + (i.a.debt - r.a.extraTotal) + r.a.extraTotal + i.a.totalInterest,
                        a = i.a.annuent + r.a.extraMonthly;
                    Object(c.a)(t("#totalMonthlyPayment"), a, 300), Object(c.a)(t("#totalPayment"), n, 300)
                },
                updateDoughnutChart: function(t) {
                    var e = o.a.chart,
                        n = i.a.downPayment + r.a.extraTotal + (i.a.debt - r.a.extraTotal) + i.a.totalInterest,
                        a = Object(c.b)(n, i.a.downPayment),
                        s = Object(c.b)(n, r.a.extraTotal),
                        l = Object(c.b)(n, i.a.debt - r.a.extraTotal),
                        u = Object(c.b)(n, i.a.totalInterest),
                        d = t || [a, s, l, u];
                    e.data.datasets[0].data = d, e.data.labels = ["Down payment", "Extra payments", "Total principal paid", "Total interest paid"], e.update()
                }
            }
        }.call(this, n(3))
}]);

function myFunction() {
  var x = document.getElementById("result");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
//# sourceMappingURL=calcMortgage.min.js.map