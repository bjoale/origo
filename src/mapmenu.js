/* ========================================================================
 * Copyright 2016 Mälardalskartan
 * Licensed under BSD 2-Clause (https://github.com/malardalskartan/mdk/blob/master/LICENSE.txt)
 * ======================================================================== */
"use strict";

var $ = require('jquery');
var viewer = require('./viewer');
var utils = require('./utils');

var $menuButton, $closeButton, $mapMenu;

var symbolSize = 20;
var styleSettings;

function init() {
    styleSettings = viewer.getStyleSettings();
    var el = utils.createButton({
        text: 'Meny',
        id: 'o-mapmenu-button',
        cls: 'o-mapmenu-button-true',
        iconCls: 'o-icon-fa-bars',
        src: 'css/svg/fa-icons.svg#fa-bars',
        tooltipText: 'Meny',
        tooltipPlacement: 'west'
    });
    $('#o-map').append(el);
    $menuButton = $('#o-mapmenu-button button');

    var menuEl = '<div id="o-mapmenu">' +
                    '<div class="o-block">' +
                      '<ul id="o-menutools">' +
                        '<li></li>' +
                      '</ul>'
                    '</div>' +
                  '</div>';
    $('#o-map').append(menuEl);
    $mapMenu = $('#o-mapmenu');

    var closeButton = utils.createButton({
        id: 'o-mapmenu-button-close',
        cls: 'o-no-boxshadow',
        iconCls: 'o-icon-menu-fa-times',
        src: 'css/svg/fa-icons.svg#fa-times',
        tooltipText: 'Stäng meny',
        tooltipPlacement: 'west'
    });
    $('#o-menutools').append(closeButton);
    $closeButton = $('#o-mapmenu-button-close');

    bindUIActions();
    // addLegend(viewer.getGroups());
}
function bindUIActions() {
    $menuButton.on('touchend click', function(e) {
      	toggleMenu();
        $menuButton.blur();
        e.preventDefault();
    });
    $closeButton.on('click', function(e) {
      	toggleMenu();
        $closeButton.blur();
        e.preventDefault();
    });
}
function toggleMenu() {
    if($mapMenu.hasClass('o-mapmenu-show')){
      $mapMenu.removeClass('o-mapmenu-show');
      $menuButton.removeClass('o-mapmenu-button-false');
      $menuButton.addClass('o-mapmenu-button-true');
    }
    else {
      $mapMenu.addClass('o-mapmenu-show');
      $menuButton.removeClass('o-mapmenu-button-true');
      $menuButton.addClass('o-mapmenu-button-false');
    }
}
function getTarget() {
    return $mapMenu;
}

module.exports.init = init;
module.exports.toggleMenu = toggleMenu;
module.exports.getTarget = getTarget;
