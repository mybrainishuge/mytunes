// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  server: 'https://api.parse.com/1/classes/songs',

  model: SongModel,
  initialize: function(song) {
    $.ajax({
      url: this.server,
      method: 'GET',
      'Content-Type': 'application/json',
      data: JSON.stringify(song)
    });
  }

});