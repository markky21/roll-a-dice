(this["webpackJsonproll-a-dice"]=this["webpackJsonproll-a-dice"]||[]).push([[7],{620:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(621),r=a.n(n),c=a(625),i=a(37),o=a(15),l=a(33),s=a(228),u=r()({}),d=Object(i.a)(),m=Object(c.connectedRouterRedirect)({redirectPath:o.a.HOME_PATH,AuthenticatingComponent:s.a,wrapperDisplayName:"UserIsAuthenticated",authenticatedSelector:l.a.authenticatedSelector,authenticatingSelector:l.a.authenticatingSelector,redirectAction:function(e){return function(t){d.push(e),t({type:"UNAUTHED_REDIRECT",payload:{message:"User is not authenticated."}})}}});Object(c.connectedRouterRedirect)({AuthenticatingComponent:s.a,wrapperDisplayName:"UserIsNotAuthenticated",allowRedirectBack:!1,authenticatedSelector:function(e){return e.firebase.auth.isEmpty},authenticatingSelector:function(e){var t=e.firebase,a=t.auth,n=t.isInitializing;return!a.isLoaded||n},redirectPath:function(e,t){return u.getRedirectQueryParam(t)||o.a.ROOMS_PATH},redirectAction:function(e){return function(t){d.push(e),t({type:"AUTHED_REDIRECT",payload:{message:"User is not authenticated."}})}}})},622:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return c}));var n,r=a(623);!function(e){e.DICE_ROLL="DICE_ROLL"}(n||(n={}));var c={roomName:{name:"roomName",label:"Name of the Room",fullWidth:!0},diceType:{name:"diceType",label:"Allowed dice",options:[{label:r.a.D4,value:r.a.D4},{label:r.a.D6,value:r.a.D6},{label:r.a.D8,value:r.a.D8},{label:r.a.D10,value:r.a.D10},{label:r.a.D12,value:r.a.D12},{label:r.a.D20,value:r.a.D20},{label:r.a.D100,value:r.a.D100}]},description:{name:"description",label:"Room description",multiline:!0,fullWidth:!0},d4:{name:r.a.D4,label:r.a.D4},d6:{label:r.a.D6,name:r.a.D6},d8:{label:r.a.D8,name:r.a.D8},d10:{label:r.a.D10,name:r.a.D10},d12:{label:r.a.D12,name:r.a.D12},d20:{label:r.a.D20,name:r.a.D20},d100:{label:r.a.D100,name:r.a.D100}};r.a.D4,r.a.D4,r.a.D6,r.a.D6,r.a.D8,r.a.D8,r.a.D10,r.a.D10,r.a.D12,r.a.D12,r.a.D20,r.a.D20,r.a.D100,r.a.D100},623:function(e,t,a){"use strict";var n;a.d(t,"a",(function(){return n})),function(e){e.D4="d4",e.D6="d6",e.D8="d8",e.D10="d10",e.D12="d12",e.D20="d20",e.D100="d100"}(n||(n={}))},627:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0),r=a.n(n).a.lazy((function(){return a.e(9).then(a.bind(null,650))}))},632:function(e,t,a){"use strict";a.d(t,"c",(function(){return E})),a.d(t,"a",(function(){return D})),a.d(t,"b",(function(){return y}));var n=a(99),r=a(230),c=a(0),i=a.n(c),o=a(543),l=a(598),s=a(540),u=a(541),d=a(548),m=a(711),f=a(725),b=a(542),p=a(712),h=a(729),v=a(722),g=a(611),O=Object(g.a)((function(e){return{formField:{marginBottom:e.spacing(2)},sliderFormField:{width:"100%",marginLeft:0}}})),j=function(e){var t=e.touched,a=e.error;return t&&a?i.a.createElement(o.a,null,t&&a):void 0},E=i.a.memo((function(e){var t=O();return i.a.createElement(v.a,Object.assign({},e,{component:function(e){var t=e.label,a=e.input,n=e.meta,c=n.touched,o=n.invalid,s=n.error,u=Object(r.a)(e,["label","input","meta"]);return i.a.createElement(l.a,Object.assign({variant:"outlined",label:t,placeholder:t,error:c&&o,helperText:c&&s},a,u))},className:t.formField}))})),D=(i.a.memo((function(e){var t=O();return i.a.createElement(v.a,Object.assign({},e,{type:"checkbox",component:function(e){var t=e.input,a=(e.label,e.meta),n=a.touched,c=a.error,o=e.children,l=Object(r.a)(e,["input","label","meta","children"]);return i.a.createElement(s.a,{error:n&&c},i.a.createElement(u.a,{htmlFor:"age-native-simple"},"Age"),i.a.createElement(d.a,Object.assign({variant:"outlined",native:!0},t,l,{inputProps:{name:"age",id:"age-native-simple"}}),o),j({touched:n,error:c}))},className:t.formField}))})),i.a.memo((function(e){var t=O();return i.a.createElement(v.a,Object.assign({},e,{type:"checkbox",component:function(e){var t=e.input,a=e.label;return i.a.createElement(m.a,{control:i.a.createElement(f.a,{checked:!!t.value,onChange:t.onChange}),label:a})},className:t.formField}))})),i.a.memo((function(e){var t=O();return i.a.createElement(v.a,Object.assign({},e,{type:"checkbox",component:function(e){var t=e.input,a=e.meta,r=e.options,c=e.label,o=t.name,l=t.onChange,u=a.touched,d=a.error,h=t.value,v=r.map((function(e,t){var a=e.label,r=e.value,c=h.includes(r);return i.a.createElement(m.a,{key:t,control:i.a.createElement(f.a,{checked:c,onChange:function(e){var t=Object(n.a)(h);return e.target.checked?t.push(r):t.splice(t.indexOf(r),1),l(t)},name:"".concat(o,"[").concat(t,"]"),value:r}),label:a})}));return i.a.createElement(s.a,{error:u&&!!d,component:"fieldset"},i.a.createElement(b.a,{component:"legend"},c),i.a.createElement(p.a,{row:!0},v),j({touched:u,error:d}))},className:t.formField}))}))),y=i.a.memo((function(e){var t=O();function a(e){return"".concat(e)}return i.a.createElement(v.a,Object.assign({},e,{component:function(e){var n=e.min,c=void 0===n?0:n,o=e.max,l=void 0===o?16:o,s=e.label,u=e.input,d=u.value,f=u.onChange,b=Object(r.a)(u,["value","onChange"]),p=e.meta,v=(p.touched,p.invalid,p.error,Object(r.a)(e,["min","max","label","input","meta"]));return i.a.createElement(m.a,{className:t.sliderFormField,label:s,labelPlacement:"start",control:i.a.createElement(h.a,Object.assign({defaultValue:0,getAriaValueText:a,"aria-labelledby":"number-of-dices",valueLabelDisplay:"auto",step:1,marks:!0,min:c,max:l,value:"number"===typeof d?d:0,onChange:function(e,t){return f(t)}},b,v))})},className:t.formField}))}))},720:function(e,t,a){"use strict";a.r(t);var n=a(48),r=a(58),c=a(635),i=a(620),o=Object(n.d)(Object(c.a)("EnhancedRoomList"),r.g,i.a),l=a(99),s=a(3),u=a(0),d=a.n(u),m=a(611),f=a(11),b=a(25),p=a(162),h=a(627),v=a(18),g=a(118),O=a(549),j=a(5),E=a(223),D={idCanvas:"canvas",idLabel:"label",idSet:"set",idSelectorDiv:"selector_div",idInfoDiv:"info_div",useTrueRandom:!1,useShadows:!0,whiteDice:!1,noresult:!1,diceThrow$:null,diceThrowResult$:null},y=a(230),w=a(638),S=a(639),R=a(678),k=a(721),T=(a(114),a(704)),N=a(702),$=a(705),C=a(701),U=a(703),L=a(151),x=a(96),I=function(e){return Object(L.action)(x.a.SELECTED,e)},_=function(e){return Object(L.action)(x.a.SET_DRAWER_OPEN_VALUE,e)},A=function(e){return Object(L.action)(x.a.SET_CHAT_OPEN_VALUE,e)},F=function(e){return Object(L.action)(x.a.SET_PLAYERS_OPEN_VALUE,e)},P=function(e){return Object(L.action)(x.a.SET_DICE_ROLLING,e)},B=a(49),G=a(622),H=a(152),M=function(){function e(){var t=this;Object(w.a)(this,e),this.store=H.a,this.takeUntil$=new R.a,this._store$=new k.a(1),this._storeUnsubscribeFn=void 0,this._storeUnsubscribeFn=this.store.subscribe((function(){t._store$.next(t.store.getState())}))}return Object(S.a)(e,[{key:"getDiceSetForm",value:function(){return this.store$.pipe(Object(C.a)((function(e){return e.form.diceSetForm})))}},{key:"getSelectedRoomData$",value:function(){return this.store$.pipe(Object(C.a)((function(e){return e.firestore.data.selectedRoom})),Object(N.a)((function(e){return!!e})))}},{key:"getSelectedRoomDataLogs$",value:function(){return this.getSelectedRoomData$().pipe(Object(C.a)((function(e){return e.logs})))}},{key:"getLastRoomLogOnChange$",value:function(){return this.getSelectedRoomDataLogs$().pipe(Object(C.a)((function(e){return Object(l.a)(e).pop()})),Object(N.a)((function(e){return!!e})),Object(U.a)((function(e,t){return e.timestamp===t.timestamp})))}},{key:"getUserProfile$",value:function(){return this.store$.pipe(Object(C.a)((function(e){return e.firebase.profile})))}},{key:"dispatch",value:function(e){return this.store.dispatch(e)}},{key:"hostDestroyed",value:function(){this.takeUntil$.next(),this._storeUnsubscribeFn(),e.instance=null}},{key:"store$",get:function(){return this._store$.asObservable()}}],[{key:"getInstance",value:function(){return e.instance||(e.instance=new e),e.instance}}]),e}();M.instance=void 0;var W=function(){function e(t){Object(w.a)(this,e),this.firestore=t,this.diceThrow$=new R.a,this.diceBeforeThrow$=new R.a,this.diceThrowResult$=new k.a(1),this.profile=null,this.roomUid=null,this.takeUntil$=new R.a,this.storeService=M.getInstance(),this.createSubscriptions()}return Object(S.a)(e,[{key:"hostDestroyed",value:function(){this.takeUntil$.next(),e.instance=null,this.setDiceRolling(!1)}},{key:"createSubscriptions",value:function(){var e=this;this.diceThrow$.pipe(Object(T.a)(this.takeUntil$)).subscribe((function(e){console.log("diceThrow$: ",e)})),this.diceBeforeThrow$.pipe(Object(T.a)(this.takeUntil$)).subscribe((function(t){e.setDiceRolling(!0),console.log("diceBeforeThrow$: ",t)})),this.diceThrowResult$.pipe(Object(T.a)(this.takeUntil$)).subscribe((function(t){e.setDiceRolling(!1),t.emit&&e.firestoreAddNewThrow(t),console.log("diceThrowResult$: ",t)})),this.performDiceThrowWhenNewDiceThrowLogAppears()}},{key:"setDiceRolling",value:function(e){this.storeService.dispatch(P(e))}},{key:"firestoreAddNewThrow",value:function(e){var t=this;if(this.roomUid){e.emit;var a=Object(y.a)(e,["emit"]),n=this.firestore.doc("".concat(B.a.ROOMS,"/").concat(this.roomUid));this.firestore.runTransaction((function(e){return e.get(n).then((function(r){var c,i={authorUid:null===(c=t.profile)||void 0===c?void 0:c.uid,payload:a,timestamp:Date.now().toString(),type:G.a.DICE_ROLL},o=[].concat(Object(l.a)(r.data().logs),[i]);return e.update(n,{logs:o})})).catch((function(e){console.log("Transaction failure:",e)}))}))}}},{key:"performDiceThrowWhenNewDiceThrowLogAppears",value:function(){var e=this;this.storeService.getLastRoomLogOnChange$().pipe(Object(N.a)((function(e){return e.type===G.a.DICE_ROLL})),Object($.a)(this.storeService.getUserProfile$()),Object(N.a)((function(e){var t=Object(g.a)(e,2),a=t[0],n=t[1];return!!n.uid&&a.authorUid!==n.uid})),Object(T.a)(this.takeUntil$)).subscribe((function(t){var a=Object(g.a)(t,1)[0];e.diceThrow$.next(Object(v.a)({},a.payload))}))}},{key:"handleDiceSetFormChanges$",get:function(){return this.storeService.getDiceSetForm().pipe(Object(C.a)((function(e){return null===e||void 0===e?void 0:e.values})),Object(U.a)((function(e,t){return JSON.stringify(e)===JSON.stringify(t)})),Object(C.a)((function(e){return function(e){return Object.keys(e).map((function(t){return e[t]?e[t]+t:""})).filter((function(e){return!!e.length})).join("+")}(e)})),Object(T.a)(this.takeUntil$))}}],[{key:"getInstance",value:function(t){return e.instance||(e.instance=new e(t)),e.instance}}]),e}();W.instance=void 0;var z=a(33),J=a(84);var V=Object(j.a)((function(e){return Object(O.a)({root:{width:"100%",height:"calc(100% - ".concat(e.spacing(2),"px)"),position:"relative"},diceCanvas:{width:"100%",height:"100%"}})}))((function(e){var t=e.classes,a=d.a.useRef(null),n=Object(u.useRef)(null),r=Object(u.useState)(!1),c=Object(g.a)(r,2),i=c[0],o=c[1],l=Object(b.useFirestore)(),s=Object(f.useSelector)(z.a.userProfile),m=Object(f.useSelector)(J.a.selectedRoomUid),p=W.getInstance(l),h=a.current&&a.current.getBoundingClientRect().width||0;return Object(u.useEffect)((function(){p.profile=s}),[s]),Object(u.useEffect)((function(){p.roomUid=m||null}),[m]),Object(u.useEffect)((function(){i||0===h||(window.dice_initialize(n.current,Object(v.a)({},D,{diceThrow$:p.diceThrow$,diceThrowResult$:p.diceThrowResult$,diceBeforeThrow$:p.diceBeforeThrow$,diceSet$:p.handleDiceSetFormChanges$})),o(!0))}),[h]),Object(u.useEffect)((function(){return function(){return p.hostDestroyed()}}),[]),d.a.createElement(E.a,{elevation:3,className:t.root},d.a.createElement("div",{id:"diceCanvasContainer",ref:n,className:t.diceCanvas},d.a.createElement("div",{ref:a,id:"canvas"})))})),q=a(76),Q=a(229),Y=a(119),Z=a(544),K=a(708),X=a(588),ee=a(680),te=a.n(ee),ae=a(682),ne=a.n(ae),re=a(681),ce=a.n(re),ie=a(706),oe=a(707),le=a(727),se=a(534);var ue=d.a.memo(Object(j.a)((function(e){return Object(O.a)({tile:{borderRadius:e.spacing(1),marginRight:e.spacing(2),maxWidth:e.spacing(30),overflow:"hidden",padding:"0 !Important",width:"100%"},title:{color:e.palette.primary.light},titleDisable:{color:e.palette.warning.light},masterGame:{position:"absolute",zIndex:10,top:0,right:0},titleBar:{background:"linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"}})}))((function(e){var t=e.classes,a=e.player,n=e.gameMaster;return d.a.createElement(ie.a,{className:t.tile},d.a.createElement("img",{src:a.avatarUrl||a.photoURL,alt:a.displayName}),d.a.createElement(oe.a,{title:a.displayName,classes:{root:t.titleBar,title:a.connected?t.title:t.titleDisable},actionIcon:d.a.createElement(le.a,{title:a.connected?"Online":"Offline"},d.a.createElement(se.a,{"aria-label":"star ".concat(a.displayName)},a.connected?d.a.createElement(te.a,{className:t.title}):d.a.createElement(ce.a,{className:t.titleDisable})))}),n&&d.a.createElement(le.a,{className:Object(s.a)(t.masterGame,a.connected?t.title:t.titleDisable),title:"Game Master"},d.a.createElement(se.a,{"aria-label":"star ".concat(a.displayName)},d.a.createElement(ne.a,null))))})));var de=Object(j.a)((function(e){return Object(O.a)({root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},gridList:{height:e.spacing(20),width:"100%",flexWrap:"nowrap",transform:"translateZ(0)"}})}))((function(e){var t=e.classes,a=e.visible,n=Object(f.useSelector)(q.a.selectedRoomPlayers),r=Object(f.useSelector)(q.a.selectedRoomGameMasterProfile);return d.a.createElement(Z.a,{direction:"up",in:a},d.a.createElement(K.a,{className:t.gridList,cols:2.5},r&&d.a.createElement(X.a,{in:!0,timeout:300},d.a.createElement(ue,{player:r,gameMaster:!0})),n&&n.map((function(e,t){return d.a.createElement(X.a,{in:!0,key:e.uid,timeout:1e3*t+1300},d.a.createElement(ue,{player:e}))}))))})),me=a(685),fe=a.n(me),be=a(686),pe=a.n(be),he=a(683),ve=a.n(he),ge=a(684),Oe=a.n(ge),je=a(687),Ee=a.n(je),De=a(728),ye=a(724),we=a(293),Se=a(730),Re=a(710),ke=a(731);var Te=d.a.memo(Object(j.a)((function(e){return Object(O.a)({})}))((function(e){var t=e.direction,a=void 0===t?"left":t,n=e.actions,r=d.a.useState(!1),c=Object(g.a)(r,2),i=c[0],o=c[1],l=function(){return o(!1)};return d.a.createElement(Se.a,{ariaLabel:"SpeedDial example",icon:d.a.createElement(ke.a,null),onClose:l,onOpen:function(){return o(!0)},open:i,direction:a},n.map((function(e){return d.a.createElement(Re.a,{key:e.name,icon:e.icon,tooltipTitle:e.name,onClick:function(){return e.callback?e.callback(l):l()}})})))})));var Ne,$e=Object(j.a)((function(e){return Object(O.a)({snackbar:{top:e.spacing(8)}})}))((function(e){var t=e.classes,a=Object(f.useDispatch)(),n=(Object(f.useSelector)(we.a.isGameMasterOfSelectedRoom),Object(f.useSelector)(J.a.drawerOpened)),r=Object(f.useSelector)(J.a.chatOpened),c=Object(f.useSelector)(J.a.playersOpened),i=d.a.useState({type:"success",open:!1,text:""}),o=Object(g.a)(i,2),l=o[0],s=o[1],u=[],m=[{icon:n?d.a.createElement(ve.a,null):d.a.createElement(Oe.a,null),name:n?"Hide Nav":"Show Nav",callback:function(e){return a(_(!n))}},{icon:d.a.createElement(fe.a,null),name:r?"Hide chat":"Show Chat",callback:function(e){return a(A(!r))}},{icon:d.a.createElement(pe.a,null),name:c?"Hide players":"Show players",callback:function(e){return a(F(!c))}},{icon:d.a.createElement(Ee.a,null),name:"Copy Room Url",callback:function(e){navigator.permissions.query({name:"clipboard-write"}).then((function(e){"granted"!==e.state&&"prompt"!==e.state||navigator.clipboard.writeText(window.location.href).then((function(){return s({type:"success",open:!0,text:"Room URL copied to clipboard!"})}),(function(){return s({type:"error",open:!0,text:"Upss.. there was an error"})}))}))}}].concat(u);return d.a.createElement(d.a.Fragment,null,d.a.createElement(Te,{actions:m,direction:"up"}),d.a.createElement(De.a,{className:t.snackbar,anchorOrigin:{vertical:"top",horizontal:"right"},open:l.open,autoHideDuration:6e3,onClose:function(){return s(Object(v.a)({},l,{open:!1}))}},d.a.createElement(ye.a,{onClose:function(){return s(Object(v.a)({},l,{open:!1}))},severity:l.type},l.text)))})),Ce=a(603),Ue=a(605),Le=a(599),xe=a(604),Ie=a(89),_e=a(719),Ae=a(623),Fe=a(632),Pe=Object(m.a)((function(e){return{inputSlider:{width:"100%",marginLeft:e.spacing(0),paddingRight:e.spacing(2),minWidth:e.spacing(40)}}}));var Be=d.a.memo(Object(_e.a)({form:"diceSetForm",initialValues:(Ne={},Object(Ie.a)(Ne,Ae.a.D4,0),Object(Ie.a)(Ne,Ae.a.D6,0),Object(Ie.a)(Ne,Ae.a.D8,0),Object(Ie.a)(Ne,Ae.a.D10,0),Object(Ie.a)(Ne,Ae.a.D12,0),Object(Ie.a)(Ne,Ae.a.D20,0),Object(Ie.a)(Ne,Ae.a.D100,0),Ne)})((function(e){var t=e.diceType,a=Pe();return d.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},d.a.createElement("h2",null,"Set your dices!"),d.a.createElement("div",{className:a.inputSlider},null===t||void 0===t?void 0:t.map((function(e){return d.a.createElement(Fe.b,Object.assign({key:e},G.b[e]))}))))}))),Ge=a(536),He=a(117),Me=a(590);var We=function(e){var t=e.throwResult;return d.a.createElement("article",null,d.a.createElement("h2",null,"Throw result:"),d.a.createElement(Me.a,null,function(){if(!t)return"";var e={};return null===t||void 0===t||t.diceSet.forEach((function(a,n){e[a]=[].concat(Object(l.a)(e[a]||[]),[null===t||void 0===t?void 0:t.result[n]])})),console.log({resultObject:e}),Object.keys(e).map((function(t){return d.a.createElement(Ge.a,{key:t},d.a.createElement(He.a,{variant:"h2",component:"div"},t,": ",e[t].join(", ")))}))}()))};var ze=Object(j.a)((function(e){return Object(O.a)({root:{display:"flex",backgroundColor:"#f4f4f280"},details:{display:"flex",flexDirection:"column"},content:{flex:"1 0 auto"},cover:{width:e.spacing(18)},playIcon:{height:38,width:38}})}))((function(e){var t=e.classes,a=e.visible,n=void 0===a||a,r=Object(b.useFirestore)(),c=Object(f.useSelector)(q.a.selectedRoom),i=W.getInstance(r),o=Object(u.useState)(null),l=Object(g.a)(o,2),s=l[0],m=l[1];return Object(u.useEffect)((function(){i.diceThrowResult$.subscribe((function(e){return m(e)}))}),[]),d.a.createElement(X.a,{in:!!c&&n},d.a.createElement(Ce.a,{className:t.root,onClick:function(){return m(null)}},d.a.createElement("div",{className:t.details},d.a.createElement(Ue.a,{className:t.content},d.a.createElement(Le.a,{in:!s},d.a.createElement(Be,{diceType:null===c||void 0===c?void 0:c.diceType})),d.a.createElement(Le.a,{in:!!s},d.a.createElement(We,{throwResult:s})))),d.a.createElement(xe.a,{className:t.cover,image:"".concat("/roll-a-dice","/assets/images/avatar-1.jpg"),title:"Bot avatar"})))})),Je=Object(m.a)((function(e){return{root:{position:"relative",margin:e.spacing(-6,-4),height:"calc(100% + ".concat(e.spacing(12),"px)")},diceWrapper:{},chatter:{zIndex:1e5,position:"fixed",bottom:e.spacing(4),right:e.spacing(2),transition:"bottom 225ms cubic-bezier(0, 0, 0.2, 1) 0ms"},chatterLower:{bottom:e.spacing(4)},speedDial:{position:"absolute",bottom:e.spacing(25),left:e.spacing(3),zIndex:10,transition:"bottom 225ms cubic-bezier(0, 0, 0.2, 1) 0ms"},speedDialLower:{bottom:e.spacing(3)},cssGrid:{height:"100%",display:"grid",gridTemplateColumns:"1fr",gridTemplateRows:"1fr 160px",rowGap:"".concat(e.spacing(2),"px"),columnGap:"".concat(e.spacing(2),"px"),padding:e.spacing(2,2,0,2)},cssItem1:{gridColumn:1,gridRow:1},cssItem2:{gridColumn:1,gridRow:2},diceDashboard:{position:"absolute",top:e.spacing(3),left:e.spacing(3)}}}));t.default=o((function(e){var t=e.match,a=Je(),n=Object(f.useDispatch)(),r=Object(b.useFirestore)(),c=Object(f.useSelector)(J.a.playersOpened),i=Object(f.useSelector)(J.a.chatOpened),o=Object(f.useSelector)(q.a.selectedRoom),m=Object(f.useSelector)(J.a.selectedRoomUid),v=Object(f.useSelector)(Y.a.match),g=Object(f.useSelector)(z.a.userProfile),O=Object(f.useSelector)(J.a.diceRolling);return Object(u.useEffect)((function(){return JSON.stringify(t)!==JSON.stringify(v)&&n(Q.a.matchChange(t)),void n(I(v.params.roomId))})),Object(u.useEffect)((function(){!function(){if((null===o||void 0===o?void 0:o.players)&&g.uid&&o.gameMaster.uid!==g.uid&&-1===o.players.indexOf(g.uid)){var e=r.doc("".concat(B.a.ROOMS,"/").concat(m));r.runTransaction((function(t){return t.get(e).then((function(a){var n=[].concat(Object(l.a)(a.data().players),[g.uid]);return t.update(e,{players:n})})).catch((function(e){console.log("Transaction failure:",e)}))}))}}()}),[m,null===o||void 0===o?void 0:o.createdAt,g.uid]),Object(u.useEffect)((function(){return function(){n(I(null))}}),[]),Object(u.useEffect)((function(){n(p.a.setSelectedChat((null===o||void 0===o?void 0:o.chatUid)||null))}),[null===o||void 0===o?void 0:o.chatUid]),d.a.createElement("section",{className:a.root},d.a.createElement("div",{className:Object(s.a)(a.chatter,!c&&a.chatterLower)},d.a.createElement(h.a,{visbile:i&&!O})),d.a.createElement("div",{className:a.cssGrid},d.a.createElement("div",{className:a.cssItem1},d.a.createElement(V,null)),d.a.createElement("div",{className:a.cssItem2},d.a.createElement(de,{visible:c}))),d.a.createElement("nav",{className:Object(s.a)(a.speedDial,!c&&a.speedDialLower)},d.a.createElement($e,null)),d.a.createElement("nav",{className:a.diceDashboard},d.a.createElement(ze,{visible:!O})))}))}}]);
//# sourceMappingURL=7.3c35866e.chunk.js.map