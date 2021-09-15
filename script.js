// function to change login text when clicked
function changeLogin() {
    var x = document.getElementById("btn");
    if (x.innerHTML === "Login") {
        x.innerHTML = "Logout";
    } else {
        x.innerHTML = "Login";
    }
}

//function to remove button when clicked
function toggleButton() {
    var remBtn = document.getElementById("rem-btn");
    remBtn.classList.toggle("showed");
}

// function to show alert on like toggleButton
function likeButton() {
    alert("Ninja was liked");
}