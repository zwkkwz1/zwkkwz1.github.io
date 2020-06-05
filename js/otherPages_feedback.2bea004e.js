(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{"264":function(e,t,n){var o=n(265);"string"==typeof o&&(o=[[e.i,o,""]]);var r={"sourceMap":!1,"insertAt":"top","hmr":!0,"transform":void 0,"insertInto":void 0};n(261)(o,r);o.locals&&(e.exports=o.locals)},"265":function(e,t,n){(e.exports=n(260)(!1)).push([e.i,"button {\n  position: relative;\n  display: block;\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 14px;\n  padding-right: 14px;\n  box-sizing: border-box;\n  font-size: 18px;\n  text-align: center;\n  text-decoration: none;\n  line-height: 2.55555556;\n  border-radius: 5px;\n  -webkit-tap-highlight-color: transparent;\n  overflow: hidden;\n  color: #000000;\n  background-color: #F8F8F8;\n}\n\nbutton[plain] {\n  color: #353535;\n  border: 1px solid #353535;\n  background-color: transparent;\n}\n\nbutton[plain][disabled] {\n  color: rgba(0, 0, 0, 0.3);\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  background-color: #F7F7F7;\n}\n\nbutton[type=primary] {\n  color: #FFFFFF;\n  background-color: #1AAD19;\n}\n\nbutton[type=primary][plain] {\n  color: #1aad19;\n  border: 1px solid #1aad19;\n  background-color: transparent;\n}\n\nbutton[type=primary][plain][disabled] {\n  color: rgba(0, 0, 0, 0.3);\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  background-color: #F7F7F7;\n}",""])},"275":function(e,t,n){"use strict";n(257);var o=n(2),r=n(258),a=n(259),i=n.n(a),c=(n(264),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}),l=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=n,e}var u=function(e){function Button(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Button);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Button.__proto__||Object.getPrototypeOf(Button)).apply(this,arguments));return e.state={"hover":!1,"touch":!1},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Button,o["l"].Component),l(Button,[{"key":"render","value":function render(){var e,t=this,n=this.props,a=n.children,l=n.disabled,u=n.className,s=n.style,p=n.onClick,f=n.onTouchStart,d=n.onTouchEnd,b=n.hoverClass,h=void 0===b?"button-hover":b,y=n.hoverStartTime,v=void 0===y?20:y,m=n.hoverStayTime,g=void 0===m?70:m,_=n.size,O=n.plain,k=n.loading,w=void 0!==k&&k,j=n.type,x=void 0===j?"default":j,F=u||i()("weui-btn",(_defineProperty(e={},""+h,this.state.hover&&!l&&"none"!==h),_defineProperty(e,"weui-btn_plain-"+x,O),_defineProperty(e,"weui-btn_"+x,!O&&x),_defineProperty(e,"weui-btn_mini","mini"===_),_defineProperty(e,"weui-btn_loading",w),_defineProperty(e,"weui-btn_disabled",l),e));return o.l.createElement("button",c({},Object(r.a)(this.props,["hoverClass","onTouchStart","onTouchEnd"]),{"className":F,"style":s,"onClick":p,"disabled":l,"onTouchStart":function _onTouchStart(e){t.setState(function(){return{"touch":!0}}),h&&"none"!==h&&!l&&setTimeout(function(){t.state.touch&&t.setState(function(){return{"hover":!0}})},v),f&&f(e)},"onTouchEnd":function _onTouchEnd(e){t.setState(function(){return{"touch":!1}}),h&&"none"!==h&&!l&&setTimeout(function(){t.state.touch||t.setState(function(){return{"hover":!1}})},g),d&&d(e)}}),w&&o.l.createElement("i",{"class":"weui-loading"}),a)}}]),Button}();t.a=u},"293":function(e,t,n){"use strict";n(257);var o=n(2),r=n(258),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var c=function(e){function Textarea(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Textarea);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Textarea.__proto__||Object.getPrototypeOf(Textarea)).apply(this,arguments));return e.onChange=e.onChange.bind(e),e.onFocus=e.onFocus.bind(e),e.onBlur=e.onBlur.bind(e),e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Textarea,o["l"].Component),i(Textarea,[{"key":"onChange","value":function onChange(e){var t=this.props,n=t.onChange,onChange=void 0===n?"":n,o=t.onInput,r=void 0===o?"":o;return Object.defineProperty(e,"detail",{"enumerable":!0,"value":{"value":e.target.value}}),onChange?onChange&&onChange(e):r?r&&r(e):void 0}},{"key":"onFocus","value":function onFocus(e){var onFocus=this.props.onFocus;Object.defineProperty(e,"detail",{"enumerable":!0,"value":{"value":e.target.value}}),onFocus&&onFocus(e)}},{"key":"onBlur","value":function onBlur(e){var onBlur=this.props.onBlur;Object.defineProperty(e,"detail",{"enumerable":!0,"value":{"value":e.target.value}}),onBlur&&onBlur(e)}},{"key":"render","value":function render(){var e=this.props,t=e.className,n=void 0===t?"":t,i=e.placeholder,c=void 0===i?"":i,l=e.disabled,u=e.maxlength,s=void 0===u?140:u,p=e.autoFocus,f=void 0!==p&&p;return o.l.createElement("textarea",a({},Object(r.a)(this.props,["className","placeholder","disabled","maxlength","onChange","onInput","onFocus","onBlur","autofocus"]),{"className":n,"placeholder":c,"disabled":l,"maxlength":s,"autofocus":f,"onChange":this.onChange,"onFocus":this.onFocus,"onBlur":this.onBlur}))}}]),Textarea}();t.a=c},"704":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return y});var o=n(4),r=n.n(o),a=n(2),i=n(6),c=n(596),l=n(293),u=n(275),s=n(14),p=n(29),f=n(30),d=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var n=[],o=!0,r=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(o=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);o=!0);}catch(e){r=!0,a=e}finally{try{!o&&c.return&&c.return()}finally{if(r)throw a}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),b=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),h=function get(e,t,n){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,t);if(void 0===o){var r=Object.getPrototypeOf(e);return null===r?void 0:get(r,t,n)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(n):void 0};function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function step(o,r){try{var a=t[o](r),i=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(i).then(function(e){step("next",e)},function(e){step("throw",e)});e(i)}("next")})}}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var y=function(e){function Feedback(){var e,t,n;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Feedback);for(var o=arguments.length,r=Array(o),a=0;a<o;a++)r[a]=arguments[a];return t=n=_possibleConstructorReturn(this,(e=Feedback.__proto__||Object.getPrototypeOf(Feedback)).call.apply(e,[this].concat(r))),n.config={},_possibleConstructorReturn(n,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Feedback,i["a"].Component),b(Feedback,[{"key":"render","value":function render(){var e=this,t=Object(s.u)(),n=0;Object(s.z)(0).then(function(e){n=e});var o,b,h,y=i.a.useRouter().params,v=i.a.useState({"opinion":""}),m=d(v,2),g=m[0],_=m[1],O=i.a.useState([]),k=d(O,2),w=k[0],j=k[1],x=i.a.useState(0),F=d(x,2),P=F[0],C=F[1],E=i.a.useState("block"),T=d(E,2),S=T[0],B=T[1],N=i.a.useState("请输入您的宝贵意见，我们将为您提供更好的服务"),D=d(N,2),R=D[0],A=D[1],H=(o=_asyncToGenerator(r.a.mark(function _callee(){var t,n,o;return r.a.wrap(function _callee$(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.q)({"rows":7,"page":1});case 2:t=e.sent,n=[],(o=t.help_centers.edges||[]).length>0&&o.forEach(function(e){n.push(e.node)}),j(n);case 7:case"end":return e.stop()}},_callee,e)})),function loadHelpTips(){return o.apply(this,arguments)}),I=function validateForm(e){return e.opinion?!(e.opinion.length>2e3)||(Object(p.c)("意见字数不能超过2000"),!1):(Object(p.c)("意见不能为空"),!1)},M=(b=_asyncToGenerator(r.a.mark(function _callee2(){var n;return r.a.wrap(function _callee2$(e){for(;;)switch(e.prev=e.next){case 0:if(!I(g)){e.next=25;break}if(Object(p.a)(!0,"提交中"),n=void 0,g.option=g.opinion,delete g.opinion,"activity"!==y.type){e.next=13;break}return g.activity_id=y.id||"",g.activity_name=y.name||"",e.next=10,Object(f.B)(t.uid,g);case 10:n=e.sent,e.next=16;break;case 13:return e.next=15,Object(f.A)(t.uid,g);case 15:n=e.sent;case 16:if(0!==n.code){e.next=23;break}return Object(p.a)(!1),e.next=20,Object(p.c)("提交成功");case 20:i.a.navigateBack({"delta":1}),e.next=25;break;case 23:Object(p.a)(!1),Object(p.c)(n.data);case 25:case"end":return e.stop()}},_callee2,e)})),function formSubmit(){return b.apply(this,arguments)}),z=(h=_asyncToGenerator(r.a.mark(function _callee3(){return r.a.wrap(function _callee3$(e){for(;;)switch(e.prev=e.next){case 0:if(0===n){e.next=3;break}return Object(s.v)(n,{"nextUrl":"/pages/index/index"}),e.abrupt("return");case 3:Object(p.a)(!0),"activity"===y.type?(B("none"),A("请输入对活动的反馈意见")):H(),Object(p.a)(!1);case 6:case"end":return e.stop()}},_callee3,e)})),function onload(){return h.apply(this,arguments)});return i.a.useDidShow(function(){Object(s.L)("意见反馈"),"activity"===y.type&&Object(s.L)("活动反馈")}),i.a.useEffect(function(){z()},[]),a.l.createElement(c.a,null,a.l.createElement(c.a,{"className":"container"},a.l.createElement(c.a,{"className":"content content-nav"},!!w&&w.length>0&&a.l.createElement(c.a,{"className":"box","style":"display:"+(S||"")+";"},a.l.createElement(c.a,{"className":"nav-list"},a.l.createElement(c.a,{"className":"nav-list-big-title"},a.l.createElement(c.a,{"className":"nav-list-big-title-main"},"热点问题")),w.map(function(e){return a.l.createElement(a.l.Fragment,{"key":e.id},a.l.createElement(c.a,{"className":"nav-list-box"},a.l.createElement(c.a,{"className":"nav-list-content clear"},a.l.createElement(c.a,{"className":"nav-list-title left","onClick":function onClick(){return function toHelp(e){Object(s.B)("/communityPages/pages/help_document?id="+e)}(e.id)},"style":"width:95%"},e.title))))}))),a.l.createElement(c.a,{"className":"box"},a.l.createElement(c.a,{"className":"feedback"},a.l.createElement(l.a,{"className":"input-textarea","name":"opinion","maxlength":2e3,"onInput":function formDataChange(e,t){var n=t.detail.value||"";g[e]=n||"",C(n.length||0),_(g),console.log(g)}.bind(this,"opinion"),"value":g.opinion,"placeholder":R}),a.l.createElement(c.a,{"className":"feedback-tips"},P,"/2000"))),a.l.createElement(c.a,{"className":"foot-nav"},a.l.createElement(c.a,{"className":"team-bottom-btn clear"},a.l.createElement(u.a,{"className":"join-team-btn","onClick":function onClick(){return M()},"style":"background:#2185F4;-webkit-appearance: none;border-radius: 0;border: none;letter-spacing:3px;"},"提交"))))))}},{"key":"componentDidMount","value":function componentDidMount(){h(Feedback.prototype.__proto__||Object.getPrototypeOf(Feedback.prototype),"componentDidMount",this)&&h(Feedback.prototype.__proto__||Object.getPrototypeOf(Feedback.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){h(Feedback.prototype.__proto__||Object.getPrototypeOf(Feedback.prototype),"componentDidShow",this)&&h(Feedback.prototype.__proto__||Object.getPrototypeOf(Feedback.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){h(Feedback.prototype.__proto__||Object.getPrototypeOf(Feedback.prototype),"componentDidHide",this)&&h(Feedback.prototype.__proto__||Object.getPrototypeOf(Feedback.prototype),"componentDidHide",this).call(this)}}]),Feedback}();y.config={}}}]);