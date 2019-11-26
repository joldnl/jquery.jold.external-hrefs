# jQuery JOLD External Hrefs

Version 1.0.0

## Summary

A jQuery plugin that opens all external links (links that link to another domain / hostname) in a new tab

## Author

Jurgen Oldenburg ( [@joldnl](http://twitter.com/joldnl) / [jold.nl](https://www.jold.nl) / [info@jold.nl](info@jold.nl) )

## Usage

Include `jquery.jold.external-hrefs.min.js` after calling jQuery in the footer.

### Installation

```bash
$ npm i jquery.jold.external-hrefs

```

### Initialize the plugin

```js
$('a').joldExternalHrefs();
```

This example opens all links `<a href="https://www.nos.nl">link</a>` that have a different domain than the page the links is displayed on, in a new tab or window.
You can also target links with a specific css selector, like `a.external` or `a[rel="external"]`.

### Plugin settings

```js
$('a').joldExternalHrefs({
    'set_target': true,   // Default: false
    'set_rel': true,      // Default: false
    'ignore_www': true,   // Default: false
});
```


## Requirements

Tested with jQuery 1.12.1.
A link must always have a `href` attribute to make this plugin function correctly. Links (`a` tags without a href attribute will be ignored).


## Changelog


#### Version 1.2

* Add settings: `set_target`, `set_rel` and `ignore_www`
* Update node dependencies, no vulnerabilities anymore
* Add attributes rel and target to <a> if settings allow
* Dont do anything if target="_self"
* Core code improvements


#### Version 1.1

* Only open http and https links in a new window, skip all other protocols.


#### Version 1.0

* Initial commit.
