window.onload = function () {
  chrome.tabs.query({ currentWindow: true, active: true },
    function (urltabe) {
      let copiedurl = document.getElementById("copiedurl");
      if (urltabe.length > 0) {
        copiedurl.innerHTML = urltabe[0].url;
        copiedurl.select();
        document.execCommand("copy");
        document.getElementById(
          "response"
        ).innerHTML = "You copied the link".toUpperCase();
      } else {
        document.getElementById(
          "response"
        ).innerHTML = "Link was not copied".toUpperCase();
      }
  });
};
