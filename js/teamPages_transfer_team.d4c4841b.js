(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{"265":function(e,t,n){var r=n(266);"string"==typeof r&&(r=[[e.i,r,""]]);var o={"sourceMap":!1,"insertAt":"top","hmr":!0,"transform":void 0,"insertInto":void 0};n(262)(r,o);r.locals&&(e.exports=r.locals)},"266":function(e,t,n){(e.exports=n(261)(!1)).push([e.i,"button {\n  position: relative;\n  display: block;\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 14px;\n  padding-right: 14px;\n  box-sizing: border-box;\n  font-size: 18px;\n  text-align: center;\n  text-decoration: none;\n  line-height: 2.55555556;\n  border-radius: 5px;\n  -webkit-tap-highlight-color: transparent;\n  overflow: hidden;\n  color: #000000;\n  background-color: #F8F8F8;\n}\n\nbutton[plain] {\n  color: #353535;\n  border: 1px solid #353535;\n  background-color: transparent;\n}\n\nbutton[plain][disabled] {\n  color: rgba(0, 0, 0, 0.3);\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  background-color: #F7F7F7;\n}\n\nbutton[type=primary] {\n  color: #FFFFFF;\n  background-color: #1AAD19;\n}\n\nbutton[type=primary][plain] {\n  color: #1aad19;\n  border: 1px solid #1aad19;\n  background-color: transparent;\n}\n\nbutton[type=primary][plain][disabled] {\n  color: rgba(0, 0, 0, 0.3);\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  background-color: #F7F7F7;\n}",""])},"267":function(e,t,n){"use strict";n.d(t,"z",function(){return a}),n.d(t,"c",function(){return i}),n.d(t,"f",function(){return u}),n.d(t,"F",function(){return c}),n.d(t,"D",function(){return l}),n.d(t,"s",function(){return s}),n.d(t,"t",function(){return p}),n.d(t,"o",function(){return f}),n.d(t,"e",function(){return d}),n.d(t,"B",function(){return m}),n.d(t,"p",function(){return b}),n.d(t,"r",function(){return y}),n.d(t,"x",function(){return v}),n.d(t,"I",function(){return _}),n.d(t,"d",function(){return g}),n.d(t,"m",function(){return T}),n.d(t,"N",function(){return w}),n.d(t,"J",function(){return O}),n.d(t,"g",function(){return E}),n.d(t,"v",function(){return x}),n.d(t,"w",function(){return k}),n.d(t,"C",function(){return j}),n.d(t,"l",function(){return P}),n.d(t,"b",function(){return C}),n.d(t,"h",function(){return S}),n.d(t,"M",function(){return F}),n.d(t,"H",function(){return N}),n.d(t,"u",function(){return I}),n.d(t,"j",function(){return D}),n.d(t,"y",function(){return R}),n.d(t,"O",function(){return G}),n.d(t,"S",function(){return A}),n.d(t,"A",function(){return B}),n.d(t,"n",function(){return L}),n.d(t,"P",function(){return q}),n.d(t,"Q",function(){return M}),n.d(t,"a",function(){return U}),n.d(t,"K",function(){return z}),n.d(t,"i",function(){return K}),n.d(t,"E",function(){return H}),n.d(t,"L",function(){return W}),n.d(t,"G",function(){return J}),n.d(t,"k",function(){return h}),n.d(t,"R",function(){return V}),n.d(t,"q",function(){return Q});var r=n(3),o=n(5),a=function loadTeams(e){return r.a.httpGql(o.ac,e,!0)},i=function addTeamAlbum(e){return r.a.post("team_album",e)},u=function changeTeamAlbum(e){var t=e.id;return delete e.id,r.a.put("team_album/"+t,e)},c=function teamAlbumEvalLike(e){var t=e.id;return delete e.id,r.a.put("team_album_eval/isLike/"+t,e)},l=function saveEvalValue(e){return r.a.post("team_album_eval",e)},s=function getTeamAlbum(e){return r.a.httpGql(o.Pb,e,!0)},p=function getTeamAlbumEval(e){return r.a.httpGql(o.Qb,e,!0)},f=function getEvalStatus(e){return r.a.httpGql(o.S,e,!0)},d=function applyUnfrozen(e){return r.a.post("team/applyUnfrozen",e)},m=function recordInfo(e){return r.a.post("record_information",e)},b=function getFillingInfo(e){return r.a.httpGql(o.a,e)},h=function editFillingInfo(e,t){return r.a.put("record_information/"+e,t)},y=function getTeam(e){return r.a.httpGql(o.Nb,e,!0)},v=function joinTeam(e){return r.a.post("team_user",e)},_=function teamLable(e){return r.a.httpGql(o.Ub,e)},g=function addTeamLable(e){return r.a.post("team_lable",e)},T=function eidtTeamLable(e){var t=e.id;return delete e.id,r.a.put("team_lable/"+t,e)},w=function teamUserMsg(e){return r.a.httpGql(o.Xb,e)},O=function teamLableUsers(e){return r.a.httpGql(o.Vb,e)},E=function deleteLableUsers(e){return r.a.delete("team_lable_user/batch",e)},x=function getTeamUsers(e){return r.a.httpGql(o.Yb,e)},k=function joinLableTeam(e){return r.a.post("team_lable_user",e)},j=function removeLableUser(e){return r.a.delete("team_lable_user/"+e.id)},P=function editTeamMsg(e){return r.a.put("team/"+e.id,e)},C=function addTeam(e){return r.a.post("team",e)},S=function deletePic(e){return r.a.delete("file-upload/"+e.id)},F=function teamUserApply(e){return r.a.httpGql(o.mc,e)},N=function teamCyclActivities(e){return r.a.httpGql(o.Tb,e,!0)},I=function getTeamAlbums(e){return r.a.httpGql(o.Sb,e)},D=function disLikeAct(e){return r.a.put("activity_user/"+e.id+"/dislike",e)},R=function likeAct(e){return r.a.put("activity_user/"+e.id+"/like",e)},G=function teamWechatUsers(e){return r.a.httpGql(o.Zb,e,!0)},A=function writtenOffTeam(e){return r.a.put("team/"+e.id+"/writtenOff")},B=function logoutTeam(e){return r.a.delete("team_user",e)},L=function frozenTeam(e){return r.a.put("team/"+e+"/frozen")},q=function unfrozenTeam(e){return r.a.put("team/"+e+"/unfrozen")},M=function userApplyAudit(e){var t=e.id;return delete e.id,r.a.put("team_user/"+t+"/apply",e)},U=function activeTeams(e){return r.a.httpGql(o.b,e,!0)},z=function teamLables(e){return r.a.httpGql(o.Wb,e)},K=function deleteTeamLable(e){return r.a.delete("team_lable/"+e)},H=function setTeamRole(e){return r.a.put("team_user/"+e.id+"/setRole",e)},W=function teamTeransfer(e){return r.a.put("team/"+e.id+"/changeRole",e)},J=function teamApplyDetail(e){return r.a.httpGql(o.lc,e)},V=function userCompanys(e){return r.a.httpGql(o.ec,e)},Q=function getMyCompanys(e){return r.a.httpGql(o.ib,e)}},"268":function(e,t,n){var r=n(269);"string"==typeof r&&(r=[[e.i,r,""]]);var o={"sourceMap":!1,"insertAt":"top","hmr":!0,"transform":void 0,"insertInto":void 0};n(262)(r,o);r.locals&&(e.exports=r.locals)},"269":function(e,t,n){(e.exports=n(261)(!1)).push([e.i,"input {\n  display: block;\n  height: 1.4rem;\n  text-align: inherit;\n  text-overflow: clip;\n  overflow: hidden;\n  white-space: nowrap;\n}",""])},"276":function(e,t,n){"use strict";n(258);var r=n(2),o=n(259),a=n(260),i=n.n(a),u=(n(265),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}),c=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=n,e}var l=function(e){function Button(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Button);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Button.__proto__||Object.getPrototypeOf(Button)).apply(this,arguments));return e.state={"hover":!1,"touch":!1},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Button,r["l"].Component),c(Button,[{"key":"render","value":function render(){var e,t=this,n=this.props,a=n.children,c=n.disabled,l=n.className,s=n.style,p=n.onClick,f=n.onTouchStart,d=n.onTouchEnd,m=n.hoverClass,b=void 0===m?"button-hover":m,h=n.hoverStartTime,y=void 0===h?20:h,v=n.hoverStayTime,_=void 0===v?70:v,g=n.size,T=n.plain,w=n.loading,O=void 0!==w&&w,E=n.type,x=void 0===E?"default":E,k=l||i()("weui-btn",(_defineProperty(e={},""+b,this.state.hover&&!c&&"none"!==b),_defineProperty(e,"weui-btn_plain-"+x,T),_defineProperty(e,"weui-btn_"+x,!T&&x),_defineProperty(e,"weui-btn_mini","mini"===g),_defineProperty(e,"weui-btn_loading",O),_defineProperty(e,"weui-btn_disabled",c),e));return r.l.createElement("button",u({},Object(o.a)(this.props,["hoverClass","onTouchStart","onTouchEnd"]),{"className":k,"style":s,"onClick":p,"disabled":c,"onTouchStart":function _onTouchStart(e){t.setState(function(){return{"touch":!0}}),b&&"none"!==b&&!c&&setTimeout(function(){t.state.touch&&t.setState(function(){return{"hover":!0}})},y),f&&f(e)},"onTouchEnd":function _onTouchEnd(e){t.setState(function(){return{"touch":!1}}),b&&"none"!==b&&!c&&setTimeout(function(){t.state.touch||t.setState(function(){return{"hover":!1}})},_),d&&d(e)}}),O&&r.l.createElement("i",{"class":"weui-loading"}),a)}}]),Button}();t.a=l},"283":function(e,t,n){"use strict";n(258);var r=n(2),o=n(259),a=n(260),i=n.n(a),u=(n(268),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}),c=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();function getTrueType(e,t,n){if(!e)throw new Error("unexpected type");return"search"===t&&(e="search"),n&&(e="password"),"digit"===e&&(e="number"),e}var l=function(e){function Input(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Input);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Input.__proto__||Object.getPrototypeOf(Input)).apply(this,arguments));return e.onInput=e.onInput.bind(e),e.onFocus=e.onFocus.bind(e),e.onBlur=e.onBlur.bind(e),e.onKeyDown=e.onKeyDown.bind(e),e.handleComposition=e.handleComposition.bind(e),e.isOnComposition=!1,e.onInputExcuted=!1,e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Input,r["l"].Component),c(Input,[{"key":"componentDidMount","value":function componentDidMount(){"file"===this.props.type&&this.inputRef.addEventListener("change",this.onInput)}},{"key":"componentWillUnmount","value":function componentWillUnmount(){"file"===this.props.type&&this.inputRef.removeEventListener("change",this.onInput)}},{"key":"onInput","value":function onInput(e){var t=this.props,n=t.type,r=t.maxLength,o=t.confirmType,a=t.password,i=t.onInput,onInput=void 0===i?"":i,u=t.onChange,c=void 0===u?"":u;if(!this.isOnComposition&&!this.onInputExcuted){var l=e.target.value,s=getTrueType(n,o,a);if(this.onInputExcuted=!0,"number"===s&&l&&r<=l.length&&(l=l.substring(0,r),e.target.value=l),Object.defineProperty(e,"detail",{"enumerable":!0,"value":{"value":l}}),!(["number","file"].indexOf(s)>=0)){var p=e.target.selectionEnd;setTimeout(function(){e.target.selectionStart=p,e.target.selectionEnd=p})}if(c)return c(e);if(onInput)return onInput(e)}}},{"key":"onFocus","value":function onFocus(e){var onFocus=this.props.onFocus;this.onInputExcuted=!1,Object.defineProperty(e,"detail",{"enumerable":!0,"value":{"value":e.target.value}}),onFocus&&onFocus(e)}},{"key":"onBlur","value":function onBlur(e){var onBlur=this.props.onBlur;Object.defineProperty(e,"detail",{"enumerable":!0,"value":{"value":e.target.value}}),onBlur&&onBlur(e)}},{"key":"onKeyDown","value":function onKeyDown(e){var t=this.props,n=t.onConfirm,onKeyDown=t.onKeyDown;this.onInputExcuted=!1,onKeyDown&&onKeyDown(e),13===e.keyCode&&n&&(Object.defineProperty(e,"detail",{"enumerable":!0,"value":{"value":e.target.value}}),n(e))}},{"key":"handleComposition","value":function handleComposition(e){e.target instanceof HTMLInputElement&&("compositionend"===e.type?(this.isOnComposition=!1,this.onInputExcuted=!1,this.onInput(e)):this.isOnComposition=!0)}},{"key":"render","value":function render(){var e=this,t=this.props,n=t.className,a=void 0===n?"":n,c=t.placeholder,l=t.type,s=void 0===l?"text":l,p=t.password,f=t.disabled,d=t.maxLength,m=t.confirmType,b=void 0===m?"":m,h=t.focus,y=void 0!==h&&h,v=t.value,_=i()("weui-input",a),g=Object(o.a)(this.props,["className","placeholder","disabled","max","onChange","onFocus","onBlur","type","focus"]);return"value"in this.props&&(g.value=function fixControlledValue(e){return void 0===e||null===e?"":e}(v)),r.l.createElement("input",u({"ref":function ref(t){e.inputRef=t}},g,{"className":_,"placeholder":c,"disabled":f,"maxlength":d,"onInput":this.onInput,"onFocus":this.onFocus,"onBlur":this.onBlur,"autofocus":y,"onKeyDown":this.onKeyDown,"type":getTrueType(s,b,p),"onCompositionStart":this.handleComposition,"onCompositionEnd":this.handleComposition}))}}]),Input}();l.defaultProps={"type":"text"},t.a=l},"328":function(e,t,n){"use strict";n(258);var r=n(2),o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var a=function(e){function Form(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Form);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Form.__proto__||Object.getPrototypeOf(Form)).apply(this,arguments));return e.Forms=[],e.onSubmit=e.onSubmit.bind(e),e.onReset=e.onReset.bind(e),e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Form,r["l"].Component),o(Form,[{"key":"onSubmit","value":function onSubmit(e){e.preventDefault();for(var t=r.l.findDOMNode(this),n=[],o=t.getElementsByTagName("input"),a=0;a<o.length;a++)n.push(o[a]);var i={},u={};n.forEach(function(e){-1===e.className.indexOf("weui-switch")?"radio"!==e.type?"checkbox"!==e.type?i[e.name]=e.value:e.checked?u[e.name]?i[e.name].push(e.value):(u[e.name]=!0,i[e.name]=[e.value]):u[e.name]||(i[e.name]=[]):e.checked?(u[e.name]=!0,i[e.name]=e.value):u[e.name]||(i[e.name]=""):i[e.name]=e.checked});for(var c=t.getElementsByTagName("textarea"),l=[],s=0;s<c.length;s++)l.push(c[s]);l.forEach(function(e){i[e.name]=e.value}),Object.defineProperty(e,"detail",{"enumerable":!0,"value":{"value":i}}),this.props.onSubmit(e)}},{"key":"onReset","value":function onReset(e){e.preventDefault(),this.props.onReset()}},{"key":"render","value":function render(){var e=this.props,t=e.className,n=e.style;return r.l.createElement("form",{"className":t,"style":n,"onSubmit":this.onSubmit,"onReset":this.onReset},this.props.children)}}]),Form}();t.a=a},"674":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return _});var r=n(4),o=n.n(r),a=n(2),i=n(6),u=n(252),c=n(598),l=n(328),s=n(283),p=n(723),f=n(276),d=n(14),m=n(29),b=n(267),h=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw a}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),y=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),v=function get(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:get(o,t,n)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(n):void 0};function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function step(r,o){try{var a=t[r](o),i=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(i).then(function(e){step("next",e)},function(e){step("throw",e)});e(i)}("next")})}}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var _=function(e){function TransferTeam(){var e,t,n;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,TransferTeam);for(var r=arguments.length,o=Array(r),a=0;a<r;a++)o[a]=arguments[a];return t=n=_possibleConstructorReturn(this,(e=TransferTeam.__proto__||Object.getPrototypeOf(TransferTeam)).call.apply(e,[this].concat(o))),n.config={},_possibleConstructorReturn(n,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(TransferTeam,i["a"].Component),y(TransferTeam,[{"key":"render","value":function render(){var e=this,t=i.a.useState([]),n=h(t,2),r=n[0],y=n[1],v=i.a.useState([]),_=h(v,2),g=_[0],T=_[1],w=i.a.useState({}),O=h(w,2),E=O[0],x=O[1],k=i.a.useState(-1),j=h(k,2),P=j[0],C=j[1],S=i.a.useRouter(),F=0;Object(d.z)(0).then(function(e){F=e});var N,I,D=function validateForm(){return!(P<0)||(Object(m.c)("新负责人不能为空"),!1)},R=(N=_asyncToGenerator(o.a.mark(function _callee(){var t,n,r,a,i,u;return o.a.wrap(function _callee$(e){for(;;)switch(e.prev=e.next){case 0:if(0===F){e.next=3;break}return Object(d.v)(F,{"nextUrl":"/pages/index/index"}),e.abrupt("return");case 3:return t=S.params.id,e.next=6,Object(b.r)({"id":t});case 6:return n=e.sent,x(n.team),e.next=10,Object(b.v)({"teamId":t,"page":1,"rows":99999});case 10:r=e.sent,a=r.team_users.edges||[],i=[],u=[],a.forEach(function(e){var t=e.node;if(t&&"TLEADER"!==t.role_id){var n=t.wechat_user;if(n){var r=n.username||n.nickname||"佚名";r&&u.push(r),i.push(n)}}}),y(i),T(u);case 17:case"end":return e.stop()}},_callee,e)})),function onload(){return N.apply(this,arguments)}),G=(I=_asyncToGenerator(o.a.mark(function _callee2(){var t,n,a,i,c,l,s,p,f,h,y;return o.a.wrap(function _callee2$(e){for(;;)switch(e.prev=e.next){case 0:if(!D()){e.next=25;break}return t=E.leader_id,n=E.leader_name,P>=0&&(a=r[P],i=a.uid,c=a.username||a.nickname||"佚名",E.leader_id=i,E.leader_name=c,x(E)),l=E.id,s=E.leader_id,e.next=8,Object(b.L)({"id":l,"uid":s});case 8:if(0!==(p=e.sent).code){e.next=21;break}return e.next=12,Object(m.c)("操作成功");case 12:return f=0,h=l,y=Object.assign({"type":f},E),e.next=17,Object(u.e)({"key":h,"data":y});case 17:return e.next=19,Object(d.C)(1);case 19:e.next=25;break;case 21:E.leader_id=t,E.leader_name=n,x(E),Object(m.c)(p.data);case 25:case"end":return e.stop()}},_callee2,e)})),function formSubmit(){return I.apply(this,arguments)});return i.a.useDidShow(function(){Object(d.L)("团队转让")}),i.a.useEffect(function(){R()},[]),a.l.createElement(c.a,{"className":"body"},a.l.createElement(c.a,{"className":"content content-nav"},a.l.createElement(l.a,{"onSubmit":function onSubmit(){return G()}},a.l.createElement(c.a,{"className":"box"},a.l.createElement(c.a,{"className":"nav-list"},a.l.createElement(c.a,{"className":"nav-list-box"},a.l.createElement(c.a,{"className":"nav-list-input clear"},a.l.createElement(c.a,{"className":"nav-list-title left"},"团队名称"),a.l.createElement(c.a,{"className":"nav-list-main right"},a.l.createElement(s.a,{"type":"text","className":"input-txt","placeholder":"请填写团队名称","name":"team_name","value":E.team_name})))))),a.l.createElement(c.a,{"className":"box"},a.l.createElement(c.a,{"className":"nav-list"},a.l.createElement(c.a,{"className":"nav-list-box"},a.l.createElement(c.a,{"className":"nav-list-content clear","style":"background:none"},a.l.createElement(c.a,{"className":"nav-list-title left"},"现负责人"),a.l.createElement(c.a,{"className":"nav-list-main right"},E.leader_name))),r&&r.length>0&&a.l.createElement(c.a,{"className":"nav-list-box"},a.l.createElement(c.a,{"className":"nav-list-content clear"},a.l.createElement(c.a,{"className":"nav-list-title left"},"新负责人"),a.l.createElement(c.a,{"className":"nav-list-main right"},a.l.createElement(p.a,{"mode":"selector","name":"leader_name","onChange":function teamUsernameChange(e){var t=e.detail.value;C(t)}.bind(this),"value":P,"range":g},g[P]||"请选择新负责人")))))),a.l.createElement(c.a,{"className":"box"},r&&r.length>0?a.l.createElement(f.a,{"className":"submit-btn","style":"-webkit-appearance: none;border-radius: 0;border:0;","form-type":"submit"},"转让"):a.l.createElement(c.a,{"className":"nav-list-box"},a.l.createElement(c.a,{"className":"nav-list-content clear","style":"background:none"},a.l.createElement(c.a,{"className":"nav-list-title left","style":"width:100%;text-align:center;"},"团队人数少于 2 人,不能转让")))))))}},{"key":"componentDidMount","value":function componentDidMount(){v(TransferTeam.prototype.__proto__||Object.getPrototypeOf(TransferTeam.prototype),"componentDidMount",this)&&v(TransferTeam.prototype.__proto__||Object.getPrototypeOf(TransferTeam.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){v(TransferTeam.prototype.__proto__||Object.getPrototypeOf(TransferTeam.prototype),"componentDidShow",this)&&v(TransferTeam.prototype.__proto__||Object.getPrototypeOf(TransferTeam.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){v(TransferTeam.prototype.__proto__||Object.getPrototypeOf(TransferTeam.prototype),"componentDidHide",this)&&v(TransferTeam.prototype.__proto__||Object.getPrototypeOf(TransferTeam.prototype),"componentDidHide",this).call(this)}}]),TransferTeam}();_.config={}}}]);