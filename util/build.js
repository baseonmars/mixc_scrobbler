var fs = require('fs');
var util = require('util');

var SRC_PATH = "src/";
var DEST_PATH = "build/";

var js_files = [
    'MixCScrobbler.js',
    'Track.js',
    'TrackList.js',
    'chrome_extension/content.js'
];

var misc_files = [
    'chrome_extension/background.html',
    'chrome_extension/manifest.json'
];

var scripts = [];

for (var file in js_files) {

    var filename = js_files[file];
    console.info("Reading " + filename);

    scripts.push(fs.readFileSync(SRC_PATH+js_files[file]));
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
fs.writeSync(script_file, script);
fs.closeSync(script_file);

console.info("copying files");
for (file in misc_files) {
    var filename = misc_files[file];
    newFile = fs.createWriteStream(DEST_PATH + filename.replace('chrome_extension\/',''), {flags: "w"});     
    oldFile = fs.createReadStream(SRC_PATH + filename);
    oldFile.addListener("data", function(chunk) {
        console.log('data happened')
        newFile.write(chunk);
    });

    oldFile.addListener("close",function() {
        console.log('close happened')
        newFile.end();
    });

    newFile.once('open', function(fd){
        console.log('open happened')
        util.pump(oldFile, newFile);
    });     
}


