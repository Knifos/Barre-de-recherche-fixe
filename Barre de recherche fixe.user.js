// ==UserScript==
// @name         Barre de recherche fixe | Knifos
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Barre de recherche fixe
// @match        https://www.jeuxvideo.com/*
// @updateURL    https://raw.githubusercontent.com/Knifos/Barre-de-recherche-fixe/raw/refs/heads/main/Barre%20de%20recherche%20fixe.user.js
// @downloadURL  https://raw.githubusercontent.com/Knifos/Barre-de-recherche-fixe/raw/refs/heads/main/Barre%20de%20recherche%20fixe.user.js
// @grant        none
// @author       Knifos
// @icon         https://i.ibb.co/B553kJDh/loupe-knifos.png
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
