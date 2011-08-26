(function () {
    var loaded = false;
    var interval = setInterval( function () {
        console.log("trying to load scrobbler");
        if (loaded) {
            clearInterval(interval);
            return;
        }

        if (document.getElementById("cloudcast-sections-table")) {
            console.log("starting scrobbler");
            sc = new MixCScrobbler();
            sc.loadTracklist(document.body);
            sc.start();
            loaded = true;
        }
    }, 5000);
}());
