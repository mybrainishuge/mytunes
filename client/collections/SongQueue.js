// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  playFirst: function() {
    this.at(0).play();
  },
  initialize: function() {
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);

    this.on('ended', function() {
      this.shift();
      if (this.length) {
        this.playFirst();
      }
    }, this);

    this.on('dequeue', function() {
      this.remove(this.at(0));
    }, this);

    // this.on('enqueue', function(song) {
    //   this.add(song);
    // }, this);
  }

});