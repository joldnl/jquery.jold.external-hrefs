# jQuery JOLD External Hrefs

Version 1.0.0

## Summary

Automatically open all external links (outside of the current site / hostname) in a new tab. 
Set `<a rel="">` and `<a target="">` attributes dynamically if enabled in settings 


### Installation:
Install the plugin with npm and include it in your build process, or directly include the files in the head of your page.

**Install with npm (recommended):**

```bash
$ npm i jquery.jold.external-hrefs --save

```

After installing the plugin with npm, you still need to include the downloaded files from node_modules into your workflow.


**Include script from cdn:**

```html
<!-- Include js from jsdelivr cdn -->
<script src="https://cdn.jsdelivr.net/npm/jquery.jold.js-load-video@1.0.3/jquery.jold.js-load-video.min.js"></script>

```

Just include the script tag in the `<head>` of your page.


### Using the plugin

#### Initialize on all links

```js
// Open all external links in new tab
$('a').joldExternalHrefs();
```

Open all external links in a new tab. The plugin compares the link hostname to the current site url hostname and opens it in a new window if the link goes outside of the current site.

#### Initialize on rel=external links

Only open links with the `rel="external"` arribute on an `<a>` link.

```js
$('a[rel="external"]').joldExternalHrefs();
 ```

#### Ignored external links
All `<a>` links with the target attribute set to `target="_self"` are ignored by the plugin and wont open in a new tab.

```html
<a href="https://www.youtube.com" target="_self">YouTube</a>
```

This link won't open in a new tab / window.

### Plugin settings

```js
$('a').joldExternalHrefs({
    'set_target': true,   // Set <a> target attribute
    'set_rel': true,      // Set <a> rel attribute
    'ignore_www': true,   // Ignore www from hostnames
});
```


## Requirements

- Tested with jQuery 1.12.1
- A link must always have a `href` attribute to make this plugin function correctly
- Links (`<a>` tags without a href attribute will be ignored)


## Author

Jurgen Oldenburg ( [@joldnl](http://twitter.com/joldnl) / [jold.nl](https://www.jold.nl) / [info@jold.nl](info@jold.nl) )

## Changelog


#### Version 1.2

* Add settings: `set_target`, `set_rel` and `ignore_www`
* Add attributes rel and target to <a> if settings allow it
* Dont do anything if target="_self"
* Update node dependencies, no vulnerabilities anymore
* Core code improvements


#### Version 1.1

* Only open http and https links in a new window, skip all other protocols.


#### Version 1.0

* Initial commit.
