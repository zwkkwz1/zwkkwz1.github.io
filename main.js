// import OmegaLogger from "buried-points-sdk-all";
const OmegaLogger = {
  setConfig: function() {},
  fed: function() {},
  setPosition: function() {}
}
const bus = {
  finger: {
    hide: null,
    clickEvent: null
  },
  mantle: {
    clickEvent: null
  },
  cardZm: {
    clickEvent: null
  }
}
function hideFinger() {
  if (typeof bus.finger.hide === 'function') {
    bus.finger.hide()
    bus.finger.hide = null
  }
  bus.finger.clickEvent = null
}
function fingerClick() {
  if (typeof bus.finger.clickEvent === 'function') {
    bus.finger.clickEvent()
  }
}
function mantleClick() {
  if (typeof bus.mantle.clickEvent === 'function') {
    bus.mantle.clickEvent()
  }
}
function cardZmClick() {
  if (typeof bus.cardZm.clickEvent === 'function') {
    bus.cardZm.clickEvent()
  }
}
function fingerShow(styles, clickEvent, willHide) {
  let fingerDom = document.getElementById('finger')
  for (let key in styles) {
    fingerDom.style[key] = styles[key]
  }
  fingerDom.style.display = 'inherit'
  if (typeof clickEvent === 'function') {
    bus.finger.clickEvent = clickEvent
  }
  if (willHide) {
    bus.finger.hide = function() {
      fingerDom.style.display = 'none'
      fingerDom = null
    }
  }
  return fingerDom
}
// let z = 10;
const screenW = document.body.offsetWidth;
const screenH = document.body.offsetHeight;
let catchCardAlready = false
let posImgAlready = false
// 用于缓存图片start
let radarImg = null;
let radarBeginImg = null;
let ruleImgDom = null;
let posImg = null;
let rollingOverBtnImg = null;
// 用于缓存图片end
let imgInDom = {
  // 记录是否已经将图片添加到html里（单例模式需要）
  radarBegin: false,
  radar: false,
  posImg: false,
  rollingOverBtnImg: false,
  ruleImg: false
};
// 记录定位点位置
const cardPos = [
  {
    left: "0.46rem",
    top: "23%",
  },
  {
    left: "0.1rem",
    top: "46%",
  },
  {
    left: "0.68rem",
    top: "49%",
  },
  {
    left: "0.4rem",
    top: "65%",
  },
  {
    left: "0.60rem",
    top: "80%",
  },
];
// 图片正反面url
const cardImgUrls = [
  {
    // 潮选
    back: "http://enbrands-2.oss-cn-shanghai.aliyuncs.com/user/2649906ba904d95695ec73b171636da2.png",
    frontage: "http://enbrands-2.oss-cn-shanghai.aliyuncs.com/user/fec457fda7f08adf44f4a5ebfb8dfebf.png",
  },
  {
    // 辅助
    back: "http://enbrands-2.oss-cn-shanghai.aliyuncs.com/user/d569c5c85da9c7692dece1fcae8c71f6.png",
    frontage: "http://enbrands-2.oss-cn-shanghai.aliyuncs.com/user/403f23050ad9644b2b461f3761e09f19.png",
  },
  {
    // 魔玩
    back: "http://enbrands-2.oss-cn-shanghai.aliyuncs.com/user/cd5bb0d10698efabfde201c26c0a2c13.png",
    frontage: "http://enbrands-2.oss-cn-shanghai.aliyuncs.com/user/00c04271231a7b8edd12ca5e81aff335.png",
  },
  {
    // 逆美
    back: "http://enbrands-2.oss-cn-shanghai.aliyuncs.com/user/9525d58e5557b381549e4e7666dbc381.png",
    frontage: "http://enbrands-2.oss-cn-shanghai.aliyuncs.com/user/173aba60dd7cec704efc3f688a50865f.png",
  },
  {
    // 造梦
    back: "http://enbrands-2.oss-cn-shanghai.aliyuncs.com/user/e58a6ac11a8fa7fcc64cd99a2747ae56.png",
    frontage: "http://enbrands-2.oss-cn-shanghai.aliyuncs.com/user/b056e7e4edba10b693f1620d54ad77c9.png",
  },
];
// 图片正反面onload之后的缓存
const cardImgCatch = [
  {
    back: null,
    frontage: null,
    backInDom: false,
    frontageInDom: false,
    url: "https://market.m.taobao.com/app/miniapp-biz/qrcode/index.html?_ariver_appid=3000000028379505&nbsv=0.1.2109231403.28&_mp_code=tb&query=clearStorage%3D1%26merchantNum%3D1900110%26platform%3D1%26type%3D0&nbsource=debug&nbsn=DEBUG&transition=present",
  },
  {
    back: null,
    frontage: null,
    backInDom: false,
    frontageInDom: false,
    url: "https://www.baidu.com",
  },
  {
    back: null,
    frontage: null,
    backInDom: false,
    frontageInDom: false,
    url: "https://www.bilibili.com/v/dance/?spm_id_from=666.4.b_7072696d6172794368616e6e656c4d656e75.17",
  },
  {
    back: null,
    frontage: null,
    backInDom: false,
    frontageInDom: false,
    url: "https://www.bilibili.com/anime/?spm_id_from=666.5.b_7072696d6172794368616e6e656c4d656e75.8",
  },
  {
    back: null,
    frontage: null,
    backInDom: false,
    frontageInDom: false,
    url: "https://www.bilibili.com/",
  },
];
let currentCardPos = {};
let cardCatchList = [];
let cardCatch = {};
// 页面回到正常状态
function pageReset() {
  document.getElementById('mantle').style.display = 'none'
  document.getElementById("btnGroup").style.display = 'none'
}
// 打开活动规则
function handleRuleClick() {
  if (!imgInDom.ruleImg) {
    imgInDom.ruleImg = true
    document.body.appendChild(ruleImgDom)
  } else {
    ruleImgDom.style.display = 'inherit'
  }
  let mantle = document.getElementById('mantle')
  mantle.style.display = 'inherit'
  bus.mantle.clickEvent = function() {
    mantle.style.display = 'none'
    ruleImgDom.style.display = 'none'
    bus.mantle.clickEvent = null
    mantle = null
  }
  document.getElementById('finger').style.display = 'none'
}
// 给dom添加事件监听
function initDomEvent() {
  document.getElementById('anchor').addEventListener('click', cardZmClick)
  document.getElementById('finger').addEventListener('click', fingerClick)
  document.getElementById('ruleLogo').addEventListener('click', handleRuleClick)
  document.getElementById('mantle').addEventListener('click', mantleClick)
}
// 初始化
function init() {
  console.log('互动营销_资生堂_菲婷丝朋友圈神券大陆')
  OmegaLogger.setPosition(false)
  OmegaLogger.setConfig({
    is_prod: false, // 数据埋入测试环境还是正式环境
    runtime_env: "pc", //  参见埋点api
    merchant_id: "未知", //  店铺ID 无法获取就写未知
    distinct_id: "未知", //  用户ID
    act_id: "未知", //  活动ID
    member_id: "未知", //  会员ID
    platform_app: "互动营销_资生堂_菲婷丝朋友圈神券大陆",
    platform_app_code: "hdyx_zst_ftspyqsjdl",
    platform_app_version: "1.0",
    application_dep_platform: "other",
    platform_business: "other",
    application_label: "187,189,62,68,89,191",
    is_interactive: true,
    nick: "未知",
    mix_nick: "未知",
    act_name: "未知",
    open_id: "未知",
    phone: "未知",
    ouid: "未知",
    provider: "未知",
    open_type: 1, // 1正常数据也就是对接新埋点平台，2互动营销类的，3其他
  });
  OmegaLogger.fed({
    event_name: "互动营销平台_访问次数",
    event_code: "hdyx_pv",
    event_label: "30",
    event_trigger_mode: "open",
    url: "./index"
  })
  let c = localStorage.getItem("cardCatch");
  let id = localStorage.getItem("ticketId");
  if (!c) {
    localStorage.setItem("cardCatch", []);
    cardCatchList = [];
  } else {
    cardCatchList = JSON.parse(c);
  }
  initSmallCard()
  if (!id) {
    localStorage.setItem("ticketId", new Date().getTime());
    // 发送UA
    OmegaLogger.fed({
      event_name: "互动营销平台_访问人数",
      event_code: "hdyx_uv",
      event_label: "30",
      event_trigger_mode: "open",
      url: "./index", //写页面的路径
    });
  }
  initDomEvent()
}
function loadCatchAlready(isOpenCardIndex) {
  return !(isOpenCardIndex.some(function(u) {
    const i = u.index
    return !cardImgCatch[i].frontageInDom
  }))
}
function initSmallCard() {
  const isOpenCardIndex = []
  cardCatchList.forEach(function(item) {
    cardImgUrls.some(function(u, i) {
      if (u.back === item.urls.back && u.frontage === item.urls.frontage) {
        isOpenCardIndex.push({
          index: i,
          pos: item.pos
        })
        return true
      }
    })
  })
  const catchCardMap = new WeakMap()
  function orderData() {
    // 删除已经加载的内容
    let i = 0
    while(i < cardImgCatch.length) {
      if (catchCardMap.get(cardImgCatch[i]) === 1) {
        cardImgCatch.splice(i, 1)
        cardImgUrls.splice(i, 1)
        cardPos.splice(0, 1)
      } else {
        i++
      }
    }
    catchCardAlready = true
    otherImgOnload()
  }
  if (isOpenCardIndex.length === 0) {
    orderData()
  } else {
    isOpenCardIndex.forEach(function(c) {
      // 加载卡背
      const i = c.index
      const item = cardImgUrls[c.index]
      catchCardMap.set(cardImgCatch[i], 1)
      // loadImg(item.back, ["img-pos", "bm", "img-default"]).then(function (res) {
      //   cardImgCatch[i].backInDom = true;
      //   cardImgCatch[i].back = res;
      //   if (loadCatchAlready(isOpenCardIndex)) {
      //     orderData()
      //   }
      // });
      // 加载卡正面
      loadImg(item.frontage, ["img-pos", "zm-small-jump", "img-default", "zm-small"]).then(function (res) {
        cardImgCatch[i].frontageInDom = true;
        res.style.zIndex = 100
        res.style.width = '0.1rem'
        res.style.left = c.pos.left
        res.style.top = c.pos.top
        res.style.transform = 'rotateY(0deg)'
        cardImgCatch[i].frontage = res;
        const card = cardImgCatch[i]
        console.log(card.frontage)
        document.body.appendChild(cardImgCatch[i].frontage)
        res.onclick = function() {
          frontToBig(card, c.pos)
        }
        if (loadCatchAlready(isOpenCardIndex)) {
          orderData()
        }
      });
    })
  }
}
// 缓存卡牌
function catchCard(urlObj) {
  cardCatchList.push({
    pos: currentCardPos,
    urls: urlObj,
    isReceive: false
  });
  localStorage.setItem("cardCatch", JSON.stringify(cardCatchList));
}
function setCardEventBus(url) {
  document.getElementById('anchor').style.display = 'inherit'
  bus.cardZm.clickEvent = function() {
    gainTicket(url)
  }
}
// 获取卡牌
function gainTicket(url) {
  OmegaLogger.fed({
    event_name: "点击领券次数",
    event_code: "gain_ticket_member_click",
    event_label: "30",
    event_trigger_mode: "click",
    url: "./index"
  })
  window.location.href = url
  // window.open(url)
}
// 卡牌转到正面
function rollingCard(h, card, urlObj) {
  OmegaLogger.fed({
    event_name: "完成的卡牌次数",
    event_code: "gain_ticket_number_open",
    event_label: "30",
    event_trigger_mode: "open",
    url: "./index"
  })
  setCardEventBus(card.url)
  const zm = card.frontage;
  const bm = card.back;
  zm.style.transform = "rotateY(90deg)";
  bm.style.transform = "rotateY(90deg)";
  catchCard(urlObj);
  setTimeout(() => {
    const btnGroupDom = document.getElementById("btnGroup");
    if (btnGroupDom.children.length === 0) {
      loadOtherBtn()
    }
    btnGroupDom.style.top = h + "px";
    btnGroupDom.style.display = "flex";
    zm.style.zIndex = 1400;
    bm.style.display = "none";
    zm.style.transform = "rotateY(0deg)";
    bm.style.transform = "rotateY(0deg)";
    bus.mantle.clickEvent = function() {
      let mantle = document.getElementById('mantle')
      bus.mantle.clickEvent = null
      mantle = null
      summonAgain()
    }
  }, 1000);
}
// 卡片变大时要做的除了卡片之外的处理
function cardToBig(hasClickEvent) {
  // 打开蒙层
  let mantle = document.getElementById('mantle')
  mantle.style.display = 'inherit'
  if (hasClickEvent) {
    bus.mantle.clickEvent = function() {
      bus.mantle.clickEvent = null
      mantle = null
      summonAgain()
    }
  }
  hideFinger()
}
// 卡牌再次变大
function frontToBig(card, pos) {
  // 卡片变大时要做的除了卡片之外的处理
  cardToBig(true)
  setCardEventBus(card.url)
  cardCatch = card;
  currentCardPos = pos;
  card.frontage.style.transitionProperty = "none";
  cardCatch.frontage.classList.remove("zm-small-jump");
  card.frontage.classList.remove("zm-small");
  card.frontage.classList.add("img-big");
  card.frontage.style.width = "0.66rem";
  card.frontage.style.zIndex = 1100;
  const btnGroupDom = document.getElementById("btnGroup");
  setTimeout(function() {
    btnGroupDom.style.top = (screenH * 0.5 + card.frontage.height * 0.5 + 12) + 'px'
    btnGroupDom.style.display = "flex";
  }, 100)
  if (btnGroupDom.children.length === 0) {
    loadOtherBtn()
  }
  window.requestAnimationFrame(function () {
    card.frontage.style.transitionProperty = "all";
  });
}
// 没有更多卡牌之后字幕提示
let isPromp = false
function noMoreCard() {
  if (isPromp) {
    return
  }
  isPromp = true
  let promptTextDom = document.getElementById('promptText')
  promptTextDom.style.display = 'inherit'
  // promptTextDom.style.transitionProperty = 'none'
  promptTextDom.style.opacity = 1
  // promptTextDom.innerHTML = '已经没有更多卡牌了'
  setTimeout(function() {
    promptTextDom.style.opacity = 0
    setTimeout(function() {
      promptTextDom.style.display = 'none'
      promptTextDom = null
    }, 1000)
  }, 1000)
}
let cardWillJump = null
function summonAgain() {
  pageReset()
  bus.cardZm.clickEvent = null
  document.getElementById('anchor').style.display = 'none'
  // 卡牌正面变换style
  cardCatch.frontage.classList.remove("zm-big");
  cardCatch.frontage.classList.add("zm-small");
  let card = cardCatch;
  let pos = currentCardPos;
  if (cardCatch.frontage.classList.contains("img-big")) {
    cardCatch.frontage.classList.remove("img-big");
  }
  card.frontage.onclick = null
  cardWillJump = setTimeout(function () {
    card.frontage.classList.add("zm-small-jump");
    card.frontage.onclick = function() {
      // clearTimeout(cardWillJump)
      frontToBig(card, pos)
    };
  }, 1000);
  cardCatch.frontage.style.width = "0.1rem";
  cardCatch.frontage.style.left = currentCardPos.left;
  cardCatch.frontage.style.top = currentCardPos.top;
  cardCatch.frontage.style.zIndex = 100;
  currentCardPos = {};
  cardCatch = {};
  addRadarBeginImg();
  // 卡牌背面隐藏
  // card.back.style.display = 'none'
}
// 安装其他按钮
function loadOtherBtn() {
  const obtainCardBtnImg = loadImgSynchronization("./asset/obtain_card.png");
  const summonAgainBtnImg = loadImgSynchronization("./asset/summon_again.png");
  obtainCardBtnImg.style.width = '0.36rem'
  summonAgainBtnImg.style.width = '0.36rem'
  const btnGroupDom = document.getElementById("btnGroup");
  btnGroupDom.appendChild(obtainCardBtnImg);
  btnGroupDom.appendChild(summonAgainBtnImg);
  obtainCardBtnImg.onclick = function () {
    gainTicket(cardCatch.url)
  };
  summonAgainBtnImg.onclick = function () {
    summonAgain();
    // btnGroupDom.style.display = "none";
  };
}
// 卡背变大
function backToBig(card, urlObj) {
  const dom = card.back;
  dom.classList.add("img-big");
  // 添加点击翻转卡牌按钮
  if (!rollingOverBtnImg) {
    rollingOverBtnImg = loadImgSynchronization("./asset/rollingOver.png", [
      "img-default",
      "rolling-over",
    ]);
    // rollingOverBtnImg.onload = function () {
    //   loadOtherBtn();
    // };
  }
  // 正面添加进html，添加 点击卡牌 按钮
  setTimeout(() => {
    let h = screenH * 0.5 + dom.height * 0.5 + 12;
    // 卡牌底部位置 screenH * 0.5 + h * 0.5
    rollingOverBtnImg.style.top = h + "px";
    if (!imgInDom.rollingOverBtnImg) {
      imgInDom.rollingOverBtnImg = true;
      document.body.appendChild(rollingOverBtnImg);
      rollingOverBtnImg.onclick = function () {
        rollingCard(h, card, urlObj); // 卡牌转到正面
        rollingOverBtnImg.style.display = "none";
        // alert('rolling-over')
      };
    } else {
      rollingOverBtnImg.style.display = "inherit";
      rollingOverBtnImg.onclick = function () {
        rollingCard(h, card, urlObj); // 卡牌转到正面
        rollingOverBtnImg.style.display = "none";
        // alert('rolling-over')
      };
    }
    document.body.appendChild(card.frontage);
    card.frontageInDom = true;
  }, 1000);
}
// 点击选择卡牌
function randomCard() {
  // 卡片变大时要做的除了卡片之外的处理
  cardToBig(false)
  if (cardImgCatch.length === 0) {
    return;
  }
  const index = Math.round(Math.random() * (cardImgCatch.length - 1));
  cardCatch = cardImgCatch.splice(index, 1)[0];
  let urlObj = cardImgUrls.splice(index, 1)[0];
  cardCatch.left = currentCardPos.left;
  cardCatch.top = currentCardPos.top;
  cardCatch.backInDom = true;
  cardCatch.back.style.left = currentCardPos.left;
  cardCatch.back.style.top = currentCardPos.top;
  // cardCatch.back.setAttribute('key', cardCatch.key)
  document.body.appendChild(cardCatch.back);
  setTimeout(() => {
    backToBig(cardCatch, urlObj);
  }, 100);
}
// 添加定位按钮
function addPosBtn() {
  if (cardPos.length === 0) {
    // TODO. 所有卡牌都被抽走的情况
    return;
  }
  const index = 0;
  currentCardPos = cardPos.splice(index, 1)[0]
  document.getElementById('mantle').style.display = 'inherit'
  if (!imgInDom.posImg) {
    imgInDom.posImg = true;
    posImg.onclick = function () {
      randomCard()
      posImg.style.display = "none"
    };
    document.body.appendChild(posImg);
    setTimeout(function() {
      hideFinger()
    }, 3000)
  }
  posImg.style.display = "inherit";
  posImg.style.zIndex = 1301
  posImg.style.left = currentCardPos.left;
  posImg.style.top = currentCardPos.top;
  fingerDom = fingerShow({
    left: currentCardPos.left,
    top: `calc(${currentCardPos.top} + 0.1rem)`
  }, randomCard, true)
}
// 判断所有卡背、卡正面加载完成
function judgeAllImgLoaded() {
  return !cardImgCatch.some((item) => !item.backInDom || !item.frontageInDom);
}
// 开始雷达转动
function radarBegin() {
  radarBeginImg.style.display = "none";
  hideFinger()
  const radarBoxDom = document.getElementById("radarBox");
  radarBoxDom.style.display = 'inherit'
  radarBoxDom.style.background = "rgb(0 0 0 / 40%)";
  // 添加雷达
  if (!imgInDom.radar) {
    imgInDom.radar = true;
    radarBoxDom.appendChild(radarImg);
  }
  setTimeout(function () {
    function radarEnd() {
      radarBoxDom.style.display = "none";
      addPosBtn();
    }
    // 判断是不是所有卡背都加载完成
    if (judgeAllImgLoaded()) {
      radarEnd();
    } else {
      // 如果图片没有加载完。雷达继续转
      var radarEndInterval = setInterval(() => {
        if (judgeAllImgLoaded()) {
          radarEnd();
          clearInterval(radarEndInterval);
        }
      }, 1000);
    }
  }, 2000);
}
// 添加雷达转动开始按钮
function addRadarBeginImg() {
  if (cardImgCatch.length === 0) {
    noMoreCard()
    return
  }
  if (!imgInDom.radarBegin) {
    fingerShow({}, radarBegin, true)
    imgInDom.radarBegin = true;
    radarBeginImg.onclick = radarBegin;
    document.body.appendChild(radarBeginImg);
  } else {
    radarBeginImg.style.display = "inherit";
  }
}

// 眨眼结束。眼睛睁开
function openEyes() {
  const eyes = document.getElementById("eyes");
  const bgBottom = document.getElementById("bgBottom");
  const bgTop = document.getElementById("bgTop");
  // eyes.style.transition = 'none'
  eyes.style.transitionDuration =
    bgBottom.style.transitionDuration =
    bgTop.style.transitionDuration =
      "1s";
  // eyes.style.opacity = 0; // 眼睛完全睁开
  // bgTop.style.opacity = bgBottom.style.opacity = 0;
  eyes.style.height = screenH + 'px'; // 眼睛完全睁开
  eyes.style.opacity = 0; // 眼睛完全睁开
  // eyes.style.backgroundImage = 'radial-gradient(rgba(255, 255, 255, 0) 100%, rgba(255, 255, 255, 0) 100%)'
  bgTop.style.height = bgBottom.style.height = 0;
  setTimeout(function () {
    eyes.style.display = "none";
    bgTop.style.display = bgBottom.style.display = "none";
  }, 1000);
  // 上下遮挡打开
  // setTimeout(() => {
  //   bgTop.style.height = bgBottom.style.height = 0
  //   bgTop = bgBottom = null
  // }, 1000)
  setTimeout(() => {
    // radarBegin()
    // document.getElementById('finger').style.display = 'inherit'
    // bus.finger.hide = function() {
    //   document.getElementById('finger').style.display = 'none'
    // }
    addRadarBeginImg();
  }, 200);
}
// 预加载其他所有图片
function otherImgOnload() {
  if (posImgAlready && catchCardAlready) {
    cardImgUrls.forEach(function (item, index) {
      // 加载卡背
      loadImg(item.back, ["img-pos", "bm", "img-default"]).then(function (res) {
        cardImgCatch[index].backInDom = true;
        cardImgCatch[index].back = res;
      });
      // 加载卡正面
      loadImg(item.frontage, ["img-pos", "zm-big", "img-default"]).then(function (res) {
        cardImgCatch[index].frontageInDom = true
        cardImgCatch[index].frontage = res
      });
    });
  }
}
function posOnload() {
  loadImg("./asset/pos.png", ["pos", "img-default"]).then(function (res) {
    // console.log(res)
    posImg = res;
    posImgAlready = true
    otherImgOnload()
  });
}
// 眨眼
function mapOnload() {
  // console.log(e)
  loadImg(
    "http://enbrands-2.oss-cn-shanghai.aliyuncs.com/user/7dec83d75d5b260c324582131102a68c.png",
    ["radar"]
  ).then(function (res) {
    // console.log(res)
    radarImg = res;
    posOnload();
  });
  loadImg("./asset/radarBeginImg.png", ["radar-begin", "img-default"]).then(function (res) {
    // console.log(res)
    radarBeginImg = res;
  });
}
function wink(eyesH, time = 1, isEnd = false) {
  const eyes = document.getElementById("eyes");
  if (!eyes) {
    alert("eyes dom不存在！");
    window.requestAnimationFrame(function () {
      winkBegin();
    });
    return false;
  }
  // const bgMap = document.getElementById('bgMap')
  // bgMap.style.height = eyesH + 'px'
  const bgHeight = screenH / 2 - (eyesH / 2) * screenW; // 1rem是screenW px。(eyesH / 2 * screenW)将(eyesH / 2)rem转成px
  const bgBottom = document.getElementById("bgBottom");
  const bgTop = document.getElementById("bgTop");
  eyes.style.transitionDuration =
    bgBottom.style.transitionDuration =
    bgTop.style.transitionDuration =
      time + "s";

  eyes.style.height = eyesH + "rem";
  bgBottom.style.height = bgTop.style.height = bgHeight + "px";
  if (isEnd) {
    setTimeout(function () {
      openEyes();
    }, time + 200);
  }
  return true;
}
let t = 0
function isdbclick() {
  const ct = new Date().getTime()
  if ((ct - t) < 800) {
    t = 0
    return true
  } else {
    t = ct
    return false
  }
}
function winkBegin() {
  let r = wink(0)
  let isEnd = false
  let interrupt = false
  function bodyDbClick() {
    if (isdbclick()) {
      isEnd = true
      interrupt = true
      wink(0.5, 0.6, isEnd)
    }
  }
  document.body.addEventListener('click', bodyDbClick)
  if (r) {
    setTimeout(function () {
      wink(0.5);
    }, 20);
    let i = 0;
    function winkLoop() {
      setTimeout(function () {
        i++;
        let h = 0.05;
        let isEnd = false;
        if (i & 1) {
          h = 0.05;
        } else if (i === 2) {
          // h = screenW / 4
          h = 0.55;
          if (radarImg && radarBeginImg) {
            isEnd = true;
            // clearInterval(winkInterval)
          }
        } else if (i >= 4) {
          // h = screenW / 3
          h = 0.6;
          if (radarImg && radarBeginImg) {
            isEnd = true;
            // clearInterval(winkInterval)
          }
        }
        // 开始扫描按钮图片 和雷达图片要在睁眼前加载好
        if (!interrupt) {
          wink(h, 0.6 + i * 0.2, isEnd)
        }
        if (!isEnd) {
          winkLoop();
        } else {
          document.body.removeEventListener('click', bodyDbClick)
        }
      }, 800 + i * 200);
    }
    winkLoop();
  }
}
window.onload = function () {
  // setTimeout(function() {
  //   const eyes = document.getElementById('eyes')
  //   eyes.style.animationIterationCount = 0
  // }, 8000)
  alert('onload')
  winkBegin();
  loadImg(
    "http://enbrands-2.oss-cn-shanghai.aliyuncs.com/user/cf1d8aeaadf697c38730061650ecc053.png",
    ["bg-map"]
  ).then(function (res) {
    // console.log(res)
    // mapImg = res
    // res.style.height = screenH + 'px'
    // document.getElementById('eyes').appendChild(res)
    document.body.appendChild(res);
    setTimeout(function() {
      document.getElementById('wl').style.opacity = 0
    }, 1000)
    init();
    mapOnload();
    const logoList = [
      {
        url: './asset/fino.png',
        classList: ['logo', 'logo-fino']
      },
      {
        url: './asset/sm.png',
        classList: ['logo', 'logo-sm']
      },
      {
        url: './asset/senka.png',
        classList: ['logo', 'logo-senka']
      },
      {
        url: './asset/hand.png',
        classList: ['logo', 'logo-hand']
      },
      {
        url: './asset/tsubaki.png',
        classList: ['logo', 'logo-tsubaki']
      },
      {
        url: './asset/kur.png',
        classList: ['logo', 'logo-kur']
      },
      {
        url: './asset/quir.png',
        classList: ['logo', 'logo-quir']
      },
      {
        url: './asset/cherie.png',
        classList: ['logo', 'logo-cherie']
      },
      {
        url: './asset/js.png',
        classList: ['logo', 'logo-js']
      },
      {
        url: './asset/uno.png',
        classList: ['logo', 'logo-uno']
      },
    ]
    logoList.forEach(function(logo) {
      const res = loadImgSynchronization(logo.url, logo.classList)
      document.body.appendChild(res)
    })
    ruleImgDom = loadImgSynchronization('./asset/rule.png', ['img-pos', 'img-default', 'img-big'])
  });
};

// 加载图片（非异步）
function loadImgSynchronization(url, classList) {
  let img = document.createElement("img");
  img.src = url;
  if (classList && classList.length > 0) {
    classList.forEach((element) => {
      img.classList.add(element);
    });
  }
  return img;
}
// 预加载图片
function loadImg(url, classList) {
  return new Promise(function (reslove, reject) {
    let img = document.createElement("img");
    img.src = url;
    if (classList && classList.length > 0) {
      classList.forEach((element) => {
        img.classList.add(element);
      });
    }
    img.onload = function (e) {
      console.log(e);
      reslove(img);
      img.onload = null;
    };
  });
}
window.addEventListener('pageshow', function (e) {
  alert(e.persisted)
})
