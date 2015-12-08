var SlugBehavior = require('../../');

module.exports = function (db) {
  return db.createCollection({
    table: 'posts',

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

    modelClass: require('../models/Post')
  });
};
