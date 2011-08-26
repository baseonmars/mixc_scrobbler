/**
* MixCScrobbler - Library for scrobbling MixCloud
* copyright 2011 Dan Etherington <dan@baseonmars.co.uk>
* released under the BSD licence
*/
MixCScrobbler = function () {

    this.TRACKLIST_SELECTOR = '#cloudcast-sections-table'; 
    this.SCROBBLE_INTERVAL = 30000;
    this.INTERVAL = 10000;
};

/**
* Loads the first tracklist from an html document
* @param {HTMLNode} doc The html document containing the playlist
*/
MixCScrobbler.prototype.loadTracklist = function (doc) {

    var tracklist = doc.querySelector(this.TRACKLIST_SELECTOR);
    this.tracklist = new MixCScrobbler.Tracklist(tracklist);
};

MixCScrobbler.prototype.start = function () {

    var scope = this;
    this.interval = setInterval(function () {

        scope.tracklist.scan();
        scope.scrobble();

    }, this.INTERVAL);

};

MixCScrobbler.prototype.stop = function () {

    clearInterval(this.interval);
};

MixCScrobbler.prototype.shouldScrobble = function (track) {

    var scrobble = false;
    if ((new Date() - track.created) >= this.SCROBBLE_INTERVAL) {
        scrobble = true;
    }
    return scrobble;
};

MixCScrobbler.prototype.scrobble = function () {

    var currentTrack = this.tracklist.getCurrentTrack();

    if (currentTrack.scrobbled == true) return;

    if (this.shouldScrobble(currentTrack)) {
        currentTrack.scrobble();
        console.debug("Scrobbling", currentTrack);
    }
};




