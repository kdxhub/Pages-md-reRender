>---
title: "页面特殊设置项"
description: ""
---

## 概述
页面特殊设置项存于id为`mdRender_config`的`div`元素内。<br>
在md文件内任意一处地方插入以下代码（建议文末）以开启特殊设置。
```html
<div id="mdRender_config"></div>
```

每个配置项都遵循[H5自定义元素属性标准](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/data-*)，即存在以`data-`开头的属性中，例如：<br>
```html
<div id="mdRender_config"
data-sideship-hide="0"
></div>
```
这段代码表示自定义配置`sideship-hide`的值为`0`。<br>
注明`*`号表示这个配置项不是写入`mdRender_config`内的。

## 自定义配置表
### `sideship-hide`
表示要标志的边栏链接的编号。<br>

边栏第2个板块包含站点常用链接，每个链接均以以下格式组成：
```html
<s-chip id="side_ship_X" onclick="openURL('Y')" clickable="true" class="sidebar_btn">Z</s-chip>
```
其中的X即为链接按钮的编号。<br>
当插件检测到`sideship-hide`的值时，就会尝试将对应编号的链接按钮设置为「已点击」状态。<br>

> 如果全局属性`conf_sidebar_links_preventDefault`被设置为`true`，则此页面配置无效。

### `title`
只要存在此配置，强制将Appbar的标题设置为其值，而不从页面中读取。

### `old_menu`*
Pages-md-reRender会自动移除id为`old_menu`的控件。<br>
这有助于您创建一个备用的导航菜单，例如：
```html
<small id="old_menu"><a href="/">首页</a> | <a href="/blogs">Blogs</a> | <a href="/Project">项目合集</a><br></small><small><a href="../../">←返回</a> | 创建：2024-06-05 | 最后更新：2024-06-05</small><br>
```
这会创建一个菜单，但在页面重渲染结束后会被移除。

### `ui-img`*
带有此配置的`img`元素不能被点击查看大图。

<script src="https://unpkg.com/sober@0.4.2/dist/sober.min.js"></script><script src="https://kdxiaoyi.top/Pages-md-reRender/res/pmdrr.js"></script>

### `indexDiv`*
控件id为`indexDiv`的div元素内容会被替换为目录索引。<br>
例如下面这段代码在实际落地页会显示当前文档的目录索引。

```html
<div id="indexDiv"></div>
```

> 需要启用[`conf_index`全局配置项](./global-conf#conf_index)。