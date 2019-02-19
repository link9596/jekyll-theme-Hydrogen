# hydrogen
轻盈、干净

跟随她的脚步，开始你的博客之旅

# #快速开始

## #准备

打开主题根目录下的`_config.yml`

根据需求修改以下选项：

`title` : 更改你的博客名字

`description` : 更改你的博客描述

`keywords` : 博客关键词(SEO相关)

`show_comment` : 文章评论开关，开启评论请填写`ture`，否则`false`

`baseurl` : 博客所在的目录文件夹，开头需带上`/`，如果为根目录请留空(建议将博客放置在根目录)

`url` : 你的域名

`bulidtime` : 博客建立时的时间戳，填写后将自动计算博客建立时间并显示在页脚. [日期转时间戳](https://tool.lu/timestamp/)

`paginate` : 主页中显示的最大文章数，超过设定的数值文章自动归入下一页

#### 关于主题的基本设置已经完毕~

---

## #友链添加

打开`_data`目录下的`friends.yml`文件，根据文件中模板新添代码即可

---

## #评论

#### #前提

> 必须确定已阅读[Valine](https://valine.js.org/quickstart.html)文档

配置文件:
`_data/social.yml` : 填写app id和key以及评论的相关信息
`_includes/comments.html` : 评论设置

---

## #博客首页图片

在`_sass/hydrogen-blog.scss`的第104行将`background: url("/theme/hydrogen-ss.png")`中的路径修改即可

