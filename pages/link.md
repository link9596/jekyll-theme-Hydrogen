---
layout: page
title: Links
tagline: My friends.
permalink: /links.html
---


{% for f in site.data.friends %}
<div class="link-chip-div"><a href="{{f.url}}" target="_blank" class="link-chip ripple">
 <img alt="{{f.describe}}" src="{{f.image}}" class="link-chip-icon"/>
 {% if f.skin %}<img style="filter:opacity(0.8);float:right;height:64px;margin-right:-8px" src="{{f.skin}}" />{% endif %}
 <span title="{{f.describe}}" class="link-chip-title">{{f.name}}</span>
 <p class="link-chip-dc">{{f.describe}}</p></a></div>
{% endfor %}

[返回主页]({{ site.url }})

<hr/>

  {% if site.data.social.valine_comment.enable  == true %}
  <script src="/comment/av-min.js"></script>
  <script src="/comment/Valine.min.js"></script>
  <div id="comments"></div>
  {% include comments.html %}
  {% endif %}
  {% include scripts.html %}
