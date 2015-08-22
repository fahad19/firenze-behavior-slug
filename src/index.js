/* eslint-disable new-cap */

import _ from 'lodash';
import f from 'firenze';

let Behavior = f.Behavior;
let P = f.Promise;

// ## What it does
//
// When saving a new model, it will automatically generate a slug and set it to specified field for you.
//
// For example, when saving a post with the title `Hello World`:
//
// ```js
// var posts = new Posts();
// var post = posts.model({
//   title: 'Hello World'
// });
//
// post.save().then(function (model) {
//   var slug = model.get('slug'); // `hello-world`
// });
// ```
//
// It will also save the value `hello-world` in `slug` field.
//
// ## Usage
//
// ### Node.js
//
// With [npm](https://npmjs.com):
//
// ```
// $ npm install --save firenze-behavior-slug
// ```
//
// Now you can require it as follows:
//
// ```js
// var SlugBehavior = require('firenze-behavior-slug');
//
// // create your Database instance...
//
// db.createCollectionClass({
//   behaviors: [
//     SlugBehavior
//   ]
// });
// ```
//
// If you want to pass extra configuration options:
//
// ```js
// db.createCollectionClass({
//   behaviors: [
//     {
//       'class': SlugBehavior
//       options: {
//         source: 'title', // field to convert
//         field: 'slug', // field to store the slug in
//         separator: '-',
//       }
//     }
//   ]
// });
// ```
//
// ### Browser
//
// Or [Bower](http://bower.io):
//
// ```
// $ bower installl --save firenze-behavior-slug
// ```
//
// Can be loaded in your HTML page as follows:
//
// ```js
// <script src="bower_components/lodash/lodash.min.js"></script>
// <script src="bower_components/async/lib/async.js"></script>
// <script src="bower_components/bluebird/js/browser/bluebird.min.js"></script>
// <script src="bower_components/validator-js/validator.min.js"></script>
//
// <script src="bower_components/firenze/dist/firenze.min.js"></script>
// <script src="bower_components/firenze-behavior-slug/dist/firenze-behavior-slug.min.js"></script>
//
// <script>
//   // Slug behavior is available in `firenze.SlugBehavior`
// </script>
// ```
//

export default class Slug extends Behavior {
  constructor(...args) {
    super(...args);

    this.options = _.merge({
      source: this.collection.displayField,
      field: 'slug',
      separator: '-'
    }, this.options);
  }

  beforeSave(model) {
    if (!model.isNew()) {
      return new P.resolve(true);
    }

    let source = model.get(this.options.source);
    let slug = _.chain(source.toLowerCase())
      .deburr()
      .words()
      .join(this.options.separator)
      .value();

    model.set(this.options.field, slug);
    return new P.resolve(true);
  }
}
