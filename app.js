/* Siveye
 * A beautiful GUI for ping.
 *
 * ~/app.js - Application entry point
 * started at 14/09/2015, by leny@flatLand!
 */

"use strict";

var electron = require( "app" ),
    BrowserWindow = require( "browser-window" ),
    path = require( "path" ),
    lodash = require( "lodash" ),
    os = require( "os" );

electron.on( "window-all-closed", function() {
    return electron.quit();
} );

electron.on( "ready", function() {

    var oWindow = new BrowserWindow( {
        "id": lodash.uniqueId(),
        "title": "Siveye",
        "icon": path.resolve( __dirname, "assets/icon.png" ),
        "width": 640,
        "height": 480,
        "min-width": 640,
        "min-height": 480,
        "center": true,
        "standard-window": false,
        "resizable": true,
        "frame": false,
        "show": false
    } );

    oWindow.openDevTools();

    oWindow.loadUrl( "file://" + __dirname + "/app.html" );

} );
