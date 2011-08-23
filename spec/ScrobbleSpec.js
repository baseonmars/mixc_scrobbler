require('../src/MixCScrobbler.js');
require('../src/Scrobble.js');
require('../src/Track.js');

describe('Scrobble', function () {

    var track, scrobble;

    beforeEach(function () {

        track = new MixCScrobbler.Track('Uranium', 'Radioactive Man');
        scrobble = new MixCScrobbler.Scrobble(track);
    });

    it("should have a track", function () {

        expect(scrobble.track).toBe(track);
    });

    it("should not accept a track with a blank title", function () {

        var track = new MixCScrobbler.Track('', 'Radioactive Man');
        expect(function () {
            new MixCScrobbler.Scrobble(track);
        }).toThrow("Track title required");

        var track2 = new MixCScrobbler.Track(null, 'Radioactive Man');
        expect(function () {
            new MixCScrobbler.Scrobble(track2);
        }).toThrow("Track title required");
    });

    it("should not accept a track with a blank artist", function () {

        var track = new MixCScrobbler.Track('Uranium', '');
        expect(function () {
            new MixCScrobbler.Scrobble(track);
        }).toThrow("Track artist required");

        var track2 = new MixCScrobbler.Track('Uranium', null);
        expect(function () {
            new MixCScrobbler.Scrobble(track2);
        }).toThrow("Track artist required");
    });

});
