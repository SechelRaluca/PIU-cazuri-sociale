function adaugaCazSocial() {
    var numeCazSocial = document.getElementById('numeCazSocial').value.length;
    var detaliiCazSocial = document.getElementById('detaliiCazSocial').value.length;

    if (numeCazSocial > 0 && detaliiCazSocial > 0 && $('#imageLoader').get(0).files.length !== 0) {
        toastr.info('Cazul social a fost adăugat cu succes!');
        document.getElementById('numeCazSocial').value = "";
        document.getElementById('detaliiCazSocial').value = "";
        document.getElementById('imageLoader').value = "";
        $('#modalAdaugaCazSocial').modal('hide');
        return true;
    }
    else {
        return false;
    }
}

document.addEventListener("DOMContentLoaded", function () {

    document.getElementById('numeCazSocial').oninvalid = function (e) {
        e.target.setCustomValidity("");
        if (!e.target.validity.valid) {
            e.target.setCustomValidity("Numele cazului trebuie introdus !");
        }
    };

    document.getElementById('imageLoader').oninvalid = function (e) {
        e.target.setCustomValidity("");
        if (!e.target.validity.valid) {
            e.target.setCustomValidity("Imaginea trebuie introdusă!");
        }
    };


    document.getElementById('detaliiCazSocial').oninvalid = function (e) {
        e.target.setCustomValidity("");
        if (!e.target.validity.valid) {
            e.target.setCustomValidity("Detaliile trebuie introduse !");
        }
    };
});
