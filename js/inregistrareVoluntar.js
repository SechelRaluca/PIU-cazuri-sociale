function inregistrareVoluntar()
{
    var nume = document.getElementById('nume').value;
    var prenume = document.getElementById('prenume').value;
    var email = document.getElementById('email').value;
    var telefon = document.getElementById('telefon').value;
    var adresa = document.getElementById('adresa').value;
    var varstaSelect = document.getElementById('varsta');
    var varsta = varstaSelect.options[varstaSelect.selectedIndex].text;

    validareNume();
    validarePrenume();
    validareEmail();
    validareTelefon();
    validareAdresa();
    validareVarsta();

    if (validareNume() &&
        validarePrenume() &&
        validareEmail() &&
        validareTelefon() &&
        validareAdresa() &&
        validareVarsta())

    {
        $('#inreg').attr('data-target', '#myModal');
        resetForm();
        return true;
    }
    else return false;

}

function resetForm()
{
    document.getElementById('nume').value = "";
    document.getElementById('prenume').value = "";
    document.getElementById('email').value  = "";
    document.getElementById('telefon').value = "";
    document.getElementById('adresa').value = "";
    document.getElementById('varsta').selectedIndex = 18;
}
function validareNume()
{
    var nume = document.getElementById('nume').value;

    if (nume === "" || nume.length<3)
    {
        document.getElementById('nume').style.borderColor = "red";
        return false;
    }

    document.getElementById('nume').style.borderColor = "#d6d6d6";
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
    var telefon = document.getElementById('telefon').value;
    var regx_telefon=/^[0-9]\d{9}$/;
    if(telefon.search(regx_telefon)==-1)
    {
        document.getElementById('telefon').style.borderColor = "red";
        return false;
    }

    document.getElementById('telefon').style.borderColor = "#d6d6d6";
    return true;
}

function validareAdresa()
{
    var adresa = document.getElementById('adresa').value;
    var regx_adresa = /^[a-zA-Z\s\d\/.]{3,30}\d[a-zA-Z\s\d\/]*$/;
    if(adresa.search(regx_adresa)==-1)
    {
        document.getElementById('adresa').style.borderColor = "red";
        return false;
    }

    document.getElementById('adresa').style.borderColor = "#d6d6d6";
    return true;
}

function validareVarsta()
{
    var varstaSelect = document.getElementById('varsta');
    var varsta = varstaSelect.options[varstaSelect.selectedIndex].text;

    if (varsta === "" )
    {
        document.getElementById('varsta').style.borderColor = "red";
        return false;
    }

    document.getElementById('varsta').style.borderColor = "#d6d6d6";
    return true;
}

document.addEventListener("DOMContentLoaded", function() {

    document.getElementById('nume').oninvalid = function(e) {
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

    document.getElementById('telefon').oninvalid = function(e) {
        e.target.setCustomValidity("");
        if (!e.target.validity.valid) {
            e.target.setCustomValidity("Telefonul trebuie introdus !");
        }
    };

    document.getElementById('adresa').oninvalid = function(e) {
        e.target.setCustomValidity("");
        if (!e.target.validity.valid) {
            e.target.setCustomValidity("Adresa trebuie introdusa !");
        }
    };
});