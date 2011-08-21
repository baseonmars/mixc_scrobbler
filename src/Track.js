/**
* @constructor
* A track object
* @param {String} title The title of the track
* @param {String} title The artist atributed to the track
*/
ScrobbleCloud.Track = function (title, artist) {

    this.SCROBBLE_TIME = 20;
    this.title = title;
    this.artist = artist;
    this.created = new Date();
    this.scrobbled = false;
};

ScrobbleCloud.Track.prototype.matches = function (track) {

    var matches = false
    if (!track) {
        matches = false;
    } else if (this.title == track.title && this.artist == track.artist) {
        matches = true;
    }

    return matches;
};


ScrobbleCloud.Track.prototype.scrobble = function () {

    this.scrobbled = true;
};

ScrobbleCloud.Track.prototype.toString = function () {

    return this.title + ' - ' + this.artist;
}
