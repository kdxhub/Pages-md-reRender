---
title: "更新日志"
description: "Update Log"
---

参阅Git提交记录（[Gitee](https://gitee.com/kdxiaoyi/Pages\-md\-reRender/commits/master)/[Github](https://gitee.com/kdxhub/Pages\-md\-reRender/commits/master)）。
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