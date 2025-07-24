---
title: "Pages-md-reRender"
description: "一款极其轻量且低侵入的Github Pages主题"
---

# 严重警告
**此系列文档已严重过时，且包含很多错误，不建议继续阅读**

# 开始使用
开始使用Pages-md-reRender十分简单，您仅需完成若干步骤。<br>
* 将脚本文件存放到您站点的Script目录内。
  * 你可以在[Gitee.](https://gitee.com/kdxiaoyi/Pages-md-reRender/blob/master/src/pmd-reRender.min.js)或[Github](https://github.com/kdxhub/Pages-md-reRender/blob/master/src/pmd-reRender.min.js)找到这个文件
* 之后，在您的Markdown文件**末尾**插入以下代码：
```html
<script src="https://unpkg.com/sober@0.4.2/dist/sober.min.js"></script>
<script src="您站点上的pwd-reRender.min.js文件"></script>
```
* 接着，将CSS文件存放到您站点的Style目录下。
  * `background.css`可以在[Gitee](https://gitee.com/kdxiaoyi/Pages-md-reRender/blob/master/src/background.css)或[Github](https://github.com/kdxhub/Pages-md-reRender/blob/master/src/background.css)上找到。
  * `SoberJS`所使用的CSS可以使用[官方工具](https://soberjs.com/style/theme-builder)在线生成，或者使用[现成的CSS文件](https://gitee.com/kdxiaoyi/Pages-md-reRender/blob/master/src/sober-theme-turquoise.css)。<br>你也需要将这个文件的路径设置到[全局配置项`conf_soberTheme`](./global-conf#conf_soberTheme)中。
* 根据[Github Doc](https://docs.github.com/zh/pages/setting-up-a-github-pages-site-with-jekyll/adding-a-theme-to-your-github-pages-site-using-jekyll#customizing-your-themes-css)，您需要在Pages根目录下创建`/assets/css/style.scss`文件并加入以下内容：

```scss
---
---

@import "{ site.theme }";/*由于未知原因，这里的花引号应该是两对，请手动添加*/
@import "SoberJS css路径";
@import "background.css文件路径";
```

> 绝大部分的Pages-md-reRender所需的css都是定义在代码内的，因此你也可以尝试不引入`background.css`，但这样您需要自行处理深色模式适配。

> 目前适配SoberJS `0.4.2`版本。使用不期的版本可能导致未知问题。

# 在此之后…
也许你注意到了，站点上一些数据均为默认值，想要自定义。<br>
请打开保存到您站点上的`pmd-reRender.min.js`文件，按照提示编辑设置项。

有关于这些设置项的用法，请参阅[全局设置项](./global-conf)。<br>
对于部分设置，支持[页面特殊设置项](./page-conf)。

<div id="mdRender_config" data-sideship-hide="0"></div>
<script src="https://unpkg.com/sober@0.4.2/dist/sober.min.js"></script><script src="https://kdxiaoyi.top/Pages-md-reRender/res/pmdrr.js"></script>