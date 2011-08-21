ScrobbleCloud.Tracklist = function (tracklist) {

    this.PLAYING_CLASS = '.player-section-playing';
    this.TITLE_CLASS   = '.tracklisttrackname';
    this.ARTIST_CLASS  = '.tracklistartistname';
    this.tracklist = tracklist;
};

ScrobbleCloud.Tracklist.prototype.scan = function () {

    var playingTrack = this._getPlayingTrack();

    if (!this.currentTrack) {
        this.currentTrack = playingTrack;
    } else if (!this.currentTrack.matches(playingTrack)) {
        this.currentTrack = playingTrack;
    }
};

ScrobbleCloud.Tracklist.prototype._getPlayingTrack = function () {

    var track, title, artist;

    track  = this.tracklist.querySelector(this.PLAYING_CLASS);
    title  = track.querySelector(this.TITLE_CLASS).innerHTML;
    artist = track.querySelector(this.ARTIST_CLASS).innerHTML;

    return new ScrobbleCloud.Track(title, artist);
}

ScrobbleCloud.Tracklist.prototype.getCurrentTrack = function () {

    if (this.currentTrack == null) {
        this.currentTrack = this._getPlayingTrack();
    }

    return this.currentTrack;
}
