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
    });
    this.on('ended', function() {
      this.shift();
      if (this.length) {
        this.playFirst();
      }
    });
    // should we be passing something to remove?
    this.on('dequeue', function() {
      this.remove();
    });
  }

});