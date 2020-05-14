# fontawesome-svg-loader

[![npm](https://flat.badgen.net/npm/license/fontawesome-svg-loader)](https://www.npmjs.org/package/fontawesome-svg-loader)
[![npm](https://flat.badgen.net/npm/v/fontawesome-svg-loader)](https://www.npmjs.org/package/fontawesome-svg-loader)
[![CircleCI](https://flat.badgen.net/circleci/github/idleberg/fontawesome-svg-loader)](https://circleci.com/gh/idleberg/fontawesome-svg-loader)

Loads Font Awesome SVG icons and inlines them in place of the default markup

[Demo Time](https://codepen.io/idleberg/full/eYYYMPY) 🙌

## Installation

`yarn add fontawesome-svg-loader || npm install fontawesome-svg-loader -S`

## Usage

Include script and stylesheet in your website

```html
<!-- Loader script -->
<script src="https://cdn.jsdelivr.net/npm/fontawesome-svg-loader@latest/dist/fontawesome-svg-loader.js" async></script>

<!-- Fallback when JavaScript is not available -->
<noscript>
  <link
    href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5/css/all.min.css"
    rel="stylesheet"
  />
</noscript>
```

Next, you need to invoke the script

```js
document.addEventListener('DOMContentLoaded', function() {
  awesomeLoader.init()
});
```

Use the Font Awesome markup like you usually would, the library will take care of the rest

```html
<i class="fas fa-feather-alt"></i>
```

### Options

#### options.url

Type: `string`

Provide URL from where to load Font Awesome v5. Defaults to [jsDelivr](https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5).

⚠️ It's encouraged to use a specific version in the jsDelivr URL to get longer cache expiration times

#### options.fetch

Type: `object`

Options for `fetch()`, see [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#Supplying_request_options) for details. Defaults to `{"cache": "force-cache"}`.

### Browser Support

This library supports all modern browsers. You will need to BYOP (*”Bring your own Polyfills”*) to get it working in old browsers.

⚠️ Keep in mind that using polyfills can result in slower load-times compared to the standard Font Awesome usage

## License

This work is licensed under [The MIT License](https://opensource.org/licenses/MIT)

## Donate

You are welcome to support this project using [Flattr](https://flattr.com/submit/auto?user_id=idleberg&url=https://github.com/idleberg/node-makensis) or Bitcoin `17CXJuPsmhuTzFV2k4RKYwpEHVjskJktRd`
