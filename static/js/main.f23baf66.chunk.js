(this["webpackJsonproll-a-dice"]=this["webpackJsonproll-a-dice"]||[]).push([[2],{119:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n={match:function(e){return e.location.match}}},147:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n={selectedChat:function(e){return e.chats.selectedChat},profilesUidFromSelectedChat:function(e){var t,a,n;return e.chats.selectedChat&&(null===(t=e.firestore.data)||void 0===t||null===(a=t.userChats)||void 0===a||null===(n=a[e.chats.selectedChat])||void 0===n?void 0:n.players)||[]}}},15:function(e,t,a){"use strict";var n;a.d(t,"a",(function(){return n})),function(e){e.CHATS_PATH="/chats",e.CHATS_PATH_ID="/chats/:chatId",e.HOME_PATH="/",e.ROOM_CREATE_PATH="/rooms/create",e.ROOM_PATH="/room",e.ROOMS_PATH="/rooms",e.ROOMS_PATH_ID="/room/:roomId"}(n||(n={}))},152:function(e,t,a){"use strict";var n=a(325),r=a(48),o=a(25),c=a(166),i=a(18),l=a(613),s=a(221),u=a.n(s),m=a(163),d={selectedChat:null},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.a.SELECTED:return Object(i.a)({},e,{selectedChat:t.payload});default:return e}},f=a(165),h={match:{params:{},isExact:!1,path:"",url:""}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f.a.MATCH_CHANGE:return Object(i.a)({},e,{match:t.payload});default:return e}},g=a(96),E={selectedRoom:null,drawerOpened:!0,chatOpened:!0,playersOpened:!0,diceRolling:!1},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g.a.SELECTED:return Object(i.a)({},e,{selectedRoom:t.payload});case g.a.SET_DRAWER_OPEN_VALUE:return Object(i.a)({},e,{drawerOpened:t.payload});case g.a.SET_CHAT_OPEN_VALUE:return Object(i.a)({},e,{chatOpened:t.payload});case g.a.SET_PLAYERS_OPEN_VALUE:return Object(i.a)({},e,{playersOpened:t.payload});case g.a.SET_DICE_ROLLING:return Object(i.a)({},e,{diceRolling:t.payload});default:return e}};Object(r.c)({firebase:o.firebaseReducer,firestore:u.a});a.d(t,"a",(function(){return O}));var O=function(e){var t=[];if(window&&window.location&&"localhost"===window.location.hostname){var a=window.__REDUX_DEVTOOLS_EXTENSION__;"function"===typeof a&&t.push(a())}var s=[n.a.withExtraArgument({getFirebase:o.getFirebase,getFirestore:c.getFirestore})];0;return Object(r.e)(Object(r.c)(Object(i.a)({firebase:o.firebaseReducer,firestore:u.a,chats:p,rooms:v,location:b,form:l.a},m)),e,r.d.apply(void 0,[r.a.apply(void 0,s)].concat(t)));var m}(window.___INITIAL_STATE__||{firebase:{authError:null}})},162:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(151),r=a(163),o={setSelectedChat:function(e){return Object(n.action)(r.a.SELECTED,e)}}},163:function(e,t,a){"use strict";var n;a.d(t,"a",(function(){return n})),function(e){e.SELECTED="@@chats/SELECTED"}(n||(n={}))},165:function(e,t,a){"use strict";var n;a.d(t,"a",(function(){return n})),function(e){e.MATCH_CHANGE="@@location/MATCH_CHANGE"}(n||(n={}))},219:function(e,t,a){"use strict";var n=a(592),r=a(594),o=a(223),c=a(0),i=a.n(c),l=a(297),s=a.n(l),u=a(598),m=a(593),d=a(549),p=a(5),f=a(588),h=a(11),b=a(536),g=a(596),E=a(614),v=a(597),O=a(590),y=a(295),S=a(296);var j,C=i.a.memo(Object(p.a)((function(e){return Object(d.a)({root:{width:"100%",backgroundColor:e.palette.background.paper,height:"20vh",overflowY:"scroll"},item:{cursor:"pointer"}})}))((function(e){var t=e.classes,a=e.chats,n=e.onChatClick,r=e.selectedChat;return i.a.createElement(O.a,{className:t.root},Object.keys(a).map((function(e,o){return i.a.createElement(f.a,{key:e,in:!0,timeout:1e3*o+300},i.a.createElement(b.a,{onClick:function(){return n(e)},selected:e===r,className:t.item,button:!0,dense:!0,alignItems:"flex-start"},i.a.createElement(g.a,null,i.a.createElement(E.a,null,Object(y.a)(a[e].roomName||"No name"))),i.a.createElement(v.a,{primary:a[e].roomName||"No name",secondary:Object(S.a)(a[e].createdAt)})))})))}))),A=a(162),R=a(147),x=a(76);a.d(t,"b",(function(){return j})),a.d(t,"a",(function(){return w})),function(e){e.EMBEDDED="EMBEDDED",e.CARD="CARD"}(j||(j={}));var w=Object(p.a)((function(e){return Object(d.a)({paper:{maxWidth:936,margin:"auto",overflow:"hidden"},searchBar:{borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},searchInput:{fontSize:e.typography.fontSize},block:{display:"block"},addUser:{marginRight:e.spacing(1)},contentWrapper:{margin:"16px 16px"}})}))((function(e){var t=e.classes,a=e.showSearchBar,l=void 0===a||a,d=e.viewType,p=void 0===d?j.CARD:d,b=Object(h.useSelector)(x.a.userChats)||{},g=Object(h.useSelector)(R.a.selectedChat),E=Object(h.useDispatch)();Object(c.useEffect)((function(){return function(){E(A.a.setSelectedChat(null))}}),[]),Object(c.useEffect)((function(){!g&&Object.keys(b||{}).length&&E(A.a.setSelectedChat(Object.keys(b)[0]))}),[!!g,0===Object.keys(b||{}).length]);var v=function(e){E(A.a.setSelectedChat(e))};return i.a.createElement(f.a,{in:!0},p===j.CARD?i.a.createElement(o.a,{className:t.paper},l&&i.a.createElement(n.a,{className:t.searchBar,position:"static",color:"default",elevation:0},i.a.createElement(m.a,null,i.a.createElement(r.a,{container:!0,spacing:2,alignItems:"center"},i.a.createElement(r.a,{item:!0},i.a.createElement(s.a,{className:t.block,color:"inherit"})),i.a.createElement(r.a,{item:!0,xs:!0},i.a.createElement(u.a,{fullWidth:!0,placeholder:"Search chat by room name or players",InputProps:{disableUnderline:!0,className:t.searchInput}}))))),i.a.createElement("div",{className:t.contentWrapper},i.a.createElement(C,{chats:b,onChatClick:v,selectedChat:g}))):i.a.createElement(C,{chats:b,onChatClick:v,selectedChat:g}))}))},228:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(0),r=a.n(n),o=a(549),c=a(5);var i=r.a.memo(Object(c.a)((function(e){return Object(o.a)({root:{display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"flex-start",height:"100%",width:"100%",backgroundColor:e.palette.background.default,position:"absolute",zIndex:1e4,left:0,top:0},progress:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"},svg:{width:"15vw",height:"15vh"}})}))((function(e){var t=e.classes,a=e.style;return r.a.createElement("div",{className:t.root,style:a},r.a.createElement("div",{className:t.progress},r.a.createElement("img",{className:t.svg,src:"".concat("/roll-a-dice","/assets/svg/loader-knot.svg"),alt:"Roll a Dice..."})))})))},229:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(151),r=a(165),o={matchChange:function(e){return Object(n.action)(r.a.MATCH_CHANGE,e)}}},293:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(99),r=a(76),o=a(147),c={getAllNeededPlayersUid:function(e){var t,a=(null===(t=r.a.selectedRoom(e))||void 0===t?void 0:t.players)||[],c=o.a.profilesUidFromSelectedChat(e)||[];return[].concat(Object(n.a)(c),Object(n.a)(a)).filter((function(e,t,a){return a.indexOf(e)===t}))},isGameMasterOfSelectedRoom:function(e){return(e.firestore.data.selectedRoom?e.firestore.data.selectedRoom.gameMaster.uid:"unknown")===e.firebase.profile.uid}}},295:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=function(e){return e.split(" ").map((function(e){return e.charAt(0)})).join("").substring(0,2).toUpperCase()}},296:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(319),r=a.n(n),o=function(e){return r()(e).format("dddd, MMMM D YYYY")}},327:function(e){e.exports=JSON.parse('{"a":"1.0.0"}')},33:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n={isRequesting:function(e){return!Object.values(e.firestore.status.requesting).every((function(e){return!e}))},userProfile:function(e){return e.firebase.auth},authenticatingSelector:function(e){var t=e.firebase,a=t.auth,n=t.isInitializing;return!a.isLoaded||n},authenticatedSelector:function(e){var t=e.firebase.auth;return!t.isEmpty&&!!t.uid},userConnected:function(e){return e.firebase.data.connected}}},341:function(e,t,a){e.exports=a(533)},346:function(e,t,a){},49:function(e,t,a){"use strict";var n;a.d(t,"a",(function(){return n})),function(e){e.CHATS="chats",e.USERS="users",e.ROOMS="rooms"}(n||(n={}))},497:function(e,t,a){},533:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),c=a.n(o),i=(a(346),a(595)),l=a(328),s=a(608),u=a(11),m=a(25),d=a(74),p=a(99),f=a(49),h=function(e){var t=e&&0!==(null===e||void 0===e?void 0:e.length)?e:"unknown";return{collection:f.a.CHATS,where:[["players","array-contains",t]],storeAs:"userChats"}},b=a(33),g={getProfilesByUid:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{collection:"users",where:[["uid","in",e]],storeAs:"usersProfiles"}},connected:{path:".info/connected",storeAs:"connected"}},E=function(e){return{collection:f.a.ROOMS,where:[["gameMaster.uid","==",e]],storeAs:"userRoomsAsGameMaster"}},v=function(e){return{collection:f.a.ROOMS,where:[["players","array-contains",e]],storeAs:"userRoomsAsPlayer"}},O=function(e){var t=e.length?e:"unknown";return{collection:f.a.ROOMS,doc:t,storeAs:"selectedRoom"}},y=a(84),S=a(293);function j(){var e=Object(m.useFirestore)(),t=Object(m.useFirebase)(),a=Object(u.useSelector)(b.a.userProfile),o=Object(u.useSelector)(y.a.selectedRoomUid),c=Object(p.a)(Object(u.useSelector)(S.a.getAllNeededPlayersUid)),i=Object(u.useSelector)(b.a.userConnected);function l(t){e.doc("".concat(f.a.USERS,"/").concat(a.uid)).update({connected:t})}return Object(n.useEffect)((function(){if(!0===i&&a.uid)return l(i),t.ref("".concat(f.a.USERS,"/").concat(a.uid)).onDisconnect().update({connected:!1}),function(){l(!1)}}),[i,a.uid]),Object(m.useFirebaseConnect)([g.connected]),Object(m.useFirestoreConnect)([g.getProfilesByUid(c.length?c:["unknown"]),h(a.uid),E(a.uid||"unknown"),v(a.uid||"unknown"),O(o||"unknown")]),r.a.createElement(r.a.Fragment,null)}function C(e){var t=Object(u.useSelector)(b.a.authenticatedSelector);return r.a.createElement(r.a.Fragment,null,t&&r.a.createElement(j,null),e.children)}var A=a(549),R=a(545),x=a(611),w=a(58),T=a(15),k=r.a.lazy((function(){return Promise.all([a.e(0),a.e(10)]).then(a.bind(null,726))})),_={path:[T.a.CHATS_PATH_ID,T.a.CHATS_PATH],component:k},P=a(118),N=a(609),M=a(607),I=a(117),H=a(5),D=a(544),L=a(610),U=a(592),F=a(594),B=a(612),z=a(534),W=a(318),G=a.n(W),Y=a(593),V=a(614),J=a(329),X=a(591);var q=Object(H.a)((function(e){return Object(A.a)({iconButtonAvatar:{padding:4},avatarSize:{border:"4px solid ".concat(e.palette.primary.main),width:e.spacing(6),height:e.spacing(6)}})}))((function(e){var t=Object(m.useFirebase)(),a=Object(w.f)(),n=Object(u.useSelector)(b.a.userProfile),o=Object(u.useSelector)(b.a.authenticatedSelector),c=r.a.useState(null),i=Object(P.a)(c,2),l=i[0],s=i[1],d=e.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(z.a,{color:"inherit",className:d.iconButtonAvatar,onClick:function(e){s(e.currentTarget)}},r.a.createElement(V.a,{src:n.avatarUrl||n.photoURL,alt:n.displayName,className:d.avatarSize})),r.a.createElement(J.a,{id:"simple-menu",anchorEl:l,keepMounted:!0,open:Boolean(l),onClose:function(){return s(null)}},o?r.a.createElement(X.a,{onClick:function(){t.logout().then((function(){s(null),a.push(T.a.HOME_PATH)}))}},"Logout"):r.a.createElement(X.a,{onClick:function(){t.login({provider:"google",type:"popup"}).then((function(){s(null),a.push(T.a.ROOMS_PATH)})).catch((function(e){return alert(e.message)}))}},"Login with Google")))})),K=a(3);var Q=r.a.memo(Object(H.a)((function(e){return Object(A.a)({ornament:{backgroundImage:"url(".concat("/roll-a-dice","/assets/svg/ornament-knot.svg)"),width:"100%",height:"100%",backgroundRepeatX:"repeat",backgroundRepeatY:"no-repeat",backgroundSize:"contain"},vartical:{backgroundImage:"url(".concat("/roll-a-dice","/assets/svg/ornament-knot-vartical.svg)"),backgroundRepeatX:"no-repeat",backgroundRepeatY:"repeat"}})}))((function(e){var t=e.classes,a=e.vartical;return r.a.createElement("div",{className:Object(K.a)(t.ornament,a&&t.vartical)})})));var Z=r.a.memo(Object(H.a)((function(e){return Object(A.a)({secondaryBar:{zIndex:0},menuButton:{marginLeft:-e.spacing(1)},link:{textDecoration:"none",color:"rgba(255, 255, 255, 0.7)","&:hover":{color:e.palette.common.white}},button:{borderColor:"rgba(255, 255, 255, 0.7)"},ornament:{bottom:"2px",height:"24px",opacity:.2,position:"absolute",zIndex:-1,width:" 100%"},avatar:{marginBottom:"-16px"}})}))((function(e){var t=e.classes,a=e.onDrawerToggle;return r.a.createElement(r.a.Fragment,null,r.a.createElement(U.a,{color:"primary",position:"sticky",elevation:2},r.a.createElement(Y.a,null,r.a.createElement(F.a,{container:!0,spacing:1,alignItems:"center"},r.a.createElement(B.a,{smUp:!0},r.a.createElement(F.a,{item:!0},r.a.createElement(z.a,{color:"inherit","aria-label":"open drawer",onClick:a,className:t.menuButton},r.a.createElement(G.a,null)))),r.a.createElement(F.a,{item:!0,xs:!0}),r.a.createElement(F.a,{item:!0},r.a.createElement("div",{className:t.avatar},r.a.createElement(q,null))))),r.a.createElement("div",{className:t.ornament},r.a.createElement(Q,null))))}))),$=a(537),ee=a(228),te=r.a.memo(Object(H.a)((function(e){return Object(A.a)({container:{opacity:0,visibility:"hidden",transitionDelay:"1300ms",transition:"opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"},visible:{opacity:1,visibility:"visible"}})}))((function(e){var t=e.children,a=e.isAuthenticating,n=void 0===a||a;return r.a.createElement(r.a.Fragment,null,r.a.createElement($.a,{in:n},r.a.createElement(ee.a,null)),t)}))),ae=a(89),ne=a(230),re=a(323),oe=a.n(re),ce=a(606),ie=a(324),le=a.n(ie),se=a(321),ue=a.n(se),me=a(322),de=a.n(me),pe=a(590),fe=a(536),he=a(219),be=a(76),ge=a(119),Ee=a(320),ve=a.n(Ee),Oe=a(601),ye=a(597),Se=a(615),je=a(600),Ce=a(602);var Ae=r.a.memo(Object(H.a)((function(e){return Object(A.a)({item:{paddingTop:1,paddingBottom:1,color:"rgba(255, 255, 255, 0.7)","&:hover,&:focus":{backgroundColor:"rgba(255, 255, 255, 0.08)"}},itemCategoryWrapper:{minHeight:"60px"},itemCategory:{width:"100%",paddingTop:e.spacing(2),paddingBottom:e.spacing(2)},itemCategoryAbsolute:{position:"absolute",top:0},itemActiveItem:{color:e.palette.secondary.main},itemPrimary:{fontSize:"inherit"},itemIcon:{minWidth:"auto",marginRight:e.spacing(2)},expansionPanel:{borderRadius:"0 !important",padding:"0 !important",margin:"0 !important",backgroundColor:e.palette.background.secondary},expansionPanelSummary:{margin:"0 !important",padding:"0 16px 0px 0 !important"},expansionPanelSummaryContainer:{padding:"0 !important",margin:"0 !important"},expandIcon:{color:"rgba(255, 255, 255, 0.7)"},divider:{boxShadow:"0 -1px 0 #404854 inset"}})}))((function(e){var t=e.classes,a=e.children,n=e.icon,o=e.text,c=e.navLink,i=e.active,l=e.expandable,s=e.defaultExpanded,u=function(e){return c?r.a.createElement(d.b,{to:c},e):r.a.createElement(r.a.Fragment,null,e)};return l?r.a.createElement(Se.a,{className:Object(K.a)(t.expansionPanel,t.divider),defaultExpanded:s},r.a.createElement(je.a,{"aria-controls":"additional-actions1-content","aria-label":"Expand",classes:{content:t.expansionPanelSummaryContainer,expandIcon:t.expandIcon},className:t.expansionPanelSummary,expandIcon:r.a.createElement(ve.a,null),id:"additional-actions1-header"},r.a.createElement("div",{className:t.itemCategoryWrapper}),u(r.a.createElement(fe.a,{button:!0,className:Object(K.a)(t.item,t.itemCategory,i&&t.itemActiveItem,t.itemCategoryAbsolute)},n&&r.a.createElement(Oe.a,{className:t.itemIcon},n),o&&r.a.createElement(ye.a,{classes:{primary:t.itemPrimary}},o)))),a&&r.a.createElement(Ce.a,null,a)):u(r.a.createElement(fe.a,{button:!0,className:Object(K.a)(t.item,t.itemCategory,i&&t.itemActiveItem,t.divider)},n&&r.a.createElement(Oe.a,{className:t.itemIcon},n),o&&r.a.createElement(ye.a,{classes:{primary:t.itemPrimary}},o)))}))),Re=a(603),xe=a(604),we=a(605);var Te=Object(H.a)((function(e){return Object(A.a)({cards:{maxWidth:936,width:"100%"},media:{height:140}})}))((function(e){var t=e.classes,a=e.room;return r.a.createElement(Re.a,{className:t.cards},r.a.createElement(xe.a,{className:t.media,image:"".concat("/roll-a-dice","/assets/images/fantasy-wallpapers.jpg"),title:"Room image"}),r.a.createElement(we.a,null,r.a.createElement(I.a,{gutterBottom:!0,variant:"h5",component:"h2"},a.roomName),r.a.createElement(I.a,{variant:"body2",color:"textSecondary",component:"p"},a.description),r.a.createElement("p",null,r.a.createElement(I.a,{variant:"caption",color:"textSecondary",component:"span"},"Room Game Master:"),r.a.createElement("br",null),r.a.createElement(I.a,{variant:"subtitle1",color:"textSecondary",component:"span"},a.gameMaster.displayName))))}));var ke=Object(H.a)((function(e){return Object(A.a)({logo:{fontSize:24,color:e.palette.common.white,"&:hover,&:focus":{backgroundColor:"rgba(255, 255, 255, 0.08)"},backgroundColor:e.palette.background.secondary,boxShadow:"0 -1px 0 #404854 inset",paddingTop:e.spacing(2),paddingBottom:e.spacing(2)}})}))((function(e){var t=e.classes,a=Object(ne.a)(e,["classes"]),n=Object(u.useSelector)(ge.a.match).path,o=Object(u.useSelector)(be.a.selectedRoom),c=Object(u.useSelector)(y.a.drawerOpened);return r.a.createElement(ce.a,Object.assign({open:c,variant:n===T.a.ROOMS_PATH_ID?"persistent":"permanent"},a),r.a.createElement(pe.a,{disablePadding:!0},r.a.createElement(fe.a,{className:t.logo},"Roll a Dice...")),r.a.createElement(Ae,{navLink:T.a.HOME_PATH,icon:r.a.createElement(ue.a,null),text:"Home Page",active:T.a.HOME_PATH===n}),r.a.createElement(Ae,{navLink:T.a.ROOMS_PATH,icon:r.a.createElement(de.a,null),text:"Rooms",expandable:-1===n.indexOf(T.a.ROOMS_PATH),active:n.indexOf(T.a.ROOMS_PATH)>-1},r.a.createElement(r.a.Fragment,null,"List here")),r.a.createElement(Ae,{navLink:T.a.CHATS_PATH,icon:r.a.createElement(oe.a,null),text:"Chats",expandable:-1===n.indexOf(T.a.CHATS_PATH),active:n.indexOf(T.a.CHATS_PATH)>-1},r.a.createElement(he.a,{viewType:he.b.EMBEDDED})),o&&r.a.createElement(Ae,{icon:r.a.createElement(le.a,null),text:"Room Ditails",expandable:!0,active:n.indexOf(T.a.ROOM_PATH)>-1,defaultExpanded:!0},r.a.createElement(Te,{room:o})))})),_e=a(18);var Pe=function(){var e=Object(l.a)({palette:{primary:{light:"#afaf4c",main:"#9b9c20",dark:"#6c6d16"},secondary:{light:"#cba234",main:"#be8b02",dark:"#856101"},background:{default:"#e0e0d3",paper:"#f4f4f2",secondary:"#111b0e"}},typography:{fontFamily:["ringbearermedium","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),h5:{fontWeight:500,fontSize:26,letterSpacing:.5}},shape:{borderRadius:8},props:{MuiTab:{disableRipple:!0}},mixins:{toolbar:{minHeight:48}}});return e=Object(_e.a)({},e,{overrides:{MuiDrawer:{paper:{backgroundColor:"#121b0f"}},MuiButton:{label:{textTransform:"none"},contained:{boxShadow:"none","&:active":{boxShadow:"none"}}},MuiTabs:{root:{marginLeft:e.spacing(1)},indicator:{height:3,borderTopLeftRadius:3,borderTopRightRadius:3,backgroundColor:e.palette.common.white}},MuiTab:{root:Object(ae.a)({textTransform:"none",margin:"0 16px",minWidth:0,padding:0},e.breakpoints.up("md"),{padding:0,minWidth:0})},MuiIconButton:{root:{padding:e.spacing(1)}},MuiTooltip:{tooltip:{borderRadius:4}},MuiDivider:{root:{backgroundColor:"#404854"}},MuiListItemText:{primary:{fontWeight:e.typography.fontWeightMedium}},MuiListItemIcon:{root:{color:"inherit",marginRight:0,"& svg":{fontSize:20}}},MuiAvatar:{root:{width:32,height:32}}}})}(),Ne=(Object(_e.a)({},Pe,{palette:Object(_e.a)({},Pe.palette,{type:"dark"})}),Object(_e.a)({},Pe,{palette:Object(_e.a)({},Pe.palette,{type:"dark"})}),Object(A.a)({drawer:Object(ae.a)({},Pe.breakpoints.up("sm"),{flexShrink:0,width:"100%",maxWidth:320,transition:"max-width 225ms cubic-bezier(0, 0, 0.2, 1) 0ms"})}));var Me=Object(H.a)(Ne)((function(e){var t=e.classes,a=e.mobileOpen,n=Object(u.useSelector)(y.a.drawerOpened);return r.a.createElement("nav",{className:t.drawer,style:{maxWidth:n?320:0}},r.a.createElement(B.a,{smUp:!0,implementation:"js"},r.a.createElement(ke,{PaperProps:{style:{width:320}},variant:"temporary",open:a,onClose:e.handleDrawerToggle})),r.a.createElement(B.a,{xsDown:!0,implementation:"css"},r.a.createElement(ke,{PaperProps:{style:{width:320}}})))}));function Ie(){return r.a.createElement(I.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(M.a,{color:"inherit",href:"mailto:markky21@gmail.com"},"Marcin Mirecki")," ",(new Date).getFullYear(),".")}var He=Object(A.a)({root:{display:"flex",minHeight:"100vh"},lineLoader:{position:"fixed",height:"4px",top:0,left:0,width:"100%",zIndex:1e4,transition:"max-height 0.2s ease;"},app:{flex:1,display:"flex",flexDirection:"column"},main:{flex:1,padding:Pe.spacing(6,4),background:Pe.palette.background.default},footer:{padding:Pe.spacing(1),background:Pe.palette.background.default}});var De=Object(H.a)(He)((function(e){var t=e.classes,a=e.children,n=r.a.useState(!1),o=Object(P.a)(n,2),c=o[0],i=o[1],l=Object(u.useSelector)(b.a.authenticatedSelector),m=Object(u.useSelector)(b.a.authenticatingSelector),d=Object(u.useSelector)(b.a.isRequesting),p=function(){i(!c)};return r.a.createElement(s.a,{theme:Pe},r.a.createElement(te,{isAuthenticating:m},r.a.createElement("div",{className:t.root},r.a.createElement(N.a,null),r.a.createElement(D.a,{in:d,direction:"down"},r.a.createElement(L.a,{className:t.lineLoader})),l&&r.a.createElement(Me,{mobileOpen:c,handleDrawerToggle:p}),r.a.createElement("div",{className:t.app},r.a.createElement(Z,{onDrawerToggle:p}),r.a.createElement("main",{className:t.main},a),r.a.createElement("footer",{className:t.footer},r.a.createElement(Ie,null))))))})),Le=(a(497),a(229));var Ue={path:"/",component:function(e){var t=e.match,a=Object(u.useDispatch)(),o=Object(u.useSelector)(ge.a.match);return Object(n.useEffect)((function(){JSON.stringify(t)!==JSON.stringify(o)&&a(Le.a.matchChange(t))})),r.a.createElement("div",null,"Henlooo")}},Fe=r.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(5),a.e(7)]).then(a.bind(null,719))})),Be={path:[T.a.ROOMS_PATH_ID],component:Fe},ze=r.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(6),a.e(8)]).then(a.bind(null,723))})),We={path:[T.a.ROOM_CREATE_PATH,T.a.ROOMS_PATH],component:ze},Ge=Object(x.a)((function(e){return Object(A.a)({backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}})}));function Ye(){var e=Ge();return r.a.createElement(De,null,r.a.createElement(n.Suspense,{fallback:r.a.createElement(R.a,{className:e.backdrop,open:!0})},r.a.createElement(w.c,null,r.a.createElement(w.a,{exact:!0,path:Ue.path,component:Ue.component}),[We,Be,_].map((function(e,t){return r.a.createElement(w.a,Object.assign({key:"Route-".concat(t)},e))})))))}var Ve=a(114),Je=a.n(Ve),Xe=(a(498),a(500),a(502),a(166)),qe=a(152),Ke={firebase:Je.a,config:{userProfile:"users",useFirestoreForProfile:!0},dispatch:qe.a.dispatch,createFirestoreInstance:Xe.createFirestoreInstance};function Qe(e){var t=Object(i.a)("(prefers-color-scheme: dark)"),a=r.a.useMemo((function(){return Object(l.a)({palette:{type:t?"dark":"light"}})}),[t]);return window.theme=a,r.a.createElement(u.Provider,{store:qe.a},r.a.createElement(m.ReactReduxFirebaseProvider,Ke,r.a.createElement(s.a,{theme:a},r.a.createElement(C,null,r.a.createElement(d.a,null,r.a.createElement(Ye,null))))))}Object(Ve.initializeApp)({apiKey:"AIzaSyA0bXhCXcLJC9FGk3ynZoJP5KJ6CY3sqYY",authDomain:"roll-a-dice-4cba1.firebaseapp.com",databaseURL:"https://roll-a-dice-4cba1.firebaseio.com",projectId:"roll-a-dice-4cba1",storageBucket:"roll-a-dice-4cba1.appspot.com",messagingSenderId:"768622256477",appId:"1:768622256477:web:51a5c9f0ef4030d366c8b4",measurementId:"G-J2M3QQ0M89"}),Object(Ve.firestore)();Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ze=a(327);window.version=Ze.a,window.env="local",c.a.render(r.a.createElement(Qe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},76:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(18),r={userChats:function(e){return e.firestore.data.userChats},getChat:function(e){return function(t){return e&&t.firestore.data.userChats?t.firestore.data.userChats[e]:null}},selectedRoom:function(e){return e.firestore.data.selectedRoom},userRoomsAsGameMaster:function(e){return e.firestore.data.userRoomsAsGameMaster},userRoomsAsPlayer:function(e){return e.firestore.data.userRoomsAsPlayer},allUserRoomsUid:function(e){return Object.keys(Object(n.a)({},e.firestore.data.userRoomsAsGameMaster,{},e.firestore.data.userRoomsAsPlayer))},usersProfiles:function(e){return e.firestore.data.usersProfiles||{}},selectedRoomPlayers:function(e){var t,a=e.firestore.data.usersProfiles||{};return((null===(t=e.firestore.data.selectedRoom)||void 0===t?void 0:t.players)||[]).map((function(e){return a[e]})).filter((function(e){return!!e}))},selectedRoomGameMasterProfile:function(e){var t,a=e.firestore.data.usersProfiles||{},n=null===(t=e.firestore.data.selectedRoom)||void 0===t?void 0:t.gameMaster.uid;return a&&n?a[n]:null}}},84:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n={selectedRoomUid:function(e){return e.rooms.selectedRoom},drawerOpened:function(e){return e.rooms.drawerOpened},chatOpened:function(e){return e.rooms.chatOpened},playersOpened:function(e){return e.rooms.playersOpened},diceRolling:function(e){return e.rooms.diceRolling}}},96:function(e,t,a){"use strict";var n;a.d(t,"a",(function(){return n})),function(e){e.SELECTED="@@rooms/SELECTED",e.SET_DRAWER_OPEN_VALUE="@@rooms/SET_DRAWER_OPEN_VALUE",e.SET_CHAT_OPEN_VALUE="@@rooms/SET_CHAT_OPEN_VALUE",e.SET_PLAYERS_OPEN_VALUE="@@rooms/SET_PLAYERS_OPEN_VALUE",e.SET_DICE_ROLLING="@@rooms/SET_DICE_ROLLING"}(n||(n={}))}},[[341,3,4]]]);
//# sourceMappingURL=main.f23baf66.chunk.js.map