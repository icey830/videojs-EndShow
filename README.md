# videojs-EndShow
视频播放结束后自动显示信息


### Example
Below is a sample use case. Feel free to add the videojs-EndShow CSS/JS to your own project how you see fit. Separated here as an example.

```html
<link rel="stylesheet" href="videojs.EndShow.css">
<video id="my-video" data-setup="{}" preload="auto" controls>
  <source src="my-video.mp4">
  <source src="my-video.webm">
</video>
<script src="videojs.EndShow.js"></script>
<script>
  'use strict';
  
  var video = videojs('my-video');
  video.EndShow({
    header: 'You may also like…',
    suggestions: [
      {
        title: 'title oen',
        url: '/another-video.html',
        image: 'http://placehold.it/250', // could be an animated GIF
        alt: 'Description of photo', // optional photo description, defaults to the title
        target: '_blank' // can be any anchor target type
      },
      {
        title: 'title two,
        url: '/a-different-article.html',
        image: 'http://placehold.it/250',
        target: '_self' // defaults to self if no target value is present
      }
    ]
  });
</script>
```
