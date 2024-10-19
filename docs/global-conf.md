---
title: "全局设置项"
description: ""
---

## 概述
Pages-md-reRender出于尽可能的轻便化目的，将全部的通用配置项写入了`pwd-reRender.min.js`内。<br>
因此您需要编辑您站点上的`pwd-reRender.min.js`（也可能是`pwd-reRender.js`）文件来编辑配置项。

- [边栏](#sidebar)
- [正文](#content)
- [用户交互](#interface)
- [文档属性](#attribute)

## 边栏(Sidebar) {#sidebar}
### `conf_sidebar_links`
其单元块是这样的：
```html
<s-chip id="side_ship_X" onclick="openURL('Y')" clickable="true" class="sidebar_btn">
<s-icon slot="start">插入SVG矢量图片</s-icon>
Z</s-chip>
```

对应了左侧边栏第二个板块内容。<br>
`X`表示该链接序号，`Y`表示点击该链接要打开的页面，`Z`表示要显示的文本。<br>
`<s-icon>`用于插入矢量图片，您也可以删去：
```html
<s-chip id="side_ship_X" onclick="openURL('Y')" clickable="true" class="sidebar_btn">Z</s-chip>
```

无论如何写，`X`的序号用于标识链接编号。<br>
有关于该编号作用，请参阅[页面特殊设置项](./page-conf)。<br>

> 如果您选择自行编写其中的内容，请将[`conf_sidebar_links_preventDefault`](conf_sidebar_links_preventDefault)的值设置为`true`
### `conf_sidebar_links_preventDefault`
参阅[`conf_sidebar_links`](#conf_sidebar_links)。当`conf_sidebar_links`填写不规范时应将此项设置为`true`以避免意外发生。
### `conf_sidebar_headimg_src`
在左侧边栏第一格中显示的图片路径。
### `conf_sidebar_headimg_alt`
在左侧边栏第一格中显示的文字内容。
### `conf_replaceSidebar`
如果这一项不是空字符(`""`)的话，则将左边栏中的全部内容替换为此值。
## 正文(Content) {#content}

## 用户交互(Interface) {#interface}
### `conf_codeCopyBtn`
布尔型数据。是否在所有代码块下方添加一个按钮，以便一键复制代理块中内容。
### `conf_codeCopyBtn_tip`
设置「复制代码」按钮显示的默认文本。
### `conf_codeCopyBtn_tip_done`
在点击「复制代码」后暂时显示的文本。
### `conf_imgView`
### `conf_imgView_imgse`
### `conf_imgView_imgse_noRes`
### `conf_imgView_open`
### `conf_img_error_replace`
### `conf_copy_endnote`
### `conf_link_arrow`
### `conf_link_arrow_replace`
### `conf_link_arrow_icon`
## 文档属性 {#attribute}
### `conf_licen`
### `conf_licen_link`
### `conf_time`
### `conf_saying`

<script src="https://unpkg.com/sober@0.4.2/dist/sober.min.js"></script><script src="https://kdxiaoyi.top/Pages-md-reRender/res/pmdrr.js"></script>