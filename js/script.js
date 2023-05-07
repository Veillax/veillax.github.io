// Display popup for selecting preferred search engine on first visit
if (!localStorage.getItem("searchEngine")) {
  $('#searchModal').modal('show');
}

// Handle save button click for search engine selection
$('#saveSearchEngine').on('click', function() {
  var selectedEngine = $('#searchEngineSelect').val();
  localStorage.setItem('searchEngine', selectedEngine);
  $('#searchModal').modal('hide');
});

// Handle form submission
$('#search-form').on('submit', function(e) {
  e.preventDefault();

  var searchQuery = $('#search-query').val();
  var searchEngine = localStorage.getItem('searchEngine');

  // Redirect to the search engine's results page
  switch (searchEngine) {
    case 'bing':
      window.location.href = 'https://www.bing.com/search?q=' + encodeURIComponent(searchQuery);
      break;
    case 'duckduckgo':
      window.location.href = 'https://duckduckgo.com/?q=' + encodeURIComponent(searchQuery);
      break;
    case 'yahoo':
      window.location.href = 'https://search.yahoo.com/search?p=' + encodeURIComponent(searchQuery);
      break;
    default:
      // Default to Google if no preference is set or if preference is invalid
      window.location.href = 'https://www.google.com/search?q=' + encodeURIComponent(searchQuery);
  }
});
