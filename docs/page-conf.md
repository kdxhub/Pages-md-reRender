>---
title: "页面特殊设置项"
description: ""
---
##概述
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

<script src="https://unpkg.com/sober@0.4.2/dist/sober.min.js"></script><script src="https://kdxiaoyi.top/Pages-md-reRender/res/pmdrr.js"></script>