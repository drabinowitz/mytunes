// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  //initialize song queue
  initialize: function(songs){
    //if we have any songs add them
    this.add(songs);

    //EVENT LISTENERS
    //on add, if the queue was empty start playing the song
    this.on('add', function(song){
      if (this.length === 1){
        this.playFirst();
      }
    });

    //when a song in the queue has ended remove it and play
    //the next song if there is still one to play
    this.on('ended', function(){
      this.shift();
      if (this.length > 0){
        this.playFirst();
      }
    });

    //on dequeue remove song from queue, if first song was
    //dequeued and there are still songs in the queue
    //play the next song
    this.on('dequeue', function(song){
      var options = {};
      this.remove(song,options);
      if (options.index === 0 && this.length > 0){
        this.playFirst();
      }
    });
  },

  playFirst: function(){
    this.at(0).play();
  },

});

SongQueue.prototype.playFirst.restore = function(){};
SongQueue.prototype.remove.restore = function(){};