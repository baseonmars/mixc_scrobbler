Introduction
------------

Chrome extension for scanning a mixcloud page and scrobbling tracks as they play.

I'm going to try and keep the main engine library and vm agnostic so it should be 
easy to create a firefox, opera, (etc...) extension.

Building the extension
----------------------

The build script is written to run with node.js, issuing the following command inside the
root dir will create a ./build directory and transfer all the required files there. If the
directory doesn't exist, it's created.

	$node ./util/build.js

Running the tests
-----------------

The tests are written to run against [jasmine-node] [jn] and require [jsdom] [jd] to run.

  [jn]: https://github.com/mhevery/jasmine-node
  [jd]: https://github.com/tmpvar/jsdom

You can run the tests from the root dir like so:

	$jasmine-node spec

TODO
----

1. Actually scrobble
2. Scrobble the mix name after half the tracks are played
3. Only scrobble music tracks?
4. Estimate song length and set that as scrobble point
    - Check if track being replaced has passed scrobble threshold.

LICENCE
-------

Copyright (C) 2011 by Dan Etherington (dan@baseonmars.co.uk)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
