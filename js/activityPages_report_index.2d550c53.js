(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"263":function(t,e,n){"use strict";n.d(e,"a",function(){return u});var r=n(2),i=n(273),o=n(6),a=n(596),c=function(){function defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,e,n){return e&&defineProperties(t.prototype,e),n&&defineProperties(t,n),t}}();var u=function(t){function BackTop(){return function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,BackTop),function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(BackTop.__proto__||Object.getPrototypeOf(BackTop)).apply(this,arguments))}return function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{"constructor":{"value":t,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(BackTop,o["a"].Component),c(BackTop,[{"key":"render","value":function render(){return r.l.createElement(a.a,null,r.l.createElement(a.a,{"style":"bottom:15%;","onClick":function onClick(){return function toTop(){Object(i.a)({"scrollTop":0,"duration":500})}()},"className":"back-top"}))}}]),BackTop}();u.options={"addGlobalClass":!0}},"269":function(t,e,n){"use strict";n.d(e,"N",function(){return o}),n.d(e,"K",function(){return a}),n.d(e,"L",function(){return c}),n.d(e,"M",function(){return u}),n.d(e,"s",function(){return s}),n.d(e,"H",function(){return l}),n.d(e,"o",function(){return p}),n.d(e,"j",function(){return f}),n.d(e,"a",function(){return d}),n.d(e,"b",function(){return v}),n.d(e,"f",function(){return y}),n.d(e,"Z",function(){return m}),n.d(e,"C",function(){return h}),n.d(e,"v",function(){return b}),n.d(e,"u",function(){return A}),n.d(e,"t",function(){return g}),n.d(e,"e",function(){return E}),n.d(e,"d",function(){return w}),n.d(e,"Y",function(){return R}),n.d(e,"db",function(){return T}),n.d(e,"Q",function(){return I}),n.d(e,"p",function(){return k}),n.d(e,"E",function(){return D}),n.d(e,"c",function(){return O}),n.d(e,"k",function(){return M}),n.d(e,"V",function(){return N}),n.d(e,"T",function(){return G}),n.d(e,"i",function(){return _}),n.d(e,"x",function(){return S}),n.d(e,"h",function(){return j}),n.d(e,"S",function(){return C}),n.d(e,"m",function(){return L}),n.d(e,"y",function(){return U}),n.d(e,"I",function(){return P}),n.d(e,"q",function(){return Z}),n.d(e,"R",function(){return x}),n.d(e,"ab",function(){return Y}),n.d(e,"r",function(){return H}),n.d(e,"J",function(){return B}),n.d(e,"W",function(){return W}),n.d(e,"U",function(){return F}),n.d(e,"eb",function(){return J}),n.d(e,"cb",function(){return V}),n.d(e,"G",function(){return z}),n.d(e,"g",function(){return Q}),n.d(e,"l",function(){return q}),n.d(e,"w",function(){return X}),n.d(e,"z",function(){return K}),n.d(e,"A",function(){return $}),n.d(e,"X",function(){return tt}),n.d(e,"P",function(){return et}),n.d(e,"D",function(){return nt}),n.d(e,"bb",function(){return rt}),n.d(e,"B",function(){return it}),n.d(e,"F",function(){return ot}),n.d(e,"n",function(){return at}),n.d(e,"O",function(){return ct});var r=n(3),i=n(5),o=function loadActivityss(t){return r.a.httpGql(i.s,t,!0)},a=function loadActivityOfMore(t){return r.a.httpGql(i.i,t,!0)},c=function loadActivityUsers(t){return r.a.httpGql(i.q,t,!0)},u=function loadActivitys(t){return r.a.httpGql(i.r,t,!0)},s=function closeActivity(t,e){return r.a.put("activity/"+t+"/audit",e)},l=function handleCheck(t,e){return r.a.put("activity/switch/check/"+t,e)},p=function cancelEnroll(t,e){return r.a.delete("activity_user?activity_id="+t+"&uid="+e)},f=function activityReports(t){return r.a.httpGql(i.n,t,!0)},d=function activity(t){return r.a.httpGql(i.c,t,!0)},v=function activityByUid(t){return r.a.httpGql(i.d,t)},y=function activityEvaluate(t){return r.a.post("activity_eval",t)},m=function seekHelpEvaluate(t){return r.a.post("seek_help_eval",t)},h=function getCouponYhq(t){return r.a.put("redeem/coupon_yhq/"+t.uid+"/"+t.id)},b=function couponYhqOfCollect(t){return r.a.httpGql(i.tb,t)},A=function couponYhqList(t){return r.a.httpGql(i.G,t)},g=function couponYhqDetail(t){return r.a.httpGql(i.F,t,!0)},E=function activityEvals(t){return r.a.httpGql(i.f,t,!0)},w=function activityEvalById(t){return r.a.httpGql(i.e,t)},R=function seekHelpEvalById(t){return r.a.httpGql(i.Ab,t)},T=function teamAlbumEvalById(t){return r.a.httpGql(i.Rb,t)},I=function praiseForEval(t){return r.a.put("eval_eval/"+t.id+"/like",t)},k=function cancelPraiseForEval(t){return r.a.put("eval_eval/"+t.id+"/dislike",t)},D=function getSignTimes(t){return r.a.httpGql(i.Hb,t)},O=function activityEnroll(t){return r.a.post("activity_user",t)},M=function activitySign(t){return r.a.post("sign_time",t)},N=function regularActivitysEvals(t){return r.a.httpGql(i.wb,t,!0)},G=function regularActivityDetail(t){return r.a.httpGql(i.ub,t,!0)},_=function activityReportMsg(t){return r.a.httpGql(i.k,t,!0)},S=function evalOfActivityReport(t){return r.a.httpGql(i.m,t,!0)},j=function activityReportEval(t){return r.a.httpGql(i.l,t,!0)},C=function praiseForactivityReport(t,e){return r.a.put("activity_report/"+t,e)},L=function addActivityReport(t){return r.a.post("activity_report",t)},U=function familyConnections(t){return r.a.httpGql(i.X,t)},P=function hasStore(t){return r.a.httpGql(i.cb,t)},Z=function cancelPraiseForUserStore(t,e){return r.a.put("user_store/"+t+"/dislike",e)},x=function praiseForUserStore(t,e){return r.a.put("user_store/"+t+"/like",e)},Y=function signForAll(t){return r.a.post("sign_time/signBatch",t)},H=function changeActUserStatus(t){return r.a.post("sign_time/changeStatus",t)},B=function invalidCheckRecord(t,e){return r.a.put("sign_time/"+t,e)},W=function replaceSignTime(t){return r.a.post("sign_time/replacement",t)},F=function regularActivityReports(t){return r.a.httpGql(i.vb,t,!0)},J=function visitActivity(t,e){return r.a.put("wechat_method/"+t+"/visit/activity",e)},V=function subactivity(t){return r.a.post("activity/subactivity",t)},z=function getUserTeams(t){return r.a.httpGql(i.bb,t)},Q=function activityMsg(t){return r.a.get("activity/"+t)},q=function addActivity(t){return r.a.post("activity",t)},X=function editActivity(t,e){return r.a.put("activity/"+t,e)},K=function getActivityForCalendar(t){return r.a.httpGql(i.g,t)},$=function getActivitySimilar(t){return r.a.httpGql(i.j,t,!0)},tt=function reportVisit(t){return r.a.put("wechat_method/activity_report/"+t+"/visit")},et=function navigationActivitys(t){return r.a.httpGql(i.lb,t,!0)},nt=function getReportSimilar(t){return r.a.httpGql(i.xb,t,!0)},rt=function siteActivity(t){return r.a.httpGql(i.h,t,!0)},it=function getCanEnrollTeams(t){return r.a.httpGql(i.z,t,!t.uid)},ot=function getTeamsUsers(t){return r.a.httpGql(i.bc,t)},at=function auditActEnroll(t,e){return r.a.put("activity_user/"+e+"/audit",t)},ct=function loadTimeBankOrgs(t){return r.a.httpGql(i.cc,t)}},"270":function(t,e,n){"use strict";n.d(e,"e",function(){return r}),n.d(e,"g",function(){return i}),n.d(e,"d",function(){return o}),n.d(e,"f",function(){return a}),n.d(e,"h",function(){return c}),n.d(e,"c",function(){return u}),n.d(e,"b",function(){return s}),n.d(e,"a",function(){return l});n(6),n(253),"function"==typeof Symbol&&Symbol.iterator;function _toConsumableArray(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}var r=function rebuildTree(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"1",n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=[],i=0;i<t.length;i++){var o=t[i],a=o.name,c=o.code||"",u={"label":a,"value":o.id+"="+o.name+"="+c};if(n||e!==o.type){if(e===o.type){r.push(u);continue}var s=o.children;s&&(u.children=rebuildTree(s,e,n)),r.push(u)}}return r},i=function sortActivities(t){var e={"UNDERWAY":[],"ENROLMENT":[],"ENROLLEND":[],"PUBLISHED":[],"PUBLIC":[],"OTHER":[]};return t.forEach(function(t){var n=t.status||t.activity.status;n=e.hasOwnProperty(n)?n:"OTHER",e[n].push(t)}),[].concat(_toConsumableArray(e.UNDERWAY),_toConsumableArray(e.ENROLLEND),_toConsumableArray(e.ENROLMENT),_toConsumableArray(e.PUBLISHED),_toConsumableArray(e.PUBLIC),_toConsumableArray(e.OTHER))},o=function rankArr(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"sort";if(Array.isArray(t)&&t.length>0){var r=0;t.forEach(function(t,i,o){if(i>0){var a=o[i-1];r=t[e]===a[e]?r:i}t[n]=r})}else t=t.filter(function(t,e){return t[n]=e,!0});return t},a=function replaceHtml(t){return t=(t=(t=(t=(t=t||"").replace(/ /g,"&nbsp;")).replace(/\r\n/g,"<br>")).replace(/\n/g,"<br>")).replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;")},c=function trunRichTextToText(t){var e=t.replace(/<.+?>/g,"");return e=(e=(e=e.replace(/ /gi,"")).replace(/\s/gi,"")).replace(/&nbsp;/gi,"")},u=function getDateT(t){var e=t.indexOf("T");return-1!==e&&(t=t.substr(0,e)),t},s=function getDateStr(t){t=t.replace(/-/g,"/");var e=new Date(t),n=new Date;e.setHours(0),e.setMinutes(0),e.setSeconds(0),e.setMilliseconds(0),n.setHours(0),n.setMinutes(0),n.setSeconds(0),n.setMilliseconds(0);return["周日","周一","周二","周三","周四","周五","周六"][e.getDay()]},l=function formatWorkTime(t,e){switch(e){case 9:t=t.substr(0,1)+"********";break;case 8:t=t.substr(0,1)+"*******";break;case 7:t=t.substr(0,1)+"******";break;case 6:t=t.substr(0,1)+"*****";break;case 5:t=t.substr(0,1)+"****";break;case 4:t=t.substr(0,1)+"***";break;case 3:t=t.substr(0,1)+"**";break;case 2:t=t.substr(0,1)+"*"}return t}},"273":function(t,e,n){"use strict";n.d(e,"a",function(){return a});var r=n(0),i=void 0,o=void 0,a=function pageScrollTo(t){var e=t.scrollTop,n=t.duration,a=void 0===n?300:n,c=t.success,u=t.fail,s=t.complete;return new Promise(function(t,n){try{if(void 0===e)throw Error('"scrollTop" is required');var l=document.querySelector(".taro-tabbar__panel")||window;i||(i=l===window?function scrollFunc(t){if(void 0===t)return window.pageYOffset;window.scrollTo(0,t)}:function scrollFunc(t){if(void 0===t)return l.scrollTop;l.scrollTop=t});var p=i(),f=e-p,d=a/17,v=Object(r.g)(r.c,d);!function scroll(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=p+f*v(e);if(i(n),e<d)o&&clearTimeout(o),o=setTimeout(function(){scroll(e+1)},17);else{var r={"errMsg":"pageScrollTo:ok"};c&&c(r),s&&s(),t(r)}}()}catch(t){var y={"errMsg":"pageScrollTo:fail "+t.message};u&&u(y),s&&s(),n(y)}})}},"274":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NkVCMkQ0QjRCMkE0MTFFOUFEMTVCNzcxMDZCQjZDNjAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6YjljMDhjOTYtZmMxOS00MDQwLTkyNzItZjYzZTNmZDViYTYyIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NkVCMkQ0QjRCMkE0MTFFOUFEMTVCNzcxMDZCQjZDNjAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXA6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"},"625":function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return A});var r=n(4),i=n.n(r),o=n(2),a=n(6),c=n(273),u=n(596),s=n(597),l=n(269),p=n(8),f=n(14),d=n(29),v=n(270),y=n(263),m=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function sliceIterator(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{!r&&c.return&&c.return()}finally{if(i)throw o}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),h=function(){function defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,e,n){return e&&defineProperties(t.prototype,e),n&&defineProperties(t,n),t}}(),b=function get(t,e,n){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,e);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:get(i,e,n)}if("value"in r)return r.value;var o=r.get;return void 0!==o?o.call(n):void 0};function _toConsumableArray(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function _asyncToGenerator(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){return function step(r,i){try{var o=e[r](i),a=o.value}catch(t){return void n(t)}if(!o.done)return Promise.resolve(a).then(function(t){step("next",t)},function(t){step("throw",t)});t(a)}("next")})}}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var A=function(t){function ReportIndex(){var t,e,n;!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,ReportIndex);for(var r=arguments.length,i=Array(r),o=0;o<r;o++)i[o]=arguments[o];return e=n=_possibleConstructorReturn(this,(t=ReportIndex.__proto__||Object.getPrototypeOf(ReportIndex)).call.apply(t,[this].concat(i))),n.config={},_possibleConstructorReturn(n,e)}return function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{"constructor":{"value":t,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(ReportIndex,a["a"].Component),h(ReportIndex,[{"key":"render","value":function render(){var t=this,e=a.a.useState(!1),r=m(e,2),h=r[0],b=r[1],A=a.a.useState({"uid":"","page":1,"rows":10,"sort":"","order":"","status":["UNDERWAY","PUBLISHED","FINISHED","FILED","PUBLIC"]}),g=m(A,2),E=g[0],w=g[1],R=a.a.useState([]),T=m(R,2),I=T[0],k=T[1],D=a.a.useRouter(),O=0;Object(f.z)(0).then(function(t){O=t});var M,N,G,_=(M=_asyncToGenerator(i.a.mark(function _callee(){var e,n,r,o,a,c,u,s,d,y,m,h=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return i.a.wrap(function _callee$(t){for(;;)switch(t.prev=t.next){case 0:return h&&(E.page=1,w(E),k([])),t.next=3,Object(l.M)(E);case 3:for(e=t.sent,n=e.activitys.edges||[],r=[],o=0;o<n.length;o++)a=n[o],(c=a.node)&&((c.file_uploads||[]).length>0?(u=c.file_uploads[0].url,c.picture=Object(f.w)(u)):(s="ALL",c.picture=""+Object(p.a)("defaultAcitivyPic")[s]),(d=c.group)&&(y=d.name||"",d.name=y),(m=c.start_time||"").length>9&&(m=m.substring(0,10),c.startTime=m),r.push(c));r=r.filter(function(t){return Object(f.A)(t.start_time,t.end_time)&&(t.status="ENROLLMENT"),!0}),r=Object(v.g)([].concat(_toConsumableArray(I),_toConsumableArray(r))),k(r);case 10:case"end":return t.stop()}},_callee,t)})),function loadData(){return M.apply(this,arguments)}),S=(N=_asyncToGenerator(i.a.mark(function _callee2(){var e,n;return i.a.wrap(function _callee2$(t){for(;;)switch(t.prev=t.next){case 0:if(e=D.params.id,Object(d.a)(!0),0===O){t.next=5;break}return Object(f.v)(O,{"nextUrl":"/activityPages/pages/report_index","id":e}),t.abrupt("return");case 5:return n=D.params.id||"",E.org_id=[n],w(E),t.next=10,_(!0);case 10:Object(d.a)(!1);case 11:case"end":return t.stop()}},_callee2,t)})),function onload(){return N.apply(this,arguments)}),j=(G=_asyncToGenerator(i.a.mark(function _callee3(e){var n;return i.a.wrap(function _callee3$(t){for(;;)switch(t.prev=t.next){case 0:n="/activityPages/pages/activity_report?id="+e,Object(f.B)(n);case 2:case"end":return t.stop()}},_callee3,t)})),function toDetail(t){return G.apply(this,arguments)}),C=a.a.useRef(0);a.a.usePageScroll(function(t){C.current=t.scrollTop;var e=t.scrollTop;b(e>500)});var L=a.a.useRef(function(){}),U=a.a.useRef(0);a.a.useReachBottom(_asyncToGenerator(i.a.mark(function _callee4(){var e;return i.a.wrap(function _callee4$(n){for(;;)switch(n.prev=n.next){case 0:if(!t.pageHide){n.next=2;break}return n.abrupt("return");case 2:if(!((e=document.documentElement.scrollTop||document.body.scrollTop)<U.current)){n.next=8;break}return U.current=e,n.abrupt("return");case 8:U.current=e;case 9:L.current()&&Z();case 11:case"end":return n.stop()}},_callee4,t)})));var P,Z=(P=_asyncToGenerator(i.a.mark(function _callee5(){return i.a.wrap(function _callee5$(t){for(;;)switch(t.prev=t.next){case 0:E.page+=1,w(E),_();case 3:case"end":return t.stop()}},_callee5,t)})),function reachBottom(){return P.apply(this,arguments)});a.a.useDidShow(function(){Object(c.a)({"scrollTop":x.current,"duration":100}),Object(f.L)("活动现场"),t.pageHide=!1,L.current=Object(f.Q)()});var x=a.a.useRef(0);return a.a.useDidHide(function(){x.current=C.current,t.pageHide=!0}),a.a.useEffect(function(){S()},[]),o.l.createElement(u.a,{"className":"body"},o.l.createElement(u.a,{"className":"content content-nav"},o.l.createElement(u.a,{"className":"activities-report"},I&&I.length>0&&I.map(function(t){return o.l.createElement(u.a,{"className":"activities-report-content clear","onClick":function onClick(){return j(t.id)},"key":t.id},o.l.createElement(u.a,{"className":"activities-report-main left"},o.l.createElement(u.a,{"className":"activities-report-title-txt"},t.name),o.l.createElement(u.a,{"className":"activities-report-info"},t.group?t.group.simple_name||t.group.name:"",o.l.createElement(u.a,{"className":"activities-report-info-space"}),"|",o.l.createElement(u.a,{"className":"activities-report-info-space"}),t.start_time||t.startTime||""),o.l.createElement(u.a,{"className":"activities-report-info"},o.l.createElement(s.a,{"style":"width:18px;height:18px;","src":n(274),"className":"image"}),o.l.createElement(u.a,{"className":"activities-report-info-txt"},t.likes_num))),o.l.createElement(u.a,{"className":"activities-report-pic right","style":"background-image:url("+t.picture+");"},"PUBLISHED"==t.status&&o.l.createElement(u.a,{"className":"activities-report-stat activities-report-stat-red"},"准备中"),"ENROLLMENT"==t.status&&o.l.createElement(u.a,{"className":"activities-report-stat activities-report-stat-red"},"即将开始"),"PUBLIC"==t.status&&o.l.createElement(u.a,{"className":"activities-report-stat activities-report-stat-red"},"公示中"),"UNDERWAY"==t.status&&o.l.createElement(u.a,{"className":"activities-report-stat activities-report-stat-blue"},"进行中"),"FINISHED"==t.status&&o.l.createElement(u.a,{"className":"activities-report-stat activities-report-stat-gray"},"结算中"),"FILED"==t.status&&o.l.createElement(u.a,{"className":"activities-report-stat activities-report-stat-gray"},"已结束")))})),(!I||I.length<=0)&&o.l.createElement(u.a,{"className":"i-class i-load-more i-load-more-line"},o.l.createElement(u.a,{"className":"i-load-more-tip"},o.l.createElement(u.a,null,"暂无数据")))),h&&o.l.createElement(y.a,null))}},{"key":"componentDidMount","value":function componentDidMount(){b(ReportIndex.prototype.__proto__||Object.getPrototypeOf(ReportIndex.prototype),"componentDidMount",this)&&b(ReportIndex.prototype.__proto__||Object.getPrototypeOf(ReportIndex.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){b(ReportIndex.prototype.__proto__||Object.getPrototypeOf(ReportIndex.prototype),"componentDidShow",this)&&b(ReportIndex.prototype.__proto__||Object.getPrototypeOf(ReportIndex.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){b(ReportIndex.prototype.__proto__||Object.getPrototypeOf(ReportIndex.prototype),"componentDidHide",this)&&b(ReportIndex.prototype.__proto__||Object.getPrototypeOf(ReportIndex.prototype),"componentDidHide",this).call(this)}}]),ReportIndex}();A.config={}}}]);