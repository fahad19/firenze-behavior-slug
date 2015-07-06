/*eslint camelcase: [2, {properties: "never"}]*/
/* eslint-disable new-cap */
var SlugBehavior = require('../../');

module.exports = function (db) {
  return db.createModelClass({
    alias: 'Post',

    displayField: 'title',

    schema: {
      id: {
        type: 'increments'
      },
      title: {
        type: 'string'
      },
      slug: {
        type: 'text'
      }
    },

    behaviors: [
      {
        class: SlugBehavior,
        options: {
          field: 'slug',
          source: 'title'
        }
      }
    ],

    collectionClass: function () {
      return require('../collections/Posts')(db);
    }
  });
};
