function login() {
    var usernameCorrect = "aqua";
    var passwordCorrect = "pp";

    var usernameInput = document.getElementById("User").value;
    var passwordInput = document.getElementById("Password").value;

    if (usernameInput === usernameCorrect && passwordInput === passwordCorrect) {
        window.location.replace("https://aquafoxy9182.github.io/cute%20chatbox/scripts/html/chat.html");
    } else {
        document.getElementById("User").value = "";
        document.getElementById("Password").value = "";
    }
}