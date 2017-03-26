---
layout: post
permalink: /sample/
title: Article with images and videos
excerpt: Article with images
date: 2017-03-20 12:00
modified: 2017-03-23 12:00
categories:
- latest_articles
- manuscript1
- author1
tags: [sample-article, research, perspective, whatever]
author: t3d
---
Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.

**Single Image**

<figure>
 <img src="{{ site.url }}/assets/images/barbaro.jpg" alt="barbaro">
 <figcaption><b>Paolo Veronese</b>, <i>Portrait of Daniele Barbaro</i>, oil on canvas, Rijksmuseum, Amsterdam</figcaption>
</figure>

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.

<a href="#top"><i class="fa fa-chevron-up fa-lg fa-pull-right"></i></a> <a href="#top"><i class="fa fa-angle-double-up fa-1x fa-pull-left"></i></a>
<hr>

**Linking image**

{% capture fig_img %}
[![Foo]({{ site.url }}/assets/images/barbaro.jpg)](http://www.nationalgallery.org.uk/whats-on/exhibitions/the-credit-suisse-exhibition-michelangelo-sebastiano)
{% endcapture %}

<figure>
  {{ fig_img | markdownify | remove: "<p>" | remove: "</p>" }}
</figure>

<hr>

**Linking image + caption with a link**
{% capture fig_img %}
[![Foo]({{ site.url }}/assets/images/barbaro.jpg)](http://www.nationalgallery.org.uk/whats-on/exhibitions/the-credit-suisse-exhibition-michelangelo-sebastiano)
{% endcapture %}

{% capture fig_caption %}
<b>Paolo Veronese</b>, <i>Portrait of Daniele Barbaro</i>, oil on canvas, <a href="https://www.rijksmuseum.nl/en/collection/SK-A-4011">Rijksmuseum, Amsterdam</a>
{% endcapture %}

<figure>
  {{ fig_img | markdownify | remove: "<p>" | remove: "</p>" }}
  <figcaption>{{ fig_caption | markdownify | remove: "<p>" | remove: "</p>" }}</figcaption>
</figure>

<hr>

**Contrasting two images**

<figure class="half">
	<img src="/assets/images/barbaro.jpg" alt="barbaro">
	<img src="https://upload.wikimedia.org/wikipedia/commons/d/da/DURER1.png" alt="duerer">
	<figcaption>Caption describing these two images.</figcaption>
</figure>

<hr>

**Contrasting three images**
<figure class="third">
	<img src="{{ site.url }}/assets/images/barbaro.jpg" alt="barbaro">
	<img src="https://upload.wikimedia.org/wikipedia/commons/d/da/DURER1.png" alt="duerer">
  <img src="http://www.rgs.mef.gov.it/export/sites/sitoRGS/rgsimages/lucapacioli.jpg" alt="pacioli">
	<figcaption>Caption describing these three images.</figcaption>
</figure>

<hr>

**Gallery**

<figure class="third">
	<img src="https://upload.wikimedia.org/wikipedia/commons/d/da/DURER1.png" alt="duerer">
	<img src="https://upload.wikimedia.org/wikipedia/commons/d/da/DURER1.png" alt="duerer">
  <img src="https://upload.wikimedia.org/wikipedia/commons/d/da/DURER1.png" alt="duerer">
  <img src="https://upload.wikimedia.org/wikipedia/commons/d/da/DURER1.png" alt="duerer">
	<img src="https://upload.wikimedia.org/wikipedia/commons/d/da/DURER1.png" alt="duerer">
  <img src="https://upload.wikimedia.org/wikipedia/commons/d/da/DURER1.png" alt="duerer">
  <img src="{{ site.url }}/assets/images/barbaro.jpg" alt="barbaro">
  <img src="{{ site.url }}/assets/images/barbaro.jpg" alt="barbaro">
  <img src="{{ site.url }}/assets/images/barbaro.jpg" alt="barbaro">
  <img src="{{ site.url }}/assets/images/barbaro.jpg" alt="barbaro">
  <img src="{{ site.url }}/assets/images/barbaro.jpg" alt="barbaro">
  <img src="{{ site.url }}/assets/images/barbaro.jpg" alt="barbaro">
	<figcaption>Caption describing a Gallery of 12 images.</figcaption>
</figure>

<hr>

**Linking Gallery**

{% capture fig_img %}
[![Foo]({{ site.url }}/assets/images/barbaro.jpg)](http://www.nationalgallery.org.uk/whats-on/exhibitions/the-credit-suisse-exhibition-michelangelo-sebastiano)
[![Foo]({{ site.url }}/assets/images/barbaro.jpg)](http://www.nationalgallery.org.uk/whats-on/exhibitions/the-credit-suisse-exhibition-michelangelo-sebastiano)
[![Foo]({{ site.url }}/assets/images/barbaro.jpg)](http://www.nationalgallery.org.uk/whats-on/exhibitions/the-credit-suisse-exhibition-michelangelo-sebastiano)
[![Foo](https://upload.wikimedia.org/wikipedia/commons/d/da/DURER1.png)](http://www.nationalgallery.org.uk/whats-on/exhibitions/the-credit-suisse-exhibition-michelangelo-sebastiano)
[![Foo](https://upload.wikimedia.org/wikipedia/commons/d/da/DURER1.png)](http://www.nationalgallery.org.uk/whats-on/exhibitions/the-credit-suisse-exhibition-michelangelo-sebastiano)
[![Foo](https://upload.wikimedia.org/wikipedia/commons/d/da/DURER1.png)](http://www.nationalgallery.org.uk/whats-on/exhibitions/the-credit-suisse-exhibition-michelangelo-sebastiano)
{% endcapture %}

{% capture fig_caption %}
This is a Linking Gallery and you can direct the linking images to any url
{% endcapture %}

<figure class="third">
  {{ fig_img | markdownify }}
  <figcaption>{{ fig_caption | markdownify | remove: "<p>" | remove: "</p>" }}</figcaption>
</figure>

<hr>

**Image alighting left + text alighting right**
<figure style="width: 150px" class="align-left">
  <img src="{{ site.url }}/assets/images/image-alignment-150x150.jpg" alt="">
  <figcaption>Fig. 1.</figcaption>
</figure>

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.
{: .text-right}

<hr>

**Image alighting right + text alighting left**
<figure style="width: 300px" class="align-right">
  <img src="{{ site.url }}/assets/images/image-alignment-300x200.jpg" alt="">
  <figcaption>Fig. 2. Very Long Caption: Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id purus. Ut varius tincidunt libero. Phasellus dolor. Maecenas vestibulum mollis Donec mollis hendrerit risus.</figcaption>
</figure>
Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.
{: .text-left}

<hr>

**Embedded Video**
<br>
Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.

<figure>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/1_IYk5jB7jc" frameborder="0.5" allowfullscreen></iframe>
  <figcaption>Interview with the Curator: The Credit Suisse Exhibition – Michelangelo & Sebastiano on <a href="https://www.youtube.com/watch?v=1_IYk5jB7jc">Youtube.</a></figcaption>
</figure>

Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.

<figure>
  <iframe src="https://player.vimeo.com/video/34614154?color=ff9933" width="640" height="360" frameborder="1" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
  <figcaption>Il Tempo di Michelangelo - La Cappella Sistina in Vaticano - Preview from <a href="https://vimeo.com/gianmarcodagostino">Gianmarco D&#039;Agostino on Vimeo.</a></figcaption>
</figure>


Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.

<a href="#top"><i class="fa fa-chevron-up fa-lg fa-pull-right"></i></a> <a href="#top"><i class="fa fa-angle-double-up fa-1x fa-pull-left"></i></a>
<hr>
