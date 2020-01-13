function myFunction() {
  var x = document.getElementById("banner-sh");
  if (x.className === "navbar") {
    x.className += "responsive";
  } else {
    x.className = "navbar";
  }
}