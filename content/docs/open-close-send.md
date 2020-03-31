---
id: open-close-send
title: 使用程序控制客服聊天界面
subtitle: 使用程序控制客服聊天界面
permalink: docs/open-close-send.html
prev: hide-launcher.html
next: installation-for-wechat-official-account.html
---


在网站上安装聊天组件代码后，默认情况会显示一个聊天按钮，通过这个聊天按钮，您网站的访客就可以留言或者和您实时会话。您也可以通过网站的 Javascript 程序控制聊天界面的打开、关闭或者自动输入一个消息。

## 打开聊天界面代码


```javascript

window.PP.open();

```

## 关闭聊天界面代码


```javascript

window.PP.close();

```


## 发送消息代码


```javascript

window.PP.send("您好，我想咨询关于退货事项");

```

> 打开聊天组件，默认会显示主页，发送消息则显示会话页面。免费用户不能定制主页上的应用，但是可以开发自己的应用。付费用户可以定制主页应用。默认情况下，主页应用显示的是 PPMESSAGE 的产品信息。
