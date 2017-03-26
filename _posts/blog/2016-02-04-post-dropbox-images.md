---
layout: post
title: "A Post with Images from dropbox"
excerpt: "Examples and code for displaying images in posts."
categories: blog
tags: [sample-post, images, test]
author: laura_moretti
image:
  feature: https://www.dropbox.com/s/f84a2mkm8unh0vw/T3d_TEst.jpg?raw=1
comments: true
share: true
modified: 2017-02-12 12:00
---

After a few attemps...

(note that author's image is also sourced from an external link!!!)

## Figures (for images or video)

### One Up

Don't forget to change the ending with `?raw=1`

<figure>
	<a href="https://www.dropbox.com/s/f84a2mkm8unh0vw/T3d_TEst.jpg?raw=1"><img src="https://www.dropbox.com/s/f84a2mkm8unh0vw/T3d_TEst.jpg?raw=1" alt="image"></a>
	<figcaption><b>Anonymous Engraver</b>, <i>A Putto Getting Cross with his Geometry</i>, Whereabout Unknown or Whatever</figcaption>
</figure>

### Two Up

Apply the `half` class like so to display two images side by side that share the same caption.

```html
<figure class="half">
	<img src="/images/image-filename-1.jpg" alt="image">
	<img src="/images/image-filename-2.jpg" alt="image">
	<figcaption>Caption describing these two images.</figcaption>
</figure>
```
And you'll get something that looks like this:

<figure class="half">
	<img src="https://www.dropbox.com/s/f84a2mkm8unh0vw/T3d_TEst.jpg?raw=1" alt="image">
	<img src="https://www.dropbox.com/s/f84a2mkm8unh0vw/T3d_TEst.jpg?raw=1" alt="image">
	<figcaption>Caption describing these two images.</figcaption>
</figure>

Even 4 images:

<figure class="half">
	<img src="https://www.dropbox.com/s/f84a2mkm8unh0vw/T3d_TEst.jpg?raw=1" alt="image">
	<img src="https://www.dropbox.com/s/f84a2mkm8unh0vw/T3d_TEst.jpg?raw=1" alt="image">
  <img src="https://www.dropbox.com/s/f84a2mkm8unh0vw/T3d_TEst.jpg?raw=1" alt="image">
	<img src="https://www.dropbox.com/s/f84a2mkm8unh0vw/T3d_TEst.jpg?raw=1" alt="image">
	<figcaption>Caption describing these two images.</figcaption>
</figure>


You can include html tag `<a href></a>` if you wish to link the image to its original source - as I did with the One Up example


### Three Up

Apply the `third` class like so to display three images side by side that share the same caption.

```html
<figure class="third">
	<a href="http://placehold.it/1200x600.jpg"><img src="http://placehold.it/600x300.jpg" alt="image"></a>
	<a href="http://placehold.it/1200x600.jpg"><img src="http://placehold.it/600x300.jpg" alt="image"></a>
	<a href="http://placehold.it/1200x600.jpg"><img src="http://placehold.it/600x300.jpg" alt="image"></a>
	<figcaption>Caption describing these three images.</figcaption>
</figure>
```

And you'll get something that looks like this:

<figure class="third">
  <img src="https://www.dropbox.com/s/f84a2mkm8unh0vw/T3d_TEst.jpg?raw=1" alt="image">
  <img src="https://www.dropbox.com/s/f84a2mkm8unh0vw/T3d_TEst.jpg?raw=1" alt="image">
  <img src="https://www.dropbox.com/s/f84a2mkm8unh0vw/T3d_TEst.jpg?raw=1" alt="image">
	<figcaption>Three images.</figcaption>
</figure>

or six:

<figure class="third">
  <img src="https://www.dropbox.com/s/f84a2mkm8unh0vw/T3d_TEst.jpg?raw=1" alt="image">
  <img src="https://www.dropbox.com/s/f84a2mkm8unh0vw/T3d_TEst.jpg?raw=1" alt="image">
  <img src="https://www.dropbox.com/s/f84a2mkm8unh0vw/T3d_TEst.jpg?raw=1" alt="image">
	<img src="https://www.dropbox.com/s/f84a2mkm8unh0vw/T3d_TEst.jpg?raw=1" alt="image">
  <img src="https://www.dropbox.com/s/f84a2mkm8unh0vw/T3d_TEst.jpg?raw=1" alt="image">
	<img src="https://www.dropbox.com/s/f84a2mkm8unh0vw/T3d_TEst.jpg?raw=1" alt="image">
	<figcaption>Six images.</figcaption>
</figure>
