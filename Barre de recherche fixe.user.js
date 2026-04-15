// ==UserScript==
// @name         Barre de recherche fixe | Knifos
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Barre de recherche fixe
// @match        https://www.jeuxvideo.com/*
// @grant        none
// @author       Knifos
// @icon         https://ibb.co/9kkgP0Xx
// ==/UserScript==

(function() {
    'use strict';

    const style = document.createElement('style');
    style.innerHTML = `
        .buttonsNavbar__sticky {
            position: relative !important;
            top: 0 !important;
        }

        .buttonsNavbar {
            background-color: var(--header-background-color);
        }
    `;

    document.head.appendChild(style);
})();

/* Script de Knifos */
