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
  },
  sidebar: {
    solt_1: {
      /*左侧边栏·第1格·背景图片*/
      src: ``,
      /*左侧边栏·第1格·背景图片描述*/
      alt: ``,
    },
    solt_2: {
      /*左侧边栏·第2格内容*/
      innerHTML:`
        <s-chip id: "side_ship_0" onclick: "openURL('/','')" clickable: "true" class: "sidebar_btn">
        <s-icon slot: "start" type: "home"></s-icon>
        主页 Homepage</s-chip>
        <s-chip id: "side_ship_1" onclick: "openURL('/blogs','')" clickable: "true" class: "sidebar_btn">
        <s-icon slot: "start"><svg xmlns: "http://www.w3.org/2000/svg" viewBox: "0 -960 960 960"><path d: "M320-320h480v-120H698q-21 37-58 58.5T560-360q-42 0-79-21.5T422-440H320v120Zm240-120q34 0 57-23.5t23-56.5h160v-280H320v280h160q0 33 23.5 56.5T560-440ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-240h480-480Z"></path></svg></s-icon>
        博客 Blog</s-chip>
        <s-chip id: "side_ship_2" onclick: "openURL('/project','')" clickable: "true" class: "sidebar_btn">
        <s-icon slot: "start"><svg xmlns: "http://www.w3.org/2000/svg" viewBox: "0 -960 960 960"><path d: "M440-183v-274L200-596v274l240 139Zm80 0 240-139v-274L520-457v274Zm-40-343 237-137-237-137-237 137 237 137ZM160-252q-19-11-29.5-29T120-321v-318q0-22 10.5-40t29.5-29l280-161q19-11 40-11t40 11l280 161q19 11 29.5 29t10.5 40v318q0 22-10.5 40T800-252L520-91q-19 11-40 11t-40-11L160-252Zm320-228Z"></path></svg></s-icon>
        项目 Project</s-chip>
        <s-chip id: "side_ship_3" onclick: "openURL('https://space.bilibili.com/1')" clickable: "true" class: "sidebar_btn">
        <s-icon slot: "start"><svg width: "100px" height: "100px" viewBox: "0 0 24 24" xmlns: "http://www.w3.org/2000/svg"><g><path fill: "none" d: "M0 0h24v24H0z"/><path d: "M18.223 3.086a1.25 1.25 0 0 1 0 1.768L17.08 5.996h1.17A3.75 3.75 0 0 1 22 9.747v7.5a3.75 3.75 0 0 1-3.75 3.75H5.75A3.75 3.75 0 0 1 2 17.247v-7.5a3.75 3.75 0 0 1 3.75-3.75h1.166L5.775 4.855a1.25 1.25 0 1 1 1.767-1.768l2.652 2.652c.079.079.145.165.198.257h3.213c.053-.092.12-.18.199-.258l2.651-2.652a1.25 1.25 0 0 1 1.768 0zm.027 5.42H5.75a1.25 1.25 0 0 0-1.247 1.157l-.003.094v7.5c0 .659.51 1.199 1.157 1.246l.093.004h12.5a1.25 1.25 0 0 0 1.247-1.157l.003-.093v-7.5c0-.69-.56-1.25-1.25-1.25zm-10 2.5c.69 0 1.25.56 1.25 1.25v1.25a1.25 1.25 0 1 1-2.5 0v-1.25c0-.69.56-1.25 1.25-1.25zm7.5 0c.69 0 1.25.56 1.25 1.25v1.25a1.25 1.25 0 1 1-2.5 0v-1.25c0-.69.56-1.25 1.25-1.25z"/></g></svg></s-icon>
        Bilibili ↗</s-chip>`,
      /*左侧边栏·第2格内容中没有按文档编写请启用此项*/
      sidebar_links_preventDefault: false,
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
  <style>
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
    .sidebar_btn {
      width:100%;
      margin:1% 0 1% 0;
    }
    .sidebar_head {
      width:100%;
      padding: 3px 3px 3px 3px;
      margin-bottom: 3%;
    }
    .page_root {
      width:100%;height:100%;
    }
  </style>
  <s-page theme="auto">
    <s-drawer>
      <div slot="start" style="width: auto;">
            <s-card type="" class="sidebar_head">
              <div slot="image"><img data-ui-img="true" src="${conf.sidebar.solt_1.src}"></div>
              <div slot="headline"><span class='sidebar_username_bg'>${conf.sidebar.solt_1.alt}</span></div>
            </s-card><br>
            <s-card type="" class="sidebar_head">${conf.sidebar.solt_2.innerHTML}</s-card><br>
            <s-card type="" class="sidebar_head" id="index_links_sidebarSlot" style="display:none;">
              <s-fold folded="true">
                <s-chip slot="trigger" clickable="true" class="sidebar_btn">
                  <s-icon slot="start"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M240-80q-50 0-85-35t-35-85v-560q0-50 35-85t85-35h440v640H240q-17 0-28.5 11.5T200-200q0 17 11.5 28.5T240-160h520v-640h80v720H240Zm120-240h240v-480H360v480Zm-80 0v-480h-40q-17 0-28.5 11.5T200-760v447q10-3 19.5-5t20.5-2h40Zm-80-480v487-487Z"></path></svg></s-icon>
                  目录
                </s-chip>
                <div id="index_links_parent"><ul id="index_links"></ul></div>
              </s-fold>
            </s-card><br>
            <s-card type="" class="sidebar_head">
              <div id="saying" class="selectable"><center>${conf.info.saying}</center></div>
              <div id="time"><center><small>Since 2022-07-19</small></center></div>
              <div id="license"><center><small>以<a href="${conf.info.licen.link}">${conf.info.licen.what}</a>协议提供内容</small></center></div>
            </s-card>
      </div>
      <s-appbar>
        <s-tooltip slot="navigation">
          <s-icon-button type="filled-tonal" onclick="document.querySelector('s-drawer').toggle()">
            <s-icon name="menu"></s-icon>
          </s-icon-button>
          切换侧栏
        </s-tooltip>
        <s-tooltip slot="headline">
          <div id="pageTitle"> Title </div>
          Title Detailed
        </s-tooltip>
        <s-tooltip slot="action">
          <s-icon-button type="outlined" id="toTopBtn" slot="trigger">
            <s-icon name="chevron_up"></s-icon>
          </s-icon-button>
          回到顶部
        </s-tooltip>
      </s-appbar>
      <s-scroll-view id="contentScroll" style="flex-grow: 1">
        ${document.body.innerHTML}
      </s-scroll-view>
    </s-drawer>
  </s-page>
  <!-- 页面重渲染插入代码结束 -->
`;

// 常变量定义区
const pageTitle = document.getElementById("pageTitle");
const toTopBtn = document.getElementById("toTopBtn");
const contentScroll = document.getElementById("contentScroll");

//title动画和回顶按钮显隐
toTopBtn.addEventListener("animationend", (event) => {if (toTopBtn.className == "fadeOut") {toTopBtn.style="display: none;";};});
function refreshAppbar() {
  /*修改pageTitle的透明度*/
  if (contentScroll.scrollTop/title_height <= 1.5) {
    pageTitle.style.opacity=contentScroll.scrollTop/title_height;
  };
  /*滚过一屏后显示回顶按钮的动画*/
  if (contentScroll.scrollTop >= contentScroll.offsetHeight) {
    if (toTopBtn.className != "fadeIn") {
      toTopBtn.setAttribute("onclick","scrollToTop();");
      toTopBtn.setAttribute("class","fadeIn");
      toTopBtn.style="";
    };
  } else {
    if (toTopBtn.className != "fadeOut") {
      toTopBtn.setAttribute("onclick","javascript:void(0);");
      toTopBtn.setAttribute("class","fadeOut");
      toTopBtn.style="display: none;";
      toTopBtn.style="";
    };
  };
};
contentScroll.addEventListener("scroll", refreshAppbar);