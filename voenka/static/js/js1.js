! function(a, b, c, d, e, f) {
    function g(a, b) { var c = typeof a[b]; return "function" == c || !("object" != c || !a[b]) || "unknown" == c }

    function h(a, b) { return !("object" != typeof a[b] || !a[b]) }

    function i(a) { return "[object Array]" === Object.prototype.toString.call(a) }

    function j() { var a = "Shockwave Flash",
            b = "application/x-shockwave-flash"; if (!t(navigator.plugins) && "object" == typeof navigator.plugins[a]) { var c = navigator.plugins[a].description;
            c && !t(navigator.mimeTypes) && navigator.mimeTypes[b] && navigator.mimeTypes[b].enabledPlugin && (C = c.match(/\d+/g)) } if (!C) { var d; try { d = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), C = Array.prototype.slice.call(d.GetVariable("$version").match(/(\d+),(\d+),(\d+),(\d+)/), 1), d = null } catch (e) {} } if (!C) return !1; var f = parseInt(C[0], 10),
            g = parseInt(C[1], 10); return D = f > 9 && g > 0, !0 }

    function k() { if (!S) { S = !0; for (var a = 0; a < T.length; a++) T[a]();
            T.length = 0 } }

    function l(a, b) { return S ? (a.call(b), void 0) : (T.push(function() { a.call(b) }), void 0) }

    function m() { var a = parent; if ("" !== M)
            for (var b = 0, c = M.split("."); b < c.length; b++) a = a[c[b]]; return a.easyXDM }

    function n(b) { return a.easyXDM = O, M = b, M && (P = "easyXDM_" + M.replace(".", "_") + "_"), N }

    function o(a) { return a.match(J)[3] }

    function p(a) { return a.match(J)[4] || "" }

    function q(a) { var b = a.toLowerCase().match(J),
            c = b[2],
            d = b[3],
            e = b[4] || ""; return ("http:" == c && ":80" == e || "https:" == c && ":443" == e) && (e = ""), c + "//" + d + e }

    function r(a) { if (a = a.replace(L, "$1/"), !a.match(/^(http||https):\/\//)) { var b = "/" === a.substring(0, 1) ? "" : c.pathname; "/" !== b.substring(b.length - 1) && (b = b.substring(0, b.lastIndexOf("/") + 1)), a = c.protocol + "//" + c.host + b + a } for (; K.test(a);) a = a.replace(K, ""); return a }

    function s(a, b) { var c = "",
            d = a.indexOf("#"); - 1 !== d && (c = a.substring(d), a = a.substring(0, d)); var e = []; for (var g in b) b.hasOwnProperty(g) && e.push(g + "=" + f(b[g])); return a + (Q ? "#" : -1 == a.indexOf("?") ? "?" : "&") + e.join("&") + c }

    function t(a) { return "undefined" == typeof a }

    function u(a, b, c) { var d; for (var e in b) b.hasOwnProperty(e) && (e in a ? (d = b[e], "object" == typeof d ? u(a[e], d, c) : c || (a[e] = b[e])) : a[e] = b[e]); return a }

    function v() { var a = b.body.appendChild(b.createElement("form")),
            c = a.appendChild(b.createElement("input"));
        c.name = P + "TEST" + H, B = c !== a.elements[c.name], b.body.removeChild(a) }

    function w(a) { t(B) && v(); var c;
        B ? c = b.createElement('<iframe name="' + a.props.name + '"/>') : (c = b.createElement("IFRAME"), c.name = a.props.name), c.id = c.name = a.props.name, delete a.props.name, "string" == typeof a.container && (a.container = b.getElementById(a.container)), a.container || (u(c.style, { position: "absolute", top: "-2000px", left: "0px" }), a.container = b.body); var d = a.props.src; if (a.props.src = "javascript:false", u(c, a.props), c.border = c.frameBorder = 0, c.allowTransparency = !0, a.container.appendChild(c), a.onLoad && E(c, "load", a.onLoad), a.usePost) { var e, f = a.container.appendChild(b.createElement("form")); if (f.target = c.name, f.action = d, f.method = "POST", "object" == typeof a.usePost)
                for (var g in a.usePost) a.usePost.hasOwnProperty(g) && (B ? e = b.createElement('<input name="' + g + '"/>') : (e = b.createElement("INPUT"), e.name = g), e.value = a.usePost[g], f.appendChild(e));
            f.submit(), f.parentNode.removeChild(f) } else c.src = d; return a.props.src = d, c }

    function x(a, b) { "string" == typeof a && (a = [a]); for (var c, d = a.length; d--;)
            if (c = a[d], c = new RegExp("^" == c.substr(0, 1) ? c : "^" + c.replace(/(\*)/g, ".$1").replace(/\?/g, ".") + "$"), c.test(b)) return !0;
        return !1 }

    function y(d) { var e, f = d.protocol; if (d.isHost = d.isHost || t(V.xdm_p), Q = d.hash || !1, d.props || (d.props = {}), d.isHost) d.remote = r(d.remote), d.channel = d.channel || "default" + H++, d.secret = Math.random().toString(16).substring(2), t(f) && (f = q(c.href) == q(d.remote) ? "4" : g(a, "postMessage") || g(b, "postMessage") ? "1" : d.swf && g(a, "ActiveXObject") && j() ? "6" : "Gecko" === navigator.product && "frameElement" in a && -1 == navigator.userAgent.indexOf("WebKit") ? "5" : d.remoteHelper ? "2" : "0");
        else if (d.channel = V.xdm_c.replace(/["'<>\\]/g, ""), d.secret = V.xdm_s, d.remote = V.xdm_e.replace(/["'<>\\]/g, ""), f = V.xdm_p, d.acl && !x(d.acl, d.remote)) throw new Error("Access denied for " + d.remote); switch (d.protocol = f, f) {
            case "0":
                if (u(d, { interval: 100, delay: 2e3, useResize: !0, useParent: !1, usePolling: !1 }, !0), d.isHost) { if (!d.local) { for (var h, i = c.protocol + "//" + c.host, k = b.body.getElementsByTagName("img"), l = k.length; l--;)
                            if (h = k[l], h.src.substring(0, i.length) === i) { d.local = h.src; break }
                        d.local || (d.local = a) } var m = { xdm_c: d.channel, xdm_p: 0 };
                    d.local === a ? (d.usePolling = !0, d.useParent = !0, d.local = c.protocol + "//" + c.host + c.pathname + c.search, m.xdm_e = d.local, m.xdm_pa = 1) : m.xdm_e = r(d.local), d.container && (d.useResize = !1, m.xdm_po = 1), d.remote = s(d.remote, m) } else u(d, { channel: V.xdm_c, remote: V.xdm_e, useParent: !t(V.xdm_pa), usePolling: !t(V.xdm_po), useResize: d.useParent ? !1 : d.useResize });
                e = [new N.stack.HashTransport(d), new N.stack.ReliableBehavior({}), new N.stack.QueueBehavior({ encode: !0, maxLength: 4e3 - d.remote.length }), new N.stack.VerifyBehavior({ initiate: d.isHost })]; break;
            case "1":
                e = [new N.stack.PostMessageTransport(d)]; break;
            case "2":
                d.remoteHelper = r(d.remoteHelper), e = [new N.stack.NameTransport(d), new N.stack.QueueBehavior, new N.stack.VerifyBehavior({ initiate: d.isHost })]; break;
            case "3":
                e = [new N.stack.NixTransport(d)]; break;
            case "4":
                e = [new N.stack.SameOriginTransport(d)]; break;
            case "5":
                e = [new N.stack.FrameElementTransport(d)]; break;
            case "6":
                C || j(), e = [new N.stack.FlashTransport(d)] } return e.push(new N.stack.QueueBehavior({ lazy: d.lazy, remove: !0 })), e }

    function z(a) { for (var b, c = { incoming: function(a, b) { this.up.incoming(a, b) }, outgoing: function(a, b) { this.down.outgoing(a, b) }, callback: function(a) { this.up.callback(a) }, init: function() { this.down.init() }, destroy: function() { this.down.destroy() } }, d = 0, e = a.length; e > d; d++) b = a[d], u(b, c, !0), 0 !== d && (b.down = a[d - 1]), d !== e - 1 && (b.up = a[d + 1]); return b }

    function A(a) { a.up.down = a.down, a.down.up = a.up, a.up = a.down = null } var B, C, D, E, F, G = this,
        H = 1,
        I = Function.prototype,
        J = /^((http.?:)\/\/([^:\/\s]+)(:\d+)*)/,
        K = /[\-\w]+\/\.\.\//,
        L = /([^:])\/\//g,
        M = "",
        N = {},
        O = a.easyXDM,
        P = "easyXDM_",
        Q = !1; if (g(a, "addEventListener")) E = function(a, b, c) { a.addEventListener(b, c, !1) }, F = function(a, b, c) { a.removeEventListener(b, c, !1) };
    else { if (!g(a, "attachEvent")) throw new Error("Browser not supported");
        E = function(a, b, c) { a.attachEvent("on" + b, c) }, F = function(a, b, c) { a.detachEvent("on" + b, c) } } var R, S = !1,
        T = []; if ("readyState" in b ? (R = b.readyState, S = "complete" == R || ~navigator.userAgent.indexOf("AppleWebKit/") && ("loaded" == R || "interactive" == R)) : S = !!b.body, !S) { if (g(a, "addEventListener")) E(b, "DOMContentLoaded", k);
        else if (E(b, "readystatechange", function() { "complete" == b.readyState && k() }), b.documentElement.doScroll && a === top) { var U = function() { if (!S) { try { b.documentElement.doScroll("left") } catch (a) { return d(U, 1), void 0 }
                    k() } };
            U() }
        E(a, "load", k) } var V = function(a) { a = a.substring(1).split("&"); for (var b, c = {}, d = a.length; d--;) b = a[d].split("="), c[b[0]] = e(b[1]); return c }(/xdm_e=/.test(c.search) ? c.search : c.hash),
        W = function() { var a = {},
                b = { a: [1, 2, 3] },
                c = '{"a":[1,2,3]}'; return "undefined" != typeof JSON && "function" == typeof JSON.stringify && JSON.stringify(b).replace(/\s/g, "") === c ? JSON : (Object.toJSON && Object.toJSON(b).replace(/\s/g, "") === c && (a.stringify = Object.toJSON), "function" == typeof String.prototype.evalJSON && (b = c.evalJSON(), b.a && 3 === b.a.length && 3 === b.a[2] && (a.parse = function(a) { return a.evalJSON() })), a.stringify && a.parse ? (W = function() { return a }, a) : null) };
    u(N, { version: "2.4.17.1", query: V, stack: {}, apply: u, getJSONObject: W, whenReady: l, noConflict: n }), N.DomHelper = { on: E, un: F, requiresJSON: function(c) { h(a, "JSON") || b.write('<script type="text/javascript" src="' + c + '"><' + "/script>") } },
        function() { var a = {};
            N.Fn = { set: function(b, c) { a[b] = c }, get: function(b, c) { var d = a[b]; return c && delete a[b], d } } }(), N.Socket = function(a) { var b = z(y(a).concat([{ incoming: function(b, c) { a.onMessage(b, c) }, callback: function(b) { a.onReady && a.onReady(b) } }])),
                c = q(a.remote);
            this.origin = q(a.remote), this.destroy = function() { b.destroy() }, this.postMessage = function(a) { b.outgoing(a, c) }, b.init() }, N.Rpc = function(a, b) { if (b.local)
                for (var c in b.local)
                    if (b.local.hasOwnProperty(c)) { var d = b.local[c]; "function" == typeof d && (b.local[c] = { method: d }) }
            var e = z(y(a).concat([new N.stack.RpcBehavior(this, b), { callback: function(b) { a.onReady && a.onReady(b) } }]));
            this.origin = q(a.remote), this.destroy = function() { e.destroy() }, e.init() }, N.stack.SameOriginTransport = function(a) { var b, e, f, g; return b = { outgoing: function(a, b, c) { f(a), c && c() }, destroy: function() { e && (e.parentNode.removeChild(e), e = null) }, onDOMReady: function() { g = q(a.remote), a.isHost ? (u(a.props, { src: s(a.remote, { xdm_e: c.protocol + "//" + c.host + c.pathname, xdm_c: a.channel, xdm_p: 4 }), name: P + a.channel + "_provider" }), e = w(a), N.Fn.set(a.channel, function(a) { return f = a, d(function() { b.up.callback(!0) }, 0),
                            function(a) { b.up.incoming(a, g) } })) : (f = m().Fn.get(a.channel, !0)(function(a) { b.up.incoming(a, g) }), d(function() { b.up.callback(!0) }, 0)) }, init: function() { l(b.onDOMReady, b) } } }, N.stack.FlashTransport = function(a) {
            function e(a) { d(function() { g.up.incoming(a, i) }, 0) }

            function f(c) { var d = a.swf + "?host=" + a.isHost,
                    e = "easyXDM_swf_" + Math.floor(1e4 * Math.random());
                N.Fn.set("flash_loaded" + c.replace(/[\-.]/g, "_"), function() { N.stack.FlashTransport[c].swf = j = k.firstChild; for (var a = N.stack.FlashTransport[c].queue, b = 0; b < a.length; b++) a[b]();
                    a.length = 0 }), a.swfContainer ? k = "string" == typeof a.swfContainer ? b.getElementById(a.swfContainer) : a.swfContainer : (k = b.createElement("div"), u(k.style, D && a.swfNoThrottle ? { height: "20px", width: "20px", position: "fixed", right: 0, top: 0 } : { height: "1px", width: "1px", position: "absolute", overflow: "hidden", right: 0, top: 0 }), b.body.appendChild(k)); var f = "callback=flash_loaded" + c.replace(/[\-.]/g, "_") + "&proto=" + G.location.protocol + "&domain=" + o(G.location.href) + "&port=" + p(G.location.href) + "&ns=" + M;
                k.innerHTML = "<object height='20' width='20' type='application/x-shockwave-flash' id='" + e + "' data='" + d + "'>" + "<param name='allowScriptAccess' value='always'></param>" + "<param name='wmode' value='transparent'>" + "<param name='movie' value='" + d + "'></param>" + "<param name='flashvars' value='" + f + "'></param>" + "<embed type='application/x-shockwave-flash' FlashVars='" + f + "' allowScriptAccess='always' wmode='transparent' src='" + d + "' height='1' width='1'></embed>" + "</object>" } var g, h, i, j, k; return g = { outgoing: function(b, c, d) { j.postMessage(a.channel, b.toString()), d && d() }, destroy: function() { try { j.destroyChannel(a.channel) } catch (b) {}
                    j = null, h && (h.parentNode.removeChild(h), h = null) }, onDOMReady: function() { i = a.remote, N.Fn.set("flash_" + a.channel + "_init", function() { d(function() { g.up.callback(!0) }) }), N.Fn.set("flash_" + a.channel + "_onMessage", e), a.swf = r(a.swf); var b = o(a.swf),
                        k = function() { N.stack.FlashTransport[b].init = !0, j = N.stack.FlashTransport[b].swf, j.createChannel(a.channel, a.secret, q(a.remote), a.isHost), a.isHost && (D && a.swfNoThrottle && u(a.props, { position: "fixed", right: 0, top: 0, height: "20px", width: "20px" }), u(a.props, { src: s(a.remote, { xdm_e: q(c.href), xdm_c: a.channel, xdm_p: 6, xdm_s: a.secret }), name: P + a.channel + "_provider" }), h = w(a)) };
                    N.stack.FlashTransport[b] && N.stack.FlashTransport[b].init ? k() : N.stack.FlashTransport[b] ? N.stack.FlashTransport[b].queue.push(k) : (N.stack.FlashTransport[b] = { queue: [k] }, f(b)) }, init: function() { l(g.onDOMReady, g) } } }, N.stack.PostMessageTransport = function(b) {
            function e(a) { if (a.origin) return q(a.origin); if (a.uri) return q(a.uri); if (a.domain) return c.protocol + "//" + a.domain; throw "Unable to retrieve the origin of the event" }

            function f(a) { var c = e(a);
                c == j && a.data.substring(0, b.channel.length + 1) == b.channel + " " && g.up.incoming(a.data.substring(b.channel.length + 1), c) } var g, h, i, j; return g = { outgoing: function(a, c, d) { i.postMessage(b.channel + " " + a, c || j), d && d() }, destroy: function() { F(a, "message", f), h && (i = null, h.parentNode.removeChild(h), h = null) }, onDOMReady: function() { if (j = q(b.remote), b.isHost) { var e = function(c) { c.data == b.channel + "-ready" && (i = "postMessage" in h.contentWindow ? h.contentWindow : h.contentWindow.document, F(a, "message", e), E(a, "message", f), d(function() { g.up.callback(!0) }, 0)) };
                        E(a, "message", e), u(b.props, { src: s(b.remote, { xdm_e: q(c.href), xdm_c: b.channel, xdm_p: 1 }), name: P + b.channel + "_provider" }), h = w(b) } else E(a, "message", f), i = "postMessage" in a.parent ? a.parent : a.parent.document, i.postMessage(b.channel + "-ready", j), d(function() { g.up.callback(!0) }, 0) }, init: function() { l(g.onDOMReady, g) } } }, N.stack.FrameElementTransport = function(e) { var f, g, h, i; return f = { outgoing: function(a, b, c) { h.call(this, a), c && c() }, destroy: function() { g && (g.parentNode.removeChild(g), g = null) }, onDOMReady: function() { i = q(e.remote), e.isHost ? (u(e.props, { src: s(e.remote, { xdm_e: q(c.href), xdm_c: e.channel, xdm_p: 5 }), name: P + e.channel + "_provider" }), g = w(e), g.fn = function(a) { return delete g.fn, h = a, d(function() { f.up.callback(!0) }, 0),
                            function(a) { f.up.incoming(a, i) } }) : (b.referrer && q(b.referrer) != V.xdm_e && (a.top.location = V.xdm_e), h = a.frameElement.fn(function(a) { f.up.incoming(a, i) }), f.up.callback(!0)) }, init: function() { l(f.onDOMReady, f) } } }, N.stack.NameTransport = function(a) {
            function b(b) { var c = a.remoteHelper + (h ? "#_3" : "#_2") + a.channel;
                i.contentWindow.sendMessage(b, c) }

            function c() { h ? 2 !== ++k && h || g.up.callback(!0) : (b("ready"), g.up.callback(!0)) }

            function e(a) { g.up.incoming(a, n) }

            function f() { m && d(function() { m(!0) }, 0) } var g, h, i, j, k, m, n, o; return g = { outgoing: function(a, c, d) { m = d, b(a) }, destroy: function() { i.parentNode.removeChild(i), i = null, h && (j.parentNode.removeChild(j), j = null) }, onDOMReady: function() { h = a.isHost, k = 0, n = q(a.remote), a.local = r(a.local), h ? (N.Fn.set(a.channel, function(b) { h && "ready" === b && (N.Fn.set(a.channel, e), c()) }), o = s(a.remote, { xdm_e: a.local, xdm_c: a.channel, xdm_p: 2 }), u(a.props, { src: o + "#" + a.channel, name: P + a.channel + "_provider" }), j = w(a)) : (a.remoteHelper = a.remote, N.Fn.set(a.channel, e)); var b = function() { var e = i || this;
                        F(e, "load", b), N.Fn.set(a.channel + "_load", f),
                            function g() { "function" == typeof e.contentWindow.sendMessage ? c() : d(g, 50) }() };
                    i = w({ props: { src: a.local + "#_4" + a.channel }, onLoad: b }) }, init: function() { l(g.onDOMReady, g) } } }, N.stack.HashTransport = function(b) {
            function c(a) { if (p) { var c = b.remote + "#" + n++ + "_" + a;
                    (i || !r ? p.contentWindow : p).location = c } }

            function e(a) { m = a, h.up.incoming(m.substring(m.indexOf("_") + 1), s) }

            function f() { if (o) { var a = o.location.href,
                        b = "",
                        c = a.indexOf("#"); - 1 != c && (b = a.substring(c)), b && b != m && e(b) } }

            function g() { j = setInterval(f, k) } var h, i, j, k, m, n, o, p, r, s; return h = { outgoing: function(a) { c(a) }, destroy: function() { a.clearInterval(j), (i || !r) && p.parentNode.removeChild(p), p = null }, onDOMReady: function() { if (i = b.isHost, k = b.interval, m = "#" + b.channel, n = 0, r = b.useParent, s = q(b.remote), i) { if (u(b.props, { src: b.remote, name: P + b.channel + "_provider" }), r) b.onLoad = function() { o = a, g(), h.up.callback(!0) };
                        else { var c = 0,
                                e = b.delay / 50;! function f() { if (++c > e) throw new Error("Unable to reference listenerwindow"); try { o = p.contentWindow.frames[P + b.channel + "_consumer"] } catch (a) {}
                                o ? (g(), h.up.callback(!0)) : d(f, 50) }() }
                        p = w(b) } else o = a, g(), r ? (p = parent, h.up.callback(!0)) : (u(b, { props: { src: b.remote + "#" + b.channel + new Date, name: P + b.channel + "_consumer" }, onLoad: function() { h.up.callback(!0) } }), p = w(b)) }, init: function() { l(h.onDOMReady, h) } } }, N.stack.ReliableBehavior = function() { var a, b, c = 0,
                d = 0,
                e = ""; return a = { incoming: function(f, g) { var h = f.indexOf("_"),
                        i = f.substring(0, h).split(",");
                    f = f.substring(h + 1), i[0] == c && (e = "", b && (b(!0), b = null)), f.length > 0 && (a.down.outgoing(i[1] + "," + c + "_" + e, g), d != i[1] && (d = i[1], a.up.incoming(f, g))) }, outgoing: function(f, g, h) { e = f, b = h, a.down.outgoing(d + "," + ++c + "_" + f, g) } } }, N.stack.QueueBehavior = function(a) {
            function b() { if (a.remove && 0 === h.length) return A(c), void 0; if (!i && 0 !== h.length && !g) { i = !0; var e = h.shift();
                    c.down.outgoing(e.data, e.origin, function(a) { i = !1, e.callback && d(function() { e.callback(a) }, 0), b() }) } } var c, g, h = [],
                i = !0,
                j = "",
                k = 0,
                l = !1,
                m = !1; return c = { init: function() { t(a) && (a = {}), a.maxLength && (k = a.maxLength, m = !0), a.lazy ? l = !0 : c.down.init() }, callback: function(a) { i = !1; var d = c.up;
                    b(), d.callback(a) }, incoming: function(b, d) { if (m) { var f = b.indexOf("_"),
                            g = parseInt(b.substring(0, f), 10);
                        j += b.substring(f + 1), 0 === g && (a.encode && (j = e(j)), c.up.incoming(j, d), j = "") } else c.up.incoming(b, d) }, outgoing: function(d, e, g) { a.encode && (d = f(d)); var i, j = []; if (m) { for (; 0 !== d.length;) i = d.substring(0, k), d = d.substring(i.length), j.push(i); for (; i = j.shift();) h.push({ data: j.length + "_" + i, origin: e, callback: 0 === j.length ? g : null }) } else h.push({ data: d, origin: e, callback: g });
                    l ? c.down.init() : b() }, destroy: function() { g = !0, c.down.destroy() } } }, N.stack.VerifyBehavior = function(a) {
            function b() { d = Math.random().toString(16).substring(2), c.down.outgoing(d) } var c, d, e; return c = { incoming: function(f, g) { var h = f.indexOf("_"); - 1 === h ? f === d ? c.up.callback(!0) : e || (e = f, a.initiate || b(), c.down.outgoing(f)) : f.substring(0, h) === e && c.up.incoming(f.substring(h + 1), g) }, outgoing: function(a, b, e) { c.down.outgoing(d + "_" + a, b, e) }, callback: function() { a.initiate && b() } } }, N.stack.RpcBehavior = function(a, b) {
            function c(a) { a.jsonrpc = "2.0", f.down.outgoing(g.stringify(a)) }

            function d(a, b) { var d = Array.prototype.slice; return function() { var e, f = arguments.length,
                        g = { method: b };
                    f > 0 && "function" == typeof arguments[f - 1] ? (f > 1 && "function" == typeof arguments[f - 2] ? (e = { success: arguments[f - 2], error: arguments[f - 1] }, g.params = d.call(arguments, 0, f - 2)) : (e = { success: arguments[f - 1] }, g.params = d.call(arguments, 0, f - 1)), j["" + ++h] = e, g.id = h) : g.params = d.call(arguments, 0), a.namedParams && 1 === g.params.length && (g.params = g.params[0]), c(g) } }

            function e(a, b, d, e) { if (!d) return b && c({ id: b, error: { code: -32601, message: "Procedure not found." } }), void 0; var f, g;
                b ? (f = function(a) { f = I, c({ id: b, result: a }) }, g = function(a, d) { g = I; var e = { id: b, error: { code: -32099, message: a } };
                    d && (e.error.data = d), c(e) }) : f = g = I, i(e) || (e = [e]); try { var h = d.method.apply(d.scope, e.concat([f, g]));
                    t(h) || f(h) } catch (j) { g(j.message) } } var f, g = b.serializer || W(),
                h = 0,
                j = {}; return f = { incoming: function(a) { var d = g.parse(a); if (d.method) b.handle ? b.handle(d, c) : e(d.method, d.id, b.local[d.method], d.params);
                    else { var f = j[d.id];
                        d.error ? f.error && f.error(d.error) : f.success && f.success(d.result), delete j[d.id] } }, init: function() { if (b.remote)
                        for (var c in b.remote) b.remote.hasOwnProperty(c) && (a[c] = d(b.remote[c], c));
                    f.down.init() }, destroy: function() { for (var c in b.remote) b.remote.hasOwnProperty(c) && a.hasOwnProperty(c) && delete a[c];
                    f.down.destroy() } } }, G.easyXDM = N }(window, document, location, window.setTimeout, decodeURIComponent, encodeURIComponent);