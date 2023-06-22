import { initiate } from "./initiate"

function navigaton() {
  if (!document.location.pathname.startsWith('/watch')) {
    return;
  }
  initiate()
}

// youtube navigation detection
// https://stackoverflow.com/questions/34077641/how-to-detect-page-navigation-on-youtube-and-modify-its-appearance-seamlessly
document.addEventListener('yt-navigate-finish', navigaton);
if (document.body) navigaton();
else document.addEventListener('DOMContentLoaded', navigaton);