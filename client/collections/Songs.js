// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  url: 'https://api.parse.com/1/classes/songs',

  model: SongModel,

  initialize: function(data) {
    this.fetch({reset: true});
  },
  // initialize: function(song) {
  //   $.ajax({
  //     url: this.server,
  //     method: 'GET',
  //     'Content-Type': 'application/json',
  //     data: JSON.stringify(song),
  //     success: function(data) {
  //       // console.log(this);
  //       console.log('Done got data: ', data.results);

  //     },
  //     error: function(data) {
  //       console.error('Nope', data);
  //     }
  //   });
  // }

  parse: function(response) {
    return response.results;
  }

});