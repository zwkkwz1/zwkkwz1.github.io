(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{"265":function(e,t,n){var r=n(266);"string"==typeof r&&(r=[[e.i,r,""]]);var o={"sourceMap":!1,"insertAt":"top","hmr":!0,"transform":void 0,"insertInto":void 0};n(262)(r,o);r.locals&&(e.exports=r.locals)},"266":function(e,t,n){(e.exports=n(261)(!1)).push([e.i,"button {\n  position: relative;\n  display: block;\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 14px;\n  padding-right: 14px;\n  box-sizing: border-box;\n  font-size: 18px;\n  text-align: center;\n  text-decoration: none;\n  line-height: 2.55555556;\n  border-radius: 5px;\n  -webkit-tap-highlight-color: transparent;\n  overflow: hidden;\n  color: #000000;\n  background-color: #F8F8F8;\n}\n\nbutton[plain] {\n  color: #353535;\n  border: 1px solid #353535;\n  background-color: transparent;\n}\n\nbutton[plain][disabled] {\n  color: rgba(0, 0, 0, 0.3);\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  background-color: #F7F7F7;\n}\n\nbutton[type=primary] {\n  color: #FFFFFF;\n  background-color: #1AAD19;\n}\n\nbutton[type=primary][plain] {\n  color: #1aad19;\n  border: 1px solid #1aad19;\n  background-color: transparent;\n}\n\nbutton[type=primary][plain][disabled] {\n  color: rgba(0, 0, 0, 0.3);\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  background-color: #F7F7F7;\n}",""])},"267":function(e,t,n){"use strict";n.d(t,"z",function(){return a}),n.d(t,"c",function(){return i}),n.d(t,"f",function(){return u}),n.d(t,"F",function(){return c}),n.d(t,"D",function(){return l}),n.d(t,"s",function(){return s}),n.d(t,"t",function(){return p}),n.d(t,"o",function(){return f}),n.d(t,"e",function(){return d}),n.d(t,"B",function(){return m}),n.d(t,"p",function(){return b}),n.d(t,"r",function(){return y}),n.d(t,"x",function(){return v}),n.d(t,"I",function(){return g}),n.d(t,"d",function(){return _}),n.d(t,"m",function(){return w}),n.d(t,"N",function(){return O}),n.d(t,"J",function(){return T}),n.d(t,"g",function(){return x}),n.d(t,"v",function(){return j}),n.d(t,"w",function(){return k}),n.d(t,"C",function(){return E}),n.d(t,"l",function(){return P}),n.d(t,"b",function(){return C}),n.d(t,"h",function(){return I}),n.d(t,"M",function(){return S}),n.d(t,"H",function(){return F}),n.d(t,"u",function(){return D}),n.d(t,"j",function(){return G}),n.d(t,"y",function(){return N}),n.d(t,"O",function(){return A}),n.d(t,"S",function(){return J}),n.d(t,"A",function(){return L}),n.d(t,"n",function(){return q}),n.d(t,"P",function(){return B}),n.d(t,"Q",function(){return R}),n.d(t,"a",function(){return M}),n.d(t,"K",function(){return U}),n.d(t,"i",function(){return z}),n.d(t,"E",function(){return K}),n.d(t,"L",function(){return H}),n.d(t,"G",function(){return W}),n.d(t,"k",function(){return h}),n.d(t,"R",function(){return V}),n.d(t,"q",function(){return Q});var r=n(3),o=n(5),a=function loadTeams(e){return r.a.httpGql(o.ac,e,!0)},i=function addTeamAlbum(e){return r.a.post("team_album",e)},u=function changeTeamAlbum(e){var t=e.id;return delete e.id,r.a.put("team_album/"+t,e)},c=function teamAlbumEvalLike(e){var t=e.id;return delete e.id,r.a.put("team_album_eval/isLike/"+t,e)},l=function saveEvalValue(e){return r.a.post("team_album_eval",e)},s=function getTeamAlbum(e){return r.a.httpGql(o.Pb,e,!0)},p=function getTeamAlbumEval(e){return r.a.httpGql(o.Qb,e,!0)},f=function getEvalStatus(e){return r.a.httpGql(o.S,e,!0)},d=function applyUnfrozen(e){return r.a.post("team/applyUnfrozen",e)},m=function recordInfo(e){return r.a.post("record_information",e)},b=function getFillingInfo(e){return r.a.httpGql(o.a,e)},h=function editFillingInfo(e,t){return r.a.put("record_information/"+e,t)},y=function getTeam(e){return r.a.httpGql(o.Nb,e,!0)},v=function joinTeam(e){return r.a.post("team_user",e)},g=function teamLable(e){return r.a.httpGql(o.Ub,e)},_=function addTeamLable(e){return r.a.post("team_lable",e)},w=function eidtTeamLable(e){var t=e.id;return delete e.id,r.a.put("team_lable/"+t,e)},O=function teamUserMsg(e){return r.a.httpGql(o.Xb,e)},T=function teamLableUsers(e){return r.a.httpGql(o.Vb,e)},x=function deleteLableUsers(e){return r.a.delete("team_lable_user/batch",e)},j=function getTeamUsers(e){return r.a.httpGql(o.Yb,e)},k=function joinLableTeam(e){return r.a.post("team_lable_user",e)},E=function removeLableUser(e){return r.a.delete("team_lable_user/"+e.id)},P=function editTeamMsg(e){return r.a.put("team/"+e.id,e)},C=function addTeam(e){return r.a.post("team",e)},I=function deletePic(e){return r.a.delete("file-upload/"+e.id)},S=function teamUserApply(e){return r.a.httpGql(o.mc,e)},F=function teamCyclActivities(e){return r.a.httpGql(o.Tb,e,!0)},D=function getTeamAlbums(e){return r.a.httpGql(o.Sb,e)},G=function disLikeAct(e){return r.a.put("activity_user/"+e.id+"/dislike",e)},N=function likeAct(e){return r.a.put("activity_user/"+e.id+"/like",e)},A=function teamWechatUsers(e){return r.a.httpGql(o.Zb,e,!0)},J=function writtenOffTeam(e){return r.a.put("team/"+e.id+"/writtenOff")},L=function logoutTeam(e){return r.a.delete("team_user",e)},q=function frozenTeam(e){return r.a.put("team/"+e+"/frozen")},B=function unfrozenTeam(e){return r.a.put("team/"+e+"/unfrozen")},R=function userApplyAudit(e){var t=e.id;return delete e.id,r.a.put("team_user/"+t+"/apply",e)},M=function activeTeams(e){return r.a.httpGql(o.b,e,!0)},U=function teamLables(e){return r.a.httpGql(o.Wb,e)},z=function deleteTeamLable(e){return r.a.delete("team_lable/"+e)},K=function setTeamRole(e){return r.a.put("team_user/"+e.id+"/setRole",e)},H=function teamTeransfer(e){return r.a.put("team/"+e.id+"/changeRole",e)},W=function teamApplyDetail(e){return r.a.httpGql(o.lc,e)},V=function userCompanys(e){return r.a.httpGql(o.ec,e)},Q=function getMyCompanys(e){return r.a.httpGql(o.ib,e)}},"268":function(e,t,n){var r=n(269);"string"==typeof r&&(r=[[e.i,r,""]]);var o={"sourceMap":!1,"insertAt":"top","hmr":!0,"transform":void 0,"insertInto":void 0};n(262)(r,o);r.locals&&(e.exports=r.locals)},"269":function(e,t,n){(e.exports=n(261)(!1)).push([e.i,"input {\n  display: block;\n  height: 1.4rem;\n  text-align: inherit;\n  text-overflow: clip;\n  overflow: hidden;\n  white-space: nowrap;\n}",""])},"276":function(e,t,n){"use strict";n(258);var r=n(2),o=n(259),a=n(260),i=n.n(a),u=(n(265),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}),c=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=n,e}var l=function(e){function Button(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Button);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Button.__proto__||Object.getPrototypeOf(Button)).apply(this,arguments));return e.state={"hover":!1,"touch":!1},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Button,r["l"].Component),c(Button,[{"key":"render","value":function render(){var e,t=this,n=this.props,a=n.children,c=n.disabled,l=n.className,s=n.style,p=n.onClick,f=n.onTouchStart,d=n.onTouchEnd,m=n.hoverClass,b=void 0===m?"button-hover":m,h=n.hoverStartTime,y=void 0===h?20:h,v=n.hoverStayTime,g=void 0===v?70:v,_=n.size,w=n.plain,O=n.loading,T=void 0!==O&&O,x=n.type,j=void 0===x?"default":x,k=l||i()("weui-btn",(_defineProperty(e={},""+b,this.state.hover&&!c&&"none"!==b),_defineProperty(e,"weui-btn_plain-"+j,w),_defineProperty(e,"weui-btn_"+j,!w&&j),_defineProperty(e,"weui-btn_mini","mini"===_),_defineProperty(e,"weui-btn_loading",T),_defineProperty(e,"weui-btn_disabled",c),e));return r.l.createElement("button",u({},Object(o.a)(this.props,["hoverClass","onTouchStart","onTouchEnd"]),{"className":k,"style":s,"onClick":p,"disabled":c,"onTouchStart":function _onTouchStart(e){t.setState(function(){return{"touch":!0}}),b&&"none"!==b&&!c&&setTimeout(function(){t.state.touch&&t.setState(function(){return{"hover":!0}})},y),f&&f(e)},"onTouchEnd":function _onTouchEnd(e){t.setState(function(){return{"touch":!1}}),b&&"none"!==b&&!c&&setTimeout(function(){t.state.touch||t.setState(function(){return{"hover":!1}})},g),d&&d(e)}}),T&&r.l.createElement("i",{"class":"weui-loading"}),a)}}]),Button}();t.a=l},"283":function(e,t,n){"use strict";n(258);var r=n(2),o=n(259),a=n(260),i=n.n(a),u=(n(268),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}),c=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();function getTrueType(e,t,n){if(!e)throw new Error("unexpected type");return"search"===t&&(e="search"),n&&(e="password"),"digit"===e&&(e="number"),e}var l=function(e){function Input(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Input);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Input.__proto__||Object.getPrototypeOf(Input)).apply(this,arguments));return e.onInput=e.onInput.bind(e),e.onFocus=e.onFocus.bind(e),e.onBlur=e.onBlur.bind(e),e.onKeyDown=e.onKeyDown.bind(e),e.handleComposition=e.handleComposition.bind(e),e.isOnComposition=!1,e.onInputExcuted=!1,e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Input,r["l"].Component),c(Input,[{"key":"componentDidMount","value":function componentDidMount(){"file"===this.props.type&&this.inputRef.addEventListener("change",this.onInput)}},{"key":"componentWillUnmount","value":function componentWillUnmount(){"file"===this.props.type&&this.inputRef.removeEventListener("change",this.onInput)}},{"key":"onInput","value":function onInput(e){var t=this.props,n=t.type,r=t.maxLength,o=t.confirmType,a=t.password,i=t.onInput,onInput=void 0===i?"":i,u=t.onChange,c=void 0===u?"":u;if(!this.isOnComposition&&!this.onInputExcuted){var l=e.target.value,s=getTrueType(n,o,a);if(this.onInputExcuted=!0,"number"===s&&l&&r<=l.length&&(l=l.substring(0,r),e.target.value=l),Object.defineProperty(e,"detail",{"enumerable":!0,"value":{"value":l}}),!(["number","file"].indexOf(s)>=0)){var p=e.target.selectionEnd;setTimeout(function(){e.target.selectionStart=p,e.target.selectionEnd=p})}if(c)return c(e);if(onInput)return onInput(e)}}},{"key":"onFocus","value":function onFocus(e){var onFocus=this.props.onFocus;this.onInputExcuted=!1,Object.defineProperty(e,"detail",{"enumerable":!0,"value":{"value":e.target.value}}),onFocus&&onFocus(e)}},{"key":"onBlur","value":function onBlur(e){var onBlur=this.props.onBlur;Object.defineProperty(e,"detail",{"enumerable":!0,"value":{"value":e.target.value}}),onBlur&&onBlur(e)}},{"key":"onKeyDown","value":function onKeyDown(e){var t=this.props,n=t.onConfirm,onKeyDown=t.onKeyDown;this.onInputExcuted=!1,onKeyDown&&onKeyDown(e),13===e.keyCode&&n&&(Object.defineProperty(e,"detail",{"enumerable":!0,"value":{"value":e.target.value}}),n(e))}},{"key":"handleComposition","value":function handleComposition(e){e.target instanceof HTMLInputElement&&("compositionend"===e.type?(this.isOnComposition=!1,this.onInputExcuted=!1,this.onInput(e)):this.isOnComposition=!0)}},{"key":"render","value":function render(){var e=this,t=this.props,n=t.className,a=void 0===n?"":n,c=t.placeholder,l=t.type,s=void 0===l?"text":l,p=t.password,f=t.disabled,d=t.maxLength,m=t.confirmType,b=void 0===m?"":m,h=t.focus,y=void 0!==h&&h,v=t.value,g=i()("weui-input",a),_=Object(o.a)(this.props,["className","placeholder","disabled","max","onChange","onFocus","onBlur","type","focus"]);return"value"in this.props&&(_.value=function fixControlledValue(e){return void 0===e||null===e?"":e}(v)),r.l.createElement("input",u({"ref":function ref(t){e.inputRef=t}},_,{"className":g,"placeholder":c,"disabled":f,"maxlength":d,"onInput":this.onInput,"onFocus":this.onFocus,"onBlur":this.onBlur,"autofocus":y,"onKeyDown":this.onKeyDown,"type":getTrueType(s,b,p),"onCompositionStart":this.handleComposition,"onCompositionEnd":this.handleComposition}))}}]),Input}();l.defaultProps={"type":"text"},t.a=l},"307":function(e,t,n){},"660":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return g});var r=n(4),o=n.n(r),a=n(2),i=n(6),u=n(254),c=n(598),l=n(599),s=n(283),p=n(276),f=n(14),d=n(8),m=n(267),b=n(29),h=(n(307),function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw a}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()),y=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),v=function get(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:get(o,t,n)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(n):void 0};function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function step(r,o){try{var a=t[r](o),i=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(i).then(function(e){step("next",e)},function(e){step("throw",e)});e(i)}("next")})}}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var g=function(e){function JoinTeam(){var e,t,n;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,JoinTeam);for(var r=arguments.length,o=Array(r),a=0;a<r;a++)o[a]=arguments[a];return t=n=_possibleConstructorReturn(this,(e=JoinTeam.__proto__||Object.getPrototypeOf(JoinTeam)).call.apply(e,[this].concat(o))),n.config={},_possibleConstructorReturn(n,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(JoinTeam,i["a"].Component),y(JoinTeam,[{"key":"render","value":function render(){var e,t,n=this,r=i.a.useState(0),y=h(r,2),v=(y[0],y[1]),g=i.a.useState({}),_=h(g,2),w=_[0],O=_[1],T=i.a.useState(""),x=h(T,2),j=x[0],k=x[1],E=i.a.useRef(""),P=i.a.useState({}),C=h(P,2),I=C[0],S=C[1],F=i.a.useRouter(),D=Object(f.u)(),G=function validatePersonForm(e){return!!e.captcha||(Object(b.c)("验证码不能为空"),!1)},N=(e=_asyncToGenerator(o.a.mark(function _callee(){var e,t,r;return o.a.wrap(function _callee$(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(f.z)(0);case 2:if(0===(e=n.sent)){n.next=6;break}return Object(f.v)(e,{"nextUrl":"/pages/index/index"}),n.abrupt("return");case 6:return n.next=8,Object(u.a)();case 8:return t=n.sent,Object(d.b)("systemInfo",t),Object(d.b)("statusBarHeight",-5),v(-5),E.current=F.params.id||"",S({"timeStamp":F.params.timeStamp,"captcha":F.params.captcha}),n.next=16,Object(m.r)({"id":E.current});case 16:r=n.sent,console.log(r),(r=r.team).logos.length>0?r.picture=Object(f.w)(r.logos[0].url):r.picture=""+Object(d.a)("defaultPic").TEAM_LOGO,O(r);case 21:case"end":return n.stop()}},_callee,n)})),function onload(){return e.apply(this,arguments)}),A=(t=_asyncToGenerator(o.a.mark(function _callee2(){var e,t,r,a,i;return o.a.wrap(function _callee2$(n){for(;;)switch(n.prev=n.next){case 0:if((e=w).captcha=j,!G(e)){n.next=28;break}if(!((new Date).getTime()-I.timeStamp>3e5)){n.next=9;break}return n.next=7,Object(b.b)({"title":"提示","content":"验证码已过期，请重新获取验证码！","hideCancel":!0});case 7:n.next=28;break;case 9:if(j===I.captcha){n.next=14;break}return n.next=12,Object(b.b)({"title":"提示","content":"您输入的验证码不正确，请重新输入！","hideCancel":!0});case 12:n.next=28;break;case 14:return t=D.uid,r={"team_id":E.current,"uid":t},n.next=18,Object(m.x)(r);case 18:if(0!==(a=n.sent).code){n.next=27;break}return i=a.msg,a.msg&&"success"===a.msg&&(i="加入成功"),n.next=24,Object(b.c)(i,"success");case 24:Object(f.G)("/userPages/pages/user_index"),n.next=28;break;case 27:Object(b.c)(a.data||a.msg);case 28:case"end":return n.stop()}},_callee2,n)})),function teamFormSubmit(){return t.apply(this,arguments)});return i.a.useDidShow(function(){Object(f.L)("加入团队")}),i.a.useEffect(function(){N()},[]),a.l.createElement(c.a,{"className":"joinTeam"},a.l.createElement(c.a,{"className":"body about-body"},a.l.createElement(c.a,{"className":"content"},a.l.createElement(c.a,{"className":"apply-check"},a.l.createElement(c.a,{"className":"list clear"},a.l.createElement(c.a,{"className":"team-logo"},a.l.createElement(l.a,{"className":"img","src":w.picture,"style":"width:104px;height:104px;"})),a.l.createElement(c.a,{"className":"team-name"},w.team_name||"未知团队"),a.l.createElement(c.a,{"className":"introduction"},"团队简介：",w.description||"暂无简介")),a.l.createElement(c.a,{"className":"list clear"},a.l.createElement(c.a,{"className":"code clear"},a.l.createElement(c.a,{"className":"title left"},"验证码"),a.l.createElement(c.a,{"className":"input right"},a.l.createElement(s.a,{"type":"text","className":"input-txt","name":"captcha","onInput":function captchaChange(e){var t=e.detail.value||"";k(t)}.bind(this),"value":j,"placeholder":"请输入验证码"})))),a.l.createElement(c.a,{"className":"box clear"},a.l.createElement(c.a,{"className":"btn-group"},a.l.createElement(c.a,{"className":"btn-reback left","onClick":function onClick(){return function turnIndex(){i.a.reLaunch({"url":"/pages/index/index"})}()}},"返回首页"),a.l.createElement(p.a,{"className":"btn-yes right","style":"-webkit-appearance: none;border-radius: 0;font-size: 22px;border:none","onClick":function onClick(){return A()}},"确定")))))))}},{"key":"componentDidMount","value":function componentDidMount(){v(JoinTeam.prototype.__proto__||Object.getPrototypeOf(JoinTeam.prototype),"componentDidMount",this)&&v(JoinTeam.prototype.__proto__||Object.getPrototypeOf(JoinTeam.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){v(JoinTeam.prototype.__proto__||Object.getPrototypeOf(JoinTeam.prototype),"componentDidShow",this)&&v(JoinTeam.prototype.__proto__||Object.getPrototypeOf(JoinTeam.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){v(JoinTeam.prototype.__proto__||Object.getPrototypeOf(JoinTeam.prototype),"componentDidHide",this)&&v(JoinTeam.prototype.__proto__||Object.getPrototypeOf(JoinTeam.prototype),"componentDidHide",this).call(this)}}]),JoinTeam}();g.config={}}}]);