"use strict";(self.webpackChunkgod_ticket_land=self.webpackChunkgod_ticket_land||[]).push([[179],{225:(e,n,t)=>{var o=t(883),l=t.n(o);const i={finger:{hide:null,clickEvent:null},mantle:{clickEvent:null},cardZm:{clickEvent:null},radarBeginImgBtn:{completeEvent:null,hideBtn:null}};function a(){"function"==typeof i.finger.hide&&(i.finger.hide(),i.finger.hide=null),i.finger.clickEvent=null}function s(){"function"==typeof i.finger.clickEvent&&i.finger.clickEvent()}function c(){"function"==typeof i.mantle.clickEvent&&i.mantle.clickEvent()}function r(){"function"==typeof i.cardZm.clickEvent&&i.cardZm.clickEvent()}function d(e,n,t){let o=document.getElementById("finger");for(let n in e)o.style[n]=e[n];return o.style.display="inherit","function"==typeof n&&(i.finger.clickEvent=n),t&&(i.finger.hide=function(){o.style.display="none",o=null}),o}const u=document.body.offsetWidth,m=document.body.offsetHeight;let g=!1,f=!1,p=null,y=null,h=null,b=null,k=null,I={radarBegin:!1,radar:!1,posImg:!1,rollingOverBtnImg:!1,ruleImg:!1};const _=[{left:"0.46rem",top:"23%"},{left:"0.1rem",top:"46%"},{left:"0.68rem",top:"49%"},{left:"0.4rem",top:"65%"},{left:"0.60rem",top:"80%"}],v=[{back:"http://enbrands-2.oss-cn-shanghai.aliyuncs.com/user/2649906ba904d95695ec73b171636da2.png",frontage:"http://enbrands-2.oss-cn-shanghai.aliyuncs.com/user/fec457fda7f08adf44f4a5ebfb8dfebf.png"},{back:"http://enbrands-2.oss-cn-shanghai.aliyuncs.com/user/d569c5c85da9c7692dece1fcae8c71f6.png",frontage:"http://enbrands-2.oss-cn-shanghai.aliyuncs.com/user/403f23050ad9644b2b461f3761e09f19.png"},{back:"http://enbrands-2.oss-cn-shanghai.aliyuncs.com/user/cd5bb0d10698efabfde201c26c0a2c13.png",frontage:"http://enbrands-2.oss-cn-shanghai.aliyuncs.com/user/00c04271231a7b8edd12ca5e81aff335.png"},{back:"http://enbrands-2.oss-cn-shanghai.aliyuncs.com/user/9525d58e5557b381549e4e7666dbc381.png",frontage:"http://enbrands-2.oss-cn-shanghai.aliyuncs.com/user/173aba60dd7cec704efc3f688a50865f.png"},{back:"http://enbrands-2.oss-cn-shanghai.aliyuncs.com/user/e58a6ac11a8fa7fcc64cd99a2747ae56.png",frontage:"http://enbrands-2.oss-cn-shanghai.aliyuncs.com/user/b056e7e4edba10b693f1620d54ad77c9.png"}],E=[{back:null,frontage:null,backInDom:!1,frontageInDom:!1,url:"https://market.m.taobao.com/app/miniapp-biz/qrcode/index.html?_ariver_appid=3000000028379505&nbsv=0.1.2109231403.28&_mp_code=tb&query=clearStorage%3D1%26merchantNum%3D1900110%26platform%3D1%26type%3D0&nbsource=debug&nbsn=DEBUG&transition=present"},{back:null,frontage:null,backInDom:!1,frontageInDom:!1,url:"https://www.baidu.com"},{back:null,frontage:null,backInDom:!1,frontageInDom:!1,url:"https://www.bilibili.com/v/dance/?spm_id_from=666.4.b_7072696d6172794368616e6e656c4d656e75.17"},{back:null,frontage:null,backInDom:!1,frontageInDom:!1,url:"https://www.bilibili.com/anime/?spm_id_from=666.5.b_7072696d6172794368616e6e656c4d656e75.8"},{back:null,frontage:null,backInDom:!1,frontageInDom:!1,url:"https://www.bilibili.com/"}];let B={},w=[],D={};function L(){I.ruleImg?h.style.display="inherit":(I.ruleImg=!0,document.body.appendChild(h));let e=document.getElementById("mantle");e.style.display="inherit",i.mantle.clickEvent=function(){e.style.display="none",h.style.display="none",i.mantle.clickEvent=null,e=null},document.getElementById("finger").style.display="none"}function x(e){document.getElementById("anchor").style.display="inherit",i.cardZm.clickEvent=function(){T(e)}}function T(e){l().fed({event_name:"点击领券次数",event_code:"gain_ticket_member_click",event_label:"30",event_trigger_mode:"click",url:"./index"}),window.open(e)}function C(e,n,t){l().fed({event_name:"完成的卡牌次数",event_code:"gain_ticket_number_open",event_label:"30",event_trigger_mode:"open",url:"./index"}),x(n.url);const o=n.frontage,a=n.back;o.style.transform="rotateY(90deg)",a.style.transform="rotateY(90deg)",function(e){w.push({pos:B,urls:e,isReceive:!1}),localStorage.setItem("cardCatch",JSON.stringify(w))}(t),setTimeout((()=>{const n=document.getElementById("btnGroup");0===n.children.length&&G(),n.style.top=e+"px",n.style.display="flex",o.style.zIndex=1400,a.style.display="none",o.style.transform="rotateY(0deg)",a.style.transform="rotateY(0deg)",i.mantle.clickEvent=function(){j()}}),1e3)}function z(e){let n=document.getElementById("mantle");n.style.display="inherit",e&&(i.mantle.clickEvent=function(){n=null,j()}),a()}function O(e,n){z(!0),x(e.url),D=e,B=n,e.frontage.style.transitionProperty="none",D.frontage.classList.remove("zm-small-jump"),e.frontage.classList.remove("zm-small"),e.frontage.classList.add("img-big"),e.frontage.style.width="0.66rem",e.frontage.style.zIndex=1100;const t=document.getElementById("btnGroup");setTimeout((function(){t.style.top=.5*m+.5*e.frontage.height+12+"px",t.style.display="flex"}),100),0===t.children.length&&G(),window.requestAnimationFrame((function(){e.frontage.style.transitionProperty="all"}))}let S=!1,q=null;function j(){document.getElementById("mantle").style.display="none",document.getElementById("btnGroup").style.display="none",i.mantle.clickEvent=null,i.cardZm.clickEvent=null,document.getElementById("anchor").style.display="none",D.frontage.classList.remove("zm-big"),D.frontage.classList.add("zm-small");let e=D,n=B;D.frontage.classList.contains("img-big")&&D.frontage.classList.remove("img-big"),e.frontage.onclick=null,q=setTimeout((function(){e.frontage.classList.add("zm-small-jump"),e.frontage.onclick=function(){O(e,n)}}),1e3),D.frontage.style.width="0.1rem",D.frontage.style.left=B.left,D.frontage.style.top=B.top,D.frontage.style.zIndex=100,B={},D={},M()}function G(){const e=W("./asset/obtain_card.png"),n=W("./asset/summon_again.png");e.style.width="0.36rem",n.style.width="0.36rem";const t=document.getElementById("btnGroup");t.appendChild(e),t.appendChild(n),e.onclick=function(){T(D.url)},n.onclick=function(){j()}}function Y(){if(z(!1),0===E.length)return;const e=Math.round(Math.random()*(E.length-1));D=E.splice(e,1)[0];let n=v.splice(e,1)[0];D.left=B.left,D.top=B.top,D.backInDom=!0,D.back.style.left=B.left,D.back.style.top=B.top,document.body.appendChild(D.back),setTimeout((()=>{!function(e,n){const t=e.back;t.classList.add("img-big"),k||(k=W("./asset/rollingOver.png",["img-default","rolling-over"])),setTimeout((()=>{let o=.5*m+.5*t.height+12;k.style.top=o+"px",I.rollingOverBtnImg?(k.style.display="inherit",k.onclick=function(){C(o,e,n),k.style.display="none"}):(I.rollingOverBtnImg=!0,document.body.appendChild(k),k.onclick=function(){C(o,e,n),k.style.display="none"}),document.body.appendChild(e.frontage),e.frontageInDom=!0}),1e3)}(D,n)}),100)}function Z(){return!E.some((e=>!e.backInDom||!e.frontageInDom))}function P(){y.style.display="none",a();const e=document.getElementById("radarBox");e.style.display="inherit",e.style.background="rgb(0 0 0 / 40%)",I.radar||(I.radar=!0,e.appendChild(p)),setTimeout((function(){function n(){e.style.display="none",0!==_.length&&(B=_.splice(0,1)[0],document.getElementById("mantle").style.display="inherit",I.posImg||(I.posImg=!0,b.onclick=function(){Y(),b.style.display="none"},document.body.appendChild(b),setTimeout((function(){a()}),3e3)),b.style.display="inherit",b.style.zIndex=1301,b.style.left=B.left,b.style.top=B.top,fingerDom=d({left:B.left,top:`calc(${B.top} + 0.1rem)`},(function(){Y(),b.style.display="none"}),!0))}if(Z())n();else var t=setInterval((()=>{Z()&&(n(),clearInterval(t))}),1e3)}),2e3)}function M(){0!==E.length?I.radarBegin?y.style.display="inherit":(d({},P,!0),I.radarBegin=!0,y?(y.onclick=P,document.body.appendChild(y)):i.radarBeginImgBtn.completeEvent=function(){y.onclick=P,document.body.appendChild(y)}):function(){if(S)return;S=!0;let e=document.getElementById("promptText");e.style.display="inherit",e.style.opacity=1,setTimeout((function(){e.style.opacity=0,setTimeout((function(){e.style.display="none",e=null}),1e3)}),1e3)}()}function N(){f&&g&&v.forEach((function(e,n){H(e.back,["img-pos","bm","img-default"]).then((function(e){E[n].backInDom=!0,E[n].back=e})),H(e.frontage,["img-pos","zm-big","img-default"]).then((function(e){E[n].frontageInDom=!0,E[n].frontage=e}))}))}function A(e,n=1,t=!1){const o=document.getElementById("eyes");if(!o)return window.requestAnimationFrame((function(){J()})),!1;const l=m/2-e/2*u,i=document.getElementById("bgBottom"),a=document.getElementById("bgTop");return o.style.transitionDuration=i.style.transitionDuration=a.style.transitionDuration=n+"s",o.style.height=e+"rem",i.style.height=a.style.height=l+"px",t&&setTimeout((function(){!function(){const e=document.getElementById("eyes"),n=document.getElementById("bgBottom"),t=document.getElementById("bgTop");e.style.transitionDuration=n.style.transitionDuration=t.style.transitionDuration="1s",e.style.height=m+"px",e.style.opacity=0,t.style.height=n.style.height=0,setTimeout((function(){e.style.display="none",t.style.display=n.style.display="none"}),1e3),setTimeout((()=>{M()}),200)}()}),n+200),!0}let F=0;function J(){let e=A(0),n=!1,t=!1;function o(){(function(){const e=(new Date).getTime();return e-F<800?(F=0,!0):(F=e,!1)})()&&(n=!0,t=!0,A(.5,.6,n))}if(document.body.addEventListener("click",o),e){setTimeout((function(){A(.5)}),20);let e=0;function n(){setTimeout((function(){e++;let l=.05,i=!1;1&e?l=.05:2===e?(l=.55,p&&y&&(i=!0)):e>=4&&(l=.6,p&&y&&(i=!0)),t||A(l,.6+.2*e,i),i?document.body.removeEventListener("click",o):n()}),800+200*e)}n()}}function W(e,n){let t=document.createElement("img");return t.src=e,n&&n.length>0&&n.forEach((e=>{t.classList.add(e)})),t}function H(e,n){return new Promise((function(t,o){let l=document.createElement("img");l.src=e,n&&n.length>0&&n.forEach((e=>{l.classList.add(e)})),l.onload=function(e){console.log(e),t(l),l.onload=null}}))}window.onload=function(){H("http://enbrands-2.oss-cn-shanghai.aliyuncs.com/user/cf1d8aeaadf697c38730061650ecc053.png",["bg-map"]).then((function(e){document.body.appendChild(e),setTimeout((function(){document.getElementById("wl").style.opacity=0}),1e3),function(){console.log("互动营销_资生堂_菲婷丝朋友圈神券大陆"),l().setPosition(!1),l().setConfig({is_prod:!1,runtime_env:"pc",merchant_id:"未知",distinct_id:"未知",act_id:"未知",member_id:"未知",platform_app:"互动营销_资生堂_菲婷丝朋友圈神券大陆",platform_app_code:"hdyx_zst_ftspyqsjdl",platform_app_version:"1.0",application_dep_platform:"other",platform_business:"other",application_label:"187,189,62,68,89,191",is_interactive:!0,nick:"未知",mix_nick:"未知",act_name:"未知",open_id:"未知",phone:"未知",ouid:"未知",provider:"未知",open_type:1}),l().fed({event_name:"互动营销平台_访问次数",event_code:"hdyx_pv",event_label:"30",event_trigger_mode:"open",url:"./index"});let e=localStorage.getItem("cardCatch"),n=localStorage.getItem("ticketId");e?w=JSON.parse(e):(localStorage.setItem("cardCatch",[]),w=[]),function(){const e=[];w.forEach((function(n){v.some((function(t,o){if(t.back===n.urls.back&&t.frontage===n.urls.frontage)return e.push({index:o,pos:n.pos}),!0}))}));const n=new WeakMap;function t(){let e=0;for(;e<E.length;)1===n.get(E[e])?(E.splice(e,1),v.splice(e,1),_.splice(0,1)):e++;0===E.length&&(y?y.style.display="none":i.radarBeginImgBtn.hideBtn=function(){y.style.display="none"}),g=!0,N()}0===e.length?t():e.forEach((function(o){const l=o.index,i=v[o.index];n.set(E[l],1),H(i.frontage,["img-pos","zm-small-jump","img-default","zm-small"]).then((function(n){E[l].frontageInDom=!0,n.style.zIndex=100,n.style.width="0.1rem",n.style.left=o.pos.left,n.style.top=o.pos.top,n.style.transform="rotateY(0deg)",E[l].frontage=n;const i=E[l];console.log(i.frontage),document.body.appendChild(E[l].frontage),n.onclick=function(){O(i,o.pos)},function(e){return!e.some((function(e){const n=e.index;return!E[n].frontageInDom}))}(e)&&t()}))}))}(),n||(localStorage.setItem("ticketId",(new Date).getTime()),l().fed({event_name:"互动营销平台_访问人数",event_code:"hdyx_uv",event_label:"30",event_trigger_mode:"open",url:"./index"})),document.getElementById("anchor").addEventListener("click",r),document.getElementById("finger").addEventListener("click",s),document.getElementById("ruleLogo").addEventListener("click",L),document.getElementById("mantle").addEventListener("click",c)}(),H("http://enbrands-2.oss-cn-shanghai.aliyuncs.com/user/7dec83d75d5b260c324582131102a68c.png",["radar"]).then((function(e){p=e,H("./asset/pos.png",["pos","img-default"]).then((function(e){b=e,f=!0,N()}))})),H("./asset/radarBeginImg.png",["radar-begin","img-default"]).then((function(e){y=e,"function"==typeof i.radarBeginImgBtn.completeEvent&&i.radarBeginImgBtn.completeEvent(),"function"==typeof i.radarBeginImgBtn.hideBtn&&i.radarBeginImgBtn.hideBtn()})),[{url:"./asset/fino.png",classList:["logo","logo-fino"]},{url:"./asset/sm.png",classList:["logo","logo-sm"]},{url:"./asset/senka.png",classList:["logo","logo-senka"]},{url:"./asset/hand.png",classList:["logo","logo-hand"]},{url:"./asset/tsubaki.png",classList:["logo","logo-tsubaki"]},{url:"./asset/kur.png",classList:["logo","logo-kur"]},{url:"./asset/quir.png",classList:["logo","logo-quir"]},{url:"./asset/cherie.png",classList:["logo","logo-cherie"]},{url:"./asset/js.png",classList:["logo","logo-js"]},{url:"./asset/uno.png",classList:["logo","logo-uno"]}].forEach((function(e){const n=W(e.url,e.classList);document.body.appendChild(n)})),h=W("./asset/rule.png",["img-pos","img-default","img-big"])})),window.performance&&window.performance.navigation&&2===window.performance.navigation.type?function(){const e=document.getElementById("eyes"),n=document.getElementById("bgBottom"),t=document.getElementById("bgTop");e.style.display="none",t.style.display=n.style.display="none",M()}():J()}}},e=>{e.O(0,[216],(()=>(225,e(e.s=225)))),e.O()}]);