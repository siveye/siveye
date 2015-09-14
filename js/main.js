/* Siveye
 * A beautiful GUI for ping.
 *
 * ~/js/main.js - Application Window entry point
 * started at 14/09/2015, by leny@flatLand!
 */

"use strict";

var remote = window.require( "remote" ),
    dialog = remote.require( "dialog" ),
    shell = remote.require( "shell" ),
    os = require( "os" ),
    lodash = require( "lodash" ),
    fs = require( "fs" ),
    path = require( "path" );

var oCurrentWindow = remote.getCurrentWindow(),
    fInitDom;

fInitDom = function() {
    switch( os.platform() ) {
        case "win32":
        case "win64":
            document.body.classList.add( "windows" );
            break;

        default:
            document.body.classList.add( os.platform() );
            break;
    }

    oCurrentWindow.on( "blur", function() {
        document.body.classList.remove( "enabled" );
    } );

    oCurrentWindow.on( "focus", function() {
        document.body.classList.add( "enabled" );
    } );

    document.getElementById( "close" ).addEventListener( "click", function() {
        return oCurrentWindow.close() && false;
    } );

    document.getElementById( "minify" ).addEventListener( "click", function() {
        return oCurrentWindow.minimize() && false;
    } );

    document.getElementById( "magnify" ).addEventListener( "click", function() {
        this.classList[ oCurrentWindow.isMaximized() ? "remove" : "add" ]( "enabled" );
        return ( oCurrentWindow.isMaximized() ? oCurrentWindow.unmaximize() : oCurrentWindow.maximize() ) && false;
    } );

    console.log( "DOM is ready." );

    oCurrentWindow.show();
};

fInitDom();
