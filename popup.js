document.getElementById('execute').addEventListener('click', function() {
    chrome.runtime.getBackgroundPage(function(backgroundPage) {
      backgroundPage.fetchAndExecuteScript(); // Calls the background function to fetch and run the script
    });
  });
  