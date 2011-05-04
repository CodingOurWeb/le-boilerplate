(function(doc) {

    // MBP - Mobile boilerplate helper functions
    // http://github.com/shichuan/mobile-html5-boilerplate

    window.MBP = window.MBP || {}; 
    MBP.ua = navigator.userAgent;

    // iOS viewport scaling bug fix
    // https://gist.github.com/901295
    // By @mathias, @cheeaun and @jdalton

    MBP.scaleFix = function () {
        var addEvent = 'addEventListener',
            type = 'gesturestart',
            doc = document,
            qsa = 'querySelectorAll',
            scales = [1, 1],
            meta = qsa in doc ? doc[qsa]('meta[name=viewport]') : [];

        function fix() {
            meta.content = 'width=device-width,minimum-scale=' + scales[0] + ',maximum-scale=' + scales[1];
            doc.removeEventListener(type, fix, true);
        }

        if ((meta = meta[meta.length - 1]) && addEvent in doc) {
            fix();
            scales = [.25, 1.6];
            doc[addEvent](type, fix, true);
        }
    }
    
    // Hide URL Bar for iOS
    // http://remysharp.com/2010/08/05/doing-it-right-skipping-the-iphone-url-bar/
    MBP.hideUrlBar = function () {
    /iPhone/.test(MBP.ua) && !location.hash && setTimeout(function () {
          pageYOffset || window.scrollTo(0, 1);
        }, 1000);
    };

    // Autogrow
    // http://googlecode.blogspot.com/2009/07/gmail-for-mobile-html5-series.html
    MBP.autogrow = function (element, lh) {
        function handler(e) {
            var newHeight = this.scrollHeight,
                currentHeight = this.clientHeight;
            if (newHeight > currentHeight) {
                this.style.height = newHeight + 3 * textLineHeight + "px";
            }
        }

        var setLineHeight = (lh) ? lh : 12,
            textLineHeight = element.currentStyle ? element.currentStyle.lineHeight : getComputedStyle(element, null).lineHeight;

        textLineHeight = (textLineHeight.indexOf("px") == -1) ? setLineHeight :parseInt(textLineHeight, 10);

        element.style.overflow = "hidden";
        element.addEventListener ? element.addEventListener('keyup', handler, false) : element.attachEvent('onkeyup', handler);
    }

}(document));

MBP.scaleFix();
MBP.hideUrlBar();