//create a playlist
var Playlist = Backbone.Model.extend({

  initialize: function(name,songs){
    //set name of playlist to input name
    this.set('name',name);
    //get songs from input, if not an
    //instance of Songs then create Songs collection
    if (!(songs instanceof Songs)){
      songs = new Songs(songs);
    }
    this.set('_songs',songs);
    //respond to collection-like event
    this.on('add',function(song){
      this.songs().add(song);
    });

    this.on('remove',function(song){
      this.songs().remove(song);
    });
  },

  //convenience method for accessing playlist name
  name: function(){
    return this.get('name',name);
  },

  //convenience method for accessing songs
  songs: function(){
    return this.get('_songs');
  },

  //trigger add event on add
  add: function(song){
    this.trigger('add',song);
  },

  //trigger remove event on remove
  remove: function(song){
    this.trigger('remove',song);
  },

  //return value at _songs
  at: function(index){
    return this.songs().at(index);
  },

});