describe('Playlist', function() {
  var songData1, songData2, playlist;

  beforeEach(function() {
    songData1 = {
      artist: 'data',
      url: '/test/testsong.mp3',
      title:'test song'
    };
    songData2 = {
      artist: 'data',
      url: '/test/testsong2.mp3',
      title:'test song 2'
    };
    playlist = new Playlist('testplaylist',[songData1,songData2]);
    sinon.spy(playlist, 'trigger');
  });

  it('has a name', function(){
    expect(playlist.name()).to.equal('testplaylist');
  });

  describe('when a song is added', function() {
    it('will now be in the playlist', function() {
      playlist.add(songData1);
      expect(playlist.trigger).to.have.been.calledWith('add', songData1);
      expect(playlist.at(0).attributes.url).to.equal(songData1.url);
    });
  });

  describe('when a song is removed', function() {
    it('will no longer be in the playlist', function() {
      playlist.add(songData1);
      playlist.remove(songData1);
      expect(playlist.trigger).to.have.been.calledWith('remove', songData1);
      expect(playlist.at(0)).not.to.be.defined;
    });
  });
});
