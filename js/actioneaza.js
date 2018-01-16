function validateSum(sumaDeDonat) {
    var sumaDeDonatCazului = parseInt(document.getElementById(sumaDeDonat).value, 10);

    if (isNaN(parseInt(document.getElementById(sumaDeDonat).value, 10))) {
        //toastr.error('Câmpul numeric trebuie completat!');
        //document.getElementById(sumaDeDonat).focus();
        document.getElementById(sumaDeDonat).style.borderColor = "red";
        return false;
    }

    if (sumaDeDonatCazului <= 0) {
        //toastr.error('Introduceţi o valoare pozitivă nenulă!');
        document.getElementById(sumaDeDonat).value = "";
        //document.getElementById(sumaDeDonat).focus();
        document.getElementById(sumaDeDonat).style.borderColor = "red";
        return false;
    }

    document.getElementById(sumaDeDonat).style.borderColor = "#d6d6d6";
    return true;
}

function validateLastName(nume) {
    var lastName = document.getElementById(nume);
    if (lastName.value.search(/[^a-zA-Z]+/) === -1) {
        if (lastName.value.length < 3) {
            //toastr.error('Lungimea câmpului trebuie să fie mai mare sau egală cu 3!');
            //lastName.focus();
            lastName.style.borderColor = "red";
            return false;
        } else {
            lastName.style.borderColor = "#d6d6d6";
            return true;
        }
    } else {
        //toastr.error('Câmpul trebuie să conţină doar litere!');
        //lastName.focus();
        lastName.style.borderColor = "red";
        return false;
    }
}

function validateFirstName(prenume) {
    var firstName = document.getElementById(prenume);
    if (firstName.value.search(/[^a-zA-Z]+/) === -1) {
        if (firstName.value.length < 3) {
            //toastr.error('Lungimea câmpului trebuie să fie mai mare sau egală cu 3!');
            //firstName.focus();
            firstName.style.borderColor = "red";
            return false;
        } else {
            firstName.style.borderColor = "#d6d6d6";
            return true;
        }
    } else {
        //toastr.error('Câmpul trebuie să conţină doar litere!');
        //firstName.focus();
        firstName.style.borderColor = "red";
        return false;
    }
}

function validatePhoneNumber(telefon) {
    var phoneNumber = document.getElementById(telefon);
    if (!/^\d{10}$/.test(phoneNumber.value)) {
        //toastr.error("Numărul de telefon nu respectă formatul nnnn-nnnnnn (4-6)");
        //phoneNumber.focus();
        phoneNumber.style.borderColor = "red";
        return false;
    } else {
        phoneNumber.style.borderColor = "#d6d6d6";
        return true;
    }
}

function validateEmail(mail) {
    var email = document.getElementById(mail);
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        email.style.borderColor = "#d6d6d6";
        return true;
    }
    //toastr.error("Adresa de email nu este validă!");
    //email.focus();
    email.style.borderColor = "#red";
    return false;
}

function donate(frecventa1, frecventa2, suma, nume, prenume, telefon, email, buton, popup) {
    var flag = 0;

    if (!validateSum(suma)) {
        flag = 1;
    }

    if (!validateLastName(nume)) {
        flag = 1;
    }

    if (!validateFirstName(prenume)) {
        flag = 1;
    }

    if (!validatePhoneNumber(telefon)) {
        flag = 1;
    }

    if (!validateEmail(email)) {
        flag = 1;
    }

    if (!$(frecventa1).prop('checked') && !$(frecventa2).prop('checked')) {
        flag = 1;
    }

    if (flag == 1) {
        //toastr.error("Verificaţi câmpurile formularului şi completaţile corespunzător pentru a efectua donaţia!");
        return false;
    } else {
        //$(buton).attr('data-target', popup);
        // $(buton).attr('data-dismiss', 'modal');
        resetFieldsDonatePopup(frecventa1, frecventa2, suma, nume, prenume, telefon, email, buton, popup);
        $('#donateModal1').modal('hide');
        setTimeout(function () {
            $('#modalPlata').modal('show');
        }, 500);

        return true;
    }
}

function disablePopup(buton) {
    $(buton).attr('data-target', "");
    $(buton).attr('data-dismiss', "");
}

function resetFieldsDonatePopup(frecventa1, frecventa2, suma, nume, prenume, telefon, email) {
    $(frecventa1).attr('checked', false);
    $(frecventa2).attr('checked', false);
    document.getElementById(suma).value = "";
    document.getElementById(nume).value = "";
    document.getElementById(prenume).value = "";
    document.getElementById(telefon).value = "";
    document.getElementById(email).value = "";
}


function resetFieldsCardPopup(cardNumber, expirationDate, cardVerificationNumber) {
    document.getElementById(cardNumber).value = "";
    document.getElementById(expirationDate).value = "";
    document.getElementById(cardVerificationNumber).value = "";
}

function pay(cardNumber, expirationDate, cardVerificationNumber, buton) {
    var flag = 0;

    if (!validateCardNumber(cardNumber)) {
        flag = 1;
    }

    if (!isValid(expirationDate)) {
        flag = 1;
    }

    if (!validateCardVerificationNumber(cardVerificationNumber)) {
        flag = 1;
    }

    if (flag == 1) {
        //toastr.error("Verificaţi câmpurile formularului şi completaţile corespunzător pentru a efectua plata!");
        return false;
    } else {
        $(buton).attr('data-dismiss', 'modal');
        resetFieldsCardPopup(cardNumber, expirationDate, cardVerificationNumber);
        toastr.info('Donaţie efectuată cu succes!');
        alert('Donaţie efectuată cu succes!');
        return true;
    }
}

document.addEventListener("DOMContentLoaded", function () {

    document.getElementById('sumCase1').oninvalid = function (e) {
        e.target.setCustomValidity("");
        if (!e.target.validity.valid) {
            e.target.setCustomValidity("Suma trebuie introdusă !");
        }
    };

    document.getElementById('lastName1').oninvalid = function (e) {
        e.target.setCustomValidity("");
        if (!e.target.validity.valid) {
            e.target.setCustomValidity("Numele trebuie introdus!");
        }
    };


    document.getElementById('firstName1').oninvalid = function (e) {
        e.target.setCustomValidity("");
        if (!e.target.validity.valid) {
            e.target.setCustomValidity("Prenumele trebuie introdus !");
        }
    };

    document.getElementById('phoneNumber1').oninvalid = function (e) {
        e.target.setCustomValidity("");
        if (!e.target.validity.valid) {
            e.target.setCustomValidity("Telefonul trebuie introdus și să conțină 10 cifre !");
        }
    };

    document.getElementById('email1').oninvalid = function (e) {
        e.target.setCustomValidity("");
        if (!e.target.validity.valid) {
            e.target.setCustomValidity("Email-ul trebuie introdus !");
        }
    };

    document.getElementById('numarCard').oninvalid = function (e) {
        e.target.setCustomValidity("");
        if (!e.target.validity.valid) {
            e.target.setCustomValidity("Numarul cardului trebuie introdus !");
        }
    };

    document.getElementById('dataExpirare').oninvalid = function (e) {
        e.target.setCustomValidity("");
        if (!e.target.validity.valid) {
            e.target.setCustomValidity("Data trebuie introdusă și să fie în viitor!");
        }
    };


    document.getElementById('numarVerificareCard').oninvalid = function (e) {
        e.target.setCustomValidity("");
        if (!e.target.validity.valid) {
            e.target.setCustomValidity("CVC trebuie introdus !");
        }
    };

    $('#modalPlata').on('hide.bs.modal', function () {
        setTimeout(function () {
            $('#plataSucces').modal('show');
        }, 1000);
    });

    $('#modalPlata').on('shown.bs.modal', function () {
        alert('show event fired!');
    });
});

function platesteComanda() {

    var valid = true;
    if (document.getElementById("numarCard").value.length != 19) {
        document.getElementById('numarCard').style.borderColor = "red";
        valid = false;
    }
    else {
        document.getElementById('numarCard').style.borderColor = "#777";
    }

    if (!validareData())
        valid = false;

    if (document.getElementById("numarVerificareCard").value.length != 3) {
        document.getElementById('numarVerificareCard').style.borderColor = "red";
        valid = false;
    }
    else {
        document.getElementById('numarVerificareCard').style.borderColor = "red";
    }

    if (valid) {
        //$('#modalPlata').modal('hide');
        setTimeout(function () {
            $('#plataSucces').modal('show');
        }, 500);

        toastr.info('Plată efectuată cu succes!');

    }

}


function validateCardNr(event) {
    var el = document.getElementById("numarCard");

    if (el.value.length == 19 && event.keyCode != 8) {
        event.preventDefault();
    }
    else if ((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105)) {
        if (el.value.length == 4 || el.value.length == 9 || el.value.length == 14) {
            el.value += '-';
        }
    }
    else if (event.keyCode != 8) {
        event.preventDefault();
    }
}

function validareData() {
    var data = document.getElementById('dataExpirare').value;

    if (data === "") {
        document.getElementById('dataExpirare').style.borderColor = "red";

        return false;
    }

    var varData = new Date(data);
    var azi = new Date();
    azi.setHours(0, 0, 0, 0);

    if (varData <= azi) {
        document.getElementById('dataExpirare').style.borderColor = "red";

        return false;
    }

    document.getElementById('dataExpirare').style.borderColor = "#d6d6d6";
    return true;
}

function validateCVC(event) {

    var el = document.getElementById("numarVerificareCard");
    if (el.value.length == 3 && event.keyCode != 8) {
        event.preventDefault();
    }
    else if ((event.keyCode >= 48 && event.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105)) {
        //Good
    }
    else if (event.keyCode != 8) {
        event.preventDefault();
    }
}

