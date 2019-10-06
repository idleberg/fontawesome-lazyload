# fontawesome-lazyload

[![npm](https://flat.badgen.net/npm/license/fontawesome-lazyload)](https://www.npmjs.org/package/fontawesome-lazyload)
[![npm](https://flat.badgen.net/npm/v/fontawesome-lazyload)](https://www.npmjs.org/package/fontawesome-lazyload)
[![CircleCI](https://flat.badgen.net/circleci/github/idleberg/fontawesome-lazyload)](https://circleci.com/gh/idleberg/fontawesome-lazyload)

Drop-in lazyloader for Font Awesome SVG icons

[*See a demo*](https://idleberg.github.io/fontawesome-lazyload/)

## Installation

`yarn add fontawesome-lazyload || npm install fontawesome-lazyload -S`

## Usage

Include script and stylesheet in your website

```html
<!-- Font Awesome SVG Helpers -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5/css/svg-with-js.min.css"
/>

<!-- Fallback when JavaScript is not available -->
<noscript>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/fontawesome-lazyload@latest/dist/fontawesome-lazyload.js"
  />
</noscript>

<!-- Lazyload script -->
<script src="fontawesome-lazyload.js" charset="utf-8" defer></script>
```

Next, you need to invoke the lazyloader.

```js
document.addEventListener('DOMContentLoaded', function() {
  faLazyload();
});

```
### Options

#### options.url

Type: `string`

Provide URL from where to load Font Awesome SVG icons. Defaults to jsDelivr.

#### options.fetch

Type: `object`

Options for `fetch()`, see [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#Supplying_request_options) for details. Default to `{cache: 'force-cache'}`

## License

This work is licensed under [The MIT License](https://opensource.org/licenses/MIT)

## Donate

You are welcome to support this project using [Flattr](https://flattr.com/submit/auto?user_id=idleberg&url=https://github.com/idleberg/node-makensis) or Bitcoin `17CXJuPsmhuTzFV2k4RKYwpEHVjskJktRd`
