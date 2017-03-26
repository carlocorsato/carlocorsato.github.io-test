---
layout: page
permalink: /research/
title: Research
excerpt: Research
search_omit: false
---

<a name="researchnews"></a>
# Latest Articles
{: .no_toc}

<ul class="post-list">
{% for post in site.categories.latest_articles %}
  <li><latest_articles><a href="{{ site.url }}{{ post.url }}">{{ post.title }} <span class="entry-date"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time></span>{% if post.excerpt %} <span class="excerpt">{{ post.excerpt | remove: '\[ ... \]' | remove: '\( ... \)' | markdownify | strip_html | strip_newlines | escape_once }}</span>{% endif %}</a></latest_articles></li>
{% endfor %}
</ul>

<hr>

<a name="researchtoc"></a>
{% include toc-box title="Focus Topics" icon="file-text" %}

<br>

<a name="theme1"></a>
## Theme 1 (Manuscipts)
Here your description of 50 words
<br>
Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede.

<div class="btn-container">
<div class="left" markdown="0"><a href="#manuscript1" class="btn2">MANUSCRIPT 1</a></div>
<div class="center" markdown="0"><a href="#manuscript2" class="btn2" >MANUSCRIPT 2</a></div>
<div class="right" markdown="0"><a href="#manuscript3" class="btn2">MANUSCRIPT 3</a></div>
</div>


<a href="#researchtoc"><i class="fa fa-chevron-up fa-lg fa-pull-right"></i></a> <a href="#top"><i class="fa fa-angle-double-up fa-1x fa-pull-left"></i></a>
<hr>

<a name="manuscript1"></a>
#### Manuscript 1


Here your description of 50 words
<br>
Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede.

##### Related Articles
{: .no_toc}
<ul class="post-list">
{% for post in site.categories.manuscript1 %}
  <li><manuscript1><a href="{{ site.url }}{{ post.url }}">{{ post.title }} <span class="entry-date"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time></span>{% if post.excerpt %} <span class="excerpt">{{ post.excerpt | remove: '\[ ... \]' | remove: '\( ... \)' | markdownify | strip_html | strip_newlines | escape_once }}</span>{% endif %}</a></manuscript1></li>
{% endfor %}
</ul>


<a href="#theme1"><i class="fa fa-chevron-up fa-lg fa-pull-right"></i></a> <a href="#top"><i class="fa fa-angle-double-up fa-1x fa-pull-left"></i></a>
<hr>


<a name="manuscript2"></a>
#### Manuscript 2

Here your description of 50 words
<br>
Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede.

##### Related Articles
{: .no_toc}
<ul class="post-list">
{% for post in site.categories.manuscript2 %}
  <li><manuscript2><a href="{{ site.url }}{{ post.url }}">{{ post.title }} <span class="entry-date"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time></span>{% if post.excerpt %} <span class="excerpt">{{ post.excerpt | remove: '\[ ... \]' | remove: '\( ... \)' | markdownify | strip_html | strip_newlines | escape_once }}</span>{% endif %}</a></manuscript2></li>
{% endfor %}
</ul>


<a href="#theme1"><i class="fa fa-chevron-up fa-lg fa-pull-right"></i></a> <a href="#top"><i class="fa fa-angle-double-up fa-1x fa-pull-left"></i></a>
<hr>

<a name="manuscript3"></a>
#### Manuscript 3

Here your description of 50 words
<br>
Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede.

<a href="#researchtoc"><i class="fa fa-chevron-up fa-lg fa-pull-right"></i></a> <a href="#top"><i class="fa fa-angle-double-up fa-1x fa-pull-left"></i></a>
<hr>



<a name="theme2"></a>
## Theme 2 (Artists & Authors)

Here your description of 50 words
<br>
Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede.

##### Related Articles
{: .no_toc}
<ul class="post-list">
{% for post in site.categories.authors %}
  <li><authors><a href="{{ site.url }}{{ post.url }}">{{ post.title }} <span class="entry-date"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time></span>{% if post.excerpt %} <span class="excerpt">{{ post.excerpt | remove: '\[ ... \]' | remove: '\( ... \)' | markdownify | strip_html | strip_newlines | escape_once }}</span>{% endif %}</a></authors></li>
{% endfor %}
</ul>

<a href="#researchtoc"><i class="fa fa-chevron-up fa-lg fa-pull-right"></i></a> <a href="#top"><i class="fa fa-angle-double-up fa-1x fa-pull-left"></i></a>

<hr>

<a name="theme3"></a>
## Theme 3 (Perspective)

Here your description of 50 words
<br>
Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede.

<a href="#researchtoc"><i class="fa fa-chevron-up fa-lg fa-pull-right"></i></a> <a href="#top"><i class="fa fa-angle-double-up fa-1x fa-pull-left"></i></a>

<hr>
