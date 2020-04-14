(this["webpackJsonproll-a-dice"]=this["webpackJsonproll-a-dice"]||[]).push([[6],{619:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(620),i=a.n(n),c=a(622),r=a(37),o=a(15),s=a(33),l=a(228),u=i()({}),d=Object(r.a)(),m=Object(c.connectedRouterRedirect)({redirectPath:o.a.HOME_PATH,AuthenticatingComponent:l.a,wrapperDisplayName:"UserIsAuthenticated",authenticatedSelector:s.a.authenticatedSelector,authenticatingSelector:s.a.authenticatingSelector,redirectAction:function(e){return function(t){d.push(e),t({type:"UNAUTHED_REDIRECT",payload:{message:"User is not authenticated."}})}}});Object(c.connectedRouterRedirect)({AuthenticatingComponent:l.a,wrapperDisplayName:"UserIsNotAuthenticated",allowRedirectBack:!1,authenticatedSelector:function(e){return e.firebase.auth.isEmpty},authenticatingSelector:function(e){var t=e.firebase,a=t.auth,n=t.isInitializing;return!a.isLoaded||n},redirectPath:function(e,t){return u.getRedirectQueryParam(t)||o.a.ROOMS_PATH},redirectAction:function(e){return function(t){d.push(e),t({type:"AUTHED_REDIRECT",payload:{message:"User is not authenticated."}})}}})},624:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(0),i=a.n(n).a.lazy((function(){return a.e(7).then(a.bind(null,647))}))},632:function(e,t,a){"use strict";var n,i;!function(e){e.D4="d4",e.D6="d6",e.D8="d8",e.D10="d10",e.D12="d12",e.D20="d20",e.D100="d100"}(n||(n={})),a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return c})),function(e){e.DICE_ROLL="DICE_ROLL"}(i||(i={}));var c={roomName:{name:"roomName",label:"Name of the Room",fullWidth:!0},diceType:{name:"diceType",label:"Allowed dice",options:[{label:n.D4,value:n.D4},{label:n.D6,value:n.D6},{label:n.D8,value:n.D8},{label:n.D10,value:n.D10},{label:n.D12,value:n.D12},{label:n.D20,value:n.D20},{label:n.D100,value:n.D100}]},description:{name:"description",label:"Room description",multiline:!0,fullWidth:!0}};n.D4,n.D4,n.D6,n.D6,n.D8,n.D8,n.D10,n.D10,n.D12,n.D12,n.D20,n.D20,n.D100,n.D100},718:function(e,t,a){"use strict";a.r(t);var n=a(48),i=a(58),c=a(631),r=a(619),o=Object(n.d)(Object(c.a)("EnhancedRoomList"),i.g,r.a),s=a(99),l=a(3),u=a(0),d=a.n(u),m=a(610),p=a(11),f=a(25),h=a(162),b=a(624),g=a(18),O=a(118),v=a(549),j=a(5),E=a(222),D=a(602),w=a(604),y=a(117),R=a(603);var S=Object(j.a)((function(e){return Object(v.a)({root:{display:"flex",backgroundColor:"#f4f4f260"},details:{display:"flex",flexDirection:"column"},content:{flex:"1 0 auto"},cover:{width:151},controls:{display:"flex",alignItems:"center",paddingLeft:e.spacing(1),paddingBottom:e.spacing(1)},playIcon:{height:38,width:38}})}))((function(e){var t=e.classes;return d.a.createElement(D.a,{className:t.root},d.a.createElement("div",{className:t.details},d.a.createElement(w.a,{className:t.content},d.a.createElement(y.a,{component:"h5",variant:"h5"},"Live From Space"),d.a.createElement(y.a,{variant:"subtitle1",color:"textSecondary"},"Mac Miller")),d.a.createElement("div",{className:t.controls},"Some text here")),d.a.createElement(R.a,{className:t.cover,image:"".concat("/roll-a-dice","/assets/images/avatar-1.jpg"),title:"Live from space album cover"}))})),T={idCanvas:"canvas",idLabel:"label",idSet:"set",idSelectorDiv:"selector_div",idInfoDiv:"info_div",useTrueRandom:!1,useShadows:!0,whiteDice:!1,noresult:!1,diceThrow$:null,diceThrowResult$:null},N=a(230),$=a(635),k=a(636),L=a(717),U=a(675),C=(a(114),a(701)),x=a(699),I=a(702),_=a(152),A=a(96),P=function(e){return Object(_.action)(A.a.SELECTED,e)},M=function(e){return Object(_.action)(A.a.SET_DRAWER_OPEN_VALUE,e)},B=function(e){return Object(_.action)(A.a.SET_CHAT_OPEN_VALUE,e)},G=function(e){return Object(_.action)(A.a.SET_PLAYERS_OPEN_VALUE,e)},H=function(e){return Object(_.action)(A.a.SET_DICE_ROLLING,e)},z=a(49),W=a(632),F=a(151),J=a(698),V=a(700),q=function(){function e(){var t=this;Object($.a)(this,e),this.store=F.a,this.takeUntil$=new U.a,this._store$=new L.a(1),this._storeUnsubscribeFn=void 0,this._storeUnsubscribeFn=this.store.subscribe((function(){t._store$.next(t.store.getState())}))}return Object(k.a)(e,[{key:"getSelectedRoomData$",value:function(){return this.store$.pipe(Object(J.a)((function(e){return e.firestore.data.selectedRoom})),Object(x.a)((function(e){return!!e})))}},{key:"getSelectedRoomDataLogs$",value:function(){return this.getSelectedRoomData$().pipe(Object(J.a)((function(e){return e.logs})))}},{key:"getLastRoomLogOnChange$",value:function(){return this.getSelectedRoomDataLogs$().pipe(Object(J.a)((function(e){return Object(s.a)(e).pop()})),Object(x.a)((function(e){return!!e})),Object(V.a)((function(e,t){return e.timestamp===t.timestamp})))}},{key:"getUserProfile$",value:function(){return this.store$.pipe(Object(J.a)((function(e){return e.firebase.profile})))}},{key:"hostDestroyed",value:function(){this.takeUntil$.next(),this._storeUnsubscribeFn(),e.instance=null}},{key:"store$",get:function(){return this._store$.asObservable()}}],[{key:"getInstance",value:function(){return e.instance||(e.instance=new e),e.instance}}]),e}();q.instance=void 0;var Q=function(){function e(t){Object($.a)(this,e),this.firestore=t,this.diceThrowSetArray$=new L.a(1),this.diceThrow$=new U.a,this.diceBeforeThrow$=new U.a,this.diceThrowResult$=new L.a(1),this.profile=null,this.roomUid=null,this.store=F.a,this.takeUntil$=new U.a,this.storeService=q.getInstance(),this.createSubscriptions()}return Object(k.a)(e,[{key:"hostDestroyed",value:function(){this.takeUntil$.next(),e.instance=null,this.setDiceRolling(!1)}},{key:"createSubscriptions",value:function(){var e=this;this.diceThrow$.pipe(Object(C.a)(this.takeUntil$)).subscribe((function(e){console.log("diceThrow$: ",e)})),this.diceBeforeThrow$.pipe(Object(C.a)(this.takeUntil$)).subscribe((function(t){e.setDiceRolling(!0),console.log("diceBeforeThrow$: ",t)})),this.diceThrowResult$.pipe(Object(C.a)(this.takeUntil$)).subscribe((function(t){e.setDiceRolling(!1),t.emit&&e.firestoreAddNewThrow(t),console.log("diceThrowResult$: ",t)})),this.performDiceThrowWhenNewDiceThrowLogAppears()}},{key:"setDiceRolling",value:function(e){this.store.dispatch(H(e))}},{key:"firestoreAddNewThrow",value:function(e){var t=this;if(this.roomUid){e.emit;var a=Object(N.a)(e,["emit"]),n=this.firestore.doc("".concat(z.a.ROOMS,"/").concat(this.roomUid));this.firestore.runTransaction((function(e){return e.get(n).then((function(i){var c,r={authorUid:null===(c=t.profile)||void 0===c?void 0:c.uid,payload:a,timestamp:Date.now().toString(),type:W.a.DICE_ROLL},o=[].concat(Object(s.a)(i.data().logs),[r]);return e.update(n,{logs:o})})).catch((function(e){console.log("Transaction failure:",e)}))}))}}},{key:"performDiceThrowWhenNewDiceThrowLogAppears",value:function(){var e=this;this.storeService.getLastRoomLogOnChange$().pipe(Object(x.a)((function(e){return e.type===W.a.DICE_ROLL})),Object(I.a)(this.storeService.getUserProfile$()),Object(x.a)((function(e){var t=Object(O.a)(e,2),a=t[0],n=t[1];return!!n.uid&&a.authorUid!==n.uid})),Object(C.a)(this.takeUntil$)).subscribe((function(t){var a=Object(O.a)(t,1)[0];e.diceThrow$.next(Object(g.a)({},a.payload))}))}}],[{key:"getInstance",value:function(t){return e.instance||(e.instance=new e(t)),e.instance}}]),e}();Q.instance=void 0;var Y=a(33),Z=a(84);var K=Object(j.a)((function(e){return Object(v.a)({root:{width:"100%",height:"calc(100% - ".concat(e.spacing(2),"px)"),position:"relative"},diceCanvas:{width:"100%",height:"100%"},nav:{position:"absolute",top:e.spacing(1),left:e.spacing(1)}})}))((function(e){var t=e.classes,a=d.a.useRef(null),n=a.current&&a.current.getBoundingClientRect().width||0,i=Object(u.useState)(!1),c=Object(O.a)(i,2),r=c[0],o=c[1],s=Object(f.useFirestore)(),l=Object(p.useSelector)(Y.a.userProfile),m=Object(p.useSelector)(Z.a.selectedRoomUid),h=Q.getInstance(s),b=Object(u.useRef)(null);return Object(u.useEffect)((function(){h.profile=l}),[l]),Object(u.useEffect)((function(){h.roomUid=m||null}),[m]),Object(u.useEffect)((function(){r||0===n||(window.dice_initialize(b.current,Object(g.a)({},T,{diceThrow$:h.diceThrow$,diceThrowResult$:h.diceThrowResult$,diceBeforeThrow$:h.diceBeforeThrow$})),o(!0))}),[n]),d.a.createElement(E.a,{elevation:3,className:t.root},d.a.createElement("div",{id:"diceCanvasContainer",ref:b,className:t.diceCanvas},d.a.createElement("div",{ref:a,id:"canvas"}),d.a.createElement("nav",{className:t.nav},d.a.createElement(S,null))))})),X=a(76),ee=a(229),te=a(119),ae=a(544),ne=a(705),ie=a(588),ce=a(677),re=a.n(ce),oe=a(679),se=a.n(oe),le=a(678),ue=a.n(le),de=a(703),me=a(704),pe=a(724),fe=a(534);var he=d.a.memo(Object(j.a)((function(e){return Object(v.a)({tile:{borderRadius:e.spacing(1),marginRight:e.spacing(2),maxWidth:e.spacing(30),overflow:"hidden",padding:"0 !Important",width:"100%"},title:{color:e.palette.primary.light},titleDisable:{color:e.palette.warning.light},masterGame:{position:"absolute",zIndex:10,top:0,right:0},titleBar:{background:"linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"}})}))((function(e){var t=e.classes,a=e.player,n=e.gameMaster;return d.a.createElement(de.a,{className:t.tile},d.a.createElement("img",{src:a.avatarUrl||a.photoURL,alt:a.displayName}),d.a.createElement(me.a,{title:a.displayName,classes:{root:t.titleBar,title:a.connected?t.title:t.titleDisable},actionIcon:d.a.createElement(pe.a,{title:a.connected?"Online":"Offline"},d.a.createElement(fe.a,{"aria-label":"star ".concat(a.displayName)},a.connected?d.a.createElement(re.a,{className:t.title}):d.a.createElement(ue.a,{className:t.titleDisable})))}),n&&d.a.createElement(pe.a,{className:Object(l.a)(t.masterGame,a.connected?t.title:t.titleDisable),title:"Game Master"},d.a.createElement(fe.a,{"aria-label":"star ".concat(a.displayName)},d.a.createElement(se.a,null))))})));var be=Object(j.a)((function(e){return Object(v.a)({root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},gridList:{height:e.spacing(20),width:"100%",flexWrap:"nowrap",transform:"translateZ(0)"}})}))((function(e){var t=e.classes,a=e.visible,n=Object(p.useSelector)(X.a.selectedRoomPlayers),i=Object(p.useSelector)(X.a.selectedRoomGameMasterProfile);return d.a.createElement(ae.a,{direction:"up",in:a},d.a.createElement(ne.a,{className:t.gridList,cols:2.5},i&&d.a.createElement(ie.a,{in:!0,timeout:300},d.a.createElement(he,{player:i,gameMaster:!0})),n&&n.map((function(e,t){return d.a.createElement(ie.a,{in:!0,key:e.uid,timeout:1e3*t+1300},d.a.createElement(he,{player:e}))}))))})),ge=a(682),Oe=a.n(ge),ve=a(683),je=a.n(ve),Ee=a(680),De=a.n(Ee),we=a(681),ye=a.n(we),Re=a(684),Se=a.n(Re),Te=a(725),Ne=a(721),$e=a(293),ke=a(727),Le=a(707),Ue=a(728);var Ce=d.a.memo(Object(j.a)((function(e){return Object(v.a)({})}))((function(e){var t=e.direction,a=void 0===t?"left":t,n=e.actions,i=d.a.useState(!1),c=Object(O.a)(i,2),r=c[0],o=c[1],s=function(){return o(!1)};return d.a.createElement(ke.a,{ariaLabel:"SpeedDial example",icon:d.a.createElement(Ue.a,null),onClose:s,onOpen:function(){return o(!0)},open:r,direction:a},n.map((function(e){return d.a.createElement(Le.a,{key:e.name,icon:e.icon,tooltipTitle:e.name,onClick:function(){return e.callback?e.callback(s):s()}})})))})));var xe=Object(j.a)((function(e){return Object(v.a)({snackbar:{top:e.spacing(8)}})}))((function(e){var t=e.classes,a=Object(p.useDispatch)(),n=(Object(p.useSelector)($e.a.isGameMasterOfSelectedRoom),Object(p.useSelector)(Z.a.drawerOpened)),i=Object(p.useSelector)(Z.a.chatOpened),c=Object(p.useSelector)(Z.a.playersOpened),r=d.a.useState({type:"success",open:!1,text:""}),o=Object(O.a)(r,2),s=o[0],l=o[1],u=[],m=[{icon:n?d.a.createElement(De.a,null):d.a.createElement(ye.a,null),name:n?"Hide Nav":"Show Nav",callback:function(e){return a(M(!n))}},{icon:d.a.createElement(Oe.a,null),name:i?"Hide chat":"Show Chat",callback:function(e){return a(B(!i))}},{icon:d.a.createElement(je.a,null),name:c?"Hide players":"Show players",callback:function(e){return a(G(!c))}},{icon:d.a.createElement(Se.a,null),name:"Copy Room Url",callback:function(e){navigator.permissions.query({name:"clipboard-write"}).then((function(e){"granted"!==e.state&&"prompt"!==e.state||navigator.clipboard.writeText(window.location.href).then((function(){return l({type:"success",open:!0,text:"Room URL copied to clipboard!"})}),(function(){return l({type:"error",open:!0,text:"Upss.. there was an error"})}))}))}}].concat(u);return d.a.createElement(d.a.Fragment,null,d.a.createElement(Ce,{actions:m,direction:"up"}),d.a.createElement(Te.a,{className:t.snackbar,anchorOrigin:{vertical:"top",horizontal:"right"},open:s.open,autoHideDuration:6e3,onClose:function(){return l(Object(g.a)({},s,{open:!1}))}},d.a.createElement(Ne.a,{onClose:function(){return l(Object(g.a)({},s,{open:!1}))},severity:s.type},s.text)))})),Ie=Object(m.a)((function(e){return{root:{position:"relative",margin:e.spacing(-6,-4),height:"calc(100% + ".concat(e.spacing(12),"px)")},diceWrapper:{},chatter:{zIndex:1e5,position:"fixed",bottom:e.spacing(4),right:e.spacing(2),transition:"bottom 225ms cubic-bezier(0, 0, 0.2, 1) 0ms"},chatterLower:{bottom:e.spacing(4)},speedDial:{position:"absolute",bottom:e.spacing(23),left:e.spacing(3),zIndex:10,transition:"bottom 225ms cubic-bezier(0, 0, 0.2, 1) 0ms"},speedDialLower:{bottom:e.spacing(3)},cssGrid:{height:"calc(100% - 60px)",display:"grid",gridTemplateColumns:"1fr",gridTemplateRows:"1fr 160px",rowGap:"".concat(e.spacing(2),"px"),columnGap:"".concat(e.spacing(2),"px"),padding:e.spacing(2,2,0,2)},cssItem1:{gridColumn:1,gridRow:1},cssItem2:{gridColumn:1,gridRow:2}}}));t.default=o((function(e){var t=e.match,a=Object(p.useSelector)(Z.a.chatOpened),n=Object(p.useSelector)(Z.a.playersOpened),i=Ie(),c=Object(p.useDispatch)(),r=Object(f.useFirestore)(),o=Object(p.useSelector)(X.a.selectedRoom),m=Object(p.useSelector)(Z.a.selectedRoomUid),g=Object(p.useSelector)(te.a.match),O=Object(p.useSelector)(Y.a.userProfile);return Object(u.useEffect)((function(){return JSON.stringify(t)!==JSON.stringify(g)&&c(ee.a.matchChange(t)),void c(P(g.params.roomId))})),Object(u.useEffect)((function(){!function(){if((null===o||void 0===o?void 0:o.players)&&O.uid&&o.gameMaster.uid!==O.uid&&-1===o.players.indexOf(O.uid)){var e=r.doc("".concat(z.a.ROOMS,"/").concat(m));r.runTransaction((function(t){return t.get(e).then((function(a){var n=[].concat(Object(s.a)(a.data().players),[O.uid]);return t.update(e,{players:n})})).catch((function(e){console.log("Transaction failure:",e)}))}))}}()}),[m,null===o||void 0===o?void 0:o.createdAt,O.uid]),Object(u.useEffect)((function(){return function(){c(P(null))}}),[]),Object(u.useEffect)((function(){c(h.a.setSelectedChat((null===o||void 0===o?void 0:o.chatUid)||null))}),[null===o||void 0===o?void 0:o.chatUid]),d.a.createElement("section",{className:i.root},d.a.createElement("nav",{className:Object(l.a)(i.speedDial,!n&&i.speedDialLower)},d.a.createElement(xe,null)),d.a.createElement("article",{className:Object(l.a)(i.chatter,!n&&i.chatterLower)},d.a.createElement(b.a,{visbile:a})),d.a.createElement("div",{className:i.cssGrid},d.a.createElement("div",{className:i.cssItem1},d.a.createElement(K,null)),d.a.createElement("div",{className:i.cssItem2},d.a.createElement(be,{visible:n}))))}))}}]);
//# sourceMappingURL=6.e239ec5c.chunk.js.map