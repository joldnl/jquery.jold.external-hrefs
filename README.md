# jQuery JOLD External Hrefs

Version 1.0.0

## Summary

A jQuery plugin that opens all external links (links that link to another domain / hostname) in a new tab.

## Author

Jurgen Oldenburg ( [@staxxnl](http://twitter.com/staxxnl) / [jold.nl](https://www.jold.nl) / [info@jold.nl](info@jold.nl) )

## Usage

Include `jquery.jold.external-hrefs.min.js` after calling jQuery in the footer. Alternatively, include in your `plugins.js` file if using [HTML5 Boilerplate](http://html5boilerplate.com).

### Installation

```bash
$ npm i jquery.jold.external-hrefs

```

### Initialize pagination

```js
$('a').joldExternalHrefs();
```

This example opens all links `<a href="https://www.nos.nl">link</a>` that have a different domain than the page the links is displayed on, in a new tab or window.
You can also target links with a specific css selector, like `a.external` or `a[rel="external"]`.


## Requirements

Tested with jQuery 1.12.1.
A link must always have a `href` attribute to make this plugin function correctly. Links (`a` tags without a href attribute will be ignored).


## Changelog


#### Version 1.0

* Initial commit.
