(this["webpackJsonproll-a-dice"]=this["webpackJsonproll-a-dice"]||[]).push([[8],{685:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var n=a(686),c=a.n(n),r=a(689),i=a(54),u=a(23),s=a(33),o=a(278),l=c()({}),d=Object(i.a)(),h=Object(r.connectedRouterRedirect)({redirectPath:u.a.HOME_PATH,AuthenticatingComponent:o.a,wrapperDisplayName:"UserIsAuthenticated",authenticatedSelector:s.a.isAuthenticated,authenticatingSelector:s.a.authenticatingSelector,redirectAction:function(e){return function(t){d.push(e),t({type:"UNAUTHED_REDIRECT",payload:{message:"User is not authenticated."}})}}});Object(r.connectedRouterRedirect)({AuthenticatingComponent:o.a,wrapperDisplayName:"UserIsNotAuthenticated",allowRedirectBack:!1,authenticatedSelector:function(e){return e.firebase.auth.isEmpty},authenticatingSelector:function(e){var t=e.firebase,a=t.auth,n=t.isInitializing;return!a.isLoaded||n},redirectPath:function(e,t){return l.getRedirectQueryParam(t)||u.a.ROOMS_PATH},redirectAction:function(e){return function(t){d.push(e),t({type:"AUTHED_REDIRECT",payload:{message:"User is not authenticated."}})}}})},690:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(0),c=a.n(n).a.lazy((function(){return a.e(6).then(a.bind(null,698))}))},781:function(e,t,a){"use strict";a.r(t);var n=a(22),c=a(81),r=a(692),i=a(685),u=Object(n.d)(Object(r.a)("EnhancedChatList"),c.g,i.a),s=a(0),o=a.n(s),l=a(647),d=a(605),h=a(11),f=a(266),m=a(181),p=a(690),E=a(280),b=a(154),g=Object(d.a)((function(e){return{cards:{marginBottom:"16px"}}}));t.default=u((function(e){var t=e.match,a=Object(h.useDispatch)(),n=Object(h.useSelector)(b.a.match);Object(s.useEffect)((function(){JSON.stringify(t)!==JSON.stringify(n)&&a(E.a.matchChange(t))}));var c=g(),r=Object(h.useSelector)(m.a.selectedChat);return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.a,{in:!0},o.a.createElement("section",{className:c.cards},o.a.createElement(f.a,null))),!!r&&o.a.createElement("section",{className:c.cards},o.a.createElement(p.a,null)))}))}}]);
//# sourceMappingURL=8.e56679b8.chunk.js.map