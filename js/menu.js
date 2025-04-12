const sparkle = document.querySelector('#home');

function toggleMenu() {
  var element = document.getElementById("overlay");
  if (element.style.height == "40vh") {
      element.style.height = "0";
      sparkle.style.color = "#333"
      sparkle.style.padding = "0";
      sparkle.style.rotate = "0";
  } else {
      element.style.height = "40vh";
      sparkle.style.color = "#88F2E8";
      sparkle.style.padding = "0 2em";
      sparkle.style.rotate = "135deg";
  }
}

// Code snippet found here: https://stackoverflow.com/questions/39023632/how-do-i-make-this-use-the-same-button-for-open-and-close
// THANKS :3

