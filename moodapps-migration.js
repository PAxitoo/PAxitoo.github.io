/* StockUp legacy pages hold both languages; preserve fragment-selected English. */
(function () {
  "use strict";
  var page = document.body;
  var fragment = window.location.hash.toLowerCase();
  var english = fragment === "#en" || fragment.indexOf("#en-") === 0 || /-en$/.test(fragment);
  var destination = english ? page.getAttribute("data-moodapps-en") : page.getAttribute("data-moodapps-fr");
  if (destination) window.location.replace(destination);
}());
