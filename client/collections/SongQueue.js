// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,
  // add: function(songNode) {
  //   this.set(songNode);
  //   if (this.length === 1) {
  //     this.playFirst();
  //   }
  // },
  // add: function(song) {
  //   this.songs.push(song);
  //   this.set(song);
  //   if (this.songs.length === 1) {
  //     this.playFirst();
  //   } 
  // },
  // add: function() {
  //   Backbone.Collection.prototype.add.call(this);
  //   if (this.length === 1) {
  //     this.playFirst();
  //   }
  // },
  playFirst: function() {
  },
  initialize: function() {
    this.on('add', function() {
      console.log('hey again');
      if (this.length === 1) {
        console.log('length changed');
        this.playFirst();
      }
    });
  }

});