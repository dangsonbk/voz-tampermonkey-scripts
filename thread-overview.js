// ==UserScript==
// @name         Voz thread overview
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Overview thread in voz /f
// @author       https://github.com/dangsonbk
// @match        https://next.voz.vn/f/*
// @updateURL    https://gist.githubusercontent.com/dangsonbk/d4a4324d35906633b7d62c746b7932b5/raw
// @grant        none
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

(function() {
    'use strict';
    addGlobalStyle('.tooltip--preview .tooltip-content-inner { overflow: auto !important; max-height: 500px}');
    addGlobalStyle('.tooltip--preview .tooltip-content { width: 1000px; }');
    addGlobalStyle('.tooltip--preview .tooltip-content-inner .tooltip-content-cover { background: transparent; }');
})();
