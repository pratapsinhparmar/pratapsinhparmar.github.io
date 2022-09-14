function myFunction() {
    var x = document.getElementById("my-navbar-all");
    if (x.className === "navbar-all") {
        x.className += " responsive";
    } else {
        x.className = "navbar-all";
    }
}