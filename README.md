# firenze-behavior-slug

[![Build Status](https://secure.travis-ci.org/fahad19/firenze-behavior-slug.png?branch=master)](http://travis-ci.org/fahad19/firenze-behavior-slug) [![Coverage Status](https://coveralls.io/repos/fahad19/firenze-behavior-slug/badge.svg?branch=master)](https://coveralls.io/r/fahad19/firenze-behavior-slug?branch=master) [![npm](https://img.shields.io/npm/v/firenze-behavior-slug.svg)](https://www.npmjs.com/package/firenze-behavior-slug) [![Join the chat at https://gitter.im/fahad19/firenze](https://img.shields.io/badge/gitter-join_chat_%E2%86%92-1dce73.svg)](https://gitter.im/fahad19/firenze)

Slug behavior for [firenze.js](https://github.com/fahad19/firenze).

Automatically generate slugs (SEO friendly strings) when creating new records.

Install it with [npm](https://npmjs.com) or [Bower](http://bower.io):

```
$ npm install --save firenze-behavior-slug

$ bower install --save firenze-behavior-slug
```

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
# Contents

  - [What it does](#what-it-does)
  - [Usage](#usage)
    - [Node.js](#nodejs)
    - [Browser](#browser)
  - [Testing](#testing)
  - [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<!--docume:src/index.js-->
## What it does

When saving a new model, it will automatically generate a slug and set it to specified field for you.

For example, when saving a post with the title `Hello World`:

```js
var post = new Post({
  title: 'Hello World'
});

post.save().then(function (model) {
  var slug = model.get('slug'); // `hello-world`
});
```

It will also save the value `hello-world` in `slug` field.

## Usage

### Node.js

With [npm](https://npmjs.com):

```
$ npm install --save firenze-behavior-slug
```

Now you can require it as follows:

```js
var SlugBehavior = require('firenze-behavior-slug');

// create your Database instance...

db.createModelClass({
  behaviors: [
    SlugBehavior
  ]
});
```

If you want to pass extra configuration options:

```js
db.createModelClass({
  behaviors: [
    {
      'class': SlugBehavior
      options: {
        source: 'title', // field to convert
        field: 'slug', // field to store the slug in
        separator: '-',
      }
    }
  ]
});
```

### Browser

Or [Bower](http://bower.io):

```
$ bower installl --save firenze-behavior-slug
```

Can be loaded in your HTML page as follows:

```js
<script src="bower_components/lodash/lodash.min.js"></script>
<script src="bower_components/async/lib/async.js"></script>
<script src="bower_components/bluebird/js/browser/bluebird.min.js"></script>
<script src="bower_components/validator-js/validator.min.js"></script>

<script src="bower_components/firenze/dist/firenze.min.js"></script>
<script src="bower_components/firenze-behavior-slug/dist/firenze-behavior-slug.min.js"></script>

<script>
  // Slug behavior is available in `firenze.SlugBehavior`
</script>
```

<!--/docume:src/index.js-->

# Testing

Tests are written with [mocha](http://mochajs.org/), and can be run via npm:

```
$ npm test
```

# License

MIT © [Fahad Ibnay Heylaal](http://fahad19.com)
