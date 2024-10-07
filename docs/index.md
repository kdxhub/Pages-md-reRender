---
title: "Pages-md-reRender"
description: "一款极其轻量且低侵入的Github Pages主题"
---
# 开始使用
开始使用Pages-md-reRender十分简单，只需将`pmd-reRender.min.js`引用到您的Markdown文件末尾：<br>
* 将该文存放到您站点的Script目录内
  * 你可以在
* 之后，在您的Markdown文件**末尾**插入以下代码：
```html
<script src="https://unpkg.com/sober@0.4.2/dist/sober.min.js"></script>
<script src="您站点上的pwd-reRender.min.js文件"></script>
```
* 将更改后的文件上传到Github Pages仓库上
* 打开站点，大工告成！

> 目前适配SoberJS `0.4.2`版本。

# 在此之后…
也许你注意到了，站点上一些数据均为默认值，想要自定义。<br>
请打开保存到您站点上的`pmd-reRender.min.js`文件，按照提示编辑设置项。

有关于这些设置项的用法，请参阅[全局设置项](./global-conf)。<br>
对于部分设置，支持[页面特殊设置项](./page-conf)。

<div id="mdRender_config"
data-sideship-hide="0"
></div>
<script src="https://unpkg.com/sober@0.4.2/dist/sober.min.js"></script><script src="https://kdxiaoyi.top/Pages-md-reRender/res/pmdrr.js"></script>