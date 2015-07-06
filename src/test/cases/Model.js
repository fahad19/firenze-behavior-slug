/* global describe, before, after, it */
/* eslint-disable no-unused-expressions */

var should = require('should-promised'); //eslint-disable-line
var lib = require('firenze');
var config = require('../config');

describe('Model', function () {
  before(function (done) {
    this.db = new lib.Database(config);

    this.Post = require('../models/Post')(this.db);
    this.postsData = require('../fixtures/posts');

    this.db.getAdapter().loadAllFixtures([
      {
        model: new this.Post(),
        rows: this.postsData
      }
    ]).then(function () {
      done();
    }).catch(function (error) {
      throw error;
    });
  });

  after(function (done) {
    this.db.close(done);
  });

  it('should have a collection', function () {
    var post = new this.Post();
    post.should.have.property('collection');

    var posts = post.collection();
    posts.should.have.property('table').which.is.exactly('posts');
  });

  it('should create a new record, with slug', function (done) {
    var post = new this.Post({
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
