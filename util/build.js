var fs = require('fs');
var util = require('util');

var SRC_PATH = "../src/";
var DEST_PATH = "../build/";

var files = [
    'ScrobbleCloud.js',
    'Track.js',
    'TrackList.js'
    ];

var scripts = [];

for (var file in files) {

    var filename = files[file];
    console.info("Reading " + filename);

    scripts.push(fs.readFileSync(SRC_PATH+files[file]));
}

console.info("Joining files");
var script = scripts.join();

try {
    console.info("Checking for '" + DEST_PATH + "'");
    fs.readdirSync(DEST_PATH);
} catch (e) {
    console.info("Failed to find '" + DEST_PATH + "', creating.");
    fs.mkdirSync(DEST_PATH, '0755');
}


script_file = fs.openSync(DEST_PATH + "scripts.js", 'w');
console.info("Writing javascript files to " + DEST_PATH + 'scripts.js');
fs.write(script_file, script);

