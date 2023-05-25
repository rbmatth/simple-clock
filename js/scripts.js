const documentElement = document.documentElement;
const timeElement = document.getElementById("time");
const openFullscreenElement = document.getElementById("openFullscreen");
const closeFullscreenElement = document.getElementById("closeFullscreen");
const turnOnDarkModeElement = document.getElementById("turnOnDarkMode");
const turnOffDarkModeElement = document.getElementById("turnOffDarkMode");

function openFullscreen() {
  openFullscreenElement.style.display = "none";
  closeFullscreenElement.style.display = "inline";
  if (documentElement.requestFullscreen) {
    documentElement.requestFullscreen();
  } else if (documentElement.webkitRequestFullscreen) {
    /* Safari */
    documentElement.webkitRequestFullscreen();
  } else if (documentElement.msRequestFullscreen) {
    /* IE11 */
    documentElement.msRequestFullscreen();
  }
}

function closeFullscreen() {
  openFullscreenElement.style.display = "inline";
  closeFullscreenElement.style.display = "none";
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    /* IE11 */
    document.msExitFullscreen();
  }
}

function turnOnDarkMode() {
  turnOnDarkModeElement.style.display = "none";
  turnOffDarkModeElement.style.display = "inline";
  document.body.classList.add("dark");
}

function turnOffDarkMode() {
  turnOnDarkModeElement.style.display = "inline";
  turnOffDarkModeElement.style.display = "none";
  document.body.classList.remove("dark");
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  while (true) {
    const time = new Date().toLocaleTimeString("en-us", {
      hour12: true,
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
    });
    timeElement.innerText = time.replace(/ [AP]M$/, "");
    await delay(1000);
  }
}

main();
