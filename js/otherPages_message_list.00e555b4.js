(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{"264":function(e,t,a){"use strict";a.d(t,"a",function(){return o});var n=a(2),r=a(274),i=a(6),s=a(598),c=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}();var o=function(e){function BackTop(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,BackTop),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(BackTop.__proto__||Object.getPrototypeOf(BackTop)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(BackTop,i["a"].Component),c(BackTop,[{"key":"render","value":function render(){return n.l.createElement(s.a,null,n.l.createElement(s.a,{"style":"bottom:15%;","onClick":function onClick(){return function toTop(){Object(r.a)({"scrollTop":0,"duration":500})}()},"className":"back-top"}))}}]),BackTop}();o.options={"addGlobalClass":!0}},"274":function(e,t,a){"use strict";a.d(t,"a",function(){return s});var n=a(0),r=void 0,i=void 0,s=function pageScrollTo(e){var t=e.scrollTop,a=e.duration,s=void 0===a?300:a,c=e.success,o=e.fail,u=e.complete;return new Promise(function(e,a){try{if(void 0===t)throw Error('"scrollTop" is required');var l=document.querySelector(".taro-tabbar__panel")||window;r||(r=l===window?function scrollFunc(e){if(void 0===e)return window.pageYOffset;window.scrollTo(0,e)}:function scrollFunc(e){if(void 0===e)return l.scrollTop;l.scrollTop=e});var p=r(),m=t-p,f=s/17,d=Object(n.g)(n.c,f);!function scroll(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=p+m*d(t);if(r(a),t<f)i&&clearTimeout(i),i=setTimeout(function(){scroll(t+1)},17);else{var n={"errMsg":"pageScrollTo:ok"};c&&c(n),u&&u(),e(n)}}()}catch(e){var y={"errMsg":"pageScrollTo:fail "+e.message};o&&o(y),u&&u(),a(y)}})}},"317":function(e,t,a){"use strict";a.d(t,"a",function(){return i}),a.d(t,"k",function(){return s}),a.d(t,"d",function(){return c}),a.d(t,"e",function(){return o}),a.d(t,"o",function(){return u}),a.d(t,"m",function(){return l}),a.d(t,"l",function(){return p}),a.d(t,"i",function(){return m}),a.d(t,"j",function(){return f}),a.d(t,"h",function(){return d}),a.d(t,"g",function(){return y}),a.d(t,"f",function(){return b}),a.d(t,"c",function(){return g}),a.d(t,"n",function(){return _}),a.d(t,"b",function(){return v});var n=a(3),r=a(5),i=function addFamilyUser(e){return n.a.post("family_user/scan",e)},s=function loadUserCon(e){return n.a.httpGql(r.fc,e)},c=function createFamilyUser(e){return n.a.post("family_user",e)},o=function disbindFamily(e){return n.a.delete("family/"+e)},u=function updateFamilyDetail(e){return n.a.put("family/"+e.id,e)},l=function setRoleForFamilyUser(e){return n.a.post("family_role",e)},p=function quitFamily(e){return n.a.delete("family_user/"+e)},m=function loadFamilyUser(e){return n.a.httpGql(r.Z,e)},f=function loadFamilyUsers(e){return n.a.httpGql(r.ab,e)},d=function loadFamilyRoles(e){return n.a.httpGql(r.Y,e)},y=function loadFamilyConnections(e){return n.a.httpGql(r.X,e)},b=function handelFamilyConnections(e,t){return n.a.put(e,t)},g=function changeFamilyRole(e,t){return n.a.put("family/"+e+"/changeRole",t)},_=function transferFamilyPoint(e){return n.a.post("family_user/transferPoint",e)},v=function buildFamily(e){return n.a.post("family",e)}},"583":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAK6wAACusBgosNWgAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAANOSURBVFiFxddbiFVlGAbgZzszmCSFB7yKriTICyvmg1LSQCuhA0HQhWSRMFkRQZlaXQRJBFJaQUSMpQQRXURgYERYVNZU0BcUHaguuipKKckOCqUzXax/jds9e68Zx0MvbP71f//63vfd/3m1xsbG/J/o7xaMiDXYiLNx9BRo/I4tmflqZ2OrswciYgnewJyTFO7Er7gqMz/vdNeJa4v4j3gF/2JgmqJ17mqchxswqYEjpfw6MzdNU/g4RMTiYmBGZ1s3A/WYz2wjmIML0DRjWziMbzLzSEdbzTVhPnUz0CrljIjoy8yjeBOXNoi34xFsrisR0afLP28y0A3fqnqgaUX04S/8NEXOngYOd4kN4UKMTsJ1ODO/b3hnAvdxBiJiHpaV6vh4lzH9soF4MtRcyyJiZ2b+NsFARCzHc1jUmR0Rq3GdYyukHX34BY9n5v5JDFyPvRFxV2buhf6ImIW78SjO6pIEW3B+z/9X4T3s7tHWantehLci4mE82493sKQ07lJtm7d1JA3hGt3nQJ9q4n3YYK7megHn4iY8gRv728R3ZOZQRAx1GsjMPdjTIDBVfJKZOyJiO27Hkvb1GRGxFPNOgVAvzI+Iy3BJHWg3cBFGsL7UD5VN6KRQOA6V6np8jOg0cAhvl3JBiS2MiHGn00XhWFiqC1R7wful1BocHBzDH6qT6k88ieUl4QCG8XTDEuslPA/34w7MLeEPVL1wDl7H7LoHZmJWZn6GlViH70riQxiJiLURMXsKwrMjYi0+KrlzC9edWJGZWfQGODYErTqQmUcy83ksxTb8rOrCndgVEasaxFeplvJO1dmxH1uxNDOH207JgaLZ+zDKzAPYEBEvYhNuKb2zMiJextb6dhMRF2MDbm6jeAnbMvOLhg6b/DTMzK9wa0QM4zFcUYRWRcQz5bV7ML88j+CBzByZjJuGc7qLkRFcrdoVfyiCm8tvfomtw8qpijP1+0Bt4h/siIjduK8IwnY8lZn7ToTvhA20GdmHByPitVL/dDo80zbQZmTawjXqOTCm+bZzqjFaNMcNjOLgGTRwsGiOD8EA7o2IFarPsdOJv7G4aGoNDg7uwZWnWbQX3u3HGtXt5HLVp9SZwIDqBrVxwsfpmcZ/vtMKcXrlvLYAAAAASUVORK5CYII="},"584":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAK6wAACusBgosNWgAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAANWSURBVFiFxdddiFVVGAbg5zgzmCSFjngVXYQEeWEFQjl8Gmg10A+B0IVkkTD9EUGZ2g8ERQRSWkFEaM0QRXQRgYERYVE531RQQtEP1UVXRSkl2Y9SmdPFXmc8c+bMnnG06YXDOmvt/b3vu7+11v7WboyOjvo/0d1pMDPXYzNOxz+nQOMXbI2IV9ovNtozkJkr8DoWnKRwO37CZRHxSbu7dlxZxL/Dy/gbPTMUbcauw1m4BlMaOFraLyJiywyFxyEzlxUDc9qvdTLQnPO5mSkiZOYCnIu6FdvAEXwZEc2HkJkwt4271kCjtHPQVYLewEU14q14EA+19Lt0ePI6A53wlSoDdTuiC7/j+2lyTmrgSIexAZyHY1NwHYmIb2rumcA9zkBm9mJl6Y7Nd5nTz2qIp0KTa2VmDkXEzxMMZOYqPIOl7dGZuQ5XOb5DWtGFH/FoRByYwsDV2JuZt0XEXujOzHm4HQ/jtA5BsBVnT/p8Fd7F7kmuNVr+L8WbmfkAnu7G21hRLu5SvTZvbAsawBU6r4Eu1cLLGnNNrudwJq7FY1jb3SI+GBEDmTnQbiAi9mBPjcB08WFEDGbmTtyEFa37c3lm9qH3FAhNhkWZeTEubA60GjgfI9hY+ocj4mQrocJxuHQ34gMsbzdwGG+VdnEZW5KZY05nisKxpHQXq94F75VWY3h4eBS/qirVb3gcq0rAQezAkzVbbDLhXtyNW7CwDA+rsnAGXsP8ZgbmYl5E7MMa3IyvS+B9GMnMDZk5fxrC8zNzA94vsQsL161YHREfF70ejk9BozkQEUcj4ln0YTt+UKVwCLsys79GvF+1lYdUteMAtqEvIna0VMmeojl5MYqIg9iUmc9jC64v2VmTmS9hW/N0k5kXYBOua6F4Edsj4tOahE1dDSPi88y8QbUWHsElRag/M58qt92BReX/CO7BSERMRT+9clyIRjLzclUm7sc5xtf9b1Wv7Bci4s/p8E7bQIuRvzCYmbtxl2qxwk48ERH7T4TvhA20GNmPezPz1dL/aCY8MzbQYmTGwk00t+Go+tPOqcaxojlm4BgOzaKBQ0VzbAp6cGdmrlZ9jv2X+APLiqZuVRG6FGvLbzbxTjfWq04nofqUmg30qE5Qmyd8nM42/gXIMA5BGIdHFgAAAABJRU5ErkJggg=="},"709":function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return A});var n=a(4),r=a.n(n),i=a(2),s=a(6),c=a(25),o=a(255),u=a(274),l=a(598),p=a(599),m=a(14),f=a(8),d=a(29),y=a(30),b=a(264),g=a(317),_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},v=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var a=[],n=!0,r=!1,i=void 0;try{for(var s,c=e[Symbol.iterator]();!(n=(s=c.next()).done)&&(a.push(s.value),!t||a.length!==t);n=!0);}catch(e){r=!0,i=e}finally{try{!n&&c.return&&c.return()}finally{if(r)throw i}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),h=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),j=function get(e,t,a){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,t);if(void 0===n){var r=Object.getPrototypeOf(e);return null===r?void 0:get(r,t,a)}if("value"in n)return n.value;var i=n.get;return void 0!==i?i.call(a):void 0};function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,a){return function step(n,r){try{var i=t[n](r),s=i.value}catch(e){return void a(e)}if(!i.done)return Promise.resolve(s).then(function(e){step("next",e)},function(e){step("throw",e)});e(s)}("next")})}}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var A=function(e){function MessageList(){var e,t,a;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,MessageList);for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return t=a=_possibleConstructorReturn(this,(e=MessageList.__proto__||Object.getPrototypeOf(MessageList)).call.apply(e,[this].concat(r))),a.config={},_possibleConstructorReturn(a,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(MessageList,s["a"].Component),h(MessageList,[{"key":"render","value":function render(){var e=this,t=s.a.useState(!1),n=v(t,2),h=n[0],j=n[1],A=s.a.useState([]),k=v(A,2),w=k[0],O=k[1],x=s.a.useState({"page":1,"rows":50,"uid":"","type":""}),E=v(x,2),T=E[0],P=E[1],R=s.a.useState(!0),C=v(R,2),M=C[0],F=C[1],L=s.a.useState([]),B=v(L,2),G=B[0],z=B[1],N=s.a.useRef(1),Y=Object(m.u)(),S=0;Object(m.z)(0).then(function(e){S=e});var D,U,H,Q,V,q,I=s.a.useRouter(),Z=function handleNode(e){switch(e.type){case"activity":var t="";switch(e.activity&&(t=e.activity.activity_type||""),e.business_type){case"activity_update":e.jump=!0,e.jump_url="CYCLE"!==t?"/activityPages/pages/activity_detail?id="+e.business_id:"/activityPages/pages/regular_activity_detail?id="+e.business_id;break;case"activity_report":e.jump=!0,e.jump_url="/activityPages/pages/report-detail?id="+e.business_id;break;case"activity_audited":e.jump=!0,e.jump_url="/userPages/pages/user-activity";break;case"activity_cancled":e.jump=!0,e.jump_url="CYCLE"!==t?"/activityPages/pages/activity_detail?id="+e.business_id:"/activityPages/pages/regular_activity_detail?id="+e.business_id;break;case"activity_eval":e.jump=!0,e.jump_url="/activityPages/pages/evaluate_reply?id="+e.business_id;break;case"activityJoin":e.jump=!0,e.jump_url="/activityPages/pages/activity_detail?id="+e.business_id;break;case"activity_public":e.jump=!0,e.jump_url="CYCLE"!==t?"/activityPages/pages/activity_detail?id="+e.business_id:"/activityPages/pages/regular_activity_detail?id="+e.business_id}if(e.activity&&e.pic&&0===e.pic.length){var a={"url":""+Object(f.a)("defaultPic").ALL};e.pic.push(a)}break;case"team":if(e.business_type)switch(e.business_type){case"team_writeoff":e.jump=!1,e.jump_url="";break;case"team_frozen":case"team_unfrozen":case"team_change":case"team_audited":e.jump=!0,e.jump_url="/userPages/pages/my_team";break;case"team_join":case"team_out":e.jump=!1,e.jump_url="";break;case"team_toAudit":e.jump=!0,e.jump_url="/teamPages/pages/team_joined_audit?id="+e.business_id;break;case"team_join_pass":e.jump=!0,e.jump_url="/teamPages/pages/team_index?id="+e.business_id}if(e.pic&&0===e.pic.length){var n={"url":""+Object(f.a)("defaultTeamLogo")};e.pic.push(n)}break;case"real_name":e.jump=!0,e.real_name&&("1"===e.real_name.result?e.jump_url="/pages/result?type=realedSuccess":"2"===e.real_name.result&&(e.jump_url="/pages/result?type=realedFaild"));break;case"report":case"option":e.jump=!1,e.jump_url="";break;case"seek_help":if(e.business_type)switch(e.business_type){case"seek_eval":e.jump=!0,e.jump_url="/userPages/pages/seek-help-detail?id="+e.business_id;break;case"seek_help_eval":e.jump=!0,e.jump_url="/activityPages/pages/evaluate_reply?id="+e.business_id+"&type=help";break;case"seek_helpAudit":case"seek_help_team":e.jump=!0,e.jump_url="/userPages/pages/seek-help-detail?id="+e.business_id}break;case"redeem":if(e.business_type)switch(e.business_type){case"redeem_mature":e.jump=!0,e.jump_url="/userPages/pages/user-exchange";break;case"redeem_audited":e.jump=!1,e.jump_url=""}break;case"audit":if(e.business_type)switch(e.business_type){case"audit_notpass":e.jump=!1,e.jump_url=""}break;case"org_option":var r="";e.org_option&&e.org_option.activity&&(r=e.org_option.activity.activity_type||""),e.jump=!0,e.jump_url="CYCLE"!==r?"/activityPages/pages/activity_detail?id="+e.org_option.activity_id:"/activityPages/pages/regular_activity_detail?id="+e.org_option.activity_id;break;case"authen_identity":e.jump=!0,e.jump_url="/userPages/pages/expert_info";break;case"authen_company":e.jump=!0,e.jump_url="/userPages/pages/company_list"}return e},J=(D=_asyncToGenerator(r.a.mark(function _callee(){var t,a,n,i,s,c=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return r.a.wrap(function _callee$(e){for(;;)switch(e.prev=e.next){case 0:return c&&(T.page=1,P(T),O([])),e.next=3,Object(y.s)(T);case 3:t=e.sent,a=t.wechat_msg.edges||[],n=parseInt(t.wechat_msg.totalCount)||0,T.page*T.rows>=n?F(!1):F(!0),i=[],a&&a.length>0&&(s=[],a.forEach(function(e){var t=e.node;0===t.state&&s.push(t.id),t.pic&&t.pic.length>0&&(t.pic[0].url=Object(m.w)(t.pic[0].url)),t.type&&(t=Z(t)),i.push(t)}),z(s)),O(c?i:[].concat(_toConsumableArray(w),i));case 10:case"end":return e.stop()}},_callee,e)})),function loadData(){return D.apply(this,arguments)}),X=(U=_asyncToGenerator(r.a.mark(function _callee2(t){var a,n,i,s,c,o;return r.a.wrap(function _callee2$(e){for(;;)switch(e.prev=e.next){case 0:if(1!==t.length){e.next=8;break}return a=t[0],e.next=4,Object(y.z)(a,"single");case 4:0===(n=e.sent).code?(i=(i=[].concat(_toConsumableArray(w))).map(function(e){return e.id===a&&(e.state=1),e}),O([].concat(_toConsumableArray(i)))):Object(d.c)(n.data),e.next=13;break;case 8:return s={"ids":t},e.next=11,Object(y.z)(s,"many");case 11:0===(c=e.sent).code?(o=(o=[].concat(_toConsumableArray(w))).map(function(e){return t.indexOf(e.id)>-1&&(e.state=1),e}),O([].concat(_toConsumableArray(o))),z([])):Object(d.c)(c.data);case 13:case"end":return e.stop()}},_callee2,e)})),function turnToReaded(e){return U.apply(this,arguments)}),W=(H=_asyncToGenerator(r.a.mark(function _callee3(t){var a;return r.a.wrap(function _callee3$(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.y)(t);case 2:if(0!==(a=e.sent).code){e.next=8;break}return e.next=6,J(!0);case 6:e.next=9;break;case 8:Object(d.c)(a.msg);case 9:case"end":return e.stop()}},_callee3,e)})),function deleteMsg(e){return H.apply(this,arguments)}),K=(Q=_asyncToGenerator(r.a.mark(function _callee4(t){var a,n,i,s,c;return r.a.wrap(function _callee4$(e){for(;;)switch(e.prev=e.next){case 0:if("familyUser_toAudit"!==t.business_type||0!==t.state){e.next=28;break}if(1===N.current){e.next=21;break}return e.next=4,Object(d.b)({"title":"优佳家庭邀请","content":"是否同意加入此家庭？","confirmText":"同意","cancelText":"拒绝"});case 4:if(!e.sent.confirm){e.next=19;break}return Object(d.a)(!0,"加入中..."),a={"uid":Y.uid,"family_id":t.business_id},e.next=10,Object(g.a)(a);case 10:if(0!==e.sent.code){e.next=17;break}return e.next=14,Object(d.c)("加入成功","success");case 14:N.current=1,e.next=19;break;case 17:return e.next=19,Object(d.c)("加入失败");case 19:e.next=23;break;case 21:return e.next=23,Object(d.c)("您已加入了家庭！");case 23:return n=[t.id],e.next=26,X(n);case 26:e.next=43;break;case 28:if(i="",!t){e.next=43;break}if(!t.jump){e.next=39;break}if(i=t.jump_url,0!==t.state){e.next=36;break}return s=[t.id],e.next=36,X(s);case 36:Object(m.B)(i),e.next=43;break;case 39:if(0!==t.state){e.next=43;break}return c=[t.id],e.next=43,X(c);case 43:case"end":return e.stop()}},_callee4,e)})),function toDetail(e){return Q.apply(this,arguments)}),$=(V=_asyncToGenerator(r.a.mark(function _callee5(t){var a,n;return r.a.wrap(function _callee5$(e){for(;;)switch(e.prev=e.next){case 0:return a=["删除"],e.next=3,Object(c.c)({"itemList":a});case 3:"showActionSheet:ok"===(n=e.sent).errMsg&&0===n.tapIndex&&W(t);case 5:case"end":return e.stop()}},_callee5,e)})),function showAction(e){return V.apply(this,arguments)}),ee=(q=_asyncToGenerator(r.a.mark(function _callee6(){return r.a.wrap(function _callee6$(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X(G);case 2:case"end":return e.stop()}},_callee6,e)})),function allToRead(){return q.apply(this,arguments)}),te=s.a.useRef(0);s.a.usePageScroll(function(e){te.current=e.scrollTop;var t=e.scrollTop;j(t>500)});var ae,ne=(ae=_asyncToGenerator(r.a.mark(function _callee7(){var t;return r.a.wrap(function _callee7$(e){for(;;)switch(e.prev=e.next){case 0:if(0===S){e.next=3;break}return Object(m.v)(S,{"nextUrl":"/pages/index/index"}),e.abrupt("return");case 3:return Object(d.a)(!0),T.uid=Y.uid,T.type=I.params.type,e.next=8,Object(y.g)({"uid":Y.uid});case 8:t=(t=e.sent).wechat_user||{},N.current=t.has_family,"family"===T.type&&Object(o.a)({"title":"家庭邀请"}),P(T),J(!0),Object(d.a)(!1);case 15:case"end":return e.stop()}},_callee7,e)})),function onload(){return ae.apply(this,arguments)}),re=s.a.useRef(function(){}),ie=s.a.useRef(0);s.a.useReachBottom(_asyncToGenerator(r.a.mark(function _callee8(){var t;return r.a.wrap(function _callee8$(a){for(;;)switch(a.prev=a.next){case 0:if(!e.pageHide){a.next=2;break}return a.abrupt("return");case 2:if(!((t=document.documentElement.scrollTop||document.body.scrollTop)<ie.current)){a.next=8;break}return ie.current=t,a.abrupt("return");case 8:ie.current=t;case 9:re.current()&&ce();case 11:case"end":return a.stop()}},_callee8,e)})));var se,ce=(se=_asyncToGenerator(r.a.mark(function _callee9(){return r.a.wrap(function _callee9$(e){for(;;)switch(e.prev=e.next){case 0:if(!M){e.next=5;break}return T.page+=1,P(function(e){return _({},e,T)}),e.next=5,J();case 5:case"end":return e.stop()}},_callee9,e)})),function reachBottom(){return se.apply(this,arguments)});s.a.useDidShow(function(){Object(u.a)({"scrollTop":oe.current,"duration":100}),Object(m.L)("消息列表"),Object(d.a)(!0),w.length>0&&(z([]),J(!0)),Object(d.a)(!1),e.pageHide=!1,re.current=Object(m.Q)()});var oe=s.a.useRef(0);return s.a.useDidHide(function(){oe.current=te.current,e.pageHide=!0}),s.a.useEffect(function(){ne()},[]),i.l.createElement(l.a,null,!!w&&w.length>0&&i.l.createElement(i.l.Fragment,null,i.l.createElement(l.a,{"className":"content"},i.l.createElement(l.a,{"className":"message"},w.map(function(e){return i.l.createElement(i.l.Fragment,{"key":e.id},i.l.createElement(l.a,{"className":"box"},i.l.createElement(l.a,{"className":"message-date"},e.created_at),i.l.createElement(l.a,{"className":"message-box","onClick":function onClick(){return K(e)},"onLongClick":function onLongClick(){return $(e.id)}},0===e.state&&i.l.createElement(l.a,{"className":"unread"}),i.l.createElement(l.a,{"className":"message-title"},e.title),e.pic&&e.pic.length>0?i.l.createElement(l.a,{"className":"message-content clear"},i.l.createElement(l.a,{"className":"message-pic left","style":"background-image:url("+e.pic[0].url+");"}),i.l.createElement(l.a,{"className":"message-txt right"},e.content)):i.l.createElement(l.a,{"className":"message-content"},e.content))))}))),i.l.createElement(l.a,{"className":"foot-nav"},i.l.createElement(l.a,{"className":"message-bottom-btn clear"},G.length>0?i.l.createElement(l.a,{"className":"read-btn","style":"line-height: 40px;","onClick":function onClick(){return ee()}},i.l.createElement(p.a,{"src":a(583),"style":"width:18.75px;height:18.75px;","className":"img"}),i.l.createElement(l.a,{"className":"read-btn-txt"},"全部已读")):i.l.createElement(l.a,{"className":"read-btn","style":"line-height: 40px;"},i.l.createElement(p.a,{"src":a(584),"style":"width:18.75px;height:18.75px;","className":"img"}),i.l.createElement(l.a,{"className":"read-btn-txt read-btn-txt-1"},"全部已读"))))),h&&i.l.createElement(b.a,null))}},{"key":"componentDidMount","value":function componentDidMount(){j(MessageList.prototype.__proto__||Object.getPrototypeOf(MessageList.prototype),"componentDidMount",this)&&j(MessageList.prototype.__proto__||Object.getPrototypeOf(MessageList.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){j(MessageList.prototype.__proto__||Object.getPrototypeOf(MessageList.prototype),"componentDidShow",this)&&j(MessageList.prototype.__proto__||Object.getPrototypeOf(MessageList.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){j(MessageList.prototype.__proto__||Object.getPrototypeOf(MessageList.prototype),"componentDidHide",this)&&j(MessageList.prototype.__proto__||Object.getPrototypeOf(MessageList.prototype),"componentDidHide",this).call(this)}}]),MessageList}();A.config={}}}]);