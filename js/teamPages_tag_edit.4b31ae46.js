(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{"264":function(t,e,n){var r=n(265);"string"==typeof r&&(r=[[t.i,r,""]]);var o={"sourceMap":!1,"insertAt":"top","hmr":!0,"transform":void 0,"insertInto":void 0};n(261)(r,o);r.locals&&(t.exports=r.locals)},"265":function(t,e,n){(t.exports=n(260)(!1)).push([t.i,"button {\n  position: relative;\n  display: block;\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 14px;\n  padding-right: 14px;\n  box-sizing: border-box;\n  font-size: 18px;\n  text-align: center;\n  text-decoration: none;\n  line-height: 2.55555556;\n  border-radius: 5px;\n  -webkit-tap-highlight-color: transparent;\n  overflow: hidden;\n  color: #000000;\n  background-color: #F8F8F8;\n}\n\nbutton[plain] {\n  color: #353535;\n  border: 1px solid #353535;\n  background-color: transparent;\n}\n\nbutton[plain][disabled] {\n  color: rgba(0, 0, 0, 0.3);\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  background-color: #F7F7F7;\n}\n\nbutton[type=primary] {\n  color: #FFFFFF;\n  background-color: #1AAD19;\n}\n\nbutton[type=primary][plain] {\n  color: #1aad19;\n  border: 1px solid #1aad19;\n  background-color: transparent;\n}\n\nbutton[type=primary][plain][disabled] {\n  color: rgba(0, 0, 0, 0.3);\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  background-color: #F7F7F7;\n}",""])},"266":function(t,e,n){"use strict";n.d(e,"z",function(){return i}),n.d(e,"c",function(){return a}),n.d(e,"f",function(){return u}),n.d(e,"F",function(){return c}),n.d(e,"D",function(){return l}),n.d(e,"s",function(){return s}),n.d(e,"t",function(){return p}),n.d(e,"o",function(){return f}),n.d(e,"e",function(){return d}),n.d(e,"B",function(){return b}),n.d(e,"p",function(){return h}),n.d(e,"r",function(){return y}),n.d(e,"x",function(){return v}),n.d(e,"I",function(){return g}),n.d(e,"d",function(){return _}),n.d(e,"m",function(){return w}),n.d(e,"N",function(){return O}),n.d(e,"J",function(){return T}),n.d(e,"g",function(){return x}),n.d(e,"v",function(){return E}),n.d(e,"w",function(){return j}),n.d(e,"C",function(){return k}),n.d(e,"l",function(){return P}),n.d(e,"b",function(){return C}),n.d(e,"h",function(){return I}),n.d(e,"M",function(){return S}),n.d(e,"H",function(){return F}),n.d(e,"u",function(){return D}),n.d(e,"j",function(){return G}),n.d(e,"y",function(){return A}),n.d(e,"O",function(){return q}),n.d(e,"S",function(){return B}),n.d(e,"A",function(){return L}),n.d(e,"n",function(){return R}),n.d(e,"P",function(){return N}),n.d(e,"Q",function(){return M}),n.d(e,"a",function(){return z}),n.d(e,"K",function(){return U}),n.d(e,"i",function(){return K}),n.d(e,"E",function(){return H}),n.d(e,"L",function(){return W}),n.d(e,"G",function(){return J}),n.d(e,"k",function(){return m}),n.d(e,"R",function(){return V}),n.d(e,"q",function(){return Q});var r=n(3),o=n(5),i=function loadTeams(t){return r.a.httpGql(o.ac,t,!0)},a=function addTeamAlbum(t){return r.a.post("team_album",t)},u=function changeTeamAlbum(t){var e=t.id;return delete t.id,r.a.put("team_album/"+e,t)},c=function teamAlbumEvalLike(t){var e=t.id;return delete t.id,r.a.put("team_album_eval/isLike/"+e,t)},l=function saveEvalValue(t){return r.a.post("team_album_eval",t)},s=function getTeamAlbum(t){return r.a.httpGql(o.Pb,t,!0)},p=function getTeamAlbumEval(t){return r.a.httpGql(o.Qb,t,!0)},f=function getEvalStatus(t){return r.a.httpGql(o.S,t,!0)},d=function applyUnfrozen(t){return r.a.post("team/applyUnfrozen",t)},b=function recordInfo(t){return r.a.post("record_information",t)},h=function getFillingInfo(t){return r.a.httpGql(o.a,t)},m=function editFillingInfo(t,e){return r.a.put("record_information/"+t,e)},y=function getTeam(t){return r.a.httpGql(o.Nb,t,!0)},v=function joinTeam(t){return r.a.post("team_user",t)},g=function teamLable(t){return r.a.httpGql(o.Ub,t)},_=function addTeamLable(t){return r.a.post("team_lable",t)},w=function eidtTeamLable(t){var e=t.id;return delete t.id,r.a.put("team_lable/"+e,t)},O=function teamUserMsg(t){return r.a.httpGql(o.Xb,t)},T=function teamLableUsers(t){return r.a.httpGql(o.Vb,t)},x=function deleteLableUsers(t){return r.a.delete("team_lable_user/batch",t)},E=function getTeamUsers(t){return r.a.httpGql(o.Yb,t)},j=function joinLableTeam(t){return r.a.post("team_lable_user",t)},k=function removeLableUser(t){return r.a.delete("team_lable_user/"+t.id)},P=function editTeamMsg(t){return r.a.put("team/"+t.id,t)},C=function addTeam(t){return r.a.post("team",t)},I=function deletePic(t){return r.a.delete("file-upload/"+t.id)},S=function teamUserApply(t){return r.a.httpGql(o.mc,t)},F=function teamCyclActivities(t){return r.a.httpGql(o.Tb,t,!0)},D=function getTeamAlbums(t){return r.a.httpGql(o.Sb,t)},G=function disLikeAct(t){return r.a.put("activity_user/"+t.id+"/dislike",t)},A=function likeAct(t){return r.a.put("activity_user/"+t.id+"/like",t)},q=function teamWechatUsers(t){return r.a.httpGql(o.Zb,t,!0)},B=function writtenOffTeam(t){return r.a.put("team/"+t.id+"/writtenOff")},L=function logoutTeam(t){return r.a.delete("team_user",t)},R=function frozenTeam(t){return r.a.put("team/"+t+"/frozen")},N=function unfrozenTeam(t){return r.a.put("team/"+t+"/unfrozen")},M=function userApplyAudit(t){var e=t.id;return delete t.id,r.a.put("team_user/"+e+"/apply",t)},z=function activeTeams(t){return r.a.httpGql(o.b,t,!0)},U=function teamLables(t){return r.a.httpGql(o.Wb,t)},K=function deleteTeamLable(t){return r.a.delete("team_lable/"+t)},H=function setTeamRole(t){return r.a.put("team_user/"+t.id+"/setRole",t)},W=function teamTeransfer(t){return r.a.put("team/"+t.id+"/changeRole",t)},J=function teamApplyDetail(t){return r.a.httpGql(o.lc,t)},V=function userCompanys(t){return r.a.httpGql(o.ec,t)},Q=function getMyCompanys(t){return r.a.httpGql(o.ib,t)}},"267":function(t,e,n){var r=n(268);"string"==typeof r&&(r=[[t.i,r,""]]);var o={"sourceMap":!1,"insertAt":"top","hmr":!0,"transform":void 0,"insertInto":void 0};n(261)(r,o);r.locals&&(t.exports=r.locals)},"268":function(t,e,n){(t.exports=n(260)(!1)).push([t.i,"input {\n  display: block;\n  height: 1.4rem;\n  text-align: inherit;\n  text-overflow: clip;\n  overflow: hidden;\n  white-space: nowrap;\n}",""])},"275":function(t,e,n){"use strict";n(257);var r=n(2),o=n(258),i=n(259),a=n.n(i),u=(n(264),Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}),c=function(){function defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,e,n){return e&&defineProperties(t.prototype,e),n&&defineProperties(t,n),t}}();function _defineProperty(t,e,n){return e in t?Object.defineProperty(t,e,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):t[e]=n,t}var l=function(t){function Button(){!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,Button);var t=function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(Button.__proto__||Object.getPrototypeOf(Button)).apply(this,arguments));return t.state={"hover":!1,"touch":!1},t}return function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{"constructor":{"value":t,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(Button,r["l"].Component),c(Button,[{"key":"render","value":function render(){var t,e=this,n=this.props,i=n.children,c=n.disabled,l=n.className,s=n.style,p=n.onClick,f=n.onTouchStart,d=n.onTouchEnd,b=n.hoverClass,h=void 0===b?"button-hover":b,m=n.hoverStartTime,y=void 0===m?20:m,v=n.hoverStayTime,g=void 0===v?70:v,_=n.size,w=n.plain,O=n.loading,T=void 0!==O&&O,x=n.type,E=void 0===x?"default":x,j=l||a()("weui-btn",(_defineProperty(t={},""+h,this.state.hover&&!c&&"none"!==h),_defineProperty(t,"weui-btn_plain-"+E,w),_defineProperty(t,"weui-btn_"+E,!w&&E),_defineProperty(t,"weui-btn_mini","mini"===_),_defineProperty(t,"weui-btn_loading",T),_defineProperty(t,"weui-btn_disabled",c),t));return r.l.createElement("button",u({},Object(o.a)(this.props,["hoverClass","onTouchStart","onTouchEnd"]),{"className":j,"style":s,"onClick":p,"disabled":c,"onTouchStart":function _onTouchStart(t){e.setState(function(){return{"touch":!0}}),h&&"none"!==h&&!c&&setTimeout(function(){e.state.touch&&e.setState(function(){return{"hover":!0}})},y),f&&f(t)},"onTouchEnd":function _onTouchEnd(t){e.setState(function(){return{"touch":!1}}),h&&"none"!==h&&!c&&setTimeout(function(){e.state.touch||e.setState(function(){return{"hover":!1}})},g),d&&d(t)}}),T&&r.l.createElement("i",{"class":"weui-loading"}),i)}}]),Button}();e.a=l},"282":function(t,e,n){"use strict";n(257);var r=n(2),o=n(258),i=n(259),a=n.n(i),u=(n(267),Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}),c=function(){function defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,e,n){return e&&defineProperties(t.prototype,e),n&&defineProperties(t,n),t}}();function getTrueType(t,e,n){if(!t)throw new Error("unexpected type");return"search"===e&&(t="search"),n&&(t="password"),"digit"===t&&(t="number"),t}var l=function(t){function Input(){!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,Input);var t=function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(Input.__proto__||Object.getPrototypeOf(Input)).apply(this,arguments));return t.onInput=t.onInput.bind(t),t.onFocus=t.onFocus.bind(t),t.onBlur=t.onBlur.bind(t),t.onKeyDown=t.onKeyDown.bind(t),t.handleComposition=t.handleComposition.bind(t),t.isOnComposition=!1,t.onInputExcuted=!1,t}return function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{"constructor":{"value":t,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(Input,r["l"].Component),c(Input,[{"key":"componentDidMount","value":function componentDidMount(){"file"===this.props.type&&this.inputRef.addEventListener("change",this.onInput)}},{"key":"componentWillUnmount","value":function componentWillUnmount(){"file"===this.props.type&&this.inputRef.removeEventListener("change",this.onInput)}},{"key":"onInput","value":function onInput(t){var e=this.props,n=e.type,r=e.maxLength,o=e.confirmType,i=e.password,a=e.onInput,onInput=void 0===a?"":a,u=e.onChange,c=void 0===u?"":u;if(!this.isOnComposition&&!this.onInputExcuted){var l=t.target.value,s=getTrueType(n,o,i);if(this.onInputExcuted=!0,"number"===s&&l&&r<=l.length&&(l=l.substring(0,r),t.target.value=l),Object.defineProperty(t,"detail",{"enumerable":!0,"value":{"value":l}}),!(["number","file"].indexOf(s)>=0)){var p=t.target.selectionEnd;setTimeout(function(){t.target.selectionStart=p,t.target.selectionEnd=p})}if(c)return c(t);if(onInput)return onInput(t)}}},{"key":"onFocus","value":function onFocus(t){var onFocus=this.props.onFocus;this.onInputExcuted=!1,Object.defineProperty(t,"detail",{"enumerable":!0,"value":{"value":t.target.value}}),onFocus&&onFocus(t)}},{"key":"onBlur","value":function onBlur(t){var onBlur=this.props.onBlur;Object.defineProperty(t,"detail",{"enumerable":!0,"value":{"value":t.target.value}}),onBlur&&onBlur(t)}},{"key":"onKeyDown","value":function onKeyDown(t){var e=this.props,n=e.onConfirm,onKeyDown=e.onKeyDown;this.onInputExcuted=!1,onKeyDown&&onKeyDown(t),13===t.keyCode&&n&&(Object.defineProperty(t,"detail",{"enumerable":!0,"value":{"value":t.target.value}}),n(t))}},{"key":"handleComposition","value":function handleComposition(t){t.target instanceof HTMLInputElement&&("compositionend"===t.type?(this.isOnComposition=!1,this.onInputExcuted=!1,this.onInput(t)):this.isOnComposition=!0)}},{"key":"render","value":function render(){var t=this,e=this.props,n=e.className,i=void 0===n?"":n,c=e.placeholder,l=e.type,s=void 0===l?"text":l,p=e.password,f=e.disabled,d=e.maxLength,b=e.confirmType,h=void 0===b?"":b,m=e.focus,y=void 0!==m&&m,v=e.value,g=a()("weui-input",i),_=Object(o.a)(this.props,["className","placeholder","disabled","max","onChange","onFocus","onBlur","type","focus"]);return"value"in this.props&&(_.value=function fixControlledValue(t){return void 0===t||null===t?"":t}(v)),r.l.createElement("input",u({"ref":function ref(e){t.inputRef=e}},_,{"className":g,"placeholder":c,"disabled":f,"maxlength":d,"onInput":this.onInput,"onFocus":this.onFocus,"onBlur":this.onBlur,"autofocus":y,"onKeyDown":this.onKeyDown,"type":getTrueType(s,h,p),"onCompositionStart":this.handleComposition,"onCompositionEnd":this.handleComposition}))}}]),Input}();l.defaultProps={"type":"text"},e.a=l},"661":function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return m});var r=n(4),o=n.n(r),i=n(2),a=n(6),u=n(596),c=n(282),l=n(275),s=n(14),p=n(29),f=n(266),d=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function sliceIterator(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),b=function(){function defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,e,n){return e&&defineProperties(t.prototype,e),n&&defineProperties(t,n),t}}(),h=function get(t,e,n){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,e);if(void 0===r){var o=Object.getPrototypeOf(t);return null===o?void 0:get(o,e,n)}if("value"in r)return r.value;var i=r.get;return void 0!==i?i.call(n):void 0};function _asyncToGenerator(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){return function step(r,o){try{var i=e[r](o),a=i.value}catch(t){return void n(t)}if(!i.done)return Promise.resolve(a).then(function(t){step("next",t)},function(t){step("throw",t)});t(a)}("next")})}}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var m=function(t){function TagEdit(){var t,e,n;!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,TagEdit);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return e=n=_possibleConstructorReturn(this,(t=TagEdit.__proto__||Object.getPrototypeOf(TagEdit)).call.apply(t,[this].concat(o))),n.config={},_possibleConstructorReturn(n,e)}return function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{"constructor":{"value":t,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(TagEdit,a["a"].Component),b(TagEdit,[{"key":"render","value":function render(){var t,e,n=this,r=a.a.useState(!1),b=d(r,2),h=b[0],m=b[1],y=a.a.useState({}),v=d(y,2),g=v[0],_=v[1],w=a.a.useState(""),O=d(w,2),T=O[0],x=O[1],E=a.a.useState(""),j=d(E,2),k=j[0],P=j[1],C=a.a.useState(""),I=d(C,2),S=I[0],F=I[1],D=a.a.useState(20),G=d(D,1)[0],A=a.a.useRouter(),q=(t=_asyncToGenerator(o.a.mark(function _callee(){var t,e;return o.a.wrap(function _callee$(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(s.z)();case 2:if(0===(t=n.sent)){n.next=6;break}return Object(s.v)(t),n.abrupt("return");case 6:if(Object(p.a)(!0),P(A.params.tagId),x(A.params.teamId),F(A.params.type),"edit"!==S){n.next=19;break}return n.next=13,Object(f.I)({"id":k});case 13:e=(e=n.sent)&&e.team_lable?e.team_lable:{},console.log(e,g),Object.assign(e,g),console.log(e),_(e);case 19:Object(p.a)(!1);case 20:case"end":return n.stop()}},_callee,n)})),function onload(){return t.apply(this,arguments)}),B=(e=_asyncToGenerator(o.a.mark(function _callee2(){var t,e,r,i,a;return o.a.wrap(function _callee2$(n){for(;;)switch(n.prev=n.next){case 0:if(m(!0),!(t=g.name||"")){n.next=46;break}if(!(t.length>G)){n.next=8;break}return m(!1),Object(p.c)("小分队名称不能超过"+G+"字"),n.abrupt("return");case 8:if(e={"name":t},T&&(e.team_id=T),"create"!==S){n.next=27;break}return n.next=13,Object(f.d)(e);case 13:if(0!==(r=n.sent).code){n.next=22;break}return m(!1),n.next=18,Object(p.c)("小分队创建成功");case 18:return n.next=20,Object(s.C)(1);case 20:n.next=25;break;case 22:return m(!1),n.next=25,Object(p.c)(r.data);case 25:n.next=44;break;case 27:if("edit"!==S){n.next=44;break}return i=k,e.id=i,n.next=32,Object(f.m)(e);case 32:if(0!==(a=n.sent).code){n.next=41;break}return m(!1),n.next=37,Object(p.c)("小分队名称修改成功");case 37:return n.next=39,Object(s.C)(1);case 39:n.next=44;break;case 41:return m(!1),n.next=44,Object(p.c)(a.data);case 44:n.next=49;break;case 46:return m(!1),n.next=49,Object(p.c)("小分队名称不能为空");case 49:m(!1);case 50:case"end":return n.stop()}},_callee2,n)})),function formSubmit(){return e.apply(this,arguments)});return a.a.useDidShow(function(){Object(s.L)("编辑小分队")}),a.a.useEffect(function(){q()},[]),i.l.createElement(u.a,{"className":"body"},i.l.createElement(u.a,{"className":"content fix"},i.l.createElement(u.a,{"className":"team-tag"},i.l.createElement(u.a,{"className":"team-input"},i.l.createElement(c.a,{"style":"height:2.4rem;line-height:2.4rem;padding-left: 5px;","name":"name","value":g.name,"onInput":function inputTagName(t){var e={};Object.assign(e,g),e.name=t.detail.value,_(e)}.bind(this),"type":"text","className":"input-txt","placeholder":"请输入小分队名称"}))),i.l.createElement(l.a,{"onClick":function onClick(){return B()},"disabled":h,"className":"submit-btn","style":"-webkit-appearance: none;border-radius: 0;font-size: 22px;border:none"},"保存")))}},{"key":"componentDidMount","value":function componentDidMount(){h(TagEdit.prototype.__proto__||Object.getPrototypeOf(TagEdit.prototype),"componentDidMount",this)&&h(TagEdit.prototype.__proto__||Object.getPrototypeOf(TagEdit.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){h(TagEdit.prototype.__proto__||Object.getPrototypeOf(TagEdit.prototype),"componentDidShow",this)&&h(TagEdit.prototype.__proto__||Object.getPrototypeOf(TagEdit.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){h(TagEdit.prototype.__proto__||Object.getPrototypeOf(TagEdit.prototype),"componentDidHide",this)&&h(TagEdit.prototype.__proto__||Object.getPrototypeOf(TagEdit.prototype),"componentDidHide",this).call(this)}}]),TagEdit}();m.config={}}}]);