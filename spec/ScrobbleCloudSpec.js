describe('ScrobbleCloud', function () {

    var sc, track, window;
    beforeEach(function () {

        track = new ScrobbleCloud.Track('1/U = Daven’T Nay', 'Radioactive Man');
        window = loadPlaylistWindow();
        sc = new ScrobbleCloud();
        sc.loadTracklist(window.document);
    });

    it("should load a tracklist from html", function () {

        expect(sc.tracklist instanceof ScrobbleCloud.Tracklist).toBe(true);
    });

    it("should start the tracklist", function () {

        runs(function () {
            sc.INTERVAL = 1;
            spyOn(sc.tracklist, 'scan');
            sc.start();
        });
        waits(2);
        runs(function () {
            expect(sc.tracklist.scan).toHaveBeenCalled();
        });
    });

    it("should know if a track is ready to scrobble", function () {

        runs(function () {
            sc.SCROBBLE_INTERVAL = 1;
        });

        waits(2);

        runs(function () {

            expect(sc.shouldScrobble(track)).toBe(true);
        });
    });

    it("should periodically try and scrobble", function () {

        runs(function () {
            spyOn(sc, 'scrobble').andCallThrough();
            sc.SCROBBLE_INTERVAL = 2;
            sc.INTERVAL = 1;
            sc.start()
        });

        waits(2);

        runs(function () {
            expect(sc.scrobble).toHaveBeenCalled();
        });
    });

    describe("When in possession of a scrobblable track", function () {

        beforeEach(function () {

            runs(function () {
                // created 1 second ago
                track.created = new Date(new Date().getTime() - 1000);
                track.scrobbled = false;
                spyOn(sc.tracklist, 'getCurrentTrack').andReturn(track);
                spyOn(track, 'scrobble').andCallThrough();
                sc.SCROBBLE_INTERVAL = 1;
                sc.INTERVAL = 1;
                sc.start();
            });
            waits(2);
        });

        it("should mark it as scrobbled", function () {

            expect(track.scrobbled).toBeTruthy();
        });

        it("shouldn't try and scrobble a track twice", function () {

            runs(function () {
                sc.stop();
                sc.start();
            });
            waits(2);
            runs(function () {
                expect(track.scrobble.callCount).toBe(1);
            });
        });
    });

});
