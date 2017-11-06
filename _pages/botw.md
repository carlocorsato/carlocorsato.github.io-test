---
layout: page
permalink: /botw/
title: Book of the Week
excerpt: "Thinking3D - Book of the Week Reviews about any publications exploring the development of the techniques used to communicate three-dimensional forms in two-dimensional media"
search_omit: true
---


<a name="bookoftheweek"></a>

**CALL FOR BLOG ENTRIES** --- **[#T3D_BoftheW](https://twitter.com/T3D2019)**

Fancy the idea of getting involved in *Thinking 3D*?
<br>
<br>
We welcome submissions of blog entries (200/250 words) on a book of your choice focusing on the techniques used by the illustrator to communicate three-dimensional forms and on the relationship between text and image (check out the [**concept**](/about/#concept) inspiring *Thinking 3D*). The book chosen could have been published anytime, from incunabula to contemporary publications. We welcome 3/4 images taken from the book which are relevant for the discussion.
<br>
Blog entries will be published on Wednesdays in our website as well as in our Facebook and Twitter pages.
<br>
<br>
To contribute a blog entry, send a message to <i class="fa fa-facebook-official" aria-hidden="true"></i> [**T3D2019**](https://www.facebook.com/T3D2019/)
<br>
Proposals should include your **name**, **affiliation** (if any), **email address** and an **abstract** of 50 words. Please also add a short 2-3 sentence **bio** and a **photo** of yourself.

---
<br>
<br>
##### T3D_Book of the Week

<ul class="post-list">
{% for post in site.categories.botw %}
  <li><article><a href="{{ site.url }}{{ post.url }}">{{ post.title }} <span class="entry-date"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time></span>{% if post.excerpt %} <span class="excerpt">{{ post.excerpt | remove: '\[ ... \]' | remove: '\( ... \)' | markdownify | strip_html | strip_newlines | escape_once }}</span>{% endif %}</a></article></li>
{% endfor %}
</ul>





---
