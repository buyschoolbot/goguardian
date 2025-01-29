document.getElementById('execute').addEventListener('click', function() {
    chrome.runtime.sendMessage({ action: 'fetchAndExecute' });
  });
  