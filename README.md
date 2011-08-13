#  Le Boilerplate

My personal boilerplate: HTML5, small screen first, cross-browser, normalization, progressive enhancement. 

Incorporates parts of the [HTML5 Boilerplate](http://html5boilerplate.com) and [Mobile HTML5 Boilerplate](http://html5boilerplate.com/mobile) projects. Check them out.

## Overview:

### 2011-08-13T01:50 UTC

#### index.html

* Viewport `meta` tag helps improve appearance on mobile devices.
* Browser and device icons are in the root directory.
* Browsers with no MQ support rely on [Respond.js](https://github.com/scottjehl/Respond) within the custom Modernizr build.
* ARIA roles on common components (include additional, relevant roles throughout development)
* Google CDN and local fallback for jQuery
* Mathias' shorter Google Analytics tracking snippet (including tracking of page load time)

#### default.css

* Built upon [normalize.css](https://github.com/necolas/normalize.css).
* Small screen first approach. Build up the design in layers of project-specific @media queries.
* Includes personalizations, clearfix helper class, and some print styles from H5BP. 

#### .htaccess

Refer to the release notes for [HTML5 Boilerplate on Github](http://github.com/paulirish/html5-boilerplate).

## License

Major components:

* Modernizr: MIT/BSD license
* jQuery: MIT/GPL license
* Respond: MIT/GPL license

Everything else:

* [The Unlicense](http://unlicense.org) (aka: public domain)
