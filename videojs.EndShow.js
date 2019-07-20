
(function(videojs) {
  'use strict';

  videojs.registerPlugin('EndShow', function(opts) {
    opts = opts || {
        header: '在这里可以添加标题…',
        suggestions: [
          {
            title: '',
            url: '',
            image: '',
            alt: '',
            target: '_self'
          }
        ]
      };
    var player = this;
    var _sve;

    /**
     * Generate the DOM elements for the endshow content
     * @type {function}
     */
    function constructEndShowContent() {
      var sugs = opts.suggestions;
      var _frag = document.createDocumentFragment();
      var _aside = document.createElement('aside');
      var _div = document.createElement('div');
      var _header = document.createElement('h5');
      // can only hold eight suggestions at a time
      var i = sugs.length - 1 > 7 ? 7 : sugs.length - 1;
      var _a;
      var _img;

      _aside.className = 'vjs-EndShow';
      _div.className = 'vjs-EndShow-container';

      _header.innerHTML = opts.header;
      _header.className = 'vjs-EndShow-header';

      _aside.appendChild(_header);

      // construct the individual suggested content pieces
      for (; i >= 0; --i) {
        _a = document.createElement('a');
        _a.className = 'vjs-EndShow-link';
        _a.href = sugs[i].url;
        _a.target = sugs[i].target || '_self';
        _a.title = sugs[i].title;

        _img = document.createElement('img');
        _img.className = 'vjs-EndShow-img';
        _img.src = sugs[i].image;
        _img.alt = sugs[i].alt || sugs[i].title;
        _a.appendChild(_img);

        _a.innerHTML += sugs[i].title;

        _div.appendChild(_a);
      }

      _aside.appendChild(_div);
      _sve = _aside;
      _frag.appendChild(_aside);
      player.el().appendChild(_frag);
    }

    // attach VideoJS event handlers
    player.on('ended', function() {
      _sve.classList.add('is-active');
    });

    player.on('play', function() {
      _sve.classList.remove('is-active');
    });

    player.ready(function() {
      constructEndShowContent();
    });


  });
}(window.videojs));
