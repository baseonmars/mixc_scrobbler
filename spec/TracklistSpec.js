require('../src/ScrobbleCloud.js');
require('../src/Tracklist.js');
require('../src/Track.js');

describe('Tracklist', function () {

    var jsdom, tw, track, window;
    beforeEach(function () {
        track = new ScrobbleCloud.Track('1/U = Daven’T Nay', 'Radioactive Man');
        window = loadPlaylistWindow();
        tw = new ScrobbleCloud.Tracklist(
            window.document.getElementById('cloudcast-sections-table'));
    });

    it('should have a tracklist element', function () {

        expect(!!tw.tracklist).toBe(true);
    });

    it('should get the currently playing track', function () {

        expect(tw._getPlayingTrack().title).toBe(track.title);
        expect(tw._getPlayingTrack().artist).toBe(track.artist);
    });

    /**
    * the watch function is called once per tick
    */
    describe('When scanning', function () {

        it("should start watching when told to", function () {

            tw.scan();
            expect(!!tw._getPlayingTrack()).toBe(true)
            expect(tw._getPlayingTrack().matches(track)).toBe(true);
        });

        it("should set it's current track if none is set", function () {

            tw.currentTrack = null;
            tw.getCurrentTrack();
            expect(!!tw.currentTrack).toBe(true);
        });

        it("should not overwrite the current track if is already current", function () {

            tw.scan();
            var track = tw.currentTrack;
            tw.scan();
            expect(tw.currentTrack).toBe(track);
        });

        it("should overwrite the current track is different", function () {

            tw.scan();
            var track = tw.currentTrack;
            var oldTrackEl = tw.tracklist.querySelector('.player-section-playing');
            oldTrackEl.className = '';
            var newTrackEl = tw.tracklist.querySelectorAll('.section-row-track')[1];
            newTrackEl.className = 'section-row-track player-section-playing';
            tw.scan();
            expect(tw.currentTrack).not.toBe(track);
        });

    });

});

