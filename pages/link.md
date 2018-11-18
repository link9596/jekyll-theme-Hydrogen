---
layout: page
title: Links
tagline: My friends.
permalink: /links.html
---

## #友链申请

可以在下方留言板评论即可申请本站友链! quq~

**格式**

> 名称: Link
>
> 链接: https://atlinker.cn
>
> 头像: https://atlinker.cn/avatar/avatar.png
>
> 描述: Just 4 Fun

本站的友链将按**时间顺序**排列

喜欢更接近日常一点的博客，欢迎各位博主添加友链! 

(* /ω＼*)

{% for f in site.data.friends %}
<div class="link-chip">
 <img alt="{{f.describe}}" src="{{f.image}}" class="link-chip-icon">
 <a title="{{f.describe}}" target="_blank" class="link-chip-title" href="{{f.url}}">{{f.name}}</a>
</div>
{% endfor %}

[返回主页]({{ site.url }}{{ site.baseurl }})

<hr/>

  {% if site.data.social.valine_comment.enable  == true %}
  <script src="/comment/av-min.js"></script>
  <script src="/comment/Valine.min.js"></script>
  <div id="comments"></div>
  {% include comments.html %}
  {% endif %}
  {% include scripts.html %}
