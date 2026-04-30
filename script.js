document.addEventListener('DOMContentLoaded', function() {

  // FILTER TABS
  document.querySelectorAll('.filter-tab').forEach(function(tab) {
    tab.addEventListener('click', function() {
      document.querySelectorAll('.filter-tab').forEach(function(t) {
        t.classList.remove('active');
      });
      tab.classList.add('active');
    });
  });

  // SIDEBAR TABS
  document.querySelectorAll('.sidebar-tab').forEach(function(tab) {
    tab.addEventListener('click', function() {
      document.querySelectorAll('.sidebar-tab').forEach(function(t) {
        t.classList.remove('active');
      });
      tab.classList.add('active');
    });
  });

  // HAMBURGER MENU
  document.getElementById('hamburger').addEventListener('click', function() {
    var isOpen = document.getElementById('nav-menu').classList.toggle('open');
    document.querySelector('.nav-block').classList.toggle('open');
    this.setAttribute('aria-expanded', isOpen);
  });

  // SEARCH TOGGLE
  var searchToggle = document.getElementById('search-toggle');
  var searchDropdown = document.getElementById('search-dropdown');
  searchDropdown.classList.add('hidden');

  searchToggle.addEventListener('click', function() {
    searchDropdown.classList.toggle('hidden');
    if (!searchDropdown.classList.contains('hidden')) {
      document.getElementById('search-input').focus();
    }
  });

  document.addEventListener('click', function(e) {
    if (!searchToggle.contains(e.target) && !searchDropdown.contains(e.target)) {
      searchDropdown.classList.add('hidden');
    }
  });

});
