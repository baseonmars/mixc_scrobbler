(function () {
    if (/mixcloud.com/.test(location.host)) {
        var sc = new MixCScrobbler();
        sc.loadPlaylistWindow(document.body);
        sc.start();
    }
});
