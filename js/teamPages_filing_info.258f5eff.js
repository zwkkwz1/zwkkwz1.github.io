(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{"267":function(e,t,n){"use strict";n.d(t,"z",function(){return o}),n.d(t,"c",function(){return c}),n.d(t,"f",function(){return i}),n.d(t,"F",function(){return l}),n.d(t,"D",function(){return u}),n.d(t,"s",function(){return s}),n.d(t,"t",function(){return p}),n.d(t,"o",function(){return m}),n.d(t,"e",function(){return f}),n.d(t,"B",function(){return d}),n.d(t,"p",function(){return h}),n.d(t,"r",function(){return y}),n.d(t,"x",function(){return v}),n.d(t,"I",function(){return g}),n.d(t,"d",function(){return _}),n.d(t,"m",function(){return A}),n.d(t,"N",function(){return E}),n.d(t,"J",function(){return C}),n.d(t,"g",function(){return O}),n.d(t,"v",function(){return w}),n.d(t,"w",function(){return x}),n.d(t,"C",function(){return k}),n.d(t,"l",function(){return F}),n.d(t,"b",function(){return N}),n.d(t,"h",function(){return G}),n.d(t,"M",function(){return j}),n.d(t,"H",function(){return I}),n.d(t,"u",function(){return T}),n.d(t,"j",function(){return S}),n.d(t,"y",function(){return q}),n.d(t,"O",function(){return z}),n.d(t,"S",function(){return D}),n.d(t,"A",function(){return Y}),n.d(t,"n",function(){return P}),n.d(t,"P",function(){return U}),n.d(t,"Q",function(){return L}),n.d(t,"a",function(){return V}),n.d(t,"K",function(){return H}),n.d(t,"i",function(){return R}),n.d(t,"E",function(){return W}),n.d(t,"L",function(){return B}),n.d(t,"G",function(){return Q}),n.d(t,"k",function(){return b}),n.d(t,"R",function(){return M}),n.d(t,"q",function(){return J});var a=n(3),r=n(5),o=function loadTeams(e){return a.a.httpGql(r.ac,e,!0)},c=function addTeamAlbum(e){return a.a.post("team_album",e)},i=function changeTeamAlbum(e){var t=e.id;return delete e.id,a.a.put("team_album/"+t,e)},l=function teamAlbumEvalLike(e){var t=e.id;return delete e.id,a.a.put("team_album_eval/isLike/"+t,e)},u=function saveEvalValue(e){return a.a.post("team_album_eval",e)},s=function getTeamAlbum(e){return a.a.httpGql(r.Pb,e,!0)},p=function getTeamAlbumEval(e){return a.a.httpGql(r.Qb,e,!0)},m=function getEvalStatus(e){return a.a.httpGql(r.S,e,!0)},f=function applyUnfrozen(e){return a.a.post("team/applyUnfrozen",e)},d=function recordInfo(e){return a.a.post("record_information",e)},h=function getFillingInfo(e){return a.a.httpGql(r.a,e)},b=function editFillingInfo(e,t){return a.a.put("record_information/"+e,t)},y=function getTeam(e){return a.a.httpGql(r.Nb,e,!0)},v=function joinTeam(e){return a.a.post("team_user",e)},g=function teamLable(e){return a.a.httpGql(r.Ub,e)},_=function addTeamLable(e){return a.a.post("team_lable",e)},A=function eidtTeamLable(e){var t=e.id;return delete e.id,a.a.put("team_lable/"+t,e)},E=function teamUserMsg(e){return a.a.httpGql(r.Xb,e)},C=function teamLableUsers(e){return a.a.httpGql(r.Vb,e)},O=function deleteLableUsers(e){return a.a.delete("team_lable_user/batch",e)},w=function getTeamUsers(e){return a.a.httpGql(r.Yb,e)},x=function joinLableTeam(e){return a.a.post("team_lable_user",e)},k=function removeLableUser(e){return a.a.delete("team_lable_user/"+e.id)},F=function editTeamMsg(e){return a.a.put("team/"+e.id,e)},N=function addTeam(e){return a.a.post("team",e)},G=function deletePic(e){return a.a.delete("file-upload/"+e.id)},j=function teamUserApply(e){return a.a.httpGql(r.mc,e)},I=function teamCyclActivities(e){return a.a.httpGql(r.Tb,e,!0)},T=function getTeamAlbums(e){return a.a.httpGql(r.Sb,e)},S=function disLikeAct(e){return a.a.put("activity_user/"+e.id+"/dislike",e)},q=function likeAct(e){return a.a.put("activity_user/"+e.id+"/like",e)},z=function teamWechatUsers(e){return a.a.httpGql(r.Zb,e,!0)},D=function writtenOffTeam(e){return a.a.put("team/"+e.id+"/writtenOff")},Y=function logoutTeam(e){return a.a.delete("team_user",e)},P=function frozenTeam(e){return a.a.put("team/"+e+"/frozen")},U=function unfrozenTeam(e){return a.a.put("team/"+e+"/unfrozen")},L=function userApplyAudit(e){var t=e.id;return delete e.id,a.a.put("team_user/"+t+"/apply",e)},V=function activeTeams(e){return a.a.httpGql(r.b,e,!0)},H=function teamLables(e){return a.a.httpGql(r.Wb,e)},R=function deleteTeamLable(e){return a.a.delete("team_lable/"+e)},W=function setTeamRole(e){return a.a.put("team_user/"+e.id+"/setRole",e)},B=function teamTeransfer(e){return a.a.put("team/"+e.id+"/changeRole",e)},Q=function teamApplyDetail(e){return a.a.httpGql(r.lc,e)},M=function userCompanys(e){return a.a.httpGql(r.ec,e)},J=function getMyCompanys(e){return a.a.httpGql(r.ib,e)}},"314":function(e,t){e.exports="data:image/png;base64,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"},"659":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return C});var a=n(4),r=n.n(a),o=n(2),c=n(6),i=n(329),l=n(256),u=n(252),s=n(598),p=n(283),m=n(599),f=n(276),d=n(306),h=n(301),b=n(29),y=n(14),v=n(267),g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},_=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var n=[],a=!0,r=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(a=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{!a&&i.return&&i.return()}finally{if(r)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),A=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),E=function get(e,t,n){null===e&&(e=Function.prototype);var a=Object.getOwnPropertyDescriptor(e,t);if(void 0===a){var r=Object.getPrototypeOf(e);return null===r?void 0:get(r,t,n)}if("value"in a)return a.value;var o=a.get;return void 0!==o?o.call(n):void 0};function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function step(a,r){try{var o=t[a](r),c=o.value}catch(e){return void n(e)}if(!o.done)return Promise.resolve(c).then(function(e){step("next",e)},function(e){step("throw",e)});e(c)}("next")})}}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var C=function(e){function FilingInfo(){var e,t,n;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,FilingInfo);for(var a=arguments.length,r=Array(a),o=0;o<a;o++)r[o]=arguments[o];return t=n=_possibleConstructorReturn(this,(e=FilingInfo.__proto__||Object.getPrototypeOf(FilingInfo)).call.apply(e,[this].concat(r))),n.config={},_possibleConstructorReturn(n,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(FilingInfo,c["a"].Component),A(FilingInfo,[{"key":"render","value":function render(){var e,t,a,A,E=this,C=c.a.useState({}),O=_(C,2),w=O[0],x=O[1],k=c.a.useState(!1),F=_(k,2),N=F[0],G=F[1],j=c.a.useState({}),I=_(j,2),T=I[0],S=I[1],q=c.a.useState("error-txt"),z=_(q,1)[0],D=c.a.useState({}),Y=_(D,2),P=Y[0],U=Y[1],L=c.a.useState([]),V=_(L,2),H=V[0],R=V[1],W=c.a.useState([]),B=_(W,2),Q=B[0],M=B[1],J=c.a.useState({}),K=_(J,2),X=K[0],Z=K[1],$=c.a.useState(!1),ee=_($,2),te=ee[0],ne=ee[1],ae=c.a.useRouter(),re=Object(y.u)(),oe=(e=_asyncToGenerator(r.a.mark(function _callee(){var e,t,n,a;return r.a.wrap(function _callee$(r){for(;;)switch(r.prev=r.next){case 0:return e={"count":9,"sizeType":["original","compressed"],"sourceType":["album","camera"]},r.next=3,Object(i.a)(e);case 3:t=r.sent,n=t.tempFilePaths[0],a=[],t.tempFiles.forEach(function(e){a.push(e.originalFileObj.name)}),M([].concat(_toConsumableArray(Q),a)),R([].concat(_toConsumableArray(H),_toConsumableArray(t.tempFilePaths))),T.company_cret=n,w.company_pic="",S(T),x(w);case 13:case"end":return r.stop()}},_callee,E)})),function selectPicImage(){return e.apply(this,arguments)}),ce=function onPreviewPic(e){Object(l.a)({"current":e,"urls":H})},ie=(t=_asyncToGenerator(r.a.mark(function _callee2(e){var t;return r.a.wrap(function _callee2$(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(b.b)({"title":"提示","content":"确定删除？"});case 2:n.sent.confirm&&(t=[],0===(t=H.filter(function(t,n){return n!==e})).length&&(w.company_pic=z,x(w)),R([].concat(_toConsumableArray(t))),t=Q.filter(function(t,n){return n!==e}),M([].concat(_toConsumableArray(t))));case 4:case"end":return n.stop()}},_callee2,E)})),function onRemovePic(e){return t.apply(this,arguments)}),le=function validatePersonForm(e){var t=[],n=!0;e.company_type||(n=!1,w.company_type=z,t.push("类别不能为空")),te||(e.company_org||(n=!1,w.company_org=z,t.push("登记/备案机构不能为空")),e.company_unisc||(n=!1,w.company_unisc=z,t.push("统一社会信用代码不能为空"))),T.company_cret||H&&H.length>0||(n=!1,w.company_pic=z,t.push(te?"证明材料不能为空":"登记/备案证书不能为空")),x(w),console.log("tips",t,n);var a=t.length>0?t[0]:"";return n||c.a.atMessage({"message":a,"type":"warning"}),n},ue=(a=_asyncToGenerator(r.a.mark(function _callee3(){var e,t,n,a,o;return r.a.wrap(function _callee3$(r){for(;;)switch(r.prev=r.next){case 0:if(!le(e=P)){r.next=44;break}if(Object(b.a)(!0),T.id=P.id||d.create().toString(),S(T),201!==(t={"statusCode":201}).statusCode){r.next=42;break}if(e.company_name=X.companyName,e.company_addr=X.address,n={},!P.id){r.next=16;break}return r.next=13,Object(v.k)(P.id,e);case 13:n=r.sent,r.next=20;break;case 16:return e.id=T.id,r.next=19,Object(v.B)(e);case 19:n=r.sent;case 20:if(0!==n.code){r.next=37;break}if(!T.company_cret){r.next=27;break}return a=T.id,o={"masterId":a,"moduleName":"record_pic"},Object.assign(o,re),r.next=27,Object(y.U)(H,o,Q);case 27:return Object(b.a)(!1),X.record_id=T.id,Object(u.e)({"key":te?"club_id":"record_id","data":JSON.stringify(X)}),r.next=32,Object(u.e)({"key":te?"clubId":"recordId","data":T.id});case 32:return r.next=34,Object(b.c)("登记成功!");case 34:Object(y.C)(1),r.next=40;break;case 37:return Object(b.a)(!1),r.next=40,Object(b.c)(n.data);case 40:r.next=44;break;case 42:Object(b.a)(!1),Object(b.c)(""+t.msg);case 44:case"end":return r.stop()}},_callee3,E)})),function personFormSubmit(){return a.apply(this,arguments)}),se=(A=_asyncToGenerator(r.a.mark(function _callee4(){var e,t,n;return r.a.wrap(function _callee4$(a){for(;;)switch(a.prev=a.next){case 0:Object(b.a)(!0);try{e=Object(u.c)("teamDetail"),console.log(e),e&&Z(function(t){return g({},t,e)})}catch(e){console.log("获取企业/机构/团队备案信息缓存失败")}if(!ae.params.id){a.next=11;break}return t=ae.params.id,a.next=6,Object(v.p)({"id":t});case 6:(n=(n=a.sent).record_information||{}).record_pic&&n.record_pic.length>0&&(n.record_pic.forEach(function(e){e.url=Object(y.w)(e.url)}),R([].concat(_toConsumableArray(n.record_pic)))),delete n.record_pic,U(n);case 11:"undefined"!==ae.params.teamId&&G(!0),"association"===ae.params.type&&ne(!0),Object(b.a)(!1);case 14:case"end":return a.stop()}},_callee4,E)})),function onload(){return A.apply(this,arguments)});return c.a.useDidShow(function(){Object(y.L)("备案信息")}),c.a.useEffect(function(){se()},[]),o.l.createElement(s.a,{"className":"content content-nav"},o.l.createElement(s.a,{"className":"box"},o.l.createElement(s.a,{"className":"nav-list"},o.l.createElement(s.a,{"className":"nav-list-box"},o.l.createElement(s.a,{"className":"nav-list-input clear"},o.l.createElement(s.a,{"className":"nav-list-title left "+w.company_type},te?"机构/团体类别":"单位类别"),o.l.createElement(s.a,{"className":"nav-list-main right"},o.l.createElement(p.a,{"disabled":N,"className":"input-txt","onInput":function typeChange(e){P.company_type=e.detail.value,w.company_type=e.detail.value?"":z,U(P),x(w)}.bind(this),"name":"company_type","value":P.company_type?P.company_type:"","placeholder":"类别"})))),o.l.createElement(s.a,{"className":"nav-list-box"},o.l.createElement(s.a,{"className":"nav-list-input clear"},o.l.createElement(s.a,{"className":"nav-list-title left","style":"width:35%"},"期望服务区域"),o.l.createElement(s.a,{"className":"nav-list-main right","style":"width:55%"},o.l.createElement(p.a,{"disabled":N,"className":"input-txt","onInput":function serviceAreaChange(e){P.service_area=e.detail.value,U(P)}.bind(this),"name":"service_area","value":P.service_area?P.service_area:"","placeholder":"期望服务区域"})))),o.l.createElement(s.a,{"className":"nav-list-box"},o.l.createElement(s.a,{"className":"nav-list-input clear"},o.l.createElement(s.a,{"className":"nav-list-title left ","style":"width:35%"},"期望服务时间"),o.l.createElement(s.a,{"className":"nav-list-main right","style":"width:55%"},o.l.createElement(p.a,{"disabled":N,"className":"input-txt","onInput":function serviceTimeChange(e){P.service_time=e.detail.value,U(P)}.bind(this),"name":"service_time","value":P.service_time?P.service_time:"","placeholder":"期望服务时间"})))),!te&&o.l.createElement(o.l.Fragment,null,o.l.createElement(s.a,{"className":"nav-list-box"},o.l.createElement(s.a,{"className":"nav-list-input clear"},o.l.createElement(s.a,{"className":"nav-list-title left "+w.company_org,"style":"width:35%"},"登记/备案机构"),o.l.createElement(s.a,{"className":"nav-list-main right","style":"width:55%"},o.l.createElement(p.a,{"disabled":N,"className":"input-txt","onInput":function orgChange(e){w.company_org=e.detail.value?"":z,P.company_org=e.detail.value,U(P),x(w)}.bind(this),"name":"company_org","value":P.company_org?P.company_org:"","placeholder":"登记/备案机构"})))),o.l.createElement(s.a,{"className":"nav-list-box"},o.l.createElement(s.a,{"className":"nav-list-input clear"},o.l.createElement(s.a,{"className":"nav-list-title left "+w.company_unisc,"style":"width:35%"},"统一社会信用代码"),o.l.createElement(s.a,{"className":"nav-list-main right","style":"width:55%"},o.l.createElement(p.a,{"disabled":N,"className":"input-txt","onInput":function uniscChange(e){w.company_unisc=e.detail.value?"":z,P.company_unisc=e.detail.value,U(P),x(w)}.bind(this),"name":"company_unisc","value":P.company_unisc?P.company_unisc:"","placeholder":"统一社会信用代码"}))))),o.l.createElement(s.a,{"className":"nav-list-box"},o.l.createElement(s.a,{"className":"nav-list-input clear"},o.l.createElement(s.a,{"className":"nav-list-title left "+w.company_pic},te?"证明资料":"登记/备案证书")),o.l.createElement(s.a,{"className":"nav-list-upload"},o.l.createElement(s.a,{"className":"upload-box clear"},H.length<9&&o.l.createElement(s.a,{"className":"upload-btn left","onClick":function onClick(){return oe()}},o.l.createElement(m.a,{"src":n(314),"style":"width:82px;height:82px;","className":"image"})),H.length>0&&H.map(function(e,t){return N?o.l.createElement(s.a,{"className":"upload-pic left"},o.l.createElement(m.a,{"className":"image","style":"width:86px;height:86px;","src":e,"key":e,"onClick":function onClick(){return ce(e)}})):o.l.createElement(s.a,{"className":"upload-pic left"},o.l.createElement(m.a,{"className":"image","style":"width:86px;height:86px;","src":e,"key":e,"onClick":function onClick(){return ce(e)}}),o.l.createElement(s.a,{"className":"close-btn","onClick":function onClick(){return ie(t)}}))})))))),o.l.createElement(s.a,{"className":"box"},N?o.l.createElement(f.a,{"className":"submit-btn","style":"background-color:#c2c2c2;-webkit-appearance: none;border-radius: 0;border:none;"},"确认"):o.l.createElement(f.a,{"className":"submit-btn","style":"-webkit-appearance: none;border-radius: 0;border:none;","onClick":function onClick(){return ue()}},"确认")),o.l.createElement(h.a,null))}},{"key":"componentDidMount","value":function componentDidMount(){E(FilingInfo.prototype.__proto__||Object.getPrototypeOf(FilingInfo.prototype),"componentDidMount",this)&&E(FilingInfo.prototype.__proto__||Object.getPrototypeOf(FilingInfo.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){E(FilingInfo.prototype.__proto__||Object.getPrototypeOf(FilingInfo.prototype),"componentDidShow",this)&&E(FilingInfo.prototype.__proto__||Object.getPrototypeOf(FilingInfo.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){E(FilingInfo.prototype.__proto__||Object.getPrototypeOf(FilingInfo.prototype),"componentDidHide",this)&&E(FilingInfo.prototype.__proto__||Object.getPrototypeOf(FilingInfo.prototype),"componentDidHide",this).call(this)}}]),FilingInfo}();C.config={}}}]);