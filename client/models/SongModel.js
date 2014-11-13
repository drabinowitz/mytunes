// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function(){
    //trigger an enqueue event
    this.trigger('enqueue', this);
  },

  dequeue: function(){
    //trigger a dequeue event
    this.trigger('dequeue', this);
  },

  ended: function(){
    //trigger an ended event that will bubble up
    this.trigger('ended', this);
  }

});
