function adaugareMembru()
{
    var nume = document.getElementById('name').value;
    var prenume = document.getElementById('prenume').value;
    var email = document.getElementById('email').value;
    var telefon = document.getElementById('phone').value;
    var adresa = document.getElementById('address').value;
    var username = document.getElementById('username').value;
    var parola = document.getElementById('password').value;
    var organizatieSelect = document.getElementById('organizatie');
    var organizatie = organizatieSelect.options[organizatieSelect.selectedIndex].text;

    validareNume();
    validarePrenume();
    validareEmail();
    validareAdresa();
    validareTelefon();
    validareUsername();
    validarePassword();
    validareOrganizatie();

    if (validareNume() &&
        validarePrenume() &&
        validareEmail() &&
        validareAdresa() &&
        validareTelefon() &&
        validareUsername() &&
        validarePassword() &&
        validareOrganizatie ())

    {
        $('#addMem').attr('data-target', '#myModal')
        resetForm();
        return true;
    }
    else return false;

}

function resetForm()
{
    document.getElementById('name').value = "";
    document.getElementById('prenume').value = "";
    document.getElementById('email').value  = "";
    document.getElementById('phone').value = "";
    document.getElementById('address').value = "";
    document.getElementById('username').value = "";
    document.getElementById('password').value = "";
    document.getElementById('organizatie').selectedIndex = "organizație 1";
}
function validareNume()
{
    var nume = document.getElementById('name').value;

    if (nume === "" || nume.length<3)
    {
        document.getElementById('name').style.borderColor = "red";
        return false;
    }

    document.getElementById('name').style.borderColor = "#d6d6d6";
    return true;
}

function validarePrenume()
{
    var prenume = document.getElementById('prenume').value;

    if (prenume === "" || prenume.length<3)
    {
        document.getElementById('prenume').style.borderColor = "red";
        return false;
    }

    document.getElementById('prenume').style.borderColor = "#d6d6d6";
    return true;
}

function validareEmail()
{
    var email = document.getElementById('email').value;
    var regx_mail = /^([a-zA-Z0-9]+[a-zA-Z0-9._%-]*@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,4})$/;
    if(email.search(regx_mail)==-1)
    {
        document.getElementById('email').style.borderColor = "red";
        return false;
    }

    document.getElementById('email').style.borderColor = "#d6d6d6";
    return true;
}

function validareTelefon()
{
    var telefon = document.getElementById('phone').value;
    var regx_telefon=/^[0-9]\d{9}$/;
    if(telefon.search(regx_telefon)==-1)
    {
        document.getElementById('phone').style.borderColor = "red";
        return false;
    }

    document.getElementById('phone').style.borderColor = "#d6d6d6";
    return true;
}

function validareAdresa()
{
    var adresa = document.getElementById('address').value;
    var regx_adresa = /^[a-zA-Z\s\d\/.]{3,30}\d[a-zA-Z\s\d\/]*$/;
    if(adresa.search(regx_adresa)==-1)
    {
        document.getElementById('address').style.borderColor = "red";
        return false;
    }

    document.getElementById('address').style.borderColor = "#d6d6d6";
    return true;
}
function validareUsername()
{
    var username = document.getElementById('username').value;

    if (username === "" || username.length<3)
    {
        document.getElementById('username').style.borderColor = "red";
        return false;
    }

    document.getElementById('username').style.borderColor = "#d6d6d6";
    return true;
}

function validarePassword()
{
    var password = document.getElementById('password').value;

    if (password === "" || password.length<5)
    {
        document.getElementById('password').style.borderColor = "red";
        return false;
    }

    document.getElementById('password').style.borderColor = "#d6d6d6";
    return true;
}
function validareOrganizatie()
{
    var organizatieSelect = document.getElementById('organizatie');
    var organizatie = organizatieSelect.options[organizatieSelect.selectedIndex].text;

    if (organizatie === "" )
    {
        document.getElementById('organizatie').style.borderColor = "red";
        return false;
    }

    document.getElementById('organizatie').style.borderColor = "#d6d6d6";
    return true;
}

document.addEventListener("DOMContentLoaded", function() {

    document.getElementById('name').oninvalid = function(e) {
        e.target.setCustomValidity("");
        if (!e.target.validity.valid) {
            e.target.setCustomValidity("Numele trebuie introdus !");
        }
    };

    document.getElementById('prenume').oninvalid = function(e) {
        e.target.setCustomValidity("");
        if (!e.target.validity.valid) {
            e.target.setCustomValidity("Prenumele trebuie introdus !");
        }
    };

    document.getElementById('email').oninvalid = function(e) {
        e.target.setCustomValidity("");
        if (!e.target.validity.valid) {
            e.target.setCustomValidity("E-mailul trebuie introdus !");
        }
    };

    document.getElementById('phone').oninvalid = function(e) {
        e.target.setCustomValidity("");
        if (!e.target.validity.valid) {
            e.target.setCustomValidity("Telefonul trebuie introdus !");
        }
    };

    document.getElementById('address').oninvalid = function(e) {
        e.target.setCustomValidity("");
        if (!e.target.validity.valid) {
            e.target.setCustomValidity("Adresa trebuie introdusa !");
        }
    };

    document.getElementById('username').oninvalid = function(e) {
        e.target.setCustomValidity("");
        if (!e.target.validity.valid) {
            e.target.setCustomValidity("Numele de utilizator trebuie introdus !");
        }
    };

    document.getElementById('password').oninvalid = function(e) {
        e.target.setCustomValidity("");
        if (!e.target.validity.valid) {
            e.target.setCustomValidity("Parola trebuie introdusa !");
        }
    };
});