loadPlaylistWindow = function () {

    var jsdom, doc;
    jsdom  = require("jsdom").jsdom,
    doc = jsdom(html.trackhtml, null, { 
        features: {
        QuerySelector: true }
    }),
    // global
    window = doc.createWindow();
};
