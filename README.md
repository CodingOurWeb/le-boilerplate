#  Le Boilerplate

My personal boilerplate: HTML5, small screen first, cross-browser, normalization, progressive enhancement. 

Adapted from the [HTML5 Boilerplate](http://html5boilerplate.com) and [Mobile HTML5 Boilerplate](http://html5boilerplate.com/mobile) projects. Check them out.

## Overview:

### 2011-06-24T08:20 UTC

#### index.html

* Viewport `meta` tag helps improve appearance on mobile devices.
* Browser and device icons are in the root directory.
* Browsers with no MQ support rely on [Respond.js](https://github.com/scottjehl/Respond) within the custom Modernizr build.
* ARIA roles on common components (include additional, relevant roles throughout development)
* Google CDN and local fallback for jQuery
* Mathias' shorter Google Analytics tracking snippet (including tracking of page load time)

#### default.css

* Small screen first approach. Build up the design in layers of project-specific @media queries.
* Built upon [normalize.css](https://github.com/necolas/normalize.css).
* Includes personalizations, clearfix helper class, and some print styles from H5BP. 

#### Build Script, .htaccess

Refer to the release notes for [HTML5 Boilerplate on Github](http://github.com/paulirish/html5-boilerplate).

The build script included here is cloned and kept up to date with the H5BP repo.

The `.htaccess` file is a reduced version of the H5BP file.

## License

Major components:

* Modernizr: MIT/BSD license
* jQuery: MIT/GPL license
* Respond: MIT/GPL license

Everything else:

* [The Unlicense](http://unlicense.org) (aka: public domain)
