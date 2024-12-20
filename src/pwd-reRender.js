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
const /*启用目录索引侧栏*/conf_index_sidebar=true;
const /*没做好启用无效 | 启用目录统计，高级用法详见文档*/conf_index=true;
const /*没做好启用无效 | 在标题的最后添加一个按钮以复制链接指向这个标题*/conf_headerLinkCopyBtn=true;
const /*在页面底端增加文章脚注，为空不额外添加*/conf_footer=``;
const /*没做好启用无效 同时有做一个页面对应配置的计划 | 要在页面中执行的JS脚本*/conf_otherJS=[];
const /*没做好启用无效 同时有做一个页面对应配置的计划 | 要在页面中执行的CSS文件*/conf_otherCSS=[];

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
      width: 100vw;
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
        <s-scroll-view style="max-height:100%;">
          <div id="sidebar_left" class="sidebar_drawer">
          <!--左侧边栏内容-->
            <s-card type="" class="sidebar_head">
              <div slot="image"><img data-ui-img="true" src="${conf_sidebar_headimg_src}"></div>
              <div slot="headline"><span class='sidebar_username_bg'>${conf_sidebar_headimg_alt}</span></div>
            </s-card><br>
            <s-card type="" class="sidebar_head">${conf_sidebar_links}</s-card><br>
            <s-card type="" class="sidebar_head">
              <div id="saying" class="selectable"><center>${conf_saying}</center></div>
              <div id="time"><center><small>Since 2022-07-19</small></center></div>
              <div id="license"><center><small>以<a href="${conf_licen_link}">${conf_licen}</a>协议提供内容</small></center></div>
            </s-card>
          </div>
        <s-scroll-view>
      </div>
      <div id="sidebar_right_parent" slot="end">
        <s-scroll-view>
          <div id="sidebar_right" class="sidebar_drawer"></div>
        </s-scroll-view>
      </div>
      <div>
        <s-scroll-view id="contentScroll" style="max-height:100%;"><div id="contentBG" class="selectable">
  <!-- 页面重渲染插入代码结束 -->
  `+document.body.innerHTML+`
        <footer class="site-footer unselectable"><hr>${conf_footer}<br><small>Powered by <a href="http://github.com/kdxhub/Pages-md-reRender" target="_blank">kdxiaoyi/Pages-md-reRender</a>.</small></footer>
        </div></s-scroll-view>
      </div>
    </s-drawer>
    <div data-readme="站点管理员插入的额外脚本内容" style="display:none;" id="extraScripts_Global">${extraScripts_Global}</div>
    <div data-readme="页面配置插入的额外脚本内容" style="display:none;" id="extraScripts_Page"></div>
  </s-page>
`;
// 变量、常量定义区
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
const img_dialog_img/*查看大图中的图片元素*/=document.getElementById("img_dialog_img");
const img_dialog_p/*查看大图中文本描述元素*/=document.getElementById("img_dialog_p");
const sidebar/*抽屉边栏总框架元素*/=document.getElementById("sidebar");
const drawer_left/*左边栏框架元素*/=document.getElementById("sidebar_left");
const drawer_right/*右边栏框架元素*/=document.getElementById("sidebar_right");
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
      scrollToTop()
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
function scrollToTop() {
  /*回顶自动清除章节锚点*/
  window.location.hash = "";
  /*计算回顶速度并创建回顶循环*/
  var toTop_interval_speed = -(contentScroll.scrollTop/(80));
  if (toTop_intervalID != -1) {toTop_interval_speed = toTop_interval_speed*1.5;return;};
  toTop_intervalID = setInterval(() => {
    contentScroll.scrollBy(0,toTop_interval_speed);
    console.output("回顶循环#"+toTop_intervalID+"执行操作");
    if (contentScroll.scrollTop == 0) {clearInterval(toTop_intervalID);console.output("回顶循环#"+toTop_intervalID+"操作完成");toTop_intervalID=-1;};
  }, 1);
  console.output("创建新的回顶循环句柄#"+toTop_intervalID);
};
function setUItitle(Title) {UIt.innerHTML=Title;};
function openURL(URL,IsInPresentWindow) {if (IsInPresentWindow != undefined) {link_a.target="_self";} else {link_a.target="_blank";};link_a.href=URL;link_a.click();};

//title动画和回顶按钮显隐
toTopBtn.addEventListener("animationend", (event) => {if (toTopBtn.className == "fadeOut") {toTopBtn.style="display: none;";};});
contentScroll.onscroll = function() {refreshAppbar();};
function refreshAppbar() {
  /*修改UItitle的透明度*/
  if (contentScroll.scrollTop/title_height <= 1.5) {
    UIt.style="opacity:"+(contentScroll.scrollTop/title_height)+";";
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

//侧栏内容覆写
if (!!conf_replaceSidebar) {
  document.getElementById("sidebar_left").innerHTML=conf_replaceSidebar;
  console.output("覆写sidebar内容");
};

//正文内容标题统计与处理
document.querySelectorAll('div#contentBG h1, div#contentBG h2, div#contentBG h3, div#contentBG h4, div#contentBG h5, div#contentBG h6').forEach((HeaderElement) => {
  if (!HeaderElement.id) {/*判断标题元素是否有id，若无则写入一个*/
    let name=`_`+HeaderElement.innerHTML;
    HeaderElement.id=name;
  } else {
    let name=HeaderElement.id;
  };
  if (conf_headerLinkCopyBtn) {};
});


//读取页面标题
setUItitle(title.innerHTML);
console.output("设置UI标题\nUItitle.innerHTML="+title.innerHTML);

//切换侧栏按钮点击
document.getElementById("sidebar_toggle_btn").addEventListener("click",()=>{
  window.getSelection().removeAllRanges();
  sidebar.toggle();
  console.output("切换Sidebar显示");
});

//即动态重算s-drawer的高度
sidebar.style.height = `${document.body.scrollHeight-appbar.offsetHeight}px`;
console.output("重算s-drawer高度\nsidebar.style.height="+sidebar.offsetHeight+"px");
window.addEventListener('resize',() => {/*当窗口大小改变时也要重算高度*/
  sidebar.style.height = `${document.body.scrollHeight-appbar.offsetHeight}px`;
  console.output("重算s-drawer高度\nsidebar.style.height="+sidebar.offsetHeight+"px");
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
  if (conf_link_target_replace&&/\u0e3f/.test(aElement.innerHTML)) {aElement.target="_blank";console.log("为a写入了_blank的target属性");};
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
  event.preventDefault();
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
  if ((/ax1x\.com/.test(img_dialog_img.src)) && (conf_imgView_imgse_noRes)) {openURL(`https://imgse.com/i/`+img_dialog_img.src.split("/").pop().split(".")[0]);} else {openURL(img_dialog_img.src);};
  img_dialog.setAttribute("style","display:none;");
  img_dialog.dismiss();
  console.output("imgView关闭（查看原图）");
});
if (!conf_imgView_open) {document.getElementById("img_dialog_open_btn").remove();};
document.querySelectorAll('img').forEach((imgElement) => {
  imgElement.addEventListener("load",()=>{/*图片加载完成后重算滚动条高度*/
    if (imgElement.dataset.status=="error") {return;};
    imgElement.dataset.originSrc=imgElement.src;
    contentBG.style.height="initial";
    imgElement.dataset.status=="loaded";
    contentBG.style.height=`${contentBG.offsetHeight+appbar.offsetHeight}px`;
    console.output("修改页面真实高度\ncontentBG.style.height="+contentBG.style.height);
  });
  imgElement.addEventListener("error",()=>{/*图片加载出错则更换为错误图片占位符*/
    if (imgElement.dataset.status=="error") {
      msg("坏链占位符图片加载错误，请联系站长处理","好",true);
      console.warn("错误：无法加载图片加载错误占位符图片。\n conf_img_error_replace="+conf_img_error_replace);
      return;
    };
    imgElement.dataset.status="error";
    imgElement.dataset.originSrc=imgElement.src;
    imgElement.src=conf_img_error_replace;
    console.output("某个图片加载失败\nsrc="+imgElement.src);
  });
  /*添加文档流图片点击后放大事件*/
  /*存废行 if (!conf_imgView) {return;};
  if (imgElement.dataset.uiImg=="true") {return;};*/
  imgElement.classList.add("processed");
  if (conf_imgView_imgse) {
    imgElement.addEventListener("click",function (){
      openImgView(imgElement.src.replace(/\.md\./,"."),imgElement.title,imgElement.alt,imgElement.dataset.originSrc,this);
    });
  } else {
    imgElement.addEventListener("click",function(){
      openImgView(imgElement.src,imgElement.title,imgElement.alt,imgElement.dataset.originSrc,this);
    });
  };
  console.output("向img添加了imgView绑定");
});
function openImgView(imgsrc, imgTitle, imgAlt, originSrc, imgElement) {
  /*以指定uri打开imgView*/
  if (/*如果图片加载失败不再继续使用当前src*/imgElement.dataset.status == "error") {
    /*不再继续打开图片，而是重新加载图片*/
    imgElement.dataset.status="reloading";
    imgElement.src=originSrc;
    console.output("尝试重新加载出错图片\nOriginSrc="+originSrc);
    contentBG.style.height=`${contentBG.offsetHeight+appbar.offsetHeight}px`;
    console.output("修改页面真实高度\ncontentBG.style.height="+contentBG.style.height);
    /*提示好像不是很好，ban了先 
    if (!conf_imgView||(imgElement.dataset.uiImg=="true")) {return;};
    msg("此图片加载失败，正在重新加载……","好",true);*/
    return;
  };
  if (
    /*配置文件中未启用查看大图时直接取消后续执行*/!conf_imgView
    /*是UI图片也取消执行*/||(imgElement.dataset.uiImg=="true")
  ) {return;};
  img_dialog_img.src=imgsrc;
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
  };
  img_dialog.show();
  img_dialog.setAttribute("style","");
};

//修改Scroll-View到真实高度
contentBG.style.height=`${contentBG.offsetHeight+appbar.offsetHeight}px`;
console.output("修改页面真实高度\ncontentBG.style.height="+contentBG.style.height);

//移除old_menu
if (!!document.getElementById("old_menu")) {document.getElementById("old_menu").remove();};