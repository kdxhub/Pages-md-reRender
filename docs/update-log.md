---
title: "更新日志"
description: "Update Log"
---

参阅Git提交记录（[Gitee](https://gitee.com/kdxiaoyi/Pages\-md\-reRender/commits/master)/[Github](https://gitee.com/kdxhub/Pages\-md\-reRender/commits/master)）。

## v1.3.0 [17]
> 目前此版本处在<u>Beta预览</u>中，不代表最终效果。

### beta1
* \+ imgView新增加载错误点击重试功能
* \~ imgView现在不会把占位图片作为大图加载了
* \~ 调整了imgView的最大高度以防止页面过长
* \+ 新增了右侧边栏框架
* ~ 修改了边栏抽屉的一些实现
* ~ 修复了建站时长计时出现异常数据的BUG
* ~ 优化建站时长计时代码逻辑
* \+ 新增页面Footer覆写
* \+ 新增redirect页面参数以快速插入重定向页面
* \- 删除部分折叠代码，并增加对应注释

### beta2
* ~ 修改`<img>`的`error`事件方法为`onerror`，以修复imgView中的「错误显示占位图片信息」的bug。
* ~ 修复imgView中的「打开原图会打开占位图片」的bug。
* ~ 修复imgView中的「点击占位图片会导致图片信息栏异常」的bug。
* \+ 添加目录自动读取和显示的功能（`conf_index`）。
* ~ 修改`#contentBG`的宽度，改用`%`定位。
* \+ 新增函数`scrollToHash(goalHash)`，用于滚动到指定章节锚点。
* ~ 将部分重复调用的API写到一起。
* ~ 修复了章节锚点跳转后Drawer异常布局问题。
* \- 现在向复制内容添加尾注时不再阻止默认事件触发，以修复在部分浏览器上无法复制内容的问题。

### beta3
* ~ 重命名仓库中一处错误文件名（`src/pwd-reRender.js`→`src/pmd-reRender.js`）。
* ~ 修改一处异常的控制台日志输出。
* \+ 现在目录树会被写入到id为`index_overwrite`的`<div>`元素中，见于[此处](./global_conf#conf_index)。
* \+ 新增引用块（`<blockquote>`）的高级语法，见于[此处](./global_conf#conf_quotepro)。
* ~ 优化目录板块表现。
* \+ 新增点击标题复制链接功能。

## v1.2.0 [16]
* \+ 为左侧边栏添加了滚动条以适应高度不够的页面下左边栏内容
* ~ 完善左侧边栏覆写
* \+ 新增฿符号来修改链接为新标签页打开
* \+ 新增防止解除复制限制类脚本影响复制内容尾注的添加
* ~ 优化Debug()函数
* ~ 将部分console.log迁移到console.output上

## v1.1.1 [15]
* \+ 新增a链接外链图标自动添加功能
* \+ 现在没有语法高亮的代码块也会被添加copyBtn了
* \+ 为代码块增加边框
* \+ 新增old_menu页面设置

## v1.1.0 [14]
* ~ 优化部分代码执行流程
* \+ 新增复制文本追加文本这一可选功能
* \+ 现在不启用建站计时时会自动删除元素
* \+ 在图片加载完成后会重算页面滚动条高度
* ~ 现在加载出错占位符图片也出错时不会再陷入死循环了
* \+ 将图片加载出错替换图片这一设置独立出来
* \- 移除hashchange=>重绘appbar功能
* \+ 按@apprat大佬建议新增s\-drawer高度动态重算，以完美解决s\-appbar消失的问题
* \+ 现在查看大图会识别Alt属性了

# 过于老旧的更新
这部分更新内容因为早于此仓库建立而被合并列出；换句话说，这些并不是发行版本。<br>
版本范围：从最初的版本到v1.0.13 [13]。
## v1.0.13 [13]
* \+ 现在会在图片加载完成后重新计算contentBG的高度
* \+ 增加图片出错处理
* \- 删除old_menu移除功能

## v1.0.12 [12]
* \- 现在单行代码块不再会插入Copy按钮了
* \+ 新增图片放大查看功能
* \+ 新增自适应深色模式
* \+ 为部分功能添加console.output调试输出
* ~ 将部分功能独立为全局配置以便后续修改

## v1.0.11 [11]
* \+ 新增复制代码块按钮
* ~ 优化页面scroll\-view高度计算顺序
* \+ 将refreshAppbar函数封装

## v1.0.10 [10]
* \+ 新增msg()可选参数isWarning
* ~ 优化代码结构

## v1.0.9 [9]
* \+ 新增调试模式
* ~ 回顶按钮现在会清空Hash(#)值了
* ~ 优化部分逻辑，提升页面性能

## v1.0.8 [8]
* \+ 新增old_menu移除
* ~ 修复当前站点路径检测失效问题

## v1.0.7 [7]
* ~ 修复#contentBG高度不符合实际高度的问题
* \- 减少不必要的重绘，优化页面性能
* \+ 修复使用#:~:text=导致的页面布局异常
* ~ 优化重渲染加载逻辑
* \+ 新增config div检测与应用

## v1.0.6 [6]
* ~ 修复无限刷新bug

## v1.0.5 [5]
* ~ 修复了章节锚点跳转后Appbar异常布局问题
* ~ 修复了首次加载页面无法触发URI内章节锚点跳转问题
* \+ 为UItitle新增淡入淡出动画

## v1.0.4 [4]
* \+ 新增均时回顶动画

## v1.0.3 [3]
* \+ 新增回顶按钮动画
* \- 移除了返回按钮
* \+ sidebar新增建站时间和格言
* \+ 新增UItitle自读取
* ~ 修复scroll\-view错误的实现方法

## v1.0.2 [2]
* ~ 完善Appbar和Sidebar(Drawer)

## v1.0.1 [1]
* 新鲜出炉的版本~

<script src="https://unpkg.com/sober@0.4.2/dist/sober.min.js"></script><script src="https://kdxiaoyi.top/Pages-md-reRender/res/pmdrr.js"></script>