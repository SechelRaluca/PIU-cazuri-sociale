
function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username === "admin" && password === "admin") {
        window.location = "../admin/adminHomePage.html";
    } else if (username.search("member") !== -1 && password.search("member") !== -1) {
        window.location = "../member/memberHomePage.html"
    } else {
        if ((username === "admin" && password !== "admin") || (username.search("member") !== -1 && password.search("member") === -1)) {
            toastr.error("Parolă incorectă! Reîncercați!");
        }
        else if ((username !== "admin" && password === "admin") || (username.search("member") === -1 && password.search("member") !== -1)) {
            toastr.error("Utilizator incorect! Reîncercați!");
        }
        else {
            toastr.error("Utilizator si parolă incorecte!");
        }
        return false;
    }
}


