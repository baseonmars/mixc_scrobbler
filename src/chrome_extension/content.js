(function () {
    if (/mixcloud.com/.test(location.host)) {
        var sc = new ScrobbleCloud();
        sc.loadPlaylistWindow(document.body);
        sc.start();
    }
});