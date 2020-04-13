(this["webpackJsonpreact-redux-firebase-typescript-example"]=this["webpackJsonpreact-redux-firebase-typescript-example"]||[]).push([[1],{101:function(e,t,a){"use strict";var n;a.d(t,"a",(function(){return n})),function(e){e.SELECTED="@@rooms/SELECTED",e.SET_DRAWER_OPEN_VALUE="@@rooms/SET_DRAWER_OPEN_VALUE",e.SET_CHAT_OPEN_VALUE="@@rooms/SET_CHAT_OPEN_VALUE",e.SET_PLAYERS_OPEN_VALUE="@@rooms/SET_PLAYERS_OPEN_VALUE",e.SET_DICE_ROLLING="@@rooms/SET_DICE_ROLLING"}(n||(n={}))},122:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n={match:function(e){return e.location.match}}},150:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n={selectedChat:function(e){return e.chats.selectedChat},profilesUidFromSelectedChat:function(e){var t,a,n;return e.chats.selectedChat&&(null===(t=e.firestore.data)||void 0===t||null===(a=t.userChats)||void 0===a||null===(n=a[e.chats.selectedChat])||void 0===n?void 0:n.players)||[]}}},154:function(e,t,a){"use strict";var n=a(331),r=a(51),o=a(27),c=a(169),i=a(19),l=a(622),s=a(222),u=a.n(s),d=a(166),m={selectedChat:null},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d.a.SELECTED:return Object(i.a)({},e,{selectedChat:t.payload});default:return e}},f=a(168),b={match:{params:{},isExact:!1,path:"",url:""}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f.a.MATCH_CHANGE:return Object(i.a)({},e,{match:t.payload});default:return e}},g=a(101),E={selectedRoom:null,drawerOpened:!0,chatOpened:!0,playersOpened:!0,diceRolling:!1},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g.a.SELECTED:return Object(i.a)({},e,{selectedRoom:t.payload});case g.a.SET_DRAWER_OPEN_VALUE:return Object(i.a)({},e,{drawerOpened:t.payload});case g.a.SET_CHAT_OPEN_VALUE:return Object(i.a)({},e,{chatOpened:t.payload});case g.a.SET_PLAYERS_OPEN_VALUE:return Object(i.a)({},e,{playersOpened:t.payload});case g.a.SET_DICE_ROLLING:return Object(i.a)({},e,{diceRolling:t.payload});default:return e}};Object(r.c)({firebase:o.firebaseReducer,firestore:u.a});a.d(t,"a",(function(){return O}));var O=function(e){var t=[];if(window&&window.location&&"localhost"===window.location.hostname){var a=window.__REDUX_DEVTOOLS_EXTENSION__;"function"===typeof a&&t.push(a())}var s=[n.a.withExtraArgument({getFirebase:o.getFirebase,getFirestore:c.getFirestore})];0;return Object(r.e)(Object(r.c)(Object(i.a)({firebase:o.firebaseReducer,firestore:u.a,chats:p,rooms:v,location:h,form:l.a},d)),e,r.d.apply(void 0,[r.a.apply(void 0,s)].concat(t)));var d}(window.___INITIAL_STATE__||{firebase:{authError:null}})},16:function(e,t,a){"use strict";var n;a.d(t,"a",(function(){return n})),function(e){e.CHATS_PATH="/chats",e.CHATS_PATH_ID="/chats/:chatId",e.HOME_PATH="/",e.ROOM_CREATE_PATH="/rooms/create",e.ROOM_PATH="/room",e.ROOMS_PATH="/rooms",e.ROOMS_PATH_ID="/room/:roomId"}(n||(n={}))},165:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(155),r=a(166),o={setSelectedChat:function(e){return Object(n.action)(r.a.SELECTED,e)}}},166:function(e,t,a){"use strict";var n;a.d(t,"a",(function(){return n})),function(e){e.SELECTED="@@chats/SELECTED"}(n||(n={}))},168:function(e,t,a){"use strict";var n;a.d(t,"a",(function(){return n})),function(e){e.MATCH_CHANGE="@@location/MATCH_CHANGE"}(n||(n={}))},220:function(e,t,a){"use strict";var n=a(601),r=a(603),o=a(224),c=a(0),i=a.n(c),l=a(299),s=a.n(l),u=a(607),d=a(602),m=a(558),p=a(6),f=a(597),b=a(12),h=a(545),g=a(605),E=a(623),v=a(606),O=a(599),y=a(297),S=a(298);var j,C=Object(p.a)((function(e){return Object(m.a)({root:{width:"100%",backgroundColor:e.palette.background.paper,height:"20vh",overflowY:"scroll"},item:{cursor:"pointer"}})}))((function(e){var t=e.classes,a=e.chats,n=e.onChatClick,r=e.selectedChat;return i.a.createElement(O.a,{className:t.root},Object.keys(a).map((function(e,o){return i.a.createElement(f.a,{key:e,in:!0,timeout:1e3*o+300},i.a.createElement(h.a,{onClick:function(){return n(e)},selected:e===r,className:t.item,button:!0,dense:!0,alignItems:"flex-start"},i.a.createElement(g.a,null,i.a.createElement(E.a,null,Object(y.a)(a[e].roomName||"No name"))),i.a.createElement(v.a,{primary:a[e].roomName||"No name",secondary:Object(S.a)(a[e].createdAt)})))})))})),A=a(165),R=a(150),x=a(81);a.d(t,"b",(function(){return j})),a.d(t,"a",(function(){return w})),function(e){e.EMBEDDED="EMBEDDED",e.CARD="CARD"}(j||(j={}));var w=Object(p.a)((function(e){return Object(m.a)({paper:{maxWidth:936,margin:"auto",overflow:"hidden"},searchBar:{borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},searchInput:{fontSize:e.typography.fontSize},block:{display:"block"},addUser:{marginRight:e.spacing(1)},contentWrapper:{margin:"16px 16px"}})}))((function(e){var t=e.classes,a=e.showSearchBar,l=void 0===a||a,m=e.viewType,p=void 0===m?j.CARD:m,h=Object(b.useSelector)(x.a.userChats)||{},g=Object(b.useSelector)(R.a.selectedChat),E=Object(b.useDispatch)();Object(c.useEffect)((function(){return function(){E(A.a.setSelectedChat(null))}}),[]),Object(c.useEffect)((function(){!g&&Object.keys(h||{}).length&&E(A.a.setSelectedChat(Object.keys(h)[0]))}),[!!g,0===Object.keys(h||{}).length]);var v=function(e){E(A.a.setSelectedChat(e))};return i.a.createElement(f.a,{in:!0},p===j.CARD?i.a.createElement(o.a,{className:t.paper},l&&i.a.createElement(n.a,{className:t.searchBar,position:"static",color:"default",elevation:0},i.a.createElement(d.a,null,i.a.createElement(r.a,{container:!0,spacing:2,alignItems:"center"},i.a.createElement(r.a,{item:!0},i.a.createElement(s.a,{className:t.block,color:"inherit"})),i.a.createElement(r.a,{item:!0,xs:!0},i.a.createElement(u.a,{fullWidth:!0,placeholder:"Search chat by room name or players",InputProps:{disableUnderline:!0,className:t.searchInput}}))))),i.a.createElement("div",{className:t.contentWrapper},i.a.createElement(C,{chats:h,onChatClick:v,selectedChat:g}))):i.a.createElement(C,{chats:h,onChatClick:v,selectedChat:g}))}))},230:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(0),r=a.n(n),o=a(558),c=a(6);var i=Object(c.a)((function(e){return Object(o.a)({root:{display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"flex-start",height:"100%",width:"100%",backgroundColor:e.palette.background.default,position:"absolute",zIndex:1e4,left:0,top:0},progress:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"},svg:{width:"15vw",height:"15vh"}})}))((function(e){var t=e.classes,a=e.style;return r.a.createElement("div",{className:t.root,style:a},r.a.createElement("div",{className:t.progress},r.a.createElement("img",{className:t.svg,src:"/assets/svg/loader-knot.svg",alt:"Roll a Dice..."})))}))},231:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(155),r=a(168),o={matchChange:function(e){return Object(n.action)(r.a.MATCH_CHANGE,e)}}},295:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(103),r=a(81),o=a(150),c={getAllNeededPlayersUid:function(e){var t,a=(null===(t=r.a.selectedRoom(e))||void 0===t?void 0:t.players)||[],c=o.a.profilesUidFromSelectedChat(e)||[];return[].concat(Object(n.a)(c),Object(n.a)(a)).filter((function(e,t,a){return a.indexOf(e)===t}))},isGameMasterOfSelectedRoom:function(e){return(e.firestore.data.selectedRoom?e.firestore.data.selectedRoom.gameMaster.uid:"unknown")===e.firebase.profile.uid}}},297:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=function(e){return e.split(" ").map((function(e){return e.charAt(0)})).join("").substring(0,2).toUpperCase()}},298:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(324),r=a.n(n),o=function(e){return r()(e).format("dddd, MMMM D YYYY")}},333:function(e){e.exports=JSON.parse('{"a":"0.1.0"}')},347:function(e,t,a){e.exports=a(542)},352:function(e,t,a){},36:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n={isRequesting:function(e){return!Object.values(e.firestore.status.requesting).every((function(e){return!e}))},userProfile:function(e){return e.firebase.profile},authenticatingSelector:function(e){var t=e.firebase,a=t.auth,n=t.isInitializing;return!a.isLoaded||n},authenticatedSelector:function(e){var t=e.firebase.auth;return!t.isEmpty&&!!t.uid},userConnected:function(e){return e.firebase.data.connected}}},503:function(e,t,a){},52:function(e,t,a){"use strict";var n;a.d(t,"a",(function(){return n})),function(e){e.CHATS="chats",e.USERS="users",e.ROOMS="rooms"}(n||(n={}))},542:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(13),c=a.n(o),i=(a(352),a(604)),l=a(334),s=a(616),u=a(12),d=a(27),m=a(79),p=a(103),f=a(52),b=function(e){var t=e&&0!==(null===e||void 0===e?void 0:e.length)?e:"unknown";return{collection:f.a.CHATS,where:[["players","array-contains",t]],storeAs:"userChats"}},h=a(36),g={getProfilesByUid:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{collection:"users",where:[["uid","in",e]],storeAs:"usersProfiles"}},connected:{path:".info/connected",storeAs:"connected"}},E=function(e){return{collection:f.a.ROOMS,where:[["gameMaster.uid","==",e]],storeAs:"userRoomsAsGameMaster"}},v=function(e){return{collection:f.a.ROOMS,where:[["players","array-contains",e]],storeAs:"userRoomsAsPlayer"}},O=function(e){var t=e.length?e:"unknown";return{collection:f.a.ROOMS,doc:t,storeAs:"selectedRoom"}},y=a(89),S=a(295);function j(){var e=Object(d.useFirestore)(),t=Object(d.useFirebase)(),a=Object(u.useSelector)(h.a.userProfile),o=Object(u.useSelector)(y.a.selectedRoomUid),c=Object(p.a)(Object(u.useSelector)(S.a.getAllNeededPlayersUid)),i=Object(u.useSelector)(h.a.userConnected);function l(t){e.doc("".concat(f.a.USERS,"/").concat(a.uid)).update({connected:t})}return Object(n.useEffect)((function(){if(!0===i&&a.uid)return l(i),t.ref("".concat(f.a.USERS,"/").concat(a.uid)).onDisconnect().update({connected:!1}),function(){l(!1)}}),[i,a.uid]),Object(d.useFirebaseConnect)([g.connected]),Object(d.useFirestoreConnect)([g.getProfilesByUid(c.length?c:["unknown"]),b(a.uid),E(a.uid||"unknown"),v(a.uid||"unknown"),O(o||"unknown")]),r.a.createElement(r.a.Fragment,null)}function C(e){var t=Object(u.useSelector)(h.a.authenticatedSelector);return r.a.createElement(r.a.Fragment,null,t&&r.a.createElement(j,null),e.children)}var A=a(558),R=a(554),x=a(619),w=a(61),T=a(16),k=r.a.lazy((function(){return Promise.all([a.e(0),a.e(9)]).then(a.bind(null,732))})),_={path:[T.a.CHATS_PATH_ID,T.a.CHATS_PATH],component:k},P=a(121),N=a(617),M=a(615),I=a(120),H=a(6),D=a(553),L=a(618),U=a(601),F=a(603),B=a(620),z=a(543),W=a(323),G=a.n(W),Y=a(602),V=a(623),J=a(335),X=a(600);var q=Object(H.a)((function(e){return Object(A.a)({iconButtonAvatar:{padding:4},avatarSize:{border:"4px solid ".concat(e.palette.primary.main),width:e.spacing(6),height:e.spacing(6)}})}))((function(e){var t=Object(d.useFirebase)(),a=Object(w.f)(),n=Object(u.useSelector)(h.a.userProfile),o=Object(u.useSelector)(h.a.authenticatedSelector),c=r.a.useState(null),i=Object(P.a)(c,2),l=i[0],s=i[1],m=e.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(z.a,{color:"inherit",className:m.iconButtonAvatar,onClick:function(e){s(e.currentTarget)}},r.a.createElement(V.a,{src:n.photoURL,alt:n.displayName,className:m.avatarSize})),r.a.createElement(J.a,{id:"simple-menu",anchorEl:l,keepMounted:!0,open:Boolean(l),onClose:function(){return s(null)}},o?r.a.createElement(X.a,{onClick:function(){t.logout().then((function(){s(null),a.push(T.a.HOME_PATH)}))}},"Logout"):r.a.createElement(X.a,{onClick:function(){t.login({provider:"google",type:"popup"}).then((function(){s(null),a.push(T.a.ROOMS_PATH)})).catch((function(e){return alert(e.message)}))}},"Login with Google")))})),K=a(4);var Q=Object(H.a)((function(e){return Object(A.a)({ornament:{backgroundImage:"url(/assets/svg/ornament-knot.svg)",width:"100%",height:"100%",backgroundRepeatX:"repeat",backgroundRepeatY:"no-repeat",backgroundSize:"contain"},vartical:{backgroundImage:"url(/assets/svg/ornament-knot-vartical.svg)",backgroundRepeatX:"no-repeat",backgroundRepeatY:"repeat"}})}))((function(e){var t=e.classes,a=e.vartical;return r.a.createElement("div",{className:Object(K.a)(t.ornament,a&&t.vartical)})}));var Z=Object(H.a)((function(e){return Object(A.a)({secondaryBar:{zIndex:0},menuButton:{marginLeft:-e.spacing(1)},link:{textDecoration:"none",color:"rgba(255, 255, 255, 0.7)","&:hover":{color:e.palette.common.white}},button:{borderColor:"rgba(255, 255, 255, 0.7)"},ornament:{bottom:"2px",height:"24px",opacity:.2,position:"absolute",zIndex:-1,width:" 100%"},avatar:{marginBottom:"-16px"}})}))((function(e){var t=e.classes,a=e.onDrawerToggle;return r.a.createElement(r.a.Fragment,null,r.a.createElement(U.a,{color:"primary",position:"sticky",elevation:2},r.a.createElement(Y.a,null,r.a.createElement(F.a,{container:!0,spacing:1,alignItems:"center"},r.a.createElement(B.a,{smUp:!0},r.a.createElement(F.a,{item:!0},r.a.createElement(z.a,{color:"inherit","aria-label":"open drawer",onClick:a,className:t.menuButton},r.a.createElement(G.a,null)))),r.a.createElement(F.a,{item:!0,xs:!0}),r.a.createElement(F.a,{item:!0},r.a.createElement("div",{className:t.avatar},r.a.createElement(q,null))))),r.a.createElement("div",{className:t.ornament},r.a.createElement(Q,null))))})),$=a(546),ee=a(230),te=Object(H.a)((function(e){return Object(A.a)({container:{opacity:0,visibility:"hidden",transitionDelay:"1300ms",transition:"opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"},visible:{opacity:1,visibility:"visible"}})}))((function(e){var t=e.children,a=e.isAuthenticating,n=void 0===a||a;return r.a.createElement(r.a.Fragment,null,r.a.createElement($.a,{in:n},r.a.createElement(ee.a,null)),t)})),ae=a(95),ne=a(232),re=a(328),oe=a.n(re),ce=a(614),ie=a(329),le=a.n(ie),se=a(326),ue=a.n(se),de=a(327),me=a.n(de),pe=a(599),fe=a(545),be=a(220),he=a(81),ge=a(122),Ee=a(325),ve=a.n(Ee),Oe=a(609),ye=a(606),Se=a(621),je=a(608),Ce=a(610);var Ae=Object(H.a)((function(e){return Object(A.a)({item:{paddingTop:1,paddingBottom:1,color:"rgba(255, 255, 255, 0.7)","&:hover,&:focus":{backgroundColor:"rgba(255, 255, 255, 0.08)"}},itemCategoryWrapper:{minHeight:"60px"},itemCategory:{width:"100%",paddingTop:e.spacing(2),paddingBottom:e.spacing(2)},itemCategoryAbsolute:{position:"absolute",top:0},itemActiveItem:{color:e.palette.secondary.main},itemPrimary:{fontSize:"inherit"},itemIcon:{minWidth:"auto",marginRight:e.spacing(2)},expansionPanel:{borderRadius:"0 !important",padding:"0 !important",margin:"0 !important",backgroundColor:e.palette.background.secondary},expansionPanelSummary:{margin:"0 !important",padding:"0 16px 0px 0 !important"},expansionPanelSummaryContainer:{padding:"0 !important",margin:"0 !important"},expandIcon:{color:"rgba(255, 255, 255, 0.7)"},divider:{boxShadow:"0 -1px 0 #404854 inset"}})}))((function(e){var t=e.classes,a=e.children,n=e.icon,o=e.text,c=e.navLink,i=e.active,l=e.expandable,s=e.defaultExpanded,u=function(e){return c?r.a.createElement(m.b,{to:c},e):r.a.createElement(r.a.Fragment,null,e)};return l?r.a.createElement(Se.a,{className:Object(K.a)(t.expansionPanel,t.divider),defaultExpanded:s},r.a.createElement(je.a,{"aria-controls":"additional-actions1-content","aria-label":"Expand",classes:{content:t.expansionPanelSummaryContainer,expandIcon:t.expandIcon},className:t.expansionPanelSummary,expandIcon:r.a.createElement(ve.a,null),id:"additional-actions1-header"},r.a.createElement("div",{className:t.itemCategoryWrapper}),u(r.a.createElement(fe.a,{button:!0,className:Object(K.a)(t.item,t.itemCategory,i&&t.itemActiveItem,t.itemCategoryAbsolute)},n&&r.a.createElement(Oe.a,{className:t.itemIcon},n),o&&r.a.createElement(ye.a,{classes:{primary:t.itemPrimary}},o)))),a&&r.a.createElement(Ce.a,null,a)):u(r.a.createElement(fe.a,{button:!0,className:Object(K.a)(t.item,t.itemCategory,i&&t.itemActiveItem,t.divider)},n&&r.a.createElement(Oe.a,{className:t.itemIcon},n),o&&r.a.createElement(ye.a,{classes:{primary:t.itemPrimary}},o)))})),Re=a(611),xe=a(612),we=a(613);var Te=Object(H.a)((function(e){return Object(A.a)({cards:{maxWidth:936,width:"100%"},media:{height:140}})}))((function(e){var t=e.classes,a=e.room;return r.a.createElement(Re.a,{className:t.cards},r.a.createElement(xe.a,{className:t.media,image:"/assets/images/fantasy-wallpapers.jpg",title:"Room image"}),r.a.createElement(we.a,null,r.a.createElement(I.a,{gutterBottom:!0,variant:"h5",component:"h2"},a.roomName),r.a.createElement(I.a,{variant:"body2",color:"textSecondary",component:"p"},a.description),r.a.createElement("p",null,r.a.createElement(I.a,{variant:"caption",color:"textSecondary",component:"span"},"Room Game Master:"),r.a.createElement("br",null),r.a.createElement(I.a,{variant:"subtitle1",color:"textSecondary",component:"span"},a.gameMaster.displayName))))}));var ke=Object(H.a)((function(e){return Object(A.a)({logo:{fontSize:24,color:e.palette.common.white,"&:hover,&:focus":{backgroundColor:"rgba(255, 255, 255, 0.08)"},backgroundColor:e.palette.background.secondary,boxShadow:"0 -1px 0 #404854 inset",paddingTop:e.spacing(2),paddingBottom:e.spacing(2)}})}))((function(e){var t=e.classes,a=Object(ne.a)(e,["classes"]),n=Object(u.useSelector)(ge.a.match).path,o=Object(u.useSelector)(he.a.selectedRoom),c=Object(u.useSelector)(y.a.drawerOpened);return r.a.createElement(ce.a,Object.assign({open:c,variant:n===T.a.ROOMS_PATH_ID?"persistent":"permanent"},a),r.a.createElement(pe.a,{disablePadding:!0},r.a.createElement(fe.a,{className:t.logo},"Roll a Dice...")),r.a.createElement(Ae,{navLink:T.a.HOME_PATH,icon:r.a.createElement(ue.a,null),text:"Home Page",active:T.a.HOME_PATH===n}),r.a.createElement(Ae,{navLink:T.a.ROOMS_PATH,icon:r.a.createElement(me.a,null),text:"Rooms",expandable:-1===n.indexOf(T.a.ROOMS_PATH),active:n.indexOf(T.a.ROOMS_PATH)>-1},r.a.createElement(r.a.Fragment,null,"List here")),r.a.createElement(Ae,{navLink:T.a.CHATS_PATH,icon:r.a.createElement(oe.a,null),text:"Chats",expandable:-1===n.indexOf(T.a.CHATS_PATH),active:n.indexOf(T.a.CHATS_PATH)>-1},r.a.createElement(be.a,{viewType:be.b.EMBEDDED})),o&&r.a.createElement(Ae,{icon:r.a.createElement(le.a,null),text:"Room Ditails",expandable:!0,active:n.indexOf(T.a.ROOM_PATH)>-1,defaultExpanded:!0},r.a.createElement(Te,{room:o})))})),_e=a(19);var Pe=function(){var e=Object(l.a)({palette:{primary:{light:"#afaf4c",main:"#9b9c20",dark:"#6c6d16"},secondary:{light:"#cba234",main:"#be8b02",dark:"#856101"},background:{default:"#e0e0d3",paper:"#f4f4f2",secondary:"#111b0e"}},typography:{fontFamily:["ringbearermedium","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),h5:{fontWeight:500,fontSize:26,letterSpacing:.5}},shape:{borderRadius:8},props:{MuiTab:{disableRipple:!0}},mixins:{toolbar:{minHeight:48}}});return e=Object(_e.a)({},e,{overrides:{MuiDrawer:{paper:{backgroundColor:"#121b0f"}},MuiButton:{label:{textTransform:"none"},contained:{boxShadow:"none","&:active":{boxShadow:"none"}}},MuiTabs:{root:{marginLeft:e.spacing(1)},indicator:{height:3,borderTopLeftRadius:3,borderTopRightRadius:3,backgroundColor:e.palette.common.white}},MuiTab:{root:Object(ae.a)({textTransform:"none",margin:"0 16px",minWidth:0,padding:0},e.breakpoints.up("md"),{padding:0,minWidth:0})},MuiIconButton:{root:{padding:e.spacing(1)}},MuiTooltip:{tooltip:{borderRadius:4}},MuiDivider:{root:{backgroundColor:"#404854"}},MuiListItemText:{primary:{fontWeight:e.typography.fontWeightMedium}},MuiListItemIcon:{root:{color:"inherit",marginRight:0,"& svg":{fontSize:20}}},MuiAvatar:{root:{width:32,height:32}}}})}(),Ne=(Object(_e.a)({},Pe,{palette:Object(_e.a)({},Pe.palette,{type:"dark"})}),Object(_e.a)({},Pe,{palette:Object(_e.a)({},Pe.palette,{type:"dark"})}),Object(A.a)({drawer:Object(ae.a)({},Pe.breakpoints.up("sm"),{flexShrink:0,width:"100%",maxWidth:320,transition:"max-width 225ms cubic-bezier(0, 0, 0.2, 1) 0ms"})}));var Me=Object(H.a)(Ne)((function(e){var t=e.classes,a=e.mobileOpen,n=Object(u.useSelector)(y.a.drawerOpened);return r.a.createElement("nav",{className:t.drawer,style:{maxWidth:n?320:0}},r.a.createElement(B.a,{smUp:!0,implementation:"js"},r.a.createElement(ke,{PaperProps:{style:{width:320}},variant:"temporary",open:a,onClose:e.handleDrawerToggle})),r.a.createElement(B.a,{xsDown:!0,implementation:"css"},r.a.createElement(ke,{PaperProps:{style:{width:320}}})))}));function Ie(){return r.a.createElement(I.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(M.a,{color:"inherit",href:"mailto:markky21@gmail.com"},"Marcin Mirecki")," ",(new Date).getFullYear(),".")}var He=Object(A.a)({root:{display:"flex",minHeight:"100vh"},lineLoader:{position:"fixed",height:"4px",top:0,left:0,width:"100%",zIndex:1e4,transition:"max-height 0.2s ease;"},app:{flex:1,display:"flex",flexDirection:"column"},main:{flex:1,padding:Pe.spacing(6,4),background:Pe.palette.background.default},footer:{padding:Pe.spacing(1),background:Pe.palette.background.default}});var De=Object(H.a)(He)((function(e){var t=e.classes,a=e.children,n=r.a.useState(!1),o=Object(P.a)(n,2),c=o[0],i=o[1],l=Object(u.useSelector)(h.a.authenticatedSelector),d=Object(u.useSelector)(h.a.authenticatingSelector),m=Object(u.useSelector)(h.a.isRequesting),p=function(){i(!c)};return r.a.createElement(s.a,{theme:Pe},r.a.createElement(te,{isAuthenticating:d},r.a.createElement("div",{className:t.root},r.a.createElement(N.a,null),r.a.createElement(D.a,{in:m,direction:"down"},r.a.createElement(L.a,{className:t.lineLoader})),l&&r.a.createElement(Me,{mobileOpen:c,handleDrawerToggle:p}),r.a.createElement("div",{className:t.app},r.a.createElement(Z,{onDrawerToggle:p}),r.a.createElement("main",{className:t.main},a),r.a.createElement("footer",{className:t.footer},r.a.createElement(Ie,null))))))})),Le=(a(503),a(231));var Ue={path:"/",component:function(e){var t=e.match,a=Object(u.useDispatch)(),o=Object(u.useSelector)(ge.a.match);return Object(n.useEffect)((function(){JSON.stringify(t)!==JSON.stringify(o)&&a(Le.a.matchChange(t))})),r.a.createElement("div",null,"Henlooo")}},Fe=r.a.lazy((function(){return Promise.all([a.e(0),a.e(4),a.e(6)]).then(a.bind(null,727))})),Be={path:[T.a.ROOMS_PATH_ID],component:Fe},ze=r.a.lazy((function(){return Promise.all([a.e(0),a.e(5),a.e(8)]).then(a.bind(null,729))})),We={path:[T.a.ROOM_CREATE_PATH,T.a.ROOMS_PATH],component:ze},Ge=Object(x.a)((function(e){return Object(A.a)({backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}})}));function Ye(){var e=Ge();return r.a.createElement(De,null,r.a.createElement(n.Suspense,{fallback:r.a.createElement(R.a,{className:e.backdrop,open:!0})},r.a.createElement(w.c,null,r.a.createElement(w.a,{exact:!0,path:Ue.path,component:Ue.component}),[We,Be,_].map((function(e,t){return r.a.createElement(w.a,Object.assign({key:"Route-".concat(t)},e))})))))}var Ve=a(219),Je=a.n(Ve),Xe=(a(511),a(512),a(513),a(330)),qe=a.n(Xe),Ke=a(169),Qe=a(154),Ze={firebase:qe.a,config:{userProfile:"users",useFirestoreForProfile:!0},dispatch:Qe.a.dispatch,createFirestoreInstance:Ke.createFirestoreInstance};function $e(e){var t=Object(i.a)("(prefers-color-scheme: dark)"),a=r.a.useMemo((function(){return Object(l.a)({palette:{type:t?"dark":"light"}})}),[t]);return window.theme=a,r.a.createElement(u.Provider,{store:Qe.a},r.a.createElement(d.ReactReduxFirebaseProvider,Ze,r.a.createElement(s.a,{theme:a},r.a.createElement(C,null,r.a.createElement(m.a,null,r.a.createElement(Ye,null))))))}Je.a.initializeApp({apiKey:"AIzaSyA0bXhCXcLJC9FGk3ynZoJP5KJ6CY3sqYY",authDomain:"roll-a-dice-4cba1.firebaseapp.com",databaseURL:"https://roll-a-dice-4cba1.firebaseio.com",projectId:"roll-a-dice-4cba1",storageBucket:"roll-a-dice-4cba1.appspot.com",messagingSenderId:"768622256477",appId:"1:768622256477:web:51a5c9f0ef4030d366c8b4",measurementId:"G-J2M3QQ0M89"}),Je.a.firestore();Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var et=a(333);window.version=et.a,window.env="local",c.a.render(r.a.createElement($e,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},81:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(19),r={userChats:function(e){return e.firestore.data.userChats},getChat:function(e){return function(t){return e&&t.firestore.data.userChats?t.firestore.data.userChats[e]:null}},selectedRoom:function(e){return e.firestore.data.selectedRoom},userRoomsAsGameMaster:function(e){return e.firestore.data.userRoomsAsGameMaster},userRoomsAsPlayer:function(e){return e.firestore.data.userRoomsAsPlayer},allUserRoomsUid:function(e){return Object.keys(Object(n.a)({},e.firestore.data.userRoomsAsGameMaster,{},e.firestore.data.userRoomsAsPlayer))},usersProfiles:function(e){return e.firestore.data.usersProfiles||{}},selectedRoomPlayers:function(e){var t,a=e.firestore.data.usersProfiles||{};return((null===(t=e.firestore.data.selectedRoom)||void 0===t?void 0:t.players)||[]).map((function(e){return a[e]})).filter((function(e){return!!e}))},selectedRoomGameMasterProfile:function(e){var t,a=e.firestore.data.usersProfiles||{},n=null===(t=e.firestore.data.selectedRoom)||void 0===t?void 0:t.gameMaster.uid;return a&&n?a[n]:null}}},89:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n={selectedRoomUid:function(e){return e.rooms.selectedRoom},drawerOpened:function(e){return e.rooms.drawerOpened},chatOpened:function(e){return e.rooms.chatOpened},playersOpened:function(e){return e.rooms.playersOpened},diceRolling:function(e){return e.rooms.diceRolling}}}},[[347,2,3]]]);
//# sourceMappingURL=main.73ff5283.chunk.js.map