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
### `conf_index`
启用这个配置后会自动计算当前文档的目录索引，更多可参考[`indexDiv`页面配置项](./page-conf#indexDiv)。
### `conf_index_sidebar`
启用文档目录索引侧栏。需要启用`conf_index`。

## 用户交互(Interface) {#interface}
### `conf_codeCopyBtn`
布尔型数据。是否在所有代码块下方添加一个按钮，以便一键复制代理块中内容。
### `conf_codeCopyBtn_tip`
设置「复制代码」按钮显示的默认文本。
### `conf_codeCopyBtn_tip_done`
在点击「复制代码」后暂时显示的文本。
### `conf_imgView`
是否启用「查看原图」功能。
### `conf_imgView_imgse`
启用后对[imgse图床](//imgse.com)进行特别优化：
* 自动去除`.md.`后缀

### `conf_imgView_imgse_noRes`
启用后对于[imgse图床](//imgse.com)的图片，查看原图会跳转到imgse的图片详情页而不是直接打开源文件。<br>
需要`conf_imgView_open`。
### `conf_imgView_open`
启用后在查看原图中新增打开源文件按钮。
> 如果您禁用此功能，用户仍然可以通过右键图片来打开原图。

### `conf_img_error_replace`
图片加载失败时使用这个URL指向的图片进行替换占位。
### `conf_copy_endnote`
在用户复制的文本末尾添加的尾注内容，为空时可以禁用这个功能。<br>
这里支持变量填充符：

| 变量 | 内容 |
|-|--|
| `%LINK%` | 指代页面链接|
| `%TITLE%` | 指代标题 |
| `%ETITLE%` | 指代文章标题<br>区别在于前者是标题栏的标题，后者是检测到的文章标题。 |
| `${}` | 引用页面中已有的配置项<br>例如`${conf_licen}`可以指代授权协议 |

### `conf_prenevtOnclickOverwrite`
启用后会阻止一些简易的反复制限制脚本的工作。

> **不建议您使用任何技术措施来限制用户使用复制功能**，Pages-md-Render也永远不会加入限制用户复制内容的相关功能。。

### `conf_link_arrow`
在指向新标签页的链接后方添加一个右上箭头。
### `conf_link_arrow_replace`
更改`conf_link_arrow`的工作模式：
* 忽略链接指向的是新标签页或是当前页面
* 将链接文本里面含有的U+2197(`↗`)或U+0024(`$`)字符替换为右上箭头。

### `conf_link_target_replace`
启用后，如果链接文本内含有U+0E3F(`฿`)字符，则将其修改为在新标签页打开。
### `conf_link_arrow_icon`
定义链接右上小箭头应该被替换为什么。
## 文档属性 {#attribute}
### `conf_licen`
设置文档的版权协议。
### `conf_licen_link`
设置版权协议的详情链接。
### `conf_time`
建站时长计时设置。<br>
这个数组由4个元素组成：

```text
[
  是否启用 布尔值
  ,年 正整数
  ,月 正整数
  ,日 正整数
]
```

如果启用，则会在左侧栏第三板块中看到距离设定的日期所过天数。
### `conf_saying`
在左侧栏第三板块内展示的座右铭。

<script src="https://unpkg.com/sober@0.4.2/dist/sober.min.js"></script><script src="https://kdxiaoyi.top/Pages-md-reRender/res/pmdrr.js"></script>