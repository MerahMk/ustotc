let dropDownList = document.getElementById("drop-down-list");
let navBarToggler = document.getElementById("navigation-toggle");

navBarToggler.addEventListener("click", function() {
    dropDownList.classList.toggle("active");
    navBarToggler.classList.toggle("toggle");
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("activeacc");

        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}