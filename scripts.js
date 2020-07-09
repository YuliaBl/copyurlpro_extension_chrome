window.onload = function() {
  chrome.tabs.query({ currentWindow: true, active: true },
    function copyUrl(tabs) {
    let urlCopy = document.getElementById('urltextarea');
    console.log(urlCopy);
      urlCopy.innerHTML = tabs[0].url;
      console.log(urlCopy.innerHTML);
      urlCopy.select();
      document.execCommand('copy');
  });
};