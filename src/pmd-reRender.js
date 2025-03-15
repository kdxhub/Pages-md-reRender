// 将Github Pages自动生成的Markdown渲染页面进行自动重绘
// Powered by SoberJS
// 自定义设置项区 详见文档：https://kdxiaoyi.top/Pages-md-reRender/global-conf (有待更新)
const conf = {
  info: {
    /*启用建站时长计时 [是否启用t/f,年,月,日]*/
    time: [false,2022,7,20],
    /*左侧边栏·一言*/
    saying: `Keep the spirit of Touching 𝕏.`,
    licen: {
      /*文章授权协议*/
      what: `CC BY-NC 4.0`,
      /*文章授权协议链接*/
      link: `https://creativecommons.org/licenses/by-nc/4.0/legalcode.zh-hans`,
    },
    /*自定义CSS样式*/
    style: ``,
    CloudflareAPI/* TODO，启用无效 */: {
      /*在脚注中显示Cloudflare节点信息，需要你的站点经过其代理*/
      enabled: false,
      /*Cloudflare节点信息映射表，一般不需要改动*/
      nodes: false,
    },
    /*KDX-Shared User Interface标识符（启用后会在同样使用了pmd的网站间共享用户侧设置）*/
    kdxSharedUI: true,
    /*允许将正文内的View on Github按钮转移*/
    view_on_github: true,
  },
  code: {
  /*在代码块下方添加复制代码按钮*/
    enabled: true,
    /*代码块复制按钮默认文本*/
    tip: "Copy",
    /*代码块复制按钮点击后文本*/
    done: "Copied!",
  },
  img: {
    view: {
      /*允许点击图片来查看大图*/
      enabled: true,
      /*启用查看大图查看原图按钮*/
      open: true,
    },
    imgse_com: {
      /*启用查看大图对imgse图床的优化*/
      enabled: true,
      /*启用查看大图查看原图 跳转至imgse查看页而不是源文件*/
      detail: true,
    },
    /*图片加载失败后的占位符图片*/
    error: "https://rs.kdxiaoyi.top/res/images/load_err.svg",
    background: {
      /*背景图片（自动应用不透明遮罩）*/
      src: "https://s21.ax1x.com/2024/05/24/pkQwAte.jpg",
      /*背景图片遮罩透明度，分别为亮色和暗色遮罩，范围0~1*/
      alpha: [0.8, 0.82],
      /*背景图片模糊度，为-1禁用*/
      blur: -1,
    },
  },
  sidebar: {
    solt_1: {
      /*左侧边栏·第1格·背景图片*/
      src: `https://s21.ax1x.com/2024/05/24/pkQwAte.jpg`,
      /*左侧边栏·第1格·背景图片描述*/
      alt: `FireFly`,
    },
    solt_2: {
      /*左侧边栏·第2格内容*/
      innerHTML:`
        <s-chip id="side_ship_0" onclick="openURL('/',true)" clickable="true" class="sidebar_btn">
          <s-icon slot="start" type="home"></s-icon>
          主页 Homepage</s-chip>
        <s-chip id="side_ship_1" onclick="openURL('/blogs',true)" clickable="true" class="sidebar_btn">
          <s-icon slot="start"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M320-320h480v-120H698q-21 37-58 58.5T560-360q-42 0-79-21.5T422-440H320v120Zm240-120q34 0 57-23.5t23-56.5h160v-280H320v280h160q0 33 23.5 56.5T560-440ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-240h480-480Z"></path></svg></s-icon>
          博客 Blog</s-chip>
        <s-chip id="side_ship_2" onclick="openURL('/project',true)" clickable="true" class="sidebar_btn">
          <s-icon slot="start"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M440-183v-274L200-596v274l240 139Zm80 0 240-139v-274L520-457v274Zm-40-343 237-137-237-137-237 137 237 137ZM160-252q-19-11-29.5-29T120-321v-318q0-22 10.5-40t29.5-29l280-161q19-11 40-11t40 11l280 161q19 11 29.5 29t10.5 40v318q0 22-10.5 40T800-252L520-91q-19 11-40 11t-40-11L160-252Zm320-228Z"></path></svg></s-icon>
          项目 Project</s-chip>
        <s-chip id="side_ship_3" onclick="openURL('https://space.bilibili.com/1',false)" clickable="true" class="sidebar_btn">
          <s-icon slot="start"><svg width="100px" height="100px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"/><path d="M18.223 3.086a1.25 1.25 0 0 1 0 1.768L17.08 5.996h1.17A3.75 3.75 0 0 1 22 9.747v7.5a3.75 3.75 0 0 1-3.75 3.75H5.75A3.75 3.75 0 0 1 2 17.247v-7.5a3.75 3.75 0 0 1 3.75-3.75h1.166L5.775 4.855a1.25 1.25 0 1 1 1.767-1.768l2.652 2.652c.079.079.145.165.198.257h3.213c.053-.092.12-.18.199-.258l2.651-2.652a1.25 1.25 0 0 1 1.768 0zm.027 5.42H5.75a1.25 1.25 0 0 0-1.247 1.157l-.003.094v7.5c0 .659.51 1.199 1.157 1.246l.093.004h12.5a1.25 1.25 0 0 0 1.247-1.157l.003-.093v-7.5c0-.69-.56-1.25-1.25-1.25zm-10 2.5c.69 0 1.25.56 1.25 1.25v1.25a1.25 1.25 0 1 1-2.5 0v-1.25c0-.69.56-1.25 1.25-1.25zm7.5 0c.69 0 1.25.56 1.25 1.25v1.25a1.25 1.25 0 1 1-2.5 0v-1.25c0-.69.56-1.25 1.25-1.25z"/></g></svg></s-icon>
          Bilibili ↗</s-chip>`,
      /*左侧边栏·第2格内容中没有按文档编写请启用此项*/
      preventDefault: false,
    },
    /*自定义边栏内容，禁用保持留空*/
    replacement: ``,
  },
  copy: {
  },
  hyper_markdown: {
    /*在标题的最后添加一个按钮以复制链接指向这个标题*/
    header_link: true,
    /*在页面底端增加文章脚注，为空不额外添加*/
    footer: ``,
    /*检查引用部分高级语法，详见文档*/
    quotepro: [true,`#1A73E7`,`#FBC116`,`#E23B2E`,`#30C496`],
  },
  link: {
    arrow: {
      /*为所有在新标签页打开的链接添加右上箭头*/
      enabled: true,
      /*仅对含有 ↗ 或 $ 的链接生效*/
      replace: true,
      /*如果链接含有 ฿ 则将其修改为新标签页打开*/
      target_replace: true,
      /*外链图标*/
      icon: `<s-icon class: "newWindowOpen"><svg xmlns: "http://www.w3.org/2000/svg" viewBox: "0 -960 960 960"><path d: "M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"></path></svg></s-icon>`,
    },
  },
  index: {
    /*启用目录统计，高级用法详见文档*/
    enabled: true,
    /*启用目录索引侧栏*/
    sidebar: true,
  },
};
/*在复制的文本结尾追加文字，见文档*/
conf.copy.endnote = ` ‖ 来自[%ETITLE%](%LINK%)，以${conf.info.licen.what}协议授权。`;

const /*插件版本（建议不要修改）*/PluginVer=["2.0.0",18];

document.body.innerHTML = `
<!-- Pages Markdown Re-Render -->
<!-- 页面重渲染插入代码开始 -->
<style id="_pmd-style-animation">
  @keyframes fadeIn {
    from {opacity: 0;}
    to {opacity: 1;}
    }
  .fadeIn {
    animation-duration: 0.5s;
    animation-fill-mode: both;
    animation-name: fadeIn;
  }
  @keyframes fadeOut {
    from {opacity: 1;}
    to {opacity: 0;}
    }
  .fadeOut {
    animation-duration: 0.5s;
    animation-fill-mode: both;
    animation-name: fadeOut;
  }
</style><style id="_pmd-style-ui">
  html::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  #_pmd-pageRoot {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  #_pmd-appbarRoot {
    position: sticky;
    top: 0;
    z-index: 1000;
  }
  #_pmd-mainContent {
    display: flex;
    flex-direction: row;
    align-items: stretch;
  }
  #_pmd-LeftSiderbar {
    display: flex;
    flex-direction: column;
  }
  #_pmd-originalContent {
    display: flex;
    flex-direction: column;
  }
  .sidebar_head {
    display: flex;
    flex-direction: column;
    width:94%;
    padding: 3px 3px 3px 3px;
    margin: 3% 3% 0% 3%;
  }
  .sidebar_btn {
    width:100%;
    margin:1% 0 1% 0;
  }
  .main-content {
    max-width: 100%;
  }
  .page-header {
    background-color: rgba(255, 255, 255, 0);
    background-image: linear-gradient(120deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0));
  }
</style><style id="_pmd-style-darkmode">
  @media not (prefers-color-scheme: dark) {
    body {
      background: url(${conf.img.background.src});
    }
    #_pmd-pageRoot {
      background: rgba(250,253,252,${conf.img.background.alpha[0]});
      backdrop-filter: blur(${conf.img.background.blur}px);
    }
    .sidebar_username_bg {
    background:rgba(250,253,252,0.5);
    }
  }
  @media (prefers-color-scheme: dark) {
    body {
      background: url(${conf.img.background.src});
    }
    #_pmd-pageRoot {
      background: rgba(250,253,252,${conf.img.background.alpha[1]});
      backdrop-filter: blur(${conf.img.background.blur}px);
    * {
      color-scheme:dark;
    }
    .sidebar_username_bg {
      background:rgba(5,2,3,0.5);
    }
    pre {
      --pre-bg-color:rbg(25 26 28);
    }
    .page-header {
      --header-font-color: #f8f8f8;
    }
  }
</style><style id="_pmd-style-predefinite">
  .selectable {
    user-select: text;
    -moz-user-select: text;
    -webkit-user-select: text;
  }
  .unselectable {
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
  }
  blockquote.pmd-blockinfo>:nth-child(2) {
    margin-top: 0;
  }
  p.pmd-blockinfo {
    margin-bottom: 0.4rem;
  }
</style><style id="_pmd-style-custom">${conf.info.style}</style>
<s-page class="unselectable page_root" id="_pmd-pageRoot" theme="auto">
  <s-appbar id="_pmd-appbarRoot">
    <s-tooltip slot="navigation">
      <s-icon-button id="_pmd-menuBtn" type="filled-tonal" slot="trigger" onclick="document.querySelector('s-drawer').toggle()">
        <s-icon name="menu"></s-icon>
      </s-icon-button>
      切换侧栏
    </s-tooltip>
    <div id="_pmd-pageTitle" slot="headline"> Title </div>
    <s-tooltip slot="action">
      <s-icon-button id="_pmd-toTopBtn" style="display: none;" type="outlined" slot="trigger">
        <s-icon name="chevron_up"></s-icon>
      </s-icon-button>
      回到顶部
    </s-tooltip>
    <s-tooltip slot="action">
      <s-icon-button id="_pmd-githubBtn" style="display: none;" type="none" slot="trigger">
        <s-icon><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path></svg></s-icon>
      </s-icon-button>
      在 Github.com 上查看
    </s-tooltip>
    </s-appbar>
  <s-drawer id="_pmd-mainContent" class="custom-scroll">
    <div id="_pmd-LeftSiderbar" slot="start">
      <s-card id="_pmd-slot_1" type="" class="sidebar_head">
        <div slot="image"><img data-ui-img="true" src="${conf.sidebar.solt_1.src}"></div>
        <div slot="headline"><span class='sidebar_username_bg'>${conf.sidebar.solt_1.alt}</span></div>
      </s-card>
      <s-card id="_pmd-slot_2" type="" class="sidebar_head">${conf.sidebar.solt_2.innerHTML}</s-card>
      <s-card id="_pmd-slot_3" type="" class="sidebar_head">
        <s-fold folded="true" id="_pmd-index_links_parent">
          <s-chip slot="trigger" clickable="true" class="sidebar_btn">
            <s-icon slot="start"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M240-80q-50 0-85-35t-35-85v-560q0-50 35-85t85-35h440v640H240q-17 0-28.5 11.5T200-200q0 17 11.5 28.5T240-160h520v-640h80v720H240Zm120-240h240v-480H360v480Zm-80 0v-480h-40q-17 0-28.5 11.5T200-760v447q10-3 19.5-5t20.5-2h40Zm-80-480v487-487Z"></path></svg></s-icon>
            目录
          </s-chip>
          <div id="_pmd-index_links"><ul></ul></div>
        </s-fold>
        <s-fold folded="true" id="_pmd-user_setting_parent">
          <s-chip slot="trigger" clickable="true" class="sidebar_btn">
            <s-icon slot="start"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z"></path></svg></s-icon>
            阅读设置
          </s-chip>
          <div id="_pmd-user_settings"><ul id="_pmd-index_links"></ul></div>
        </s-fold>
      </s-card>
      <s-card id="_pmd-slot_4" type="" class="sidebar_head">
        <div id="_pmd-slot_4_saying"><center>${conf.info.saying}</center></div>
        <div id="_pmd-slot_4_time"><center><small>Since 2022-07-19</small></center></div>
        <div id="_pmd-slot_4_license"><center><small>以<a href="${conf.info.licen.link}">${conf.info.licen.what}</a>协议提供内容</small></center></div>
      </s-card>
    </div>
    <s-scroll-view id="_pmd-originalContent" class="selectable">
      ${document.body.innerHTML}
    </s-scroll-view>
  </s-drawer>
</s-page>
<!-- 页面重渲染插入代码结束 -->
`;

//pmd元素常量组
const pmdElements = {
  pageRoot: document.getElementById("_pmd-pageRoot"),
  style: {
    animation: document.getElementById("_pmd-style-animation"),
    ui: document.getElementById("_pmd-style-ui"),
    darkmode: document.getElementById("_pmd-style-darkmode"),
    predefinite: document.getElementById("_pmd-style-predefinite"),
    custom: document.getElementById("_pmd-style-custom"),
  },
  appbar: {
    _: {
      GithubLink: "",
    },
    root: document.getElementById("_pmd-appbarRoot"),
    menuBtn: document.getElementById("_pmd-menuBtn"),
    title: document.getElementById("_pmd-pageTitle"),
    toTopBtn: document.getElementById("_pmd-toTopBtn"),
    Github: document.getElementById("_pmd-githubBtn"),
  },
  content: {
    root: document.getElementById("_pmd-mainContent"),
    lsidebar: {
      root: document.getElementById("_pmd-LeftSiderbar"),
      slot1: document.getElementById("_pmd-slot_1"),
      slot2: document.getElementById("_pmd-slot_2"),
      slot3: {
        root: document.getElementById("_pmd-slot_3"),
        index_links: {
          root: document.getElementById("_pmd-index_links_parent"),
          sub: document.getElementById("_pmd-index_links"),
        },
        user_setting: {
          root: document.getElementById("_pmd-user_setting_parent"),
          sub: document.getElementById("_pmd-user_settings"),
        },
        travellings: document.getElementById("_pmd-travellings"),
      },
      slot4: {
        _: {
          timeCountInterval: -1,
        },
        root: document.getElementById("_pmd-slot_4"),
        saying: document.getElementById("_pmd-slot_4_saying"),
        time: document.getElementById("_pmd-slot_4_time"),
        license: document.getElementById("_pmd-slot_4_license"),
      },
    },
    origin: {
      _: {
        toTop_intervalID: -1,
        toTop_interval_speed: 0,
      },
      root: document.getElementById("_pmd-originalContent"),
      header: {
        root: document.getElementsByClassName("page-header")[0],
        main: document.getElementsByClassName("project-name")[0],
        sub: document.getElementsByClassName("project-tagline")[0],
        view_on_github: document.querySelector("#_pmd-originalContent > header > a.btn"),
      },
      main: {
        root: document.getElementById("content"),
        quote: document.querySelectorAll("blockquote"),
        img: document.querySelectorAll("img"),
        code: document.querySelectorAll("pre"),
        link: document.querySelectorAll("a"),
        header: document.querySelectorAll("h1,h2,h3,h4,h5,h6"),
        list: document.querySelectorAll("ul,ol"),
        table: document.querySelectorAll("table"),
      },
    },
  },
  pageConfig: document.getElementById("mdRender_config"),
};

//通用函数
function getQueryString(name) { let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); let r = window.location.search.substr(1).match(reg); if (r != null) { return unescape(r[2]); }; return null; };
function openURL(URI, IsInPresentWindow) {
  let linkEle = document.createElement("a");
  if (!!IsInPresentWindow) {
    linkEle.target = "_self";
  } else {
    linkEle.target = "_blank";
  };
  linkEle.href = URI;
  linkEle.click();
  return linkEle;
};
function msg(Message, ConfirmBtnText, isWarning, duration, onclick, align, icon) {
  let infoJSON = {
    root: pmdElements.pageRoot,
    text: Message,
    type: "basic",
    action: {},
  };
  if (ConfirmBtnText) {infoJSON.action.text = ConfirmBtnText.toString();};
  if (isWarning) {infoJSON.type = "error";};
  if (duration) {infoJSON.duration = parseInt(duration.toString());};
  if (onclick) {infoJSON.action.click = onclick;};
  if (align) {infoJSON.align = ["auto", "top", "bottom"][ align.toString().match(/\d+/) % 3 ];};
  if (icon) {infoJSON.icon = icon;};s
  customElements.get("s-snackbar").builder(infoJSON);
  return infoJSON;
};

//移动View on Github按钮
if (conf.info.view_on_github && !!pmdElements.content.origin.header.view_on_github) {
  pmdElements.appbar._.GithubLink = pmdElements.content.origin.header.view_on_github.href;
  pmdElements.appbar.Github.addEventListener("click", () => {openURL(pmdElements.appbar._.GithubLink, false);});
  pmdElements.appbar.Github.style = "";
};
if (!!pmdElements.content.origin.header.view_on_github) {pmdElements.content.origin.header.view_on_github.remove();};

//title动画和回顶按钮显隐
pmdElements.appbar.toTopBtn.addEventListener("animationend", (event) => { if (pmdElements.appbar.toTopBtn.className == "fadeOut") { pmdElements.appbar.toTopBtn.style = "display: none;"; }; });
function updataAppbar() {
  /*修改UITitsle的透明度*/
  if (pmdElements.content.origin.root.scrollTop / pmdElements.content.origin.header.root.scrollHeight <= 1) {
    pmdElements.appbar.title.style.opacity = pmdElements.content.origin.root.scrollTop / pmdElements.content.origin.header.root.scrollHeight;
  } else {
    pmdElements.appbar.title.style.opacity = 1;
  };
  /*滚过一屏后显示回顶按钮的动画*/
  if (pmdElements.content.origin.root.scrollTop >= window.innerHeight) {
    if (pmdElements.appbar.toTopBtn.className != "fadeIn") {
      pmdElements.appbar.toTopBtn.setAttribute("onclick", "scrollToTop();");
      pmdElements.appbar.toTopBtn.setAttribute("class", "fadeIn");
      pmdElements.appbar.toTopBtn.style = "";
    };
  } else {
    if (pmdElements.appbar.toTopBtn.className != "fadeOut") {
      pmdElements.appbar.toTopBtn.setAttribute("onclick", "javascript:void(0);");
      pmdElements.appbar.toTopBtn.setAttribute("class", "fadeOut");
      pmdElements.appbar.toTopBtn.style = "display: none;";
      pmdElements.appbar.toTopBtn.style = "";
    };
  };
};
pmdElements.content.origin.root.addEventListener("scroll", updataAppbar);

//回顶
function scrollToTop() {
  /*回顶自动清除章节锚点*/
  window.location.hash = "";
  /*计算回顶速度并创建回顶循环*/
  pmdElements.content.origin._.toTop_interval_speed = -(pmdElements.content.origin.root.scrollTop / (80));
  if (pmdElements.content.origin._.toTop_intervalID != -1) { pmdElements.content.origin._.toTop_interval_speed = pmdElements.content.origin._.toTop_interval_speed * 1.5; return; };
  pmdElements.content.origin._.toTop_intervalID = setInterval(() => {
    pmdElements.content.origin.root.scrollBy(0, pmdElements.content.origin._.toTop_interval_speed);
    if (pmdElements.content.origin.root.scrollTop <= 0) {
      clearInterval (pmdElements.content.origin._.toTop_intervalID);
      pmdElements.content.origin._.toTop_intervalID = -1;
    };
  }, 1);
};
pmdElements.appbar.toTopBtn.addEventListener("click", scrollToTop);

//检查页面设置元素并应用
if (!!pmdElements.pageConfig) {
  if ((!conf.sidebar.solt_2.preventDefault) && (Math.floor(pmdElements.pageConfig.dataset.sideshipHide) >= 0)) {
    /* sideship-hide Int 禁用指定边栏链接 */
    let sideShipBtn = document.getElementById("side_ship_" + Math.floor(pmdElements.pageConfig.dataset.sideshipHide))
    sideShipBtn.setAttribute("type", "filled-tonal");
    sideShipBtn.setAttribute("clickable", "false");
    sideShipBtn.setAttribute("onclick", "void(0);"); s
  };
  if (pmdElements.pageConfig.hasAttribute("data-title")) {
    /* title Str 强制覆写UI标题，若不存在则使用文章标题 */
    pmdElements.appbar.title.innerHTML = pmdElements.pageConfig.dataset.title;
  } else {
    pmdElements.appbar.title.innerHTML = pmdElements.content.origin.header.main.innerHTML;
  };
  if (!!pmdElements.pageConfig.dataset.redirect) {
    /* redirect 重定向中间页 */
    // window.location.href=pmdElements.pageConfig.dataset.redirect;
  };
};

//blockquote高级语法
if (conf.hyper_markdown.quotepro[0]) {
  let quoteproReg = /\[(?:@|！|!|i|x|#(?:[0-9a-f]{3}){1,2}(\$[\s\S]*)*)\]/i;
  let iconMap = {
    i: { color: conf.hyper_markdown.quotepro[1], label: 'Info', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>',},
    '!': { color: conf.hyper_markdown.quotepro[2], label: 'Notice', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>',},
    '！': { color: conf.hyper_markdown.quotepro[2], label: 'Notice', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>',},
    x: { color: conf.hyper_markdown.quotepro[3], label: 'Warn', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m40-120 440-760 440 760H40Zm138-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Zm40-100Z"></path></svg>',},
    '@': { color: conf.hyper_markdown.quotepro[4], label: 'Tip', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q65 0 123 19t107 53l-58 59q-38-24-81-37.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-18-2-36t-6-35l65-65q11 32 17 66t6 70q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-56-216L254-466l56-56 114 114 400-401 56 56-456 457Z"></path></svg>',},
  };
  document.querySelectorAll('blockquote').forEach((QuoteElement) => {
    if (quoteproReg.test(QuoteElement.innerHTML)) {
      let QuoteMatch = QuoteElement.innerHTML.match(quoteproReg);
      let QuoteMatch_prefix = QuoteMatch.index > 0 ? QuoteElement.innerHTML[QuoteMatch.index - 1] : '';
      if (QuoteMatch_prefix === '^') {
        QuoteElement.dataset.pmdNotice = `未处理语法：已被转义`;
        QuoteElement.innerHTML = QuoteElement.innerHTML.slice(0, QuoteMatch.index - 1) + QuoteElement.innerHTML.slice(QuoteMatch.index);
        return;
      };
      QuoteElement.classList.add("pmd-blockinfo");
      let matchKey = QuoteMatch[0].replace(/[\[\]]/g, '');
      if (iconMap[matchKey]) {
        let { color, label, icon } = iconMap[matchKey];
        QuoteElement.style.borderColor = color;
        QuoteElement.innerHTML = `
          <p class="pmd-blockinfo" style="color: ${color};">
            <s-icon style="color: ${color}; height: 1.2em; vertical-align: center;">
              ${icon}
            </s-icon> ${label}
          </p>` + QuoteElement.innerHTML;
      } else if (/\[#(?:[0-9a-f]{3}){1,2}(\$[\s\S]*)*\]/i.test(QuoteElement.innerHTML)) {
        let hexSReg = /\[#(?:[0-9a-f]{3}){1,2}(\$[\s\S]*)*\]/i;
        let borderColor = QuoteElement.innerHTML.match(hexSReg)[0].match(/#[0-9a-f]{3,6}/i)[0];
        let borderTip = QuoteElement.innerHTML.match(hexSReg)[0].match(/(\$[\s\S]*)*/g).join("").replace(/\$/, "").slice(0, -1);
        QuoteElement.style.borderColor = borderColor;
        QuoteElement.innerHTML = `<p class="pmd-blockinfo" style="color: ${borderColor};">${borderTip}</p>` + QuoteElement.innerHTML;
      };
      QuoteElement.innerHTML = QuoteElement.innerHTML.replace(quoteproReg, "");
    }
  });
};

//建站时长刷新
function RefreshCountup(countupY, countupM, countupD) {
  /*计算时间差，JS月份从0开始要减1*/
  let timeDifference = Date.now() - new Date(countupY, countupM - 1, countupD);
  /*转换日期差*/
  let countupD_ = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  let countupH = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let countupM_ = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  let countupS = Math.floor((timeDifference % (1000 * 60)) / 1000);
  /*更新显示*/
  pmdElements.content.lsidebar.slot4.time.innerHTML = `<center><small>本站已建立${countupD_}天${countupH}小时${countupM_}分钟${countupS}秒</small></center>`;
};
if (conf.info.time[0] && !conf.sidebar.replacement) {
  pmdElements.content.lsidebar.slot4._.timeCountInterval = setInterval(() => {RefreshCountup(conf.info.time[1],conf.info.time[2],conf.info.time[3])}, 1000);
} else {pmdElements.content.lsidebar.slot4.time.remove();};

//页面初始化
updataAppbar();
console.log('%cPages Markdown Re-Render v' + PluginVer[0] + '%c[' + PluginVer[1] + '%c]\nCopyright (C) 2024 kdxiaoyi. All right reserved.', 'color:#90BBB1;', 'color:#90BBB1;', 'color:#90BBB1;');
if (!!document.getElementById(/*移除old_menu*/"old_menu")) {document.getElementById("old_menu").remove();};