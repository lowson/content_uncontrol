// ==UserScript==
// @name           content_uncontrol
// @version        0.0.1
// @include        http*://nypost.com/
// @run-at         document-end
// ==/UserScript==

function exec(fn) {
    var script = document.createElement('script');
    script.setAttribute("type", "application/javascript");
    script.textContent = '(' + fn + ')();';
    document.body.appendChild(script); // run the script
    document.body.removeChild(script); // clean up
}
exec(_sp_.config.content_control_callback = function(){return true;});
