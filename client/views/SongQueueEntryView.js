// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  //define a template for a queued song
  template: _.template('<div><p>(<%= artist %>)</p><p><%= title %></p></div>'),

  //trigger a dequeue on click
  events: {
    'click': function(){
      this.model.dequeue();
    }
  },

  //render model to DOM
  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});
