// ==UserScript==
// @name         Voz thread overview
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Overview thread in voz /f
// @author       https://github.com/dangsonbk
// @match        https://next.voz.vn/f/*
// @homepage     https://github.com/dangsonbk/voz-tampermonkey-scripts
// @supportURL   https://github.com/dangsonbk/voz-tampermonkey-scripts
// @updateURL    https://raw.githubusercontent.com/dangsonbk/voz-tampermonkey-scripts/master/thread-overview.js
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

    var CSS = '\
  .tooltip--preview .tooltip-content-inner {overflow: auto !important; max-height: 500px} \n \
  .tooltip--preview .tooltip-content {width: 1000px;} \n \
  .tooltip--preview .tooltip-content-inner .tooltip-content-cover {background: transparent;}\n \
          ';
    addGlobalStyle(CSS);
})();
