#  Le Boilerplate

My personal boilerplate: HTML5, small screen first, cross-browser, normalization, progressive enhancement. 

Adapted from the [HTML5 Boilerplate](http://html5boilerplate.com) and [Mobile HTML5 Boilerplate](http://html5boilerplate.com/mobile) projects. Check them out.

## Changelog:

### v.0.6 : 14 May 2011

#### index.html
* Viewport `meta` tag helps improve appearance on mobile devices.
* Browser and device icons are in the root directory.
* [Modernizr](https://github.com/Modernizr/Modernizr) 1.8pre is used to supply the MQ feature test.
* Browsers with no MQ support load [Respond.js](https://github.com/scottjehl/Respond). Uses an [experimental parser](https://github.com/rupl/Respond) so that Respond.js does not require CSS comments (which are stripped by the H5BP build script).
* ARIA roles on common components (include additional, relevant roles throughout development)
* Google CDN and local fallback for jQuery
* Mathias' shorter Google Analytics tracking snippet (including tracking of page load time)

##### Notes:

* If Modernizr is not needed: replace it with the HTML5 shim, drop the feature test, and load Respond.js in all browsers.
* When Respond.js adopts the experimental parser, combine the two files into one to reduce HTTP requests.

#### default.css

* Small screen first approach. Build up the design in layers of project-specific @media queries.
* No reset is used; normalization + personalization is preferred (see comments in file). Related "normalization" projects: [jonathantneal/normalize.css](https://github.com/jonathantneal/normalize.css) and [necolas/normalize.css](https://github.com/necolas/normalize.css)
* Set `display` for various HTML5 elements.
* Avoid iOS text-resize and tap-highlight problems.
* Base styles include fixes for various, common browser bugs and inconsistencies.
* Includes [Micro clearfix](http://nicolasgallagher.com/micro-clearfix-hack/) helper class.
* Print styles strip text shadows, backgrounds, and filters; set font colour to black; and generally improve the display for printed documents.

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