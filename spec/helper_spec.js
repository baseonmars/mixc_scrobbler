var html = require('./trackhtml.js');
beforeEach(function () {

loadPlaylistWindow = function () {

    var jsdom, doc;
    jsdom  = require("jsdom").jsdom,
    doc = jsdom(html.trackhtml, null, { 
        features: {
        QuerySelector: true }
    });
    // global
    return doc.createWindow();
};

});

afterEach(function () {

    delete this.loadPlaylistWindow
});
