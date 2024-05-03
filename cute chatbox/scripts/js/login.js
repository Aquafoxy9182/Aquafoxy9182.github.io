function login() {
    var usernameCorrect = "aqua";
    var passwordCorrect = "pp";

    var usernameInput = document.getElementById("User").value;
    var passwordInput = document.getElementById("Password").value;

    if (usernameInput === usernameCorrect && passwordInput === passwordCorrect) {
        window.location.replace("../html/chat.html");
    } else {
        document.getElementById("User").value = "";
        document.getElementById("Password").value = "";
    }
}