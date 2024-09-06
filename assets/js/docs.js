/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
!function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.ClipboardJS = t() : e.ClipboardJS = t()
}(this, function() {
    return n = {
        686: function(e, t, n) {
            "use strict";
            n.d(t, {
                default: function() {
                    return p
                }
            });
            var s, c, d, p, t = n(279), g = n.n(t), t = n(370), b = n.n(t), t = n(817), a = n.n(t);
            function r(e) {
                try {
                    return document.execCommand(e)
                } catch {
                    return
                }
            }
            c = function(e) {
                return e = a()(e),
                r("cut"),
                e
            }
            ;
            function f(e, t) {
                var n, s, e = (s = e,
                n = "rtl" === document.documentElement.getAttribute("dir"),
                (e = document.createElement("textarea")).style.fontSize = "12pt",
                e.style.border = "0",
                e.style.padding = "0",
                e.style.margin = "0",
                e.style.position = "absolute",
                e.style[n ? "right" : "left"] = "-9999px",
                n = window.pageYOffset || document.documentElement.scrollTop,
                e.style.top = "".concat(n, "px"),
                e.setAttribute("readonly", ""),
                e.value = s,
                e);
                return t.container.appendChild(e),
                t = a()(e),
                r("copy"),
                e.remove(),
                t
            }
            s = function(e) {
                var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {
                    container: document.body
                }
                  , t = "";
                return "string" == typeof e ? t = f(e, n) : e instanceof HTMLInputElement && !["text", "search", "url", "tel", "password"].includes(e?.type) ? t = f(e.value, n) : (t = a()(e),
                r("copy")),
                t
            }
            ;
            function u(e) {
                return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            d = function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
                  , e = t.action
                  , n = void 0 === e ? "copy" : e
                  , o = t.container
                  , e = t.target
                  , t = t.text;
                if ("copy" !== n && "cut" !== n)
                    throw new Error('Invalid "action" value, use either "copy" or "cut"');
                if (void 0 !== e) {
                    if (!e || "object" !== u(e) || 1 !== e.nodeType)
                        throw new Error('Invalid "target" value, use a valid Element');
                    if ("copy" === n && e.hasAttribute("disabled"))
                        throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                    if ("cut" === n && (e.hasAttribute("readonly") || e.hasAttribute("disabled")))
                        throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)
                }
                return t ? s(t, {
                    container: o
                }) : e ? "cut" === n ? c(e) : s(e, {
                    container: o
                }) : void 0
            }
            ;
            function o(e) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function h(e, t) {
                for (var n, s = 0; s < t.length; s++)
                    n = t[s],
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
            }
            function m(e, t) {
                return (m = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            function v(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})),
                        !0
                    } catch {
                        return !1
                    }
                }();
                return function() {
                    var n, s = l(e);
                    return n = t ? (n = l(this).constructor,
                    Reflect.construct(s, arguments, n)) : s.apply(this, arguments),
                    s = this,
                    !(n = n) || "object" !== o(n) && "function" != typeof n ? function(e) {
                        if (void 0 !== e)
                            return e;
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                    }(s) : n
                }
            }
            function l(e) {
                return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                )(e)
            }
            function i(e, t) {
                if (e = "data-clipboard-".concat(e),
                t.hasAttribute(e))
                    return t.getAttribute(e)
            }
            p = function() {
                !function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && m(e, t)
                }(e, g());
                var t, n, a, r = v(e);
                function e(t, n) {
                    var s;
                    return function(t) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this),
                    (s = r.call(this)).resolveOptions(n),
                    s.listenClick(t),
                    s
                }
                return t = e,
                n = [{
                    key: "copy",
                    value: function(e) {
                        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {
                            container: document.body
                        };
                        return s(e, t)
                    }
                }, {
                    key: "cut",
                    value: function(e) {
                        return c(e)
                    }
                }, {
                    key: "isSupported",
                    value: function() {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"]
                          , e = "string" == typeof e ? [e] : e
                          , t = !!document.queryCommandSupported;
                        return e.forEach(function(e) {
                            t = t && !!document.queryCommandSupported(e)
                        }),
                        t
                    }
                }],
                (a = [{
                    key: "resolveOptions",
                    value: function() {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                        this.action = "function" == typeof e.action ? e.action : this.defaultAction,
                        this.target = "function" == typeof e.target ? e.target : this.defaultTarget,
                        this.text = "function" == typeof e.text ? e.text : this.defaultText,
                        this.container = "object" === o(e.container) ? e.container : document.body
                    }
                }, {
                    key: "listenClick",
                    value: function(e) {
                        var t = this;
                        this.listener = b()(e, "click", function(e) {
                            return t.onClick(e)
                        })
                    }
                }, {
                    key: "onClick",
                    value: function(e) {
                        var t = e.delegateTarget || e.currentTarget
                          , n = this.action(t) || "copy"
                          , e = d({
                            action: n,
                            container: this.container,
                            target: this.target(t),
                            text: this.text(t)
                        });
                        this.emit(e ? "success" : "error", {
                            action: n,
                            text: e,
                            trigger: t,
                            clearSelection: function() {
                                t && t.focus(),
                                window.getSelection().removeAllRanges()
                            }
                        })
                    }
                }, {
                    key: "defaultAction",
                    value: function(e) {
                        return i("action", e)
                    }
                }, {
                    key: "defaultTarget",
                    value: function(e) {
                        if (e = i("target", e),
                        e)
                            return document.querySelector(e)
                    }
                }, {
                    key: "defaultText",
                    value: function(e) {
                        return i("text", e)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.listener.destroy()
                    }
                }]) && h(t.prototype, a),
                n && h(t, n),
                e
            }()
        },
        828: function(e) {
            var t;
            "undefined" == typeof Element || Element.prototype.matches || ((t = Element.prototype).matches = t.matchesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector || t.webkitMatchesSelector),
            e.exports = function(e, t) {
                for (; e && 9 !== e.nodeType; ) {
                    if ("function" == typeof e.matches && e.matches(t))
                        return e;
                    e = e.parentNode
                }
            }
        },
        438: function(e, t, n) {
            var o = n(828);
            function s(e, t, n, s, i) {
                var a = function(e, t, n, s) {
                    return function(n) {
                        n.delegateTarget = o(n.target, t),
                        n.delegateTarget && s.call(e, n)
                    }
                }
                .apply(this, arguments);
                return e.addEventListener(n, a, i),
                {
                    destroy: function() {
                        e.removeEventListener(n, a, i)
                    }
                }
            }
            e.exports = function(e, t, n, o, i) {
                return "function" == typeof e.addEventListener ? s.apply(null, arguments) : "function" == typeof n ? s.bind(null, document).apply(null, arguments) : ("string" == typeof e && (e = document.querySelectorAll(e)),
                Array.prototype.map.call(e, function(e) {
                    return s(e, t, n, o, i)
                }))
            }
        },
        879: function(e, t) {
            t.node = function(e) {
                return void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType
            }
            ,
            t.nodeList = function(e) {
                var n = Object.prototype.toString.call(e);
                return void 0 !== e && ("[object NodeList]" === n || "[object HTMLCollection]" === n) && "length"in e && (0 === e.length || t.node(e[0]))
            }
            ,
            t.string = function(e) {
                return "string" == typeof e || e instanceof String
            }
            ,
            t.fn = function(e) {
                return "[object Function]" === Object.prototype.toString.call(e)
            }
        },
        370: function(e, t, n) {
            var s = n(879)
              , o = n(438);
            e.exports = function(e, t, n) {
                if (!e && !t && !n)
                    throw new Error("Missing required arguments");
                if (!s.string(t))
                    throw new TypeError("Second argument must be a String");
                if (!s.fn(n))
                    throw new TypeError("Third argument must be a Function");
                if (s.node(e))
                    return c = t,
                    l = n,
                    (d = e).addEventListener(c, l),
                    {
                        destroy: function() {
                            d.removeEventListener(c, l)
                        }
                    };
                if (s.nodeList(e))
                    return i = e,
                    a = t,
                    r = n,
                    Array.prototype.forEach.call(i, function(e) {
                        e.addEventListener(a, r)
                    }),
                    {
                        destroy: function() {
                            Array.prototype.forEach.call(i, function(e) {
                                e.removeEventListener(a, r)
                            })
                        }
                    };
                if (s.string(e))
                    return e = e,
                    t = t,
                    n = n,
                    o(document.body, e, t, n);
                throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
                var i, a, r, c, l, d
            }
        },
        817: function(e) {
            e.exports = function(e) {
                var n, t = "SELECT" === e.nodeName ? (e.focus(),
                e.value) : "INPUT" === e.nodeName || "TEXTAREA" === e.nodeName ? ((n = e.hasAttribute("readonly")) || e.setAttribute("readonly", ""),
                e.select(),
                e.setSelectionRange(0, e.value.length),
                n || e.removeAttribute("readonly"),
                e.value) : (e.hasAttribute("contenteditable") && e.focus(),
                t = window.getSelection(),
                (n = document.createRange()).selectNodeContents(e),
                t.removeAllRanges(),
                t.addRange(n),
                t.toString());
                return t
            }
        },
        279: function(e) {
            function t() {}
            t.prototype = {
                on: function(e, t, n) {
                    var s = this.e || (this.e = {});
                    return (s[e] || (s[e] = [])).push({
                        fn: t,
                        ctx: n
                    }),
                    this
                },
                once: function(e, t, n) {
                    var o = this;
                    function s() {
                        o.off(e, s),
                        t.apply(n, arguments)
                    }
                    return s._ = t,
                    this.on(e, s, n)
                },
                emit: function(e) {
                    for (var s = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[e] || []).slice(), t = 0, o = n.length; t < o; t++)
                        n[t].fn.apply(n[t].ctx, s);
                    return this
                },
                off: function(e, t) {
                    var n, a, o = this.e || (this.e = {}), s = o[e], i = [];
                    if (s && t)
                        for (n = 0,
                        a = s.length; n < a; n++)
                            s[n].fn !== t && s[n].fn._ !== t && i.push(s[n]);
                    return i.length ? o[e] = i : delete o[e],
                    this
                }
            },
            e.exports = t,
            e.exports.TinyEmitter = t
        }
    },
    t = {},
    e.n = function(t) {
        var n = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return e.d(n, {
            a: n
        }),
        n
    }
    ,
    e.d = function(t, n) {
        for (var s in n)
            e.o(n, s) && !e.o(t, s) && Object.defineProperty(t, s, {
                enumerable: !0,
                get: n[s]
            })
    }
    ,
    e.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    e(686).default;
    function e(s) {
        if (t[s])
            return t[s].exports;
        var o = t[s] = {
            exports: {}
        };
        return n[s](o, o.exports, e),
        o.exports
    }
    var t, n
}),
( () => {
    "use strict";
    const e = document.querySelector(".bd-sidebar")
      , t = document.querySelector(".bd-links-nav .active");
    if (e && t) {
        const s = e.clientHeight
          , i = t.offsetTop
          , o = t.clientHeight
          , n = i
          , a = n - s + o;
        (e.scrollTop > n || e.scrollTop < a) && (e.scrollTop = n - s / 2 + o / 2)
    }
}
)(),
( () => {
    "use strict";
    const e = "Copy to clipboard"
      , s = "Edit on StackBlitz"
      , o = ['<div class="bd-code-snippet">', '   <div class="bd-clipboard">', '      <button type="button" class="btn-clipboard">', '        <svg class="bi" role="img" aria-label="Copy"><use xlink:href="#clipboard"/></svg>', "      </button>", "   </div>", "</div>"].join("");
    document.querySelectorAll(".highlight").forEach(e => {
        e.closest(".bd-example-snippet") || (e.insertAdjacentHTML("beforebegin", o),
        e.previousElementSibling.append(e))
    }
    );
    function t(e, t) {
        document.querySelectorAll(e).forEach(e => {
            bootstrap.Tooltip.getOrCreateInstance(e, {
                title: t
            })
        }
        )
    }
    t(".btn-clipboard", e),
    t(".btn-edit", s);
    const n = new ClipboardJS(".btn-clipboard",{
        target: e => e.closest(".bd-code-snippet").querySelector(".highlight"),
        text: e => e.closest(".bd-code-snippet").querySelector(".highlight").textContent.trimEnd()
    });
    n.on("success", t => {
        const n = t.trigger.querySelector(".bi").firstElementChild
          , o = bootstrap.Tooltip.getInstance(t.trigger)
          , s = "http://www.w3.org/1999/xlink"
          , i = n.getAttributeNS(s, "href")
          , a = t.trigger.title;
        o.setContent({
            ".tooltip-inner": "Copied!"
        }),
        t.trigger.addEventListener("hidden.bs.tooltip", () => {
            o.setContent({
                ".tooltip-inner": e
            })
        }
        , {
            once: !0
        }),
        t.clearSelection(),
        n.setAttributeNS(s, "href", i.replace("clipboard", "check2")),
        setTimeout( () => {
            n.setAttributeNS(s, "href", i),
            t.trigger.title = a
        }
        , 2e3)
    }
    ),
    n.on("error", t => {
        const s = /mac/i.test(navigator.userAgent) ? "\u2318" : "Ctrl-"
          , o = `Press ${s}C to copy`
          , n = bootstrap.Tooltip.getInstance(t.trigger);
        n.setContent({
            ".tooltip-inner": o
        }),
        t.trigger.addEventListener("hidden.bs.tooltip", () => {
            n.setContent({
                ".tooltip-inner": e
            })
        }
        , {
            once: !0
        })
    }
    )
}
)(),
( () => {
    "use strict";
    const e = document.getElementById("docsearch");
    if (!window.docsearch || !e)
        return;
    const t = e.getAttribute("data-bd-docs-version");
    window.docsearch({
        apiKey: "55d1cda162026cf805306ec6f340a027",
        indexName: "help-formlang",
        appId: "AZMYS1SFOW",
        container: e,
        debug: false,
        /*        
        searchParameters: {
            facetFilters: [`version:${t}`]
        }, */

        transformItems(e) {
            return e.map(e => {
                const t = "https://help.formlang.com/";
                return e.url = window.location.origin.startsWith(t) ? e.url : e.url.replace(t, "/"),
                e.anchor === "content" && (e.url = e.url.replace(/#content$/, ""),
                e.anchor = null),
                e
            }
            )
        } 
    })
}
)(),
( () => {
    "use strict";
    document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(e => {
        new bootstrap.Tooltip(e)
    }
    ),
    document.querySelectorAll('[data-bs-toggle="popover"]').forEach(e => {
        new bootstrap.Popover(e)
    }
    );
    const e = document.getElementById("toastPlacement");
    e && document.getElementById("selectToastPlacement").addEventListener("change", function() {
        e.dataset.originalClass || (e.dataset.originalClass = e.className),
        e.className = `${e.dataset.originalClass} ${this.value}`
    }),
    document.querySelectorAll(".bd-example .toast").forEach(e => {
        const t = new bootstrap.Toast(e,{
            autohide: !1
        });
        t.show()
    }
    );
    const n = document.getElementById("liveToastBtn")
      , i = document.getElementById("liveToast");
    if (n) {
        const e = bootstrap.Toast.getOrCreateInstance(i);
        n.addEventListener("click", () => {
            e.show()
        }
        )
    }
    const a = document.getElementById("liveAlertPlaceholder")
      , r = (e, t) => {
        const n = document.createElement("div");
        n.innerHTML = [`<div class="alert alert-${t} alert-dismissible" role="alert">`, `   <div>${e}</div>`, '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>', "</div>"].join(""),
        a.append(n)
    }
      , s = document.getElementById("liveAlertBtn");
    s && s.addEventListener("click", () => {
        r("Nice, you triggered this alert message!", "success")
    }
    ),
    document.querySelectorAll('.carousel:not([data-bs-ride="carousel"])').forEach(e => {
        bootstrap.Carousel.getOrCreateInstance(e)
    }
    ),
    document.querySelectorAll('.bd-example-indeterminate [type="checkbox"]').forEach(e => {
        e.id.includes("Indeterminate") && (e.indeterminate = !0)
    }
    ),
    document.querySelectorAll('.bd-content [href="#"]').forEach(e => {
        e.addEventListener("click", e => {
            e.preventDefault()
        }
        )
    }
    );
    const t = document.getElementById("exampleModal");
    t && t.addEventListener("show.bs.modal", e => {
        const s = e.relatedTarget
          , n = s.getAttribute("data-bs-whatever")
          , o = t.querySelector(".modal-title")
          , i = t.querySelector(".modal-body input");
        o.textContent = `New message to ${n}`,
        i.value = n
    }
    );
    const o = document.querySelectorAll(".bd-example-offcanvas .offcanvas");
    o && o.forEach(e => {
        e.addEventListener("show.bs.offcanvas", e => {
            e.preventDefault()
        }
        , !1)
    }
    )
}
)()
