// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    //trigger a render on add or remove of song
    this.collection.on('add',function(){this.render()},this);

    this.collection.on('remove',function(){this.render()},this);
  },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    this.$el.children().detach();

    this.$el.html('<div><h3>Song Queue</h3></div>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
