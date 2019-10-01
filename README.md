# Hydrogen
轻盈、干净

跟随她的脚步，开始你的博客之旅

语言：简体中文 | [English](README-en.md)

![hydrogen](/theme/logo-h.svg)

~~点点~~Star~~来一个好吗！秋梨膏！！~~

# #快速开始

![hydrogen](/theme/a-h.png)

## #准备

打开主题根目录下的`_config.yml`

根据需求修改以下选项：

`title` : 更改你的博客名字

`description` : 更改你的博客描述

`keywords` : 博客关键词(SEO相关)

`baseurl` : 博客所在的目录文件夹，开头需带上`/`，如果为根目录请留空(建议将博客放置在根目录)

`url` : 你的域名，如`atlinker.cn`无需加`http/https://`

`bulidtime` : 博客建立时的时间戳，填写后将自动计算博客建立时间并显示在页脚. [日期转时间戳](https://tool.lu/timestamp/)

`paginate` : 主页中显示的最大文章数，超过设定的数值文章自动归入下一页

`background` : 博客首页主题图片路径

`theme_color` : 博客顶部栏颜色，填颜色代码**但不要带上#号**

`MathJax` : 是否开启MathJax(布尔值)

`author` : 作者名

> 开发者选项
>> `PJAX` : PJAX无刷新加载(布尔值)

## #设置域名

修改根目录下的CNAME文件为你的域名即可

#### 关于主题的基本设置已经完毕~

---

## #友链添加

打开`_data`目录下的`friends.yml`文件，根据文件中模板新添代码即可

---

## #文章置顶

在文章Front Matter添加stickie: true即可

如：

```
 ---
 layout: post
 title: Hi
 stickie: true
 ---
```

## #评论

#### #前提

> 必须确定已阅读[Valine](https://valine.js.org/quickstart.html)文档

配置文件:

`_data/social.yml` : 填写app id和key以及评论的相关信息

`_includes/comments.html` : 评论设置

确保配置无误后修改`_data/social.yml`中的`enable`值由`false`改为`ture`即可

## #写在最后

请花10分钟时间**认真**阅读文档，如还有疑难之处，请提[issues](https://github.com/link9596/hydrogen/issues/new)，我会尽力帮忙

如使用过程有任何疑难Bug，也请提出[issues](https://github.com/link9596/hydrogen/issues/new)！ :+1:

最后，如果喜欢~请给项目点个star:wink:(点star的dalao都超级靓的)

![hydrogen](/theme/author.svg)

![](https://img.shields.io/github/repo-size/link9596/hydrogen?color=%23F8BBD0)
![](https://img.shields.io/github/release/link9596/hydrogen?color=%235C6BC0&label=Version)
