require('../src/MixCScrobbler.js');
require('../src/Track.js');

describe('Track', function () {

    it("should have a title", function () {

        var track = new MixCScrobbler.Track('Uranium');
        expect(track.title).toBe('Uranium');
    });

    it("should have an artist", function () {

        var track = new MixCScrobbler.Track(null, 'Radioactive Man');
        expect(track.artist).toBe('Radioactive Man');
    });

    it("should have a creation time", function () {

        var track = new MixCScrobbler.Track('Uranium', 'Radioactive Man');
        expect(track.created instanceof Date).toBe(true);
    });

    it("should match other tracks with the same info", function () {

        var track1 = new MixCScrobbler.Track('Uranium', 'Radioactive Man');
        var track2 = new MixCScrobbler.Track('Uranium', 'Radioactive Man');

        expect(track1.matches(track2)).toBe(true);
    });

    it("should print it's formatted name", function () {

        var track = new MixCScrobbler.Track('Uranium', 'Radioactive Man');
        expect(track.toString()).toMatch(/Uranium - Radioactive Man/);
    });

    it("should be set as scrobbled", function () {

        var track = new MixCScrobbler.Track('Uranium', 'Radioactive Man');
        track.scrobbled = false;
        track.scrobble();
        expect(track.scrobbled).toBeTruthy();
    });
});
