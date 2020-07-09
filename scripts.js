// window.onload = function() {
//   chrome.tabs.query({ currentWindow: true, active: true },
//     function copyUrl(tabs) {
//     let urlCopy = document.getElementById('urltextarea');
//     console.log(urlCopy);
//       urlCopy.innerHTML = tabs[0].url;
//       console.log(urlCopy.innerHTML);
//       urlCopy.select();
//       document.execCommand('copy');
//   });
// };


window.onload = function () {
  chrome.tabs.query(
    { currentWindow: true, active: true },
    async function copyUrl(tabs) {
      let urlCopy = document.getElementById('urltextarea');
      console.log(urlCopy);
      urlCopy.innerHTML = tabs[0].url;
      console.log(urlCopy.innerHTML);
      urlCopy.select();
      try {
        await navigator.clipboard.writeText(urlCopy.innerHTML);
      } catch (err) {
        console.error(err);
      }
    }
  );
};