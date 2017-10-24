---
layout: page
permalink: /events/
title: Events
excerpt: Events
search_omit: true
---


<a name="eventsnews"></a>
### What's On
{: .no_toc}

<ul class="post-list">
{% for post in site.categories.latest_events %}
  <li><latest_events><a href="{{ site.url }}{{ post.url }}">{{ post.title }} <span class="entry-date"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time></span>{% if post.excerpt %} <span class="excerpt">{{ post.excerpt | remove: '\[ ... \]' | remove: '\( ... \)' | markdownify | strip_html | strip_newlines | escape_once }}</span>{% endif %}</a></latest_events></li>
{% endfor %}
</ul>

<hr>
<br>


<a name="eventstoc"></a>
## T3D - Events
{: .no_toc}

* TOC
{:toc}

<hr>

<a name="exhibit1"></a>
#### Event 1

Here your description of 50 words
<br>
Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede.

##### Related News
{: .no_toc}
<ul class="post-list">
{% for post in site.categories.event1 %}
  <li><event1><a href="{{ site.url }}{{ post.url }}">{{ post.title }} <span class="entry-date"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time></span>{% if post.excerpt %} <span class="excerpt">{{ post.excerpt | remove: '\[ ... \]' | remove: '\( ... \)' | markdownify | strip_html | strip_newlines | escape_once }}</span>{% endif %}</a></manuscript1></li>
{% endfor %}
</ul>

<a href="#eventstoc"><i class="fa fa-chevron-up fa-lg fa-pull-right"></i></a> <a href="#top"><i class="fa fa-angle-double-up fa-1x fa-pull-left"></i></a>
<hr>

<a name="event2"></a>
# Event 2

Here your description of 50 words
<br>
Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede.

<a href="#eventstoc"><i class="fa fa-chevron-up fa-lg fa-pull-right"></i></a> <a href="#top"><i class="fa fa-angle-double-up fa-1x fa-pull-left"></i></a>
<hr>

<a name="event3"></a>
# Event 3

Here your description of 50 words
<br>
Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede.

<a href="#eventstoc"><i class="fa fa-chevron-up fa-lg fa-pull-right"></i></a> <a href="#top"><i class="fa fa-angle-double-up fa-1x fa-pull-left"></i></a>
<hr>
