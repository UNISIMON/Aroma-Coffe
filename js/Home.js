function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navar") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }