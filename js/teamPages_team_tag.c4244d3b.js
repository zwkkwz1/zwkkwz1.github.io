(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{"263":function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n(2),a=n(273),o=n(6),u=n(596),c=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var i=function(e){function BackTop(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,BackTop),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(BackTop.__proto__||Object.getPrototypeOf(BackTop)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(BackTop,o["a"].Component),c(BackTop,[{"key":"render","value":function render(){return r.l.createElement(u.a,null,r.l.createElement(u.a,{"style":"bottom:15%;","onClick":function onClick(){return function toTop(){Object(a.a)({"scrollTop":0,"duration":500})}()},"className":"back-top"}))}}]),BackTop}();i.options={"addGlobalClass":!0}},"266":function(e,t,n){"use strict";n.d(t,"z",function(){return o}),n.d(t,"c",function(){return u}),n.d(t,"f",function(){return c}),n.d(t,"F",function(){return i}),n.d(t,"D",function(){return l}),n.d(t,"s",function(){return s}),n.d(t,"t",function(){return f}),n.d(t,"o",function(){return p}),n.d(t,"e",function(){return d}),n.d(t,"B",function(){return m}),n.d(t,"p",function(){return b}),n.d(t,"r",function(){return h}),n.d(t,"x",function(){return y}),n.d(t,"I",function(){return v}),n.d(t,"d",function(){return g}),n.d(t,"m",function(){return T}),n.d(t,"N",function(){return w}),n.d(t,"J",function(){return k}),n.d(t,"g",function(){return O}),n.d(t,"v",function(){return j}),n.d(t,"w",function(){return x}),n.d(t,"C",function(){return E}),n.d(t,"l",function(){return P}),n.d(t,"b",function(){return C}),n.d(t,"h",function(){return A}),n.d(t,"M",function(){return G}),n.d(t,"H",function(){return S}),n.d(t,"u",function(){return L}),n.d(t,"j",function(){return D}),n.d(t,"y",function(){return q}),n.d(t,"O",function(){return I}),n.d(t,"S",function(){return R}),n.d(t,"A",function(){return N}),n.d(t,"n",function(){return U}),n.d(t,"P",function(){return B}),n.d(t,"Q",function(){return M}),n.d(t,"a",function(){return H}),n.d(t,"K",function(){return z}),n.d(t,"i",function(){return $}),n.d(t,"E",function(){return F}),n.d(t,"L",function(){return J}),n.d(t,"G",function(){return Q}),n.d(t,"k",function(){return _}),n.d(t,"R",function(){return K}),n.d(t,"q",function(){return V});var r=n(3),a=n(5),o=function loadTeams(e){return r.a.httpGql(a.ac,e,!0)},u=function addTeamAlbum(e){return r.a.post("team_album",e)},c=function changeTeamAlbum(e){var t=e.id;return delete e.id,r.a.put("team_album/"+t,e)},i=function teamAlbumEvalLike(e){var t=e.id;return delete e.id,r.a.put("team_album_eval/isLike/"+t,e)},l=function saveEvalValue(e){return r.a.post("team_album_eval",e)},s=function getTeamAlbum(e){return r.a.httpGql(a.Pb,e,!0)},f=function getTeamAlbumEval(e){return r.a.httpGql(a.Qb,e,!0)},p=function getEvalStatus(e){return r.a.httpGql(a.S,e,!0)},d=function applyUnfrozen(e){return r.a.post("team/applyUnfrozen",e)},m=function recordInfo(e){return r.a.post("record_information",e)},b=function getFillingInfo(e){return r.a.httpGql(a.a,e)},_=function editFillingInfo(e,t){return r.a.put("record_information/"+e,t)},h=function getTeam(e){return r.a.httpGql(a.Nb,e,!0)},y=function joinTeam(e){return r.a.post("team_user",e)},v=function teamLable(e){return r.a.httpGql(a.Ub,e)},g=function addTeamLable(e){return r.a.post("team_lable",e)},T=function eidtTeamLable(e){var t=e.id;return delete e.id,r.a.put("team_lable/"+t,e)},w=function teamUserMsg(e){return r.a.httpGql(a.Xb,e)},k=function teamLableUsers(e){return r.a.httpGql(a.Vb,e)},O=function deleteLableUsers(e){return r.a.delete("team_lable_user/batch",e)},j=function getTeamUsers(e){return r.a.httpGql(a.Yb,e)},x=function joinLableTeam(e){return r.a.post("team_lable_user",e)},E=function removeLableUser(e){return r.a.delete("team_lable_user/"+e.id)},P=function editTeamMsg(e){return r.a.put("team/"+e.id,e)},C=function addTeam(e){return r.a.post("team",e)},A=function deletePic(e){return r.a.delete("file-upload/"+e.id)},G=function teamUserApply(e){return r.a.httpGql(a.mc,e)},S=function teamCyclActivities(e){return r.a.httpGql(a.Tb,e,!0)},L=function getTeamAlbums(e){return r.a.httpGql(a.Sb,e)},D=function disLikeAct(e){return r.a.put("activity_user/"+e.id+"/dislike",e)},q=function likeAct(e){return r.a.put("activity_user/"+e.id+"/like",e)},I=function teamWechatUsers(e){return r.a.httpGql(a.Zb,e,!0)},R=function writtenOffTeam(e){return r.a.put("team/"+e.id+"/writtenOff")},N=function logoutTeam(e){return r.a.delete("team_user",e)},U=function frozenTeam(e){return r.a.put("team/"+e+"/frozen")},B=function unfrozenTeam(e){return r.a.put("team/"+e+"/unfrozen")},M=function userApplyAudit(e){var t=e.id;return delete e.id,r.a.put("team_user/"+t+"/apply",e)},H=function activeTeams(e){return r.a.httpGql(a.b,e,!0)},z=function teamLables(e){return r.a.httpGql(a.Wb,e)},$=function deleteTeamLable(e){return r.a.delete("team_lable/"+e)},F=function setTeamRole(e){return r.a.put("team_user/"+e.id+"/setRole",e)},J=function teamTeransfer(e){return r.a.put("team/"+e.id+"/changeRole",e)},Q=function teamApplyDetail(e){return r.a.httpGql(a.lc,e)},K=function userCompanys(e){return r.a.httpGql(a.ec,e)},V=function getMyCompanys(e){return r.a.httpGql(a.ib,e)}},"273":function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r=n(0),a=void 0,o=void 0,u=function pageScrollTo(e){var t=e.scrollTop,n=e.duration,u=void 0===n?300:n,c=e.success,i=e.fail,l=e.complete;return new Promise(function(e,n){try{if(void 0===t)throw Error('"scrollTop" is required');var s=document.querySelector(".taro-tabbar__panel")||window;a||(a=s===window?function scrollFunc(e){if(void 0===e)return window.pageYOffset;window.scrollTo(0,e)}:function scrollFunc(e){if(void 0===e)return s.scrollTop;s.scrollTop=e});var f=a(),p=t-f,d=u/17,m=Object(r.g)(r.c,d);!function scroll(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=f+p*m(t);if(a(n),t<d)o&&clearTimeout(o),o=setTimeout(function(){scroll(t+1)},17);else{var r={"errMsg":"pageScrollTo:ok"};c&&c(r),l&&l(),e(r)}}()}catch(e){var b={"errMsg":"pageScrollTo:fail "+e.message};i&&i(b),l&&l(),n(b)}})}},"670":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return h});var r=n(4),a=n.n(r),o=n(2),u=n(6),c=n(25),i=n(273),l=n(596),s=n(14),f=n(29),p=n(266),d=n(263),m=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var u,c=e[Symbol.iterator]();!(r=(u=c.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{!r&&c.return&&c.return()}finally{if(a)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),b=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),_=function get(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var a=Object.getPrototypeOf(e);return null===a?void 0:get(a,t,n)}if("value"in r)return r.value;var o=r.get;return void 0!==o?o.call(n):void 0};function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function step(r,a){try{var o=t[r](a),u=o.value}catch(e){return void n(e)}if(!o.done)return Promise.resolve(u).then(function(e){step("next",e)},function(e){step("throw",e)});e(u)}("next")})}}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var h=function(e){function TeamTag(){var e,t,n;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,TeamTag);for(var r=arguments.length,a=Array(r),o=0;o<r;o++)a[o]=arguments[o];return t=n=_possibleConstructorReturn(this,(e=TeamTag.__proto__||Object.getPrototypeOf(TeamTag)).call.apply(e,[this].concat(a))),n.config={},_possibleConstructorReturn(n,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(TeamTag,u["a"].Component),b(TeamTag,[{"key":"render","value":function render(){var e=this,t=u.a.useState([]),n=m(t,2),r=n[0],b=n[1],_=u.a.useState(""),h=m(_,2),y=h[0],v=h[1],g=u.a.useState(""),T=m(g,2),w=T[0],k=T[1],O=u.a.useState(!1),j=m(O,2),x=j[0],E=j[1],P=u.a.useState(!1),C=m(P,2),A=C[0],G=C[1],S=u.a.useState([]),L=m(S,2),D=L[0],q=L[1],I=u.a.useState(!1),R=m(I,2),N=R[0],U=R[1],B=u.a.useState({"page":1,"rows":10,"teamId":""}),M=m(B,2),H=M[0],z=M[1],$=u.a.useState({"page":1,"rows":1e4,"uid":""}),F=m($,2),J=F[0],Q=F[1],K=u.a.useRouter(),V=Object(s.u)(),W=0;Object(s.z)(0).then(function(e){W=e});var Y,X,Z,ee,te,ne,re=(Y=_asyncToGenerator(a.a.mark(function _callee(t,n){var r,o,u,c;return a.a.wrap(function _callee$(e){for(;;)switch(e.prev=e.next){case 0:return r=[],e.next=3,Object(p.K)(t);case 3:return o=e.sent,(u=o&&o.team_lables&&o.team_lables.edges?o.team_lables.edges:[]).length>0&&(c=n.map(function(e){return e.lable_id}),u.forEach(function(e){var t=e.node;if(t){var a=t.id,o=c.indexOf(a);if(o>-1){t.checked=!0;var u=n[o].id;t.teamLableUserId=u}else t.checked=!1;r.push(t)}})),e.abrupt("return",r);case 7:case"end":return e.stop()}},_callee,e)})),function loadData(e,t){return Y.apply(this,arguments)}),ae=(X=_asyncToGenerator(a.a.mark(function _callee2(t){var n,r,o;return a.a.wrap(function _callee2$(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.J)(t);case 2:return n=e.sent,r=n&&n.team_lable_users&&n.team_lable_users.edges?n.team_lable_users.edges:[],o=[],r.length>0&&r.forEach(function(e){var t=e.node;o.push(t)}),e.abrupt("return",o);case 7:case"end":return e.stop()}},_callee2,e)})),function loadUserTags(e){return X.apply(this,arguments)}),oe=(Z=_asyncToGenerator(a.a.mark(function _callee3(){var t,n,r,o;return a.a.wrap(function _callee3$(e){for(;;)switch(e.prev=e.next){case 0:if(0===W){e.next=3;break}return Object(s.v)(W,{"nextUrl":"/pages/index/index"}),e.abrupt("return");case 3:return Object(f.a)(!0),t=V.uid,n=K.params.id,v(n),H.teamId=n,z(H),e.next=11,Object(p.N)({"uid":t,"teamId":n});case 11:return r=(r=e.sent)&&r.team_user&&r.team_user.role_id?r.team_user.role_id:"",k(r),J.uid=t,Q(J),e.next=18,ae(J);case 18:return r=e.sent,q(r),e.next=22,re(H,r);case 22:o=e.sent,b(function(e){return[].concat(_toConsumableArray(e),_toConsumableArray(o))}),G(!0),Object(f.a)(!1);case 26:case"end":return e.stop()}},_callee3,e)})),function onload(){return Z.apply(this,arguments)}),ue=(ee=_asyncToGenerator(a.a.mark(function _callee4(){var t,n;return a.a.wrap(function _callee4$(e){for(;;)switch(e.prev=e.next){case 0:if(!A){e.next=13;break}return Object(f.a)(!0),H.page=1,z(H),e.next=6,ae(J);case 6:return t=e.sent,q(t),e.next=10,re(H,t);case 10:n=e.sent,b([].concat(_toConsumableArray(n))),Object(f.a)(!1);case 13:case"end":return e.stop()}},_callee4,e)})),function onshow(){return ee.apply(this,arguments)}),ce=(te=_asyncToGenerator(a.a.mark(function _callee5(t){var n,o,u,c,i,l,s,d,m;return a.a.wrap(function _callee5$(e){for(;;)switch(e.prev=e.next){case 0:if(N){e.next=20;break}if(n=V.uid,o=t.id,U(!0),t.checked){e.next=13;break}return u={"uid":n,"lable_id":o},e.next=9,Object(p.w)(u);case 9:0===(c=e.sent).code?(i=c.data,l=r.filter(function(e){return e.id===o&&(e.checked=!0,e.user_num=(e.user_num||0)+1,e.teamLableUserId=i.id),!0}),b([].concat(_toConsumableArray(l)))):Object(f.c)(c.msg),e.next=19;break;case 13:if(!(s=t.teamLableUserId)){e.next=19;break}return e.next=17,Object(p.C)({"id":s});case 17:0===(d=e.sent).code?(m=r.filter(function(e){return e.teamLableUserId===s&&(e.teamLableUserId="",e.user_num=e.user_num-1,e.user_num=e.user_num>0?e.user_num:0,e.checked=!1),!0}),b([].concat(_toConsumableArray(m)))):Object(f.c)(d.msg);case 19:U(!1);case 20:case"end":return e.stop()}},_callee5,e)})),function joinTag(e){return te.apply(this,arguments)}),ie=(ne=_asyncToGenerator(a.a.mark(function _callee6(t){var n,o,u,i,l,d,m,_,h;return a.a.wrap(function _callee6$(e){for(;;)switch(e.prev=e.next){case 0:if(-1!==["PLEADER","TLEADER"].indexOf(w)){e.next=3;break}return e.abrupt("return");case 3:return(n=[]).push({"title":"编辑","value":"edit"}),n.push({"title":"删除","value":"delete"}),o=n.map(function(e){return e.title}),u=t.id,e.prev=8,e.next=11,Object(c.c)({"itemList":o});case 11:if(i=e.sent,"showActionSheet:ok"!==i.errMsg){e.next=34;break}if(l=i.tapIndex,d=n[l],"delete"!==(m=d.value)){e.next=33;break}return e.next=20,Object(f.b)({"title":"提示","content":"确定要删除吗?"});case 20:if(e.sent.confirm){e.next=23;break}return e.abrupt("return");case 23:return e.next=25,Object(p.i)(u);case 25:if(0!==e.sent.code){e.next=31;break}return e.next=29,Object(f.c)("删除成功");case 29:_=r.filter(function(e){return e.id!==u}),b(_);case 31:e.next=34;break;case 33:"edit"===m&&(h="/teamPages/pages/tag_edit?tagId="+u+"&teamId="+y+"&type=edit",Object(s.B)(h));case 34:e.next=38;break;case 36:e.prev=36,e.t0=e.catch(8);case 38:case"end":return e.stop()}},_callee6,e,[[8,36]])})),function showActions(e){return ne.apply(this,arguments)}),le=u.a.useRef(function(){}),se=u.a.useRef(0);u.a.useReachBottom(_asyncToGenerator(a.a.mark(function _callee7(){var t;return a.a.wrap(function _callee7$(n){for(;;)switch(n.prev=n.next){case 0:if(!e.pageHide){n.next=2;break}return n.abrupt("return");case 2:if(!((t=document.documentElement.scrollTop||document.body.scrollTop)<se.current)){n.next=8;break}return se.current=t,n.abrupt("return");case 8:se.current=t;case 9:le.current()&&pe();case 11:case"end":return n.stop()}},_callee7,e)})));var fe,pe=(fe=_asyncToGenerator(a.a.mark(function _callee8(){var t;return a.a.wrap(function _callee8$(e){for(;;)switch(e.prev=e.next){case 0:return Object(f.a)(!0),H.page+=1,z(H),e.next=5,re(H,D);case 5:t=e.sent,b(function(e){return[].concat(_toConsumableArray(e),[t])}),Object(f.a)(!1);case 8:case"end":return e.stop()}},_callee8,e)})),function reachBottom(){return fe.apply(this,arguments)});u.a.useDidShow(function(){Object(i.a)({"scrollTop":de.current,"duration":100}),Object(s.L)("小分队"),ue(),e.pageHide=!1,le.current=Object(s.Q)()});var de=u.a.useRef(0);u.a.useDidHide(function(){de.current=me.current,e.pageHide=!0});var me=u.a.useRef(0);return u.a.usePageScroll(function(e){me.current=e.scrollTop;var t=e.scrollTop;E(t>500)}),u.a.useEffect(function(){oe()},[]),o.l.createElement(l.a,{"className":"body"},o.l.createElement(l.a,{"className":"content fix"},o.l.createElement(l.a,{"className":"team-tag"},r&&r.length>0?r.map(function(e){return o.l.createElement(l.a,{"onLongPress":function onLongPress(){return ie(e)},"className":"list clear","key":e.name},o.l.createElement(l.a,{"style":"overflow: hidden;word-break: keep-all;text-overflow: ellipsis;white-space: nowrap;width:58%;","onClick":function onClick(){return function toDetail(e){var t=e.id,n="/teamPages/pages/tag_info?teamId="+y+"&tagId="+t;Object(s.B)(n)}(e)},"className":"list-l left"},e.name||""),o.l.createElement(l.a,{"className":"list-c left"},e.user_num||0,"人"),e.checked?o.l.createElement(l.a,{"onClick":function onClick(){return ce(e)},"className":"list-r-gray right"},o.l.createElement(l.a,null,"退出")):o.l.createElement(l.a,{"onClick":function onClick(){return ce(e)},"className":"list-r right"},o.l.createElement(l.a,null,"加入")))}):o.l.createElement(l.a,{"className":"i-class i-load-more i-load-more-line"},o.l.createElement(l.a,{"className":"i-load-more-tip"},o.l.createElement(l.a,null,"暂无数据"))))),("PLEADER"==w||"TLEADER"==w)&&o.l.createElement(l.a,{"className":"foot-nav"},o.l.createElement(l.a,{"onClick":function onClick(){return function createTag(){var e="/teamPages/pages/tag_edit?teamId="+y+"&type=create";Object(s.B)(e)}()},"className":"activity-bottom-btn clear"},o.l.createElement(l.a,{"className":"btn-new"},"新建"))),x&&o.l.createElement(d.a,null))}},{"key":"componentDidMount","value":function componentDidMount(){_(TeamTag.prototype.__proto__||Object.getPrototypeOf(TeamTag.prototype),"componentDidMount",this)&&_(TeamTag.prototype.__proto__||Object.getPrototypeOf(TeamTag.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){_(TeamTag.prototype.__proto__||Object.getPrototypeOf(TeamTag.prototype),"componentDidShow",this)&&_(TeamTag.prototype.__proto__||Object.getPrototypeOf(TeamTag.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){_(TeamTag.prototype.__proto__||Object.getPrototypeOf(TeamTag.prototype),"componentDidHide",this)&&_(TeamTag.prototype.__proto__||Object.getPrototypeOf(TeamTag.prototype),"componentDidHide",this).call(this)}}]),TeamTag}();h.config={}}}]);