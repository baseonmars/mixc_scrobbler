ScrobbleCloud.Scrobble = function(track) {

    if (!track.title) {
        throw "Track title required";
    }

    if (!track.artist) {
        throw "Track artist required";
    }
    this.track = track;
}
