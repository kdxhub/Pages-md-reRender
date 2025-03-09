// 将Github Pages自动生成的Markdown渲染页面进行自动重绘
// Powered by SoberJS
// 自定义设置项区 详见文档：https://kdxiaoyi.top/Pages-md-reRender/global-conf
const /*文章授权协议*/conf_licen=`CC BY-NC 4.0`;
const /*文章授权协议链接*/conf_licen_link=`https://creativecommons.org/licenses/by-nc/4.0/legalcode.zh-hans`;
const /*在代码块下方添加复制代码按钮*/conf_codeCopyBtn=true;
const   /*代码块复制按钮默认文本*/conf_codeCopyBtn_tip="Copy";
const   /*代码块复制按钮点击后文本*/conf_codeCopyBtn_tip_done="Copied!";
const /*允许点击图片来查看大图*/conf_imgView=true;
const   /*启用查看大图对imgse图床的优化*/conf_imgView_imgse=true;
const   /*启用查看大图查看原图 跳转至imgse查看页而不是源文件*/conf_imgView_imgse_noRes=true;
const   /*启用查看大图查看原图按钮*/conf_imgView_open=true;
const /*启用建站时长计时 [是否启用t/f,年,月,日]*/conf_time=[false,2022,7,20];
const /*左侧边栏·一言*/conf_saying=`Keep the spirit of Touching 𝕏.`;
const /*左侧边栏·第1格·背景图片*/conf_sidebar_headimg_src=``;
const   /*左侧边栏·第1格·背景图片描述*/conf_sidebar_headimg_alt=``;
const /*左侧边栏·第2格内容*/conf_sidebar_links=`
<s-chip id="side_ship_0" onclick="openURL('/','')" clickable="true" class="sidebar_btn">
<s-icon slot="start" type="home"></s-icon>
主页 Homepage</s-chip>
<s-chip id="side_ship_1" onclick="openURL('/blogs','')" clickable="true" class="sidebar_btn">
<s-icon slot="start"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M320-320h480v-120H698q-21 37-58 58.5T560-360q-42 0-79-21.5T422-440H320v120Zm240-120q34 0 57-23.5t23-56.5h160v-280H320v280h160q0 33 23.5 56.5T560-440ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-240h480-480Z"></path></svg></s-icon>
博客 Blog</s-chip>
<s-chip id="side_ship_2" onclick="openURL('/project','')" clickable="true" class="sidebar_btn">
<s-icon slot="start"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M440-183v-274L200-596v274l240 139Zm80 0 240-139v-274L520-457v274Zm-40-343 237-137-237-137-237 137 237 137ZM160-252q-19-11-29.5-29T120-321v-318q0-22 10.5-40t29.5-29l280-161q19-11 40-11t40 11l280 161q19 11 29.5 29t10.5 40v318q0 22-10.5 40T800-252L520-91q-19 11-40 11t-40-11L160-252Zm320-228Z"></path></svg></s-icon>
项目 Project</s-chip>
<s-chip id="side_ship_3" onclick="openURL('https://space.bilibili.com/1')" clickable="true" class="sidebar_btn">
<s-icon slot="start"><svg width="100px" height="100px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"/><path d="M18.223 3.086a1.25 1.25 0 0 1 0 1.768L17.08 5.996h1.17A3.75 3.75 0 0 1 22 9.747v7.5a3.75 3.75 0 0 1-3.75 3.75H5.75A3.75 3.75 0 0 1 2 17.247v-7.5a3.75 3.75 0 0 1 3.75-3.75h1.166L5.775 4.855a1.25 1.25 0 1 1 1.767-1.768l2.652 2.652c.079.079.145.165.198.257h3.213c.053-.092.12-.18.199-.258l2.651-2.652a1.25 1.25 0 0 1 1.768 0zm.027 5.42H5.75a1.25 1.25 0 0 0-1.247 1.157l-.003.094v7.5c0 .659.51 1.199 1.157 1.246l.093.004h12.5a1.25 1.25 0 0 0 1.247-1.157l.003-.093v-7.5c0-.69-.56-1.25-1.25-1.25zm-10 2.5c.69 0 1.25.56 1.25 1.25v1.25a1.25 1.25 0 1 1-2.5 0v-1.25c0-.69.56-1.25 1.25-1.25zm7.5 0c.69 0 1.25.56 1.25 1.25v1.25a1.25 1.25 0 1 1-2.5 0v-1.25c0-.69.56-1.25 1.25-1.25z"/></g></svg></s-icon>
Bilibili ↗</s-chip>`;
const /*左侧边栏·第2格内容中没有按文档编写请启用此项*/conf_sidebar_links_preventDefault=false;
const /*复制文本后向文本末尾添加一段文本，详见文档*/conf_copy_endnote=` ‖ 来自[%ETITLE%](%LINK%)，以${conf_licen}协议授权。`;
const   /*阻止一些简易解除复制限制脚本工作并提示用户*/conf_prenevtOnclickOverwrite=true;
const /*图片加载失败后的占位符图片*/conf_img_error_replace="https://rs.kdxiaoyi.top/res/images/load_err.svg";
const /*为所有在新标签页打开的链接添加右上箭头*/conf_link_arrow=true;
const   /*仅对含有 ↗ 或 $ 的链接生效*/conf_link_arrow_replace=true;
const   /*如果链接含有 ฿ 则将其修改为新标签页打开*/conf_link_target_replace=true;
const   /*外链图标*/conf_link_arrow_icon=`<s-icon class="newWindowOpen"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"></path></svg></s-icon>`;
const /*自定义边栏内容，禁用保持留空*/conf_replaceSidebar=``;
const /*启用目录统计，高级用法详见文档*/conf_index=true;
const /*启用目录索引侧栏*/conf_index_sidebar=true;
const /*在标题的最后添加一个按钮以复制链接指向这个标题*/conf_headerLinkCopyBtn=true;
const /*在页面底端增加文章脚注，为空不额外添加*/conf_footer=``;
const /*检查引用部分高级语法，详见文档*/conf_quotepro=[true,`#1A73E7`,`#FBC116`,`#E23B2E`,`#30C496`];

const /*插件版本（建议不要修改）*/PluginVer=["1.3.0",17];

//插入重渲染代码
document.body.innerHTML = `
  <!-- Pages Markdown Re-Render -->
  <!-- 页面重渲染插入代码开始 -->
  <style>
    html, body, s-page {
      height: 100%;
      overflow: hidden;
      margin: 0;
      -webkit-tap-highlight-color: transparent;
    }
    #contentBG {
      width: 100%;
      flex-grow:1;
      overflow: auto;
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
    img.processed {
      min-width: 50%;
      max-width: 90%;
      min-height: 20vh;
      max-height: 60vh;
      margin: 0 auto;
      display: block;
    }
    code.processed {}
    .selectable {user-select:text;}
    .unselectable {user-select:none;}
    s-icon.newWindowOpen {height:1em;width:1em;}
    .site-footer {
      padding: 0 5% 0.1rem 5%;
      text-align: right;
      width: 100%;
      word-wrap: break-word;
    }
    .sidebar_drawer {padding:5px 5px 5px 5px;}
    s-fab {
      position: absolute;
      background: transparent;
      backdrop-filter: blur(10px);
      height: 48px;
      width: 48px;
      right: 3%;
      bottom: 5%;
      flex-shrink: 0;
    }
    blockquote.blockinfo {
      color: #567482;
      width: 100%;
      border-style: solid;
    }
    blockquote.blockinfo p:nth-of-type(2) {
      margin: 0 0 0 0;
    }
    blockquote.blockinfo p:last-of-type {
      margin-bottom: .3em;
    }
    blockquote.blockinfo > p.blockinfo {
      margin: .2em 0 .2em -.3em;
      font-size: 1.1em;
    }
    blockquote.blockinfo p:first-of-type {
      margin-top: .2em;
    }
    ul#index_links {
      padding: 0 0 0 0;
      margin: 0 0 0 1.2em;
      wdith:100%;
      list-style-type: none;
    }
    ul.index {
      padding: 0 0 0 .8em;
      list-style-type: none;
    }
    li.index {
      padding: 0 0 0 0;
    }
    ul.index li.index::before {
      content: "";
      position: absolute;
      transform: translateY(.6em) translateX(-.75em);
      width: .2em;
      height: .2em;
      border-radius: 50%;
      border: .075em solid var(--s-color-primary, black);
    }
    .headerProcessed {
      text-decoration: none;
      cursor: alias;
    }
    .headerProcessed:hover {
      text-decoration: underline;
    }
    .headerLinkBtn {
      height: 1rem;
      width: 1rem;
      transition: opacity 0.15s ease;
      opacity: 0;
    }
    .headerProcessed:hover > .headerLinkBtn {
      opacity: 1;
    }
  </style>
  <s-page theme="auto" class="page_root" id="page_root">
    <s-dialog style="display:none;" id="img_dialog" size="full">
      <div style="padding: 24px">
        <p id="img_dialog_p"></p>
        <img data-ui-img="true" id="img_dialog_img" src=""></img>
      </div>
      <s-button id="img_dialog_open_btn" slot="action" type="text">查看原图 <s-icon class="newWindowOpen"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"></path></svg></s-icon></s-button>
      <s-button id="img_dialog_btn" slot="action" type="text">关闭</s-button>
    </s-dialog>
    <s-appbar id="appbar">
     <!--左侧菜单按钮-->
      <s-icon-button id="sidebar_toggle_btn" type="filled-tonal" slot="navigation">
        <s-icon type="menu"></s-icon>
      </s-icon-button>
     <!--标题-->
      <div slot="headline" id="UIt" style="opacity:0;">  </div>
     <!--右侧按钮-->
      <s-icon-button type="outlined" class="fadeOut" style="display:none;" id="toTop" slot="action" onclick="javascript:void(0);"><s-icon type="arrow_upward"></s-icon></s-icon-button>
    </s-appbar>
    <s-drawer id="sidebar">
      <div id="sidebar_left_parent" slot="start">
        <s-scroll-view id="sidebar_left_scroll" style="max-height:100%;">
          <div id="sidebar_left" class="sidebar_drawer">
          <!--左侧边栏内容-->
            <s-card type="" class="sidebar_head">
              <div slot="image"><img data-ui-img="true" src="${conf_sidebar_headimg_src}"></div>
              <div slot="headline"><span class='sidebar_username_bg'>${conf_sidebar_headimg_alt}</span></div>
            </s-card><br>
            <s-card type="" class="sidebar_head">${conf_sidebar_links}</s-card><br>
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
              <div id="saying" class="selectable"><center>${conf_saying}</center></div>
              <div id="time"><center><small>Since 2022-07-19</small></center></div>
              <div id="license"><center><small>以<a href="${conf_licen_link}">${conf_licen}</a>协议提供内容</small></center></div>
            </s-card>
          </div>
        <s-scroll-view>
      </div>
      <div id="sidebar_right_parent" slot="end">
        <s-scroll-view style="max-height:100%;">
          <div id="sidebar_right" class="sidebar_drawer">
          <!--右侧边栏内容-->
          </div>
        </s-scroll-view>
      </div>
      <div>
        <s-scroll-view id="contentScroll" style="max-height:100%;"><div id="contentBG" class="selectable">
  <!-- 页面重渲染插入代码结束 -->
  `+document.body.innerHTML+`
        <footer class="site-footer unselectable"></hr>${conf_footer}<br><small>Powered by <a href="http://github.com/kdxhub/Pages-md-reRender" target="_blank">kdxiaoyi/Pages-md-reRender</a>.</small></footer>
        </div></s-scroll-view>
      </div>
    </s-drawer>
  </s-page>
`;
// 变量、常量定义区
const hexReg/*匹配Hex颜色代码的正则*/=/#(?:[0-9a-f]{3}){1,2}/i;
const page_root/*页面根元素<s-page>*/=document.getElementById("page_root");
const UIt/*UItitle控件*/=document.getElementById("UIt");
const link_a/*新建的白板链接元素*/=document.createElement("a");
const contentScroll/*主体页面滚动条元素*/=document.getElementById("contentScroll");
const toTopBtn/*回顶按钮元素*/=document.getElementById("toTop");
const title/*文档标题元素*/=document.querySelector("#contentBG > header > h1");
const title_height/*文档标题元素高度*/=document.querySelector("#contentBG > header").offsetHeight - document.querySelector("#contentBG > header > h2").offsetHeight;
const appbar/*最上方操作栏元素*/=document.getElementById("appbar");
const contentBG/*正文总框架元素*/=document.getElementById("contentBG");
const content/*正文内容框架元素*/=document.getElementById("content");
const timeElement/*建站时长计时显示文本元素*/=document.getElementById('time');
var toTop_intervalID = -1;//回顶操作初始化
const img_dialog/*查看大图UI根框架元素*/=document.getElementById("img_dialog");
const img_dialog_img/*查看大图UI中的图片元素*/=document.getElementById("img_dialog_img");
const img_dialog_p/*查看大图UI中文本描述元素*/=document.getElementById("img_dialog_p");
const sidebar/*抽屉边栏总框架元素*/=document.getElementById("sidebar");
const drawer_left/*左边栏框架元素*/=document.getElementById("sidebar_left");
const drawer_left_scroll/*左边栏框架元素*/=document.getElementById("sidebar_left_scroll");
const drawer_left_parent/*左边栏框架父元素*/=document.getElementById("sidebar_left_parent");
const drawer_right/*右边栏框架元素*/=document.getElementById("sidebar_right");
const drawer_right_parent/*右边栏框架父元素*/=document.getElementById("sidebar_right_parent");
const index_links/*右边栏中标题链接区父元素*/=document.getElementById("index_links");
console.log('%cPages Markdown Re-Render v'+PluginVer[0]+'%c['+PluginVer[1]+'%c]\nCopyright (C) 2024 kdxiaoyi. All right reserved.','color:#90BBB1;','color:#90BBB1;','color:#90BBB1;');

//debug模式的检测与切换
function getQueryString(name) { let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); let r = window.location.search.substr(1).match(reg); if (r != null) { return unescape(r[2]); }; return null; };
function msg(Message, ConfirmText, isWarning) {let infoJson={};infoJson.root=document.querySelector('s-page');infoJson.text=Message;if (ConfirmText==undefined) {infoJson.action="";} else {infoJson.action=ConfirmText;};if (isWarning!=undefined) {infoJson.type="error";};customElements.get('s-snackbar').show(infoJson);console.output("创建了新的Snakbar\n"+JSON.stringify(infoJson));return infoJson;};
document.debugging = false;
function debug(mode) {if (mode==true) {document.debugging=true;msg("调试模式已启用","了解");} else {document.debugging=false;msg("调试模式已禁用","了解");};return document.debugging;};
console.output = function (Message) {if (document.debugging) {console.log(Message);};};
let localReg = /(127\.0\.0\.1)|(0\.0\.0\.0)|(localhost)/i;
if (localReg.test(window.location.href)) {debug(true);msg("检测到本地调试","了解");};
if (getQueryString("debug")!=null) {debug(true);msg("检测到调试命令行","了解");};

// 封装的通用API函数
  /* 列出所有封装的Function:
      getQueryString(name)
      msg(Message, ConfirmText, isWarning)
      debug(mode)
      console.output(Message)
      resetDrawerHeight()
      resetDrawer()
      scrollToTop()
      scrollToHash(goalHash)
      changeStyle(el, arr)
      setUItitle(Title)
      openURL(URL,IsInPresentWindow)
      refreshAppbar()
      RefreshCountup(StartY,StartM,StartD)
      selectAllTextInElement(element)
      copyBtnDone(copyBtn, text)
      preventCopyEventOverWrite()
      openImgView(imgsrc, imgTitle, imgAlt)
  */
function resetDrawerHeight() {
  sidebar.style.height = `${document.body.scrollHeight-appbar.offsetHeight}px`;
  console.output("重算s-drawer高度\nsidebar.style.height="+sidebar.offsetHeight+"px");
  contentBG.style.height="initial";
  contentBG.style.height=`${contentBG.offsetHeight+appbar.offsetHeight}px`;
  console.output("修改页面真实高度\ncontentBG.style.height="+contentBG.style.height);
};
function refreshDrawer() {
  drawer_left_parent.style.display=`none`;
  drawer_right_parent.style.display=`none`;
  setTimeout(() => {
    drawer_left_parent.style.display=``;
    drawer_right_parent.style.display=``;
  }, 10);
};
function scrollToTop() {
  /*关闭所有侧栏*/
  sidebar.dismiss("end");
  sidebar.dismiss();
  /*回顶自动清除章节锚点*/
  window.location.hash = "";
  /*计算回顶速度并创建回顶循环*/
  var toTop_interval_speed = -(contentScroll.scrollTop/(80));
  if (toTop_intervalID != -1) {toTop_interval_speed = toTop_interval_speed*1.5;return;};
  toTop_intervalID = setInterval(() => {
    contentScroll.scrollBy(0,toTop_interval_speed);
    console.output("回顶循环#"+toTop_intervalID+"执行操作");
    if (contentScroll.scrollTop <= 0) {
      clearInterval(toTop_intervalID);
      console.output("回顶循环#"+toTop_intervalID+"操作完成");
      toTop_intervalID=-1;
      drawer_left_scroll.scrollTop=0;
    };
  }, 1);
  console.output("创建新的回顶循环句柄#"+toTop_intervalID);
};
function scrollToHash(goalHash) {
  let goalEle=document.getElementById(goalHash);
  if (!goalEle) /*没有获取到指定元素*/ {msg(`不存在的章节「${goalHash}」`,"好",true);return false;};
  /*关闭所有侧栏*/sidebar.dismiss("end");sidebar.dismiss();
  /*计算要结束滚动时滚动条的位置*/
  let toTop_goalEle_offsetTop = goalEle.offsetTop;
  while ((contentBG.offsetHeight-toTop_goalEle_offsetTop)<contentScroll.offsetHeight) {toTop_goalEle_offsetTop-=contentScroll.offsetHeight;console.log("计算要结束滚动时滚动条的位置时滚动条超出可滚动范围");};
  /*计算滚动速度并创建滚动循环*/
  var toTop_interval_speed = (goalEle.offsetTop - appbar.offsetHeight)/(80);
  if (toTop_intervalID/*共用1个id防止出bug*/ != -1) {toTop_interval_speed = toTop_interval_speed*1.5;return;};
  toTop_intervalID = setInterval(() => {
    contentScroll.scrollBy(0,toTop_interval_speed);
    console.output("滚动循环#"+toTop_intervalID+"执行操作");
    if (toTop_interval_speed>=0 && contentScroll.scrollTop >= toTop_goalEle_offsetTop) {clearInterval(toTop_intervalID);console.output("滚动循环#"+toTop_intervalID+"操作完成");toTop_intervalID=-1;openURL(`#${goalHash}`,true);refreshDrawer();};
    if (toTop_interval_speed<=0 && contentScroll.scrollTop <= toTop_goalEle_offsetTop) {clearInterval(toTop_intervalID);console.output("滚动循环#"+toTop_intervalID+"操作完成");toTop_intervalID=-1;openURL(`#${goalHash}`,true);refreshDrawer();};
  }, 1);
  console.output("创建新的滚动循环句柄#"+toTop_intervalID);
};
function setUItitle(Title) {UIt.innerHTML=Title;};
function openURL(URL,IsInPresentWindow) {if (IsInPresentWindow != undefined) {link_a.target="_self";} else {link_a.target="_blank";};link_a.href=URL;link_a.click();};

//title动画和回顶按钮显隐
toTopBtn.addEventListener("animationend", (event) => {if (toTopBtn.className == "fadeOut") {toTopBtn.style="display: none;";};});
function refreshAppbar() {
  /*修改UItitle的透明度*/
  if (contentScroll.scrollTop/title_height <= 1.5) {
    UIt.style.opacity=contentScroll.scrollTop/title_height;
    console.output("UItitle透明度改变");
  };
  /*滚过一屏后显示回顶按钮的动画*/
  if (contentScroll.scrollTop >= contentScroll.offsetHeight) {
    if (toTopBtn.className != "fadeIn") {
      toTopBtn.setAttribute("onclick","scrollToTop();");
      toTopBtn.setAttribute("class","fadeIn");
      toTopBtn.style="";
      console.output("显示回顶按钮");
    };
  } else {
    if (toTopBtn.className != "fadeOut") {
      toTopBtn.setAttribute("onclick","javascript:void(0);");
      toTopBtn.setAttribute("class","fadeOut");
      toTopBtn.style="display: none;";
      toTopBtn.style="";
      console.output("隐藏回顶按钮");
    };
  };
};
contentScroll.addEventListener("scroll", refreshAppbar);

//blockquote高级语法
if (conf_quotepro[0]) {
  let quoteproReg = /\[(?:@|！|!|i|x|#(?:[0-9a-f]{3}){1,2}(\$[\s\S]*)*)\]/i;
  document.querySelectorAll('blockquote').forEach((QuoteElement) => {
    if (quoteproReg.test(QuoteElement.innerHTML)) {
      console.output(`找到一处使用了高级语法的blockquote`);
      /*判断此语法是否被转义*/
      let QuoteMatch=QuoteElement.innerHTML.match(quoteproReg);
      let QuoteMatch_prefix=``;
      if (QuoteMatch.index > 0) {QuoteMatch_prefix=QuoteElement.innerHTML[QuoteMatch.index-1]};
      if (QuoteMatch_prefix == `^`) {
        console.log(`此blockquote高级语法已被转义`);
        QuoteElement.innerHTML = QuoteElement.innerHTML.slice(0,QuoteMatch.index-1)+QuoteElement.innerHTML.slice(QuoteMatch.index);
        return;
      };
      /*开始处理语法*/
      QuoteElement.classList.add("blockinfo");
      if (/\[i\]/.test(QuoteElement.innerHTML)) {
        QuoteElement.style.borderColor=conf_quotepro[1];
        QuoteElement.innerHTML = 
          `<p class="blockinfo" style="color: ${conf_quotepro[1]};">
          <s-icon style="color: ${conf_quotepro[1]};height: 1.2em;vertical-align: center;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>
          </s-icon> Info</p>`+QuoteElement.innerHTML;
      };
      if (/\[(!|！)\]/.test(QuoteElement.innerHTML)) {
        QuoteElement.style.borderColor=conf_quotepro[2];
        QuoteElement.innerHTML = 
          `<p class="blockinfo" style="color: ${conf_quotepro[2]};">
          <s-icon style="color: ${conf_quotepro[2]};height: 1.2em;vertical-align: center;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>
          </s-icon> Notice</p>`+QuoteElement.innerHTML;
      };
      if (/\[x\]/.test(QuoteElement.innerHTML)) {
        QuoteElement.style.borderColor=conf_quotepro[3];
        QuoteElement.innerHTML = 
          `<p class="blockinfo" style="color: ${conf_quotepro[3]};">
          <s-icon style="color: ${conf_quotepro[3]};height: 1.2em;vertical-align: center;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m40-120 440-760 440 760H40Zm138-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Zm40-100Z"></path></svg>
          </s-icon> Warn</p>`+QuoteElement.innerHTML;
      };
      if (/\[@\]/.test(QuoteElement.innerHTML)) {
        QuoteElement.style.borderColor=conf_quotepro[4];
        QuoteElement.innerHTML = 
          `<p class="blockinfo" style="color: ${conf_quotepro[4]};">
          <s-icon style="color: ${conf_quotepro[4]};height: 1.2em;vertical-align: center;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q65 0 123 19t107 53l-58 59q-38-24-81-37.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-18-2-36t-6-35l65-65q11 32 17 66t6 70q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-56-216L254-466l56-56 114 114 400-401 56 56-456 457Z"></path></svg>
          </s-icon> Tip</p>`+QuoteElement.innerHTML;
      };
      let hexSReg=/\[#(?:[0-9a-f]{3}){1,2}(\$[\s\S]*)*\]/i;
      if (hexSReg.test(QuoteElement.innerHTML)) {
        let borderColor= 
          QuoteElement.innerHTML.match(hexSReg)[0].match(hexReg)[0];
        let borderTip=
          QuoteElement.innerHTML.match(hexSReg)[0].match(/(\$[\s\S]*)*/g).join("").replace(/\$/,"").slice(0,-1);
        QuoteElement.style.borderColor= borderColor;
        QuoteElement.innerHTML = 
          `<p class="blockinfo" style="color: ${borderColor};">${borderTip}</p>`+QuoteElement.innerHTML;
      };
      QuoteElement.innerHTML = QuoteElement.innerHTML.replace(quoteproReg,"");
    };
  });
};

//侧栏内容覆写
if (!!conf_replaceSidebar) {
  document.getElementById("sidebar_left").innerHTML=conf_replaceSidebar;
  console.output("覆写sidebar内容");
};

//正文内容标题统计与处理
let hn_last_level=1;
let hn_index_cache="";
document.querySelectorAll('div#contentBG h1, div#contentBG h2, div#contentBG h3, div#contentBG h4, div#contentBG h5, div#contentBG h6').forEach((HeaderElement) => {
  HeaderElement.dataset.title = HeaderElement.innerHTML;
  if (HeaderElement.className/*不处理文章开头的副标题*/.includes("project-tagline")) {return;};
  let hn_level=HeaderElement.tagName.replace(/\D/g,"");
  if (!HeaderElement.id) {/*判断标题元素是否有id，若无则写入一个*/
    let name=`_`+HeaderElement.innerHTML;
    HeaderElement.id=name;
  } else {
    let name=HeaderElement.id;
  };
  if (conf_index) {
    if (hn_level > hn_last_level) /*如果进入下级标题，则需要新建ul*/ {hn_index_cache += `<ul class="index">`.repeat(hn_level-hn_last_level);};
    if (hn_level < hn_last_level) /*如果进入上级标题则结束ul*/ {hn_index_cache += `</ul>`.repeat(hn_last_level-hn_level);};
    hn_index_cache += `<li class="index"><a href="javascript:scrollToHash('${HeaderElement.id}');">${HeaderElement.innerHTML}</a></li>`;
  };
  hn_last_level=hn_level;
  if (!!navigator.clipboard && conf_headerLinkCopyBtn && !HeaderElement.className/*不处理文章开头的标题*/.includes("project-name")) {
    HeaderElement.addEventListener("click", () => {
      navigator.clipboard.writeText(`${window.location.href.replace(window.location.hash,"").slice(0,-1)}#${HeaderElement.id}`).then(
        function () {/* clipboard successfully set */
          msg(`已复制指向标题「${HeaderElement.dataset.title}」的链接`, "好");
          console.output("Clipboard API返回「✓已写入剪贴板」");
        },function () {/* clipboard write failed */
          msg("没有授予剪贴板权限…", "好", true);
          console.output("Clipboard API返回「×无法写入剪贴板」");
        },
      );
    });
    HeaderElement.classList.add("headerProcessed");
    HeaderElement.innerHTML+=`<s-icon class="headerLinkBtn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M680-160v-120H560v-80h120v-120h80v120h120v80H760v120h-80ZM440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm560-40h-80q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480Z"></path></svg></s-icon>`;
  };
});
if (conf_index_sidebar) {
  index_links.innerHTML=hn_index_cache;
  document.getElementById("index_links_sidebarSlot").style="";
};
if /*向具有指定id的元素中写入目录信息*/ (conf_index && !!(document.getElementById("index_overwrite"))) {document.getElementById("index_overwrite").innerHTML=hn_index_cache;};

//读取页面标题
setUItitle(title.innerHTML);
console.output("设置UI标题\nUItitle.innerHTML="+title.innerHTML);

//切换左侧栏按钮点击
document.getElementById("sidebar_toggle_btn").addEventListener("click",()=>{
  if (toTop_intervalID !== -1) /*有存在的回顶循环时不能展开菜单*/ {return;};
  window.getSelection().removeAllRanges();
  sidebar.dismiss("end");
  sidebar.toggle();
  console.output("切换Sidebar显示");
});

//动态重算s-drawer的高度
resetDrawerHeight();
window.addEventListener('resize', resetDrawerHeight/*当窗口大小改变时也要重算高度*/);

//章节锚点改变事件注册
window.addEventListener('hashchange', () => {
  /*关闭所有侧栏*/sidebar.dismiss("end");sidebar.dismiss();
  /*更新UItitle透明度*/
  UIt.style.opacity=contentScroll.scrollTop/title_height;
  /*修复章节锚点跳转页面底部时导致布局异常bug*/
  setTimeout(() => {
    refreshDrawer();
    refreshAppbar();
  },2);
});

//检查页面设置元素并应用
if (!!document.getElementById("mdRender_config")) {
  let configDiv=document.getElementById("mdRender_config");
  if ((!conf_sidebar_links_preventDefault)&&(Math.floor(configDiv.dataset.sideshipHide) >= 0)) {
    /* sideship-hide Int 禁用指定边栏链接 */
    let sideShipBtn=document.getElementById("side_ship_"+Math.floor(configDiv.dataset.sideshipHide))
    sideShipBtn.setAttribute("type", "filled-tonal");
    sideShipBtn.setAttribute("clickable", "false");
    sideShipBtn.setAttribute("onclick", "void(0);");
    console.output("Sidebar-btn被配置Div隐藏\n"+"side_ship_"+Math.floor(configDiv.dataset.sideshipHide));
  };
  if (configDiv.hasAttribute("data-title")) {
    /* title Str 强制覆写UI标题 */
    setUItitle(configDiv.dataset.title);
    console.output("UItitle被覆写\nUItitle.innerHTML"+configDiv.dataset.title);
  };
  if (!!configDiv.dataset.redirect) {
    /* redirect 重定向中间页 */
    let redirectInfo=document.getElementById("redirectInfo");
    if (!redirectInfo) {redirectInfo=``;} else {redirectInfo=redirectInfo.innerHTML;};
    contentBG.innerHTML=`<div style="display: grid;width:100vw;height:100%;place-items: center;" class="unselectable" id="redirectDiv"><center style="width:100vw;"><div id="redirectTitle">正在跳转……</div><br><s-linear-progress id="redirectProcess" style="width:50%;margin: 0.2ch 0 0.2ch 0" value="0" max="100" animated="true" indeterminate="true"></s-linear-progress><br>${redirectInfo}</center></div>`;
    const redirectDiv=document.getElementById("redirectDiv");
    redirectDiv.style.height=`${document.body.scrollHeight-2*appbar.offsetHeight}px`;
    window.addEventListener('resize',() => {/*当窗口大小改变时也要重算高度*/
      redirectDiv.style.height = `${document.body.scrollHeight-2*appbar.offsetHeight}px`;
      console.output("重算redirectDiv\nredirectDiv.style.height="+redirectDiv.offsetHeight+"px");
    });
    /*处理跳转缓冲期动画*/
    setTimeout(()=>{
      document.getElementById("redirectTitle").innerHTML=`✓ 已跳转`;
      document.getElementById("redirectProcess").indeterminate=false;
    },1400);
    setTimeout(()=>{
      document.getElementById("redirectProcess").value=100;
    },1600);
    setTimeout(()=>{
      openURL(configDiv.dataset.redirect,true);
    },2200);
    console.output("Redirect中间页模式，目标为"+configDiv.dataset.redirect);
  };
};

//建站时长刷新
/* function RefreshCountup(StartY,StartM,StartD) {
  let now = Date.now();
  let end = new Date(StartY,StartM-1,StartD);
  ends = end.getTime();
  let ss = ends - now;
  let s = Math.floor(ss/1000);
  let day= -1*Math.floor(s / 60 / 60 / 24);
  let hours = -1*Math.floor(s / 60 / 60 % 24);
  let min = -1*Math.floor(s / 60 % 60 );
  let sec = -1*Math.floor(s % 60 );
  timeElement.innerHTML = "<center><small>本站已建立"+day+"天"+hours+"时"+min+"分"+sec+"秒</small></center>";
};  老算法就留着这里吧，反正编译时会删掉注释内容*/
function RefreshCountup(countupY, countupM, countupD) {
  /*计算时间差，JS月份从0开始要减1*/
  let timeDifference = Date.now() - new Date(countupY, countupM - 1, countupD);
  /*转换日期差*/
  let countupD_ = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  let countupH = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let countupM_ = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  let countupS = Math.floor((timeDifference % (1000 * 60)) / 1000);
  /*更新显示*/
  timeElement.innerHTML = `<center><small>本站已建立${countupD_}天${countupH}小时${countupM_}分钟${countupS}秒</small></center>`;
};
if (conf_time[0] && !conf_replaceSidebar) {
  var Timing_intervalID = setInterval(() => {RefreshCountup(conf_time[1],conf_time[2],conf_time[3])}, 1000);
  console.output("启用建站时长计时 loop#"+Timing_intervalID+`\nSince ${conf_time[1]}-${conf_time[2]}-${conf_time[3]}`);
} else {timeElement.remove();};

//a元素新增右上箭头，修改打开位置
if (conf_link_arrow) {
document.querySelectorAll('a').forEach((aElement) => {
  if (conf_link_target_replace&&/\u0e3f/.test(aElement.innerHTML)) {aElement.target="_blank";console.output("为a写入了_blank的target属性");};
  if (conf_link_arrow_replace) {
    aElement.innerHTML=aElement.innerHTML.replace(/[\u2197\u0024\u0e3f]/, conf_link_arrow_icon);
    console.output("为a添加了外链图标 (替换模式)");
    return;
  };
  if (
    /*排除指向章节锚点的链接*/ /#/.test(aElement.src)
    ||/*排除不在新窗口打开的链接*/ aElement.target!="_blank"
  ) {return;};
  aElement.innerHTML=aElement.innerHTML.replace(/\u0e3f/,"")+conf_link_arrow_icon;
  console.output("为a添加了外链图标");
});
};

//code元素新增复制到剪贴板按钮
function selectAllTextInElement(element) {
  /*选中一个元素内所有的文本*/
  let range = document.createRange();
  range.selectNodeContents(element);
  let selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
};
function copyBtnDone(copyBtn, text) {
  /*copyBtn点击后动画*/
  console.output("CodeCopyBtn状态改变至「触发」");
  copyBtn.setAttribute("type","filled-tonal");
  let originalInnerHtml=copyBtn.innerHTML;
  copyBtn.innerHTML=`<s-icon type="done" slot="start"></s-icon>${conf_codeCopyBtn_tip_done}`;
  setTimeout(()=>{
    copyBtn.setAttribute("type","elevated");
    copyBtn.innerHTML=`<s-icon slot="start"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"></path></svg></s-icon>${conf_codeCopyBtn_tip}`;
    if (text==window.getSelection().toString()) {
      console.output("CodeCopyBtn状态改变时用户选中文本未改变，已清空");
      window.getSelection().removeAllRanges();
    };
    console.output("CodeCopyBtn状态改变至「未激活」");
  },5000);
};
if (conf_codeCopyBtn) { /*添加Copy按钮并添加绑定*/
document.querySelectorAll('code').forEach((codeElement) => {
  if (/*不是代码块就跳过*/
    (codeElement./*检查语法高亮是否存在*/querySelectorAll('span').length == 0)
    && !(codeElement.parentNode && codeElement.parentNode.nodeName === 'PRE')
  ) {return;};
  codeElement.parentNode.parentNode.parentNode.style.margin="5px 0 5px 0";
  console.output("为Code添加CodeCopyBtn");
  codeElement.classList.add("processed");/*添加标志位*/
  /*为CopyBtn添加属性*/
  let copyCodeBtn = document.createElement('s-chip');
  copyCodeBtn.setAttribute("type","elevated");
  copyCodeBtn.setAttribute("class","font-default");
  copyCodeBtn.setAttribute("clickable","true");
  if /*检查Cilpboard API状态*/ (!navigator.clipboard) {copyCodeBtn.setAttribute("clickable","false");console.output("Clipboard API：不存在此方法");};
  copyCodeBtn.innerHTML=`<s-icon slot="start"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"></path></svg></s-icon>${conf_codeCopyBtn_tip}`;
  /*添加事件绑定*/
  copyCodeBtn.addEventListener('click',() => {
    window.getSelection().removeAllRanges();
    /*先选中代码块内全部代码，再利用Cilpboard API写入已经选中的内容，从而实现保留格式的代码复制*/
    selectAllTextInElement(copyCodeBtn.parentElement.querySelectorAll("code")[0]);
    navigator.clipboard.writeText(window.getSelection().toString()).then(
      function () {/* clipboard successfully set */
        console.output("Clipboard API返回「✓已写入剪贴板」");
        copyBtnDone(copyCodeBtn,window.getSelection().toString());
      },function () {/* clipboard write failed */
        msg("没有授予剪贴板权限…", "好", true);
        console.output("Clipboard API返回「×无法写入剪贴板」");
      },
    );
  });
  /*将准备完成的CopyBtn插入到代码块中*/
  codeElement.parentNode.insertBefore(copyCodeBtn, codeElement.nextSibling);
});};

//向复制内容末尾添加版权声明
if (!!conf_copy_endnote) {
  endnote=conf_copy_endnote
    /*占位符替换*/
    .replace(/%LINK%/,window.location)
    .replace(/%TITLE%/,UIt.innerHTML)
    .replace(/%ETITLE%/,title.innerHTML);
  console.output("覆写复制操作处理\nendnote="+endnote);
document.addEventListener('copy', async (event) => {
  /*没什么用先注释掉
  event.preventDefault();*/
  try {
    console.output("向复制文本末尾追加endnote\nOriginText="+window.getSelection().toString());
    await navigator.clipboard.writeText(window.getSelection().toString() + endnote);
    msg(`已复制文本，请注意遵守授权协议${conf_licen}。`,`好`);
  } catch (err) {
    console.output('无法复制文本: '+ err)
    msg("复制失败：无法访问剪贴板。","好",true);
  }
});};
function /*阻止一些常见的oncopy覆写*/preventCopyEventOverWrite() {
  msg("您正在使用解除复制限制相关脚本，但请注意本站点不会限制您的复制行为，修改复制行为仅为添加版权提示尾注。","好",true);
};
if (conf_prenevtOnclickOverwrite) {
  if (!(typeof removeCopyEvent == 'function')) {
    Object.defineProperty(window, 'removeCopyEvent', {value: function() {preventCopyEventOverWrite();},writable: false});
  } else {preventCopyEventOverWrite();};
};

//图片信息页功能
document.getElementById("img_dialog_btn").addEventListener("click",()=>{
  /*imgView按钮点击后隐藏*/
  img_dialog.setAttribute("style","display:none;");
  img_dialog.dismiss();
  console.output("imgView关闭");
});
document.getElementById("img_dialog_open_btn").addEventListener("click",()=>{
  /*imgView查看原图按钮*/
  if ((/ax1x\.com/.test(img_dialog_img.dataset.originSrc)) && (conf_imgView_imgse_noRes)) {openURL(`https://imgse.com/i/`+img_dialog_img.dataset.originSrc.split("/").pop().split(".")[0]);} else {openURL(img_dialog_img.dataset.originSrc);};
  img_dialog.setAttribute("style","display:none;");
  img_dialog.dismiss();
  console.output("imgView关闭（查看原图）");
});
if (!conf_imgView_open) {document.getElementById("img_dialog_open_btn").remove();};
document.querySelectorAll('img').forEach((imgElement) => {
  imgElement.addEventListener("load",()=>{/*图片加载完成后重算滚动条高度*/
    if (imgElement.dataset.status=="error") {return;};
    imgElement.dataset.originSrc=imgElement.src;
    imgElement.dataset.status=="loaded";
    resetDrawerHeight();
  });
  imgElement.onerror= ()=>{/*图片加载出错则更换为错误图片占位符*/
    if (imgElement.dataset.status=="error") {
      msg("坏链占位符图片加载错误，请联系站长处理","好",true);
      console.warn("错误：无法加载图片加载错误占位符图片。\n conf_img_error_replace="+conf_img_error_replace);
      return;
    };
    imgElement.dataset.status="error";
    imgElement.dataset.originSrc=imgElement.src;
    imgElement.src=conf_img_error_replace;
    console.output("某个图片加载失败\nsrc="+imgElement.src);
  };
  /*添加文档流图片点击后放大事件*/
  imgElement.classList.add("processed");
  if (conf_imgView_imgse) {
    imgElement.addEventListener("click",function (){
      openImgView(imgElement.dataset.originSrc.replace(/\.md\./,"."),imgElement.title,imgElement.alt,imgElement.dataset.originSrc,imgElement);
    });
  } else {
    imgElement.addEventListener("click",function(){
      openImgView(imgElement.dataset.originSrc,imgElement.title,imgElement.alt,imgElement.dataset.originSrc,imgElement);
    });
  };
  console.output("向img添加了imgView绑定");
});
function openImgView(imgsrc, imgTitle, imgAlt, originSrc, imgElement) {
  /*以指定uri打开imgView*/
  img_dialog_img.onload=null;
  img_dialog_img.onerror=null;
  if (/*如果图片加载失败不再继续使用当前src*/imgElement.dataset.status == "error"
      ) {
    /*不再继续打开图片，而是重新加载图片*/
    imgElement.dataset.status="reloading";
    imgElement.src=originSrc;
    console.output("尝试重新加载出错图片\nOriginSrc="+originSrc);
    resetDrawerHeight();
    /*提示好像不是很好，ban了先 
    if (!conf_imgView||(imgElement.dataset.uiImg=="true")) {return;};
    msg("此图片加载失败，正在重新加载……","好",true);*/
  };
  if (!(
    /*配置文件中未启用查看大图时直接取消后续执行*/!conf_imgView
    /*是UI图片也取消执行*/||(imgElement.dataset.uiImg=="true")
  )) {
    img_dialog_img.src=imgsrc;
    img_dialog_img.dataset.originSrc=imgsrc;
    let imgFileName=imgsrc.split("/").pop().split("\\").pop();
    if (!imgTitle) {
      img_dialog_p.innerHTML=`<b><big class="selectable">${imgFileName}</big></b><br>`;
    } else {
      img_dialog_p.innerHTML=`<b><big class="selectable">${imgTitle}</big></b><br><small>${imgFileName} | </small>`;
    }
    let imgInfo="";
    img_dialog_img.onload=function() {
      imgInfo=img_dialog_img.naturalHeight+`×`+img_dialog_img.naturalWidth;
      img_dialog_p.innerHTML+=`<small>${imgInfo} | 以<a href="${conf_licen_link}">${conf_licen}</a>协议提供</small><br><p class="selectable">${imgAlt}</p>`;
      console.output("imgView被打开\nimgsrc="+imgsrc+"\nimgFileName="+imgFileName+"\nimgTitle="+imgTitle+"\nimgInfo="+imgInfo);
    };
    img_dialog_img.onerror=function() {
      img_dialog_p.innerHTML+=`<small>无法获取图片信息 | 以<a href="${conf_licen_link}">${conf_licen}</a>协议提供</small><br><p class="selectable">${imgAlt}</p>`;
      console.output("imgView被打开\nimgsrc="+imgsrc+"\nimgFileName="+imgFileName+"\nimgTitle="+imgTitle+"\nimgInfo= [[获取失败]]");
      img_dialog_img.onload=null;
      img_dialog_img.src=conf_img_error_replace;
    };
    img_dialog.show();
    img_dialog.setAttribute("style","");
    return;
  };
};

//修改Scroll-View到真实高度
resetDrawerHeight();

//移除old_menu
if (!!document.getElementById("old_menu")) {document.getElementById("old_menu").remove();};
