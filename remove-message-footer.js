// ==UserScript==
// @name         Voz remove footer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Remove message footer in voz /t
// @author       https://github.com/dangsonbk
// @match        https://next.voz.vn/t/*
// @homepage     https://github.com/dangsonbk/voz-tampermonkey-scripts
// @supportURL   https://github.com/dangsonbk/voz-tampermonkey-scripts
// @updateURL    https://raw.githubusercontent.com/dangsonbk/voz-tampermonkey-scripts/master/remove-message-footer.js
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
    .message-footer {display: none;} \n \
          ';
    addGlobalStyle(CSS);
})();