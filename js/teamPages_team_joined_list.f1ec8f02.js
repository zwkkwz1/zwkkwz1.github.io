(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{"263":function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n(2),o=n(273),a=n(6),u=n(596),i=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var c=function(e){function BackTop(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,BackTop),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(BackTop.__proto__||Object.getPrototypeOf(BackTop)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(BackTop,a["a"].Component),i(BackTop,[{"key":"render","value":function render(){return r.l.createElement(u.a,null,r.l.createElement(u.a,{"style":"bottom:15%;","onClick":function onClick(){return function toTop(){Object(o.a)({"scrollTop":0,"duration":500})}()},"className":"back-top"}))}}]),BackTop}();c.options={"addGlobalClass":!0}},"266":function(e,t,n){"use strict";n.d(t,"z",function(){return a}),n.d(t,"c",function(){return u}),n.d(t,"f",function(){return i}),n.d(t,"F",function(){return c}),n.d(t,"D",function(){return l}),n.d(t,"s",function(){return s}),n.d(t,"t",function(){return f}),n.d(t,"o",function(){return p}),n.d(t,"e",function(){return d}),n.d(t,"B",function(){return m}),n.d(t,"p",function(){return b}),n.d(t,"r",function(){return y}),n.d(t,"x",function(){return h}),n.d(t,"I",function(){return v}),n.d(t,"d",function(){return T}),n.d(t,"m",function(){return g}),n.d(t,"N",function(){return w}),n.d(t,"J",function(){return O}),n.d(t,"g",function(){return k}),n.d(t,"v",function(){return j}),n.d(t,"w",function(){return E}),n.d(t,"C",function(){return L}),n.d(t,"l",function(){return P}),n.d(t,"b",function(){return G}),n.d(t,"h",function(){return A}),n.d(t,"M",function(){return x}),n.d(t,"H",function(){return C}),n.d(t,"u",function(){return D}),n.d(t,"j",function(){return q}),n.d(t,"y",function(){return J}),n.d(t,"O",function(){return S}),n.d(t,"S",function(){return N}),n.d(t,"A",function(){return R}),n.d(t,"n",function(){return U}),n.d(t,"P",function(){return B}),n.d(t,"Q",function(){return M}),n.d(t,"a",function(){return H}),n.d(t,"K",function(){return z}),n.d(t,"i",function(){return I}),n.d(t,"E",function(){return F}),n.d(t,"L",function(){return $}),n.d(t,"G",function(){return Q}),n.d(t,"k",function(){return _}),n.d(t,"R",function(){return V}),n.d(t,"q",function(){return W});var r=n(3),o=n(5),a=function loadTeams(e){return r.a.httpGql(o.ac,e,!0)},u=function addTeamAlbum(e){return r.a.post("team_album",e)},i=function changeTeamAlbum(e){var t=e.id;return delete e.id,r.a.put("team_album/"+t,e)},c=function teamAlbumEvalLike(e){var t=e.id;return delete e.id,r.a.put("team_album_eval/isLike/"+t,e)},l=function saveEvalValue(e){return r.a.post("team_album_eval",e)},s=function getTeamAlbum(e){return r.a.httpGql(o.Pb,e,!0)},f=function getTeamAlbumEval(e){return r.a.httpGql(o.Qb,e,!0)},p=function getEvalStatus(e){return r.a.httpGql(o.S,e,!0)},d=function applyUnfrozen(e){return r.a.post("team/applyUnfrozen",e)},m=function recordInfo(e){return r.a.post("record_information",e)},b=function getFillingInfo(e){return r.a.httpGql(o.a,e)},_=function editFillingInfo(e,t){return r.a.put("record_information/"+e,t)},y=function getTeam(e){return r.a.httpGql(o.Nb,e,!0)},h=function joinTeam(e){return r.a.post("team_user",e)},v=function teamLable(e){return r.a.httpGql(o.Ub,e)},T=function addTeamLable(e){return r.a.post("team_lable",e)},g=function eidtTeamLable(e){var t=e.id;return delete e.id,r.a.put("team_lable/"+t,e)},w=function teamUserMsg(e){return r.a.httpGql(o.Xb,e)},O=function teamLableUsers(e){return r.a.httpGql(o.Vb,e)},k=function deleteLableUsers(e){return r.a.delete("team_lable_user/batch",e)},j=function getTeamUsers(e){return r.a.httpGql(o.Yb,e)},E=function joinLableTeam(e){return r.a.post("team_lable_user",e)},L=function removeLableUser(e){return r.a.delete("team_lable_user/"+e.id)},P=function editTeamMsg(e){return r.a.put("team/"+e.id,e)},G=function addTeam(e){return r.a.post("team",e)},A=function deletePic(e){return r.a.delete("file-upload/"+e.id)},x=function teamUserApply(e){return r.a.httpGql(o.mc,e)},C=function teamCyclActivities(e){return r.a.httpGql(o.Tb,e,!0)},D=function getTeamAlbums(e){return r.a.httpGql(o.Sb,e)},q=function disLikeAct(e){return r.a.put("activity_user/"+e.id+"/dislike",e)},J=function likeAct(e){return r.a.put("activity_user/"+e.id+"/like",e)},S=function teamWechatUsers(e){return r.a.httpGql(o.Zb,e,!0)},N=function writtenOffTeam(e){return r.a.put("team/"+e.id+"/writtenOff")},R=function logoutTeam(e){return r.a.delete("team_user",e)},U=function frozenTeam(e){return r.a.put("team/"+e+"/frozen")},B=function unfrozenTeam(e){return r.a.put("team/"+e+"/unfrozen")},M=function userApplyAudit(e){var t=e.id;return delete e.id,r.a.put("team_user/"+t+"/apply",e)},H=function activeTeams(e){return r.a.httpGql(o.b,e,!0)},z=function teamLables(e){return r.a.httpGql(o.Wb,e)},I=function deleteTeamLable(e){return r.a.delete("team_lable/"+e)},F=function setTeamRole(e){return r.a.put("team_user/"+e.id+"/setRole",e)},$=function teamTeransfer(e){return r.a.put("team/"+e.id+"/changeRole",e)},Q=function teamApplyDetail(e){return r.a.httpGql(o.lc,e)},V=function userCompanys(e){return r.a.httpGql(o.ec,e)},W=function getMyCompanys(e){return r.a.httpGql(o.ib,e)}},"273":function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r=n(0),o=void 0,a=void 0,u=function pageScrollTo(e){var t=e.scrollTop,n=e.duration,u=void 0===n?300:n,i=e.success,c=e.fail,l=e.complete;return new Promise(function(e,n){try{if(void 0===t)throw Error('"scrollTop" is required');var s=document.querySelector(".taro-tabbar__panel")||window;o||(o=s===window?function scrollFunc(e){if(void 0===e)return window.pageYOffset;window.scrollTo(0,e)}:function scrollFunc(e){if(void 0===e)return s.scrollTop;s.scrollTop=e});var f=o(),p=t-f,d=u/17,m=Object(r.g)(r.c,d);!function scroll(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=f+p*m(t);if(o(n),t<d)a&&clearTimeout(a),a=setTimeout(function(){scroll(t+1)},17);else{var r={"errMsg":"pageScrollTo:ok"};i&&i(r),l&&l(),e(r)}}()}catch(e){var b={"errMsg":"pageScrollTo:fail "+e.message};c&&c(b),l&&l(),n(b)}})}},"667":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return _});var r=n(4),o=n.n(r),a=n(2),u=n(6),i=n(273),c=n(596),l=n(14),s=n(29),f=n(266),p=n(263),d=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var u,i=e[Symbol.iterator]();!(r=(u=i.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{!r&&i.return&&i.return()}finally{if(o)throw a}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),m=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),b=function get(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:get(o,t,n)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(n):void 0};function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function step(r,o){try{var a=t[r](o),u=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(u).then(function(e){step("next",e)},function(e){step("throw",e)});e(u)}("next")})}}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var _=function(e){function TeamJoinedList(){var e,t,n;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,TeamJoinedList);for(var r=arguments.length,o=Array(r),a=0;a<r;a++)o[a]=arguments[a];return t=n=_possibleConstructorReturn(this,(e=TeamJoinedList.__proto__||Object.getPrototypeOf(TeamJoinedList)).call.apply(e,[this].concat(o))),n.config={},_possibleConstructorReturn(n,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(TeamJoinedList,u["a"].Component),m(TeamJoinedList,[{"key":"render","value":function render(){var e=this,t=u.a.useState([]),n=d(t,2),r=n[0],m=n[1],b=u.a.useState(!1),_=d(b,2),y=_[0],h=_[1],v=u.a.useState({"page":1,"rows":10,"team_id":""}),T=d(v,2),g=T[0],w=T[1],O=u.a.useRouter(),k=0;Object(l.z)(0).then(function(e){k=e});var j,E,L,P,G=(j=_asyncToGenerator(o.a.mark(function _callee(){var t,n,r,a,u,i,c=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return o.a.wrap(function _callee$(e){for(;;)switch(e.prev=e.next){case 0:return c&&(g.page=1,w(g),m([])),e.next=3,Object(f.M)(g);case 3:for(t=e.sent,n=t.team_user_applys.edges||[],r=[],a=0;a<n.length;a++)u=n[a],i=u.node,r.push(i);m(function(e){return[].concat(_toConsumableArray(e),r)});case 8:case"end":return e.stop()}},_callee,e)})),function loadData(){return j.apply(this,arguments)}),A=(E=_asyncToGenerator(o.a.mark(function _callee2(){var t;return o.a.wrap(function _callee2$(e){for(;;)switch(e.prev=e.next){case 0:if(Object(s.a)(!0),0===k){e.next=4;break}return Object(l.v)(k,{"nextUrl":"/pages/index/index"}),e.abrupt("return");case 4:return t=O.params.id,g.team_id=t,w(g),e.next=9,G(!0);case 9:Object(s.a)(!1);case 10:case"end":return e.stop()}},_callee2,e)})),function onload(){return E.apply(this,arguments)}),x=(L=_asyncToGenerator(o.a.mark(function _callee3(){return o.a.wrap(function _callee3$(e){for(;;)switch(e.prev=e.next){case 0:if(!g.team_id){e.next=5;break}return Object(s.a)(!0),e.next=4,G(!0);case 4:Object(s.a)(!1);case 5:case"end":return e.stop()}},_callee3,e)})),function onshow(){return L.apply(this,arguments)}),C=(P=_asyncToGenerator(o.a.mark(function _callee4(t){var n;return o.a.wrap(function _callee4$(e){for(;;)switch(e.prev=e.next){case 0:n="/teamPages/pages/team_joined_audit?id="+t.id,Object(l.B)(n);case 2:case"end":return e.stop()}},_callee4,e)})),function toDetail(e){return P.apply(this,arguments)}),D=u.a.useRef(0);u.a.usePageScroll(function(e){D.current=e.scrollTop;var t=e.scrollTop;h(t>500)});var q=function reachBottom(){g.page+=1,w(g),G()},J=u.a.useRef(function(){}),S=u.a.useRef(0);u.a.useReachBottom(_asyncToGenerator(o.a.mark(function _callee5(){var t;return o.a.wrap(function _callee5$(n){for(;;)switch(n.prev=n.next){case 0:if(!e.pageHide){n.next=2;break}return n.abrupt("return");case 2:if(!((t=document.documentElement.scrollTop||document.body.scrollTop)<S.current)){n.next=8;break}return S.current=t,n.abrupt("return");case 8:S.current=t;case 9:J.current()&&q();case 11:case"end":return n.stop()}},_callee5,e)})));var N=u.a.useRef(0);return u.a.useDidShow(function(){Object(i.a)({"scrollTop":N.current,"duration":100}),e.pageHide=!1,J.current=Object(l.Q)(),x()}),u.a.useDidHide(function(){N.current=D.current,e.pageHide=!0}),u.a.useEffect(function(){A()},[]),a.l.createElement(c.a,null,a.l.createElement(c.a,{"className":"content"},a.l.createElement(c.a,{"className":"message"},r&&r.length>0?r.map(function(e){return a.l.createElement(c.a,{"className":"box","key":e.id},a.l.createElement(c.a,{"className":"message-date"},e.created_at),"TOAUDITED"===e.status?a.l.createElement(c.a,{"className":"message-box","onClick":function onClick(){return C(e)}},"TOAUDITED"===e.status&&a.l.createElement(c.a,{"className":"unread"}),a.l.createElement(c.a,{"className":"message-title"},"加入团队申请"),a.l.createElement(c.a,{"className":"message-content"},e.wechat_user.username||e.wechat_user.nickname,"申请加入您的团队["+e.team.team_name+"]")):a.l.createElement(c.a,{"className":"message-box"},a.l.createElement(c.a,{"className":"message-title"},"加入团队申请"),a.l.createElement(c.a,{"className":"message-content"},e.wechat_user.username||e.wechat_user.nickname,"申请加入您的团队["+e.team.team_name+"]")))}):a.l.createElement(c.a,{"className":"i-class i-load-more i-load-more-line"},a.l.createElement(c.a,{"className":"i-load-more-tip"},a.l.createElement(c.a,null,"暂无数据"))))),y&&a.l.createElement(p.a,null))}},{"key":"componentDidMount","value":function componentDidMount(){b(TeamJoinedList.prototype.__proto__||Object.getPrototypeOf(TeamJoinedList.prototype),"componentDidMount",this)&&b(TeamJoinedList.prototype.__proto__||Object.getPrototypeOf(TeamJoinedList.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){b(TeamJoinedList.prototype.__proto__||Object.getPrototypeOf(TeamJoinedList.prototype),"componentDidShow",this)&&b(TeamJoinedList.prototype.__proto__||Object.getPrototypeOf(TeamJoinedList.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){b(TeamJoinedList.prototype.__proto__||Object.getPrototypeOf(TeamJoinedList.prototype),"componentDidHide",this)&&b(TeamJoinedList.prototype.__proto__||Object.getPrototypeOf(TeamJoinedList.prototype),"componentDidHide",this).call(this)}}]),TeamJoinedList}();_.config={}}}]);