(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"263":function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n(2),o=n(273),a=n(6),i=n(596),l=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var c=function(e){function BackTop(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,BackTop),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(BackTop.__proto__||Object.getPrototypeOf(BackTop)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(BackTop,a["a"].Component),l(BackTop,[{"key":"render","value":function render(){return r.l.createElement(i.a,null,r.l.createElement(i.a,{"style":"bottom:15%;","onClick":function onClick(){return function toTop(){Object(o.a)({"scrollTop":0,"duration":500})}()},"className":"back-top"}))}}]),BackTop}();c.options={"addGlobalClass":!0}},"273":function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n(0),o=void 0,a=void 0,i=function pageScrollTo(e){var t=e.scrollTop,n=e.duration,i=void 0===n?300:n,l=e.success,c=e.fail,u=e.complete;return new Promise(function(e,n){try{if(void 0===t)throw Error('"scrollTop" is required');var s=document.querySelector(".taro-tabbar__panel")||window;o||(o=s===window?function scrollFunc(e){if(void 0===e)return window.pageYOffset;window.scrollTo(0,e)}:function scrollFunc(e){if(void 0===e)return s.scrollTop;s.scrollTop=e});var p=o(),f=t-p,m=i/17,d=Object(r.g)(r.c,m);!function scroll(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=p+f*d(t);if(o(n),t<m)a&&clearTimeout(a),a=setTimeout(function(){scroll(t+1)},17);else{var r={"errMsg":"pageScrollTo:ok"};l&&l(r),u&&u(),e(r)}}()}catch(e){var y={"errMsg":"pageScrollTo:fail "+e.message};c&&c(y),u&&u(),n(y)}})}},"286":function(e,t,n){"use strict";n.d(t,"e",function(){return a}),n.d(t,"h",function(){return i}),n.d(t,"i",function(){return l}),n.d(t,"j",function(){return c}),n.d(t,"a",function(){return u}),n.d(t,"k",function(){return s}),n.d(t,"d",function(){return p}),n.d(t,"c",function(){return f}),n.d(t,"l",function(){return m}),n.d(t,"g",function(){return d}),n.d(t,"f",function(){return y}),n.d(t,"m",function(){return h}),n.d(t,"b",function(){return v});var r=n(3),o=n(5),a=function loadBullentins(e){return r.a.httpGql(o.x,e,!0)},i=function loadContributions(e){return r.a.httpGql(o.E,e,!0)},l=function loadDonations(e){return r.a.httpGql(o.Q,e,!0)},c=function loadDonayionsForCity(e){return r.a.httpGql(o.R,e)},u=function getGroupExceptService(){return r.a.get("wechat_method/group/no_service")},s=function loadSiteApplys(e){return r.a.httpGql(o.Ib,e)},p=function loadBullentinDetail(e){return r.a.httpGql(o.w,e,!0)},f=function loadBullentinActivitys(e){return r.a.httpGql(o.y,e,!0)},m=function loadSiteDetail(e){return r.a.httpGql(o.Jb,e,!0)},d=function loadCommunityStyle(e){return r.a.httpGql(o.D,e,!0)},y=function loadCommunitySites(e){return r.a.httpGql(o.C,e,!0)},h=function postMyReservation(e){return r.a.post("site_apply",e)},v=function getMyResidents(e){return r.a.httpGql(o.kb,e)}},"337":function(e,t,n){"use strict";n(257);var r=n(2),o=n(258),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var l=function(e){function RichText(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,RichText),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(RichText.__proto__||Object.getPrototypeOf(RichText)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(RichText,r["l"].Component),i(RichText,[{"key":"renderNodes","value":function renderNodes(e){if("text"===e.type)return r.l.createElement("span",{},e.text);var t=this.renderChildrens(e.children),n={"className":"","style":""};if(e.hasOwnProperty("attrs"))for(var o in e.attrs)"class"===o?n.className=e.attrs[o]||"":n[o]=e.attrs[o]||"";return r.l.createElement(e.name,n,t)}},{"key":"renderChildrens","value":function renderChildrens(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(0!==t.length)return t.map(function(t,n){return"text"===t.type?t.text:e.renderNodes(t)})}},{"key":"render","value":function render(){var e=this,t=this.props,n=t.nodes,i=t.className,l=function _objectWithoutProperties(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["nodes","className"]);return Array.isArray(n)?r.l.createElement("div",a({"className":i},Object(o.a)(this.props,["nodes","className"]),l),n.map(function(t,n){return e.renderNodes(t)})):r.l.createElement("div",a({"className":i},Object(o.a)(this.props,["className"]),l,{"dangerouslySetInnerHTML":{"__html":n}}))}}]),RichText}();t.a=l},"532":function(e,t,n){e.exports=n.p+"static/images/bulliten-pic.jpg"},"645":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return E});var r=n(4),o=n.n(r),a=n(2),i=n(6),l=n(273),c=n(596),u=n(597),s=n(337),p=n(10),f=n(29),m=n(8),d=n(263),y=n(286),h=n(532),v=n.n(h),b=n(14),g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{!r&&l.return&&l.return()}finally{if(o)throw a}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),w=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),O=function get(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:get(o,t,n)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(n):void 0};function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var E=function(e){function CommunityBullentinDetail(){var e,t,n;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,CommunityBullentinDetail);for(var r=arguments.length,o=Array(r),a=0;a<r;a++)o[a]=arguments[a];return t=n=_possibleConstructorReturn(this,(e=CommunityBullentinDetail.__proto__||Object.getPrototypeOf(CommunityBullentinDetail)).call.apply(e,[this].concat(o))),n.config={},_possibleConstructorReturn(n,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(CommunityBullentinDetail,i["a"].Component),w(CommunityBullentinDetail,[{"key":"render","value":function render(){var e=this,t=i.a.useState(!1),n=_(t,2),r=n[0],h=n[1],w=i.a.useState([]),O=_(w,2),E=O[0],C=O[1],N=i.a.useState({}),j=_(N,2),D=(j[0],j[1],i.a.useState({})),P=_(D,2),T=P[0],k=P[1],x=i.a.useState([]),B=_(x,2),S=B[0],R=B[1],A=i.a.useState(!0),G=_(A,2),q=(G[0],G[1],i.a.useRouter().params),I=i.a.useRef(0);i.a.usePageScroll(function(e){I.current=e.scrollTop;var t=e.scrollTop;h(t>500)});var L,M=function getDate(e){var t=e.indexOf("T");return-1!==t&&(e=e.substr(0,t)),e},F=(L=function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function step(r,o){try{var a=t[r](o),i=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(i).then(function(e){step("next",e)},function(e){step("throw",e)});e(i)}("next")})}}(o.a.mark(function _callee(){var t,n,r,a,i,l,c,u,s,d,h,_,w,O,E;return o.a.wrap(function _callee$(o){for(;;)switch(o.prev=o.next){case 0:return Object(f.a)(!0),t=q.id,e.defaultAcitivyPic=Object(m.a)("defaultAcitivyPic"),n=Object(m.a)("defaultTeamLogo"),o.next=6,Object(y.d)({"id":t});case 6:return r=o.sent,a=r.bullentin,i=a.tags?a.tags:[],l=a.content,c=a.file,u=q.title||a.title,l=(l=l.replace(new RegExp("/ueditor/ue","g"),p.c+"/ueditor/ue")).replace(new RegExp("<img ","g"),"<img class='img-width' "),s="",a.pulished_time&&(s=M(a.pulished_time)),d=q.orgName||a.org.name,h={"name":u,"id":t,"orgName":d,"pulishedTime":s,"picture":v.a,"introduction":l,"tags":i},k(h),R(c),o.next=22,Object(y.c)({"bulletin_id":t,"page":1,"rows":65532,"org_id":q.orgId});case 22:_=o.sent,w={"CANCLED":"已取消","FINISHED":"结算中","FILED":"已结束","PUBLIC":"公示中"},O=_.bulletin_activitys.edges,E=O.map(function(t){var r=g({},t.node.activity);r.name=r.name||"",r.statusName=w[r.status],r.simple_name=r.group?r.group.simple_name||r.group.name:"",r.team_name=r.team?r.team.team_name:"";var o=r.start_time||"";o.length>9&&(o=o.substring(0,10),r.start_time=o);var a=r.team.logos||[];if(a.length>0){var i=a[0].url;r.team_logo=Object(b.w)(i)}else r.team_logo=""+n;if(r.file_uploads.length>0){var l=r.file_uploads[0].url;r.picture=Object(b.w)(l)}else{r.picture=""+e.defaultAcitivyPic.ALL}return r}),C([].concat(_toConsumableArray(E))),Object(f.a)(!1);case 28:case"end":return o.stop()}},_callee,e)})),function onload(){return L.apply(this,arguments)});i.a.useEffect(function(){F()},[]);i.a.useDidShow(function(){Object(l.a)({"scrollTop":H.current,"duration":100}),Object(b.L)("公告资讯")});var H=i.a.useRef(0);return i.a.useDidHide(function(){H.current=I.current,e.pageHide=!0}),a.l.createElement(c.a,null,a.l.createElement(c.a,{"className":"body"},a.l.createElement(c.a,{"className":"content content-nav"},a.l.createElement(c.a,{"className":"notice-view"},a.l.createElement(c.a,{"className":"notice-view-banner"},a.l.createElement(u.a,{"src":T.picture,"style":"width:100%","mode":"widthFix","className":"image"})),a.l.createElement(c.a,{"className":"notice-view-content"},a.l.createElement(c.a,{"className":"clear"},a.l.createElement(c.a,{"className":"notice-view-title left","style":"width:100%"},T.name)),a.l.createElement(c.a,{"className":"notice-view-info clear"},a.l.createElement(c.a,{"className":"notice-view-info-left left","style":"width:75%"},a.l.createElement(c.a,{"className":"notice-view-info-txt"},T.orgName),a.l.createElement(c.a,{"className":"notice-view-info-txt"},T.pulishedTime||""))),a.l.createElement(c.a,{"className":"notice-view-box font14"},a.l.createElement(s.a,{"space":"nbsp","nodes":T.introduction}),S.length>0&&S.map(function(e,t){return a.l.createElement(c.a,{"key":e.id},a.l.createElement(c.a,{"className":"text-blue","onClick":function onClick(){return function openFile(e){e=p.c+e,window.open(e)}(e.url)}},"附件",t+1,"：",e.name))})),E.length>0&&a.l.createElement(c.a,{"className":"container-content"},a.l.createElement(c.a,{"className":"padding-top-down clear"},a.l.createElement(c.a,{"className":"bold left"},"相关活动")),E.map(function(e){return a.l.createElement(c.a,{"className":"main-con margin-b clear","key":e.id,"onClick":function onClick(){return function toDetail(e){var t="/activityPages/pages/activity_detail?id="+e.id;"CYCLE"===e.activity_type&&(t="/activityPages/pages/regular_activity_detail?id="+e.id),i.a.navigateTo({"url":t})}(e)}},a.l.createElement(c.a,{"className":"detail-tags"},a.l.createElement(c.a,{"className":"detail-tags-txt"},e.group?e.group.name:"")),a.l.createElement(c.a,{"className":"user-name-sym padding-t margin-t"},a.l.createElement(c.a,{"className":"head"},a.l.createElement(u.a,{"className":"img","src":e.team_logo})),a.l.createElement(c.a,{"className":"overflow"},e.organizer_name)),a.l.createElement(c.a,{"className":"activity-sym clear"},a.l.createElement(c.a,{"className":"cover"},a.l.createElement(c.a,{"className":"cover-tags"},a.l.createElement(c.a,{"className":"cover-tags-txt"},e.statusName)),a.l.createElement(u.a,{"className":"img","src":e.picture})),a.l.createElement(c.a,{"className":"detail "},a.l.createElement(c.a,{"className":"title control-2line clear","style":"-webkit-box-orient: vertical;"},e.name),a.l.createElement(c.a,{"className":"date secondry-text"},e.start_time))))})))))),r&&a.l.createElement(d.a,null))}},{"key":"componentDidMount","value":function componentDidMount(){O(CommunityBullentinDetail.prototype.__proto__||Object.getPrototypeOf(CommunityBullentinDetail.prototype),"componentDidMount",this)&&O(CommunityBullentinDetail.prototype.__proto__||Object.getPrototypeOf(CommunityBullentinDetail.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){O(CommunityBullentinDetail.prototype.__proto__||Object.getPrototypeOf(CommunityBullentinDetail.prototype),"componentDidShow",this)&&O(CommunityBullentinDetail.prototype.__proto__||Object.getPrototypeOf(CommunityBullentinDetail.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){O(CommunityBullentinDetail.prototype.__proto__||Object.getPrototypeOf(CommunityBullentinDetail.prototype),"componentDidHide",this)&&O(CommunityBullentinDetail.prototype.__proto__||Object.getPrototypeOf(CommunityBullentinDetail.prototype),"componentDidHide",this).call(this)}}]),CommunityBullentinDetail}();E.config={}}}]);