---
title: "全局设置项"
description: ""
---

## `conf_sidebar_links`写法
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

> 如果您选择自行编写其中的内容，请将`conf_sidebar_links_preventDefault`的值设置为`true`

<script src="https://unpkg.com/sober@0.4.2/dist/sober.min.js"></script><script src="https://kdxiaoyi.top/Pages-md-reRender/res/pmdrr.js"></script>