function login() {
    var usernameCorrect = "aqua";
    var passwordCorrect = "pp";

    var usernameInput = document.getElementById("User").value;
    var passwordInput = document.getElementById("Password").value;
    var User = document.getElementById("User");
    var Password = document.getElementById("Password");

    if (usernameInput === usernameCorrect && passwordInput === passwordCorrect) {
        window.location.replace("https://aquafoxy9182.github.io/cute%20chatbox/scripts/html/chat.html");
    } else {
        document.getElementById("User").value = "";
        document.getElementById("Password").value = "";
        User.classList.add("UserPasswordAnimate");
        Password.classList.add("UserPasswordAnimate");
        
        // < van het internet >
        User.classList.remove('UserPasswordAnimate');
        void User.offsetWidth;  // This forces reflow
        User.classList.add('UserPasswordAnimate');

        Password.classList.remove('UserPasswordAnimate');
        void Password.offsetWidth;  // This forces reflow
        Password.classList.add('UserPasswordAnimate');
        // < /van het inernet >
       
        setTimeout(function() {
            alert("incorect :(");
        }, 100);
            
    }
}
