;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    6840: function (e, t, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/_app',
        function () {
          return n(4649)
        },
      ])
    },
    902: function (e, t, n) {
      'use strict'
      n.d(t, {
        O: function () {
          return r
        },
      })
      var r = 'monofactory.github.io/mono-react'
    },
    4649: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, {
          default: function () {
            return Bt
          },
        })
      var r = n(5893),
        a = n(7294),
        i = n.t(a, 2)
      function o() {
        return (
          (o =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t]
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
            }),
          o.apply(this, arguments)
        )
      }
      var c = a.createContext(null)
      function s() {
        return a.useContext(c)
      }
      var u =
        'function' === typeof Symbol && Symbol.for
          ? Symbol.for('mui.nested')
          : '__THEME_NESTED__'
      var f = function (e) {
        const { children: t, theme: n } = e,
          i = s(),
          f = a.useMemo(() => {
            const e =
              null === i
                ? n
                : (function (e, t) {
                    if ('function' === typeof t) return t(e)
                    return o({}, e, t)
                  })(i, n)
            return null != e && (e[u] = null !== i), e
          }, [n, i])
        return (0, r.jsx)(c.Provider, { value: f, children: t })
      }
      var l = (function () {
          function e(e) {
            var t = this
            ;(this._insertTag = function (e) {
              var n
              ;(n =
                0 === t.tags.length
                  ? t.insertionPoint
                    ? t.insertionPoint.nextSibling
                    : t.prepend
                    ? t.container.firstChild
                    : t.before
                  : t.tags[t.tags.length - 1].nextSibling),
                t.container.insertBefore(e, n),
                t.tags.push(e)
            }),
              (this.isSpeedy = void 0 === e.speedy || e.speedy),
              (this.tags = []),
              (this.ctr = 0),
              (this.nonce = e.nonce),
              (this.key = e.key),
              (this.container = e.container),
              (this.prepend = e.prepend),
              (this.insertionPoint = e.insertionPoint),
              (this.before = null)
          }
          var t = e.prototype
          return (
            (t.hydrate = function (e) {
              e.forEach(this._insertTag)
            }),
            (t.insert = function (e) {
              this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
                this._insertTag(
                  (function (e) {
                    var t = document.createElement('style')
                    return (
                      t.setAttribute('data-emotion', e.key),
                      void 0 !== e.nonce && t.setAttribute('nonce', e.nonce),
                      t.appendChild(document.createTextNode('')),
                      t.setAttribute('data-s', ''),
                      t
                    )
                  })(this)
                )
              var t = this.tags[this.tags.length - 1]
              if (this.isSpeedy) {
                var n = (function (e) {
                  if (e.sheet) return e.sheet
                  for (var t = 0; t < document.styleSheets.length; t++)
                    if (document.styleSheets[t].ownerNode === e)
                      return document.styleSheets[t]
                })(t)
                try {
                  n.insertRule(e, n.cssRules.length)
                } catch (r) {
                  0
                }
              } else t.appendChild(document.createTextNode(e))
              this.ctr++
            }),
            (t.flush = function () {
              this.tags.forEach(function (e) {
                return e.parentNode && e.parentNode.removeChild(e)
              }),
                (this.tags = []),
                (this.ctr = 0)
            }),
            e
          )
        })(),
        d = Math.abs,
        p = String.fromCharCode,
        h = Object.assign
      function g(e) {
        return e.trim()
      }
      function m(e, t, n) {
        return e.replace(t, n)
      }
      function b(e, t) {
        return e.indexOf(t)
      }
      function y(e, t) {
        return 0 | e.charCodeAt(t)
      }
      function v(e, t, n) {
        return e.slice(t, n)
      }
      function k(e) {
        return e.length
      }
      function x(e) {
        return e.length
      }
      function w(e, t) {
        return t.push(e), e
      }
      var $ = 1,
        O = 1,
        A = 0,
        S = 0,
        j = 0,
        E = ''
      function T(e, t, n, r, a, i, o) {
        return {
          value: e,
          root: t,
          parent: n,
          type: r,
          props: a,
          children: i,
          line: $,
          column: O,
          length: o,
          return: '',
        }
      }
      function C(e, t) {
        return h(
          T('', null, null, '', null, null, 0),
          e,
          { length: -e.length },
          t
        )
      }
      function M() {
        return (j = S > 0 ? y(E, --S) : 0), O--, 10 === j && ((O = 1), $--), j
      }
      function _() {
        return (j = S < A ? y(E, S++) : 0), O++, 10 === j && ((O = 1), $++), j
      }
      function P() {
        return y(E, S)
      }
      function z() {
        return S
      }
      function B(e, t) {
        return v(E, e, t)
      }
      function I(e) {
        switch (e) {
          case 0:
          case 9:
          case 10:
          case 13:
          case 32:
            return 5
          case 33:
          case 43:
          case 44:
          case 47:
          case 62:
          case 64:
          case 126:
          case 59:
          case 123:
          case 125:
            return 4
          case 58:
            return 3
          case 34:
          case 39:
          case 40:
          case 91:
            return 2
          case 41:
          case 93:
            return 1
        }
        return 0
      }
      function R(e) {
        return ($ = O = 1), (A = k((E = e))), (S = 0), []
      }
      function W(e) {
        return (E = ''), e
      }
      function N(e) {
        return g(B(S - 1, L(91 === e ? e + 2 : 40 === e ? e + 1 : e)))
      }
      function F(e) {
        for (; (j = P()) && j < 33; ) _()
        return I(e) > 2 || I(j) > 3 ? '' : ' '
      }
      function H(e, t) {
        for (
          ;
          --t &&
          _() &&
          !(j < 48 || j > 102 || (j > 57 && j < 65) || (j > 70 && j < 97));

        );
        return B(e, z() + (t < 6 && 32 == P() && 32 == _()))
      }
      function L(e) {
        for (; _(); )
          switch (j) {
            case e:
              return S
            case 34:
            case 39:
              34 !== e && 39 !== e && L(j)
              break
            case 40:
              41 === e && L(e)
              break
            case 92:
              _()
          }
        return S
      }
      function X(e, t) {
        for (; _() && e + j !== 57 && (e + j !== 84 || 47 !== P()); );
        return '/*' + B(t, S - 1) + '*' + p(47 === e ? e : _())
      }
      function D(e) {
        for (; !I(P()); ) _()
        return B(e, S)
      }
      var Y = '-ms-',
        q = '-moz-',
        U = '-webkit-',
        V = 'comm',
        J = 'rule',
        G = 'decl',
        K = '@keyframes'
      function Q(e, t) {
        for (var n = '', r = x(e), a = 0; a < r; a++)
          n += t(e[a], a, e, t) || ''
        return n
      }
      function Z(e, t, n, r) {
        switch (e.type) {
          case '@import':
          case G:
            return (e.return = e.return || e.value)
          case V:
            return ''
          case K:
            return (e.return = e.value + '{' + Q(e.children, r) + '}')
          case J:
            e.value = e.props.join(',')
        }
        return k((n = Q(e.children, r)))
          ? (e.return = e.value + '{' + n + '}')
          : ''
      }
      function ee(e, t) {
        switch (
          (function (e, t) {
            return (
              (((((((t << 2) ^ y(e, 0)) << 2) ^ y(e, 1)) << 2) ^ y(e, 2)) <<
                2) ^
              y(e, 3)
            )
          })(e, t)
        ) {
          case 5103:
            return U + 'print-' + e + e
          case 5737:
          case 4201:
          case 3177:
          case 3433:
          case 1641:
          case 4457:
          case 2921:
          case 5572:
          case 6356:
          case 5844:
          case 3191:
          case 6645:
          case 3005:
          case 6391:
          case 5879:
          case 5623:
          case 6135:
          case 4599:
          case 4855:
          case 4215:
          case 6389:
          case 5109:
          case 5365:
          case 5621:
          case 3829:
            return U + e + e
          case 5349:
          case 4246:
          case 4810:
          case 6968:
          case 2756:
            return U + e + q + e + Y + e + e
          case 6828:
          case 4268:
            return U + e + Y + e + e
          case 6165:
            return U + e + Y + 'flex-' + e + e
          case 5187:
            return (
              U +
              e +
              m(e, /(\w+).+(:[^]+)/, '-webkit-box-$1$2-ms-flex-$1$2') +
              e
            )
          case 5443:
            return U + e + Y + 'flex-item-' + m(e, /flex-|-self/, '') + e
          case 4675:
            return (
              U +
              e +
              Y +
              'flex-line-pack' +
              m(e, /align-content|flex-|-self/, '') +
              e
            )
          case 5548:
            return U + e + Y + m(e, 'shrink', 'negative') + e
          case 5292:
            return U + e + Y + m(e, 'basis', 'preferred-size') + e
          case 6060:
            return (
              U +
              'box-' +
              m(e, '-grow', '') +
              U +
              e +
              Y +
              m(e, 'grow', 'positive') +
              e
            )
          case 4554:
            return U + m(e, /([^-])(transform)/g, '$1-webkit-$2') + e
          case 6187:
            return (
              m(
                m(m(e, /(zoom-|grab)/, U + '$1'), /(image-set)/, U + '$1'),
                e,
                ''
              ) + e
            )
          case 5495:
          case 3959:
            return m(e, /(image-set\([^]*)/, U + '$1$`$1')
          case 4968:
            return (
              m(
                m(
                  e,
                  /(.+:)(flex-)?(.*)/,
                  '-webkit-box-pack:$3-ms-flex-pack:$3'
                ),
                /s.+-b[^;]+/,
                'justify'
              ) +
              U +
              e +
              e
            )
          case 4095:
          case 3583:
          case 4068:
          case 2532:
            return m(e, /(.+)-inline(.+)/, U + '$1$2') + e
          case 8116:
          case 7059:
          case 5753:
          case 5535:
          case 5445:
          case 5701:
          case 4933:
          case 4677:
          case 5533:
          case 5789:
          case 5021:
          case 4765:
            if (k(e) - 1 - t > 6)
              switch (y(e, t + 1)) {
                case 109:
                  if (45 !== y(e, t + 4)) break
                case 102:
                  return (
                    m(
                      e,
                      /(.+:)(.+)-([^]+)/,
                      '$1-webkit-$2-$3$1' +
                        q +
                        (108 == y(e, t + 3) ? '$3' : '$2-$3')
                    ) + e
                  )
                case 115:
                  return ~b(e, 'stretch')
                    ? ee(m(e, 'stretch', 'fill-available'), t) + e
                    : e
              }
            break
          case 4949:
            if (115 !== y(e, t + 1)) break
          case 6444:
            switch (y(e, k(e) - 3 - (~b(e, '!important') && 10))) {
              case 107:
                return m(e, ':', ':' + U) + e
              case 101:
                return (
                  m(
                    e,
                    /(.+:)([^;!]+)(;|!.+)?/,
                    '$1' +
                      U +
                      (45 === y(e, 14) ? 'inline-' : '') +
                      'box$3$1' +
                      U +
                      '$2$3$1' +
                      Y +
                      '$2box$3'
                  ) + e
                )
            }
            break
          case 5936:
            switch (y(e, t + 11)) {
              case 114:
                return U + e + Y + m(e, /[svh]\w+-[tblr]{2}/, 'tb') + e
              case 108:
                return U + e + Y + m(e, /[svh]\w+-[tblr]{2}/, 'tb-rl') + e
              case 45:
                return U + e + Y + m(e, /[svh]\w+-[tblr]{2}/, 'lr') + e
            }
            return U + e + Y + e + e
        }
        return e
      }
      function te(e) {
        return W(ne('', null, null, null, [''], (e = R(e)), 0, [0], e))
      }
      function ne(e, t, n, r, a, i, o, c, s) {
        for (
          var u = 0,
            f = 0,
            l = o,
            d = 0,
            h = 0,
            g = 0,
            y = 1,
            v = 1,
            x = 1,
            $ = 0,
            O = '',
            A = a,
            S = i,
            j = r,
            E = O;
          v;

        )
          switch (((g = $), ($ = _()))) {
            case 40:
              if (108 != g && 58 == E.charCodeAt(l - 1)) {
                ;-1 != b((E += m(N($), '&', '&\f')), '&\f') && (x = -1)
                break
              }
            case 34:
            case 39:
            case 91:
              E += N($)
              break
            case 9:
            case 10:
            case 13:
            case 32:
              E += F(g)
              break
            case 92:
              E += H(z() - 1, 7)
              continue
            case 47:
              switch (P()) {
                case 42:
                case 47:
                  w(ae(X(_(), z()), t, n), s)
                  break
                default:
                  E += '/'
              }
              break
            case 123 * y:
              c[u++] = k(E) * x
            case 125 * y:
            case 59:
            case 0:
              switch ($) {
                case 0:
                case 125:
                  v = 0
                case 59 + f:
                  h > 0 &&
                    k(E) - l &&
                    w(
                      h > 32
                        ? ie(E + ';', r, n, l - 1)
                        : ie(m(E, ' ', '') + ';', r, n, l - 2),
                      s
                    )
                  break
                case 59:
                  E += ';'
                default:
                  if (
                    (w(
                      (j = re(E, t, n, u, f, a, c, O, (A = []), (S = []), l)),
                      i
                    ),
                    123 === $)
                  )
                    if (0 === f) ne(E, t, j, j, A, i, l, c, S)
                    else
                      switch (d) {
                        case 100:
                        case 109:
                        case 115:
                          ne(
                            e,
                            j,
                            j,
                            r &&
                              w(re(e, j, j, 0, 0, a, c, O, a, (A = []), l), S),
                            a,
                            S,
                            l,
                            c,
                            r ? A : S
                          )
                          break
                        default:
                          ne(E, j, j, j, [''], S, 0, c, S)
                      }
              }
              ;(u = f = h = 0), (y = x = 1), (O = E = ''), (l = o)
              break
            case 58:
              ;(l = 1 + k(E)), (h = g)
            default:
              if (y < 1)
                if (123 == $) --y
                else if (125 == $ && 0 == y++ && 125 == M()) continue
              switch (((E += p($)), $ * y)) {
                case 38:
                  x = f > 0 ? 1 : ((E += '\f'), -1)
                  break
                case 44:
                  ;(c[u++] = (k(E) - 1) * x), (x = 1)
                  break
                case 64:
                  45 === P() && (E += N(_())),
                    (d = P()),
                    (f = l = k((O = E += D(z())))),
                    $++
                  break
                case 45:
                  45 === g && 2 == k(E) && (y = 0)
              }
          }
        return i
      }
      function re(e, t, n, r, a, i, o, c, s, u, f) {
        for (
          var l = a - 1, p = 0 === a ? i : [''], h = x(p), b = 0, y = 0, k = 0;
          b < r;
          ++b
        )
          for (
            var w = 0, $ = v(e, l + 1, (l = d((y = o[b])))), O = e;
            w < h;
            ++w
          )
            (O = g(y > 0 ? p[w] + ' ' + $ : m($, /&\f/g, p[w]))) && (s[k++] = O)
        return T(e, t, n, 0 === a ? J : c, s, u, f)
      }
      function ae(e, t, n) {
        return T(e, t, n, V, p(j), v(e, 2, -2), 0)
      }
      function ie(e, t, n, r) {
        return T(e, t, n, G, v(e, 0, r), v(e, r + 1, -1), r)
      }
      var oe = function (e, t, n) {
          for (
            var r = 0, a = 0;
            (r = a), (a = P()), 38 === r && 12 === a && (t[n] = 1), !I(a);

          )
            _()
          return B(e, S)
        },
        ce = function (e, t) {
          return W(
            (function (e, t) {
              var n = -1,
                r = 44
              do {
                switch (I(r)) {
                  case 0:
                    38 === r && 12 === P() && (t[n] = 1),
                      (e[n] += oe(S - 1, t, n))
                    break
                  case 2:
                    e[n] += N(r)
                    break
                  case 4:
                    if (44 === r) {
                      ;(e[++n] = 58 === P() ? '&\f' : ''), (t[n] = e[n].length)
                      break
                    }
                  default:
                    e[n] += p(r)
                }
              } while ((r = _()))
              return e
            })(R(e), t)
          )
        },
        se = new WeakMap(),
        ue = function (e) {
          if ('rule' === e.type && e.parent && !(e.length < 1)) {
            for (
              var t = e.value,
                n = e.parent,
                r = e.column === n.column && e.line === n.line;
              'rule' !== n.type;

            )
              if (!(n = n.parent)) return
            if (
              (1 !== e.props.length || 58 === t.charCodeAt(0) || se.get(n)) &&
              !r
            ) {
              se.set(e, !0)
              for (
                var a = [], i = ce(t, a), o = n.props, c = 0, s = 0;
                c < i.length;
                c++
              )
                for (var u = 0; u < o.length; u++, s++)
                  e.props[s] = a[c]
                    ? i[c].replace(/&\f/g, o[u])
                    : o[u] + ' ' + i[c]
            }
          }
        },
        fe = function (e) {
          if ('decl' === e.type) {
            var t = e.value
            108 === t.charCodeAt(0) &&
              98 === t.charCodeAt(2) &&
              ((e.return = ''), (e.value = ''))
          }
        },
        le = [
          function (e, t, n, r) {
            if (e.length > -1 && !e.return)
              switch (e.type) {
                case G:
                  e.return = ee(e.value, e.length)
                  break
                case K:
                  return Q([C(e, { value: m(e.value, '@', '@' + U) })], r)
                case J:
                  if (e.length)
                    return (function (e, t) {
                      return e.map(t).join('')
                    })(e.props, function (t) {
                      switch (
                        (function (e, t) {
                          return (e = t.exec(e)) ? e[0] : e
                        })(t, /(::plac\w+|:read-\w+)/)
                      ) {
                        case ':read-only':
                        case ':read-write':
                          return Q(
                            [
                              C(e, {
                                props: [m(t, /:(read-\w+)/, ':-moz-$1')],
                              }),
                            ],
                            r
                          )
                        case '::placeholder':
                          return Q(
                            [
                              C(e, {
                                props: [
                                  m(t, /:(plac\w+)/, ':-webkit-input-$1'),
                                ],
                              }),
                              C(e, { props: [m(t, /:(plac\w+)/, ':-moz-$1')] }),
                              C(e, {
                                props: [m(t, /:(plac\w+)/, Y + 'input-$1')],
                              }),
                            ],
                            r
                          )
                      }
                      return ''
                    })
              }
          },
        ],
        de = function (e) {
          var t = e.key
          if ('css' === t) {
            var n = document.querySelectorAll(
              'style[data-emotion]:not([data-s])'
            )
            Array.prototype.forEach.call(n, function (e) {
              ;-1 !== e.getAttribute('data-emotion').indexOf(' ') &&
                (document.head.appendChild(e), e.setAttribute('data-s', ''))
            })
          }
          var r = e.stylisPlugins || le
          var a,
            i,
            o = {},
            c = []
          ;(a = e.container || document.head),
            Array.prototype.forEach.call(
              document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
              function (e) {
                for (
                  var t = e.getAttribute('data-emotion').split(' '), n = 1;
                  n < t.length;
                  n++
                )
                  o[t[n]] = !0
                c.push(e)
              }
            )
          var s,
            u,
            f = [
              Z,
              ((u = function (e) {
                s.insert(e)
              }),
              function (e) {
                e.root || ((e = e.return) && u(e))
              }),
            ],
            d = (function (e) {
              var t = x(e)
              return function (n, r, a, i) {
                for (var o = '', c = 0; c < t; c++) o += e[c](n, r, a, i) || ''
                return o
              }
            })([ue, fe].concat(r, f))
          i = function (e, t, n, r) {
            ;(s = n),
              Q(te(e ? e + '{' + t.styles + '}' : t.styles), d),
              r && (p.inserted[t.name] = !0)
          }
          var p = {
            key: t,
            sheet: new l({
              key: t,
              container: a,
              nonce: e.nonce,
              speedy: e.speedy,
              prepend: e.prepend,
              insertionPoint: e.insertionPoint,
            }),
            nonce: e.nonce,
            inserted: o,
            registered: {},
            insert: i,
          }
          return p.sheet.hydrate(c), p
        }
      var pe = (0, a.createContext)(
        'undefined' !== typeof HTMLElement ? de({ key: 'css' }) : null
      )
      pe.Provider
      var he = (0, a.createContext)({})
      i.useInsertionEffect && i.useInsertionEffect
      function ge(e, t) {
        if (null == e) return {}
        var n,
          r,
          a = {},
          i = Object.keys(e)
        for (r = 0; r < i.length; r++)
          (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n])
        return a
      }
      function me(e) {
        return null !== e && 'object' === typeof e && e.constructor === Object
      }
      function be(e, t, n = { clone: !0 }) {
        const r = n.clone ? o({}, e) : e
        return (
          me(e) &&
            me(t) &&
            Object.keys(t).forEach((a) => {
              '__proto__' !== a &&
                (me(t[a]) && a in e && me(e[a])
                  ? (r[a] = be(e[a], t[a], n))
                  : (r[a] = t[a]))
            }),
          r
        )
      }
      const ye = ['values', 'unit', 'step']
      function ve(e) {
        const {
            values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
            unit: n = 'px',
            step: r = 5,
          } = e,
          a = ge(e, ye),
          i = ((e) => {
            const t = Object.keys(e).map((t) => ({ key: t, val: e[t] })) || []
            return (
              t.sort((e, t) => e.val - t.val),
              t.reduce((e, t) => o({}, e, { [t.key]: t.val }), {})
            )
          })(t),
          c = Object.keys(i)
        function s(e) {
          return `@media (min-width:${'number' === typeof t[e] ? t[e] : e}${n})`
        }
        function u(e) {
          return `@media (max-width:${
            ('number' === typeof t[e] ? t[e] : e) - r / 100
          }${n})`
        }
        function f(e, a) {
          const i = c.indexOf(a)
          return `@media (min-width:${
            'number' === typeof t[e] ? t[e] : e
          }${n}) and (max-width:${
            (-1 !== i && 'number' === typeof t[c[i]] ? t[c[i]] : a) - r / 100
          }${n})`
        }
        return o(
          {
            keys: c,
            values: i,
            up: s,
            down: u,
            between: f,
            only: function (e) {
              return c.indexOf(e) + 1 < c.length
                ? f(e, c[c.indexOf(e) + 1])
                : s(e)
            },
            not: function (e) {
              const t = c.indexOf(e)
              return 0 === t
                ? s(c[1])
                : t === c.length - 1
                ? u(c[t])
                : f(e, c[c.indexOf(e) + 1]).replace(
                    '@media',
                    '@media not all and'
                  )
            },
            unit: n,
          },
          a
        )
      }
      var ke = { borderRadius: 4 }
      const xe = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
        we = {
          keys: ['xs', 'sm', 'md', 'lg', 'xl'],
          up: (e) => `@media (min-width:${xe[e]}px)`,
        }
      function $e(e, t) {
        if (!t || 'string' !== typeof t) return null
        if (e && e.vars) {
          const n = `vars.${t}`
            .split('.')
            .reduce((e, t) => (e && e[t] ? e[t] : null), e)
          if (null != n) return n
        }
        return t
          .split('.')
          .reduce((e, t) => (e && null != e[t] ? e[t] : null), e)
      }
      var Oe = function (e, t) {
        return t ? be(e, t, { clone: !1 }) : e
      }
      const Ae = { m: 'margin', p: 'padding' },
        Se = {
          t: 'Top',
          r: 'Right',
          b: 'Bottom',
          l: 'Left',
          x: ['Left', 'Right'],
          y: ['Top', 'Bottom'],
        },
        je = { marginX: 'mx', marginY: 'my', paddingX: 'px', paddingY: 'py' },
        Ee = (function (e) {
          const t = {}
          return (n) => (void 0 === t[n] && (t[n] = e(n)), t[n])
        })((e) => {
          if (e.length > 2) {
            if (!je[e]) return [e]
            e = je[e]
          }
          const [t, n] = e.split(''),
            r = Ae[t],
            a = Se[n] || ''
          return Array.isArray(a) ? a.map((e) => r + e) : [r + a]
        }),
        Te = [
          'm',
          'mt',
          'mr',
          'mb',
          'ml',
          'mx',
          'my',
          'margin',
          'marginTop',
          'marginRight',
          'marginBottom',
          'marginLeft',
          'marginX',
          'marginY',
          'marginInline',
          'marginInlineStart',
          'marginInlineEnd',
          'marginBlock',
          'marginBlockStart',
          'marginBlockEnd',
        ],
        Ce = [
          'p',
          'pt',
          'pr',
          'pb',
          'pl',
          'px',
          'py',
          'padding',
          'paddingTop',
          'paddingRight',
          'paddingBottom',
          'paddingLeft',
          'paddingX',
          'paddingY',
          'paddingInline',
          'paddingInlineStart',
          'paddingInlineEnd',
          'paddingBlock',
          'paddingBlockStart',
          'paddingBlockEnd',
        ],
        Me = [...Te, ...Ce]
      function _e(e) {
        return (function (e, t, n, r) {
          var a
          const i = null != (a = $e(e, t)) ? a : n
          return 'number' === typeof i
            ? (e) => ('string' === typeof e ? e : i * e)
            : Array.isArray(i)
            ? (e) => ('string' === typeof e ? e : i[e])
            : 'function' === typeof i
            ? i
            : () => {}
        })(e, 'spacing', 8)
      }
      function Pe(e, t) {
        return (n) =>
          e.reduce(
            (e, r) => (
              (e[r] = (function (e, t) {
                if ('string' === typeof t || null == t) return t
                const n = e(Math.abs(t))
                return t >= 0 ? n : 'number' === typeof n ? -n : `-${n}`
              })(t, n)),
              e
            ),
            {}
          )
      }
      function ze(e, t, n, r) {
        if (-1 === t.indexOf(n)) return null
        const a = Pe(Ee(n), r)
        return (function (e, t, n) {
          const r = e.theme || {}
          if (Array.isArray(t)) {
            const e = r.breakpoints || we
            return t.reduce(
              (r, a, i) => ((r[e.up(e.keys[i])] = n(t[i])), r),
              {}
            )
          }
          if ('object' === typeof t) {
            const e = r.breakpoints || we
            return Object.keys(t).reduce((r, a) => {
              if (-1 !== Object.keys(e.values || xe).indexOf(a))
                r[e.up(a)] = n(t[a], a)
              else {
                const e = a
                r[e] = t[e]
              }
              return r
            }, {})
          }
          return n(t)
        })(e, e[n], a)
      }
      function Be(e, t) {
        const n = _e(e.theme)
        return Object.keys(e)
          .map((r) => ze(e, t, r, n))
          .reduce(Oe, {})
      }
      function Ie(e) {
        return Be(e, Te)
      }
      function Re(e) {
        return Be(e, Ce)
      }
      function We(e) {
        return Be(e, Me)
      }
      ;(Ie.propTypes = {}),
        (Ie.filterProps = Te),
        (Re.propTypes = {}),
        (Re.filterProps = Ce),
        (We.propTypes = {}),
        (We.filterProps = Me)
      const Ne = ['breakpoints', 'palette', 'spacing', 'shape']
      var Fe = function (e = {}, ...t) {
        const {
            breakpoints: n = {},
            palette: r = {},
            spacing: a,
            shape: i = {},
          } = e,
          c = ge(e, Ne),
          s = ve(n),
          u = (function (e = 8) {
            if (e.mui) return e
            const t = _e({ spacing: e }),
              n = (...e) =>
                (0 === e.length ? [1] : e)
                  .map((e) => {
                    const n = t(e)
                    return 'number' === typeof n ? `${n}px` : n
                  })
                  .join(' ')
            return (n.mui = !0), n
          })(a)
        let f = be(
          {
            breakpoints: s,
            direction: 'ltr',
            components: {},
            palette: o({ mode: 'light' }, r),
            spacing: u,
            shape: o({}, ke, i),
          },
          c
        )
        return (f = t.reduce((e, t) => be(e, t), f)), f
      }
      var He = function (e = null) {
        const t = s()
        return t && ((n = t), 0 !== Object.keys(n).length) ? t : e
        var n
      }
      const Le = Fe()
      var Xe = function (e = Le) {
        return He(e)
      }
      function De(e) {
        const t = Xe()
        return (0, r.jsx)(he.Provider, {
          value: 'object' === typeof t ? t : {},
          children: e.children,
        })
      }
      var Ye = function (e) {
        const { children: t, theme: n } = e
        return (0, r.jsx)(f, {
          theme: n,
          children: (0, r.jsx)(De, { children: t }),
        })
      }
      n(6774)
      function qe(e, t) {
        return o(
          {
            toolbar: {
              minHeight: 56,
              [`${e.up('xs')} and (orientation: landscape)`]: { minHeight: 48 },
              [e.up('sm')]: { minHeight: 64 },
            },
          },
          t
        )
      }
      function Ue(e) {
        let t = 'https://mui.com/production-error/?code=' + e
        for (let n = 1; n < arguments.length; n += 1)
          t += '&args[]=' + encodeURIComponent(arguments[n])
        return (
          'Minified MUI error #' + e + '; visit ' + t + ' for the full message.'
        )
      }
      function Ve(e, t = 0, n = 1) {
        return Math.min(Math.max(t, e), n)
      }
      function Je(e) {
        if (e.type) return e
        if ('#' === e.charAt(0))
          return Je(
            (function (e) {
              e = e.slice(1)
              const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, 'g')
              let n = e.match(t)
              return (
                n && 1 === n[0].length && (n = n.map((e) => e + e)),
                n
                  ? `rgb${4 === n.length ? 'a' : ''}(${n
                      .map((e, t) =>
                        t < 3
                          ? parseInt(e, 16)
                          : Math.round((parseInt(e, 16) / 255) * 1e3) / 1e3
                      )
                      .join(', ')})`
                  : ''
              )
            })(e)
          )
        const t = e.indexOf('('),
          n = e.substring(0, t)
        if (-1 === ['rgb', 'rgba', 'hsl', 'hsla', 'color'].indexOf(n))
          throw new Error(Ue(9, e))
        let r,
          a = e.substring(t + 1, e.length - 1)
        if ('color' === n) {
          if (
            ((a = a.split(' ')),
            (r = a.shift()),
            4 === a.length && '/' === a[3].charAt(0) && (a[3] = a[3].slice(1)),
            -1 ===
              [
                'srgb',
                'display-p3',
                'a98-rgb',
                'prophoto-rgb',
                'rec-2020',
              ].indexOf(r))
          )
            throw new Error(Ue(10, r))
        } else a = a.split(',')
        return (
          (a = a.map((e) => parseFloat(e))),
          { type: n, values: a, colorSpace: r }
        )
      }
      function Ge(e) {
        const { type: t, colorSpace: n } = e
        let { values: r } = e
        return (
          -1 !== t.indexOf('rgb')
            ? (r = r.map((e, t) => (t < 3 ? parseInt(e, 10) : e)))
            : -1 !== t.indexOf('hsl') &&
              ((r[1] = `${r[1]}%`), (r[2] = `${r[2]}%`)),
          (r =
            -1 !== t.indexOf('color')
              ? `${n} ${r.join(' ')}`
              : `${r.join(', ')}`),
          `${t}(${r})`
        )
      }
      function Ke(e) {
        let t =
          'hsl' === (e = Je(e)).type
            ? Je(
                (function (e) {
                  e = Je(e)
                  const { values: t } = e,
                    n = t[0],
                    r = t[1] / 100,
                    a = t[2] / 100,
                    i = r * Math.min(a, 1 - a),
                    o = (e, t = (e + n / 30) % 12) =>
                      a - i * Math.max(Math.min(t - 3, 9 - t, 1), -1)
                  let c = 'rgb'
                  const s = [
                    Math.round(255 * o(0)),
                    Math.round(255 * o(8)),
                    Math.round(255 * o(4)),
                  ]
                  return (
                    'hsla' === e.type && ((c += 'a'), s.push(t[3])),
                    Ge({ type: c, values: s })
                  )
                })(e)
              ).values
            : e.values
        return (
          (t = t.map(
            (t) => (
              'color' !== e.type && (t /= 255),
              t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4
            )
          )),
          Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
        )
      }
      function Qe(e, t) {
        if (((e = Je(e)), (t = Ve(t)), -1 !== e.type.indexOf('hsl')))
          e.values[2] *= 1 - t
        else if (-1 !== e.type.indexOf('rgb') || -1 !== e.type.indexOf('color'))
          for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t
        return Ge(e)
      }
      function Ze(e, t) {
        if (((e = Je(e)), (t = Ve(t)), -1 !== e.type.indexOf('hsl')))
          e.values[2] += (100 - e.values[2]) * t
        else if (-1 !== e.type.indexOf('rgb'))
          for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t
        else if (-1 !== e.type.indexOf('color'))
          for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t
        return Ge(e)
      }
      var et = { black: '#000', white: '#fff' }
      var tt = {
        50: '#fafafa',
        100: '#f5f5f5',
        200: '#eeeeee',
        300: '#e0e0e0',
        400: '#bdbdbd',
        500: '#9e9e9e',
        600: '#757575',
        700: '#616161',
        800: '#424242',
        900: '#212121',
        A100: '#f5f5f5',
        A200: '#eeeeee',
        A400: '#bdbdbd',
        A700: '#616161',
      }
      var nt = {
        50: '#f3e5f5',
        100: '#e1bee7',
        200: '#ce93d8',
        300: '#ba68c8',
        400: '#ab47bc',
        500: '#9c27b0',
        600: '#8e24aa',
        700: '#7b1fa2',
        800: '#6a1b9a',
        900: '#4a148c',
        A100: '#ea80fc',
        A200: '#e040fb',
        A400: '#d500f9',
        A700: '#aa00ff',
      }
      var rt = {
        50: '#ffebee',
        100: '#ffcdd2',
        200: '#ef9a9a',
        300: '#e57373',
        400: '#ef5350',
        500: '#f44336',
        600: '#e53935',
        700: '#d32f2f',
        800: '#c62828',
        900: '#b71c1c',
        A100: '#ff8a80',
        A200: '#ff5252',
        A400: '#ff1744',
        A700: '#d50000',
      }
      var at = {
        50: '#fff3e0',
        100: '#ffe0b2',
        200: '#ffcc80',
        300: '#ffb74d',
        400: '#ffa726',
        500: '#ff9800',
        600: '#fb8c00',
        700: '#f57c00',
        800: '#ef6c00',
        900: '#e65100',
        A100: '#ffd180',
        A200: '#ffab40',
        A400: '#ff9100',
        A700: '#ff6d00',
      }
      var it = {
        50: '#e3f2fd',
        100: '#bbdefb',
        200: '#90caf9',
        300: '#64b5f6',
        400: '#42a5f5',
        500: '#2196f3',
        600: '#1e88e5',
        700: '#1976d2',
        800: '#1565c0',
        900: '#0d47a1',
        A100: '#82b1ff',
        A200: '#448aff',
        A400: '#2979ff',
        A700: '#2962ff',
      }
      var ot = {
        50: '#e1f5fe',
        100: '#b3e5fc',
        200: '#81d4fa',
        300: '#4fc3f7',
        400: '#29b6f6',
        500: '#03a9f4',
        600: '#039be5',
        700: '#0288d1',
        800: '#0277bd',
        900: '#01579b',
        A100: '#80d8ff',
        A200: '#40c4ff',
        A400: '#00b0ff',
        A700: '#0091ea',
      }
      var ct = {
        50: '#e8f5e9',
        100: '#c8e6c9',
        200: '#a5d6a7',
        300: '#81c784',
        400: '#66bb6a',
        500: '#4caf50',
        600: '#43a047',
        700: '#388e3c',
        800: '#2e7d32',
        900: '#1b5e20',
        A100: '#b9f6ca',
        A200: '#69f0ae',
        A400: '#00e676',
        A700: '#00c853',
      }
      const st = ['mode', 'contrastThreshold', 'tonalOffset'],
        ut = {
          text: {
            primary: 'rgba(0, 0, 0, 0.87)',
            secondary: 'rgba(0, 0, 0, 0.6)',
            disabled: 'rgba(0, 0, 0, 0.38)',
          },
          divider: 'rgba(0, 0, 0, 0.12)',
          background: { paper: et.white, default: et.white },
          action: {
            active: 'rgba(0, 0, 0, 0.54)',
            hover: 'rgba(0, 0, 0, 0.04)',
            hoverOpacity: 0.04,
            selected: 'rgba(0, 0, 0, 0.08)',
            selectedOpacity: 0.08,
            disabled: 'rgba(0, 0, 0, 0.26)',
            disabledBackground: 'rgba(0, 0, 0, 0.12)',
            disabledOpacity: 0.38,
            focus: 'rgba(0, 0, 0, 0.12)',
            focusOpacity: 0.12,
            activatedOpacity: 0.12,
          },
        },
        ft = {
          text: {
            primary: et.white,
            secondary: 'rgba(255, 255, 255, 0.7)',
            disabled: 'rgba(255, 255, 255, 0.5)',
            icon: 'rgba(255, 255, 255, 0.5)',
          },
          divider: 'rgba(255, 255, 255, 0.12)',
          background: { paper: '#121212', default: '#121212' },
          action: {
            active: et.white,
            hover: 'rgba(255, 255, 255, 0.08)',
            hoverOpacity: 0.08,
            selected: 'rgba(255, 255, 255, 0.16)',
            selectedOpacity: 0.16,
            disabled: 'rgba(255, 255, 255, 0.3)',
            disabledBackground: 'rgba(255, 255, 255, 0.12)',
            disabledOpacity: 0.38,
            focus: 'rgba(255, 255, 255, 0.12)',
            focusOpacity: 0.12,
            activatedOpacity: 0.24,
          },
        }
      function lt(e, t, n, r) {
        const a = r.light || r,
          i = r.dark || 1.5 * r
        e[t] ||
          (e.hasOwnProperty(n)
            ? (e[t] = e[n])
            : 'light' === t
            ? (e.light = Ze(e.main, a))
            : 'dark' === t && (e.dark = Qe(e.main, i)))
      }
      function dt(e) {
        const {
            mode: t = 'light',
            contrastThreshold: n = 3,
            tonalOffset: r = 0.2,
          } = e,
          a = ge(e, st),
          i =
            e.primary ||
            (function (e = 'light') {
              return 'dark' === e
                ? { main: it[200], light: it[50], dark: it[400] }
                : { main: it[700], light: it[400], dark: it[800] }
            })(t),
          c =
            e.secondary ||
            (function (e = 'light') {
              return 'dark' === e
                ? { main: nt[200], light: nt[50], dark: nt[400] }
                : { main: nt[500], light: nt[300], dark: nt[700] }
            })(t),
          s =
            e.error ||
            (function (e = 'light') {
              return 'dark' === e
                ? { main: rt[500], light: rt[300], dark: rt[700] }
                : { main: rt[700], light: rt[400], dark: rt[800] }
            })(t),
          u =
            e.info ||
            (function (e = 'light') {
              return 'dark' === e
                ? { main: ot[400], light: ot[300], dark: ot[700] }
                : { main: ot[700], light: ot[500], dark: ot[900] }
            })(t),
          f =
            e.success ||
            (function (e = 'light') {
              return 'dark' === e
                ? { main: ct[400], light: ct[300], dark: ct[700] }
                : { main: ct[800], light: ct[500], dark: ct[900] }
            })(t),
          l =
            e.warning ||
            (function (e = 'light') {
              return 'dark' === e
                ? { main: at[400], light: at[300], dark: at[700] }
                : { main: '#ed6c02', light: at[500], dark: at[900] }
            })(t)
        function d(e) {
          const t =
            (function (e, t) {
              const n = Ke(e),
                r = Ke(t)
              return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05)
            })(e, ft.text.primary) >= n
              ? ft.text.primary
              : ut.text.primary
          return t
        }
        const p = ({
            color: e,
            name: t,
            mainShade: n = 500,
            lightShade: a = 300,
            darkShade: i = 700,
          }) => {
            if (
              (!(e = o({}, e)).main && e[n] && (e.main = e[n]),
              !e.hasOwnProperty('main'))
            )
              throw new Error(Ue(11, t ? ` (${t})` : '', n))
            if ('string' !== typeof e.main)
              throw new Error(
                Ue(12, t ? ` (${t})` : '', JSON.stringify(e.main))
              )
            return (
              lt(e, 'light', a, r),
              lt(e, 'dark', i, r),
              e.contrastText || (e.contrastText = d(e.main)),
              e
            )
          },
          h = { dark: ft, light: ut }
        return be(
          o(
            {
              common: o({}, et),
              mode: t,
              primary: p({ color: i, name: 'primary' }),
              secondary: p({
                color: c,
                name: 'secondary',
                mainShade: 'A400',
                lightShade: 'A200',
                darkShade: 'A700',
              }),
              error: p({ color: s, name: 'error' }),
              warning: p({ color: l, name: 'warning' }),
              info: p({ color: u, name: 'info' }),
              success: p({ color: f, name: 'success' }),
              grey: tt,
              contrastThreshold: n,
              getContrastText: d,
              augmentColor: p,
              tonalOffset: r,
            },
            h[t]
          ),
          a
        )
      }
      const pt = [
        'fontFamily',
        'fontSize',
        'fontWeightLight',
        'fontWeightRegular',
        'fontWeightMedium',
        'fontWeightBold',
        'htmlFontSize',
        'allVariants',
        'pxToRem',
      ]
      const ht = { textTransform: 'uppercase' },
        gt = '"Roboto", "Helvetica", "Arial", sans-serif'
      function mt(e, t) {
        const n = 'function' === typeof t ? t(e) : t,
          {
            fontFamily: r = gt,
            fontSize: a = 14,
            fontWeightLight: i = 300,
            fontWeightRegular: c = 400,
            fontWeightMedium: s = 500,
            fontWeightBold: u = 700,
            htmlFontSize: f = 16,
            allVariants: l,
            pxToRem: d,
          } = n,
          p = ge(n, pt)
        const h = a / 14,
          g = d || ((e) => (e / f) * h + 'rem'),
          m = (e, t, n, a, i) => {
            return o(
              { fontFamily: r, fontWeight: e, fontSize: g(t), lineHeight: n },
              r === gt
                ? {
                    letterSpacing:
                      ((c = a / t), Math.round(1e5 * c) / 1e5) + 'em',
                  }
                : {},
              i,
              l
            )
            var c
          },
          b = {
            h1: m(i, 96, 1.167, -1.5),
            h2: m(i, 60, 1.2, -0.5),
            h3: m(c, 48, 1.167, 0),
            h4: m(c, 34, 1.235, 0.25),
            h5: m(c, 24, 1.334, 0),
            h6: m(s, 20, 1.6, 0.15),
            subtitle1: m(c, 16, 1.75, 0.15),
            subtitle2: m(s, 14, 1.57, 0.1),
            body1: m(c, 16, 1.5, 0.15),
            body2: m(c, 14, 1.43, 0.15),
            button: m(s, 14, 1.75, 0.4, ht),
            caption: m(c, 12, 1.66, 0.4),
            overline: m(c, 12, 2.66, 1, ht),
          }
        return be(
          o(
            {
              htmlFontSize: f,
              pxToRem: g,
              fontFamily: r,
              fontSize: a,
              fontWeightLight: i,
              fontWeightRegular: c,
              fontWeightMedium: s,
              fontWeightBold: u,
            },
            b
          ),
          p,
          { clone: !1 }
        )
      }
      function bt(...e) {
        return [
          `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,0.2)`,
          `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,0.14)`,
          `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,0.12)`,
        ].join(',')
      }
      var yt = [
        'none',
        bt(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
        bt(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
        bt(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
        bt(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
        bt(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
        bt(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
        bt(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
        bt(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
        bt(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
        bt(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
        bt(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
        bt(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
        bt(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
        bt(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
        bt(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
        bt(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
        bt(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
        bt(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
        bt(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
        bt(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
        bt(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
        bt(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
        bt(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
        bt(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
      ]
      const vt = ['duration', 'easing', 'delay'],
        kt = {
          easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
          easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
          easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
          sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
        },
        xt = {
          shortest: 150,
          shorter: 200,
          short: 250,
          standard: 300,
          complex: 375,
          enteringScreen: 225,
          leavingScreen: 195,
        }
      function wt(e) {
        return `${Math.round(e)}ms`
      }
      function $t(e) {
        if (!e) return 0
        const t = e / 36
        return Math.round(10 * (4 + 15 * t ** 0.25 + t / 5))
      }
      function Ot(e) {
        const t = o({}, kt, e.easing),
          n = o({}, xt, e.duration)
        return o(
          {
            getAutoHeightDuration: $t,
            create: (e = ['all'], r = {}) => {
              const {
                duration: a = n.standard,
                easing: i = t.easeInOut,
                delay: o = 0,
              } = r
              ge(r, vt)
              return (Array.isArray(e) ? e : [e])
                .map(
                  (e) =>
                    `${e} ${'string' === typeof a ? a : wt(a)} ${i} ${
                      'string' === typeof o ? o : wt(o)
                    }`
                )
                .join(',')
            },
          },
          e,
          { easing: t, duration: n }
        )
      }
      var At = {
        mobileStepper: 1e3,
        fab: 1050,
        speedDial: 1050,
        appBar: 1100,
        drawer: 1200,
        modal: 1300,
        snackbar: 1400,
        tooltip: 1500,
      }
      const St = [
        'breakpoints',
        'mixins',
        'spacing',
        'palette',
        'transitions',
        'typography',
        'shape',
      ]
      function jt(e = {}, ...t) {
        const {
            mixins: n = {},
            palette: r = {},
            transitions: a = {},
            typography: i = {},
          } = e,
          c = ge(e, St),
          s = dt(r),
          u = Fe(e)
        let f = be(u, {
          mixins: qe(u.breakpoints, n),
          palette: s,
          shadows: yt.slice(),
          typography: mt(s, i),
          transitions: Ot(a),
          zIndex: o({}, At),
        })
        return (f = be(f, c)), (f = t.reduce((e, t) => be(e, t), f)), f
      }
      var Et = {
          paper: '#F9F9F9',
          primary: { main: '#fff', dark: '#e5e5e5' },
          secondary: { main: '#212121', dark: '#3A3A3A' },
          error: { main: '#b22222', dark: '#8b0000' },
          fg: { main: '#fff', dark: 'rgba(55, 65, 81, 1)' },
          breakpoints: { xs: 0, mb: 350, sm: 600, md: 960, lg: 1280, xl: 1920 },
        },
        Tt = jt({
          palette: {
            primary: Et.primary,
            secondary: Et.secondary,
            background: { paper: Et.paper },
            text: { primary: Et.fg.main, secondary: Et.fg.dark },
            error: Et.error,
          },
          breakpoints: { values: Et.breakpoints },
        }),
        Ct = a.createContext(),
        Mt = Ct.Provider,
        _t = (Ct.Consumer, n(902))
      function Pt(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        )
      }
      function zt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n)
          'function' === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              })
            )),
            r.forEach(function (t) {
              Pt(e, t, n[t])
            })
        }
        return e
      }
      var Bt = function (e) {
        var t = e.Component,
          n = e.pageProps
        return (
          (0, a.useEffect)(function () {
            var e,
              t = document.querySelector('#jss-server-side')
            t &&
              (null === (e = t.parentElement) ||
                void 0 === e ||
                e.removeChild(t))
          }, []),
          (0, r.jsx)(Mt, {
            value: { prefix: _t.O },
            children: (0, r.jsx)(Ye, {
              theme: Tt,
              children: (0, r.jsx)(t, zt({}, n)),
            }),
          })
        )
      }
    },
    6774: function () {},
  },
  function (e) {
    var t = function (t) {
      return e((e.s = t))
    }
    e.O(0, [774, 179], function () {
      return t(6840), t(880)
    })
    var n = e.O()
    _N_E = n
  },
])
