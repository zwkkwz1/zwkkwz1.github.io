(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{"317":function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"k",function(){return i}),n.d(t,"d",function(){return l}),n.d(t,"e",function(){return c}),n.d(t,"o",function(){return u}),n.d(t,"m",function(){return s}),n.d(t,"l",function(){return p}),n.d(t,"i",function(){return f}),n.d(t,"j",function(){return m}),n.d(t,"h",function(){return d}),n.d(t,"g",function(){return y}),n.d(t,"f",function(){return b}),n.d(t,"c",function(){return h}),n.d(t,"n",function(){return v}),n.d(t,"b",function(){return E});var a=n(3),r=n(5),o=function addFamilyUser(e){return a.a.post("family_user/scan",e)},i=function loadUserCon(e){return a.a.httpGql(r.fc,e)},l=function createFamilyUser(e){return a.a.post("family_user",e)},c=function disbindFamily(e){return a.a.delete("family/"+e)},u=function updateFamilyDetail(e){return a.a.put("family/"+e.id,e)},s=function setRoleForFamilyUser(e){return a.a.post("family_role",e)},p=function quitFamily(e){return a.a.delete("family_user/"+e)},f=function loadFamilyUser(e){return a.a.httpGql(r.Z,e)},m=function loadFamilyUsers(e){return a.a.httpGql(r.ab,e)},d=function loadFamilyRoles(e){return a.a.httpGql(r.Y,e)},y=function loadFamilyConnections(e){return a.a.httpGql(r.X,e)},b=function handelFamilyConnections(e,t){return a.a.put(e,t)},h=function changeFamilyRole(e,t){return a.a.put("family/"+e+"/changeRole",t)},v=function transferFamilyPoint(e){return a.a.post("family_user/transferPoint",e)},E=function buildFamily(e){return a.a.post("family",e)}},"716":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return g});var a=n(4),r=n.n(a),o=n(2),i=n(6),l=n(25),c=n(598),u=n(283),s=n(294),p=n(276),f=n(301),m=n(29),d=n(14),y=n(30),b=n(317),h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},v=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var n=[],a=!0,r=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{!a&&l.return&&l.return()}finally{if(r)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),E=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),_=function get(e,t,n){null===e&&(e=Function.prototype);var a=Object.getOwnPropertyDescriptor(e,t);if(void 0===a){var r=Object.getPrototypeOf(e);return null===r?void 0:get(r,t,n)}if("value"in a)return a.value;var o=a.get;return void 0!==o?o.call(n):void 0};function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function step(a,r){try{var o=t[a](r),i=o.value}catch(e){return void n(e)}if(!o.done)return Promise.resolve(i).then(function(e){step("next",e)},function(e){step("throw",e)});e(i)}("next")})}}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var g=function(e){function FamilyEdit(){var e,t,n;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,FamilyEdit);for(var a=arguments.length,r=Array(a),o=0;o<a;o++)r[o]=arguments[o];return t=n=_possibleConstructorReturn(this,(e=FamilyEdit.__proto__||Object.getPrototypeOf(FamilyEdit)).call.apply(e,[this].concat(r))),n.config={},_possibleConstructorReturn(n,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(FamilyEdit,i["a"].Component),E(FamilyEdit,[{"key":"render","value":function render(){var e=this,t=i.a.useRouter().params,n=0;Object(d.z)(0).then(function(e){n=e});var a,E,_,g=i.a.useState({}),w=v(g,2),F=w[0],O=w[1],x=i.a.useState(""),j=v(x,2),k=j[0],N=j[1],C=i.a.useState(!1),P=v(C,2),D=P[0],S=P[1],R=i.a.useState(""),G=v(R,2),T=G[0],U=G[1],q=i.a.useState(0),M=v(q,2),A=M[0],B=M[1],H=i.a.useState({}),I=v(H,2),$=I[0],J=I[1],z=function descriptionFocus(){D||(U("showRemark"),N(F.description))},L=function validateForm(e){var t=[],n=!0;e.name||(n=!1,$.name="error-txt",t.push("家庭名称不能为空")),e.description&&e.description.length>5e3&&(n=!1,t.push("家庭简介不能超过5000字"));var a=t.length>0?t[0]:"";return n||(J(function(e){return h({},e,$)}),i.a.atMessage({"message":a,"type":"error"})),n},X=(a=_asyncToGenerator(r.a.mark(function _callee(){var t,n;return r.a.wrap(function _callee$(e){for(;;)switch(e.prev=e.next){case 0:if(!L(F)){e.next=17;break}return Object(m.a)(!0,"提交中"),e.next=4,Object(b.o)(F);case 4:if(0!==(t=e.sent).code){e.next=14;break}return Object(m.a)(!1),n="修改成功",e.next=10,Object(l.e)({"title":"提示","content":n,"showCancel":!1});case 10:return e.next=12,i.a.navigateBack({"delta":1});case 12:e.next=17;break;case 14:return Object(m.a)(!1),e.next=17,Object(m.c)(""+t.data);case 17:case"end":return e.stop()}},_callee,e)})),function formSubmit(){return a.apply(this,arguments)}),Y=(E=_asyncToGenerator(r.a.mark(function _callee2(t){var n,a;return r.a.wrap(function _callee2$(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.b)({"id":t});case 2:n=e.sent,a=n.family,O(a);case 5:case"end":return e.stop()}},_callee2,e)})),function loadData(e){return E.apply(this,arguments)}),Z=(_=_asyncToGenerator(r.a.mark(function _callee3(){return r.a.wrap(function _callee3$(e){for(;;)switch(e.prev=e.next){case 0:if(0===n){e.next=3;break}return Object(d.v)(n,{"nextUrl":"/familyPages/pages/family_edit"}),e.abrupt("return");case 3:Object(m.a)(!0),S("MANAGER"!==t.role),Y(t.id),Object(m.a)(!1);case 7:case"end":return e.stop()}},_callee3,e)})),function onload(){return _.apply(this,arguments)});return i.a.useDidShow(function(){Object(d.L)("家庭资料")}),i.a.useEffect(function(){return Z(),function cleanup(){}},[]),o.l.createElement(c.a,null,o.l.createElement(f.a,null),o.l.createElement(c.a,{"className":"content content-nav"},o.l.createElement(c.a,{"className":"box"},o.l.createElement(c.a,{"className":"nav-list"},o.l.createElement(c.a,{"className":"nav-list-box"},o.l.createElement(c.a,{"className":"nav-list-input clear"},o.l.createElement(c.a,{"style":"width:30%;","className":"nav-list-title left "+$.name},"家庭名称"),o.l.createElement(c.a,{"style":"width:60%;","className":"nav-list-main right"},o.l.createElement(u.a,{"disabled":D,"onInput":function formDataChange(e,t){var n=t.detail.value||"";"description"===e&&N(n),$[e]=n?"":"error-txt",O(F),J(function(e){return h({},e,$)})}.bind(this,"name"),"value":F.name,"name":"name","type":"text","className":"input-txt","placeholder":"请输入家庭名称"})))))),!T&&o.l.createElement(c.a,{"className":"box"},o.l.createElement(c.a,{"className":"nav-list"},o.l.createElement(c.a,{"className":"nav-list-box"},o.l.createElement(c.a,{"className":"nav-list-input clear"},o.l.createElement(c.a,{"className":"nav-list-title left"},"家庭简介"))),o.l.createElement(c.a,{"className":"nav-list-box "},o.l.createElement(c.a,{"className":"nav-list-input clear"},o.l.createElement(c.a,{"onClick":function onClick(){return z()},"className":"nav-list-main nav-list-main-long re-padding "},o.l.createElement(s.a,{"disabled":D,"onFocus":function onFocus(){return z()},"value":F.description,"name":"description","className":"input-textarea","placeholder":"请输入家庭简介"}))),o.l.createElement(c.a,{"className":"txt-limit"},F.description.length||0,"/5000")))),"showRemark"===T&&o.l.createElement(c.a,{"className":"popwin popwin-reply","style":"display:block;"},o.l.createElement(c.a,{"className":"popdialog","style":"margin-bottom:"+A+"px;"},o.l.createElement(c.a,{"className":"dialog-content"},o.l.createElement(c.a,{"className":"clear"},o.l.createElement(c.a,{"className":"reply-btn left","onClick":function onClick(){return function cancelDescription(){U(""),N(F.description),B(0)}()}},"取消"),o.l.createElement(c.a,{"className":"reply-btn blue-btn right","onClick":function onClick(){return function confirmDescription(){F.description=k,O(function(e){return h({},e,F)}),U("")}()}},"确定")),o.l.createElement(c.a,{"className":"reply-textarea"},o.l.createElement(s.a,{"disabled":D,"onInput":function popDescriptionChange(e){var t=e.detail.value;N(t)}.bind(this),"onFocus":function popDescriptionFocus(e){var t=e.detail.height;B(t)}.bind(this),"onBlur":function onBlur(){return function popDescriptionBlur(){B(0)}()},"value":k,"maxlength":5e4,"className":"input-textarea","showConfirmBar":!1,"adjustPosition":!1,"autoFocus":!0,"autoHeight":!0,"style":"width: 95%;border-radius: 25px","placeholder":"请输入家庭简介"})))),o.l.createElement(c.a,{"className":"popbg","onClick":function onClick(){return function closePop(){B(0),U("")}()}})),!D&&o.l.createElement(c.a,{"className":"foot-nav"},o.l.createElement(c.a,{"className":"team-bottom-btn clear"},o.l.createElement(p.a,{"className":"join-team-btn","style":"-webkit-appearance: none;border-radius: 0;border:0;","onClick":function onClick(){return X()}},"提交")))))}},{"key":"componentDidMount","value":function componentDidMount(){_(FamilyEdit.prototype.__proto__||Object.getPrototypeOf(FamilyEdit.prototype),"componentDidMount",this)&&_(FamilyEdit.prototype.__proto__||Object.getPrototypeOf(FamilyEdit.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){_(FamilyEdit.prototype.__proto__||Object.getPrototypeOf(FamilyEdit.prototype),"componentDidShow",this)&&_(FamilyEdit.prototype.__proto__||Object.getPrototypeOf(FamilyEdit.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){_(FamilyEdit.prototype.__proto__||Object.getPrototypeOf(FamilyEdit.prototype),"componentDidHide",this)&&_(FamilyEdit.prototype.__proto__||Object.getPrototypeOf(FamilyEdit.prototype),"componentDidHide",this).call(this)}}]),FamilyEdit}();g.config={}}}]);