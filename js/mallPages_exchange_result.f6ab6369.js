(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{"277":function(e,t,n){"use strict";n.d(t,"v",function(){return a}),n.d(t,"o",function(){return c}),n.d(t,"p",function(){return u}),n.d(t,"y",function(){return l}),n.d(t,"u",function(){return i}),n.d(t,"n",function(){return s}),n.d(t,"w",function(){return p}),n.d(t,"x",function(){return f}),n.d(t,"t",function(){return d}),n.d(t,"e",function(){return m}),n.d(t,"r",function(){return h}),n.d(t,"s",function(){return k}),n.d(t,"j",function(){return g}),n.d(t,"f",function(){return y}),n.d(t,"l",function(){return E}),n.d(t,"z",function(){return b}),n.d(t,"k",function(){return _}),n.d(t,"b",function(){return x}),n.d(t,"a",function(){return w}),n.d(t,"i",function(){return O}),n.d(t,"q",function(){return v}),n.d(t,"m",function(){return C}),n.d(t,"d",function(){return N}),n.d(t,"c",function(){return R}),n.d(t,"h",function(){return j}),n.d(t,"g",function(){return D});var r=n(3),o=n(5),a=function loadRedeems(e){return r.a.httpGql(o.sb,e)},c=function handelRedeem(e,t){return r.a.put("redeem/"+e,t)},u=function handleCouponYHQ(e,t){return r.a.put("redeem/use_yhq/"+e,t)},l=function postDonation(e){return r.a.post("donation",e)},i=function loadRedeemDetail(e){return r.a.httpGql(o.rb,e)},s=function goodsExchange(e,t){return r.a.put("redeem/exchange/"+e+"/"+t)},p=function loadSponsorDetail(e){return r.a.httpGql(o.Lb,e,!0)},f=function loadSponsorDonationList(e){return r.a.httpGql(o.Mb,e,!0)},d=function loadOrgHasScore(e){return r.a.httpGql(o.ob,e)},m=function getCouponYHQFromOfficial(e){return r.a.put("temp_user_redeem/coupon_yhq/"+e.id,e)},h=function loadCouponsOfOfficial(e){return r.a.httpGql(o.H,e,!0)},g=function getCourses(e){return r.a.httpGql(o.N,e,!0)},y=function getCourseDetail(e){return r.a.httpGql(o.J,e,!0)},b=function recordViewNum(e){return r.a.post("course/recordView/"+e,{})},E=function getSeekHelps(e){return r.a.httpGql(o.Db,e)},_=function getMyCourses(e){return r.a.httpGql(o.jb,e)},k=function loadExperts(e){return r.a.httpGql(o.V,e,!0)},x=function addDDGroup(e){return r.a.post("chat-group",e)},v=function joinDDGroup(e,t){return r.a.put("chat-group/"+t,e)},w=function addCourseUsers(e,t){return r.a.post("course/addCourseUsers/"+t,e)},O=function getCourseUser(e){return r.a.httpGql(o.M,e)},C=function getVideoPlayAuth(e){return r.a.get("course/playAuth",e)},N=function courseEvaluate(e){return r.a.post("eval",e)},R=function courseEvalLikeOrDislike(e){return r.a.put("eval/isLike/"+e.id,e)},j=function getCourseEvals(e){return r.a.httpGql(o.L,e,!0)},D=function getCourseEvalById(e){return r.a.httpGql(o.K,e)}},"353":function(e,t,n){},"612":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return h});var r=n(4),o=n.n(r),a=n(2),c=n(6),u=n(25),l=n(598),i=n(29),s=n(277),p=n(14),f=(n(353),function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var c,u=e[Symbol.iterator]();!(r=(c=u.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw a}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()),d=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),m=function get(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:get(o,t,n)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(n):void 0};function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function step(r,o){try{var a=t[r](o),c=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(c).then(function(e){step("next",e)},function(e){step("throw",e)});e(c)}("next")})}}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var h=function(e){function ExchangeResult(){var e,t,n;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,ExchangeResult);for(var r=arguments.length,o=Array(r),a=0;a<r;a++)o[a]=arguments[a];return t=n=_possibleConstructorReturn(this,(e=ExchangeResult.__proto__||Object.getPrototypeOf(ExchangeResult)).call.apply(e,[this].concat(o))),n.config={},_possibleConstructorReturn(n,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(ExchangeResult,c["a"].Component),d(ExchangeResult,[{"key":"render","value":function render(){var e,t,n,r=this,d=c.a.useRouter().params,m=c.a.useState({}),h=f(m,2),g=h[0],y=h[1],b=c.a.useState(!1),E=f(b,2),_=E[0],k=E[1],x=c.a.useState(!1),v=f(x,2),w=v[0],O=v[1],C=!1,N=function closePop(){k(!1)},R=function keepExchange(){c.a.redirectTo({"url":"/mallPages/pages/mall_index"})},j=(e=_asyncToGenerator(o.a.mark(function _callee(e){var t,n,a,c;return o.a.wrap(function _callee$(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(s.u)({"id":e});case 2:t=r.sent,n=t.redeem,(a=n.on_shelf.goodsPic||[]).length>0&&a[0].url&&-1===a[0].url.indexOf("http://")&&-1===a[0].url.indexOf("https://")&&(c=n.on_shelf.goodsPic[0].url,n.picture=Object(p.w)(c)),n.exchangeAddr=n.on_shelf.address,y(n);case 8:case"end":return r.stop()}},_callee,r)})),function loadData(t){return e.apply(this,arguments)}),D=(t=_asyncToGenerator(o.a.mark(function _callee2(){var e,t,n;return o.a.wrap(function _callee2$(r){for(;;)switch(r.prev=r.next){case 0:if(C){r.next=9;break}return C=!0,e=g.id,t={"state":"1"},r.next=6,Object(s.o)(e,t);case 6:0===(n=r.sent).code?(O(!0),j(e)):Object(u.f)(n.data),C=!1;case 9:case"end":return r.stop()}},_callee2,r)})),function toUse(){return t.apply(this,arguments)}),P=(n=_asyncToGenerator(o.a.mark(function _callee3(){var e;return o.a.wrap(function _callee3$(t){for(;;)switch(t.prev=t.next){case 0:Object(i.a)(!0),e=d.id||"",j(e),Object(i.a)(!1);case 4:case"end":return t.stop()}},_callee3,r)})),function onload(){return n.apply(this,arguments)});return c.a.useDidShow(function(){Object(p.L)("兑换结果")}),c.a.useEffect(function(){P()},[]),a.l.createElement(l.a,null,a.l.createElement(l.a,{"className":"content content-nav"},a.l.createElement(l.a,{"className":"box"},a.l.createElement(l.a,{"className":"exchange-succeed"},a.l.createElement(l.a,{"className":"exchange-number"},"使用码：",g.code),a.l.createElement(l.a,{"className":"goods-pic","style":"background-image:url("+g.picture+");width: 30%;margin-left: 35%;"}))),a.l.createElement(l.a,{"className":"my-ticket exchange-succeed-ticket"},a.l.createElement(l.a,{"className":"tabs-main tabs-all-ticket"},a.l.createElement(l.a,{"className":"ticket-content padding-l-r clear"},a.l.createElement(l.a,{"className":"clear"},a.l.createElement(l.a,{"className":"ticket-content-main padding-t","style":"width: 100%;"},a.l.createElement(l.a,{"className":"ticket-content-title"},g.goods_name||""),a.l.createElement(l.a,{"className":"ticket-content-date padding-t"},"所需积分: ",g.point||""),a.l.createElement(l.a,{"className":"ticket-content-date padding-t"},"有效期至：",g.valid_at),a.l.createElement(l.a,{"className":"ticket-content-date padding-t"},"兑换地址：",g.exchangeAddr))),"0"===g.state&&a.l.createElement(l.a,{"className":"ticket-content-btn","style":"display: flex;"},a.l.createElement(l.a,{"className":"orange-btn","style":"width: 45%;margin-right: 5px;","onClick":function onClick(){return R()}},"再逛逛"),a.l.createElement(l.a,{"className":"blue-btn","style":"width: 45%;margin-left: 5px;","onClick":function onClick(){return function toUsePage(){Object(p.B)("/userPages/pages/user_exchange")}()}},"去使用")),"1"===g.state&&a.l.createElement(l.a,{"className":"ticket-content-btn"},a.l.createElement(l.a,{"className":"blue-btn","style":"background:#CFCFCF;","onClick":function onClick(){return R()}},"已使用"))))),_&&a.l.createElement(l.a,{"className":"popwin popwin-ticket","style":"display:block"},a.l.createElement(l.a,{"className":"popdialog"},a.l.createElement(l.a,{"className":"dialog-content"},a.l.createElement(l.a,{"className":"pop-tips-title","style":"display: block;"},g.goods_name),a.l.createElement(l.a,{"className":"goods-pic","style":"background-image:url("+g.picture+");"}),a.l.createElement(l.a,{"style":"margin: 10px 0;"},w?"已使用":"确定要使用吗？"),a.l.createElement(l.a,{"className":"btn-ticket clear"},w?a.l.createElement(a.l.Fragment,null,a.l.createElement(l.a,{"className":"cancel1 left","style":"width:100%;border-right:0px;","onClick":function onClick(){return N()}},"确定")):a.l.createElement(a.l.Fragment,null,a.l.createElement(l.a,{"className":"cancel1 left","onClick":function onClick(){return N()}},"取消"),a.l.createElement(l.a,{"className":"sure left","onClick":function onClick(){return D()}},"确定"))))),a.l.createElement(l.a,{"className":"popbg","onClick":function onClick(){return N()}}))))}},{"key":"componentDidMount","value":function componentDidMount(){m(ExchangeResult.prototype.__proto__||Object.getPrototypeOf(ExchangeResult.prototype),"componentDidMount",this)&&m(ExchangeResult.prototype.__proto__||Object.getPrototypeOf(ExchangeResult.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){m(ExchangeResult.prototype.__proto__||Object.getPrototypeOf(ExchangeResult.prototype),"componentDidShow",this)&&m(ExchangeResult.prototype.__proto__||Object.getPrototypeOf(ExchangeResult.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){m(ExchangeResult.prototype.__proto__||Object.getPrototypeOf(ExchangeResult.prototype),"componentDidHide",this)&&m(ExchangeResult.prototype.__proto__||Object.getPrototypeOf(ExchangeResult.prototype),"componentDidHide",this).call(this)}}]),ExchangeResult}();h.config={}}}]);