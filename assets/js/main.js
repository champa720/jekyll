/*global $, jQuery*/
(function ($) {
  'use strict';
  $(function () {

    // Components
    // Badges
    // Buttons
    // Breadcrumbs
    // Cards
    // Chips
    // Collections
    // Footer
    // Forms
    $('select').material_select();
    // Icons
    // Navbar
    $('.button-collapse').sideNav({
      menuWidth: 240, // Default is 240
      edge: 'left',
      closeOnClick: false
    });
    $('.dropdown-button').dropdown({
      hover: true,
      belowOrigin: true,
      constrain_width: false
    });
    // Pagination
    // Preloader

    // JavaScript
    // Collapsible
    $('.collapsible').collapsible({
      accordion : false
    });
    // Dialogs
    $('.tooltipped').tooltip({
      delay: 25
    });
    // Dropdown
    // Media
    $('.slider').slider({
      full_width: true,
      indicators: true,
      transition: 1200,
      intervel: 36000,
      height: 460
    });
    // Models
    $('.modal-trigger').leanModal();
    // Parallax
    $('.parallax').parallax();
    // Pushpin
    // Scrollfire
    // Scrollspy
    // Sidenav
    // Tabs
    // Transitions
    // Waves

  }); // end of document ready
}(jQuery)); // end of jQuery name space