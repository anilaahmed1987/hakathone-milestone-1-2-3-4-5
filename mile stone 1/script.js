var toggleButton = document.getElementById("toggle-skill");
var skill = document.getElementById("skill");
toggleButton.addEventListener("click", function () {
    if (skill.style.display === "none") {
        skill.style.display = "block";
    }
    else {
        skill.style.display = "none";
    }
});
