// ==UserScript==
// @name		Disable Confluence Editor (TinyMCE) Keyboard Shortcuts
// @author              Dave Miller (github: dtsurfer13)
// @namespace	        about:blank
// @version             1.0.0
// @description		disable keyboard shortcuts for Confluence editor:  https://jira.atlassian.com/browse/CONF-21908  
//
// Use match for non-extension version
//@match        	https://confluence.mycompany.com/*
// ==/UserScript==

// ::Instructions::
//
// Edit "matches" list in manifest.json to reflect the confluence server URL(s) for
// which you want this userscript to be enabled.

function main() {
    // is there an editor?
    if ( typeof(tinyMCE) == "object") {
	// is it active?
    //:DEBUG: alert("found it");
	var ae = tinyMCE.activeEditor;
	// replace shortcuts object with emptyness:
	(ae) ? ae.shortcuts={} : undefined;
   }
}

setTimeout(function(){
    var script = document.createElement('script');
    script.appendChild(document.createTextNode('('+ main + ') ();'));
    (document.body || document.head || document.documentElement).appendChild(script);
    }, 5000);

main();

// For Posterity:  None of the following work for the editor-in-iframe:
//
// setTimeout( function(){ main(); }, 5000);
//
// main();
//
// document.addEventListener("DOMContentLoaded", function() {
//   main();
// });
//
// DEBUG version of last line:
//      (ae) ? ae.shortcuts={} : alert("no hit");
