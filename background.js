chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url.includes('google.com/search?q=')) {
      chrome.scripting.executeScript({
        target: {tabId: tabId},
        files: ['content_script.js']
      });
    }
  });
  