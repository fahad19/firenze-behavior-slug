/* global describe, before, after, it */
/* eslint-disable no-unused-expressions */

var should = require('should-promised'); //eslint-disable-line
var lib = require('firenze');
var config = require('../config');

describe('Model', function () {
  before(function (done) {
    this.db = new lib.Database(config);

    this.Posts = require('../collections/Posts')(this.db);
    this.postsData = require('../fixtures/posts');

    this.db.getAdapter().loadAllFixtures([
      {
        collection: new this.Posts(),
        rows: this.postsData
      }
    ]).then(function () {
      done();
    }).catch(function (error) {
      throw error;
    });
  });

  after(function (done) {
    this.db.close().then(done);
  });

  it('should create a new record, with slug', function (done) {
    var posts = new this.Posts();
    var post = posts.model({
      title: 'New Post'
    });
    post.save().then(function (model) {
      model.get('title').should.eql('New Post');
      model.get('slug').should.eql('new-post');
      done();
    }).catch(function (error) {
      throw error;
    });
  });
});
