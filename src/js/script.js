function navFunction() {
    var x = document.getElementById("navListId");
    if (x.className === "navlist") {
        x.className += " responsive";
    } else {
        x.className = "navlist";
    }
}
