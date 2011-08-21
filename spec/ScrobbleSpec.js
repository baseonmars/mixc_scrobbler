require('../src/ScrobbleCloud.js');
require('../src/Scrobble.js');
require('../src/Track.js');

describe('Scrobble', function () {

    var track, scrobble;

    beforeEach(function () {

        track = new ScrobbleCloud.Track('Uranium', 'Radioactive Man');
        scrobble = new ScrobbleCloud.Scrobble(track);
    });

    it("should have a track", function () {

        expect(scrobble.track).toBe(track);
    });

    it("should not accept a track with a blank title", function () {

        var track = new ScrobbleCloud.Track('', 'Radioactive Man');
        expect(function () {
            new ScrobbleCloud.Scrobble(track);
        }).toThrow("Track title required");

        var track2 = new ScrobbleCloud.Track(null, 'Radioactive Man');
        expect(function () {
            new ScrobbleCloud.Scrobble(track2);
        }).toThrow("Track title required");
    });

    it("should not accept a track with a blank artist", function () {

        var track = new ScrobbleCloud.Track('Uranium', '');
        expect(function () {
            new ScrobbleCloud.Scrobble(track);
        }).toThrow("Track artist required");

        var track2 = new ScrobbleCloud.Track('Uranium', null);
        expect(function () {
            new ScrobbleCloud.Scrobble(track2);
        }).toThrow("Track artist required");
    });

});
