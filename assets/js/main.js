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
      delay: 100
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
    $('.materialboxed').materialbox();
    // Models
    $('.modal-trigger').leanModal();
    // Parallax
    $('.parallax').parallax();
    // Pushpin
    // Scrollfire
    // Scrollspy
    // Sidenav
    // Tabs
    $('ul.tabs').tabs();
    // Transitions
    // Waves

  }); // end of document ready
}(jQuery)); // end of jQuery name space

// fix tabs below nav on scroll
var tabs = $(".tabs");
var scrolled = "tabs-scrolled";
var header = $('header').height();

$(window).scroll(function () {
  'use strict';
  if ($(this).scrollTop() > header) {
    tabs.addClass(scrolled);
  } else {
    tabs.removeClass(scrolled);
  }
});